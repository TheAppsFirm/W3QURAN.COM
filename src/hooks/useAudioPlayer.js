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
function getGlobalAyahNumber(surahId, ayahNum) {
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
              // AbortError is expected when source changes - ignore it
              if (err.name === 'AbortError') {
                return;
              }
              console.error('Playback error:', err);
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

export default useAudioPlayer;
