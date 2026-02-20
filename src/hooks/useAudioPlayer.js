/**
 * useAudioPlayer Hook
 * Single Responsibility: Manage Quran audio playback
 * Uses Al-Quran Cloud API for audio URLs
 */

import { useState, useEffect, useRef, useCallback } from 'react';

// Audio CDN base URL from Al-Quran Cloud - using Alafasy by default
const AUDIO_CDN = 'https://cdn.islamic.network/quran/audio/128';

// Alternative audio sources
const AUDIO_SOURCES = {
  'ar.alafasy': 'https://cdn.islamic.network/quran/audio/128/ar.alafasy',
  'ar.abdurrahmaansudais': 'https://cdn.islamic.network/quran/audio/128/ar.abdurrahmaansudais',
  'ar.abdulsamad': 'https://cdn.islamic.network/quran/audio/128/ar.abdulsamad',
  'ar.husary': 'https://cdn.islamic.network/quran/audio/128/ar.husary',
  'ar.minshawi': 'https://cdn.islamic.network/quran/audio/128/ar.minshawi',
  'ar.shaatree': 'https://cdn.islamic.network/quran/audio/128/ar.shaatree',
};

// Popular reciters with their identifiers
export const RECITERS = {
  'ar.alafasy': { name: 'Mishary Rashid Alafasy', country: 'Kuwait' },
  'ar.abdurrahmaansudais': { name: 'Abdul Rahman Al-Sudais', country: 'Saudi Arabia' },
  'ar.abdulsamad': { name: 'Abdul Samad', country: 'Egypt' },
  'ar.shaatree': { name: 'Abu Bakr Al-Shatri', country: 'Saudi Arabia' },
  'ar.husary': { name: 'Mahmoud Khalil Al-Husary', country: 'Egypt' },
  'ar.minshawi': { name: 'Mohamed Siddiq Al-Minshawi', country: 'Egypt' },
};

// ============================================
// Translation Audio Sources (Urdu, etc.)
// ============================================

// Translation audio CDN sources
// Using EveryAyah.com which has complete coverage (all 114 surahs)
const TRANSLATION_AUDIO_SOURCES = {
  // === URDU ===
  'ur.khan': {
    type: 'everyayah', // Uses SSSAAA.mp3 format (surah-ayah)
    baseUrl: 'https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps',
  },
  'ur.farhat': {
    type: 'everyayah',
    baseUrl: 'https://everyayah.com/data/translations/urdu_farhat_hashmi',
  },
  // Note: ur.kanzuliman uses Google Cloud TTS (no pre-recorded audio)
  // === ENGLISH ===
  'en.walk': {
    type: 'everyayah',
    baseUrl: 'https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps',
  },
  // === PERSIAN (FARSI) ===
  'fa.hedayatfar': {
    type: 'everyayah',
    baseUrl: 'https://everyayah.com/data/translations/Fooladvand_Hedayatfar_40Kbps',
  },
  'fa.kabiri': {
    type: 'everyayah',
    baseUrl: 'https://everyayah.com/data/translations/Makarem_Kabiri_16Kbps',
  },
  // === AZERBAIJANI ===
  'az.balayev': {
    type: 'everyayah',
    baseUrl: 'https://everyayah.com/data/translations/azerbaijani/balayev',
  },
  // === BOSNIAN ===
  'bs.korkut': {
    type: 'everyayah',
    baseUrl: 'https://everyayah.com/data/translations/besim_korkut_ajet_po_ajet',
  },
};

