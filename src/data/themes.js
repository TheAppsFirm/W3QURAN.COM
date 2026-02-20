/**
 * ============================================
 * w3Quran Centralized Theme System
 * ============================================
 *
 * This file contains ALL theme configurations for the entire app.
 * Uses composable token system to reduce duplication.
 *
 * Architecture:
 * - Base tokens: DARK_VERSE_TOKENS, LIGHT_VERSE_TOKENS
 * - Overlay base: OVERLAY_BASE (shared sizing/shape)
 * - Individual themes extend bases with unique colors
 *
 * Usage:
 * import { getOverlayTheme, getModalTheme, THEME_LIST } from '../data/themes';
 * const theme = getOverlayTheme('grid', surah);
 */

// ============================================
// COMPOSABLE BASE TOKENS
// ============================================

// Dark theme verse styling (shared by: grid, compact, bubbles, bubble, hexagon, wave, alphabet, timeline, length)
const DARK_VERSE_TOKENS = {
  textColor: 'rgba(255,255,255,0.95)',
  translationColor: 'rgba(255,255,255,0.85)',
  verseBg: 'rgba(255,255,255,0.08)',
  verseBorder: 'rgba(255,255,255,0.12)',
  activeBg: 'rgba(255,255,255,0.15)',
  activeBorder: 'rgba(255,255,255,0.3)',
  badgeBg: 'rgba(255,255,255,0.2)',
  badgeColor: '#ffffff',
};

// Light theme verse styling (shared by: list, rainbow, blocks)
const LIGHT_VERSE_TOKENS = {
  textColor: '#1e293b',
  translationColor: '#64748b',
  verseBg: '#f8fafc',
  verseBorder: '#e2e8f0',
  activeBg: '#f0fdf4',
  activeBorder: '#86efac',
  badgeBg: '#ecfdf5',
  badgeColor: '#059669',
};

// Brown/sepia theme tokens (shared by: gallery, juzz)
const SEPIA_VERSE_TOKENS = {
  textColor: '#78350f',
  translationColor: '#92400e',
};

// Gold accent tokens (shared by: alphabet, timeline)
const GOLD_VERSE_TOKENS = {
  verseBg: 'rgba(255,215,0,0.04)',
  verseBorder: 'rgba(255,215,0,0.08)',
  activeBg: 'rgba(255,215,0,0.1)',
  activeBorder: 'rgba(255,215,0,0.25)',
  badgeBg: 'rgba(255,215,0,0.15)',
  badgeColor: '#fcd34d',
};

// Overlay base sizing (shared by ALL overlay themes)
const OVERLAY_BASE = {
  shape: 'rectangle',
  isCalm: true,
  width: 'min(94vw, 680px)',
  height: 'min(82vh, 720px)',
  marginTop: '70px',
};

// Modal base sizing
const MODAL_BASE = {
  width: 360,
  height: 'auto',
  minHeight: 380,
  maxWidth: '90vw',
};

// ============================================
// THEME CONFIGURATION DEFAULTS (for external use)
// ============================================
export const DEFAULT_THEME_CONFIG = {
  ...OVERLAY_BASE,
  maxHeight: '82vh',
  borderRadius: '1.5rem',
  isDark: true,
  isDynamic: false,
  ...DARK_VERSE_TOKENS,
  translationColor: 'rgba(255,255,255,0.8)', // Slightly different default
};

// ============================================
// THEME LIST - For UI display (single source of truth)
// ============================================
export const THEME_LIST = [
  { id: 'grid', name: 'Grid', icon: 'Grid3X3', description: 'Beautiful emerald gradient' },
  { id: 'list', name: 'List', icon: 'List', description: 'Clean white background' },
  { id: 'compact', name: 'Compact', icon: 'LayoutGrid', description: 'Indigo gradient' },
  { id: 'rainbow', name: 'Rainbow', icon: 'Rainbow', description: 'Pastel warm colors' },
  { id: 'gallery', name: 'Art Studio', icon: 'Palette', description: 'Cream with brown accents' },
  { id: 'blocks', name: 'Blocks', icon: 'Boxes', description: 'Notebook style' },
  { id: 'bubbles', name: 'Bubbles', icon: 'Circle', description: 'Purple violet gradient' },
  { id: 'spiral', name: 'Spiral', icon: 'Disc', description: 'Pink purple gradient' },
  { id: 'honeycomb', name: 'Honeycomb', icon: 'Hexagon', description: 'Teal emerald gradient' },
  { id: 'wave', name: 'Wave', icon: 'Waves', description: 'Ocean blue gradient' },
  { id: 'juzz', name: 'Juzz', icon: 'BookOpen', description: 'Parchment book style' },
  { id: 'arabic', name: 'Arabic', icon: 'Languages', description: 'Night sky with gold' },
  { id: 'revelation', name: 'Revelation', icon: 'Sunrise', description: 'Dynamic Makki/Madani' },
  { id: 'byLength', name: 'By Length', icon: 'AlignLeft', description: 'Dynamic by verse count' },
];

