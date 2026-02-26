/**
 * useVersesAPI Hook
 * Single Responsibility: Fetch Quran verses with Arabic text, translations, and tajweed
 *
 * @module hooks/useVersesAPI
 */

import { useState, useEffect } from 'react';
import { fetchWithCache, API_BASE } from './apiUtils';
import { parseTajweedText } from './useTajweed';
import { getCachedSurah } from '../data/offlineStorage';

/**
 * Remove Bismillah from the beginning of verse text
 * Bismillah has exactly 3 meem (م) letters in: بِسْمِ, الرَّحْمَٰنِ, الرَّحِيمِ
 *
 * @param {string} text - Arabic verse text
 * @returns {string} - Text with Bismillah removed
 */
function removeBismillah(text) {
  // Normalize: remove all diacritics/tashkeel for reliable matching
  const diacriticsRegex = /[\u064B-\u065F\u0670\u06D6-\u06ED\u06DF\u0640\u0651\u0652\u0653\u0654\u0655]/g;
  const normalized = text.replace(diacriticsRegex, '');

  // Check if it starts with بسم (with possible alef variations or no space)
  if (!normalized.match(/^بسم/)) {
    return text; // Doesn't start with Bismillah
  }

  // Count meem letters to find end of Bismillah
  let mCount = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    // Skip diacritics
    if (char.match(/[\u064B-\u065F\u0670\u06D6-\u06ED\u06DF\u0640\u0651-\u0655]/)) {
      continue;
    }
    if (char === 'م') {
      mCount++;
      // Bismillah ends after the 3rd م (in الرحيم)
      if (mCount === 3) {
        // Skip any trailing diacritics and whitespace
        let endIndex = i + 1;
        while (endIndex < text.length) {
          const nextChar = text[endIndex];
          if (nextChar.match(/[\u064B-\u065F\u0670\u06D6-\u06ED\u06DF\u0640\u0651-\u0655\s]/)) {
            endIndex++;
          } else {
            break;
          }
        }
        return text.substring(endIndex).trim();
      }
    }
  }

  return text; // Couldn't find pattern, return original
}

/**
 * Hook to fetch Quran verses from Al Quran Cloud API
 * Supports Arabic text, translations, tajweed, and word-by-word data
 *
 * @param {number} surahId - Surah number (1-114)
 * @param {Object} options - Configuration options
 * @param {string} [options.translationId='en.sahih'] - Translation edition ID
 * @param {boolean} [options.includeTajweed=false] - Include tajweed markup
 * @param {boolean} [options.includeWordByWord=false] - Include word-by-word data
 * @returns {Object} - { verses, loading, error, surahInfo }
 *
 * @example
 * const { verses, loading, error, surahInfo } = useVersesAPI(1, {
 *   translationId: 'ur.jalandhry',
 *   includeTajweed: true
 * });
 */
