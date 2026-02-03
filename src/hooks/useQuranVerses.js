/**
 * useQuranVerses Hook
 * Single Responsibility: Load Quran verses from quran-json package
 * Uses dynamic import for code splitting to reduce initial bundle size
 */

import { useState, useEffect } from 'react';

// Cache for loaded Quran data
let quranDataCache = null;
let loadingPromise = null;

/**
 * Dynamically load Quran data with caching
 */
async function loadQuranData() {
  if (quranDataCache) {
    return quranDataCache;
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = import('quran-json/dist/quran_en.json').then((module) => {
    quranDataCache = module.default;
    return quranDataCache;
  });

  return loadingPromise;
}

/**
 * Hook to get verses for a specific surah
 * @param {number} surahId - Surah ID (1-114)
 * @returns {Object} - { verses, loading, error, surahInfo }
 */
export function useQuranVerses(surahId) {
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [surahInfo, setSurahInfo] = useState(null);

  useEffect(() => {
    if (!surahId || surahId < 1 || surahId > 114) {
      setVerses([]);
      setSurahInfo(null);
      setLoading(false);
      setError('Invalid surah ID');
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    loadQuranData()
      .then((quranData) => {
        if (cancelled) return;

        // Find the surah in the data (array is 0-indexed, surah IDs are 1-indexed)
        const surah = quranData.find((s) => s.id === surahId);

        if (!surah) {
          throw new Error(`Surah ${surahId} not found`);
        }

        // Transform verses to our format
        const transformedVerses = surah.verses.map((verse) => ({
          ayah: verse.id,
          arabic: verse.text,
          transliteration: verse.transliteration || '',
          translation: verse.translation,
        }));

        setSurahInfo({
          id: surah.id,
          name: surah.transliteration,
          arabicName: surah.name,
          translation: surah.translation,
          type: surah.type,
          totalVerses: surah.total_verses,
        });

        setVerses(transformedVerses);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [surahId]);

  return { verses, loading, error, surahInfo };
}

/**
 * Get all surahs info (lightweight) - async version
 * @returns {Promise<Array>} - Array of surah metadata
 */
export async function getAllSurahsInfo() {
  const quranData = await loadQuranData();
  return quranData.map((surah) => ({
    id: surah.id,
    name: surah.transliteration,
    arabicName: surah.name,
    translation: surah.translation,
    type: surah.type,
    totalVerses: surah.total_verses,
  }));
}

/**
 * Get a specific verse by surah and ayah number - async version
 * @param {number} surahId - Surah ID (1-114)
 * @param {number} ayahNum - Ayah number
 * @returns {Promise<Object|null>} - Verse data or null
 */
export async function getVerse(surahId, ayahNum) {
  const quranData = await loadQuranData();
  const surah = quranData.find((s) => s.id === surahId);
  if (!surah) return null;

  const verse = surah.verses.find((v) => v.id === ayahNum);
  if (!verse) return null;

  return {
    ayah: verse.id,
    arabic: verse.text,
    transliteration: verse.transliteration || '',
    translation: verse.translation,
    surahId: surah.id,
    surahName: surah.transliteration,
  };
}

export default useQuranVerses;
