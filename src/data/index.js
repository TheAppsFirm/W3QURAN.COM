/**
 * Data Index
 * Single Responsibility: Export all data modules
 */

// Surah data
export { SURAHS, MAX_AYAHS, TOTAL_SURAHS, JUZZ, getSurahById, getSurahsByType, getJuzzById, getJuzzForVerse, getSurahsInJuzz } from './surahs';

// Color palettes
export { PALETTES, TOPIC_PALETTES, TOPIC_ICONS, getTopicPalette, getTopicIcon } from './palettes';

// Themes - Centralized theme system for the entire app
export {
  OVERLAY_THEMES,
  MODAL_THEMES,
  THEME_LIST,
  LAYOUT_TO_OVERLAY_THEME,
  LAYOUT_TO_MODAL_THEME,
  getOverlayTheme,
  getModalTheme,
  getAvailableThemes,
  isThemeDark,
  createCustomTheme,
  resolveGradient,
  DEFAULT_THEME_CONFIG,
} from './themes';

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
  searchUrdu,
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

// Quranic Arabic Treebank (Grammar Analysis)
export {
  POS_TAGS,
  GRAMMAR_ROLES,
  CASES,
  TREEBANK_DATA,
  hasTreebankData,
  getAyahTreebank,
  canAccessTreebank,
  // Quranic Ontology
  QURAN_ONTOLOGY,
  getSurahOntology,
  hasOntology,
} from './treebankData';

// Family Storage (Family Circle feature)
export {
  AVATARS,
  ACHIEVEMENTS as FAMILY_ACHIEVEMENTS,
  KIDS_QUIZ_CATEGORIES,
  getFamilyData,
  saveFamilyData,
  createFamily,
  addFamilyMember,
  updateFamilyMember,
  removeFamilyMember,
  recordMemberProgress,
  createSharedGoal,
  updateGoalProgress,
  recordReadingSession,
  getFamilyLeaderboard,
  resetFamilyData,
} from './familyStorage';

// Gamification System (XP, Levels, Achievements)
export {
  LEVELS,
  XP_REWARDS,
  ACHIEVEMENTS as GAMIFICATION_ACHIEVEMENTS,
  CHALLENGE_TEMPLATES,
  getGamificationData,
  saveGamificationData,
  getLevelInfo,
  addXP,
  updateStreak,
  unlockAchievement,
  checkAndUnlockAchievements,
  unlockLocation,
  isLocationUnlocked,
  generateDailyChallenges,
  updateChallengeProgress,
  recordVerseRead,
  recordSurahComplete,
  recordMeditationSession,
  recordAICompanionUse,
  recordCapsuleCreated,
  recordVoiceCommand,
  recordShare,
  recordMapVisit,
  resetGamificationData,
} from './gamificationSystem';

// Meditation Sessions (Heartbeat Meditation feature)
export {
  DHIKR_PHRASES,
  MEDITATION_NAMES,
  CALMING_VERSES,
  MEDITATION_SESSIONS,
  getAllSessions,
  getSession,
  getSessionDuration,
} from './meditationSessions';

// Nature Parallels (Living Visualization feature)
export {
  NATURE_PARALLELS,
  QURAN_WORD_FREQUENCIES,
  getAllNatureParallels,
  getNatureParallel,
} from './natureParallels';

// Quran Guidance (AI Companion feature)
export {
  LIFE_GUIDANCE,
  QUICK_SITUATIONS,
  getGuidance,
  matchSituation,
  getAllSituations,
} from './quranGuidance';

// Time Capsule Storage (Voice Notes feature)
export {
  initCapsuleDB,
  createCapsule,
  getAllCapsules,
  getCapsulesByVerse,
  getCapsule,
  getMedia,
  deleteCapsule,
  getUpcomingUnlocks,
  getRecentlyUnlocked,
  getCapsuleStats,
  exportCapsuleData,
  MILESTONE_TYPES,
} from './timeCapsuleStorage';

// Prophetic Locations (Interactive Map feature)
export {
  SACRED_MOSQUES,
  REVELATION_LOCATIONS,
  SPECIAL_LOCATIONS,
  PROPHET_GRAVES,
  QURANIC_CAVES,
  PROPHETIC_LOCATIONS,
  DESTROYED_NATIONS,
  MIRACLES_LOCATIONS,
  QURANIC_ANIMALS,
  BANI_ISRAEL_JOURNEY,
  SCIENTIFIC_MIRACLES,
  TREATY_LOCATIONS,
  QURANIC_PLANTS,
  ISRA_MIRAJ_JOURNEY,
  TRADE_ROUTES,
  PROPHET_JOURNEYS,
  TIMELINE_EVENTS,
  QURANIC_MOUNTAINS,
  QURANIC_WATERS,
  BATTLE_LOCATIONS,
  HIJRA_ROUTE,
  QIBLA_HISTORY,
  QURAYSH_ROUTES,
  ANGEL_APPEARANCES,
  DUA_LOCATIONS,
  SAHABA_GRAVES,
  WEATHER_EVENTS,
  ARCHAEOLOGICAL_SITES,
  // Location getters
  getAllLocations,
  getLocation,
  getLocationsByCategory,
  getLocationsByProphet,
  getAllJourneys,
  getJourney,
  getAllDestroyedNations,
  getAllMiracles,
  getAllAnimals,
  getAllTradeRoutes,
  getTimelineEvents,
  getAllSacredMosques,
  getAllRevelationLocations,
  getAllSpecialLocations,
  getAllProphetGraves,
  getAllQuranicCaves,
  getAllBaniIsraelJourney,
  getAllScientificMiracles,
  getAllTreatyLocations,
  getAllQuranicPlants,
  getAllIsraMirajJourney,
  getAllQuranicMountains,
  getAllQuranicWaters,
  getAllBattleLocations,
  getHijraRoute,
  getQiblaHistory,
  getQurayshRoutes,
  getAllAngelAppearances,
  getAllDuaLocations,
  getAllSahabaGraves,
  getAllWeatherEvents,
  getAllArchaeologicalSites,
  calculateQibla,
  distanceToMakkah,
} from './propheticLocations';

// Kanz ul Iman Audio data file kept for reference (now uses Google Cloud TTS instead)
