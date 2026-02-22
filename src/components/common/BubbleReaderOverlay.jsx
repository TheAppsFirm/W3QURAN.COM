/**
 * BubbleReaderOverlay Component - Complete Redesign
 * Beautiful integrated bubble reader with:
 * - External floating menu panel (outside the bubble)
 * - Left panel for features inside bubble
 * - Multi-language Tafseer support
 * - Embedded YouTube player
 * - All features integrated beautifully
 */

import { useState, useEffect, useRef, useCallback, memo, useMemo, lazy, Suspense } from 'react';
import { Icons } from './Icons';
import YouTubePlayer from './YouTubePlayer';
// trackReadingActivity is dynamically imported at call site to avoid pulling in GlobalUmmahPulse

// Lazy-loaded feature components (only loaded when user activates them)
const VerseArtGenerator = lazy(() => import('./VerseArtGenerator'));
const EmotionalTracker = lazy(() => import('./EmotionalTracker'));
const MoodEntryForm = lazy(() => import('./EmotionalTracker').then(m => ({ default: m.MoodEntryForm })));
const AyahConnectionMap = lazy(() => import('./AyahConnectionMap'));
const ScholarVideoSync = lazy(() => import('./ScholarVideoSync'));
const LivingVisualization = lazy(() => import('./LivingVisualization'));
const TimeCapsule = lazy(() => import('./TimeCapsule'));
const VoiceControl = lazy(() => import('./VoiceControl'));
const HeartbeatMeditation = lazy(() => import('./HeartbeatMeditation'));
const FamilyCircle = lazy(() => import('./FamilyCircle'));
const TreebankOverlay = lazy(() => import('./TreebankAnalysis').then(m => ({ default: m.TreebankOverlay })));
import { hasTreebankData, canAccessTreebank, hasOntologyData } from '../../data/treebank/index';
import { PALETTES, SURAHS, fetchTafseer, getTafseersByLanguage, getDefaultTafseer, TRANSLATION_TO_TAFSEER_LANG, getVideosForSurah, generateSearchQuery, SCHOLARS, SURAH_TOPICS, TAFSEER_SOURCES, markAyahRead } from '../../data';
import { OVERLAY_THEMES, LAYOUT_TO_OVERLAY_THEME, getOverlayTheme, resolveGradient } from '../../data/themes';
import { useQuranAPI, useMultilingualWords, TRANSLATIONS } from '../../hooks/useQuranAPI';
import { speakText, getTranslationAudioSource, getTranslationAudioUrl, getAvailableTranslationAudio, TRANSLATION_RECITERS, getGlobalAyahNumber } from '../../hooks/useAudioPlayer';
import { useLocalStorage, useIsMobile } from '../../hooks';
import { logReadingSession, trackSurahCompletion, trackFeatureUsage } from '../../utils/trackingUtils';
import { shareVerse } from '../../utils/shareUtils';
import { useAuth } from '../../contexts/AuthContext';
import logger from '../../utils/logger';
import { trackSurahRead, trackFeatureUse, trackAudioPlay, trackTafseerView } from '../../utils/analyticsTracker';
import { getCachedSurah, getDownloadedAudio } from '../../data/offlineStorage';

// 14 Sajdah (Prostration) Ayat — where a Muslim must perform sujood when reading
const SAJDAH_AYAT = {
  7: [206], 13: [15], 16: [50], 17: [109], 19: [58],
  22: [18, 77], 25: [60], 27: [26], 32: [15], 38: [24],
  41: [38], 53: [62], 84: [21], 96: [19],
};
import { useGamification } from '../../hooks/useGamification';

// Browser detection for Safari-specific optimizations
const isSafari = typeof navigator !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
const isMobileSafari = isSafari || isIOS;

// Progressive loading constants to prevent memory crashes on large surahs (especially Safari)
const INITIAL_VERSE_CHUNK = isMobileSafari ? 20 : 50; // Start with fewer verses on Safari
const VERSE_CHUNK_SIZE = isMobileSafari ? 15 : 30; // Load fewer at a time on Safari
const LARGE_SURAH_THRESHOLD = 50; // Surahs with more verses than this use progressive loading

// Memory monitoring for Safari
const checkMemoryPressure = () => {
  if (typeof performance !== 'undefined' && performance.memory) {
    const { usedJSHeapSize, jsHeapSizeLimit } = performance.memory;
    const usagePercent = (usedJSHeapSize / jsHeapSizeLimit) * 100;
    if (usagePercent > 80) {
      logger.memoryWarning('audio prefetch');
      return true;
    }
  }
  return false;
};

// Simple HTML sanitizer to prevent XSS attacks in tafseer content
const sanitizeHTML = (html) => {
  if (!html || typeof html !== 'string') return '';

  // Create a temporary element to parse HTML
  const temp = document.createElement('div');
  temp.innerHTML = html;

  // Remove script tags and event handlers
  const scripts = temp.querySelectorAll('script, style, iframe, object, embed, form');
  scripts.forEach(el => el.remove());

  // Remove dangerous attributes from all elements
  const allElements = temp.querySelectorAll('*');
  allElements.forEach(el => {
    // Remove event handlers (onclick, onerror, etc.)
    Array.from(el.attributes).forEach(attr => {
      if (attr.name.startsWith('on') || attr.name === 'href' && attr.value.startsWith('javascript:')) {
        el.removeAttribute(attr.name);
      }
    });
  });

  return temp.innerHTML;
};

// Audio CDN
const AUDIO_CDN = 'https://cdn.islamic.network/quran/audio/128';

// Reciters
const RECITERS = {
  'ar.alafasy': { name: 'Mishary Alafasy', country: 'Kuwait' },
  'ar.abdurrahmaansudais': { name: 'Abdul Rahman Al-Sudais', country: 'Saudi Arabia' },
  'ar.abdulsamad': { name: 'Abdul Samad', country: 'Egypt' },
  'ar.shaatree': { name: 'Abu Bakr Al-Shatri', country: 'Saudi Arabia' },
  'ar.husary': { name: 'Mahmoud Khalil Al-Husary', country: 'Egypt' },
  'ar.minshawi': { name: 'Mohamed Al-Minshawi', country: 'Egypt' },
};

// Layout style configurations moved to src/data/themes.js
// Import OVERLAY_THEMES, LAYOUT_TO_OVERLAY_THEME, getOverlayTheme from there
// This avoids duplication and provides a single source of truth for theming

// LEGACY CONSTANT REMOVED - Use OVERLAY_THEMES from themes.js
// const OVERLAY_STYLES = {...} - Moved to src/data/themes.js

// Create alias for backwards compatibility in this file
const OVERLAY_STYLES = OVERLAY_THEMES;
const layoutToOverlayStyle = LAYOUT_TO_OVERLAY_THEME;

// Feature definitions with colors
const FEATURES = [
  { id: 'tafseer', icon: 'BookOpen', label: 'Tafseer', color: '#8B5CF6', gradient: 'from-purple-500 to-indigo-600' },
  { id: 'memorize', icon: 'Brain', label: 'Memorize', color: '#F59E0B', gradient: 'from-amber-500 to-orange-600' },
  { id: 'bookmark', icon: 'Bookmark', label: 'Bookmarks', color: '#EC4899', gradient: 'from-pink-500 to-rose-600' },
  { id: 'youtube', icon: 'Video', label: 'Videos', color: '#EF4444', gradient: 'from-red-500 to-rose-600' },
  { id: 'share', icon: 'Share', label: 'Share', color: '#10B981', gradient: 'from-emerald-500 to-teal-600' },
];

// Verse counts for global ayah calculation
const VERSE_COUNTS = [
  0, 7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128,
  111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73,
  54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49,
  62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28,
  28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20,
  15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6
];

// Tajweed Text Renderer
const TajweedText = memo(function TajweedText({ segments }) {
  if (!segments || segments.length === 0) return null;
  return (
    <span>
      {segments.map((segment, index) => {
        if (segment.type === 'plain') {
          return <span key={index}>{segment.text}</span>;
        }
        return (
          <span key={index} style={{ color: segment.color }} title={`${segment.name}: ${segment.description}`} className="cursor-help">
            {segment.text}
          </span>
        );
      })}
    </span>
  );
});

// Simple Word Component
const WordItem = memo(function WordItem({ word, isActive, onClick, hidden = false, showOnHover = false }) {
  const [revealed, setRevealed] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (hidden) {
      setRevealed(!revealed);
    } else if (onClick) {
      onClick();
    }
  };

  const isHidden = hidden && !revealed;

  return (
    <span
      onClick={handleClick}
      onMouseEnter={() => showOnHover && setRevealed(true)}
      onMouseLeave={() => showOnHover && setRevealed(false)}
      role="button"
      tabIndex={0}
      className={`inline-block mx-0.5 cursor-pointer transition-all duration-200 rounded px-1.5 py-1 relative ${
        isActive ? 'bg-yellow-400/60 scale-110 shadow-lg ring-2 ring-yellow-300/50'
          : isHidden ? 'bg-amber-500/40 hover:bg-amber-500/60'
          : 'hover:bg-white/30 hover:scale-105'
      }`}
      style={{ userSelect: 'none' }}
    >
      {isHidden ? (
        <>
          <span className="opacity-0 select-none" aria-hidden="true">{word}</span>
          <span className="absolute inset-0 flex items-center justify-center text-white/50 text-xs">?</span>
        </>
      ) : (
        word
      )}
    </span>
  );
});

// ============================================
// FLOATING FEATURE BUBBLES (Separate bubbles for each feature)
// ============================================

// Generic Floating Feature Bubble Container
const FloatingFeatureBubble = memo(function FloatingFeatureBubble({
  children,
  isVisible,
  onClose,
  title,
  icon: IconComponent,
  gradient,
  position = { top: '15%', left: '80px' },
  size = 'medium' // small, medium, large
}) {
  // Check if mobile using reactive hook
  const isMobile = useIsMobile();

  // Mobile-responsive sizes
  const sizeStyles = isMobile ? {
    small: { width: 'calc(100vw - 20px)', height: '70vh', maxWidth: '400px' },
    medium: { width: 'calc(100vw - 20px)', height: '75vh', maxWidth: '400px' },
    large: { width: 'calc(100vw - 20px)', height: '80vh', maxWidth: '400px' },
    xlarge: { width: 'calc(100vw - 20px)', height: '85vh', maxWidth: '400px' },
  } : {
    small: { width: '280px', height: '350px' },
    medium: { width: '320px', height: '450px' },
    large: { width: '360px', height: '550px' },
    xlarge: { width: '380px', height: '650px' },
  };

  // Mobile position: centered
  const mobilePosition = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  if (!isVisible) return null;

  // Extract transform from position if it exists
  const { transform, ...positionWithoutTransform } = position;

  return (
    <div
      className="fixed transition-all duration-500"
      style={{
        zIndex: 99999999,
        ...(isMobile ? mobilePosition : { ...positionWithoutTransform, transform: transform || 'none' }),
        ...sizeStyles[size],
        animation: 'bubblePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Outer glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: '-20px',
          background: `radial-gradient(circle, ${gradient[0]}40 0%, transparent 70%)`,
          filter: 'blur(15px)',
          animation: 'breathe 3s ease-in-out infinite',
        }}
      />

      {/* Main bubble */}
      <div
        className="relative w-full h-full rounded-[40px] overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${gradient[0]}ee, ${gradient[1]}dd, ${gradient[2] || gradient[1]}cc)`,
          boxShadow: `0 0 60px ${gradient[0]}50, 0 20px 60px rgba(0,0,0,0.4), inset 0 -30px 60px rgba(0,0,0,0.3), inset 0 30px 60px rgba(255,255,255,0.15)`,
        }}
      >
        {/* Glass highlight */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '2%', left: '10%', width: '60%', height: '15%',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
            borderRadius: '50%', filter: 'blur(2px)', transform: 'scaleY(0.3)',
          }}
        />

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.25)' }}
            >
              {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
            </div>
            <h3 className="text-white font-bold text-lg">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
          >
            <Icons.X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 h-[calc(100%-70px)] overflow-y-auto overflow-x-hidden custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
});

// Tafseer Floating Bubble
const TafseerFloatingBubble = memo(function TafseerFloatingBubble({
  isVisible, onClose, surahId, ayahNumber, verseArabic, translationId, totalAyahs = 7, onAyahChange
}) {
  const [tafseer, setTafseer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedTafseer, setSelectedTafseer] = useState(null);
  const [textZoom, setTextZoom] = useState(1);
  const [selectedAyah, setSelectedAyah] = useState(ayahNumber);

  const tafseerLang = TRANSLATION_TO_TAFSEER_LANG[translationId] || 'en';
  const availableTafseers = getTafseersByLanguage(tafseerLang);

  // Update selected ayah when prop changes
  useEffect(() => {
    setSelectedAyah(ayahNumber);
  }, [ayahNumber]);

  useEffect(() => {
    if (availableTafseers.length > 0 && !selectedTafseer) {
      setSelectedTafseer(availableTafseers[0].id);
    }
  }, [tafseerLang, availableTafseers, selectedTafseer]);

  // Load tafseer with race condition protection
  useEffect(() => {
    if (!isVisible || !selectedTafseer || !surahId || !selectedAyah) return;

    let cancelled = false;
    setLoading(true);

    const loadTafseer = async () => {
      try {
        const result = await fetchTafseer(surahId, selectedAyah, selectedTafseer);
        if (!cancelled) {
          setTafseer(result);
        }
      } catch {
        if (!cancelled) {
          setTafseer({ text: 'Failed to load tafseer', error: true });
        }
      }
      if (!cancelled) {
        setLoading(false);
      }
    };

    loadTafseer();

    return () => {
      cancelled = true;
    };
  }, [isVisible, selectedTafseer, surahId, selectedAyah]);

  // Handle ayah navigation
  const goToPrevAyah = () => {
    if (selectedAyah > 1) {
      const newAyah = selectedAyah - 1;
      setSelectedAyah(newAyah);
      if (onAyahChange) onAyahChange(newAyah);
    }
  };

  const goToNextAyah = () => {
    if (selectedAyah < totalAyahs) {
      const newAyah = selectedAyah + 1;
      setSelectedAyah(newAyah);
      if (onAyahChange) onAyahChange(newAyah);
    }
  };

  // Font sizes based on zoom
  const fontSizes = {
    0.8: { text: '12px', lineHeight: '1.6' },
    0.9: { text: '13px', lineHeight: '1.7' },
    1: { text: '14px', lineHeight: '1.8' },
    1.1: { text: '15px', lineHeight: '1.9' },
    1.2: { text: '16px', lineHeight: '2' },
    1.3: { text: '18px', lineHeight: '2.1' },
    1.4: { text: '20px', lineHeight: '2.2' },
  };

  const currentFontSize = fontSizes[textZoom] || fontSizes[1];

  return (
    <FloatingFeatureBubble
      isVisible={isVisible}
      onClose={onClose}
      title="Tafseer"
      icon={Icons.BookOpen}
      gradient={['#8B5CF6', '#6366F1', '#4F46E5']}
      position={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}
      size="xlarge"
    >
      {/* Controls Row - Tafseer Source + Zoom */}
      <div className="mb-3 pb-3 border-b border-white/20">
        {/* Tafseer Source Selector with Icons */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {availableTafseers.map(t => {
            const TafseerIcon = Icons[t.icon] || Icons.BookOpen;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTafseer(t.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-medium transition-all ${
                  selectedTafseer === t.id
                    ? 'text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
                style={{
                  background: selectedTafseer === t.id ? `linear-gradient(135deg, ${t.color || '#8B5CF6'}, ${t.color || '#8B5CF6'}99)` : undefined,
                  boxShadow: selectedTafseer === t.id ? `0 4px 15px ${t.color || '#8B5CF6'}40` : undefined,
                }}
              >
                <TafseerIcon className="w-3 h-3" />
                {t.name}
              </button>
            );
          })}
        </div>

        {/* Selected Tafseer Introduction */}
        {selectedTafseer && TAFSEER_SOURCES[selectedTafseer]?.intro && (
          <div className="px-2 py-1.5 bg-white/5 rounded-lg mb-2">
            <p className="text-white/60 text-[10px] leading-relaxed" dir={TAFSEER_SOURCES[selectedTafseer]?.direction}>
              {TAFSEER_SOURCES[selectedTafseer].intro}
            </p>
          </div>
        )}

        {/* Text Zoom Control */}
        <div className="flex items-center justify-end gap-1">
          <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-1">
            <button
              onClick={() => setTextZoom(Math.round(Math.max(0.8, textZoom - 0.1) * 10) / 10)}
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all"
              title="Decrease text size"
            >
              <Icons.ZoomOut className="w-3 h-3" />
            </button>
            <span className="text-[10px] text-white/70 w-8 text-center">{Math.round(textZoom * 100)}%</span>
            <button
              onClick={() => setTextZoom(Math.round(Math.min(1.4, textZoom + 0.1) * 10) / 10)}
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all"
              title="Increase text size"
            >
              <Icons.ZoomIn className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Verse Selector */}
      <div className="flex items-center gap-2 mb-3 p-2 bg-white/10 rounded-xl">
        <button
          onClick={goToPrevAyah}
          disabled={selectedAyah <= 1}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            selectedAyah <= 1 ? 'bg-white/5 text-white/30 cursor-not-allowed' : 'bg-white/20 hover:bg-white/30 text-white'
          }`}
        >
          <Icons.ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex-1 flex items-center justify-center gap-2">
          <span className="text-white/60 text-xs">Ayah</span>
          <select
            value={selectedAyah}
            onChange={(e) => {
              const newAyah = parseInt(e.target.value);
              setSelectedAyah(newAyah);
              if (onAyahChange) onAyahChange(newAyah);
            }}
            className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-lg cursor-pointer outline-none"
            style={{ minWidth: '60px' }}
          >
            {Array.from({ length: totalAyahs }, (_, i) => i + 1).map(num => (
              <option key={num} value={num} className="text-gray-800">{num}</option>
            ))}
          </select>
          <span className="text-white/40 text-xs">of {totalAyahs}</span>
        </div>

        <button
          onClick={goToNextAyah}
          disabled={selectedAyah >= totalAyahs}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            selectedAyah >= totalAyahs ? 'bg-white/5 text-white/30 cursor-not-allowed' : 'bg-white/20 hover:bg-white/30 text-white'
          }`}
        >
          <Icons.ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Tafseer Content - Increased height */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden" style={{ maxHeight: '380px', minHeight: '200px' }}>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Icons.Loader className="w-8 h-8 animate-spin text-white/60 mb-2" />
            <p className="text-white/50 text-sm">Loading tafseer...</p>
          </div>
        ) : tafseer?.error ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Icons.AlertCircle className="w-10 h-10 text-white/40 mb-2" />
            <p className="text-white/50 text-sm mb-3">{tafseer.text}</p>
            <button
              onClick={loadTafseer}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-xs transition-all"
            >
              Try Again
            </button>
          </div>
        ) : tafseer ? (
          <div
            className={`text-white/90 leading-relaxed ${tafseer.direction === 'rtl' ? 'text-right' : ''}`}
            dir={tafseer.direction}
            style={{
              fontFamily: tafseer.direction === 'rtl' ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif" : 'inherit',
              fontSize: currentFontSize.text,
              lineHeight: currentFontSize.lineHeight,
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%',
            }}
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(tafseer.text) }}
          />
        ) : null}
      </div>

      {tafseer && !tafseer.error && (
        <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between">
          <p className="text-white/40 text-[10px]">Source: {tafseer.source}</p>
          <p className="text-white/30 text-[10px]">Surah {surahId}, Ayah {selectedAyah}</p>
        </div>
      )}
    </FloatingFeatureBubble>
  );
});

// World-renowned Quran Scholars and Reciters
const YOUTUBE_SCHOLARS = [
  // Reciters
  { id: 'alafasy', name: 'Mishary Rashid Alafasy', type: 'reciter', country: 'Kuwait', channel: 'allolooo', searchQuery: 'Mishary Alafasy' },
  { id: 'sudais', name: 'Abdul Rahman Al-Sudais', type: 'reciter', country: 'Saudi Arabia', channel: '', searchQuery: 'Abdul Rahman Al Sudais' },
  { id: 'shuraim', name: 'Saud Al-Shuraim', type: 'reciter', country: 'Saudi Arabia', channel: '', searchQuery: 'Saud Al Shuraim' },
  { id: 'minshawi', name: 'Mohamed Siddiq Al-Minshawi', type: 'reciter', country: 'Egypt', channel: '', searchQuery: 'Minshawi' },
  { id: 'husary', name: 'Mahmoud Khalil Al-Husary', type: 'reciter', country: 'Egypt', channel: '', searchQuery: 'Al Husary' },
  { id: 'abdulbasit', name: 'Abdul Basit Abdul Samad', type: 'reciter', country: 'Egypt', channel: '', searchQuery: 'Abdul Basit' },
  { id: 'maher', name: 'Maher Al Muaiqly', type: 'reciter', country: 'Saudi Arabia', channel: '', searchQuery: 'Maher Al Muaiqly' },
  // Scholars/Explainers
  { id: 'nouman', name: 'Nouman Ali Khan', type: 'scholar', country: 'USA', channel: 'baaboroom', searchQuery: 'Nouman Ali Khan' },
  { id: 'mufti-menk', name: 'Mufti Menk', type: 'scholar', country: 'Zimbabwe', channel: 'MuftiMenk', searchQuery: 'Mufti Menk' },
  { id: 'omar-suleiman', name: 'Omar Suleiman', type: 'scholar', country: 'USA', channel: 'OmarSuleiman', searchQuery: 'Omar Suleiman' },
  { id: 'yasir-qadhi', name: 'Yasir Qadhi', type: 'scholar', country: 'USA', channel: 'YasirQadhi', searchQuery: 'Yasir Qadhi' },
  { id: 'tariq-jameel', name: 'Maulana Tariq Jameel', type: 'scholar', country: 'Pakistan', channel: '', searchQuery: 'Tariq Jameel' },
  { id: 'zakir-naik', name: 'Dr. Zakir Naik', type: 'scholar', country: 'India', channel: 'Abordem1', searchQuery: 'Zakir Naik' },
  { id: 'israr-ahmed', name: 'Dr. Israr Ahmed', type: 'scholar', country: 'Pakistan', channel: '', searchQuery: 'Dr Israr Ahmed' },
  { id: 'assim-hakeem', name: 'Assim Al Hakeem', type: 'scholar', country: 'Saudi Arabia', channel: 'assaboreem1', searchQuery: 'Assim Al Hakeem' },
  { id: 'tahir-qadri', name: 'Dr. Tahir-ul-Qadri', type: 'scholar', country: 'Pakistan', channel: 'MinhajTV', searchQuery: 'Tahir ul Qadri' },
  { id: 'ghamidi', name: 'Javed Ahmad Ghamidi', type: 'scholar', country: 'Pakistan', channel: 'GhamidiCenterOfIslamicLearning', searchQuery: 'Javed Ghamidi' },
];

