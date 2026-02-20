/**
 * Custom Hooks - Index
 *
 * Export all custom hooks for easy importing
 * @example import { useLocalStorage, useDebounce, useChapters } from '@/hooks';
 */

// Storage hooks
export { useLocalStorage, useClearStorage } from './useLocalStorage';

// Debounce/Throttle hooks
export { useDebounce, useDebouncedCallback, useThrottledCallback } from './useDebounce';

// Quran data hooks (from services/api)
export {
  useChapters,
  useVerses,
  useVerse,
  useRandomVerse,
  useReciters,
  useTranslations,
  useSearch,
  useAudio,
} from './useQuranData';

// Quran verses from static data (quran-json package)
export { useQuranVerses, getAllSurahsInfo, getVerse } from './useQuranVerses';

// Audio player hook
export {
  useAudioPlayer,
  getAudioUrl,
  RECITERS,
  // Translation audio
  useTranslationAudioPlayer,
  getTranslationAudioUrl,
  getTranslationAudioSource,
  getAvailableTranslationAudio,
  TRANSLATION_RECITERS,
  TRANSLATION_TO_AUDIO_MAP,
  // TTS
  useTranslationAudio,
  speakText,
} from './useAudioPlayer';

// ==================================================
// Quran Cloud API hooks (Split by Single Responsibility)
// ==================================================

// API Utilities
export {
  API_BASE,
  QURAN_COM_API,
  QURANWBW_API,
  fetchWithCache,
  fetchWithCacheSimple,
  getFromCache,
  setInCache,
  hasInCache,
  clearCache,
  clearCacheEntry,
} from './apiUtils';

// Verses API - Fetching verses with Arabic, translations, tajweed
export {
  useVersesAPI,
  fetchSingleVerse,
} from './useVersesAPI';

// Translations API - Translation constants and utilities
export {
  TRANSLATIONS,
  WORD_TRANSLATION_LANGUAGES,
  getAvailableTranslations,
  getTranslationsByLanguage,
  getTranslationInfo,
  getWordLanguage,
  isValidTranslation,
  getUrduTranslations,
  getEnglishTranslations,
} from './useTranslationsAPI';

// Tajweed API - Tajweed rules and parsing
export {
  TAJWEED_RULES,
  TAJWEED_CATEGORIES,
  parseTajweedText,
  getTajweedRule,
  getTajweedRulesByCategory,
  getUsedTajweedRules,
  countTajweedRules,
} from './useTajweed';

// Word-by-Word API - Multi-language word translations
export {
  useMultilingualWords,
  useWordByWord,
  fetchMultilingualWords,
  fetchWordMorphology,
  getWordMeanings,
  POS_LABELS,
} from './useWordByWordAPI';

// Legacy facade (backward compatibility)
// useQuranAPI is now an alias for useVersesAPI
export {
  useQuranAPI,
  fetchVerse,
} from './useQuranAPI';

// Media query hooks for responsive design
export {
  useMediaQuery,
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useBreakpoint,
  useIsLandscape,
  useIsPortrait,
  usePrefersReducedMotion,
  isMobileDevice,
  isTabletDevice,
  isDesktopDevice,
  BREAKPOINTS,
} from './useMediaQuery';

// Auth hook
export { useAuth } from './useAuth';
