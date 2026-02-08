/**
 * useQuranAPI Hook
 * Fetches Quran data from Al Quran Cloud API
 * Supports: Tajweed, Word-by-Word, Multiple Translations
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { WORD_MEANINGS, hasLocalWordMeanings, getWordMeanings as getLocalWordMeanings } from '../data/wordMeanings';

// Al Quran Cloud API Base
const API_BASE = 'https://api.alquran.cloud/v1';

// Available Translations - Organized by Language
export const TRANSLATIONS = {
  // === URDU TRANSLATIONS (اردو) ===
  'ur.jalandhry': { name: 'فتح محمد جالندھری', nameEn: 'Fateh Muhammad Jalandhry', language: 'Urdu', languageNative: 'اردو' },
  'ur.maududi': { name: 'ابوالاعلیٰ مودودی', nameEn: 'Abul Ala Maududi', language: 'Urdu', languageNative: 'اردو' },
  'ur.junagarhi': { name: 'محمد جوناگڑھی', nameEn: 'Muhammad Junagarhi', language: 'Urdu', languageNative: 'اردو' },
  'ur.kanzuliman': { name: 'احمد رضا خان', nameEn: 'Ahmed Raza Khan (Kanz ul Iman)', language: 'Urdu', languageNative: 'اردو' },
  'ur.qadri': { name: 'طاہر القادری', nameEn: 'Tahir ul Qadri', language: 'Urdu', languageNative: 'اردو' },
  'ur.jawadi': { name: 'سید زیشان حیدر جوادی', nameEn: 'Syed Zeeshan Haider Jawadi', language: 'Urdu', languageNative: 'اردو' },
  'ur.ahmedali': { name: 'احمد علی', nameEn: 'Ahmed Ali (Urdu)', language: 'Urdu', languageNative: 'اردو' },
  'ur.najafi': { name: 'محمد حسین نجفی', nameEn: 'Muhammad Hussain Najafi', language: 'Urdu', languageNative: 'اردو' },

  // === ENGLISH TRANSLATIONS ===
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

  // === BENGALI TRANSLATIONS (বাংলা) ===
  'bn.bengali': { name: 'মুহিউদ্দীন খান', nameEn: 'Muhiuddin Khan', language: 'Bengali', languageNative: 'বাংলা' },
  'bn.hoque': { name: 'জহুরুল হক', nameEn: 'Zohurul Hoque', language: 'Bengali', languageNative: 'বাংলা' },

  // === OTHER LANGUAGES ===
  'fr.hamidullah': { name: 'Muhammad Hamidullah', language: 'French' },
  'de.bubenheim': { name: 'Bubenheim & Elyas', language: 'German' },
  'id.indonesian': { name: 'Indonesian Ministry', language: 'Indonesian' },
  'tr.diyanet': { name: 'Diyanet Isleri', language: 'Turkish' },
  'ru.kuliev': { name: 'Elmir Kuliev', language: 'Russian' },
  'ml.cheriyamundam': { name: 'Cheriyamundam Abdul Hameed', language: 'Malayalam' },
  'ta.tamil': { name: 'Jan Trust Foundation', language: 'Tamil' },
  'hi.hindi': { name: 'Suhel Farooq Khan', language: 'Hindi' },
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

// Authenticated API endpoint (Cloudflare Function)
const AUTH_API_ENDPOINT = '/api/quran-words';

// Map our translation IDs to word translation language codes
export const WORD_TRANSLATION_LANGUAGES = {
  // Urdu translations (QuranWBW has complete coverage)
  'ur.jalandhry': 'ur',
  'ur.maududi': 'ur',
  'ur.junagarhi': 'ur',
  'ur.kanzuliman': 'ur',
  'ur.qadri': 'ur',
  'ur.jawadi': 'ur',
  'ur.ahmedali': 'ur',
  'ur.najafi': 'ur',
  // English translations
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
  // Bengali translations (QuranWBW has complete coverage)
  'bn.bengali': 'bn',
  'bn.hoque': 'bn',
  // Hindi (QuranWBW has complete coverage)
  'hi.hindi': 'hi',
  // Other languages with QuranWBW support
  'fr.hamidullah': 'fr',
  'de.bubenheim': 'de',
  'id.indonesian': 'id',
  'tr.diyanet': 'tr',
  'ta.tamil': 'ta',
  // Fallback to English for unsupported languages
  'ru.kuliev': 'en',
  'ml.cheriyamundam': 'en',
};

// Word meanings cache
const wordCache = new Map();

// QuranWBW.com Static API (has complete Urdu word-by-word for all 114 surahs)
const QURANWBW_API = 'https://static.quranwbw.com/data/v4';

// QuranWBW Language IDs
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
 * Fetch word-by-word translations from QuranWBW.com static API
 * Has complete coverage for all 114 surahs in multiple languages including Urdu
 */
async function fetchQuranWBWWords(surahId, language = 'ur') {
  const langId = QURANWBW_LANG_IDS[language];
  if (!langId) {
    console.log(`[WBW] No QuranWBW langId for language: ${language}`);
    return null;
  }

  const cacheKey = `wbw-quranwbw-${language}-v1`;

  // Check if we have cached data for this language
  if (wordCache.has(cacheKey)) {
    const cachedData = wordCache.get(cacheKey);
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
    wordCache.set(cacheKey, data);

    // Return data for requested surah
    return data[surahId] || null;
  } catch (error) {
    console.warn('QuranWBW fetch error:', error);
    return null;
  }
}

