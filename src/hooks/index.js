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

// Quran data hooks
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
export { useAudioPlayer, getAudioUrl, RECITERS } from './useAudioPlayer';

// Quran Cloud API hook (Tajweed, Word-by-Word, Translations)
export {
  useQuranAPI,
  useWordByWord,
  useMultilingualWords,
  fetchVerse,
  fetchMultilingualWords,
  fetchWordMorphology,
  getAvailableTranslations,
  getWordMeanings,
  parseTajweedText,
  TRANSLATIONS,
  TAJWEED_RULES,
  WORD_TRANSLATION_LANGUAGES,
  POS_LABELS,
} from './useQuranAPI';
