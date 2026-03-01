/**
 * useWordByWordAPI Hook
 * Single Responsibility: Fetch and manage word-by-word translations
 *
 * Supports multiple sources:
 * 1. Local data (wordMeanings.js) - Curated multi-language support
 * 2. QuranWBW API - Complete Urdu, Hindi, Bengali, etc.
 * 3. Authenticated Quran Foundation API
 * 4. Public Quran.com API (English only fallback)
 *
 * @module hooks/useWordByWordAPI
 */

import { useState, useEffect, useMemo } from 'react';
import { WORD_MEANINGS, hasLocalWordMeanings } from '../data/wordMeanings';
import { WORD_TRANSLATION_LANGUAGES } from './useTranslationsAPI';
import {
  QURAN_COM_API,
  QURANWBW_API,
  AUTH_API_ENDPOINT,
  getFromCache,
  setInCache,
  hasInCache,
} from './apiUtils';

/**
 * QuranWBW Language IDs mapping
 */
const QURANWBW_LANG_IDS = {
  'en': 1,   // English
  'ur': 2,   // Urdu
  'hi': 3,   // Hindi
  'id': 4,   // Indonesian
  'bn': 5,   // Bengali
  'tr': 6,   // Turkish
  'ta': 7,   // Tamil
  'de': 8,   // German
  'fr': 9,   // French
};

/**
 * Part of speech labels (user-friendly)
 */
export const POS_LABELS = {
  'N': { en: 'Noun', ar: 'اسم' },
  'PN': { en: 'Proper Noun', ar: 'اسم علم' },
  'ADJ': { en: 'Adjective', ar: 'صفة' },
  'V': { en: 'Verb', ar: 'فعل' },
  'PRON': { en: 'Pronoun', ar: 'ضمير' },
  'DEM': { en: 'Demonstrative', ar: 'اسم إشارة' },
  'REL': { en: 'Relative', ar: 'اسم موصول' },
  'COND': { en: 'Conditional', ar: 'شرطي' },
  'P': { en: 'Preposition', ar: 'حرف جر' },
  'CONJ': { en: 'Conjunction', ar: 'حرف عطف' },
  'INTG': { en: 'Interrogative', ar: 'استفهام' },
  'NEG': { en: 'Negative', ar: 'نفي' },
  'T': { en: 'Time', ar: 'ظرف زمان' },
  'LOC': { en: 'Location', ar: 'ظرف مكان' },
  'ACC': { en: 'Accusative', ar: 'منصوب' },
  'INL': { en: 'Initials', ar: 'حروف مقطعة' },
  'EMPH': { en: 'Emphatic', ar: 'توكيد' },
  'CIRC': { en: 'Circumstantial', ar: 'حالية' },
  'RES': { en: 'Restriction', ar: 'حصر' },
  'EXP': { en: 'Explanation', ar: 'تفسير' },
  'SUR': { en: 'Surprise', ar: 'مفاجأة' },
  'EXH': { en: 'Exhortation', ar: 'تحضيض' },
  'AVR': { en: 'Aversion', ar: 'ردع' },
  'INC': { en: 'Inceptive', ar: 'استئناف' },
  'ANS': { en: 'Answer', ar: 'جواب' },
  'REM': { en: 'Resumption', ar: 'استئناف' },
  'SUP': { en: 'Supplementary', ar: 'زائد' },
  'CERT': { en: 'Certainty', ar: 'تحقيق' },
  'RET': { en: 'Retraction', ar: 'استدراك' },
  'PRO': { en: 'Prohibition', ar: 'نهي' },
  'COM': { en: 'Comitative', ar: 'معية' },
  'FUT': { en: 'Future', ar: 'استقبال' },
  'VOC': { en: 'Vocative', ar: 'نداء' },
  'PREV': { en: 'Preventive', ar: 'كافة' },
  'AMD': { en: 'Amendment', ar: 'إضراب' },
  'IMPV': { en: 'Imperative', ar: 'أمر' },
  'PRP': { en: 'Purpose', ar: 'غرض' },
  'RSLT': { en: 'Result', ar: 'نتيجة' },
  'SUB': { en: 'Subordinate', ar: 'ناصب' },
  'EXL': { en: 'Exceptive', ar: 'استثناء' },
  'default': { en: 'Word', ar: 'كلمة' },
};