// Videos/Lectures Floating Bubble with Scholar Selection
const VideosFloatingBubble = memo(function VideosFloatingBubble({
  isVisible, onClose, surahId, surahName
}) {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedScholar, setSelectedScholar] = useState(null);

  const filteredScholars = useMemo(() => {
    if (selectedType === 'all') return YOUTUBE_SCHOLARS;
    return YOUTUBE_SCHOLARS.filter(s => s.type === selectedType);
  }, [selectedType]);

  const openYouTubeSearch = (scholar) => {
    const query = `${scholar.searchQuery} Surah ${surahName} ${selectedType === 'reciter' ? 'recitation' : 'tafseer'}`;
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  const openGeneralSearch = (type) => {
    const query = `Surah ${surahName} ${type}`;
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <FloatingFeatureBubble
      isVisible={isVisible}
      onClose={onClose}
      title="Quran Videos"
      icon={Icons.Video}
      gradient={['#EF4444', '#DC2626', '#B91C1C']}
      position={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      size="medium"
    >
      {/* Type Filter */}
      <div className="flex gap-1 mb-3 p-1 bg-white/10 rounded-xl">
        {[
          { id: 'all', label: 'All' },
          { id: 'reciter', label: 'Reciters' },
          { id: 'scholar', label: 'Scholars' },
        ].map(type => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
              selectedType === type.id ? 'bg-white/25 text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Quick Search Buttons */}
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => openGeneralSearch('recitation')}
          className="flex-1 py-2 px-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs text-white font-medium transition-all flex items-center justify-center gap-2"
        >
          <Icons.Headphones className="w-3.5 h-3.5" />
          Recitations
        </button>
        <button
          onClick={() => openGeneralSearch('tafseer explanation')}
          className="flex-1 py-2 px-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs text-white font-medium transition-all flex items-center justify-center gap-2"
        >
          <Icons.BookOpen className="w-3.5 h-3.5" />
          Tafseer
        </button>
      </div>

      {/* Scholar/Reciter List */}
      <div className="space-y-2 max-h-[240px] overflow-y-auto">
        <p className="text-white/50 text-[10px] uppercase tracking-wide mb-2">
          {selectedType === 'reciter' ? 'World-Renowned Reciters' : selectedType === 'scholar' ? 'Islamic Scholars' : 'Scholars & Reciters'}
        </p>
        {filteredScholars.map(scholar => (
          <button
            key={scholar.id}
            onClick={() => openYouTubeSearch(scholar)}
            className="w-full p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{
                  background: scholar.type === 'reciter'
                    ? 'linear-gradient(135deg, #10B981, #059669)'
                    : 'linear-gradient(135deg, #8B5CF6, #6366F1)'
                }}
              >
                {scholar.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium">{scholar.name}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    scholar.type === 'reciter' ? 'bg-emerald-500/30 text-emerald-300' : 'bg-purple-500/30 text-purple-300'
                  }`}>
                    {scholar.type === 'reciter' ? 'Reciter' : 'Scholar'}
                  </span>
                  <span className="text-white/40 text-[10px]">{scholar.country}</span>
                </div>
              </div>
              <Icons.ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-3 mt-3 border-t border-white/10">
        <p className="text-white/40 text-[10px] text-center">
          Click on any scholar to search their {surahName} videos on YouTube
        </p>
      </div>
    </FloatingFeatureBubble>
  );
});

// Memorize Floating Bubble
const MemorizeFloatingBubble = memo(function MemorizeFloatingBubble({
  isVisible, onClose, onSettingsChange, currentSettings
}) {
  return (
    <FloatingFeatureBubble
      isVisible={isVisible}
      onClose={onClose}
      title="Memorize Mode"
      icon={Icons.Brain}
      gradient={['#F59E0B', '#D97706', '#B45309']}
      position={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      size="small"
    >
      <MemorizePanel
        onSettingsChange={onSettingsChange}
        currentSettings={currentSettings}
        onClose={onClose}
      />
    </FloatingFeatureBubble>
  );
});

// Bookmark Floating Bubble
const BookmarkFloatingBubble = memo(function BookmarkFloatingBubble({
  isVisible, onClose, surahId, surahName, ayahNumber, verseArabic, onBookmarkSuccess
}) {
  return (
    <FloatingFeatureBubble
      isVisible={isVisible}
      onClose={onClose}
      title="Bookmarks"
      icon={Icons.Bookmark}
      gradient={['#EC4899', '#DB2777', '#BE185D']}
      position={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      size="medium"
    >
      <BookmarksPanel
        surahId={surahId}
        surahName={surahName}
        ayahNumber={ayahNumber}
        verseArabic={verseArabic}
        onClose={onClose}
        onBookmarkSuccess={onBookmarkSuccess}
      />
    </FloatingFeatureBubble>
  );
});

// Share Floating Bubble
const ShareFloatingBubble = memo(function ShareFloatingBubble({
  isVisible, onClose, surahId, surahName, ayahNumber, verseArabic, verseTranslation, multipleVerses, onOpenArtGenerator, onShareSuccess
}) {
  return (
    <FloatingFeatureBubble
      isVisible={isVisible}
      onClose={onClose}
      title="Share"
      icon={Icons.Share}
      gradient={['#10B981', '#059669', '#047857']}
      position={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      size="medium"
    >
      <SharePanel
        surahId={surahId}
        surahName={surahName}
        ayahNumber={ayahNumber}
        verseArabic={verseArabic}
        verseTranslation={verseTranslation}
        multipleVerses={multipleVerses}
        onClose={onClose}
        onOpenArtGenerator={onOpenArtGenerator}
        onShareSuccess={onShareSuccess}
      />
    </FloatingFeatureBubble>
  );
});

// Small Feature Toggle Buttons (shown inside main bubble)
const FeatureToggleButtons = memo(function FeatureToggleButtons({ activeFeature, onToggle }) {
  const buttons = [
    { id: 'tafseer', icon: Icons.BookOpen, label: 'Tafseer', color: '#8B5CF6' },
    { id: 'youtube', icon: Icons.Video, label: 'Videos', color: '#EF4444' },
    { id: 'memorize', icon: Icons.Brain, label: 'Memorize', color: '#F59E0B' },
    { id: 'bookmark', icon: Icons.Bookmark, label: 'Bookmark', color: '#EC4899' },
    { id: 'share', icon: Icons.Share, label: 'Share', color: '#10B981' },
  ];

  return (
    <div className="flex items-center gap-1.5 flex-wrap justify-center">
      {buttons.map(btn => {
        const Icon = btn.icon;
        const isActive = activeFeature === btn.id;
        return (
          <button
            key={btn.id}
            onClick={() => onToggle(isActive ? null : btn.id)}
            className={`relative px-2.5 py-1.5 rounded-full text-[10px] font-medium transition-all flex items-center gap-1.5 ${
              isActive ? 'text-white scale-105' : 'text-white/70 hover:text-white hover:scale-105'
            }`}
            style={{
              background: isActive ? `linear-gradient(135deg, ${btn.color}cc, ${btn.color}99)` : 'rgba(255,255,255,0.15)',
              boxShadow: isActive ? `0 4px 15px ${btn.color}50` : 'none',
            }}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{btn.label}</span>
          </button>
        );
      })}
    </div>
  );
});

// ============================================
// FEATURE PANELS
// ============================================

// Tafseer Panel with Multi-language Support
const TafseerPanel = memo(function TafseerPanel({ surahId, ayahNumber, verseArabic, translationId, onClose }) {
  const [tafseer, setTafseer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedTafseer, setSelectedTafseer] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const tafseerLang = TRANSLATION_TO_TAFSEER_LANG[translationId] || 'en';
  const availableTafseers = getTafseersByLanguage(tafseerLang);

  useEffect(() => {
    // Reset selection when language changes
    if (availableTafseers.length > 0) {
      const defaultTafseer = availableTafseers[0].id;
      setSelectedTafseer(defaultTafseer);
    }
  }, [tafseerLang]);

  const loadTafseer = useCallback(async () => {
    if (!selectedTafseer || !surahId || !ayahNumber) return;
    setLoading(true);
    setTafseer(null);
    try {
      const result = await fetchTafseer(surahId, ayahNumber, selectedTafseer);
      setTafseer(result);
    } catch {
      setTafseer({ text: 'Failed to load tafseer. Please try again.', error: true });
    }
    setLoading(false);
  }, [selectedTafseer, surahId, ayahNumber]);

  useEffect(() => {
    loadTafseer();
  }, [loadTafseer, retryCount]);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0 flex items-center justify-between pb-3 border-b border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
            <Icons.BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">Tafseer</h3>
            <p className="text-white/60 text-xs">Ayah {ayahNumber}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-all">
          <Icons.X className="w-4 h-4 text-white/70" />
        </button>
      </div>

      <div className="flex-shrink-0 py-3 border-b border-white/10">
        <div className="flex flex-wrap gap-1">
          {availableTafseers.map(t => (
            <button key={t.id} onClick={() => setSelectedTafseer(t.id)}
              className={`px-3 py-1.5 rounded-full text-xs transition-all ${selectedTafseer === t.id ? 'bg-purple-500/60 text-white font-medium' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}>
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-shrink-0 py-3 bg-white/5 rounded-xl my-2 px-3">
        <p className="text-white text-right leading-loose" style={{ fontFamily: "'Scheherazade New', serif", fontSize: '1.1rem' }} dir="rtl">
          {verseArabic?.substring(0, 150)}{verseArabic?.length > 150 ? '...' : ''}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Icons.Loader className="w-8 h-8 animate-spin text-purple-400 mb-2" />
            <p className="text-white/50 text-xs">Loading tafseer...</p>
          </div>
        ) : tafseer?.error ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Icons.AlertCircle className="w-10 h-10 text-red-400/60 mb-2" />
            <p className="text-white/50 text-center text-sm mb-3">{tafseer.text}</p>
            <button
              onClick={handleRetry}
              className="px-4 py-2 bg-purple-500/40 hover:bg-purple-500/60 rounded-full text-white text-xs font-medium transition-all"
            >
              Try Again
            </button>
          </div>
        ) : tafseer ? (
          <div
            className={`text-white/90 leading-loose ${tafseer.direction === 'rtl' ? 'text-right' : ''}`}
            dir={tafseer.direction}
            style={{
              fontFamily: tafseer.direction === 'rtl' ? "'Noto Nastaliq Urdu', 'Scheherazade New', serif" : 'inherit',
              fontSize: tafseer.direction === 'rtl' ? '1rem' : '0.9rem',
              lineHeight: tafseer.direction === 'rtl' ? '2' : '1.75',
            }}
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(tafseer.text) }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <Icons.BookOpen className="w-10 h-10 text-white/30 mb-2" />
            <p className="text-white/50 text-center text-sm">Select a tafseer source above</p>
          </div>
        )}
      </div>

      {tafseer && !tafseer.error && (
        <div className="flex-shrink-0 pt-2 border-t border-white/10">
          <p className="text-white/40 text-[10px]">Source: {tafseer.source}</p>
        </div>
      )}
    </div>
  );
});

