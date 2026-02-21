/**
 * Common Components Index
 * Only core UI components needed for first paint are exported here.
 *
 * IMPORTANT: Feature components (reader, maps, meditation, etc.) should be
 * imported directly from their files, NOT through this barrel.
 * This allows Vite to code-split them into separate chunks.
 */

// Core UI Components (needed immediately)
export { default as ErrorBoundary } from './ErrorBoundary';
export { default as LoadingSpinner } from './LoadingSpinner';
export { default as BubbleModal } from './BubbleModal';

// Branding (used in header/layout)
export { Logo, LogoIcon, LogoFull, FusionLogo, FusionLogoWithText, FusionFavicon, FusionAppIcon } from './Logo';
export { Icons } from './Icons';
export { default as Modal } from './Modal';
export { default as BubbleOverlay } from './BubbleOverlay';
