/**
 * FloatingFeatureBubble Component
 * Generic floating bubble container for feature panels
 *
 * Used by: TafseerFloatingBubble, VideosFloatingBubble,
 * MemorizeFloatingBubble, BookmarkFloatingBubble, ShareFloatingBubble
 *
 * Extracted from BubbleReaderOverlay for better maintainability
 */

import { memo } from 'react';
import { useIsMobile } from '../../../hooks';
import { Icons } from '../../common/Icons';

const FloatingFeatureBubble = memo(function FloatingFeatureBubble({
  children,
  isVisible,
  onClose,
  title,
  icon: IconComponent,
  gradient,
  position = { top: '15%', left: '80px' },
  size = 'medium' // small, medium, large, xlarge
}) {
  const isMobile = useIsMobile();

  // Mobile-responsive sizes
  const sizeStyles = isMobile
    ? {
        small: { width: 'calc(100vw - 20px)', height: '70vh', maxWidth: '400px' },
        medium: { width: 'calc(100vw - 20px)', height: '75vh', maxWidth: '400px' },
        large: { width: 'calc(100vw - 20px)', height: '80vh', maxWidth: '400px' },
        xlarge: { width: 'calc(100vw - 20px)', height: '85vh', maxWidth: '400px' },
      }
    : {
        small: { width: '280px', height: '350px' },
        medium: { width: '320px', height: '450px' },
        large: { width: '360px', height: '550px' },
        xlarge: { width: '380px', height: '650px' },
      };

  // Mobile position: centered
  const mobilePosition = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  if (!isVisible) return null;

  // Extract transform from position if it exists
  const { transform, ...positionWithoutTransform } = position;

  return (
    <div
      className="fixed transition-all duration-500"
      style={{
        zIndex: 99999999,
        ...(isMobile
          ? mobilePosition
          : { ...positionWithoutTransform, transform: transform || 'none' }),
        ...sizeStyles[size],
        animation: 'bubblePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Outer glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: '-20px',
          background: `radial-gradient(circle, ${gradient[0]}40 0%, transparent 70%)`,
          filter: 'blur(15px)',
          animation: 'breathe 3s ease-in-out infinite',
        }}
      />

      {/* Main bubble */}
      <div
        className="relative w-full h-full rounded-[40px] overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${gradient[0]}ee, ${gradient[1]}dd, ${gradient[2] || gradient[1]}cc)`,
          boxShadow: `0 0 60px ${gradient[0]}50, 0 20px 60px rgba(0,0,0,0.4), inset 0 -30px 60px rgba(0,0,0,0.3), inset 0 30px 60px rgba(255,255,255,0.15)`,
        }}
      >
        {/* Glass highlight */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '2%',
            left: '10%',
            width: '60%',
            height: '15%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
            borderRadius: '50%',
            filter: 'blur(2px)',
            transform: 'scaleY(0.3)',
          }}
        />

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.25)' }}
            >
              {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
            </div>
            <h3 className="text-white font-bold text-lg">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
          >
            <Icons.X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 h-[calc(100%-70px)] overflow-y-auto overflow-x-hidden custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
});

export default FloatingFeatureBubble;