// ============================================
// LAYOUT TO THEME MAPPING
// ============================================
export const LAYOUT_TO_OVERLAY_THEME = {
  // Primary 14 layouts with unique calm reading themes
  'spiral': 'bubble',           // 1. Spiral -> Deep purple calm reading
  'grid': 'grid',               // 2. Grid -> Slate/indigo calm reading
  'list': 'list',               // 3. List -> Teal calm reading
  'compact': 'compact',         // 4. Compact -> Indigo compact calm
  'kids-rainbow': 'rainbow',    // 5. Rainbow -> Soft warm reading
  'rainbow': 'rainbow',         // Alias
  'art': 'gallery',             // 6. Art Studio -> Warm cream reading
  'gallery': 'gallery',         // Alias
  'kids-blocks': 'blocks',      // 7. Blocks -> Blue calm reading
  'blocks': 'blocks',           // Alias
  'kids-bubbles': 'bubbles',    // 8. Bubbles -> Purple calm reading
  'bubbles': 'bubbles',         // Alias
  'honeycomb': 'hexagon',       // 9. Honeycomb -> Teal calm reading (primary)
  'wave': 'wave',               // 10. Wave -> Ocean calm reading
  'juzz': 'juzz',               // 11. Juzz -> Emerald calm reading
  'alphabet': 'alphabet',       // 12. Arabic Alphabet -> Warm amber reading
  'arabic': 'alphabet',         // Alias
  'revelation': 'timeline',     // 13. Revelation -> Indigo historical reading
  'length': 'length',           // 14. By Length -> Dynamic palette-based
  'byLength': 'length',         // Alias

  // Legacy/alias mappings for backwards compatibility
  'cards': 'grid',
  'book': 'book',
  'clock': 'clock',
  'kids': 'rainbow',
  'kids-art': 'gallery',
  'card': 'card',
  'minimal': 'minimal',
};

export const LAYOUT_TO_MODAL_THEME = { ...LAYOUT_TO_OVERLAY_THEME };

