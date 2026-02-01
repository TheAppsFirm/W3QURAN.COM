/**
 * w3Quran Logo Component
 * Beautiful animated bubble with multicolor "w3quran" text inside
 * Creative design with gradient text and dynamic effects
 */

import { memo, useState } from 'react';

// Main Logo - Animated bubble with multicolor w3quran text inside
export const Logo = memo(function Logo({ size = 'medium', showText = false, className = '', animated = true }) {
  const [isHovered, setIsHovered] = useState(false);

  const sizes = {
    small: { bubble: 44, fontSize: 10, w3Size: 8 },
    medium: { bubble: 56, fontSize: 12, w3Size: 10 },
    large: { bubble: 80, fontSize: 16, w3Size: 14 },
    xlarge: { bubble: 120, fontSize: 24, w3Size: 20 },
  };

  const s = sizes[size] || sizes.medium;

  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Bubble Logo with multicolor w3quran inside */}
      <div
        className="relative flex-shrink-0 cursor-pointer"
        style={{
          width: s.bubble,
          height: s.bubble,
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Outer Glow - Multicolor */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: '-25%',
            background: `radial-gradient(circle,
              rgba(99,102,241,0.4) 0%,
              rgba(236,72,153,0.3) 30%,
              rgba(16,185,129,0.2) 60%,
              transparent 80%
            )`,
            filter: 'blur(10px)',
            opacity: isHovered ? 1 : 0.5,
            animation: animated ? 'logoGlow 3s ease-in-out infinite' : 'none',
          }}
        />

        {/* Spinning Rainbow Ring - More vibrant */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: '-8%',
            background: `conic-gradient(from 0deg,
              #EC4899, #8B5CF6, #6366F1, #3B82F6, #06B6D4,
              #10B981, #84CC16, #F59E0B, #EF4444, #EC4899
            )`,
            opacity: isHovered ? 0.7 : 0.4,
            animation: animated ? 'logoSpin 12s linear infinite' : 'none',
            filter: 'blur(3px)',
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Inner Glow Ring */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: '-3%',
            background: `conic-gradient(from 180deg,
              rgba(139,92,246,0.6), rgba(99,102,241,0.4),
              rgba(236,72,153,0.6), rgba(139,92,246,0.6)
            )`,
            filter: 'blur(4px)',
            opacity: 0.5,
            animation: animated ? 'logoSpinReverse 20s linear infinite' : 'none',
          }}
        />

        {/* Main Bubble Body - Gradient with multiple colors */}
        <div
          className="relative w-full h-full rounded-full overflow-hidden"
          style={{
            background: `linear-gradient(135deg,
              #6366F1 0%,
              #8B5CF6 25%,
              #A855F7 50%,
              #EC4899 75%,
              #F43F5E 100%
            )`,
            boxShadow: isHovered
              ? `0 15px 40px -8px rgba(139,92,246,0.6),
                 0 0 0 2px rgba(255,255,255,0.5),
                 0 0 50px rgba(236,72,153,0.3),
                 inset 0 -18px 35px rgba(0,0,0,0.3),
                 inset 0 18px 35px rgba(255,255,255,0.3)`
              : `0 10px 30px -6px rgba(139,92,246,0.4),
                 0 0 0 1.5px rgba(255,255,255,0.3),
                 inset 0 -14px 28px rgba(0,0,0,0.25),
                 inset 0 14px 28px rgba(255,255,255,0.25)`,
            transition: 'box-shadow 0.3s ease',
          }}
        >
          {/* Glass Highlight Top - Enhanced */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '70%',
              height: '40%',
              top: '4%',
              left: '15%',
              background: `linear-gradient(180deg,
                rgba(255,255,255,0.8) 0%,
                rgba(255,255,255,0.4) 30%,
                transparent 100%
              )`,
              borderRadius: '50%',
              transform: 'scaleY(0.45)',
            }}
          />

          {/* Bright Spot - Enhanced */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '20%',
              height: '14%',
              top: '12%',
              left: '18%',
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />

          {/* w3quran Text Inside Bubble - Clean White */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          >
            {/* w3 */}
            <span
              style={{
                fontSize: s.w3Size,
                fontWeight: '800',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.3)',
              }}
            >
              w3
            </span>
            {/* Quran */}
            <span
              style={{
                fontSize: s.fontSize,
                fontWeight: '900',
                lineHeight: 1,
                letterSpacing: '-0.01em',
                color: '#ffffff',
                textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 0 15px rgba(255,255,255,0.4)',
              }}
            >
              Quran
            </span>
          </div>

          {/* Bottom Reflection - Multicolor */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '55%',
              height: '22%',
              bottom: '6%',
              left: '22.5%',
              background: `linear-gradient(0deg,
                rgba(236,72,153,0.4) 0%,
                rgba(167,139,250,0.2) 50%,
                transparent 100%
              )`,
              borderRadius: '50%',
              filter: 'blur(5px)',
              transform: 'scaleY(0.45)',
            }}
          />

          {/* Floating Particles on Hover - Multicolor */}
          {animated && isHovered && (
            <>
              <div
                className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
                style={{
                  top: '18%',
                  right: '16%',
                  background: '#06B6D4',
                  boxShadow: '0 0 6px #06B6D4',
                  animation: 'particleFloat 1.5s ease-in-out infinite',
                }}
              />
              <div
                className="absolute w-1 h-1 rounded-full pointer-events-none"
                style={{
                  bottom: '20%',
                  left: '14%',
                  background: '#F59E0B',
                  boxShadow: '0 0 6px #F59E0B',
                  animation: 'particleFloat 2s ease-in-out infinite 0.3s',
                }}
              />
              <div
                className="absolute w-1 h-1 rounded-full pointer-events-none"
                style={{
                  top: '45%',
                  right: '10%',
                  background: '#EC4899',
                  boxShadow: '0 0 6px #EC4899',
                  animation: 'particleFloat 1.8s ease-in-out infinite 0.6s',
                }}
              />
            </>
          )}
        </div>

        {/* Outer Border Ring - Animated gradient */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: `2px solid transparent`,
            backgroundImage: isHovered
              ? 'linear-gradient(135deg, rgba(255,255,255,0.6), rgba(236,72,153,0.4), rgba(99,102,241,0.4), rgba(255,255,255,0.6))'
              : 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.15))',
            backgroundOrigin: 'border-box',
            backgroundClip: 'border-box',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            transition: 'all 0.3s ease',
          }}
        />
      </div>

      {/* Optional Text Next to Logo */}
      {showText && (
        <span
          className="font-black tracking-tight"
          style={{
            fontSize: s.fontSize * 1.5,
            color: '#ffffff',
            textShadow: '0 2px 10px rgba(139,92,246,0.6), 0 0 20px rgba(236,72,153,0.4)',
          }}
        >
          w3Quran
        </span>
      )}

      {/* Animations */}
      <style>{`
        @keyframes logoGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
        @keyframes logoSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes logoSpinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.9; }
          50% { transform: translateY(-5px) scale(1.3); opacity: 0.5; }
        }
        @keyframes textGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
});

// Compact Logo Icon Only
export const LogoIcon = memo(function LogoIcon({ size = 'medium', className = '', animated = true }) {
  return (
    <Logo
      size={size}
      showText={false}
      className={className}
      animated={animated}
    />
  );
});

// Full Logo - For splash screens and about pages
export const LogoFull = memo(function LogoFull({ darkMode = true }) {
  return (
    <div className="relative flex flex-col items-center text-center py-8">
      {/* Large Animated Logo */}
      <div className="mb-6">
        <Logo size="xlarge" animated={true} />
      </div>

      {/* Tagline - With subtle gradient */}
      <p
        className="text-lg font-medium"
        style={{
          background: darkMode
            ? 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))'
            : 'linear-gradient(135deg, #374151, #6B7280)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Your Digital Companion for the Holy Quran
      </p>

      {/* Feature Tags - Multicolor */}
      <div className="flex items-center gap-3 mt-6 flex-wrap justify-center">
        {[
          { tag: 'Read', color: '#8B5CF6', bg: 'rgba(139,92,246,0.15)' },
          { tag: 'Listen', color: '#3B82F6', bg: 'rgba(59,130,246,0.15)' },
          { tag: 'Learn', color: '#10B981', bg: 'rgba(16,185,129,0.15)' },
          { tag: 'Memorize', color: '#F59E0B', bg: 'rgba(245,158,11,0.15)' },
        ].map(({ tag, color, bg }) => (
          <span
            key={tag}
            className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            style={{
              background: bg,
              color: color,
              border: `1px solid ${color}40`,
              boxShadow: `0 2px 10px ${color}20`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
});

export default Logo;