/**
 * Fetch word-by-word translations from local static files (Dr. Farhat Hashmi)
 * Complete coverage: all 114 surahs, 70,537 words
 * Includes: Urdu, Hindi, Roman transliteration, Arabic root words
 *
 * @param {number} surahId - Surah number (1-114)
 * @param {string} language - Language code ('ur' or 'hi')
 * @returns {Promise<Object|null>} - Words map { ayahNum: [{ arabic, meaning, transliteration, root }] } or null
 */
/**
 * Generate word audio URL from Quran.com CDN
 * Pattern: https://audio.qurancdn.com/wbw/{SSS}_{AAA}_{WWW}.mp3
 */
function getWordAudioUrl(surahId, ayahNum, wordPosition) {
  const s = String(surahId).padStart(3, '0');
  const a = String(ayahNum).padStart(3, '0');
  const w = String(wordPosition).padStart(3, '0');
  return `https://audio.qurancdn.com/wbw/${s}_${a}_${w}.mp3`;
}

async function fetchLocalFarhatWBW(surahId, language = 'ur') {
  if (language !== 'ur' && language !== 'hi') return null;

  const cacheKey = `wbw-farhat-${surahId}-${language}`;
  if (hasInCache(cacheKey)) {
    return getFromCache(cacheKey);
  }

  try {
    const response = await fetch(`/data/wbw/${surahId}.json`);
    if (!response.ok) return null;

    const data = await response.json();
    const wordsMap = {};

    Object.entries(data).forEach(([ayahNum, words]) => {
      wordsMap[parseInt(ayahNum)] = words.map((w, idx) => ({
        arabic: w.ar || '',
        meaning: language === 'hi' ? (w.hi || w.ur || '') : (w.ur || ''),
        transliteration: w.ro || '',
        root: w.rt || '',
        position: idx + 1,
        audioUrl: getWordAudioUrl(surahId, ayahNum, idx + 1),
      }));
    });

    setInCache(cacheKey, wordsMap);
    return wordsMap;
  } catch {
    return null;
  }
}

/**
 * Fetch word-by-word translations from QuranWBW.com static API
 * Has complete coverage for all 114 surahs in multiple languages including Urdu
 *
 * @param {number} surahId - Surah number
 * @param {string} language - Language code (ur, en, hi, etc.)
 * @returns {Promise<Object|null>} - Words data or null
 */
async function fetchQuranWBWWords(surahId, language = 'ur') {
  const langId = QURANWBW_LANG_IDS[language];
  if (!langId) {
    console.log(`[WBW] No QuranWBW langId for language: ${language}`);
    return null;
  }

  const cacheKey = `wbw-quranwbw-${language}-v1`;

  // Check if we have cached data for this language
  if (hasInCache(cacheKey)) {
    const cachedData = getFromCache(cacheKey);
    return cachedData[surahId] || null;
  }

  try {
    // Fetch the full language file (covers all surahs)
    const url = `${QURANWBW_API}/words-data/translations/${langId}.json`;
    console.log(`[WBW] Fetching words for language ${language} (ID: ${langId}):`, url);
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`[WBW] API error for ${language}:`, response.status);
      throw new Error(`QuranWBW API error: ${response.status}`);
    }

    const data = await response.json();

    // Cache the full language data
    setInCache(cacheKey, data);

    // Return data for requested surah
    return data[surahId] || null;
  } catch (error) {
    console.warn('QuranWBW fetch error:', error);
    return null;
  }
}

/**
 * Fetch Arabic word data from QuranWBW
 *
 * @param {number} surahId - Surah number
 * @param {number} fontType - Font type (1 = default)
 * @returns {Promise<Object|null>} - Arabic data or null
 */
async function fetchQuranWBWArabic(surahId, fontType = 1) {
  const cacheKey = `wbw-arabic-${fontType}-v1`;

  if (hasInCache(cacheKey)) {
    return getFromCache(cacheKey)[surahId] || null;
  }

  try {
    const url = `${QURANWBW_API}/words-data/arabic/${fontType}.json`;
    const response = await fetch(url);

    if (!response.ok) return null;

    const data = await response.json();
    setInCache(cacheKey, data);
    return data[surahId] || null;
  } catch {
    return null;
  }
}

/**
 * Fetch transliteration from QuranWBW
 *
 * @param {number} surahId - Surah number
 * @returns {Promise<Object|null>} - Transliteration data or null
 */
async function fetchQuranWBWTransliteration(surahId) {
  const cacheKey = 'wbw-transliteration-v1';

  if (hasInCache(cacheKey)) {
    return getFromCache(cacheKey)[surahId] || null;
  }

  try {
    const url = `${QURANWBW_API}/words-data/transliterations/1.json`;
    const response = await fetch(url);

    if (!response.ok) return null;

    const data = await response.json();
    setInCache(cacheKey, data);
    return data[surahId] || null;
  } catch {
    return null;
  }
}

