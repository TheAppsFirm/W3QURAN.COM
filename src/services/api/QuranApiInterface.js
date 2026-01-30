/**
 * Quran API Interface - Defines the contract for Quran data services
 * Follows Interface Segregation Principle (ISP)
 *
 * This interface can be implemented by:
 * - FreeQuranApi (Al-Quran Cloud - no auth required)
 * - QuranJsApi (@quranjs/api - requires OAuth)
 */

/**
 * @typedef {Object} Chapter
 * @property {number} id - Chapter number (1-114)
 * @property {string} name - English name
 * @property {string} arabicName - Arabic name
 * @property {string} englishTranslation - English meaning
 * @property {number} versesCount - Number of verses
 * @property {string} revelationType - 'Meccan' or 'Medinan'
 * @property {number} revelationOrder - Chronological order
 */

/**
 * @typedef {Object} Verse
 * @property {number} id - Verse ID
 * @property {number} chapterId - Chapter number
 * @property {number} verseNumber - Verse number within chapter
 * @property {string} textArabic - Arabic text
 * @property {string} textTranslation - Translated text
 * @property {string} transliteration - Transliteration
 */

/**
 * @typedef {Object} Reciter
 * @property {number} id - Reciter ID
 * @property {string} name - Reciter name
 * @property {string} style - Recitation style
 * @property {string} arabicName - Arabic name
 */

/**
 * @typedef {Object} Translation
 * @property {number} id - Translation ID
 * @property {string} name - Translation name
 * @property {string} authorName - Author name
 * @property {string} languageName - Language
 */

// Interface definition (using JSDoc for type hints)
export const QuranApiInterface = {
  // Chapters
  getChapters: async () => { throw new Error('Not implemented'); },
  getChapterById: async (id) => { throw new Error('Not implemented'); },
  getChapterInfo: async (id) => { throw new Error('Not implemented'); },

  // Verses
  getVersesByChapter: async (chapterId, options) => { throw new Error('Not implemented'); },
  getVerseByKey: async (key) => { throw new Error('Not implemented'); },
  getRandomVerse: async () => { throw new Error('Not implemented'); },

  // Audio
  getReciters: async () => { throw new Error('Not implemented'); },
  getAudioUrl: async (chapterId, reciterId) => { throw new Error('Not implemented'); },

  // Translations
  getTranslations: async () => { throw new Error('Not implemented'); },

  // Search
  search: async (query, options) => { throw new Error('Not implemented'); },
};
