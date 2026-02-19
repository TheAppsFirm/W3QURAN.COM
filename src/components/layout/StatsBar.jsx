/**
 * StatsBar Component
 * Single Responsibility: Display user stats, progress, and controls
 */

import { memo, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Icons } from '../common/Icons';

// Bubble Button Component for Mood and Mind Map
const BubbleButton = memo(function BubbleButton({ icon: Icon, label, color, color2, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center gap-0.5 transition-all duration-300 flex-shrink-0 snap-start"
      title={label}
    >
      {/* Bubble */}
      <div
        className="relative transition-all duration-300"
        style={{
          width: 40,
          height: 40,
          transform: `scale(${isHovered ? 1.15 : 1})`,
        }}
      >
        {/* Outer glow */}
        <div
          className="absolute rounded-full pointer-events-none transition-all duration-500"
          style={{
            inset: '-15%',
            background: `radial-gradient(circle at 50% 50%, ${color}50 0%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
            filter: 'blur(8px)',
          }}
        />

        {/* Main bubble */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, ${color2 || color} 100%)`,
            boxShadow: isHovered
              ? `0 0 20px ${color}50, 0 6px 20px rgba(0,0,0,0.3), inset 0 -10px 20px ${color2 || color}40, inset 0 10px 20px rgba(255,255,255,0.25)`
              : `0 4px 15px ${color}30, inset 0 -8px 15px ${color2 || color}30, inset 0 8px 15px rgba(255,255,255,0.2)`,
          }}
        >
          {/* Glass highlight */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '70%',
              height: '35%',
              top: '8%',
              left: '15%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)',
              borderRadius: '50%',
              transform: 'scaleY(0.5)',
            }}
          />

          {/* Small bright spot */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '18%',
              height: '12%',
              top: '15%',
              left: '22%',
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)',
              borderRadius: '50%',
            }}
          />

          {/* Clock sweep on hover */}
          {isHovered && (
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.3) 0deg, transparent 60deg)`,
                  animation: 'spinSlow 2s linear infinite',
                }}
              />
            </div>
          )}

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-5 h-5 text-white drop-shadow-lg" />
          </div>
        </div>

        {/* Outer border */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none transition-all duration-300"
          style={{
            border: `1.5px solid ${isHovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}`,
          }}
        />
      </div>

      {/* Label */}
      <span
        className="text-[9px] font-semibold transition-colors duration-300 hidden sm:block"
        style={{ color: isHovered ? color : '#64748b' }}
      >
        {label}
      </span>
    </button>
  );
});

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
  // New callbacks for all features
  onMood,
  onMindMap,
  onWorldMap,
  onAIGuide,
  onGlobalPulse,
  onWeatherSync,
  onSoundHealing,
}) {
  const [showLayoutMenu, setShowLayoutMenu] = useState(false);
  const [showZoomMenu, setShowZoomMenu] = useState(false);
  const layoutBtnRef = useRef(null);
  const zoomBtnRef = useRef(null);
  const [layoutMenuPos, setLayoutMenuPos] = useState({ top: 0, left: 0 });
  const [zoomMenuPos, setZoomMenuPos] = useState({ top: 0, left: 0 });

  // All layout options available to everyone
  const layouts = [
    { id: 'spiral', icon: '🌀', label: 'Spiral' },
    { id: 'clock', icon: '🕐', label: 'Clock' },
    { id: 'grid', icon: '⊞', label: 'Grid' },
    { id: 'juzz', icon: '📚', label: 'Juzz' },
    { id: 'alphabet', icon: 'ا', label: 'Arabic' },
    { id: 'revelation', icon: '📜', label: 'Revelation' },
    { id: 'book', icon: '📖', label: 'Book' },
  ];

  const currentLayout = layouts.find(l => l.id === surahLayout) || layouts[0];

  // Update dropdown positions when opened
  useEffect(() => {
    if (showLayoutMenu && layoutBtnRef.current) {
      const rect = layoutBtnRef.current.getBoundingClientRect();
      // Ensure dropdown doesn't go off-screen
      const left = Math.min(rect.left, window.innerWidth - 200);
      const top = rect.bottom + 8;
      setLayoutMenuPos({ top, left: Math.max(10, left) });
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
          {/* Left side - Donation */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Donation button */}
            <button
              onClick={onDonate}
              className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4), inset 0 -6px 15px rgba(20, 184, 166, 0.3), inset 0 6px 15px rgba(255,255,255,0.2)',
              }}
            >
              <div className="absolute pointer-events-none" style={{
                width: '80%', height: '40%', top: '5%', left: '10%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
                borderRadius: '50%', transform: 'scaleY(0.5)',
              }} />
              <span className="text-base sm:text-xl relative z-10">💝</span>
              <span className="text-white font-bold tracking-wide text-xs sm:text-sm relative z-10">DONATE</span>
            </button>
          </div>

          {/* Center - Layout & Zoom Controls + Mood & Mind Map */}
          {showControls && (
            <div className="relative flex-1 min-w-0">
              {/* Left fade indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white/95 to-transparent z-10 pointer-events-none sm:hidden" />
              {/* Right fade indicator */}
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white/95 to-transparent z-10 pointer-events-none sm:hidden" />

              <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto overflow-y-hidden scrollbar-hide px-1 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', touchAction: 'pan-x' }}>
              {/* Layout Selector - Bubble Style */}
              <button
                ref={layoutBtnRef}
                onClick={(e) => { e.stopPropagation(); setShowLayoutMenu(!showLayoutMenu); setShowZoomMenu(false); }}
                className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-white font-medium transition-all hover:shadow-lg hover:scale-105 overflow-hidden flex-shrink-0 snap-start"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4), inset 0 -6px 15px rgba(99, 102, 241, 0.3), inset 0 6px 15px rgba(255,255,255,0.2)',
                }}
              >
                {/* Glass highlight */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: '80%',
                    height: '40%',
                    top: '5%',
                    left: '10%',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
                    borderRadius: '50%',
                    transform: 'scaleY(0.5)',
                  }}
                />
                <span className="text-base sm:text-lg relative z-10">{currentLayout.icon}</span>
                <span className="text-xs sm:text-sm hidden sm:inline relative z-10">{currentLayout.label}</span>
                <Icons.ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform relative z-10 ${showLayoutMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Zoom Controls - Bubble Style */}
              <button
                ref={zoomBtnRef}
                onClick={(e) => { e.stopPropagation(); setShowZoomMenu(!showZoomMenu); setShowLayoutMenu(false); }}
                className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-white font-medium transition-all hover:shadow-lg hover:scale-105 overflow-hidden flex-shrink-0 snap-start"
                style={{
                  background: 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)',
                  boxShadow: '0 4px 15px rgba(20, 184, 166, 0.4), inset 0 -6px 15px rgba(16, 185, 129, 0.3), inset 0 6px 15px rgba(255,255,255,0.2)',
                }}
              >
                {/* Glass highlight */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: '80%',
                    height: '40%',
                    top: '5%',
                    left: '10%',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)',
                    borderRadius: '50%',
                    transform: 'scaleY(0.5)',
                  }}
                />
                <Icons.ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="text-xs sm:text-sm hidden sm:inline relative z-10">Zoom</span>
                <Icons.ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform relative z-10 ${showZoomMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Mood Bubble Button */}
              {onMood && (
                <BubbleButton
                  icon={Icons.Activity}
                  label="Mood"
                  color="#06B6D4"
                  color2="#0891B2"
                  onClick={onMood}
                />
              )}

              {/* Mind Map Bubble Button */}
              {onMindMap && (
                <BubbleButton
                  icon={Icons.Network}
                  label="Explorer"
                  color="#A855F7"
                  color2="#7C3AED"
                  onClick={onMindMap}
                />
              )}

              {/* World Map Bubble Button */}
              {onWorldMap && (
                <BubbleButton
                  icon={Icons.Globe3D}
                  label="World Map"
                  color="#0EA5E9"
                  color2="#0284C7"
                  onClick={onWorldMap}
                />
              )}

              {/* AI Guide Bubble Button */}
              {onAIGuide && (
                <BubbleButton
                  icon={Icons.HeartHandshake}
                  label="AI Guide"
                  color="#14B8A6"
                  color2="#0D9488"
                  onClick={onAIGuide}
                />
              )}

              {/* Global Ummah Pulse Bubble Button */}
              {onGlobalPulse && (
                <BubbleButton
                  icon={Icons.GlobalPulse}
                  label="Ummah"
                  color="#10B981"
                  color2="#059669"
                  onClick={onGlobalPulse}
                />
              )}

              {/* Weather Sync Bubble Button */}
              {onWeatherSync && (
                <BubbleButton
                  icon={Icons.CloudSun}
                  label="Weather"
                  color="#3B82F6"
                  color2="#2563EB"
                  onClick={onWeatherSync}
                />
              )}

              {/* Sound Healing Bubble Button */}
              {onSoundHealing && (
                <BubbleButton
                  icon={Icons.Music}
                  label="Healing"
                  color="#EC4899"
                  color2="#DB2777"
                  onClick={onSoundHealing}
                />
              )}
              </div>
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

      {/* Layout Dropdown - Using Portal for proper z-index */}
      {showLayoutMenu && createPortal(
        <div
          className="fixed inset-0"
          style={{ zIndex: 999999 }}
          onClick={() => setShowLayoutMenu(false)}
        >
          <div
            className="absolute overflow-y-auto scrollbar-thin"
            style={{
              top: layoutMenuPos.top,
              left: layoutMenuPos.left,
              maxHeight: 'calc(100vh - 120px)',
              minWidth: '180px',
              background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.98), rgba(99, 102, 241, 0.98))',
              borderRadius: '20px',
              padding: '8px',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(255,255,255,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider px-3 py-2">
              Choose Layout
            </div>
            {layouts.map((layout) => (
              <button
                key={layout.id}
                onClick={() => { setSurahLayout(layout.id); setShowLayoutMenu(false); }}
                className="w-full px-3 py-2.5 flex items-center gap-3 transition-all rounded-xl hover:bg-white/20"
                style={{
                  background: surahLayout === layout.id
                    ? 'rgba(255,255,255,0.3)'
                    : 'transparent',
                  color: 'white',
                }}
              >
                <span className="text-xl w-8 text-center">{layout.icon}</span>
                <span className="font-medium text-sm flex-1 text-left">{layout.label}</span>
                {surahLayout === layout.id && (
                  <Icons.Check className="w-4 h-4 text-green-300" />
                )}
              </button>
            ))}
          </div>
        </div>,
        document.body
      )}

      {/* Zoom Dropdown - Using Portal */}
      {showZoomMenu && createPortal(
        <div
          className="fixed inset-0"
          style={{ zIndex: 999999 }}
          onClick={() => setShowZoomMenu(false)}
        >
          <div
            className="absolute p-4"
            style={{
              top: zoomMenuPos.top,
              left: Math.max(10, Math.min(zoomMenuPos.left, window.innerWidth - 220)),
              minWidth: '200px',
              background: 'linear-gradient(145deg, rgba(20, 184, 166, 0.98), rgba(16, 185, 129, 0.98))',
              borderRadius: '20px',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(20, 184, 166, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(255,255,255,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bubble Zoom */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-white/80 uppercase">Bubble Size</span>
                <span className="text-xs font-bold text-white">{Math.round(zoom * 100)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >−</button>
                <div className="flex-1 h-2 bg-white/20 rounded-full relative overflow-hidden">
                  <div
                    className="h-full bg-white/60 rounded-full transition-all"
                    style={{ width: `${((zoom - 0.5) / 1.5) * 100}%` }}
                  />
                </div>
                <button
                  onClick={() => setZoom(Math.min(2, zoom + 0.1))}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >+</button>
              </div>
            </div>

            {/* Content Zoom */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-white/80 uppercase">Text Size</span>
                <span className="text-xs font-bold text-white">{Math.round(contentZoom * 100)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setContentZoom(Math.max(0.6, contentZoom - 0.1))}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >−</button>
                <div className="flex-1 h-2 bg-white/20 rounded-full relative overflow-hidden">
                  <div
                    className="h-full bg-white/60 rounded-full transition-all"
                    style={{ width: `${((contentZoom - 0.6) / 0.9) * 100}%` }}
                  />
                </div>
                <button
                  onClick={() => setContentZoom(Math.min(1.5, contentZoom + 0.1))}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >+</button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* spinSlow animation is defined in index.css */}
    </>
  );
});

export default StatsBar;
