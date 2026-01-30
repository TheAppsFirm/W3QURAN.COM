/**
 * JuzzBubble Component
 * Single Responsibility: Render an interactive juzz bubble
 */

import { useState, memo } from 'react';
import { PALETTES } from '../../data';

const JuzzBubble = memo(function JuzzBubble({ juzz, index }) {
  const [hovered, setHovered] = useState(false);
  const size = 105;
  const palette = PALETTES[index % 10];

  const r = Math.sqrt(index + 1) * 68;
  const a = index * 137.508 * (Math.PI / 180);
  const x = r * Math.cos(a);
  const y = r * Math.sin(a);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute cursor-pointer"
      style={{
        width: size,
        height: size,
        left: `calc(50% + ${x}px - ${size / 2}px)`,
        top: `calc(50% + ${y}px - ${size / 2}px)`,
        transform: `scale(${hovered ? 1.22 : 1}) ${hovered ? 'translateY(-10px)' : ''}`,
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        zIndex: hovered ? 100 : 50 - index,
        animation: `floatBubble ${6 + (index % 3)}s ease-in-out infinite`,
        animationDelay: `${(index % 10) * 0.2}s`,
      }}
    >
      <div
        className="absolute rounded-full transition-all duration-700"
        style={{
          inset: '-20%',
          background: `radial-gradient(circle, ${palette.glow}40 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0.3,
          filter: 'blur(12px)',
        }}
      />
      <div
        className="absolute rounded-full transition-all duration-500"
        style={{
          inset: '-6%',
          background: `conic-gradient(from 0deg, ${palette.colors[0]}90, ${palette.colors[1]}90, ${palette.colors[2]}90, ${palette.colors[0]}90)`,
          opacity: hovered ? 0.8 : 0.2,
          animation: hovered ? 'spinSlow 10s linear infinite' : 'none',
          filter: 'blur(2px)',
        }}
      />

      <div
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})`,
          boxShadow: hovered
            ? `0 25px 50px -10px ${palette.colors[0]}70, 0 0 30px ${palette.glow}40, inset 0 -25px 50px ${palette.colors[2]}50, inset 0 25px 50px rgba(255,255,255,0.2)`
            : `0 12px 30px -8px ${palette.colors[0]}40, inset 0 -15px 30px ${palette.colors[2]}30`,
        }}
      >
        {/* CSS gradient pattern */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 35%),
              radial-gradient(circle at 75% 75%, ${palette.glow}25 0%, transparent 35%)
            `,
            opacity: hovered ? 0.5 : 0.3,
            transform: hovered ? 'scale(1.15)' : 'scale(1)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${palette.colors[0]}cc 0%, transparent 50%, ${palette.colors[2]}aa 100%)`,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            inset: '6%',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
            border: '1px solid rgba(255,255,255,0.25)',
          }}
        />
        <div
          className="absolute"
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
        <div
          className="absolute"
          style={{
            width: '15%',
            height: '10%',
            top: '14%',
            left: '20%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <span
            className="text-3xl font-bold text-white"
            style={{ textShadow: `0 2px 4px rgba(0,0,0,0.3), 0 4px 20px ${palette.colors[1]}90` }}
          >
            {juzz.id}
          </span>
          <span
            className="text-white/90 text-sm font-semibold"
            style={{ fontFamily: "'Amiri', serif", textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}
          >
            {juzz.arabic}
          </span>
        </div>

        {hovered && (
          <>
            <div
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{ top: '18%', right: '22%', animation: 'floatParticle 2s ease-in-out infinite', boxShadow: '0 0 8px white' }}
            />
            <div
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ bottom: '28%', left: '18%', animation: 'floatParticle 2.3s ease-in-out infinite 0.3s', boxShadow: '0 0 6px white' }}
            />
          </>
        )}
      </div>
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
