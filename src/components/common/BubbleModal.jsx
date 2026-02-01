/**
 * BubbleModal Component
 * Truly bubble-shaped modal for displaying surah details
 * All content contained within circular bubble
 */

import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { Icons } from './Icons';
import { PALETTES, FAQ_TOPICS } from '../../data';
import { shareVerse } from '../../utils/shareUtils';

const BubbleModal = memo(function BubbleModal({
  surah,
  onClose,
  onRead,
  darkMode,
  originPosition,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareStatus, setShareStatus] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const closeButtonRef = useRef(null);

  // Check if bookmarked
  useEffect(() => {
    if (surah) {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
      setIsBookmarked(bookmarks.some((b) => b.surahId === surah.id));
    }
  }, [surah]);

  // Animation and keyboard
  useEffect(() => {
    if (surah) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 50);
      if (closeButtonRef.current) closeButtonRef.current.focus();
      return () => clearTimeout(timer);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [surah, onClose]);

  // Handle bookmark
  const handleBookmark = useCallback(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (isBookmarked) {
      const filtered = bookmarks.filter((b) => b.surahId !== surah.id);
      localStorage.setItem('bookmarks', JSON.stringify(filtered));
      setIsBookmarked(false);
    } else {
      bookmarks.push({ surahId: surah.id, name: surah.name, savedAt: Date.now() });
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      setIsBookmarked(true);
    }
  }, [surah, isBookmarked]);

  // Handle share
  const handleShare = useCallback(async () => {
    if (!surah) return;
    setShareStatus('sharing');
    const result = await shareVerse({
      surahName: surah.name,
      surahId: surah.id,
      ayahNumber: 1,
      arabic: surah.arabic,
      translation: surah.meaning,
    });
    setShareStatus(result.success ? 'shared' : 'error');
    setTimeout(() => setShareStatus(null), 2000);
  }, [surah]);

  if (!surah) return null;

  const palette = PALETTES[(surah.id - 1) % 10];
  const bubbleSize = 400; // Fixed size for proper circular containment

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: 9999999 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bubble-modal-title"
    >
      {/* Semi-transparent backdrop - bubbles visible behind */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: darkMode
            ? 'radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)'
            : 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(200,200,220,0.6) 100%)',
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Main Bubble Container */}
      <div
        className={`relative transition-all duration-500 ease-out ${
          isAnimating ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: bubbleSize,
          height: bubbleSize,
          maxWidth: '95vw',
          maxHeight: '95vw',
        }}
      >
        {/* Outer Glow Ring 1 - Breathing */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            inset: '-35px',
            background: `radial-gradient(circle, ${palette.colors[0]}50 0%, transparent 70%)`,
            animation: 'breathe 3s ease-in-out infinite',
          }}
        />

        {/* Outer Glow Ring 2 - Spinning Rainbow */}
        <div
          className="absolute rounded-full opacity-50 pointer-events-none"
          style={{
            inset: '-18px',
            background: `conic-gradient(from 0deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]}, ${palette.colors[0]})`,
            filter: 'blur(15px)',
            animation: 'spin 15s linear infinite',
          }}
        />

        {/* Main Bubble - Circular */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: `linear-gradient(145deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})`,
            boxShadow: `
              0 0 80px ${palette.colors[0]}60,
              0 0 120px ${palette.colors[1]}40,
              inset 0 -30px 60px rgba(0,0,0,0.3),
              inset 0 30px 60px rgba(255,255,255,0.25)
            `,
          }}
        >
          {/* Glass Highlight - Top Crescent */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '2%',
              left: '12%',
              width: '55%',
              height: '28%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              borderRadius: '50%',
              filter: 'blur(2px)',
              transform: 'scaleY(0.5)',
            }}
          />

          {/* Small Bright Spot */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '6%',
              left: '18%',
              width: '15%',
              height: '10%',
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />

          {/* Bottom Reflection */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: '4%',
              left: '18%',
              width: '64%',
              height: '18%',
              background: `linear-gradient(0deg, ${palette.colors[2]}40 0%, transparent 100%)`,
              borderRadius: '50%',
              filter: 'blur(10px)',
              transform: 'scaleY(0.4)',
            }}
          />

          {/* Floating Particles */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 3 + Math.random() * 4,
                height: 3 + Math.random() * 4,
                left: `${30 + Math.random() * 40}%`,
                top: `${25 + Math.random() * 45}%`,
                background: 'rgba(255,255,255,0.8)',
                boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                animation: `floatParticle ${2.5 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}

          {/* Close Button - Inside top area */}
          <button
            ref={closeButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 hover:scale-110 transition-all z-20 text-white"
            style={{
              top: '15%',
              right: '18%',
            }}
            aria-label="Close"
          >
            <Icons.X className="w-4 h-4" />
          </button>

          {/* Surah Number Badge - Inside top area */}
          <div
            className="absolute w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{
              top: '15%',
              left: '18%',
              background: 'rgba(255,255,255,0.25)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {surah.id}
          </div>

          {/* Content Container - Centered within safe circle area */}
          <div
            className="absolute flex flex-col items-center justify-center text-white text-center"
            style={{
              // Keep content in the center 70% of the bubble to avoid edges
              top: '18%',
              left: '15%',
              right: '15%',
              bottom: '15%',
            }}
          >
            {/* Arabic Name - Large Floating */}
            <div
              className="text-4xl mb-2"
              style={{
                fontFamily: "'Scheherazade New', serif",
                textShadow: '0 4px 25px rgba(0,0,0,0.5)',
                animation: 'gentleFloat 4s ease-in-out infinite',
              }}
              lang="ar"
              dir="rtl"
            >
              {surah.arabic}
            </div>

            {/* English Name */}
            <h2
              id="bubble-modal-title"
              className="text-xl font-bold mb-0.5"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
            >
              {surah.name}
            </h2>

            {/* Meaning */}
            <p className="text-white/90 text-sm mb-3 italic">"{surah.meaning}"</p>

            {/* Quick Info Pills */}
            <div className="flex items-center gap-1.5 mb-3 flex-wrap justify-center">
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">
                {surah.ayahs} Ayahs
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">
                {surah.type}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">
                #{surah.chronOrder}
              </span>
            </div>

            {/* Reason/Description */}
            <div className="w-full max-h-14 overflow-y-auto mb-2 px-1 scrollbar-thin">
              <p className="text-xs text-white/85 leading-relaxed">
                {surah.reason}
              </p>
            </div>

            {/* Topics */}
            {surah.topics?.length > 0 && (
              <div className="flex flex-wrap gap-1 justify-center mb-3">
                {surah.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 bg-white/15 rounded-full text-xs backdrop-blur-sm"
                  >
                    {FAQ_TOPICS.find((t) => t.id === topic)?.icon} {topic}
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons - Contained inside */}
            <div className="flex items-center gap-2 mt-auto">
              {/* Start Reading - Main CTA */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRead(surah);
                }}
                className="px-5 py-2.5 rounded-full font-semibold text-white text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                style={{
                  background: 'rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255,255,255,0.5)',
                  boxShadow: '0 6px 25px rgba(0,0,0,0.25)',
                }}
              >
                <Icons.Book className="w-4 h-4" />
                Start Reading
              </button>

              {/* Bookmark */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleBookmark();
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                  isBookmarked ? 'bg-amber-400/90' : 'bg-white/25'
                }`}
                style={{ backdropFilter: 'blur(10px)' }}
                aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
              >
                {isBookmarked ? (
                  <Icons.BookmarkFilled className="w-4 h-4" />
                ) : (
                  <Icons.Bookmark className="w-4 h-4" />
                )}
              </button>

              {/* Share */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleShare();
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                  shareStatus === 'shared' ? 'bg-emerald-500/90' : 'bg-white/25'
                }`}
                style={{ backdropFilter: 'blur(10px)' }}
                aria-label="Share"
              >
                {shareStatus === 'sharing' ? (
                  <Icons.Loader className="w-4 h-4 animate-spin" />
                ) : shareStatus === 'shared' ? (
                  <Icons.Check className="w-4 h-4" />
                ) : (
                  <Icons.Share className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animations & Custom Scrollbar */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.8; }
          50% { transform: translateY(-8px) scale(1.2); opacity: 0.5; }
        }
        @keyframes shimmerWave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
});

export default BubbleModal;