/**
 * Fetch complete word-by-word data from QuranWBW (Arabic + Translation + Transliteration)
 *
 * @param {number} surahId - Surah number
 * @param {string} language - Language code
 * @returns {Promise<Object|null>} - Complete words map or null
 */
async function fetchCompleteQuranWBWData(surahId, language = 'ur') {
  try {
    // Fetch all data in parallel
    const [translationData, arabicData, transliterationData] = await Promise.all([
      fetchQuranWBWWords(surahId, language),
      fetchQuranWBWArabic(surahId),
      fetchQuranWBWTransliteration(surahId)
    ]);

    if (!translationData) return null;

    const wordsMap = {};

    Object.entries(translationData).forEach(([ayahNum, ayahData]) => {
      const verseNum = parseInt(ayahNum);
      const meanings = ayahData[0] || [];

      // Get Arabic words for this verse
      const arabicWords = arabicData?.[ayahNum]?.[0] || [];
      // Get transliterations for this verse
      const transliterations = transliterationData?.[ayahNum]?.[0] || [];

      wordsMap[verseNum] = meanings.map((meaning, idx) => ({
        arabic: arabicWords[idx] || '',
        meaning: meaning || '',
        transliteration: transliterations[idx] || '',
        position: idx + 1,
        audioUrl: getWordAudioUrl(surahId, ayahNum, idx + 1),
      }));
    });

    return wordsMap;
  } catch (error) {
    console.warn('QuranWBW complete fetch error:', error);
    return null;
  }
}

/**
 * Fetch word-by-word translations from authenticated Quran Foundation API
 * Supports multiple languages including Urdu, English, French, etc.
 *
 * @param {number} surahId - Surah number
 * @param {string} language - Language code
 * @returns {Promise<Object>} - { data, authenticated, language }
 */
async function fetchAuthenticatedWords(surahId, language = 'en') {
  const cacheKey = `wbw-auth-${surahId}-${language}-v1`;

  if (hasInCache(cacheKey)) {
    return { data: getFromCache(cacheKey), authenticated: true };
  }

  try {
    // Use our Cloudflare Function for authenticated requests
    const url = `${AUTH_API_ENDPOINT}?surah=${surahId}&lang=${language}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Auth API error: ${response.status}`);
    }

    const result = await response.json();

    if (result.error || result.fallback) {
      throw new Error(result.error || 'Fallback required');
    }

    setInCache(cacheKey, result.words);
    return { data: result.words, authenticated: true, language: result.language };
  } catch {
    // Auth endpoint failed, return null to trigger fallback
    return { data: null, authenticated: false };
  }
}

/**
 * Fetch word-by-word translations from Quran.com API (public, English only)
 * Fallback when authenticated API is unavailable
 *
 * @param {number} surahId - Surah number
 * @returns {Promise<Object|null>} - Words map or null
 */
async function fetchPublicWords(surahId) {
  const cacheKey = `wbw-public-${surahId}-en-v3`;

  if (hasInCache(cacheKey)) {
    return getFromCache(cacheKey);
  }

  try {
    const url = `${QURAN_COM_API}/verses/by_chapter/${surahId}?words=true&word_translation_language=en&per_page=300&word_fields=text_uthmani,text_indopak,code_v1`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Quran.com API error: ${response.status}`);
    }

    const data = await response.json();

    const wordsMap = {};
    data.verses?.forEach(verse => {
      const verseNum = verse.verse_number;
      wordsMap[verseNum] = verse.words
        ?.filter(w => w.char_type_name === 'word')
        ?.map(w => ({
          arabic: w.text_uthmani || w.text,
          meaning: w.translation?.text || '',
          transliteration: w.transliteration?.text || '',
          audioUrl: w.audio_url ? `https://audio.qurancdn.com/${w.audio_url}` : null,
          position: w.position,
        })) || [];
    });

    setInCache(cacheKey, wordsMap);
    return wordsMap;
  } catch {
    return null;
  }
}

/**
 * Fetch word-by-word translations - tries authenticated API first, then public
 * Authenticated API supports: en, ur, bn, fr, de, id, tr, ru, etc.
 *
 * @param {number} surahId - Surah number
 * @param {string} translationLang - Language code
 * @returns {Promise<Object|null>} - Words map or null
 */
