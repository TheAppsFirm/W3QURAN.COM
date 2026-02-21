/**
 * SurahBubble Component
 * Beautiful bubble with fibonacci spiral layout and rich effects
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

  // Variable size based on ayahs (like reference)
  const baseMinSize = 78;
  const baseMaxSize = 160;
  const minSize = baseMinSize * zoom;
  const maxSize = baseMaxSize * zoom;
  const size = minSize + ((surah.ayahs / maxAyahs) * (maxSize - minSize));

  // Fibonacci spiral positioning (golden angle = 137.508°)
  const baseScale = Math.min(54, 620 / Math.sqrt(total));
  const scale = baseScale * zoom;
  const r = Math.sqrt(index + 1) * scale;
  const a = index * 137.508 * (Math.PI / 180);
  const x = r * Math.cos(a);
  const y = r * Math.sin(a);

  const handleClick = useCallback((e) => {
    // Get bubble center position for animation
    const rect = e.currentTarget.getBoundingClientRect();
    const position = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height,
    };
    onClick(surah, position);
  }, [onClick, surah]);

  // Animation timing
  const floatDur = 6 + (index % 4);
  const floatDelay = (index % 15) * 0.2;
  const hueRotate = (index * 15) % 360;

  return (
    <div
      onMouseEnter={() => {
        setHovered(true);
        playThrottledHoverSound();
      }}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => {
        playClickSound();
        handleClick(e);
      }}
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
        aspectRatio: '1 / 1',
        borderRadius: '50%',
        left: `calc(50% + ${x}px - ${size / 2}px)`,
        top: `calc(50% + ${y}px - ${size / 2}px)`,
        transform: `scale(${hovered ? 1.18 : 1}) ${hovered ? 'translateY(-8px)' : ''}`,
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        zIndex: hovered ? 100 : 50 - Math.floor(index * 0.3),
        animation: `gentleFloat ${floatDur}s ease-in-out infinite`,
        animationDelay: `${floatDelay}s`,
        perspective: '1000px',
      }}
    >
      {/* CLOCK ZOOM EFFECT - Radial sweep on hover */}
      <div
        className="absolute rounded-full pointer-events-none overflow-hidden"
        style={{
          inset: '-5%',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `conic-gradient(from 0deg at 50% 50%,
              transparent 0deg,
              ${palette.glow}60 0deg,
              ${palette.colors[0]}40 60deg,
              transparent 120deg
            )`,
            animation: hovered ? 'spinSlow 2s linear infinite' : 'none',
            borderRadius: '50%',
          }}
        />
      </div>

      {/* CLOCK TICK MARKS - Decorative time markers */}
      {hovered && (
        <div
          className="absolute pointer-events-none"
          style={{
            inset: '-2%',
            borderRadius: '50%',
          }}
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                width: '2px',
                height: i % 3 === 0 ? '8%' : '5%',
                background: `linear-gradient(to bottom, rgba(255,255,255,${i % 3 === 0 ? 0.8 : 0.4}), transparent)`,
                left: '50%',
                top: '2%',
                transformOrigin: '50% 500%',
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
                opacity: 0,
                animation: `floatParticle 0.5s ease-out ${i * 0.03}s forwards`,
              }}
            />
          ))}
        </div>
      )}

      {/* LAYER 1: Outer Soft Glow */}
      <div
        className="absolute rounded-full transition-all duration-700 pointer-events-none"
        style={{
          inset: '-25%',
          background: `radial-gradient(circle at 50% 50%, ${palette.glow}40 0%, ${palette.colors[0]}20 40%, transparent 70%)`,
          opacity: hovered ? 1 : 0.4,
          filter: 'blur(15px)',
          animation: hovered ? 'breathe 2s ease-in-out infinite' : 'none',
        }}
      />

      {/* LAYER 2: Iridescent Rainbow Ring */}
      <div
        className="absolute rounded-full transition-all duration-500 pointer-events-none"
        style={{
          inset: '-8%',
          background: `conic-gradient(from ${hueRotate}deg,
            ${palette.colors[0]}90,
            ${palette.colors[1]}90,
            ${palette.colors[2]}90,
            ${palette.glow}90,
            ${palette.colors[0]}90
          )`,
          opacity: hovered ? 0.9 : 0.3,
          animation: hovered ? 'spinSlow 10s linear infinite' : 'none',
          filter: 'blur(2px)',
        }}
      />

      {/* LAYER 3: Inner Glow Ring */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: '-4%',
          background: `radial-gradient(circle at 30% 30%, ${palette.colors[2]}60 0%, transparent 50%)`,
          opacity: hovered ? 0.8 : 0.4,
        }}
      />

      {/* MAIN BUBBLE */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${palette.colors[0]} 0%, ${palette.colors[1]} 50%, ${palette.colors[2]} 100%)`,
          boxShadow: hovered
            ? `
                0 30px 60px -10px ${palette.colors[0]}70,
                0 0 0 2px rgba(255,255,255,0.5),
                0 0 40px ${palette.glow}50,
                inset 0 -30px 60px ${palette.colors[2]}60,
                inset 0 30px 60px rgba(255,255,255,0.25),
                inset 0 0 30px rgba(255,255,255,0.1)
              `
            : `
                0 15px 40px -10px ${palette.colors[0]}50,
                0 0 0 1px rgba(255,255,255,0.2),
                inset 0 -20px 40px ${palette.colors[2]}40,
                inset 0 20px 40px rgba(255,255,255,0.15)
              `,
        }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 transition-all duration-700 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 30%),
              radial-gradient(circle at 80% 80%, ${palette.glow}30 0%, transparent 30%),
              radial-gradient(circle at 50% 50%, ${palette.colors[2]}20 0%, transparent 50%)
            `,
            opacity: hovered ? 0.6 : 0.4,
            transform: hovered ? 'scale(1.2)' : 'scale(1)',
          }}
        />

        {/* Color Overlay with Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 25% 25%, ${palette.colors[2]}50 0%, transparent 50%),
              radial-gradient(ellipse at 75% 75%, ${palette.colors[2]}50 0%, transparent 50%),
              linear-gradient(135deg, ${palette.colors[0]}cc 0%, transparent 50%, ${palette.colors[2]}aa 100%)
            `,
          }}
        />

        {/* Glass Layer 1 - Main Glass */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: '6%',
            background: `
              linear-gradient(145deg,
                rgba(255,255,255,0.4) 0%,
                rgba(255,255,255,0.15) 25%,
                rgba(255,255,255,0.05) 50%,
                transparent 100%
              )
            `,
            backdropFilter: 'blur(1px)',
            border: '1px solid rgba(255,255,255,0.3)',
          }}
        />

        {/* Glass Layer 2 - Inner Circle */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: '15%',
            background: `
              radial-gradient(ellipse at 30% 30%,
                rgba(255,255,255,0.2) 0%,
                transparent 60%
              )
            `,
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        />

        {/* PRIMARY HIGHLIGHT - Top Crescent */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '70%',
            height: '40%',
            top: '3%',
            left: '15%',
            background: `
              linear-gradient(180deg,
                rgba(255,255,255,0.85) 0%,
                rgba(255,255,255,0.4) 40%,
                rgba(255,255,255,0.1) 70%,
                transparent 100%
              )
            `,
            borderRadius: '50%',
            filter: 'blur(1px)',
            transform: 'scaleY(0.6) rotate(-5deg)',
          }}
        />

        {/* SECONDARY HIGHLIGHT - Small Bright Spot */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '18%',
            height: '12%',
            top: '12%',
            left: '18%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* TERTIARY HIGHLIGHT - Extra Sparkle */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '8%',
            height: '6%',
            top: '20%',
            left: '28%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* LEFT EDGE HIGHLIGHT */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '8%',
            height: '30%',
            top: '30%',
            left: '6%',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(3px)',
          }}
        />

        {/* BOTTOM REFLECTION */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '60%',
            height: '30%',
            bottom: '5%',
            left: '20%',
            background: `linear-gradient(0deg, ${palette.glow}50 0%, ${palette.colors[2]}20 50%, transparent 100%)`,
            borderRadius: '50%',
            filter: 'blur(8px)',
            transform: 'scaleY(0.5)',
          }}
        />

        {/* RAINBOW SHIMMER ON HOVER */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
          style={{
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '-50%',
              background: `linear-gradient(
                90deg,
                transparent 0%,
                rgba(255,255,255,0.1) 25%,
                rgba(255,255,255,0.3) 50%,
                rgba(255,255,255,0.1) 75%,
                transparent 100%
              )`,
              animation: hovered ? 'shimmerWave 2.5s ease-in-out infinite' : 'none',
            }}
          />
        </div>

        {/* Iridescent Color Shift Overlay */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `linear-gradient(${45 + hueRotate}deg,
              rgba(255,100,100,0.1) 0%,
              rgba(100,255,100,0.1) 33%,
              rgba(100,100,255,0.1) 66%,
              rgba(255,100,255,0.1) 100%
            )`,
            mixBlendMode: 'overlay',
            animation: hovered ? 'colorShift 4s ease-in-out infinite' : 'none',
          }}
        />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center z-10">
          {/* Surah Number Badge */}
          <div
            className="absolute flex items-center justify-center rounded-full"
            style={{
              top: '5%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: Math.max(size * 0.18 * contentZoom, 16),
              height: Math.max(size * 0.18 * contentZoom, 16),
              background: 'rgba(255,255,255,0.3)',
              fontSize: Math.max(size * 0.08 * contentZoom, 8),
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
              fontSize: Math.max(size * 0.24 * contentZoom, 18),
              fontFamily: "'Scheherazade New', 'Amiri', serif",
              fontWeight: 'bold',
              color: 'white',
              textShadow: `
                0 2px 4px rgba(0,0,0,0.3),
                0 4px 20px ${palette.colors[1]}90,
                0 0 40px ${palette.glow}60
              `,
              letterSpacing: '0.03em',
              lineHeight: 1.1,
              marginTop: size * 0.05,
            }}
          >
            {surah.arabic}
          </span>

          {/* English Name */}
          <span
            style={{
              fontSize: Math.max(size * 0.08 * contentZoom, 8),
              fontWeight: '600',
              color: 'rgba(255,255,255,0.95)',
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              letterSpacing: '0.05em',
              marginTop: 3,
              maxWidth: '88%',
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
              fontSize: Math.max(size * 0.065 * contentZoom, 7),
              color: 'rgba(255,255,255,0.75)',
              marginTop: 2,
            }}
          >
            {surah.ayahs} ayahs
          </span>
        </div>

        {/* FLOATING PARTICLES */}
        {hovered && (
          <>
            <div
              className="absolute w-2 h-2 bg-white rounded-full pointer-events-none"
              style={{
                top: '15%',
                right: '20%',
                animation: 'floatParticle 2s ease-in-out infinite',
                boxShadow: '0 0 10px white',
              }}
            />
            <div
              className="absolute w-1.5 h-1.5 bg-white rounded-full pointer-events-none"
              style={{
                bottom: '25%',
                left: '15%',
                animation: 'floatParticle 2.5s ease-in-out infinite 0.3s',
                boxShadow: '0 0 8px white',
              }}
            />
            <div
              className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
              style={{
                top: '40%',
                right: '10%',
                animation: 'floatParticle 1.8s ease-in-out infinite 0.6s',
                boxShadow: '0 0 6px white',
              }}
            />
            <div
              className="absolute w-1.5 h-1.5 bg-white rounded-full pointer-events-none"
              style={{
                top: '60%',
                left: '12%',
                animation: 'floatParticle 2.2s ease-in-out infinite 0.9s',
                boxShadow: '0 0 8px white',
              }}
            />
          </>
        )}
      </div>

      {/* OUTER RING BORDER */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500"
        style={{
          border: `2px solid ${hovered ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)'}`,
          boxShadow: hovered ? `0 0 20px ${palette.glow}80, inset 0 0 20px ${palette.glow}40` : 'none',
        }}
      />
    </div>
  );
});

export default SurahBubble;
