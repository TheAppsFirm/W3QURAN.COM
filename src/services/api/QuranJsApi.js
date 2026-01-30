/**
 * QuranJS API Implementation
 * Uses @quranjs/api package (requires OAuth credentials)
 *
 * Implements QuranApiInterface following Liskov Substitution Principle (LSP)
 *
 * To use this implementation:
 * 1. Request API credentials at https://api-docs.quran.com/
 * 2. Set environment variables: VITE_QURAN_CLIENT_ID, VITE_QURAN_CLIENT_SECRET
 * 3. Switch the export in index.js to use QuranJsApi
 */

// import { QuranClient, Language } from '@quranjs/api';

/**
 * QuranJS API adapter - Ready for when OAuth credentials are available
 *
 * Example usage:
 * const api = createQuranJsApi({
 *   clientId: import.meta.env.VITE_QURAN_CLIENT_ID,
 *   clientSecret: import.meta.env.VITE_QURAN_CLIENT_SECRET,
 * });
 */
export const createQuranJsApi = (credentials) => {
  // Validate credentials
  if (!credentials?.clientId || !credentials?.clientSecret) {
    throw new Error(
      'QuranJS API requires OAuth credentials. ' +
        'Please set VITE_QURAN_CLIENT_ID and VITE_QURAN_CLIENT_SECRET environment variables. ' +
        'Request credentials at https://api-docs.quran.com/'
    );
  }

  // This will be uncommented when credentials are available
  /*
  const client = new QuranClient({
    clientId: credentials.clientId,
    clientSecret: credentials.clientSecret,
    defaults: {
      language: Language.ENGLISH,
    },
  });
  */

  return {
    /**
     * Get all chapters
     */
    getChapters: async () => {
      // const chapters = await client.chapters.findAll();
      // return chapters.map(transformChapter);
      throw new Error('QuranJS API not configured. Please provide OAuth credentials.');
    },

    /**
     * Get chapter by ID
     */
    getChapterById: async (id) => {
      // const chapter = await client.chapters.findById(id);
      // return transformChapter(chapter);
      throw new Error('QuranJS API not configured. Please provide OAuth credentials.');
    },

    /**
     * Get chapter info
     */
    getChapterInfo: async (id) => {
      // const info = await client.chapters.findInfoById(id);
      // return transformChapterInfo(info);
      throw new Error('QuranJS API not configured. Please provide OAuth credentials.');
    },

    /**
     * Get verses by chapter
     */
    getVersesByChapter: async (chapterId, options = {}) => {
      // const verses = await client.verses.findByChapter(chapterId, {
      //   translations: options.translationIds || [20],
      //   words: options.includeWords || false,
      // });
      // return verses.map(transformVerse);
      throw new Error('QuranJS API not configured. Please provide OAuth credentials.');
    },

    /**
     * Get verse by key
     */
    getVerseByKey: async (key, options = {}) => {
      // const verse = await client.verses.findByKey(key, {
      //   translations: options.translationIds || [20],
      //   words: options.includeWords || false,
      // });
      // return transformVerse(verse);
      throw new Error('QuranJS API not configured. Please provide OAuth credentials.');
    },

    /**
     * Get random verse
     */
    getRandomVerse: async () => {
      // const verse = await client.verses.findRandom({
      //   translations: [20],
      // });
      // return transformVerse(verse);
      throw new Error('QuranJS API not configured. Please provide OAuth credentials.');
    },

    /**
     * Get reciters
     */
    getReciters: async () => {
      // const recitations = await client.resources.findAllRecitations();
      // return recitations.map(transformReciter);
      throw new Error('QuranJS API not configured. Please provide OAuth credentials.');
    },

    /**
     * Get audio URL
     */
    getAudioUrl: async (chapterId, reciterId) => {
      // const audio = await client.audio.findChapterRecitationById(reciterId, chapterId);
      // return transformAudio(audio);
      throw new Error('QuranJS API not configured. Please provide OAuth credentials.');
    },

    /**
     * Get translations
     */
    getTranslations: async () => {
      // const translations = await client.resources.findAllTranslations();
      // return translations.map(transformTranslation);
      throw new Error('QuranJS API not configured. Please provide OAuth credentials.');
    },

    /**
     * Search
     */
    search: async (query, options = {}) => {
      // Implementation would use client.search methods
      throw new Error('QuranJS API not configured. Please provide OAuth credentials.');
    },
  };
};

/**
 * Check if QuranJS credentials are available
 */
export const hasQuranJsCredentials = () => {
  return !!(
    import.meta.env.VITE_QURAN_CLIENT_ID &&
    import.meta.env.VITE_QURAN_CLIENT_SECRET
  );
};

export default createQuranJsApi;
