/**
 * Bubble Components Index
 * Single Responsibility: Export all bubble components
 */

export { default as SurahBubble } from './SurahBubble';
export { default as JuzzBubble } from './JuzzBubble';
export { default as BubbleConnections } from './BubbleConnections';

// Bubble layouts are lazy-loaded via LayoutRenderer.jsx (not re-exported here
// to keep them out of the main bundle)
