/**
 * JuzzBubble Component - Enhanced Version
 * Beautiful bubble with fibonacci spiral layout for Juzz display
 * Consistent visual design with SurahBubble
 */

import { useState, memo, useCallback, useMemo } from 'react';

// Beautiful gradient colors for Juzz - 10 unique palettes
const JUZZ_PALETTES = [
  { colors: ['#6366f1', '#8b5cf6', '#a855f7'], glow: '#6366f1' },
  { colors: ['#8b5cf6', '#a855f7', '#c084fc'], glow: '#8b5cf6' },
  { colors: ['#ec4899', '#f43f5e', '#fb7185'], glow: '#ec4899' },
  { colors: ['#f97316', '#f59e0b', '#eab308'], glow: '#f97316' },
  { colors: ['#22c55e', '#10b981', '#14b8a6'], glow: '#22c55e' },
  { colors: ['#14b8a6', '#06b6d4', '#0ea5e9'], glow: '#14b8a6' },
  { colors: ['#0ea5e9', '#3b82f6', '#6366f1'], glow: '#0ea5e9' },
  { colors: ['#6366f1', '#7c3aed', '#8b5cf6'], glow: '#6366f1' },
  { colors: ['#a855f7', '#d946ef', '#ec4899'], glow: '#a855f7' },
  { colors: ['#f43f5e', '#ef4444', '#f97316'], glow: '#f43f5e' },
];

