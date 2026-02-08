/**
 * Voice Commands Hook
 * Web Speech API integration for hands-free Quran navigation
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { SURAHS } from '../data';

// Voice command patterns
const COMMAND_PATTERNS = {
  // Navigation
  navigation: [
    { pattern: /^(?:go to|open|read)\s+surah\s+(.+)$/i, action: 'navigateSurah' },
    { pattern: /^(?:go to|open|read)\s+surah\s+(\d+)$/i, action: 'navigateSurahNumber' },
    { pattern: /^(?:go to|open)\s+verse\s+(\d+)$/i, action: 'navigateVerse' },
    { pattern: /^(?:go to|open)\s+ayah\s+(\d+)$/i, action: 'navigateVerse' },
    { pattern: /^next\s*(?:verse|ayah)?$/i, action: 'nextVerse' },
    { pattern: /^previous\s*(?:verse|ayah)?$/i, action: 'previousVerse' },
    { pattern: /^(?:go\s+)?back$/i, action: 'goBack' },
    { pattern: /^home$/i, action: 'goHome' },
  ],

  // Playback
  playback: [
    { pattern: /^play$/i, action: 'play' },
    { pattern: /^pause$/i, action: 'pause' },
    { pattern: /^stop$/i, action: 'stop' },
    { pattern: /^repeat(?:\s+this)?(?:\s+verse)?$/i, action: 'repeatVerse' },
    { pattern: /^play\s+(?:from\s+)?(?:the\s+)?beginning$/i, action: 'playFromStart' },
    { pattern: /^(?:change\s+)?reciter\s+(?:to\s+)?(.+)$/i, action: 'changeReciter' },
  ],

  // Features
  features: [
    { pattern: /^(?:show|open)\s+tafseer$/i, action: 'showTafseer' },
    { pattern: /^(?:hide|close)\s+tafseer$/i, action: 'hideTafseer' },
    { pattern: /^bookmark(?:\s+this)?(?:\s+verse)?$/i, action: 'bookmark' },
    { pattern: /^share(?:\s+this)?(?:\s+verse)?$/i, action: 'share' },
    { pattern: /^(?:read|show)\s+translation$/i, action: 'showTranslation' },
    { pattern: /^(?:hide)\s+translation$/i, action: 'hideTranslation' },
    { pattern: /^(?:enable|show)\s+word\s+by\s+word$/i, action: 'enableWordByWord' },
    { pattern: /^(?:disable|hide)\s+word\s+by\s+word$/i, action: 'disableWordByWord' },
  ],

  // Search
  search: [
    { pattern: /^search\s+(?:for\s+)?(.+)$/i, action: 'search' },
    { pattern: /^find\s+(?:verses?\s+about\s+)?(.+)$/i, action: 'search' },
    { pattern: /^show\s+(?:me\s+)?(.+)\s+verses?$/i, action: 'searchTheme' },
  ],

  // Special commands
  special: [
    { pattern: /^(?:ayatul\s+kursi|ayat\s+al\s+kursi)$/i, action: 'ayatulKursi' },
    { pattern: /^surah\s+(?:al\s+)?fatiha$/i, action: 'surahFatiha' },
    { pattern: /^surah\s+(?:al\s+)?ikhlas$/i, action: 'surahIkhlas' },
    { pattern: /^surah\s+(?:al\s+)?falaq$/i, action: 'surahFalaq' },
    { pattern: /^surah\s+(?:an\s+)?nas$/i, action: 'surahNas' },
    { pattern: /^surah\s+(?:ya\s+)?sin$/i, action: 'surahYasin' },
    { pattern: /^surah\s+(?:al\s+)?mulk$/i, action: 'surahMulk' },
    { pattern: /^surah\s+(?:ar\s+)?rahman$/i, action: 'surahRahman' },
  ],
};

// Surah name mappings for fuzzy matching
const SURAH_ALIASES = {
  'fatiha': 1, 'opening': 1, 'fatihah': 1,
  'baqarah': 2, 'cow': 2, 'baqara': 2,
  'imran': 3, 'imraan': 3, 'ali imran': 3,
  'nisa': 4, 'women': 4, 'nisaa': 4,
  'maidah': 5, 'table': 5, 'maida': 5,
  'anam': 6, 'cattle': 6, 'anaam': 6,
  'araf': 7, 'heights': 7, 'aaraf': 7,
  'anfal': 8, 'spoils': 8,
  'tawbah': 9, 'repentance': 9, 'tawba': 9,
  'yunus': 10, 'jonah': 10,
  'hud': 11, 'hood': 11,
  'yusuf': 12, 'joseph': 12,
  'raad': 13, 'thunder': 13,
  'ibrahim': 14, 'abraham': 14,
  'hijr': 15,
  'nahl': 16, 'bee': 16,
  'isra': 17, 'night journey': 17,
  'kahf': 18, 'cave': 18,
  'maryam': 19, 'mary': 19,
  'taha': 20, 'ta-ha': 20,
  'anbiya': 21, 'prophets': 21,
  'hajj': 22, 'pilgrimage': 22,
  'muminun': 23, 'believers': 23,
  'nur': 24, 'light': 24, 'noor': 24,
  'furqan': 25, 'criterion': 25,
  'shuara': 26, 'poets': 26,
  'naml': 27, 'ant': 27, 'ants': 27,
  'qasas': 28, 'stories': 28,
  'ankabut': 29, 'spider': 29,
  'rum': 30, 'romans': 30,
  'luqman': 31,
  'sajdah': 32, 'prostration': 32,
  'ahzab': 33, 'confederates': 33,
  'saba': 34, 'sheba': 34,
  'fatir': 35, 'originator': 35,
  'yasin': 36, 'ya sin': 36, 'yaseen': 36,
  'saffat': 37,
  'sad': 38,
  'zumar': 39, 'groups': 39,
  'ghafir': 40, 'forgiver': 40,
  'fussilat': 41, 'explained': 41,
  'shura': 42, 'consultation': 42,
  'zukhruf': 43, 'ornaments': 43,
  'dukhan': 44, 'smoke': 44,
  'jathiyah': 45, 'kneeling': 45,
  'ahqaf': 46, 'dunes': 46,
  'muhammad': 47,
  'fath': 48, 'victory': 48,
  'hujurat': 49, 'rooms': 49,
  'qaf': 50,
  'dhariyat': 51, 'winnowing': 51,
  'tur': 52, 'mount': 52,
  'najm': 53, 'star': 53,
  'qamar': 54, 'moon': 54,
  'rahman': 55, 'merciful': 55,
  'waqiah': 56, 'event': 56,
  'hadid': 57, 'iron': 57,
  'mujadilah': 58, 'pleading': 58,
  'hashr': 59, 'gathering': 59,
  'mumtahanah': 60, 'tested': 60,
  'saff': 61, 'ranks': 61,
  'jumuah': 62, 'friday': 62,
  'munafiqun': 63, 'hypocrites': 63,
  'taghabun': 64, 'loss': 64,
  'talaq': 65, 'divorce': 65,
  'tahrim': 66, 'prohibition': 66,
  'mulk': 67, 'sovereignty': 67, 'dominion': 67,
  'qalam': 68, 'pen': 68,
  'haqqah': 69, 'reality': 69,
  'maarij': 70, 'ascending': 70,
  'nuh': 71, 'noah': 71,
  'jinn': 72,
  'muzzammil': 73, 'wrapped': 73,
  'muddathir': 74, 'cloaked': 74,
  'qiyamah': 75, 'resurrection': 75,
  'insan': 76, 'human': 76, 'dahr': 76,
  'mursalat': 77, 'winds': 77,
  'naba': 78, 'tidings': 78,
  'naziat': 79, 'extractors': 79,
  'abasa': 80, 'frowned': 80,
  'takwir': 81, 'folding': 81,
  'infitar': 82, 'cleaving': 82,
  'mutaffifin': 83, 'defrauders': 83,
  'inshiqaq': 84, 'splitting': 84,
  'buruj': 85, 'constellations': 85,
  'tariq': 86, 'night comer': 86,
  'ala': 87, 'most high': 87,
  'ghashiyah': 88, 'overwhelming': 88,
  'fajr': 89, 'dawn': 89,
  'balad': 90, 'city': 90,
  'shams': 91, 'sun': 91,
  'layl': 92, 'night': 92,
  'duha': 93, 'morning hours': 93,
  'sharh': 94, 'relief': 94, 'inshirah': 94,
  'tin': 95, 'fig': 95,
  'alaq': 96, 'clot': 96,
  'qadr': 97, 'power': 97, 'decree': 97,
  'bayyinah': 98, 'evidence': 98,
  'zalzalah': 99, 'earthquake': 99,
  'adiyat': 100, 'chargers': 100,
  'qariah': 101, 'calamity': 101,
  'takathur': 102, 'competition': 102,
  'asr': 103, 'time': 103,
  'humazah': 104, 'slanderer': 104,
  'fil': 105, 'elephant': 105,
  'quraysh': 106, 'quraish': 106,
  'maun': 107, 'small kindness': 107,
  'kawthar': 108, 'abundance': 108, 'kausar': 108,
  'kafirun': 109, 'disbelievers': 109, 'kafiroon': 109,
  'nasr': 110, 'help': 110, 'victory': 110,
  'masad': 111, 'lahab': 111, 'palm fiber': 111,
  'ikhlas': 112, 'sincerity': 112, 'purity': 112,
  'falaq': 113, 'daybreak': 113,
  'nas': 114, 'mankind': 114, 'people': 114,
};

// Find surah by name
const findSurahByName = (name) => {
  const normalized = name.toLowerCase().trim();

  // Check aliases first
  if (SURAH_ALIASES[normalized]) {
    return SURAH_ALIASES[normalized];
  }

  // Check exact match
  const exactMatch = SURAHS.find(s =>
    s.name.toLowerCase() === normalized ||
    s.arabic === name
  );
  if (exactMatch) return exactMatch.id;

  // Fuzzy match
  const fuzzyMatch = SURAHS.find(s =>
    s.name.toLowerCase().includes(normalized) ||
    normalized.includes(s.name.toLowerCase())
  );
  if (fuzzyMatch) return fuzzyMatch.id;

  return null;
};

// Match command against patterns
const matchCommand = (text) => {
  const normalized = text.toLowerCase().trim();

  for (const category of Object.values(COMMAND_PATTERNS)) {
    for (const { pattern, action } of category) {
      const match = normalized.match(pattern);
      if (match) {
        return {
          action,
          params: match.slice(1),
          raw: text,
        };
      }
    }
  }

  return null;
};

// Voice Commands Hook
export const useVoiceCommands = ({
  onNavigateSurah,
  onNavigateVerse,
  onNextVerse,
  onPreviousVerse,
  onPlay,
  onPause,
  onStop,
  onRepeat,
  onShowTafseer,
  onHideTafseer,
  onBookmark,
  onShare,
  onSearch,
  onShowTranslation,
  onHideTranslation,
  onEnableWordByWord,
  onDisableWordByWord,
  onGoBack,
  onGoHome,
  enabled = false,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [lastCommand, setLastCommand] = useState(null);
  const [error, setError] = useState(null);
  const [isSupported, setIsSupported] = useState(false);

  const recognitionRef = useRef(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsSupported(true);
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        setTranscript(interimTranscript || finalTranscript);

        if (finalTranscript) {
          processCommand(finalTranscript);
        }
      };

      recognitionRef.current.onerror = (event) => {
        // Map error codes to user-friendly messages
        const errorMessages = {
          'not-allowed': 'Microphone permission denied. Please allow microphone access.',
          'no-speech': 'No speech detected. Please try again.',
          'audio-capture': 'No microphone found. Please connect a microphone.',
          'network': 'Network error. Please check your connection.',
          'aborted': null, // Don't show error for aborted
          'service-not-allowed': 'Speech recognition service not allowed. Try using Chrome or Edge.',
        };

        const friendlyError = errorMessages[event.error];
        if (friendlyError !== null) {
          setError(friendlyError || `Error: ${event.error}`);
        }

        // Only auto-restart for recoverable errors
        if (event.error === 'no-speech' || event.error === 'aborted') {
          // Check if we should restart (use ref to avoid stale closure)
          if (recognitionRef.current._shouldContinue) {
            setTimeout(() => {
              try {
                recognitionRef.current.start();
              } catch (e) {
                // Ignore - already started or other issue
              }
            }, 100);
          }
        }
      };

      recognitionRef.current.onend = () => {
        // Use the flag to check if we should restart (avoids stale closure)
        if (recognitionRef.current._shouldContinue) {
          // Restart for continuous listening
          setTimeout(() => {
            try {
              recognitionRef.current.start();
            } catch (e) {
              // Ignore - already started or other issue
            }
          }, 100);
        } else {
          setIsListening(false);
        }
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  // Process recognized command
  const processCommand = useCallback((text) => {
    const command = matchCommand(text);

    if (!command) {
      setLastCommand({ success: false, text, message: 'Command not recognized' });
      return;
    }

    setLastCommand({ success: true, text, action: command.action });

    switch (command.action) {
      case 'navigateSurah': {
        const surahId = findSurahByName(command.params[0]);
        if (surahId) {
          onNavigateSurah && onNavigateSurah(surahId);
        }
        break;
      }
      case 'navigateSurahNumber': {
        const num = parseInt(command.params[0], 10);
        if (num >= 1 && num <= 114) {
          onNavigateSurah && onNavigateSurah(num);
        }
        break;
      }
      case 'navigateVerse': {
        const verse = parseInt(command.params[0], 10);
        onNavigateVerse && onNavigateVerse(verse);
        break;
      }
      case 'nextVerse':
        onNextVerse && onNextVerse();
        break;
      case 'previousVerse':
        onPreviousVerse && onPreviousVerse();
        break;
      case 'play':
        onPlay && onPlay();
        break;
      case 'pause':
        onPause && onPause();
        break;
      case 'stop':
        onStop && onStop();
        break;
      case 'repeatVerse':
        onRepeat && onRepeat();
        break;
      case 'showTafseer':
        onShowTafseer && onShowTafseer();
        break;
      case 'hideTafseer':
        onHideTafseer && onHideTafseer();
        break;
      case 'bookmark':
        onBookmark && onBookmark();
        break;
      case 'share':
        onShare && onShare();
        break;
      case 'search':
      case 'searchTheme':
        onSearch && onSearch(command.params[0]);
        break;
      case 'showTranslation':
        onShowTranslation && onShowTranslation();
        break;
      case 'hideTranslation':
        onHideTranslation && onHideTranslation();
        break;
      case 'enableWordByWord':
        onEnableWordByWord && onEnableWordByWord();
        break;
      case 'disableWordByWord':
        onDisableWordByWord && onDisableWordByWord();
        break;
      case 'goBack':
        onGoBack && onGoBack();
        break;
      case 'goHome':
        onGoHome && onGoHome();
        break;
      // Special commands
      case 'ayatulKursi':
        onNavigateSurah && onNavigateSurah(2);
        setTimeout(() => onNavigateVerse && onNavigateVerse(255), 500);
        break;
      case 'surahFatiha':
        onNavigateSurah && onNavigateSurah(1);
        break;
      case 'surahIkhlas':
        onNavigateSurah && onNavigateSurah(112);
        break;
      case 'surahFalaq':
        onNavigateSurah && onNavigateSurah(113);
        break;
      case 'surahNas':
        onNavigateSurah && onNavigateSurah(114);
        break;
      case 'surahYasin':
        onNavigateSurah && onNavigateSurah(36);
        break;
      case 'surahMulk':
        onNavigateSurah && onNavigateSurah(67);
        break;
      case 'surahRahman':
        onNavigateSurah && onNavigateSurah(55);
        break;
      default:
        break;
    }
  }, [
    onNavigateSurah, onNavigateVerse, onNextVerse, onPreviousVerse,
    onPlay, onPause, onStop, onRepeat,
    onShowTafseer, onHideTafseer, onBookmark, onShare, onSearch,
    onShowTranslation, onHideTranslation,
    onEnableWordByWord, onDisableWordByWord,
    onGoBack, onGoHome,
  ]);

  // Start listening with proper permission handling
  const startListening = useCallback(async () => {
    if (!recognitionRef.current || !isSupported) {
      setError('Speech recognition not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    setError(null);
    setTranscript('');

    // First, check/request microphone permission
    try {
      // Check if we already have permission
      const permissionStatus = await navigator.permissions?.query({ name: 'microphone' }).catch(() => null);

      if (permissionStatus?.state === 'denied') {
        setError('Microphone permission was denied. Please enable it in browser settings (click lock icon in address bar).');
        return;
      }

      // If permission is not granted, request it
      if (permissionStatus?.state !== 'granted') {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          stream.getTracks().forEach(track => track.stop());
        } catch (mediaError) {
          console.error('Microphone permission error:', mediaError);
          if (mediaError.name === 'NotAllowedError') {
            setError('Microphone access denied. Please click the lock icon in your browser address bar and allow microphone access.');
          } else if (mediaError.name === 'NotFoundError') {
            setError('No microphone found. Please connect a microphone and try again.');
          } else {
            setError(`Microphone error: ${mediaError.message || 'Unknown error'}`);
          }
          return;
        }
      }

      // Now start speech recognition
      recognitionRef.current._shouldContinue = true;

      try {
        recognitionRef.current.start();
        setIsListening(true);
        setError(null);
      } catch (e) {
        if (e.message?.includes('already started')) {
          setIsListening(true);
        } else {
          console.error('Speech recognition start error:', e);
          setError('Could not start voice recognition. Please try again.');
          recognitionRef.current._shouldContinue = false;
        }
      }
    } catch (e) {
      console.error('Permission check error:', e);
      // Fallback: try to start directly
      try {
        recognitionRef.current._shouldContinue = true;
        recognitionRef.current.start();
        setIsListening(true);
      } catch (startError) {
        setError('Could not start voice recognition. Please check microphone permissions.');
      }
    }
  }, [isSupported]);

  // Stop listening
  const stopListening = useCallback(() => {
    if (!recognitionRef.current) return;

    recognitionRef.current._shouldContinue = false;
    recognitionRef.current.stop();
    setIsListening(false);
  }, []);

  // Toggle listening
  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  return {
    isListening,
    transcript,
    lastCommand,
    error,
    isSupported,
    startListening,
    stopListening,
    toggleListening,
  };
};

export default useVoiceCommands;
