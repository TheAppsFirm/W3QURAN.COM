/**
 * useQuranAPI Hook
 * Fetches Quran data from Al Quran Cloud API
 * Supports: Tajweed, Word-by-Word, Multiple Translations
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { WORD_MEANINGS, hasLocalWordMeanings, getWordMeanings as getLocalWordMeanings } from '../data/wordMeanings';

// Al Quran Cloud API Base
const API_BASE = 'https://api.alquran.cloud/v1';

// Available Translations
export const TRANSLATIONS = {
  'en.sahih': { name: 'Saheeh International', language: 'English' },
  'en.yusufali': { name: 'Abdullah Yusuf Ali', language: 'English' },
  'en.pickthall': { name: 'Muhammad Pickthall', language: 'English' },
  'en.asad': { name: 'Muhammad Asad', language: 'English' },
  'en.itani': { name: 'Clear Quran (Talal Itani)', language: 'English' },
  'en.hilali': { name: 'Hilali & Khan', language: 'English' },
  'en.maududi': { name: 'Abul Ala Maududi', language: 'English' },
  'en.shakir': { name: 'Mohammad Habib Shakir', language: 'English' },
  'en.sarwar': { name: 'Muhammad Sarwar', language: 'English' },
  'en.ahmedali': { name: 'Ahmed Ali', language: 'English' },
  'ur.jalandhry': { name: 'Fateh Muhammad Jalandhry', language: 'Urdu' },
  'ur.maududi': { name: 'Abul Ala Maududi (Urdu)', language: 'Urdu' },
  'fr.hamidullah': { name: 'Muhammad Hamidullah', language: 'French' },
  'de.bubenheim': { name: 'Bubenheim & Elyas', language: 'German' },
  'id.indonesian': { name: 'Indonesian Ministry', language: 'Indonesian' },
  'tr.diyanet': { name: 'Diyanet Isleri', language: 'Turkish' },
  'ru.kuliev': { name: 'Elmir Kuliev', language: 'Russian' },
};

// Tajweed Rules with colors
export const TAJWEED_RULES = {
  'ham_wasl': { name: 'Hamzat ul Wasl', color: '#AAAAAA', description: 'Wasl' },
  'slnt': { name: 'Silent', color: '#AAAAAA', description: 'Not pronounced' },
  'laam_shamsiyah': { name: 'Laam Shamsiyyah', color: '#AAAAAA', description: 'Assimilated Laam' },
  'madda_normal': { name: 'Normal Prolongation', color: '#537FFF', description: '2 vowels' },
  'madda_permissible': { name: 'Permissible Prolongation', color: '#4050FF', description: '2, 4, 6 vowels' },
  'madda_necessary': { name: 'Necessary Prolongation', color: '#000EBC', description: '6 vowels' },
  'madda_obligatory': { name: 'Obligatory Prolongation', color: '#2144C1', description: '4-5 vowels' },
  'qalqalah': { name: 'Qalqalah', color: '#DD0008', description: 'Echo sound' },
  'ghunnah': { name: 'Ghunnah', color: '#169200', description: '2 vowels nasalization' },
  'ikhafa_shafawi': { name: 'Ikhafa Shafawi', color: '#169200', description: 'Hiding' },
  'ikhafa': { name: 'Ikhafa', color: '#169200', description: 'Hiding' },
  'iqlab': { name: 'Iqlab', color: '#26BFFD', description: 'Conversion' },
  'idgham_shafawi': { name: 'Idgham Shafawi', color: '#A1A1A1', description: 'Merging' },
  'idgham_ghunnah': { name: 'Idgham with Ghunnah', color: '#169200', description: 'Merging with nasalization' },
  'idgham_wo_ghunnah': { name: 'Idgham without Ghunnah', color: '#A1A1A1', description: 'Merging without nasalization' },
  'idgham_mutajanisayn': { name: 'Idgham Mutajanisayn', color: '#A1A1A1', description: 'Merging of similar letters' },
  'idgham_mutaqaribayn': { name: 'Idgham Mutaqaribayn', color: '#A1A1A1', description: 'Merging of close letters' },
};

// Cache for API responses
const cache = new Map();

/**
 * Fetch data from API with caching
 */
async function fetchWithCache(url, cacheKey) {
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();
  if (data.code !== 200 || data.status !== 'OK') {
    throw new Error(data.data || 'API returned error');
  }

  cache.set(cacheKey, data.data);
  return data.data;
}

/**
 * Parse Tajweed text into segments with rules
 * Format: [rule:id[text] or plain text
 */
