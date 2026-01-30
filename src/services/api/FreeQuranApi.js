/**
 * Free Quran API Implementation
 * Uses Al-Quran Cloud API (https://alquran.cloud/api)
 * No authentication required
 *
 * Implements QuranApiInterface following Liskov Substitution Principle (LSP)
 */

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
      const response = await fetch(`${BASE_URL}/surah`);
      const data = await handleResponse(response);
      return data.map(transformChapter);
    } catch (error) {
      console.error('Failed to fetch chapters:', error);
      throw error;
    }
  },

  /**
   * Get chapter by ID
   * @param {number} id - Chapter ID (1-114)
   * @returns {Promise<Object>} - Chapter data
   */
  getChapterById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/surah/${id}`);
      const data = await handleResponse(response);
      return transformChapter(data);
    } catch (error) {
      console.error(`Failed to fetch chapter ${id}:`, error);
      throw error;
    }
  },

  /**
   * Get chapter info/metadata
   * @param {number} id - Chapter ID
   * @returns {Promise<Object>} - Chapter info
   */
  getChapterInfo: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/surah/${id}`);
      const data = await handleResponse(response);
      return {
        ...transformChapter(data),
        verses: data.ayahs?.map((v) => transformVerse(v)) || [],
      };
    } catch (error) {
      console.error(`Failed to fetch chapter info ${id}:`, error);
      throw error;
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
      // Fetch Arabic and translation in parallel
      const [arabicRes, translationRes] = await Promise.all([
        fetch(`${BASE_URL}/surah/${chapterId}`),
        fetch(`${BASE_URL}/surah/${chapterId}/${translationId}`),
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
    } catch (error) {
      console.error(`Failed to fetch verses for chapter ${chapterId}:`, error);
      throw error;
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
        fetch(`${BASE_URL}/ayah/${key}`),
        fetch(`${BASE_URL}/ayah/${key}/${translationId}`),
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
    } catch (error) {
      console.error(`Failed to fetch verse ${key}:`, error);
      throw error;
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
    } catch (error) {
      console.error('Failed to fetch random verse:', error);
      throw error;
    }
  },

  /**
   * Get available reciters
   * @returns {Promise<Array>} - Array of reciters
   */
  getReciters: async () => {
    // Al-Quran Cloud provides audio editions as reciters
    try {
      const response = await fetch(`${BASE_URL}/edition/format/audio`);
      const data = await handleResponse(response);

      return data.map((edition) => ({
        id: edition.identifier,
        name: edition.englishName,
        arabicName: edition.name,
        style: edition.type,
        language: edition.language,
      }));
    } catch (error) {
      console.error('Failed to fetch reciters:', error);
      throw error;
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
      const response = await fetch(`${BASE_URL}/surah/${chapterId}/${reciterId}`);
      const data = await handleResponse(response);

      return {
        chapterId,
        reciterId,
        verses: data.ayahs.map((ayah) => ({
          verseNumber: ayah.numberInSurah,
          audioUrl: ayah.audio,
        })),
      };
    } catch (error) {
      console.error(`Failed to fetch audio for chapter ${chapterId}:`, error);
      throw error;
    }
  },

  /**
   * Get available translations
   * @returns {Promise<Array>} - Array of translations
   */
  getTranslations: async () => {
    try {
      const response = await fetch(`${BASE_URL}/edition/type/translation`);
      const data = await handleResponse(response);

      return data.map((edition) => ({
        id: edition.identifier,
        name: edition.englishName,
        authorName: edition.name,
        languageName: edition.language,
        direction: edition.direction,
      }));
    } catch (error) {
      console.error('Failed to fetch translations:', error);
      throw error;
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
      const response = await fetch(
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
    } catch (error) {
      console.error(`Failed to search for "${query}":`, error);
      throw error;
    }
  },
};

export default FreeQuranApi;