/**
 * Transform QuranWBW word data to our app format
 * QuranWBW format: { ayahNum: [[word1, word2, ...]] }
 * Our format: { ayahNum: [{ arabic, meaning, transliteration }] }
 */
function transformQuranWBWData(surahData, surahId) {
  if (!surahData) return {};

  const wordsMap = {};

  Object.entries(surahData).forEach(([ayahNum, ayahData]) => {
    const verseNum = parseInt(ayahNum);
    // QuranWBW format: [[word1, word2, word3, ...]]
    const meanings = ayahData[0] || [];

    wordsMap[verseNum] = meanings.map((meaning, idx) => ({
      arabic: '', // Will be filled from Arabic data
      meaning: meaning || '',
      transliteration: '',
      position: idx + 1,
    }));
  });

  return wordsMap;
}

/**
 * Fetch Arabic word data from QuranWBW to combine with translations
 */
async function fetchQuranWBWArabic(surahId, fontType = 1) {
  const cacheKey = `wbw-arabic-${fontType}-v1`;

  if (wordCache.has(cacheKey)) {
    return wordCache.get(cacheKey)[surahId] || null;
  }

  try {
    const url = `${QURANWBW_API}/words-data/arabic/${fontType}.json`;
    const response = await fetch(url);

    if (!response.ok) return null;

    const data = await response.json();
    wordCache.set(cacheKey, data);
    return data[surahId] || null;
  } catch {
    return null;
  }
}

/**
 * Fetch transliteration from QuranWBW
 */
async function fetchQuranWBWTransliteration(surahId) {
  const cacheKey = 'wbw-transliteration-v1';

  if (wordCache.has(cacheKey)) {
    return wordCache.get(cacheKey)[surahId] || null;
  }

  try {
    const url = `${QURANWBW_API}/words-data/transliterations/1.json`;
    const response = await fetch(url);

    if (!response.ok) return null;

    const data = await response.json();
    wordCache.set(cacheKey, data);
    return data[surahId] || null;
  } catch {
    return null;
  }
}

/**
 * Fetch complete word-by-word data from QuranWBW (Arabic + Translation + Transliteration)
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
      }));
    });

    return wordsMap;
  } catch (error) {
    console.warn('QuranWBW complete fetch error:', error);
    return null;
  }
}

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
 * Fetch word-by-word translations from authenticated Quran Foundation API
 * Supports multiple languages including Urdu, English, French, etc.
 */
async function fetchAuthenticatedWords(surahId, language = 'en') {
  const cacheKey = `wbw-auth-${surahId}-${language}-v1`;

  if (wordCache.has(cacheKey)) {
    return { data: wordCache.get(cacheKey), authenticated: true };
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

    wordCache.set(cacheKey, result.words);
    return { data: result.words, authenticated: true, language: result.language };
  } catch {
    // Auth endpoint failed, return null to trigger fallback
    return { data: null, authenticated: false };
  }
}

/**
 * Fetch word-by-word translations from Quran.com API (public, English only)
 * Fallback when authenticated API is unavailable
 */
async function fetchPublicWords(surahId) {
  const cacheKey = `wbw-public-${surahId}-en-v3`;

  if (wordCache.has(cacheKey)) {
    return wordCache.get(cacheKey);
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

    wordCache.set(cacheKey, wordsMap);
    return wordsMap;
  } catch {
    return null;
  }
}

/**
 * Fetch word-by-word translations - tries authenticated API first, then public
 * Authenticated API supports: en, ur, bn, fr, de, id, tr, ru, etc.
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
 * Priority: 1) Local data (if available) 2) Authenticated API (multi-language) 3) Public API (English)
 * Authenticated API supports: en, ur, bn, fr, de, id, tr, ru, and more
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
        // Priority 1: Check local data (has curated multi-language support)
        if (hasLocalWordMeanings(surahId)) {
          const surahData = WORD_MEANINGS[surahId];
          const localWordsMap = {};

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
            setIsAuthenticated(false);
            setIsFallback(!WORD_MEANINGS[surahId]?.[1]?.[0]?.[targetLang]);
            setCurrentLang(targetLang);
            setLoading(false);
          }
          return;
        }

        // Priority 2: Try QuranWBW API (has complete Urdu, Hindi, Bengali, Turkish, English, etc.)
        if (QURANWBW_LANG_IDS[targetLang]) {
          console.log(`[WBW] Trying QuranWBW for language: ${targetLang}, surah: ${surahId}`);
          const wbwData = await fetchCompleteQuranWBWData(surahId, targetLang);

          if (!cancelled && wbwData && Object.keys(wbwData).length > 0) {
            console.log(`[WBW] Got QuranWBW data for ${targetLang}, surah ${surahId}:`, Object.keys(wbwData).length, 'verses');
            setWordsMap(wbwData);
            setIsLocalData(false);
            setIsAuthenticated(true); // Mark as authenticated source (reliable)
            setIsFallback(false);
            setCurrentLang(targetLang);
            setLoading(false);
            return;
          } else {
            console.log(`[WBW] No QuranWBW data for ${targetLang}, falling back...`);
          }
        } else {
          console.log(`[WBW] No QuranWBW support for language: ${targetLang}`);
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
 */
export function getWordMeanings(wordsMap, verseNumber) {
  return wordsMap[verseNumber] || [];
}

export default useQuranAPI;