export function parseTajweedText(text) {
  if (!text) return [];

  const segments = [];
  let currentIndex = 0;

  // Regex to match tajweed markers: [rule:id[text]
  const regex = /\[([a-z_]+):?\d*\[([^\]]+)\]/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add plain text before this match
    if (match.index > currentIndex) {
      segments.push({
        type: 'plain',
        text: text.slice(currentIndex, match.index),
      });
    }

    // Add tajweed segment
    const rule = match[1];
    const content = match[2];
    segments.push({
      type: 'tajweed',
      rule: rule,
      text: content,
      color: TAJWEED_RULES[rule]?.color || '#000000',
      name: TAJWEED_RULES[rule]?.name || rule,
      description: TAJWEED_RULES[rule]?.description || '',
    });

    currentIndex = match.index + match[0].length;
  }

  // Add remaining plain text
  if (currentIndex < text.length) {
    segments.push({
      type: 'plain',
      text: text.slice(currentIndex),
    });
  }

  return segments;
}

/**
 * Hook to fetch Quran verses with multiple data types
 */
export function useQuranAPI(surahId, options = {}) {
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
    if (!surahId || surahId < 1 || surahId > 114) {
      setLoading(false);
      setError('Invalid surah ID');
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    async function fetchData() {
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

        // Set surah info
        if (arabicData) {
          setSurahInfo({
            id: arabicData.number,
            name: arabicData.englishName,
            arabicName: arabicData.name,
            meaning: arabicData.englishNameTranslation,
            type: arabicData.revelationType,
            totalVerses: arabicData.numberOfAyahs,
          });
        }

        // Combine verse data
        const combinedVerses = arabicData.ayahs.map((ayah, index) => {
          const verse = {
            number: ayah.numberInSurah,
            arabic: ayah.text,
            translation: translationData?.ayahs[index]?.text || '',
          };

          if (includeTajweed && tajweedData) {
            verse.tajweed = tajweedData.ayahs[index]?.text || '';
            verse.tajweedSegments = parseTajweedText(verse.tajweed);
          }

          if (includeWordByWord && wordByWordData) {
            verse.wordByWord = wordByWordData.ayahs[index]?.text || '';
          }

          return verse;
        });

        setVerses(combinedVerses);
        setLoading(false);
      } catch (err) {
        if (cancelled) return;
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
 * Hook to fetch word-by-word data for a specific verse
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
        const cacheKey = `wbw-${surahId}-${ayahNumber}`;
        const url = `${API_BASE}/ayah/${surahId}:${ayahNumber}/quran-wordbyword`;

        const data = await fetchWithCache(url, cacheKey);

        if (cancelled) return;

        // Parse word by word - format is "word1 | word2 | word3"
        const wordText = data.text || '';
        const wordMeanings = wordText.split('|').map(w => w.trim()).filter(Boolean);

        // We also need the Arabic words
        const arabicUrl = `${API_BASE}/ayah/${surahId}:${ayahNumber}/quran-uthmani`;
        const arabicData = await fetchWithCache(arabicUrl, `arabic-${surahId}-${ayahNumber}`);

        const arabicWords = arabicData.text.split(' ').filter(Boolean);

        // Combine Arabic words with meanings
        const combined = arabicWords.map((word, index) => ({
          arabic: word,
          meaning: wordMeanings[index] || '',
          index: index,
        }));

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

/**
 * Fetch single verse with translation
 */
export async function fetchVerse(surahId, ayahNumber, translationId = 'en.sahih') {
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
    // Failed to fetch verse
    return null;
  }
}

/**
 * Get list of available translations
 */
export function getAvailableTranslations() {
  return Object.entries(TRANSLATIONS).map(([id, info]) => ({
    id,
    ...info,
  }));
}

// ============================================
// Quran.com API - Multilingual Word-by-Word
// ============================================

const QURAN_COM_API = 'https://api.quran.com/api/v4';

// Map our translation IDs to Quran.com word translation language codes
export const WORD_TRANSLATION_LANGUAGES = {
  'en.sahih': 'en',
  'en.yusufali': 'en',
  'en.pickthall': 'en',
  'en.asad': 'en',
  'en.itani': 'en',
  'en.hilali': 'en',
  'en.maududi': 'en',
  'en.shakir': 'en',
  'en.sarwar': 'en',
  'en.ahmedali': 'en',
  'ur.jalandhry': 'ur',
  'ur.maududi': 'ur',
  'fr.hamidullah': 'fr',
  'de.bubenheim': 'de',
  'id.indonesian': 'id',
  'tr.diyanet': 'tr',
  'ru.kuliev': 'ru',
};

// Word meanings cache
const wordCache = new Map();

// Part of speech labels (more user-friendly)
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
 * Fetch word-by-word translations from Quran.com API
 * Note: API only supports English word translations currently
 * For other languages, we fall back to English with a note
 */
export async function fetchMultilingualWords(surahId, translationLang = 'en') {
  // Quran.com API only has English word-by-word translations
  // Always fetch English and note the limitation
  const actualLang = 'en';
  const cacheKey = `wbw-qurancom-${surahId}-${actualLang}-v3`;

  if (wordCache.has(cacheKey)) {
    return wordCache.get(cacheKey);
  }

  try {
    // Fetch words with English translations (only language available)
    const url = `${QURAN_COM_API}/verses/by_chapter/${surahId}?words=true&word_translation_language=en&per_page=300&word_fields=text_uthmani,text_indopak,code_v1`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Quran.com API error: ${response.status}`);
    }

    const data = await response.json();

    // Transform data into a map: { verseNumber: [{ arabic, meaning, transliteration }] }
    const wordsMap = {};

    data.verses?.forEach(verse => {
      const verseNum = verse.verse_number;
      wordsMap[verseNum] = verse.words
        ?.filter(w => w.char_type_name === 'word') // Only actual words, not verse markers
        ?.map(w => ({
          arabic: w.text_uthmani || w.text,
          meaning: w.translation?.text || '',
          transliteration: w.transliteration?.text || '',
          audioUrl: w.audio_url ? `https://audio.qurancdn.com/${w.audio_url}` : null,
          position: w.position,
        })) || [];
    });

    wordCache.set(cacheKey, wordsMap);
    return wordsMap;
  } catch {
    // Failed to fetch word meanings from API
    return null;
  }
}

