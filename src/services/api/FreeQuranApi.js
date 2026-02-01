/**
 * Free Quran API Implementation
 * Uses Al-Quran Cloud API (https://alquran.cloud/api)
 * No authentication required
 *
 * Implements QuranApiInterface following Liskov Substitution Principle (LSP)
 */

import { fetchWithRetry } from '../../utils/retryUtils';

const BASE_URL = 'https://api.alquran.cloud/v1';

/**
 * Helper function to handle API responses
 * @param {Response} response - Fetch response
 * @returns {Promise<any>} - Parsed JSON data
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }
  const json = await response.json();
  if (json.code !== 200) {
    throw new Error(json.status || 'Unknown API error');
  }
  return json.data;
};

/**
 * Transform API chapter to our Chapter model
 * @param {Object} apiChapter - API response chapter
 * @returns {Object} - Normalized chapter
 */
const transformChapter = (apiChapter) => ({
  id: apiChapter.number,
  name: apiChapter.englishName,
  arabicName: apiChapter.name,
  englishTranslation: apiChapter.englishNameTranslation,
  versesCount: apiChapter.numberOfAyahs,
  revelationType: apiChapter.revelationType,
  revelationOrder: apiChapter.number, // API doesn't provide this, using number as fallback
});

/**
 * Transform API verse to our Verse model
 * @param {Object} apiVerse - API response verse
 * @param {string} translation - Translation text
 * @returns {Object} - Normalized verse
 */
const transformVerse = (apiVerse, translation = '') => ({
  id: apiVerse.number,
  chapterId: apiVerse.surah?.number || 0,
  verseNumber: apiVerse.numberInSurah,
  textArabic: apiVerse.text,
  textTranslation: translation,
  audioUrl: apiVerse.audio || null,
});

/**
 * FreeQuranApi - Implementation using Al-Quran Cloud
 */
