/**
 * StatsBar Component
 * Single Responsibility: Display user stats, progress, and controls
 */

import { memo, useState, useRef, useEffect } from 'react';
import { Icons } from '../common/Icons';

const StatsBar = memo(function StatsBar({
  level,
  points,
  streak,
  badges,
  onUpgrade,
  // New props for zoom and layout
  zoom,
  setZoom,
  contentZoom,
  setContentZoom,
  surahLayout,
  setSurahLayout,
  showControls = false,
  // Donation modal callback
  onDonate,
}) {
  const [showLayoutMenu, setShowLayoutMenu] = useState(false);
  const [showZoomMenu, setShowZoomMenu] = useState(false);
  const layoutBtnRef = useRef(null);
  const zoomBtnRef = useRef(null);
  const [layoutMenuPos, setLayoutMenuPos] = useState({ top: 0, left: 0 });
  const [zoomMenuPos, setZoomMenuPos] = useState({ top: 0, left: 0 });

  const layouts = [
    { id: 'spiral', icon: '🌀', label: 'Spiral' },
    { id: 'clock', icon: '🕐', label: 'Clock' },
    { id: 'grid', icon: '⊞', label: 'Grid' },
    { id: 'juzz', icon: '📚', label: 'Juzz' },
    { id: 'alphabet', icon: 'ا', label: 'Arabic' },
    { id: 'revelation', icon: '📜', label: 'Revelation' },
  ];

  const currentLayout = layouts.find(l => l.id === surahLayout) || layouts[0];

  // Update dropdown positions when opened
  useEffect(() => {
    if (showLayoutMenu && layoutBtnRef.current) {
      const rect = layoutBtnRef.current.getBoundingClientRect();
      setLayoutMenuPos({ top: rect.bottom + 8, left: rect.left });
    }
  }, [showLayoutMenu]);

  useEffect(() => {
    if (showZoomMenu && zoomBtnRef.current) {
      const rect = zoomBtnRef.current.getBoundingClientRect();
      setZoomMenuPos({ top: rect.bottom + 8, left: rect.left });
    }
  }, [showZoomMenu]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowLayoutMenu(false);
      setShowZoomMenu(false);
    };
    if (showLayoutMenu || showZoomMenu) {
      const timer = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 10);
      return () => {
        clearTimeout(timer);
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [showLayoutMenu, showZoomMenu]);

  return (
    <>
      <div className="bg-white/95 backdrop-blur-xl px-3 sm:px-4 py-3 sm:py-4 shadow-lg border-b border-gray-100 relative" style={{ zIndex: 100 }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Left side - Level badge (clickable for donation) */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={onDonate}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <span className="text-base sm:text-xl">⭐</span>
              <span className="text-white font-bold tracking-wide text-xs sm:text-base">{level.toUpperCase()}</span>
              <span className="ml-1 px-1.5 py-0.5 bg-amber-400 text-amber-900 text-[8px] sm:text-[10px] font-bold rounded-full animate-pulse">Donate</span>
            </button>
          </div>

          {/* Center - Layout & Zoom Controls (only when showControls is true) */}
          {showControls && (
            <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-center">
              {/* Layout Selector */}
              <button
                ref={layoutBtnRef}
                onClick={(e) => { e.stopPropagation(); setShowLayoutMenu(!showLayoutMenu); setShowZoomMenu(false); }}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl sm:rounded-2xl text-white font-medium transition-all hover:shadow-lg hover:scale-105 shadow-md"
              >
                <span className="text-base sm:text-lg">{currentLayout.icon}</span>
                <span className="text-xs sm:text-sm hidden sm:inline">{currentLayout.label}</span>
                <Icons.ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${showLayoutMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Zoom Controls */}
              <button
                ref={zoomBtnRef}
                onClick={(e) => { e.stopPropagation(); setShowZoomMenu(!showZoomMenu); setShowLayoutMenu(false); }}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl sm:rounded-2xl text-white font-medium transition-all hover:shadow-lg hover:scale-105 shadow-md"
              >
                <Icons.ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm hidden sm:inline">Zoom</span>
                <Icons.ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${showZoomMenu ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}

          {/* Right side - Stats */}
          <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0">
            <div className="flex items-center gap-1 sm:gap-2">
              <Icons.Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 drop-shadow-lg" />
              <span className="font-bold text-gray-700 text-xs sm:text-sm">
                {points} <span className="text-gray-400 font-normal hidden sm:inline">pts</span>
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Icons.Fire className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 drop-shadow-lg" />
              <span className="font-bold text-gray-700 text-xs sm:text-sm">
                {streak}<span className="text-gray-400 font-normal hidden sm:inline"> days</span>
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Icons.Trophy className="w-5 h-5 text-purple-500 drop-shadow-lg" />
              <span className="font-bold text-gray-700 text-sm">{badges}</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="max-w-6xl mx-auto mt-2 sm:mt-3">
          <div className="h-2 sm:h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-full relative"
              style={{ width: `${(points / 1000) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white/70 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Position Dropdowns - Rendered outside the bar for proper z-index */}
      {showLayoutMenu && (
        <div
          className="fixed bg-white rounded-xl sm:rounded-2xl shadow-2xl py-2 min-w-[140px] sm:min-w-[160px] border border-gray-100 overflow-hidden"
          style={{ zIndex: 999999, top: layoutMenuPos.top, left: layoutMenuPos.left }}
          onClick={(e) => e.stopPropagation()}
        >
          {layouts.map((layout) => (
            <button
              key={layout.id}
              onClick={() => { setSurahLayout(layout.id); setShowLayoutMenu(false); }}
              className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-left flex items-center gap-2 sm:gap-3 transition-all ${
                surahLayout === layout.id
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                  : 'text-gray-700 hover:bg-purple-50'
              }`}
            >
              <span className="text-base sm:text-lg">{layout.icon}</span>
              <span className="font-medium text-xs sm:text-sm">{layout.label}</span>
            </button>
          ))}
        </div>
      )}

      {showZoomMenu && (
        <div
          className="fixed bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4 min-w-[160px] sm:min-w-[200px] border border-gray-100"
          style={{ zIndex: 999999, top: zoomMenuPos.top, left: zoomMenuPos.left }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Bubble Zoom */}
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase">Bubble Size</span>
              <span className="text-[10px] sm:text-xs font-bold text-emerald-600">{Math.round(zoom * 100)}%</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              >−</button>
              <div className="flex-1 h-2 bg-gray-100 rounded-full relative">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all"
                  style={{ width: `${((zoom - 0.5) / 1.5) * 100}%` }}
                />
              </div>
              <button
                onClick={() => setZoom(Math.min(2, zoom + 0.1))}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              >+</button>
            </div>
          </div>

          {/* Content Zoom */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase">Text Size</span>
              <span className="text-[10px] sm:text-xs font-bold text-purple-600">{Math.round(contentZoom * 100)}%</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setContentZoom(Math.max(0.6, contentZoom - 0.1))}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              >−</button>
              <div className="flex-1 h-2 bg-gray-100 rounded-full relative">
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-full transition-all"
                  style={{ width: `${((contentZoom - 0.6) / 0.9) * 100}%` }}
                />
              </div>
              <button
                onClick={() => setContentZoom(Math.min(1.5, contentZoom + 0.1))}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
              >+</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default StatsBar;
