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
import { ErrorBoundary, LoadingSpinner, BubbleModal, BubbleReaderOverlay } from './components/common';
import { Header, FloatingMenu, ZoomSlider, StatsBar } from './components/layout';
import { SurahBubble, JuzzBubble } from './components/bubbles';
import { AnalyticsPanel } from './components/widgets';
import {
  NamesOfAllahView,
  QuizView,
  SettingsView,
  DailyVerseView,
  StatisticsView,
  ListenView,
  DonateView,
  PrayerTimesView,
} from './components/views';
import { SURAHS, JUZZ, MAX_AYAHS, getSurahsInJuzz } from './data';
import { useLocalStorage } from './hooks';

// CSS Animations - Beautiful bubble animations
const AnimationStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Scheherazade+New:wght@400;700&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');

    /* Gentle floating animation */
    @keyframes gentleFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    /* Slow spinning for outer ring */
    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* Floating particles */
    @keyframes floatParticle {
      0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
      50% { transform: translateY(-8px) scale(1.2); opacity: 0.7; }
    }

    /* Breathing glow animation */
    @keyframes breathe {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.1); opacity: 1; }
    }

    /* Shimmer wave animation */
    @keyframes shimmerWave {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    /* Color shift animation */
    @keyframes colorShift {
      0%, 100% { filter: hue-rotate(0deg); }
      50% { filter: hue-rotate(30deg); }
    }

    /* Connection line pulse */
    @keyframes connectionPulse {
      0%, 100% { stroke-opacity: 0.12; }
      50% { stroke-opacity: 0.28; }
    }

    .connection-line {
      animation: connectionPulse 4s ease-in-out infinite;
    }

    /* Aurora background animation */
    @keyframes aurora {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    /* Floating ambient orbs */
    @keyframes floatOrb {
      0%, 100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.4;
      }
      25% {
        transform: translate(10px, -20px) scale(1.1);
        opacity: 0.6;
      }
      50% {
        transform: translate(-5px, -10px) scale(0.9);
        opacity: 0.5;
      }
      75% {
        transform: translate(-15px, 5px) scale(1.05);
        opacity: 0.45;
      }
    }

    /* Sparkle animation */
    @keyframes sparkle {
      0%, 100% {
        opacity: 0;
        transform: scale(0);
      }
      50% {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* Ripple effect */
    @keyframes ripple {
      0% {
        transform: scale(1);
        opacity: 0.5;
      }
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    /* Bubble hover effect */
    .bubble-item {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .bubble-item:hover {
      transform: scale(1.08) translateY(-5px);
      z-index: 10;
    }

    /* Utility classes */
    .touch-target {
      min-width: 44px;
      min-height: 44px;
    }

    .safe-area-bottom {
      padding-bottom: env(safe-area-inset-bottom);
    }

    .bubble-container {
      scroll-behavior: smooth;
    }

    /* Animated background gradient */
    .animated-bg {
      background: linear-gradient(-45deg, #f0fdfa, #ecfeff, #f0f9ff, #eff6ff, #eef2ff, #fdf4ff);
      background-size: 400% 400%;
      animation: aurora 20s ease infinite;
    }

    /* Dark mode animated background */
    .animated-bg-dark {
      background: linear-gradient(-45deg, #0f172a, #1e1b4b, #172554, #1e3a5f, #1e1b4b, #0f172a);
      background-size: 400% 400%;
      animation: aurora 20s ease infinite;
    }

    /* Reduce motion for accessibility */
    @media (prefers-reduced-motion: reduce) {
      .bubble-item, .connection-line, .animated-bg, .animated-bg-dark {
        animation: none !important;
      }
      .bubble-item:hover {
        transform: scale(1.02);
      }
    }
  `}</style>
);

// Ambient Floating Particles Component
const AmbientParticles = ({ darkMode }) => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {/* Large ambient orbs */}
    {[...Array(6)].map((_, i) => (
      <div
        key={`orb-${i}`}
        className="absolute rounded-full blur-3xl"
        style={{
          width: 200 + i * 100,
          height: 200 + i * 100,
          left: `${(i * 17) % 100}%`,
          top: `${(i * 23) % 100}%`,
          background: darkMode
            ? `radial-gradient(circle, ${['#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#06b6d4', '#10b981'][i]}30 0%, transparent 70%)`
            : `radial-gradient(circle, ${['#6366f1', '#8b5cf6', '#a855f7', '#ec4899', '#06b6d4', '#10b981'][i]}20 0%, transparent 70%)`,
          animation: `floatOrb ${15 + i * 3}s ease-in-out infinite`,
          animationDelay: `${i * 2}s`,
        }}
      />
    ))}

    {/* Small sparkle particles */}
    {[...Array(20)].map((_, i) => (
      <div
        key={`sparkle-${i}`}
        className="absolute rounded-full"
        style={{
          width: 4 + (i % 4),
          height: 4 + (i % 4),
          left: `${(i * 5.3) % 100}%`,
          top: `${(i * 7.1) % 100}%`,
          background: darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(139,92,246,0.5)',
          boxShadow: darkMode
            ? '0 0 10px rgba(255,255,255,0.5)'
            : '0 0 10px rgba(139,92,246,0.4)',
          animation: `sparkle ${3 + (i % 4)}s ease-in-out infinite`,
          animationDelay: `${i * 0.3}s`,
        }}
      />
    ))}
  </div>
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
  const [clickPosition, setClickPosition] = useState(null);
  const [filters, setFilters] = useState({
    type: null,
    ayahRange: null,
    chronOrder: null,
    topic: null,
    search: '',
  });
  const [zoom, setZoom] = useLocalStorage('zoom', 1);
  const [contentZoom, setContentZoom] = useLocalStorage('contentZoom', 1);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', {});
  const [readingProgress, setReadingProgress] = useLocalStorage('readingProgress', {});
  const [overlayReaderSurah, setOverlayReaderSurah] = useState(null);
  const [selectedJuzz, setSelectedJuzz] = useState(null);

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
  const handleSelectSurah = useCallback((surah, position) => {
    setSelected(surah);
    setClickPosition(position || null);
  }, []);

  const handleReadSurah = useCallback((surah) => {
    // Use overlay reader instead of full page navigation
    setOverlayReaderSurah(surah);
    setSelected(null);
    setPoints((p) => p + 10);
    // Update reading progress
    setReadingProgress((prev) => ({
      ...prev,
      [surah.id]: { lastRead: Date.now(), ayahsRead: (prev[surah.id]?.ayahsRead || 0) + 1 },
    }));
  }, [setPoints, setReadingProgress]);

  // Handle closing the reader overlay
  const handleCloseOverlayReader = useCallback(() => {
    setOverlayReaderSurah(null);
    setSelectedJuzz(null);
  }, []);

  // Handle changing surah (from next/prev buttons in reader)
  const handleChangeSurah = useCallback((newSurah) => {
    setOverlayReaderSurah(newSurah);
    // Update reading progress
    setReadingProgress((prev) => ({
      ...prev,
      [newSurah.id]: { lastRead: Date.now(), ayahsRead: (prev[newSurah.id]?.ayahsRead || 0) + 1 },
    }));
  }, [setReadingProgress]);

  // Handle Juzz click - open the first surah of the Juzz
  const handleJuzzClick = useCallback((juzz) => {
    const startSurah = SURAHS.find(s => s.id === juzz.startSurah);
    if (startSurah) {
      setSelectedJuzz(juzz);
      setOverlayReaderSurah(startSurah);
      setPoints((p) => p + 10);
    }
  }, [setPoints]);

  const handleUpgrade = useCallback(() => setLevel('pro'), [setLevel]);

  const handleEarnPoints = useCallback((pts) => setPoints((p) => p + pts), [setPoints]);

  const clearFilters = useCallback(() => {
    setFilters({ type: null, ayahRange: null, chronOrder: null, topic: null, search: '' });
  }, []);

  return (
    <div
      className={`h-screen flex flex-col overflow-hidden transition-colors duration-500 ${
        darkMode ? 'animated-bg-dark' : 'animated-bg'
      }`}
    >
      {/* Ambient floating particles */}
      <AmbientParticles darkMode={darkMode} />
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
      {view === 'surahs' && showAnalytics && (
        <AnalyticsPanel surahs={filtered} readingProgress={readingProgress} darkMode={darkMode} />
      )}

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
            <ZoomSlider zoom={zoom} setZoom={setZoom} contentZoom={contentZoom} setContentZoom={setContentZoom} />
            <div className="absolute inset-0 overflow-auto bubble-container">
              {/* Fibonacci spiral container - bubbles positioned relative to center */}
              <div
                className="relative"
                style={{
                  // Large container for spiral layout
                  width: Math.max(1400 * zoom, 1400),
                  height: Math.max(1400 * zoom, 1400),
                  margin: '0 auto',
                  marginTop: '2rem',
                }}
              >
                {/* Surah bubbles - fibonacci spiral formation */}
                {filtered.map((s, i) => (
                  <SurahBubble
                    key={s.id}
                    surah={s}
                    index={i}
                    onClick={handleSelectSurah}
                    maxAyahs={MAX_AYAHS}
                    total={filtered.length}
                    zoom={zoom}
                    contentZoom={contentZoom}
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
          <>
            <ZoomSlider zoom={zoom} setZoom={setZoom} contentZoom={contentZoom} setContentZoom={setContentZoom} />
            <div className="absolute inset-0 overflow-auto bubble-container">
              {/* Fibonacci spiral container for Juzz */}
              <div
                className="relative"
                style={{
                  width: Math.max(900 * zoom, 900),
                  height: Math.max(900 * zoom, 900),
                  margin: '0 auto',
                  marginTop: '2rem',
                }}
              >
                {JUZZ.map((j, i) => (
                  <JuzzBubble
                    key={j.id}
                    juzz={j}
                    index={i}
                    zoom={zoom}
                    contentZoom={contentZoom}
                    onClick={handleJuzzClick}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Other Views */}
        {view === 'listen' && <ListenView level={level} darkMode={darkMode} />}
        {view === 'donate' && <DonateView darkMode={darkMode} />}
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

      {/* Bubble Modal */}
      {selected && (
        <BubbleModal
          surah={selected}
          onClose={() => {
            setSelected(null);
            setClickPosition(null);
          }}
          onRead={handleReadSurah}
          darkMode={darkMode}
          originPosition={clickPosition}
        />
      )}

      {/* Bubble Reader Overlay */}
      {overlayReaderSurah && (
        <BubbleReaderOverlay
          surah={overlayReaderSurah}
          onClose={handleCloseOverlayReader}
          onChangeSurah={handleChangeSurah}
          darkMode={darkMode}
          currentJuzz={selectedJuzz}
        />
      )}

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
