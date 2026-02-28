/**
 * Talk to Quran - Modern AI Agent Chat Interface
 * Clean dark theme with teal accents, content-first design
 */

import { useState, useEffect, useRef, useCallback, memo, useMemo, lazy, Suspense } from 'react';
import { Icons } from './Icons';
import { useAuth } from '../../contexts/AuthContext';
import { useLocale } from '../../contexts';
import { useTranslation } from '../../contexts/LocaleContext';
import logger from '../../utils/logger';

const KidsPremiumGate = lazy(() => import('../kids/KidsPremiumGate'));

// Max messages to keep in state for performance
const MAX_MESSAGES = 50;
const STORAGE_KEY = 'w3quran_talk_history';

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
// Whisper recording: silence threshold & duration before auto-stop
const WHISPER_SILENCE_THRESHOLD = 15; // RMS level below which is "silence"
const WHISPER_SILENCE_DURATION = 2000; // ms of continuous silence to auto-stop

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

// Quran Book Avatar — dignified open book with Islamic geometric glow
// States: idle (gentle glow), listening (pulsing light), thinking (rotating rays), speaking (radiating noor)
const QuranBookIcon = memo(function QuranBookIcon({ size = 'sm', mood = 'idle' }) {
  const dim = size === 'lg' ? 48 : size === 'hero' ? 72 : 28;

  return (
    <div className="flex-shrink-0 relative" style={{ width: dim, height: dim }}>
      <svg viewBox="0 0 40 40" width={dim} height={dim} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`qb-cover-${size}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
          <linearGradient id={`qb-page-${size}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="100%" stopColor="#FEF3C7" />
          </linearGradient>
          <linearGradient id={`qb-glow-${size}`} x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer glow — stronger when active */}
        <circle cx="20" cy="20" r="18" fill="none" stroke={`url(#qb-glow-${size})`} strokeWidth="1" opacity={mood === 'idle' ? 0.3 : 0.7}>
          {mood !== 'idle' && (
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur={mood === 'thinking' ? '1.5s' : '2s'} repeatCount="indefinite" />
          )}
        </circle>

        {/* Book cover — teal with gold trim */}
        <rect x="8" y="9" width="24" height="22" rx="2.5" fill={`url(#qb-cover-${size})`} />
        <rect x="8" y="9" width="24" height="22" rx="2.5" fill="none" stroke="#D4A574" strokeWidth="0.5" opacity="0.5" />

        {/* Spine */}
        <line x1="20" y1="10" x2="20" y2="30" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />

        {/* Pages */}
        <rect x="10" y="11" width="9" height="18" rx="1" fill={`url(#qb-page-${size})`} opacity="0.95" />
        <rect x="21" y="11" width="9" height="18" rx="1" fill={`url(#qb-page-${size})`} opacity="0.95" />

        {/* Arabic-style text lines */}
        <g opacity="0.15" stroke="#78350F" strokeWidth="0.5" strokeLinecap="round">
          <line x1="11.5" y1="15" x2="17.5" y2="15" />
          <line x1="12" y1="17.5" x2="17" y2="17.5" />
          <line x1="11.5" y1="20" x2="17.5" y2="20" />
          <line x1="12.5" y1="22.5" x2="16.5" y2="22.5" />
          <line x1="22.5" y1="15" x2="28.5" y2="15" />
          <line x1="23" y1="17.5" x2="28" y2="17.5" />
          <line x1="22.5" y1="20" x2="28.5" y2="20" />
          <line x1="23.5" y1="22.5" x2="27.5" y2="22.5" />
        </g>

        {/* Islamic star ornament — center top */}
        <g transform="translate(20, 7)" opacity="0.6">
          <path d="M0,-2.5 L0.7,-0.7 L2.5,0 L0.7,0.7 L0,2.5 L-0.7,0.7 L-2.5,0 L-0.7,-0.7 Z" fill="#D4A574" opacity="0.7">
            {(mood === 'speaking' || mood === 'listening') && (
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
            )}
          </path>
        </g>

        {/* Noor (light) rays — visible when speaking or listening */}
        {(mood === 'speaking' || mood === 'listening') && (
          <g opacity="0.25">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <line
                key={i}
                x1="20" y1="20"
                x2={20 + 16 * Math.cos(angle * Math.PI / 180)}
                y2={20 + 16 * Math.sin(angle * Math.PI / 180)}
                stroke="#5EEAD4" strokeWidth="0.4" strokeLinecap="round"
              >
                <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" begin={`${i * 0.25}s`} />
              </line>
            ))}
          </g>
        )}

        {/* Thinking dots — below the book */}
        {mood === 'thinking' && (
          <g>
            {[15, 20, 25].map((cx, i) => (
              <circle key={i} cx={cx} cy="35" r="1.2" fill="#5EEAD4" opacity="0.5">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1s" repeatCount="indefinite" begin={`${i * 0.2}s`} />
              </circle>
            ))}
          </g>
        )}
      </svg>
    </div>
  );
});