const JuzzBubble = memo(function JuzzBubble({
  juzz,
  index,
  onClick,
  zoom = 1,
  contentZoom = 1,
}) {
  const [hovered, setHovered] = useState(false);
  const palette = JUZZ_PALETTES[index % JUZZ_PALETTES.length];
  const size = 110 * zoom; // Slightly larger for better visibility

  // Fibonacci spiral positioning (golden angle = 137.508°)
  const scale = 70 * zoom;
  const r = Math.sqrt(index + 1) * scale;
  const a = index * 137.508 * (Math.PI / 180);
  const x = r * Math.cos(a);
  const y = r * Math.sin(a);

  const handleClick = useCallback(() => {
    onClick && onClick(juzz);
  }, [onClick, juzz]);

  // Consistent animation timing with SurahBubble
  const floatDur = 6 + (index % 4);
  const floatDelay = (index % 15) * 0.2;
  const hueRotate = (index * 12) % 360;

  // Stable particle positions
  const particles = useMemo(() => [
    { size: 6, left: 18, top: 22, dur: 2, delay: 0 },
    { size: 4, left: 75, top: 28, dur: 2.3, delay: 0.3 },
    { size: 5, left: 25, top: 65, dur: 2.5, delay: 0.6 },
    { size: 4, left: 70, top: 60, dur: 2.2, delay: 0.9 },
  ], []);

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bubble-item absolute cursor-pointer select-none"
      data-index={index}
      style={{
        width: size,
        height: size,
        left: `calc(50% + ${x}px - ${size / 2}px)`,
        top: `calc(50% + ${y}px - ${size / 2}px)`,
        transform: `scale(${hovered ? 1.18 : 1}) ${hovered ? 'translateY(-8px)' : ''}`,
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        zIndex: hovered ? 100 : 50 - index,
        animation: `gentleFloat ${floatDur}s ease-in-out infinite`,
        animationDelay: `${floatDelay}s`,
      }}
    >
      {/* Outer Soft Glow */}
      <div
        className="absolute rounded-full transition-all duration-700 pointer-events-none"
        style={{
          inset: '-25%',
          background: `radial-gradient(circle, ${palette.glow}50 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0.4,
          filter: 'blur(15px)',
          animation: hovered ? 'breathe 2s ease-in-out infinite' : 'none',
        }}
      />

      {/* Rainbow Ring - Iridescent */}
      <div
        className="absolute rounded-full transition-all duration-500 pointer-events-none"
        style={{
          inset: '-8%',
          background: `conic-gradient(from ${hueRotate}deg, ${palette.colors[0]}90, ${palette.colors[1]}90, ${palette.colors[2]}90, ${palette.colors[0]}90)`,
          opacity: hovered ? 0.85 : 0.25,
          animation: hovered ? 'spinSlow 10s linear infinite' : 'none',
          filter: 'blur(3px)',
        }}
      />

      {/* Inner Glow Ring */}
      <div
        className="absolute rounded-full pointer-events-none transition-opacity duration-500"
        style={{
          inset: '-4%',
          background: `radial-gradient(circle, transparent 60%, ${palette.colors[1]}50 85%, transparent 100%)`,
          opacity: hovered ? 0.8 : 0.3,
        }}
      />

      {/* Main Bubble */}
      <div
        className="bubble-inner relative w-full h-full rounded-full overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})`,
          boxShadow: hovered
            ? `0 30px 60px -10px ${palette.colors[0]}80, 0 0 0 2px rgba(255,255,255,0.5), 0 0 40px ${palette.glow}50, inset 0 -30px 60px ${palette.colors[2]}60, inset 0 30px 60px rgba(255,255,255,0.25)`
            : `0 15px 40px -10px ${palette.colors[0]}50, 0 0 0 1px rgba(255,255,255,0.2), inset 0 -20px 40px ${palette.colors[2]}40, inset 0 20px 40px rgba(255,255,255,0.15)`,
        }}
      >
        {/* Background Pattern - Multi-layer */}
        <div
          className="absolute inset-0 transition-all duration-700 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.35) 0%, transparent 35%),
              radial-gradient(circle at 75% 75%, ${palette.glow}30 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, ${palette.colors[1]}20 0%, transparent 50%)
            `,
            opacity: hovered ? 0.6 : 0.4,
            transform: hovered ? 'scale(1.15)' : 'scale(1)',
          }}
        />

        {/* Color Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(145deg, ${palette.colors[0]}cc 0%, transparent 45%, ${palette.colors[2]}99 100%)`,
          }}
        />

        {/* Glass Layer - Primary */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: '6%',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
            border: '1px solid rgba(255,255,255,0.3)',
          }}
        />

        {/* Glass Layer - Secondary */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: '15%',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, transparent 60%)',
          }}
        />

        {/* Top Crescent Highlight */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '60%',
            height: '30%',
            top: '5%',
            left: '20%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
            borderRadius: '50%',
            transform: 'scaleY(0.5)',
            filter: 'blur(1px)',
          }}
        />

        {/* Bright Spot */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '18%',
            height: '12%',
            top: '12%',
            left: '22%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 50%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Edge Highlight */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '8%',
            height: '25%',
            top: '35%',
            right: '8%',
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.3), transparent)',
            borderRadius: '50%',
            transform: 'rotate(15deg)',
          }}
        />

        {/* Shimmer Wave on Hover */}
        {hovered && (
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-full"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)',
              animation: 'shimmerWave 2.5s ease-in-out infinite',
            }}
          />
        )}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          {/* Juzz Number */}
          <span
            className="text-white font-bold"
            style={{
              fontSize: Math.max(size * 0.38 * contentZoom, 30),
              textShadow: `0 2px 4px rgba(0,0,0,0.3), 0 4px 20px ${palette.colors[1]}90, 0 0 30px ${palette.glow}50`,
              lineHeight: 1,
            }}
          >
            {juzz.id}
          </span>

          {/* Arabic Name */}
          <span
            className="text-white/90 font-semibold"
            style={{
              fontSize: Math.max(size * 0.14 * contentZoom, 12),
              fontFamily: "'Scheherazade New', 'Amiri', serif",
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              marginTop: 4,
            }}
          >
            {juzz.arabic}
          </span>

          {/* Juzz Label */}
          <span
            className="text-white/70 font-medium uppercase tracking-wider"
            style={{
              fontSize: Math.max(size * 0.08 * contentZoom, 8),
              marginTop: 2,
            }}
          >
            Juzz
          </span>
        </div>

        {/* Floating Particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none transition-opacity duration-500"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              top: `${p.top}%`,
              background: 'rgba(255,255,255,0.85)',
              boxShadow: '0 0 8px rgba(255,255,255,0.7)',
              opacity: hovered ? 1 : 0,
              animation: hovered ? `floatParticle ${p.dur}s ease-in-out infinite` : 'none',
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Outer Border */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500"
        style={{
          border: `2px solid ${hovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)'}`,
          boxShadow: hovered ? `0 0 20px ${palette.glow}70, inset 0 0 15px rgba(255,255,255,0.1)` : 'none',
        }}
      />
    </div>
  );
});

export default JuzzBubble;
