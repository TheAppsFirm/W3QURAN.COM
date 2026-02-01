/**
 * Ayah Connection Map - Visual Quran Explorer
 * Shows how verses connect across the entire Quran
 * Features:
 * - Interactive bubble visualization
 * - Theme-based connections
 * - Story threads across surahs
 * - Click to explore related verses
 */

import { useState, useEffect, useCallback, memo, useMemo, useRef } from 'react';
import { Icons } from './Icons';
import { SURAHS } from '../../data';
import {
  QURAN_THEMES,
  QURAN_STORIES,
  CONNECTION_TYPES,
  getVerseConnections,
  getAllThemes,
  getAllStories,
} from '../../data/ayahConnections';

// Connection Line Component
const ConnectionLine = memo(function ConnectionLine({ from, to, color, animated }) {
  return (
    <svg className="absolute inset-0 pointer-events-none overflow-visible" style={{ zIndex: 5 }}>
      <defs>
        <linearGradient id={`gradient-${from.x}-${to.x}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <line
        x1={from.x}
        y1={from.y}
        x2={to.x}
        y2={to.y}
        stroke={`url(#gradient-${from.x}-${to.x})`}
        strokeWidth="2"
        strokeDasharray={animated ? "5,5" : "none"}
        className={animated ? "animate-dash" : ""}
      />
    </svg>
  );
});

// Verse Bubble Component
const VerseBubble = memo(function VerseBubble({
  surah, ayah, x, y, size = 'medium', color, isActive, onClick, label
}) {
  const sizes = {
    small: 'w-10 h-10 text-xs',
    medium: 'w-14 h-14 text-sm',
    large: 'w-20 h-20 text-base',
    xlarge: 'w-28 h-28 text-lg',
  };

  const surahData = SURAHS.find(s => s.id === surah);

  return (
    <button
      onClick={onClick}
      className={`absolute rounded-full flex flex-col items-center justify-center transition-all duration-300 ${sizes[size]} ${
        isActive
          ? 'scale-110 ring-4 ring-white/50 z-20'
          : 'hover:scale-105 z-10'
      }`}
      style={{
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
        background: `linear-gradient(135deg, ${color}dd, ${color}88)`,
        boxShadow: isActive
          ? `0 0 30px ${color}80, 0 10px 30px rgba(0,0,0,0.3)`
          : `0 5px 20px ${color}40`,
      }}
    >
      <span className="font-bold text-white">{surah}:{ayah}</span>
      {label && <span className="text-white/70 text-[8px] mt-0.5 max-w-full truncate px-1">{label}</span>}
    </button>
  );
});

// Theme Explorer Component
const ThemeExplorer = memo(function ThemeExplorer({ theme, onSelectVerse, onClose }) {
  const Icon = Icons[theme.icon] || Icons.Star;

  return (
    <div className="bg-black/40 rounded-2xl p-4 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${theme.color}30` }}
          >
            <Icon className="w-6 h-6" style={{ color: theme.color }} />
          </div>
          <div>
            <h3 className="text-white font-bold">{theme.name}</h3>
            <p className="text-white/60 text-sm" dir="rtl">{theme.nameAr}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
          <Icons.X className="w-4 h-4 text-white/60" />
        </button>
      </div>

      <p className="text-white/70 text-sm mb-4">{theme.description}</p>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {theme.verses.map((verse, i) => {
          const surah = SURAHS.find(s => s.id === verse.surah);
          return (
            <button
              key={`${verse.surah}-${verse.ayah}`}
              onClick={() => onSelectVerse(verse.surah, verse.ayah)}
              className="w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all flex items-center gap-3 text-left"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${theme.color}30` }}
              >
                <span className="text-white text-sm font-bold">{verse.surah}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium">{surah?.name || `Surah ${verse.surah}`}</p>
                <p className="text-white/60 text-sm">Verse {verse.ayah}</p>
              </div>
              <Icons.ChevronRight className="w-4 h-4 text-white/40" />
            </button>
          );
        })}
      </div>
    </div>
  );
});

// Story Explorer Component
const StoryExplorer = memo(function StoryExplorer({ story, onSelectVerse, onClose }) {
  const Icon = Icons[story.icon] || Icons.Book;

  return (
    <div className="bg-black/40 rounded-2xl p-4 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${story.color}30` }}
          >
            <Icon className="w-6 h-6" style={{ color: story.color }} />
          </div>
          <div>
            <h3 className="text-white font-bold">{story.name}</h3>
            <p className="text-white/60 text-sm" dir="rtl">{story.nameAr}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
          <Icons.X className="w-4 h-4 text-white/60" />
        </button>
      </div>

      <p className="text-white/70 text-sm mb-4">{story.description}</p>

      <div className="space-y-2 max-h-60 overflow-y-auto">
        {story.chapters.map((chapter, i) => {
          const surah = SURAHS.find(s => s.id === chapter.surah);
          return (
            <button
              key={chapter.surah}
              onClick={() => onSelectVerse(chapter.surah, chapter.ayahs[0])}
              className="w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all flex items-center gap-3 text-left"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${story.color}30` }}
              >
                <span className="text-white text-sm font-bold">{chapter.surah}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium">{surah?.name || `Surah ${chapter.surah}`}</p>
                <p className="text-white/60 text-sm">
                  Verses {chapter.ayahs[0]} - {chapter.ayahs[chapter.ayahs.length - 1]}
                </p>
              </div>
              <div className="text-white/40 text-xs">{chapter.ayahs.length} verses</div>
            </button>
          );
        })}
      </div>
    </div>
  );
});

// Main Ayah Connection Map Component
const AyahConnectionMap = memo(function AyahConnectionMap({
  isVisible,
  onClose,
  initialSurah = null,
  initialAyah = null,
  onNavigateToVerse,
}) {
  const [activeTab, setActiveTab] = useState('themes'); // themes, stories, explore
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedVerse, setSelectedVerse] = useState(
    initialSurah && initialAyah ? { surah: initialSurah, ayah: initialAyah } : null
  );
  const [verseConnections, setVerseConnections] = useState(null);
  const containerRef = useRef(null);

  const themes = useMemo(() => getAllThemes(), []);
  const stories = useMemo(() => getAllStories(), []);

  // Get connections when verse is selected
  useEffect(() => {
    if (selectedVerse) {
      const connections = getVerseConnections(selectedVerse.surah, selectedVerse.ayah);
      setVerseConnections(connections);
    } else {
      setVerseConnections(null);
    }
  }, [selectedVerse]);

  const handleSelectTheme = useCallback((theme) => {
    setSelectedTheme(theme);
    setSelectedStory(null);
    setSelectedVerse(null);
  }, []);

  const handleSelectStory = useCallback((story) => {
    setSelectedStory(story);
    setSelectedTheme(null);
    setSelectedVerse(null);
  }, []);

  const handleSelectVerse = useCallback((surah, ayah) => {
    setSelectedVerse({ surah, ayah });
    setSelectedTheme(null);
    setSelectedStory(null);
  }, []);

  const handleNavigateToVerse = useCallback((surah, ayah) => {
    if (onNavigateToVerse) {
      onNavigateToVerse(surah, ayah);
      onClose();
    }
  }, [onNavigateToVerse, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

      <div
        ref={containerRef}
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Icons.Network className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Ayah Connection Map</h2>
                <p className="text-white/60 text-sm">Explore how verses connect across the Quran</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-all"
            >
              <Icons.X className="w-6 h-6 text-white/70" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-4">
            {[
              { id: 'themes', label: 'Themes', icon: Icons.Layers, count: themes.length },
              { id: 'stories', label: 'Stories', icon: Icons.Book, count: stories.length },
              { id: 'explore', label: 'Explore Verse', icon: Icons.Search },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSelectedTheme(null);
                    setSelectedStory(null);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-purple-500/30 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  {tab.count && (
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{tab.count}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Themes Tab */}
          {activeTab === 'themes' && !selectedTheme && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {themes.map((theme) => {
                const Icon = Icons[theme.icon] || Icons.Star;
                return (
                  <button
                    key={theme.id}
                    onClick={() => handleSelectTheme(theme)}
                    className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${theme.color}30` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: theme.color }} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{theme.name}</h3>
                        <p className="text-white/60 text-sm" dir="rtl">{theme.nameAr}</p>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm line-clamp-2">{theme.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-white/40 text-xs">{theme.verses.length} verses</span>
                      <Icons.ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Selected Theme */}
          {activeTab === 'themes' && selectedTheme && (
            <ThemeExplorer
              theme={selectedTheme}
              onSelectVerse={handleNavigateToVerse}
              onClose={() => setSelectedTheme(null)}
            />
          )}

          {/* Stories Tab */}
          {activeTab === 'stories' && !selectedStory && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stories.map((story) => {
                const Icon = Icons[story.icon] || Icons.Book;
                const totalVerses = story.chapters.reduce((sum, ch) => sum + ch.ayahs.length, 0);
                return (
                  <button
                    key={story.id}
                    onClick={() => handleSelectStory(story)}
                    className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${story.color}30` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: story.color }} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">{story.name}</h3>
                        <p className="text-white/60 text-sm" dir="rtl">{story.nameAr}</p>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm">{story.description}</p>
                    <div className="mt-3 flex items-center gap-4">
                      <span className="text-white/40 text-xs flex items-center gap-1">
                        <Icons.Layers className="w-3 h-3" />
                        {story.chapters.length} surahs
                      </span>
                      <span className="text-white/40 text-xs flex items-center gap-1">
                        <Icons.BookOpen className="w-3 h-3" />
                        {totalVerses} verses
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Selected Story */}
          {activeTab === 'stories' && selectedStory && (
            <StoryExplorer
              story={selectedStory}
              onSelectVerse={handleNavigateToVerse}
              onClose={() => setSelectedStory(null)}
            />
          )}

          {/* Explore Tab - Search/Browse */}
          {activeTab === 'explore' && (
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                  <Icons.Search className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Explore Any Verse</h3>
                <p className="text-white/60 text-sm max-w-md mx-auto">
                  Click on any verse while reading to discover its connections to other parts of the Quran.
                </p>
              </div>

              {/* Quick Links to Popular Verses */}
              <div>
                <h4 className="text-white/60 text-sm font-medium mb-3">Popular Connected Verses</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { surah: 2, ayah: 255, name: 'Ayatul Kursi' },
                    { surah: 36, ayah: 1, name: 'Ya-Sin Beginning' },
                    { surah: 55, ayah: 1, name: 'Ar-Rahman' },
                    { surah: 112, ayah: 1, name: 'Al-Ikhlas' },
                    { surah: 1, ayah: 1, name: 'Al-Fatiha' },
                    { surah: 67, ayah: 1, name: 'Al-Mulk' },
                  ].map((verse) => (
                    <button
                      key={`${verse.surah}-${verse.ayah}`}
                      onClick={() => handleNavigateToVerse(verse.surah, verse.ayah)}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-left"
                    >
                      <p className="text-white font-medium">{verse.name}</p>
                      <p className="text-white/60 text-sm">Surah {verse.surah}:{verse.ayah}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Connection Type Legend */}
        <div className="flex-shrink-0 p-4 border-t border-white/10 bg-black/20">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {Object.entries(CONNECTION_TYPES).map(([key, type]) => (
              <div key={key} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: type.color }}
                />
                <span className="text-white/60 text-xs">{type.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
        .animate-dash {
          animation: dash 0.5s linear infinite;
        }
      `}</style>
    </div>
  );
});

export default AyahConnectionMap;
