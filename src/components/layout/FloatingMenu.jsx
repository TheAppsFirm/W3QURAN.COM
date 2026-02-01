/**
 * FloatingMenu Component - Enhanced Version
 * Single Responsibility: Bottom navigation menu with bubble aesthetic
 */

import { useState, useEffect, useRef } from 'react';
import { Icons } from '../common/Icons';

function FloatingMenu({ view, setView, darkMode, onDonate }) {
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
    { id: 'surahs', label: 'Surahs', icon: Icons.Book },
    { id: 'more', label: 'More', icon: Icons.Layers, isMore: true },
  ];

  const moreItems = [
    { id: 'daily', label: 'Daily Verse', icon: Icons.Sun, gradient: ['#f59e0b', '#eab308'] },
    { id: 'names', label: '99 Names', icon: Icons.Sparkles, gradient: ['#8b5cf6', '#a855f7'] },
    { id: 'quiz', label: 'Quiz', icon: Icons.HelpCircle, gradient: ['#ec4899', '#f43f5e'] },
    { id: 'prayer', label: 'Prayer', icon: Icons.Clock, gradient: ['#06b6d4', '#0ea5e9'] },
    { id: 'stats', label: 'Stats', icon: Icons.PieChart, gradient: ['#10b981', '#14b8a6'] },
    { id: 'donate', label: 'Donate', icon: Icons.Heart, gradient: ['#ef4444', '#f97316'], isDonate: true },
    { id: 'settings', label: 'Settings', icon: Icons.Settings, gradient: ['#6366f1', '#8b5cf6'] },
  ];

  return (
    <nav ref={menuRef} aria-label="Main navigation">
      {/* More Menu Popup - Enhanced bubble style */}
      {showMore && (
        <div
          className="fixed left-1/2 -translate-x-1/2 z-[55]"
          style={{ bottom: '90px' }}
        >
          <div
            className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-3 rounded-2xl shadow-2xl backdrop-blur-xl border"
            style={{
              background: darkMode ? 'rgba(30, 41, 59, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              borderColor: darkMode ? 'rgba(100, 116, 139, 0.3)' : 'rgba(203, 213, 225, 0.6)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(99, 102, 241, 0.15)',
              animation: 'slideUp 0.25s ease-out',
            }}
          >
            {moreItems.map((i, idx) => {
              const Icon = i.icon;
              const active = view === i.id;
              return (
                <button
                  key={i.id}
                  onClick={() => {
                    if (i.isDonate && onDonate) {
                      onDonate();
                    } else {
                      setView(i.id);
                    }
                    setShowMore(false);
                  }}
                  className="flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl transition-all hover:scale-105 active:scale-95"
                  style={{
                    background: active
                      ? `linear-gradient(135deg, ${i.gradient[0]}, ${i.gradient[1]})`
                      : darkMode ? 'rgba(71, 85, 105, 0.3)' : 'rgba(241, 245, 249, 0.8)',
                    color: active ? '#fff' : darkMode ? '#94a3b8' : '#64748b',
                    boxShadow: active ? `0 4px 15px ${i.gradient[0]}50` : 'none',
                    animation: `fadeIn 0.2s ease-out ${idx * 0.03}s both`,
                  }}
                  aria-label={`Go to ${i.label}`}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">{i.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Bottom Menu - Bubble styled */}
      <div
        className="fixed bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-[55] safe-area-bottom w-[92%] sm:w-auto max-w-md"
      >
        <div
          className="flex items-center justify-around sm:justify-center gap-0 sm:gap-1 rounded-2xl px-1.5 sm:px-3 py-2 sm:py-2.5 shadow-2xl border backdrop-blur-xl"
          style={{
            background: darkMode
              ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98))'
              : 'linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(241, 245, 249, 0.95))',
            borderColor: darkMode ? 'rgba(100, 116, 139, 0.25)' : 'rgba(203, 213, 225, 0.5)',
            boxShadow: `
              0 20px 40px -10px rgba(0, 0, 0, 0.25),
              0 0 20px rgba(99, 102, 241, 0.1),
              inset 0 1px 0 ${darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.8)'}
            `,
          }}
        >
          {mainItems.map((i) => {
            const Icon = i.icon;
            const active = i.isMore ? showMore : view === i.id;
            return (
              <button
                key={i.id}
                onClick={() => (i.isMore ? setShowMore(!showMore) : setView(i.id))}
                className="relative flex flex-col items-center gap-0.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-300 touch-target"
                style={{
                  background: active
                    ? 'linear-gradient(135deg, #10b981, #14b8a6)'
                    : 'transparent',
                  color: active ? '#fff' : darkMode ? '#94a3b8' : '#64748b',
                  boxShadow: active ? '0 4px 15px rgba(16, 185, 129, 0.4)' : 'none',
                  transform: active ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] sm:text-xs font-semibold">{i.label}</span>
                {i.id === 'more' && (
                  <span
                    className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
                      boxShadow: '0 2px 8px rgba(139, 92, 246, 0.5)',
                    }}
                  >
                    {moreItems.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </nav>
  );
}

export default FloatingMenu;
