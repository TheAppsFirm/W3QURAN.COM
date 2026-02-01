/**
 * Modal Component
 * Single Responsibility: Display surah details in a modal
 * Accessibility: ARIA labels, keyboard navigation, focus management
 */

import { useState, useEffect, useRef } from 'react';
import { Icons } from './Icons';
import { PALETTES, FAQ_TOPICS } from '../../data';

function Modal({ surah, onClose, onRead }) {
  const [showInfo, setShowInfo] = useState(false);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Focus management - focus close button when modal opens
  useEffect(() => {
    if (surah && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [surah]);

  // Keyboard navigation - close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (surah) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [surah, onClose]);

  if (!surah) return null;
  const palette = PALETTES[(surah.id - 1) % 10];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: 9999999 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" aria-hidden="true" />
      <div
        ref={modalRef}
        className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div
          className="relative h-52"
          style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})` }}
        >
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(255,255,255,0.3) 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 40%),
                linear-gradient(135deg, ${palette.colors[0]}40 0%, ${palette.colors[2]}40 100%)
              `,
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse at 30% 30%, ${palette.glow}40 0%, transparent 60%)` }}
            aria-hidden="true"
          />

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all z-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Close modal"
          >
            <Icons.X className="w-5 h-5" />
          </button>

          {/* Info Toggle Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowInfo(!showInfo);
            }}
            className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all z-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label={showInfo ? 'Hide surah information' : 'Show surah information'}
            aria-expanded={showInfo}
          >
            <Icons.Info className="w-5 h-5" />
          </button>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center mb-3"
              style={{
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.4)',
                boxShadow: `0 15px 40px ${palette.colors[0]}50`,
              }}
              aria-hidden="true"
            >
              <span
                className="text-5xl font-bold"
                style={{
                  fontFamily: "'Scheherazade New', serif",
                  textShadow: `0 2px 15px rgba(0,0,0,0.3), 0 0 30px ${palette.glow}60`,
                }}
                lang="ar"
                dir="rtl"
              >
                {surah.arabic}
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl font-bold tracking-wide">{surah.name}</h2>
            <p id="modal-description" className="text-white/90 text-sm mt-1 font-medium">"{surah.meaning}"</p>
            <p className="text-white/70 text-xs mt-1">
              Surah {surah.id} • {surah.ayahs} Ayahs • {surah.type} • #{surah.chronOrder} in revelation
            </p>
          </div>
        </div>

        <div className="p-6">
          {/* Info Section - Why Named */}
          {showInfo && (
            <div className="mb-6 p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl border border-purple-100 animate-fade-in-up">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Icons.Info className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Why is it called "{surah.name}"?</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{surah.reason}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Surah tags">
            <span
              className="px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: `${palette.glow}30`, color: palette.colors[1] }}
              role="listitem"
            >
              {surah.type}
            </span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold" role="listitem">
              {surah.ayahs} Ayahs
            </span>
            {surah.topics?.slice(0, 3).map((topic) => (
              <span key={topic} className="px-3 py-1.5 bg-violet-100 text-violet-700 rounded-full text-xs font-medium" role="listitem">
                {FAQ_TOPICS.find((t) => t.id === topic)?.icon} {topic}
              </span>
            ))}
          </div>

          {/* Revelation Order Info */}
          <div className="mb-6 p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Revelation Order</span>
              <span className="font-bold text-gray-800">#{surah.chronOrder} of 114</span>
            </div>
            <div
              className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={surah.chronOrder}
              aria-valuemin={1}
              aria-valuemax={114}
              aria-label={`Revelation order: ${surah.chronOrder} of 114`}
            >
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${(surah.chronOrder / 114) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onRead(surah)}
              className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white transition-all hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})`,
                boxShadow: `0 15px 40px -10px ${palette.colors[0]}80`,
              }}
              aria-label={`Start reading ${surah.name}`}
            >
              <Icons.Play className="w-5 h-5" aria-hidden="true" />
              Start Reading
            </button>
            <button
              className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              aria-label={`Listen to ${surah.name}`}
            >
              <Icons.Volume className="w-5 h-5 text-gray-600" aria-hidden="true" />
            </button>
            <button
              className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              aria-label={`Bookmark ${surah.name}`}
            >
              <Icons.Bookmark className="w-5 h-5 text-gray-600" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