export const FreeQuranApi = {
  /**
   * Get all chapters (surahs)
   * @returns {Promise<Array>} - Array of chapters
   */
  getChapters: async () => {
    try {
      const response = await fetchWithRetry(`${BASE_URL}/surah`);
      const data = await handleResponse(response);
      return data.map(transformChapter);
    } catch {
      // Failed to fetch chapters after retries
      throw new Error('Unable to fetch chapters. Please check your connection.');
    }
  },

  /**
   * Get chapter by ID
   * @param {number} id - Chapter ID (1-114)
   * @returns {Promise<Object>} - Chapter data
   */
  getChapterById: async (id) => {
    try {
      const response = await fetchWithRetry(`${BASE_URL}/surah/${id}`);
      const data = await handleResponse(response);
      return transformChapter(data);
    } catch {
      throw new Error(`Unable to fetch chapter ${id}. Please check your connection.`);
    }
  },

  /**
   * Get chapter info/metadata
   * @param {number} id - Chapter ID
   * @returns {Promise<Object>} - Chapter info
   */
  getChapterInfo: async (id) => {
    try {
      const response = await fetchWithRetry(`${BASE_URL}/surah/${id}`);
      const data = await handleResponse(response);
      return {
        ...transformChapter(data),
        verses: data.ayahs?.map((v) => transformVerse(v)) || [],
      };
    } catch {
      throw new Error(`Unable to fetch chapter info for ${id}. Please check your connection.`);
    }
  },

  /**
   * Get verses by chapter with translation
   * @param {number} chapterId - Chapter ID
   * @param {Object} options - Options { translationId, page, perPage }
   * @returns {Promise<Array>} - Array of verses
   */
  getVersesByChapter: async (chapterId, options = {}) => {
    const { translationId = 'en.sahih' } = options;

    try {
      // Fetch Arabic and translation in parallel with retry
      const [arabicRes, translationRes] = await Promise.all([
        fetchWithRetry(`${BASE_URL}/surah/${chapterId}`),
        fetchWithRetry(`${BASE_URL}/surah/${chapterId}/${translationId}`),
      ]);

      const [arabicData, translationData] = await Promise.all([
        handleResponse(arabicRes),
        handleResponse(translationRes),
      ]);

      const translations = translationData.ayahs || [];

      return arabicData.ayahs.map((verse, index) => ({
        ...transformVerse(verse),
        textTranslation: translations[index]?.text || '',
      }));
    } catch {
      throw new Error(`Unable to fetch verses for chapter ${chapterId}. Please check your connection.`);
    }
  },

  /**
   * Get verse by key (e.g., "2:255")
   * @param {string} key - Verse key in format "chapter:verse"
   * @param {Object} options - Options { translationId }
   * @returns {Promise<Object>} - Verse data
   */
  getVerseByKey: async (key, options = {}) => {
    const { translationId = 'en.sahih' } = options;
    const [chapterId, verseNum] = key.split(':').map(Number);

    try {
      const [arabicRes, translationRes] = await Promise.all([
        fetchWithRetry(`${BASE_URL}/ayah/${key}`),
        fetchWithRetry(`${BASE_URL}/ayah/${key}/${translationId}`),
      ]);

      const [arabicData, translationData] = await Promise.all([
        handleResponse(arabicRes),
        handleResponse(translationRes),
      ]);

      return {
        ...transformVerse(arabicData),
        textTranslation: translationData.text || '',
        chapterId,
        verseNumber: verseNum,
      };
    } catch {
      throw new Error(`Unable to fetch verse ${key}. Please check your connection.`);
    }
  },

  /**
   * Get a random verse
   * @returns {Promise<Object>} - Random verse
   */
  getRandomVerse: async () => {
    // Generate random chapter (1-114) and get a random verse from it
    const randomChapter = Math.floor(Math.random() * 114) + 1;

    try {
      const chapterInfo = await FreeQuranApi.getChapterInfo(randomChapter);
      const randomVerseNum = Math.floor(Math.random() * chapterInfo.versesCount) + 1;
      return FreeQuranApi.getVerseByKey(`${randomChapter}:${randomVerseNum}`);
    } catch {
      throw new Error('Unable to fetch random verse. Please check your connection.');
    }
  },

  /**
   * Get available reciters
   * @returns {Promise<Array>} - Array of reciters
   */
  getReciters: async () => {
    // Al-Quran Cloud provides audio editions as reciters
    try {
      const response = await fetchWithRetry(`${BASE_URL}/edition/format/audio`);
      const data = await handleResponse(response);

      return data.map((edition) => ({
        id: edition.identifier,
        name: edition.englishName,
        arabicName: edition.name,
        style: edition.type,
        language: edition.language,
      }));
    } catch {
      throw new Error('Unable to fetch reciters. Please check your connection.');
    }
  },

  /**
   * Get audio URL for a chapter
   * @param {number} chapterId - Chapter ID
   * @param {string} reciterId - Reciter identifier
   * @returns {Promise<Object>} - Audio data
   */
  getAudioUrl: async (chapterId, reciterId = 'ar.alafasy') => {
    try {
      const response = await fetchWithRetry(`${BASE_URL}/surah/${chapterId}/${reciterId}`);
      const data = await handleResponse(response);

      return {
        chapterId,
        reciterId,
        verses: data.ayahs.map((ayah) => ({
          verseNumber: ayah.numberInSurah,
          audioUrl: ayah.audio,
        })),
      };
    } catch {
      throw new Error(`Unable to fetch audio for chapter ${chapterId}. Please check your connection.`);
    }
  },

  /**
   * Get available translations
   * @returns {Promise<Array>} - Array of translations
   */
  getTranslations: async () => {
    try {
      const response = await fetchWithRetry(`${BASE_URL}/edition/type/translation`);
      const data = await handleResponse(response);

      return data.map((edition) => ({
        id: edition.identifier,
        name: edition.englishName,
        authorName: edition.name,
        languageName: edition.language,
        direction: edition.direction,
      }));
    } catch {
      throw new Error('Unable to fetch translations. Please check your connection.');
    }
  },

  /**
   * Search the Quran
   * @param {string} query - Search query
   * @param {Object} options - Options { surah, language }
   * @returns {Promise<Array>} - Search results
   */
  search: async (query, options = {}) => {
    const { surah = 'all', language = 'en' } = options;

    try {
      const response = await fetchWithRetry(
        `${BASE_URL}/search/${encodeURIComponent(query)}/${surah}/${language}`
      );
      const data = await handleResponse(response);

      return {
        count: data.count,
        matches: data.matches.map((match) => ({
          verseKey: `${match.surah.number}:${match.numberInSurah}`,
          text: match.text,
          chapterId: match.surah.number,
          chapterName: match.surah.englishName,
          verseNumber: match.numberInSurah,
        })),
      };
    } catch {
      throw new Error(`Search failed for "${query}". Please check your connection.`);
    }
  },
};

export default FreeQuranApi;
