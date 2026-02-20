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

// ============================================
// FUSION ICON - Signal × Bloom × Mihrab
// Modern tech wordmark meets sacred organic geometry meets luminous arch
// ============================================

// Main Fusion Logo - "The Gateway" (Recommended)
export const FusionLogo = memo(function FusionLogo({
  size = 56,
  className = '',
  animated = true,
  variant = 'gateway' // 'gateway', 'dark', 'vibrant', 'light', 'circle', 'minimal'
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Different gradient IDs for each variant to avoid conflicts
  const gradientId = `fusion-${variant}-${Math.random().toString(36).substr(2, 9)}`;

  const variants = {
    // The Gateway - Emerald to violet with full details
    gateway: {
      gradient: ['#059669', '#10B981', '#06B6D4', '#8B5CF6'],
      innerGlow: '#6EE7B7',
      strokeColor: 'white',
      bgOpacity: 1,
    },
    // Dark Noir - Near-black with emerald accents
    dark: {
      gradient: ['#0f0f1a', '#1a1a30', '#0f0f1a', '#1a1a30'],
      innerGlow: '#10B981',
      strokeColor: '#10B981',
      bgOpacity: 1,
    },
    // Vibrant Spectrum - Full rainbow
    vibrant: {
      gradient: ['#10B981', '#06B6D4', '#EC4899', '#8B5CF6'],
      innerGlow: 'white',
      strokeColor: 'white',
      bgOpacity: 1,
    },
    // Light Minimal - Cream background
    light: {
      gradient: ['#F0FDF4', '#ECFDF5', '#F0FDF4', '#ECFDF5'],
      innerGlow: '#D1FAE5',
      strokeColor: '#059669',
      bgOpacity: 1,
    },
    // Circle Edition - Green to cyan
    circle: {
      gradient: ['#065F46', '#059669', '#0EA5E9', '#059669'],
      innerGlow: '#6EE7B7',
      strokeColor: 'white',
      bgOpacity: 1,
      isCircle: true,
    },
    // Ultra Minimal - Simple gradient
    minimal: {
      gradient: ['#059669', '#06B6D4', '#059669', '#06B6D4'],
      innerGlow: 'white',
      strokeColor: 'white',
      bgOpacity: 1,
      isMinimal: true,
    },
  };

  const v = variants[variant] || variants.gateway;
  const isCircle = v.isCircle;
  const isMinimal = v.isMinimal;

  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        filter: animated && isHovered ? `drop-shadow(0 0 ${size * 0.15}px ${v.gradient[1]}60)` : 'none',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 240 240"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animation: animated ? 'fusionPulse 3s ease-in-out infinite, gentleFloat 4s ease-in-out infinite' : 'none',
        }}
      >
        <defs>
          <linearGradient id={`${gradientId}-main`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={v.gradient[0]} />
            <stop offset="35%" stopColor={v.gradient[1]} />
            <stop offset="65%" stopColor={v.gradient[2]} />
            <stop offset="100%" stopColor={v.gradient[3]} />
          </linearGradient>
          <linearGradient id={`${gradientId}-inner`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor={v.innerGlow} stopOpacity="0.5" />
            <stop offset="100%" stopColor={v.gradient[1]} stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`${gradientId}-glow`} cx="50%" cy="35%" r="35%">
            <stop offset="0%" stopColor={v.innerGlow} stopOpacity="0.35" />
            <stop offset="100%" stopColor={v.gradient[0]} stopOpacity="0" />
          </radialGradient>
          <filter id={`${gradientId}-soft`}>
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base shape: Squircle or Circle */}
        {isCircle ? (
          <circle cx="120" cy="120" r="108" fill={`url(#${gradientId}-main)`} />
        ) : (
          <rect x="12" y="12" width="216" height="216" rx="60" fill={`url(#${gradientId}-main)`} />
        )}

        {/* Subtle border */}
        {isCircle ? (
          <circle cx="120" cy="120" r="104" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        ) : (
          <rect x="12" y="12" width="216" height="216" rx="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        )}

        {/* Bloom: Seed of Life pattern (hidden in minimal) */}
        {!isMinimal && (
          <g transform="translate(120,100)" opacity="0.07">
            <circle cx="0" cy="-20" r="20" fill="none" stroke={v.strokeColor} strokeWidth="1" />
            <circle cx="17.3" cy="-10" r="20" fill="none" stroke={v.strokeColor} strokeWidth="1" />
            <circle cx="17.3" cy="10" r="20" fill="none" stroke={v.strokeColor} strokeWidth="1" />
            <circle cx="0" cy="20" r="20" fill="none" stroke={v.strokeColor} strokeWidth="1" />
            <circle cx="-17.3" cy="10" r="20" fill="none" stroke={v.strokeColor} strokeWidth="1" />
            <circle cx="-17.3" cy="-10" r="20" fill="none" stroke={v.strokeColor} strokeWidth="1" />
            <circle cx="0" cy="0" r="20" fill="none" stroke={v.strokeColor} strokeWidth="1" />
          </g>
        )}

        {/* Mihrab: Pointed arch gateway — the hero element */}
        <g transform={isMinimal ? "translate(120,100)" : "translate(120,108)"} filter={`url(#${gradientId}-soft)`}>
          {/* Outer arch */}
          <path
            d={isMinimal
              ? "M-28,36 L-28,-4 C-28,-30 0,-50 0,-50 C0,-50 28,-30 28,-4 L28,36"
              : "M-30,38 L-30,-6 C-30,-32 0,-52 0,-52 C0,-52 30,-32 30,-6 L30,38"
            }
            fill="none"
            stroke={v.strokeColor}
            strokeWidth={isMinimal ? "4" : "2.8"}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
          {/* Inner arch (filled with light gradient) - hidden in minimal */}
          {!isMinimal && (
            <path
              d="M-20,38 L-20,-2 C-20,-22 0,-38 0,-38 C0,-38 20,-22 20,-2 L20,38 Z"
              fill={`url(#${gradientId}-glow)`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
          )}
          {/* Open Quran Book inside mihrab - hidden in minimal */}
          {!isMinimal && (
            <g transform="translate(0, 8)" opacity="0.9">
              {/* Book spine (center) */}
              <line x1="0" y1="-8" x2="0" y2="12" stroke={v.strokeColor} strokeWidth="1.5" strokeLinecap="round" />
              {/* Left page */}
              <path
                d="M-2,-6 C-8,-5 -12,0 -12,8 L-2,6 Z"
                fill={v.strokeColor}
                opacity="0.4"
              />
              {/* Right page */}
              <path
                d="M2,-6 C8,-5 12,0 12,8 L2,6 Z"
                fill={v.strokeColor}
                opacity="0.4"
              />
              {/* Left page lines (text) */}
              <line x1="-4" y1="-2" x2="-10" y2="0" stroke={v.strokeColor} strokeWidth="0.5" opacity="0.6" />
              <line x1="-4" y1="2" x2="-10" y2="3" stroke={v.strokeColor} strokeWidth="0.5" opacity="0.6" />
              {/* Right page lines (text) */}
              <line x1="4" y1="-2" x2="10" y2="0" stroke={v.strokeColor} strokeWidth="0.5" opacity="0.6" />
              <line x1="4" y1="2" x2="10" y2="3" stroke={v.strokeColor} strokeWidth="0.5" opacity="0.6" />
            </g>
          )}
          {/* Apex star */}
          <circle cx="0" cy={isMinimal ? "-44" : "-48"} r={isMinimal ? "4" : "3.5"} fill={v.strokeColor} opacity="0.85" />
          {!isMinimal && (
            <circle cx="0" cy="-48" r="6" fill="none" stroke={v.strokeColor} strokeWidth="0.5" opacity="0.25" />
          )}
        </g>

        {/* Signal: Sound/recitation wave rings - hidden in minimal */}
        {!isMinimal && (
          <g transform="translate(120,90)" opacity="0.1">
            <ellipse cx="0" cy="0" rx="52" ry="48" fill="none" stroke={v.strokeColor} strokeWidth="1" />
            <ellipse cx="0" cy="0" rx="66" ry="60" fill="none" stroke={v.strokeColor} strokeWidth="0.7" />
            <ellipse cx="0" cy="0" rx="80" ry="72" fill="none" stroke={v.strokeColor} strokeWidth="0.4" />
          </g>
        )}

        {/* Signal: w3 text — clean modern wordmark at bottom */}
        <g transform={isMinimal ? "translate(120,170)" : "translate(120,178)"}>
          {/* Stylized W */}
          <path
            d={isMinimal
              ? "M-16,-4 L-10,5 L-5,0 L0,5 L5,0 L10,5 L16,-4"
              : "M-28,-6 L-20,8 L-12,-2 L-4,8 L4,-2 L12,8 L20,-6"
            }
            fill="none"
            stroke={v.strokeColor}
            strokeWidth={isMinimal ? "2.5" : "3.2"}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={isMinimal ? "0.7" : "0.95"}
          />
          {/* 3 superscript */}
          <text
            x={isMinimal ? "21" : "27"}
            y={isMinimal ? "-2" : "-4"}
            fill={v.strokeColor}
            opacity={isMinimal ? "0.6" : "0.85"}
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize={isMinimal ? "9" : "14"}
            fontWeight="800"
          >
            3
          </text>
        </g>

        {/* Bloom: Two small petal shapes flanking the arch - hidden in minimal/circle */}
        {!isMinimal && !isCircle && (
          <g transform="translate(120,108)" opacity="0.15">
            <ellipse cx="-44" cy="-10" rx="8" ry="16" fill={v.strokeColor} transform="rotate(-20,-44,-10)" />
            <ellipse cx="44" cy="-10" rx="8" ry="16" fill={v.strokeColor} transform="rotate(20,44,-10)" />
          </g>
        )}

        {/* Circle variant: decorative dots at cardinal points */}
        {isCircle && (
          <g opacity="0.3">
            <circle cx="120" cy="16" r="2" fill={v.strokeColor} />
            <circle cx="120" cy="224" r="2" fill={v.strokeColor} />
            <circle cx="16" cy="120" r="2" fill={v.strokeColor} />
            <circle cx="224" cy="120" r="2" fill={v.strokeColor} />
          </g>
        )}
      </svg>

      {/* Animations */}
      <style>{`
        @keyframes fusionPulse {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(16,185,129,0.15)); }
          50% { filter: drop-shadow(0 0 35px rgba(16,185,129,0.25)); }
        }
      `}</style>
    </div>
  );
});

// Fusion Logo with Text - For headers and branding (with enhanced animations)
export const FusionLogoWithText = memo(function FusionLogoWithText({
  size = 40,
  className = '',
  animated = true,
  variant = 'gateway',
  textColor = 'white',
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: 'pointer',
      }}
    >
      {/* Logo with spinning ring */}
      <div className="relative" style={{ width: size, height: size }}>
        {/* Outer spinning gradient ring */}
        {animated && (
          <div
            className="absolute rounded-2xl pointer-events-none"
            style={{
              inset: '-4px',
              background: `conic-gradient(from 0deg, #10B981, #06B6D4, #8B5CF6, #EC4899, #10B981)`,
              opacity: isHovered ? 0.7 : 0.4,
              filter: 'blur(3px)',
              animation: 'fusionSpin 8s linear infinite',
              borderRadius: '30%',
              transition: 'opacity 0.3s ease',
            }}
          />
        )}
        {/* Inner glow pulse */}
        {animated && (
          <div
            className="absolute rounded-2xl pointer-events-none"
            style={{
              inset: '-8px',
              background: `radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)`,
              animation: 'fusionBreath 3s ease-in-out infinite',
              borderRadius: '30%',
            }}
          />
        )}
        <FusionLogo size={size} animated={animated} variant={variant} />
      </div>

      {/* Text - NO animation, only logo animates */}
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: size * 0.45,
          letterSpacing: '-0.02em',
          color: textColor,
          whiteSpace: 'nowrap',
          overflow: 'visible',
          display: 'inline-block',
          flexShrink: 0,
        }}
      >
        w3Quran
      </span>

      {/* Animation Styles */}
      <style>{`
        @keyframes fusionSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fusionBreath {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }
        @keyframes fusionFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes fusionTextShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes fusionGlowPulse {
          0%, 100% { opacity: 0.5; transform: scaleX(0.8); }
          50% { opacity: 1; transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
});

// Favicon-optimized Fusion Logo - Ultra minimal for 16-32px
export const FusionFavicon = memo(function FusionFavicon({ size = 32 }) {
  return <FusionLogo size={size} variant="minimal" animated={false} />;
});

// App Icon Fusion Logo - For iOS/Android/PWA
export const FusionAppIcon = memo(function FusionAppIcon({ size = 192 }) {
  return <FusionLogo size={size} variant="gateway" animated={false} />;
});

export default Logo;
