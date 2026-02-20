/**
 * BubbleModal Component
 * Layout-aware modal for displaying surah details
 * Changes shape and style based on selected layout
 *
 * NOTE: Modal styles are imported from centralized themes.js
 * To modify popup styles, edit: src/data/themes.js -> MODAL_THEMES
 */

import { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { Icons } from './Icons';
import { PALETTES, FAQ_TOPICS, MODAL_THEMES, getModalTheme, LAYOUT_TO_MODAL_THEME } from '../../data';
import { shareVerse } from '../../utils/shareUtils';
import { useAuth } from '../../contexts/AuthContext';
import { useIsMobile } from '../../hooks';

// Rotating donation verses - short versions
const DONATION_VERSES = [
  { arabic: 'مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ', urdu: 'جو اپنا مال اللہ کی راہ میں خرچ کرتے ہیں', en: 'Those who spend in Allah\'s way', ref: '2:261' },
  { arabic: 'وَأَقْرَضُوا اللَّهَ قَرْضًا حَسَنًا', urdu: 'اور اللہ کو قرض حسنہ دیا', en: 'And lend to Allah a goodly loan', ref: '57:18' },
  { arabic: 'وَمَا تُنفِقُوا مِنْ خَيْرٍ يُوَفَّ إِلَيْكُمْ', urdu: 'جو بھی نیکی خرچ کرو گے پورا ملے گا', en: 'Whatever good you spend will be repaid', ref: '2:272' },
];

// Use centralized MODAL_THEMES from themes.js
// This allows single-file theme customization
const MODAL_STYLES = {
  ...MODAL_THEMES,
  // Legacy mappings for backwards compatibility
  card: MODAL_THEMES.grid,
  legacy: MODAL_THEMES.grid,
};

// Additional local styles that extend the centralized themes
const LOCAL_MODAL_STYLES = {
  // ============================================
  // 1. GRID - Premium card with teal→cyan→indigo gradient
  // ============================================
  grid: {
    shape: 'rectangle',
    containerClass: 'rounded-3xl',
    width: 380,
    height: 'auto',
    minHeight: 400,
    maxWidth: '90vw',
    background: 'linear-gradient(145deg, #0d9488 0%, #0891b2 50%, #6366f1 100%)',
    glowColor: '#14B8A6',
    border: '2px solid rgba(255,255,255,0.2)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    textDark: false,
    hasGlassHighlight: true,
    glassOpacity: 0.08,
    glassHeight: '35%',
  },

  // ============================================
  // 2. LIST - WHITE background with DARK text and left accent bar
  // ============================================
  list: {
    shape: 'rectangle',
    containerClass: 'rounded-2xl',
    width: 380,
    height: 'auto',
    minHeight: 400,
    maxWidth: '90vw',
    background: '#FFFFFF',
    glowColor: 'rgba(16,185,129,0.3)',
    border: '1px solid #e2e8f0',
    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
    textDark: true,
    hasGlassHighlight: false,
    hasLeftAccentBar: true,
    accentColor: '#10b981',
  },

  // ============================================
  // 3. COMPACT - Small indigo→violet card
  // ============================================
  compact: {
    shape: 'rectangle',
    containerClass: 'rounded-xl',
    width: 340,
    height: 'auto',
    minHeight: 360,
    maxWidth: '88vw',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)',
    glowColor: '#6366F1',
    border: '2px solid rgba(255,255,255,0.2)',
    boxShadow: '0 15px 50px rgba(99,102,241,0.3)',
    textDark: false,
    hasGlassHighlight: true,
    glassOpacity: 0.06,
    glassHeight: '30%',
  },

  // ============================================
  // 4. RAINBOW - Pastel rainbow with DARK text and sparkles
  // ============================================
  rainbow: {
    shape: 'rectangle',
    containerClass: 'rounded-[2rem]',
    width: 380,
    height: 'auto',
    minHeight: 400,
    maxWidth: '90vw',
    background: 'linear-gradient(135deg, #fecaca 0%, #fed7aa 14%, #fef08a 28%, #bbf7d0 42%, #a5f3fc 56%, #c7d2fe 70%, #e9d5ff 85%, #fbcfe8 100%)',
    glowColor: '#f472b6',
    border: '3px solid rgba(255,255,255,0.7)',
    boxShadow: '0 15px 50px rgba(236,72,153,0.2)',
    textDark: true,
    hasGlassHighlight: false,
    hasSparkles: true,
  },

  // ============================================
  // 5. ART STUDIO - Cream #FFF8F0 with brown frame + brush stroke
  // ============================================
  gallery: {
    shape: 'rectangle',
    containerClass: 'rounded-lg',
    width: 360,
    height: 'auto',
    minHeight: 400,
    maxWidth: '88vw',
    background: 'linear-gradient(145deg, #FFF8F0, #FEF3E2, #FFF8F0)',
    glowColor: 'rgba(180,83,9,0.3)',
    border: '8px solid #F5F5F0',
    outerBorder: '3px solid #E5E2D9',
    boxShadow: '0 10px 40px rgba(139,69,19,0.15)',
    textDark: true,
    textColor: '#78350f',
    hasGlassHighlight: false,
    hasBrushStroke: true,
  },

  // ============================================
  // 6. BLOCKS - Sticky note color with push-pin and rotation
  // ============================================
  blocks: {
    shape: 'rectangle',
    containerClass: 'rounded-xl',
    width: 360,
    height: 'auto',
    minHeight: 400,
    maxWidth: '90vw',
    // Dynamic sticky note colors based on surah.id % 4
    background: '#FEF3C7', // Default yellow, computed dynamically
    glowColor: 'rgba(245,158,11,0.3)',
    border: 'none',
    boxShadow: '4px 6px 20px rgba(0,0,0,0.2), -1px -1px 10px rgba(255,255,255,0.5)',
    textDark: true,
    rotation: '-1.5deg',
    hasPushPin: true,
    hasGlassHighlight: false,
    isDynamic: true,
    getStickyColor: (surahId) => {
      const colors = ['#FEF3C7', '#DBEAFE', '#D1FAE5', '#FCE7F3'];
      return colors[(surahId - 1) % 4];
    },
  },

  // ============================================
  // 7. BUBBLES - CIRCLE shape with pastel gradient + floating dots
  // ============================================
  bubbles: {
    shape: 'circle',
    containerClass: 'rounded-full',
    width: 380,
    height: 380,
    maxWidth: '90vw',
    background: 'linear-gradient(145deg, #c4b5fd 0%, #f9a8d4 40%, #fcd34d 100%)',
    glowColor: '#a855f7',
    border: '3px solid rgba(255,255,255,0.5)',
    boxShadow: '0 20px 60px rgba(168,85,247,0.3)',
    textDark: false,
    hasGlassHighlight: true,
    glassOpacity: 0.1,
    hasFloatingDots: true,
  },

  // ============================================
  // 8. SPIRAL - CIRCLE shape with jewel tones + concentric circles
  // ============================================
  bubble: {
    shape: 'circle',
    containerClass: 'rounded-full',
    width: 380,
    height: 380,
    maxWidth: '90vw',
    background: 'linear-gradient(145deg, #7c3aed 0%, #db2777 40%, #f59e0b 70%, #10b981 100%)',
    glowColor: '#8b5cf6',
    border: '3px solid rgba(255,255,255,0.4)',
    boxShadow: '0 20px 60px rgba(124,58,237,0.3)',
    textDark: false,
    hasGlassHighlight: true,
    glassOpacity: 0.08,
    hasConcentricCircles: true,
  },

  // ============================================
  // 9. HONEYCOMB - HEXAGON on desktop, rounded rect on mobile
  // ============================================
  hexagon: {
    shape: 'hexagon',
    containerClass: '',
    width: 420,
    height: 480,
    maxWidth: '92vw',
    clipPath: 'polygon(50% 0%, 100% 12%, 100% 88%, 50% 100%, 0% 88%, 0% 12%)',
    mobileShape: 'rectangle',
    mobileBorderRadius: '24px',
    background: 'linear-gradient(135deg, #0d9488 0%, #06b6d4 40%, #3b82f6 70%, #8b5cf6 100%)',
    glowColor: '#14b8a6',
    border: '2px solid rgba(255,255,255,0.25)',
    boxShadow: '0 20px 60px rgba(13,148,136,0.3)',
    textDark: false,
    hasGlassHighlight: true,
    glassOpacity: 0.06,
    hasHoneycomb: true,
  },

  // ============================================
  // 10. WAVE - PILL shape (999px radius) with ocean gradient
  // ============================================
  wave: {
    shape: 'pill',
    containerClass: 'rounded-[999px]',
    width: 400,
    height: 'auto',
    minHeight: 420,
    maxWidth: '92vw',
    background: 'linear-gradient(180deg, #0ea5e9 0%, #06b6d4 40%, #0891b2 70%, #0e7490 100%)',
    glowColor: '#06b6d4',
    border: '3px solid rgba(255,255,255,0.35)',
    boxShadow: '0 20px 60px rgba(6,182,212,0.3)',
    textDark: false,
    hasGlassHighlight: true,
    glassOpacity: 0.08,
    hasWaveEffect: true,
  },

  // ============================================
  // 11. JUZZ - Parchment #FFFEF0 with bookmark ribbon
  // ============================================
  juzz: {
    shape: 'rectangle',
    containerClass: 'rounded-2xl',
    width: 380,
    height: 'auto',
    minHeight: 420,
    maxWidth: '90vw',
    background: 'linear-gradient(180deg, #10b981 0%, #10b981 60px, #FFFEF0 60px, #FFF8E1 100%)',
    glowColor: 'rgba(16,185,129,0.3)',
    border: '2px solid #d1fae5',
    boxShadow: '0 15px 50px rgba(16,185,129,0.2)',
    textDark: true,
    hasGlassHighlight: false,
    hasBookmarkRibbon: true,
    headerBg: '#10b981',
    headerText: 'white',
  },

  // ============================================
  // 12. ARABIC ALPHABET - Navy→purple with gold border + Arabic watermark
  // ============================================
  alphabet: {
    shape: 'rectangle',
    containerClass: 'rounded-2xl',
    width: 380,
    height: 'auto',
    minHeight: 400,
    maxWidth: '90vw',
    background: 'linear-gradient(145deg, #1e1b4b 0%, #312e81 40%, #4c1d95 70%, #581c87 100%)',
    glowColor: '#a855f7',
    border: '3px solid rgba(255,215,0,0.5)',
    boxShadow: '0 20px 60px rgba(49,46,129,0.4), inset 0 0 30px rgba(255,215,0,0.05)',
    textDark: false,
    hasGlassHighlight: true,
    glassOpacity: 0.05,
    hasWatermark: true,
    watermarkColor: 'rgba(255,215,0,0.08)',
  },

  // ============================================
  // 13. REVELATION - DYNAMIC: Makki=gold gradient, Madani=blue gradient
  // ============================================
  timeline: {
    shape: 'rectangle',
    containerClass: 'rounded-xl',
    width: 380,
    height: 'auto',
    minHeight: 400,
    maxWidth: '90vw',
    // Default gradient (computed dynamically based on surah.type)
    background: 'linear-gradient(145deg, #78350f 0%, #b45309 40%, #d97706 70%, #f59e0b 100%)',
    glowColor: '#f59e0b',
    border: '2px solid rgba(255,255,255,0.2)',
    boxShadow: '0 20px 60px rgba(180,83,9,0.3)',
    textDark: false,
    hasGlassHighlight: true,
    glassOpacity: 0.06,
    hasSunMoon: true,
    isDynamic: true,
    getMakkiGradient: () => 'linear-gradient(145deg, #78350f 0%, #b45309 40%, #d97706 70%, #f59e0b 100%)',
    getMadaniGradient: () => 'linear-gradient(145deg, #1e3a5f 0%, #1e40af 40%, #3b82f6 70%, #60a5fa 100%)',
    getMakkiGlow: () => '#f59e0b',
    getMadaniGlow: () => '#3b82f6',
  },

  // ============================================
  // 14. BY LENGTH - DYNAMIC: short=white, med=teal, long=indigo
  // ============================================
  length: {
    shape: 'rectangle',
    containerClass: 'rounded-2xl',
    width: 380,
    height: 'auto',
    minHeight: 400,
    maxWidth: '90vw',
    // Default gradient (computed dynamically based on surah.ayahs)
    background: '#FFFFFF',
    glowColor: 'rgba(16,185,129,0.3)',
    border: '1px solid #e2e8f0',
    boxShadow: '0 15px 50px rgba(0,0,0,0.15)',
    textDark: true,
    hasGlassHighlight: false,
    hasLengthBar: true,
    isDynamic: true,
    getShortStyle: () => ({
      background: '#FFFFFF',
      textDark: true,
      glowColor: 'rgba(16,185,129,0.3)',
      border: '1px solid #e2e8f0',
    }),
    getMediumStyle: () => ({
      background: 'linear-gradient(145deg, #0d9488 0%, #14b8a6 50%, #2dd4bf 100%)',
      textDark: false,
      glowColor: '#14b8a6',
      border: '2px solid rgba(255,255,255,0.2)',
    }),
    getLongStyle: () => ({
      background: 'linear-gradient(145deg, #312e81 0%, #4338ca 40%, #6366f1 70%, #818cf8 100%)',
      textDark: false,
      glowColor: '#6366f1',
      border: '2px solid rgba(255,255,255,0.2)',
    }),
  },

  // ============================================
  // LEGACY MAPPINGS (for backwards compatibility)
  // ============================================
  card: {
    shape: 'rectangle',
    containerClass: 'rounded-3xl',
    width: 380,
    height: 'auto',
    minHeight: 400,
    maxWidth: '90vw',
    background: 'linear-gradient(145deg, #0d9488 0%, #0891b2 50%, #6366f1 100%)',
    glowColor: '#14B8A6',
    border: '2px solid rgba(255,255,255,0.2)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    textDark: false,
    hasGlassHighlight: true,
    glassOpacity: 0.08,
  },
  book: {
    shape: 'rectangle',
    containerClass: 'rounded-lg',
    width: 360,
    height: 'auto',
    minHeight: 440,
    maxWidth: '90vw',
    background: 'linear-gradient(90deg, #654321 0%, #8B4513 2%, #D4A574 4%, #F5DEB3 8%, #FFF8DC 15%, #FFFEF0 50%, #FFF8DC 100%)',
    glowColor: 'rgba(180,83,9,0.3)',
    border: '4px solid rgba(139, 69, 19, 0.5)',
    boxShadow: '0 15px 50px rgba(139,69,19,0.2)',
    textDark: true,
    hasGlassHighlight: false,
    hasPageLines: true,
    hasSpine: true,
  },
  clock: {
    shape: 'circle',
    containerClass: 'rounded-full',
    width: 380,
    height: 380,
    maxWidth: '90vw',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 40%, #a855f7 70%, #c084fc 100%)',
    glowColor: '#8b5cf6',
    border: '3px solid rgba(255,255,255,0.3)',
    boxShadow: '0 20px 60px rgba(124,58,237,0.3)',
    textDark: false,
    hasGlassHighlight: true,
    glassOpacity: 0.08,
    hasClockRing: true,
  },
  kids: {
    shape: 'rectangle',
    containerClass: 'rounded-[2rem]',
    width: 380,
    height: 'auto',
    minHeight: 420,
    maxWidth: '90vw',
    background: 'linear-gradient(135deg, #fecaca 0%, #fed7aa 14%, #fef08a 28%, #bbf7d0 42%, #a5f3fc 56%, #c7d2fe 70%, #e9d5ff 85%, #fbcfe8 100%)',
    glowColor: '#f472b6',
    border: '3px solid rgba(255,255,255,0.7)',
    boxShadow: '0 15px 50px rgba(236,72,153,0.2)',
    textDark: true,
    hasGlassHighlight: false,
    hasSparkles: true,
  },
  minimal: {
    shape: 'rectangle',
    containerClass: 'rounded-2xl',
    width: 380,
    height: 'auto',
    minHeight: 400,
    maxWidth: '90vw',
    background: 'linear-gradient(150deg, #0d9488 0%, #14b8a6 50%, #2dd4bf 100%)',
    glowColor: '#14B8A6',
    border: '2px solid rgba(255,255,255,0.2)',
    boxShadow: '0 15px 50px rgba(20,184,166,0.3)',
    textDark: false,
    hasGlassHighlight: true,
    glassOpacity: 0.06,
  },
};