// Translation audio reciters/narrators
export const TRANSLATION_RECITERS = {
  // === URDU ===
  'ur.khan': {
    name: 'Shamshad Ali Khan',
    nameNative: 'شمشاد علی خان',
    language: 'Urdu',
    languageNative: 'اردو',
    translation: 'Fateh Muhammad Jalandhry',
    translationNative: 'فتح محمد جالندھری',
    translationShort: 'جالندھری',
    country: 'Pakistan',
    style: 'sentence', // Full sentence translation
    styleLabel: 'جملہ', // Urdu label for "Sentence"
    matchesTranslations: ['ur.jalandhry'], // Only matches Jalandhry text
  },
  'ur.farhat': {
    name: 'Dr. Farhat Hashmi',
    nameNative: 'ڈاکٹر فرحت ہاشمی',
    language: 'Urdu',
    languageNative: 'اردو',
    translation: 'Word-by-Word (Lafzi)',
    translationNative: 'لفظی ترجمہ',
    translationShort: 'لفظی',
    country: 'Pakistan',
    style: 'word-by-word', // Word-by-word style - matches any translation in WBW mode
    styleLabel: 'لفظی', // Urdu label for "Word-by-word"
    matchesTranslations: [], // Word-by-word matches display mode, not translation text
  },
  'ur.kanzuliman': {
    name: 'Google Cloud TTS',
    nameNative: 'گوگل کلاؤڈ ٹی ٹی ایس',
    language: 'Urdu',
    languageNative: 'اردو',
    translation: 'Kanz ul Iman',
    translationNative: 'کنز الایمان',
    translationShort: 'کنزالایمان',
    country: 'Pakistan',
    style: 'sentence',
    styleLabel: 'جملہ',
    matchesTranslations: ['ur.kanzuliman'], // Matches Kanz ul Iman translation
    source: 'tts', // Uses Google Cloud TTS (Chirp3-HD male voice)
  },
  // === ENGLISH ===
  'en.walk': {
    name: 'Ibrahim Walk',
    nameNative: 'Ibrahim Walk',
    language: 'English',
    languageNative: 'English',
    translation: 'Sahih International',
    translationNative: 'Sahih International',
    translationShort: 'Sahih Intl',
    country: 'USA',
    style: 'sentence',
    styleLabel: 'Sentence',
    matchesTranslations: ['en.sahih'], // Only matches Sahih International text
  },
  // === PERSIAN (FARSI) ===
  'fa.hedayatfar': {
    name: 'Hedayatfar',
    nameNative: 'هدایت فر',
    language: 'Persian',
    languageNative: 'فارسی',
    translation: 'Fooladvand',
    translationNative: 'فولادوند',
    translationShort: 'فولادوند',
    country: 'Iran',
    style: 'sentence',
    styleLabel: 'جمله',
    matchesTranslations: ['fa.fooladvand'],
  },
  'fa.kabiri': {
    name: 'Kabiri',
    nameNative: 'کبیری',
    language: 'Persian',
    languageNative: 'فارسی',
    translation: 'Makarem',
    translationNative: 'مکارم',
    translationShort: 'مکارم',
    country: 'Iran',
    style: 'sentence',
    styleLabel: 'جمله',
    matchesTranslations: ['fa.makarem'],
  },
  // === AZERBAIJANI ===
  'az.balayev': {
    name: 'Balayev',
    nameNative: 'Balayev',
    language: 'Azerbaijani',
    languageNative: 'Azərbaycan',
    translation: 'Balayev',
    translationNative: 'Balayev',
    translationShort: 'Balayev',
    country: 'Azerbaijan',
    style: 'sentence',
    styleLabel: 'Cümlə',
    matchesTranslations: ['az.balayev'],
  },
  // === BOSNIAN ===
  'bs.korkut': {
    name: 'Besim Korkut',
    nameNative: 'Besim Korkut',
    language: 'Bosnian',
    languageNative: 'Bosanski',
    translation: 'Besim Korkut',
    translationNative: 'Besim Korkut',
    translationShort: 'Korkut',
    country: 'Bosnia',
    style: 'sentence',
    styleLabel: 'Rečenica',
    matchesTranslations: ['bs.korkut'],
  },
};

