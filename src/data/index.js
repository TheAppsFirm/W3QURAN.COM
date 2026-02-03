/**
 * Data Index
 * Single Responsibility: Export all data modules
 */

// Surah data
export { SURAHS, MAX_AYAHS, TOTAL_SURAHS, JUZZ, getSurahById, getSurahsByType, getJuzzById, getJuzzForVerse, getSurahsInJuzz } from './surahs';

// Color palettes
export { PALETTES, TOPIC_PALETTES, TOPIC_ICONS, getTopicPalette, getTopicIcon } from './palettes';

// Topic categories
export { FAQ_TOPICS, getTopicById, getTopicsForSurah } from './topics';

// Surah Topics and Key Verses
export {
  SURAH_TOPICS,
  getAllTags,
  getSurahsByTag,
  getKeyVerseLabel,
} from './surahTopics';

// Names of Allah
export { NAMES_OF_ALLAH, TOTAL_NAMES } from './namesOfAllah';

// Daily verses
export { DAILY_VERSES, getTodaysVerse, getVerseByTopic, getAvailableTopics } from './dailyVerses';

// Quiz
export {
  QUIZ_QUESTIONS,
  getQuestionsByDifficulty,
  getRandomQuestions,
  getPointsForDifficulty,
} from './quizQuestions';

// Word Meanings (Multi-language)
export {
  WORD_MEANINGS,
  AVAILABLE_LANGUAGES,
  getWordMeanings,
  hasLocalWordMeanings,
  getSurahsWithWordMeanings,
} from './wordMeanings';

// Tafseer Data (Multi-language)
export {
  TAFSEER_SOURCES,
  getTafseersByLanguage,
  getDefaultTafseer,
  TRANSLATION_TO_TAFSEER_LANG,
  fetchTafseer,
  fetchTafseerAlternative,
} from './tafseerData';

// YouTube Videos (Authentic Scholars)
export {
  SCHOLARS,
  VIDEO_CATEGORIES,
  SURAH_VIDEOS,
  VERSE_SYNCED_VIDEOS,
  getVideosForSurah,
  getScholarInfo,
  getYouTubeEmbedUrl,
  getYouTubeWatchUrl,
  generateSearchQuery,
  getVerseSyncedVideos,
  getVerseTimestamp,
  getVerseFromTime,
  formatTime,
} from './youtubeVideos';

// Progress Tracker
export {
  TOTAL_QURAN_AYAHS,
  loadProgress,
  saveProgress,
  loadStreak,
  saveStreak,
  loadGoals,
  saveGoals,
  markAyahRead,
  markAyahsRead,
  markSurahComplete,
  getSurahProgress,
  getOverallProgress,
  getReadingHistory,
  getReadingStats,
  resetAllProgress,
  exportProgressData,
  importProgressData,
} from './progressTracker';

// Offline Storage
export {
  initDB,
  saveSurahOffline,
  getCachedSurah,
  isSurahCached,
  saveTafseerOffline,
  getCachedTafseer,
  saveAudioOffline,
  getCachedAudio,
  getDownloadedSurahs,
  getTotalStorageUsed,
  deleteCachedSurah,
  clearAllCache,
  downloadSurahForOffline,
  downloadSurahsForOffline,
  isOfflineModeAvailable,
  isOnline,
} from './offlineStorage';

// Hifz Tracker (Spaced Repetition)
export {
  RATING,
  HIFZ_STATE,
  loadHifzData,
  saveHifzData,
  addAyahToHifz,
  addAyahRangeToHifz,
  removeAyahFromHifz,
  reviewAyah,
  getDueAyahs,
  getNewAyahs,
  getLearningAyahs,
  getMasteredAyahs,
  getSurahHifzStats,
  getHifzStats,
  getTodaySession,
  updateDailyGoals,
  getAyahHifzData,
  isAyahInHifz,
  resetHifzData,
  exportHifzData,
  importHifzData,
} from './hifzTracker';

// Search Index
export {
  searchQuran,
  searchArabic,
  getSearchSuggestions,
  getRecentSearches,
  addRecentSearch,
  clearRecentSearches,
  clearSearchCache,
} from './searchIndex';

// Ayah Connections (Visual Quran)
export {
  CONNECTION_TYPES,
  QURAN_THEMES,
  QURAN_STORIES,
  KEY_WORDS,
  getVerseConnections,
  getAllThemes,
  getAllStories,
} from './ayahConnections';
