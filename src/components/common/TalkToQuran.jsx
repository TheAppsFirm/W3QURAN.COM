/**
 * Talk to Quran - Immersive Bubble UI with Real-Time Voice
 * Beautiful glassmorphic bubbles with animations
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { Icons } from './Icons';
import { useAuth } from '../../contexts/AuthContext';
import { useLocale } from '../../context';
import logger from '../../utils/logger';

// Speech APIs (SSR-safe)
const SpeechRecognition = typeof window !== 'undefined'
  ? (window.SpeechRecognition || window.webkitSpeechRecognition)
  : null;

// Detect mobile devices where speech recognition may be unreliable
const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
const isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
const isSafari = typeof navigator !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || isIOS || isAndroid);

// Determine if we should use Whisper API fallback
// iOS Safari doesn't support Web Speech API at all
// Some Android browsers may also not support it
const useWhisperFallback = isIOS || (isSafari && !SpeechRecognition) || (!SpeechRecognition && isMobile);

// For text input default - only show on iOS where nothing works without Whisper
const speechMayNotWork = false; // We now have Whisper fallback, so voice always works

const SPEECH_LANG_MAP = { en: 'en-US', ur: 'ur-PK', ar: 'ar-SA' };

// Silence detection timeout (ms) - auto-send after user stops talking
const SILENCE_TIMEOUT = 1800;

// Sample questions for quick access - multilingual
const SAMPLE_QUESTIONS = {
  en: [
    { text: 'What does the Quran say about patience?', icon: '🤲' },
    { text: 'Tell me about Surah Al-Fatiha', icon: '📖' },
    { text: 'What are the benefits of prayer?', icon: '🕌' },
    { text: 'How to find peace in difficult times?', icon: '💫' },
  ],
  ur: [
    { text: 'صبر کے بارے میں قرآن کیا کہتا ہے؟', icon: '🤲' },
    { text: 'سورۃ الفاتحہ کے بارے میں بتائیں', icon: '📖' },
    { text: 'نماز کے فوائد کیا ہیں؟', icon: '🕌' },
    { text: 'مشکل وقت میں سکون کیسے ملے؟', icon: '💫' },
  ],
  ar: [
    { text: 'ماذا يقول القرآن عن الصبر؟', icon: '🤲' },
    { text: 'أخبرني عن سورة الفاتحة', icon: '📖' },
    { text: 'ما هي فوائد الصلاة؟', icon: '🕌' },
    { text: 'كيف أجد السلام في الأوقات الصعبة؟', icon: '💫' },
  ],
};

// Follow-up question templates based on conversation context
const FOLLOW_UP_TEMPLATES = {
  en: [
    { text: 'Tell me more about this topic', icon: '🔍' },
    { text: 'What other verses relate to this?', icon: '📖' },
    { text: 'How can I apply this in daily life?', icon: '💡' },
  ],
  ur: [
    { text: 'اس موضوع کے بارے میں مزید بتائیں', icon: '🔍' },
    { text: 'اس سے متعلق اور کون سی آیات ہیں؟', icon: '📖' },
    { text: 'روزمرہ زندگی میں اسے کیسے اپنائیں؟', icon: '💡' },
  ],
  ar: [
    { text: 'أخبرني المزيد عن هذا الموضوع', icon: '🔍' },
    { text: 'ما الآيات الأخرى المتعلقة بهذا؟', icon: '📖' },
    { text: 'كيف أطبق هذا في حياتي اليومية؟', icon: '💡' },
  ],
};

// Animated background with floating bubbles
const BubbleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large ambient bubbles */}
    {[...Array(8)].map((_, i) => (
      <div
        key={`big-${i}`}
        className="absolute rounded-full"
        style={{
          width: `${100 + Math.random() * 150}px`,
          height: `${100 + Math.random() * 150}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: `radial-gradient(circle at 30% 30%, ${
            ['rgba(139,92,246,0.15)', 'rgba(16,185,129,0.12)', 'rgba(236,72,153,0.12)', 'rgba(59,130,246,0.12)'][i % 4]
          }, transparent)`,
          animation: `floatBubble ${15 + Math.random() * 10}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
    {/* Small sparkle particles */}
    {[...Array(20)].map((_, i) => (
      <div
        key={`small-${i}`}
        className="absolute w-1 h-1 bg-white/40 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
);

// Central Quran bubble orb
const QuranBubble = ({ status, isPlaying, onClick, hasAccess, isAuthenticated, showTextInput }) => {
  const isActive = status !== 'idle';

  return (
    <div className="relative" onClick={onClick}>
      {/* Outer glow rings */}
      {isActive && [...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{
            transform: `scale(${1.2 + i * 0.25})`,
            background: `radial-gradient(circle, ${
              isPlaying ? 'rgba(16,185,129,0.2)' :
              status === 'listening' ? 'rgba(139,92,246,0.2)' : 'rgba(245,158,11,0.2)'
            }, transparent 70%)`,
            animation: `pulseRing ${1.5 + i * 0.3}s ease-out infinite`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}

      {/* Main bubble */}
      <div
        className="relative w-44 h-44 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
        style={{
          background: isPlaying
            ? 'linear-gradient(145deg, rgba(16,185,129,0.9), rgba(5,150,105,0.9))'
            : status === 'listening'
            ? 'linear-gradient(145deg, rgba(139,92,246,0.9), rgba(236,72,153,0.9))'
            : status === 'processing'
            ? 'linear-gradient(145deg, rgba(245,158,11,0.9), rgba(239,68,68,0.9))'
            : 'linear-gradient(145deg, rgba(20,184,166,0.8), rgba(13,148,136,0.9))',
          boxShadow: isActive
            ? `0 0 80px ${isPlaying ? 'rgba(16,185,129,0.5)' : 'rgba(139,92,246,0.5)'}, inset 0 0 60px rgba(255,255,255,0.1)`
            : '0 20px 60px rgba(0,0,0,0.3), inset 0 0 60px rgba(255,255,255,0.1)',
          animation: isActive ? 'bubblePulse 2s ease-in-out infinite' : 'bubbleFloat 4s ease-in-out infinite',
        }}
      >
        {/* Glass shine effect */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
          }}
        />

        {/* Inner content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {status === 'listening' ? (
            <div className="flex gap-1.5 items-end h-12">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 bg-white/90 rounded-full"
                  style={{
                    height: '100%',
                    animation: 'soundBar 0.35s ease-in-out infinite',
                    animationDelay: `${i * 0.07}s`,
                  }}
                />
              ))}
            </div>
          ) : status === 'processing' ? (
            <div className="w-14 h-14 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          ) : isPlaying ? (
            <div className="flex gap-2 items-end h-14">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 bg-white/90 rounded-full"
                  style={{
                    height: '100%',
                    animation: 'soundBar 0.45s ease-in-out infinite',
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <div className="text-4xl mb-1">📖</div>
              <div className="text-white/80 text-xs font-medium">
                {!isAuthenticated ? 'Tap to Sign In' : !hasAccess ? 'Tap to Upgrade' : showTextInput ? 'Type Below' : 'Tap to Talk'}
              </div>
            </div>
          )}
        </div>

        {/* Decorative inner bubbles */}
        <div
          className="absolute w-6 h-6 rounded-full bg-white/20 top-6 left-8"
          style={{ animation: 'miniBubble 3s ease-in-out infinite' }}
        />
        <div
          className="absolute w-4 h-4 rounded-full bg-white/15 top-10 right-10"
          style={{ animation: 'miniBubble 4s ease-in-out infinite', animationDelay: '1s' }}
        />
      </div>
    </div>
  );
};

// Message bubble with glassmorphic design
const MessageBubble = ({ text, isUser, isStreaming, verses, onVerseClick, onCopy, onShare }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    onCopy?.();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Quran Guidance',
          text: text,
        });
      } catch (e) {
        if (e.name !== 'AbortError') handleCopy();
      }
    } else {
      handleCopy();
    }
    onShare?.();
  };

  return (
    <div
      className={`mb-5 flex ${isUser ? 'justify-end' : 'justify-start'}`}
      style={{ animation: 'bubbleIn 0.4s ease-out' }}
    >
      <div
        className={`relative max-w-[85%] rounded-3xl px-5 py-4 ${
          isUser ? 'rounded-br-lg' : 'rounded-bl-lg'
        }`}
        style={{
          background: isUser
            ? 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(236,72,153,0.25))'
            : 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(20,184,166,0.15))',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${isUser ? 'rgba(139,92,246,0.3)' : 'rgba(16,185,129,0.25)'}`,
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        }}
      >
        {/* Bubble shine */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />

        {/* Avatar */}
        <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
              isUser
                ? 'bg-gradient-to-br from-purple-400 to-pink-500'
                : 'bg-gradient-to-br from-emerald-400 to-teal-500'
            }`}
            style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
          >
            {isUser ? (
              <Icons.Users className="w-4 h-4 text-white" />
            ) : (
              <span className="text-lg">📖</span>
            )}
          </div>

          <div className="flex-1">
            <p className="text-white/95 leading-relaxed whitespace-pre-wrap text-[15px]">
              {text}
              {isStreaming && (
                <span
                  className="inline-block w-2.5 h-5 ml-1 rounded-sm"
                  style={{
                    background: 'linear-gradient(to bottom, #10B981, #059669)',
                    animation: 'cursorBlink 0.8s ease-in-out infinite',
                  }}
                />
              )}
            </p>

            {/* Verse tags - Clickable */}
            {verses && verses.length > 0 && !isStreaming && (
              <div className="flex flex-wrap gap-2 mt-3">
                {verses.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => onVerseClick?.(v.surah, v.ayah)}
                    className="text-xs px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>📖</span>
                    <span>{v.surah}:{v.ayah}</span>
                    <Icons.ExternalLink className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>
            )}

            {/* Copy/Share buttons for assistant messages */}
            {!isUser && !isStreaming && (
              <div className="flex items-center gap-2 mt-3 pt-2 border-t border-white/10">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 transition-all"
                >
                  {copied ? (
                    <>
                      <Icons.Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Icons.Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 transition-all"
                >
                  <Icons.Share className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component
export default function TalkToQuran({ isVisible, onClose, onNavigate }) {
  const { isAuthenticated, user, login, isAdmin, isPremium } = useAuth();
  const { language, setLanguage } = useLocale();

  const hasAccess = isAdmin || isPremium;
  const speechLang = SPEECH_LANG_MAP[language] || 'en-US';
  const currentQuestions = SAMPLE_QUESTIONS[language] || SAMPLE_QUESTIONS.en;

  const [status, setStatus] = useState('idle');
  const [messages, setMessages] = useState([]);
  const [liveTranscript, setLiveTranscript] = useState('');
  const [streamingText, setStreamingText] = useState('');
  const [credits, setCredits] = useState({ balance: 0, tier: 'free' });
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [showTextInput, setShowTextInput] = useState(speechMayNotWork || !SpeechRecognition);
  const [followUpQuestions, setFollowUpQuestions] = useState([]);
  const [upgradeLoading, setUpgradeLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false); // For Whisper fallback recording
  const [recordingTime, setRecordingTime] = useState(0); // Recording duration display

  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);
  const streamingRef = useRef('');
  const silenceTimerRef = useRef(null);
  const audioRef = useRef(null);
  const lastTranscriptRef = useRef('');
  const streamingIntervalRef = useRef(null);
  const currentTranscriptRef = useRef(''); // Track latest transcript for silence detection
  const isSendingRef = useRef(false); // Prevent race conditions
  const mediaRecorderRef = useRef(null); // For Whisper fallback
  const audioChunksRef = useRef([]); // Store recorded audio chunks
  const recordingTimerRef = useRef(null); // Timer for recording duration

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingText, liveTranscript]);

  useEffect(() => {
    if (isAuthenticated && isVisible) fetchCredits();
  }, [isAuthenticated, isVisible]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      audioRef.current?.pause();
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
    };
  }, []);

  const fetchCredits = async () => {
    try {
      const res = await fetch('/api/credits', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setCredits({ balance: data.credits?.balance ?? 0, tier: data.credits?.tier ?? 'free' });
      }
    } catch (e) { console.error(e); }
  };

  const startListening = useCallback(() => {
    if (!SpeechRecognition) {
      logger.talkToQuran.error('Voice not supported', 'web_speech');
      setShowTextInput(true);
      setError('Voice not supported on this browser. Please type your question below.');
      return;
    }

    logger.talkToQuran.start('web_speech');
    setLiveTranscript('');
    setError(null);
    lastTranscriptRef.current = '';
    currentTranscriptRef.current = '';
    isSendingRef.current = false;

    const recognition = new SpeechRecognition();
    recognition.lang = speechLang;
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => setStatus('listening');

    recognition.onresult = (e) => {
      let finalText = '';
      let interimText = '';

      for (let i = 0; i < e.results.length; i++) {
        const transcript = e.results[i][0].transcript;
        if (e.results[i].isFinal) {
          finalText += transcript;
        } else {
          interimText += transcript;
        }
      }

      const fullText = finalText + interimText;
      setLiveTranscript(fullText);
      currentTranscriptRef.current = fullText; // Always track latest

      // Reset silence timer on any speech activity
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }

      // Start silence detection timer if we have any text
      if (fullText.trim()) {
        silenceTimerRef.current = setTimeout(() => {
          // Use the ref to get the latest transcript
          const textToSend = currentTranscriptRef.current.trim();
          if (textToSend && !isSendingRef.current) {
            isSendingRef.current = true;
            recognitionRef.current?.stop();
            sendMessage(textToSend);
            setLiveTranscript('');
            currentTranscriptRef.current = '';
          }
        }, SILENCE_TIMEOUT);
      }
    };

    recognition.onerror = (e) => {
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }
      if (e.error !== 'aborted' && e.error !== 'no-speech') {
        // Auto-switch to text input on mic error
        setShowTextInput(true);
        // Provide device-specific error messages
        let errorMsg = 'Mic error. Try typing instead.';
        if (isIOS) {
          errorMsg = 'Voice not supported on iOS. Please type below.';
        } else if (isAndroid && e.error === 'not-allowed') {
          errorMsg = 'Mic permission denied. Please allow microphone access or type below.';
        } else if (e.error === 'not-allowed') {
          errorMsg = 'Mic permission denied. Please allow access or type your question.';
        } else if (e.error === 'network') {
          errorMsg = 'Network error. Please check connection or type your question.';
        }
        setError(errorMsg);
      }
      if (!isSendingRef.current) {
        setStatus('idle');
      }
    };

    recognition.onend = () => {
      // Don't clear timer or reset status if we're in the middle of sending
      if (!isSendingRef.current) {
        if (silenceTimerRef.current) {
          clearTimeout(silenceTimerRef.current);
          silenceTimerRef.current = null;
        }
        setStatus('idle');
      }
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [speechLang]);

  const stopAndSend = useCallback(() => {
    // Clear silence timer to prevent double send
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
    isSendingRef.current = true;
    recognitionRef.current?.stop();
    const textToSend = currentTranscriptRef.current.trim() || liveTranscript.trim();
    if (textToSend) {
      sendMessage(textToSend);
    }
    setLiveTranscript('');
    currentTranscriptRef.current = '';
  }, [liveTranscript]);

  // ===== WHISPER FALLBACK FUNCTIONS =====
  // Used on iOS and devices where Web Speech API doesn't work

  const startRecording = useCallback(async () => {
    try {
      logger.talkToQuran.start('whisper_recording');
      setError(null);
      audioChunksRef.current = [];
      setRecordingTime(0);

      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 16000,
        }
      });

      // Create MediaRecorder with best available format
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/webm')
          ? 'audio/webm'
          : 'audio/mp4';

      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());

        // Clear recording timer
        if (recordingTimerRef.current) {
          clearInterval(recordingTimerRef.current);
          recordingTimerRef.current = null;
        }

        // Create blob from chunks
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });

        // Don't send if too short (less than 0.5 seconds of data)
        if (audioBlob.size < 5000) {
          setStatus('idle');
          setIsRecording(false);
          return;
        }

        // Send to Whisper API
        setStatus('processing');
        setLiveTranscript('Transcribing...');

        try {
          const formData = new FormData();
          formData.append('audio', audioBlob, 'recording.webm');
          formData.append('language', language);

          const response = await fetch('/api/transcribe', {
            method: 'POST',
            credentials: 'include',
            body: formData,
          });

          const data = await response.json();

          if (data.success && data.text) {
            logger.talkToQuran.transcribe(recordingTime);
            setLiveTranscript('');
            sendMessage(data.text);
          } else {
            logger.talkToQuran.error(data.error || 'Transcription failed', 'whisper');
            setError(data.error || 'Transcription failed. Try again or type your question.');
            setStatus('idle');
            setLiveTranscript('');
          }
        } catch (err) {
          console.error('[Whisper] Error:', err);
          logger.talkToQuran.error(err.message, 'whisper');
          setError('Failed to transcribe. Please try again or type your question.');
          setStatus('idle');
          setLiveTranscript('');
        }

        setIsRecording(false);
      };

      mediaRecorder.onerror = (e) => {
        console.error('[Recording] Error:', e);
        setError('Recording failed. Please try again.');
        setStatus('idle');
        setIsRecording(false);
        stream.getTracks().forEach(track => track.stop());
      };

      // Start recording
      mediaRecorder.start(100); // Collect data every 100ms
      setIsRecording(true);
      setStatus('listening');

      // Start recording timer
      recordingTimerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (err) {
      console.error('[Recording] Permission error:', err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setError('Microphone access denied. Please allow microphone permission or type your question.');
      } else {
        setError('Could not access microphone. Please type your question instead.');
      }
      setShowTextInput(true);
    }
  }, [language]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }
  }, []);

  const cancelRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }
    audioChunksRef.current = [];
    setIsRecording(false);
    setStatus('idle');
    setRecordingTime(0);
  }, []);

  // Unified start function - chooses between Web Speech and Whisper
  const handleStartVoice = useCallback(() => {
    if (useWhisperFallback) {
      startRecording();
    } else {
      startListening();
    }
  }, [startRecording, startListening]);

  // Unified stop function
  const handleStopVoice = useCallback(() => {
    if (useWhisperFallback || isRecording) {
      stopRecording();
    } else {
      stopAndSend();
    }
  }, [isRecording, stopRecording, stopAndSend]);

  // Unified cancel function - handles both Web Speech and Whisper
  const handleCancelVoice = useCallback(() => {
    if (useWhisperFallback || isRecording) {
      cancelRecording();
    } else {
      recognitionRef.current?.stop();
    }
    setLiveTranscript('');
    setStatus('idle');
  }, [isRecording, cancelRecording]);

  const sendMessage = async (text) => {
    if (!text.trim() || !hasAccess) return;

    // Keep isSendingRef true until we start processing (set by caller)
    // Clear previous suggestions
    setFollowUpQuestions([]);

    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setStatus('processing');

    // Now we're in processing state, safe to reset the sending flag
    isSendingRef.current = false;
    setStreamingText('');
    streamingRef.current = '';

    try {
      const res = await fetch('/api/quran-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          message: text,
          conversationHistory: messages.slice(-6).map(m => ({ role: m.role, content: m.content })),
          language,
          includeTTS: true, // Request high-quality OpenAI TTS
          voiceLanguage: language, // Send language for voice selection
        }),
      });

      // Handle non-JSON responses (like network errors)
      let data;
      try {
        data = await res.json();
      } catch (parseError) {
        console.error('[TalkToQuran] Response parse error:', parseError);
        setError('Server error. Please try again.');
        setStatus('idle');
        return;
      }

      if (!res.ok) {
        // Show detailed error if available
        const errorMsg = data.details
          ? `${data.error} (${data.details})`
          : data.error || 'Request failed';
        console.error('[TalkToQuran] API error:', data);
        setError(errorMsg);
        setStatus('idle');
        return;
      }

      const fullText = data.response;
      const words = fullText.split(' ');

      setStatus('speaking');
      setIsPlaying(true);

      // Play OpenAI TTS audio if available
      if (data.audioUrl) {
        playAudio(data.audioUrl, words.length);
      }

      // Stream text display synchronized with audio
      const wordDelay = data.audioUrl ? 120 : 70; // Slower if playing audio
      let i = 0;
      streamingIntervalRef.current = setInterval(() => {
        if (i < words.length) {
          streamingRef.current += (i > 0 ? ' ' : '') + words[i];
          setStreamingText(streamingRef.current);
          i++;
        } else {
          clearInterval(streamingIntervalRef.current);
          streamingIntervalRef.current = null;
          setMessages(prev => [...prev, { role: 'assistant', content: fullText, verses: data.versesCited }]);
          setStreamingText('');
          // Generate follow-up suggestions
          setFollowUpQuestions(generateFollowUps(fullText, data.versesCited));
          // If no audio, mark as done
          if (!data.audioUrl) {
            setIsPlaying(false);
            setStatus('idle');
          }
        }
      }, wordDelay);

      if (data.credits) setCredits({ balance: data.credits.balance, tier: data.credits.tier });
    } catch (e) {
      setError('Network error');
      setStatus('idle');
    }
  };

  const playAudio = (audioUrl, wordCount) => {
    // Stop any existing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    audio.onended = () => {
      setIsPlaying(false);
      setStatus('idle');
    };

    audio.onerror = () => {
      console.error('[TTS] Audio playback error');
      setIsPlaying(false);
      setStatus('idle');
    };

    audio.play().catch(err => {
      console.error('[TTS] Play error:', err);
      setIsPlaying(false);
      setStatus('idle');
    });
  };

  const stopSpeaking = () => {
    // Stop audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    // Stop text streaming
    if (streamingIntervalRef.current) {
      clearInterval(streamingIntervalRef.current);
      streamingIntervalRef.current = null;
    }
    // Finish current sentence if streaming
    if (streamingRef.current) {
      // Find the last sentence boundary
      const text = streamingRef.current;
      const lastPeriod = Math.max(text.lastIndexOf('.'), text.lastIndexOf('؟'), text.lastIndexOf('۔'));
      const finalText = lastPeriod > 0 ? text.substring(0, lastPeriod + 1) : text;
      if (finalText.trim()) {
        setMessages(prev => [...prev, { role: 'assistant', content: finalText.trim() }]);
      }
      setStreamingText('');
      streamingRef.current = '';
    }
    setIsPlaying(false);
    setStatus('idle');
  };

  // Direct Stripe checkout for premium
  const handleUpgrade = async () => {
    // Check if authenticated first
    if (!isAuthenticated) {
      login();
      return;
    }

    setUpgradeLoading(true);
    setError(null);

    try {
      console.log('[TalkToQuran] Starting Stripe checkout...');
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ product: 'premium_monthly' }), // Premium monthly
      });

      console.log('[TalkToQuran] Checkout response status:', res.status);

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error('[TalkToQuran] Checkout error:', errorData);

        if (res.status === 401) {
          setError('Please sign in to upgrade');
          login();
          return;
        }
        setError(errorData.error || `Checkout failed (${res.status})`);
        setUpgradeLoading(false);
        return;
      }

      const data = await res.json();
      console.log('[TalkToQuran] Checkout data:', data);

      if (data.url) {
        console.log('[TalkToQuran] Redirecting to:', data.url);
        window.location.href = data.url;
      } else {
        setError('No checkout URL received');
      }
    } catch (e) {
      console.error('[TalkToQuran] Checkout exception:', e);
      setError('Network error. Please check your connection.');
    }
    setUpgradeLoading(false);
  };

  const handleBubbleClick = () => {
    if (!isAuthenticated) {
      login();
      return;
    }
    if (!hasAccess) {
      handleUpgrade();
      return;
    }
    if (status === 'idle') startListening();
    else if (status === 'listening') stopAndSend();
    else if (isPlaying) stopSpeaking();
  };

  // Handle verse click - navigate to the verse in reader
  const handleVerseClick = (surah, ayah) => {
    onClose();
    onNavigate?.('reader', { surahId: surah, ayahNumber: ayah });
  };

  // Handle text input submission
  const handleTextSubmit = (e) => {
    e?.preventDefault();
    if (textInput.trim() && status === 'idle') {
      sendMessage(textInput.trim());
      setTextInput('');
      setShowTextInput(false);
    }
  };

  // Generate contextual follow-up questions based on last response
  const generateFollowUps = (response, versesCited) => {
    const templates = FOLLOW_UP_TEMPLATES[language] || FOLLOW_UP_TEMPLATES.en;
    const followUps = [];

    // Add template questions
    followUps.push(...templates);

    // If verses were cited, add verse-specific follow-up
    if (versesCited && versesCited.length > 0) {
      const firstVerse = versesCited[0];
      const verseFollowUp = language === 'ur'
        ? { text: `سورہ ${firstVerse.surah} آیت ${firstVerse.ayah} کی تفسیر`, icon: '📜' }
        : language === 'ar'
        ? { text: `تفسير سورة ${firstVerse.surah} آية ${firstVerse.ayah}`, icon: '📜' }
        : { text: `Explain Surah ${firstVerse.surah}:${firstVerse.ayah} in detail`, icon: '📜' };
      followUps.unshift(verseFollowUp);
    }

    return followUps.slice(0, 4); // Max 4 suggestions
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top, #1e1b4b 0%, #0f172a 50%, #020617 100%)',
        }}
      />
      <BubbleBackground />

      {/* Header */}
      <div className="relative z-10 p-4 safe-area-top">
        {/* Top row: close button, title, language */}
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <Icons.X className="w-5 h-5 text-white" />
          </button>

          <div className="text-center">
            <h1 className="text-lg font-bold text-white">Talk to Quran</h1>
          </div>

          {/* Language selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-3 py-2 rounded-full text-xs text-white bg-white/10 backdrop-blur-lg border border-white/20 cursor-pointer hover:bg-white/20 transition-all"
          >
            <option value="en" className="bg-slate-800 text-white">EN</option>
            <option value="ur" className="bg-slate-800 text-white">اردو</option>
            <option value="ar" className="bg-slate-800 text-white">عربي</option>
          </select>
        </div>

        {/* Credits bar - shown for authenticated users */}
        {isAuthenticated && (
          <div
            className="flex items-center justify-between px-4 py-2.5 rounded-2xl backdrop-blur-lg"
            style={{
              background: isAdmin
                ? 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(20,184,166,0.1))'
                : hasAccess
                ? 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.1))'
                : 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1))',
              border: `1px solid ${isAdmin ? 'rgba(16,185,129,0.3)' : hasAccess ? 'rgba(139,92,246,0.3)' : 'rgba(245,158,11,0.3)'}`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isAdmin
                    ? 'bg-gradient-to-br from-emerald-400 to-teal-500'
                    : hasAccess
                    ? 'bg-gradient-to-br from-purple-400 to-pink-500'
                    : 'bg-gradient-to-br from-amber-400 to-orange-500'
                }`}
              >
                <Icons.Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-lg">
                    {isAdmin ? '∞' : credits.balance}
                  </span>
                  <span className="text-white/60 text-xs">credits</span>
                </div>
                <span className={`text-xs ${isAdmin ? 'text-emerald-400' : hasAccess ? 'text-purple-400' : 'text-amber-400'}`}>
                  {isAdmin ? 'Admin' : credits.tier === 'premium' ? 'Premium' : credits.tier === 'scholar' ? 'Scholar' : credits.tier === 'starter' ? 'Starter' : 'Free'}
                </span>
              </div>
            </div>

            {/* Upgrade/Buy more button for non-admin */}
            {!isAdmin && (
              <button
                onClick={handleUpgrade}
                disabled={upgradeLoading}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                style={{
                  background: hasAccess
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                    : 'linear-gradient(135deg, #F59E0B, #EF4444)',
                  border: hasAccess ? '1px solid rgba(255,255,255,0.2)' : 'none',
                }}
              >
                {upgradeLoading ? '...' : hasAccess ? 'Buy More' : 'Upgrade'}
              </button>
            )}
          </div>
        )}

        {/* Not authenticated - show sign in prompt */}
        {!isAuthenticated && (
          <button
            onClick={login}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl backdrop-blur-lg text-white/80 hover:text-white transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.1))',
              border: '1px solid rgba(139,92,246,0.3)',
            }}
          >
            <Icons.Users className="w-4 h-4" />
            <span className="text-sm">Sign in to use Talk to Quran</span>
          </button>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {messages.length === 0 && !streamingText && status === 'idle' && !liveTranscript && (
            <div className="h-full flex flex-col items-center justify-center px-4">
              <QuranBubble status={status} isPlaying={isPlaying} onClick={handleBubbleClick} hasAccess={hasAccess} isAuthenticated={isAuthenticated} showTextInput={showTextInput} />
              <p className="mt-6 text-white/60 text-center max-w-xs text-sm">
                Ask anything about the Quran and receive guidance from Allah's words
              </p>

              {/* iOS/Safari voice hint */}
              {useWhisperFallback && hasAccess && !showTextInput && (
                <div className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/15 border border-purple-400/30">
                  <Icons.Info className="w-4 h-4 text-purple-300 flex-shrink-0" />
                  <span className="text-xs text-purple-200/80">
                    {isIOS ? 'Tap the bubble to start, tap Send when done' : 'Tap to start recording'}
                  </span>
                </div>
              )}

              {/* Sample Questions */}
              {hasAccess && (
                <div className="mt-8 w-full max-w-md">
                  <p className="text-white/40 text-xs text-center mb-3">Try asking:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {currentQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(q.text)}
                        className="flex items-center gap-2 px-4 py-3 rounded-2xl text-left text-sm text-white/80 hover:text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                      >
                        <span className="text-lg">{q.icon}</span>
                        <span className="line-clamp-2 text-xs">{q.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="max-w-2xl mx-auto">
            {messages.map((msg, i) => (
              <MessageBubble
                key={i}
                text={msg.content}
                isUser={msg.role === 'user'}
                verses={msg.verses}
                onVerseClick={handleVerseClick}
              />
            ))}
            {streamingText && <MessageBubble text={streamingText} isUser={false} isStreaming />}
            {status === 'listening' && liveTranscript && (
              <MessageBubble text={liveTranscript} isUser isStreaming />
            )}

            {/* Loading/Thinking Animation */}
            {status === 'processing' && !streamingText && (
              <div className="mb-5 flex justify-start" style={{ animation: 'bubbleIn 0.4s ease-out' }}>
                <div
                  className="relative rounded-3xl rounded-bl-lg px-5 py-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(20,184,166,0.15))',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(16,185,129,0.25)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-emerald-400 to-teal-500"
                      style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
                    >
                      <span className="text-lg">📖</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full" style={{ animation: 'typingDot 1.4s ease-in-out infinite' }} />
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full" style={{ animation: 'typingDot 1.4s ease-in-out infinite', animationDelay: '0.2s' }} />
                      <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full" style={{ animation: 'typingDot 1.4s ease-in-out infinite', animationDelay: '0.4s' }} />
                      <span className="ml-2 text-white/60 text-sm">Searching Quran...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Follow-up Suggestions */}
            {followUpQuestions.length > 0 && status === 'idle' && !streamingText && messages.length > 0 && (
              <div className="mb-5" style={{ animation: 'bubbleIn 0.4s ease-out' }}>
                <p className="text-white/40 text-xs mb-2 text-center">Continue the conversation:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {followUpQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        sendMessage(q.text);
                        setFollowUpQuestions([]);
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-2xl text-sm text-white/80 hover:text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.1))',
                        border: '1px solid rgba(139,92,246,0.2)',
                      }}
                    >
                      <span>{q.icon}</span>
                      <span className="text-xs">{q.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Error */}
        {error && (
          <div
            className="mx-4 mb-3 px-4 py-3 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(220,38,38,0.15))',
              border: '1px solid rgba(239,68,68,0.3)',
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-red-300 text-sm flex-1">{error}</span>
              <button
                onClick={() => setError(null)}
                className="text-red-300/60 hover:text-red-300 transition-colors"
              >
                <Icons.X className="w-4 h-4" />
              </button>
            </div>
            {error.includes('checkout') || error.includes('Checkout') || error.includes('upgrade') ? (
              <button
                onClick={handleUpgrade}
                disabled={upgradeLoading}
                className="mt-2 w-full py-2 rounded-xl text-sm font-medium text-white bg-red-500/30 hover:bg-red-500/40 transition-colors"
              >
                {upgradeLoading ? 'Loading...' : 'Try Again'}
              </button>
            ) : null}
          </div>
        )}

        {/* Controls */}
        <div className="relative z-10 p-4 md:p-6 pb-6 md:pb-8 flex flex-col items-center safe-area-bottom">
          {/* Text Input Mode */}
          {showTextInput && hasAccess && status === 'idle' && (
            <form onSubmit={handleTextSubmit} className="w-full max-w-md mb-4" style={{ animation: 'bubbleIn 0.3s ease-out' }}>
              <div
                className="flex items-center gap-2 rounded-2xl px-4 py-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder={language === 'ur' ? 'اپنا سوال لکھیں...' : language === 'ar' ? 'اكتب سؤالك...' : 'Type your question...'}
                  className="flex-1 bg-transparent text-white placeholder-white/40 text-sm outline-none"
                  dir={language === 'ur' || language === 'ar' ? 'rtl' : 'ltr'}
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={!textInput.trim()}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-40"
                  style={{
                    background: textInput.trim() ? 'linear-gradient(135deg, #10B981, #059669)' : 'rgba(255,255,255,0.1)',
                  }}
                >
                  <Icons.Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </form>
          )}

          {/* Status text */}
          {status !== 'idle' && (
            <div className="mb-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  status === 'listening' ? 'bg-purple-400' :
                  status === 'processing' ? 'bg-amber-400' : 'bg-emerald-400'
                }`}
                style={{ animation: 'pulse 1s ease-in-out infinite' }}
              />
              <span className="text-sm text-white/80">
                {status === 'listening' ? (
                  isRecording ? `Recording ${recordingTime}s...` : 'Listening...'
                ) :
                 status === 'processing' ? 'Thinking...' : 'Speaking...'}
              </span>
            </div>
          )}

          {/* iOS/Mobile hint for hold-to-record */}
          {useWhisperFallback && status === 'idle' && hasAccess && !showTextInput && (messages.length > 0 || streamingText || liveTranscript) && (
            <div className="mb-3 flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/15 border border-purple-400/30">
              <Icons.Info className="w-4 h-4 text-purple-300 flex-shrink-0" />
              <span className="text-xs text-purple-200/80">
                {isIOS ? 'Tap mic to start, tap again to send' : 'Tap mic to record your question'}
              </span>
            </div>
          )}

          {!isAuthenticated ? (
            <button
              onClick={login}
              className="relative w-full max-w-sm py-5 rounded-3xl font-bold text-white text-lg overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                boxShadow: '0 15px 50px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                <Icons.Users className="w-5 h-5" />
                Sign in to Start
              </span>
            </button>
          ) : !hasAccess ? (
            <button
              onClick={handleUpgrade}
              disabled={upgradeLoading}
              className="relative w-full max-w-sm py-5 rounded-3xl font-bold text-white text-lg overflow-hidden group disabled:opacity-70"
              style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
                boxShadow: '0 15px 50px rgba(245,158,11,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                {upgradeLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <Icons.Zap className="w-5 h-5" />
                    <span>Upgrade to Premium - $7/mo</span>
                  </>
                )}
              </span>
            </button>
          ) : messages.length > 0 || streamingText || liveTranscript ? (
            <div className="flex items-center justify-center gap-4">
              {/* Keyboard toggle button */}
              {status === 'idle' && (
                <button
                  onClick={() => setShowTextInput(!showTextInput)}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105"
                  style={{
                    background: showTextInput
                      ? 'linear-gradient(145deg, #10B981, #059669)'
                      : 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                  }}
                >
                  <Icons.Type className="w-5 h-5 text-white" />
                </button>
              )}

              {status === 'idle' && !showTextInput && (
                <button
                  onClick={handleStartVoice}
                  className="relative w-18 h-18 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
                  style={{
                    width: '72px',
                    height: '72px',
                    background: 'linear-gradient(145deg, #8B5CF6 0%, #EC4899 100%)',
                    boxShadow: '0 10px 40px rgba(139,92,246,0.5), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.1)',
                  }}
                >
                  <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
                  <Icons.Mic className="w-8 h-8 text-white relative z-10" />
                </button>
              )}

              {status === 'listening' && (
                <div className="flex items-center gap-6">
                  <button
                    onClick={handleCancelVoice}
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-105"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    }}
                  >
                    <Icons.X className="w-6 h-6 text-white/80" />
                  </button>
                  <button
                    onClick={handleStopVoice}
                    className="relative flex items-center justify-center transition-all hover:scale-105"
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'linear-gradient(145deg, #10B981 0%, #059669 100%)',
                      boxShadow: '0 10px 40px rgba(16,185,129,0.5), inset 0 2px 0 rgba(255,255,255,0.3)',
                      animation: 'bubblePulse 1.5s ease-in-out infinite',
                    }}
                  >
                    <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
                    <Icons.Send className="w-8 h-8 text-white relative z-10" />
                  </button>
                </div>
              )}

              {status === 'processing' && (
                <button
                  onClick={() => { setStatus('idle'); setError('Cancelled'); }}
                  className="relative flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'linear-gradient(145deg, #F59E0B 0%, #EF4444 100%)',
                    boxShadow: '0 10px 40px rgba(245,158,11,0.5), inset 0 2px 0 rgba(255,255,255,0.3)',
                  }}
                >
                  <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
                  <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin relative z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30 rounded-full">
                    <Icons.X className="w-6 h-6 text-white" />
                  </div>
                </button>
              )}

              {isPlaying && (
                <button
                  onClick={stopSpeaking}
                  className="relative flex items-center justify-center transition-all hover:scale-105"
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'linear-gradient(145deg, #10B981 0%, #059669 100%)',
                    boxShadow: '0 10px 40px rgba(16,185,129,0.5), inset 0 2px 0 rgba(255,255,255,0.3)',
                  }}
                >
                  <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
                  <Icons.Square className="w-7 h-7 text-white relative z-10" />
                </button>
              )}
            </div>
          ) : null}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes floatBubble {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.02); }
          50% { transform: translateY(-10px) translateX(-15px) scale(0.98); }
          75% { transform: translateY(-25px) translateX(5px) scale(1.01); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.02); }
        }
        @keyframes bubblePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes soundBar {
          0%, 100% { transform: scaleY(0.25); }
          50% { transform: scaleY(1); }
        }
        @keyframes miniBubble {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-5px) scale(1.1); opacity: 0.4; }
        }
        @keyframes bubbleIn {
          from { opacity: 0; transform: translateY(20px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-8px); opacity: 1; }
        }
        .safe-area-top { padding-top: env(safe-area-inset-top); }
        .safe-area-bottom { padding-bottom: env(safe-area-inset-bottom); }
      `}</style>
    </div>
  );
}