// Map translation IDs to their TRUE MATCHING audio source only
// Only includes translations where the audio narrator reads that exact translation
export const TRANSLATION_TO_AUDIO_MAP = {
  // === URDU ===
  // Shamshad Ali Khan reads Jalandhry translation - TRUE MATCH (EveryAyah verse-by-verse)
  'ur.jalandhry': 'ur.khan',
  // Kanz ul Iman - uses Google Cloud TTS (Chirp3-HD male Urdu voice)
  'ur.kanzuliman': 'ur.kanzuliman',
  // Other Urdu translations (maududi, junagarhi, qadri, jawadi, ahmedali, najafi)
  // automatically fall back to Google Cloud TTS

  // === ENGLISH ===
  // Ibrahim Walk reads Sahih International - TRUE MATCH
  'en.sahih': 'en.walk',
  // Other English translations - NO MATCH, will use TTS

  // === PERSIAN ===
  'fa.fooladvand': 'fa.hedayatfar',
  'fa.makarem': 'fa.kabiri',

  // === AZERBAIJANI ===
  'az.balayev': 'az.balayev',

  // === BOSNIAN ===
  'bs.korkut': 'bs.korkut',
};

// Get all available audio sources for a language
export function getAvailableTranslationAudio(language = 'ur') {
  return Object.entries(TRANSLATION_RECITERS)
    .filter(([id]) => id.startsWith(language))
    .map(([id, info]) => ({ id, ...info }));
}

// Get audio source for a translation (returns null if no matching audio)
export function getTranslationAudioSource(translationId) {
  const audioId = TRANSLATION_TO_AUDIO_MAP[translationId];
  if (audioId && TRANSLATION_AUDIO_SOURCES[audioId]) {
    return {
      audioId,
      ...TRANSLATION_AUDIO_SOURCES[audioId],
      reciter: TRANSLATION_RECITERS[audioId],
    };
  }
  return null;
}

/**
 * Get translation audio URL for a specific verse
 * @param {number} surahId - Surah number (1-114)
 * @param {number} ayahNum - Ayah number
 * @param {string} audioId - Translation audio identifier (e.g., 'ur.khan')
 * @returns {string} - Audio URL
 */
export function getTranslationAudioUrl(surahId, ayahNum, audioId = 'ur.khan') {
  const source = TRANSLATION_AUDIO_SOURCES[audioId];
  if (!source) return null;

  if (source.type === 'everyayah') {
    // EveryAyah format: SSSAAA.mp3 (3-digit surah, 3-digit ayah)
    const surahStr = String(surahId).padStart(3, '0');
    const ayahStr = String(ayahNum).padStart(3, '0');
    return `${source.baseUrl}/${surahStr}${ayahStr}.mp3`;
  }

  // Default: global ayah number format
  const globalAyah = getGlobalAyahNumber(surahId, ayahNum);
  return `${source.baseUrl}/${globalAyah}.mp3`;
}

// Verse counts per surah (index 0 is unused, index 1 = Al-Fatiha with 7 verses, etc.)
const VERSE_COUNTS = [
  0, 7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128,
  111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73,
  54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49,
  62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28,
  28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20,
  15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6
];

/**
 * Calculate global ayah number (1-6236) from surah and ayah
 * @param {number} surahId - Surah number (1-114)
 * @param {number} ayahNum - Ayah number within surah
 * @returns {number} - Global ayah number
 */
export function getGlobalAyahNumber(surahId, ayahNum) {
  let globalAyah = 0;
  for (let i = 1; i < surahId; i++) {
    globalAyah += VERSE_COUNTS[i];
  }
  return globalAyah + ayahNum;
}

/**
 * Get audio URL for a specific verse
 * @param {number} surahId - Surah number (1-114)
 * @param {number} ayahNum - Ayah number
 * @param {string} reciterId - Reciter identifier
 * @returns {string} - Audio URL
 */
export function getAudioUrl(surahId, ayahNum, reciterId = 'ar.alafasy') {
  const globalAyah = getGlobalAyahNumber(surahId, ayahNum);
  const baseUrl = AUDIO_SOURCES[reciterId] || AUDIO_SOURCES['ar.alafasy'];
  return `${baseUrl}/${globalAyah}.mp3`;
}

