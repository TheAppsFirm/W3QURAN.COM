/**
 * Talk to Quran - Voice Conversational AI Feature
 * Ask questions about the Quran in Urdu, English, or Arabic
 * AI responds with relevant verses and explanations
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { Icons } from './Icons';
import { useAuth } from '../../hooks';

// Speech recognition setup (SSR-safe)
const SpeechRecognition = typeof window !== 'undefined'
  ? (window.SpeechRecognition || window.webkitSpeechRecognition)
  : null;

// Language options
const LANGUAGES = [
  { code: 'en-US', label: 'English', flag: '🇺🇸' },
  { code: 'ur-PK', label: 'اردو', flag: '🇵🇰' },
  { code: 'ar-SA', label: 'العربية', flag: '🇸🇦' },
];

// Animated listening visualizer
const ListeningVisualizer = ({ isListening }) => {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Outer pulsing rings */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-purple-400/30"
          style={{
            animation: isListening ? `ping ${1.5 + i * 0.3}s cubic-bezier(0, 0, 0.2, 1) infinite` : 'none',
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Center mic bubble */}
      <div
        className="absolute inset-4 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
          boxShadow: isListening
            ? '0 0 40px rgba(168, 85, 247, 0.5), 0 0 80px rgba(236, 72, 153, 0.3)'
            : '0 0 20px rgba(168, 85, 247, 0.3)',
          animation: isListening ? 'pulse 1s ease-in-out infinite' : 'none',
        }}
      >
        <Icons.Mic className="w-10 h-10 text-white" />
      </div>

      {/* Sound wave bars */}
      {isListening && (
        <div className="absolute inset-0 flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-white/40 rounded-full"
              style={{
                height: '20px',
                animation: `soundWave 0.5s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Message bubble component
const MessageBubble = ({ message, isUser, verses }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-sm'
            : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-bl-sm'
        }`}
      >
        {/* User icon or Quran icon */}
        <div className="flex items-start gap-2">
          {!isUser && (
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icons.Book className="w-3.5 h-3.5 text-white" />
            </div>
          )}
          <div className="flex-1">
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>

            {/* Verse references */}
            {verses && verses.length > 0 && (
              <div className="mt-2 pt-2 border-t border-white/20">
                <p className="text-xs text-white/60 mb-1">Referenced verses:</p>
                <div className="flex flex-wrap gap-1">
                  {verses.map((v, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/20"
                    >
                      {v.surah}:{v.ayah}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Credit display component
const CreditDisplay = ({ credits, tier }) => {
  const tierColors = {
    free: 'from-gray-400 to-gray-500',
    starter: 'from-blue-400 to-blue-500',
    premium: 'from-purple-400 to-purple-500',
    scholar: 'from-amber-400 to-amber-500',
    lifetime: 'from-emerald-400 to-emerald-500',
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
      <Icons.Zap className="w-4 h-4 text-yellow-400" />
      <span className="text-sm font-medium text-white">{credits}</span>
      <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${tierColors[tier] || tierColors.free} text-white capitalize`}>
        {tier}
      </span>
    </div>
  );
};

export default function TalkToQuran({ isVisible, onClose, darkMode }) {
  const { isAuthenticated, user, login } = useAuth();

  // State
  const [status, setStatus] = useState('idle'); // idle, listening, processing, responding, error
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [language, setLanguage] = useState('en-US');
  const [credits, setCredits] = useState({ balance: 0, tier: 'free' });
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  // Refs
  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);
  const audioRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Fetch credits on mount
  useEffect(() => {
    if (isAuthenticated && isVisible) {
      fetchCredits();
    }
  }, [isAuthenticated, isVisible]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const fetchCredits = async () => {
    try {
      const response = await fetch('/api/credits', {
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setCredits({
          balance: data.credits.balance,
          tier: data.credits.tier,
        });
      }
    } catch (err) {
      console.error('Failed to fetch credits:', err);
    }
  };

  const startListening = useCallback(() => {
    if (!SpeechRecognition) {
      setError('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setStatus('listening');
      setError(null);
    };

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      setInputText(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      if (event.error === 'not-allowed') {
        setError('Microphone access denied. Please allow microphone access in your browser settings.');
      } else {
        setError('Could not recognize speech. Please try again.');
      }
      setStatus('idle');
    };

    recognition.onend = () => {
      if (status === 'listening') {
        // If we have text, send it
        if (inputText.trim()) {
          sendMessage(inputText);
        } else {
          setStatus('idle');
        }
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [language, inputText, status]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  }, []);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // Check credits
    if (credits.balance <= 0) {
      setError('No credits remaining. Please upgrade your plan or purchase credits.');
      return;
    }

    // Add user message
    const userMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setStatus('processing');
    setError(null);

    try {
      const response = await fetch('/api/quran-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          message: text,
          conversationHistory: messages.map(m => ({
            role: m.role,
            content: m.content,
          })),
          language: language.split('-')[0],
          includeTTS: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.code === 'NO_CREDITS') {
          setError('No credits remaining. Please upgrade your plan.');
        } else if (data.code === 'AUTH_REQUIRED') {
          setError('Please login to use Talk to Quran.');
        } else {
          setError(data.error || 'Failed to get response. Please try again.');
        }
        setStatus('error');
        return;
      }

      // Add AI response
      const aiMessage = {
        role: 'assistant',
        content: data.response,
        verses: data.versesCited,
        audioUrl: data.audioUrl,
      };
      setMessages(prev => [...prev, aiMessage]);

      // Update credits
      if (data.credits) {
        setCredits({
          balance: data.credits.balance,
          tier: data.credits.tier,
        });
      }

      // Play audio if available
      if (data.audioUrl) {
        playAudio(data.audioUrl);
      }

      setStatus('responding');

    } catch (err) {
      console.error('Chat error:', err);
      setError('Network error. Please check your connection.');
      setStatus('error');
    }
  };

  const playAudio = (audioUrl) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    audio.onplay = () => setIsPlaying(true);
    audio.onended = () => {
      setIsPlaying(false);
      setStatus('idle');
    };
    audio.onerror = () => {
      setIsPlaying(false);
      setStatus('idle');
    };

    audio.play().catch(err => {
      console.error('Audio playback error:', err);
      setStatus('idle');
    });
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputText);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg h-[85vh] max-h-[700px] rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 50px rgba(168, 85, 247, 0.2)',
          border: '1px solid rgba(168, 85, 247, 0.3)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
              }}
            >
              <Icons.MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Talk to Quran</h2>
              <p className="text-xs text-white/60">Ask questions, get Quranic answers</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <span className="text-lg">{LANGUAGES.find(l => l.code === language)?.flag}</span>
                <Icons.ChevronDown className="w-4 h-4 text-white/60" />
              </button>

              {showLanguages && (
                <div className="absolute top-full right-0 mt-2 py-2 rounded-xl bg-slate-800 border border-white/20 shadow-xl z-10">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLanguages(false);
                      }}
                      className={`flex items-center gap-2 w-full px-4 py-2 hover:bg-white/10 transition-colors ${
                        language === lang.code ? 'bg-white/10' : ''
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm text-white">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Credits */}
            {isAuthenticated && (
              <CreditDisplay credits={credits.balance} tier={credits.tier} />
            )}

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Icons.X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Welcome message */}
          {messages.length === 0 && (
            <div className="text-center py-8">
              <div
                className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
                  boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)',
                }}
              >
                <Icons.Book className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </h3>
              <p className="text-white/60 text-sm max-w-xs mx-auto">
                Ask me anything about the Quran. I'll find relevant verses and explain their meanings.
              </p>

              {/* Example questions */}
              <div className="mt-6 space-y-2">
                <p className="text-xs text-white/40 uppercase tracking-wider">Try asking:</p>
                {[
                  'What does Quran say about patience?',
                  'نماز کے بارے میں قرآن کیا کہتا ہے؟',
                  'Tell me about Surah Al-Fatiha',
                ].map((q, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setInputText(q);
                      sendMessage(q);
                    }}
                    className="block w-full max-w-xs mx-auto px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 text-sm text-left transition-colors"
                  >
                    "{q}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          {messages.map((msg, i) => (
            <MessageBubble
              key={i}
              message={msg.content}
              isUser={msg.role === 'user'}
              verses={msg.verses}
            />
          ))}

          {/* Processing indicator */}
          {status === 'processing' && (
            <div className="flex justify-start mb-4">
              <div className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-bl-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
                    <Icons.Book className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-white/60"
                        style={{
                          animation: 'bounce 1s ease-in-out infinite',
                          animationDelay: `${i * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="mx-4 p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-200 text-sm">
              {error}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        {!isAuthenticated ? (
          <div className="p-4 border-t border-white/10">
            <button
              onClick={login}
              className="w-full py-3 rounded-xl font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
              }}
            >
              Login to Start Talking
            </button>
          </div>
        ) : (
          <div className="p-4 border-t border-white/10">
            {/* Listening mode */}
            {status === 'listening' && (
              <div className="text-center py-4">
                <ListeningVisualizer isListening={true} />
                <p className="text-white/60 text-sm mt-4">
                  {inputText || 'Listening...'}
                </p>
                <button
                  onClick={stopListening}
                  className="mt-4 px-6 py-2 rounded-full bg-red-500 text-white font-medium"
                >
                  Stop
                </button>
              </div>
            )}

            {/* Normal input mode */}
            {status !== 'listening' && (
              <div className="flex items-end gap-2">
                <div className="flex-1 relative">
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about the Quran..."
                    rows={1}
                    className="w-full px-4 py-3 pr-12 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    style={{ minHeight: '48px', maxHeight: '120px' }}
                    disabled={status === 'processing'}
                  />

                  {/* Voice button inside input */}
                  <button
                    onClick={startListening}
                    disabled={status === 'processing'}
                    className="absolute right-2 bottom-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-50"
                  >
                    <Icons.Mic className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Send button */}
                <button
                  onClick={() => sendMessage(inputText)}
                  disabled={!inputText.trim() || status === 'processing'}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-50"
                  style={{
                    background: inputText.trim()
                      ? 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)'
                      : 'rgba(255,255,255,0.1)',
                  }}
                >
                  <Icons.Send className="w-5 h-5 text-white" />
                </button>
              </div>
            )}

            {/* Audio playing indicator */}
            {isPlaying && (
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-purple-400 rounded-full"
                      style={{
                        height: '16px',
                        animation: 'soundWave 0.5s ease-in-out infinite',
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
                <span className="text-white/60 text-sm">Playing response...</span>
                <button
                  onClick={stopAudio}
                  className="text-red-400 hover:text-red-300"
                >
                  <Icons.Square className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes soundWave {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1.5); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
