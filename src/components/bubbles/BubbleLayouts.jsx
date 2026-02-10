/**
 * Bubble Layouts - Multiple Layout Options for Surah Display
 * - Clock Shape (circular arrangement)
 * - Bubble Grid (floating cards)
 * - Juzz Groups
 * - Alphabetical (Arabic)
 * - Revelation Order
 */

import { useState, useMemo, memo } from 'react';
import { PALETTES } from '../../data';
import { Icons } from '../common/Icons';
import { playThrottledHoverSound, playClickSound } from '../../utils/soundUtils';

// Arabic alphabet for sorting
const ARABIC_ALPHABET = [
  'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر',
  'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف',
  'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'
];

// Juzz mapping (which surahs start in each juzz)
const JUZZ_STARTS = {
  1: 1, 2: 2, 3: 2, 4: 3, 5: 4, 6: 4, 7: 5, 8: 6, 9: 7, 10: 8,
  11: 9, 12: 11, 13: 12, 14: 15, 15: 17, 16: 18, 17: 21, 18: 23,
  19: 25, 20: 27, 21: 29, 22: 33, 23: 36, 24: 39, 25: 41, 26: 46,
  27: 51, 28: 58, 29: 67, 30: 78
};

// Get first Arabic letter of surah name
const getFirstArabicLetter = (arabicName) => {
  // Remove 'ال' prefix if present
  let name = arabicName;
  if (name.startsWith('ال')) {
    name = name.substring(2);
  }
  return name.charAt(0);
};