/**
 * Hook for managing audio playback
 * @param {Object} options - { surahId, totalVerses, reciterId }
 * @returns {Object} - Audio player state and controls
 */
export function useAudioPlayer(options = {}) {
  const {
    surahId = 1,
    totalVerses = 7,
    reciterId = 'ar.alafasy',
    onVerseChange = null,
  } = options;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAyah, setCurrentAyah] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const audioRef = useRef(null);
  const isPlayingRef = useRef(false);
  const currentUrlRef = useRef('');
  const playPromiseRef = useRef(null);

  // Keep ref in sync with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Initialize audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handleError = () => {
      console.error('Audio failed to load');
      setError('Failed to load audio. Please try again.');
      setIsLoading(false);
      setIsPlaying(false);
    };

    const handleEnded = () => {
      // Move to next ayah if available
      setCurrentAyah((prev) => {
        if (prev < totalVerses) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          return 1;
        }
      });
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [totalVerses]);

  // Reset/clamp when surah or total verse count changes
  useEffect(() => {
    setError(null);
    setCurrentAyah((prev) => (prev > totalVerses ? 1 : prev));
    setIsPlaying(false);
  }, [surahId, totalVerses]);

  // Load audio when source changes (surahId, currentAyah, reciterId)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !surahId) return;

    const url = getAudioUrl(surahId, currentAyah, reciterId);

    // Only reload if URL actually changed
    if (currentUrlRef.current === url) return;

    currentUrlRef.current = url;

    // Pause current playback before loading new source
    audio.pause();

    audio.src = url;
    audio.load();

    // Notify parent of verse change
    if (onVerseChange) {
      onVerseChange(currentAyah);
    }
  }, [surahId, currentAyah, reciterId, onVerseChange]);

  // Handle play/pause separately to avoid race conditions
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentUrlRef.current) return;

    if (isPlaying) {
      // Wait for audio to be ready before playing
      const attemptPlay = () => {
        // Cancel any pending play promise tracking
        playPromiseRef.current = audio.play();

        if (playPromiseRef.current !== undefined) {
          playPromiseRef.current
            .then(() => {
              playPromiseRef.current = null;
            })
            .catch((err) => {
              playPromiseRef.current = null;
              // Safely handle different error types
              if (err && typeof err === 'object') {
                // AbortError is expected when source changes - ignore it
                if (err.name === 'AbortError') {
                  return;
                }
                console.error('Playback error:', err.message || err);
              } else if (err) {
                console.error('Playback error (unknown type):', err);
              }
              setError('Playback failed. Tap play to retry.');
              setIsPlaying(false);
            });
        }
      };

      // If audio is ready, play immediately; otherwise wait for canplay
      if (audio.readyState >= 3) {
        attemptPlay();
      } else {
        const handleCanPlay = () => {
          if (isPlayingRef.current) {
            attemptPlay();
          }
          audio.removeEventListener('canplaythrough', handleCanPlay);
        };
        audio.addEventListener('canplaythrough', handleCanPlay);

        return () => {
          audio.removeEventListener('canplaythrough', handleCanPlay);
        };
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, currentAyah, surahId, reciterId]);

  // Play/Pause toggle - just toggle the state, let useEffect handle actual playback
  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setError(null);
    setIsPlaying((prev) => !prev);
  }, []);

  // Play specific ayah
  const playAyah = useCallback((ayahNum) => {
    setError(null);
    setCurrentAyah(ayahNum);
    setIsPlaying(true);
  }, []);

  // Skip to next ayah
  const nextAyah = useCallback(() => {
    if (currentAyah < totalVerses) {
      setCurrentAyah((prev) => prev + 1);
    }
  }, [currentAyah, totalVerses]);

  // Skip to previous ayah
  const prevAyah = useCallback(() => {
    if (currentAyah > 1) {
      setCurrentAyah((prev) => prev - 1);
    }
  }, [currentAyah]);

  // Stop playback
  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentAyah(1);
  }, []);

  return {
    isPlaying,
    isLoading,
    error,
    currentAyah,
    togglePlay,
    playAyah,
    nextAyah,
    prevAyah,
    stop,
    setCurrentAyah,
  };
}