// ============================================
// READER OVERLAY THEMES
// These define how the main reading panel looks
// Using composable tokens to reduce duplication
// ============================================
export const OVERLAY_THEMES = {
  // 1. GRID - Beautiful emerald/teal green gradient
  grid: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    id: 'grid',
    name: 'Grid',
    isDark: true,
    borderRadius: '1.5rem',
    border: '1px solid rgba(16, 185, 129, 0.25)',
    customGradient: 'linear-gradient(145deg, #059669 0%, #10b981 50%, #34d399 100%)',
    boxShadow: '0 25px 80px rgba(16, 185, 129, 0.4), 0 0 60px rgba(5, 150, 105, 0.3)',
    translationColor: 'rgba(255,255,255,0.8)', // Slightly different
  },

  // 2. LIST - Clean white background (LIGHT THEME)
  list: {
    ...OVERLAY_BASE,
    ...LIGHT_VERSE_TOKENS,
    id: 'list',
    name: 'List',
    isDark: false,
    borderRadius: '1.25rem',
    border: '1px solid #e2e8f0',
    customGradient: '#FFFFFF',
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  },

  // 3. COMPACT - Beautiful indigo gradient
  compact: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    id: 'compact',
    name: 'Compact',
    isDark: true,
    borderRadius: '1rem',
    border: '1px solid rgba(99, 102, 241, 0.25)',
    customGradient: 'linear-gradient(145deg, #4f46e5 0%, #6366f1 50%, #818cf8 100%)',
    boxShadow: '0 20px 60px rgba(99, 102, 241, 0.35)',
  },

  // 4. RAINBOW - Warm pastel (LIGHT THEME)
  rainbow: {
    ...OVERLAY_BASE,
    id: 'rainbow',
    name: 'Rainbow',
    isDark: false,
    borderRadius: '1.5rem',
    border: '2px solid rgba(236, 72, 153, 0.2)',
    customGradient: 'linear-gradient(180deg, #fffbeb 0%, #fef3c7 50%, #fdf2f8 100%)',
    boxShadow: '0 20px 60px rgba(236, 72, 153, 0.15)',
    textColor: '#1e293b',
    translationColor: '#64748b',
    verseBg: 'rgba(255,255,255,0.7)',
    verseBorder: 'rgba(236,72,153,0.15)',
    activeBg: 'rgba(251,191,36,0.2)',
    activeBorder: 'rgba(251,191,36,0.4)',
    badgeBg: 'rgba(251,191,36,0.2)',
    badgeColor: '#b45309',
  },

  // 5. GALLERY - Cream with brown (LIGHT THEME)
  gallery: {
    ...OVERLAY_BASE,
    ...SEPIA_VERSE_TOKENS,
    id: 'gallery',
    name: 'Art Studio',
    isDark: false,
    borderRadius: '0.75rem',
    border: '4px solid #F5F5F0',
    customGradient: 'linear-gradient(180deg, #FFFEF0 0%, #FFF8E7 100%)',
    boxShadow: '0 20px 60px rgba(139, 69, 19, 0.12)',
    verseBg: 'rgba(212,165,116,0.08)',
    verseBorder: 'rgba(180,83,9,0.1)',
    activeBg: 'rgba(180,83,9,0.1)',
    activeBorder: 'rgba(180,83,9,0.25)',
    badgeBg: 'rgba(180,83,9,0.15)',
    badgeColor: '#92400e',
  },

  // 6. BLOCKS - Notebook style (LIGHT THEME)
  blocks: {
    ...OVERLAY_BASE,
    id: 'blocks',
    name: 'Blocks',
    isDark: false,
    borderRadius: '1.5rem',
    border: '2px solid rgba(245, 158, 11, 0.2)',
    customGradient: '#FFFFF0',
    boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
    textColor: '#1e293b',
    translationColor: '#64748b',
    verseBg: '#FFFDE7',
    verseBorder: 'rgba(245,158,11,0.15)',
    activeBg: 'rgba(245,158,11,0.15)',
    activeBorder: 'rgba(245,158,11,0.4)',
    badgeBg: 'rgba(245,158,11,0.2)',
    badgeColor: '#b45309',
    hasNotebookLines: true,
  },

  // 7. BUBBLES - Purple violet gradient
  bubbles: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    id: 'bubbles',
    name: 'Bubbles',
    isDark: true,
    borderRadius: '1.75rem',
    border: '2px solid rgba(168, 85, 247, 0.25)',
    customGradient: 'linear-gradient(145deg, #7c3aed 0%, #a855f7 50%, #c4b5fd 100%)',
    boxShadow: '0 0 60px rgba(168, 85, 247, 0.3), 0 25px 80px rgba(0,0,0,0.4)',
  },

  // 8. BUBBLE (SPIRAL) - Pink purple gradient with CIRCULAR pop shape
  // NOTE: Spiral keeps the original circular bubble design for both modal and overlay
  bubble: {
    ...DARK_VERSE_TOKENS,
    id: 'bubble',
    name: 'Spiral',
    shape: 'circle', // Original circular pop shape
    isCalm: true,
    isDark: true,
    width: 'min(90vw, 600px)',
    height: 'min(90vw, 600px)', // Square for circle
    marginTop: '50px',
    borderRadius: '50%', // Full circle
    border: '3px solid rgba(255, 255, 255, 0.4)',
    customGradient: 'linear-gradient(145deg, #ec4899 0%, #a855f7 50%, #8b5cf6 100%)',
    boxShadow: '0 0 80px rgba(236, 72, 153, 0.4), 0 30px 100px rgba(0,0,0,0.5)',
    hasGlassHighlight: true,
    hasConcentricCircles: true,
  },

  // 9. HEXAGON (HONEYCOMB) - Teal emerald gradient
  hexagon: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    id: 'hexagon',
    name: 'Honeycomb',
    isDark: true,
    borderRadius: '1.5rem',
    border: '1px solid rgba(16, 185, 129, 0.25)',
    customGradient: 'linear-gradient(145deg, #0d9488 0%, #10b981 50%, #059669 100%)',
    boxShadow: '0 0 60px rgba(16, 185, 129, 0.3), 0 25px 80px rgba(0,0,0,0.4)',
  },

  // 10. WAVE - Ocean blue gradient
  wave: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    id: 'wave',
    name: 'Wave',
    isDark: true,
    borderRadius: '1.5rem',
    border: '1px solid rgba(14, 165, 233, 0.25)',
    customGradient: 'linear-gradient(145deg, #0ea5e9 0%, #3b82f6 50%, #6366f1 100%)',
    boxShadow: '0 0 60px rgba(14, 165, 233, 0.3), 0 25px 80px rgba(0,0,0,0.4)',
  },

  // 11. JUZZ - Parchment book style (LIGHT THEME)
  juzz: {
    ...OVERLAY_BASE,
    ...SEPIA_VERSE_TOKENS,
    id: 'juzz',
    name: 'Juzz',
    isDark: false,
    borderRadius: '1.25rem',
    border: '2px solid #d1fae5',
    customGradient: 'linear-gradient(180deg, #FFFEF5 0%, #FFF8E1 100%)',
    boxShadow: '0 20px 60px rgba(16, 185, 129, 0.12)',
    verseBg: 'rgba(139,90,43,0.05)',
    verseBorder: 'rgba(16,185,129,0.12)',
    activeBg: 'rgba(16,185,129,0.1)',
    activeBorder: 'rgba(16,185,129,0.3)',
    badgeBg: 'rgba(16,185,129,0.15)',
    badgeColor: '#059669',
    hasBookStyle: true,
    hasSpine: true,
    hasPageTexture: true,
  },

  // 12. ALPHABET (ARABIC) - Night sky with gold
  alphabet: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    ...GOLD_VERSE_TOKENS,
    id: 'alphabet',
    name: 'Arabic',
    isDark: true,
    borderRadius: '1.25rem',
    border: '2px solid rgba(255, 215, 0, 0.2)',
    customGradient: 'linear-gradient(180deg, #1a1a4e 0%, #2d1b69 100%)',
    boxShadow: '0 25px 80px rgba(0,0,0,0.5), inset 0 0 40px rgba(255,215,0,0.03)',
    translationColor: 'rgba(255,255,255,0.7)',
    hasArabicWatermark: true,
  },

  // 13. TIMELINE (REVELATION) - Dynamic Makki/Madani
  timeline: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    ...GOLD_VERSE_TOKENS,
    id: 'timeline',
    name: 'Revelation',
    isDark: true,
    isDynamic: true,
    borderRadius: '1rem',
    border: '1px solid rgba(245, 158, 11, 0.15)',
    customGradient: 'linear-gradient(180deg, #451a03 0%, #78350f 100%)',
    boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
    translationColor: 'rgba(255,255,255,0.7)',
    getMakkiStyle: () => ({
      customGradient: 'linear-gradient(180deg, #451a03 0%, #78350f 100%)',
      border: '1px solid rgba(245, 158, 11, 0.15)',
      badgeColor: '#fcd34d',
      iconType: 'sun',
    }),
    getMadaniStyle: () => ({
      customGradient: 'linear-gradient(180deg, #0f172a 0%, #1e3a5f 100%)',
      border: '1px solid rgba(59, 130, 246, 0.15)',
      verseBg: 'rgba(59,130,246,0.06)',
      verseBorder: 'rgba(59,130,246,0.1)',
      badgeColor: '#93c5fd',
      iconType: 'moon',
    }),
  },

  // 14. LENGTH - Dynamic by verse count
  length: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    id: 'length',
    name: 'By Length',
    isDark: true,
    isDynamic: true,
    borderRadius: '1.25rem',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    customGradient: '#0f172a',
    boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
    translationColor: 'rgba(255,255,255,0.7)',
    verseBg: 'rgba(255,255,255,0.04)',
    verseBorder: 'rgba(255,255,255,0.06)',
    activeBg: 'rgba(20,184,166,0.1)',
    activeBorder: 'rgba(20,184,166,0.3)',
    badgeBg: 'rgba(20,184,166,0.2)',
    badgeColor: '#5eead4',
    getShortStyle: () => ({
      isDark: false,
      customGradient: '#FFFFFF',
      border: '1px solid #e2e8f0',
      textColor: '#1e293b',
      translationColor: '#64748b',
      verseBg: '#f8fafc',
      badgeColor: '#059669',
      lengthLabel: 'Short (1-20)',
    }),
    getMediumStyle: () => ({
      customGradient: 'linear-gradient(145deg, #0d9488 0%, #14b8a6 50%, #2dd4bf 100%)',
      border: '1px solid rgba(20, 184, 166, 0.2)',
      badgeColor: '#5eead4',
      lengthLabel: 'Medium (21-100)',
    }),
    getLongStyle: () => ({
      customGradient: 'linear-gradient(145deg, #4f46e5 0%, #6366f1 50%, #818cf8 100%)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      badgeColor: '#a5b4fc',
      lengthLabel: 'Long (100+)',
    }),
  },

  // ============================================
  // LEGACY STYLES (for backwards compatibility)
  // ============================================
  card: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    id: 'card',
    name: 'Card',
    isDark: true,
    width: 'min(96vw, 700px)',
    height: 'min(90vh, 800px)',
    borderRadius: '1.5rem',
    border: '1px solid rgba(99, 102, 241, 0.12)',
    customGradient: 'linear-gradient(180deg, rgba(15, 23, 42, 0.97) 0%, rgba(30, 41, 59, 0.98) 50%, rgba(15, 23, 42, 0.99) 100%)',
    boxShadow: '0 0 60px rgba(99, 102, 241, 0.12), 0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
    hasCalmGlow: true,
  },

  book: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    id: 'book',
    name: 'Book',
    isDark: true,
    width: 'min(96vw, 700px)',
    height: 'min(90vh, 800px)',
    borderRadius: '0.5rem',
    border: '2px solid rgba(139, 69, 19, 0.2)',
    customGradient: 'linear-gradient(180deg, rgba(41, 37, 36, 0.97) 0%, rgba(68, 64, 60, 0.4) 50%, rgba(41, 37, 36, 0.99) 100%)',
    boxShadow: '0 0 50px rgba(217, 119, 6, 0.08), 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)',
    hasCalmGlow: true,
  },

  clock: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    id: 'clock',
    name: 'Clock',
    isDark: true,
    width: 'min(96vw, 700px)',
    height: 'min(90vh, 800px)',
    borderRadius: '1.5rem',
    border: '1px solid rgba(139, 92, 246, 0.15)',
    customGradient: 'linear-gradient(180deg, rgba(46, 16, 101, 0.97) 0%, rgba(76, 29, 149, 0.3) 50%, rgba(46, 16, 101, 0.99) 100%)',
    boxShadow: '0 0 60px rgba(139, 92, 246, 0.12), 0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
    hasCalmGlow: true,
  },

  kids: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    id: 'kids',
    name: 'Kids',
    isDark: true,
    width: 'min(96vw, 680px)',
    height: 'min(88vh, 760px)',
    borderRadius: '1.5rem',
    border: '2px solid rgba(255, 255, 255, 0.15)',
    customGradient: 'linear-gradient(180deg, rgba(55, 48, 76, 0.97) 0%, rgba(76, 61, 92, 0.98) 50%, rgba(55, 48, 76, 0.99) 100%)',
    boxShadow: '0 0 60px rgba(236, 72, 153, 0.12), 0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
    hasCalmGlow: true,
  },

  minimal: {
    ...OVERLAY_BASE,
    ...DARK_VERSE_TOKENS,
    id: 'minimal',
    name: 'Minimal',
    isDark: true,
    width: 'min(96vw, 700px)',
    height: 'min(90vh, 800px)',
    borderRadius: '1.25rem',
    border: '1px solid rgba(20, 184, 166, 0.12)',
    customGradient: 'linear-gradient(180deg, rgba(15, 23, 42, 0.97) 0%, rgba(17, 24, 39, 0.98) 50%, rgba(15, 23, 42, 0.99) 100%)',
    boxShadow: '0 0 60px rgba(20, 184, 166, 0.12), 0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
    hasCalmGlow: true,
  },
};