export function useVersesAPI(surahId, options = {}) {
  const {
    translationId = 'en.sahih',
    includeTajweed = false,
    includeWordByWord = false,
  } = options;

  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [surahInfo, setSurahInfo] = useState(null);

  useEffect(() => {
    // Validate surah ID
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

    async function fetchData() {
      // Helper to build verses from cached API data
      const buildFromCache = (cachedArabic, cachedTranslation) => {
        setSurahInfo({
          id: cachedArabic.number,
          name: cachedArabic.englishName,
          arabicName: cachedArabic.name,
          meaning: cachedArabic.englishNameTranslation,
          type: cachedArabic.revelationType,
          totalVerses: cachedArabic.numberOfAyahs,
        });

        const shouldStripBismillah = surahId !== 1 && surahId !== 9;
        const combinedVerses = cachedArabic.ayahs.map((ayah, index) => {
          let arabicText = ayah.text;
          if (shouldStripBismillah && ayah.numberInSurah === 1) {
            arabicText = removeBismillah(arabicText);
          }
          return {
            number: ayah.numberInSurah,
            arabic: arabicText,
            translation: cachedTranslation?.ayahs?.[index]?.text || '',
          };
        });

        setVerses(combinedVerses);
        setError(null);
        setLoading(false);
      };

      // 1) Cache-first: check IndexedDB for downloaded surahs
      //    This is faster and works offline — no reason to hit API if we have the data
      try {
        const [cachedArabic, cachedTranslation] = await Promise.all([
          getCachedSurah(surahId, 'quran-uthmani'),
          getCachedSurah(surahId, translationId),
        ]);

        if (cachedArabic?.ayahs && !cancelled) {
          buildFromCache(cachedArabic, cachedTranslation);
          return; // Done — no API call needed
        }
      } catch {
        // IndexedDB failed, fall through to API
      }

      if (cancelled) return;

      // 2) No cache — fetch from API
      try {
        // Build editions to fetch
        const editions = ['quran-uthmani']; // Base Arabic text

        if (translationId) {
          editions.push(translationId);
        }

        if (includeTajweed) {
          editions.push('quran-tajweed');
        }

        if (includeWordByWord) {
          editions.push('quran-wordbyword');
        }

        // Fetch all editions in one call
        const editionsParam = editions.join(',');
        const cacheKey = `surah-${surahId}-${editionsParam}`;
        const url = `${API_BASE}/surah/${surahId}/editions/${editionsParam}`;

        const data = await fetchWithCache(url, cacheKey);

        if (cancelled) return;

        // Process the response - data is an array of edition responses
        const arabicData = data.find(d => d.edition.identifier === 'quran-uthmani');
        const translationData = data.find(d => d.edition.identifier === translationId);
        const tajweedData = data.find(d => d.edition.identifier === 'quran-tajweed');
        const wordByWordData = data.find(d => d.edition.identifier === 'quran-wordbyword');

        if (!arabicData?.ayahs) {
          throw new Error('Arabic edition unavailable');
        }

        // Set surah info
        setSurahInfo({
          id: arabicData.number,
          name: arabicData.englishName,
          arabicName: arabicData.name,
          meaning: arabicData.englishNameTranslation,
          type: arabicData.revelationType,
          totalVerses: arabicData.numberOfAyahs,
        });

        // Strip Bismillah from first ayah (except Surah 1 where it IS ayah 1, and Surah 9 which has no Bismillah)
        const shouldStripBismillah = surahId !== 1 && surahId !== 9;

        // Combine verse data
        const combinedVerses = arabicData.ayahs.map((ayah, index) => {
          let arabicText = ayah.text;

          // Strip Bismillah from first ayah if needed (it's shown separately in header)
          if (shouldStripBismillah && ayah.numberInSurah === 1) {
            arabicText = removeBismillah(arabicText);
          }

          const verse = {
            number: ayah.numberInSurah,
            arabic: arabicText,
            translation: translationData?.ayahs?.[index]?.text || '',
          };

          if (includeTajweed && tajweedData) {
            verse.tajweed = tajweedData?.ayahs?.[index]?.text || '';
            verse.tajweedSegments = parseTajweedText(verse.tajweed);
          }

          if (includeWordByWord && wordByWordData) {
            verse.wordByWord = wordByWordData?.ayahs?.[index]?.text || '';
          }

          return verse;
        });

        setVerses(combinedVerses);
        setLoading(false);
      } catch (err) {
        if (cancelled) return;

        setVerses([]);
        setSurahInfo(null);
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [surahId, translationId, includeTajweed, includeWordByWord]);

  return { verses, loading, error, surahInfo };
}

/**
 * Fetch a single verse with translation
 *
 * @param {number} surahId - Surah number
 * @param {number} ayahNumber - Ayah number within the surah
 * @param {string} [translationId='en.sahih'] - Translation edition ID
 * @returns {Promise<Object|null>} - Verse data or null on error
 *
 * @example
 * const verse = await fetchSingleVerse(2, 255, 'ur.jalandhry');
 * console.log(verse.arabic, verse.translation);
 */
export async function fetchSingleVerse(surahId, ayahNumber, translationId = 'en.sahih') {
  const cacheKey = `verse-${surahId}-${ayahNumber}-${translationId}`;

  try {
    const url = `${API_BASE}/ayah/${surahId}:${ayahNumber}/editions/quran-uthmani,${translationId}`;
    const data = await fetchWithCache(url, cacheKey);

    return {
      arabic: data[0]?.text || '',
      translation: data[1]?.text || '',
      surahId,
      ayahNumber,
    };
  } catch {
    return null;
  }
}

export default useVersesAPI;
