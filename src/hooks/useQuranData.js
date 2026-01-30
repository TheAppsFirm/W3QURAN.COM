/**
 * useQuranData Hook
 * Single Responsibility: Fetch and manage Quran data
 *
 * Features:
 * - Automatic caching
 * - Loading states
 * - Error handling
 * - Retry logic
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { QuranApi } from '../services/api';

// Simple in-memory cache
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/**
 * Get cached data or null if expired
 */
const getCached = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  cache.delete(key);
  return null;
};

/**
 * Set cache data
 */
const setCache = (key, data) => {
  cache.set(key, { data, timestamp: Date.now() });
};

/**
 * Hook for fetching all chapters
 * @returns {Object} - { chapters, loading, error, refetch }
 */
export const useChapters = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchChapters = useCallback(async () => {
    const cacheKey = 'chapters';
    const cached = getCached(cacheKey);

    if (cached) {
      setChapters(cached);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await QuranApi.getChapters();
      setChapters(data);
      setCache(cacheKey, data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchChapters();
  }, [fetchChapters]);

  return { chapters, loading, error, refetch: fetchChapters };
};

/**
 * Hook for fetching verses of a chapter
 * @param {number} chapterId - Chapter ID
 * @param {Object} options - { translationId, enabled }
 * @returns {Object} - { verses, loading, error, refetch }
 */
export const useVerses = (chapterId, options = {}) => {
  const { translationId = 'en.sahih', enabled = true } = options;
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVerses = useCallback(async () => {
    if (!chapterId || !enabled) return;

    const cacheKey = `verses_${chapterId}_${translationId}`;
    const cached = getCached(cacheKey);

    if (cached) {
      setVerses(cached);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await QuranApi.getVersesByChapter(chapterId, { translationId });
      setVerses(data);
      setCache(cacheKey, data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [chapterId, translationId, enabled]);

  useEffect(() => {
    fetchVerses();
  }, [fetchVerses]);

  return { verses, loading, error, refetch: fetchVerses };
};

/**
 * Hook for fetching a single verse
 * @param {string} verseKey - Verse key (e.g., "2:255")
 * @param {Object} options - { translationId, enabled }
 * @returns {Object} - { verse, loading, error }
 */
export const useVerse = (verseKey, options = {}) => {
  const { translationId = 'en.sahih', enabled = true } = options;
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!verseKey || !enabled) return;

    const cacheKey = `verse_${verseKey}_${translationId}`;
    const cached = getCached(cacheKey);

    if (cached) {
      setVerse(cached);
      return;
    }

    const fetchVerse = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await QuranApi.getVerseByKey(verseKey, { translationId });
        setVerse(data);
        setCache(cacheKey, data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVerse();
  }, [verseKey, translationId, enabled]);

  return { verse, loading, error };
};

/**
 * Hook for fetching a random verse
 * @returns {Object} - { verse, loading, error, fetchNew }
 */
export const useRandomVerse = () => {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNew = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await QuranApi.getRandomVerse();
      setVerse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNew();
  }, [fetchNew]);

  return { verse, loading, error, fetchNew };
};

/**
 * Hook for fetching reciters
 * @returns {Object} - { reciters, loading, error }
 */
export const useReciters = () => {
  const [reciters, setReciters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = 'reciters';
    const cached = getCached(cacheKey);

    if (cached) {
      setReciters(cached);
      setLoading(false);
      return;
    }

    const fetchReciters = async () => {
      try {
        const data = await QuranApi.getReciters();
        setReciters(data);
        setCache(cacheKey, data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReciters();
  }, []);

  return { reciters, loading, error };
};

/**
 * Hook for fetching translations
 * @returns {Object} - { translations, loading, error }
 */
export const useTranslations = () => {
  const [translations, setTranslations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = 'translations';
    const cached = getCached(cacheKey);

    if (cached) {
      setTranslations(cached);
      setLoading(false);
      return;
    }

    const fetchTranslations = async () => {
      try {
        const data = await QuranApi.getTranslations();
        setTranslations(data);
        setCache(cacheKey, data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTranslations();
  }, []);

  return { translations, loading, error };
};

/**
 * Hook for searching the Quran
 * @param {string} query - Search query
 * @param {Object} options - { surah, language, enabled }
 * @returns {Object} - { results, loading, error }
 */
export const useSearch = (query, options = {}) => {
  const { surah = 'all', language = 'en', enabled = true } = options;
  const [results, setResults] = useState({ count: 0, matches: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query || query.length < 2 || !enabled) {
      setResults({ count: 0, matches: [] });
      return;
    }

    const searchQuran = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await QuranApi.search(query, { surah, language });
        setResults(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    searchQuran();
  }, [query, surah, language, enabled]);

  return { results, loading, error };
};

/**
 * Hook for audio playback
 * @param {number} chapterId - Chapter ID
 * @param {string} reciterId - Reciter ID
 * @returns {Object} - { audioData, loading, error }
 */
export const useAudio = (chapterId, reciterId = 'ar.alafasy') => {
  const [audioData, setAudioData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!chapterId) return;

    const cacheKey = `audio_${chapterId}_${reciterId}`;
    const cached = getCached(cacheKey);

    if (cached) {
      setAudioData(cached);
      return;
    }

    const fetchAudio = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await QuranApi.getAudioUrl(chapterId, reciterId);
        setAudioData(data);
        setCache(cacheKey, data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAudio();
  }, [chapterId, reciterId]);

  return { audioData, loading, error };
};

// Export all hooks
export default {
  useChapters,
  useVerses,
  useVerse,
  useRandomVerse,
  useReciters,
  useTranslations,
  useSearch,
  useAudio,
};
