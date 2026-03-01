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

// Retry wrapper for lazy imports — handles stale chunk hashes after deploys
const lazyWithRetry = (importFn) => lazy(() =>
  importFn().catch(() => {
    const hasReloaded = sessionStorage.getItem('chunk_reload');
    if (!hasReloaded) {
      sessionStorage.setItem('chunk_reload', '1');
      window.location.reload();
    }
    return importFn();
  })
);

// Lazy-loaded feature components (only loaded when user activates them)
const VerseArtGenerator = lazyWithRetry(() => import('./VerseArtGenerator'));
const EmotionalTracker = lazyWithRetry(() => import('./EmotionalTracker'));
const MoodEntryForm = lazyWithRetry(() => import('./EmotionalTracker').then(m => ({ default: m.MoodEntryForm })));
const AyahConnectionMap = lazyWithRetry(() => import('./AyahConnectionMap'));
const ScholarVideoSync = lazyWithRetry(() => import('./ScholarVideoSync'));
const LivingVisualization = lazyWithRetry(() => import('./LivingVisualization'));
const TimeCapsule = lazyWithRetry(() => import('./TimeCapsule'));
const VoiceControl = lazyWithRetry(() => import('./VoiceControl'));
const HeartbeatMeditation = lazyWithRetry(() => import('./HeartbeatMeditation'));
const FamilyCircle = lazyWithRetry(() => import('./FamilyCircle'));
const ReaderDiscussPanel = lazyWithRetry(() => import('../discussions/ReaderDiscussPanel'));
const TreebankOverlay = lazyWithRetry(() => import('./TreebankAnalysis').then(m => ({ default: m.TreebankOverlay })));
const KidsPremiumGate = lazyWithRetry(() => import('../kids/KidsPremiumGate'));
import { hasTreebankData, canAccessTreebank, hasOntologyData } from '../../data/treebank/index';
import { PALETTES, SURAHS, fetchTafseer, getTafseersByLanguage, getDefaultTafseer, TRANSLATION_TO_TAFSEER_LANG, getVideosForSurah, generateSearchQuery, SCHOLARS, SURAH_TOPICS, TAFSEER_SOURCES, markAyahRead } from '../../data';
import { OVERLAY_THEMES, LAYOUT_TO_OVERLAY_THEME, getOverlayTheme, resolveGradient } from '../../data/themes';
import { useQuranAPI, useMultilingualWords, TRANSLATIONS } from '../../hooks/useQuranAPI';
import { speakText, getTranslationAudioSource, getTranslationAudioUrl, getAvailableTranslationAudio, TRANSLATION_RECITERS, RECITERS, getGlobalAyahNumber } from '../../hooks/useAudioPlayer';
import { useLocalStorage, useIsMobile } from '../../hooks';
import { logReadingSession, trackSurahCompletion, trackFeatureUsage } from '../../utils/trackingUtils';
import { shareVerse } from '../../utils/shareUtils';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation, useLocale } from '../../contexts/LocaleContext';
import logger from '../../utils/logger';
import { trackSurahRead, trackFeatureUse, trackAudioPlay, trackTafseerView } from '../../utils/analyticsTracker';
import { getCachedSurah, getDownloadedAudio, getOfflineCachedAudioUrl } from '../../data/offlineStorage';

// 14 Sajdah (Prostration) Ayat — where a Muslim must perform sujood when reading
const SAJDAH_AYAT = {
  7: [206], 13: [15], 16: [50], 17: [109], 19: [58],
  22: [18, 77], 25: [60], 27: [26], 32: [15], 38: [24],
  41: [38], 53: [62], 84: [21], 96: [19],
};
import { useGamification } from '../../hooks/useGamification';

// Audio source URLs for narrators with pre-recorded verse-by-verse audio
// Note: Translations not listed here will use Google Cloud TTS
const NARRATOR_URL_CONFIG = {
  // Urdu - EveryAyah (verse-by-verse files)
  'ur.khan': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps' },
  'ur.farhat': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/translations/urdu_farhat_hashmi' },
  // English
  'en.walk': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps' },
  // French - Islamic Network CDN (global ayah number format)
  'fr.leclerc': { type: 'islamic-network', baseUrl: 'https://cdn.islamic.network/quran/audio/128/fr.leclerc' },
  // Chinese - Islamic Network CDN
  'zh.chinese': { type: 'islamic-network', baseUrl: 'https://cdn.islamic.network/quran/audio/128/zh.chinese' },
  // Russian - Islamic Network CDN
  'ru.kuliev': { type: 'islamic-network', baseUrl: 'https://cdn.islamic.network/quran/audio/128/ru.kuliev-audio' },
  // Persian
  'fa.hedayatfar': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/translations/Fooladvand_Hedayatfar_40Kbps' },
  'fa.kabiri': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/translations/Makarem_Kabiri_16Kbps' },
  // Azerbaijani
  'az.balayev': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/translations/azerbaijani/balayev' },
  // Bosnian
  'bs.korkut': { type: 'everyayah', baseUrl: 'https://everyayah.com/data/translations/besim_korkut_ajet_po_ajet' },
};

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

// Audio CDN (with 64kbps fallback on error - handled in error handler)
const AUDIO_CDN = 'https://cdn.islamic.network/quran/audio/128';

