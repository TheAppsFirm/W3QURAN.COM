/**
 * Main App Component
 *
 * Follows SOLID Principles:
 * - Single Responsibility: Orchestrates the app flow
 * - Open/Closed: Easy to add new views without modification
 * - Liskov Substitution: Views can be swapped
 * - Interface Segregation: Uses specific hooks for specific features
 * - Dependency Inversion: Depends on abstractions (context, hooks)
 */

import { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { ErrorBoundary, LoadingSpinner, Modal } from './components/common';
import { Header, FloatingMenu, ZoomSlider, StatsBar } from './components/layout';
import { SurahBubble, JuzzBubble } from './components/bubbles';
import { AnalyticsPanel } from './components/widgets';
import {
  QuranReaderView,
  NamesOfAllahView,
  QuizView,
  SettingsView,
  DailyVerseView,
  StatisticsView,
  ListenView,
  DonateView,
  PrayerTimesView,
} from './components/views';
import { SURAHS, JUZZ, MAX_AYAHS } from './data';
import { useLocalStorage } from './hooks';

// CSS Animations - Inline styles for bubble animations
const AnimationStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Scheherazade+New:wght@400;700&display=swap');

    @keyframes floatBubble {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      25% { transform: translateY(-8px) rotate(1deg); }
      50% { transform: translateY(-15px) rotate(0deg); }
      75% { transform: translateY(-8px) rotate(-1deg); }
    }

    @keyframes breathe {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.08); opacity: 1; }
    }

    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes shimmerWave {
      0% { transform: translateX(-100%) rotate(25deg); }
      100% { transform: translateX(200%) rotate(25deg); }
    }

    @keyframes floatParticle {
      0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
      50% { transform: translateY(-12px) scale(1.3); opacity: 0.7; }
    }

    @keyframes colorShift {
      0%, 100% { filter: hue-rotate(0deg); }
      50% { filter: hue-rotate(30deg); }
    }

    .touch-target {
      min-width: 44px;
      min-height: 44px;
    }

    .safe-area-bottom {
      padding-bottom: env(safe-area-inset-bottom);
    }
  `}</style>
);

/**
 * Main App Inner Component
 */
function QuranBubbleAppInner() {
  // State management using custom hooks for persistence
  const [view, setView] = useState('surahs');
  const [level, setLevel] = useLocalStorage('level', 'starter');
  const [points, setPoints] = useLocalStorage('points', 170);
  const [streak, setStreak] = useLocalStorage('streak', 3);
  const [badges] = useLocalStorage('badges', 2);
  const [selected, setSelected] = useState(null);
  const [filters, setFilters] = useState({
    type: null,
    ayahRange: null,
    chronOrder: null,
    topic: null,
    search: '',
  });
  const [zoom, setZoom] = useLocalStorage('zoom', 1);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', {});
  const [readingProgress, setReadingProgress] = useLocalStorage('readingProgress', {});
  const [readerSurah, setReaderSurah] = useState(null);

  // Memoized filtered surahs
  const filtered = useMemo(() => {
    let r = [...SURAHS];

    // Search filter
    if (filters.search) {
      const q = filters.search.toLowerCase();
      r = r.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.arabic.includes(q) ||
          s.meaning?.toLowerCase().includes(q)
      );
    }

    // Type filter (Makki/Madani)
    if (filters.type) r = r.filter((s) => s.type === filters.type);

    // Ayah range filter
    if (filters.ayahRange) {
      if (filters.ayahRange === '1-20') r = r.filter((s) => s.ayahs >= 1 && s.ayahs <= 20);
      if (filters.ayahRange === '21-50') r = r.filter((s) => s.ayahs >= 21 && s.ayahs <= 50);
      if (filters.ayahRange === '51-100') r = r.filter((s) => s.ayahs >= 51 && s.ayahs <= 100);
      if (filters.ayahRange === '100+') r = r.filter((s) => s.ayahs > 100);
    }

    // Topic filter
    if (filters.topic) {
      r = r.filter((s) => s.topics?.includes(filters.topic));
    }

    // Chronological order
    if (filters.chronOrder === 'Chronological') {
      r = r.sort((a, b) => a.chronOrder - b.chronOrder);
    } else if (filters.chronOrder === 'Reverse Chron') {
      r = r.sort((a, b) => b.chronOrder - a.chronOrder);
    }

    return r;
  }, [filters]);

  // Memoized callbacks to prevent child re-renders
  const handleSelectSurah = useCallback((surah) => {
    setSelected(surah);
  }, []);

  const handleReadSurah = useCallback((surah) => {
    setReaderSurah(surah);
    setSelected(null);
    setPoints((p) => p + 10);
    // Update reading progress
    setReadingProgress((prev) => ({
      ...prev,
      [surah.id]: { lastRead: Date.now(), ayahsRead: (prev[surah.id]?.ayahsRead || 0) + 1 },
    }));
  }, [setPoints, setReadingProgress]);

  const handleUpgrade = useCallback(() => setLevel('pro'), [setLevel]);

  const handleEarnPoints = useCallback((pts) => setPoints((p) => p + pts), [setPoints]);

  const clearFilters = useCallback(() => {
    setFilters({ type: null, ayahRange: null, chronOrder: null, topic: null, search: '' });
  }, []);

  // If reader is open, show full screen reader
  if (readerSurah) {
    return (
      <QuranReaderView
        surah={readerSurah}
        onBack={() => setReaderSurah(null)}
        darkMode={darkMode}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
      />
    );
  }

  return (
    <div
      className={`h-screen flex flex-col overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-gray-900' : ''}`}
      style={
        darkMode
          ? {}
          : {
              background:
                'linear-gradient(135deg, #f0fdfa 0%, #ecfeff 25%, #f0f9ff 50%, #eff6ff 75%, #eef2ff 100%)',
            }
      }
    >
      {/* Header - only on surahs view */}
      {view === 'surahs' && (
        <Header
          filters={filters}
          setFilters={setFilters}
          showAnalytics={showAnalytics}
          setShowAnalytics={setShowAnalytics}
        />
      )}

      {/* Analytics Panel */}
      {view === 'surahs' && showAnalytics && <AnalyticsPanel surahs={filtered} />}

      {/* Stats Bar */}
      {view === 'surahs' && (
        <StatsBar
          level={level}
          points={points}
          streak={streak}
          badges={badges}
          onUpgrade={handleUpgrade}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden">
        {/* Surahs View */}
        {view === 'surahs' && (
          <>
            <ZoomSlider zoom={zoom} setZoom={setZoom} />
            <div className="absolute inset-0 overflow-auto">
              <div
                className="relative w-full"
                style={{ height: `${180 * zoom}%`, minHeight: `${1200 * zoom}px` }}
              >
                {filtered.map((s, i) => (
                  <SurahBubble
                    key={s.id}
                    surah={s}
                    index={i}
                    onClick={handleSelectSurah}
                    maxAyahs={MAX_AYAHS}
                    total={filtered.length}
                    zoom={zoom}
                  />
                ))}
              </div>
            </div>
            {/* Filter info */}
            {(filters.type || filters.ayahRange || filters.topic || filters.search) && (
              <div
                className={`absolute top-4 right-4 z-30 backdrop-blur-xl rounded-2xl px-4 py-2 shadow-lg border ${
                  darkMode ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-gray-200'
                }`}
              >
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Showing {filtered.length} of 114 surahs
                </span>
                <button
                  onClick={clearFilters}
                  className="ml-3 text-sm text-purple-600 font-semibold hover:text-purple-800"
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        )}

        {/* Juzz View */}
        {view === 'juzz' && (
          <div className="absolute inset-0 overflow-auto">
            <div className="relative w-full" style={{ height: '150%', minHeight: '1000px' }}>
              {JUZZ.map((j, i) => (
                <JuzzBubble key={j.id} juzz={j} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Other Views */}
        {view === 'listen' && <ListenView level={level} />}
        {view === 'donate' && <DonateView />}
        {view === 'settings' && <SettingsView darkMode={darkMode} setDarkMode={setDarkMode} />}
        {view === 'names' && <NamesOfAllahView darkMode={darkMode} />}
        {view === 'quiz' && <QuizView darkMode={darkMode} onEarnPoints={handleEarnPoints} />}
        {view === 'prayer' && <PrayerTimesView darkMode={darkMode} />}
        {view === 'stats' && (
          <StatisticsView
            darkMode={darkMode}
            readingProgress={readingProgress}
            streak={streak}
            points={points}
          />
        )}
        {view === 'daily' && <DailyVerseView darkMode={darkMode} />}
      </main>

      {/* Floating Menu */}
      <FloatingMenu view={view} setView={setView} darkMode={darkMode} />

      {/* Modal */}
      {selected && <Modal surah={selected} onClose={() => setSelected(null)} onRead={handleReadSurah} />}

      {/* Animation Styles */}
      <AnimationStyles />
    </div>
  );
}

/**
 * Root App Component with Error Boundary
 */
export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner message="Loading Quran App..." />}>
        <QuranBubbleAppInner />
      </Suspense>
    </ErrorBoundary>
  );
}