export async function fetchMultilingualWords(surahId, translationLang = 'en') {
  // Try authenticated API first (supports multiple languages)
  const authResult = await fetchAuthenticatedWords(surahId, translationLang);

  if (authResult.authenticated && authResult.data) {
    return authResult.data;
  }

  // Fall back to public API (English only)
  return fetchPublicWords(surahId);
}

/**
 * Hook to fetch word-by-word translations
 * Priority: 1) Local data (if available) 2) QuranWBW API 3) Authenticated API 4) Public API
 *
 * @param {number} surahId - Surah number (1-114)
 * @param {string} [translationId='en.sahih'] - Translation ID
 * @returns {Object} - { wordsMap, loading, error, language, userLanguage, isLocalData, isAuthenticated, isFallback }
 *
 * @example
 * const { wordsMap, loading, isFallback } = useMultilingualWords(1, 'ur.jalandhry');
 * const words = wordsMap[1]; // Words for verse 1
 */
export function useMultilingualWords(surahId, translationId = 'en.sahih') {
  const [wordsMap, setWordsMap] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLocalData, setIsLocalData] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [isFallback, setIsFallback] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Get the user's preferred language from translation ID
  const userLang = useMemo(() => {
    return WORD_TRANSLATION_LANGUAGES[translationId] || 'en';
  }, [translationId]);

  useEffect(() => {
    setCurrentLang(userLang);
    setWordsMap({});
    setIsFallback(false);
  }, [userLang]);

  useEffect(() => {
    if (!surahId || surahId < 1 || surahId > 114) {
      setLoading(false);
      setWordsMap({});
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    const targetLang = userLang;

    async function fetchWords() {
      try {
        // Priority 1: Try local Farhat Hashmi data (Urdu/Hindi, all 114 surahs, offline-capable)
        // Preferred over old wordMeanings.js for ur/hi because it covers all surahs consistently
        if (targetLang === 'ur' || targetLang === 'hi') {
          const farhatData = await fetchLocalFarhatWBW(surahId, targetLang);
          if (!cancelled && farhatData && Object.keys(farhatData).length > 0) {
            setWordsMap(farhatData);
            setIsLocalData(true);
            setIsAuthenticated(false);
            setIsFallback(false);
            setCurrentLang(targetLang);
            setLoading(false);
            return;
          }
        }

        // Priority 2: Check old local data (curated multi-language support for surahs 1,112,113,114)
        if (hasLocalWordMeanings(surahId)) {
          const surahData = WORD_MEANINGS[surahId];
          const localWordsMap = {};

          Object.entries(surahData).forEach(([ayahNum, words]) => {
            localWordsMap[parseInt(ayahNum)] = words.map((w, idx) => {
              const meaning = w[targetLang] || w.en;
              return {
                arabic: w.ar,
                meaning: meaning,
                transliteration: w.transliteration || '',
                audioUrl: getWordAudioUrl(surahId, ayahNum, idx + 1),
              };
            });
          });

          if (!cancelled) {
            setWordsMap(localWordsMap);
            setIsLocalData(true);
            setIsAuthenticated(false);
            setIsFallback(!WORD_MEANINGS[surahId]?.[1]?.[0]?.[targetLang]);
            setCurrentLang(targetLang);
            setLoading(false);
          }
          return;
        }

        // Priority 3: Try QuranWBW API (has complete Urdu, Hindi, Bengali, Turkish, English, etc.)
        if (QURANWBW_LANG_IDS[targetLang]) {
          const wbwData = await fetchCompleteQuranWBWData(surahId, targetLang);

          if (!cancelled && wbwData && Object.keys(wbwData).length > 0) {
            setWordsMap(wbwData);
            setIsLocalData(false);
            setIsAuthenticated(true);
            setIsFallback(false);
            setCurrentLang(targetLang);
            setLoading(false);
            return;
          }
        }

        // Priority 3: Try authenticated API (Quran Foundation - limited language support)
        const authResult = await fetchAuthenticatedWords(surahId, targetLang);

        if (!cancelled && authResult.authenticated && authResult.data) {
          setWordsMap(authResult.data);
          setIsLocalData(false);
          setIsAuthenticated(true);
          setIsFallback(false);
          setCurrentLang(targetLang);
          setLoading(false);
          return;
        }

        // Priority 4: Fall back to public API (English only)
        const publicData = await fetchPublicWords(surahId);

        if (cancelled) return;

        if (publicData) {
          setWordsMap(publicData);
          setIsLocalData(false);
          setIsAuthenticated(false);
          setIsFallback(targetLang !== 'en');
          setCurrentLang('en');
        } else {
          setError('Failed to load word meanings');
        }
        setLoading(false);
      } catch (err) {
        if (cancelled) return;
        setError(err.message);
        setLoading(false);
      }
    }

    fetchWords();

    return () => {
      cancelled = true;
    };
  }, [surahId, userLang]);

  return {
    wordsMap,
    loading,
    error,
    language: currentLang,
    userLanguage: userLang,
    isLocalData,
    isAuthenticated,
    isFallback
  };
}

