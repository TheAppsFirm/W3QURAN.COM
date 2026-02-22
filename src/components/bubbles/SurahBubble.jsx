/**
 * SurahBubble Component - Optimized for Mobile
 * Lightweight bubble with beautiful appearance
 */

import { useState, memo, useCallback } from 'react';
import { getTopicPalette } from '../../data';
import { playThrottledHoverSound, playClickSound } from '../../utils/soundUtils';

const SurahBubble = memo(function SurahBubble({
  surah,
  index,
  onClick,
  maxAyahs,
  total,
  zoom = 1,
  contentZoom = 1,
}) {
  const [hovered, setHovered] = useState(false);
  const palette = getTopicPalette(surah);

  // Variable size based on ayahs
  const baseMinSize = 78;
  const baseMaxSize = 160;
  const minSize = baseMinSize * zoom;
  const maxSize = baseMaxSize * zoom;
  const size = minSize + ((surah.ayahs / maxAyahs) * (maxSize - minSize));

  // Fibonacci spiral positioning
  const baseScale = Math.min(54, 620 / Math.sqrt(total));
  const scale = baseScale * zoom;
  const r = Math.sqrt(index + 1) * scale;
  const a = index * 137.508 * (Math.PI / 180);
  const x = r * Math.cos(a);
  const y = r * Math.sin(a);

  const handleClick = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    onClick(surah, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height,
    });
  }, [onClick, surah]);

  return (
    <div
      onMouseEnter={() => { setHovered(true); playThrottledHoverSound(); }}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => { playClickSound(); handleClick(e); }}
      className="absolute cursor-pointer select-none"
      role="button"
      tabIndex={0}
      aria-label={`Surah ${surah.id}: ${surah.name} - ${surah.arabic}, ${surah.ayahs} ayahs`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          playClickSound();
          handleClick(e);
        }
      }}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        left: `calc(50% + ${x}px - ${size / 2}px)`,
        top: `calc(50% + ${y}px - ${size / 2}px)`,
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
        transition: 'transform 0.2s ease-out',
        zIndex: hovered ? 100 : 50 - Math.floor(index * 0.3),
        willChange: hovered ? 'transform' : 'auto',
      }}
    >
      {/* Main Bubble - Single div with all effects via CSS */}
      <div
        className="w-full h-full rounded-full overflow-hidden relative"
        style={{
          background: `linear-gradient(145deg, ${palette.colors[0]} 0%, ${palette.colors[1]} 50%, ${palette.colors[2]} 100%)`,
          boxShadow: hovered
            ? `0 12px 28px -4px ${palette.colors[0]}60, 0 0 0 2px rgba(255,255,255,0.4), inset 0 -12px 24px ${palette.colors[2]}50, inset 0 12px 24px rgba(255,255,255,0.2)`
            : `0 6px 20px -4px ${palette.colors[0]}40, 0 0 0 1px rgba(255,255,255,0.15), inset 0 -8px 16px ${palette.colors[2]}30, inset 0 8px 16px rgba(255,255,255,0.15)`,
          transition: 'box-shadow 0.2s ease-out',
        }}
      >
        {/* Top highlight - glass effect */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '70%',
            height: '35%',
            top: '5%',
            left: '15%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
            borderRadius: '50%',
            transform: 'scaleY(0.5)',
          }}
        />

        {/* Small bright spot */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '16%',
            height: '10%',
            top: '12%',
            left: '20%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-1 text-center">
          {/* Surah Number Badge */}
          <div
            className="absolute rounded-full flex items-center justify-center"
            style={{
              top: '6%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: Math.max(size * 0.17 * contentZoom, 14),
              height: Math.max(size * 0.17 * contentZoom, 14),
              background: 'rgba(255,255,255,0.25)',
              fontSize: Math.max(size * 0.075 * contentZoom, 7),
              fontWeight: '700',
              color: 'white',
            }}
          >
            {surah.id}
          </div>

          {/* Arabic Name */}
          <span
            style={{
              fontSize: Math.max(size * 0.22 * contentZoom, 16),
              fontFamily: "'Scheherazade New', 'Amiri', serif",
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              lineHeight: 1.1,
              marginTop: size * 0.06,
            }}
          >
            {surah.arabic}
          </span>

          {/* English Name */}
          <span
            style={{
              fontSize: Math.max(size * 0.075 * contentZoom, 7),
              fontWeight: '600',
              color: 'rgba(255,255,255,0.95)',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)',
              marginTop: 2,
              maxWidth: '90%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {surah.name}
          </span>

          {/* Ayahs Count */}
          <span
            style={{
              fontSize: Math.max(size * 0.06 * contentZoom, 6),
              color: 'rgba(255,255,255,0.7)',
              marginTop: 1,
            }}
          >
            {surah.ayahs} ayahs
          </span>
        </div>
      </div>
    </div>
  );
});

export default SurahBubble;