// Layout Selector Component
export const LayoutSelector = memo(function LayoutSelector({ currentLayout, onLayoutChange, darkMode }) {
  const layouts = [
    { id: 'spiral', name: 'Spiral', icon: 'Sparkles', description: 'Fibonacci spiral' },
    { id: 'clock', name: 'Clock', icon: 'Clock', description: 'Circular arrangement' },
    { id: 'grid', name: 'Grid', icon: 'Grid', description: 'Bubble grid' },
    { id: 'juzz', name: 'Juzz', icon: 'Layers', description: 'By Juzz (1-30)' },
    { id: 'alphabet', name: 'Arabic', icon: 'Type', description: 'Arabic alphabet' },
    { id: 'revelation', name: 'Revelation', icon: 'Clock', description: 'Chronological' },
    { id: 'book', name: 'Book', icon: 'BookOpen', description: 'Classic book style' },
  ];

  return (
    <div className={`flex items-center gap-1 p-1 rounded-2xl ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-xl shadow-lg`}>
      {layouts.map((layout) => {
        const Icon = Icons[layout.icon] || Icons.Grid;
        const isActive = currentLayout === layout.id;

        return (
          <button
            key={layout.id}
            onClick={() => onLayoutChange(layout.id)}
            className={`group relative p-2.5 rounded-xl transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg scale-105'
                : darkMode
                ? 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
            title={layout.name}
          >
            <Icon className="w-4 h-4" />

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
              <div className={`px-2 py-1 rounded-lg text-[10px] whitespace-nowrap ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}`}>
                {layout.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
});

// Styled Bubble Component - Matches spiral bubble style
const StyledBubble = memo(function StyledBubble({ surah, size, contentZoom, onClick, index }) {
  const [hovered, setHovered] = useState(false);
  const palette = PALETTES[(surah.id - 1) % 10];
  const hueRotate = (surah.id * 15) % 360;

  return (
    <div
      onMouseEnter={() => {
        setHovered(true);
        playThrottledHoverSound();
      }}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => {
        playClickSound();
        onClick(e);
      }}
      className="cursor-pointer select-none"
      role="button"
      tabIndex={0}
      aria-label={`Surah ${surah.id}: ${surah.name} - ${surah.arabic}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          playClickSound();
          onClick(e);
        }
      }}
      style={{
        width: size,
        height: size,
        transform: `scale(${hovered ? 1.15 : 1}) ${hovered ? 'translateY(-4px)' : ''}`,
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        zIndex: hovered ? 100 : 10,
      }}
    >
      {/* Outer Glow */}
      <div
        className="absolute rounded-full transition-all duration-500 pointer-events-none"
        style={{
          inset: '-20%',
          background: `radial-gradient(circle, ${palette.glow || palette.colors[0]}40 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0.5,
          filter: 'blur(10px)',
        }}
      />

      {/* Iridescent Ring */}
      <div
        className="absolute rounded-full transition-all duration-500 pointer-events-none"
        style={{
          inset: '-6%',
          background: `conic-gradient(from ${hueRotate}deg, ${palette.colors[0]}80, ${palette.colors[1]}80, ${palette.colors[2]}80, ${palette.colors[0]}80)`,
          opacity: hovered ? 0.8 : 0.25,
          animation: hovered ? 'spinSlow 12s linear infinite' : 'none',
          filter: 'blur(2px)',
        }}
      />

      {/* Main Bubble */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${palette.colors[0]} 0%, ${palette.colors[1]} 50%, ${palette.colors[2]} 100%)`,
          boxShadow: hovered
            ? `0 20px 40px -10px ${palette.colors[0]}60, 0 0 0 2px rgba(255,255,255,0.4), 0 0 30px ${palette.glow || palette.colors[0]}40, inset 0 -20px 40px ${palette.colors[2]}50, inset 0 20px 40px rgba(255,255,255,0.2)`
            : `0 10px 30px -8px ${palette.colors[0]}40, 0 0 0 1px rgba(255,255,255,0.2), inset 0 -15px 30px ${palette.colors[2]}30, inset 0 15px 30px rgba(255,255,255,0.15)`,
        }}
      >
        {/* Glass Layer */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: '8%',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 30%, transparent 60%)',
            border: '1px solid rgba(255,255,255,0.25)',
          }}
        />

        {/* Top Crescent Highlight */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '65%',
            height: '35%',
            top: '5%',
            left: '17%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(1px)',
            transform: 'scaleY(0.5)',
          }}
        />

        {/* Small Bright Spot */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '15%',
            height: '10%',
            top: '15%',
            left: '20%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Bottom Reflection */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '50%',
            height: '25%',
            bottom: '8%',
            left: '25%',
            background: `linear-gradient(0deg, ${palette.glow || palette.colors[0]}40 0%, transparent 100%)`,
            borderRadius: '50%',
            filter: 'blur(5px)',
            transform: 'scaleY(0.4)',
          }}
        />

        {/* Shimmer on Hover */}
        {hovered && (
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div
              style={{
                position: 'absolute',
                inset: '-50%',
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                animation: 'shimmerWave 2s ease-in-out infinite',
              }}
            />
          </div>
        )}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-1 text-center z-10">
          {/* Number Badge */}
          <div
            className="absolute flex items-center justify-center rounded-full"
            style={{
              top: '6%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: Math.max(size * 0.2 * contentZoom, 14),
              height: Math.max(size * 0.2 * contentZoom, 14),
              background: 'rgba(255,255,255,0.3)',
              fontSize: Math.max(size * 0.1 * contentZoom, 8),
              fontWeight: '700',
              color: 'white',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            {surah.id}
          </div>

          {/* Arabic Name */}
          <span
            style={{
              fontSize: Math.max(size * 0.26 * contentZoom, 12),
              fontFamily: "'Scheherazade New', serif",
              fontWeight: 'bold',
              color: 'white',
              textShadow: `0 2px 4px rgba(0,0,0,0.3), 0 0 20px ${palette.glow || palette.colors[0]}50`,
              lineHeight: 1.1,
              marginTop: size * 0.08,
            }}
            dir="rtl"
          >
            {size < 55 ? (surah.arabic.length > 5 ? surah.arabic.substring(0, 4) : surah.arabic) : surah.arabic}
          </span>

          {/* English Name - only on larger bubbles */}
          {size >= 60 && (
            <span
              style={{
                fontSize: Math.max(size * 0.09 * contentZoom, 7),
                fontWeight: '600',
                color: 'rgba(255,255,255,0.85)',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)',
                marginTop: 2,
                maxWidth: '85%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {surah.name}
            </span>
          )}
        </div>

        {/* Floating Particles on Hover */}
        {hovered && size >= 50 && (
          <>
            <div
              className="absolute w-1.5 h-1.5 bg-white rounded-full pointer-events-none"
              style={{ top: '20%', right: '18%', animation: 'floatParticle 2s ease-in-out infinite', boxShadow: '0 0 6px white' }}
            />
            <div
              className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
              style={{ bottom: '25%', left: '15%', animation: 'floatParticle 2.5s ease-in-out infinite 0.3s', boxShadow: '0 0 4px white' }}
            />
          </>
        )}
      </div>

      {/* Outer Border */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-400"
        style={{
          border: `1.5px solid ${hovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}`,
          boxShadow: hovered ? `0 0 15px ${palette.glow || palette.colors[0]}60` : 'none',
        }}
      />
    </div>
  );
});

// Clock Layout - Surahs arranged in a circle like a clock
export const ClockLayout = memo(function ClockLayout({
  surahs,
  onSurahClick,
  zoom = 1,
  contentZoom = 1,
  darkMode,
}) {
  const rings = useMemo(() => {
    // Distribute surahs into concentric rings
    const ring1 = surahs.slice(0, 12);   // Inner ring - 12 surahs
    const ring2 = surahs.slice(12, 36);  // Second ring - 24 surahs
    const ring3 = surahs.slice(36, 72);  // Third ring - 36 surahs
    const ring4 = surahs.slice(72);      // Outer ring - remaining

    return [ring1, ring2, ring3, ring4];
  }, [surahs]);

  const containerSize = 1200 * zoom;
  const centerX = containerSize / 2;
  const centerY = containerSize / 2;

  const ringRadii = [130, 240, 370, 510].map(r => r * zoom);
  const bubbleSizes = [75, 65, 55, 48].map(s => s * zoom);

  return (
    <div
      className="relative"
      style={{
        width: containerSize,
        height: containerSize,
        margin: '0 auto',
      }}
    >
      {/* Center decoration - Beautiful glowing orb */}
      <div
        className="absolute rounded-full"
        style={{
          left: centerX - 70 * zoom,
          top: centerY - 70 * zoom,
          width: 140 * zoom,
          height: 140 * zoom,
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(99,102,241,0.2) 40%, transparent 70%)',
          animation: 'breathe 3s ease-in-out infinite',
          boxShadow: '0 0 60px rgba(139,92,246,0.3), inset 0 0 40px rgba(255,255,255,0.1)',
        }}
      />

      {/* Ring decorations - glowing rings */}
      {ringRadii.map((radius, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: centerX - radius,
            top: centerY - radius,
            width: radius * 2,
            height: radius * 2,
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: `0 0 20px rgba(139,92,246,${0.1 - i * 0.02})`,
          }}
        />
      ))}

      {/* Rings with styled bubbles */}
      {rings.map((ring, ringIndex) => {
        const radius = ringRadii[ringIndex];
        const bubbleSize = bubbleSizes[ringIndex];

        return ring.map((surah, index) => {
          const angle = (index / ring.length) * 2 * Math.PI - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle) - bubbleSize / 2;
          const y = centerY + radius * Math.sin(angle) - bubbleSize / 2;

          return (
            <div
              key={surah.id}
              className="absolute"
              style={{
                left: x,
                top: y,
                animation: `gentleFloat ${3 + (index % 3)}s ease-in-out infinite`,
                animationDelay: `${index * 0.08}s`,
              }}
            >
              <StyledBubble
                surah={surah}
                size={bubbleSize}
                contentZoom={contentZoom}
                index={index}
                onClick={(e) => onSurahClick(surah, { x: e.clientX, y: e.clientY })}
              />
            </div>
          );
        });
      })}
    </div>
  );
});

