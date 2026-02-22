/**
 * StatsBar Component
 * Single Responsibility: Display user stats, progress, and controls
 */

import { memo, useState, useRef, useEffect, Suspense, lazy } from 'react';
import { createPortal } from 'react-dom';
import { Icons } from '../common/Icons';
import { useGamification } from '../../hooks/useGamification';
import { useAuth } from '../../contexts/AuthContext';

// Lazy load NotificationBell
const NotificationBell = lazy(() => import('../common/AnnouncementBanner').then(m => ({ default: m.NotificationBell })));

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
      {/* Bubble - w-10 h-10 (40px) on mobile, w-[54px] h-[54px] on desktop */}
      <div
        className="relative transition-all duration-300 w-10 h-10 sm:w-[54px] sm:h-[54px]"
        style={{
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
            <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-lg" />
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
  // Gamification callbacks
  onShowAchievements,
  // Callbacks for bubble features
  onWorldMap,
  onGlobalPulse,
  onWeatherSync,
}) {
  const gamification = useGamification();
  const { isPremium } = useAuth();
  const [showLayoutMenu, setShowLayoutMenu] = useState(false);
  const [showZoomMenu, setShowZoomMenu] = useState(false);
  const layoutBtnRef = useRef(null);
  const zoomBtnRef = useRef(null);
  const [layoutMenuPos, setLayoutMenuPos] = useState({ top: 0, left: 0 });
  const [zoomMenuPos, setZoomMenuPos] = useState({ top: 0, left: 0 });

  // All layout options available to everyone
  const layouts = [
    // Standard layouts
    { id: 'grid', icon: '⊞', label: 'Grid', category: 'standard' },
    { id: 'list', icon: '☰', label: 'List', category: 'standard' },
    { id: 'compact', icon: '▦', label: 'Compact', category: 'standard' },
    // Kids layouts (fun & interactive) - moved up for easy access
    { id: 'kids-rainbow', icon: '🌈', label: 'Rainbow', category: 'kids' },
    { id: 'kids-art', icon: '🎨', label: 'Art Studio', category: 'kids' },
    { id: 'kids-blocks', icon: '🧱', label: 'Blocks', category: 'kids' },
    { id: 'kids-bubbles', icon: '🫧', label: 'Bubbles', category: 'kids' },
    // Creative layouts
    { id: 'spiral', icon: '🌀', label: 'Spiral', category: 'creative' },
    { id: 'clock', icon: '🕐', label: 'Clock', category: 'creative' },
    { id: 'honeycomb', icon: '⬡', label: 'Honeycomb', category: 'creative' },
    { id: 'wave', icon: '🌊', label: 'Wave', category: 'creative' },
    // Organization layouts
    { id: 'juzz', icon: '📚', label: 'Juzz', category: 'organize' },
    { id: 'alphabet', icon: 'ا', label: 'Arabic', category: 'organize' },
    { id: 'revelation', icon: '📜', label: 'Revelation', category: 'organize' },
    { id: 'book', icon: '📖', label: 'Book', category: 'organize' },
    { id: 'length', icon: '📏', label: 'By Length', category: 'organize' },
  ];

  const currentLayout = layouts.find(l => l.id === surahLayout) || layouts[0];

  // Update dropdown positions when opened
  useEffect(() => {
    if (showLayoutMenu && layoutBtnRef.current) {
      const rect = layoutBtnRef.current.getBoundingClientRect();
      // Ensure dropdown doesn't go off-screen horizontally or vertically
      const dropdownHeight = 420;
      const left = Math.min(rect.left, window.innerWidth - 240);
      // If not enough space below, position above the button or limit top position
      const spaceBelow = window.innerHeight - rect.bottom - 20;
      const top = spaceBelow < dropdownHeight
        ? Math.max(20, window.innerHeight - dropdownHeight - 20)
        : rect.bottom + 8;
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
      <div className="bg-white/95 backdrop-blur-xl px-3 sm:px-4 py-3 sm:py-4 shadow-lg border-b border-gray-100 relative" style={{ zIndex: 100, paddingTop: 'max(env(safe-area-inset-top, 0px), 12px)' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Left side - Donation & Notifications */}
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
              <span className="text-white font-bold tracking-wide text-xs sm:text-sm relative z-10 hidden sm:inline">DONATE</span>
            </button>

            {/* Notification Bell */}
            <Suspense fallback={null}>
              <NotificationBell userTier={isPremium ? 'premium' : 'free'} />
            </Suspense>
          </div>

          {/* Center - Layout & Zoom Controls + Mood & Mind Map */}
          {showControls && (
            <div className="relative flex-1 min-w-0 flex justify-center">
              {/* Left fade indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white/95 to-transparent z-10 pointer-events-none sm:hidden" />
              {/* Right fade indicator */}
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white/95 to-transparent z-10 pointer-events-none sm:hidden" />

              <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto overflow-y-hidden scrollbar-hide px-1 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', touchAction: 'pan-x' }}>
              {/* Layout Selector - Same size as BubbleButton */}
              <button
                ref={layoutBtnRef}
                onClick={(e) => { e.stopPropagation(); setShowLayoutMenu(!showLayoutMenu); setShowZoomMenu(false); }}
                className="relative flex items-center justify-center w-10 h-10 sm:w-[54px] sm:h-[54px] rounded-full text-white font-medium transition-all hover:scale-110 overflow-hidden flex-shrink-0 snap-start"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                  boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3), inset 0 -8px 15px rgba(99, 102, 241, 0.3), inset 0 8px 15px rgba(255,255,255,0.2)',
                }}
                title={currentLayout.label}
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
                <span className="text-base sm:text-lg relative z-10">{currentLayout.icon}</span>
              </button>

              {/* Zoom Controls - Same size as BubbleButton */}
              <button
                ref={zoomBtnRef}
                onClick={(e) => { e.stopPropagation(); setShowZoomMenu(!showZoomMenu); setShowLayoutMenu(false); }}
                className="relative flex items-center justify-center w-10 h-10 sm:w-[54px] sm:h-[54px] rounded-full text-white font-medium transition-all hover:scale-110 overflow-hidden flex-shrink-0 snap-start"
                style={{
                  background: 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)',
                  boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3), inset 0 -8px 15px rgba(16, 185, 129, 0.3), inset 0 8px 15px rgba(255,255,255,0.2)',
                }}
                title="Zoom"
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
                <Icons.ZoomIn className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-lg relative z-10" />
              </button>

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
              </div>
            </div>
          )}

          {/* Right side - Gamification Stats */}
          {gamification.isActive ? (
            <button
              onClick={onShowAchievements}
              className="relative flex items-center gap-0 flex-shrink-0 cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.98]"
              title={`Level ${gamification.level} ${gamification.levelInfo.current.name} — Click for achievements`}
            >
              {/* Unified card background */}
              <div className="relative flex items-center rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.9))',
                  boxShadow: `0 2px 12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04), 0 0 20px ${gamification.levelInfo.current.color}15`,
                }}>

                {/* Level circle - overlaps left edge */}
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 -ml-0.5 z-10"
                  style={{
                    background: `linear-gradient(135deg, ${gamification.levelInfo.current.color}, ${gamification.levelInfo.current.color}cc)`,
                    boxShadow: `0 2px 10px ${gamification.levelInfo.current.color}50, inset 0 1px 2px rgba(255,255,255,0.3)`,
                    border: '2.5px solid white',
                  }}>
                  <span className="text-white text-xs sm:text-sm font-black drop-shadow-sm">{gamification.level}</span>
                </div>

                {/* Stats row - Only XP on mobile for more menu room */}
                <div className="flex items-center gap-1.5 sm:gap-3 pl-1.5 sm:pl-2 pr-2 sm:pr-4 py-1 sm:py-2">
                  {/* Level name - desktop only */}
                  <span className="font-semibold text-[10px] sm:text-xs hidden sm:block"
                    style={{ color: gamification.levelInfo.current.color }}>
                    {gamification.levelInfo.current.name}
                  </span>

                  {/* Divider - desktop only */}
                  <div className="hidden sm:block w-px h-4 bg-gray-200" />

                  {/* XP - Always visible, compact on mobile */}
                  <div className="flex items-center gap-0.5 sm:gap-1" title={`${gamification.xp} XP`}>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', boxShadow: 'inset 0 -1px 2px #D9770620' }}>
                      <Icons.Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-600" />
                    </div>
                    <span className="font-bold text-gray-700 text-[10px] sm:text-xs">{gamification.xp}<span className="hidden sm:inline"> XP</span></span>
                  </div>

                  {/* Streak - desktop only */}
                  <div className="hidden sm:flex items-center gap-1" title={`${gamification.streak.current}-day streak`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      gamification.streak.current > 0 ? '' : 'opacity-40'
                    }`}
                      style={{
                        background: gamification.streak.current > 0
                          ? 'linear-gradient(135deg, #FFEDD5, #FED7AA)' : 'linear-gradient(135deg, #F1F5F9, #E2E8F0)',
                        boxShadow: gamification.streak.current > 0 ? 'inset 0 -1px 2px #EA580C15' : 'none',
                      }}>
                      <Icons.Fire className={`w-3 h-3 ${gamification.streak.current > 0 ? 'text-orange-500' : 'text-gray-400'}`}
                        style={gamification.streak.current > 0 ? { animation: 'pulse 2s ease-in-out infinite' } : undefined} />
                    </div>
                    <span className={`font-bold text-[11px] sm:text-xs ${gamification.streak.current > 0 ? 'text-gray-700' : 'text-gray-400'}`}>
                      {gamification.streak.current}
                    </span>
                  </div>

                  {/* Achievements - desktop only */}
                  <div className="hidden sm:flex items-center gap-1" title={`${gamification.achievements.length} achievements`}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #EDE9FE, #DDD6FE)', boxShadow: 'inset 0 -1px 2px #7C3AED15' }}>
                      <Icons.Trophy className="w-3 h-3 text-purple-500" />
                    </div>
                    <span className="font-bold text-gray-700 text-[11px] sm:text-xs">{gamification.achievements.length}</span>
                  </div>
                </div>
              </div>
            </button>
          ) : (
            <div className="flex items-center rounded-2xl overflow-hidden opacity-50 flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.9))',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)',
              }}>
              <div className="flex items-center gap-2.5 px-3.5 py-2">
                {[
                  { icon: Icons.Star, bg: '#FEF3C7', color: '#D97706' },
                  { icon: Icons.Fire, bg: '#F1F5F9', color: '#94A3B8' },
                  { icon: Icons.Trophy, bg: '#EDE9FE', color: '#A78BFA' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: item.bg }}>
                      <item.icon className="w-3 h-3" style={{ color: item.color }} />
                    </div>
                    <span className="font-bold text-gray-400 text-[11px]">—</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* XP Progress bar to next level */}
        {gamification.isActive && (
          <div className="max-w-6xl mx-auto mt-2 sm:mt-3">
            <div className="h-1.5 sm:h-2 rounded-full overflow-hidden relative"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.04), rgba(0,0,0,0.06))',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.08), inset 0 -1px 2px rgba(255,255,255,0.5)',
              }}>
              <div
                className="h-full rounded-full relative transition-all duration-500 overflow-hidden"
                style={{
                  width: `${Math.min(gamification.levelInfo.progressPercent || 0, 100)}%`,
                  background: `linear-gradient(to right, ${gamification.levelInfo.current.color}, ${gamification.levelInfo.next?.color || gamification.levelInfo.current.color})`,
                  boxShadow: `0 0 8px ${gamification.levelInfo.current.color}40`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  animation: 'shimmerWave 2s ease-in-out infinite',
                }} />
              </div>
            </div>
            <div className="flex justify-between mt-0.5">
              <span className="text-[8px] sm:text-[9px] text-gray-400">Lv.{gamification.level} {gamification.levelInfo.current.name}</span>
              {gamification.levelInfo.next && (
                <span className="text-[8px] sm:text-[9px] text-gray-400">
                  {gamification.levelInfo.xpProgress}/{gamification.levelInfo.xpNeeded} XP → Lv.{gamification.levelInfo.next.level}
                </span>
              )}
            </div>
          </div>
        )}
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
              top: Math.min(layoutMenuPos.top, window.innerHeight - 450),
              left: layoutMenuPos.left,
              maxHeight: 'min(calc(100vh - 80px), 420px)',
              minWidth: '220px',
              background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.98), rgba(99, 102, 241, 0.98))',
              borderRadius: '20px',
              padding: '8px',
              paddingBottom: '16px',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 40px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(255,255,255,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Category: Standard */}
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider px-3 py-2 flex items-center gap-2">
              <span>📋</span> Standard
            </div>
            {layouts.filter(l => l.category === 'standard').map((layout) => (
              <button
                key={layout.id}
                onClick={() => { setSurahLayout(layout.id); setShowLayoutMenu(false); }}
                className="w-full px-3 py-2 flex items-center gap-3 transition-all rounded-xl hover:bg-white/20"
                style={{
                  background: surahLayout === layout.id ? 'rgba(255,255,255,0.3)' : 'transparent',
                  color: 'white',
                }}
              >
                <span className="text-lg w-7 text-center">{layout.icon}</span>
                <span className="font-medium text-sm flex-1 text-left">{layout.label}</span>
                {surahLayout === layout.id && <Icons.Check className="w-4 h-4 text-green-300" />}
              </button>
            ))}

            {/* Category: Kids - moved up for easy access */}
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider px-3 py-2 mt-2 flex items-center gap-2 border-t border-white/10 pt-3">
              <span>👶</span> Kids Mode
            </div>
            {layouts.filter(l => l.category === 'kids').map((layout) => (
              <button
                key={layout.id}
                onClick={() => { setSurahLayout(layout.id); setShowLayoutMenu(false); }}
                className="w-full px-3 py-2 flex items-center gap-3 transition-all rounded-xl hover:bg-white/20"
                style={{
                  background: surahLayout === layout.id ? 'rgba(255,255,255,0.3)' : 'transparent',
                  color: 'white',
                }}
              >
                <span className="text-lg w-7 text-center">{layout.icon}</span>
                <span className="font-medium text-sm flex-1 text-left">{layout.label}</span>
                {surahLayout === layout.id && <Icons.Check className="w-4 h-4 text-green-300" />}
              </button>
            ))}

            {/* Category: Creative */}
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider px-3 py-2 mt-2 flex items-center gap-2 border-t border-white/10 pt-3">
              <span>✨</span> Creative
            </div>
            {layouts.filter(l => l.category === 'creative').map((layout) => (
              <button
                key={layout.id}
                onClick={() => { setSurahLayout(layout.id); setShowLayoutMenu(false); }}
                className="w-full px-3 py-2 flex items-center gap-3 transition-all rounded-xl hover:bg-white/20"
                style={{
                  background: surahLayout === layout.id ? 'rgba(255,255,255,0.3)' : 'transparent',
                  color: 'white',
                }}
              >
                <span className="text-lg w-7 text-center">{layout.icon}</span>
                <span className="font-medium text-sm flex-1 text-left">{layout.label}</span>
                {surahLayout === layout.id && <Icons.Check className="w-4 h-4 text-green-300" />}
              </button>
            ))}

            {/* Category: Organize */}
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider px-3 py-2 mt-2 flex items-center gap-2 border-t border-white/10 pt-3">
              <span>📁</span> Organize
            </div>
            {layouts.filter(l => l.category === 'organize').map((layout) => (
              <button
                key={layout.id}
                onClick={() => { setSurahLayout(layout.id); setShowLayoutMenu(false); }}
                className="w-full px-3 py-2 flex items-center gap-3 transition-all rounded-xl hover:bg-white/20"
                style={{
                  background: surahLayout === layout.id ? 'rgba(255,255,255,0.3)' : 'transparent',
                  color: 'white',
                }}
              >
                <span className="text-lg w-7 text-center">{layout.icon}</span>
                <span className="font-medium text-sm flex-1 text-left">{layout.label}</span>
                {surahLayout === layout.id && <Icons.Check className="w-4 h-4 text-green-300" />}
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