// Memorization Panel
const MemorizePanel = memo(function MemorizePanel({ onSettingsChange, currentSettings, onClose }) {
  const [hideLevel, setHideLevel] = useState(currentSettings?.hideLevel || 0);
  const [repeatCount, setRepeatCount] = useState(3);

  useEffect(() => {
    onSettingsChange({ hideLevel, repeatCount });
  }, [hideLevel, repeatCount, onSettingsChange]);

  const HIDE_LEVELS = [
    { level: 0, label: 'Show All', desc: 'All words visible', bars: 5 },
    { level: 1, label: 'Hide 25%', desc: 'Every 4th word hidden', bars: 4 },
    { level: 2, label: 'Hide 50%', desc: 'Every 2nd word hidden', bars: 3 },
    { level: 3, label: 'Hide 75%', desc: 'Most words hidden', bars: 2 },
    { level: 4, label: 'Hide All', desc: 'All words hidden', bars: 1 },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0 flex items-center justify-between pb-3 border-b border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
            <Icons.Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">Memorize</h3>
            <p className="text-white/60 text-xs">Hifz Mode</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-all">
          <Icons.X className="w-4 h-4 text-white/70" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-3 space-y-4">
        <div>
          <label className="text-white/80 text-xs font-medium mb-2 block">Word Visibility</label>
          <div className="space-y-2">
            {HIDE_LEVELS.map(({ level, label, desc, bars }) => (
              <button key={level} onClick={() => setHideLevel(level)}
                className={`w-full p-3 rounded-xl text-left transition-all ${hideLevel === level ? 'bg-amber-500/30 ring-2 ring-amber-400/50' : 'bg-white/10 hover:bg-white/15'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-medium">{label}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-2 h-4 rounded ${i < bars ? 'bg-amber-400' : 'bg-white/20'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-white/50 text-xs mt-0.5">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-white/80 text-xs font-medium mb-2 block">Repeat Each Ayah</label>
          <div className="flex gap-2">
            {[1, 3, 5, 7, 10].map(count => (
              <button key={count} onClick={() => setRepeatCount(count)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all ${repeatCount === count ? 'bg-amber-500/50 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}>
                {count}x
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <p className="text-white font-medium text-sm mb-1">Memorization Tip</p>
              <p className="text-white/70 text-xs leading-relaxed">
                Start with "Show All" and recite along with audio. Gradually increase the hide level as you become more confident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// Bookmarks Panel
const BookmarksPanel = memo(function BookmarksPanel({ surahId, surahName, ayahNumber, verseArabic, onClose, onBookmarkSuccess }) {
  const [bookmarks, setBookmarks] = useLocalStorage('quran_bookmarks', []);
  const [notes, setNotes] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  const isCurrentBookmarked = bookmarks.some(b => b.surahId === surahId && b.ayahNumber === ayahNumber);

  const addBookmark = () => {
    const newBookmark = { id: Date.now(), surahId, surahName, ayahNumber, versePreview: verseArabic?.substring(0, 60), note: notes, timestamp: new Date().toISOString() };
    setBookmarks([newBookmark, ...bookmarks]);
    setNotes('');
    setShowNoteInput(false);
    if (onBookmarkSuccess) onBookmarkSuccess();
  };

  const removeBookmark = (id) => setBookmarks(bookmarks.filter(b => b.id !== id));

  return (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0 flex items-center justify-between pb-3 border-b border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
            <Icons.Bookmark className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">Bookmarks</h3>
            <p className="text-white/60 text-xs">{bookmarks.length} saved</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-all">
          <Icons.X className="w-4 h-4 text-white/70" />
        </button>
      </div>

      <div className="flex-shrink-0 py-3 border-b border-white/10">
        {isCurrentBookmarked ? (
          <div className="flex items-center gap-2 p-3 bg-pink-500/20 rounded-xl">
            <Icons.Check className="w-5 h-5 text-pink-400" />
            <span className="text-white/80 text-sm">Ayah {ayahNumber} is bookmarked</span>
          </div>
        ) : showNoteInput ? (
          <div className="space-y-2">
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Add a note (optional)..."
              className="w-full p-3 bg-white/10 rounded-xl text-white text-sm placeholder-white/40 resize-none" rows={2} />
            <div className="flex gap-2">
              <button onClick={addBookmark} className="flex-1 py-2 bg-pink-500/50 hover:bg-pink-500/70 rounded-xl text-white text-sm font-medium transition-all">Save</button>
              <button onClick={() => setShowNoteInput(false)} className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white/70 text-sm transition-all">Cancel</button>
            </div>
          </div>
        ) : (
          <button onClick={() => setShowNoteInput(true)}
            className="w-full py-3 bg-gradient-to-r from-pink-500/40 to-rose-500/40 hover:from-pink-500/60 hover:to-rose-500/60 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2">
            <Icons.Plus className="w-4 h-4" /> Bookmark Ayah {ayahNumber}
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-3 space-y-2">
        {bookmarks.length === 0 ? (
          <div className="text-center py-8">
            <Icons.Bookmark className="w-12 h-12 mx-auto text-white/20 mb-3" />
            <p className="text-white/50 text-sm">No bookmarks yet</p>
          </div>
        ) : (
          bookmarks.map(bookmark => (
            <div key={bookmark.id} className="p-3 bg-white/10 rounded-xl hover:bg-white/15 transition-all group">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm">{bookmark.surahName} : {bookmark.ayahNumber}</p>
                  <p className="text-white/50 text-xs truncate mt-1" dir="rtl" style={{ fontFamily: "'Scheherazade New', serif" }}>{bookmark.versePreview}...</p>
                  {bookmark.note && <p className="text-white/40 text-xs mt-1 italic">"{bookmark.note}"</p>}
                </div>
                <button onClick={() => removeBookmark(bookmark.id)} className="p-1.5 rounded-full opacity-0 group-hover:opacity-100 hover:bg-white/20 transition-all">
                  <Icons.X className="w-3 h-3 text-white/50" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
});

// YouTube Videos Panel
const YouTubePanel = memo(function YouTubePanel({ surahId, surahName, onClose }) {
  const [category, setCategory] = useState('tafseer');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = getVideosForSurah(surahId, category);
  const allVideos = useMemo(() => {
    const surahVideos = getVideosForSurah(surahId);
    if (!surahVideos) return [];
    return [...(surahVideos.tafseer || []), ...(surahVideos.recitation || []), ...(surahVideos.lecture || [])];
  }, [surahId]);

  const CATEGORIES = [
    { id: 'tafseer', label: 'Tafseer', icon: 'BookOpen' },
    { id: 'recitation', label: 'Recitation', icon: 'Headphones' },
    { id: 'lecture', label: 'Lectures', icon: 'Video' },
  ];

  return (
    <>
      <div className="h-full flex flex-col">
        <div className="flex-shrink-0 flex items-center justify-between pb-3 border-b border-white/20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
              <Icons.Video className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold">Video Lectures</h3>
              <p className="text-white/60 text-xs">{surahName}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-all">
            <Icons.X className="w-4 h-4 text-white/70" />
          </button>
        </div>

        <div className="flex-shrink-0 flex gap-1 py-3 border-b border-white/10">
          {CATEGORIES.map(cat => {
            const Icon = Icons[cat.icon] || Icons.Video;
            return (
              <button key={cat.id} onClick={() => setCategory(cat.id)}
                className={`flex-1 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 ${category === cat.id ? 'bg-red-500/40 text-white' : 'bg-white/10 text-white/70 hover:bg-white/15'}`}>
                <Icon className="w-3.5 h-3.5" /> {cat.label}
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto py-3 space-y-2">
          {!videos || videos.length === 0 ? (
            <div className="text-center py-8">
              <Icons.Video className="w-12 h-12 mx-auto text-white/20 mb-3" />
              <p className="text-white/50 text-sm mb-4">No curated videos yet</p>
              <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(generateSearchQuery(surahName, category))}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/30 hover:bg-red-500/50 rounded-xl text-white text-sm transition-all">
                <Icons.Search className="w-4 h-4" /> Search YouTube
              </a>
            </div>
          ) : (
            videos.map(video => {
              const scholar = SCHOLARS[video.scholar];
              return (
                <button key={video.id} onClick={() => setSelectedVideo(video)}
                  className="w-full p-3 bg-white/10 rounded-xl hover:bg-white/15 transition-all text-left group">
                  <div className="flex gap-3">
                    <div className="w-20 h-12 bg-red-500/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/50 transition-all">
                      <Icons.Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium line-clamp-2">{video.title}</p>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        {scholar && (
                          <>
                            <span className="text-white/60 text-xs">{scholar.name}</span>
                            {scholar.verified && <Icons.CheckCircle className="w-3 h-3 text-blue-400" />}
                          </>
                        )}
                        {video.duration && <><span className="text-white/30">|</span><span className="text-white/50 text-xs">{video.duration}</span></>}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </div>

      {selectedVideo && (
        <YouTubePlayer videoId={selectedVideo.id} title={selectedVideo.title} scholarId={selectedVideo.scholar}
          duration={selectedVideo.duration} onClose={() => setSelectedVideo(null)} relatedVideos={allVideos} onVideoSelect={setSelectedVideo} />
      )}
    </>
  );
});

// Share Panel
const SharePanel = memo(function SharePanel({ surahId, surahName, ayahNumber, verseArabic, verseTranslation, multipleVerses, onClose, onOpenArtGenerator, onShareSuccess }) {
  const [shareStatus, setShareStatus] = useState(null);
  const [downloadStatus, setDownloadStatus] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState('classic');
  const cardRef = useRef(null);

  // Check if we have multiple verses
  const isMultiple = multipleVerses && multipleVerses.length > 1;
  const versesToShare = isMultiple ? multipleVerses : [{ ayahNumber, arabic: verseArabic, translation: verseTranslation }];

  const STYLES = [
    { id: 'classic', name: 'Classic', bg: 'linear-gradient(135deg, #1a1a2e, #16213e)', colors: ['#1a1a2e', '#16213e'] },
    { id: 'sunset', name: 'Sunset', bg: 'linear-gradient(135deg, #ff6b6b, #feca57)', colors: ['#ff6b6b', '#feca57'] },
    { id: 'ocean', name: 'Ocean', bg: 'linear-gradient(135deg, #667eea, #764ba2)', colors: ['#667eea', '#764ba2'] },
    { id: 'forest', name: 'Forest', bg: 'linear-gradient(135deg, #11998e, #38ef7d)', colors: ['#11998e', '#38ef7d'] },
    { id: 'gold', name: 'Gold', bg: 'linear-gradient(135deg, #f5af19, #f12711)', colors: ['#f5af19', '#f12711'] },
    { id: 'midnight', name: 'Midnight', bg: 'linear-gradient(135deg, #232526, #414345)', colors: ['#232526', '#414345'] },
  ];

  // Generate ayah range string for multiple verses
  const ayahRangeStr = isMultiple
    ? `${versesToShare[0].ayahNumber}-${versesToShare[versesToShare.length - 1].ayahNumber}`
    : ayahNumber;

  const handleShare = async () => {
    setShareStatus('generating');
    try {
      if (isMultiple) {
        // Share multiple verses
        const combinedArabic = versesToShare.map(v => v.arabic).join(' ');
        const combinedTranslation = versesToShare.map(v => v.translation).join(' ');
        await shareVerse({ surahName, surahId, ayahNumber: ayahRangeStr, arabic: combinedArabic, translation: combinedTranslation });
      } else {
        await shareVerse({ surahName, surahId, ayahNumber, arabic: verseArabic, translation: verseTranslation });
      }
      setShareStatus('copied');
      if (onShareSuccess) onShareSuccess();
      setTimeout(() => setShareStatus(null), 2000);
    } catch {
      setShareStatus('error');
      setTimeout(() => setShareStatus(null), 2000);
    }
  };

  const copyText = () => {
    let text;
    if (isMultiple) {
      text = versesToShare.map(v =>
        `${v.arabic}\n"${v.translation}"\n(${surahId}:${v.ayahNumber})`
      ).join('\n\n') + `\n\n— ${surahName}`;
    } else {
      text = `${verseArabic}\n\n"${verseTranslation}"\n\n— ${surahName} (${surahId}:${ayahNumber})`;
    }
    navigator.clipboard.writeText(text);
    setShareStatus('copied');
    setTimeout(() => setShareStatus(null), 2000);
  };

  // Download image function
  const downloadImage = async () => {
    setDownloadStatus('generating');
    try {
      const style = STYLES.find(s => s.id === selectedStyle);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas size (Instagram story size)
      canvas.width = 1080;
      canvas.height = 1920;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, style.colors[0]);
      gradient.addColorStop(1, style.colors[1]);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add decorative elements
      ctx.globalAlpha = 0.1;
      ctx.beginPath();
      ctx.arc(canvas.width * 0.8, canvas.height * 0.2, 300, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(canvas.width * 0.2, canvas.height * 0.8, 250, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;

      // Add Islamic pattern border
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 4;
      ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
      ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);

      // Bismillah at top
      ctx.font = '48px "Scheherazade New", serif';
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.textAlign = 'center';
      ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', canvas.width / 2, 150);

      // Arabic verse
      ctx.font = '72px "Scheherazade New", serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';

      // Word wrap for Arabic text
      const arabicText = verseArabic || '';
      const maxWidth = canvas.width - 160;
      const words = arabicText.split(' ');
      let lines = [];
      let currentLine = '';

      for (let word of words) {
        const testLine = currentLine ? currentLine + ' ' + word : word;
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);

      // Draw Arabic lines
      const arabicStartY = 500;
      const arabicLineHeight = 120;
      lines.forEach((line, i) => {
        ctx.fillText(line, canvas.width / 2, arabicStartY + i * arabicLineHeight);
      });

      // Translation
      ctx.font = 'italic 36px Georgia, serif';
      ctx.fillStyle = 'rgba(255,255,255,0.85)';

      const translationText = verseTranslation || '';
      const transWords = translationText.split(' ');
      let transLines = [];
      let transCurrentLine = '';

      for (let word of transWords) {
        const testLine = transCurrentLine ? transCurrentLine + ' ' + word : word;
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth - 100 && transCurrentLine) {
          transLines.push(transCurrentLine);
          transCurrentLine = word;
        } else {
          transCurrentLine = testLine;
        }
      }
      if (transCurrentLine) transLines.push(transCurrentLine);

      // Draw translation lines
      const transStartY = arabicStartY + lines.length * arabicLineHeight + 150;
      const transLineHeight = 55;
      transLines.slice(0, 8).forEach((line, i) => {
        ctx.fillText(`"${line}${i === transLines.length - 1 || i === 7 ? '"' : ''}`, canvas.width / 2, transStartY + i * transLineHeight);
      });

      // Surah reference
      ctx.font = '32px Georgia, serif';
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.fillText(`— ${surahName} (${surahId}:${ayahNumber})`, canvas.width / 2, canvas.height - 200);

      // App branding
      ctx.font = '24px Arial, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.fillText('Quran App', canvas.width / 2, canvas.height - 100);

      // Convert to blob and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Quran_${surahName}_${surahId}_${ayahNumber}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        setDownloadStatus('done');
        setTimeout(() => setDownloadStatus(null), 2000);
      }, 'image/png');

    } catch (error) {
      console.error('Error generating image:', error);
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus(null), 2000);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0 flex items-center justify-between pb-3 border-b border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <Icons.Share className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">{isMultiple ? `Share ${versesToShare.length} Verses` : 'Share Verse'}</h3>
            <p className="text-white/60 text-xs">{surahName} : {ayahRangeStr}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-all">
          <Icons.X className="w-4 h-4 text-white/70" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-3 space-y-4">
        {/* Preview Card */}
        <div ref={cardRef} className="p-4 rounded-2xl max-h-48 overflow-y-auto" style={{ background: STYLES.find(s => s.id === selectedStyle)?.bg }}>
          {isMultiple ? (
            <div className="space-y-3">
              {versesToShare.slice(0, 3).map((v, i) => (
                <div key={v.ayahNumber} className="text-center">
                  <p className="text-white text-base leading-relaxed" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
                    {v.arabic?.substring(0, 60)}{v.arabic?.length > 60 ? '...' : ''} <span className="text-white/50 text-xs">({v.ayahNumber})</span>
                  </p>
                  <p className="text-white/70 text-xs italic">"{v.translation?.substring(0, 60)}{v.translation?.length > 60 ? '...' : ''}"</p>
                </div>
              ))}
              {versesToShare.length > 3 && (
                <p className="text-white/50 text-xs text-center">...and {versesToShare.length - 3} more verse(s)</p>
              )}
            </div>
          ) : (
            <>
              <p className="text-white text-lg mb-3 leading-relaxed text-center" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
                {verseArabic?.substring(0, 100)}{verseArabic?.length > 100 ? '...' : ''}
              </p>
              <p className="text-white/80 text-sm italic text-center mb-2">"{verseTranslation?.substring(0, 120)}{verseTranslation?.length > 120 ? '...' : ''}"</p>
            </>
          )}
          <p className="text-white/60 text-xs text-center mt-2">— {surahName} ({surahId}:{ayahRangeStr})</p>
        </div>

        {/* Style Selector */}
        <div>
          <label className="text-white/80 text-xs font-medium mb-2 block">Card Style</label>
          <div className="grid grid-cols-6 gap-2">
            {STYLES.map(style => (
              <button key={style.id} onClick={() => setSelectedStyle(style.id)}
                className={`aspect-square rounded-xl transition-all ${selectedStyle === style.id ? 'ring-2 ring-white scale-105' : 'opacity-70 hover:opacity-100'}`}
                style={{ background: style.bg }}
                title={style.name}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {/* Art Generator Button - NEW */}
          <button onClick={onOpenArtGenerator}
            className="w-full py-3 bg-gradient-to-r from-amber-500/60 to-orange-500/60 hover:from-amber-500/80 hover:to-orange-500/80 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2">
            <Icons.Palette className="w-5 h-5" /> Create Beautiful Art
          </button>

          {/* Download Image Button */}
          <button onClick={downloadImage} disabled={downloadStatus === 'generating'}
            className="w-full py-3 bg-gradient-to-r from-purple-500/60 to-pink-500/60 hover:from-purple-500/80 hover:to-pink-500/80 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50">
            {downloadStatus === 'generating' ? (
              <><Icons.Loader className="w-5 h-5 animate-spin" /> Generating...</>
            ) : downloadStatus === 'done' ? (
              <><Icons.Check className="w-5 h-5" /> Downloaded!</>
            ) : (
              <><Icons.Download className="w-5 h-5" /> Quick Download</>
            )}
          </button>

          {/* Share Button */}
          <button onClick={handleShare} disabled={shareStatus === 'generating'}
            className="w-full py-3 bg-gradient-to-r from-emerald-500/60 to-teal-500/60 hover:from-emerald-500/80 hover:to-teal-500/80 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50">
            {shareStatus === 'generating' ? <Icons.Loader className="w-5 h-5 animate-spin" /> : shareStatus === 'copied' ? <><Icons.Check className="w-5 h-5" /> Copied!</> : <><Icons.Share className="w-5 h-5" /> Share</>}
          </button>

          {/* Copy Text */}
          <button onClick={copyText} className="w-full py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-white/80 font-medium transition-all flex items-center justify-center gap-2">
            <Icons.Copy className="w-4 h-4" /> Copy Text
          </button>

          {/* Social Buttons */}
          <div className="flex gap-2">
            <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${verseTranslation?.substring(0, 200)}..." — ${surahName} (${surahId}:${ayahNumber})`)}`, '_blank')}
              className="flex-1 py-2.5 bg-[#1DA1F2]/30 hover:bg-[#1DA1F2]/50 rounded-xl text-white font-medium transition-all text-sm">Twitter</button>
            <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`${verseArabic}\n\n"${verseTranslation}"\n\n— ${surahName} (${surahId}:${ayahNumber})`)}`, '_blank')}
              className="flex-1 py-2.5 bg-[#25D366]/30 hover:bg-[#25D366]/50 rounded-xl text-white font-medium transition-all text-sm">WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
});

// ============================================
// MAIN COMPONENT
// ============================================

const BubbleReaderOverlay = memo(function BubbleReaderOverlay({ surah, onClose, darkMode, onChangeSurah, initialVerse = 1, initialPanel = null, onPanelChange, readerStyle = 'default', layoutStyle = 'spiral' }) {
  // Auth state for premium features
  const { isPremium, isAuthenticated, login } = useAuth();

  // Gamification system
  const gamification = useGamification();
  const gamificationRef = useRef(gamification);
  useEffect(() => { gamificationRef.current = gamification; }, [gamification]);
  const surahRef = useRef(surah);
  useEffect(() => { surahRef.current = surah; }, [surah]);

  // Premium feature: HD TTS is free for Surah Al-Fatiha (trial), requires premium for others
  const canUseHDTTS = isPremium || surah?.id === 1;

  // State for showing upgrade prompt
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);
  const [upgradeFeature, setUpgradeFeature] = useState(null);

  // State for Treebank Grammar Analysis
  const [showTreebank, setShowTreebank] = useState(false);
  const [treebankAyah, setTreebankAyah] = useState(null);

  const [fontSize, setFontSize] = useLocalStorage('reader_fontsize', 'medium');
  const [selectedReciter, setSelectedReciter] = useLocalStorage('reader_reciter', 'ar.alafasy');
  const [selectedTranslation, setSelectedTranslation] = useLocalStorage('reader_translation', 'ur.jalandhry');
  const [showTranslation, setShowTranslation] = useLocalStorage('reader_show_translation', true);
  const [tajweedMode, setTajweedMode] = useLocalStorage('reader_tajweed', false);
  const [wordByWordMode, setWordByWordMode] = useLocalStorage('reader_wbw', false);
  const [repeatMode, setRepeatMode] = useLocalStorage('reader_repeat', 'none');
  const [autoScroll, setAutoScroll] = useLocalStorage('reader_autoscroll', true);

  const [shareStatus, setShareStatus] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedWordData, setSelectedWordData] = useState(null);
  const [wordAudioError, setWordAudioError] = useState(null);
  const [wordAudioPlaying, setWordAudioPlaying] = useState(false);
  const wordAudioRef = useRef(null); // Ref to track and stop previous word audio
  const [showArtGenerator, setShowArtGenerator] = useState(false);
  const [showEmotionalTracker, setShowEmotionalTracker] = useState(false);
  const [showMoodEntry, setShowMoodEntry] = useState(false);
  const [showConnectionMap, setShowConnectionMap] = useState(false);
  const [showScholarSync, setShowScholarSync] = useState(false);
  // Innovative Features State
  const [showLivingVisualization, setShowLivingVisualization] = useState(false);
  const [showTimeCapsule, setShowTimeCapsule] = useState(false);
  const [showVoiceControl, setShowVoiceControl] = useState(false);
  const [showMeditation, setShowMeditation] = useState(false);
  const [showFamilyCircle, setShowFamilyCircle] = useState(false);
  // Separate state for right (tafseer) and left (other features) panels
  const [showTafseer, setShowTafseer] = useState(false);
  const [leftFeature, setLeftFeature] = useState(null); // 'youtube', 'memorize', 'bookmark', 'share'
  const [memorizeSettings, setMemorizeSettings] = useState({ hideLevel: 0 });
  const [showSurahDetails, setShowSurahDetails] = useState(false);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedVerses, setSelectedVerses] = useState([]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAyah, setCurrentAyah] = useState(1);
  const [audioLoading, setAudioLoading] = useState(false);
  const [audioError, setAudioError] = useState(null);
  const [speakingAyah, setSpeakingAyah] = useState(null); // Track which ayah translation is being spoken

  // Translation Audio Playback State
  const [isPlayingTranslation, setIsPlayingTranslation] = useState(false);
  const [translationAyah, setTranslationAyah] = useState(1);
  const [audioMode, setAudioMode] = useState('arabic'); // 'arabic' | 'translation' | 'combined'
  const [isPlayingCombined, setIsPlayingCombined] = useState(false);
  const [combinedPhase, setCombinedPhase] = useState('arabic'); // 'arabic' | 'translation' - which phase of combined playback
  const [translationAudioSource, setTranslationAudioSource] = useState(null); // 'api' | 'tts' | null
  const [translationReciterInfo, setTranslationReciterInfo] = useState(null); // Info about the API audio reciter
  const [selectedTranslationNarrator, setSelectedTranslationNarrator] = useLocalStorage('reader_translation_narrator', null); // User-selected narrator override

  const audioRef = useRef(null);
  const translationAudioRef = useRef(null);
  const isPlayingTranslationRef = useRef(false);
  const isPlayingCombinedRef = useRef(false);
  const versesRef = useRef([]);

  // Audio prefetch cache for smooth playback
  const audioCacheRef = useRef(new Map()); // Map<cacheKey, {audio: Audio, blob: Blob}>
  const prefetchAbortRef = useRef(null); // AbortController for canceling prefetch
  const prefetchingRef = useRef(new Set()); // Currently prefetching URLs

  // Offline status for this surah
  const [offlineStatus, setOfflineStatus] = useState(null); // { hasArabic, hasTranslation, translationLabel, hasAudio, reciterName }

  useEffect(() => {
    if (!surah?.id) return;
    let cancelled = false;

    (async () => {
      try {
        const [cachedArabic, cachedTranslation] = await Promise.all([
          getCachedSurah(surah.id, 'quran-uthmani'),
          getCachedSurah(surah.id, selectedTranslation),
        ]);
        const audioList = await getDownloadedAudio();
        const audioInfo = audioList.find(a => a.surahId === surah.id);

        if (cancelled) return;

        const hasArabic = !!cachedArabic;
        const hasTranslation = !!cachedTranslation;
        const hasAudio = !!audioInfo;

        if (hasArabic || hasTranslation || hasAudio) {
          const tLabel = TRANSLATIONS[selectedTranslation]?.language || selectedTranslation;
          const rName = audioInfo ? (RECITERS[audioInfo.reciterId]?.name || audioInfo.reciterId) : null;
          setOfflineStatus({ hasArabic, hasTranslation, translationLabel: tLabel, hasAudio, reciterName: rName });
        } else {
          setOfflineStatus(null);
        }
      } catch {
        if (!cancelled) setOfflineStatus(null);
      }
    })();

    return () => { cancelled = true; };
  }, [surah?.id, selectedTranslation]);

  // Progressive loading state for large surahs (prevents Safari crashes)
  const [visibleVerseCount, setVisibleVerseCount] = useState(INITIAL_VERSE_CHUNK);
  const [isLoadingMoreVerses, setIsLoadingMoreVerses] = useState(false);
  const loadMoreTriggerRef = useRef(null); // IntersectionObserver target
  const isLargeSurah = (surah?.ayahs || 0) > LARGE_SURAH_THRESHOLD;

  // Book page navigation state
  const VERSES_PER_PAGE = 7;
  const totalPages = Math.ceil((surah?.ayahs || 7) / VERSES_PER_PAGE);
  const [currentBookPage, setCurrentBookPage] = useState(1);

  // Scroll to specific page in book layout
  const scrollToBookPage = useCallback((pageNum) => {
    setCurrentBookPage(pageNum);
    const firstVerseOfPage = (pageNum - 1) * VERSES_PER_PAGE + 1;
    const verseElement = versesContainerRef.current?.querySelector(`[data-ayah="${firstVerseOfPage}"]`);
    if (verseElement) {
      verseElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Reader style - optimized for each layout's theme (light or dark)
  // CRITICAL: Uses OVERLAY_STYLES config values for dynamic theming
  const readerStyleConfig = useMemo(() => {
    const styleKey = layoutToOverlayStyle[layoutStyle] || 'bubble';
    let styleConfig = { ...OVERLAY_STYLES[styleKey] };

    // Apply dynamic styles for Timeline (Revelation) layout based on Makki/Madani
    if (styleKey === 'timeline' && surah) {
      const isMakki = surah.type === 'Makki' || surah.revelationType === 'Meccan';
      const dynamicStyle = isMakki
        ? styleConfig.getMakkiStyle?.()
        : styleConfig.getMadaniStyle?.();
      if (dynamicStyle) {
        styleConfig = { ...styleConfig, ...dynamicStyle };
      }
    }

    // Apply dynamic styles for Length layout based on ayah count
    if (styleKey === 'length' && surah) {
      const ayahCount = surah.ayahs || 0;
      let dynamicStyle;
      if (ayahCount <= 30) {
        dynamicStyle = styleConfig.getShortStyle?.();
      } else if (ayahCount <= 80) {
        dynamicStyle = styleConfig.getMediumStyle?.();
      } else {
        dynamicStyle = styleConfig.getLongStyle?.();
      }
      if (dynamicStyle) {
        styleConfig = { ...styleConfig, ...dynamicStyle };
      }
    }

    const isDark = styleConfig?.isDark ?? true;
    const isCalm = styleConfig?.isCalm ?? true;

    // Extract theme colors from config, with sensible defaults
    const colors = {
      text: styleConfig?.textColor || (isDark ? 'rgba(255,255,255,0.95)' : '#1e293b'),
      translation: styleConfig?.translationColor || (isDark ? 'rgba(255,255,255,0.7)' : '#64748b'),
      verseBg: styleConfig?.verseBg || (isDark ? 'rgba(255,255,255,0.04)' : '#f8fafc'),
      verseBorder: styleConfig?.verseBorder || (isDark ? 'rgba(255,255,255,0.06)' : '#e2e8f0'),
      activeBg: styleConfig?.activeBg || (isDark ? 'rgba(20,184,166,0.12)' : '#f0fdf4'),
      activeBorder: styleConfig?.activeBorder || (isDark ? 'rgba(20,184,166,0.3)' : '#86efac'),
      badgeBg: styleConfig?.badgeBg || (isDark ? 'rgba(20,184,166,0.2)' : '#ecfdf5'),
      badgeColor: styleConfig?.badgeColor || (isDark ? '#5eead4' : '#059669'),
    };

    return {
      container: 'flex flex-col gap-3',
      isDark,
      isCalm,
      colors,
      // Base verse card classes (layout only, colors via inline styles)
      verse: 'rounded-2xl p-5 transition-all duration-500',
      // Empty Tailwind classes - all styling via inline styles now
      verseActive: '',
      verseDefault: '',
      verseBorder: '',
      // Ayah badge base classes (colors via inline styles)
      ayahBadge: 'inline-flex items-center justify-center w-7 h-7 rounded-full ml-2 text-xs font-bold flex-shrink-0',
      arabicExtra: '',
      translationExtra: '',
      badgePosition: 'inline',
    };
  }, [layoutStyle, surah]);

  // Log surah open event and track reading start time
  const readingStartTime = useRef(Date.now());
  useEffect(() => {
    if (surah?.id) {
      logger.surahOpen(surah.id, surah.name);
      logger.memoryWarning('surah open');
      readingStartTime.current = Date.now();
    }
    return () => {
      if (surah?.id) {
        logger.surahClose(surah.id, currentAyah);
        // Track surah reading with duration and completion
        const durationSeconds = Math.round((Date.now() - readingStartTime.current) / 1000);
        const completionPercent = Math.round((currentAyah / (surah.ayahs || 1)) * 100);
        trackSurahRead(surah.id, durationSeconds, completionPercent);
      }
    };
  }, [surah?.id]);

  // Reset visible verse count when surah changes
  useEffect(() => {
    setVisibleVerseCount(INITIAL_VERSE_CHUNK);
    setIsLoadingMoreVerses(false);
  }, [surah?.id]);

  // Progressive loading: IntersectionObserver to load more verses on scroll
  useEffect(() => {
    if (!isLargeSurah || !loadMoreTriggerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoadingMoreVerses) {
          const totalVerseCount = surah?.ayahs || 0;
          if (visibleVerseCount < totalVerseCount) {
            setIsLoadingMoreVerses(true);
            // Use requestAnimationFrame to batch DOM updates
            requestAnimationFrame(() => {
              setVisibleVerseCount(prev => {
                const newCount = Math.min(prev + VERSE_CHUNK_SIZE, totalVerseCount);
                logger.performance(`Progressive load: ${prev} -> ${newCount} verses`, {
                  surahId: surah?.id,
                  totalVerses: totalVerseCount,
                  isSafari: isMobileSafari
                });
                return newCount;
              });
              setIsLoadingMoreVerses(false);
            });
          }
        }
      },
      { rootMargin: '200px', threshold: 0.1 }
    );

    const trigger = loadMoreTriggerRef.current;
    if (trigger) observer.observe(trigger);

    return () => {
      if (trigger) observer.unobserve(trigger);
    };
  }, [isLargeSurah, visibleVerseCount, isLoadingMoreVerses, surah?.id, surah?.ayahs]);

  // Get language code from translation for TTS
  const ttsLanguage = useMemo(() => {
    if (!selectedTranslation) return 'en';
    return selectedTranslation.split('.')[0] || 'en';
  }, [selectedTranslation]);

  // Get all translation narrators for current language
  const allLanguageNarrators = useMemo(() => {
    return getAvailableTranslationAudio(ttsLanguage);
  }, [ttsLanguage]);

  // Show all available narrators for the language + TTS option
  const availableNarrators = useMemo(() => {
    const narrators = [];

    // Add ALL human voice narrators for this language (not TTS-based)
    allLanguageNarrators.forEach(narrator => {
      const reciterInfo = TRANSLATION_RECITERS[narrator.id];
      if (!reciterInfo) return;

      // Skip TTS-based narrators (they're covered by the TTS option below)
      if (reciterInfo.source === 'tts') return;

      // Add all human voice narrators
      narrators.push(narrator);
    });

    // Always add TTS option for any translation
    narrators.push({
      id: 'tts',
      name: 'Google TTS',
      nameNative: 'گوگل ٹی ٹی ایس',
      translationShort: 'TTS',
      style: 'tts',
      styleLabel: 'AI آواز',
    });

    return narrators;
  }, [allLanguageNarrators]);

  // Check if we have any human audio narrators (excluding the TTS option)
  const hasMatchingAudio = availableNarrators.some(n => n.id !== 'tts');

  // Get default narrator for current translation from mapping
  const defaultNarratorForTranslation = useMemo(() => {
    const source = getTranslationAudioSource(selectedTranslation);
    return source?.audioId || null;
  }, [selectedTranslation]);

  // Smart auto-select narrator: prefer human voice matching translation, then TTS
  const smartDefaultNarrator = useMemo(() => {
    // 1. If there's a human narrator that matches this translation, use it
    if (defaultNarratorForTranslation) {
      const narrator = availableNarrators.find(n => n.id === defaultNarratorForTranslation);
      if (narrator) {
        return defaultNarratorForTranslation;
      }
    }

    // 2. Otherwise, find the first human narrator for this language
    const humanNarrator = availableNarrators.find(n => n.id !== 'tts');
    if (humanNarrator) {
      return humanNarrator.id;
    }

    // 3. Fall back to TTS
    return 'tts';
  }, [availableNarrators, defaultNarratorForTranslation]);

  // Effective narrator: user selection if valid, otherwise smart default
  const effectiveNarrator = useMemo(() => {
    // If user selected a narrator, check if it's available
    if (selectedTranslationNarrator) {
      const isAvailable = availableNarrators.some(n => n.id === selectedTranslationNarrator);
      if (isAvailable) {
        return selectedTranslationNarrator;
      }
    }
    // Otherwise use smart default based on word-by-word mode
    return smartDefaultNarrator;
  }, [selectedTranslationNarrator, ttsLanguage, smartDefaultNarrator, availableNarrators]);

  // Audio source URLs for narrators with pre-recorded verse-by-verse audio
  // Note: Translations not listed here will use Google Cloud TTS
  const narratorUrlConfig = {
    // Urdu - EveryAyah (verse-by-verse files) - Shamshad Ali Khan / Hafeez Jalandhari
    'ur.khan': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps' },
    'ur.farhat': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/translations/urdu_farhat_hashmi' },
    // Note: ur.kanzuliman uses Google Cloud TTS (no pre-recorded verse audio)
    // English
    'en.walk': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps' },
    // Persian
    'fa.hedayatfar': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/translations/Fooladvand_Hedayatfar_40Kbps' },
    'fa.kabiri': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/translations/Makarem_Kabiri_16Kbps' },
    // Azerbaijani
    'az.balayev': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/translations/azerbaijani/balayev' },
    // Bosnian
    'bs.korkut': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/translations/besim_korkut_ajet_po_ajet' },
  };

  // Build API audio source from effective narrator
  const apiAudioSource = useMemo(() => {
    if (!effectiveNarrator || !narratorUrlConfig[effectiveNarrator]) {
      return null;
    }
    const config = narratorUrlConfig[effectiveNarrator];
    return {
      audioId: effectiveNarrator,
      type: config.type,
      baseUrl: config.baseUrl,
      reciter: TRANSLATION_RECITERS[effectiveNarrator],
    };
  }, [effectiveNarrator]);

  // Handle narrator dropdown change - just update state, effect handles restart
  const handleNarratorChange = useCallback((newNarrator) => {
    console.log('[Narrator] Changing to:', newNarrator);
    setSelectedTranslationNarrator(newNarrator);
  }, [setSelectedTranslationNarrator]);

  // ============ AUDIO PREFETCH SYSTEM ============
  // Prefetch upcoming ayahs for instant playback

  // Clear audio cache
  const clearAudioCache = useCallback(() => {
    console.log('[Prefetch] Clearing audio cache, size:', audioCacheRef.current.size);
    // Revoke blob URLs to free memory
    audioCacheRef.current.forEach((cached) => {
      if (cached.blobUrl) URL.revokeObjectURL(cached.blobUrl);
    });
    audioCacheRef.current.clear();
    prefetchingRef.current.clear();
    // Abort any pending fetches
    if (prefetchAbortRef.current) {
      prefetchAbortRef.current.abort();
      prefetchAbortRef.current = null;
    }
  }, []);

  // Generate cache key for an ayah
  const getAudioCacheKey = useCallback((surahId, ayahNum, reciterId) => {
    return `${surahId}-${ayahNum}-${reciterId}`;
  }, []);

  // Prefetch a single audio file
  const prefetchAudio = useCallback(async (url, cacheKey, signal) => {
    if (audioCacheRef.current.has(cacheKey) || prefetchingRef.current.has(cacheKey)) {
      return; // Already cached or prefetching
    }

    prefetchingRef.current.add(cacheKey);
    console.log('[Prefetch] Starting prefetch:', cacheKey);

    try {
      const response = await fetch(url, { signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      // Create preloaded Audio element
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = blobUrl;

      // Wait for audio to be ready
      await new Promise((resolve, reject) => {
        audio.oncanplaythrough = resolve;
        audio.onerror = reject;
        // Timeout after 10 seconds
        setTimeout(resolve, 10000);
      });

      audioCacheRef.current.set(cacheKey, { audio, blobUrl, url });
      console.log('[Prefetch] Cached:', cacheKey);
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.log('[Prefetch] Failed:', cacheKey, err.message);
      }
    } finally {
      prefetchingRef.current.delete(cacheKey);
    }
  }, []);

  // Prefetch next N ayahs (reduced on Safari to prevent crashes)
  const prefetchNextAyahs = useCallback((currentAyahNum, count = 3) => {
    if (!surah?.id || !selectedReciter) return;

    // Safari/iOS optimization: reduce prefetching and check memory
    const safariCount = isMobileSafari ? 1 : count; // Only prefetch 1 on Safari
    const effectiveCount = checkMemoryPressure() ? 0 : safariCount; // Skip if high memory

    if (effectiveCount === 0) {
      console.log('[Prefetch] Skipping - memory pressure or Safari limit');
      return;
    }

    // Create new AbortController for this batch
    if (prefetchAbortRef.current) {
      prefetchAbortRef.current.abort();
    }
    prefetchAbortRef.current = new AbortController();
    const signal = prefetchAbortRef.current.signal;

    const total = totalVersesRef.current || surah.ayahs;

    // Limit cache size on Safari to prevent memory buildup
    if (isMobileSafari && audioCacheRef.current.size > 5) {
      console.log('[Prefetch] Clearing old cache entries for Safari');
      const entries = Array.from(audioCacheRef.current.entries());
      // Keep only the 3 most recent entries
      entries.slice(0, entries.length - 3).forEach(([key, cached]) => {
        if (cached.blobUrl) {
          URL.revokeObjectURL(cached.blobUrl);
        }
        audioCacheRef.current.delete(key);
      });
    }

    for (let i = 1; i <= effectiveCount; i++) {
      const nextAyah = currentAyahNum + i;
      if (nextAyah > total) break;

      // Arabic audio URL
      const paddedSurah = String(surah.id).padStart(3, '0');
      const paddedAyah = String(nextAyah).padStart(3, '0');
      const arabicUrl = `https://cdn.islamic.network/quran/audio/128/${selectedReciter}/${getGlobalAyahNumber(surah.id, nextAyah)}.mp3`;
      const arabicKey = getAudioCacheKey(surah.id, nextAyah, selectedReciter);

      prefetchAudio(arabicUrl, arabicKey, signal);

      // Skip translation prefetch on Safari to save memory
      if (!isMobileSafari && effectiveNarrator && narratorUrlConfig[effectiveNarrator]) {
        const config = narratorUrlConfig[effectiveNarrator];
        if (config.type === 'everyayah') {
          const transUrl = `${config.baseUrl}/${paddedSurah}${paddedAyah}.mp3`;
          const transKey = getAudioCacheKey(surah.id, nextAyah, effectiveNarrator);
          prefetchAudio(transUrl, transKey, signal);
        }
      }
    }
  }, [surah?.id, selectedReciter, effectiveNarrator, prefetchAudio, getAudioCacheKey]);

  // Get cached audio or null
  const getCachedAudio = useCallback((surahId, ayahNum, reciterId) => {
    const key = getAudioCacheKey(surahId, ayahNum, reciterId);
    const cached = audioCacheRef.current.get(key);
    if (cached) {
      console.log('[Prefetch] Cache HIT:', key);
      // Clone the audio for playback (so we can reuse cached version)
      const audio = new Audio(cached.blobUrl);
      audio.preload = 'auto';
      return audio;
    }
    console.log('[Prefetch] Cache MISS:', key);
    return null;
  }, [getAudioCacheKey]);

  // Clear cache when surah changes
  useEffect(() => {
    clearAudioCache();
  }, [surah?.id, clearAudioCache]);

  // Clear cache and stop translation audio when translation/narrator changes
  useEffect(() => {
    // Stop any playing translation audio
    if (translationAudioRef.current) {
      console.log('[Translation-Change] Stopping translation audio');
      translationAudioRef.current.pause();
      translationAudioRef.current.src = '';
      translationAudioRef.current = null;
    }
    // Clear the prefetch cache for old translation
    clearAudioCache();
    console.log('[Translation-Change] Cleared cache for new translation:', selectedTranslation, 'narrator:', effectiveNarrator);
  }, [selectedTranslation, effectiveNarrator, clearAudioCache]);

  // ============ END AUDIO PREFETCH SYSTEM ============

  // Ref to track previous narrator for change detection
  const prevNarratorRef = useRef(effectiveNarrator);

  // TTS Audio ref
  const ttsAudioRef = useRef(null);

  // TTS helper function - uses server-side proxy for security
  // API key is stored server-side in Cloudflare environment variables
  // Premium feature: HD TTS requires premium OR Surah Al-Fatiha (free trial)
  const playGoogleCloudTTS = useCallback(async (text, langCode = 'ur') => {
    console.log('[TTS] Calling proxy with lang:', langCode, 'text length:', text?.length);

    // Check premium access - HD TTS is free for Fatiha, premium for others
    if (!canUseHDTTS) {
      console.log('[TTS] HD TTS requires premium. Surah:', surah?.id);
      setUpgradeFeature('hd-tts');
      setShowUpgradePrompt(true);
      return { blocked: true }; // Premium required - don't advance ayah
    }

    try {
      // Use server-side proxy - API key is stored securely on server
      // Pass surah ID for server-side premium verification
      const response = await fetch(`/api/tts?text=${encodeURIComponent(text)}&lang=${langCode}&surah=${surah?.id || 0}`);

      console.log('[TTS] Proxy response status:', response.status);

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
          const errorData = await response.json();
          // Handle server-side premium check rejection
          if (errorData.code === 'PREMIUM_REQUIRED') {
            console.log('[TTS] Server rejected - premium required');
            setUpgradeFeature('hd-tts');
            setShowUpgradePrompt(true);
            return { blocked: true };
          }
          if (errorData.useBrowserTTS) {
            console.log('[TTS] Server suggests browser TTS fallback');
            return null;
          }
        }
        console.error('[TTS] Proxy error:', response.status);
        return null;
      }

      // Response is audio/mpeg - convert to data URL
      const audioBlob = await response.blob();
      if (audioBlob.size < 100) {
        console.error('[TTS] Audio too small, likely error');
        return null;
      }

      const audioUrl = URL.createObjectURL(audioBlob);
      console.log('[TTS] Got audio, size:', audioBlob.size);

      return audioUrl;
    } catch (error) {
      console.error('[TTS] Error:', error);
      return null;
    }
  }, [canUseHDTTS, surah?.id]);

  // Speak translation using Google Cloud TTS API (single verse tap)
  const speakTranslation = useCallback(async (ayahNum, translationText) => {
    if (!translationText) return;

    // If already speaking, stop
    if (speakingAyah === ayahNum) {
      if (ttsAudioRef.current) {
        ttsAudioRef.current.pause();
        ttsAudioRef.current = null;
      }
      setSpeakingAyah(null);
      return;
    }

    // Stop any ongoing audio
    if (ttsAudioRef.current) {
      ttsAudioRef.current.pause();
      ttsAudioRef.current = null;
    }

    setSpeakingAyah(ayahNum);

    // Use Google Cloud TTS API
    console.log('[GoogleTTS] Speaking ayah:', ayahNum, 'lang:', ttsLanguage);
    const result = await playGoogleCloudTTS(translationText, ttsLanguage);

    // Check if blocked by premium gate
    if (result?.blocked) {
      console.log('[TTS] Blocked by premium gate');
      setSpeakingAyah(null);
      return;
    }

    if (result && typeof result === 'string') {
      const audio = new Audio(result);
      ttsAudioRef.current = audio;

      audio.onended = () => {
        setSpeakingAyah(null);
      };
      audio.onerror = () => {
        setSpeakingAyah(null);
      };

      audio.play().catch(() => {
        setSpeakingAyah(null);
      });
    } else {
      // No audio available (API error)
      setSpeakingAyah(null);
    }
  }, [speakingAyah, ttsLanguage, playGoogleCloudTTS]);

  // Play translation audio using Google Cloud TTS API (continuous playback)
  const playTranslationWithTTS = useCallback(async (ayahNum, translationText, totalAyahs, playbackId) => {
    // Truncate long text to avoid API limits (Google TTS has ~5000 char limit)
    const maxLength = 4000;
    const truncatedText = translationText.length > maxLength
      ? translationText.substring(0, maxLength) + '...'
      : translationText;

    console.log('[GoogleTTS] Playing ayah:', ayahNum, 'lang:', ttsLanguage);
    setTranslationAudioSource('tts');
    setTranslationReciterInfo({ name: 'Google TTS', nameNative: 'گوگل ٹی ٹی ایس' });

    const isLast = ayahNum >= totalAyahs;

    try {
      const result = await playGoogleCloudTTS(truncatedText, ttsLanguage);

      // Check if blocked by premium gate - stop playback, don't advance
      if (result?.blocked) {
        console.log('[GoogleTTS] Blocked by premium gate - stopping playback');
        setIsPlayingTranslation(false);
        isPlayingTranslationRef.current = false;
        return;
      }

      if (!result || typeof result !== 'string') {
        console.error('[GoogleTTS] Failed to get audio URL, advancing...');
        if (!isLast && isPlayingTranslationRef.current) {
          setTimeout(() => setTranslationAyah(prev => prev + 1), 300);
        } else {
          setIsPlayingTranslation(false);
          isPlayingTranslationRef.current = false;
          setTranslationAyah(1);
        }
        return;
      }

      const audio = new Audio(result);
      audio._playbackId = playbackId;
      audio._isTTS = true;
      audio._audioUrl = result;
      translationAudioRef.current = audio;

      audio.onended = () => {
        // Data URLs don't need revoking
        if (translationAudioRef.current?._playbackId !== playbackId) return;
        if (!isLast && isPlayingTranslationRef.current) {
          setTranslationAyah(prev => prev + 1);
        } else {
          setIsPlayingTranslation(false);
          isPlayingTranslationRef.current = false;
          setTranslationAyah(1);
        }
      };

      audio.onerror = (e) => {
        // Data URLs don't need revoking
        if (translationAudioRef.current?._playbackId !== playbackId) return;
        console.error('[GoogleTTS] Audio playback error:', e);
        if (!isLast && isPlayingTranslationRef.current) {
          setTimeout(() => setTranslationAyah(prev => prev + 1), 300);
        } else {
          setIsPlayingTranslation(false);
          isPlayingTranslationRef.current = false;
        }
      };

      console.log('[GoogleTTS] Attempting to play audio...');
      await audio.play();
      console.log('[GoogleTTS] Audio playing successfully');
    } catch (error) {
      console.error('[GoogleTTS] Error playing TTS:', error);
      if (!isLast && isPlayingTranslationRef.current) {
        setTimeout(() => setTranslationAyah(prev => prev + 1), 300);
      } else {
        setIsPlayingTranslation(false);
        isPlayingTranslationRef.current = false;
        setTranslationAyah(1);
      }
    }
  }, [ttsLanguage, playGoogleCloudTTS]);

  // Play full surah translation audio (API audio first, TTS fallback)
  const playTranslationAudio = useCallback((ayahNum, translationText, totalAyahs) => {
    if (!translationText) {
      // No translation available - auto-advance to next verse
      console.log('[TranslationAudio] No translation text for ayah', ayahNum, '- advancing');
      const isLast = ayahNum >= totalAyahs;
      if (!isLast && isPlayingTranslationRef.current) {
        setTranslationAyah(prev => prev + 1);
      } else {
        setIsPlayingTranslation(false);
        isPlayingTranslationRef.current = false;
        setTranslationAyah(1);
      }
      return;
    }

    // Stop any existing audio gracefully
    if (translationAudioRef.current) {
      const oldAudio = translationAudioRef.current;
      translationAudioRef.current = null;
      oldAudio.pause();
      oldAudio.src = '';
    }

    const playbackId = Date.now();
    const isLast = ayahNum >= totalAyahs;

    // Try API audio first if available for this translation (EveryAyah verse-by-verse files)
    if (apiAudioSource) {
      // Handle EveryAyah-style playback (verse-by-verse files)
      const apiUrl = getTranslationAudioUrl(surah?.id, ayahNum, apiAudioSource.audioId);

      if (apiUrl) {
        const audio = new Audio();
        audio._playbackId = playbackId;
        audio._isAPI = true;
        translationAudioRef.current = audio;

        setTranslationAudioSource('api');
        setTranslationReciterInfo(apiAudioSource.reciter);

        audio.onended = () => {
          if (translationAudioRef.current?._playbackId !== playbackId) return;
          if (!isLast && isPlayingTranslationRef.current) {
            setTranslationAyah(prev => prev + 1);
          } else {
            setIsPlayingTranslation(false);
            isPlayingTranslationRef.current = false;
            setTranslationAyah(1);
          }
        };

        audio.onerror = () => {
          if (translationAudioRef.current?._playbackId !== playbackId) return;
          // API audio failed - fall back to TTS
          console.log('[TranslationAudio] API audio failed, falling back to TTS');
          playTranslationWithTTS(ayahNum, translationText, totalAyahs, playbackId);
        };

        audio.src = apiUrl;
        audio.load();

        audio.oncanplaythrough = () => {
          if (translationAudioRef.current?._playbackId !== playbackId) return;
          audio.play().catch((err) => {
            if (err.name === 'AbortError') return;
            // Play failed - fall back to TTS
            console.log('[TranslationAudio] API audio play failed, falling back to TTS');
            playTranslationWithTTS(ayahNum, translationText, totalAyahs, playbackId);
          });
        };

        return;
      }
    }

    // No API audio available - use TTS directly
    playTranslationWithTTS(ayahNum, translationText, totalAyahs, playbackId);
  }, [ttsLanguage, apiAudioSource, surah?.id, playTranslationWithTTS]);

  // Toggle translation playback
  const toggleTranslationPlayback = useCallback(() => {
    if (isPlayingTranslation) {
      // Stop
      if (translationAudioRef.current) {
        translationAudioRef.current.pause();
        translationAudioRef.current = null;
      }
      setIsPlayingTranslation(false);
      isPlayingTranslationRef.current = false;
    } else {
      // Start from current ayah
      setTranslationAyah(currentAyah);
      setIsPlayingTranslation(true);
      isPlayingTranslationRef.current = true;
      // Stop Arabic recitation if playing
      if (isPlaying) {
        setIsPlaying(false);
      }
    }
  }, [isPlayingTranslation, currentAyah, isPlaying]);

  // Toggle combined playback (Arabic + Translation)
  const toggleCombinedPlayback = useCallback(() => {
    console.log('[Combined] Toggle called, isPlayingCombined:', isPlayingCombined);
    if (isPlayingCombined) {
      // Stop combined playback
      console.log('[Combined] Stopping combined playback');
      setIsPlayingCombined(false);
      isPlayingCombinedRef.current = false;
      setIsPlaying(false);
      setCombinedPhase('arabic');
      if (translationAudioRef.current) {
        translationAudioRef.current.pause();
        translationAudioRef.current = null;
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      // Start combined playback from current ayah
      console.log('[Combined] Starting combined playback from ayah:', currentAyah);

      // IMPORTANT: Stop any existing translation audio first
      if (translationAudioRef.current) {
        translationAudioRef.current.pause();
        translationAudioRef.current.src = '';
        translationAudioRef.current = null;
      }

      // Stop translation-only mode if playing
      if (isPlayingTranslation) {
        setIsPlayingTranslation(false);
        isPlayingTranslationRef.current = false;
      }

      // Now start combined mode - Arabic first
      setIsPlayingCombined(true);
      isPlayingCombinedRef.current = true;
      setCombinedPhase('arabic');
      setIsPlaying(true);
    }
  }, [isPlayingCombined, isPlayingTranslation, currentAyah]);

  // Stop translation when switching surahs
  useEffect(() => {
    setIsPlayingTranslation(false);
    isPlayingTranslationRef.current = false;
    setIsPlayingCombined(false);
    isPlayingCombinedRef.current = false;
    setCombinedPhase('arabic');
    setTranslationAyah(1);
    setTranslationAudioSource(null);
    if (translationAudioRef.current) {
      translationAudioRef.current.pause();
      translationAudioRef.current = null;
    }
  }, [surah?.id]);

  // Reset translation audio source when translation changes
  useEffect(() => {
    setTranslationAudioSource(null);
    setTranslationReciterInfo(apiAudioSource?.reciter || null);
  }, [selectedTranslation, apiAudioSource]);

  const versesContainerRef = useRef(null);
  const startTime = useRef(Date.now());

  // Track reading activity for Global Ummah Pulse
  useEffect(() => {
    if (surah?.id) {
      import('./GlobalUmmahPulse').then(m => m.trackReadingActivity(surah.id)).catch(() => {});
    }
  }, [surah?.id]);

  const isPlayingRef = useRef(isPlaying);
  const currentAyahRef = useRef(currentAyah);
  const repeatModeRef = useRef(repeatMode);

  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);
  useEffect(() => { currentAyahRef.current = currentAyah; }, [currentAyah]);
  useEffect(() => { repeatModeRef.current = repeatMode; }, [repeatMode]);

  const { verses, loading, error } = useQuranAPI(surah?.id, { translationId: selectedTranslation, includeTajweed: tajweedMode, includeWordByWord: false });
  const { wordsMap, loading: wordsLoading, isFallback: isWordsFallback, userLanguage: wordsUserLang } = useMultilingualWords(wordByWordMode ? surah?.id : null, selectedTranslation);

  const palette = useMemo(() => PALETTES[(surah?.id - 1) % 10], [surah?.id]);

  // Get overlay style configuration based on layout
  // CRITICAL: Apply dynamic styles for Timeline (Makki/Madani) and Length layouts
  const overlayConfig = useMemo(() => {
    const styleKey = layoutToOverlayStyle[layoutStyle] || 'bubble';
    let config = { ...OVERLAY_STYLES[styleKey] };

    // Apply dynamic styles for Timeline (Revelation) layout based on Makki/Madani
    if (styleKey === 'timeline' && surah) {
      const isMakki = surah.type === 'Makki' || surah.revelationType === 'Meccan';
      const dynamicStyle = isMakki
        ? config.getMakkiStyle?.()
        : config.getMadaniStyle?.();
      if (dynamicStyle) {
        config = { ...config, ...dynamicStyle };
      }
    }

    // Apply dynamic styles for Length layout based on ayah count
    if (styleKey === 'length' && surah) {
      const ayahCount = surah.ayahs || 0;
      let dynamicStyle;
      if (ayahCount <= 30) {
        dynamicStyle = config.getShortStyle?.();
      } else if (ayahCount <= 80) {
        dynamicStyle = config.getMediumStyle?.();
      } else {
        dynamicStyle = config.getLongStyle?.();
      }
      if (dynamicStyle) {
        config = { ...config, ...dynamicStyle };
      }
    }

    // Debug: log which style is being applied
    console.log('[BubbleReaderOverlay] Layout:', layoutStyle, '→ Style:', styleKey, '→ isDark:', config?.isDark);
    return config;
  }, [layoutStyle, surah]);

  const totalVerses = verses.length || surah?.ayahs || 0;
  const totalVersesRef = useRef(totalVerses);
  useEffect(() => { totalVersesRef.current = totalVerses; }, [totalVerses]);

  // Sync verses ref for use in callbacks
  useEffect(() => {
    versesRef.current = verses;
  }, [verses]);

  // Progressive loading: expand visible verses when currentAyah approaches the limit
  useEffect(() => {
    if (!isLargeSurah) return;
    // Load more when within 5 verses of the visible limit
    if (currentAyah >= visibleVerseCount - 5 && visibleVerseCount < verses.length) {
      setVisibleVerseCount(prev => Math.min(prev + VERSE_CHUNK_SIZE, verses.length));
    }
  }, [currentAyah, isLargeSurah, visibleVerseCount, verses.length]);

  // Effect to restart audio when narrator changes while playing
  useEffect(() => {
    const prevNarrator = prevNarratorRef.current;
    prevNarratorRef.current = effectiveNarrator;

    // Only restart if narrator actually changed and audio is playing
    if (prevNarrator && effectiveNarrator && prevNarrator !== effectiveNarrator) {
      console.log('[Narrator] Changed from', prevNarrator, 'to', effectiveNarrator);

      if (isPlayingTranslation && translationAudioRef.current) {
        // Stop current audio
        translationAudioRef.current.pause();
        translationAudioRef.current = null;

        // Get current verse info for restart (use ref to avoid TDZ issues)
        const currentVerses = versesRef.current;
        const verse = currentVerses.find(v => v.number === translationAyah);
        if (verse) {
          // Build new audio source directly from new narrator
          const config = narratorUrlConfig[effectiveNarrator];
          const newSource = config ? {
            audioId: effectiveNarrator,
            type: config.type,  // Use actual type from config (everyayah or timestamp)
            baseUrl: config.baseUrl,  // Use actual baseUrl from config
            reciter: TRANSLATION_RECITERS[effectiveNarrator],
          } : null;

          if (newSource) {
            // Handle timestamp-based audio differently (Kanz ul Iman)
            if (newSource.type === 'timestamp') {
              // For timestamp-based, just restart playTranslationAudio which handles it
              const translationText = verse.translation;
              if (translationText) {
                playTranslationAudio(translationAyah, translationText, currentVerses.length);
              }
            } else {
              // EveryAyah-style playback
              const apiUrl = getTranslationAudioUrl(surah?.id, translationAyah, newSource.audioId);
              if (apiUrl) {
                const audio = new Audio(apiUrl);
                audio._playbackId = Date.now();
                audio._isAPI = true;
                translationAudioRef.current = audio;

                setTranslationAudioSource('api');
                setTranslationReciterInfo(newSource.reciter);

                const isLast = translationAyah >= currentVerses.length;
                audio.onended = () => {
                  if (!isLast && isPlayingTranslationRef.current) {
                    setTranslationAyah(prev => prev + 1);
                  } else {
                    setIsPlayingTranslation(false);
                    isPlayingTranslationRef.current = false;
                    setTranslationAyah(1);
                  }
                };

                audio.play().catch(err => {
                  console.log('[Narrator] Play failed:', err);
                });
              }
            }
          }
        }
      }
    }
  }, [effectiveNarrator, isPlayingTranslation, translationAyah, surah?.id]);

  // Scroll to initial verse when verses load (for navigation from timeline/map)
  useEffect(() => {
    // Bounds check: ensure initialVerse is valid
    const targetVerse = Math.min(Math.max(1, initialVerse), verses.length || 1);

    if (targetVerse > 1 && verses.length > 0 && versesContainerRef.current) {
      // For progressive loading: ensure enough verses are loaded to show target
      if (isLargeSurah && targetVerse > visibleVerseCount) {
        // Expand visible count to include target verse + buffer
        setVisibleVerseCount(Math.min(targetVerse + VERSE_CHUNK_SIZE, verses.length));
      }

      // Set current ayah to the initial verse
      setCurrentAyah(targetVerse);

      // Scroll to the verse after a short delay to ensure DOM is ready
      const scrollTimer = setTimeout(() => {
        const ayahElement = versesContainerRef.current?.querySelector(`[data-ayah="${targetVerse}"]`);
        if (ayahElement) {
          ayahElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Highlight the verse briefly
          ayahElement.classList.add('ring-2', 'ring-amber-400');
        }
      }, 300);

      // Remove highlight after 2 seconds
      const highlightTimer = setTimeout(() => {
        const ayahElement = versesContainerRef.current?.querySelector(`[data-ayah="${targetVerse}"]`);
        if (ayahElement) {
          ayahElement.classList.remove('ring-2', 'ring-amber-400');
        }
      }, 2300);

      // Cleanup timers on unmount
      return () => {
        clearTimeout(scrollTimer);
        clearTimeout(highlightTimer);
      };
    }
  }, [initialVerse, verses.length, isLargeSurah, visibleVerseCount]);

  // Effect to handle continuous translation playback (translation-only mode, NOT combined mode)
  useEffect(() => {
    // Don't run this effect in combined mode - combined mode has its own logic
    if (isPlayingCombined) return;
    if (!isPlayingTranslation || !verses.length) return;

    // IMPORTANT: Stop Arabic audio when translation starts
    // This prevents both audios playing simultaneously
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }

    const verse = verses.find(v => v.number === translationAyah);
    if (!verse) {
      console.log('Verse not found:', translationAyah, 'available:', verses.map(v => v.number));
      setIsPlayingTranslation(false);
      isPlayingTranslationRef.current = false;
      return;
    }

    // Sync currentAyah with translationAyah so verse gets highlighted and scrolled
    setCurrentAyah(translationAyah);

    // Pass total verses count so playTranslationAudio can determine if last
    playTranslationAudio(translationAyah, verse.translation, verses.length);

    // No cleanup here - playTranslationAudio handles stopping previous audio
    // Cleanup was causing race condition by pausing before new audio could start
  }, [isPlayingTranslation, translationAyah, verses, playTranslationAudio, isPlayingCombined, isPlaying]);

  // Cleanup translation audio on unmount
  useEffect(() => {
    return () => {
      if (translationAudioRef.current) {
        translationAudioRef.current.pause();
        translationAudioRef.current = null;
      }
    };
  }, []);

  // Memoize surah navigation to prevent recalculation on every render
  const prevSurah = useMemo(() => surah?.id > 1 ? SURAHS.find(s => s.id === surah.id - 1) : null, [surah?.id]);
  const nextSurah = useMemo(() => surah?.id < 114 ? SURAHS.find(s => s.id === surah.id + 1) : null, [surah?.id]);

  // Memoize fontSizeMap to prevent object recreation
  const fontSizeMap = useMemo(() => ({
    small: { arabic: '1.4rem', translation: '0.8rem' },
    medium: { arabic: '1.8rem', translation: '0.95rem' },
    large: { arabic: '2.2rem', translation: '1.1rem' },
    xlarge: { arabic: '2.6rem', translation: '1.2rem' },
  }), []);

  // Memoize particle positions to prevent random regeneration on every render
  const particles = useMemo(() =>
    [...Array(6)].map((_, i) => ({
      size: 3 + (i % 3) * 2,
      left: 20 + (i * 12) % 60,
      top: 15 + (i * 11) % 65,
      duration: 2.5 + (i % 3) * 0.8,
      delay: i * 0.3,
    })), []);

  // Ref to track audio mode for callbacks
  const audioModeRef = useRef(audioMode);
  useEffect(() => { audioModeRef.current = audioMode; }, [audioMode]);

  // Play translation TTS for combined mode (called after Arabic ends)
  const playCombinedTranslation = useCallback((ayahNum) => {
    console.log('[Combined] ========================================');
    console.log('[Combined] playCombinedTranslation called for ayah:', ayahNum);
    console.log('[Combined] selectedTranslation:', selectedTranslation);
    console.log('[Combined] effectiveNarrator:', effectiveNarrator);
    console.log('[Combined] surah?.id:', surah?.id);
    console.log('[Combined] isPlayingCombinedRef:', isPlayingCombinedRef.current);
    console.log('[Combined] versesRef.current length:', versesRef.current?.length);

    const verse = versesRef.current.find(v => v.number === ayahNum);
    console.log('[Combined] Found verse:', verse ? `ayah ${verse.number}` : 'NOT FOUND');
    console.log('[Combined] Translation text:', verse?.translation?.substring(0, 50) + '...');

    if (!verse?.translation) {
      console.log('[Combined] No translation for ayah:', ayahNum, '- skipping to next');
      // No translation, move to next verse
      const total = totalVersesRef.current;
      if (ayahNum < total) {
        setCurrentAyah(prev => prev + 1);
        setCombinedPhase('arabic');
      } else {
        setIsPlayingCombined(false);
        isPlayingCombinedRef.current = false;
        setIsPlaying(false);
      }
      return;
    }

    // Stop any existing translation audio
    if (translationAudioRef.current) {
      console.log('[Combined] Stopping existing translation audio');
      const oldAudio = translationAudioRef.current;
      translationAudioRef.current = null;
      oldAudio.pause();
      oldAudio.src = '';
    }

    setCombinedPhase('translation');
    console.log('[Combined] Set phase to translation');

    const playbackId = Date.now();
    const total = totalVersesRef.current;
    console.log('[Combined] Playback ID:', playbackId, 'Total verses:', total);

    // Helper to advance to next verse after translation ends
    const advanceToNext = () => {
      console.log('[Combined] ----------------------------------------');
      console.log('[Combined] advanceToNext called for ayah:', ayahNum);
      console.log('[Combined] total:', total, 'isPlayingCombined:', isPlayingCombinedRef.current);
      if (!isPlayingCombinedRef.current) {
        console.log('[Combined] Not playing combined anymore, stopping');
        return;
      }
      // Track verse listened via gamification
      const g = gamificationRef.current;
      if (g?.isActive) g.recordAction('listen_verse', { surahId: surah?.id, ayahNum });

      if (ayahNum < total) {
        console.log('[Combined] Advancing to next verse:', ayahNum + 1);
        setCombinedPhase('arabic');
        // Use direct value instead of functional update for clarity
        setCurrentAyah(ayahNum + 1);
        console.log('[Combined] setCurrentAyah called with:', ayahNum + 1);
      } else {
        console.log('[Combined] Last verse reached, stopping');
        // Track surah listened
        if (g?.isActive) g.recordAction('listen_surah', { surahId: surah?.id });
        setIsPlayingCombined(false);
        isPlayingCombinedRef.current = false;
        setIsPlaying(false);
        setCombinedPhase('arabic');
      }
    };

    // Helper to play with Google Cloud TTS
    const playWithTTS = async () => {
      console.log('[Combined-TTS] ========================================');
      console.log('[Combined-TTS] playWithTTS FUNCTION ENTERED');
      console.log('[Combined-TTS] Starting TTS for ayah:', ayahNum);
      console.log('[Combined-TTS] ttsLanguage:', ttsLanguage);
      console.log('[Combined-TTS] selectedTranslation:', selectedTranslation);
      console.log('[Combined-TTS] isPlayingCombinedRef:', isPlayingCombinedRef.current);
      console.log('[Combined-TTS] verse translation text:', verse?.translation?.substring(0, 100));

      const text = verse.translation;
      const maxLength = 4000;
      const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
      console.log('[Combined-TTS] Text length:', text.length, 'Truncated:', truncatedText.length);

      setTranslationAudioSource('tts');
      setTranslationReciterInfo({ name: 'Google TTS', nameNative: 'گوگل ٹی ٹی ایس' });

      try {
        console.log('[Combined-TTS] Calling playGoogleCloudTTS...');
        const result = await playGoogleCloudTTS(truncatedText, ttsLanguage);
        console.log('[Combined-TTS] Got result:', result?.blocked ? 'BLOCKED' : (result ? 'YES (data URL)' : 'NO'));

        // Check if blocked by premium gate - stop playback, don't advance
        if (result?.blocked) {
          console.log('[Combined-TTS] Blocked by premium gate - stopping combined playback');
          setIsPlayingCombined(false);
          isPlayingCombinedRef.current = false;
          setCombinedPhase(null);
          return;
        }

        if (!result || typeof result !== 'string') {
          console.error('[Combined-TTS] Google TTS failed to get audio URL');
          if (isPlayingCombinedRef.current) {
            console.log('[Combined-TTS] Skipping to next ayah due to failure');
            setCombinedPhase('arabic');
            setTimeout(() => setCurrentAyah(ayahNum + 1), 300);
          }
          return;
        }

        console.log('[Combined-TTS] Creating Audio object...');
        const ttsAudio = new Audio(result);
        ttsAudio._playbackId = playbackId;
        ttsAudio._audioUrl = result;
        ttsAudio._ayahNum = ayahNum; // Store for debugging
        translationAudioRef.current = ttsAudio;

        ttsAudio.onended = () => {
          console.log('[Combined-TTS] Audio ended event fired for ayah:', ayahNum);
          console.log('[Combined-TTS] playbackId check:', translationAudioRef.current?._playbackId, '===', playbackId);
          // Data URLs don't need revoking
          if (translationAudioRef.current?._playbackId !== playbackId) {
            console.log('[Combined-TTS] Playback ID mismatch, ignoring ended event');
            return;
          }
          advanceToNext();
        };

        ttsAudio.onerror = (e) => {
          console.error('[Combined-TTS] Audio playback error for ayah:', ayahNum, e);
          // Data URLs don't need revoking
          if (isPlayingCombinedRef.current) {
            console.log('[Combined-TTS] Skipping to next ayah due to error');
            setCombinedPhase('arabic');
            setTimeout(() => setCurrentAyah(ayahNum + 1), 300);
          }
        };

        console.log('[Combined-TTS] Calling play()...');
        await ttsAudio.play();
        console.log('[Combined-TTS] Play started successfully for ayah:', ayahNum);
      } catch (error) {
        console.error('[Combined-TTS] Exception caught:', error);
        if (isPlayingCombinedRef.current) {
          console.log('[Combined-TTS] Skipping to next ayah due to exception');
          setCombinedPhase('arabic');
          setTimeout(() => setCurrentAyah(ayahNum + 1), 300);
        }
      }
    };

    // Check if user explicitly selected TTS
    console.log('[Combined] effectiveNarrator check:', effectiveNarrator);
    if (effectiveNarrator === 'tts') {
      console.log('[Combined] User selected TTS, calling playWithTTS()');
      playWithTTS();
      console.log('[Combined] playWithTTS() called');
      return;
    }

    // Try API audio first if available
    // IMPORTANT: Always try to get narrator from translation mapping first for reliability
    const translationSource = getTranslationAudioSource(selectedTranslation);
    const defaultNarrator = translationSource?.audioId || null;

    // Use effectiveNarrator if set, otherwise use default for translation
    let narrator = effectiveNarrator || defaultNarrator;

    console.log('[Combined-API] ========================================');
    console.log('[Combined-API] selectedTranslation:', selectedTranslation);
    console.log('[Combined-API] defaultNarrator:', defaultNarrator);
    console.log('[Combined-API] effectiveNarrator:', effectiveNarrator);
    console.log('[Combined-API] resolved narrator:', narrator);

    const config = narrator ? narratorUrlConfig[narrator] : null;
    console.log('[Combined-API] config:', config);

    if (config && narrator) {
      // For timestamp-based (Kanz ul Iman), use TTS in combined mode
      // (timestamp-based doesn't work well for combined mode - would need complex seeking)
      if (config.type === 'timestamp') {
        console.log('[Combined-API] Timestamp-based narrator, using TTS');
        playWithTTS();
        return;
      }

      // EveryAyah-style API audio
      const apiUrl = getTranslationAudioUrl(surah?.id, ayahNum, narrator);
      console.log('[Combined-API] Generated API URL:', apiUrl);
      if (apiUrl) {
        // Check cache first for instant playback
        const cachedAudio = getCachedAudio(surah?.id, ayahNum, narrator);
        let audio;

        if (cachedAudio) {
          console.log('[Combined-API] Using CACHED audio for ayah:', ayahNum);
          audio = cachedAudio;
        } else {
          console.log('[Combined-API] Creating Audio object for API audio...');
          audio = new Audio();
        }

        audio._playbackId = playbackId;
        audio._isAPI = true;
        audio._ayahNum = ayahNum; // Store for debugging
        translationAudioRef.current = audio;

        setTranslationAudioSource('api');
        setTranslationReciterInfo(TRANSLATION_RECITERS[narrator]);

        audio.onended = () => {
          console.log('[Combined-API] Audio ended event fired for ayah:', ayahNum);
          console.log('[Combined-API] playbackId check:', translationAudioRef.current?._playbackId, '===', playbackId);
          if (translationAudioRef.current?._playbackId !== playbackId) {
            console.log('[Combined-API] Playback ID mismatch, ignoring ended event');
            return;
          }
          advanceToNext();
        };

        audio.onerror = (e) => {
          console.log('[Combined-API] Audio error event fired for ayah:', ayahNum);
          if (translationAudioRef.current?._playbackId !== playbackId) return;
          console.log('[Combined-API] API audio failed:', e.target?.error?.message || 'Unknown error', '- falling back to TTS');
          playWithTTS();
        };

        // Only load if not already cached
        if (!cachedAudio) {
          audio.src = apiUrl;
          audio.load();
          console.log('[Combined-API] Loading API audio...');

          audio.oncanplaythrough = () => {
            console.log('[Combined-API] canplaythrough event fired for ayah:', ayahNum);
            if (translationAudioRef.current?._playbackId !== playbackId) {
              console.log('[Combined-API] Playback ID mismatch, ignoring canplaythrough');
              return;
            }
            console.log('[Combined-API] API audio ready, calling play()');
            audio.play().catch((err) => {
              console.log('[Combined-API] Play failed:', err.name, err.message);
              if (err.name === 'AbortError') return;
              playWithTTS();
            });
          };
        } else {
          // Cached audio is already ready, play immediately
          console.log('[Combined-API] Cached audio ready, playing immediately');
          audio.play().catch((err) => {
            console.log('[Combined-API] Cached play failed:', err.name, err.message);
            if (err.name === 'AbortError') return;
            playWithTTS();
          });
        }

        return;
      } else {
        console.log('[Combined-API] No API URL generated, falling back to TTS');
      }
    } else {
      console.log('[Combined-API] No config or narrator, falling back to TTS');
    }

    // No API audio available - use TTS
    console.log('[Combined] No API audio, using TTS fallback');
    playWithTTS();
  }, [ttsLanguage, effectiveNarrator, surah?.id, selectedTranslation]);

  // Ref to hold latest playCombinedTranslation (avoids re-creating audio element when callback changes)
  const playCombinedTranslationRef = useRef(playCombinedTranslation);
  useEffect(() => {
    playCombinedTranslationRef.current = playCombinedTranslation;
  }, [playCombinedTranslation]);

  // Audio setup - runs once on mount, uses refs for callbacks
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleCanPlay = () => { setAudioLoading(false); setAudioError(null); };
    const handleLoadStart = () => { setAudioLoading(true); setAudioError(null); };
    const handleError = (e) => {
      logger.audioError(surah?.id, currentAyahRef.current, e?.message || 'Failed to load audio');
      setAudioError('Failed to load audio');
      setAudioLoading(false);
      setIsPlaying(false);
    };
    const handleEnded = () => {
      const repeat = repeatModeRef.current;
      const current = currentAyahRef.current;
      const total = totalVersesRef.current;
      const mode = audioModeRef.current;

      console.log('[Arabic-Ended] ========================================');
      console.log('[Arabic-Ended] Audio ended event fired');
      console.log('[Arabic-Ended] mode:', mode);
      console.log('[Arabic-Ended] isPlayingCombinedRef:', isPlayingCombinedRef.current);
      console.log('[Arabic-Ended] currentAyahRef:', current);
      console.log('[Arabic-Ended] totalVersesRef:', total);
      console.log('[Arabic-Ended] repeatMode:', repeat);

      // Combined mode: play translation after Arabic
      if (mode === 'combined' && isPlayingCombinedRef.current) {
        console.log('[Arabic-Ended] Mode is combined, calling playCombinedTranslation for ayah:', current);
        playCombinedTranslationRef.current(current);
        return;
      }

      console.log('[Arabic-Ended] Not combined mode, using normal flow');
      // Track verse listened via gamification
      const g = gamificationRef.current;
      if (g?.isActive) g.recordAction('listen_verse', { surahId: surahRef.current?.id, ayahNum: current });

      // Normal mode
      if (repeat === 'verse') { audio.currentTime = 0; audio.play().catch(() => {}); }
      else if (current < total) { setCurrentAyah(prev => prev + 1); }
      else if (repeat === 'surah') { setCurrentAyah(1); }
      else {
        // Last verse finished — track surah listened
        if (g?.isActive) g.recordAction('listen_surah', { surahId: surahRef.current?.id });
        setIsPlaying(false);
      }
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
    };
  }, []); // Empty deps - audio element created once, uses refs for callbacks

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !surah?.id) return;

    // Check cache first for instant playback
    const cachedAudio = getCachedAudio(surah.id, currentAyah, selectedReciter);
    const globalAyah = getGlobalAyahNumber(surah.id, currentAyah);
    const url = `${AUDIO_CDN}/${selectedReciter}/${globalAyah}.mp3`;

    audio.pause();

    if (cachedAudio) {
      // Use cached blob URL for instant playback
      audio.src = cachedAudio.src;
      console.log('[Audio] Using cached audio for ayah:', currentAyah);
    } else {
      // Fall back to network URL
      audio.src = url;
      console.log('[Audio] Loading from network for ayah:', currentAyah);
    }

    audio.load();

    // Prefetch next ayahs in background
    if (isPlaying || isPlayingCombined) {
      prefetchNextAyahs(currentAyah, 3);
    }

    if (autoScroll && versesContainerRef.current) {
      const ayahElement = versesContainerRef.current.querySelector(`[data-ayah="${currentAyah}"]`);
      if (ayahElement) ayahElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [surah?.id, currentAyah, selectedReciter, autoScroll, getCachedAudio, prefetchNextAyahs, isPlaying, isPlayingCombined]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      // IMPORTANT: Stop any translation audio when Arabic starts playing
      // This prevents the race condition where both play simultaneously
      if (isPlayingTranslation || translationAudioRef.current) {
        setIsPlayingTranslation(false);
        isPlayingTranslationRef.current = false;
        if (translationAudioRef.current) {
          translationAudioRef.current.pause();
          translationAudioRef.current.src = '';
          translationAudioRef.current = null;
        }
      }
      const attemptPlay = () => { audio.play().catch(err => { if (err.name !== 'AbortError') { setAudioError('Playback failed'); setIsPlaying(false); } }); };
      if (audio.readyState >= 3) attemptPlay();
      else {
        const handleCanPlay = () => { if (isPlayingRef.current) attemptPlay(); };
        audio.addEventListener('canplaythrough', handleCanPlay, { once: true });
        return () => audio.removeEventListener('canplaythrough', handleCanPlay);
      }
    } else { audio.pause(); }
  }, [isPlaying, currentAyah, selectedReciter, isPlayingTranslation]);

  // Ref to always have latest handleClose (defined below)
  const handleCloseRef = useRef(null);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 50);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedWordData) setSelectedWordData(null);
        else if (leftFeature) setLeftFeature(null);
        else if (showTafseer) setShowTafseer(false);
        else if (handleCloseRef.current) handleCloseRef.current();
      }
      if (e.key === ' ' && !e.target.matches('input, textarea, select')) { e.preventDefault(); setIsPlaying(prev => !prev); }
      if (e.key === 'ArrowRight') currentAyah < totalVerses && setCurrentAyah(prev => prev + 1);
      if (e.key === 'ArrowLeft') currentAyah > 1 && setCurrentAyah(prev => prev - 1);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { clearTimeout(timer); document.removeEventListener('keydown', handleKeyDown); document.body.style.overflow = ''; };
  }, [currentAyah, totalVerses, selectedWordData, leftFeature, showTafseer]);

  // Handle initial panel from URL
  useEffect(() => {
    if (initialPanel) {
      switch (initialPanel) {
        case 'tafseer': setShowTafseer(true); break;
        case 'youtube': case 'videos': setLeftFeature('youtube'); break;
        case 'memorize': setLeftFeature('memorize'); break;
        case 'bookmark': setLeftFeature('bookmark'); break;
        case 'share': setLeftFeature('share'); break;
        case 'settings': setShowSettings(true); break;
        case 'mood': setShowEmotionalTracker(true); break;
        case 'connections': setShowConnectionMap(true); break;
        case 'scholarsync': setShowScholarSync(true); break;
      }
    }
  }, [initialPanel]);

  // Notify parent when panels change (for URL updates)
  useEffect(() => {
    if (onPanelChange) {
      let panel = null;
      if (showTafseer) panel = 'tafseer';
      else if (leftFeature === 'youtube') panel = 'videos';
      else if (leftFeature === 'memorize') panel = 'memorize';
      else if (leftFeature === 'bookmark') panel = 'bookmark';
      else if (leftFeature === 'share') panel = 'share';
      else if (showSettings) panel = 'settings';
      else if (showEmotionalTracker) panel = 'mood';
      else if (showConnectionMap) panel = 'connections';
      else if (showScholarSync) panel = 'scholarsync';
      onPanelChange(panel);
    }
  }, [showTafseer, leftFeature, showSettings, showEmotionalTracker, showConnectionMap, showScholarSync, onPanelChange]);

  const handleClose = useCallback(() => {
    // Guard against undefined surah
    if (!surah?.id) {
      onClose();
      return;
    }

    const duration = Math.round((Date.now() - startTime.current) / 60000);
    logReadingSession(surah.id, verses.length > 0 ? 1 : 0, duration);
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }

    // Show mood entry only every 30 surahs (if read for more than 1 minute)
    if (duration >= 1) {
      const surahsReadCount = parseInt(localStorage.getItem('w3quran_surahs_read_count') || '0', 10) + 1;
      localStorage.setItem('w3quran_surahs_read_count', surahsReadCount.toString());

      // Track surah completion in Google Analytics
      trackSurahCompletion(surah.id, surah.name);

      // Track surah completion in gamification
      if (gamification.isActive) gamification.recordAction('surah_complete', { surahId: surah.id });

      // Show mood prompt every 30 surahs
      if (surahsReadCount % 30 === 0) {
        setShowMoodEntry(true);
      } else {
        onClose();
      }
    } else {
      onClose();
    }
  }, [surah, verses.length, onClose]);

  // Keep ref updated with latest handleClose
  useEffect(() => {
    handleCloseRef.current = handleClose;
  }, [handleClose]);

  const toggleAyahPlayback = useCallback((ayahNum) => {
    if (currentAyah === ayahNum && isPlaying) {
      setIsPlaying(false);
    } else {
      // IMPORTANT: Stop translation audio before starting Arabic
      if (isPlayingTranslation) {
        setIsPlayingTranslation(false);
        isPlayingTranslationRef.current = false;
        if (translationAudioRef.current) {
          translationAudioRef.current.pause();
          translationAudioRef.current.src = '';
          translationAudioRef.current = null;
        }
      }
      // Start Arabic playback
      if (currentAyah === ayahNum) {
        setIsPlaying(true);
      } else {
        setCurrentAyah(ayahNum);
        setIsPlaying(true);
      }
    }
    // Track progress when user plays a verse
    if (surah?.id) {
      markAyahRead(surah.id, ayahNum);
      if (gamification.isActive) gamification.recordAction('verse_read', { surahId: surah.id, ayahNum });
    }
  }, [currentAyah, isPlaying, isPlayingTranslation, surah?.id]);

  // Safe function to start Arabic playback (stops translation first)
  const startArabicPlayback = useCallback(() => {
    // Stop translation audio before starting Arabic
    if (isPlayingTranslation) {
      setIsPlayingTranslation(false);
      isPlayingTranslationRef.current = false;
      if (translationAudioRef.current) {
        translationAudioRef.current.pause();
        translationAudioRef.current.src = '';
        translationAudioRef.current = null;
      }
    }
    setIsPlaying(true);
  }, [isPlayingTranslation]);

  // Track reading progress when viewing verses
  useEffect(() => {
    if (!surah?.id || !currentAyah) return;
    // Debounce to track only after viewing for 2 seconds
    const timer = setTimeout(() => {
      markAyahRead(surah.id, currentAyah);
      if (gamification.isActive) gamification.recordAction('verse_read', { surahId: surah.id, ayahNum: currentAyah });
    }, 2000);
    return () => clearTimeout(timer);
  }, [surah?.id, currentAyah]);

  const goToSurah = useCallback((newSurah) => {
    if (!newSurah || !onChangeSurah) return;
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }
    setIsPlaying(false); setCurrentAyah(1); setSelectedWordData(null);
    setShowTafseer(false); setLeftFeature(null);
    onChangeSurah(newSurah);
  }, [onChangeSurah]);

  // State to track which verse to share in the Share dialog
  const [shareVerseData, setShareVerseData] = useState(null);

  const handleShareVerse = useCallback((verse, ayahNum) => {
    // Set the verse data and open the share panel
    setShareVerseData({
      ayahNumber: ayahNum,
      arabic: verse.arabic,
      translation: verse.translation
    });
    setLeftFeature('share');
  }, []);

  // Handle feature selection - tafseer is independent (right side), others share left side
  const handleFeatureSelect = useCallback((featureId) => {
    setSelectedWordData(null);
    if (featureId === 'tafseer') {
      // Toggle tafseer (right side) - independent of left features
      setShowTafseer(prev => !prev);
    } else if (featureId === 'mood') {
      // Open emotional tracker
      setShowEmotionalTracker(true);
    } else if (featureId === 'connections') {
      // Open connection map
      setShowConnectionMap(true);
    } else if (featureId === 'scholarsync' || featureId === 'youtube') {
      // Open scholar video sync (merged videos feature)
      setShowScholarSync(prev => !prev);
    } else if (featureId === 'visualization') {
      // Open Living Visualization
      setShowLivingVisualization(true);
    } else if (featureId === 'timecapsule') {
      // Open Time Capsule
      setShowTimeCapsule(true);
    } else if (featureId === 'voicecontrol') {
      // Open Voice Control
      setShowVoiceControl(true);
    } else if (featureId === 'meditation') {
      // Open Meditation
      setShowMeditation(true);
    } else if (featureId === 'family') {
      // Open Family Circle
      setShowFamilyCircle(true);
    } else {
      // Toggle left side features - only one can be active at a time
      setLeftFeature(prev => {
        if (prev === featureId) {
          if (featureId === 'share') setShareVerseData(null);
          return null;
        } else {
          // Clear shareVerseData when opening share from top bar (will use currentVerse)
          if (featureId === 'share') setShareVerseData(null);
          return featureId;
        }
      });
    }
  }, []);

  // Memoized close handlers to prevent re-renders
  const closeTafseer = useCallback(() => setShowTafseer(false), []);
  const closeLeftFeature = useCallback(() => setLeftFeature(null), []);
  const closeShareFeature = useCallback(() => { setLeftFeature(null); setShareVerseData(null); }, []);
  const handleAyahChange = useCallback((newAyah) => setCurrentAyah(newAyah), []);

  // Memoize settings toggle handlers
  const toggleSettings = useCallback(() => setShowSettings(prev => !prev), []);
  const toggleWordByWord = useCallback(() => setWordByWordMode(prev => !prev), [setWordByWordMode]);
  const toggleTajweed = useCallback(() => setTajweedMode(prev => !prev), [setTajweedMode]);
  const toggleTranslation = useCallback(() => setShowTranslation(prev => !prev), [setShowTranslation]);
  const togglePlayPause = useCallback(() => setIsPlaying(prev => !prev), []);
  const cycleRepeatMode = useCallback(() => setRepeatMode(prev => prev === 'none' ? 'verse' : prev === 'verse' ? 'surah' : 'none'), [setRepeatMode]);

  // Memoize stopPropagation handler
  const stopPropagation = useCallback((e) => e.stopPropagation(), []);

  // Memoize navigation handlers
  const goToPrevAyah = useCallback(() => setCurrentAyah(prev => prev > 1 ? prev - 1 : prev), []);
  const goToNextAyah = useCallback(() => setCurrentAyah(prev => prev < totalVerses ? prev + 1 : prev), [totalVerses]);
  const clearSelectedWord = useCallback(() => {
    setSelectedWordData(null);
    setWordAudioError(null);
    setWordAudioPlaying(false);
  }, []);

  // Memoize close button handler with stopPropagation
  const handleCloseClick = useCallback((e) => { e.stopPropagation(); handleClose(); }, [handleClose]);

  // Memoize surah nav handlers
  const handleGoPrevSurah = useCallback((e) => { e.stopPropagation(); goToSurah(prevSurah); }, [goToSurah, prevSurah]);
  const handleGoNextSurah = useCallback((e) => { e.stopPropagation(); goToSurah(nextSurah); }, [goToSurah, nextSurah]);

  // Memoize currentVerse calculation
  const currentVerse = useMemo(() => verses[currentAyah - 1], [verses, currentAyah]);

  // Get surah topics data
  const surahTopics = useMemo(() => SURAH_TOPICS[surah?.id] || {}, [surah?.id]);

  // Toggle surah details panel
  const toggleSurahDetails = useCallback(() => setShowSurahDetails(prev => !prev), []);
  const closeSurahDetails = useCallback(() => setShowSurahDetails(false), []);

  // Jump to a specific ayah (from key verses)
  const jumpToAyah = useCallback((ayahNum) => {
    setCurrentAyah(ayahNum);
    setShowSurahDetails(false);
    // Scroll to the ayah
    setTimeout(() => {
      const ayahElement = versesContainerRef.current?.querySelector(`[data-ayah="${ayahNum}"]`);
      if (ayahElement) ayahElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }, []);

  // Multi-select handlers
  const toggleSelectionMode = useCallback(() => {
    setSelectionMode(prev => !prev);
    if (selectionMode) setSelectedVerses([]); // Clear selection when exiting
  }, [selectionMode]);

  const toggleVerseSelection = useCallback((ayahNum) => {
    setSelectedVerses(prev =>
      prev.includes(ayahNum)
        ? prev.filter(n => n !== ayahNum)
        : [...prev, ayahNum].sort((a, b) => a - b)
    );
  }, []);

  const selectVerseRange = useCallback((start, end) => {
    const range = [];
    for (let i = start; i <= end; i++) range.push(i);
    setSelectedVerses(range);
  }, []);

  const shareSelectedVerses = useCallback(() => {
    if (selectedVerses.length === 0) return;
    // Gather selected verse data
    const selectedData = selectedVerses.map(ayahNum => {
      const verse = verses[ayahNum - 1];
      return { ayahNumber: ayahNum, arabic: verse?.arabic, translation: verse?.translation };
    });
    setShareVerseData(selectedData.length === 1 ? selectedData[0] : { multiple: true, verses: selectedData });
    setLeftFeature('share');
  }, [selectedVerses, verses]);

  if (!surah) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex: 9999999 }} onClick={handleClose} role="dialog" aria-modal="true">
      <div className={`absolute inset-0 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        style={{ background: darkMode ? 'radial-gradient(ellipse at center, rgba(15,10,30,0.92) 0%, rgba(10,5,25,0.97) 100%)' : 'radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(240,240,250,0.95) 100%)', backdropFilter: 'blur(30px)' }} />

      {/* Floating Feature Bubbles */}
      {/* Tafseer - Right Side (Independent) */}
      <TafseerFloatingBubble
        isVisible={showTafseer}
        onClose={closeTafseer}
        surahId={surah.id}
        ayahNumber={currentAyah}
        verseArabic={currentVerse?.arabic}
        translationId={selectedTranslation}
        totalAyahs={surah.ayahs}
        onAyahChange={handleAyahChange}
      />

      {/* Left Side Features (Only one at a time) */}
      {/* Note: Videos feature now uses ScholarVideoSync modal instead of left panel */}

      <MemorizeFloatingBubble
        isVisible={leftFeature === 'memorize'}
        onClose={closeLeftFeature}
        onSettingsChange={setMemorizeSettings}
        currentSettings={memorizeSettings}
      />

      <BookmarkFloatingBubble
        isVisible={leftFeature === 'bookmark'}
        onClose={closeLeftFeature}
        surahId={surah.id}
        surahName={surah.name}
        ayahNumber={currentAyah}
        verseArabic={currentVerse?.arabic}
        onBookmarkSuccess={() => { if (gamification.isActive) gamification.recordAction('bookmark'); }}
      />

      <ShareFloatingBubble
        isVisible={leftFeature === 'share'}
        onClose={closeShareFeature}
        surahId={surah.id}
        surahName={surah.name}
        ayahNumber={shareVerseData?.multiple ? shareVerseData.verses[0]?.ayahNumber : (shareVerseData?.ayahNumber || currentAyah)}
        verseArabic={shareVerseData?.multiple ? shareVerseData.verses[0]?.arabic : (shareVerseData?.arabic || currentVerse?.arabic)}
        verseTranslation={shareVerseData?.multiple ? shareVerseData.verses[0]?.translation : (shareVerseData?.translation || currentVerse?.translation)}
        multipleVerses={shareVerseData?.multiple ? shareVerseData.verses : null}
        onOpenArtGenerator={() => setShowArtGenerator(true)}
        onShareSuccess={() => { if (gamification.isActive) gamification.recordAction('share'); }}
      />

      {/* Lazy-loaded feature overlays */}
      <Suspense fallback={null}>
      {/* Verse Art Generator */}
      {showArtGenerator && <VerseArtGenerator
        isVisible={showArtGenerator}
        onClose={() => setShowArtGenerator(false)}
        verseArabic={shareVerseData?.arabic || currentVerse?.arabic}
        verseTranslation={shareVerseData?.translation || currentVerse?.translation}
        surahName={surah.name}
        surahId={surah.id}
        ayahNumber={shareVerseData?.ayahNumber || currentAyah}
      />}

      {/* Emotional Journey Tracker */}
      {showEmotionalTracker && <EmotionalTracker
        isVisible={showEmotionalTracker}
        onClose={() => setShowEmotionalTracker(false)}
      />}

      {/* Mood Entry Form - shown after reading */}
      {showMoodEntry && <MoodEntryForm
        isVisible={showMoodEntry}
        onClose={() => { setShowMoodEntry(false); onClose(); }}
        surahId={surah.id}
        surahName={surah.name}
        readingDuration={Math.round((Date.now() - startTime.current) / 60000)}
        versesRead={currentAyah}
      />}

      {/* Ayah Connection Map */}
      {showConnectionMap && <AyahConnectionMap
        isVisible={showConnectionMap}
        onClose={() => setShowConnectionMap(false)}
        initialSurah={surah.id}
        initialAyah={currentAyah}
        onNavigateToVerse={(surahId, ayahNum) => {
          if (surahId === surah.id) {
            setCurrentAyah(ayahNum);
          } else {
            const targetSurah = SURAHS.find(s => s.id === surahId);
            if (targetSurah && onChangeSurah) {
              onChangeSurah(targetSurah);
              setTimeout(() => setCurrentAyah(ayahNum), 100);
            }
          }
          setShowConnectionMap(false);
        }}
      />}

      {/* Scholar Video Sync */}
      {showScholarSync && <ScholarVideoSync
        isVisible={showScholarSync}
        onClose={() => setShowScholarSync(false)}
        surahId={surah.id}
        surahName={surah.name}
        currentAyah={currentAyah}
        onAyahChange={setCurrentAyah}
      />}

      {/* ============================================ */}
      {/* INNOVATIVE FEATURES */}
      {/* ============================================ */}

      {/* Living Quran Visualization */}
      {showLivingVisualization && <LivingVisualization
        isVisible={showLivingVisualization}
        onClose={() => setShowLivingVisualization(false)}
        onNavigateToVerse={(surahId, ayahNum) => {
          if (surahId === surah.id) {
            setCurrentAyah(ayahNum);
          } else {
            const targetSurah = SURAHS.find(s => s.id === surahId);
            if (targetSurah && onChangeSurah) {
              onChangeSurah(targetSurah);
              setTimeout(() => setCurrentAyah(ayahNum), 100);
            }
          }
          setShowLivingVisualization(false);
        }}
      />}

      {/* Quran Time Capsule */}
      {showTimeCapsule && <TimeCapsule
        isVisible={showTimeCapsule}
        onClose={() => setShowTimeCapsule(false)}
        currentVerseRef={`${surah.id}:${currentAyah}`}
        onNavigateToVerse={(surahId, ayahNum) => {
          if (surahId === surah.id) {
            setCurrentAyah(ayahNum);
          } else {
            const targetSurah = SURAHS.find(s => s.id === surahId);
            if (targetSurah && onChangeSurah) {
              onChangeSurah(targetSurah);
              setTimeout(() => setCurrentAyah(ayahNum), 100);
            }
          }
          setShowTimeCapsule(false);
        }}
      />}

      {/* Voice Control */}
      {showVoiceControl && <VoiceControl
        isVisible={showVoiceControl}
        onClose={() => setShowVoiceControl(false)}
        onNavigateSurah={(surahId) => {
          const targetSurah = SURAHS.find(s => s.id === surahId);
          if (targetSurah) goToSurah(targetSurah);
          setShowVoiceControl(false);
        }}
        onNavigateVerse={(ayahNum) => {
          if (ayahNum >= 1 && ayahNum <= totalVerses) {
            setCurrentAyah(ayahNum);
          }
        }}
        onNextVerse={() => setCurrentAyah(prev => prev < totalVerses ? prev + 1 : prev)}
        onPreviousVerse={() => setCurrentAyah(prev => prev > 1 ? prev - 1 : prev)}
        onPlay={startArabicPlayback}
        onPause={() => setIsPlaying(false)}
        onStop={() => { setIsPlaying(false); setCurrentAyah(1); }}
        onShowTafseer={() => setShowTafseer(true)}
        onBookmark={() => setLeftFeature('bookmark')}
        onShare={() => setLeftFeature('share')}
        onGoBack={onClose}
      />}

      {/* Heartbeat Meditation */}
      {showMeditation && <HeartbeatMeditation
        isVisible={showMeditation}
        onClose={() => setShowMeditation(false)}
      />}

      {/* Family Quran Circle */}
      {showFamilyCircle && <FamilyCircle
        isVisible={showFamilyCircle}
        onClose={() => setShowFamilyCircle(false)}
        onNavigateToSurah={(surahId) => {
          const targetSurah = SURAHS.find(s => s.id === surahId);
          if (targetSurah) goToSurah(targetSurah);
          setShowFamilyCircle(false);
        }}
      />}
      </Suspense>

      {/* Top Feature Buttons Bar */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 ${isAnimating ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}
        onClick={stopPropagation}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 max-w-[95vw] overflow-x-auto scrollbar-hide">
          {[
            // Core reading features only
            { id: 'tafseer', icon: Icons.BookOpen, color: '#8B5CF6', label: 'Tafseer' },
            { id: 'youtube', icon: Icons.Video, color: '#EF4444', label: 'Videos' },
            { id: 'memorize', icon: Icons.Brain, color: '#F59E0B', label: 'Memorize' },
            { id: 'bookmark', icon: Icons.Bookmark, color: '#EC4899', label: 'Bookmark' },
            { id: 'share', icon: Icons.Share, color: '#10B981', label: 'Share' },
          ].map((btn) => {
            const Icon = btn.icon;
            // Determine active state based on feature type
            let isActive = false;
            if (btn.id === 'tafseer') isActive = showTafseer;
            else if (btn.id === 'youtube') isActive = showScholarSync;
            else isActive = leftFeature === btn.id;

            return (
              <button
                key={btn.id}
                onClick={() => handleFeatureSelect(btn.id)}
                className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-2xl transition-all hover:scale-105 flex-shrink-0 ${isActive ? 'scale-105' : ''}`}
                style={{
                  background: isActive ? `linear-gradient(135deg, ${btn.color}, ${btn.color}cc)` : `rgba(255,255,255,0.1)`,
                  boxShadow: isActive ? `0 0 20px ${btn.color}60` : 'none',
                }}
                title={btn.label}
              >
                <Icon className="w-5 h-5 text-white" />
                <span className="text-white text-[10px] font-medium">{btn.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Left Info Bubble - Expands in place to show Surah Details */}
      <div
        className={`fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-[55] transition-all duration-500 ${isAnimating ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
        onClick={stopPropagation}
        style={{ animation: showSurahDetails ? 'none' : 'floatBubble 4s ease-in-out infinite' }}
      >
        <div
          className={`relative text-white text-center overflow-hidden cursor-pointer transition-all duration-300 ease-out ${
            showSurahDetails
              ? 'w-64 sm:w-72 rounded-3xl'
              : 'w-20 h-20 sm:w-24 sm:h-24 rounded-full hover:scale-110'
          }`}
          style={{
            background: `linear-gradient(145deg, ${palette.colors[0]}${showSurahDetails ? 'ee' : 'cc'}, ${palette.colors[1]}${showSurahDetails ? 'dd' : 'bb'}, ${palette.colors[2]}${showSurahDetails ? 'cc' : 'aa'})`,
            boxShadow: showSurahDetails
              ? `0 0 60px ${palette.colors[0]}60, 0 20px 60px rgba(0,0,0,0.4), inset 0 -30px 60px rgba(0,0,0,0.3), inset 0 30px 60px rgba(255,255,255,0.15)`
              : `0 0 40px ${palette.colors[0]}50, 0 0 60px ${palette.colors[1]}30, inset 0 -20px 40px rgba(0,0,0,0.3), inset 0 20px 40px rgba(255,255,255,0.15)`,
          }}
        >
          {/* Glass highlight */}
          <div className="absolute pointer-events-none" style={{ top: '5%', left: showSurahDetails ? '10%' : '15%', width: showSurahDetails ? '60%' : '50%', height: showSurahDetails ? '15%' : '20%', background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)', borderRadius: '50%', filter: 'blur(2px)', transform: 'scaleY(0.4)' }} />

          {/* Collapsed State - Click to expand */}
          {!showSurahDetails && (
            <div onClick={toggleSurahDetails} className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="text-sm sm:text-base font-bold mb-0.5" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">{surah.arabic}</div>
              <div className="text-[8px] sm:text-[9px] font-medium opacity-90">{surah.type}</div>
              <div className="text-[7px] sm:text-[8px] opacity-70">{surah.ayahs} Ayahs</div>
              {/* Expand indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                <Icons.ChevronDown className="w-3 h-3 text-white/60 animate-bounce" />
              </div>
            </div>
          )}

          {/* Expanded State - Shows details inside the bubble */}
          {showSurahDetails && (
            <div className="relative z-10">
              {/* Close button - inside popup, top right */}
              <button
                onClick={(e) => { e.stopPropagation(); closeSurahDetails(); }}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all z-20"
              >
                <span className="text-white font-bold text-sm leading-none">×</span>
              </button>
              {/* Header */}
              <div className="p-3 pb-2 pr-10 border-b border-white/20">
                <div className="text-xl font-bold" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">{surah.arabic}</div>
                <h3 className="text-sm font-bold">{surah.name}</h3>
                <p className="text-white/70 text-[10px]">{surah.meaning}</p>
                <div className="flex items-center justify-center gap-2 mt-1 text-[9px]">
                  <span className="px-1.5 py-0.5 rounded-full bg-white/20">{surah.type}</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-white/20">{surah.ayahs} Ayahs</span>
                </div>
              </div>

              {/* Topics/Themes */}
              {surahTopics.themes && surahTopics.themes.length > 0 && (
                <div className="p-2 border-b border-white/10">
                  <h4 className="text-[9px] font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Themes</h4>
                  <div className="flex flex-wrap gap-1">
                    {surahTopics.themes.slice(0, 4).map((theme, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-white/15">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Verses - Compact scrollable list */}
              {surahTopics.keyVerses && surahTopics.keyVerses.length > 0 && (
                <div className="p-2 max-h-32 overflow-y-auto custom-scrollbar">
                  <h4 className="text-[9px] font-semibold text-white/60 mb-1.5 uppercase tracking-wide">Key Verses</h4>
                  <div className="space-y-1">
                    {surahTopics.keyVerses.slice(0, 5).map((kv, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); jumpToAyah(kv.ayah); }}
                        className="w-full text-left p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center gap-1.5 group"
                      >
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[9px] font-bold flex-shrink-0">
                          {kv.ayah}
                        </span>
                        <span className="text-[10px] leading-tight flex-1 line-clamp-1">{kv.label}</span>
                        <Icons.ChevronRight className="w-3 h-3 text-white/40" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {surahTopics.tags && surahTopics.tags.length > 0 && (
                <div className="p-2 border-t border-white/10">
                  <div className="flex flex-wrap gap-1">
                    {surahTopics.tags.slice(0, 5).map((tag, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded text-[8px] bg-white/10 text-white/70">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {prevSurah && onChangeSurah && (
        <button onClick={handleGoPrevSurah}
          className={`absolute left-2 sm:left-4 md:left-24 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            style={{ background: `linear-gradient(135deg, ${PALETTES[(prevSurah.id - 1) % 10].colors[0]}90, ${PALETTES[(prevSurah.id - 1) % 10].colors[1]}90)`, boxShadow: `0 4px 20px ${PALETTES[(prevSurah.id - 1) % 10].colors[0]}50` }}>
            <Icons.ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </button>
      )}

      {nextSurah && onChangeSurah && (
        <button onClick={handleGoNextSurah}
          className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            style={{ background: `linear-gradient(135deg, ${PALETTES[(nextSurah.id - 1) % 10].colors[0]}90, ${PALETTES[(nextSurah.id - 1) % 10].colors[1]}90)`, boxShadow: `0 4px 20px ${PALETTES[(nextSurah.id - 1) % 10].colors[0]}50` }}>
            <Icons.ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </button>
      )}

      <div className={`relative transition-all duration-500 ease-out ${isAnimating ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}`}
        data-layout={layoutStyle}
        data-shape={overlayConfig.shape}
        style={{
          width: overlayConfig.width || 'min(94vw, 680px)',
          height: overlayConfig.height || 'min(82vh, 720px)',
          maxHeight: overlayConfig.maxHeight || '82vh',
          marginTop: overlayConfig.marginTop || '70px'
        }} onClick={stopPropagation}>

        {/* Outer glow - layout aware (disabled for calm reading modes) */}
        {!overlayConfig.isCalm && (
          <div className="absolute pointer-events-none" style={{
            inset: overlayConfig.glowInset || '-40px',
            borderRadius: overlayConfig.clipPath ? '0' : overlayConfig.borderRadius,
            clipPath: overlayConfig.clipPath || 'none',
            background: `radial-gradient(ellipse 55% 45% at center, ${palette.colors[0]}50 0%, transparent 70%)`,
            animation: 'breathe 3s ease-in-out infinite'
          }} />
        )}

        {/* Conic gradient ring - layout aware (disabled for calm reading modes) */}
        {!overlayConfig.isCalm && (
          <div className="absolute opacity-40 pointer-events-none" style={{
            inset: overlayConfig.conicInset || '-20px',
            borderRadius: overlayConfig.clipPath ? '0' : overlayConfig.borderRadius,
            clipPath: overlayConfig.clipPath || 'none',
            background: `conic-gradient(from 0deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]}, ${palette.colors[0]})`,
            filter: 'blur(18px)',
            animation: overlayConfig.shape === 'hexagon' ? 'none' : 'spin 15s linear infinite'
          }} />
        )}

        {/* Main container - layout aware */}
        <div className="absolute inset-0 overflow-hidden" style={{
          borderRadius: overlayConfig.clipPath ? '0' : overlayConfig.borderRadius,
          clipPath: overlayConfig.clipPath || 'none',
          background: overlayConfig.customGradient ? resolveGradient(overlayConfig.customGradient) : `linear-gradient(145deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})`,
          boxShadow: overlayConfig.boxShadow
            ? resolveGradient(overlayConfig.boxShadow)
            : `0 0 80px ${palette.colors[0]}60, 0 0 120px ${palette.colors[1]}40, inset 0 -40px 80px rgba(0,0,0,0.3), inset 0 40px 80px rgba(255,255,255,0.2)`,
          border: overlayConfig.border || 'none'
        }}>
          {/* Glass highlight - only for dark-themed styles */}
          {overlayConfig.hasGlassHighlight && overlayConfig.isDark !== false && (
            <div className="absolute pointer-events-none" style={{ top: '3%', left: '20%', width: '40%', height: '15%', background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)', borderRadius: '50%', filter: 'blur(2px)', transform: 'scaleY(0.35)' }} />
          )}

          {/* Book spine effect - dark leather binding */}
          {overlayConfig.hasSpine && (
            <div className="absolute left-0 top-0 bottom-0 w-[5%] pointer-events-none" style={{
              background: 'linear-gradient(90deg, #3D2914 0%, #5D4037 30%, #8B6914 60%, transparent 100%)',
              borderRight: '2px solid #3D2914',
              boxShadow: 'inset -5px 0 15px rgba(0,0,0,0.3)'
            }} />
          )}

          {/* Page texture for book style */}
          {overlayConfig.hasPageTexture && (
            <div className="absolute inset-0 pointer-events-none opacity-30" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }} />
          )}

          {/* Page lines for book style */}
          {overlayConfig.hasPageLines && (
            <>
              <div className="absolute inset-y-[3%] left-[7%] w-[1px] pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 0%, #8B6914 10%, #8B6914 90%, transparent 100%)', opacity: 0.3 }} />
              <div className="absolute inset-y-[3%] left-[9%] w-[1px] pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 0%, #8B6914 10%, #8B6914 90%, transparent 100%)', opacity: 0.2 }} />
              <div className="absolute top-0 left-[5%] right-0 h-3 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(139, 90, 43, 0.2) 0%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-[5%] right-0 h-3 pointer-events-none" style={{ background: 'linear-gradient(0deg, rgba(139, 90, 43, 0.2) 0%, transparent 100%)' }} />
            </>
          )}

          {/* Top gradient highlight for card style */}
          {overlayConfig.hasTopGradient && (
            <div className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none" style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
              borderRadius: '1.5rem 1.5rem 0 0'
            }} />
          )}

          {/* Corner badge for card style */}
          {overlayConfig.hasCornerBadge && (
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm pointer-events-none flex items-center justify-center">
              <span className="text-white/80 text-xs font-bold">{surah.id}</span>
            </div>
          )}

          {/* Clock ring effect */}
          {overlayConfig.hasClockRing && (
            <div className="absolute inset-[4%] rounded-full border-[3px] border-white/25 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(139, 92, 246, 0.4), 0 0 20px rgba(139, 92, 246, 0.2)' }} />
          )}

          {/* Clock tick marks */}
          {overlayConfig.hasClockTicks && (
            <div className="absolute inset-[6%] rounded-full pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="absolute w-0.5 h-3 bg-white/40 rounded-full" style={{
                  top: '0',
                  left: '50%',
                  transformOrigin: '50% calc(50vmin - 6%)',
                  transform: `translateX(-50%) rotate(${i * 30}deg)`
                }} />
              ))}
            </div>
          )}

          {/* Honeycomb pattern overlay */}
          {overlayConfig.hasHoneycomb && (
            <div className="absolute inset-0 pointer-events-none opacity-15" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'56\' height=\'100\' viewBox=\'0 0 56 100\'%3E%3Cpath d=\'M28 66L0 50V16L28 0l28 16v34L28 66zM28 0L0 16v34l28 16 28-16V16L28 0z\' fill=\'%23ffffff\' fill-opacity=\'0.4\'/%3E%3C/svg%3E")',
              backgroundSize: '40px 70px'
            }} />
          )}

          {/* Calm glow effect for reading - subtle teal accent at edges */}
          {overlayConfig.hasCalmGlow && (
            <>
              {/* Top subtle glow */}
              <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{
                background: 'linear-gradient(180deg, rgba(20, 184, 166, 0.08) 0%, transparent 100%)',
                borderRadius: '1.5rem 1.5rem 0 0'
              }} />
              {/* Bottom subtle glow */}
              <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{
                background: 'linear-gradient(0deg, rgba(20, 184, 166, 0.06) 0%, transparent 100%)',
                borderRadius: '0 0 1.5rem 1.5rem'
              }} />
            </>
          )}

          {/* Stars for kids style - more fun scattered stars */}
          {overlayConfig.hasStars && (
            <>
              <div className="absolute w-3 h-3 pointer-events-none animate-pulse" style={{ top: '6%', left: '10%', fontSize: '20px' }}>⭐</div>
              <div className="absolute w-3 h-3 pointer-events-none animate-pulse" style={{ top: '12%', right: '8%', animationDelay: '0.3s', fontSize: '16px' }}>✨</div>
              <div className="absolute w-3 h-3 pointer-events-none animate-pulse" style={{ top: '25%', left: '5%', animationDelay: '0.6s', fontSize: '14px' }}>🌟</div>
              <div className="absolute w-3 h-3 pointer-events-none animate-pulse" style={{ bottom: '20%', right: '6%', animationDelay: '0.9s', fontSize: '18px' }}>⭐</div>
              <div className="absolute w-3 h-3 pointer-events-none animate-pulse" style={{ bottom: '10%', left: '12%', animationDelay: '1.2s', fontSize: '16px' }}>✨</div>
              <div className="absolute w-3 h-3 pointer-events-none animate-pulse" style={{ bottom: '30%', left: '4%', animationDelay: '1.5s', fontSize: '12px' }}>🌟</div>
            </>
          )}

          {/* Rainbow border glow for kids */}
          {overlayConfig.hasRainbowBorder && (
            <div className="absolute -inset-1 rounded-[2.5rem] pointer-events-none" style={{
              background: 'linear-gradient(90deg, #FF6B6B, #FF8E53, #FFE66D, #96E6A1, #4ECDC4, #45B7D1, #A78BFA, #F472B6, #FF6B6B)',
              backgroundSize: '200% 100%',
              animation: 'rainbow 3s linear infinite',
              opacity: 0.6,
              filter: 'blur(4px)'
            }} />
          )}

          {/* Wave effect for wave style - multiple animated layers */}
          {overlayConfig.hasWaveEffect && (
            <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-16" style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.2) 100%)'
              }} />
              <div className="absolute bottom-[-5px] left-[-10%] right-[-10%] h-10" style={{
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '50% 50% 0 0',
                animation: 'wave 3s ease-in-out infinite'
              }} />
              <div className="absolute bottom-[-8px] left-[-5%] right-[-5%] h-8" style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50% 50% 0 0',
                animation: 'wave 4s ease-in-out infinite reverse'
              }} />
            </div>
          )}

          {/* Wave layers at top too */}
          {overlayConfig.hasWaveLayers && (
            <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-12" style={{
                background: 'linear-gradient(0deg, transparent 0%, rgba(255,255,255,0.15) 100%)'
              }} />
            </div>
          )}

          {/* Left accent for timeline style - thicker with dots */}
          {overlayConfig.leftAccent && (
            <>
              <div className="absolute left-0 top-[6%] bottom-[6%] w-2 bg-white/60 rounded-r pointer-events-none" style={{ boxShadow: '3px 0 15px rgba(255,255,255,0.4)' }} />
              {overlayConfig.hasTimelineDots && (
                <>
                  <div className="absolute left-[3px] top-[15%] w-3 h-3 rounded-full bg-white/80 pointer-events-none" />
                  <div className="absolute left-[3px] top-[35%] w-3 h-3 rounded-full bg-white/60 pointer-events-none" />
                  <div className="absolute left-[3px] top-[55%] w-3 h-3 rounded-full bg-white/60 pointer-events-none" />
                  <div className="absolute left-[3px] top-[75%] w-3 h-3 rounded-full bg-white/80 pointer-events-none" />
                </>
              )}
            </>
          )}

          {/* Islamic geometric pattern for juzz */}
          {overlayConfig.hasIslamicPattern && (
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.5\'%3E%3Cpath d=\'M40 0L0 40l40 40 40-40L40 0zm0 10l30 30-30 30-30-30 30-30z\'/%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '60px 60px'
            }} />
          )}

          {/* Outer frame border for gallery */}
          {overlayConfig.outerBorder && (
            <div className="absolute -inset-[4px] pointer-events-none" style={{
              border: overlayConfig.outerBorder,
              borderRadius: '0.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
            }} />
          )}

          {/* Frame corners for gallery */}
          {overlayConfig.hasFrameCorners && (
            <>
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gray-400/50 pointer-events-none" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gray-400/50 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gray-400/50 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gray-400/50 pointer-events-none" />
            </>
          )}

          {/* Minimal accent line */}
          {overlayConfig.hasMinimalAccent && (
            <div className="absolute top-0 left-[10%] right-[10%] h-1 bg-white/40 rounded-b pointer-events-none" />
          )}

          {/* Floating rings for bubble style */}
          {overlayConfig.hasFloatingRings && (
            <>
              <div className="absolute inset-[8%] rounded-full border border-white/10 pointer-events-none" style={{ animation: 'pulse 4s ease-in-out infinite' }} />
              <div className="absolute inset-[12%] rounded-full border border-white/5 pointer-events-none" style={{ animation: 'pulse 4s ease-in-out infinite 1s' }} />
            </>
          )}

          {/* Particles - only for styles that have them */}
          {overlayConfig.hasParticles && particles.map((p, i) => (
            <div key={i} className="absolute rounded-full pointer-events-none"
              style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%`, background: 'rgba(255,255,255,0.8)', boxShadow: '0 0 8px rgba(255,255,255,0.8)', animation: `floatParticle ${p.duration}s ease-in-out infinite`, animationDelay: `${p.delay}s` }} />
          ))}

          {/* Top header with surah number and close button - adapts to shape */}
          <div className="absolute z-[70] flex items-center justify-between"
            style={{
              top: overlayConfig.shape === 'circle' ? '8%' : (overlayConfig.isCalm ? '16px' : '4%'),
              left: overlayConfig.shape === 'circle' ? '25%' : (overlayConfig.isCalm ? '20px' : '5%'),
              right: overlayConfig.shape === 'circle' ? '25%' : (overlayConfig.isCalm ? '20px' : '5%')
            }}>
            {/* Surah number badge - adapts to theme */}
            <div className={`w-10 h-10 flex items-center justify-center text-sm font-bold ${overlayConfig.shape === 'circle' ? 'rounded-full' : 'rounded-xl'}`}
              style={{
                background: !overlayConfig.isDark ? 'rgba(139, 90, 43, 0.25)' : (overlayConfig.isCalm ? 'rgba(20, 184, 166, 0.25)' : 'rgba(255,255,255,0.25)'),
                backdropFilter: 'blur(10px)',
                color: !overlayConfig.isDark ? '#5D4037' : 'white',
                border: overlayConfig.isCalm ? '1px solid rgba(20, 184, 166, 0.3)' : 'none'
              }}>
              {surah.id}
            </div>

            {/* Close button - adapts to theme */}
            <button onClick={handleCloseClick}
              className={`w-10 h-10 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all ${overlayConfig.shape === 'circle' ? 'rounded-full' : 'rounded-xl'}`}
              style={{
                background: !overlayConfig.isDark ? 'rgba(139, 90, 43, 0.25)' : (overlayConfig.isCalm ? 'rgba(20, 184, 166, 0.25)' : 'rgba(255,255,255,0.25)'),
                backdropFilter: 'blur(10px)',
                color: !overlayConfig.isDark ? '#5D4037' : 'white',
                border: overlayConfig.isCalm ? '1px solid rgba(20, 184, 166, 0.3)' : 'none'
              }}
              aria-label="Close">
              <Icons.X className="w-5 h-5" />
            </button>
          </div>

          {/* Content area - adapts to different shapes */}
          <div className="absolute flex overflow-hidden" style={{
            top: overlayConfig.shape === 'circle' ? '16%' : (overlayConfig.isCalm ? '70px' : '13%'),
            left: overlayConfig.shape === 'circle' ? '6%' : (overlayConfig.isCalm ? '16px' : (overlayConfig.hasSpine ? '14%' : '6%')),
            right: overlayConfig.shape === 'circle' ? '6%' : (overlayConfig.isCalm ? '16px' : '6%'),
            bottom: overlayConfig.shape === 'circle' ? '6%' : (overlayConfig.isCalm ? '16px' : '5%'),
            color: !overlayConfig.isDark ? '#3E2723' : 'white'
          }}>
            <div className="flex-1 flex flex-col min-w-0">
              <div className="text-center flex-shrink-0 mb-1">
                <div className="text-xl sm:text-2xl mb-0.5" style={{
                  fontFamily: "'Scheherazade New', serif",
                  textShadow: !overlayConfig.isDark ? '0 1px 2px rgba(255,255,255,0.3)' : '0 2px 12px rgba(0,0,0,0.4)'
                }} lang="ar" dir="rtl">{surah.arabic}</div>
                <h1 className="text-sm sm:text-base font-bold" style={{
                  textShadow: !overlayConfig.isDark ? '0 1px 2px rgba(255,255,255,0.2)' : '0 2px 8px rgba(0,0,0,0.3)'
                }}>{surah.name}</h1>

                {/* Offline availability hint */}
                {offlineStatus && (
                  <div className="flex items-center justify-center gap-1 mt-0.5">
                    <Icons.Download className="w-2.5 h-2.5" style={{ opacity: 0.5 }} />
                    <span className="text-[9px] sm:text-[10px]" style={{ opacity: 0.5 }}>
                      Offline: {[
                        offlineStatus.hasArabic && 'Arabic',
                        offlineStatus.hasTranslation && offlineStatus.translationLabel,
                        offlineStatus.hasAudio && (offlineStatus.reciterName || 'Audio'),
                      ].filter(Boolean).join(' + ')}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-center gap-1 sm:gap-2 mt-1 sm:mt-2 flex-wrap">
                  <button onClick={toggleSettings} className={`p-1.5 sm:p-2 rounded-full transition-all ${showSettings ? 'bg-white/30' : 'bg-white/15 hover:bg-white/25'}`}>
                    <Icons.Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button onClick={toggleWordByWord} className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all ${wordByWordMode ? 'bg-amber-500/60' : 'bg-white/15 hover:bg-white/25'}`}>Word</button>
                  <button onClick={toggleTajweed} className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all ${tajweedMode ? 'bg-gradient-to-r from-red-500/60 to-green-500/60' : 'bg-white/15 hover:bg-white/25'}`}>Tajweed</button>
                  <button onClick={toggleSelectionMode} className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium transition-all flex items-center gap-1 ${selectionMode ? 'bg-emerald-500/60' : 'bg-white/15 hover:bg-white/25'}`}>
                    <Icons.CheckSquare className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    <span className="hidden xs:inline">Select</span>
                  </button>
                </div>

                {/* Selection Mode Bar */}
                {selectionMode && (
                  <div className="mt-2 p-2 bg-emerald-500/30 backdrop-blur-sm rounded-xl mx-4 flex items-center justify-between gap-2" style={{ animation: 'slideDown 0.2s ease-out' }}>
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-xs text-white/90">
                        {selectedVerses.length === 0 ? 'Tap verses to select' : `${selectedVerses.length} verse${selectedVerses.length > 1 ? 's' : ''} selected`}
                      </span>
                      {selectedVerses.length > 0 && (
                        <span className="text-[10px] text-white/60">
                          ({selectedVerses.join(', ')})
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      {selectedVerses.length > 0 && (
                        <>
                          <button onClick={() => setSelectedVerses([])} className="px-2 py-1 rounded-full text-[10px] bg-white/20 hover:bg-white/30 transition-all">
                            Clear
                          </button>
                          <button onClick={shareSelectedVerses} className="px-2 py-1 rounded-full text-[10px] bg-white/30 hover:bg-white/40 transition-all flex items-center gap-1">
                            <Icons.Share className="w-3 h-3" />
                            Share
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Word-by-Word Fallback Indicator */}
                {wordByWordMode && isWordsFallback && (
                  <div className="mt-2 mx-4 p-2 bg-amber-500/30 backdrop-blur-sm rounded-xl flex items-center justify-center gap-2" style={{ animation: 'slideDown 0.2s ease-out' }}>
                    <Icons.AlertCircle className="w-3.5 h-3.5 text-amber-200" />
                    <span className="text-[10px] text-white/90">
                      Word meanings shown in <strong>English</strong> — {wordsUserLang === 'ur' ? 'Urdu' : wordsUserLang} not available for this surah
                    </span>
                  </div>
                )}

                {showSettings && (
                  <div className="mt-1 sm:mt-2 p-2 sm:p-3 bg-black/20 backdrop-blur-sm rounded-xl mx-2 sm:mx-4 max-h-[120px] overflow-y-auto" style={{ animation: 'slideDown 0.2s ease-out' }}>
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                      <div className="flex items-center gap-1.5 text-white">
                        <span className="text-[9px] sm:text-[10px] text-white/70">Size:</span>
                        <button onClick={() => { const sizes = ['small', 'medium', 'large', 'xlarge']; const idx = sizes.indexOf(fontSize); if (idx > 0) setFontSize(sizes[idx - 1]); }}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/40 flex items-center justify-center hover:bg-white/50 active:scale-95 border border-white/30 text-white font-bold text-lg leading-none">−</button>
                        <span className="text-sm sm:text-base w-5 sm:w-6 text-center font-bold">{fontSize.charAt(0).toUpperCase()}</span>
                        <button onClick={() => { const sizes = ['small', 'medium', 'large', 'xlarge']; const idx = sizes.indexOf(fontSize); if (idx < sizes.length - 1) setFontSize(sizes[idx + 1]); }}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/40 flex items-center justify-center hover:bg-white/50 active:scale-95 border border-white/30 text-white font-bold text-lg leading-none">+</button>
                      </div>
                      <div className="w-px h-4 sm:h-5 bg-white/30 hidden sm:block" />
                      <select value={selectedTranslation} onChange={(e) => setSelectedTranslation(e.target.value)} className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs bg-white/20 text-white cursor-pointer max-w-[90px] sm:max-w-[120px]">
                        {Object.entries(TRANSLATIONS).map(([id, info]) => (<option key={id} value={id} className="text-gray-800">{info.name}</option>))}
                      </select>
                      <select value={selectedReciter} onChange={(e) => setSelectedReciter(e.target.value)} className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs bg-white/20 text-white cursor-pointer max-w-[90px] sm:max-w-[120px]">
                        {Object.entries(RECITERS).map(([id, info]) => (<option key={id} value={id} className="text-gray-800">{info.name}</option>))}
                      </select>
                      <button onClick={toggleTranslation} className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs ${showTranslation ? 'bg-white/30' : 'bg-white/15'}`}>Trans</button>
                      <button onClick={cycleRepeatMode} className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs ${repeatMode !== 'none' ? 'bg-purple-500/60' : 'bg-white/15'}`}>
                        {repeatMode === 'none' ? '↻' : repeatMode === 'verse' ? '1x' : '∞'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div ref={versesContainerRef} className="flex-1 overflow-y-auto overflow-x-hidden px-3"
                style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 4%, black 96%, transparent 100%)' }}>
                {loading ? (
                  <div className="flex flex-col items-center justify-center h-32 gap-2">
                    <Icons.Loader className="w-10 h-10 animate-spin text-white/60" />
                    <p className="text-xs text-white/70">Loading...</p>
                  </div>
                ) : error ? (
                  <div className="text-center py-8">
                    <Icons.AlertCircle className="w-10 h-10 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">{error}</p>
                  </div>
                ) : (
                  <div className={`py-2 overflow-x-hidden ${readerStyleConfig.container}`}>
                    {/* Book Page Navigator - only for book layout */}
                    {readerStyle === 'book' && totalPages > 1 && (
                      <div className="sticky top-0 z-20 bg-black/50 backdrop-blur-xl rounded-xl p-2 sm:p-3 mb-3 border border-amber-700/30">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-amber-400/70 text-[10px] sm:text-xs font-medium">Page</span>
                          {totalPages <= 10 ? (
                            // Show all page buttons for small surahs
                            <div className="flex items-center gap-1 flex-wrap justify-center flex-1">
                              {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                  key={i}
                                  onClick={() => scrollToBookPage(i + 1)}
                                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-[10px] sm:text-xs font-medium transition-all ${
                                    currentBookPage === i + 1
                                      ? 'bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-lg scale-110'
                                      : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                                  }`}
                                >
                                  {i + 1}
                                </button>
                              ))}
                            </div>
                          ) : (
                            // Show dropdown for large surahs
                            <div className="flex items-center gap-2 flex-1 justify-center">
                              <button
                                onClick={() => currentBookPage > 1 && scrollToBookPage(currentBookPage - 1)}
                                disabled={currentBookPage <= 1}
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all"
                              >
                                <Icons.ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                              </button>
                              <select
                                value={currentBookPage}
                                onChange={(e) => scrollToBookPage(Number(e.target.value))}
                                className="bg-gradient-to-br from-amber-600 to-amber-700 text-white text-sm sm:text-base font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl cursor-pointer outline-none shadow-lg min-w-[80px]"
                              >
                                {Array.from({ length: totalPages }, (_, i) => (
                                  <option key={i} value={i + 1} className="text-gray-800">
                                    Page {i + 1}
                                  </option>
                                ))}
                              </select>
                              <button
                                onClick={() => currentBookPage < totalPages && scrollToBookPage(currentBookPage + 1)}
                                disabled={currentBookPage >= totalPages}
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all"
                              >
                                <Icons.ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                              </button>
                            </div>
                          )}
                          <span className="text-white/40 text-[9px] sm:text-[10px]">
                            {(currentBookPage - 1) * VERSES_PER_PAGE + 1}-{Math.min(currentBookPage * VERSES_PER_PAGE, surah.ayahs)}
                          </span>
                        </div>
                      </div>
                    )}

                    {surah.id !== 9 && surah.id !== 1 && (
                      <div className="text-center py-2 overflow-hidden" style={{ fontFamily: "'Scheherazade New', serif", fontSize: fontSizeMap[fontSize].arabic, color: readerStyleConfig.colors.text, textShadow: readerStyleConfig.isDark ? '0 2px 8px rgba(0,0,0,0.3)' : 'none', wordWrap: 'break-word' }} dir="rtl" lang="ar">
                        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                      </div>
                    )}

                    {/* Progressive loading: only render visibleVerseCount verses for large surahs */}
                    {(isLargeSurah ? verses.slice(0, visibleVerseCount) : verses).map((verse, index) => {
                      // Safety check: skip invalid verses
                      if (!verse || !verse.arabic) {
                        logger.error('Invalid verse data', { surahId: surah?.id, index, verse });
                        return null;
                      }
                      const ayahNum = verse.number || index + 1;
                      const isSajdah = SAJDAH_AYAT[surah?.id]?.includes(ayahNum);
                      const isCurrentAyah = currentAyah === ayahNum;
                      const arabicWords = (verse.arabic || '').split(' ').filter(w => w.trim());
                      const wordMeanings = wordsMap[ayahNum] || [];
                      const hideLevel = memorizeSettings.hideLevel || 0;
                      const shouldHideWord = (wordIdx) => {
                        if (hideLevel === 0) return false;
                        if (hideLevel === 4) return true;
                        const hideRatio = hideLevel * 0.25;
                        return (wordIdx % Math.ceil(1 / hideRatio)) === 0;
                      };

                      const isSelected = selectedVerses.includes(ayahNum);

                      // Get dynamic verse styles from readerStyleConfig.colors
                      const verseColors = readerStyleConfig.colors;
                      const verseStyle = {
                        background: isSelected ? 'rgba(16,185,129,0.2)' : isCurrentAyah ? verseColors.activeBg : verseColors.verseBg,
                        borderColor: isCurrentAyah ? verseColors.activeBorder : verseColors.verseBorder,
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        transform: isCurrentAyah ? 'scale(1.01)' : 'scale(1)',
                        boxShadow: isCurrentAyah ? '0 0 20px rgba(255,255,255,0.15)' : isSelected ? '0 0 15px rgba(16,185,129,0.3)' : isSajdah ? '0 0 12px rgba(239,68,68,0.1)' : 'none',
                        ...(isSajdah ? { borderLeft: '3px solid rgba(239,68,68,0.5)' } : {}),
                      };

                      return (
                        <div key={ayahNum} data-ayah={ayahNum}
                          onClick={selectionMode ? () => toggleVerseSelection(ayahNum) : undefined}
                          className={`relative ${readerStyleConfig.verse} ${hideLevel > 0 ? 'ring-2 ring-amber-400/30' : ''} ${isSelected ? 'ring-2 ring-emerald-400/60' : ''} ${selectionMode ? 'cursor-pointer' : ''}`}
                          style={verseStyle}>

                          {/* Selection checkbox */}
                          {selectionMode && (
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${isSelected ? 'bg-emerald-500' : readerStyleConfig.isDark ? 'bg-white/20' : 'bg-slate-200'}`}>
                                {isSelected && <Icons.Check className="w-3.5 h-3.5 text-white" />}
                              </div>
                              <span className="text-xs" style={{ color: verseColors.translation }}>Verse {ayahNum}</span>
                            </div>
                          )}
                          {/* Timeline badge - positioned on timeline line (left side) */}
                          {readerStyleConfig.badgePosition === 'timeline' && (
                            <span className={readerStyleConfig.ayahBadge} style={{ background: verseColors.badgeBg, color: verseColors.badgeColor, border: `1px solid ${verseColors.activeBorder}` }}>{ayahNum}</span>
                          )}

                          <div className="leading-[2.2] mb-2" style={{ fontFamily: "'Scheherazade New', serif", fontSize: fontSizeMap[fontSize].arabic, color: verseColors.text, textShadow: readerStyleConfig.isDark ? '0 1px 6px rgba(0,0,0,0.3)' : 'none', wordWrap: 'break-word', overflowWrap: 'break-word', maxWidth: '100%' }} dir="rtl" lang="ar">
                            {wordByWordMode ? (
                              wordMeanings.length > 0 ? (
                                wordMeanings.map((wordData, wordIdx) => (
                                  <WordItem key={`${ayahNum}-${wordIdx}`} word={wordData.arabic} isActive={selectedWordData?.key === `${ayahNum}-${wordIdx}`} hidden={shouldHideWord(wordIdx)} showOnHover={hideLevel > 0 && hideLevel < 4}
                                    onClick={() => setSelectedWordData({ key: `${ayahNum}-${wordIdx}`, word: wordData.arabic, meaning: wordData.meaning, transliteration: wordData.transliteration, audioUrl: wordData.audioUrl || null, isLoading: false })} />
                                ))
                              ) : (
                                arabicWords.map((word, wordIdx) => (
                                  <WordItem key={`${ayahNum}-${wordIdx}`} word={word} isActive={selectedWordData?.key === `${ayahNum}-${wordIdx}`} hidden={shouldHideWord(wordIdx)} showOnHover={hideLevel > 0 && hideLevel < 4}
                                    onClick={() => setSelectedWordData({ key: `${ayahNum}-${wordIdx}`, word, meaning: '', transliteration: '', isLoading: wordsLoading })} />
                                ))
                              )
                            ) : tajweedMode && verse.tajweedSegments ? (
                              <TajweedText segments={verse.tajweedSegments} />
                            ) : (
                              verse.arabic
                            )}
                            {/* Inline badge - after Arabic text */}
                            {readerStyleConfig.badgePosition === 'inline' && (
                              <span className={readerStyleConfig.ayahBadge} style={{ background: verseColors.badgeBg, color: verseColors.badgeColor, border: `1px solid ${verseColors.activeBorder}` }}>{ayahNum}</span>
                            )}
                          </div>

                          {/* Absolute positioned badge - top corner or centered */}
                          {(readerStyleConfig.badgePosition === 'absolute' || readerStyleConfig.badgePosition === 'absolute-bottom') && (
                            <span className={readerStyleConfig.ayahBadge} style={{ background: verseColors.badgeBg, color: verseColors.badgeColor, border: `1px solid ${verseColors.activeBorder}` }}>{ayahNum}</span>
                          )}

                          {/* Sajdah (Prostration) indicator */}
                          {isSajdah && (
                            <div className="flex items-center gap-1.5 mb-2 px-2.5 py-1 rounded-lg w-fit" style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)' }}>
                              <span className="text-sm">🙇</span>
                              <span className="text-[10px] font-bold" style={{ color: '#ef4444' }}>سجدة — Sajdah Required</span>
                            </div>
                          )}

                          {showTranslation && verse.translation && (
                            <p className={`leading-relaxed mb-2 ${selectedTranslation.startsWith('ur.') ? 'font-urdu' : ''}`}
                              dir={selectedTranslation.startsWith('ur.') || selectedTranslation.startsWith('ar.') ? 'rtl' : 'ltr'}
                              style={{ fontSize: fontSizeMap[fontSize].translation, color: verseColors.translation }}>{verse.translation}</p>
                          )}

                          {selectedWordData?.key?.startsWith(`${ayahNum}-`) && (
                            <div className="mt-2 p-3 rounded-xl" style={{ animation: 'slideDown 0.2s ease-out', background: readerStyleConfig.isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)' }}>
                              <div className="flex items-start gap-3">
                                {/* Play Word Audio Button - Always show, disabled if no audio */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (!selectedWordData.audioUrl) return;

                                    // Stop any previous word audio
                                    if (wordAudioRef.current) {
                                      wordAudioRef.current.pause();
                                      wordAudioRef.current.src = '';
                                      wordAudioRef.current = null;
                                    }

                                    setWordAudioError(null);
                                    setWordAudioPlaying(true);
                                    const audio = new Audio(selectedWordData.audioUrl);
                                    wordAudioRef.current = audio; // Store ref

                                    // Set timeout for slow loading
                                    const timeout = setTimeout(() => {
                                      setWordAudioError('Audio loading slow...');
                                    }, 3000);

                                    audio.oncanplaythrough = () => clearTimeout(timeout);
                                    audio.onended = () => {
                                      setWordAudioPlaying(false);
                                      setWordAudioError(null);
                                      wordAudioRef.current = null;
                                    };
                                    audio.onerror = () => {
                                      clearTimeout(timeout);
                                      setWordAudioPlaying(false);
                                      setWordAudioError('Failed to load audio');
                                      wordAudioRef.current = null;
                                      setTimeout(() => setWordAudioError(null), 3000);
                                    };
                                    audio.play().catch(() => {
                                      clearTimeout(timeout);
                                      setWordAudioPlaying(false);
                                      setWordAudioError('Playback failed');
                                      wordAudioRef.current = null;
                                      setTimeout(() => setWordAudioError(null), 3000);
                                    });
                                  }}
                                  disabled={!selectedWordData.audioUrl || wordAudioPlaying}
                                  className={`p-2 rounded-full transition-all ${
                                    wordAudioPlaying
                                      ? 'bg-emerald-500 animate-pulse cursor-wait'
                                      : selectedWordData.audioUrl
                                        ? 'bg-emerald-500/80 hover:bg-emerald-500 hover:scale-110 cursor-pointer'
                                        : 'bg-gray-500/30 cursor-not-allowed opacity-50'
                                  }`}
                                  aria-label={selectedWordData.audioUrl ? "Play word audio" : "Audio not available"}
                                  title={selectedWordData.audioUrl ? "Play pronunciation" : "Audio not available for this word"}
                                >
                                  {wordAudioPlaying ? (
                                    <Icons.Loader className="w-4 h-4 text-white animate-spin" />
                                  ) : selectedWordData.audioUrl ? (
                                    <Icons.Play className="w-4 h-4 text-white" />
                                  ) : (
                                    <Icons.Volume className="w-4 h-4 text-white/50" />
                                  )}
                                </button>
                                <div className="text-2xl" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">{selectedWordData.word}</div>
                                <div className="flex-1 text-left">
                                  {selectedWordData.transliteration && <p className="text-white/60 text-xs italic">{selectedWordData.transliteration}</p>}
                                  <p className="text-white text-sm">{selectedWordData.meaning || 'Loading...'}</p>
                                  {!selectedWordData.audioUrl && (
                                    <p className="text-amber-400/60 text-[10px] mt-1">Audio not available</p>
                                  )}
                                  {wordAudioError && (
                                    <p className="text-red-400/80 text-[10px] mt-1">{wordAudioError}</p>
                                  )}
                                </div>
                                <button onClick={clearSelectedWord} className="p-1 rounded-full hover:bg-white/20">
                                  <Icons.X className="w-3 h-3 text-white/50" />
                                </button>
                              </div>
                            </div>
                          )}

                          <div className="flex items-center gap-1.5">
                            <button onClick={() => toggleAyahPlayback(ayahNum)} className={`p-1.5 rounded-full transition-all hover:scale-110 ${isCurrentAyah && isPlaying ? 'bg-white/40' : 'bg-white/15'}`} title="Play Arabic recitation">
                              {audioLoading && isCurrentAyah ? <Icons.Loader className="w-3 h-3 animate-spin" /> : isCurrentAyah && isPlaying ? <Icons.Pause className="w-3 h-3" /> : <Icons.Play className="w-3 h-3" />}
                            </button>
                            {showTranslation && verse.translation && (
                              <button
                                onClick={() => speakTranslation(ayahNum, verse.translation)}
                                className={`p-1.5 rounded-full transition-all hover:scale-110 ${speakingAyah === ayahNum ? 'bg-cyan-500/80 animate-pulse' : 'bg-white/15'}`}
                                title="Read translation aloud"
                              >
                                {speakingAyah === ayahNum ? <Icons.Volume className="w-3 h-3" /> : <Icons.Headphones className="w-3 h-3" />}
                              </button>
                            )}
                            <button onClick={() => handleShareVerse(verse, ayahNum)} className={`p-1.5 rounded-full transition-all hover:scale-110 ${shareStatus === ayahNum ? 'bg-emerald-500/80' : 'bg-white/15'}`} title="Share verse">
                              {shareStatus === ayahNum ? <Icons.Check className="w-3 h-3" /> : <Icons.Share className="w-3 h-3" />}
                            </button>
                            {/* Grammar Analysis & Ontology Button - shows for surahs with treebank OR ontology data */}
                            {(hasTreebankData(surah?.id) || hasOntologyData(surah?.id)) && (
                              <button
                                onClick={() => {
                                  setTreebankAyah(ayahNum);
                                  setShowTreebank(true);
                                }}
                                className={`p-1.5 rounded-full transition-all hover:scale-110 relative ${
                                  canAccessTreebank(surah?.id, isPremium) ? 'bg-purple-500/30 hover:bg-purple-500/50' : 'bg-white/15'
                                }`}
                                title={hasTreebankData(surah?.id) ? "Grammar & Concept Analysis" : "Concept Analysis"}
                              >
                                <Icons.BookOpen className="w-3 h-3 text-purple-300" />
                                {!canAccessTreebank(surah?.id, isPremium) && hasTreebankData(surah?.id) && (
                                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-500 rounded-full flex items-center justify-center">
                                    <Icons.Lock className="w-1.5 h-1.5 text-white" />
                                  </span>
                                )}
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {/* Progressive loading trigger and indicator for large surahs */}
                    {isLargeSurah && visibleVerseCount < verses.length && (
                      <div
                        ref={loadMoreTriggerRef}
                        className="py-4 text-center"
                      >
                        {isLoadingMoreVerses ? (
                          <div className="flex items-center justify-center gap-2">
                            <Icons.Loader className="w-4 h-4 animate-spin text-white/60" />
                            <span className="text-xs text-white/60">Loading more verses...</span>
                          </div>
                        ) : (
                          <div className="text-xs text-white/40">
                            Showing {visibleVerseCount} of {verses.length} verses
                            <span className="block text-[10px] mt-1">Scroll down for more</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="h-4" />
                  </div>
                )}
              </div>

              <div className="flex-shrink-0 pt-1">
                {audioError && <p className="text-center text-red-300 text-[10px] mb-1">{audioError}</p>}

                {/* Audio Mode Toggle */}
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <button
                    onClick={() => {
                      setAudioMode('arabic');
                      if (isPlayingTranslation) toggleTranslationPlayback();
                      if (isPlayingCombined) toggleCombinedPlayback();
                    }}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${audioMode === 'arabic' ? 'bg-white/30 text-white' : 'bg-white/10 text-white/60'}`}
                  >
                    Arabic
                  </button>
                  <button
                    onClick={() => {
                      setAudioMode('translation');
                      // Stop Arabic audio
                      if (isPlaying) {
                        setIsPlaying(false);
                        if (audioRef.current) audioRef.current.pause();
                      }
                      if (isPlayingCombined) toggleCombinedPlayback();
                    }}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${audioMode === 'translation' ? 'bg-cyan-500/50 text-white' : 'bg-white/10 text-white/60'}`}
                    title={apiAudioSource ? `Audio: ${apiAudioSource.reciter?.name}` : 'TTS Audio (No narrator available)'}
                  >
                    {ttsLanguage === 'ur' ? 'اردو' : 'Translation'}
                    {apiAudioSource ? (
                      <span className="ml-1 text-emerald-300">●</span>
                    ) : (
                      <span className="ml-1 text-amber-300" title="TTS only">○</span>
                    )}
                  </button>
                  {/* Narrator selector - only show when audio narrators are available */}
                  {availableNarrators.length > 0 && (audioMode === 'translation' || audioMode === 'combined') && (
                    <select
                      value={effectiveNarrator || ''}
                      onChange={(e) => handleNarratorChange(e.target.value)}
                      className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border-none outline-none cursor-pointer hover:bg-white/20 transition-all"
                      style={{ maxWidth: '120px' }}
                    >
                      {availableNarrators.map((narrator) => (
                        <option key={narrator.id} value={narrator.id} className="bg-gray-800 text-white">
                          {narrator.translationShort || narrator.name} ({narrator.styleLabel || (narrator.style === 'word-by-word' ? 'لفظی' : 'جملہ')})
                        </option>
                      ))}
                    </select>
                  )}
                  {/* TTS indicator when no API audio available */}
                  {!hasMatchingAudio && (audioMode === 'translation' || audioMode === 'combined') && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300">
                      🤖 TTS
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setAudioMode('combined');
                      // Stop translation-only mode
                      if (isPlayingTranslation) toggleTranslationPlayback();
                      // Stop Arabic-only mode
                      if (isPlaying && !isPlayingCombined) {
                        setIsPlaying(false);
                        if (audioRef.current) audioRef.current.pause();
                      }
                    }}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${audioMode === 'combined' ? 'bg-gradient-to-r from-amber-500/50 to-cyan-500/50 text-white' : 'bg-white/10 text-white/60'}`}
                    title="Play Arabic then Translation for each verse"
                  >
                    Both
                  </button>
                </div>

                {/* Audio Controls */}
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      if (audioMode === 'translation') {
                        setTranslationAyah(prev => Math.max(1, prev - 1));
                      } else {
                        goToPrevAyah();
                      }
                    }}
                    disabled={audioMode === 'translation' ? translationAyah <= 1 : currentAyah <= 1}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all disabled:opacity-30"
                  >
                    <Icons.SkipBack className="w-4 h-4" />
                  </button>

                  {audioMode === 'arabic' ? (
                    <button onClick={togglePlayPause}
                      className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/40 transition-all hover:scale-105"
                      style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                      {audioLoading ? <Icons.Loader className="w-5 h-5 animate-spin" /> : isPlaying ? <Icons.Pause className="w-5 h-5" /> : <Icons.Play className="w-5 h-5 ml-0.5" />}
                    </button>
                  ) : audioMode === 'translation' ? (
                    <button onClick={toggleTranslationPlayback}
                      className={`w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-all ${isPlayingTranslation ? 'bg-cyan-500/60' : 'bg-white/30 hover:bg-white/40'}`}
                      style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                      {isPlayingTranslation ? <Icons.Pause className="w-5 h-5" /> : <Icons.Headphones className="w-5 h-5" />}
                    </button>
                  ) : (
                    <button onClick={toggleCombinedPlayback}
                      className={`w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-all ${isPlayingCombined ? 'bg-gradient-to-r from-amber-500/60 to-cyan-500/60' : 'bg-white/30 hover:bg-white/40'}`}
                      style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                      {isPlayingCombined ? <Icons.Pause className="w-5 h-5" /> : <Icons.Play className="w-5 h-5 ml-0.5" />}
                    </button>
                  )}

                  <button
                    onClick={() => {
                      if (audioMode === 'translation') {
                        setTranslationAyah(prev => Math.min(totalVerses, prev + 1));
                      } else {
                        goToNextAyah();
                      }
                    }}
                    disabled={audioMode === 'translation' ? translationAyah >= totalVerses : currentAyah >= totalVerses}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all disabled:opacity-30"
                  >
                    <Icons.SkipForward className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-center mt-0.5 text-xs text-white/70">
                  {audioMode === 'arabic' ? (
                    <span>{currentAyah} / {totalVerses}</span>
                  ) : audioMode === 'translation' ? (
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-cyan-300">{translationAyah} / {totalVerses} {isPlayingTranslation && '(Playing)'}</span>
                      {isPlayingTranslation && translationAudioSource && (
                        <span className={`text-[10px] ${translationAudioSource === 'api' ? 'text-emerald-300' : 'text-amber-300'}`}>
                          {translationAudioSource === 'api' ? (
                            <>🎙 {translationReciterInfo?.name || 'Shamshad Ali Khan'}</>
                          ) : (
                            <>🤖 TTS ({ttsLanguage === 'ur' ? 'Urdu' : ttsLanguage.toUpperCase()})</>
                          )}
                        </span>
                      )}
                      {!isPlayingTranslation && apiAudioSource && (
                        <span className="text-[10px] text-emerald-300/70">
                          🎙 {apiAudioSource.reciter?.name || 'Audio Available'}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className={isPlayingCombined ? 'text-amber-300' : ''}>
                      {currentAyah} / {totalVerses}
                      {isPlayingCombined && (
                        <span className="ml-1">
                          ({combinedPhase === 'arabic' ? '🔊 Arabic' : (
                            translationAudioSource === 'api' ? '🎙 Urdu' : '🤖 TTS'
                          )})
                        </span>
                      )}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treebank Grammar Analysis Overlay */}
      {showTreebank && <Suspense fallback={null}>
        <TreebankOverlay
          surahId={surah?.id}
          ayahNum={treebankAyah}
          isVisible={showTreebank}
          onClose={() => {
            setShowTreebank(false);
            setTreebankAyah(null);
          }}
          isPremium={isPremium}
          onUpgrade={() => {
            setShowTreebank(false);
            setUpgradeFeature('treebank');
            setShowUpgradePrompt(true);
          }}
          translationId={selectedTranslation}
          verseTranslation={treebankAyah ? verses[treebankAyah - 1]?.translation : null}
        />
      </Suspense>}

      {/* Premium Upgrade Prompt Modal */}
      {showUpgradePrompt && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowUpgradePrompt(false);
          }}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 max-w-sm mx-4 border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            style={{ animation: 'bubblePopIn 0.3s ease-out' }}
          >
            {/* Premium Star Icon */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white text-center mb-2">
              {upgradeFeature === 'hd-tts' ? 'HD Voice is Premium' : 'Premium Feature'}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-center text-sm mb-4">
              {upgradeFeature === 'hd-tts'
                ? 'Get crystal-clear HD text-to-speech with natural male voices in Urdu, Arabic, and more.'
                : 'This feature is available for premium members.'}
            </p>

            {/* Free Trial Note */}
            <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl px-4 py-2 mb-4">
              <p className="text-emerald-400 text-xs text-center">
                💡 Try HD TTS free on <strong>Surah Al-Fatiha</strong>!
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              {isAuthenticated ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowUpgradePrompt(false);
                    // Use setTimeout to prevent background interaction
                    setTimeout(() => {
                      window.location.href = '/settings';
                    }, 100);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                >
                  ✨ Upgrade to Premium
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowUpgradePrompt(false);
                    setTimeout(() => login(), 100);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold hover:shadow-lg transition-all"
                >
                  Sign In to Upgrade
                </button>
              )}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowUpgradePrompt(false);
                }}
                className="w-full py-2 text-gray-400 text-sm hover:text-white transition-all"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes breathe { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.05); opacity: 0.9; } }
        @keyframes floatParticle { 0%, 100% { transform: translateY(0) scale(1); opacity: 0.8; } 50% { transform: translateY(-8px) scale(1.2); opacity: 0.5; } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInBubbles { from { opacity: 0; transform: translateY(-50%) translateX(-30px); } to { opacity: 1; transform: translateY(-50%) translateX(0); } }
        @keyframes floatBubble { 0%, 100% { transform: translateY(0); } 25% { transform: translateY(-4px); } 75% { transform: translateY(4px); } }
        @keyframes pulseRing { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }
        @keyframes bubblePopIn { 0% { opacity: 0; transform: scale(0.5); } 100% { opacity: 1; transform: scale(1); } }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.5); }
      `}</style>
    </div>
  );
});

export default BubbleReaderOverlay;