// ============================================
// Translation Audio Player Hook
// ============================================

/**
 * Hook for playing translation audio (API audio with TTS fallback)
 * Priority: 1) API audio (ur.khan for Jalandhry) 2) TTS fallback
 */
export function useTranslationAudioPlayer(options = {}) {
  const {
    surahId = 1,
    totalVerses = 7,
    translationId = 'ur.jalandhry',
    onVerseChange = null,
    getTranslationText = null, // Function to get translation text for TTS fallback
  } = options;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAyah, setCurrentAyah] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTTSMode, setIsTTSMode] = useState(false);
  const [audioSource, setAudioSource] = useState(null); // 'api' or 'tts'

  const audioRef = useRef(null);
  const isPlayingRef = useRef(false);
  const currentUrlRef = useRef('');
  const ttsUtteranceRef = useRef(null);

  // Check if we have API audio for this translation
  const apiAudioSource = useMemo(() => {
    return getTranslationAudioSource(translationId);
  }, [translationId]);

  // Keep ref in sync with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
      setAudioSource('api');
      setIsTTSMode(false);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handleError = () => {
      // API audio failed - try TTS fallback
      console.log('[TranslationAudio] API audio failed, falling back to TTS');
      setIsTTSMode(true);
      setAudioSource('tts');
      setIsLoading(false);

      // If we were trying to play, use TTS instead
      if (isPlayingRef.current && getTranslationText) {
        const text = getTranslationText(currentAyah);
        if (text) {
          playWithTTS(text);
        } else {
          setError('Translation text not available');
          setIsPlaying(false);
        }
      }
    };

    const handleEnded = () => {
      // Move to next ayah if available
      setCurrentAyah((prev) => {
        if (prev < totalVerses) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          return 1;
        }
      });
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
      // Also cancel any TTS
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [totalVerses, getTranslationText]);

  // Reset when surah or translation changes
  useEffect(() => {
    setError(null);
    setCurrentAyah((prev) => (prev > totalVerses ? 1 : prev));
    setIsPlaying(false);
    setIsTTSMode(!apiAudioSource); // If no API audio, default to TTS mode
    setAudioSource(apiAudioSource ? null : 'tts');
  }, [surahId, totalVerses, translationId, apiAudioSource]);

  // Play translation using TTS
  const playWithTTS = useCallback((text) => {
    if (!('speechSynthesis' in window) || !text) {
      setError('TTS not supported');
      setIsPlaying(false);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    ttsUtteranceRef.current = utterance;

    // Set language based on translation
    const langCode = translationId.split('.')[0];
    const ttsLangMap = {
      'ur': 'ur-PK',
      'en': 'en-US',
      'hi': 'hi-IN',
      'bn': 'bn-BD',
      'ar': 'ar-SA',
      'tr': 'tr-TR',
      'id': 'id-ID',
      'fr': 'fr-FR',
      'de': 'de-DE',
    };
    utterance.lang = ttsLangMap[langCode] || 'ur-PK';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Try to find a matching voice
    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find(v => v.lang === utterance.lang) ||
                          voices.find(v => v.lang.startsWith(langCode));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    utterance.onstart = () => {
      setIsLoading(false);
      setAudioSource('tts');
    };

    utterance.onend = () => {
      // Move to next ayah
      setCurrentAyah((prev) => {
        if (prev < totalVerses) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          return 1;
        }
      });
    };

    utterance.onerror = (event) => {
      console.error('TTS error:', event.error);
      setError('TTS playback failed');
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [translationId, totalVerses]);

  // Load and play audio when source changes
  useEffect(() => {
    if (!surahId || !isPlaying) return;

    // Notify parent of verse change
    if (onVerseChange) {
      onVerseChange(currentAyah);
    }

    // If we have API audio and not in TTS mode, try API first
    if (apiAudioSource && !isTTSMode) {
      const audio = audioRef.current;
      if (!audio) return;

      const url = getTranslationAudioUrl(surahId, currentAyah, apiAudioSource.audioId);
      if (!url) {
        setIsTTSMode(true);
        return;
      }

      // Only reload if URL changed
      if (currentUrlRef.current !== url) {
        currentUrlRef.current = url;
        audio.pause();
        audio.src = url;
        audio.load();
      }

      // Play
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          if (err.name !== 'AbortError') {
            console.error('API audio playback error:', err);
            // Fall back to TTS
            setIsTTSMode(true);
          }
        });
      }
    } else {
      // Use TTS
      if (getTranslationText) {
        const text = getTranslationText(currentAyah);
        if (text) {
          setIsLoading(true);
          playWithTTS(text);
        } else {
          setError('Translation text not available');
          setIsPlaying(false);
        }
      } else {
        setError('No translation text provider');
        setIsPlaying(false);
      }
    }
  }, [surahId, currentAyah, isPlaying, apiAudioSource, isTTSMode, onVerseChange, getTranslationText, playWithTTS]);

  // Handle play state changes for API audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || isTTSMode) return;

    if (isPlaying) {
      if (audio.readyState >= 3) {
        audio.play().catch(() => {});
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, isTTSMode]);

  // Handle pause/stop for TTS
  useEffect(() => {
    if (!isPlaying && isTTSMode && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [isPlaying, isTTSMode]);

  // Toggle play/pause
  const togglePlay = useCallback(() => {
    setError(null);
    setIsPlaying((prev) => !prev);
  }, []);

  // Play specific ayah
  const playAyah = useCallback((ayahNum) => {
    setError(null);
    setCurrentAyah(ayahNum);
    setIsPlaying(true);
  }, []);

  // Skip to next ayah
  const nextAyah = useCallback(() => {
    if (currentAyah < totalVerses) {
      if (isTTSMode && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setCurrentAyah((prev) => prev + 1);
    }
  }, [currentAyah, totalVerses, isTTSMode]);

  // Skip to previous ayah
  const prevAyah = useCallback(() => {
    if (currentAyah > 1) {
      if (isTTSMode && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setCurrentAyah((prev) => prev - 1);
    }
  }, [currentAyah, isTTSMode]);

  // Stop playback
  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setCurrentAyah(1);
  }, []);

  return {
    isPlaying,
    isLoading,
    error,
    currentAyah,
    togglePlay,
    playAyah,
    nextAyah,
    prevAyah,
    stop,
    setCurrentAyah,
    // Translation-specific
    isTTSMode,
    audioSource, // 'api' | 'tts' | null
    hasApiAudio: !!apiAudioSource,
    reciterInfo: apiAudioSource?.reciter || null,
  };
}

// ============================================
// Translation Audio (Text-to-Speech)
// ============================================

// Language codes for Web Speech API
const TTS_LANGUAGES = {
  'ur': 'ur-PK',    // Urdu
  'en': 'en-US',    // English
  'hi': 'hi-IN',    // Hindi
  'ar': 'ar-SA',    // Arabic
  'bn': 'bn-BD',    // Bengali
  'tr': 'tr-TR',    // Turkish
  'id': 'id-ID',    // Indonesian
  'fr': 'fr-FR',    // French
  'de': 'de-DE',    // German
  'ta': 'ta-IN',    // Tamil
  'ml': 'ml-IN',    // Malayalam
  'ru': 'ru-RU',    // Russian
};

// Get language code from translation ID
function getLanguageFromTranslation(translationId) {
  if (!translationId) return 'en';
  const langCode = translationId.split('.')[0];
  return langCode || 'en';
}

/**
 * Hook for Text-to-Speech translation audio
 * Uses Web Speech API to read translations aloud
 */
export function useTranslationAudio(options = {}) {
  const {
    translationId = 'en.sahih',
    rate = 0.9,        // Speech rate (0.1 to 10)
    pitch = 1,         // Pitch (0 to 2)
    volume = 1,        // Volume (0 to 1)
  } = options;

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [availableVoices, setAvailableVoices] = useState([]);
  const [currentVoice, setCurrentVoice] = useState(null);
  const utteranceRef = useRef(null);

  // Check if Speech Synthesis is supported
  useEffect(() => {
    const supported = 'speechSynthesis' in window;
    setIsSupported(supported);

    if (supported) {
      // Load voices
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        setAvailableVoices(voices);

        // Find best voice for current language
        const langCode = getLanguageFromTranslation(translationId);
        const ttsLang = TTS_LANGUAGES[langCode] || 'en-US';

        // Priority: exact match > language match > any English
        let voice = voices.find(v => v.lang === ttsLang);
        if (!voice) {
          voice = voices.find(v => v.lang.startsWith(langCode));
        }
        if (!voice) {
          voice = voices.find(v => v.lang.startsWith('en'));
        }
        setCurrentVoice(voice || null);
      };

      loadVoices();

      // Voices may load asynchronously
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }

    return () => {
      if (supported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [translationId]);

  // Speak translation text
  const speak = useCallback((text, onEnd = null) => {
    if (!isSupported || !text) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;

    // Set voice if available
    if (currentVoice) {
      utterance.voice = currentVoice;
    }

    // Set language
    const langCode = getLanguageFromTranslation(translationId);
    utterance.lang = TTS_LANGUAGES[langCode] || 'en-US';

    // Set speech parameters
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    // Event handlers
    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      if (onEnd) onEnd();
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event.error);
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onpause = () => {
      setIsPaused(true);
    };

    utterance.onresume = () => {
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [isSupported, currentVoice, translationId, rate, pitch, volume]);

  // Pause speech
  const pause = useCallback(() => {
    if (isSupported && isSpeaking) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, [isSupported, isSpeaking]);

  // Resume speech
  const resume = useCallback(() => {
    if (isSupported && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, [isSupported, isPaused]);

  // Stop speech
  const stop = useCallback(() => {
    if (isSupported) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
  }, [isSupported]);

  // Toggle pause/resume
  const togglePause = useCallback(() => {
    if (isPaused) {
      resume();
    } else {
      pause();
    }
  }, [isPaused, pause, resume]);

  return {
    speak,
    pause,
    resume,
    stop,
    togglePause,
    isSpeaking,
    isPaused,
    isSupported,
    availableVoices,
    currentVoice,
    setCurrentVoice,
  };
}

/**
 * Simple function to speak text (no hook needed)
 * Useful for one-off speech like word pronunciations
 */
export function speakText(text, lang = 'en', options = {}) {
  if (!text) return false;

  // Check if Speech Synthesis is supported
  if (!('speechSynthesis' in window)) {
    console.warn('Speech Synthesis not supported in this browser');
    return false;
  }

  const { rate = 0.9, pitch = 1, volume = 1 } = options;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  const ttsLang = TTS_LANGUAGES[lang] || lang || 'en-US';
  utterance.lang = ttsLang;
  utterance.rate = rate;
  utterance.pitch = pitch;
  utterance.volume = volume;

  // Function to speak with voice
  const doSpeak = () => {
    const voices = window.speechSynthesis.getVoices();

    if (voices.length > 0) {
      // Try to find a matching voice
      let voice = voices.find(v => v.lang === ttsLang);
      if (!voice) {
        voice = voices.find(v => v.lang.startsWith(lang));
      }
      if (!voice) {
        voice = voices.find(v => v.lang.startsWith('en'));
      }
      if (voice) {
        utterance.voice = voice;
      }
    }

    window.speechSynthesis.speak(utterance);
  };

  // Get voices - they may load asynchronously
  const voices = window.speechSynthesis.getVoices();

  if (voices.length > 0) {
    doSpeak();
  } else {
    // Wait for voices to load
    window.speechSynthesis.onvoiceschanged = () => {
      doSpeak();
    };
    // Fallback: try speaking anyway after a short delay
    setTimeout(doSpeak, 100);
  }

  return true;
}

export default useAudioPlayer;
