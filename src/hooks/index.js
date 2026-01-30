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