// ============================================
// MODAL THEMES (Intro Popup Styles)
// Using composable tokens to reduce duplication
// ============================================

// Modal base for rectangle shapes
const MODAL_RECT_BASE = {
  ...MODAL_BASE,
  shape: 'rectangle',
};

// Modal base for dark gradient themes with glass highlight
const MODAL_DARK_GLASS = {
  textDark: false,
  hasGlassHighlight: true,
};

export const MODAL_THEMES = {
  grid: {
    ...MODAL_RECT_BASE,
    ...MODAL_DARK_GLASS,
    id: 'grid',
    containerClass: 'rounded-3xl',
    background: 'linear-gradient(145deg, #059669 0%, #10b981 50%, #34d399 100%)',
    glowColor: '#10B981',
    border: '2px solid rgba(255,255,255,0.2)',
    boxShadow: '0 20px 60px rgba(16,185,129,0.3)',
  },

  list: {
    ...MODAL_RECT_BASE,
    id: 'list',
    containerClass: 'rounded-2xl',
    background: '#FFFFFF',
    glowColor: 'rgba(16,185,129,0.3)',
    border: '1px solid #e2e8f0',
    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
    textDark: true,
    hasLeftAccentBar: true,
    accentColor: '#10b981',
  },

  compact: {
    ...MODAL_RECT_BASE,
    ...MODAL_DARK_GLASS,
    id: 'compact',
    containerClass: 'rounded-xl',
    width: 340,
    minHeight: 360,
    maxWidth: '88vw',
    background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #818cf8 100%)',
    glowColor: '#6366F1',
    border: '2px solid rgba(255,255,255,0.2)',
    boxShadow: '0 15px 50px rgba(99,102,241,0.3)',
  },

  rainbow: {
    ...MODAL_RECT_BASE,
    id: 'rainbow',
    containerClass: 'rounded-[2rem]',
    background: 'linear-gradient(135deg, #fecaca 0%, #fed7aa 20%, #fef08a 40%, #bbf7d0 60%, #a5f3fc 80%, #e9d5ff 100%)',
    glowColor: '#f472b6',
    border: '3px solid rgba(255,255,255,0.7)',
    boxShadow: '0 15px 50px rgba(236,72,153,0.2)',
    textDark: true,
    hasSparkles: true,
  },

  gallery: {
    ...MODAL_RECT_BASE,
    id: 'gallery',
    containerClass: 'rounded-lg',
    width: 350,
    maxWidth: '88vw',
    background: 'linear-gradient(145deg, #FFF8F0, #FEF3E2, #FFF8F0)',
    glowColor: 'rgba(180,83,9,0.3)',
    border: '8px solid #F5F5F0',
    boxShadow: '0 10px 40px rgba(139,69,19,0.15)',
    textDark: true,
    textColor: '#78350f',
    hasBrushStroke: true,
  },

  blocks: {
    ...MODAL_RECT_BASE,
    id: 'blocks',
    containerClass: 'rounded-xl',
    width: 350,
    background: '#FEF3C7',
    glowColor: 'rgba(245,158,11,0.3)',
    border: 'none',
    boxShadow: '4px 6px 20px rgba(0,0,0,0.2)',
    textDark: true,
    rotation: '-1.5deg',
    hasPushPin: true,
    isDynamic: true,
    getStickyColor: (surahId) => {
      const colors = ['#FEF3C7', '#DBEAFE', '#D1FAE5', '#FCE7F3'];
      return colors[(surahId - 1) % 4];
    },
  },

  bubbles: {
    ...MODAL_DARK_GLASS,
    id: 'bubbles',
    shape: 'circle',
    containerClass: 'rounded-full',
    width: 360,
    height: 360,
    maxWidth: '90vw',
    background: 'linear-gradient(145deg, #7c3aed 0%, #a855f7 50%, #c4b5fd 100%)',
    glowColor: '#a855f7',
    border: '3px solid rgba(255,255,255,0.5)',
    boxShadow: '0 20px 60px rgba(168,85,247,0.3)',
    hasFloatingDots: true,
  },

  bubble: {
    ...MODAL_DARK_GLASS,
    id: 'bubble',
    shape: 'circle',
    containerClass: 'rounded-full',
    width: 360,
    height: 360,
    maxWidth: '90vw',
    background: 'linear-gradient(145deg, #ec4899 0%, #a855f7 50%, #8b5cf6 100%)',
    glowColor: '#8b5cf6',
    border: '3px solid rgba(255,255,255,0.4)',
    boxShadow: '0 20px 60px rgba(236,72,153,0.3)',
    hasConcentricCircles: true,
  },

  hexagon: {
    ...MODAL_DARK_GLASS,
    id: 'hexagon',
    shape: 'hexagon',
    containerClass: '',
    width: 400,
    height: 460,
    maxWidth: '92vw',
    clipPath: 'polygon(50% 0%, 100% 12%, 100% 88%, 50% 100%, 0% 88%, 0% 12%)',
    mobileShape: 'rectangle',
    mobileBorderRadius: '24px',
    background: 'linear-gradient(135deg, #0d9488 0%, #10b981 50%, #059669 100%)',
    glowColor: '#10b981',
    border: '3px solid rgba(255,255,255,0.3)',
    boxShadow: '0 20px 60px rgba(16,185,129,0.3)',
  },

  wave: {
    ...MODAL_DARK_GLASS,
    id: 'wave',
    shape: 'pill',
    containerClass: 'rounded-[80px]',
    width: 350,
    height: 'auto',
    minHeight: 420,
    maxWidth: '90vw',
    background: 'linear-gradient(180deg, #0ea5e9 0%, #3b82f6 50%, #6366f1 100%)',
    glowColor: '#0ea5e9',
    border: '3px solid rgba(255,255,255,0.3)',
    boxShadow: '0 20px 60px rgba(14,165,233,0.3)',
    hasWavePattern: true,
  },

  juzz: {
    ...MODAL_RECT_BASE,
    id: 'juzz',
    containerClass: 'rounded-lg',
    minHeight: 400,
    background: 'linear-gradient(180deg, #FFFEF5 0%, #FFF8E1 100%)',
    glowColor: 'rgba(180,83,9,0.2)',
    border: '3px solid #D4A574',
    boxShadow: '0 15px 50px rgba(139,69,19,0.2)',
    textDark: true,
    textColor: '#78350f',
    hasBookSpine: true,
    hasBookmarkRibbon: true,
    ribbonColor: '#dc2626',
  },

  alphabet: {
    ...MODAL_RECT_BASE,
    id: 'alphabet',
    containerClass: 'rounded-2xl',
    minHeight: 400,
    background: 'linear-gradient(180deg, #1a1a4e 0%, #2d1b69 100%)',
    glowColor: '#fbbf24',
    border: '2px solid rgba(251,191,36,0.3)',
    boxShadow: '0 20px 60px rgba(139,92,246,0.3)',
    textDark: false,
    hasArabicWatermark: true,
    hasStarPattern: true,
  },

  timeline: {
    ...MODAL_RECT_BASE,
    id: 'timeline',
    containerClass: 'rounded-2xl',
    isDynamic: true,
    background: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 50%, #fbbf24 100%)',
    glowColor: '#f59e0b',
    border: '2px solid rgba(245,158,11,0.3)',
    boxShadow: '0 20px 60px rgba(245,158,11,0.2)',
    textDark: true,
    hasSunMoonIcon: true,
    getMakkiStyle: () => ({
      background: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 50%, #fbbf24 100%)',
      textDark: true,
      iconType: 'sun',
    }),
    getMadaniStyle: () => ({
      background: 'linear-gradient(180deg, #1e3a5f 0%, #1e40af 50%, #3b82f6 100%)',
      textDark: false,
      iconType: 'moon',
    }),
  },

  length: {
    ...MODAL_RECT_BASE,
    ...MODAL_DARK_GLASS,
    id: 'length',
    containerClass: 'rounded-2xl',
    isDynamic: true,
    background: 'linear-gradient(145deg, #0d9488 0%, #14b8a6 50%, #2dd4bf 100%)',
    glowColor: '#14b8a6',
    border: '2px solid rgba(20,184,166,0.3)',
    boxShadow: '0 20px 60px rgba(20,184,166,0.2)',
    hasLengthBar: true,
    getShortStyle: () => ({
      background: '#FFFFFF',
      textDark: true,
      lengthLabel: 'Short',
    }),
    getMediumStyle: () => ({
      background: 'linear-gradient(145deg, #0d9488 0%, #14b8a6 100%)',
      textDark: false,
      lengthLabel: 'Medium',
    }),
    getLongStyle: () => ({
      background: 'linear-gradient(145deg, #4f46e5 0%, #6366f1 100%)',
      textDark: false,
      lengthLabel: 'Long',
    }),
  },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Apply dynamic styles based on surah properties
 * Extracted to avoid duplication between getOverlayTheme and getModalTheme
 * @param {object} theme - Base theme object
 * @param {string} themeKey - Theme identifier
 * @param {object} surah - Surah data
 * @returns {object} Theme with dynamic styles applied
 */
function applyDynamicStyles(theme, themeKey, surah) {
  if (!theme.isDynamic || !surah) return theme;

  if (themeKey === 'timeline') {
    const isMakki = surah.type === 'Makki' || surah.revelationType === 'Meccan';
    const dynamicStyle = isMakki ? theme.getMakkiStyle?.() : theme.getMadaniStyle?.();
    return dynamicStyle ? { ...theme, ...dynamicStyle } : theme;
  }

  if (themeKey === 'length') {
    const ayahs = surah.ayahs || surah.numberOfAyahs || 0;
    const dynamicStyle = ayahs <= 20
      ? theme.getShortStyle?.()
      : ayahs <= 100
        ? theme.getMediumStyle?.()
        : theme.getLongStyle?.();
    return dynamicStyle ? { ...theme, ...dynamicStyle } : theme;
  }

  if (themeKey === 'blocks' && surah.id && theme.getStickyColor) {
    return { ...theme, background: theme.getStickyColor(surah.id) };
  }

  return theme;
}

/**
 * Resolve gradient value (handles both string and function formats for backwards compatibility)
 * @param {string|function} gradient - Gradient value or function returning gradient
 * @returns {string} Resolved gradient string
 */
export function resolveGradient(gradient) {
  return typeof gradient === 'function' ? gradient() : gradient;
}

/**
 * Get overlay theme for a layout style
 * @param {string} layoutStyle - Layout name (e.g., 'grid', 'bubbles')
 * @param {object} surah - Optional surah for dynamic themes
 * @returns {object} Theme configuration
 */
export function getOverlayTheme(layoutStyle, surah = null) {
  const themeKey = LAYOUT_TO_OVERLAY_THEME[layoutStyle] || 'grid';
  const baseTheme = { ...OVERLAY_THEMES[themeKey] };
  return applyDynamicStyles(baseTheme, themeKey, surah);
}

/**
 * Get modal theme for a layout style
 * @param {string} layoutStyle - Layout name
 * @param {object} surah - Optional surah for dynamic themes
 * @returns {object} Theme configuration
 */
export function getModalTheme(layoutStyle, surah = null) {
  const themeKey = LAYOUT_TO_MODAL_THEME[layoutStyle] || 'grid';
  const baseTheme = { ...MODAL_THEMES[themeKey] };
  return applyDynamicStyles(baseTheme, themeKey, surah);
}

/**
 * Get all available themes
 * @returns {Array} List of themes with id, name, description
 */
export function getAvailableThemes() {
  return THEME_LIST;
}

/**
 * Check if theme is dark mode
 * @param {string} themeKey - Theme key
 * @returns {boolean}
 */
export function isThemeDark(themeKey) {
  return OVERLAY_THEMES[themeKey]?.isDark ?? true;
}

/**
 * Create a custom theme by extending an existing one
 * @param {string} baseTheme - Base theme key
 * @param {object} customizations - Custom properties
 * @returns {object} New theme
 */
export function createCustomTheme(baseTheme, customizations) {
  const base = OVERLAY_THEMES[baseTheme] || OVERLAY_THEMES.grid;
  return { ...base, ...customizations, id: 'custom' };
}

// Default export
export default {
  OVERLAY_THEMES,
  MODAL_THEMES,
  THEME_LIST,
  LAYOUT_TO_OVERLAY_THEME,
  LAYOUT_TO_MODAL_THEME,
  getOverlayTheme,
  getModalTheme,
  getAvailableThemes,
  isThemeDark,
  createCustomTheme,
  DEFAULT_THEME_CONFIG,
};
