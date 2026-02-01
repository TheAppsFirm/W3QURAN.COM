/**
 * FloatingMenu Component
 * Single Responsibility: Bottom navigation menu
 */

import { useState } from 'react';
import { Icons } from '../common/Icons';

function FloatingMenu({ view, setView, darkMode }) {
  const [showMore, setShowMore] = useState(false);

  const mainItems = [
    { id: 'surahs', label: 'Surahs', icon: Icons.Book },
    { id: 'juzz', label: 'Juzz', icon: Icons.Grid },
    { id: 'listen', label: 'Listen', icon: Icons.Volume },
    { id: 'more', label: 'More', icon: Icons.Layers, isMore: true },
  ];

  const moreItems = [
    { id: 'daily', label: 'Daily Verse', icon: Icons.Sun },
    { id: 'names', label: '99 Names', icon: Icons.Sparkles },
    { id: 'quiz', label: 'Quiz', icon: Icons.HelpCircle },
    { id: 'prayer', label: 'Prayer', icon: Icons.Clock },
    { id: 'stats', label: 'Stats', icon: Icons.PieChart },
    { id: 'donate', label: 'Donate', icon: Icons.Heart },
    { id: 'settings', label: 'Settings', icon: Icons.Settings },
  ];

  return (
    <>
      {/* More Menu Popup */}
      {showMore && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50">
          <div
            className={`grid grid-cols-3 gap-2 p-3 rounded-2xl shadow-2xl backdrop-blur-xl ${
              darkMode ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200/60'
            } border`}
          >
            {moreItems.map((i) => {
              const Icon = i.icon;
              const active = view === i.id;
              return (
                <button
                  key={i.id}
                  onClick={() => {
                    setView(i.id);
                    setShowMore(false);
                  }}
                  className={`flex flex-col items-center gap-1 px-4 py-3 rounded-xl transition-all ${
                    active
                      ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg'
                      : darkMode
                        ? 'text-gray-400 hover:bg-gray-700'
                        : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-semibold">{i.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Bottom Menu - Responsive */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 safe-area-bottom w-[95%] sm:w-auto max-w-md">
        <div
          className={`flex items-center justify-around sm:justify-center gap-0 sm:gap-1 rounded-2xl px-1 sm:px-2 py-1.5 sm:py-2 shadow-2xl shadow-black/15 border backdrop-blur-xl ${
            darkMode ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200/60'
          }`}
        >
          {mainItems.map((i) => {
            const Icon = i.icon;
            const active = i.isMore ? showMore : view === i.id;
            return (
              <button
                key={i.id}
                onClick={() => (i.isMore ? setShowMore(!showMore) : setView(i.id))}
                className={`relative flex flex-col items-center gap-0.5 px-3 sm:px-5 py-2 sm:py-3 rounded-xl transition-all duration-300 touch-target ${
                  active
                    ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/40 scale-105'
                    : darkMode
                      ? 'text-gray-400 hover:text-gray-200 active:bg-gray-700'
                      : 'text-gray-500 hover:text-gray-700 active:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] sm:text-xs font-semibold">{i.label}</span>
                {i.id === 'more' && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-violet-500 to-purple-500 text-white text-[10px] sm:text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                    {moreItems.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FloatingMenu;
