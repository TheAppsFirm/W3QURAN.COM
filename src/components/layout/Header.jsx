/**
 * Header Component
 * Single Responsibility: Display and handle filter controls
 */

import { useState, useEffect, useRef, memo } from 'react';
import { Icons } from '../common/Icons';
import { FAQ_TOPICS } from '../../data';

const Header = memo(function Header({ filters, setFilters, showAnalytics, setShowAnalytics }) {
  const [open, setOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showTopics, setShowTopics] = useState(false);
  const debounceTimer = useRef(null);

  // Debounced search - only update filters after 300ms of no typing
  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setFilters((prev) => ({ ...prev, search: searchQuery }));
    }, 300);
    return () => clearTimeout(debounceTimer.current);
  }, [searchQuery, setFilters]);

  const filterConfigs = [
    { id: 'rev', label: 'Revelation', icon: Icons.Clock, opts: ['All', 'Makki', 'Madani'] },
    { id: 'ayahRange', label: 'Ayahs', icon: Icons.BarChart, opts: ['All', '1-20', '21-50', '51-100', '100+'] },
    { id: 'chronOrder', label: 'Order', icon: Icons.Clock, opts: ['Default', 'Chronological', 'Reverse Chron'] },
  ];

  return (
    <header className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-2 sm:px-4 py-2 sm:py-4 shadow-2xl relative z-40">
      <div className="flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap">
        {/* Search */}
        <div className="relative">
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/15 rounded-full border border-white/25">
            <Icons.Search className="w-4 h-4 text-white/70" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-white placeholder-white/50 outline-none w-20 sm:w-32 text-xs sm:text-sm"
            />
          </div>
        </div>

        {/* Filter Dropdowns - Hidden on very small screens, shown on sm+ */}
        {filterConfigs.map((f) => (
          <div key={f.id} className="relative hidden sm:block">
            <button
              onClick={() => setOpen(open === f.id ? null : f.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-white font-medium transition-all backdrop-blur-sm border shadow-lg text-xs sm:text-sm ${
                (f.id === 'rev' && filters.type) ||
                (f.id === 'ayahRange' && filters.ayahRange) ||
                (f.id === 'chronOrder' && filters.chronOrder)
                  ? 'bg-white/30 border-white/50'
                  : 'bg-white/15 hover:bg-white/25 border-white/25'
              }`}
            >
              <f.icon className="w-4 h-4" />
              <span className="text-sm">{f.label}</span>
              <Icons.ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open === f.id ? 'rotate-180' : ''}`} />
            </button>
            {open === f.id && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl py-2 min-w-[160px] z-50 border border-white/50">
                {f.opts.map((o) => (
                  <button
                    key={o}
                    onClick={() => {
                      if (f.id === 'rev') setFilters({ ...filters, type: o === 'All' ? null : o });
                      if (f.id === 'ayahRange') setFilters({ ...filters, ayahRange: o === 'All' ? null : o });
                      if (f.id === 'chronOrder') setFilters({ ...filters, chronOrder: o === 'Default' ? null : o });
                      setOpen(null);
                    }}
                    className={`w-full px-5 py-3 text-left hover:bg-purple-50 text-gray-700 font-medium transition-colors flex items-center gap-2 ${
                      (f.id === 'rev' && filters.type === o) ||
                      (f.id === 'ayahRange' && filters.ayahRange === o) ||
                      (f.id === 'chronOrder' && filters.chronOrder === o)
                        ? 'bg-purple-100 text-purple-700'
                        : ''
                    }`}
                  >
                    {((f.id === 'rev' && filters.type === o) ||
                      (f.id === 'ayahRange' && filters.ayahRange === o) ||
                      (f.id === 'chronOrder' && filters.chronOrder === o)) && <Icons.Check className="w-4 h-4" />}
                    {o}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Topics/FAQ Button */}
        <button
          onClick={() => setShowTopics(!showTopics)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium transition-all backdrop-blur-sm border shadow-lg ${
            filters.topic ? 'bg-white/30 border-white/50' : 'bg-white/15 hover:bg-white/25 border-white/25'
          }`}
        >
          <Icons.Tag className="w-4 h-4" />
          <span className="text-sm">Topics</span>
        </button>

        {/* Analytics Toggle */}
        <button
          onClick={() => setShowAnalytics(!showAnalytics)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium transition-all backdrop-blur-sm border shadow-lg ${
            showAnalytics ? 'bg-white/30 border-white/50' : 'bg-white/15 hover:bg-white/25 border-white/25'
          }`}
        >
          <Icons.BarChart className="w-4 h-4" />
          <span className="text-sm">Analytics</span>
        </button>
      </div>

      {/* Topic Tags Panel */}
      {showTopics && (
        <div className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <div className="flex flex-wrap gap-2 justify-center">
            {FAQ_TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => {
                  setFilters({ ...filters, topic: filters.topic === topic.id ? null : topic.id });
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filters.topic === topic.id
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span className="mr-1">{topic.icon}</span>
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
});

export default Header;