// Grid Layout - Floating bubble cards
export const GridLayout = memo(function GridLayout({
  surahs,
  onSurahClick,
  zoom = 1,
  contentZoom = 1,
  darkMode,
}) {
  const columns = Math.ceil(Math.sqrt(surahs.length) * 1.2);
  const bubbleSize = 80 * zoom;
  const gap = 20 * zoom;

  return (
    <div
      className="flex flex-wrap flex-row-reverse justify-center gap-4 p-8"
      dir="rtl"
      style={{ maxWidth: (bubbleSize + gap) * columns + 100 }}
    >
      {surahs.map((surah, index) => {
        const palette = PALETTES[(surah.id - 1) % 10];

        return (
          <div
            key={surah.id}
            className="bubble-item cursor-pointer"
            style={{
              width: bubbleSize,
              height: bubbleSize + 20,
              animation: `gentleFloat ${2.5 + (index % 4) * 0.5}s ease-in-out infinite`,
              animationDelay: `${(index % 10) * 0.1}s`,
            }}
            onClick={(e) => onSurahClick(surah, { x: e.clientX, y: e.clientY })}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-50"
              style={{
                background: `radial-gradient(circle, ${palette.colors[0]}30 0%, transparent 70%)`,
                filter: 'blur(10px)',
                transform: 'scale(1.2)',
              }}
            />

            {/* Card */}
            <div
              className="relative w-full h-full rounded-2xl flex flex-col items-center justify-center text-white overflow-hidden p-2"
              style={{
                background: `linear-gradient(145deg, ${palette.colors[0]}e0, ${palette.colors[1]}d0, ${palette.colors[2]}c0)`,
                boxShadow: `0 8px 32px ${palette.colors[0]}40`,
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Glass highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-1/3 rounded-t-2xl opacity-30"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)',
                }}
              />

              {/* Number badge */}
              <div
                className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/20 flex items-center justify-center"
              >
                <span className="text-[9px] font-bold">{surah.id}</span>
              </div>

              {/* Arabic */}
              <span
                className="font-bold relative z-10 text-center leading-tight"
                style={{
                  fontSize: bubbleSize * 0.22 * contentZoom,
                  fontFamily: "'Scheherazade New', serif",
                }}
                dir="rtl"
              >
                {surah.arabic}
              </span>

              {/* English name */}
              <span
                className="text-white/70 relative z-10 mt-1 text-center leading-none"
                style={{ fontSize: bubbleSize * 0.11 * contentZoom }}
              >
                {surah.name}
              </span>

              {/* Ayah count */}
              <span
                className="text-white/50 relative z-10 mt-0.5"
                style={{ fontSize: bubbleSize * 0.09 * contentZoom }}
              >
                {surah.ayahs} ayahs
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
});

// Juzz Grouped Layout
export const JuzzGroupLayout = memo(function JuzzGroupLayout({
  surahs,
  onSurahClick,
  zoom = 1,
  contentZoom = 1,
  darkMode,
}) {
  // Group surahs by Juzz
  const juzzGroups = useMemo(() => {
    const groups = {};

    for (let juzz = 1; juzz <= 30; juzz++) {
      groups[juzz] = [];
    }

    surahs.forEach(surah => {
      // Find which juzz this surah primarily belongs to
      let juzz = 30;
      for (let j = 30; j >= 1; j--) {
        if (surah.id >= JUZZ_STARTS[j]) {
          juzz = j;
          break;
        }
      }
      groups[juzz].push(surah);
    });

    return groups;
  }, [surahs]);

  const juzzColors = [
    '#8B5CF6', '#6366F1', '#3B82F6', '#06B6D4', '#10B981',
    '#22C55E', '#84CC16', '#EAB308', '#F59E0B', '#F97316',
    '#EF4444', '#EC4899', '#D946EF', '#A855F7', '#8B5CF6',
    '#6366F1', '#3B82F6', '#06B6D4', '#10B981', '#22C55E',
    '#84CC16', '#EAB308', '#F59E0B', '#F97316', '#EF4444',
    '#EC4899', '#D946EF', '#A855F7', '#8B5CF6', '#6366F1',
  ];

  return (
    <div className="p-6 space-y-6">
      {Object.entries(juzzGroups).map(([juzz, surahList]) => {
        if (surahList.length === 0) return null;

        const juzzColor = juzzColors[parseInt(juzz) - 1];

        return (
          <div key={juzz} className="relative">
            {/* Juzz Header - Beautiful bubble style */}
            <div
              className="sticky top-0 z-10 flex items-center gap-3 sm:gap-4 mb-5 p-3 sm:p-4 rounded-2xl backdrop-blur-xl"
              style={{
                background: `linear-gradient(135deg, ${juzzColor}25, ${juzzColor}10)`,
                borderLeft: `4px solid ${juzzColor}`,
                boxShadow: `0 4px 20px ${juzzColor}15`,
              }}
            >
              {/* Juzz Number Bubble */}
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${juzzColor}, ${juzzColor}cc)`,
                  boxShadow: `0 4px 15px ${juzzColor}50, inset 0 -8px 15px rgba(0,0,0,0.2), inset 0 8px 15px rgba(255,255,255,0.2)`,
                }}
              >
                {/* Glass highlight */}
                <div
                  className="absolute top-1 left-2 right-2 h-1/3 rounded-full"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)' }}
                />
                <span className="relative z-10">{juzz}</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className={`font-bold text-base sm:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Juzz {juzz}
                </h3>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  {surahList.length} Surahs
                </p>
              </div>
            </div>

            {/* Surahs Grid - Using StyledBubble */}
            <div className="flex flex-wrap gap-4 ml-4">
              {surahList.map((surah, index) => {
                const size = 70 * zoom;

                return (
                  <div
                    key={surah.id}
                    style={{
                      animation: `gentleFloat ${2.5 + (index % 3) * 0.3}s ease-in-out infinite`,
                      animationDelay: `${index * 0.05}s`,
                    }}
                  >
                    <StyledBubble
                      surah={surah}
                      size={size}
                      contentZoom={contentZoom}
                      index={index}
                      onClick={(e) => onSurahClick(surah, { x: e.clientX, y: e.clientY })}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
});

// Alphabetical Layout (Arabic)
export const AlphabetLayout = memo(function AlphabetLayout({
  surahs,
  onSurahClick,
  zoom = 1,
  contentZoom = 1,
  darkMode,
}) {
  // Group surahs by first Arabic letter
  const alphabetGroups = useMemo(() => {
    const groups = {};

    ARABIC_ALPHABET.forEach(letter => {
      groups[letter] = [];
    });

    surahs.forEach(surah => {
      const firstLetter = getFirstArabicLetter(surah.arabic);
      // Find matching letter or closest
      const matchedLetter = ARABIC_ALPHABET.find(l => l === firstLetter) || 'ا';
      groups[matchedLetter].push(surah);
    });

    return groups;
  }, [surahs]);

  const letterColors = {
    'ا': '#8B5CF6', 'ب': '#6366F1', 'ت': '#3B82F6', 'ث': '#06B6D4',
    'ج': '#10B981', 'ح': '#22C55E', 'خ': '#84CC16', 'د': '#EAB308',
    'ذ': '#F59E0B', 'ر': '#F97316', 'ز': '#EF4444', 'س': '#EC4899',
    'ش': '#D946EF', 'ص': '#A855F7', 'ض': '#8B5CF6', 'ط': '#6366F1',
    'ظ': '#3B82F6', 'ع': '#06B6D4', 'غ': '#10B981', 'ف': '#22C55E',
    'ق': '#84CC16', 'ك': '#EAB308', 'ل': '#F59E0B', 'م': '#F97316',
    'ن': '#EF4444', 'ه': '#EC4899', 'و': '#D946EF', 'ي': '#A855F7',
  };

  return (
    <div className="p-6 space-y-6">
      {Object.entries(alphabetGroups).map(([letter, surahList]) => {
        if (surahList.length === 0) return null;

        const letterColor = letterColors[letter] || '#8B5CF6';

        return (
          <div key={letter} className="relative" dir="rtl">
            {/* Letter Header */}
            <div
              className="sticky top-0 z-10 flex items-center gap-3 sm:gap-4 mb-4 p-2 sm:p-3 rounded-2xl backdrop-blur-xl"
              style={{
                background: `linear-gradient(135deg, ${letterColor}30, ${letterColor}10)`,
                borderRight: `4px solid ${letterColor}`,
              }}
            >
              <div
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white font-bold text-2xl sm:text-3xl flex-shrink-0"
                style={{
                  background: letterColor,
                  fontFamily: "'Scheherazade New', serif",
                }}
              >
                {letter}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className={`font-bold text-base sm:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`} style={{ fontFamily: "'Scheherazade New', serif" }}>
                  حرف {letter}
                </h3>
                <p className={`text-[10px] sm:text-xs ${darkMode ? 'text-white/50' : 'text-gray-500'}`}>
                  {surahList.length} Surah{surahList.length > 1 ? 's' : ''}
                </p>
              </div>
            </div>

            {/* Surahs - RTL flow */}
            <div className="flex flex-wrap gap-3 pr-4">
              {surahList.map((surah, index) => {
                const palette = PALETTES[(surah.id - 1) % 10];
                const size = 70 * zoom;

                return (
                  <div
                    key={surah.id}
                    className="bubble-item cursor-pointer"
                    style={{
                      width: size,
                      height: size + 15,
                      animation: `gentleFloat ${2.5 + (index % 3) * 0.3}s ease-in-out infinite`,
                    }}
                    onClick={(e) => onSurahClick(surah, { x: e.clientX, y: e.clientY })}
                  >
                    <div
                      className="w-full h-full rounded-2xl flex flex-col items-center justify-center text-white p-1"
                      style={{
                        background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})`,
                        boxShadow: `0 4px 15px ${palette.colors[0]}40`,
                      }}
                    >
                      <span
                        className="font-bold leading-tight text-center"
                        style={{
                          fontSize: size * 0.24 * contentZoom,
                          fontFamily: "'Scheherazade New', serif",
                        }}
                      >
                        {surah.arabic}
                      </span>
                      <span className="text-white/60 text-[10px] mt-1">
                        {surah.id}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
});

// Revelation Order Layout
export const RevelationLayout = memo(function RevelationLayout({
  surahs,
  onSurahClick,
  zoom = 1,
  contentZoom = 1,
  darkMode,
}) {
  // Sort by chronological order
  const sortedSurahs = useMemo(() => {
    return [...surahs].sort((a, b) => a.chronOrder - b.chronOrder);
  }, [surahs]);

  // Group into Makki and Madani periods
  const makkiSurahs = sortedSurahs.filter(s => s.type === 'Makki');
  const madaniSurahs = sortedSurahs.filter(s => s.type === 'Madani');

  return (
    <div className="p-6 space-y-8">
      {/* Makki Period */}
      <div>
        <div
          className="sticky top-0 z-10 flex items-center gap-3 sm:gap-4 mb-4 p-3 sm:p-4 rounded-2xl backdrop-blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(245, 158, 11, 0.1))',
            borderLeft: '4px solid #F59E0B',
          }}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
            <Icons.Sun className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className={`font-bold text-base sm:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Makki Period
            </h3>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-white/50' : 'text-gray-500'} truncate`}>
              {makkiSurahs.length} Surahs - Revealed in Makkah
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {makkiSurahs.map((surah, index) => {
            const palette = PALETTES[(surah.id - 1) % 10];
            const size = 60 * zoom;

            return (
              <div
                key={surah.id}
                className="bubble-item cursor-pointer relative"
                style={{
                  width: size,
                  height: size + 20,
                  animation: `gentleFloat ${2.5 + (index % 4) * 0.3}s ease-in-out infinite`,
                }}
                onClick={(e) => onSurahClick(surah, { x: e.clientX, y: e.clientY })}
              >
                {/* Order badge */}
                <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-amber-500 text-white text-[8px] font-bold flex items-center justify-center z-10 shadow">
                  {surah.chronOrder}
                </div>

                <div
                  className="w-full h-full rounded-xl flex flex-col items-center justify-center text-white p-1"
                  style={{
                    background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})`,
                    boxShadow: `0 4px 15px ${palette.colors[0]}40`,
                  }}
                >
                  <span className="font-bold" style={{ fontSize: size * 0.25 * contentZoom }}>
                    {surah.id}
                  </span>
                  <span
                    className="text-white/70 text-center leading-none"
                    style={{
                      fontSize: size * 0.18 * contentZoom,
                      fontFamily: "'Scheherazade New', serif",
                    }}
                    dir="rtl"
                  >
                    {surah.arabic.length > 5 ? surah.arabic.substring(0, 4) : surah.arabic}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Madani Period */}
      <div>
        <div
          className="sticky top-0 z-10 flex items-center gap-3 sm:gap-4 mb-4 p-3 sm:p-4 rounded-2xl backdrop-blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, 0.1))',
            borderLeft: '4px solid #10B981',
          }}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
            <Icons.Moon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className={`font-bold text-base sm:text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Madani Period
            </h3>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-white/50' : 'text-gray-500'} truncate`}>
              {madaniSurahs.length} Surahs - Revealed in Madinah
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {madaniSurahs.map((surah, index) => {
            const palette = PALETTES[(surah.id - 1) % 10];
            const size = 60 * zoom;

            return (
              <div
                key={surah.id}
                className="bubble-item cursor-pointer relative"
                style={{
                  width: size,
                  height: size + 20,
                  animation: `gentleFloat ${2.5 + (index % 4) * 0.3}s ease-in-out infinite`,
                }}
                onClick={(e) => onSurahClick(surah, { x: e.clientX, y: e.clientY })}
              >
                {/* Order badge */}
                <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-emerald-500 text-white text-[8px] font-bold flex items-center justify-center z-10 shadow">
                  {surah.chronOrder}
                </div>

                <div
                  className="w-full h-full rounded-xl flex flex-col items-center justify-center text-white p-1"
                  style={{
                    background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})`,
                    boxShadow: `0 4px 15px ${palette.colors[0]}40`,
                  }}
                >
                  <span className="font-bold" style={{ fontSize: size * 0.25 * contentZoom }}>
                    {surah.id}
                  </span>
                  <span
                    className="text-white/70 text-center leading-none"
                    style={{
                      fontSize: size * 0.18 * contentZoom,
                      fontFamily: "'Scheherazade New', serif",
                    }}
                    dir="rtl"
                  >
                    {surah.arabic.length > 5 ? surah.arabic.substring(0, 4) : surah.arabic}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

// Book Layout - Classic Quran book experience with page turning
export const BookLayout = memo(function BookLayout({
  surahs,
  onSurahClick,
  zoom = 1,
  contentZoom = 1,
  darkMode,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');

  // Surahs per page (6 on each side = 12 per spread)
  const surahsPerPage = 12;
  const totalPages = Math.ceil(surahs.length / surahsPerPage);

  // Get surahs for current spread
  const currentSurahs = useMemo(() => {
    const start = currentPage * surahsPerPage;
    return surahs.slice(start, start + surahsPerPage);
  }, [surahs, currentPage]);

  const leftPageSurahs = currentSurahs.slice(0, 6);
  const rightPageSurahs = currentSurahs.slice(6, 12);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection('prev');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  // Book Surah Card Component
  const SurahCard = ({ surah, index, isRightPage }) => {
    const palette = PALETTES[(surah.id - 1) % 10];
    const [hovered, setHovered] = useState(false);

    return (
      <div
        className="relative cursor-pointer group"
        style={{
          animationDelay: `${index * 0.05}s`,
        }}
        onMouseEnter={() => {
          setHovered(true);
          playThrottledHoverSound();
        }}
        onMouseLeave={() => setHovered(false)}
        onClick={(e) => {
          playClickSound();
          onSurahClick(surah, { x: e.clientX, y: e.clientY });
        }}
      >
        {/* Card Container */}
        <div
          className={`relative p-3 rounded-lg transition-all duration-300 ${
            hovered ? 'scale-105 shadow-xl' : 'shadow-md'
          }`}
          style={{
            background: hovered
              ? `linear-gradient(135deg, ${palette.colors[0]}30, ${palette.colors[1]}20)`
              : darkMode
              ? 'rgba(255,255,255,0.05)'
              : 'rgba(139, 90, 43, 0.08)',
            border: hovered
              ? `2px solid ${palette.colors[0]}60`
              : '1px solid rgba(139, 90, 43, 0.2)',
          }}
        >
          {/* Surah Number Badge */}
          <div
            className="absolute -top-2 flex items-center justify-center rounded-full shadow-lg"
            style={{
              width: 28 * zoom,
              height: 28 * zoom,
              background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]})`,
              left: isRightPage ? 'auto' : -8,
              right: isRightPage ? -8 : 'auto',
            }}
          >
            <span className="text-white font-bold" style={{ fontSize: 11 * zoom }}>
              {surah.id}
            </span>
          </div>

          {/* Arabic Name */}
          <div
            className={`text-center mb-1 ${darkMode ? 'text-amber-200' : 'text-amber-900'}`}
            style={{
              fontFamily: "'Scheherazade New', 'Amiri', serif",
              fontSize: 22 * zoom * contentZoom,
              fontWeight: 'bold',
              textShadow: hovered ? `0 0 20px ${palette.colors[0]}50` : 'none',
            }}
            dir="rtl"
          >
            {surah.arabic}
          </div>

          {/* English Name */}
          <div
            className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-amber-800/70'}`}
            style={{ fontSize: 12 * zoom * contentZoom }}
          >
            {surah.name}
          </div>

          {/* Verses Count */}
          <div
            className={`text-center text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-amber-700/50'}`}
            style={{ fontSize: 10 * zoom }}
          >
            {surah.ayahs} Verses • {surah.type}
          </div>

          {/* Decorative Corner */}
          <div
            className="absolute bottom-1 opacity-30"
            style={{
              left: isRightPage ? 'auto' : 4,
              right: isRightPage ? 4 : 'auto',
              color: palette.colors[0],
            }}
          >
            ❧
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
      {/* Book Container */}
      <div
        className="relative"
        style={{
          perspective: '2000px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        {/* Book Shadow */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full opacity-30"
          style={{
            width: '90%',
            height: 30,
            background: 'radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)',
            filter: 'blur(10px)',
          }}
        />

        {/* Book */}
        <div
          className="relative flex"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(5deg)',
          }}
        >
          {/* Book Spine */}
          <div
            className="absolute left-1/2 -translate-x-1/2 h-full z-20"
            style={{
              width: 30,
              background: darkMode
                ? 'linear-gradient(90deg, #1a1a2e 0%, #2d2d44 50%, #1a1a2e 100%)'
                : 'linear-gradient(90deg, #5d4037 0%, #8d6e63 50%, #5d4037 100%)',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
              borderRadius: '2px',
            }}
          >
            {/* Spine Decorations */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-amber-400/50" />
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-amber-400/50" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-amber-400/50" />
            {/* Spine Text */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-300/60 font-bold"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                fontSize: 10,
                letterSpacing: 2,
              }}
            >
              القرآن
            </div>
          </div>

          {/* Left Page */}
          <div
            className={`relative overflow-hidden transition-transform duration-500 ${
              isFlipping && flipDirection === 'prev' ? 'book-page-flip-left' : ''
            }`}
            style={{
              width: Math.min(380, window.innerWidth * 0.4) * zoom,
              minHeight: 500 * zoom,
              background: darkMode
                ? 'linear-gradient(135deg, #1e1e2f 0%, #2a2a3d 100%)'
                : 'linear-gradient(135deg, #fdf6e3 0%, #f5e6c8 50%, #efe0b9 100%)',
              borderRadius: '4px 0 0 4px',
              boxShadow: darkMode
                ? 'inset -10px 0 30px rgba(0,0,0,0.3), -5px 5px 20px rgba(0,0,0,0.3)'
                : 'inset -10px 0 30px rgba(139, 90, 43, 0.15), -5px 5px 20px rgba(0,0,0,0.15)',
              borderRight: darkMode ? '1px solid #333' : '1px solid rgba(139, 90, 43, 0.3)',
              transformOrigin: 'right center',
            }}
          >
            {/* Paper Texture Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Page Content */}
            <div className="relative p-4 pt-6">
              {/* Page Header */}
              <div className={`text-center mb-4 pb-2 border-b ${darkMode ? 'border-gray-700' : 'border-amber-200'}`}>
                <div className={`text-lg font-bold ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </div>
              </div>

              {/* Surahs Grid */}
              <div className="grid grid-cols-2 gap-3">
                {leftPageSurahs.map((surah, index) => (
                  <SurahCard key={surah.id} surah={surah} index={index} isRightPage={false} />
                ))}
              </div>

              {/* Page Number */}
              <div className={`absolute bottom-3 left-4 text-sm ${darkMode ? 'text-gray-600' : 'text-amber-700/50'}`}>
                {currentPage * 2 + 1}
              </div>

              {/* Corner Decoration */}
              <div className={`absolute bottom-2 right-2 text-2xl opacity-20 ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                ﴿
              </div>
            </div>

            {/* Bookmark Ribbon */}
            {currentPage === 0 && (
              <div
                className="absolute top-0 right-8 w-6 h-20 z-30"
                style={{
                  background: 'linear-gradient(180deg, #dc2626 0%, #b91c1c 100%)',
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)',
                  boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
                }}
              />
            )}
          </div>

          {/* Right Page */}
          <div
            className={`relative overflow-hidden transition-transform duration-500 ${
              isFlipping && flipDirection === 'next' ? 'book-page-flip-right' : ''
            }`}
            style={{
              width: Math.min(380, window.innerWidth * 0.4) * zoom,
              minHeight: 500 * zoom,
              background: darkMode
                ? 'linear-gradient(225deg, #1e1e2f 0%, #2a2a3d 100%)'
                : 'linear-gradient(225deg, #fdf6e3 0%, #f5e6c8 50%, #efe0b9 100%)',
              borderRadius: '0 4px 4px 0',
              boxShadow: darkMode
                ? 'inset 10px 0 30px rgba(0,0,0,0.3), 5px 5px 20px rgba(0,0,0,0.3)'
                : 'inset 10px 0 30px rgba(139, 90, 43, 0.15), 5px 5px 20px rgba(0,0,0,0.15)',
              borderLeft: darkMode ? '1px solid #333' : '1px solid rgba(139, 90, 43, 0.3)',
              transformOrigin: 'left center',
            }}
          >
            {/* Paper Texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Page Content */}
            <div className="relative p-4 pt-6">
              {/* Page Header Decoration */}
              <div className={`text-center mb-4 pb-2 border-b ${darkMode ? 'border-gray-700' : 'border-amber-200'}`}>
                <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-amber-700/60'}`}>
                  ❦ Page {currentPage + 1} of {totalPages} ❦
                </div>
              </div>

              {/* Surahs Grid */}
              <div className="grid grid-cols-2 gap-3">
                {rightPageSurahs.map((surah, index) => (
                  <SurahCard key={surah.id} surah={surah} index={index + 6} isRightPage={true} />
                ))}
              </div>

              {/* Page Number */}
              <div className={`absolute bottom-3 right-4 text-sm ${darkMode ? 'text-gray-600' : 'text-amber-700/50'}`}>
                {currentPage * 2 + 2}
              </div>

              {/* Corner Decoration */}
              <div className={`absolute bottom-2 left-2 text-2xl opacity-20 ${darkMode ? 'text-amber-400' : 'text-amber-800'}`}>
                ﴾
              </div>
            </div>

            {/* Golden Bookmark */}
            {currentPage === totalPages - 1 && (
              <div
                className="absolute top-0 left-8 w-6 h-16 z-30"
                style={{
                  background: 'linear-gradient(180deg, #d4af37 0%, #b8860b 100%)',
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)',
                  boxShadow: '-2px 2px 5px rgba(0,0,0,0.3)',
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-6 mt-8">
        {/* Previous Button */}
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0 || isFlipping}
          className={`group flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${
            currentPage === 0 || isFlipping
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:scale-105 hover:shadow-lg'
          } ${
            darkMode
              ? 'bg-gray-800 text-amber-400 hover:bg-gray-700'
              : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
          }`}
          style={{
            boxShadow: currentPage > 0 ? '0 4px 15px rgba(0,0,0,0.2)' : 'none',
          }}
        >
          <Icons.ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Previous</span>
        </button>

        {/* Page Indicator */}
        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-amber-50'}`}>
          {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => {
            const pageIndex = totalPages > 10
              ? Math.floor(i * (totalPages - 1) / 9)
              : i;
            return (
              <button
                key={i}
                onClick={() => {
                  if (!isFlipping && pageIndex !== currentPage) {
                    setFlipDirection(pageIndex > currentPage ? 'next' : 'prev');
                    setIsFlipping(true);
                    setTimeout(() => {
                      setCurrentPage(pageIndex);
                      setIsFlipping(false);
                    }, 400);
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  pageIndex === currentPage
                    ? darkMode
                      ? 'bg-amber-400 scale-125'
                      : 'bg-amber-600 scale-125'
                    : darkMode
                    ? 'bg-gray-600 hover:bg-gray-500'
                    : 'bg-amber-300 hover:bg-amber-400'
                }`}
              />
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNextPage}
          disabled={currentPage >= totalPages - 1 || isFlipping}
          className={`group flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${
            currentPage >= totalPages - 1 || isFlipping
              ? 'opacity-40 cursor-not-allowed'
              : 'hover:scale-105 hover:shadow-lg'
          } ${
            darkMode
              ? 'bg-gray-800 text-amber-400 hover:bg-gray-700'
              : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
          }`}
          style={{
            boxShadow: currentPage < totalPages - 1 ? '0 4px 15px rgba(0,0,0,0.2)' : 'none',
          }}
        >
          <span className="font-medium">Next</span>
          <Icons.ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Page Info */}
      <div className={`mt-4 text-center ${darkMode ? 'text-gray-500' : 'text-amber-700/60'}`}>
        <p className="text-sm">
          Showing Surahs {currentPage * surahsPerPage + 1} - {Math.min((currentPage + 1) * surahsPerPage, surahs.length)} of {surahs.length}
        </p>
      </div>
    </div>
  );
});

export default {
  LayoutSelector,
  ClockLayout,
  GridLayout,
  JuzzGroupLayout,
  AlphabetLayout,
  RevelationLayout,
  BookLayout,
};
