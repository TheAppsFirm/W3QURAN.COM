/**
 * JuzzBubble Component - Optimized for Mobile
 * Lightweight juzz bubble with beautiful appearance
 */

import { useState, memo, useCallback } from 'react';
import { getTopicPalette, JUZZ } from '../../data';

const JuzzBubble = memo(function JuzzBubble({
  juzz,
  index,
  onClick,
  total,
  zoom = 1,
}) {
  const [hovered, setHovered] = useState(false);

  // Get palette from first surah in juzz
  const palette = getTopicPalette({ topics: ['faith'] });

  // Fixed size for juzz bubbles
  const size = 100 * zoom;

  // Fibonacci spiral positioning
  const baseScale = Math.min(60, 500 / Math.sqrt(total));
  const scale = baseScale * zoom;
  const r = Math.sqrt(index + 1) * scale;
  const a = index * 137.508 * (Math.PI / 180);
  const x = r * Math.cos(a);
  const y = r * Math.sin(a);

  const handleClick = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    onClick(juzz, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height,
    });
  }, [onClick, juzz]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className="absolute cursor-pointer select-none"
      role="button"
      tabIndex={0}
      aria-label={`Juzz ${juzz.number}: ${juzz.name}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        left: `calc(50% + ${x}px - ${size / 2}px)`,
        top: `calc(50% + ${y}px - ${size / 2}px)`,
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
        transition: 'transform 0.2s ease-out',
        zIndex: hovered ? 100 : 50 - index,
        willChange: hovered ? 'transform' : 'auto',
      }}
    >
      {/* Main Bubble */}
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
        {/* Top highlight */}
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span
            className="text-white font-bold"
            style={{
              fontSize: size * 0.28,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {juzz.number}
          </span>
          <span
            className="text-white/90"
            style={{
              fontSize: size * 0.1,
              fontWeight: '600',
              marginTop: 2,
            }}
          >
            Juzz
          </span>
        </div>
      </div>
    </div>
  );
});

export default JuzzBubble;
