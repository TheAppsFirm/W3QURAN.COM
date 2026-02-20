/**
 * Reader Module
 *
 * Feature-based organization for Quran reader components
 *
 * Structure:
 * - panels/       - Floating feature panels (tafseer, videos, etc.)
 * - subcomponents/ - Small reusable components (TajweedText, WordItem)
 * - hooks/        - Reader-specific hooks
 * - constants.js  - Configuration constants
 * - utils.js      - Helper functions
 */

// Constants
export * from './constants';

// Utilities
export * from './utils';

// Subcomponents
export { default as TajweedText } from './subcomponents/TajweedText';
export { default as WordItem } from './subcomponents/WordItem';

// Panels
export { default as FloatingFeatureBubble } from './panels/FloatingFeatureBubble';

// Hooks
export { useReaderState, ACTIONS as READER_ACTIONS } from './hooks/useReaderState';