// RECITERS imported from useAudioPlayer.js (20 Arabic reciters)

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
      className="fixed"
      style={{
        zIndex: 99999999,
        ...(isMobile ? mobilePosition : { ...positionWithoutTransform, transform: transform || 'none' }),
        ...sizeStyles[size],
        animation: 'bubblePopIn 0.3s ease-out',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Main bubble */}
      <div
        className="relative w-full h-full rounded-[40px] overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${gradient[0]}ee, ${gradient[1]}dd, ${gradient[2] || gradient[1]}cc)`,
          boxShadow: `0 0 40px ${gradient[0]}40, 0 10px 40px rgba(0,0,0,0.3)`,
        }}
      >
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
  const { t } = useTranslation();
  const { language } = useLocale();
  const [tafseer, setTafseer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedTafseer, setSelectedTafseer] = useState(null);
  const [textZoom, setTextZoom] = useState(1);
  const [selectedAyah, setSelectedAyah] = useState(ayahNumber);
  const [retryCount, setRetryCount] = useState(0);

  // Use translation-based language first, then app locale, then fallback to English
  const tafseerLang = TRANSLATION_TO_TAFSEER_LANG[translationId] || language || 'en';
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
  }, [isVisible, selectedTafseer, surahId, selectedAyah, retryCount]);

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
      title={t('reader.tafseer')}
      icon={Icons.BookOpen}
      gradient={['#8B5CF6', '#6366F1', '#4F46E5']}
      position={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}
      size="xlarge"
    >
      {/* Controls Row - Tafseer Source + Zoom */}
      <div className="mb-3 pb-3 border-b border-white/20">
        {/* Tafseer Source Selector with Icons */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {availableTafseers.map(ts => {
            const TafseerIcon = Icons[ts.icon] || Icons.BookOpen;
            return (
              <button
                key={ts.id}
                onClick={() => setSelectedTafseer(ts.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-medium transition-all ${
                  selectedTafseer === ts.id
                    ? 'text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
                style={{
                  background: selectedTafseer === ts.id ? `linear-gradient(135deg, ${ts.color || '#8B5CF6'}, ${ts.color || '#8B5CF6'}99)` : undefined,
                  boxShadow: selectedTafseer === ts.id ? `0 4px 15px ${ts.color || '#8B5CF6'}40` : undefined,
                }}
              >
                <TafseerIcon className="w-3 h-3" />
                {ts.name}
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
            <p className="text-white/50 text-sm">{t('reader.loadingTafseer')}</p>
          </div>
        ) : tafseer?.error ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Icons.AlertCircle className="w-10 h-10 text-white/40 mb-2" />
            <p className="text-white/50 text-sm mb-3">{tafseer.text}</p>
            <button
              onClick={() => setRetryCount(c => c + 1)}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-white text-xs transition-all"
            >
              {t('common.retry')}
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
          <p className="text-white/40 text-[10px]">{t('reader.source')}: {tafseer.source}</p>
          <p className="text-white/30 text-[10px]">{t('reader.surah')} {surahId}, {t('reader.ayah')} {selectedAyah}</p>
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
  const { t, tInterpolate } = useTranslation();
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
      title={t('reader.quranVideos')}
      icon={Icons.Video}
      gradient={['#EF4444', '#DC2626', '#B91C1C']}
      position={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      size="medium"
    >
      {/* Type Filter */}
      <div className="flex gap-1 mb-3 p-1 bg-white/10 rounded-xl">
        {[
          { id: 'all', label: t('common.all') },
          { id: 'reciter', label: t('reader.reciters') },
          { id: 'scholar', label: t('reader.scholars') },
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
          {t('reader.recitation')}
        </button>
        <button
          onClick={() => openGeneralSearch('tafseer explanation')}
          className="flex-1 py-2 px-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs text-white font-medium transition-all flex items-center justify-center gap-2"
        >
          <Icons.BookOpen className="w-3.5 h-3.5" />
          {t('reader.tafseer')}
        </button>
      </div>

      {/* Scholar/Reciter List */}
      <div className="space-y-2 max-h-[240px] overflow-y-auto">
        <p className="text-white/50 text-[10px] uppercase tracking-wide mb-2">
          {selectedType === 'reciter' ? t('reader.worldRenownedReciters') : selectedType === 'scholar' ? t('reader.islamicScholars') : t('reader.scholarsAndReciters')}
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
                    {scholar.type === 'reciter' ? t('reader.reciter_label') : t('reader.scholar_label')}
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
          {tInterpolate('reader.clickScholarSearch', { surah: surahName })}
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
      size="large"
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

// Discuss Floating Bubble
const DiscussFloatingBubble = memo(function DiscussFloatingBubble({
  isVisible, onClose, surahId, surahName, onNavigateToDiscussions
}) {
  return (
    <FloatingFeatureBubble
      isVisible={isVisible}
      onClose={onClose}
      title="Discuss"
      icon={Icons.MessageCircle}
      gradient={['#06B6D4', '#0891B2', '#0E7490']}
      position={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      size="medium"
    >
      <Suspense fallback={<div className="flex items-center justify-center py-10"><div className="w-5 h-5 border-2 border-white/40 border-t-transparent rounded-full animate-spin" /></div>}>
        <ReaderDiscussPanel
          surahId={surahId}
          surahName={surahName}
          onNavigateToDiscussions={onNavigateToDiscussions}
        />
      </Suspense>
    </FloatingFeatureBubble>
  );
});

// Small Feature Toggle Buttons (shown inside main bubble)
const FeatureToggleButtons = memo(function FeatureToggleButtons({ activeFeature, onToggle }) {
  const { t } = useTranslation();
  const buttons = [
    { id: 'tafseer', icon: Icons.BookOpen, label: t('reader.tafseer'), color: '#8B5CF6' },
    { id: 'youtube', icon: Icons.Video, label: t('reader.videos'), color: '#EF4444' },
    { id: 'memorize', icon: Icons.Brain, label: t('reader.memorize'), color: '#F59E0B' },
    { id: 'bookmark', icon: Icons.Bookmark, label: t('reader.bookmark'), color: '#EC4899' },
    { id: 'share', icon: Icons.Share, label: t('common.share'), color: '#10B981' },
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
            className={`relative px-2.5 py-1.5 rounded-full text-[10px] font-medium transition-all flex items-center gap-1 whitespace-nowrap ${
              isActive ? 'text-white scale-105' : 'text-white/70 hover:text-white hover:scale-105'
            }`}
            style={{
              background: isActive ? `linear-gradient(135deg, ${btn.color}cc, ${btn.color}99)` : 'rgba(255,255,255,0.15)',
              boxShadow: isActive ? `0 4px 15px ${btn.color}50` : 'none',
            }}
          >
            <Icon className="w-3.5 h-3.5 flex-shrink-0" />
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
  const { t } = useTranslation();
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
      <div className="flex-shrink-0 flex items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
            <Icons.BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">{t('reader.tafseer')}</h3>
            <p className="text-white/60 text-xs">{t('reader.ayah')} {ayahNumber}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-all">
          <Icons.X className="w-4 h-4 text-white/70" />
        </button>
      </div>

      <div className="flex-shrink-0 py-3 border-b border-white/10">
        <div className="flex flex-wrap gap-1">
          {availableTafseers.map(ts => (
            <button key={ts.id} onClick={() => setSelectedTafseer(ts.id)}
              className={`px-3 py-1.5 rounded-full text-xs transition-all ${selectedTafseer === ts.id ? 'bg-purple-500/60 text-white font-medium' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}>
              {ts.name}
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
            <p className="text-white/50 text-xs">{t('reader.loadingTafseer')}</p>
          </div>
        ) : tafseer?.error ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Icons.AlertCircle className="w-10 h-10 text-red-400/60 mb-2" />
            <p className="text-white/50 text-center text-sm mb-3">{tafseer.text}</p>
            <button
              onClick={handleRetry}
              className="px-4 py-2 bg-purple-500/40 hover:bg-purple-500/60 rounded-full text-white text-xs font-medium transition-all"
            >
              {t('common.retry')}
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
          <p className="text-white/40 text-[10px]">{t('reader.source')}: {tafseer.source}</p>
        </div>
      )}
    </div>
  );
});

// Memorization Panel
const MemorizePanel = memo(function MemorizePanel({ onSettingsChange, currentSettings, onClose }) {
  const { t } = useTranslation();
  const [hideLevel, setHideLevel] = useState(currentSettings?.hideLevel || 0);
  const [repeatCount, setRepeatCount] = useState(3);

  useEffect(() => {
    onSettingsChange({ hideLevel, repeatCount });
  }, [hideLevel, repeatCount, onSettingsChange]);

  const HIDE_LEVELS = [
    { level: 0, label: t('reader.showAll'), desc: t('reader.allWordsVisible'), bars: 5 },
    { level: 1, label: t('reader.hide25'), desc: t('reader.every4thWordHidden'), bars: 4 },
    { level: 2, label: t('reader.hide50'), desc: t('reader.every2ndWordHidden'), bars: 3 },
    { level: 3, label: t('reader.hide75'), desc: t('reader.mostWordsHidden'), bars: 2 },
    { level: 4, label: t('reader.hideAll'), desc: t('reader.allWordsHidden'), bars: 1 },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0 flex items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
            <Icons.Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">{t('reader.memorize')}</h3>
            <p className="text-white/60 text-xs">{t('reader.hifzMode')}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-all">
          <Icons.X className="w-4 h-4 text-white/70" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-3 space-y-4">
        <div>
          <label className="text-white/80 text-xs font-medium mb-2 block">{t('reader.wordVisibility')}</label>
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
          <label className="text-white/80 text-xs font-medium mb-2 block">{t('reader.repeatEachAyah')}</label>
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
              <p className="text-white font-medium text-sm mb-1">{t('reader.memorizationTip')}</p>
              <p className="text-white/70 text-xs leading-relaxed">
                {t('reader.memorizationTipText')}
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
  const { t, tInterpolate } = useTranslation();
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
      <div className="flex-shrink-0 flex items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
            <Icons.Bookmark className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold">{t('reader.bookmarks')}</h3>
            <p className="text-white/60 text-xs">{bookmarks.length} {t('reader.saved')}</p>
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
            <span className="text-white/80 text-sm">{tInterpolate('reader.ayahBookmarked', { num: ayahNumber })}</span>
          </div>
        ) : showNoteInput ? (
          <div className="space-y-2">
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={t('reader.addNote')}
              className="w-full p-3 bg-white/10 rounded-xl text-white text-sm placeholder-white/40 resize-none" rows={2} />
            <div className="flex gap-2">
              <button onClick={addBookmark} className="flex-1 py-2 bg-pink-500/50 hover:bg-pink-500/70 rounded-xl text-white text-sm font-medium transition-all">{t('common.save')}</button>
              <button onClick={() => setShowNoteInput(false)} className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-white/70 text-sm transition-all">{t('common.cancel')}</button>
            </div>
          </div>
        ) : (
          <button onClick={() => setShowNoteInput(true)}
            className="w-full py-3 bg-gradient-to-r from-pink-500/40 to-rose-500/40 hover:from-pink-500/60 hover:to-rose-500/60 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2">
            <Icons.Plus className="w-4 h-4" /> {t('reader.bookmarkAyah')} {ayahNumber}
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-3 space-y-2">
        {bookmarks.length === 0 ? (
          <div className="text-center py-8">
            <Icons.Bookmark className="w-12 h-12 mx-auto text-white/20 mb-3" />
            <p className="text-white/50 text-sm">{t('reader.noBookmarks')}</p>
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
  const { t } = useTranslation();
  const [category, setCategory] = useState('tafseer');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = getVideosForSurah(surahId, category);
  const allVideos = useMemo(() => {
    const surahVideos = getVideosForSurah(surahId);
    if (!surahVideos) return [];
    return [...(surahVideos.tafseer || []), ...(surahVideos.recitation || []), ...(surahVideos.lecture || [])];
  }, [surahId]);

  const CATEGORIES = [
    { id: 'tafseer', label: t('reader.tafseer'), icon: 'BookOpen' },
    { id: 'recitation', label: t('reader.recitation'), icon: 'Headphones' },
    { id: 'lecture', label: t('reader.lectures'), icon: 'Video' },
  ];

  return (
    <>
      <div className="h-full flex flex-col">
        <div className="flex-shrink-0 flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
              <Icons.Video className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold">{t('reader.videoLectures')}</h3>
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
  const { t, tInterpolate } = useTranslation();
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
    navigator.clipboard.writeText(text).then(() => {
      setShareStatus('copied');
      setTimeout(() => setShareStatus(null), 2000);
    }).catch(() => {
      setShareStatus('error');
      setTimeout(() => setShareStatus(null), 2000);
    });
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
        if (!blob) {
          console.error('Canvas toBlob returned null');
          setDownloadStatus('error');
          setTimeout(() => setDownloadStatus(null), 2000);
          return;
        }
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
      <div className="flex-1 overflow-y-auto space-y-3">
        {/* Preview Card */}
        <div ref={cardRef} className="p-4 rounded-2xl" style={{ background: STYLES.find(s => s.id === selectedStyle)?.bg }}>
          {isMultiple ? (
            <div className="space-y-3">
              {versesToShare.slice(0, 3).map((v) => (
                <div key={v.ayahNumber} className="text-center">
                  <p className="text-white text-lg leading-[2]" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
                    {v.arabic} <span className="text-white/50 text-xs">({v.ayahNumber})</span>
                  </p>
                  <p className="text-white/70 text-xs italic">"{v.translation?.substring(0, 80)}{v.translation?.length > 80 ? '...' : ''}"</p>
                </div>
              ))}
              {versesToShare.length > 3 && (
                <p className="text-white/50 text-xs text-center">...and {versesToShare.length - 3} more</p>
              )}
            </div>
          ) : (
            <>
              <p className="text-white text-xl mb-3 leading-[2] text-center" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
                {verseArabic}
              </p>
              <p className="text-white/80 text-sm italic text-center mb-2">"{verseTranslation}"</p>
            </>
          )}
          <p className="text-white/50 text-xs text-center mt-2">— {surahName} ({surahId}:{ayahRangeStr})</p>
        </div>

        {/* Style swatches — centered */}
        <div className="flex gap-2.5 justify-center items-center">
          {STYLES.map(style => (
            <button key={style.id} onClick={() => setSelectedStyle(style.id)}
              className={`w-7 h-7 flex-shrink-0 rounded-lg transition-all ${selectedStyle === style.id ? 'ring-2 ring-white scale-110' : 'opacity-50 hover:opacity-90'}`}
              style={{ background: style.bg }}
              title={style.name}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <button onClick={onOpenArtGenerator}
            className="w-full py-2.5 bg-gradient-to-r from-amber-500/60 to-orange-500/60 hover:from-amber-500/80 hover:to-orange-500/80 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 text-sm">
            <Icons.Palette className="w-4 h-4" /> {t('share.shareArt')}
          </button>

          <div className="flex gap-2">
            <button onClick={downloadImage} disabled={downloadStatus === 'generating'}
              className="flex-1 py-2 bg-white/15 hover:bg-white/25 rounded-xl text-white/90 font-medium transition-all flex items-center justify-center gap-1.5 text-xs disabled:opacity-50">
              {downloadStatus === 'generating' ? <Icons.Loader className="w-3.5 h-3.5 animate-spin" /> : downloadStatus === 'done' ? <Icons.Check className="w-3.5 h-3.5" /> : <Icons.Download className="w-3.5 h-3.5" />}
              {downloadStatus === 'done' ? t('common.done') : t('common.download')}
            </button>
            <button onClick={copyText}
              className="flex-1 py-2 bg-white/15 hover:bg-white/25 rounded-xl text-white/90 font-medium transition-all flex items-center justify-center gap-1.5 text-xs">
              <Icons.Copy className="w-3.5 h-3.5" /> {t('share.copyText')}
            </button>
          </div>

          <button onClick={handleShare} disabled={shareStatus === 'generating'}
            className="w-full py-2.5 bg-gradient-to-r from-emerald-500/60 to-teal-500/60 hover:from-emerald-500/80 hover:to-teal-500/80 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50">
            {shareStatus === 'generating' ? <Icons.Loader className="w-4 h-4 animate-spin" /> : shareStatus === 'copied' ? <><Icons.Check className="w-4 h-4" /> {t('common.copied')}</> : <><Icons.Share className="w-4 h-4" /> {t('common.share')}</>}
          </button>

          <div className="flex gap-2">
            <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${verseTranslation?.substring(0, 200)}..." — ${surahName} (${surahId}:${ayahNumber})`)}`, '_blank')}
              className="flex-1 py-2 bg-[#1DA1F2]/30 hover:bg-[#1DA1F2]/50 rounded-xl text-white font-medium transition-all text-xs">Twitter</button>
            <button onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`${verseArabic}\n\n"${verseTranslation}"\n\n— ${surahName} (${surahId}:${ayahNumber})`)}`, '_blank')}
              className="flex-1 py-2 bg-[#25D366]/30 hover:bg-[#25D366]/50 rounded-xl text-white font-medium transition-all text-xs">WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
});

// ============================================
// MAIN COMPONENT
// ============================================

const BubbleReaderOverlay = memo(function BubbleReaderOverlay({ surah, onClose, darkMode, onChangeSurah, initialVerse = 1, initialPanel = null, onPanelChange, onNavigateToView, readerStyle = 'default', layoutStyle = 'spiral' }) {
  // i18n
  const { t, tInterpolate, isRTL } = useTranslation();
  // Auth state for premium features
  const { isPremium, isAuthenticated, login } = useAuth();

  // Gamification system
  const gamification = useGamification();
  const gamificationRef = useRef(gamification);
  useEffect(() => { gamificationRef.current = gamification; }, [gamification]);
  const surahRef = useRef(surah);
  const onChangeSurahRef = useRef(onChangeSurah);
  useEffect(() => { surahRef.current = surah; }, [surah]);
  useEffect(() => { onChangeSurahRef.current = onChangeSurah; }, [onChangeSurah]);

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
  const [playAllSurahs, setPlayAllSurahs] = useLocalStorage('reader_play_all', false);
  const [autoScroll, setAutoScroll] = useLocalStorage('reader_autoscroll', true);

  const [shareStatus, setShareStatus] = useState(null);
  const [copyStatus, setCopyStatus] = useState(null); // tracks which ayah+type was just copied e.g. "3-arabic"
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
  const [showSurahPicker, setShowSurahPicker] = useState(false);
  const [surahSearchQuery, setSurahSearchQuery] = useState('');
  const [showReciterPicker, setShowReciterPicker] = useState(false);
  const [reciterSearchQuery, setReciterSearchQuery] = useState('');
  const [showTranslationPicker, setShowTranslationPicker] = useState(false);
  const [translationSearchQuery, setTranslationSearchQuery] = useState('');
  const [showNarratorPicker, setShowNarratorPicker] = useState(false);
  const [showLanguagePicker, setShowLanguagePicker] = useState(false);
  const [languageSearchQuery, setLanguageSearchQuery] = useState('');
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedVerses, setSelectedVerses] = useState([]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAyah, setCurrentAyah] = useState(1);
  const [audioLoading, setAudioLoading] = useState(false);
  const [audioError, setAudioError] = useState(null);
  const [speakingAyah, setSpeakingAyah] = useState(null); // Track which ayah translation is being spoken (TTS)
  const [ttsLoading, setTtsLoading] = useState(false); // Track when TTS audio is being fetched
  const ttsPremiumDismissedRef = useRef(false); // Track if user dismissed premium gate (use browser TTS fallback)
  const [narratorPlayingAyah, setNarratorPlayingAyah] = useState(null); // Track which ayah narrator is playing (human voice)
  const narratorAyahAudioRef = useRef(null); // Ref for per-ayah narrator audio
  const [lafziActiveWord, setLafziActiveWord] = useState(null); // { ayah, wordIdx } - currently highlighted word in Lafzi mode
  const lafziWordTimerRef = useRef(null); // Interval timer for Lafzi word highlighting

  // Translation Audio Playback State
  const [isPlayingTranslation, setIsPlayingTranslation] = useState(false);
  const [translationAyah, setTranslationAyah] = useState(1);
  const [audioMode, setAudioMode] = useState('arabic'); // 'arabic' | 'translation' | 'combined'
  const [isPlayingCombined, setIsPlayingCombined] = useState(false);
  const [combinedPhase, setCombinedPhase] = useState('arabic'); // 'arabic' | 'translation' - which phase of combined playback
  const [translationAudioSource, setTranslationAudioSource] = useState(null); // 'api' | 'tts' | null
  const [translationReciterInfo, setTranslationReciterInfo] = useState(null); // Info about the API audio reciter
  const [audioInfoMessage, setAudioInfoMessage] = useState(null); // Temporary info message about audio availability
  const [selectedTranslationNarrator, setSelectedTranslationNarrator] = useLocalStorage('reader_translation_narrator', null); // User-selected narrator override

  const audioRef = useRef(null);
  const translationAudioRef = useRef(null);
  const isPlayingTranslationRef = useRef(false);
  const isPlayingCombinedRef = useRef(false);
  const isLoadingTranslationRef = useRef(false); // Guard against translation audio effect double-fire
  const isLoadingArabicRef = useRef(false); // Guard against Arabic audio effect double-fire
  const versesRef = useRef([]);

  // Audio prefetch cache for smooth playback
  const audioCacheRef = useRef(new Map()); // Map<cacheKey, {audio: Audio, url: string, estimatedBytes: number}>
  const audioCacheBytesRef = useRef(0); // Track total estimated cache size in bytes
  const prefetchAbortRef = useRef(null); // AbortController for canceling prefetch
  const prefetchingRef = useRef(new Set()); // Currently prefetching URLs

  // Pre-prepared translation audio for combined mode (loads while Arabic is playing)
  // { ayahNum, type: 'api'|'tts', audio?: Audio, blobUrl?: string, ready: boolean }
  const translationPreloadRef = useRef(null);

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

  // Overlay style configuration — computed once, used by both overlayConfig and readerStyleConfig
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

    return config;
  }, [layoutStyle, surah]);

  // Reader style derived from overlayConfig — adds verse-level styling colors
  const readerStyleConfig = useMemo(() => {
    const isDark = overlayConfig?.isDark ?? true;
    const isCalm = overlayConfig?.isCalm ?? true;

    // Extract theme colors from config, with sensible defaults
    const colors = {
      text: overlayConfig?.textColor || (isDark ? 'rgba(255,255,255,0.95)' : '#1e293b'),
      translation: overlayConfig?.translationColor || (isDark ? 'rgba(255,255,255,0.7)' : '#64748b'),
      verseBg: overlayConfig?.verseBg || (isDark ? 'rgba(255,255,255,0.04)' : '#f8fafc'),
      verseBorder: overlayConfig?.verseBorder || (isDark ? 'rgba(255,255,255,0.06)' : '#e2e8f0'),
      activeBg: overlayConfig?.activeBg || (isDark ? 'rgba(20,184,166,0.12)' : '#f0fdf4'),
      activeBorder: overlayConfig?.activeBorder || (isDark ? 'rgba(20,184,166,0.3)' : '#86efac'),
      badgeBg: overlayConfig?.badgeBg || (isDark ? 'rgba(20,184,166,0.2)' : '#ecfdf5'),
      badgeColor: overlayConfig?.badgeColor || (isDark ? '#5eead4' : '#059669'),
    };

    return {
      container: 'flex flex-col gap-3',
      isDark,
      isCalm,
      colors,
      // Base verse card classes (layout only, colors via inline styles)
      verse: 'rounded-2xl p-5 transition-[background,border-color,box-shadow] duration-500 ease-in-out',
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
  }, [overlayConfig]);

  // Log surah open event and track reading start time
  // Use refs for cleanup to avoid stale closure issues
  const readingStartTime = useRef(Date.now());
  const readingAyahRef = useRef(currentAyah); // Separate ref for reading tracking (currentAyahRef is defined later for audio)
  readingAyahRef.current = currentAyah; // Keep ref updated

  useEffect(() => {
    if (surah?.id) {
      logger.surahOpen(surah.id, surah.name);
      logger.memoryWarning('surah open');
      readingStartTime.current = Date.now();
    }
    return () => {
      if (surah?.id) {
        // Use ref to get current ayah value (avoids stale closure)
        const finalAyah = readingAyahRef.current;
        logger.surahClose(surah.id, finalAyah);
        // Track surah reading with duration and completion
        const durationSeconds = Math.round((Date.now() - readingStartTime.current) / 1000);
        const completionPercent = Math.round((finalAyah / (surah.ayahs || 1)) * 100);
        trackSurahRead(surah.id, durationSeconds, completionPercent);
      }
    };
  }, [surah?.id, surah?.ayahs, surah?.name]);

  // Reset visible verse count when surah changes
  useEffect(() => {
    setVisibleVerseCount(INITIAL_VERSE_CHUNK);
    setIsLoadingMoreVerses(false);
  }, [surah?.id]);

  // Progressive loading: IntersectionObserver to load more verses on scroll
  // Use refs to avoid recreating observer on state changes
  const visibleVerseCountRef = useRef(visibleVerseCount);
  const isLoadingRef = useRef(isLoadingMoreVerses);
  visibleVerseCountRef.current = visibleVerseCount;
  isLoadingRef.current = isLoadingMoreVerses;

  useEffect(() => {
    if (!isLargeSurah || !loadMoreTriggerRef.current) return;

    const totalVerseCount = surah?.ayahs || 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Use refs to get current values without adding to deps
        if (entry.isIntersecting && !isLoadingRef.current) {
          if (visibleVerseCountRef.current < totalVerseCount) {
            setIsLoadingMoreVerses(true);
            // Use requestAnimationFrame to batch DOM updates
            requestAnimationFrame(() => {
              setVisibleVerseCount(prev => {
                const newCount = Math.min(prev + VERSE_CHUNK_SIZE, totalVerseCount);
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
  }, [isLargeSurah, surah?.id, surah?.ayahs]); // Removed visibleVerseCount and isLoadingMoreVerses

  // Get language code from translation for TTS
  const ttsLanguage = useMemo(() => {
    if (!selectedTranslation) return 'en';
    return selectedTranslation.split('.')[0] || 'en';
  }, [selectedTranslation]);

  // Get the display label for the current translation's language
  const translationLanguageLabel = useMemo(() => {
    const info = TRANSLATIONS[selectedTranslation];
    if (!info) return null;
    return info.languageNative || info.language || null;
  }, [selectedTranslation]);

  // Build list of available languages with counts for the language picker
  const availableLanguages = useMemo(() => {
    const langMap = {};
    Object.entries(TRANSLATIONS).forEach(([id, info]) => {
      const lang = info.language;
      if (!langMap[lang]) {
        langMap[lang] = {
          code: id.split('.')[0],
          name: lang,
          nameNative: info.languageNative || lang,
          count: 0,
          defaultTranslation: id,
          hasNarrator: false,
        };
      }
      langMap[lang].count++;
    });
    // Check which languages have human narrators
    Object.values(TRANSLATION_RECITERS).forEach(r => {
      if (r.source !== 'tts' && r.language && langMap[r.language]) {
        langMap[r.language].hasNarrator = true;
      }
    });
    return Object.values(langMap).sort((a, b) => {
      // Put current language first, then by count
      if (a.code === ttsLanguage) return -1;
      if (b.code === ttsLanguage) return 1;
      return b.count - a.count;
    });
  }, [ttsLanguage]);

  // Handle language change — auto-select best translation for the language
  const handleLanguageChange = useCallback((langCode) => {
    // Find the best translation for this language
    const langTranslations = Object.entries(TRANSLATIONS).filter(([id]) => id.startsWith(langCode + '.'));
    if (langTranslations.length === 0) return;

    // Prefer the current translation if it matches the language
    if (selectedTranslation.startsWith(langCode + '.')) return;

    // Pick the first translation for this language
    setSelectedTranslation(langTranslations[0][0]);
  }, [selectedTranslation, setSelectedTranslation]);

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
      styleLabel: 'AI Voice',
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

  // NARRATOR_URL_CONFIG is at module level (NARRATOR_URL_CONFIG)

  // Build API audio source from effective narrator
  const apiAudioSource = useMemo(() => {
    if (!effectiveNarrator || !NARRATOR_URL_CONFIG[effectiveNarrator]) {
      return null;
    }
    const config = NARRATOR_URL_CONFIG[effectiveNarrator];
    return {
      audioId: effectiveNarrator,
      type: config.type,
      baseUrl: config.baseUrl,
      reciter: TRANSLATION_RECITERS[effectiveNarrator],
    };
  }, [effectiveNarrator]);

  // Lafzi mode: word-by-word narrator is selected — show inline meanings under each word
  const isLafziMode = useMemo(() => {
    if (!effectiveNarrator || effectiveNarrator === 'tts') return false;
    return TRANSLATION_RECITERS[effectiveNarrator]?.style === 'word-by-word';
  }, [effectiveNarrator]);

  // Lafzi word-by-word highlight sync helpers (MUST be defined before handleNarratorChange)
  const startLafziWordSync = useCallback((targetAyah, audioDuration) => {
    if (lafziWordTimerRef.current) clearInterval(lafziWordTimerRef.current);
    const words = wordsMapRef.current?.[targetAyah];
    if (!words || words.length === 0) return;
    const wordCount = words.length;
    const interval = (audioDuration * 1000) / wordCount;
    let idx = 0;
    setLafziActiveWord({ ayah: targetAyah, wordIdx: 0 });
    lafziWordTimerRef.current = setInterval(() => {
      idx++;
      if (idx < wordCount) {
        setLafziActiveWord({ ayah: targetAyah, wordIdx: idx });
      } else {
        clearInterval(lafziWordTimerRef.current);
        lafziWordTimerRef.current = null;
        setLafziActiveWord(null);
      }
    }, interval);
  }, []);
  const stopLafziWordSync = useCallback(() => {
    if (lafziWordTimerRef.current) { clearInterval(lafziWordTimerRef.current); lafziWordTimerRef.current = null; }
    setLafziActiveWord(null);
  }, []);

  // Handle narrator dropdown change - just update state, effect handles restart
  const handleNarratorChange = useCallback((newNarrator) => {
    // Stop any currently playing audio when switching narrators
    if (narratorAyahAudioRef.current) { narratorAyahAudioRef.current.pause(); narratorAyahAudioRef.current = null; }
    if (translationAudioRef.current) { translationAudioRef.current.pause(); translationAudioRef.current = null; }
    if (ttsAudioRef.current) { ttsAudioRef.current.pause(); ttsAudioRef.current = null; }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setNarratorPlayingAyah(null);
    setSpeakingAyah(null);
    stopLafziWordSync();

    setSelectedTranslationNarrator(newNarrator);
    if (newNarrator && newNarrator !== 'tts') {
      const reciterInfo = TRANSLATION_RECITERS[newNarrator];
      // Auto-switch text translation to match the narrator's translation
      if (reciterInfo?.matchesTranslations?.length > 0) {
        const matchedTranslation = reciterInfo.matchesTranslations[0];
        if (matchedTranslation && matchedTranslation !== selectedTranslation) {
          setSelectedTranslation(matchedTranslation);
        }
      }
      // Auto-enable word-by-word mode for lafzi (word-by-word) narrators
      if (reciterInfo?.style === 'word-by-word') {
        setWordByWordMode(true);
      }
    }
  }, [setSelectedTranslationNarrator, selectedTranslation, setSelectedTranslation, setWordByWordMode, stopLafziWordSync]);

  // Auto-enable word-by-word mode if current narrator is a word-by-word style narrator (e.g. Lafzi)
  useEffect(() => {
    if (effectiveNarrator && effectiveNarrator !== 'tts') {
      const reciterInfo = TRANSLATION_RECITERS[effectiveNarrator];
      if (reciterInfo?.style === 'word-by-word' && !wordByWordMode) {
        setWordByWordMode(true);
      }
    }
  }, [effectiveNarrator]); // eslint-disable-line react-hooks/exhaustive-deps

  // ============ AUDIO PREFETCH SYSTEM ============
  // Prefetch upcoming ayahs for instant playback

  // Clear audio cache
  const clearAudioCache = useCallback(() => {
    // Stop and release cached Audio elements
    audioCacheRef.current.forEach((cached) => {
      if (cached.audio) { cached.audio.src = ''; cached.audio.load(); }
    });
    audioCacheRef.current.clear();
    audioCacheBytesRef.current = 0;
    prefetchingRef.current.clear();
    // Abort any pending prefetches
    if (prefetchAbortRef.current) {
      prefetchAbortRef.current.abort();
      prefetchAbortRef.current = null;
    }
  }, []);

  // Generate cache key for an ayah
  const getAudioCacheKey = useCallback((surahId, ayahNum, reciterId) => {
    return `${surahId}-${ayahNum}-${reciterId}`;
  }, []);

  // Prefetch a single audio file using Audio element preloading (avoids CORS issues with fetch)
  const prefetchAudio = useCallback(async (url, cacheKey, signal) => {
    if (audioCacheRef.current.has(cacheKey) || prefetchingRef.current.has(cacheKey)) {
      return; // Already cached or prefetching
    }

    prefetchingRef.current.add(cacheKey);
    try {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = url;

      // Abort handling
      const onAbort = () => { audio.src = ''; audio.load(); };
      if (signal) signal.addEventListener('abort', onAbort, { once: true });

      // Wait for audio to be buffered enough to play
      await new Promise((resolve, reject) => {
        audio.oncanplaythrough = resolve;
        audio.onerror = () => reject(new Error('Audio load failed'));
        if (signal?.aborted) { reject(new DOMException('Aborted', 'AbortError')); return; }
        setTimeout(resolve, 10000);
      });

      if (signal) signal.removeEventListener('abort', onAbort);
      if (signal?.aborted) return;

      // Estimate size: 128kbps MP3 = 16KB/sec
      const estimatedBytes = Math.round((audio.duration || 10) * 16 * 1024);
      audioCacheRef.current.set(cacheKey, { audio, url, estimatedBytes });
      audioCacheBytesRef.current += estimatedBytes;
    } catch {
      // Ignore prefetch errors (abort, network, etc.)
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
      return;
    }

    // Create new AbortController for this batch
    if (prefetchAbortRef.current) {
      prefetchAbortRef.current.abort();
    }
    prefetchAbortRef.current = new AbortController();
    const signal = prefetchAbortRef.current.signal;

    const total = totalVersesRef.current || surah.ayahs;

    // Limit cache size by estimated bytes to prevent unbounded memory growth
    // 128kbps MP3: ~1MB per minute of audio
    const maxCacheBytes = isMobileSafari ? 10 * 1024 * 1024 : 30 * 1024 * 1024; // 10MB Safari, 30MB desktop
    if (audioCacheBytesRef.current > maxCacheBytes) {
      const entries = Array.from(audioCacheRef.current.entries());
      // Evict oldest entries until under 60% of limit
      const targetBytes = maxCacheBytes * 0.6;
      for (const [key, cached] of entries) {
        if (audioCacheBytesRef.current <= targetBytes) break;
        audioCacheBytesRef.current -= (cached.estimatedBytes || 0);
        if (cached.audio) { cached.audio.src = ''; cached.audio.load(); }
        audioCacheRef.current.delete(key);
      }
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
      if (!isMobileSafari && effectiveNarrator && NARRATOR_URL_CONFIG[effectiveNarrator]) {
        const config = NARRATOR_URL_CONFIG[effectiveNarrator];
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
      // Clone from cached URL for playback (so cached version stays reusable)
      const audio = new Audio(cached.url);
      audio.preload = 'auto';
      return audio;
    }
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
      translationAudioRef.current.pause();
      translationAudioRef.current.src = '';
      translationAudioRef.current = null;
    }
    // Clear the prefetch cache for old translation
    clearAudioCache();
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
    // Check premium access - HD TTS is free for Fatiha, premium for others
    if (!canUseHDTTS) {
      // If user already dismissed premium gate, use browser TTS fallback (free)
      if (ttsPremiumDismissedRef.current) {
        return { useBrowserTTS: true, text, langCode };
      }
      setUpgradeFeature('hd-tts');
      setShowUpgradePrompt(true);
      return { blocked: true }; // Premium required - don't advance ayah
    }

    setTtsLoading(true);
    try {
      // Use server-side proxy - API key is stored securely on server
      // Pass surah ID for server-side premium verification
      const response = await fetch(`/api/tts?text=${encodeURIComponent(text)}&lang=${langCode}&surah=${surah?.id || 0}`);

      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
          const errorData = await response.json();
          // Handle server-side premium check rejection
          if (errorData.code === 'PREMIUM_REQUIRED') {
            setUpgradeFeature('hd-tts');
            setShowUpgradePrompt(true);
            setTtsLoading(false);
            return { blocked: true };
          }
          if (errorData.useBrowserTTS) {
            setTtsLoading(false);
            return null;
          }
        }
        console.error('[TTS] Proxy error:', response.status);
        setTtsLoading(false);
        // Fall back to browser TTS on server error
        if ('speechSynthesis' in window) {
          return { useBrowserTTS: true, text, langCode };
        }
        return null;
      }

      // Response is audio/mpeg - convert to data URL
      const audioBlob = await response.blob();
      if (audioBlob.size < 100) {
        console.error('[TTS] Audio too small, likely error');
        setTtsLoading(false);
        if ('speechSynthesis' in window) {
          return { useBrowserTTS: true, text, langCode };
        }
        return null;
      }

      const audioUrl = URL.createObjectURL(audioBlob);
      setTtsLoading(false);
      return audioUrl;
    } catch (error) {
      console.error('[TTS] Error:', error);
      setTtsLoading(false);
      // Fall back to browser TTS when server fails
      if ('speechSynthesis' in window) {
        return { useBrowserTTS: true, text, langCode };
      }
      return null;
    }
  }, [canUseHDTTS, surah?.id]);

  // Pre-prepare translation audio for combined mode (called when Arabic starts playing)
  const preloadTranslationForCombined = useCallback(async (ayahNum) => {
    if (!isPlayingCombinedRef.current) return;

    const verse = versesRef.current.find(v => v.number === ayahNum);
    if (!verse?.translation) return;

    // Don't preload if already preloaded for this ayah
    if (translationPreloadRef.current?.ayahNum === ayahNum && translationPreloadRef.current?.ready) return;

    // Clear any previous preload
    if (translationPreloadRef.current?.audio) {
      translationPreloadRef.current.audio.pause();
      translationPreloadRef.current.audio.src = '';
    }
    if (translationPreloadRef.current?.blobUrl) {
      URL.revokeObjectURL(translationPreloadRef.current.blobUrl);
    }
    translationPreloadRef.current = { ayahNum, type: null, ready: false };

    // Determine narrator
    const translationSource = getTranslationAudioSource(selectedTranslation);
    const defaultNarrator = translationSource?.audioId || null;
    const narrator = effectiveNarrator === 'tts' ? null : (effectiveNarrator || defaultNarrator);
    const config = narrator ? NARRATOR_URL_CONFIG[narrator] : null;

    // Try API audio first (if narrator available and not timestamp-based)
    if (config && narrator && config.type !== 'timestamp') {
      const apiUrl = getTranslationAudioUrl(surah?.id, ayahNum, narrator);
      if (apiUrl) {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = apiUrl;
        translationPreloadRef.current = { ayahNum, type: 'api', audio, narrator, ready: false };

        audio.oncanplaythrough = () => {
          if (translationPreloadRef.current?.ayahNum === ayahNum) {
            translationPreloadRef.current.ready = true;
          }
        };
        audio.onerror = () => {
          // API failed — fall back to preloading TTS
          translationPreloadRef.current = { ayahNum, type: null, ready: false };
          preloadTTS();
        };
        return;
      }
    }

    // Fall back to TTS preload
    const preloadTTS = async () => {
      if (!isPlayingCombinedRef.current) return;
      if (translationPreloadRef.current?.ayahNum !== ayahNum) return;

      const text = verse.translation;
      const maxLength = 4000;
      const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

      try {
        const result = await playGoogleCloudTTS(truncatedText, ttsLanguage);
        // Only store if still relevant (same ayah, still in combined mode)
        if (!isPlayingCombinedRef.current || translationPreloadRef.current?.ayahNum !== ayahNum) return;

        if (result?.blocked || result?.useBrowserTTS) {
          // Can't preload premium-blocked or browser TTS — will handle at play time
          translationPreloadRef.current = { ayahNum, type: result?.useBrowserTTS ? 'browser-tts' : 'blocked', ready: true, result };
          return;
        }

        if (result && typeof result === 'string') {
          const audio = new Audio(result);
          audio.preload = 'auto';
          translationPreloadRef.current = { ayahNum, type: 'tts', audio, blobUrl: result, ready: true };
        }
      } catch {
        // Ignore preload failures
      }
    };

    await preloadTTS();
  }, [effectiveNarrator, selectedTranslation, surah?.id, ttsLanguage, playGoogleCloudTTS]);

  // Speak translation using Google Cloud TTS API (single verse tap)
  const speakTranslation = useCallback(async (ayahNum, translationText) => {
    if (!translationText || typeof translationText !== 'string') return;

    // If already speaking this ayah, stop it
    if (speakingAyah === ayahNum) {
      if (ttsAudioRef.current) {
        ttsAudioRef.current.pause();
        ttsAudioRef.current = null;
      }
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      setSpeakingAyah(null);
      setTtsLoading(false);
      return;
    }

    // Stop ALL other audio systems to prevent double audio
    if (audioRef.current) { audioRef.current.pause(); }
    if (translationAudioRef.current) { translationAudioRef.current.pause(); translationAudioRef.current = null; }
    if (narratorAyahAudioRef.current) { narratorAyahAudioRef.current.pause(); narratorAyahAudioRef.current = null; }
    if (ttsAudioRef.current) { ttsAudioRef.current.pause(); ttsAudioRef.current = null; }
    setIsPlaying(false);
    setIsPlayingTranslation(false);
    isPlayingTranslationRef.current = false;
    setIsPlayingCombined(false);
    isPlayingCombinedRef.current = false;
    setNarratorPlayingAyah(null);

    setSpeakingAyah(ayahNum);

    // Use Google Cloud TTS API
    const result = await playGoogleCloudTTS(translationText, ttsLanguage);

    // Check if blocked by premium gate
    if (result?.blocked) {
      setSpeakingAyah(null);
      setTtsLoading(false);
      return;
    }

    // Browser TTS fallback (free tier after premium gate dismissed)
    if (result?.useBrowserTTS && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(result.text);
      const langMap = { ur: 'ur-PK', hi: 'hi-IN', en: 'en-US', ar: 'ar-SA', zh: 'zh-CN', ja: 'ja-JP', ko: 'ko-KR', es: 'es-ES', fr: 'fr-FR', de: 'de-DE' };
      utterance.lang = langMap[result.langCode] || result.langCode;
      utterance.rate = 0.9;
      utterance.onend = () => setSpeakingAyah(null);
      utterance.onerror = () => setSpeakingAyah(null);
      window.speechSynthesis.speak(utterance);
      return;
    }

    if (result && typeof result === 'string') {
      const blobUrl = result;
      const audio = new Audio(blobUrl);
      ttsAudioRef.current = audio;

      audio.onended = () => {
        URL.revokeObjectURL(blobUrl);
        setSpeakingAyah(null);
      };
      audio.onerror = () => {
        URL.revokeObjectURL(blobUrl);
        setSpeakingAyah(null);
      };

      audio.play().catch(() => {
        URL.revokeObjectURL(blobUrl);
        setSpeakingAyah(null);
      });
    } else {
      // No audio available (API error)
      setSpeakingAyah(null);
      setAudioInfoMessage(t('reader.ttsUnavailable', 'Translation audio unavailable — check your connection'));
      setTimeout(() => setAudioInfoMessage(null), 4000);
    }
  }, [speakingAyah, ttsLanguage, playGoogleCloudTTS]);

  // Play human narrator translation audio for a single ayah (free for all users)
  const playAyahNarrator = useCallback((ayahNum) => {
    // If already playing this ayah's narrator, stop it
    if (narratorPlayingAyah === ayahNum) {
      if (narratorAyahAudioRef.current) {
        narratorAyahAudioRef.current.pause();
        narratorAyahAudioRef.current = null;
      }
      setNarratorPlayingAyah(null);
      return;
    }

    // Stop ALL other audio systems to prevent double audio
    if (audioRef.current) { audioRef.current.pause(); }
    if (translationAudioRef.current) { translationAudioRef.current.pause(); translationAudioRef.current = null; }
    if (ttsAudioRef.current) { ttsAudioRef.current.pause(); ttsAudioRef.current = null; }
    if (narratorAyahAudioRef.current) { narratorAyahAudioRef.current.pause(); narratorAyahAudioRef.current = null; }
    setIsPlaying(false);
    setIsPlayingTranslation(false);
    isPlayingTranslationRef.current = false;
    setIsPlayingCombined(false);
    isPlayingCombinedRef.current = false;
    setSpeakingAyah(null);

    // Find best human narrator (not TTS)
    const narrator = effectiveNarrator !== 'tts' ? effectiveNarrator : defaultNarratorForTranslation;
    if (!narrator || !NARRATOR_URL_CONFIG[narrator]) {
      // No human narrator available — tell the user which translations have one
      const langNarrators = Object.entries(TRANSLATION_RECITERS)
        .filter(([id, info]) => id.startsWith(ttsLanguage) && info.source !== 'tts')
        .map(([, info]) => info.translationShort || info.translation);
      if (langNarrators.length > 0) {
        setAudioInfoMessage(
          ttsLanguage === 'ur'
            ? `انسانی آواز صرف ${langNarrators.join(' / ')} ترجمے کے لیے دستیاب ہے`
            : `Human narrator only available for: ${langNarrators.join(', ')}`
        );
      } else {
        setAudioInfoMessage(
          ttsLanguage === 'ur'
            ? 'اس زبان کے لیے انسانی آواز دستیاب نہیں — TTS استعمال کریں'
            : `No human narrator available for this language — use TTS instead`
        );
      }
      setTimeout(() => setAudioInfoMessage(null), 4000);
      return;
    }

    // Inner function to play a specific ayah
    const playNarratorForAyah = (targetAyah) => {
      const url = getTranslationAudioUrl(surah?.id, targetAyah, narrator);
      if (!url) { setNarratorPlayingAyah(null); stopLafziWordSync(); return; }

      stopLafziWordSync();
      setNarratorPlayingAyah(targetAyah);
      setCurrentAyah(targetAyah);
      setTranslationAyah(targetAyah);
      const audio = new Audio();
      narratorAyahAudioRef.current = audio;
      // Try offline cache first, then CDN
      getOfflineCachedAudioUrl(url).then(offlineUrl => {
        if (offlineUrl && narratorAyahAudioRef.current === audio) {
          audio.src = offlineUrl;
        } else {
          audio.src = url;
        }
        audio.load();
        audio.play().catch(() => { stopLafziWordSync(); setNarratorPlayingAyah(null); narratorAyahAudioRef.current = null; });
      }).catch(() => {
        audio.src = url;
        audio.load();
        audio.play().catch(() => { stopLafziWordSync(); setNarratorPlayingAyah(null); narratorAyahAudioRef.current = null; });
      });

      // Start word highlighting once we know the duration
      audio.onloadedmetadata = () => {
        if (isLafziMode && audio.duration && isFinite(audio.duration)) {
          startLafziWordSync(targetAyah, audio.duration);
        }
      };

      audio.onended = () => {
        stopLafziWordSync();
        const repeat = repeatModeRef.current;
        const total = totalVersesRef.current;
        if (repeat === 'verse') {
          // Repeat same ayah
          audio.currentTime = 0;
          if (isLafziMode && audio.duration && isFinite(audio.duration)) {
            startLafziWordSync(targetAyah, audio.duration);
          }
          audio.play().catch(() => { setNarratorPlayingAyah(null); narratorAyahAudioRef.current = null; });
        } else if (targetAyah < total) {
          // Advance to next ayah (surah repeat will loop back at the end)
          playNarratorForAyah(targetAyah + 1);
        } else if (repeat === 'surah') {
          // Loop back to first ayah
          playNarratorForAyah(1);
        } else {
          setNarratorPlayingAyah(null);
          narratorAyahAudioRef.current = null;
        }
      };
      audio.onerror = () => { stopLafziWordSync(); setNarratorPlayingAyah(null); narratorAyahAudioRef.current = null; };
    };

    playNarratorForAyah(ayahNum);
  }, [narratorPlayingAyah, effectiveNarrator, defaultNarratorForTranslation, surah?.id, isLafziMode]);

  // Play translation audio using Google Cloud TTS API (continuous playback)
  const playTranslationWithTTS = useCallback(async (ayahNum, translationText, totalAyahs, playbackId) => {
    // Truncate long text to avoid API limits (Google TTS has ~5000 char limit)
    const maxLength = 4000;
    const truncatedText = translationText.length > maxLength
      ? translationText.substring(0, maxLength) + '...'
      : translationText;

    setTranslationAudioSource('tts');
    setTranslationReciterInfo({ name: 'Google TTS', nameNative: 'گوگل ٹی ٹی ایس' });

    const isLast = ayahNum >= totalAyahs;

    try {
      const result = await playGoogleCloudTTS(truncatedText, ttsLanguage);

      // Check if blocked by premium gate - stop playback, don't advance
      if (result?.blocked) {
        setIsPlayingTranslation(false);
        isPlayingTranslationRef.current = false;
        setTtsLoading(false);
        return;
      }

      // Browser TTS fallback (free tier after premium gate dismissed)
      if (result?.useBrowserTTS && 'speechSynthesis' in window) {
        setTranslationAudioSource('browser-tts');
        setTranslationReciterInfo({ name: 'Browser TTS', nameNative: 'براؤزر ٹی ٹی ایس' });

        return new Promise((resolve) => {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(result.text);
          // Map language code to BCP-47
          const langMap = { ur: 'ur-PK', hi: 'hi-IN', en: 'en-US', ar: 'ar-SA', zh: 'zh-CN', ja: 'ja-JP', ko: 'ko-KR', es: 'es-ES', fr: 'fr-FR', de: 'de-DE', pt: 'pt-BR', it: 'it-IT', nl: 'nl-NL', ru: 'ru-RU', tr: 'tr-TR', id: 'id-ID', ms: 'ms-MY', th: 'th-TH', vi: 'vi-VN', fa: 'fa-IR', bn: 'bn-IN', ta: 'ta-IN', te: 'te-IN', ml: 'ml-IN', sw: 'sw-KE', pl: 'pl-PL' };
          utterance.lang = langMap[result.langCode] || result.langCode;
          utterance.rate = 0.9;

          utterance.onend = () => {
            if (!isLast && isPlayingTranslationRef.current) {
              setTranslationAyah(prev => prev + 1);
            } else if (isLast && repeatModeRef.current === 'surah') {
              setTranslationAyah(1); setCurrentAyah(1);
            } else if (isLast && playAllSurahsRef.current) {
              const currentSurahId = surahRef.current?.id;
              if (currentSurahId && currentSurahId < 114) {
                const nextS = SURAHS.find(s => s.id === currentSurahId + 1);
                if (nextS && onChangeSurahRef.current) {
                  setCurrentAyah(1); setTranslationAyah(1);
                  playAllAdvancingRef.current = true; onChangeSurahRef.current(nextS);
                }
              } else { setIsPlayingTranslation(false); isPlayingTranslationRef.current = false; }
            } else {
              setIsPlayingTranslation(false);
              isPlayingTranslationRef.current = false;
              setTranslationAyah(1);
            }
            resolve();
          };

          utterance.onerror = () => {
            if (!isLast && isPlayingTranslationRef.current) {
              setTimeout(() => setTranslationAyah(prev => prev + 1), 300);
            } else {
              setIsPlayingTranslation(false);
              isPlayingTranslationRef.current = false;
            }
            resolve();
          };

          window.speechSynthesis.speak(utterance);
        });
      }

      if (!result || typeof result !== 'string') {
        console.error('[GoogleTTS] Failed to get audio URL, advancing...');
        setAudioInfoMessage(t('reader.ttsUnavailable', 'Translation audio unavailable — check your connection'));
        setTimeout(() => setAudioInfoMessage(null), 4000);
        if (!isLast && isPlayingTranslationRef.current) {
          setTimeout(() => setTranslationAyah(prev => prev + 1), 300);
        } else if (isLast && repeatModeRef.current === 'surah') {
          setTranslationAyah(1); setCurrentAyah(1);
        } else if (isLast && playAllSurahsRef.current) {
          const currentSurahId = surahRef.current?.id;
          if (currentSurahId && currentSurahId < 114) {
            const nextS = SURAHS.find(s => s.id === currentSurahId + 1);
            if (nextS && onChangeSurahRef.current) {
              setCurrentAyah(1); setTranslationAyah(1);
              playAllAdvancingRef.current = true; onChangeSurahRef.current(nextS);
            }
          } else { setIsPlayingTranslation(false); isPlayingTranslationRef.current = false; }
        } else {
          setIsPlayingTranslation(false);
          isPlayingTranslationRef.current = false;
          setTranslationAyah(1);
        }
        return;
      }

      const blobUrl = result;
      const audio = new Audio(blobUrl);
      audio._playbackId = playbackId;
      audio._isTTS = true;
      audio._audioUrl = blobUrl;
      translationAudioRef.current = audio;

      audio.onended = () => {
        URL.revokeObjectURL(blobUrl);
        if (translationAudioRef.current?._playbackId !== playbackId) return;
        if (!isLast && isPlayingTranslationRef.current) {
          setTranslationAyah(prev => prev + 1);
        } else if (isLast && repeatModeRef.current === 'surah') {
          setTranslationAyah(1); setCurrentAyah(1);
        } else if (isLast && playAllSurahsRef.current) {
          const currentSurahId = surahRef.current?.id;
          if (currentSurahId && currentSurahId < 114) {
            const nextS = SURAHS.find(s => s.id === currentSurahId + 1);
            if (nextS && onChangeSurahRef.current) {
              setCurrentAyah(1); setTranslationAyah(1);
              playAllAdvancingRef.current = true; onChangeSurahRef.current(nextS);
            }
          } else { setIsPlayingTranslation(false); isPlayingTranslationRef.current = false; }
        } else {
          setIsPlayingTranslation(false);
          isPlayingTranslationRef.current = false;
          setTranslationAyah(1);
        }
      };

      audio.onerror = (e) => {
        URL.revokeObjectURL(blobUrl);
        if (translationAudioRef.current?._playbackId !== playbackId) return;
        console.error('[GoogleTTS] Audio playback error:', e);
        if (!isLast && isPlayingTranslationRef.current) {
          setTimeout(() => setTranslationAyah(prev => prev + 1), 300);
        } else {
          setIsPlayingTranslation(false);
          isPlayingTranslationRef.current = false;
        }
      };

      await audio.play();
    } catch (error) {
      console.error('[GoogleTTS] Error playing TTS:', error);
      if (!isLast && isPlayingTranslationRef.current) {
        setTimeout(() => setTranslationAyah(prev => prev + 1), 300);
      } else if (isLast && playAllSurahsRef.current) {
        const currentSurahId = surahRef.current?.id;
        if (currentSurahId && currentSurahId < 114) {
          const nextS = SURAHS.find(s => s.id === currentSurahId + 1);
          if (nextS && onChangeSurahRef.current) {
            setCurrentAyah(1); setTranslationAyah(1);
            playAllAdvancingRef.current = true; onChangeSurahRef.current(nextS);
          }
        } else { setIsPlayingTranslation(false); isPlayingTranslationRef.current = false; }
      } else {
        setIsPlayingTranslation(false);
        isPlayingTranslationRef.current = false;
        setTranslationAyah(1);
      }
    }
  }, [ttsLanguage, playGoogleCloudTTS]);

  // Play full surah translation audio (API audio first, TTS fallback)
  const playTranslationAudio = useCallback((ayahNum, translationText, totalAyahs) => {
    // Guard: translation may be object {en, ur} instead of string
    if (!translationText || typeof translationText !== 'string') {
      // No translation available - show info and auto-advance
      setAudioInfoMessage(t('reader.noTranslationAudio', 'No translation text available for this ayah'));
      setTimeout(() => setAudioInfoMessage(null), 3000);
      const isLast = ayahNum >= totalAyahs;
      if (!isLast && isPlayingTranslationRef.current) {
        setTranslationAyah(prev => prev + 1);
      } else if (isLast && playAllSurahsRef.current) {
        const currentSurahId = surahRef.current?.id;
        if (currentSurahId && currentSurahId < 114) {
          const nextS = SURAHS.find(s => s.id === currentSurahId + 1);
          if (nextS && onChangeSurahRef.current) {
            setCurrentAyah(1); setTranslationAyah(1);
            playAllAdvancingRef.current = true; onChangeSurahRef.current(nextS);
          }
        } else { setIsPlayingTranslation(false); isPlayingTranslationRef.current = false; }
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

        // Lafzi word highlighting when metadata is available
        audio.onloadedmetadata = () => {
          if (translationAudioRef.current?._playbackId !== playbackId) return;
          if (isLafziMode && audio.duration && isFinite(audio.duration)) {
            startLafziWordSync(ayahNum, audio.duration);
          }
        };

        audio.onended = () => {
          if (translationAudioRef.current?._playbackId !== playbackId) return;
          stopLafziWordSync();
          if (!isLast && isPlayingTranslationRef.current) {
            setTranslationAyah(prev => prev + 1);
          } else if (isLast && playAllSurahsRef.current) {
            const currentSurahId = surahRef.current?.id;
            if (currentSurahId && currentSurahId < 114) {
              const nextS = SURAHS.find(s => s.id === currentSurahId + 1);
              if (nextS && onChangeSurahRef.current) {
                setCurrentAyah(1); setTranslationAyah(1);
                playAllAdvancingRef.current = true; onChangeSurahRef.current(nextS);
              }
            } else { setIsPlayingTranslation(false); isPlayingTranslationRef.current = false; }
          } else {
            setIsPlayingTranslation(false);
            isPlayingTranslationRef.current = false;
            setTranslationAyah(1);
          }
        };

        audio.onerror = () => {
          if (translationAudioRef.current?._playbackId !== playbackId) return;
          stopLafziWordSync();
          // API audio failed - fall back to TTS
          setAudioInfoMessage(t('reader.switchingToTTS', 'Narrator audio unavailable — switching to TTS'));
          setTimeout(() => setAudioInfoMessage(null), 3000);
          playTranslationWithTTS(ayahNum, translationText, totalAyahs, playbackId);
        };

        // Try offline cache first, then CDN
        const loadAndPlay = (src) => {
          audio.src = src;
          audio.load();
          audio.oncanplaythrough = () => {
            if (translationAudioRef.current?._playbackId !== playbackId) return;
            audio.play().catch((err) => {
              if (err.name === 'AbortError') return;
              stopLafziWordSync();
              playTranslationWithTTS(ayahNum, translationText, totalAyahs, playbackId);
            });
          };
        };
        getOfflineCachedAudioUrl(apiUrl).then(offlineUrl => {
          if (offlineUrl && translationAudioRef.current?._playbackId === playbackId) {
            loadAndPlay(offlineUrl);
          } else {
            loadAndPlay(apiUrl);
          }
        }).catch(() => loadAndPlay(apiUrl));

        return;
      }
    }

    // No API audio available - use TTS directly (show info only once per playback session)
    if (ayahNum === 1 || ayahNum === (surahRef.current?.ayahs || 999)) {
      setAudioInfoMessage(t('reader.usingTTS', 'No narrator audio for this translation — using TTS'));
      setTimeout(() => setAudioInfoMessage(null), 3000);
    }
    playTranslationWithTTS(ayahNum, translationText, totalAyahs, playbackId);
  }, [ttsLanguage, apiAudioSource, surah?.id, playTranslationWithTTS, isLafziMode, startLafziWordSync, stopLafziWordSync]);

  // Scroll to a specific ayah (with progressive loading expansion and retry)
  const scrollToAyah = useCallback((ayahNum) => {
    if (!versesContainerRef.current) return;
    // Expand progressive loading if needed
    if (isLargeSurah && ayahNum > visibleVerseCount) {
      setVisibleVerseCount(Math.min(ayahNum + 10, surah?.ayahs || ayahNum));
    }
    let attempts = 0;
    const tryScroll = () => {
      const el = versesContainerRef.current?.querySelector(`[data-ayah="${ayahNum}"]`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (attempts < 10) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };
    setTimeout(tryScroll, 50);
  }, [isLargeSurah, visibleVerseCount, surah?.ayahs]);

  // Toggle translation playback
  const toggleTranslationPlayback = useCallback(() => {
    if (isPlayingTranslation) {
      // Stop
      if (translationAudioRef.current) {
        translationAudioRef.current.pause();
        translationAudioRef.current = null;
      }
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      setIsPlayingTranslation(false);
      isPlayingTranslationRef.current = false;
      setTtsLoading(false);
      stopLafziWordSync();
    } else {
      // Early premium check — if no API audio available and TTS requires premium, gate immediately
      // Skip if user already dismissed premium gate (browser TTS fallback will be used)
      if (!apiAudioSource && !canUseHDTTS && !ttsPremiumDismissedRef.current) {
        setUpgradeFeature('hd-tts');
        setShowUpgradePrompt(true);
        return;
      }
      // Stop per-ayah audio systems
      if (ttsAudioRef.current) { ttsAudioRef.current.pause(); ttsAudioRef.current = null; }
      if (narratorAyahAudioRef.current) { narratorAyahAudioRef.current.pause(); narratorAyahAudioRef.current = null; }
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      setSpeakingAyah(null);
      setNarratorPlayingAyah(null);
      // Start from current ayah
      setTranslationAyah(currentAyah);
      setIsPlayingTranslation(true);
      isPlayingTranslationRef.current = true;
      // Scroll to the ayah being played
      scrollToAyah(currentAyah);
      // Stop Arabic recitation if playing — pause immediately to prevent overlap
      if (isPlaying) {
        if (audioRef.current) audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isPlayingTranslation, currentAyah, isPlaying, apiAudioSource, canUseHDTTS, scrollToAyah]);

  // Toggle combined playback (Arabic + Translation)
  const toggleCombinedPlayback = useCallback(() => {
    if (isPlayingCombined) {
      // Stop combined playback
      setIsPlayingCombined(false);
      isPlayingCombinedRef.current = false;
      setIsPlaying(false);
      setCombinedPhase('arabic');
      setTtsLoading(false);
      if (translationAudioRef.current) {
        translationAudioRef.current.pause();
        translationAudioRef.current = null;
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    } else {
      // Early premium check — combined mode needs TTS for the translation phase
      // Skip if user already dismissed premium gate (browser TTS fallback will be used)
      if (!apiAudioSource && !canUseHDTTS && !ttsPremiumDismissedRef.current) {
        setUpgradeFeature('hd-tts');
        setShowUpgradePrompt(true);
        return;
      }

      // Start combined playback from current ayah
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
      // Stop per-ayah audio systems
      if (ttsAudioRef.current) { ttsAudioRef.current.pause(); ttsAudioRef.current = null; }
      if (narratorAyahAudioRef.current) { narratorAyahAudioRef.current.pause(); narratorAyahAudioRef.current = null; }
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      setSpeakingAyah(null);
      setNarratorPlayingAyah(null);

      // Now start combined mode - Arabic first
      setIsPlayingCombined(true);
      isPlayingCombinedRef.current = true;
      setCombinedPhase('arabic');
      setIsPlaying(true);
      // Scroll to the ayah being played
      scrollToAyah(currentAyah);
    }
  }, [isPlayingCombined, isPlayingTranslation, currentAyah, apiAudioSource, canUseHDTTS, scrollToAyah]);

  // Stop translation when switching surahs (unless Play All is advancing)
  useEffect(() => {
    if (playAllAdvancingRef.current) {
      // Play All advance — preserve playback states, just reset ayah tracking & stop old audio
      playAllAdvancingRef.current = false;
      setTranslationAyah(1);
      setTranslationAudioSource(null);
      if (translationAudioRef.current) {
        translationAudioRef.current.pause();
        translationAudioRef.current = null;
      }
      // Per-ayah audio from previous surah
      if (narratorAyahAudioRef.current) { narratorAyahAudioRef.current.pause(); narratorAyahAudioRef.current = null; }
      if (ttsAudioRef.current) { ttsAudioRef.current.pause(); ttsAudioRef.current = null; }
      setSpeakingAyah(null);
      setNarratorPlayingAyah(null);
      return;
    }
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
    // Also stop per-ayah audio
    if (narratorAyahAudioRef.current) { narratorAyahAudioRef.current.pause(); narratorAyahAudioRef.current = null; }
    if (ttsAudioRef.current) { ttsAudioRef.current.pause(); ttsAudioRef.current = null; }
    setSpeakingAyah(null);
    setNarratorPlayingAyah(null);
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
  const playAllSurahsRef = useRef(playAllSurahs);
  const playAllAdvancingRef = useRef(false); // Flag to prevent surah change effect from killing playback during Play All

  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);
  useEffect(() => { currentAyahRef.current = currentAyah; }, [currentAyah]);
  useEffect(() => { repeatModeRef.current = repeatMode; }, [repeatMode]);
  useEffect(() => { playAllSurahsRef.current = playAllSurahs; }, [playAllSurahs]);

  const { verses: rawVerses, loading: rawLoading, error } = useQuranAPI(surah?.id, { translationId: selectedTranslation, includeTajweed: tajweedMode, includeWordByWord: false });

  // Smooth surah transition: keep old verses during loading to avoid flash/jerk
  const prevVersesRef = useRef([]);
  const [surahTransitioning, setSurahTransitioning] = useState(false);
  const verses = rawLoading && prevVersesRef.current.length > 0 ? prevVersesRef.current : rawVerses;
  const loading = rawLoading && prevVersesRef.current.length === 0; // Only show spinner on initial load

  useEffect(() => {
    if (!rawLoading && rawVerses.length > 0) {
      prevVersesRef.current = rawVerses;
      setSurahTransitioning(false);
    }
  }, [rawLoading, rawVerses]);
  const { wordsMap, loading: wordsLoading, isFallback: isWordsFallback, userLanguage: wordsUserLang } = useMultilingualWords(wordByWordMode ? surah?.id : null, selectedTranslation);
  const wordsMapRef = useRef(wordsMap);
  useEffect(() => { wordsMapRef.current = wordsMap; }, [wordsMap]);

  const palette = useMemo(() => PALETTES[(surah?.id - 1) % 10], [surah?.id]);

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
      if (isPlayingTranslation && translationAudioRef.current) {
        // Stop current audio
        translationAudioRef.current.pause();
        translationAudioRef.current = null;

        // Get current verse info for restart (use ref to avoid TDZ issues)
        const currentVerses = versesRef.current;
        const verse = currentVerses.find(v => v.number === translationAyah);
        if (verse) {
          // Build new audio source directly from new narrator
          const config = NARRATOR_URL_CONFIG[effectiveNarrator];
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

                audio.play().catch(() => {});
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

    // Guard against double-fire from multiple state changes triggering simultaneously
    if (isLoadingTranslationRef.current) return;
    isLoadingTranslationRef.current = true;

    // Stop Arabic audio when translation starts — use ref to avoid dep on isPlaying
    if (isPlayingRef.current) {
      if (audioRef.current) audioRef.current.pause();
      setIsPlaying(false);
    }

    const verse = verses.find(v => v.number === translationAyah);
    if (!verse) {
      setIsPlayingTranslation(false);
      isPlayingTranslationRef.current = false;
      isLoadingTranslationRef.current = false;
      return;
    }

    // Sync currentAyah with translationAyah so verse gets highlighted and scrolled
    setCurrentAyah(translationAyah);
    scrollToAyah(translationAyah);

    // Pass total verses count so playTranslationAudio can determine if last
    playTranslationAudio(translationAyah, verse.translation, verses.length);

    // Release the guard after a microtask to allow the effect to run again for subsequent changes
    Promise.resolve().then(() => { isLoadingTranslationRef.current = false; });

    // No cleanup here - playTranslationAudio handles stopping previous audio
  }, [isPlayingTranslation, translationAyah, verses, playTranslationAudio, isPlayingCombined]);

  // Cleanup all audio refs on unmount
  useEffect(() => {
    return () => {
      // Revoke blob URLs to prevent memory leaks
      if (translationAudioRef.current) {
        if (translationAudioRef.current._audioUrl?.startsWith('blob:')) URL.revokeObjectURL(translationAudioRef.current._audioUrl);
        translationAudioRef.current.pause(); translationAudioRef.current = null;
      }
      if (ttsAudioRef.current) {
        if (ttsAudioRef.current._audioUrl?.startsWith('blob:')) URL.revokeObjectURL(ttsAudioRef.current._audioUrl);
        ttsAudioRef.current.pause(); ttsAudioRef.current = null;
      }
      if (narratorAyahAudioRef.current) {
        narratorAyahAudioRef.current.pause(); narratorAyahAudioRef.current = null;
      }
      if (wordAudioRef.current) {
        wordAudioRef.current.pause(); wordAudioRef.current = null;
      }
      // Clean up Lafzi word highlight timer
      if (lafziWordTimerRef.current) { clearInterval(lafziWordTimerRef.current); lafziWordTimerRef.current = null; }
      // Cancel browser TTS
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      // Clean up preload
      if (translationPreloadRef.current?.audio) { translationPreloadRef.current.audio.pause(); translationPreloadRef.current.audio.src = ''; }
      if (translationPreloadRef.current?.blobUrl) URL.revokeObjectURL(translationPreloadRef.current.blobUrl);
      translationPreloadRef.current = null;
      // Release cached audio elements
      audioCacheRef.current.forEach((cached) => {
        if (cached.audio) { cached.audio.src = ''; cached.audio.load(); }
      });
      audioCacheRef.current.clear();
      audioCacheBytesRef.current = 0;
    };
  }, []);

  // Memoize surah navigation to prevent recalculation on every render
  const prevSurah = useMemo(() => surah?.id > 1 ? SURAHS.find(s => s.id === surah.id - 1) : null, [surah?.id]);
  const nextSurah = useMemo(() => surah?.id < 114 ? SURAHS.find(s => s.id === surah.id + 1) : null, [surah?.id]);

  // Memoize fontSizeMap with more granular levels
  const FONT_SIZE_KEYS = useMemo(() => ['xs', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], []);
  const fontSizeMap = useMemo(() => ({
    xs: { arabic: '1.1rem', translation: '0.7rem' },
    small: { arabic: '1.4rem', translation: '0.8rem' },
    medium: { arabic: '1.8rem', translation: '0.95rem' },
    large: { arabic: '2.2rem', translation: '1.1rem' },
    xlarge: { arabic: '2.6rem', translation: '1.3rem' },
    xxlarge: { arabic: '3.0rem', translation: '1.5rem' },
  }), []);

  // Font size increase/decrease helpers
  const increaseFontSize = useCallback(() => {
    const idx = FONT_SIZE_KEYS.indexOf(fontSize);
    if (idx < FONT_SIZE_KEYS.length - 1) setFontSize(FONT_SIZE_KEYS[idx + 1]);
  }, [fontSize, FONT_SIZE_KEYS, setFontSize]);
  const decreaseFontSize = useCallback(() => {
    const idx = FONT_SIZE_KEYS.indexOf(fontSize);
    if (idx > 0) setFontSize(FONT_SIZE_KEYS[idx - 1]);
  }, [fontSize, FONT_SIZE_KEYS, setFontSize]);

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
    const verse = versesRef.current.find(v => v.number === ayahNum);

    if (!verse?.translation) {
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
      const oldAudio = translationAudioRef.current;
      translationAudioRef.current = null;
      oldAudio.pause();
      oldAudio.src = '';
    }

    setCombinedPhase('translation');

    const playbackId = Date.now();
    const total = totalVersesRef.current;

    // Helper to advance to next verse after translation ends
    const advanceToNext = () => {
      if (!isPlayingCombinedRef.current) {
        return;
      }
      // Track verse listened via gamification
      const g = gamificationRef.current;
      if (g?.isActive) g.recordAction('listen_verse', { surahId: surah?.id, ayahNum });

      const repeat = repeatModeRef.current;
      if (repeat === 'verse') {
        // Repeat same ayah (Arabic + Translation again)
        setCombinedPhase('arabic');
        // Restart Arabic audio directly without state toggle (avoids UI jerk)
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }
      } else if (ayahNum < total) {
        setCombinedPhase('arabic');
        setCurrentAyah(ayahNum + 1);
      } else if (repeat === 'surah') {
        setCombinedPhase('arabic');
        setCurrentAyah(1);
        setTranslationAyah(1);
      } else if (playAllSurahsRef.current) {
        if (g?.isActive) g.recordAction('listen_surah', { surahId: surah?.id });
        const currentSurahId = surahRef.current?.id;
        if (currentSurahId && currentSurahId < 114) {
          const nextS = SURAHS.find(s => s.id === currentSurahId + 1);
          if (nextS && onChangeSurahRef.current) {
            setCombinedPhase('arabic');
            setCurrentAyah(1); setTranslationAyah(1);
            playAllAdvancingRef.current = true; onChangeSurahRef.current(nextS);
            // isPlayingCombined stays true so playback continues
          }
        } else {
          setIsPlayingCombined(false);
          isPlayingCombinedRef.current = false;
          setIsPlaying(false);
          setCombinedPhase('arabic');
        }
      } else {
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
      const text = verse.translation;
      const maxLength = 4000;
      const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

      setTranslationAudioSource('tts');
      setTranslationReciterInfo({ name: 'Google TTS', nameNative: 'گوگل ٹی ٹی ایس' });

      try {
        const result = await playGoogleCloudTTS(truncatedText, ttsLanguage);

        // User stopped combined mode while TTS was loading — bail out
        if (!isPlayingCombinedRef.current) {
          return;
        }

        // Check if blocked by premium gate - stop playback, don't advance
        if (result?.blocked) {
          setIsPlayingCombined(false);
          isPlayingCombinedRef.current = false;
          setCombinedPhase('arabic');
          setTtsLoading(false);
          return;
        }

        // Browser TTS fallback (free tier after premium gate dismissed)
        if (result?.useBrowserTTS && 'speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(result.text);
          const langMap = { ur: 'ur-PK', hi: 'hi-IN', en: 'en-US', ar: 'ar-SA', zh: 'zh-CN', ja: 'ja-JP', ko: 'ko-KR', es: 'es-ES', fr: 'fr-FR', de: 'de-DE' };
          utterance.lang = langMap[result.langCode] || result.langCode;
          utterance.rate = 0.9;
          utterance.onend = () => advanceToNext();
          utterance.onerror = () => {
            if (isPlayingCombinedRef.current && ayahNum < total) {
              setCombinedPhase('arabic');
              setTimeout(() => setCurrentAyah(ayahNum + 1), 300);
            }
          };
          window.speechSynthesis.speak(utterance);
          return;
        }

        if (!result || typeof result !== 'string') {
          console.error('[Combined-TTS] Google TTS failed to get audio URL');
          if (isPlayingCombinedRef.current && ayahNum < total) {
            setCombinedPhase('arabic');
            setTimeout(() => setCurrentAyah(ayahNum + 1), 300);
          }
          return;
        }

        const ttsAudio = new Audio(result);
        ttsAudio._playbackId = playbackId;
        ttsAudio._audioUrl = result;
        ttsAudio._ayahNum = ayahNum; // Store for debugging
        translationAudioRef.current = ttsAudio;

        ttsAudio.onended = () => {
          // Data URLs don't need revoking
          if (translationAudioRef.current?._playbackId !== playbackId) {
            return;
          }
          advanceToNext();
        };

        ttsAudio.onerror = (e) => {
          console.error('[Combined-TTS] Audio playback error for ayah:', ayahNum, e);
          // Data URLs don't need revoking
          if (isPlayingCombinedRef.current && ayahNum < total) {
            setCombinedPhase('arabic');
            setTimeout(() => setCurrentAyah(ayahNum + 1), 300);
          }
        };

        await ttsAudio.play();
      } catch (error) {
        console.error('[Combined-TTS] Exception caught:', error);
        if (isPlayingCombinedRef.current && ayahNum < total) {
          setCombinedPhase('arabic');
          setTimeout(() => setCurrentAyah(ayahNum + 1), 300);
        }
      }
    };

    // ── Check for pre-prepared translation audio (loaded while Arabic was playing) ──
    const preloaded = translationPreloadRef.current;
    if (preloaded?.ayahNum === ayahNum && preloaded?.ready) {
      translationPreloadRef.current = null; // Consume it

      if (preloaded.type === 'api' && preloaded.audio) {
        const audio = preloaded.audio;
        audio._playbackId = playbackId;
        audio._isAPI = true;
        translationAudioRef.current = audio;
        setTranslationAudioSource('api');
        setTranslationReciterInfo(TRANSLATION_RECITERS[preloaded.narrator] || { name: 'Narrator' });
        audio.onended = () => { if (translationAudioRef.current?._playbackId !== playbackId) return; advanceToNext(); };
        audio.onerror = () => { if (translationAudioRef.current?._playbackId !== playbackId) return; playWithTTS(); };
        audio.play().catch(() => playWithTTS());
        return;
      }

      if (preloaded.type === 'tts' && preloaded.audio) {
        const audio = preloaded.audio;
        audio._playbackId = playbackId;
        audio._isTTS = true;
        translationAudioRef.current = audio;
        setTranslationAudioSource('tts');
        setTranslationReciterInfo({ name: 'Google TTS', nameNative: 'گوگل ٹی ٹی ایس' });
        audio.onended = () => { if (preloaded.blobUrl) URL.revokeObjectURL(preloaded.blobUrl); if (translationAudioRef.current?._playbackId !== playbackId) return; advanceToNext(); };
        audio.onerror = () => { if (preloaded.blobUrl) URL.revokeObjectURL(preloaded.blobUrl); if (isPlayingCombinedRef.current && ayahNum < total) { setCombinedPhase('arabic'); setTimeout(() => setCurrentAyah(ayahNum + 1), 300); } };
        audio.play().catch(() => { if (isPlayingCombinedRef.current && ayahNum < total) { setCombinedPhase('arabic'); setTimeout(() => setCurrentAyah(ayahNum + 1), 300); } });
        return;
      }
      // browser-tts or blocked — fall through to normal flow
    }

    // Check if user explicitly selected TTS
    if (effectiveNarrator === 'tts') {
      playWithTTS();
      return;
    }

    // Try API audio first if available
    // IMPORTANT: Always try to get narrator from translation mapping first for reliability
    const translationSource = getTranslationAudioSource(selectedTranslation);
    const defaultNarrator = translationSource?.audioId || null;

    // Use effectiveNarrator if set, otherwise use default for translation
    let narrator = effectiveNarrator || defaultNarrator;

    const config = narrator ? NARRATOR_URL_CONFIG[narrator] : null;

    if (config && narrator) {
      // For timestamp-based (Kanz ul Iman), use TTS in combined mode
      // (timestamp-based doesn't work well for combined mode - would need complex seeking)
      if (config.type === 'timestamp') {
        playWithTTS();
        return;
      }

      // EveryAyah-style API audio
      const apiUrl = getTranslationAudioUrl(surah?.id, ayahNum, narrator);
      if (apiUrl) {
        // Check cache first for instant playback
        const cachedAudio = getCachedAudio(surah?.id, ayahNum, narrator);
        let audio;

        if (cachedAudio) {
          audio = cachedAudio;
        } else {
          audio = new Audio();
        }

        audio._playbackId = playbackId;
        audio._isAPI = true;
        audio._ayahNum = ayahNum; // Store for debugging
        translationAudioRef.current = audio;

        setTranslationAudioSource('api');
        setTranslationReciterInfo(TRANSLATION_RECITERS[narrator]);

        audio.onended = () => {
          if (translationAudioRef.current?._playbackId !== playbackId) {
            return;
          }
          advanceToNext();
        };

        audio.onerror = () => {
          if (translationAudioRef.current?._playbackId !== playbackId) return;
          playWithTTS();
        };

        // Only load if not already cached
        if (!cachedAudio) {
          audio.src = apiUrl;
          audio.load();

          audio.oncanplaythrough = () => {
            if (translationAudioRef.current?._playbackId !== playbackId) {
              return;
            }
            audio.play().catch((err) => {
              if (err.name === 'AbortError') return;
              playWithTTS();
            });
          };
        } else {
          // Cached audio is already ready, play immediately
          audio.play().catch((err) => {
            if (err.name === 'AbortError') return;
            playWithTTS();
          });
        }

        return;
      } else {
      }
    }

    // No API audio available - use TTS
    playWithTTS();
  }, [ttsLanguage, effectiveNarrator, surah?.id, selectedTranslation]);

  // Ref to hold latest playCombinedTranslation (avoids re-creating audio element when callback changes)
  const playCombinedTranslationRef = useRef(playCombinedTranslation);
  useEffect(() => {
    playCombinedTranslationRef.current = playCombinedTranslation;
  }, [playCombinedTranslation]);

  // Audio retry counter ref
  const audioRetryCountRef = useRef(0);

  // Audio setup - runs once on mount, uses refs for callbacks
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleCanPlay = () => {
      setAudioLoading(false);
      setAudioError(null);
      audioRetryCountRef.current = 0; // Reset retry count on success
    };
    const handleLoadStart = () => { setAudioLoading(true); setAudioError(null); };
    const handleError = (e) => {
      const retryCount = audioRetryCountRef.current;
      const currentSrc = audio.src || '';

      // Try backup CDN on first failure (only if using primary CDN)
      if (retryCount === 0 && currentSrc.includes('/audio/128/')) {
        audioRetryCountRef.current = 1;
        const backupSrc = currentSrc.replace('/audio/128/', '/audio/64/');
        audio.src = backupSrc;
        audio.load();
        return; // Don't show error yet, retry in progress
      }

      // Backup CDN also failed - show error
      logger.audioError(surah?.id, currentAyahRef.current, e?.message || 'Failed to load audio');
      setAudioError('Failed to load audio. Please check your connection.');
      setAudioLoading(false);
      setIsPlaying(false);
      audioRetryCountRef.current = 0; // Reset for next attempt
    };
    const handleEnded = () => {
      const repeat = repeatModeRef.current;
      const current = currentAyahRef.current;
      const total = totalVersesRef.current;
      const mode = audioModeRef.current;

      // Combined mode: play translation after Arabic
      if (mode === 'combined' && isPlayingCombinedRef.current) {
        playCombinedTranslationRef.current(current);
        return;
      }

      // Track verse listened via gamification
      const g = gamificationRef.current;
      if (g?.isActive) g.recordAction('listen_verse', { surahId: surahRef.current?.id, ayahNum: current });

      // Normal mode
      if (repeat === 'verse') { audio.currentTime = 0; audio.play().catch(() => {}); }
      else if (current < total) { setCurrentAyah(prev => prev + 1); }
      else if (repeat === 'surah') { setCurrentAyah(1); }
      else if (playAllSurahsRef.current) {
        // Play All mode: auto-advance to next surah
        if (g?.isActive) g.recordAction('listen_surah', { surahId: surahRef.current?.id });
        const currentSurahId = surahRef.current?.id;
        if (currentSurahId && currentSurahId < 114) {
          const nextS = SURAHS.find(s => s.id === currentSurahId + 1);
          if (nextS && onChangeSurahRef.current) {
            setCurrentAyah(1); setTranslationAyah(1);
            playAllAdvancingRef.current = true; onChangeSurahRef.current(nextS);
            // isPlaying stays true so playback continues on the new surah
          }
        } else {
          setIsPlaying(false); // Last surah (114), stop
        }
      }
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

  // Load audio source when ayah/surah/reciter changes (NOT on play state changes — prevents stutter)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !surah?.id) return;

    // Check memory cache first for instant playback
    const cachedAudio = getCachedAudio(surah.id, currentAyah, selectedReciter);
    const globalAyah = getGlobalAyahNumber(surah.id, currentAyah);
    const url = `${AUDIO_CDN}/${selectedReciter}/${globalAyah}.mp3`;

    audio.pause();

    if (cachedAudio) {
      audio.src = cachedAudio.src;
      audio.load();
    } else {
      // Try offline Cache API before hitting CDN (for downloaded surahs)
      getOfflineCachedAudioUrl(url).then(offlineUrl => {
        if (offlineUrl && audioRef.current) {
          audioRef.current.src = offlineUrl;
          audioRef.current.load();
          if (isPlayingRef.current) audioRef.current.play().catch(() => {});
        }
      });
      // Set CDN URL immediately (will be overridden by offline URL if found)
      audio.src = url;
      audio.load();
    }

    // Always scroll to current ayah during active playback; respect autoScroll when idle
    if ((autoScroll || isPlayingRef.current || isPlayingCombinedRef.current) && versesContainerRef.current) {
      scrollToAyah(currentAyah);
    }
  }, [surah?.id, currentAyah, selectedReciter, autoScroll, getCachedAudio, scrollToAyah]);

  // Prefetch & preload in separate effect — depends on play state but doesn't reload audio
  useEffect(() => {
    if (!surah?.id) return;
    if (isPlayingRef.current || isPlayingCombinedRef.current) {
      prefetchNextAyahs(currentAyah, 3);
    }
    if (isPlayingCombinedRef.current) {
      preloadTranslationForCombined(currentAyah);
    }
  }, [surah?.id, currentAyah, prefetchNextAyahs, preloadTranslationForCombined]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      // Guard against double-fire from multiple state changes triggering simultaneously
      if (isLoadingArabicRef.current) return;
      isLoadingArabicRef.current = true;

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
      const attemptPlay = () => { isLoadingArabicRef.current = false; audio.play().catch(err => { if (err.name !== 'AbortError') { setAudioError('Playback failed'); setIsPlaying(false); } }); };
      if (audio.readyState >= 3) attemptPlay();
      else {
        const handleCanPlay = () => { isLoadingArabicRef.current = false; if (isPlayingRef.current) attemptPlay(); };
        audio.addEventListener('canplaythrough', handleCanPlay, { once: true });
        return () => { isLoadingArabicRef.current = false; audio.removeEventListener('canplaythrough', handleCanPlay); };
      }
    } else { audio.pause(); }
  }, [isPlaying, currentAyah, selectedReciter, isPlayingTranslation]);

  // Central audio stop — stops all audio systems and resets play states
  const stopAllAudio = useCallback(() => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
    // Revoke blob URLs before nulling to prevent memory leaks
    if (translationAudioRef.current) {
      if (translationAudioRef.current._audioUrl?.startsWith('blob:')) URL.revokeObjectURL(translationAudioRef.current._audioUrl);
      translationAudioRef.current.pause(); translationAudioRef.current = null;
    }
    if (ttsAudioRef.current) {
      if (ttsAudioRef.current._audioUrl?.startsWith('blob:')) URL.revokeObjectURL(ttsAudioRef.current._audioUrl);
      ttsAudioRef.current.pause(); ttsAudioRef.current = null;
    }
    if (narratorAyahAudioRef.current) { narratorAyahAudioRef.current.pause(); narratorAyahAudioRef.current = null; }
    // Stop word audio to prevent double audio
    if (wordAudioRef.current) { wordAudioRef.current.pause(); wordAudioRef.current = null; }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    // Clean up translation preload
    if (translationPreloadRef.current?.audio) { translationPreloadRef.current.audio.pause(); translationPreloadRef.current.audio.src = ''; }
    if (translationPreloadRef.current?.blobUrl) URL.revokeObjectURL(translationPreloadRef.current.blobUrl);
    translationPreloadRef.current = null;
    setIsPlaying(false);
    setIsPlayingTranslation(false);
    isPlayingTranslationRef.current = false;
    setIsPlayingCombined(false);
    isPlayingCombinedRef.current = false;
    setCombinedPhase('arabic');
    setSpeakingAyah(null);
    setNarratorPlayingAyah(null);
    setTtsLoading(false);
    setAudioLoading(false);
    setWordAudioPlaying(false);
    // Clear Lafzi word highlighting
    if (lafziWordTimerRef.current) { clearInterval(lafziWordTimerRef.current); lafziWordTimerRef.current = null; }
    setLafziActiveWord(null);
  }, []);

  // Mode-aware play/pause toggle
  const togglePlayPause = useCallback(() => {
    if (audioMode === 'arabic') {
      setIsPlaying(prev => {
        if (!prev) scrollToAyah(currentAyah); // Scroll to current ayah when starting play
        return !prev;
      });
    } else if (audioMode === 'translation') {
      toggleTranslationPlayback();
    } else if (audioMode === 'combined') {
      toggleCombinedPlayback();
    }
  }, [audioMode, toggleTranslationPlayback, toggleCombinedPlayback, scrollToAyah, currentAyah]);

  // Ref to always have latest handleClose (defined below)
  const handleCloseRef = useRef(null);

  // Entrance animation — only on mount
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 50);
    document.body.style.overflow = 'hidden';
    return () => { clearTimeout(timer); document.body.style.overflow = ''; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard handler — uses existing refs to avoid re-triggering animation
  const selectedWordDataRef = useRef(selectedWordData);
  const leftFeatureRef = useRef(leftFeature);
  const showTafseerRef = useRef(showTafseer);
  useEffect(() => { selectedWordDataRef.current = selectedWordData; }, [selectedWordData]);
  useEffect(() => { leftFeatureRef.current = leftFeature; }, [leftFeature]);
  useEffect(() => { showTafseerRef.current = showTafseer; }, [showTafseer]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedWordDataRef.current) setSelectedWordData(null);
        else if (leftFeatureRef.current) setLeftFeature(null);
        else if (showTafseerRef.current) setShowTafseer(false);
        else if (handleCloseRef.current) handleCloseRef.current();
      }
      if (e.key === ' ' && !e.target.matches('input, textarea, select')) { e.preventDefault(); togglePlayPause(); }
      if (e.key === 'ArrowRight' && currentAyahRef.current < totalVersesRef.current) { setCurrentAyah(prev => prev + 1); setTranslationAyah(prev => Math.min(totalVersesRef.current, prev + 1)); }
      if (e.key === 'ArrowLeft' && currentAyahRef.current > 1) { setCurrentAyah(prev => prev - 1); setTranslationAyah(prev => Math.max(1, prev - 1)); }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => { document.removeEventListener('keydown', handleKeyDown); };
  }, [togglePlayPause]);

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
      else if (leftFeature === 'discuss') panel = 'discuss';
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
    stopAllAudio();
    if (audioRef.current) { audioRef.current.src = ''; }

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
  }, [surah, verses.length, onClose, stopAllAudio]);

  // Keep ref updated with latest handleClose
  useEffect(() => {
    handleCloseRef.current = handleClose;
  }, [handleClose]);

  const toggleAyahPlayback = useCallback((ayahNum) => {
    if (currentAyah === ayahNum && (isPlaying || isPlayingCombined || isPlayingTranslation)) {
      stopAllAudio();
    } else {
      stopAllAudio();
      setCurrentAyah(ayahNum);
      setTranslationAyah(ayahNum);
      // Respect current audio mode instead of forcing 'arabic'
      if (audioMode === 'combined') {
        setIsPlayingCombined(true);
        isPlayingCombinedRef.current = true;
        setCombinedPhase('arabic');
        setIsPlaying(true);
      } else if (audioMode === 'translation') {
        setIsPlayingTranslation(true);
        isPlayingTranslationRef.current = true;
      } else {
        setIsPlaying(true);
      }
    }
    // Track progress when user plays a verse
    if (surah?.id) {
      markAyahRead(surah.id, ayahNum);
      if (gamification.isActive) gamification.recordAction('verse_read', { surahId: surah.id, ayahNum });
    }
  }, [currentAyah, isPlaying, isPlayingCombined, isPlayingTranslation, audioMode, surah?.id, stopAllAudio]);

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
    stopAllAudio();
    if (audioRef.current) { audioRef.current.src = ''; }
    setSurahTransitioning(true);
    setCurrentAyah(1); setTranslationAyah(1); setSelectedWordData(null);
    setShowTafseer(false); setLeftFeature(null);
    // Scroll to top before transitioning
    if (versesContainerRef.current) versesContainerRef.current.scrollTop = 0;
    onChangeSurah(newSurah);
  }, [onChangeSurah, stopAllAudio]);

  // State to track which verse to share in the Share dialog
  const [shareVerseData, setShareVerseData] = useState(null);

  const handleShareVerse = useCallback((verse, ayahNum) => {
    // Navigate to the verse so currentVerse/currentAyah are in sync with share
    setCurrentAyah(ayahNum);
    setShareVerseData(null);
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
          if (featureId === 'memorize') setMemorizeSettings({ hideLevel: 0 });
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
  const closeLeftFeature = useCallback(() => {
    setLeftFeature(prev => {
      if (prev === 'memorize') setMemorizeSettings({ hideLevel: 0 });
      return null;
    });
  }, []);
  const closeShareFeature = useCallback(() => { setLeftFeature(null); setShareVerseData(null); }, []);
  const handleAyahChange = useCallback((newAyah) => setCurrentAyah(newAyah), []);

  // Memoize settings toggle handlers
  const toggleSettings = useCallback(() => setShowSettings(prev => !prev), []);
  const toggleWordByWord = useCallback(() => setWordByWordMode(prev => !prev), [setWordByWordMode]);
  const toggleTajweed = useCallback(() => setTajweedMode(prev => !prev), [setTajweedMode]);
  const toggleTranslation = useCallback(() => setShowTranslation(prev => !prev), [setShowTranslation]);
  const cycleRepeatMode = useCallback(() => setRepeatMode(prev => prev === 'none' ? 'verse' : prev === 'verse' ? 'surah' : 'none'), [setRepeatMode]);

  // Copy verse text to clipboard
  const handleCopyVerse = useCallback((ayahNum, text, type) => {
    const label = type === 'arabic' ? '' : ` (${surah?.name} ${surah?.id}:${ayahNum})`;
    const copyText = text + label;
    const onSuccess = () => {
      setCopyStatus(`${ayahNum}-${type}`);
      setTimeout(() => setCopyStatus(null), 1500);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(copyText).then(onSuccess).catch(() => {
        // Fallback for insecure contexts
        try {
          const ta = document.createElement('textarea');
          ta.value = copyText;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          onSuccess();
        } catch { /* silent */ }
      });
    }
  }, [surah?.id, surah?.name]);

  // Memoize stopPropagation handler
  const stopPropagation = useCallback((e) => e.stopPropagation(), []);

  // Memoize navigation handlers
  const goToPrevAyah = useCallback(() => { setCurrentAyah(prev => prev > 1 ? prev - 1 : prev); setTranslationAyah(prev => prev > 1 ? prev - 1 : prev); }, []);
  const goToNextAyah = useCallback(() => { setCurrentAyah(prev => prev < totalVerses ? prev + 1 : prev); setTranslationAyah(prev => prev < totalVerses ? prev + 1 : prev); }, [totalVerses]);
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
        ayahNumber={shareVerseData?.multiple ? shareVerseData.verses[0]?.ayahNumber : currentAyah}
        verseArabic={shareVerseData?.multiple ? shareVerseData.verses[0]?.arabic : currentVerse?.arabic}
        verseTranslation={shareVerseData?.multiple ? shareVerseData.verses[0]?.translation : currentVerse?.translation}
        multipleVerses={shareVerseData?.multiple ? shareVerseData.verses : null}
        onOpenArtGenerator={() => { closeShareFeature(); setShowArtGenerator(true); }}
        onShareSuccess={() => { if (gamification.isActive) gamification.recordAction('share'); }}
      />

      <DiscussFloatingBubble
        isVisible={leftFeature === 'discuss'}
        onClose={closeLeftFeature}
        surahId={surah.id}
        surahName={surah.name}
        onNavigateToDiscussions={() => {
          onClose();
          onNavigateToView?.('discussions');
        }}
      />

      {/* Lazy-loaded feature overlays */}
      <Suspense fallback={null}>
      {/* Verse Art Generator */}
      {showArtGenerator && <VerseArtGenerator
        isVisible={showArtGenerator}
        onClose={() => setShowArtGenerator(false)}
        verseArabic={currentVerse?.arabic}
        verseTranslation={currentVerse?.translation}
        surahName={surah.name}
        surahId={surah.id}
        ayahNumber={currentAyah}
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
        className={`fixed left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 ${isAnimating ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}`}
        style={{ top: 'max(1rem, env(safe-area-inset-top, 1rem))' }}
        onClick={stopPropagation}
      >
        <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 max-w-[98vw]">
          {[
            // Core reading features only
            { id: 'tafseer', icon: Icons.BookOpen, color: '#8B5CF6', label: t('reader.tafseer') },
            { id: 'youtube', icon: Icons.Video, color: '#EF4444', label: t('reader.videos') },
            { id: 'memorize', icon: Icons.Brain, color: '#F59E0B', label: t('reader.memorize') },
            { id: 'bookmark', icon: Icons.Bookmark, color: '#EC4899', label: t('reader.bookmark') },
            { id: 'share', icon: Icons.Share, color: '#10B981', label: t('common.share') },
            { id: 'discuss', icon: Icons.MessageCircle, color: '#06B6D4', label: 'Discuss' },
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
                className={`flex flex-col items-center gap-0.5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-2xl transition-all hover:scale-105 min-w-0 ${isActive ? 'scale-105' : ''}`}
                style={{
                  background: isActive ? `linear-gradient(135deg, ${btn.color}, ${btn.color}cc)` : `rgba(255,255,255,0.1)`,
                  boxShadow: isActive ? `0 0 20px ${btn.color}60` : 'none',
                }}
                title={btn.label}
              >
                <Icon className="w-5 h-5 text-white" />
                <span className="text-white text-[10px] font-medium whitespace-nowrap">{btn.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Left Info Bubble - Expands in place to show Surah Details */}
      <div
        className={`fixed left-4 sm:left-6 bottom-24 sm:bottom-28 z-[55] transition-all duration-500 ${isAnimating ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
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
              <div className="text-[7px] sm:text-[8px] opacity-70">{surah.ayahs} {t('reader.ayahs')}</div>
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
                  <span className="px-1.5 py-0.5 rounded-full bg-white/20">{surah.ayahs} {t('reader.ayahs')}</span>
                </div>
              </div>

              {/* Topics/Themes */}
              {surahTopics.themes && surahTopics.themes.length > 0 && (
                <div className="p-2 border-b border-white/10">
                  <h4 className="text-[9px] font-semibold text-white/60 mb-1.5 uppercase tracking-wide">{t('reader.themes')}</h4>
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
                  <h4 className="text-[9px] font-semibold text-white/60 mb-1.5 uppercase tracking-wide">{t('reader.keyVerses')}</h4>
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
          className={`absolute left-0 sm:left-4 md:left-24 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
            style={{ background: `linear-gradient(135deg, ${PALETTES[(prevSurah.id - 1) % 10].colors[0]}90, ${PALETTES[(prevSurah.id - 1) % 10].colors[1]}90)`, boxShadow: `0 4px 20px ${PALETTES[(prevSurah.id - 1) % 10].colors[0]}50` }}>
            <Icons.ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </button>
      )}

      {nextSurah && onChangeSurah && (
        <button onClick={handleGoNextSurah}
          className={`absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
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
            {/* Surah number badge - clickable to open surah picker */}
            <button
              onClick={(e) => { e.stopPropagation(); setShowSurahPicker(true); setSurahSearchQuery(''); }}
              className={`w-10 h-10 flex items-center justify-center text-sm font-bold cursor-pointer hover:scale-110 transition-all duration-200 ${overlayConfig.shape === 'circle' ? 'rounded-full' : 'rounded-xl'}`}
              style={{
                background: !overlayConfig.isDark ? 'rgba(139, 90, 43, 0.25)' : (overlayConfig.isCalm ? 'rgba(20, 184, 166, 0.25)' : 'rgba(255,255,255,0.25)'),
                backdropFilter: 'blur(10px)',
                color: !overlayConfig.isDark ? '#5D4037' : 'white',
                border: overlayConfig.isCalm ? '1px solid rgba(20, 184, 166, 0.3)' : 'none'
              }}
              title={`${surah.name} - Tap to switch surah`}
            >
              {surah.id}
            </button>

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
                      Word meanings shown in <strong>English</strong> — {translationLanguageLabel || wordsUserLang} not available for this surah
                    </span>
                  </div>
                )}

                {showSettings && (
                  <div className="mt-1 sm:mt-2 p-1.5 sm:p-2 bg-black/20 backdrop-blur-sm rounded-xl mx-2 sm:mx-4 flex-shrink-0" style={{ animation: 'slideDown 0.2s ease-out' }}>
                    {/* Row 1: Font size + Translation + Reciter */}
                    <div className="flex items-center justify-center gap-1 sm:gap-1.5 mb-1">
                      <button onClick={decreaseFontSize} disabled={FONT_SIZE_KEYS.indexOf(fontSize) <= 0}
                        className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/40 active:scale-95 text-white font-bold text-sm leading-none disabled:opacity-30">−</button>
                      <span className="text-[9px] w-10 text-center text-white/80">{fontSize}</span>
                      <button onClick={increaseFontSize} disabled={FONT_SIZE_KEYS.indexOf(fontSize) >= FONT_SIZE_KEYS.length - 1}
                        className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/40 active:scale-95 text-white font-bold text-sm leading-none disabled:opacity-30">+</button>
                      <button
                        onClick={() => { setShowLanguagePicker(true); setLanguageSearchQuery(''); }}
                        className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/30 text-white cursor-pointer hover:bg-emerald-500/40 transition-all flex items-center gap-1"
                      >
                        <Icons.Globe className="w-2.5 h-2.5 text-emerald-300 shrink-0" />
                        <span className="truncate">{translationLanguageLabel || 'Language'}</span>
                      </button>
                      <button
                        onClick={() => { setShowTranslationPicker(true); setTranslationSearchQuery(''); }}
                        className="px-2 py-0.5 rounded-full text-[10px] bg-white/20 text-white cursor-pointer max-w-[100px] truncate hover:bg-white/30 transition-all flex items-center gap-1"
                      >
                        <Icons.BookOpen className="w-2.5 h-2.5 text-cyan-300 shrink-0" />
                        <span className="truncate">{TRANSLATIONS[selectedTranslation]?.nameEn || TRANSLATIONS[selectedTranslation]?.name || selectedTranslation.split('.')[1]}</span>
                      </button>
                      <button
                        onClick={() => { setShowReciterPicker(true); setReciterSearchQuery(''); }}
                        className="px-2 py-0.5 rounded-full text-[10px] bg-white/20 text-white cursor-pointer max-w-[100px] truncate hover:bg-white/30 transition-all flex items-center gap-1"
                      >
                        <Icons.Mic className="w-2.5 h-2.5 text-amber-300 shrink-0" />
                        <span className="truncate">{RECITERS[selectedReciter]?.name?.split(' ').slice(-1)[0] || 'Reciter'}</span>
                      </button>
                    </div>
                    {/* Row 2: Trans + Repeat + Play All */}
                    <div className="flex items-center justify-center gap-1.5">
                      <button onClick={toggleTranslation} className={`px-2 py-0.5 rounded-full text-[10px] ${showTranslation ? 'bg-white/30' : 'bg-white/15'}`}>Trans</button>
                      <button onClick={cycleRepeatMode} className={`px-2 py-0.5 rounded-full text-[10px] ${repeatMode !== 'none' ? 'bg-purple-500/60' : 'bg-white/15'}`}>
                        {repeatMode === 'none' ? '↻' : repeatMode === 'verse' ? '1x' : '∞'}
                      </button>
                      <button onClick={() => setPlayAllSurahs(prev => !prev)} className={`px-2 py-0.5 rounded-full text-[10px] flex items-center gap-1 ${playAllSurahs ? 'bg-emerald-500/60 text-white' : 'bg-white/15 text-white/70'}`}>
                        <Icons.Play className="w-2.5 h-2.5" /> {playAllSurahs ? 'All ✓' : 'All'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div ref={versesContainerRef} className="flex-1 overflow-y-auto px-5 sm:px-6"
                style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 1.5%, black 98.5%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 1.5%, black 98.5%, transparent 100%)' }}>
                {loading ? (
                  <div className="flex flex-col items-center justify-center h-32 gap-2 animate-[fadeIn_0.3s_ease-out]">
                    <Icons.Loader className="w-10 h-10 animate-spin text-white/60" />
                    <p className="text-xs text-white/70">Loading...</p>
                  </div>
                ) : error ? (
                  <div className="text-center py-8">
                    <Icons.AlertCircle className="w-10 h-10 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">{error}</p>
                  </div>
                ) : (
                  <div className="relative">
                  {/* Subtle loading overlay during surah transition */}
                  {surahTransitioning && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                      <Icons.Loader className="w-8 h-8 animate-spin text-white/40" />
                    </div>
                  )}
                  <div className={`py-2 ${readerStyleConfig.container} transition-opacity duration-300 ease-out ${surahTransitioning ? 'opacity-20' : 'opacity-100'}`}>
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

                          {/* Lafzi mode: inline word-by-word with meanings under each word */}
                          {isLafziMode && wordByWordMode && wordMeanings.length > 0 ? (
                            <>
                              <div className="flex flex-wrap justify-center gap-2 mb-2" dir="rtl">
                                {wordMeanings.map((wordData, wordIdx) => {
                                  const isNarrating = lafziActiveWord?.ayah === ayahNum && lafziActiveWord?.wordIdx === wordIdx;
                                  const isClicked = selectedWordData?.key === `${ayahNum}-${wordIdx}`;
                                  return (
                                    <div key={`${ayahNum}-lafzi-${wordIdx}`}
                                      className={`flex flex-col items-center px-2 py-1.5 rounded-xl cursor-pointer transition-all ${
                                        isNarrating
                                          ? 'scale-[1.18] z-10'
                                          : isClicked
                                            ? 'bg-yellow-400/30 ring-1 ring-yellow-300/50'
                                            : 'hover:bg-white/15'
                                      }`}
                                      style={isNarrating ? {
                                        background: 'radial-gradient(ellipse at center, rgba(251,191,36,0.35) 0%, rgba(251,191,36,0.12) 60%, transparent 100%)',
                                        boxShadow: '0 0 20px 6px rgba(251,191,36,0.3), 0 0 40px 12px rgba(251,191,36,0.1)',
                                        borderRadius: '12px',
                                        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                      } : { transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)' }}
                                      onClick={() => setSelectedWordData({ key: `${ayahNum}-${wordIdx}`, word: wordData.arabic, meaning: wordData.meaning, transliteration: wordData.transliteration, audioUrl: wordData.audioUrl || null, isLoading: false })}
                                    >
                                      <span style={{
                                        fontFamily: "'Scheherazade New', serif",
                                        fontSize: isNarrating ? `calc(${fontSizeMap[fontSize].arabic} * 1.1)` : fontSizeMap[fontSize].arabic,
                                        color: isNarrating ? '#fbbf24' : verseColors.text,
                                        textShadow: isNarrating ? '0 0 12px rgba(251,191,36,0.6), 0 2px 8px rgba(0,0,0,0.3)' : (readerStyleConfig.isDark ? '0 1px 6px rgba(0,0,0,0.3)' : 'none'),
                                        transition: 'all 0.25s',
                                      }} lang="ar">
                                        {wordData.arabic}
                                      </span>
                                      <span className="font-urdu leading-tight mt-0.5" style={{
                                        fontSize: `calc(${fontSizeMap[fontSize].translation} * 0.85)`,
                                        color: isNarrating ? '#fcd34d' : verseColors.translation,
                                        opacity: isNarrating ? 1 : 0.9,
                                        textShadow: isNarrating ? '0 0 8px rgba(252,211,77,0.4)' : 'none',
                                        transition: 'all 0.25s',
                                      }} dir="rtl">
                                        {wordData.meaning}
                                      </span>
                                      {wordData.transliteration && (
                                        <span className="text-[10px] leading-tight mt-0.5" style={{ color: verseColors.translation, opacity: isNarrating ? 0.8 : 0.5 }}>
                                          {wordData.transliteration}
                                        </span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                              {/* Inline badge - after Arabic text */}
                              {readerStyleConfig.badgePosition === 'inline' && (
                                <span className={readerStyleConfig.ayahBadge} style={{ background: verseColors.badgeBg, color: verseColors.badgeColor, border: `1px solid ${verseColors.activeBorder}` }}>{ayahNum}</span>
                              )}
                            </>
                          ) : (
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
                          )}

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

                          {/* In Lafzi mode, sentence translation is replaced by inline word meanings above */}
                          {showTranslation && verse.translation && !(isLafziMode && wordByWordMode && wordMeanings.length > 0) && (
                            <p className={`leading-relaxed mb-2 ${['ur.','fa.','ps.','sd.'].some(p => selectedTranslation.startsWith(p)) ? 'font-urdu' : ''}`}
                              dir={['ur.','ar.','fa.','ps.','ku.','sd.','he.','ug.','dv.'].some(p => selectedTranslation.startsWith(p)) ? 'rtl' : 'ltr'}
                              style={{ fontSize: fontSizeMap[fontSize].translation, color: verseColors.translation }}>{verse.translation}</p>
                          )}

                          {selectedWordData?.key?.startsWith(`${ayahNum}-`) && (
                            <div className="mt-2 p-3 rounded-xl" style={{ animation: 'slideDown 0.2s ease-out', background: readerStyleConfig.isDark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)' }}>
                              <div className="flex items-start gap-3">
                                {/* Play Word Audio Button - Free for Surah 1, Premium for others */}
                                {(() => {
                                  const canPlayWordAudio = isPremium || surah?.id === 1;
                                  return (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (!canPlayWordAudio) {
                                          setUpgradeFeature('word-audio');
                                          setShowUpgradePrompt(true);
                                          return;
                                        }
                                        if (!selectedWordData.audioUrl) return;

                                        // Stop all other audio to prevent double playback
                                        if (audioRef.current) audioRef.current.pause();
                                        if (translationAudioRef.current) { translationAudioRef.current.pause(); translationAudioRef.current = null; }
                                        if (ttsAudioRef.current) { ttsAudioRef.current.pause(); ttsAudioRef.current = null; }
                                        if (narratorAyahAudioRef.current) { narratorAyahAudioRef.current.pause(); narratorAyahAudioRef.current = null; }
                                        if (window.speechSynthesis) window.speechSynthesis.cancel();
                                        if (wordAudioRef.current) {
                                          wordAudioRef.current.pause();
                                          wordAudioRef.current.src = '';
                                          wordAudioRef.current = null;
                                        }
                                        setIsPlaying(false);
                                        setIsPlayingTranslation(false); isPlayingTranslationRef.current = false;
                                        setIsPlayingCombined(false); isPlayingCombinedRef.current = false;
                                        setSpeakingAyah(null); setNarratorPlayingAyah(null);

                                        setWordAudioError(null);
                                        setWordAudioPlaying(true);
                                        const audio = new Audio(selectedWordData.audioUrl);
                                        wordAudioRef.current = audio;

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
                                      disabled={(!selectedWordData.audioUrl && canPlayWordAudio) || wordAudioPlaying}
                                      className={`p-2 rounded-full transition-all relative ${
                                        wordAudioPlaying
                                          ? 'bg-emerald-500 animate-pulse cursor-wait'
                                          : !canPlayWordAudio
                                            ? 'bg-amber-500/30 hover:bg-amber-500/50 cursor-pointer'
                                            : selectedWordData.audioUrl
                                              ? 'bg-emerald-500/80 hover:bg-emerald-500 hover:scale-110 cursor-pointer'
                                              : 'bg-gray-500/30 cursor-not-allowed opacity-50'
                                      }`}
                                      aria-label={!canPlayWordAudio ? "Premium: Word pronunciation" : selectedWordData.audioUrl ? "Play word audio" : "Audio not available"}
                                      title={!canPlayWordAudio ? "Premium feature — Free for Surah Al-Fatiha" : selectedWordData.audioUrl ? "Play pronunciation" : "Audio not available for this word"}
                                    >
                                      {wordAudioPlaying ? (
                                        <Icons.Loader className="w-4 h-4 text-white animate-spin" />
                                      ) : !canPlayWordAudio ? (
                                        <Icons.Lock className="w-4 h-4 text-amber-400" />
                                      ) : selectedWordData.audioUrl ? (
                                        <Icons.Play className="w-4 h-4 text-white" />
                                      ) : (
                                        <Icons.Volume className="w-4 h-4 text-white/50" />
                                      )}
                                    </button>
                                  );
                                })()}
                                <div className="text-2xl" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">{selectedWordData.word}</div>
                                <div className="flex-1 text-left">
                                  {selectedWordData.transliteration && <p className="text-white/60 text-xs italic">{selectedWordData.transliteration}</p>}
                                  <p className="text-white text-sm">{selectedWordData.meaning || 'Loading...'}</p>
                                  {!isPremium && surah?.id !== 1 && selectedWordData.audioUrl && (
                                    <p className="text-amber-400/60 text-[10px] mt-1">Premium — Free for Al-Fatiha</p>
                                  )}
                                  {(isPremium || surah?.id === 1) && !selectedWordData.audioUrl && (
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
                            {(() => {
                              const isArabicPlaying = isCurrentAyah && isPlaying;
                              const isTranslationActive = isCurrentAyah && (isPlayingTranslation || isPlayingCombined);
                              const isAnyActive = isArabicPlaying || isTranslationActive;
                              return (
                            <button onClick={() => toggleAyahPlayback(ayahNum)} className={`p-1.5 rounded-full transition-all hover:scale-110 ${isArabicPlaying ? 'bg-white/40' : isTranslationActive ? 'bg-cyan-500/30' : 'bg-white/15'}`} title="Play Arabic recitation">
                              {(audioLoading || ttsLoading) && isCurrentAyah ? <Icons.Loader className="w-3 h-3 animate-spin" /> : isArabicPlaying ? <Icons.Pause className="w-3 h-3" /> : isTranslationActive ? <Icons.Volume className="w-3 h-3 text-cyan-300" /> : <Icons.Play className="w-3 h-3" />}
                            </button>
                              );
                            })()}
                            {/* Per-ayah human narrator button (free) */}
                            {showTranslation && verse.translation && hasMatchingAudio && (() => {
                              const isNarratorActive = narratorPlayingAyah === ayahNum;
                              return (
                              <button
                                onClick={() => playAyahNarrator(ayahNum)}
                                className={`p-1.5 rounded-full transition-all hover:scale-110 ${isNarratorActive ? 'bg-emerald-500/80 animate-pulse' : 'bg-white/15'}`}
                                title="Listen translation (narrator)"
                              >
                                {isNarratorActive ? <Icons.Volume className="w-3 h-3 text-emerald-200" /> : <Icons.Mic className="w-3 h-3 text-emerald-300" />}
                              </button>
                              );
                            })()}
                            {/* Per-ayah TTS button (premium) — highlights for single-tap TTS AND continuous translation mode */}
                            {showTranslation && verse.translation && (() => {
                              const isSingleTTS = speakingAyah === ayahNum;
                              const isContinuousTranslation = (isPlayingTranslation || isPlayingCombined) && translationAyah === ayahNum;
                              const isActive = isSingleTTS || isContinuousTranslation;
                              const isLoading = isActive && ttsLoading;
                              return (
                              <button
                                onClick={() => isContinuousTranslation ? (isPlayingTranslation ? toggleTranslationPlayback() : toggleCombinedPlayback()) : speakTranslation(ayahNum, verse.translation)}
                                className={`p-1.5 rounded-full transition-all hover:scale-110 relative ${isActive ? 'bg-cyan-500/80 animate-pulse' : 'bg-white/15'}`}
                                title={canUseHDTTS ? 'Read translation aloud (TTS)' : 'Premium: Read translation aloud (TTS)'}
                              >
                                {isLoading ? <Icons.Loader className="w-3 h-3 animate-spin" /> : isActive ? <Icons.Volume className="w-3 h-3" /> : <Icons.Headphones className="w-3 h-3" />}
                                {!canUseHDTTS && surah?.id !== 1 && (
                                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-500 rounded-full flex items-center justify-center">
                                    <Icons.Lock className="w-1.5 h-1.5 text-white" />
                                  </span>
                                )}
                              </button>
                              );
                            })()}
                            <button onClick={() => handleShareVerse(verse, ayahNum)} className={`p-1.5 rounded-full transition-all hover:scale-110 ${shareStatus === ayahNum ? 'bg-emerald-500/80' : 'bg-white/15'}`} title="Share verse">
                              {shareStatus === ayahNum ? <Icons.Check className="w-3 h-3" /> : <Icons.Share className="w-3 h-3" />}
                            </button>
                            <button onClick={() => handleCopyVerse(ayahNum, verse.arabic, 'arabic')} className={`p-1.5 rounded-full transition-all hover:scale-110 ${copyStatus === `${ayahNum}-arabic` ? 'bg-amber-500/80' : 'bg-white/15'}`} title="Copy Arabic text">
                              {copyStatus === `${ayahNum}-arabic` ? <Icons.Check className="w-3 h-3" /> : <Icons.Copy className="w-3 h-3" />}
                            </button>
                            {showTranslation && verse.translation && (
                              <button onClick={() => handleCopyVerse(ayahNum, verse.translation, 'translation')} className={`p-1.5 rounded-full transition-all hover:scale-110 ${copyStatus === `${ayahNum}-translation` ? 'bg-amber-500/80' : 'bg-white/15'}`} title="Copy translation">
                                {copyStatus === `${ayahNum}-translation` ? <Icons.Check className="w-3 h-3" /> : <Icons.Type className="w-3 h-3" />}
                              </button>
                            )}
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
                  </div>
                )}
              </div>

              <div className="flex-shrink-0 pt-1">
                {audioError && <p className="text-center text-red-300 text-[10px] mb-1">{audioError}</p>}

                {/* Audio Mode Toggle + Ayah Selector */}
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  {/* Ayah Jump Dropdown */}
                  <select
                    value={currentAyah}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      stopAllAudio();
                      setCurrentAyah(val);
                      setTranslationAyah(val);
                      // For large surahs, expand rendered verses first
                      if (isLargeSurah && val > visibleVerseCount) {
                        setVisibleVerseCount(Math.min(val + 10, surah?.ayahs || val));
                      }
                      // Retry scroll until element appears (handles progressive loading + React re-render)
                      let attempts = 0;
                      const tryScroll = () => {
                        const el = versesContainerRef.current?.querySelector(`[data-ayah="${val}"]`);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        } else if (attempts < 10) {
                          attempts++;
                          setTimeout(tryScroll, 100);
                        }
                      };
                      setTimeout(tryScroll, 50);
                    }}
                    disabled={!totalVerses}
                    className="bg-white/20 text-white border border-white/25 rounded-full px-2 py-1 text-xs font-medium outline-none cursor-pointer disabled:opacity-50"
                    title="Jump to verse"
                  >
                    {totalVerses > 0 ? Array.from({ length: totalVerses }, (_, i) => (
                      <option key={i + 1} value={i + 1} className="bg-gray-800 text-white">Ayah {i + 1}</option>
                    )) : <option className="bg-gray-800 text-white">-</option>}
                  </select>

                  <button
                    onClick={() => {
                      stopAllAudio();
                      setAudioMode('arabic');
                    }}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${audioMode === 'arabic' ? 'bg-white/30 text-white' : 'bg-white/10 text-white/60'}`}
                  >
                    {t('reader.arabic')}
                  </button>
                  <button
                    onClick={() => {
                      stopAllAudio();
                      setAudioMode('translation');
                      setTranslationAyah(currentAyah);
                    }}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${audioMode === 'translation' ? 'bg-cyan-500/50 text-white' : 'bg-white/10 text-white/60'}`}
                    title={apiAudioSource ? `Audio: ${apiAudioSource.reciter?.name}` : 'TTS Audio (No narrator available)'}
                  >
                    {translationLanguageLabel || t('reader.translation')}
                    {apiAudioSource ? (
                      <span className="ml-1 text-emerald-300">●</span>
                    ) : (
                      <span className="ml-1 text-amber-300" title="TTS only">○</span>
                    )}
                  </button>
                  {/* Narrator selector button */}
                  {availableNarrators.length > 0 && (audioMode === 'translation' || audioMode === 'combined') && (
                    <button
                      onClick={() => setShowNarratorPicker(true)}
                      className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 cursor-pointer hover:bg-white/20 transition-all flex items-center gap-1"
                      style={{ maxWidth: '140px' }}
                    >
                      {effectiveNarrator === 'tts' ? (
                        <span className="text-amber-300">TTS (AI Voice)</span>
                      ) : (
                        <>
                          <span className="text-emerald-300 shrink-0">&#9679;</span>
                          <span className="truncate">{TRANSLATION_RECITERS[effectiveNarrator]?.translationShort || TRANSLATION_RECITERS[effectiveNarrator]?.name || 'Narrator'}</span>
                        </>
                      )}
                      <Icons.ChevronDown className="w-3 h-3 shrink-0 text-white/40" />
                    </button>
                  )}
                  {/* TTS indicator when no API audio available */}
                  {!hasMatchingAudio && (audioMode === 'translation' || audioMode === 'combined') && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300">
                      🤖 TTS
                    </span>
                  )}
                  <button
                    onClick={() => {
                      stopAllAudio();
                      setAudioMode('combined');
                      setTranslationAyah(currentAyah);
                    }}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${audioMode === 'combined' ? 'bg-gradient-to-r from-amber-500/50 to-cyan-500/50 text-white' : 'bg-white/10 text-white/60'}`}
                    title="Play Arabic then Translation for each verse"
                  >
                    {t('reader.both')}
                  </button>
                </div>

                {/* Audio Controls */}
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      const newAyah = Math.max(1, currentAyah - 1);
                      setCurrentAyah(newAyah);
                      setTranslationAyah(newAyah);
                      stopLafziWordSync();
                      setTimeout(() => {
                        const el = versesContainerRef.current?.querySelector(`[data-ayah="${newAyah}"]`);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }, 100);
                    }}
                    disabled={currentAyah <= 1}
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
                      {ttsLoading ? <Icons.Loader className="w-5 h-5 animate-spin" /> : isPlayingTranslation ? <Icons.Pause className="w-5 h-5" /> : <Icons.Play className="w-5 h-5 ml-0.5" />}
                    </button>
                  ) : (
                    <button onClick={toggleCombinedPlayback}
                      className={`w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-all ${isPlayingCombined ? 'bg-gradient-to-r from-amber-500/60 to-cyan-500/60' : 'bg-white/30 hover:bg-white/40'}`}
                      style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                      {ttsLoading && isPlayingCombined ? <Icons.Loader className="w-5 h-5 animate-spin" /> : isPlayingCombined ? <Icons.Pause className="w-5 h-5" /> : <Icons.Play className="w-5 h-5 ml-0.5" />}
                    </button>
                  )}

                  <button
                    onClick={() => {
                      const newAyah = Math.min(totalVerses, currentAyah + 1);
                      setCurrentAyah(newAyah);
                      setTranslationAyah(newAyah);
                      stopLafziWordSync();
                      if (isLargeSurah && newAyah > visibleVerseCount) {
                        setVisibleVerseCount(Math.min(newAyah + 10, surah?.ayahs || newAyah));
                      }
                      setTimeout(() => {
                        const el = versesContainerRef.current?.querySelector(`[data-ayah="${newAyah}"]`);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }, 100);
                    }}
                    disabled={currentAyah >= totalVerses}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all disabled:opacity-30"
                  >
                    <Icons.SkipForward className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-center mt-0.5 text-xs text-white/70">
                  {audioMode === 'translation' ? (
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-cyan-300">{translationAyah} / {totalVerses} {isPlayingTranslation && `(${t('reader.playing')})`}</span>
                      {isPlayingTranslation && translationAudioSource && (
                        <span className={`text-[10px] ${translationAudioSource === 'api' ? 'text-emerald-300' : 'text-amber-300'}`}>
                          {translationAudioSource === 'api' ? (
                            <>🎙 {translationReciterInfo?.name || 'Narrator'}</>
                          ) : (
                            <>🤖 TTS ({translationLanguageLabel || ttsLanguage.toUpperCase()})</>
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
                            translationAudioSource === 'api' ? `🎙 ${translationLanguageLabel || 'Translation'}` : '🤖 TTS'
                          )})
                        </span>
                      )}
                    </span>
                  )}
                </div>

                {/* Audio info message (e.g. "No audio available for this translation") */}
                {audioInfoMessage && (
                  <div className="mt-2 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/80 text-center animate-[fadeIn_0.3s_ease-out] flex items-center justify-center gap-2">
                    <Icons.Info className="w-3.5 h-3.5 shrink-0" />
                    <span>{audioInfoMessage}</span>
                    <button onClick={() => setAudioInfoMessage(null)} className="shrink-0 p-0.5 rounded-full hover:bg-white/10">
                      <Icons.X className="w-3 h-3" />
                    </button>
                  </div>
                )}

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

      {/* Premium Upgrade Prompt — uses centralized KidsPremiumGate */}
      {showUpgradePrompt && (
        <Suspense fallback={null}>
          <KidsPremiumGate
            feature={upgradeFeature || 'premium'}
            source="surah_reader"
            returnPath={`/surah/${surah?.id || 1}`}
            onClose={() => {
              setShowUpgradePrompt(false);
              // Mark that user dismissed premium gate — allow browser TTS fallback next time
              if (upgradeFeature === 'hd-tts') {
                ttsPremiumDismissedRef.current = true;
              }
            }}
          />
        </Suspense>
      )}

      {/* Surah Picker Popup */}
      {showSurahPicker && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setShowSurahPicker(false)}
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', animation: 'fadeIn 0.2s ease-out' }}>
          <div className="relative w-full max-w-md max-h-[80vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              boxShadow: '0 0 60px rgba(139, 92, 246, 0.2), 0 25px 50px rgba(0,0,0,0.5)',
              animation: 'surahPickerIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
            {/* Header */}
            <div className="flex-shrink-0 p-5 pb-3 text-center">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8" />
                <h3 className="text-lg font-bold text-white">{t('reader.selectSurah', 'Select Surah')}</h3>
                <button onClick={() => setShowSurahPicker(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                  <Icons.X className="w-4 h-4 text-white/70" />
                </button>
              </div>
              {/* Search bar */}
              <div className="relative">
                <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  value={surahSearchQuery}
                  onChange={(e) => setSurahSearchQuery(e.target.value)}
                  placeholder={t('reader.searchSurah', 'Search surah name or number...')}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-sm text-white placeholder-white/40 outline-none transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                  autoFocus
                />
              </div>
            </div>
            {/* Surah list */}
            <div className="flex-1 overflow-y-auto px-3 pb-4 custom-scrollbar" style={{ minHeight: 0 }}>
              {(() => {
                const filtered = surahSearchQuery.trim()
                  ? SURAHS.filter(s => {
                      const q = surahSearchQuery.toLowerCase().trim();
                      return s.name.toLowerCase().includes(q)
                        || s.arabic.includes(q)
                        || String(s.id).includes(q)
                        || (s.meaning && s.meaning.toLowerCase().includes(q));
                    })
                  : SURAHS;
                return filtered.length === 0 ? (
                  <div className="text-center py-8 text-white/40 text-sm">
                    {t('reader.noSurahFound', 'No surah found')}
                  </div>
                ) : filtered.map((s, idx) => {
                const isActive = s.id === surah.id;
                const palette = PALETTES[s.id % PALETTES.length];
                const color = palette?.colors?.[0] || '#8B5CF6';
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      if (s.id !== surah.id) {
                        goToSurah(s);
                      }
                      setShowSurahPicker(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl mb-1 transition-all duration-200 group ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-500/30 to-violet-500/30 border border-purple-400/40'
                        : 'hover:bg-white/8 border border-transparent'
                    }`}
                    style={{ animation: `surahItemIn 0.15s ease-out ${idx * 0.015}s both` }}
                  >
                    {/* Number badge */}
                    <div className="w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center text-xs font-bold transition-all"
                      style={{
                        background: isActive ? `${color}40` : 'rgba(255,255,255,0.06)',
                        color: isActive ? color : 'rgba(255,255,255,0.5)',
                        border: isActive ? `1px solid ${color}60` : '1px solid transparent'
                      }}>
                      {s.id}
                    </div>
                    {/* Surah info */}
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                          {s.name}
                        </span>
                        <span className="text-base flex-shrink-0" style={{ fontFamily: "'Scheherazade New', serif", color: isActive ? 'white' : 'rgba(255,255,255,0.6)' }} dir="rtl">
                          {s.arabic}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] text-white/40">{s.meaning}</span>
                        <span className="text-[10px] text-white/25">|</span>
                        <span className="text-[11px] text-white/40">{s.ayahs} {t('reader.verses', 'verses')}</span>
                        <span className="text-[10px] text-white/25">|</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${s.type === 'Makki' ? 'bg-amber-500/15 text-amber-400/70' : 'bg-emerald-500/15 text-emerald-400/70'}`}>
                          {s.type}
                        </span>
                      </div>
                    </div>
                    {/* Active indicator */}
                    {isActive && (
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                    )}
                  </button>
                );
              });
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Language Picker Popup */}
      {showLanguagePicker && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setShowLanguagePicker(false)}
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', animation: 'fadeIn 0.2s ease-out' }}>
          <div className="relative w-full max-w-sm max-h-[80vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #064e3b 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              boxShadow: '0 0 60px rgba(16, 185, 129, 0.15), 0 25px 50px rgba(0,0,0,0.5)',
              animation: 'surahPickerIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
            {/* Header */}
            <div className="flex-shrink-0 p-5 pb-3 text-center">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8" />
                <h3 className="text-lg font-bold text-white flex items-center gap-2 justify-center">
                  <Icons.Globe className="w-5 h-5 text-emerald-400" />
                  {t('reader.selectLanguage', 'Select Language')}
                </h3>
                <button onClick={() => setShowLanguagePicker(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                  <Icons.X className="w-4 h-4 text-white/70" />
                </button>
              </div>
              <p className="text-[11px] text-white/30 mb-3">{availableLanguages.length} {t('reader.languagesAvailable', 'languages available')}</p>
              {/* Search */}
              <div className="relative">
                <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  value={languageSearchQuery}
                  onChange={(e) => setLanguageSearchQuery(e.target.value)}
                  placeholder={t('reader.searchLanguage', 'Search language...')}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-sm text-white placeholder-white/40 outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                  autoFocus
                />
              </div>
            </div>
            {/* Language list */}
            <div className="flex-1 overflow-y-auto px-3 pb-4 custom-scrollbar" style={{ minHeight: 0 }}>
              {availableLanguages.filter(lang => {
                if (!languageSearchQuery.trim()) return true;
                const q = languageSearchQuery.toLowerCase().trim();
                return lang.name.toLowerCase().includes(q) || lang.nameNative.includes(q) || lang.code.includes(q);
              }).map((lang, idx) => {
                const isActive = ttsLanguage === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => { handleLanguageChange(lang.code); setShowLanguagePicker(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl mb-1 transition-all duration-200 group ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border border-emerald-400/40'
                        : 'hover:bg-white/8 border border-transparent'
                    }`}
                    style={{ animation: `surahItemIn 0.12s ease-out ${idx * 0.015}s both` }}
                  >
                    {/* Language code badge */}
                    <div className={`w-9 h-9 flex-shrink-0 rounded-xl flex items-center justify-center text-[10px] font-bold uppercase transition-all ${
                      isActive ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/40' : 'bg-white/5 text-white/40 border border-transparent'
                    }`}>
                      {lang.code}
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                          {lang.nameNative !== lang.name ? lang.nameNative : lang.name}
                        </span>
                        {lang.nameNative !== lang.name && (
                          <span className="text-[11px] text-white/30 truncate">{lang.name}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-white/30">{lang.count} {lang.count === 1 ? 'translation' : 'translations'}</span>
                        {lang.hasNarrator && (
                          <>
                            <span className="text-[10px] text-white/20">|</span>
                            <span className="text-[10px] text-emerald-400/70 flex items-center gap-0.5">
                              <Icons.Mic className="w-2.5 h-2.5" /> Human voice
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    {/* Active dot */}
                    {isActive && (
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                    )}
                  </button>
                );
              })}
              {/* No results */}
              {availableLanguages.filter(lang => {
                if (!languageSearchQuery.trim()) return true;
                const q = languageSearchQuery.toLowerCase().trim();
                return lang.name.toLowerCase().includes(q) || lang.nameNative.includes(q) || lang.code.includes(q);
              }).length === 0 && (
                <div className="text-center py-8 text-white/40 text-sm">
                  {t('reader.noLanguageFound', 'No language found')}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Reciter Picker Popup */}
      {showReciterPicker && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setShowReciterPicker(false)}
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', animation: 'fadeIn 0.2s ease-out' }}>
          <div className="relative w-full max-w-md max-h-[80vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              boxShadow: '0 0 60px rgba(245, 158, 11, 0.15), 0 25px 50px rgba(0,0,0,0.5)',
              animation: 'surahPickerIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
            {/* Header */}
            <div className="flex-shrink-0 p-5 pb-3 text-center">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8" />
                <h3 className="text-lg font-bold text-white flex items-center gap-2 justify-center">
                  <Icons.Mic className="w-5 h-5 text-amber-400" />
                  {t('reader.selectReciter', 'Select Reciter')}
                </h3>
                <button onClick={() => setShowReciterPicker(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                  <Icons.X className="w-4 h-4 text-white/70" />
                </button>
              </div>
              <p className="text-[11px] text-white/30 mb-3">{Object.keys(RECITERS).length} {t('reader.recitersAvailable', 'reciters available')}</p>
              {/* Search */}
              <div className="relative">
                <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  value={reciterSearchQuery}
                  onChange={(e) => setReciterSearchQuery(e.target.value)}
                  placeholder={t('reader.searchReciter', 'Search reciter name...')}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-sm text-white placeholder-white/40 outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                  autoFocus
                />
              </div>
            </div>
            {/* Reciter list */}
            <div className="flex-1 overflow-y-auto px-3 pb-4 custom-scrollbar" style={{ minHeight: 0 }}>
              {Object.entries(RECITERS).filter(([id, info]) => {
                if (!reciterSearchQuery.trim()) return true;
                const q = reciterSearchQuery.toLowerCase().trim();
                return info.name.toLowerCase().includes(q)
                  || (info.nameAr || '').includes(q)
                  || (info.country || '').toLowerCase().includes(q)
                  || (info.style || '').toLowerCase().includes(q);
              }).map(([id, info], idx) => {
                const isActive = id === selectedReciter;
                const initials = info.name.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('');
                const countryColors = {
                  'Kuwait': '#22C55E', 'Saudi Arabia': '#10B981', 'Egypt': '#F59E0B',
                  'Iran': '#EC4899', 'Syria': '#8B5CF6',
                };
                const color = countryColors[info.country] || '#6366F1';
                return (
                  <button
                    key={id}
                    onClick={() => { setSelectedReciter(id); setShowReciterPicker(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl mb-1 transition-all duration-200 group ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-500/25 to-orange-500/25 border border-amber-400/40'
                        : 'hover:bg-white/8 border border-transparent'
                    }`}
                    style={{ animation: `surahItemIn 0.15s ease-out ${idx * 0.02}s both` }}
                  >
                    {/* Avatar with image or initials fallback */}
                    <div className="w-10 h-10 flex-shrink-0 rounded-xl overflow-hidden relative transition-all"
                      style={{
                        background: isActive ? `${color}30` : 'rgba(255,255,255,0.06)',
                        border: isActive ? `2px solid ${color}` : '2px solid transparent',
                        boxShadow: isActive ? `0 0 12px ${color}40` : 'none'
                      }}>
                      {info.image ? (
                        <img
                          src={info.image}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : null}
                      <span className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${info.image ? 'opacity-0' : ''}`}
                        style={{ color: isActive ? color : 'rgba(255,255,255,0.5)' }}>
                        {initials}
                      </span>
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                          {info.name}
                        </span>
                        {info.nameAr && (
                          <span className="text-sm flex-shrink-0 text-white/50" style={{ fontFamily: "'Scheherazade New', serif" }} dir="rtl">
                            {info.nameAr}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] text-white/40">{info.country}</span>
                        {info.style && (
                          <>
                            <span className="text-[10px] text-white/25">|</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                              info.style === 'Mujawwad' ? 'bg-purple-500/15 text-purple-400/70' : 'bg-emerald-500/15 text-emerald-400/70'
                            }`}>
                              {info.style}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    {/* Active dot */}
                    {isActive && (
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#F59E0B', boxShadow: '0 0 8px #F59E0B' }} />
                    )}
                  </button>
                );
              })}
              {/* No results */}
              {Object.entries(RECITERS).filter(([, info]) => {
                if (!reciterSearchQuery.trim()) return true;
                const q = reciterSearchQuery.toLowerCase().trim();
                return info.name.toLowerCase().includes(q) || (info.nameAr || '').includes(q) || (info.country || '').toLowerCase().includes(q);
              }).length === 0 && (
                <div className="text-center py-8 text-white/40 text-sm">
                  {t('reader.noReciterFound', 'No reciter found')}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Translation Picker Popup */}
      {showTranslationPicker && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setShowTranslationPicker(false)}
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', animation: 'fadeIn 0.2s ease-out' }}>
          <div className="relative w-full max-w-md max-h-[80vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              boxShadow: '0 0 60px rgba(6, 182, 212, 0.15), 0 25px 50px rgba(0,0,0,0.5)',
              animation: 'surahPickerIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
            {/* Header */}
            <div className="flex-shrink-0 p-5 pb-3 text-center">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8" />
                <h3 className="text-lg font-bold text-white flex items-center gap-2 justify-center">
                  <Icons.BookOpen className="w-5 h-5 text-cyan-400" />
                  {t('reader.selectTranslation', 'Select Translation')}
                </h3>
                <button onClick={() => setShowTranslationPicker(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                  <Icons.X className="w-4 h-4 text-white/70" />
                </button>
              </div>
              <p className="text-[11px] text-white/30 mb-3">{Object.keys(TRANSLATIONS).length} {t('reader.translationsAvailable', 'translations in')} {new Set(Object.values(TRANSLATIONS).map(t => t.language)).size} {t('reader.languages', 'languages')}</p>
              {/* Search */}
              <div className="relative">
                <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  value={translationSearchQuery}
                  onChange={(e) => setTranslationSearchQuery(e.target.value)}
                  placeholder={t('reader.searchTranslation', 'Search by name, language...')}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-sm text-white placeholder-white/40 outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                  autoFocus
                />
              </div>
            </div>
            {/* Translation list grouped by language */}
            <div className="flex-1 overflow-y-auto px-3 pb-4 custom-scrollbar" style={{ minHeight: 0 }}>
              {(() => {
                const groups = {};
                Object.entries(TRANSLATIONS).forEach(([id, info]) => {
                  const lang = info.language;
                  if (!groups[lang]) groups[lang] = [];
                  groups[lang].push([id, info]);
                });
                const q = translationSearchQuery.toLowerCase().trim();
                let itemIdx = 0;
                return Object.entries(groups).filter(([lang, items]) => {
                  if (!q) return true;
                  return lang.toLowerCase().includes(q)
                    || items.some(([id, info]) =>
                      info.name.toLowerCase().includes(q)
                      || (info.nameEn || '').toLowerCase().includes(q)
                      || (info.languageNative || '').includes(q)
                      || id.toLowerCase().includes(q)
                    );
                }).map(([lang, items]) => {
                  const filteredItems = !q ? items : items.filter(([id, info]) =>
                    lang.toLowerCase().includes(q)
                    || info.name.toLowerCase().includes(q)
                    || (info.nameEn || '').toLowerCase().includes(q)
                    || (info.languageNative || '').includes(q)
                    || id.toLowerCase().includes(q)
                  );
                  if (filteredItems.length === 0) return null;
                  const langNative = filteredItems[0][1].languageNative;
                  const langColors = {
                    'Urdu': '#10B981', 'English': '#3B82F6', 'Arabic': '#F59E0B', 'French': '#EC4899',
                    'Turkish': '#EF4444', 'Chinese': '#F97316', 'Japanese': '#8B5CF6', 'Korean': '#6366F1',
                    'Spanish': '#EAB308', 'German': '#64748B', 'Russian': '#14B8A6', 'Hindi': '#F97316',
                    'Persian': '#A855F7', 'Bengali': '#22C55E', 'Indonesian': '#EF4444', 'Malay': '#06B6D4',
                  };
                  const langColor = langColors[lang] || '#6366F1';
                  return (
                    <div key={lang} className="mb-3">
                      {/* Language group header */}
                      <div className="flex items-center gap-2 px-2 py-1.5 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: langColor }} />
                        <span className="text-xs font-semibold text-white/60">{langNative ? `${langNative} — ${lang}` : lang}</span>
                        <span className="text-[10px] text-white/25">({filteredItems.length})</span>
                        <div className="flex-1 h-px bg-white/5" />
                      </div>
                      {/* Translations in this language */}
                      {filteredItems.map(([id, info]) => {
                        const isActive = id === selectedTranslation;
                        const hasAudio = !!TRANSLATION_RECITERS[Object.keys(TRANSLATION_RECITERS).find(k => {
                          const r = TRANSLATION_RECITERS[k];
                          return r.matchesTranslations?.includes(id);
                        })];
                        const currentIdx = itemIdx++;
                        return (
                          <button
                            key={id}
                            onClick={() => { setSelectedTranslation(id); setShowTranslationPicker(false); }}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-2xl mb-0.5 transition-all duration-200 group ${
                              isActive
                                ? 'bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border border-cyan-400/40'
                                : 'hover:bg-white/8 border border-transparent'
                            }`}
                            style={{ animation: `surahItemIn 0.15s ease-out ${currentIdx * 0.015}s both` }}
                          >
                            {/* Avatar/Initial */}
                            <div className="w-9 h-9 flex-shrink-0 rounded-xl flex items-center justify-center text-[10px] font-bold transition-all"
                              style={{
                                background: isActive ? `${langColor}25` : 'rgba(255,255,255,0.04)',
                                color: isActive ? langColor : 'rgba(255,255,255,0.4)',
                                border: isActive ? `1px solid ${langColor}40` : '1px solid transparent'
                              }}>
                              {id.split('.')[0].toUpperCase()}
                            </div>
                            {/* Info */}
                            <div className="flex-1 min-w-0 text-left">
                              <div className="flex items-center gap-2">
                                <span className={`text-sm truncate ${isActive ? 'text-white font-semibold' : 'text-white/75 group-hover:text-white'}`}>
                                  {info.nameEn || info.name}
                                </span>
                                {hasAudio && <span className="text-emerald-400 text-[10px]" title="Human narrator available">🎙</span>}
                              </div>
                              {info.nameEn && info.name !== info.nameEn && (
                                <span className="text-[11px] text-white/35 block truncate" dir="auto">{info.name}</span>
                              )}
                            </div>
                            {/* Active dot */}
                            {isActive && (
                              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#06B6D4', boxShadow: '0 0 8px #06B6D4' }} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  );
                });
              })()}
              {/* No results */}
              {(() => {
                const q = translationSearchQuery.toLowerCase().trim();
                if (!q) return null;
                const hasResults = Object.entries(TRANSLATIONS).some(([id, info]) =>
                  info.name.toLowerCase().includes(q)
                  || (info.nameEn || '').toLowerCase().includes(q)
                  || info.language.toLowerCase().includes(q)
                  || (info.languageNative || '').includes(q)
                  || id.toLowerCase().includes(q)
                );
                if (hasResults) return null;
                return (
                  <div className="text-center py-8 text-white/40 text-sm">
                    {t('reader.noTranslationFound', 'No translation found')}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Narrator Picker Popup (compact) */}
      {showNarratorPicker && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setShowNarratorPicker(false)}
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)', animation: 'fadeIn 0.2s ease-out' }}>
          <div className="relative w-full max-w-sm flex flex-col rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              boxShadow: '0 0 40px rgba(16, 185, 129, 0.15), 0 20px 40px rgba(0,0,0,0.5)',
              animation: 'surahPickerIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 pb-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Icons.Volume2 className="w-4 h-4 text-emerald-400" />
                {t('reader.selectNarrator', 'Select Narrator')}
              </h3>
              <button onClick={() => setShowNarratorPicker(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                <Icons.X className="w-3.5 h-3.5 text-white/70" />
              </button>
            </div>
            <p className="text-[11px] text-white/30 px-4 mb-2">
              {translationLanguageLabel || 'Translation'} — {availableNarrators.length} {t('reader.optionsAvailable', 'options')}
            </p>
            {/* Narrator list */}
            <div className="px-3 pb-4">
              {availableNarrators.map((narrator, idx) => {
                const isActive = narrator.id === effectiveNarrator;
                const isTTS = narrator.id === 'tts';
                const reciterInfo = !isTTS ? TRANSLATION_RECITERS[narrator.id] : null;
                return (
                  <button
                    key={narrator.id}
                    onClick={() => { handleNarratorChange(narrator.id); setShowNarratorPicker(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl mb-1 transition-all duration-200 group ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border border-emerald-400/40'
                        : 'hover:bg-white/8 border border-transparent'
                    }`}
                    style={{ animation: `surahItemIn 0.15s ease-out ${idx * 0.05}s both` }}
                  >
                    {/* Icon */}
                    <div className={`w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center transition-all ${
                      isActive ? 'bg-emerald-500/20' : 'bg-white/5'
                    }`}>
                      {isTTS ? (
                        <Icons.Cpu className="w-5 h-5 text-amber-400" />
                      ) : (
                        <Icons.Mic className="w-5 h-5 text-emerald-400" />
                      )}
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>
                          {isTTS ? 'TTS (AI Voice)' : (narrator.name || reciterInfo?.name)}
                        </span>
                        {isTTS && !canUseHDTTS && (
                          <span className="text-amber-400 text-[10px]">Premium</span>
                        )}
                      </div>
                      <span className="text-[11px] text-white/35">
                        {isTTS
                          ? t('reader.googleCloudTTS', 'Google Cloud Text-to-Speech')
                          : `${reciterInfo?.translation || ''} — ${narrator.styleLabel || (narrator.style === 'word-by-word' ? 'Word-by-word' : 'Full sentence')}`
                        }
                      </span>
                    </div>
                    {/* Active dot */}
                    {isActive && (
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
                    )}
                  </button>
                );
              })}
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
        @keyframes bubblePopIn { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes surahPickerIn { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes surahItemIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.3); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.5); }
      `}</style>
    </div>
  );
});

export default BubbleReaderOverlay;
