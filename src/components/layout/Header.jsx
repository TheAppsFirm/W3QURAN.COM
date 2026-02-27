/**
 * Header Component
 * Beautiful animated header with glass morphism and floating elements
 */

import { useState, useEffect, useRef, memo } from 'react';
import { Icons } from '../common/Icons';
import { FusionLogo, FusionLogoWithText } from '../common/Logo';
import { FAQ_TOPICS } from '../../data';
import { useAuth } from '../../contexts/AuthContext';
import { useLocale } from '../../contexts/LocaleContext';
import { LoginButton, UserMenu } from '../auth';

const Header = memo(function Header({ filters, setFilters, showAnalytics, setShowAnalytics, onSettingsClick, onAdminClick }) {
  const [open, setOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showTopics, setShowTopics] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const [showLangMenu, setShowLangMenu] = useState(false);
  const debounceTimer = useRef(null);
  const buttonRefs = useRef({});
  const { user, loading: authLoading } = useAuth();
  const { language, setLanguage, supportedLanguages, t, isRTL } = useLocale();

  // Debounced search
  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setFilters((prev) => ({ ...prev, search: searchQuery }));
    }, 300);
    return () => clearTimeout(debounceTimer.current);
  }, [searchQuery, setFilters]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = () => { setOpen(null); setShowLangMenu(false); };
    if (open || showLangMenu) {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [open, showLangMenu]);

  // Update dropdown position when opened
  useEffect(() => {
    if (open && buttonRefs.current[open]) {
      const rect = buttonRefs.current[open].getBoundingClientRect();
      setDropdownPos({ top: rect.bottom + 8, left: rect.left + rect.width / 2 });
    }
  }, [open]);

  const filterConfigs = [
    { id: 'rev', label: t('header.revelation'), icon: Icons.Book, opts: [
      { value: 'All', label: t('header.all') },
      { value: 'Makki', label: t('reader.makki') },
      { value: 'Madani', label: t('reader.madani') },
    ]},
    { id: 'ayahRange', label: t('header.verses'), icon: Icons.BarChart, opts: [
      { value: 'All', label: t('header.all') },
      { value: '1-20', label: '1-20' },
      { value: '21-50', label: '21-50' },
      { value: '51-100', label: '51-100' },
      { value: '100+', label: '100+' },
    ]},
    { id: 'chronOrder', label: t('header.order'), icon: Icons.Clock, opts: [
      { value: 'Default', label: t('header.default') },
      { value: 'Chronological', label: t('header.chronological') },
      { value: 'Reverse Chron', label: t('header.reverseChron') },
    ]},
  ];

  const hasActiveFilters = filters.type || filters.ayahRange || filters.chronOrder || filters.topic;

  return (
    <header className="relative" style={{ zIndex: 200 }}>
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #6B8DD6 50%, #8E37D7 75%, #667eea 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: 60 + i * 20,
              height: 60 + i * 20,
              background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
              left: `${10 + i * 20}%`,
              top: `${-20 + (i % 2) * 40}%`,
              animation: `floatOrb ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite',
        }}
      />

      {/* Content - with safe area padding for notched devices */}
      <div className="relative px-3 sm:px-6 py-3 sm:py-4" style={{ paddingTop: 'max(env(safe-area-inset-top, 0px), 12px)' }}>
        {/* Main Row */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">

          {/* App Logo - Click to reload — Mobile: Icon only, Desktop: Icon + Text */}
          {/* Mobile Logo (Icon only) */}
          <div className="flex lg:hidden items-center mr-2 cursor-pointer" onClick={() => { window.location.href = '/'; }}>
            <FusionLogo size={40} variant="gateway" animated={true} />
          </div>
          {/* Desktop Logo (Icon + Text) */}
          <div className="hidden lg:flex items-center mr-4 cursor-pointer" onClick={() => { window.location.href = '/'; }}>
            <FusionLogoWithText size={48} variant="gateway" textColor="white" />
          </div>

          {/* Search - Enhanced */}
          <div className="relative group">
            <div
              className={`flex items-center gap-2 px-4 h-10 rounded-2xl transition-all duration-300 border ${
                isSearchFocused
                  ? 'bg-white/25 border-white/50 shadow-lg shadow-white/20 scale-105'
                  : 'bg-white/15 border-white/25 hover:bg-white/20'
              }`}
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <Icons.Search className={`w-4 h-4 transition-all duration-300 ${isSearchFocused ? 'text-white scale-110' : 'text-white/70'}`} />
              <input
                type="text"
                placeholder={t('header.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="bg-transparent text-white placeholder-white/50 outline-none w-24 sm:w-36 text-sm font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Icons.X className="w-3 h-3 text-white/70" />
                </button>
              )}
            </div>
            {/* Search glow effect */}
            {isSearchFocused && (
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl blur opacity-30 -z-10 animate-pulse" />
            )}
          </div>

          {/* Filter Pills - Hidden on mobile, shown on tablet+ */}
          {filterConfigs.map((f, idx) => (
            <div key={f.id} className="relative hidden md:block" onClick={(e) => e.stopPropagation()}>
              <button
                ref={(el) => buttonRefs.current[f.id] = el}
                onClick={() => setOpen(open === f.id ? null : f.id)}
                className={`group flex items-center justify-center gap-2 px-4 h-10 rounded-2xl text-white font-medium transition-all duration-300 border ${
                  (f.id === 'rev' && filters.type) ||
                  (f.id === 'ayahRange' && filters.ayahRange) ||
                  (f.id === 'chronOrder' && filters.chronOrder)
                    ? 'bg-white/30 border-white/50 shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40'
                }`}
                style={{
                  backdropFilter: 'blur(10px)',
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <f.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{f.label}</span>
                <Icons.ChevronDown className={`w-4 h-4 transition-transform duration-300 ${open === f.id ? 'rotate-180' : ''}`} />
              </button>

            </div>
          ))}

          {/* Topics Button */}
          <button
            onClick={() => setShowTopics(!showTopics)}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 h-10 rounded-2xl text-white font-medium transition-all duration-300 border ${
              filters.topic || showTopics
                ? 'bg-gradient-to-r from-amber-500/80 to-orange-500/80 border-amber-400/50 shadow-lg shadow-amber-500/30'
                : 'bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40'
            }`}
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <Icons.Tag className="w-4 h-4" />
            <span className="text-xs sm:text-sm hidden xs:inline">{t('header.topics')}</span>
            {filters.topic && (
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            )}
          </button>

          {/* Analytics Button */}
          <button
            onClick={() => setShowAnalytics(!showAnalytics)}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 h-10 rounded-2xl text-white font-medium transition-all duration-300 border ${
              showAnalytics
                ? 'bg-gradient-to-r from-emerald-500/80 to-teal-500/80 border-emerald-400/50 shadow-lg shadow-emerald-500/30'
                : 'bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40'
            }`}
            style={{ backdropFilter: 'blur(10px)' }}
          >
            <Icons.BarChart className="w-4 h-4" />
            <span className="text-xs sm:text-sm hidden sm:inline">{t('header.analytics')}</span>
          </button>

          {/* Clear Filters - Only show when filters active */}
          {hasActiveFilters && (
            <button
              onClick={() => setFilters({ type: null, ayahRange: null, chronOrder: null, topic: null, search: '' })}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-white/80 hover:text-white font-medium transition-all bg-red-500/20 hover:bg-red-500/40 border border-red-400/30"
              style={{ animation: 'fadeIn 0.3s ease-out' }}
            >
              <Icons.X className="w-3.5 h-3.5" />
              <span className="text-xs">{t('header.clear')}</span>
            </button>
          )}

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setShowLangMenu(!showLangMenu); }}
              className="flex items-center justify-center w-10 h-10 rounded-2xl text-white font-medium transition-all duration-300 border bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40"
              style={{ backdropFilter: 'blur(10px)' }}
              aria-label={t('settings.language')}
            >
              <span className="text-lg">
                {language === 'en' ? '🇺🇸' : language === 'ur' ? '🇵🇰' : '🇸🇦'}
              </span>
            </button>
            {showLangMenu && (
              <div
                className="absolute right-0 mt-2 bg-white backdrop-blur-xl rounded-2xl shadow-2xl py-2 min-w-[160px] border border-purple-100 overflow-hidden"
                style={{ zIndex: 999999, animation: 'dropdownSlide 0.2s ease-out' }}
                onClick={(e) => e.stopPropagation()}
              >
                {supportedLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setShowLangMenu(false); }}
                    className={`w-full px-4 py-3 text-left transition-all flex items-center gap-3 ${
                      language === lang.code
                        ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white'
                        : 'text-gray-700 hover:bg-purple-50'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium">{lang.nativeLabel}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Auth - Login/User Menu */}
          <div className={isRTL ? 'mr-2' : 'ml-2'}>
            {authLoading ? (
              <div className="w-8 h-8 rounded-full bg-white/20 animate-pulse" />
            ) : user ? (
              <UserMenu onSettingsClick={onSettingsClick} onAdminClick={onAdminClick} />
            ) : (
              <LoginButton compact />
            )}
          </div>
        </div>

        {/* Topic Tags Panel - Animated */}
        {showTopics && (
          <div
            className="mt-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
            style={{ animation: 'slideDown 0.3s ease-out' }}
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {FAQ_TOPICS.map((topic, i) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    setFilters({ ...filters, topic: filters.topic === topic.id ? null : topic.id });
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filters.topic === topic.id
                      ? 'bg-white text-purple-600 shadow-lg scale-105'
                      : 'bg-white/15 text-white hover:bg-white/25 hover:scale-105'
                  }`}
                  style={{
                    animationDelay: `${i * 0.03}s`,
                    animation: 'popIn 0.3s ease-out backwards',
                  }}
                >
                  <span className="mr-1.5">{topic.icon}</span>
                  {topic.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fixed Position Filter Dropdowns */}
      {filterConfigs.map((f) => (
        open === f.id && (
          <div
            key={f.id}
            className="fixed bg-white backdrop-blur-xl rounded-2xl shadow-2xl py-2 min-w-[160px] sm:min-w-[180px] border border-purple-100 overflow-hidden"
            style={{
              zIndex: 999999,
              top: dropdownPos.top,
              left: dropdownPos.left,
              transform: 'translateX(-50%)',
              animation: 'dropdownSlide 0.2s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {f.opts.map((o, i) => {
              const isActive = (f.id === 'rev' && filters.type === o.value) ||
                (f.id === 'ayahRange' && filters.ayahRange === o.value) ||
                (f.id === 'chronOrder' && filters.chronOrder === o.value);

              return (
                <button
                  key={o.value}
                  onClick={() => {
                    if (f.id === 'rev') setFilters({ ...filters, type: o.value === 'All' ? null : o.value });
                    if (f.id === 'ayahRange') setFilters({ ...filters, ayahRange: o.value === 'All' ? null : o.value });
                    if (f.id === 'chronOrder') setFilters({ ...filters, chronOrder: o.value === 'Default' ? null : o.value });
                    setOpen(null);
                  }}
                  className={`w-full px-4 py-3 text-left transition-all flex items-center gap-3 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white'
                      : 'text-gray-700 hover:bg-purple-50'
                  }`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isActive ? 'border-white bg-white' : 'border-gray-300'
                  }`}>
                    {isActive && <Icons.Check className="w-3 h-3 text-purple-600" />}
                  </div>
                  <span className="font-medium">{o.label}</span>
                </button>
              );
            })}
          </div>
        )
      ))}

      {/* CSS Animations */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes dropdownSlide {
          from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </header>
  );
});

export default Header;
