/**
 * FloatingMenu Component - Enhanced Version
 * Single Responsibility: Bottom navigation menu with bubble aesthetic
 */

import { useState, useEffect, useRef } from 'react';
import { Icons } from '../common/Icons';
import { useIsMobile } from '../../hooks';
import { useTranslation } from '../../contexts/LocaleContext';
import { useAuth } from '../../contexts/AuthContext';

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
  const bubbleSize = isMobile ? 38 : 48;

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
        {/* Outer glow - reduced animation */}
        <div
          className="absolute rounded-full pointer-events-none transition-all duration-300"
          style={{
            inset: '-15%',
            background: `radial-gradient(circle at 50% 50%, ${item.gradient[0]}50 0%, transparent 70%)`,
            opacity: active || isHovered ? 0.8 : 0,
            filter: 'blur(8px)',
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
        className="text-[9px] sm:text-[10px] font-semibold whitespace-nowrap transition-all duration-300 text-center leading-tight"
        style={{
          color: active ? item.gradient[0] : darkMode ? '#94a3b8' : '#64748b',
          textShadow: active ? `0 0 10px ${item.gradient[0]}50` : 'none',
          maxWidth: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {item.label}
      </span>
    </button>
  );
};

function FloatingMenu({ view, setView, darkMode, onDonate, onMindMap, onMood, onVideoSync, onBabyNames, onTalkToQuran, onProgress, onOpenKidsMode, onAIGuide, onSoundHealing, onSearch, onHifz, onOffline, onFAQ }) {
  const [showMore, setShowMore] = useState(false);
  const menuRef = useRef(null);
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();

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
    { id: 'surahs', label: t('floatingMenu.quran'), icon: Icons.Book, gradient: ['#10b981', '#059669'] },
    { id: 'kids', label: t('floatingMenu.kids'), icon: Icons.Gamepad, isKids: true, gradient: ['#a855f7', '#7c3aed'] },
    { id: 'talk', label: t('floatingMenu.talk'), icon: Icons.Mic, isTalk: true, gradient: ['#6366f1', '#4f46e5'] },
    { id: 'discussions', label: t('floatingMenu.chat', 'Chat'), icon: Icons.MessageCircle, isChat: true, gradient: ['#06B6D4', '#0891B2'] },
    { id: 'more', label: t('floatingMenu.more'), icon: Icons.Grid, isMore: true, gradient: ['#f59e0b', '#d97706'] },
  ];

  // All features available to everyone
  const moreItems = [
    // Innovative features - Top row
    { id: 'mindmap', label: t('floatingMenu.explorer'), icon: Icons.Search, gradient: ['#A855F7', '#7C3AED'], isSpecial: true },
    { id: 'babynames', label: t('floatingMenu.names'), icon: Icons.Baby, gradient: ['#F59E0B', '#EA580C'], isSpecial: true },
    { id: 'mood', label: t('floatingMenu.mood'), icon: Icons.Activity, gradient: ['#06B6D4', '#0891B2'], isSpecial: true },
    { id: 'soundhealing', label: t('floatingMenu.healing'), icon: Icons.Music, gradient: ['#EC4899', '#DB2777'], isSpecial: true },
    // Row 1: Tools (moved from sidebar)
    { id: 'search', label: t('floatingMenu.search'), icon: Icons.Search, gradient: ['#f59e0b', '#d97706'] },
    { id: 'progress', label: t('floatingMenu.progress'), icon: Icons.BarChart, gradient: ['#10b981', '#059669'] },
    { id: 'hifz', label: t('floatingMenu.memorize'), icon: Icons.Brain, gradient: ['#8b5cf6', '#6366f1'] },
    { id: 'offline', label: t('floatingMenu.offline'), icon: Icons.Download, gradient: ['#3b82f6', '#2563eb'] },
    // Row 2: Spiritual content
    { id: 'faq', label: t('floatingMenu.faq'), icon: Icons.HelpCircle, gradient: ['#06B6D4', '#0891B2'] },
    { id: 'names', label: t('floatingMenu.namesOfAllah'), icon: Icons.Sparkles, gradient: ['#8b5cf6', '#a855f7'] },
    { id: 'quiz', label: t('floatingMenu.quiz'), icon: Icons.HelpCircle, gradient: ['#ec4899', '#f43f5e'] },
    { id: 'listen', label: t('floatingMenu.listen'), icon: Icons.Headphones, gradient: ['#22c55e', '#10b981'] },
    // Row 3: Engagement & settings
    { id: 'settings', label: t('floatingMenu.settings'), icon: Icons.Settings, gradient: ['#6366f1', '#8b5cf6'] },
    { id: 'donate', label: t('floatingMenu.donate'), icon: Icons.Heart, gradient: ['#ef4444', '#f97316'], isDonate: true },
    { id: 'privacy', label: t('floatingMenu.privacy'), icon: Icons.Shield, gradient: ['#64748b', '#475569'] },
    { id: 'terms', label: t('floatingMenu.terms'), icon: Icons.FileText, gradient: ['#6b7280', '#4b5563'] },
  ];

  const handleItemClick = (item) => {
    if (item.isDonate && onDonate) {
      onDonate();
    } else if (item.id === 'mindmap' && onMindMap) {
      onMindMap();
    } else if (item.id === 'mood' && onMood) {
      onMood();
    } else if (item.id === 'aiguide' && onAIGuide) {
      onAIGuide();
    } else if (item.id === 'soundhealing' && onSoundHealing) {
      onSoundHealing();
    } else if (item.id === 'videosync' && onVideoSync) {
      onVideoSync();
    } else if (item.id === 'babynames' && onBabyNames) {
      onBabyNames();
    } else if (item.id === 'progress' && onProgress) {
      onProgress();
    } else if (item.id === 'search' && onSearch) {
      onSearch();
    } else if (item.id === 'hifz' && onHifz) {
      onHifz();
    } else if (item.id === 'offline' && onOffline) {
      onOffline();
    } else if (item.id === 'faq' && onFAQ) {
      onFAQ();
    } else if (item.id === 'listen') {
      setView('listen');
    } else {
      setView(item.id);
    }
    setShowMore(false);
  };

  // Get special features label based on mode
  const specialFeaturesLabel = t('floatingMenu.innovativeFeatures');

  return (
    <nav ref={menuRef} aria-label="Main navigation">
      {/* More Menu Popup - Bubble style grid */}
      {showMore && (
        <div
          className="fixed left-1/2 -translate-x-1/2 z-[55] w-[95vw] sm:w-auto max-w-[420px]"
          style={{ bottom: 'max(100px, calc(env(safe-area-inset-bottom, 0px) + 92px))' }}
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

            {/* Special features row */}
            {moreItems.filter(i => i.isSpecial).length > 0 && (
            <div className="relative mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-white/10">
              <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider mb-2 sm:mb-3 text-center"
                style={{ color: darkMode ? '#94a3b8' : '#64748b' }}>
                {specialFeaturesLabel}
              </p>
              <div className="flex justify-center gap-3 sm:gap-4">
                {moreItems.filter(i => i.isSpecial).map((item, idx) => (
                  <BubbleMenuItem
                    key={item.id}
                    item={item}
                    active={false}
                    onClick={() => handleItemClick(item)}
                    delay={idx * 40}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
            )}

            {/* Regular features grid - 4 columns on mobile, fits better */}
            <div className="relative grid grid-cols-4 gap-2 sm:gap-3 pb-2">
              {moreItems.filter(i => !i.isSpecial).map((item, idx) => (
                <BubbleMenuItem
                  key={item.id}
                  item={item}
                  active={view === item.id}
                  onClick={() => handleItemClick(item)}
                  delay={(idx + 8) * 40}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Bottom Menu - Bubble styled */}
      <div
        style={{
          position: 'fixed',
          bottom: 'max(16px, calc(env(safe-area-inset-bottom, 0px) + 8px))',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          WebkitTransform: 'translateX(-50%)',
        }}
      >
        <div
          className="flex items-center justify-center gap-3 sm:gap-4 rounded-full px-5 sm:px-6 py-3 shadow-2xl border backdrop-blur-xl"
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
            const active = item.isMore ? showMore : item.isChat ? view === 'discussions' : view === item.id;
            const gradient = item.id === 'surahs' ? ['#10b981', '#14b8a6']
              : item.id === 'kids' ? ['#EC4899', '#8B5CF6']
              : item.id === 'talk' ? ['#A855F7', '#EC4899']
              : item.isChat ? ['#06B6D4', '#0891B2']
              : ['#f59e0b', '#eab308'];

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.isMore) {
                    setShowMore(!showMore);
                  } else if (item.isKids) {
                    // Navigate to /kids path for proper URL routing
                    setView('kids');
                  } else if (item.isTalk && onTalkToQuran) {
                    onTalkToQuran();
                  } else if (item.isChat) {
                    setView('discussions');
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
                    /* Animation removed for performance */
                  }}
                >
                  {/* Outer glow */}
                  <div
                    className="absolute rounded-full pointer-events-none transition-all duration-500"
                    style={{
                      inset: '-15%',
                      background: `radial-gradient(circle at 50% 50%, ${gradient[0]}50 0%, transparent 70%)`,
                      opacity: active || item.isKids ? 1 : 0,
                      filter: 'blur(8px)',
                    }}
                  />

                  {/* Main bubble */}
                  <div
                    className="absolute inset-0 rounded-full overflow-hidden transition-all duration-300"
                    style={{
                      background: (active || item.isKids)
                        ? `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`
                        : darkMode ? 'rgba(71, 85, 105, 0.4)' : 'rgba(148, 163, 184, 0.3)',
                      boxShadow: (active || item.isKids)
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
                        opacity: (active || item.isKids) ? 1 : 0.5,
                      }}
                    />

                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: (active || item.isKids) ? '#fff' : darkMode ? '#94a3b8' : '#64748b' }}
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
                  {/* Green dot for Chat button when logged in */}
                  {item.isChat && isAuthenticated && (
                    <span
                      className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full z-10 animate-pulse"
                      style={{
                        background: 'linear-gradient(135deg, #22c55e, #10b981)',
                        boxShadow: '0 0 6px rgba(34, 197, 94, 0.6)',
                        border: '1.5px solid rgba(255,255,255,0.8)',
                      }}
                    />
                  )}
                </div>

                {/* Label */}
                <span
                  className="text-[10px] font-semibold transition-colors duration-300"
                  style={{ color: (active || item.isKids) ? gradient[0] : darkMode ? '#94a3b8' : '#64748b' }}
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
        @keyframes kidsBounce {
          0%, 100% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.05) translateY(-2px); }
        }
      `}</style>
    </nav>
  );
}

export default FloatingMenu;
