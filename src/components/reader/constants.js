/**
 * Reader Constants
 * Centralized constants for the Quran reader
 *
 * Extracted from BubbleReaderOverlay for better maintainability
 */

// Browser detection for Safari-specific optimizations
export const isSafari =
  typeof navigator !== 'undefined' &&
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export const isIOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

export const isMobileSafari = isSafari || isIOS;

// Progressive loading constants to prevent memory crashes on large surahs (especially Safari)
export const INITIAL_VERSE_CHUNK = isMobileSafari ? 20 : 50;
export const VERSE_CHUNK_SIZE = isMobileSafari ? 15 : 30;
export const LARGE_SURAH_THRESHOLD = 50;

// Audio CDN
export const AUDIO_CDN = 'https://cdn.islamic.network/quran/audio/128';

// Reciters configuration
export const RECITERS = {
  'ar.alafasy': { name: 'Mishary Alafasy', country: 'Kuwait' },
  'ar.abdurrahmaansudais': { name: 'Abdul Rahman Al-Sudais', country: 'Saudi Arabia' },
  'ar.abdulsamad': { name: 'Abdul Samad', country: 'Egypt' },
  'ar.shaatree': { name: 'Abu Bakr Al-Shatri', country: 'Saudi Arabia' },
  'ar.husary': { name: 'Mahmoud Khalil Al-Husary', country: 'Egypt' },
  'ar.minshawi': { name: 'Mohamed Al-Minshawi', country: 'Egypt' },
};

// Feature panel gradients
export const FEATURE_GRADIENTS = {
  tafseer: ['#7c3aed', '#8b5cf6', '#a78bfa'],
  videos: ['#dc2626', '#ef4444', '#f87171'],
  memorize: ['#d97706', '#f59e0b', '#fbbf24'],
  bookmark: ['#db2777', '#ec4899', '#f472b6'],
  share: ['#059669', '#10b981', '#34d399'],
  mood: ['#0891b2', '#06b6d4', '#22d3ee'],
  map: ['#7c3aed', '#a855f7', '#c084fc'],
  sync: ['#be185d', '#ec4899', '#f9a8d4'],
};

// Default reader settings
export const DEFAULT_READER_SETTINGS = {
  fontSize: 'medium',
  reciter: 'ar.alafasy',
  translation: 'ur.jalandhry',
  showTranslation: true,
  tajweedMode: false,
  wordByWordMode: false,
  repeatMode: 'none',
  autoScroll: true,
};
