/**
 * BubbleOverlay Component - Enhanced Version
 * Reusable bubble-style modal overlay for all features
 * Improved content visibility, alignment, and user experience
 */

import { memo, useEffect, useState, useMemo } from 'react';
import { Icons } from './Icons';

const BubbleOverlay = memo(function BubbleOverlay({
  children,
  onClose,
  title,
  subtitle,
  icon: IconComponent,
  gradient = ['#6366f1', '#8b5cf6', '#a855f7'],
  size = 'medium', // 'small', 'medium', 'large'
  showHeader = true,
}) {
  const [isAnimating, setIsAnimating] = useState(true);

  // Generate stable particle positions
  const particles = useMemo(() =>
    [...Array(6)].map((_, i) => ({
      size: 3 + (i % 3) * 2,
      left: 20 + (i * 12) % 60,
      top: 15 + (i * 11) % 65,
      duration: 2 + (i % 3),
      delay: i * 0.3,
    })), []
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 50);
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Responsive size styles with mobile-first approach
  const sizeStyles = {
    small: {
      width: 'min(92vw, 420px)',
      height: 'min(70vh, 520px)',
      // Mobile adjustments
      '@media (max-width: 640px)': {
        width: '94vw',
        height: '75vh',
      }
    },
    medium: {
      width: 'min(94vw, 580px)',
      height: 'min(78vh, 640px)',
    },
    large: {
      width: 'min(96vw, 720px)',
      height: 'min(85vh, 720px)',
    },
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-3"
      style={{ zIndex: 9999999 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'bubble-title' : undefined}
    >
      {/* Backdrop with blur */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.88) 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      />

      {/* Main Bubble Container */}
      <div
        className={`relative transition-all duration-500 ease-out ${isAnimating ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}`}
        style={sizeStyles[size]}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Outer Glow Effect */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: '-40px',
            borderRadius: '50%',
            background: `radial-gradient(ellipse 60% 50% at center, ${gradient[0]}50 0%, transparent 65%)`,
            animation: 'bubbleBreathe 3s ease-in-out infinite',
          }}
        />

        {/* Rotating Rainbow Ring */}
        <div
          className="absolute opacity-35 pointer-events-none"
          style={{
            inset: '-20px',
            borderRadius: '50%',
            background: `conic-gradient(from 0deg, ${gradient[0]}, ${gradient[1]}, ${gradient[2]}, ${gradient[0]})`,
            filter: 'blur(18px)',
            animation: 'bubbleSpin 18s linear infinite',
          }}
        />

        {/* Inner Glow Ring */}
        <div
          className="absolute opacity-50 pointer-events-none"
          style={{
            inset: '-8px',
            borderRadius: '50%',
            background: `radial-gradient(circle at center, transparent 50%, ${gradient[1]}40 80%, transparent 100%)`,
          }}
        />

        {/* Main Bubble Body */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            borderRadius: '50%',
            background: `linear-gradient(145deg, ${gradient[0]}, ${gradient[1]}, ${gradient[2]})`,
            boxShadow: `
              0 0 80px ${gradient[0]}60,
              0 0 120px ${gradient[1]}40,
              inset 0 -40px 80px rgba(0,0,0,0.35),
              inset 0 40px 80px rgba(255,255,255,0.18)
            `,
          }}
        >
          {/* Glass Highlight - Top */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '3%',
              left: '15%',
              width: '50%',
              height: '18%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 40%, transparent 100%)',
              borderRadius: '50%',
              filter: 'blur(3px)',
              transform: 'scaleY(0.35)',
            }}
          />

          {/* Secondary Highlight */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '8%',
              right: '20%',
              width: '15%',
              height: '8%',
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />

          {/* Floating Particles - Stable positions */}
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.left}%`,
                top: `${p.top}%`,
                background: 'rgba(255,255,255,0.75)',
                boxShadow: '0 0 8px rgba(255,255,255,0.7)',
                animation: `bubbleFloat ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}

          {/* Close Button - Top Right - Positioned inside circular area, moved left to avoid side menu overlap */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-50 text-white group touch-target"
            style={{
              top: '8%',
              right: '20%', // Moved more to the left to avoid side menu overlap
              background: 'linear-gradient(135deg, rgba(239,68,68,0.95), rgba(220,38,38,0.95))',
              boxShadow: '0 4px 20px rgba(239,68,68,0.5), 0 0 0 3px rgba(255,255,255,0.3), inset 0 2px 0 rgba(255,255,255,0.3)',
              border: '2px solid rgba(255,255,255,0.4)',
              minWidth: '44px',
              minHeight: '44px',
            }}
            aria-label="Close dialog"
          >
            {/* Glass highlight */}
            <div className="absolute top-1 left-2 right-2 h-1/3 rounded-full bg-gradient-to-b from-white/40 to-transparent" />
            <Icons.X className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Content Container - Centered with better spacing */}
          <div
            className="absolute text-white overflow-hidden flex flex-col"
            style={{
              top: '12%',
              left: '12%',
              right: '12%',
              bottom: '12%',
            }}
          >
            {/* Header Section */}
            {showHeader && (title || IconComponent) && (
              <div className="flex-shrink-0 text-center mb-4">
                {/* Icon Badge */}
                {IconComponent && (
                  <div
                    className="inline-flex w-14 h-14 rounded-full items-center justify-center text-white mb-2 shadow-lg"
                    style={{
                      background: 'rgba(255,255,255,0.18)',
                      backdropFilter: 'blur(12px)',
                      boxShadow: `0 4px 20px rgba(0,0,0,0.2), 0 0 30px ${gradient[0]}40`,
                    }}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>
                )}

                {/* Title */}
                {title && (
                  <h2
                    id="bubble-title"
                    className="text-xl font-bold tracking-wide"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}
                  >
                    {title}
                  </h2>
                )}

                {/* Subtitle */}
                {subtitle && (
                  <p className="text-white/75 text-sm mt-1 font-medium">{subtitle}</p>
                )}
              </div>
            )}

            {/* Scrollable Content Area with Glass Panel */}
            <div
              className="flex-1 overflow-hidden rounded-2xl relative"
              style={{
                background: 'rgba(0,0,0,0.15)',
                backdropFilter: 'blur(8px)',
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              {/* Inner scrollable area */}
              <div
                className="absolute inset-0 overflow-y-auto overflow-x-hidden p-4 custom-scrollbar"
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%)',
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations & Custom Scrollbar Styles */}
      <style>{`
        @keyframes bubbleSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bubbleBreathe {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.06); opacity: 0.85; }
        }
        @keyframes bubbleFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.75; }
          50% { transform: translateY(-8px) scale(1.15); opacity: 0.35; }
        }

        /* Custom scrollbar for bubble content */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.25);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.4);
        }
      `}</style>
    </div>
  );
});

export default BubbleOverlay;
