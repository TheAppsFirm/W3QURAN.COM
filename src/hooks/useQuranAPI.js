/**
 * useQuranAPI Hook - Facade
 * Combines smaller focused hooks for backward compatibility
 *
 * This is the main entry point for Quran API functionality.
 * For more granular control, import the individual hooks directly:
 * - useVersesAPI - Fetching verses/ayahs
 * - useTranslationsAPI - Translation handling
 * - useWordByWordAPI - Word-by-word data
 * - useTajweed - Tajweed rules parsing
 *
 * @module hooks/useQuranAPI
 */

// Re-export API utilities
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

// Re-export Verses API
export {
  useVersesAPI,
  fetchSingleVerse,
} from './useVersesAPI';

// For backward compatibility, alias useVersesAPI as useQuranAPI
export { useVersesAPI as useQuranAPI } from './useVersesAPI';

// Also export fetchSingleVerse as fetchVerse for backward compatibility
export { fetchSingleVerse as fetchVerse } from './useVersesAPI';

// Re-export Translations API
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

// Re-export Tajweed API
export {
  TAJWEED_RULES,
  TAJWEED_CATEGORIES,
  parseTajweedText,
  getTajweedRule,
  getTajweedRulesByCategory,
  getUsedTajweedRules,
  countTajweedRules,
} from './useTajweed';

// Re-export Word-by-Word API
export {
  useMultilingualWords,
  useWordByWord,
  fetchMultilingualWords,
  fetchWordMorphology,
  getWordMeanings,
  POS_LABELS,
} from './useWordByWordAPI';

// Default export - main hook for fetching verses
export { useVersesAPI as default } from './useVersesAPI';