// Wrapper that maps component status to avatar mood
const AiAvatar = ({ size = 'sm', status = 'idle', isPlaying = false }) => {
  const mood = isPlaying || status === 'speaking' ? 'speaking'
    : status === 'listening' ? 'listening'
    : status === 'processing' ? 'thinking'
    : 'idle';
  return <QuranBookIcon size={size} mood={mood} />;
};

// Message bubble — clean modern design
const MessageBubble = ({ text, isUser, isStreaming, verses, onVerseClick, onCopy, onShare, isRTL, labels }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    onCopy?.();
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Quran Guidance', text });
      } catch (e) {
        if (e.name !== 'AbortError') handleCopy();
      }
    } else {
      handleCopy();
    }
    onShare?.();
  };

  // RTL: flip alignment
  const userAlign = isRTL ? 'justify-start' : 'justify-end';
  const assistantAlign = isRTL ? 'justify-end' : 'justify-start';
  const userCorner = isRTL ? 'rounded-2xl rounded-bl-sm' : 'rounded-2xl rounded-br-sm';
  const assistantCorner = isRTL ? 'rounded-2xl rounded-br-sm' : 'rounded-2xl rounded-bl-sm';
  const aiBorder = isRTL ? 'border-r-2 border-teal-500' : 'border-l-2 border-teal-500';

  if (isUser) {
    return (
      <div
        className={`mb-4 flex ${userAlign}`}
        style={{ animation: 'messageSlideIn 0.3s ease-out both' }}
      >
        <div className={`max-w-[80%] ${userCorner} bg-violet-500/15 px-4 py-3`}>
          <p className="text-white/90 text-[15px] leading-relaxed whitespace-pre-wrap" dir="auto">
            {text}
            {isStreaming && (
              <span
                className="inline-block w-2 h-5 ml-1 rtl:ml-0 rtl:mr-1 rounded-sm bg-teal-400"
                style={{ animation: 'cursorBlink 0.8s ease-in-out infinite' }}
              />
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`mb-4 flex ${assistantAlign}`}
      style={{ animation: 'messageSlideIn 0.3s ease-out both' }}
    >
      <div className={`max-w-[80%] ${assistantCorner} ${aiBorder} px-4 py-3`} style={{ background: 'rgba(255,255,255,0.04)' }}>
        <div className={`flex items-start gap-2.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <AiAvatar status={isStreaming ? 'speaking' : 'idle'} isPlaying={isStreaming} />
          <div className="flex-1 min-w-0">
            <p className="text-white/90 text-[15px] leading-relaxed whitespace-pre-wrap" dir="auto">
              {text}
              {isStreaming && (
                <span
                  className="inline-block w-2 h-5 ml-1 rtl:ml-0 rtl:mr-1 rounded-sm bg-teal-400"
                  style={{ animation: 'cursorBlink 0.8s ease-in-out infinite' }}
                />
              )}
            </p>

            {/* Verse chips */}
            {verses && verses.length > 0 && !isStreaming && (
              <div className="flex flex-wrap gap-2 mt-3">
                {verses.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => onVerseClick?.(v.surah, v.ayah)}
                    className="text-xs px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 hover:bg-teal-500/20 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Icons.BookOpen className="w-3 h-3" />
                    <span>{v.surahName || `${v.surah}:${v.ayah}`}</span>
                    <Icons.ExternalLink className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>
            )}

            {/* Copy/Share */}
            {!isStreaming && (
              <div className="flex items-center gap-3 mt-3 pt-2 border-t border-white/[0.06]">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
                >
                  {copied ? (
                    <>
                      <Icons.Check className="w-3.5 h-3.5 text-teal-400" />
                      <span className="text-teal-400">{labels?.copied || 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Icons.Copy className="w-3.5 h-3.5" />
                      <span>{labels?.copy || 'Copy'}</span>
                    </>
                  )}
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
                >
                  <Icons.Share className="w-3.5 h-3.5" />
                  <span>{labels?.share || 'Share'}</span>
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
  const { t, isRTL } = useTranslation();

  const hasAccess = isAdmin || isPremium;
  const speechLang = SPEECH_LANG_MAP[language] || 'en-US';
  const currentQuestions = SAMPLE_QUESTIONS[language] || SAMPLE_QUESTIONS.en;

  // Load persisted messages from localStorage
  const loadStoredMessages = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed.slice(-MAX_MESSAGES);
      }
    } catch {}
    return [];
  };

  const [status, setStatus] = useState('idle');
  const [messages, setMessages] = useState(loadStoredMessages);
  const [liveTranscript, setLiveTranscript] = useState('');
  const [streamingText, setStreamingText] = useState('');
  const [credits, setCredits] = useState({ balance: 0, tier: 'free' });
  const [error, setError] = useState(null);
  const [lastFailedMessage, setLastFailedMessage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [showTextInput, setShowTextInput] = useState(speechMayNotWork || !SpeechRecognition);
  const [followUpQuestions, setFollowUpQuestions] = useState([]);
  const [showPremiumGate, setShowPremiumGate] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const streamingRef = useRef('');
  const silenceTimerRef = useRef(null);
  const audioRef = useRef(null);
  const lastTranscriptRef = useRef('');
  const streamingIntervalRef = useRef(null);
  const streamingRafRef = useRef(null);
  const currentTranscriptRef = useRef('');
  const isSendingRef = useRef(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recordingTimerRef = useRef(null);
  const abortControllerRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const silenceStartRef = useRef(null);
  const vadRafRef = useRef(null);
  const hasSpokenRef = useRef(false);

  // Payment result handling is centralized in App.jsx

  // Persist messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_MESSAGES)));
      } catch {}
    }
  }, [messages]);

  // Auto-scroll to bottom when new content
  useEffect(() => {
    if (!showScrollButton) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, streamingText, liveTranscript, showScrollButton]);

  // Scroll-to-bottom detection
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
      setShowScrollButton(distanceFromBottom > 100);
    };
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isAuthenticated && isVisible) fetchCredits();
  }, [isAuthenticated, isVisible]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      audioRef.current?.pause();
      if (silenceTimerRef.current) clearTimeout(silenceTimerRef.current);
      if (streamingIntervalRef.current) clearInterval(streamingIntervalRef.current);
      if (streamingRafRef.current) cancelAnimationFrame(streamingRafRef.current);
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
      if (vadRafRef.current) cancelAnimationFrame(vadRafRef.current);
      if (audioContextRef.current) audioContextRef.current.close().catch(() => {});
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      abortControllerRef.current?.abort();
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
      currentTranscriptRef.current = fullText;

      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }

      if (fullText.trim()) {
        silenceTimerRef.current = setTimeout(() => {
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
        setShowTextInput(true);
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

  const startRecording = useCallback(async () => {
    try {
      logger.talkToQuran.start('whisper_recording');
      setError(null);
      audioChunksRef.current = [];
      setRecordingTime(0);

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setError('Voice recording not supported on this browser. Please type your question instead.');
        setShowTextInput(true);
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 16000,
        }
      });

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
        stream.getTracks().forEach(track => track.stop());

        if (recordingTimerRef.current) {
          clearInterval(recordingTimerRef.current);
          recordingTimerRef.current = null;
        }

        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });

        if (audioBlob.size < 5000) {
          setStatus('idle');
          setIsRecording(false);
          return;
        }

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

      mediaRecorder.start(100);
      setIsRecording(true);
      setStatus('listening');

      recordingTimerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

      // Voice Activity Detection (VAD) — auto-stop after silence
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        audioContextRef.current = audioCtx;
        const source = audioCtx.createMediaStreamSource(stream);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 512;
        source.connect(analyser);
        analyserRef.current = analyser;
        silenceStartRef.current = null;
        hasSpokenRef.current = false;

        const dataArray = new Uint8Array(analyser.fftSize);

        const checkSilence = () => {
          if (!mediaRecorderRef.current || mediaRecorderRef.current.state !== 'recording') return;
          analyser.getByteTimeDomainData(dataArray);

          // Calculate RMS volume
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            const val = (dataArray[i] - 128) / 128;
            sum += val * val;
          }
          const rms = Math.sqrt(sum / dataArray.length) * 100;

          if (rms > WHISPER_SILENCE_THRESHOLD) {
            // User is speaking
            hasSpokenRef.current = true;
            silenceStartRef.current = null;
          } else if (hasSpokenRef.current) {
            // Silence detected after speech
            if (!silenceStartRef.current) {
              silenceStartRef.current = Date.now();
            } else if (Date.now() - silenceStartRef.current >= WHISPER_SILENCE_DURATION) {
              // Enough silence — auto-stop and send
              stopRecording();
              return;
            }
          }

          vadRafRef.current = requestAnimationFrame(checkSilence);
        };

        vadRafRef.current = requestAnimationFrame(checkSilence);
      } catch (vadErr) {
        // VAD setup failed — manual stop still works
        console.warn('[VAD] Could not set up silence detection:', vadErr);
      }

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
    if (vadRafRef.current) { cancelAnimationFrame(vadRafRef.current); vadRafRef.current = null; }
    if (audioContextRef.current) { audioContextRef.current.close().catch(() => {}); audioContextRef.current = null; }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }
  }, []);

  const cancelRecording = useCallback(() => {
    if (vadRafRef.current) { cancelAnimationFrame(vadRafRef.current); vadRafRef.current = null; }
    if (audioContextRef.current) { audioContextRef.current.close().catch(() => {}); audioContextRef.current = null; }
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

  // Unified cancel function
  const handleCancelVoice = useCallback(() => {
    if (useWhisperFallback || isRecording) {
      cancelRecording();
    } else {
      recognitionRef.current?.stop();
    }
    setLiveTranscript('');
    setStatus('idle');
  }, [isRecording, cancelRecording]);

  // Auto-listen after AI finishes speaking (conversational loop)
  const autoListenAfterResponse = useCallback(() => {
    // Small delay to feel natural, then start listening again
    setTimeout(() => {
      if (status === 'idle' && hasAccess) {
        handleStartVoice();
      }
    }, 800);
  }, [status, hasAccess, handleStartVoice]);

  const sendMessage = async (text) => {
    if (!text.trim() || !hasAccess) return;

    setError(null);
    setLastFailedMessage(null);
    setFollowUpQuestions([]);

    setMessages(prev => [...prev.slice(-(MAX_MESSAGES - 1)), { role: 'user', content: text }]);
    setStatus('processing');
    setStreamingText('');
    streamingRef.current = '';

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      // Use SSE streaming for real-time text
      const res = await fetch('/api/quran-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        signal: controller.signal,
        body: JSON.stringify({
          message: text,
          conversationHistory: messages.slice(-6).map(m => ({ role: m.role, content: m.content })),
          language,
          includeTTS: true,
          voiceLanguage: language,
          stream: true,
        }),
      });

      if (!res.ok) {
        let errorMsg = 'Request failed';
        try {
          const errData = await res.json();
          errorMsg = errData.details ? `${errData.error} (${errData.details})` : errData.error || errorMsg;
        } catch {}
        setError(errorMsg);
        setLastFailedMessage(text);
        setStatus('idle');
        return;
      }

      // Check if response is SSE stream
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('text/event-stream')) {
        // ── Real-time SSE streaming ──
        setStatus('speaking');
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            try {
              const evt = JSON.parse(line.slice(6));

              if (evt.type === 'token') {
                streamingRef.current += evt.content;
                setStreamingText(streamingRef.current);
              } else if (evt.type === 'done') {
                // Text streaming complete — finalize message
                const fullText = streamingRef.current;
                setMessages(prev => [...prev.slice(-(MAX_MESSAGES - 1)), {
                  role: 'assistant', content: fullText, verses: evt.versesCited,
                }]);
                setStreamingText('');
                streamingRef.current = '';
                setFollowUpQuestions(generateFollowUps(fullText, evt.versesCited));

                if (evt.credits) setCredits({ balance: evt.credits.balance, tier: evt.credits.tier });

                // Play TTS audio if available
                if (evt.audioUrl) {
                  setIsPlaying(true);
                  playAudio(evt.audioUrl);
                } else {
                  setIsPlaying(false);
                  setStatus('idle');
                  autoListenAfterResponse();
                }
              } else if (evt.type === 'error') {
                setError(evt.error);
                setStatus('idle');
              }
            } catch {}
          }
        }

        // If stream ended without a 'done' event, finalize
        if (streamingRef.current && !streamingText) {
          const fullText = streamingRef.current;
          setMessages(prev => [...prev.slice(-(MAX_MESSAGES - 1)), { role: 'assistant', content: fullText }]);
          setStreamingText('');
          streamingRef.current = '';
          setStatus('idle');
        }
      } else {
        // ── Fallback: non-streaming JSON response ──
        const data = await res.json();
        if (!data.success) {
          setError(data.error || 'Request failed');
          setLastFailedMessage(text);
          setStatus('idle');
          return;
        }

        const fullText = data.response;
        const words = fullText.split(' ');

        setStatus('speaking');
        setIsPlaying(true);

        if (data.audioUrl) {
          playAudio(data.audioUrl);
        } else {
          speakWithBrowserTTS(fullText);
        }

        // Animate words appearing
        let i = 0;
        let lastTime = performance.now();
        const wordDelay = data.audioUrl ? 80 : 40;

        const animateWords = (now) => {
          if (i < words.length) {
            if (now - lastTime >= wordDelay) {
              streamingRef.current += (i > 0 ? ' ' : '') + words[i];
              setStreamingText(streamingRef.current);
              i++;
              lastTime = now;
            }
            streamingRafRef.current = requestAnimationFrame(animateWords);
          } else {
            streamingRafRef.current = null;
            setMessages(prev => [...prev.slice(-(MAX_MESSAGES - 1)), { role: 'assistant', content: fullText, verses: data.versesCited }]);
            setStreamingText('');
            setFollowUpQuestions(generateFollowUps(fullText, data.versesCited));
            if (!data.audioUrl && !window.speechSynthesis?.speaking) {
              setIsPlaying(false);
              setStatus('idle');
              autoListenAfterResponse();
            }
          }
        };
        streamingRafRef.current = requestAnimationFrame(animateWords);

        if (data.credits) setCredits({ balance: data.credits.balance, tier: data.credits.tier });
      }
    } catch (e) {
      if (e.name === 'AbortError') return;
      setError(t('talkToQuran.networkError'));
      setLastFailedMessage(text);
      setStatus('idle');
    }
  };

  const speakWithBrowserTTS = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'ur' ? 'ur-PK' : language === 'ar' ? 'ar-SA' : 'en-US';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const langPrefix = utterance.lang.split('-')[0];
    const matchingVoice = voices.find(v => v.lang.startsWith(langPrefix));
    if (matchingVoice) utterance.voice = matchingVoice;

    utterance.onend = () => {
      setIsPlaying(false);
      setStatus('idle');
      autoListenAfterResponse();
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setStatus('idle');
    };

    window.speechSynthesis.speak(utterance);
  };

  const playAudio = (audioUrl, wordCount) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    if (!audioUrl || !audioUrl.startsWith('data:audio')) {
      console.log('[TTS] No valid audio URL, skipping playback');
      setIsPlaying(false);
      setStatus('idle');
      return;
    }

    try {
      const audio = new Audio();
      audioRef.current = audio;

      audio.oncanplaythrough = () => {
        audio.play().catch(err => {
          console.warn('[TTS] Autoplay blocked:', err.message);
          setIsPlaying(false);
          setStatus('idle');
        });
      };

      audio.onended = () => {
        setIsPlaying(false);
        setStatus('idle');
        autoListenAfterResponse();
      };

      audio.onerror = (e) => {
        console.error('[TTS] Audio error:', e);
        setIsPlaying(false);
        setStatus('idle');
      };

      audio.src = audioUrl;
      audio.load();
    } catch (err) {
      console.error('[TTS] Setup error:', err);
      setIsPlaying(false);
      setStatus('idle');
    }
  };

  const stopSpeaking = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (streamingIntervalRef.current) {
      clearInterval(streamingIntervalRef.current);
      streamingIntervalRef.current = null;
    }
    if (streamingRafRef.current) {
      cancelAnimationFrame(streamingRafRef.current);
      streamingRafRef.current = null;
    }

    if (streamingRef.current) {
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

  const handleUpgrade = () => {
    if (!isAuthenticated) {
      login();
      return;
    }
    setShowPremiumGate(true);
  };

  const handleClearHistory = () => {
    setMessages([]);
    setFollowUpQuestions([]);
    setStreamingText('');
    streamingRef.current = '';
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  const handleRetry = () => {
    if (lastFailedMessage) {
      setError(null);
      const msg = lastFailedMessage;
      setLastFailedMessage(null);
      sendMessage(msg);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowScrollButton(false);
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
    if (status === 'idle') handleStartVoice();
    else if (status === 'listening') handleStopVoice();
    else if (isPlaying) stopSpeaking();
  };

  const handleVerseClick = (surah, ayah) => {
    onClose();
    onNavigate?.('reader', { surahId: surah, ayahNumber: ayah });
  };

  const handleTextSubmit = (e) => {
    e?.preventDefault();
    if (textInput.trim() && status === 'idle') {
      sendMessage(textInput.trim());
      setTextInput('');
    }
  };

  const generateFollowUps = (response, versesCited) => {
    const templates = FOLLOW_UP_TEMPLATES[language] || FOLLOW_UP_TEMPLATES.en;
    const followUps = [];

    followUps.push(...templates);

    if (versesCited && versesCited.length > 0) {
      const firstVerse = versesCited[0];
      const verseFollowUp = language === 'ur'
        ? { text: `سورہ ${firstVerse.surah} آیت ${firstVerse.ayah} کی تفسیر`, icon: '📜' }
        : language === 'ar'
        ? { text: `تفسير سورة ${firstVerse.surah} آية ${firstVerse.ayah}`, icon: '📜' }
        : { text: `Explain Surah ${firstVerse.surah}:${firstVerse.ayah} in detail`, icon: '📜' };
      followUps.unshift(verseFollowUp);
    }

    return followUps.slice(0, 4);
  };

  if (!isVisible) return null;

  // Show empty state only when idle with no content
  const showEmptyState = messages.length === 0 && !streamingText && status === 'idle' && !liveTranscript;

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col ttq-root" style={{ background: '#0F172A' }}>
      <style>{`
        .ttq-root {
          padding-top: max(constant(safe-area-inset-top), 54px) !important;
          padding-top: max(env(safe-area-inset-top), 54px) !important;
        }
      `}</style>

      {/* ── Header ── */}
      <div
        className="relative z-10 flex items-center gap-3 px-3 py-2.5 flex-shrink-0"
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Back button - pill style */}
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 pl-2 pr-3 py-1.5 rounded-full transition-all active:scale-95"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <Icons.ArrowLeft className="w-4 h-4 text-white/60 rtl:rotate-180" />
          <span className="text-xs text-white/50 font-medium">{isRTL ? 'واپس' : 'Back'}</span>
        </button>

        {/* Center: title + credits */}
        <div className="flex-1 flex items-center justify-center gap-2">
          <AiAvatar status={status} isPlaying={isPlaying} />
          <h1 className="text-sm font-semibold text-white/90">{t('talkToQuran.title')}</h1>
          {isAuthenticated && hasAccess && (
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium"
              style={{
                background: isAdmin ? 'rgba(20,184,166,0.15)' : 'rgba(139,92,246,0.15)',
                border: `1px solid ${isAdmin ? 'rgba(20,184,166,0.25)' : 'rgba(139,92,246,0.25)'}`,
                color: isAdmin ? '#5EEAD4' : '#C4B5FD',
              }}
            >
              <Icons.Zap className="w-3 h-3" />
              {isAdmin ? '∞' : credits.balance}
            </span>
          )}
        </div>

        {/* Right: clear + language */}
        <div className="flex items-center gap-1">
          {messages.length > 0 && (
            <button
              onClick={handleClearHistory}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors"
              title={t('talkToQuran.clearHistory') || 'Clear history'}
            >
              <Icons.Trash className="w-3.5 h-3.5 text-white/35" />
            </button>
          )}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-2 py-1 rounded-lg text-[11px] text-white/50 bg-transparent border border-white/8 cursor-pointer hover:border-white/15 transition-colors outline-none"
          >
            <option value="en" className="bg-slate-900 text-white">EN</option>
            <option value="ur" className="bg-slate-900 text-white">اردو</option>
            <option value="ar" className="bg-slate-900 text-white">عربي</option>
          </select>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex flex-col overflow-hidden">
        {/* Messages scroll area */}
        <div className="flex-1 overflow-y-auto" ref={messagesContainerRef}>
          {showEmptyState ? (
            /* ── Empty state ── */
            <div className="h-full flex flex-col items-center justify-center px-6 pb-4">
              <AiAvatar size="hero" status={status} isPlaying={isPlaying} />
              <h2 className="mt-4 text-xl font-semibold text-white">{t('talkToQuran.title')}</h2>
              <p className="mt-1.5 text-sm text-white/45 text-center max-w-xs">
                {t('talkToQuran.welcome')}
              </p>

              {/* Sample questions */}
              <div className="mt-8 w-full max-w-md space-y-2">
                {currentQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => hasAccess && sendMessage(q.text)}
                    disabled={!hasAccess}
                    className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl text-left transition-colors ${
                      hasAccess
                        ? 'hover:bg-white/[0.04] active:scale-[0.99]'
                        : 'opacity-40 cursor-not-allowed'
                    }`}
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                    dir="auto"
                  >
                    <span className="text-lg flex-shrink-0">{q.icon}</span>
                    <span className="text-sm text-white/70 leading-snug">{q.text}</span>
                  </button>
                ))}
              </div>

              {/* Auth CTA in empty state */}
              {!isAuthenticated && (
                <button
                  onClick={login}
                  className="mt-6 flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-500/15 border border-violet-500/20 text-white/80 hover:bg-violet-500/20 transition-colors"
                >
                  <Icons.Users className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('talkToQuran.signInPrompt') || 'Sign in to start talking'}</span>
                </button>
              )}

              {/* Upgrade CTA in empty state */}
              {isAuthenticated && !hasAccess && (
                <button
                  onClick={handleUpgrade}
                  className="mt-6 flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500/15 border border-amber-500/20 text-white/80 hover:bg-amber-500/20 transition-colors"
                >
                  <Icons.Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium">
                    {t('talkToQuran.upgradeToPremium')}
                  </span>
                </button>
              )}
            </div>
          ) : (
            /* ── Message thread ── */
            <div className="max-w-2xl mx-auto px-4 py-4">
              {messages.map((msg, i) => (
                <MessageBubble
                  key={i}
                  text={msg.content}
                  isUser={msg.role === 'user'}
                  verses={msg.verses}
                  onVerseClick={handleVerseClick}
                  isRTL={isRTL}
                  labels={{
                    copy: t('talkToQuran.copy') || 'Copy',
                    share: t('talkToQuran.share') || 'Share',
                    copied: t('talkToQuran.copied') || 'Copied!',
                  }}
                />
              ))}

              {/* Streaming response */}
              {streamingText && (
                <MessageBubble text={streamingText} isUser={false} isStreaming isRTL={isRTL} />
              )}

              {/* Live transcript while listening */}
              {status === 'listening' && liveTranscript && (
                <MessageBubble text={liveTranscript} isUser isStreaming isRTL={isRTL} />
              )}

              {/* Processing indicator */}
              {status === 'processing' && !streamingText && (
                <div
                  className={`mb-4 flex ${isRTL ? 'justify-end' : 'justify-start'}`}
                  style={{ animation: 'messageSlideIn 0.3s ease-out both' }}
                >
                  <div
                    className={`flex items-start gap-2.5 px-4 py-3 rounded-2xl ${isRTL ? 'rounded-br-sm border-r-2 border-teal-500 flex-row-reverse' : 'rounded-bl-sm border-l-2 border-teal-500'}`}
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <AiAvatar status="processing" />
                    <div className="flex items-center gap-1.5 pt-1">
                      <div className="w-2 h-2 bg-teal-400 rounded-full" style={{ animation: 'typingDot 1.4s ease-in-out infinite' }} />
                      <div className="w-2 h-2 bg-teal-400 rounded-full" style={{ animation: 'typingDot 1.4s ease-in-out infinite', animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-teal-400 rounded-full" style={{ animation: 'typingDot 1.4s ease-in-out infinite', animationDelay: '0.4s' }} />
                      <span className="ml-2 rtl:ml-0 rtl:mr-2 text-white/40 text-sm">
                        {t('talkToQuran.searching') || 'Finding relevant verses...'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Follow-up suggestions */}
              {followUpQuestions.length > 0 && status === 'idle' && !streamingText && messages.length > 0 && (
                <div className="mb-4" style={{ animation: 'messageSlideIn 0.3s ease-out both' }}>
                  <p className="text-white/30 text-xs mb-2 text-center">
                    {t('talkToQuran.continueConversation') || 'Continue the conversation:'}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {followUpQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          sendMessage(q.text);
                          setFollowUpQuestions([]);
                        }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white/60 hover:text-white/80 transition-colors"
                        style={{ border: '1px solid rgba(255,255,255,0.08)' }}
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
          )}

          {/* Scroll-to-bottom button */}
          {showScrollButton && messages.length > 0 && (
            <button
              onClick={scrollToBottom}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:bg-white/15 active:scale-95 z-20"
              style={{ animation: 'messageSlideIn 0.3s ease-out' }}
            >
              <Icons.ChevronDown className="w-5 h-5 text-white/70" />
            </button>
          )}
        </div>

        {/* ── Error banner ── */}
        {error && (
          <div
            className="mx-4 mb-2 px-4 py-3 rounded-xl bg-red-500/10"
            style={{ border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-red-400 text-sm flex-1">{error}</span>
              <button
                onClick={() => { setError(null); setLastFailedMessage(null); }}
                className="text-red-400/40 hover:text-red-400/70 transition-colors flex-shrink-0"
              >
                <Icons.X className="w-4 h-4" />
              </button>
            </div>
            {lastFailedMessage && (
              <button
                onClick={handleRetry}
                className="mt-2 w-full py-2 rounded-lg text-sm font-medium text-white/80 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Icons.RefreshCw className="w-4 h-4" />
                <span>{t('talkToQuran.retry') || 'Try Again'}</span>
              </button>
            )}
            {(error.includes('checkout') || error.includes('Checkout') || error.includes('upgrade')) && !lastFailedMessage ? (
              <button
                onClick={handleUpgrade}
                className="mt-2 w-full py-2 rounded-lg text-sm font-medium text-white/80 bg-amber-500/20 hover:bg-amber-500/30 transition-colors"
              >
                {t('talkToQuran.upgradeToPremium')}
              </button>
            ) : null}
          </div>
        )}

        {/* ── Bottom bar ── */}
        <div
          className="relative z-10 safe-area-bottom"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(15,23,42,0.98)',
          }}
        >
          {hasAccess ? (
            status === 'listening' ? (
              /* ── Recording bar — red-accented, WhatsApp-style ── */
              <div className="px-4 py-3">
                <div
                  className="flex items-center gap-3 max-w-lg mx-auto rounded-2xl px-4 py-2.5"
                  style={{
                    background: 'rgba(239,68,68,0.08)',
                    border: '1px solid rgba(239,68,68,0.2)',
                  }}
                >
                  {/* Cancel */}
                  <button
                    onClick={handleCancelVoice}
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500/10 transition-colors flex-shrink-0"
                  >
                    <Icons.X className="w-4 h-4 text-red-400/60" />
                  </button>

                  {/* Animated waveform + duration */}
                  <div className="flex-1 flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-red-500/15 flex items-center justify-center">
                        <div className="flex gap-[3px] items-center h-5">
                          {[0, 0.1, 0.2, 0.3, 0.15].map((d, i) => (
                            <div key={i} className="w-[3px] bg-red-400 rounded-full" style={{ animation: 'soundBar3 0.45s ease-in-out infinite', animationDelay: `${d}s` }} />
                          ))}
                        </div>
                      </div>
                      {/* Pulsing ring */}
                      <div className="absolute inset-[-4px] rounded-full" style={{ border: '2px solid rgba(239,68,68,0.3)', animation: 'micRing 1.5s ease-out infinite' }} />
                      <div className="absolute inset-[-4px] rounded-full" style={{ border: '2px solid rgba(239,68,68,0.2)', animation: 'micRing 1.5s ease-out infinite', animationDelay: '0.5s' }} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs text-red-400 font-medium tabular-nums">
                        {isRecording ? `0:${String(recordingTime).padStart(2, '0')}` : t('talkToQuran.listening') || 'Listening...'}
                      </span>
                      {liveTranscript && (
                        <span className="text-xs text-white/40 truncate">{liveTranscript}</span>
                      )}
                    </div>
                  </div>

                  {/* Send */}
                  <button
                    onClick={handleStopVoice}
                    className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-400 active:scale-95 transition-all flex-shrink-0 shadow-lg shadow-teal-500/20"
                  >
                    <Icons.Send className="w-4.5 h-4.5 text-white" />
                  </button>
                </div>
              </div>
            ) : (status === 'processing' || isPlaying) ? (
              /* ── Processing / Speaking bar — with mascot ── */
              <div className="px-4 py-3">
                <div
                  className="flex items-center gap-3 max-w-lg mx-auto rounded-2xl px-4 py-2.5"
                  style={{
                    background: status === 'processing' ? 'rgba(245,158,11,0.06)' : 'rgba(20,184,166,0.06)',
                    border: `1px solid ${status === 'processing' ? 'rgba(245,158,11,0.15)' : 'rgba(20,184,166,0.15)'}`,
                  }}
                >
                  <AiAvatar status={status} isPlaying={isPlaying} />
                  <span className="flex-1 text-sm text-white/40">
                    {status === 'processing'
                      ? (t('talkToQuran.searching') || 'Finding relevant verses...')
                      : (t('talkToQuran.speaking') || 'Speaking...')}
                  </span>
                  <button
                    onClick={stopSpeaking}
                    className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center hover:bg-white/12 active:scale-95 transition-all flex-shrink-0"
                  >
                    <Icons.Square className="w-4 h-4 text-white/50" />
                  </button>
                </div>
              </div>
            ) : (
              /* ── Idle input — prominent mic button ── */
              <div className="px-4 py-3">
                <form onSubmit={handleTextSubmit} className="max-w-lg mx-auto">
                  <div
                    className="flex items-center gap-2 rounded-2xl px-2 py-1.5"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {/* Mic — gradient background, prominent */}
                    <button
                      type="button"
                      onClick={handleStartVoice}
                      className="w-10 h-10 rounded-full flex items-center justify-center active:scale-95 transition-all flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #14B8A6, #0D9488)',
                        boxShadow: '0 2px 12px rgba(20,184,166,0.3)',
                      }}
                    >
                      <Icons.Mic className="w-5 h-5 text-white" />
                    </button>

                    <input
                      type="text"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      placeholder={t('talkToQuran.placeholder')}
                      className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 outline-none min-w-0"
                      dir="auto"
                    />

                    {/* Send - only with text */}
                    {textInput.trim() && (
                      <button
                        type="submit"
                        className="w-9 h-9 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-400 transition-colors flex-shrink-0"
                        style={{ animation: 'messageSlideIn 0.2s ease-out' }}
                      >
                        <Icons.Send className="w-4 h-4 text-white" />
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )
          ) : !isAuthenticated ? (
            /* ── Sign-in bar ── */
            <div className="px-4 py-3">
              <button
                onClick={login}
                className="w-full max-w-lg mx-auto flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-500/15 text-white/80 hover:bg-violet-500/20 transition-colors"
                style={{ border: '1px solid rgba(139,92,246,0.2)' }}
              >
                <Icons.Users className="w-4 h-4" />
                <span className="text-sm font-medium">{t('talkToQuran.loginButton') || 'Sign in to start talking'}</span>
              </button>
            </div>
          ) : (
            /* ── Upgrade bar ── */
            <div className="px-4 py-3">
              <button
                onClick={handleUpgrade}
                className="w-full max-w-lg mx-auto flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500/15 text-white/80 hover:bg-amber-500/20 transition-colors"
                style={{ border: '1px solid rgba(245,158,11,0.2)' }}
              >
                <Icons.Zap className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium">
                  {t('talkToQuran.upgradeToPremium')}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Premium upgrade popup */}
      {showPremiumGate && (
        <Suspense fallback={null}>
          <KidsPremiumGate
            feature="talk_to_quran"
            onClose={() => setShowPremiumGate(false)}
            returnPath="/talk"
            source="talk_to_quran"
          />
        </Suspense>
      )}

      {/* Payment result popup is handled centrally by App.jsx */}

      {/* ── Animations ── */}
      <style>{`
        @keyframes messageSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
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
        @keyframes micRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes soundBar3 {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        .safe-area-bottom { padding-bottom: env(safe-area-inset-bottom); }
      `}</style>
    </div>
  );
}
