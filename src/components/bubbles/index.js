/**
 * Bubble Components Index
 * Single Responsibility: Export all bubble components
 */

export { default as SurahBubble } from './SurahBubble';
export { default as JuzzBubble } from './JuzzBubble';
export { default as BubbleConnections } from './BubbleConnections';

// LayoutSelector is small — keep in initial bundle
export { default as LayoutSelector } from './LayoutSelector';

// Layout components are lazy-loaded via LayoutRenderer — no barrel export needed
