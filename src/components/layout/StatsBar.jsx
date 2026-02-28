/**
 * StatsBar Component
 * Single Responsibility: Display user stats, progress, and controls
 */

import { memo, useState, useRef, useEffect, Suspense, lazy } from 'react';
import { createPortal } from 'react-dom';
import { Icons } from '../common/Icons';
import { useGamification } from '../../hooks/useGamification';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../contexts/LocaleContext';

// Lazy load NotificationBell
const NotificationBell = lazy(() => import('../common/AnnouncementBanner').then(m => ({ default: m.NotificationBell })));

// Layout options - defined outside component to prevent recreation
const LAYOUTS = [
  // Standard layouts
  { id: 'grid', icon: '⊞', label: 'Grid', category: 'standard' },
  { id: 'list', icon: '☰', label: 'List', category: 'standard' },
  { id: 'compact', icon: '▦', label: 'Compact', category: 'standard' },
  // Kids layouts
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

// Bubble Button Component - unified styling for all StatsBar buttons
const BubbleButton = memo(function BubbleButton({ icon: Icon, label, color, color2, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  // Check if Icon is a function that returns JSX (like for level number) or a component
  const isCustomRender = typeof Icon === 'function' && !Icon.displayName && !Icon.name?.startsWith('Icon');

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center sm:gap-0.5 transition-all duration-300 flex-shrink-0"
    >
      {/* Bubble - w-10 h-10 (40px) on mobile, w-[54px] h-[54px] on desktop */}
      <div
        className="relative transition-all duration-300 w-10 h-10 sm:w-[54px] sm:h-[54px]"
        style={{
          transform: `scale(${isHovered ? 1.1 : 1})`,
        }}
      >
        {/* Outer glow */}
        <div
          className="absolute rounded-full pointer-events-none transition-all duration-500 hidden sm:block"
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


          {/* Icon or custom render */}
          <div className="absolute inset-0 flex items-center justify-center">
            {isCustomRender ? (
              <Icon />
            ) : (
              <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-lg" />
            )}
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

      {/* Label - hidden on mobile */}
      <span
        className="text-[9px] font-semibold transition-colors duration-300 hidden sm:block whitespace-nowrap"
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
  onTimeMachine,
  onGlobalPulse,
  onWeatherSync,
  onHajjUmrah,
  onShowBookmarks,
}) {
  const gamification = useGamification();
  const { isPremium } = useAuth();
  const { t } = useTranslation();
  // Map layout IDs to locale keys: strip 'kids-' prefix, and handle special cases
  const LAYOUT_KEY_MAP = {
    'kids-rainbow': 'rainbow',
    'kids-art': 'artStudio',
    'kids-blocks': 'blocks',
    'kids-bubbles': 'bubbles',
    'length': 'byLength',
    'alphabet': 'arabic',
  };
  const getLayoutLabel = (id) => {
    const key = LAYOUT_KEY_MAP[id] || id;
    return t(`statsBar.${key}`, LAYOUTS.find(l => l.id === id)?.label);
  };
  const [showLayoutMenu, setShowLayoutMenu] = useState(false);
  const [showZoomMenu, setShowZoomMenu] = useState(false);
  const layoutBtnRef = useRef(null);
  const zoomBtnRef = useRef(null);
  const [layoutMenuPos, setLayoutMenuPos] = useState({ top: 0, left: 0 });
  const [zoomMenuPos, setZoomMenuPos] = useState({ top: 0, left: 0 });

  const currentLayout = LAYOUTS.find(l => l.id === surahLayout) || LAYOUTS[0];

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
    if (!showLayoutMenu && !showZoomMenu) return;
    const handleClickOutside = () => {
      setShowLayoutMenu(false);
      setShowZoomMenu(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showLayoutMenu, showZoomMenu]);

  return (
    <>
      <div className="bg-white/95 backdrop-blur-xl px-2 sm:px-4 py-2 sm:py-3 shadow-lg border-b border-gray-100 relative" style={{ zIndex: 100 }}>
        {/* Single unified horizontal scroll for all controls */}
        <div className="max-w-6xl mx-auto relative">
          {/* Left fade indicator */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white/95 to-transparent z-10 pointer-events-none" />
          {/* Right fade indicator */}
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white/95 to-transparent z-10 pointer-events-none" />

          {/* All buttons in a single unified list - ensures consistent spacing */}
          <ul className="flex items-center gap-0.5 sm:gap-3 md:gap-4 lg:gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide px-2 list-none m-0 p-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', touchAction: 'pan-x' }}>
            {/* Donate */}
            <li className="flex-shrink-0"><BubbleButton icon={Icons.Heart} label={t('statsBar.donate', 'Donate')} color="#10B981" color2="#14B8A6" onClick={onDonate} /></li>

            {/* Alerts */}
            <li className="flex-shrink-0"><Suspense fallback={null}><NotificationBell userTier={isPremium ? 'premium' : 'free'} /></Suspense></li>

            {/* Layout */}
            {showControls && (
              <li className="flex-shrink-0">
                <button
                  ref={layoutBtnRef}
                  onClick={(e) => { e.stopPropagation(); setShowLayoutMenu(!showLayoutMenu); setShowZoomMenu(false); }}
                  className="relative flex flex-col items-center sm:gap-0.5"
                >
                  <div className="relative w-10 h-10 sm:w-[54px] sm:h-[54px] rounded-full overflow-hidden transition-all hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                      boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3), inset 0 -8px 15px rgba(99, 102, 241, 0.3), inset 0 8px 15px rgba(255,255,255,0.2)',
                    }}>
                    <div className="absolute pointer-events-none" style={{ width: '70%', height: '35%', top: '8%', left: '15%', background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)', borderRadius: '50%', transform: 'scaleY(0.5)' }} />
                    <div className="absolute pointer-events-none" style={{ width: '18%', height: '12%', top: '15%', left: '22%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)', borderRadius: '50%' }} />
                    <div className="absolute inset-0 flex items-center justify-center"><span className="text-base sm:text-lg text-white drop-shadow-lg">{currentLayout.icon}</span></div>
                  </div>
                  <span className="text-[9px] font-semibold text-gray-500 hidden sm:block">{t('statsBar.layout', 'Layout')}</span>
                </button>
              </li>
            )}

            {/* Zoom */}
            {showControls && (
              <li className="flex-shrink-0">
                <button
                  ref={zoomBtnRef}
                  onClick={(e) => { e.stopPropagation(); setShowZoomMenu(!showZoomMenu); setShowLayoutMenu(false); }}
                  className="relative flex flex-col items-center sm:gap-0.5"
                >
                  <div className="relative w-10 h-10 sm:w-[54px] sm:h-[54px] rounded-full overflow-hidden transition-all hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, #14b8a6 0%, #10b981 100%)',
                      boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3), inset 0 -8px 15px rgba(16, 185, 129, 0.3), inset 0 8px 15px rgba(255,255,255,0.2)',
                    }}>
                    <div className="absolute pointer-events-none" style={{ width: '70%', height: '35%', top: '8%', left: '15%', background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)', borderRadius: '50%', transform: 'scaleY(0.5)' }} />
                    <div className="absolute pointer-events-none" style={{ width: '18%', height: '12%', top: '15%', left: '22%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, transparent 70%)', borderRadius: '50%' }} />
                    <div className="absolute inset-0 flex items-center justify-center"><Icons.ZoomIn className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-lg" /></div>
                  </div>
                  <span className="text-[9px] font-semibold text-gray-500 hidden sm:block">{t('statsBar.zoom', 'Zoom')}</span>
                </button>
              </li>
            )}

            {/* Map */}
            {showControls && onWorldMap && (<li className="flex-shrink-0"><BubbleButton icon={Icons.Globe3D} label={t('statsBar.map', 'Map')} color="#0EA5E9" color2="#0284C7" onClick={onWorldMap} /></li>)}

            {/* Time Machine */}
            {showControls && onTimeMachine && (<li className="flex-shrink-0"><BubbleButton icon={Icons.Clock} label={t('statsBar.timeline', 'Timeline')} color="#F59E0B" color2="#D97706" onClick={onTimeMachine} /></li>)}

            {/* Bookmarks */}
            {showControls && onShowBookmarks && (<li className="flex-shrink-0"><BubbleButton icon={Icons.Bookmark} label={t('statsBar.bookmarks', 'Bookmarks')} color="#EC4899" color2="#F472B6" onClick={onShowBookmarks} /></li>)}

            {/* Ummah */}
            {showControls && onGlobalPulse && (<li className="flex-shrink-0"><BubbleButton icon={Icons.GlobalPulse} label={t('statsBar.ummah', 'Ummah')} color="#10B981" color2="#059669" onClick={onGlobalPulse} /></li>)}

            {/* Weather */}
            {showControls && onWeatherSync && (<li className="flex-shrink-0"><BubbleButton icon={Icons.CloudSun} label={t('statsBar.weather', 'Weather')} color="#3B82F6" color2="#2563EB" onClick={onWeatherSync} /></li>)}

            {/* Hajj & Umrah */}
            {onHajjUmrah && (<li className="flex-shrink-0"><BubbleButton icon={() => <span className="text-xl sm:text-2xl">🕋</span>} label={t('statsBar.hajj', 'Hajj')} color="#F59E0B" color2="#D97706" onClick={onHajjUmrah} /></li>)}

            {/* Gamification Widget */}
            <li className="flex-shrink-0">
              <button
                onClick={onShowAchievements}
                className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all hover:scale-105 active:scale-95"
                style={{
                  background: gamification.isActive
                    ? `linear-gradient(135deg, ${gamification.levelInfo.current.color}18, ${gamification.levelInfo.current.color}08)`
                    : 'rgba(148, 163, 184, 0.08)',
                  border: `1px solid ${gamification.isActive ? `${gamification.levelInfo.current.color}30` : 'rgba(148,163,184,0.15)'}`,
                  boxShadow: gamification.isActive ? `0 2px 8px ${gamification.levelInfo.current.color}10` : 'none',
                }}
              >
                {/* Level circle */}
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: gamification.isActive
                      ? `linear-gradient(135deg, ${gamification.levelInfo.current.color}, ${gamification.levelInfo.current.color}cc)`
                      : 'linear-gradient(135deg, #94a3b8, #64748b)',
                    boxShadow: gamification.isActive
                      ? `0 2px 6px ${gamification.levelInfo.current.color}40, inset 0 1px 2px rgba(255,255,255,0.3)`
                      : '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  <span className="text-white text-xs sm:text-sm font-black drop-shadow">{gamification.isActive ? gamification.level : '—'}</span>
                </div>

                {gamification.isActive ? (
                  <div className="flex flex-col items-start min-w-0">
                    {/* Stats row */}
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs">
                      <span className="flex items-center gap-0.5 text-amber-500 font-semibold">
                        <Icons.Star className="w-3 h-3" />{gamification.xp}
                      </span>
                      <span className={`flex items-center gap-0.5 font-semibold ${gamification.streak.current > 0 ? 'text-orange-500' : 'text-gray-400'}`}>
                        <Icons.Fire className="w-3 h-3" />{gamification.streak.current}
                      </span>
                      <span className="flex items-center gap-0.5 text-purple-500 font-semibold">
                        <Icons.Trophy className="w-3 h-3" />{gamification.achievements.length}
                      </span>
                    </div>
                    {/* XP progress bar */}
                    <div className="w-full mt-0.5" style={{ minWidth: 80 }}>
                      <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.min(gamification.levelInfo.progressPercent || 0, 100)}%`,
                            background: `linear-gradient(to right, ${gamification.levelInfo.current.color}, ${gamification.levelInfo.next?.color || gamification.levelInfo.current.color})`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <span className="text-[10px] sm:text-xs text-gray-400 font-medium">{t('statsBar.xp', 'XP')}</span>
                )}
              </button>
            </li>
          </ul>
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
              <span>📋</span> {t('statsBar.standard', 'Standard')}
            </div>
            {LAYOUTS.filter(l => l.category === 'standard').map((layout) => (
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
                <span className="font-medium text-sm flex-1 text-left">{getLayoutLabel(layout.id)}</span>
                {surahLayout === layout.id && <Icons.Check className="w-4 h-4 text-green-300" />}
              </button>
            ))}

            {/* Category: Kids - moved up for easy access */}
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider px-3 py-2 mt-2 flex items-center gap-2 border-t border-white/10 pt-3">
              <span>👶</span> {t('statsBar.kidsMode', 'Kids Mode')}
            </div>
            {LAYOUTS.filter(l => l.category === 'kids').map((layout) => (
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
                <span className="font-medium text-sm flex-1 text-left">{getLayoutLabel(layout.id)}</span>
                {surahLayout === layout.id && <Icons.Check className="w-4 h-4 text-green-300" />}
              </button>
            ))}

            {/* Category: Creative */}
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider px-3 py-2 mt-2 flex items-center gap-2 border-t border-white/10 pt-3">
              <span>✨</span> {t('statsBar.creative', 'Creative')}
            </div>
            {LAYOUTS.filter(l => l.category === 'creative').map((layout) => (
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
                <span className="font-medium text-sm flex-1 text-left">{getLayoutLabel(layout.id)}</span>
                {surahLayout === layout.id && <Icons.Check className="w-4 h-4 text-green-300" />}
              </button>
            ))}

            {/* Category: Organize */}
            <div className="text-white/60 text-[10px] font-bold uppercase tracking-wider px-3 py-2 mt-2 flex items-center gap-2 border-t border-white/10 pt-3">
              <span>📁</span> {t('statsBar.organize', 'Organize')}
            </div>
            {LAYOUTS.filter(l => l.category === 'organize').map((layout) => (
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
                <span className="font-medium text-sm flex-1 text-left">{getLayoutLabel(layout.id)}</span>
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
                <span className="text-xs font-semibold text-white/80 uppercase">{t('statsBar.bubbleSize', 'Bubble Size')}</span>
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
                <span className="text-xs font-semibold text-white/80 uppercase">{t('statsBar.textSize', 'Text Size')}</span>
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
