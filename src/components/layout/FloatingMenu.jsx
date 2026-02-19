/**
 * FloatingMenu Component - Enhanced Version
 * Single Responsibility: Bottom navigation menu with bubble aesthetic
 */

import { useState, useEffect, useRef } from 'react';
import { Icons } from '../common/Icons';
import { useIsMobile } from '../../hooks';

// Bubble Menu Item Component
const BubbleMenuItem = ({ item, active, onClick, delay = 0, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon || Icons.Star; // Fallback to Star icon

  if (!Icon) {
    console.error('Missing icon for item:', item.id);
    return null;
  }

  // Check if mobile using reactive hook
  const isMobile = useIsMobile();
  const bubbleSize = isMobile ? 44 : 52;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-center gap-0.5 sm:gap-1 transition-all duration-300"
      style={{
        animation: `bubblePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms both`,
      }}
      aria-label={`Go to ${item.label}`}
      aria-current={active ? 'page' : undefined}
    >
      {/* Bubble container */}
      <div
        className="relative transition-all duration-300"
        style={{
          width: bubbleSize,
          height: bubbleSize,
          transform: `scale(${active || isHovered ? 1.15 : 1})`,
        }}
      >
        {/* Outer glow */}
        <div
          className="absolute rounded-full pointer-events-none transition-all duration-500"
          style={{
            inset: '-15%',
            background: `radial-gradient(circle at 50% 50%, ${item.gradient[0]}50 0%, transparent 70%)`,
            opacity: active || isHovered ? 1 : 0,
            filter: 'blur(8px)',
            animation: active || isHovered ? 'breathe 2s ease-in-out infinite' : 'none',
          }}
        />

        {/* Spinning ring */}
        <div
          className="absolute rounded-full pointer-events-none transition-all duration-500"
          style={{
            inset: '-6%',
            background: `conic-gradient(from 0deg, ${item.gradient[0]}90, ${item.gradient[1]}90, ${item.gradient[0]}90)`,
            opacity: active || isHovered ? 0.7 : 0,
            animation: 'spinSlow 4s linear infinite',
            filter: 'blur(1px)',
          }}
        />

        {/* Main bubble */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${item.gradient[0]} 0%, ${item.gradient[1]} 100%)`,
            boxShadow: active || isHovered
              ? `0 0 25px ${item.gradient[0]}60, 0 8px 25px rgba(0,0,0,0.3), inset 0 -12px 25px ${item.gradient[1]}50, inset 0 12px 25px rgba(255,255,255,0.3)`
              : `0 4px 15px ${item.gradient[0]}30, inset 0 -8px 15px ${item.gradient[1]}30, inset 0 8px 15px rgba(255,255,255,0.2)`,
          }}
        >
          {/* Glass highlight - top */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '70%',
              height: '35%',
              top: '8%',
              left: '15%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
              borderRadius: '50%',
              filter: 'blur(1px)',
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

          {/* Clock sweep on hover/active */}
          {(active || isHovered) && (
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
            <Icon className="w-5 h-5 text-white drop-shadow-lg" aria-hidden="true" />
          </div>
        </div>

        {/* Outer border */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none transition-all duration-300"
          style={{
            border: `1.5px solid ${active || isHovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}`,
            boxShadow: active || isHovered ? `0 0 10px ${item.gradient[0]}50` : 'none',
          }}
        />
      </div>

      {/* Label */}
      <span
        className="text-[9px] sm:text-[10px] font-semibold whitespace-nowrap transition-all duration-300 max-w-[50px] sm:max-w-none truncate"
        style={{
          color: active ? item.gradient[0] : darkMode ? '#94a3b8' : '#64748b',
          textShadow: active ? `0 0 10px ${item.gradient[0]}50` : 'none',
        }}
      >
        {item.label}
      </span>
    </button>
  );
};

function FloatingMenu({ view, setView, darkMode, onDonate, onMindMap, onMood, onVideoSync, onBabyNames, onTalkToQuran }) {
  const [showMore, setShowMore] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMore(false);
      }
    };
    if (showMore) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMore]);

  const mainItems = [
    { id: 'surahs', label: 'Quran', icon: Icons.Book },
    { id: 'talk', label: 'Talk', icon: Icons.Mic, isTalk: true },
    { id: 'more', label: 'More', icon: Icons.Grid, isMore: true },
  ];

  // All features available to everyone
  const moreItems = [
    // Innovative features - First row
    { id: 'mindmap', label: 'Explorer', icon: Icons.Search, gradient: ['#A855F7', '#7C3AED'], isSpecial: true },
    { id: 'mood', label: 'Mood', icon: Icons.Activity, gradient: ['#06B6D4', '#0891B2'], isSpecial: true },
    { id: 'videosync', label: 'Video Sync', icon: Icons.Video, gradient: ['#F472B6', '#EC4899'], isSpecial: true },
    { id: 'babynames', label: 'Baby Names', icon: Icons.Baby, gradient: ['#F59E0B', '#EA580C'], isSpecial: true },
    // Regular features
    { id: 'progress', label: 'Progress', icon: Icons.BarChart, gradient: ['#8b5cf6', '#a855f7'] },
    { id: 'daily', label: 'Daily Verse', icon: Icons.Sun, gradient: ['#f59e0b', '#eab308'] },
    { id: 'names', label: '99 Names', icon: Icons.Sparkles, gradient: ['#8b5cf6', '#a855f7'] },
    { id: 'quiz', label: 'Quiz', icon: Icons.HelpCircle, gradient: ['#ec4899', '#f43f5e'] },
    { id: 'prayer', label: 'Prayer', icon: Icons.Clock, gradient: ['#06b6d4', '#0ea5e9'] },
    { id: 'stats', label: 'Stats', icon: Icons.PieChart, gradient: ['#10b981', '#14b8a6'] },
    { id: 'donate', label: 'Donate', icon: Icons.Heart, gradient: ['#ef4444', '#f97316'], isDonate: true },
    { id: 'settings', label: 'Settings', icon: Icons.Settings, gradient: ['#6366f1', '#8b5cf6'] },
    { id: 'listen', label: 'Listen', icon: Icons.Headphones, gradient: ['#22c55e', '#10b981'] },
    { id: 'privacy', label: 'Privacy', icon: Icons.Shield, gradient: ['#64748b', '#475569'] },
    { id: 'terms', label: 'Terms', icon: Icons.FileText, gradient: ['#64748b', '#475569'] },
  ];

  const handleItemClick = (item) => {
    if (item.isDonate && onDonate) {
      onDonate();
    } else if (item.id === 'mindmap' && onMindMap) {
      onMindMap();
    } else if (item.id === 'mood' && onMood) {
      onMood();
    } else if (item.id === 'videosync' && onVideoSync) {
      onVideoSync();
    } else if (item.id === 'babynames' && onBabyNames) {
      onBabyNames();
    } else if (item.id === 'listen') {
      setView('listen');
    } else {
      setView(item.id);
    }
    setShowMore(false);
  };

  // Get special features label based on mode
  const specialFeaturesLabel = 'Innovative Features';

  return (
    <nav ref={menuRef} aria-label="Main navigation">
      {/* More Menu Popup - Bubble style grid */}
      {showMore && (
        <div
          className="fixed left-1/2 -translate-x-1/2 z-[55] w-[95vw] sm:w-auto max-w-[400px]"
          style={{ bottom: '90px' }}
        >
          <div
            className="relative p-4 sm:p-5 rounded-3xl shadow-2xl backdrop-blur-xl border overflow-hidden"
            style={{
              background: darkMode
                ? 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))'
                : 'linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(241, 245, 249, 0.95))',
              borderColor: darkMode ? 'rgba(100, 116, 139, 0.3)' : 'rgba(203, 213, 225, 0.5)',
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.5),
                0 0 40px rgba(139, 92, 246, 0.15),
                inset 0 1px 0 ${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)'}
              `,
              animation: 'slideUp 0.3s ease-out',
            }}
          >
            {/* Background grid pattern */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Special features row - Mind Map, Mood, Video Sync (filtered by mode) */}
            {moreItems.filter(i => i.isSpecial).length > 0 && (
            <div className="relative mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-white/10">
              <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider mb-2 sm:mb-3 text-center"
                style={{ color: darkMode ? '#94a3b8' : '#64748b' }}>
                {specialFeaturesLabel}
              </p>
              <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
                {moreItems.filter(i => i.isSpecial).map((item, idx) => (
                  <BubbleMenuItem
                    key={item.id}
                    item={item}
                    active={false}
                    onClick={() => handleItemClick(item)}
                    delay={idx * 60}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
            )}

            {/* Regular features grid */}
            <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4">
              {moreItems.filter(i => !i.isSpecial).map((item, idx) => (
                <BubbleMenuItem
                  key={item.id}
                  item={item}
                  active={view === item.id}
                  onClick={() => handleItemClick(item)}
                  delay={(idx + 3) * 50}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Bottom Menu - Bubble styled */}
      <div
        className="fixed bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-[55] safe-area-bottom"
      >
        <div
          className="flex items-center justify-center gap-2 sm:gap-4 rounded-full px-4 sm:px-6 py-3 shadow-2xl border backdrop-blur-xl"
          style={{
            background: darkMode
              ? 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))'
              : 'linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(241, 245, 249, 0.95))',
            borderColor: darkMode ? 'rgba(100, 116, 139, 0.25)' : 'rgba(203, 213, 225, 0.5)',
            boxShadow: `
              0 20px 40px -10px rgba(0, 0, 0, 0.3),
              0 0 30px rgba(139, 92, 246, 0.1),
              inset 0 1px 0 ${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)'}
            `,
          }}
        >
          {mainItems.map((item, idx) => {
            const Icon = item.icon || Icons.Star;
            const active = item.isMore ? showMore : view === item.id;
            const gradient = item.id === 'surahs' ? ['#10b981', '#14b8a6']
              : item.id === 'talk' ? ['#A855F7', '#EC4899']
              : ['#f59e0b', '#eab308'];

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.isMore) {
                    setShowMore(!showMore);
                  } else if (item.isTalk && onTalkToQuran) {
                    onTalkToQuran();
                  } else {
                    setView(item.id);
                  }
                }}
                className="relative flex flex-col items-center gap-1 transition-all duration-300"
              >
                {/* Bubble */}
                <div
                  className="relative transition-all duration-300"
                  style={{
                    width: 48,
                    height: 48,
                    transform: `scale(${active ? 1.15 : 1})`,
                  }}
                >
                  {/* Outer glow */}
                  <div
                    className="absolute rounded-full pointer-events-none transition-all duration-500"
                    style={{
                      inset: '-15%',
                      background: `radial-gradient(circle at 50% 50%, ${gradient[0]}50 0%, transparent 70%)`,
                      opacity: active ? 1 : 0,
                      filter: 'blur(8px)',
                    }}
                  />

                  {/* Main bubble */}
                  <div
                    className="absolute inset-0 rounded-full overflow-hidden transition-all duration-300"
                    style={{
                      background: active
                        ? `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`
                        : darkMode ? 'rgba(71, 85, 105, 0.4)' : 'rgba(148, 163, 184, 0.3)',
                      boxShadow: active
                        ? `0 0 20px ${gradient[0]}50, 0 6px 20px rgba(0,0,0,0.3), inset 0 -10px 20px ${gradient[1]}40, inset 0 10px 20px rgba(255,255,255,0.25)`
                        : `0 4px 10px rgba(0,0,0,0.1), inset 0 -6px 12px rgba(0,0,0,0.1), inset 0 6px 12px rgba(255,255,255,0.1)`,
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
                        opacity: active ? 1 : 0.5,
                      }}
                    />

                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: active ? '#fff' : darkMode ? '#94a3b8' : '#64748b' }}
                      />
                    </div>
                  </div>

                  {/* Badge for More button */}
                  {item.id === 'more' && (
                    <span
                      className="absolute -top-1 -right-1 w-5 h-5 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg z-10"
                      style={{
                        background: 'linear-gradient(135deg, #ec4899, #f43f5e)',
                        boxShadow: '0 2px 8px rgba(236, 72, 153, 0.5)',
                      }}
                    >
                      {moreItems.length}
                    </span>
                  )}
                </div>

                {/* Label */}
                <span
                  className="text-[10px] font-semibold transition-colors duration-300"
                  style={{ color: active ? gradient[0] : darkMode ? '#94a3b8' : '#64748b' }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animations - breathe and spinSlow are defined in index.css */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }
        @keyframes bubblePopIn {
          0% { opacity: 0; transform: scale(0); }
          70% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </nav>
  );
}

export default FloatingMenu;