// Map layout names to modal styles - each layout gets its unique style
const layoutToModalStyle = {
  // Primary 14 layouts with unique styles
  'spiral': 'bubble',           // 1. Spiral → Classic circular bubble
  'grid': 'grid',               // 2. Grid → Premium card with corner badge
  'list': 'list',               // 3. List → Clean minimal teal card
  'compact': 'compact',         // 4. Compact → Efficient small card
  'kids-rainbow': 'rainbow',    // 5. Rainbow → Fun multicolor gradient
  'art': 'gallery',             // 6. Art Studio → Museum frame
  'kids-blocks': 'blocks',      // 7. Blocks → Bold geometric blocks
  'kids-bubbles': 'bubbles',    // 8. Bubbles → Playful bubble theme
  'honeycomb': 'hexagon',       // 9. Honeycomb → Expressive hexagon
  'wave': 'wave',               // 10. Wave → Ocean theme
  'juzz': 'juzz',               // 11. Juzz → Emerald Islamic geometric
  'alphabet': 'alphabet',       // 12. Arabic Alphabet → Calligraphy focused
  'revelation': 'timeline',     // 13. Revelation → Timeline historical
  'length': 'length',           // 14. By Length → Dynamic gradient

  // Legacy/alias mappings for backwards compatibility
  'cards': 'grid',
  'book': 'book',
  'clock': 'clock',
  'kids': 'rainbow',
  'kids-art': 'gallery',
};

