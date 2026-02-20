/**
 * Reader Module
 *
 * Feature-based organization for Quran reader components.
 * This is the main entry point for all reader-related exports.
 *
 * Structure:
 * - panels/        - Floating feature panels (tafseer, videos, bookmarks, etc.)
 * - subcomponents/ - Small reusable components (TajweedText, WordItem)
 * - hooks/         - Reader-specific hooks (useReaderState)
 * - data/          - Static data (scholars, configurations)
 * - constants.js   - Configuration constants
 * - utils.js       - Helper functions
 *
 * Usage:
 * ```js
 * import {
 *   // Constants
 *   RECITERS, FEATURE_GRADIENTS, DEFAULT_READER_SETTINGS,
 *   // Utilities
 *   sanitizeHTML, checkMemoryPressure,
 *   // Components
 *   TajweedText, WordItem, FloatingFeatureBubble,
 *   // Panels
 *   TafseerFloatingBubble, VideosFloatingBubble, SharePanel,
 *   // Hooks
 *   useReaderState, READER_ACTIONS,
 *   // Data
 *   YOUTUBE_SCHOLARS,
 * } from '@/components/reader';
 * ```
 */

// ===========================================
// Constants
// ===========================================
export * from './constants';

// ===========================================
// Utilities
// ===========================================
export * from './utils';

// ===========================================
// Subcomponents (re-export from index)
// ===========================================
export { TajweedText, WordItem } from './subcomponents';

// ===========================================
// Panels (re-export from index)
// ===========================================
export {
  FloatingFeatureBubble,
  TafseerFloatingBubble,
  VideosFloatingBubble,
  SharePanel,
  MemorizePanel,
  BookmarksPanel,
  YouTubePanel,
} from './panels';

// ===========================================
// Hooks (re-export from index)
// ===========================================
export { useReaderState, READER_ACTIONS } from './hooks';

// ===========================================
// Data (re-export from index)
// ===========================================
export { YOUTUBE_SCHOLARS } from './data';
