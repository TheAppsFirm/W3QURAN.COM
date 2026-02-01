/**
 * JuzzBubble Component
 * Beautiful bubble with fibonacci spiral layout for Juzz display
 */

import { useState, memo, useCallback } from 'react';

// Beautiful gradient colors for Juzz
const JUZZ_PALETTES = [
  { bg: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', colors: ['#6366f1', '#8b5cf6', '#a855f7'], glow: '#6366f1' },
  { bg: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)', colors: ['#8b5cf6', '#a855f7', '#c084fc'], glow: '#8b5cf6' },
  { bg: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)', colors: ['#ec4899', '#f43f5e', '#fb7185'], glow: '#ec4899' },
  { bg: 'linear-gradient(135deg, #f97316 0%, #eab308 100%)', colors: ['#f97316', '#f59e0b', '#eab308'], glow: '#f97316' },
  { bg: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)', colors: ['#22c55e', '#10b981', '#14b8a6'], glow: '#22c55e' },
  { bg: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)', colors: ['#14b8a6', '#06b6d4', '#0ea5e9'], glow: '#14b8a6' },
  { bg: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)', colors: ['#0ea5e9', '#3b82f6', '#6366f1'], glow: '#0ea5e9' },
  { bg: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)', colors: ['#6366f1', '#7c3aed', '#8b5cf6'], glow: '#6366f1' },
  { bg: 'linear-gradient(135deg, #a855f7 0%, #d946ef 100%)', colors: ['#a855f7', '#d946ef', '#ec4899'], glow: '#a855f7' },
  { bg: 'linear-gradient(135deg, #f43f5e 0%, #ef4444 100%)', colors: ['#f43f5e', '#ef4444', '#f97316'], glow: '#f43f5e' },
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
  const size = 105 * zoom;

  // Fibonacci spiral positioning (golden angle = 137.508°)
  const scale = 68 * zoom;
  const r = Math.sqrt(index + 1) * scale;
  const a = index * 137.508 * (Math.PI / 180);
  const x = r * Math.cos(a);
  const y = r * Math.sin(a);

  const handleClick = useCallback(() => {
    onClick && onClick(juzz);
  }, [onClick, juzz]);

  const floatDur = 6 + (index % 3);
  const floatDelay = (index % 10) * 0.2;
  const hueRotate = (index * 12) % 360;

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
      {/* Outer Glow */}
      <div
        className="absolute rounded-full transition-all duration-700 pointer-events-none"
        style={{
          inset: '-20%',
          background: `radial-gradient(circle, ${palette.glow}40 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0.3,
          filter: 'blur(12px)',
        }}
      />

      {/* Rainbow Ring */}
      <div
        className="absolute rounded-full transition-all duration-500 pointer-events-none"
        style={{
          inset: '-6%',
          background: `conic-gradient(from ${hueRotate}deg, ${palette.colors[0]}90, ${palette.colors[1]}90, ${palette.colors[2]}90, ${palette.colors[0]}90)`,
          opacity: hovered ? 0.8 : 0.2,
          animation: hovered ? 'spinSlow 10s linear infinite' : 'none',
          filter: 'blur(2px)',
        }}
      />

      {/* Main Bubble */}
      <div
        className="bubble-inner relative w-full h-full rounded-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})`,
          boxShadow: hovered
            ? `0 25px 50px -10px ${palette.colors[0]}70, 0 0 30px ${palette.glow}40, inset 0 -25px 50px ${palette.colors[2]}50, inset 0 25px 50px rgba(255,255,255,0.2)`
            : `0 12px 30px -8px ${palette.colors[0]}40, inset 0 -15px 30px ${palette.colors[2]}30`,
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 transition-all duration-700 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 35%),
              radial-gradient(circle at 75% 75%, ${palette.glow}25 0%, transparent 35%)
            `,
            opacity: hovered ? 0.5 : 0.3,
            transform: hovered ? 'scale(1.15)' : 'scale(1)',
          }}
        />

        {/* Color overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${palette.colors[0]}cc 0%, transparent 50%, ${palette.colors[2]}aa 100%)`,
          }}
        />

        {/* Glass layer */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: '6%',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
            border: '1px solid rgba(255,255,255,0.25)',
          }}
        />

        {/* Top highlight */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '65%',
            height: '35%',
            top: '4%',
            left: '17%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)',
            borderRadius: '50%',
            transform: 'scaleY(0.6)',
          }}
        />

        {/* Small bright spot */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '15%',
            height: '10%',
            top: '14%',
            left: '20%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          {/* Juzz Number */}
          <span
            className="text-white font-bold"
            style={{
              fontSize: Math.max(size * 0.36 * contentZoom, 28),
              textShadow: `0 2px 4px rgba(0,0,0,0.3), 0 4px 20px ${palette.colors[1]}90`,
              lineHeight: 1,
            }}
          >
            {juzz.id}
          </span>

          {/* Arabic Name */}
          <span
            className="text-white/90 font-semibold"
            style={{
              fontSize: Math.max(size * 0.13 * contentZoom, 11),
              fontFamily: "'Scheherazade New', 'Amiri', serif",
              textShadow: '0 2px 6px rgba(0,0,0,0.3)',
              marginTop: 3,
            }}
          >
            {juzz.arabic}
          </span>

          {/* Juzz Label */}
          <span
            className="text-white/60 font-medium uppercase"
            style={{
              fontSize: Math.max(size * 0.07 * contentZoom, 7),
              letterSpacing: '0.05em',
              marginTop: 2,
            }}
          >
            Juzz
          </span>
        </div>

        {/* Floating particles on hover */}
        {hovered && (
          <>
            <div
              className="absolute w-1.5 h-1.5 bg-white rounded-full pointer-events-none"
              style={{
                top: '18%',
                right: '22%',
                animation: 'floatParticle 2s ease-in-out infinite',
                boxShadow: '0 0 8px white',
              }}
            />
            <div
              className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
              style={{
                bottom: '28%',
                left: '18%',
                animation: 'floatParticle 2.3s ease-in-out infinite 0.3s',
                boxShadow: '0 0 6px white',
              }}
            />
          </>
        )}
      </div>

      {/* Outer border */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500"
        style={{
          border: `2px solid ${hovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}`,
          boxShadow: hovered ? `0 0 15px ${palette.glow}60` : 'none',
        }}
      />
    </div>
  );
});

export default JuzzBubble;