/**
 * Get word meaning for a specific verse
 *
 * @param {Object} wordsMap - Words map from useMultilingualWords
 * @param {number} verseNumber - Verse number
 * @returns {Array} - Array of word objects
 *
 * @example
 * const words = getWordMeanings(wordsMap, 1);
 * // [{ arabic: 'بِسْمِ', meaning: 'In the name', transliteration: 'bismi' }, ...]
 */
export function getWordMeanings(wordsMap, verseNumber) {
  return wordsMap[verseNumber] || [];
}

/**
 * Fetch word morphology data for a specific verse from Quran.com API
 * Returns root word, part of speech, and grammatical features
 *
 * @param {string} verseKey - Verse key (e.g., "2:255")
 * @returns {Promise<Object|null>} - Morphology data or null
 */
export async function fetchWordMorphology(verseKey) {
  if (!verseKey) return null;

  const cacheKey = `morphology-${verseKey}`;

  if (hasInCache(cacheKey)) {
    return getFromCache(cacheKey);
  }

  try {
    // Quran.com morphology endpoint
    const url = `${QURAN_COM_API}/verses/by_key/${verseKey}?words=true&word_fields=text_uthmani`;
    const response = await fetch(url);

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    // Extract morphology for each word
    const morphologyMap = {};

    data.verse?.words?.forEach((word, idx) => {
      if (word.char_type_name === 'word') {
        morphologyMap[idx + 1] = {
          position: word.position,
        };
      }
    });

    setInCache(cacheKey, morphologyMap);
    return morphologyMap;
  } catch {
    return null;
  }
}

/**
 * Legacy hook for basic word-by-word data
 * Fetches from Al Quran Cloud API
 *
 * @param {number} surahId - Surah number
 * @param {number} ayahNumber - Ayah number
 * @returns {Object} - { words, loading, error }
 * @deprecated Use useMultilingualWords instead for better language support
 */
export function useWordByWord(surahId, ayahNumber) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!surahId || !ayahNumber) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    async function fetchWordByWord() {
      try {
        const API_BASE = 'https://api.alquran.cloud/v1';
        const cacheKey = `wbw-legacy-${surahId}-${ayahNumber}`;

        // Check cache first
        if (hasInCache(cacheKey)) {
          setWords(getFromCache(cacheKey));
          setLoading(false);
          return;
        }

        // Fetch word-by-word
        const wbwUrl = `${API_BASE}/ayah/${surahId}:${ayahNumber}/quran-wordbyword`;
        const wbwResponse = await fetch(wbwUrl);
        if (!wbwResponse.ok) throw new Error('Failed to fetch word-by-word');
        const wbwData = await wbwResponse.json();

        if (cancelled) return;

        // Parse word by word - format is "word1 | word2 | word3"
        const wordText = wbwData.data?.text || '';
        const wordMeanings = wordText.split('|').map(w => w.trim()).filter(Boolean);

        // We also need the Arabic words
        const arabicUrl = `${API_BASE}/ayah/${surahId}:${ayahNumber}/quran-uthmani`;
        const arabicResponse = await fetch(arabicUrl);
        if (!arabicResponse.ok) throw new Error('Failed to fetch Arabic');
        const arabicData = await arabicResponse.json();

        const arabicWords = arabicData.data?.text?.split(' ').filter(Boolean) || [];

        // Combine Arabic words with meanings
        const combined = arabicWords.map((word, index) => ({
          arabic: word,
          meaning: wordMeanings[index] || '',
          index: index,
        }));

        setInCache(cacheKey, combined);
        setWords(combined);
        setLoading(false);
      } catch (err) {
        if (cancelled) return;
        setError(err.message);
        setLoading(false);
      }
    }

    fetchWordByWord();

    return () => {
      cancelled = true;
    };
  }, [surahId, ayahNumber]);

  return { words, loading, error };
}

export default useMultilingualWords;