const BubbleModal = memo(function BubbleModal({
  surah,
  onClose,
  onRead,
  onDonate,
  onUpgrade,
  darkMode,
  originPosition,
  layoutStyle = 'spiral',
}) {
  const { isAuthenticated, login } = useAuth();
  const isMobile = useIsMobile();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareStatus, setShareStatus] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const closeButtonRef = useRef(null);
  const [verseIndex] = useState(() => Math.floor(Math.random() * DONATION_VERSES.length));

  // Get modal style based on layout - with responsive handling and dynamic styles
  const modalConfig = useMemo(() => {
    const styleKey = layoutToModalStyle[layoutStyle] || 'bubble';
    const baseConfig = { ...MODAL_STYLES[styleKey] };

    // Dynamic style computation for special layouts
    if (styleKey === 'blocks' && surah && baseConfig.getStickyColor) {
      // Sticky note color based on surah.id
      baseConfig.background = baseConfig.getStickyColor(surah.id);
    }

    if (styleKey === 'timeline' && surah) {
      // Revelation: Makki vs Madani gradient
      const isMakki = surah.type === 'Makki' || surah.revelationType === 'Meccan';
      if (isMakki) {
        baseConfig.background = baseConfig.getMakkiGradient?.() || baseConfig.background;
        baseConfig.glowColor = baseConfig.getMakkiGlow?.() || baseConfig.glowColor;
      } else {
        baseConfig.background = baseConfig.getMadaniGradient?.() || baseConfig.background;
        baseConfig.glowColor = baseConfig.getMadaniGlow?.() || baseConfig.glowColor;
      }
    }

    if (styleKey === 'length' && surah) {
      // By Length: short (≤29), medium (30-99), long (100+)
      const ayahCount = surah.totalAyahs || surah.ayahs || 7;
      let dynamicStyle;
      if (ayahCount <= 29) {
        dynamicStyle = baseConfig.getShortStyle?.() || {};
      } else if (ayahCount <= 99) {
        dynamicStyle = baseConfig.getMediumStyle?.() || {};
      } else {
        dynamicStyle = baseConfig.getLongStyle?.() || {};
      }
      Object.assign(baseConfig, dynamicStyle);
    }

    // Responsive hexagon: convert to rounded rectangle on mobile
    if (baseConfig.shape === 'hexagon' && isMobile) {
      return {
        ...baseConfig,
        shape: 'rectangle',
        containerClass: 'rounded-3xl',
        clipPath: undefined,
        width: '94vw',
        height: 'auto',
      };
    }

    // Responsive circle: ensure it fits on mobile
    if (baseConfig.shape === 'circle' && isMobile) {
      return {
        ...baseConfig,
        width: 'min(85vw, 340px)',
        height: 'min(85vw, 340px)',
      };
    }

    return baseConfig;
  }, [layoutStyle, isMobile, surah]);

  // Handle upgrade - login first if not authenticated
  const handleUpgrade = useCallback(() => {
    if (!isAuthenticated) {
      localStorage.setItem('pendingUpgrade', 'true');
      login();
    } else {
      onUpgrade?.();
    }
  }, [isAuthenticated, login, onUpgrade]);

  // Check if bookmarked
  useEffect(() => {
    if (surah) {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      setIsBookmarked(bookmarks.some((b) => b.surahId === surah.id));
    }
  }, [surah]);

  // Animation and keyboard
  useEffect(() => {
    if (surah) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 50);
      if (closeButtonRef.current) closeButtonRef.current.focus();
      return () => clearTimeout(timer);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [surah, onClose]);

  // Handle bookmark
  const handleBookmark = useCallback(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (isBookmarked) {
      const filtered = bookmarks.filter((b) => b.surahId !== surah.id);
      localStorage.setItem('bookmarks', JSON.stringify(filtered));
      setIsBookmarked(false);
    } else {
      bookmarks.push({ surahId: surah.id, name: surah.name, savedAt: Date.now() });
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      setIsBookmarked(true);
    }
  }, [surah, isBookmarked]);

  // Handle share
  const handleShare = useCallback(async () => {
    if (!surah) return;
    setShareStatus('sharing');
    const result = await shareVerse({
      surahName: surah.name,
      surahId: surah.id,
      ayahNumber: 1,
      arabic: surah.arabic,
      translation: surah.meaning,
    });
    setShareStatus(result.success ? 'shared' : 'error');
    setTimeout(() => setShareStatus(null), 2000);
  }, [surah]);

  if (!surah) return null;

  const palette = PALETTES[(surah.id - 1) % 10];
  const isCircle = modalConfig.shape === 'circle';
  const isHexagon = modalConfig.shape === 'hexagon';
  const textColorClass = modalConfig.textDark ? 'text-gray-800' : 'text-white';
  const subTextColorClass = modalConfig.textDark ? 'text-gray-600' : 'text-white/90';

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center p-4"
      style={{ zIndex: 9999999 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bubble-modal-title"
    >
      {/* Semi-transparent backdrop */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: darkMode
            ? 'radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)'
            : 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(200,200,220,0.6) 100%)',
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Main Modal Container - Responsive sizing */}
      <div
        className={`relative transition-all duration-500 ease-out ${
          isAnimating ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: typeof modalConfig.width === 'string' ? modalConfig.width : modalConfig.width,
          height: modalConfig.height === 'auto' ? 'auto' : modalConfig.height,
          minHeight: modalConfig.minHeight || undefined,
          maxWidth: modalConfig.maxWidth || '95vw',
          maxHeight: isCircle ? '95vw' : '90vh',
        }}
      >
        {/* Outer Glow */}
        <div
          className={`absolute pointer-events-none ${isCircle ? 'rounded-full' : modalConfig.containerClass}`}
          style={{
            inset: '-25px',
            background: `radial-gradient(circle, ${modalConfig.glowColor}50 0%, transparent 70%)`,
            animation: 'breathe 3s ease-in-out infinite',
            clipPath: modalConfig.clipPath || 'none',
          }}
        />

        {/* Spinning Glow Ring (for circles) */}
        {isCircle && (
          <div
            className="absolute rounded-full opacity-40 pointer-events-none"
            style={{
              inset: '-12px',
              background: `conic-gradient(from 0deg, ${modalConfig.glowColor}, transparent, ${modalConfig.glowColor})`,
              filter: 'blur(12px)',
              animation: 'spin 12s linear infinite',
            }}
          />
        )}

        {/* Main Modal Body */}
        <div
          className={`absolute inset-0 ${modalConfig.containerClass} overflow-hidden`}
          style={{
            background: modalConfig.background,
            border: modalConfig.border || 'none',
            boxShadow: modalConfig.boxShadow || `0 20px 60px rgba(0,0,0,0.3)`,
            clipPath: modalConfig.clipPath || 'none',
            transform: modalConfig.rotation ? `rotate(${modalConfig.rotation})` : 'none',
          }}
        >
          {/* ===== DECORATIONS - Rendered based on config flags ===== */}

          {/* Push Pin for Blocks/Sticky Note style */}
          {modalConfig.hasPushPin && (
            <div style={{
              position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)',
              width: '24px', height: '24px', borderRadius: '50%',
              background: 'linear-gradient(145deg, #ef4444, #dc2626)',
              border: '2px solid #b91c1c',
              boxShadow: '0 3px 8px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.3)',
              zIndex: 20,
            }} />
          )}

          {/* Brush Stroke for Art Studio style */}
          {modalConfig.hasBrushStroke && (
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '6px',
              borderRadius: '8px 8px 0 0',
              background: 'linear-gradient(90deg, #D4A574, #8B4513, #D4A574)',
            }} />
          )}

          {/* Arabic Watermark for Alphabet style */}
          {modalConfig.hasWatermark && surah?.arabic && (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              pointerEvents: 'none', overflow: 'hidden',
              fontSize: '10rem', opacity: 0.06,
              fontFamily: "'Scheherazade New', serif",
              color: modalConfig.watermarkColor || 'rgba(255,215,0,0.5)',
            }}>
              {surah.arabic.charAt(0)}
            </div>
          )}

          {/* Sun/Moon icon for Revelation style */}
          {modalConfig.hasSunMoon && surah && (
            <span style={{
              position: 'absolute', top: '16px', right: '56px',
              fontSize: '1.5rem', opacity: 0.9,
            }}>
              {(surah.type === 'Makki' || surah.revelationType === 'Meccan') ? '☀️' : '🌙'}
            </span>
          )}

          {/* Length Bar for By Length style */}
          {modalConfig.hasLengthBar && surah && (
            <div style={{
              position: 'absolute', bottom: 0, left: 0, height: '4px',
              borderRadius: '0 4px 0 0',
              background: 'linear-gradient(90deg, #10b981, #06b6d4)',
              width: `${Math.min(((surah.totalAyahs || surah.ayahs || 7) / 286) * 100, 100)}%`,
            }} />
          )}

          {/* Bookmark Ribbon for Juzz style */}
          {modalConfig.hasBookmarkRibbon && (
            <div style={{
              position: 'absolute', top: 0, right: '20px',
              width: '28px', height: '48px',
              background: '#10b981',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)',
              boxShadow: '2px 2px 6px rgba(0,0,0,0.2)',
            }} />
          )}

          {/* Sparkles for Rainbow style */}
          {modalConfig.hasSparkles && (
            <>
              <span style={{ position: 'absolute', top: '12%', right: '15%', fontSize: '1.2rem', opacity: 0.7, animation: 'twinkle 1.5s ease-in-out infinite' }}>✨</span>
              <span style={{ position: 'absolute', bottom: '25%', left: '12%', fontSize: '1rem', opacity: 0.5, animation: 'twinkle 2s ease-in-out infinite 0.5s' }}>⭐</span>
              <span style={{ position: 'absolute', top: '40%', left: '8%', fontSize: '0.8rem', opacity: 0.4, animation: 'twinkle 1.8s ease-in-out infinite 0.3s' }}>🌟</span>
            </>
          )}

          {/* Left Accent Bar for List style */}
          {modalConfig.hasLeftAccentBar && (
            <div style={{
              position: 'absolute', top: '16px', bottom: '16px', left: 0,
              width: '4px', borderRadius: '0 4px 4px 0',
              background: modalConfig.accentColor || '#10b981',
            }} />
          )}

          {/* Floating Dots for Bubbles style */}
          {modalConfig.hasFloatingDots && (
            <>
              {[...Array(6)].map((_, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  width: 8 + (i % 3) * 4,
                  height: 8 + (i % 3) * 4,
                  borderRadius: '50%',
                  background: `rgba(255,255,255,${0.3 + (i % 3) * 0.15})`,
                  left: `${15 + i * 12}%`,
                  top: `${20 + (i % 2) * 40}%`,
                  animation: `floatParticle ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }} />
              ))}
            </>
          )}

          {/* Concentric Circles for Spiral style */}
          {modalConfig.hasConcentricCircles && isCircle && (
            <>
              <div style={{ position: 'absolute', inset: '15%', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: '25%', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', inset: '35%', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', pointerEvents: 'none' }} />
            </>
          )}

          {/* Wave Effect */}
          {modalConfig.hasWaveEffect && (
            <div
              className="absolute bottom-0 left-0 right-0 h-24 opacity-30 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.3))',
                borderRadius: '100% 100% 0 0',
              }}
            />
          )}

          {/* Honeycomb Pattern for hexagon style */}
          {modalConfig.hasHoneycomb && (
            <div className="absolute inset-0 pointer-events-none opacity-12" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'56\' height=\'100\' viewBox=\'0 0 56 100\'%3E%3Cpath d=\'M28 66L0 50V16L28 0l28 16v34L28 66zM28 0L0 16v34l28 16 28-16V16L28 0z\' fill=\'%23ffffff\' fill-opacity=\'0.4\'/%3E%3C/svg%3E")',
              backgroundSize: '28px 50px',
              clipPath: modalConfig.clipPath || 'none',
            }} />
          )}

          {/* Book Page Lines */}
          {modalConfig.hasPageLines && (
            <div className="absolute inset-0 pointer-events-none opacity-20">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-8 right-8 h-px bg-amber-900"
                  style={{ top: `${20 + i * 6}%` }}
                />
              ))}
            </div>
          )}

          {/* Glass Highlight - ONLY for dark backgrounds, smaller and more subtle */}
          {modalConfig.hasGlassHighlight && !modalConfig.textDark && (
            <div
              className="absolute pointer-events-none"
              style={{
                top: '3%',
                left: isCircle ? '20%' : '20%',
                width: isCircle ? '40%' : '60%',
                height: modalConfig.glassHeight || (isCircle ? '18%' : '25%'),
                background: `radial-gradient(ellipse at center top, rgba(255,255,255,${modalConfig.glassOpacity || 0.05}), transparent)`,
                borderRadius: isCircle ? '50%' : '1.5rem',
              }}
            />
          )}

          {/* Close Button - Responsive positioning */}
          <button
            ref={closeButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className={`absolute w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all z-20 ${
              modalConfig.textDark ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' : 'bg-white/30 hover:bg-white/50 text-white'
            }`}
            style={{
              top: isCircle ? '14%' : (isHexagon ? '15%' : '16px'),
              right: isCircle ? '14%' : (isHexagon ? '20%' : '16px'),
              backdropFilter: 'blur(10px)',
            }}
            aria-label="Close"
          >
            <Icons.X className="w-4 h-4" />
          </button>

          {/* Surah Number Badge */}
          <div
            className={`absolute w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${textColorClass}`}
            style={{
              top: isCircle ? '14%' : (isHexagon ? '15%' : '16px'),
              left: isCircle ? '14%' : (isHexagon ? '20%' : '16px'),
              background: modalConfig.textDark ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.25)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {surah.id}
          </div>

          {/* Content Container - adjusted per shape */}
          <div
            className={`absolute flex flex-col items-center ${textColorClass} text-center overflow-hidden`}
            style={{
              ...(isCircle ? {
                top: '20%',
                left: '12%',
                right: '12%',
                bottom: '16%',
                padding: '8px',
              } : isHexagon ? {
                // Hexagon - generous padding for clipped areas
                top: '18%',
                left: '12%',
                right: '12%',
                bottom: '18%',
                padding: '8px 16px',
              } : {
                // Rectangle shapes
                top: '50px',
                left: '16px',
                right: '16px',
                bottom: '16px',
                padding: '8px',
              }),
            }}
          >
            {/* Scrollable Content Area */}
            <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto w-full scrollbar-thin">
              {/* Arabic Name - Large and prominent */}
              <div
                className="text-4xl sm:text-5xl mb-2"
                style={{
                  fontFamily: "'Scheherazade New', serif",
                  textShadow: modalConfig.textDark ? 'none' : '0 4px 25px rgba(0,0,0,0.5)',
                  animation: 'gentleFloat 4s ease-in-out infinite',
                }}
                lang="ar"
                dir="rtl"
              >
                {surah.arabic}
              </div>

              {/* English Name */}
              <h2
                id="bubble-modal-title"
                className="text-lg sm:text-xl font-bold mb-0.5"
                style={{ textShadow: modalConfig.textDark ? 'none' : '0 2px 12px rgba(0,0,0,0.4)' }}
              >
                {surah.name}
              </h2>

              {/* Meaning */}
              <p className={`${subTextColorClass} text-sm mb-2 italic`}>"{surah.meaning}"</p>

              {/* Quick Info Pills - Meta chips */}
              <div className="flex items-center gap-2 mb-3 flex-wrap justify-center">
                <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                  modalConfig.textDark ? 'bg-black/10' : 'bg-white/20'
                }`}>
                  {surah.ayahs} Ayahs
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                  modalConfig.textDark ? 'bg-black/10' : 'bg-white/20'
                }`}>
                  {surah.type}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                  modalConfig.textDark ? 'bg-black/10' : 'bg-white/20'
                }`}>
                  #{surah.chronOrder}
                </span>
              </div>

              {/* Topics - Tag chips that wrap gracefully */}
              {surah.topics?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 justify-center mb-3">
                  {surah.topics.slice(0, 4).map((topic) => (
                    <span
                      key={topic}
                      className={`px-2.5 py-0.5 rounded-full text-xs backdrop-blur-sm ${
                        modalConfig.textDark ? 'bg-black/10' : 'bg-white/15'
                      }`}
                    >
                      {FAQ_TOPICS.find((t) => t.id === topic)?.icon} {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons - Primary CTA centered with secondary icons below */}
            <div className="flex flex-col items-center gap-3 flex-shrink-0 pt-2">
              {/* Start Reading - Primary CTA Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRead(surah);
                }}
                className={`w-full max-w-[200px] px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 ${
                  modalConfig.textDark ? 'text-gray-800' : 'text-white'
                }`}
                style={{
                  background: modalConfig.textDark ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.35)',
                  backdropFilter: 'blur(10px)',
                  border: modalConfig.textDark ? '2px solid rgba(0,0,0,0.2)' : '2px solid rgba(255,255,255,0.5)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
                }}
              >
                <Icons.Book className="w-5 h-5" />
                <span className="text-sm">Start Reading</span>
              </button>

              {/* Secondary Actions Row */}
              <div className="flex items-center gap-3">
                {/* Bookmark */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookmark();
                  }}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                    isBookmarked
                      ? 'bg-amber-400/90'
                      : modalConfig.textDark ? 'bg-black/10' : 'bg-white/25'
                  }`}
                  style={{ backdropFilter: 'blur(10px)', minWidth: '44px', minHeight: '44px' }}
                  aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                >
                  {isBookmarked ? (
                    <Icons.BookmarkFilled className="w-5 h-5" />
                  ) : (
                    <Icons.Bookmark className="w-5 h-5" />
                  )}
                </button>

                {/* Share */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare();
                  }}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                    shareStatus === 'shared'
                      ? 'bg-emerald-500/90'
                      : modalConfig.textDark ? 'bg-black/10' : 'bg-white/25'
                  }`}
                  style={{ backdropFilter: 'blur(10px)', minWidth: '44px', minHeight: '44px' }}
                  aria-label="Share"
                >
                  {shareStatus === 'sharing' ? (
                    <Icons.Loader className="w-5 h-5 animate-spin" />
                  ) : shareStatus === 'shared' ? (
                    <Icons.Check className="w-5 h-5" />
                  ) : (
                    <Icons.Share className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Banner - Under the modal */}
      {(onDonate || onUpgrade) && (
        <div
          className="mt-4 px-4 py-3 rounded-2xl max-w-sm mx-auto text-center"
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)',
            animation: 'slideUp 0.5s ease-out 0.3s both',
          }}
        >
          <p className="text-white text-sm leading-relaxed mb-1" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
            {DONATION_VERSES[verseIndex].arabic}
          </p>
          <p className="text-white/90 text-xs mb-0.5" style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }} dir="rtl">
            {DONATION_VERSES[verseIndex].urdu}
          </p>
          <p className="text-white/70 text-[11px] mb-3">
            {DONATION_VERSES[verseIndex].en} • {DONATION_VERSES[verseIndex].ref}
          </p>
          <div className="flex items-center justify-center gap-2">
            {onDonate && (
              <button
                onClick={onDonate}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
                style={{ background: 'white', color: '#059669' }}
              >
                <Icons.Heart className="w-3.5 h-3.5" />
                Donate
              </button>
            )}
            {onUpgrade && (
              <button
                onClick={handleUpgrade}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 border border-white/50"
                style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
              >
                <Icons.Star className="w-3.5 h-3.5" />
                Premium
              </button>
            )}
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.8; }
          50% { transform: translateY(-8px) scale(1.2); opacity: 0.5; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
});

export default BubbleModal;