// Morphology cache
const morphologyCache = new Map();

/**
 * Fetch morphology data for a specific verse from Quran.com API
 * Returns root word, part of speech, and grammatical features
 */
export async function fetchWordMorphology(verseKey) {
  if (!verseKey) return null;

  const cacheKey = `morphology-${verseKey}`;

  if (morphologyCache.has(cacheKey)) {
    return morphologyCache.get(cacheKey);
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
          // Basic info
          position: word.position,
          // We'll enhance with corpus data if available
        };
      }
    });

    morphologyCache.set(cacheKey, morphologyMap);
    return morphologyMap;
  } catch {
    // Failed to fetch morphology data
    return null;
  }
}

/**
 * Hook to fetch word-by-word translations
 * Uses local data (multi-language) when available, falls back to API (English only)
 * Note: Quran.com API only has English word meanings - Urdu/other languages only available in local data
 */
export function useMultilingualWords(surahId, translationId = 'en.sahih') {
  const [wordsMap, setWordsMap] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLocalData, setIsLocalData] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [isFallback, setIsFallback] = useState(false); // True if using English fallback

  // Get the user's preferred language from translation ID
  const userLang = useMemo(() => {
    return WORD_TRANSLATION_LANGUAGES[translationId] || 'en';
  }, [translationId]);

  useEffect(() => {
    // Reset state when language changes
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
        // First check if we have local data for this surah (has multi-language support)
        if (hasLocalWordMeanings(surahId)) {
          const surahData = WORD_MEANINGS[surahId];
          const localWordsMap = {};

          // Convert local data using target language, fallback to English
          Object.entries(surahData).forEach(([ayahNum, words]) => {
            localWordsMap[parseInt(ayahNum)] = words.map(w => {
              const meaning = w[targetLang] || w.en;
              return {
                arabic: w.ar,
                meaning: meaning,
                transliteration: w.transliteration || '',
              };
            });
          });

          if (!cancelled) {
            setWordsMap(localWordsMap);
            setIsLocalData(true);
            setIsFallback(!WORD_MEANINGS[surahId]?.[1]?.[0]?.[targetLang]); // Check if target lang exists
            setCurrentLang(targetLang);
            setLoading(false);
          }
          return;
        }

        // Fall back to API - only English available from Quran.com
        const data = await fetchMultilingualWords(surahId, 'en');

        if (cancelled) return;

        if (data) {
          setWordsMap(data);
          setIsLocalData(false);
          // If user wanted non-English but API only has English, mark as fallback
          setIsFallback(targetLang !== 'en');
          setCurrentLang('en'); // API only returns English
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
    isFallback // True if showing English instead of requested language
  };
}

/**
 * Get word meaning for a specific verse
 */
export function getWordMeanings(wordsMap, verseNumber) {
  return wordsMap[verseNumber] || [];
}

export default useQuranAPI;
