/**
 * SurahBubble Component
 * Single Responsibility: Render an interactive surah bubble
 */

import { useState, memo } from 'react';
import { getTopicPalette, getTopicIcon } from '../../data';

const SurahBubble = memo(function SurahBubble({ surah, index, onClick, maxAyahs, total, zoom = 1 }) {
  const [hovered, setHovered] = useState(false);
  const [hueRotate, setHueRotate] = useState(0);

  // Use topic-based coloring
  const palette = getTopicPalette(surah);
  const topicIcon = getTopicIcon(surah);

  // Golden angle spiral positioning
  const baseSize = 90 + (surah.ayahs / maxAyahs) * 70;
  const size = baseSize * zoom;
  const r = Math.sqrt(index + 1) * 65 * zoom;
  const a = index * 137.508 * (Math.PI / 180);
  const x = r * Math.cos(a);
  const y = r * Math.sin(a);

  return (
    <div
      onMouseEnter={() => {
        setHovered(true);
        setHueRotate((prev) => prev + 15);
      }}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(surah)}
      className="absolute cursor-pointer"
      style={{
        width: size,
        height: size,
        left: `calc(50% + ${x}px - ${size / 2}px)`,
        top: `calc(50% + ${y}px - ${size / 2}px)`,
        transform: `scale(${hovered ? 1.22 : 1}) ${hovered ? 'translateY(-10px)' : ''}`,
        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        zIndex: hovered ? 100 : 50 - index,
        animation: `floatBubble ${6 + (index % 5)}s ease-in-out infinite`,
        animationDelay: `${(index % 15) * 0.15}s`,
      }}
    >
      {/* GLOW LAYER */}
      <div
        className="absolute rounded-full transition-all duration-700"
        style={{
          inset: '-20%',
          background: `radial-gradient(circle, ${palette.glow}50 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0.3,
          filter: 'blur(15px)',
        }}
      />

      {/* OUTER RING */}
      <div
        className="absolute rounded-full transition-all duration-500"
        style={{
          inset: '-8%',
          background: `conic-gradient(from 0deg, ${palette.colors[0]}90, ${palette.colors[1]}90, ${palette.colors[2]}90, ${palette.colors[0]}90)`,
          opacity: hovered ? 0.9 : 0.25,
          animation: hovered ? 'spinSlow 8s linear infinite' : 'none',
          filter: 'blur(3px)',
        }}
      />

      {/* Breathing glow effect */}
      <div
        className="absolute rounded-full"
        style={{
          inset: '-4%',
          background: `radial-gradient(circle, ${palette.glow}30 0%, transparent 70%)`,
          animation: 'breathe 4s ease-in-out infinite',
          animationDelay: `${index * 0.1}s`,
        }}
      />

      {/* MAIN BUBBLE */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})`,
          boxShadow: hovered
            ? `
                0 30px 60px -15px ${palette.colors[0]}70,
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
        {/* Background Pattern with Blend */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 30%),
              radial-gradient(circle at 80% 80%, ${palette.glow}30 0%, transparent 30%),
              radial-gradient(circle at 50% 50%, ${palette.accent}20 0%, transparent 50%)
            `,
            opacity: hovered ? 0.6 : 0.4,
            transform: hovered ? 'scale(1.2)' : 'scale(1)',
          }}
        />

        {/* Color Overlay with Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 25% 25%, ${palette.accent}50 0%, transparent 50%),
              radial-gradient(ellipse at 75% 75%, ${palette.colors[2]}50 0%, transparent 50%),
              linear-gradient(135deg, ${palette.colors[0]}cc 0%, transparent 50%, ${palette.colors[2]}aa 100%)
            `,
          }}
        />

        {/* Glass Layer 1 - Main Glass */}
        <div
          className="absolute rounded-full"
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
          className="absolute rounded-full"
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
          className="absolute"
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
          className="absolute"
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
          className="absolute"
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
          className="absolute"
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
          className="absolute"
          style={{
            width: '60%',
            height: '30%',
            bottom: '5%',
            left: '20%',
            background: `linear-gradient(0deg, ${palette.glow}50 0%, ${palette.accent}20 50%, transparent 100%)`,
            borderRadius: '50%',
            filter: 'blur(8px)',
            transform: 'scaleY(0.5)',
          }}
        />

        {/* RAINBOW SHIMMER ON HOVER */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
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
          className="absolute inset-0 rounded-full"
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

        {/* TOPIC SVG ICON - Subtle Background */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500"
          style={{
            opacity: hovered ? 0.25 : 0.12,
            transform: hovered ? 'scale(1.15)' : 'scale(1)',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{
              width: size * 0.55,
              height: size * 0.55,
              fill: 'rgba(255,255,255,0.4)',
              filter: `drop-shadow(0 0 8px ${palette.glow}60)`,
            }}
          >
            <path d={topicIcon} />
          </svg>
        </div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center z-10">
          {/* Arabic Text */}
          <span
            style={{
              fontSize: Math.max(size * 0.28, 20),
              fontFamily: "'Scheherazade New', 'Amiri', serif",
              fontWeight: 'bold',
              color: 'white',
              textShadow: `
                0 2px 4px rgba(0,0,0,0.3),
                0 4px 20px ${palette.colors[1]}90,
                0 0 40px ${palette.glow}60,
                0 0 60px ${palette.glow}40
              `,
              letterSpacing: '0.03em',
              lineHeight: 1,
            }}
          >
            {surah.arabic}
          </span>

          {/* English Name */}
          <span
            style={{
              fontSize: Math.max(size * 0.09, 10),
              fontWeight: '600',
              color: 'rgba(255,255,255,0.95)',
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              letterSpacing: '0.05em',
              marginTop: 4,
            }}
          >
            {surah.name}
          </span>
        </div>

        {/* FLOATING PARTICLES */}
        {hovered && (
          <>
            <div
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{ top: '15%', right: '20%', animation: 'floatParticle 2s ease-in-out infinite', boxShadow: '0 0 10px white' }}
            />
            <div
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{ bottom: '25%', left: '15%', animation: 'floatParticle 2.5s ease-in-out infinite 0.3s', boxShadow: '0 0 8px white' }}
            />
            <div
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ top: '40%', right: '10%', animation: 'floatParticle 1.8s ease-in-out infinite 0.6s', boxShadow: '0 0 6px white' }}
            />
            <div
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{ top: '60%', left: '12%', animation: 'floatParticle 2.2s ease-in-out infinite 0.9s', boxShadow: '0 0 8px white' }}
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
