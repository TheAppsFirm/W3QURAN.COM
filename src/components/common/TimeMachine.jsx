/**
 * Time Machine — Cinematic Revelation Documentary
 * Full-screen auto-playing cinematic experience: 18 scenes, 610–650 CE.
 * Trilingual (EN/UR/AR) with visual timeline, HD narration, verse recitation,
 * parallax visuals, mini map, and journey completion screen.
 */

import { useState, useEffect, useCallback, useRef, useMemo, memo } from 'react';
import 'leaflet/dist/leaflet.css';
import { Icons } from './Icons';
import { SURAHS } from '../../data';
import { getAudioUrl } from '../../hooks/useAudioPlayer';
import {
  SEERAH_EVENTS,
  INTRO_TEXT,
  getPeriodForChronOrder,
} from '../../data/seerahTimeline';

// ============================================================================
// CONSTANTS
// ============================================================================

const SCENE_DURATION = 8000;
const TRANSITION_DURATION = 800;
const PARTICLE_COUNT = 30;
const LANGUAGES = ['en', 'ur', 'ar'];
const LANG_LABELS = { en: 'EN', ur: 'اُردو', ar: 'عربي' };
const RTL_LANGS = new Set(['ur', 'ar']);
const SPEED_OPTIONS = [1, 1.5, 2];
const LS_KEY = 'w3quran_tm_lang';
const TTS_LANG_MAP = { en: 'en-US', ur: 'ur-PK', ar: 'ar-SA' };
const TIMELINE_START = 610;
const TIMELINE_END = 652;
const SAT_TILE = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const LABEL_TILE = 'https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png';

const ICON_MAP = {
  BookOpen: Icons.BookOpen, Users: Icons.Users, Megaphone: Icons.Mic,
  AlertTriangle: Icons.AlertTriangle, Navigation: Icons.Globe, Heart: Icons.Heart,
  Star: Icons.Star, Handshake: Icons.HeartHandshake, Route: Icons.Route,
  Zap: Icons.Zap, Mountain: Icons.Mountain, Shield: Icons.Shield,
  Trophy: Icons.Trophy, Compass: Icons.Compass, Award: Icons.Award,
};

// Parse "96:1" or "85:4-5" → { surah, ayah } (first ayah only)
function parseVerseRef(ref) {
  if (!ref) return null;
  const [s, a] = ref.split(':');
  const ayah = a?.includes('-') ? a.split('-')[0] : a;
  return { surah: parseInt(s, 10), ayah: parseInt(ayah, 10) };
}

// ============================================================================
// FLOATING PARTICLES + PARALLAX LAYERS
// ============================================================================

const FloatingParticles = memo(function FloatingParticles({ mood }) {
  const particles = useMemo(() =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 3 + 1, duration: Math.random() * 15 + 10,
      delay: Math.random() * 10, opacity: Math.random() * 0.4 + 0.1,
    })), []);

  // Mood-specific visual layer
  const moodOverlay = useMemo(() => {
    switch (mood) {
      case 'mystical': return 'radial-gradient(ellipse at 50% 30%, rgba(139,92,246,0.08) 0%, transparent 70%)';
      case 'cosmic': return 'radial-gradient(ellipse at 50% 20%, rgba(168,85,247,0.1) 0%, transparent 60%)';
      case 'fiery': return 'radial-gradient(ellipse at 50% 80%, rgba(239,68,68,0.06) 0%, transparent 60%)';
      case 'somber': return 'radial-gradient(ellipse at 50% 60%, rgba(75,85,99,0.08) 0%, transparent 70%)';
      case 'mournful': return 'radial-gradient(ellipse at 50% 50%, rgba(107,114,128,0.06) 0%, transparent 60%)';
      case 'oceanic': return 'radial-gradient(ellipse at 50% 70%, rgba(6,182,212,0.06) 0%, transparent 60%)';
      case 'hopeful': case 'dawn': return 'radial-gradient(ellipse at 50% 80%, rgba(16,185,129,0.06) 0%, transparent 60%)';
      case 'intense': case 'warning': return 'radial-gradient(ellipse at 50% 40%, rgba(220,38,38,0.05) 0%, transparent 60%)';
      case 'siege': return 'radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.06) 0%, transparent 60%)';
      case 'diplomatic': return 'radial-gradient(ellipse at 60% 60%, rgba(6,182,212,0.05) 0%, transparent 60%)';
      case 'triumphant': return 'radial-gradient(ellipse at 50% 30%, rgba(245,158,11,0.08) 0%, transparent 50%)';
      case 'farewell': return 'radial-gradient(ellipse at 50% 50%, rgba(236,72,153,0.06) 0%, transparent 60%)';
      case 'solemn': return 'radial-gradient(ellipse at 50% 40%, rgba(34,211,238,0.06) 0%, transparent 60%)';
      case 'golden': return 'radial-gradient(ellipse at 50% 30%, rgba(245,158,11,0.1) 0%, transparent 50%)';
      case 'eternal': return 'radial-gradient(ellipse at 50% 50%, rgba(52,211,153,0.08) 0%, transparent 60%)';
      default: return 'none';
    }
  }, [mood]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Mood overlay */}
      <div className="absolute inset-0 transition-all duration-[2s]" style={{ background: moodOverlay }} />
      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)' }} />
      {/* Particles */}
      {particles.map((p) => (
        <div key={p.id} className="absolute rounded-full" style={{
          left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size,
          opacity: p.opacity,
          background: mood === 'cosmic' || mood === 'mystical' ? 'rgba(167,139,250,0.6)'
            : mood === 'triumphant' || mood === 'warm' ? 'rgba(251,191,36,0.5)' : 'rgba(255,255,255,0.4)',
          animation: `tmParticleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
        }} />
      ))}
    </div>
  );
});

// ============================================================================
// INTRO SCREEN
// ============================================================================

const IntroScreen = memo(function IntroScreen({ lang, onChangeLang, onBegin }) {
  const isRTL = RTL_LANGS.has(lang);
  const t = INTRO_TEXT[lang];
  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20 ${lang === 'ur' ? 'font-urdu' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 via-black/80 to-black/90 pointer-events-none" />
      <div className="relative z-10 max-w-xl mx-auto w-full px-2">
        <p className="text-2xl md:text-3xl text-amber-400/70 mb-6" style={{ fontFamily: 'Scheherazade New, Amiri, serif' }}>
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <h1 className={`font-bold text-white mb-4 tracking-tight ${lang === 'ur' ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl'}`}>{t.title}</h1>
        <p className={`text-gray-300 mb-6 leading-relaxed ${lang === 'ur' ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>{t.subtitle}</p>
        <p className={`text-gray-400 mb-10 leading-relaxed max-w-md mx-auto ${lang === 'ur' ? 'text-sm' : 'text-sm md:text-base'}`}>{t.purpose}</p>
        <div className="flex items-center justify-center gap-2 mb-8">
          {LANGUAGES.map((l) => (
            <button key={l} onClick={() => onChangeLang(l)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${lang === l ? 'bg-white/20 text-white ring-1 ring-white/30' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'}`}>
              {LANG_LABELS[l]}
            </button>
          ))}
        </div>
        <button onClick={onBegin}
          className="group relative px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 active:scale-95">
          <span className="relative z-10">{t.start}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
        <p className="mt-6 text-xs text-gray-500">
          {lang === 'ur' ? '۱۸ مناظر · تقریباً ۳ منٹ' : lang === 'ar' ? '١٨ مشهدًا · حوالي ٣ دقائق' : '18 scenes · ~3 minutes'}
        </p>
      </div>
    </div>
  );
});

// ============================================================================
// VERSE DISPLAY
// ============================================================================

const VerseDisplay = memo(function VerseDisplay({ verse, lang, isReciting }) {
  if (!verse) return null;
  const isRTL = RTL_LANGS.has(lang);
  return (
    <div className="my-6 md:my-8 text-center">
      <p className={`text-2xl md:text-3xl lg:text-4xl leading-loose mb-3 tmVerseGlow ${isReciting ? 'tmVerseReciting' : ''}`}
        style={{ fontFamily: 'Scheherazade New, Amiri, serif', color: '#fbbf24', direction: 'rtl' }}>
        ﴿ {verse.arabic} ﴾
      </p>
      <p className={`text-sm md:text-base text-gray-300 italic max-w-lg mx-auto ${lang === 'ur' ? 'font-urdu' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        "{verse.translation[lang] || verse.translation.en}"
      </p>
      <p className="text-xs text-gray-500 mt-2">— {verse.ref}</p>
    </div>
  );
});

// ============================================================================
// RELATED SURAHS
// ============================================================================

const RelatedSurahs = memo(function RelatedSurahs({ surahIds, onNavigate, lang }) {
  if (!surahIds || surahIds.length === 0) return null;
  const surahs = surahIds.map((id) => SURAHS.find((s) => s.id === id)).filter(Boolean);
  if (surahs.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
      {surahs.map((s) => (
        <button key={s.id} onClick={() => onNavigate(s.id)}
          className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-gray-200 hover:bg-white/20 hover:text-white transition-all duration-200 backdrop-blur-sm border border-white/5">
          {lang === 'ar' ? s.arabic : s.name}
        </button>
      ))}
    </div>
  );
});

// ============================================================================
// VISUAL TIMELINE
// ============================================================================

const VisualTimeline = memo(function VisualTimeline({ events, activeIndex, onJump, lang }) {
  const range = TIMELINE_END - TIMELINE_START;
  const hijraPos = ((622 - TIMELINE_START) / range) * 100;
  const compilationPos = ((632 - TIMELINE_START) / range) * 100;
  return (
    <div className="relative w-full h-12 md:h-14 flex-shrink-0">
      <div className="absolute top-4 left-0 right-0 h-px bg-white/15" />
      {/* Hijra divider */}
      <div className="absolute top-1 hidden md:block" style={{ left: `${hijraPos}%`, transform: 'translateX(-50%)' }}>
        <div className="w-px h-6 bg-emerald-500/50" />
        <span className="block text-[9px] text-emerald-400/70 mt-0.5 whitespace-nowrap">Hijra</span>
      </div>
      {/* Compilation era divider */}
      <div className="absolute top-1 hidden md:block" style={{ left: `${compilationPos}%`, transform: 'translateX(-50%)' }}>
        <div className="w-px h-6 bg-cyan-500/50" />
        <span className="block text-[9px] text-cyan-400/70 mt-0.5 whitespace-nowrap">Compilation</span>
      </div>
      {events.map((ev, i) => {
        const pct = ((ev.year - TIMELINE_START) / range) * 100;
        const isActive = i === activeIndex;
        const isPast = i < activeIndex;
        const name = lang === 'ar' ? ev.nameAr : lang === 'ur' ? ev.nameUr : ev.name;
        return (
          <button key={ev.id} onClick={() => onJump(i)} className="absolute group"
            style={{ left: `${pct}%`, top: '8px', transform: 'translateX(-50%)' }}
            aria-label={`${name} — ${ev.year} CE`}>
            <div className={`rounded-full transition-all duration-500 ${
              isActive ? 'w-3.5 h-3.5 shadow-md tmTimelineDotActive'
                : isPast ? 'w-2 h-2 bg-white/40 hover:bg-white/60' : 'w-2 h-2 bg-white/15 hover:bg-white/30'
            }`} style={isActive ? { backgroundColor: ev.color, boxShadow: `0 0 10px ${ev.color}60` } : {}} />
            {(isActive || i === 0 || i === events.length - 1 || ev.isMajorDivider) && (
              <span className={`absolute top-5 left-1/2 -translate-x-1/2 text-[9px] tabular-nums whitespace-nowrap transition-all duration-300 ${
                isActive ? 'text-amber-400' : 'text-gray-600 hidden md:block'}`}>{ev.year}</span>
            )}
            {isActive && (
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white whitespace-nowrap bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm hidden md:block">
                {name}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
});

// ============================================================================
// MINI MAP — Direct Leaflet API (Satellite View)
// ============================================================================

const SceneMiniMap = memo(function SceneMiniMap({ event, onExpand }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!event?.coords || !mapRef.current) return;
    let cancelled = false;
    import('leaflet').then((leaflet) => {
      if (cancelled) return;
      const L = leaflet.default || leaflet;
      if (!mapInstanceRef.current) {
        const map = L.map(mapRef.current, {
          center: event.coords, zoom: event.mapZoom || 8,
          zoomControl: false, dragging: false, scrollWheelZoom: false,
          doubleClickZoom: false, touchZoom: false, attributionControl: false,
        });
        L.tileLayer(SAT_TILE, { maxZoom: 18 }).addTo(map);
        L.tileLayer(LABEL_TILE, { maxZoom: 18, opacity: 0.7 }).addTo(map);
        mapInstanceRef.current = map;
        markerRef.current = L.circleMarker(event.coords, {
          radius: 7, color: '#fff', fillColor: event.color, fillOpacity: 0.85, weight: 2,
        }).addTo(map);
      } else {
        mapInstanceRef.current.flyTo(event.coords, event.mapZoom || 8, { duration: 1.2 });
        if (markerRef.current) {
          markerRef.current.setLatLng(event.coords);
          markerRef.current.setStyle({ fillColor: event.color });
        }
      }
    });
    return () => { cancelled = true; };
  }, [event?.id, event?.coords, event?.mapZoom, event?.color]);

  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) { mapInstanceRef.current.remove(); mapInstanceRef.current = null; markerRef.current = null; }
    };
  }, []);

  if (!event?.coords) return null;
  return (
    <div
      onClick={onExpand}
      className="tmMiniMap absolute z-20 top-14 left-2 md:top-16 md:left-6 w-[100px] h-[75px] md:w-[180px] md:h-[140px] rounded-lg md:rounded-xl overflow-hidden border border-white/20 shadow-lg shadow-black/50 cursor-pointer group transition-transform hover:scale-105"
    >
      <div ref={mapRef} className="w-full h-full" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1 z-[1000]">
        <p className="text-[9px] text-gray-200 truncate">{event.landmark || event.location || ''}</p>
      </div>
      {/* Expand hint */}
      <div className="absolute top-1.5 right-1.5 z-[1000] bg-black/50 rounded p-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <Icons.Maximize className="w-3 h-3 text-white/80" />
      </div>
    </div>
  );
});

// ============================================================================
// EXPANDED MAP — Full-screen interactive map (init once, stable refs)
// ============================================================================

const ExpandedMap = memo(function ExpandedMap({ event, events, activeIndex, onClose, onJump }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const onJumpRef = useRef(onJump);
  const onCloseRef = useRef(onClose);
  onJumpRef.current = onJump;
  onCloseRef.current = onClose;

  // Init map ONCE on mount
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;
    let cancelled = false;
    import('leaflet').then((leaflet) => {
      if (cancelled || !mapRef.current) return;
      const L = leaflet.default || leaflet;
      const map = L.map(mapRef.current, {
        center: event.coords, zoom: event.mapZoom || 16,
        zoomControl: true, attributionControl: false,
      });
      L.tileLayer(SAT_TILE, { maxZoom: 19 }).addTo(map);
      L.tileLayer(LABEL_TILE, { maxZoom: 19, opacity: 0.8 }).addTo(map);
      mapInstanceRef.current = map;

      // Path line
      const coords = events.filter(e => e.coords).map(e => e.coords);
      L.polyline(coords, { color: '#f59e0b', weight: 2, opacity: 0.4, dashArray: '6,8' }).addTo(map);

      // All event markers
      markersRef.current = events.map((ev, idx) => {
        if (!ev.coords) return null;
        const isActive = idx === activeIndex;
        const isPast = idx < activeIndex;
        const marker = L.circleMarker(ev.coords, {
          radius: isActive ? 10 : 7,
          color: isActive ? '#fff' : isPast ? '#f59e0b' : '#64748b',
          fillColor: isActive ? (ev.color || '#f59e0b') : isPast ? '#f59e0b' : '#334155',
          fillOpacity: isActive ? 0.9 : isPast ? 0.6 : 0.3,
          weight: isActive ? 3 : 1.5,
        }).addTo(map);
        const num = idx + 1;
        marker.bindTooltip(
          `<div style="text-align:center;font-size:12px;line-height:1.3">
            <strong>${num}. ${ev.name}</strong><br/>
            <span style="opacity:0.7">${ev.landmark || ev.location.charAt(0).toUpperCase() + ev.location.slice(1)} — ${ev.year} CE</span>
          </div>`,
          { direction: 'top', offset: [0, -10], className: 'tmMapTooltip' }
        );
        marker.on('click', () => { onJumpRef.current(idx); onCloseRef.current(); });
        return marker;
      });
    });

    return () => {
      cancelled = true;
      if (mapInstanceRef.current) { mapInstanceRef.current.remove(); mapInstanceRef.current = null; }
      markersRef.current = [];
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Init ONCE only

  const displayName = event.name;
  const displayLocation = event.landmark || (event.location ? event.location.charAt(0).toUpperCase() + event.location.slice(1) : '');

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-[95vw] h-[85vh] md:w-[85vw] md:h-[80vh] rounded-2xl overflow-hidden border border-white/15 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div ref={mapRef} className="w-full h-full tmExpandedMap" />
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-[1000] bg-gradient-to-b from-black/70 via-black/40 to-transparent px-4 py-3 flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold text-sm md:text-base">{displayName}</h3>
            <p className="text-white/60 text-xs">{displayLocation} — {event.year} CE</p>
          </div>
          <button onClick={onClose} className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors">
            <Icons.X className="w-5 h-5 text-white" />
          </button>
        </div>
        {/* Legend + Show All button */}
        <div className="absolute bottom-4 left-4 right-4 z-[1000] flex items-end justify-between">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-white/70 flex items-center gap-3">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Visited</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full border-2 border-white bg-amber-400 inline-block" /> Current</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block" /> Upcoming</span>
          </div>
          <button onClick={() => {
            const map = mapInstanceRef.current;
            if (map) {
              const allCoords = events.filter(e => e.coords).map(e => e.coords);
              if (allCoords.length > 1) {
                import('leaflet').then(L => {
                  const ll = (L.default || L);
                  map.flyToBounds(ll.latLngBounds(allCoords).pad(0.15), { duration: 1 });
                });
              }
            }
          }} className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-white/70 hover:bg-white/20 hover:text-white transition-colors">
            Show All
          </button>
        </div>
      </div>
    </div>
  );
});

// ============================================================================
// SCENE CONTENT
// ============================================================================

const SceneContent = memo(function SceneContent({ event, lang, period, onNavigate, isReciting }) {
  const isRTL = RTL_LANGS.has(lang);
  const IconComponent = ICON_MAP[event.icon] || Icons.Star;
  const narrative = event.narrative?.[lang] || event.narrative?.en || event.description;
  const eventName = lang === 'ar' ? event.nameAr : lang === 'ur' ? event.nameUr : event.name;
  const periodName = period ? (lang === 'ar' ? period.nameAr : lang === 'ur' ? period.nameUr : period.name) : '';

  return (
    <div className={`relative z-10 flex flex-col items-center justify-start min-h-full px-4 sm:px-6 md:px-8 pt-16 md:pt-20 pb-60 md:pb-72 text-center overflow-y-auto ${lang === 'ur' ? 'font-urdu' : ''}`}
      dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-2xl mx-auto w-full tmSceneContentFade">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: event.color + '25' }}>
            <IconComponent size={18} color={event.color} />
          </span>
        </div>
        <h2 className={`font-bold text-white mb-2 ${lang === 'ur' ? 'text-xl md:text-3xl' : 'text-2xl md:text-4xl'}`}
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>{eventName}</h2>
        <p className="text-sm text-gray-400 mb-6 md:mb-8 flex items-center justify-center gap-2 flex-wrap" style={lang === 'ur' ? { fontFamily: 'system-ui, sans-serif' } : {}}>
          <span>{event.year} CE</span>
          <span className="text-gray-600">·</span>
          <span>{event.landmark || event.location || ''}</span>
          {event.hijriYear !== undefined && (
            <><span className="text-gray-600">·</span>
              <span>{event.hijriYear > 0 ? `${event.hijriYear} AH` : `${Math.abs(event.hijriYear)} BH`}</span></>
          )}
        </p>
        <p className={`text-gray-200 leading-relaxed md:leading-loose mb-4 md:mb-6 max-w-xl mx-auto ${lang === 'ur' ? 'text-sm md:text-base' : 'text-base md:text-lg'}`}>{narrative}</p>
        <VerseDisplay verse={event.verse} lang={lang} isReciting={isReciting} />
        <RelatedSurahs surahIds={event.relatedSurahs} onNavigate={onNavigate} lang={lang} />
        {/* Hadith / Source reference */}
        {event.sources && (
          <div className="mt-5 mx-auto max-w-lg px-4 py-3 rounded-xl bg-white/5 border border-white/10">
            <p className="text-[10px] uppercase tracking-wider text-amber-400/70 mb-1.5 font-medium">
              {lang === 'ur' ? 'حوالہ' : lang === 'ar' ? 'المصدر' : 'Source'}
            </p>
            <p className="text-xs text-gray-400 leading-relaxed" dir={isRTL ? 'rtl' : 'ltr'}>
              {event.sources[lang] || event.sources.en}
            </p>
          </div>
        )}
        {periodName && (
          <p className="mt-6 text-xs text-gray-500">
            {periodName}
            {period?.chronOrderRange && (
              <span className="text-gray-600"> · {
                lang === 'ur' ? `${period.chronOrderRange[1] - period.chronOrderRange[0]} سے زائد سورتیں نازل ہوئیں`
                  : lang === 'ar' ? `أكثر من ${period.chronOrderRange[1] - period.chronOrderRange[0]} سورة نزلت`
                    : `${period.chronOrderRange[1] - period.chronOrderRange[0]}+ surahs revealed`
              }</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
});

// ============================================================================
// COMPLETION SCREEN
// ============================================================================

const CompletionScreen = memo(function CompletionScreen({ lang, onReplay, onClose }) {
  const isRTL = RTL_LANGS.has(lang);
  const t = {
    en: { title: 'Journey Complete', subtitle: 'From the first words in Cave Hira to the gathering of the Quran into the eternal Book — 114 Surahs, 30 Juzz, 6,236 Ayaat — preserved letter for letter to this day.', replay: 'Replay Journey', exit: 'Close', scenes: '18 Scenes', years: '40 Years', locations: '9 Locations' },
    ur: { title: 'سفر مکمل ہوا', subtitle: 'غارِ حرا کے پہلے الفاظ سے لے کر قرآن کی ابدی کتاب کی شکل میں تدوین تک — ۱۱۴ سورتیں، ۳۰ پارے، ۶,۲۳۶ آیات — حرف بہ حرف آج تک محفوظ۔', replay: 'دوبارہ دیکھیں', exit: 'بند کریں', scenes: '۱۸ مناظر', years: '۴۰ سال', locations: '۹ مقامات' },
    ar: { title: 'اكتملت الرحلة', subtitle: 'من أول كلمات في غار حراء إلى جمع القرآن في الكتاب الخالد — ١١٤ سورة، ٣٠ جزءًا، ٦٬٢٣٦ آية — محفوظ حرفًا بحرف إلى يومنا هذا.', replay: 'أعد الرحلة', exit: 'إغلاق', scenes: '١٨ مشهدًا', years: '٤٠ عامًا', locations: '٩ مواقع' },
  };
  const c = t[lang] || t.en;

  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20 ${lang === 'ur' ? 'font-urdu' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/30 via-black/80 to-black/90 pointer-events-none" />
      <div className="relative z-10 max-w-lg mx-auto tmSceneContentFade">
        {/* Checkmark */}
        <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
          <Icons.Check size={36} color="#f59e0b" />
        </div>
        <h2 className={`font-bold text-white mb-4 ${lang === 'ur' ? 'text-2xl md:text-4xl' : 'text-3xl md:text-5xl'}`}>{c.title}</h2>
        <p className={`text-gray-300 mb-8 leading-relaxed ${lang === 'ur' ? 'text-sm md:text-base' : 'text-base md:text-lg'}`}>{c.subtitle}</p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 mb-10">
          {[{ val: c.scenes, icon: Icons.Layers }, { val: c.years, icon: Icons.Clock }, { val: c.locations, icon: Icons.MapPin }].map((s, i) => (
            <div key={i} className="text-center">
              <s.icon size={16} color="#9ca3af" className="mx-auto mb-1" />
              <p className="text-sm text-gray-300 font-medium">{s.val}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          <button onClick={onReplay}
            className="px-8 py-3 rounded-xl bg-amber-500 text-black font-bold transition-all hover:bg-amber-400 hover:scale-105 active:scale-95">
            {c.replay}
          </button>
          <button onClick={onClose}
            className="px-8 py-3 rounded-xl bg-white/10 text-white font-medium transition-all hover:bg-white/20">
            {c.exit}
          </button>
        </div>
      </div>
    </div>
  );
});

// ============================================================================
// HD TTS NARRATION (Google Cloud TTS → browser fallback)
// ============================================================================

function useHDNarration({ enabled, lang, text, isPlaying, phase, sceneId, recitationDone }) {
  const audioRef = useRef(null);
  const blobUrlRef = useRef(null);
  const activeSceneRef = useRef(null);
  const [isDone, setIsDone] = useState(false);
  const [narrationProgress, setNarrationProgress] = useState(0);
  const [isNarrating, setIsNarrating] = useState(false);
  const progressRAF = useRef(null);

  // Hard stop everything
  const stopAll = useCallback(() => {
    window.speechSynthesis?.cancel();
    if (audioRef.current) {
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
      audioRef.current.pause();
      audioRef.current.removeAttribute('src');
      audioRef.current.load(); // Force release
      audioRef.current = null;
    }
    if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
    cancelAnimationFrame(progressRAF.current);
    setIsNarrating(false);
    setNarrationProgress(0);
  }, []);

  // Browser TTS fallback (handles Safari delayed voice loading)
  const speakBrowser = useCallback((txt, langCode, onDone) => {
    if (!window.speechSynthesis) { onDone?.(); return; }
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(txt);
    utt.lang = TTS_LANG_MAP[langCode] || 'en-US';
    utt.rate = 0.85; utt.pitch = 1; utt.volume = 1;
    utt.onend = () => onDone?.();
    utt.onerror = () => onDone?.();
    const voices = window.speechSynthesis.getVoices() || [];
    const prefix = utt.lang.split('-')[0];
    const match = voices.find(v => v.lang === utt.lang) || voices.find(v => v.lang.startsWith(prefix));
    if (match) {
      utt.voice = match;
    } else if (langCode !== 'en' && voices.length > 0) {
      // No voice for requested language — fall back to English voice
      const enMatch = voices.find(v => v.lang === 'en-US') || voices.find(v => v.lang.startsWith('en'));
      if (enMatch) utt.voice = enMatch;
      utt.lang = 'en-US';
    }
    // Safari: voices may load async; retry once after voiceschanged
    if (voices.length === 0) {
      let spoken = false;
      const doSpeak = () => {
        if (spoken) return;
        spoken = true;
        const v2 = window.speechSynthesis.getVoices();
        const m2 = v2.find(v => v.lang === utt.lang) || v2.find(v => v.lang.startsWith(prefix));
        if (m2) utt.voice = m2;
        window.speechSynthesis.speak(utt);
      };
      window.speechSynthesis.addEventListener('voiceschanged', doSpeak, { once: true });
      setTimeout(doSpeak, 300);
      return;
    }
    window.speechSynthesis.speak(utt);
  }, []);

  // Start tracking audio progress via RAF
  const startProgressTracking = useCallback((audio) => {
    setIsNarrating(true);
    setNarrationProgress(0);
    const tick = () => {
      if (audio && !audio.paused && audio.duration && isFinite(audio.duration)) {
        setNarrationProgress(Math.min(audio.currentTime / audio.duration, 1));
      }
      if (audio && !audio.paused) progressRAF.current = requestAnimationFrame(tick);
    };
    progressRAF.current = requestAnimationFrame(tick);
  }, []);

  // Estimate-based progress for browser TTS (no currentTime/duration available)
  const startBrowserTTSProgress = useCallback((textLen) => {
    setIsNarrating(true);
    setNarrationProgress(0);
    // Rough estimate: ~12 chars/sec for English, ~8 for Urdu/Arabic
    const estimatedDuration = (textLen / 10) * 1000;
    const startTime = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - startTime) / estimatedDuration, 0.95); // Cap at 95% — onDone sets 100%
      setNarrationProgress(p);
      if (p < 0.95) progressRAF.current = requestAnimationFrame(tick);
    };
    progressRAF.current = requestAnimationFrame(tick);
  }, []);

  // Main effect: speak AFTER recitation finishes (or immediately if no recitation)
  // isPlaying is included in deps — pause stops narration, resume restarts it.
  // This is consistent with the scene timer which also restarts on resume.
  useEffect(() => {
    stopAll();
    setIsDone(false);

    // Don't start if disabled, not playing, paused, no text, or recitation still going
    if (!enabled || phase !== 'playing' || !isPlaying || !text || !recitationDone) return;

    activeSceneRef.current = sceneId;
    let cancelled = false;

    const markDone = () => {
      if (!cancelled && activeSceneRef.current === sceneId) {
        cancelAnimationFrame(progressRAF.current);
        setNarrationProgress(1);
        setIsNarrating(false);
        // Null out audioRef so stale refs can't replay
        if (audioRef.current) {
          audioRef.current.onended = null;
          audioRef.current.onerror = null;
          audioRef.current = null;
        }
        setIsDone(true);
      }
    };

    const timer = setTimeout(async () => {
      if (cancelled || activeSceneRef.current !== sceneId) return;

      // Always try the TTS API first (works in both dev and prod via /api/tts)
      // Falls back to browser SpeechSynthesis if API fails
      try {
        const res = await fetch(`/api/tts?text=${encodeURIComponent(text)}&lang=${lang}&surah=1`);
        if (cancelled || activeSceneRef.current !== sceneId) return;
        if (res.ok) {
          const blob = await res.blob();
          if (cancelled || activeSceneRef.current !== sceneId || blob.size < 100) {
            if (!cancelled && activeSceneRef.current === sceneId) {
              startBrowserTTSProgress(text.length);
              speakBrowser(text, lang, markDone);
            }
            return;
          }
          const url = URL.createObjectURL(blob);
          blobUrlRef.current = url;
          const audio = new Audio(url);
          audioRef.current = audio;
          audio.onended = () => { if (!cancelled && activeSceneRef.current === sceneId) markDone(); };
          audio.onerror = () => {
            if (!cancelled && activeSceneRef.current === sceneId) {
              startBrowserTTSProgress(text.length);
              speakBrowser(text, lang, markDone);
            }
          };
          await audio.play();
          if (!cancelled) startProgressTracking(audio);
        } else {
          if (!cancelled && activeSceneRef.current === sceneId) {
            startBrowserTTSProgress(text.length);
            speakBrowser(text, lang, markDone);
          }
        }
      } catch {
        if (!cancelled && activeSceneRef.current === sceneId) {
          startBrowserTTSProgress(text.length);
          speakBrowser(text, lang, markDone);
        }
      }
    }, 400);

    return () => { cancelled = true; clearTimeout(timer); stopAll(); };
  }, [enabled, lang, sceneId, phase, isPlaying, stopAll, speakBrowser, text, recitationDone, startProgressTracking, startBrowserTTSProgress]);

  // Hard cleanup on unmount / visibility change
  useEffect(() => stopAll, [stopAll]);

  return { stopAll, isDone, narrationProgress, isNarrating };
}

// ============================================================================
// VERSE RECITATION AUDIO
// ============================================================================

function useVerseRecitation({ enabled, verseRef, isPlaying, phase, sceneId }) {
  const audioRef = useRef(null);
  const [isReciting, setIsReciting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const activeSceneRef = useRef(null);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.onplay = null;
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
      audioRef.current.pause();
      audioRef.current.removeAttribute('src');
      audioRef.current.load();
      audioRef.current = null;
    }
    setIsReciting(false);
  }, []);

  // Main effect: play on scene change (NOT on isPlaying — that's pause/resume)
  useEffect(() => {
    stopAudio();
    // If recitation is disabled or no verse, mark immediately done so narration can start
    if (!enabled || phase !== 'playing' || !verseRef) {
      setIsDone(true);
      return;
    }

    const parsed = parseVerseRef(verseRef);
    if (!parsed) { setIsDone(true); return; }

    setIsDone(false);
    activeSceneRef.current = sceneId;
    let cancelled = false;

    const timer = setTimeout(() => {
      if (cancelled || activeSceneRef.current !== sceneId) return;
      const audio = new Audio(getAudioUrl(parsed.surah, parsed.ayah));
      audioRef.current = audio;
      audio.volume = 0.5;
      audio.onplay = () => { if (!cancelled && activeSceneRef.current === sceneId) setIsReciting(true); };
      audio.onended = () => { if (!cancelled) { setIsReciting(false); audioRef.current = null; setIsDone(true); } };
      audio.onerror = () => { if (!cancelled) { setIsReciting(false); audioRef.current = null; setIsDone(true); } };
      audio.play().catch(() => { if (!cancelled) { setIsReciting(false); audioRef.current = null; setIsDone(true); } });
    }, 2000);

    return () => { cancelled = true; clearTimeout(timer); stopAudio(); };
  }, [enabled, sceneId, phase, verseRef, stopAudio]);

  // Pause/resume (separate from scene change)
  useEffect(() => {
    if (!audioRef.current || phase !== 'playing') return;
    if (!isPlaying) {
      if (!audioRef.current.paused) audioRef.current.pause();
    } else {
      if (audioRef.current.paused && audioRef.current.src) audioRef.current.play().catch(() => {});
    }
  }, [isPlaying, phase]);

  // Hard cleanup
  useEffect(() => stopAudio, [stopAudio]);

  return { isReciting, isDone, stopAudio };
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

function TimeMachine({ isVisible, onClose, onNavigateToVerse }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem(LS_KEY) || 'en'; } catch { return 'en'; }
  });
  const [phase, setPhase] = useState('intro'); // 'intro' | 'playing' | 'complete'
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [narrationOn, setNarrationOn] = useState(false);
  const [verseAudioOn, setVerseAudioOn] = useState(true);
  const [mapExpanded, setMapExpanded] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  const timerRef = useRef(null);
  const progressRAF = useRef(null);
  const progressStart = useRef(0);
  const touchStartRef = useRef(null);

  const events = SEERAH_EVENTS;
  const totalScenes = events.length;
  const currentEvent = events[currentScene];
  const period = currentEvent && currentEvent.category !== 'compilation' ? getPeriodForChronOrder(currentEvent.chronOrderApprox) : null;
  const narrativeText = currentEvent?.narrative?.[lang] || currentEvent?.narrative?.en || '';

  // Verse recitation audio (plays first)
  const { isReciting, isDone: recitationDone, stopAudio: stopRecitation } = useVerseRecitation({
    enabled: verseAudioOn, verseRef: currentEvent?.verse?.ref, isPlaying, phase, sceneId: currentEvent?.id,
  });

  // HD TTS narration (waits for recitation to finish before starting)
  const { stopAll: stopNarration, isDone: narrationDone, narrationProgress, isNarrating } = useHDNarration({
    enabled: narrationOn, lang, text: narrativeText, isPlaying, phase, sceneId: currentEvent?.id, recitationDone,
  });

  const handleLangChange = useCallback((l) => {
    setLang(l);
    try { localStorage.setItem(LS_KEY, l); } catch { /* noop */ }
  }, []);

  const goToScene = useCallback((index, animate = true) => {
    if (index < 0 || index >= totalScenes || index === currentScene) return;
    if (animate) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentScene(index);
        setProgress(0);
        progressStart.current = Date.now();
        setTimeout(() => setTransitioning(false), TRANSITION_DURATION);
      }, TRANSITION_DURATION);
    } else {
      setCurrentScene(index); setProgress(0); progressStart.current = Date.now();
    }
  }, [totalScenes, currentScene]);

  const nextScene = useCallback(() => {
    if (currentScene < totalScenes - 1) goToScene(currentScene + 1);
    else { stopNarration(); stopRecitation(); setIsPlaying(false); setPhase('complete'); }
  }, [currentScene, totalScenes, goToScene, stopNarration, stopRecitation]);

  const prevScene = useCallback(() => {
    if (currentScene > 0) goToScene(currentScene - 1);
  }, [currentScene, goToScene]);

  // Auto-dismiss controls hint after 5s
  useEffect(() => {
    if (phase === 'playing' && showHint) {
      const t = setTimeout(() => setShowHint(false), 5000);
      return () => clearTimeout(t);
    }
  }, [phase, showHint]);

  // Track whether timer has elapsed (for narration-aware auto-advance)
  const [timerElapsed, setTimerElapsed] = useState(false);

  // Auto-play timer — sets timerElapsed when the scene's time is up
  useEffect(() => {
    setTimerElapsed(false);
    if (phase !== 'playing' || !isPlaying) {
      clearTimeout(timerRef.current); cancelAnimationFrame(progressRAF.current); return;
    }
    const effectiveDuration = SCENE_DURATION / speed;
    progressStart.current = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - progressStart.current) / effectiveDuration, 1);
      setProgress(p);
      if (p < 1) progressRAF.current = requestAnimationFrame(tick);
    };
    progressRAF.current = requestAnimationFrame(tick);
    timerRef.current = setTimeout(() => setTimerElapsed(true), effectiveDuration);
    return () => { clearTimeout(timerRef.current); cancelAnimationFrame(progressRAF.current); };
  }, [phase, isPlaying, currentScene, speed]);

  // Auto-advance: wait for BOTH timer AND narration (if narration is on)
  useEffect(() => {
    if (!timerElapsed || !isPlaying || phase !== 'playing') return;
    // If narration is on, wait for it to finish
    if (narrationOn && !narrationDone) return;
    nextScene();
  }, [timerElapsed, isPlaying, phase, narrationOn, narrationDone, nextScene]);

  // Keyboard
  useEffect(() => {
    if (!isVisible) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') { onClose(); }
      else if ((phase === 'intro' || phase === 'complete') && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        handleBegin();
      }
      else if (phase === 'playing') {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); nextScene(); }
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prevScene(); }
        else if (e.key === ' ') { e.preventDefault(); setIsPlaying(p => !p); }
        else if (e.key === 'n' || e.key === 'N') { setNarrationOn(n => !n); }
        else if (e.key === 'v' || e.key === 'V') { setVerseAudioOn(v => !v); }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isVisible, phase, onClose, nextScene, prevScene]);

  // Touch / swipe
  const handleTouchStart = useCallback((e) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (!touchStartRef.current || phase !== 'playing') return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 60) {
      if (RTL_LANGS.has(lang) ? dx > 0 : dx < 0) nextScene(); else prevScene();
    }
    touchStartRef.current = null;
  }, [phase, lang, nextScene, prevScene]);

  const cycleSpeed = useCallback(() => {
    setSpeed(s => SPEED_OPTIONS[(SPEED_OPTIONS.indexOf(s) + 1) % SPEED_OPTIONS.length]);
  }, []);

  const handleNavigateToSurah = useCallback((surahId) => { onNavigateToVerse?.(surahId, 1); }, [onNavigateToVerse]);

  const handleBegin = useCallback(() => {
    setPhase('playing'); setCurrentScene(0); setProgress(0); setIsPlaying(true);
    progressStart.current = Date.now();
  }, []);

  const handleClose = useCallback(() => {
    stopNarration();
    stopRecitation();
    // Belt-and-suspenders: kill any lingering speechSynthesis globally
    window.speechSynthesis?.cancel();
    onClose();
  }, [onClose, stopNarration, stopRecitation]);

  // Force-stop all audio when component becomes invisible or unmounts
  useEffect(() => {
    if (!isVisible) {
      stopNarration();
      stopRecitation();
      window.speechSynthesis?.cancel();
    }
    return () => {
      stopNarration();
      stopRecitation();
      window.speechSynthesis?.cancel();
    };
  }, [isVisible, stopNarration, stopRecitation]);

  const bgStyle = useMemo(() => {
    if (phase === 'intro' || phase === 'complete') return { background: 'linear-gradient(135deg, #0f0326 0%, #0f172a 50%, #1e1b4b 100%)' };
    const grad = currentEvent?.bgGradient || ['#0f172a', '#1e1b4b', '#0f0326'];
    return { background: `linear-gradient(135deg, ${grad[0]} 0%, ${grad[1]} 50%, ${grad[2]} 100%)`, transition: 'background 1.2s ease-in-out' };
  }, [phase, currentEvent]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col overflow-hidden select-none"
      style={bgStyle} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <button onClick={handleClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-200"
          aria-label="Close">
          <Icons.X size={18} color="#fff" />
        </button>
        <div className="flex items-center gap-1.5">
          {LANGUAGES.map((l) => (
            <button key={l} onClick={() => handleLangChange(l)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${lang === l ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500 hover:text-gray-300'}`}>
              {LANG_LABELS[l]}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {phase === 'playing' && (
            <span className="text-xs text-gray-500 tabular-nums">
              {currentScene + 1}/{totalScenes}
            </span>
          )}
          <button onClick={() => setShowAbout(true)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-all"
            aria-label="About" title="About this feature">
            <Icons.HelpCircle size={16} color="#9ca3af" />
          </button>
        </div>
      </div>

      {/* About modal */}
      {showAbout && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setShowAbout(false)}>
          <div className={`relative max-w-md w-[92vw] max-h-[80vh] overflow-y-auto bg-slate-900/95 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 shadow-2xl ${lang === 'ur' ? 'font-urdu' : ''}`} onClick={e => e.stopPropagation()} dir={RTL_LANGS.has(lang) ? 'rtl' : 'ltr'}>
            <button onClick={() => setShowAbout(false)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <Icons.X size={14} color="#fff" />
            </button>
            {lang === 'ur' ? (
              <>
                <h3 className="text-base font-bold text-white mb-3">سفرِ نزولِ قرآن</h3>
                <div className="text-xs text-gray-300 leading-loose space-y-3">
                  <p>یہ ایک <strong className="text-amber-400">فلمی دستاویزی تجربہ</strong> ہے جو قرآنِ مجید کے ۲۳ سالہ سفرِ نزول کو آپ کے سامنے پیش کرتا ہے — غارِ حرا میں پہلی وحی (۶۱۰ء) سے لے کر صحابہ کرامؓ کے ہاتھوں قرآن کی کتابی تدوین (۶۵۰ء) تک۔</p>
                  <p><strong className="text-white">۱۸ مناظر</strong> میں آپ دیکھیں گے: نزولِ وحی، خفیہ و اعلانیہ دعوت، ہجرتِ نبوی، غزوات، فتحِ مکّہ، حجّۃ الوداع، اور پھر <strong className="text-cyan-400">قرآن کی کتابی شکل میں تدوین</strong> — حضرت ابوبکر صدیقؓ کا جمعِ قرآن، حضرت عثمان ذوالنورینؓ کا معیاری مصحف، اور ۱۱۴ سورتوں، ۳۰ پاروں، ۶,۲۳۶ آیات کی حتمی ترتیب۔</p>
                  <p><strong className="text-white">خصوصیات:</strong></p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1.5">
                    <li>ہر واقعے کے ساتھ <strong>قرآنی آیت</strong> اور عربی تلاوت</li>
                    <li><strong>خلائی نقشہ</strong> — ہر مقام کا حقیقی جغرافیائی نظارہ</li>
                    <li>اردو، عربی اور انگریزی تینوں زبانوں میں <strong>صوتی بیان</strong></li>
                    <li>تدوینِ قرآن کے مناظر میں <strong>صحیح البخاری</strong> کے حوالہ جات</li>
                    <li>انگلی پھسلا کر، کی بورڈ، یا بٹنوں سے آگے پیچھے جائیں</li>
                  </ul>
                  <p className="text-gray-500 text-[10px] mt-3">تمام تاریخی معلومات صحیح البخاری، صحیح مسلم، اور امام سیوطیؒ کی الاتقان فی علوم القرآن سے ماخوذ ہیں۔</p>
                </div>
              </>
            ) : lang === 'ar' ? (
              <>
                <h3 className="text-lg font-bold text-white mb-3">آلة الزمن — رحلة الوحي</h3>
                <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                  <p>تجربة <strong className="text-amber-400">وثائقية سينمائية</strong> تروي رحلة نزول القرآن الكريم على مدى ٢٣ عامًا — من أول وحي في غار حراء (٦١٠م) إلى جمع القرآن في المصحف على يد الصحابة (٦٥٠م).</p>
                  <p><strong className="text-white">١٨ مشهدًا</strong> تشمل: بداية الوحي، الدعوة السرية والجهرية، الهجرة، الغزوات، فتح مكة، حجة الوداع، ثم <strong className="text-cyan-400">جمع القرآن في كتاب</strong> — جمع أبي بكر، مصحف عثمان، والترتيب النهائي: ١١٤ سورة، ٣٠ جزءًا، ٦٬٢٣٦ آية.</p>
                  <p><strong className="text-white">المميزات:</strong></p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li><strong>آية قرآنية</strong> لكل حدث مع تلاوة عربية</li>
                    <li><strong>خريطة بالأقمار الصناعية</strong> — المواقع الحقيقية لكل حدث</li>
                    <li><strong>سرد صوتي</strong> بثلاث لغات</li>
                    <li><strong>مراجع من صحيح البخاري</strong> في مشاهد جمع القرآن</li>
                    <li>التنقل بالسحب أو لوحة المفاتيح أو الأزرار</li>
                  </ul>
                  <p className="text-gray-500 text-xs mt-3">جميع المعلومات التاريخية مستندة إلى صحيح البخاري وصحيح مسلم والإتقان في علوم القرآن.</p>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-bold text-white mb-3">Time Machine — Journey of Revelation</h3>
                <div className="text-sm text-gray-300 leading-relaxed space-y-3">
                  <p>A <strong className="text-amber-400">cinematic documentary experience</strong> that tells the 23-year story of the Quran's revelation — from the first words in Cave Hira (610 CE) to the compilation of the Mushaf by the Sahaba (650 CE).</p>
                  <p>Across <strong className="text-white">18 scenes</strong>, you will witness: the first revelation, secret and open dawah, the Hijra, major battles, the conquest of Makkah, the Farewell Pilgrimage, and then <strong className="text-cyan-400">how the Quran was gathered into book form</strong> — Abu Bakr's compilation, Uthman's standardized Mushaf, and the final structure of 114 Surahs, 30 Juzz, and 6,236 Ayaat.</p>
                  <p><strong className="text-white">Features:</strong></p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1">
                    <li><strong>Quranic verse</strong> for each event with Arabic recitation</li>
                    <li><strong>Satellite map</strong> — real geographic view of each location</li>
                    <li><strong>Audio narration</strong> in all three languages</li>
                    <li><strong>Sahih al-Bukhari references</strong> for Quran compilation scenes</li>
                    <li>Navigate by swipe, keyboard, or control buttons</li>
                  </ul>
                  <p className="text-gray-500 text-xs mt-3">All historical information is based on Sahih al-Bukhari, Sahih Muslim, and Al-Itqan fi Ulum al-Quran by Imam al-Suyuti.</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <FloatingParticles mood={phase === 'intro' || phase === 'complete' ? 'mystical' : currentEvent?.mood} />

      {/* INTRO */}
      {phase === 'intro' && <IntroScreen lang={lang} onChangeLang={handleLangChange} onBegin={handleBegin} />}

      {/* COMPLETE */}
      {phase === 'complete' && <CompletionScreen lang={lang} onReplay={handleBegin} onClose={handleClose} />}

      {/* PLAYING */}
      {phase === 'playing' && (
        <>
          {/* First-time controls hint */}
          {showHint && currentScene === 0 && (
            <div className="absolute inset-0 z-[60] flex items-center justify-center pointer-events-none" onClick={() => setShowHint(false)}>
              <div className={`bg-black/70 backdrop-blur-sm rounded-2xl px-5 py-4 max-w-sm mx-4 text-center pointer-events-auto tmSceneContentFade ${lang === 'ur' ? 'font-urdu' : ''}`}>
                <p className={`text-white font-medium mb-3 ${lang === 'ur' ? 'text-xs' : 'text-sm'}`}>
                  {lang === 'ur' ? 'استعمال کا طریقہ' : lang === 'ar' ? 'عناصر التحكم' : 'Controls'}
                </p>
                <div className={`grid grid-cols-2 gap-2 text-gray-300 ${lang === 'ur' ? 'text-[10px]' : 'text-xs'}`}>
                  <div className="flex items-center gap-2"><Icons.ChevronLeft size={12} color="#9ca3af" /><span>{lang === 'ur' ? 'پچھلا / اگلا منظر' : lang === 'ar' ? 'المشهد السابق / التالي' : 'Prev / Next scene'}</span></div>
                  <div className="flex items-center gap-2"><Icons.Play size={12} color="#9ca3af" /><span>{lang === 'ur' ? 'چلائیں / روکیں' : lang === 'ar' ? 'تشغيل / إيقاف' : 'Play / Pause'}</span></div>
                  <div className="flex items-center gap-2"><Icons.Volume2 size={12} color="#f59e0b" /><span>{lang === 'ur' ? 'صوتی بیان' : lang === 'ar' ? 'السرد الصوتي' : 'Narration audio'}</span></div>
                  <div className="flex items-center gap-2"><Icons.BookOpen size={12} color="#a855f7" /><span>{lang === 'ur' ? 'آیت کی تلاوت' : lang === 'ar' ? 'تلاوة الآية' : 'Verse recitation'}</span></div>
                  <div className="flex items-center gap-2"><Icons.MapPin size={12} color="#9ca3af" /><span>{lang === 'ur' ? 'نقشے پر دبائیں' : lang === 'ar' ? 'توسيع الخريطة' : 'Tap map to expand'}</span></div>
                  <div className="flex items-center gap-2"><Icons.Maximize size={12} color="#9ca3af" /><span>{lang === 'ur' ? 'انگلی پھسلائیں' : lang === 'ar' ? 'اسحب للتنقل' : 'Swipe to navigate'}</span></div>
                </div>
                <button onClick={() => setShowHint(false)} className={`mt-4 px-5 py-1.5 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors ${lang === 'ur' ? 'text-[10px]' : 'text-xs'}`}>
                  {lang === 'ur' ? 'سمجھ آ گئی' : lang === 'ar' ? 'فهمت' : 'Got it'}
                </button>
              </div>
            </div>
          )}

          <SceneMiniMap event={currentEvent} onExpand={() => setMapExpanded(true)} />
          {mapExpanded && (
            <ExpandedMap
              event={currentEvent}
              events={events}
              activeIndex={currentScene}
              onClose={() => setMapExpanded(false)}
              onJump={(i) => { goToScene(i); setMapExpanded(false); }}
            />
          )}

          <div className={`flex-1 flex flex-col ${transitioning ? 'tmSceneExit' : 'tmSceneEnter'}`}>
            <SceneContent event={currentEvent} lang={lang} period={period} onNavigate={handleNavigateToSurah} isReciting={isReciting} />
          </div>

          {/* Bottom controls */}
          <div className="absolute bottom-0 left-0 right-0 z-30 pb-2 md:pb-5 px-3 md:px-6 bg-gradient-to-t from-black via-black/95 to-transparent pt-10 md:pt-12">
            {/* Single seekbar — shows scene timer OR narration progress */}
            <div className="w-full h-0.5 bg-white/10 rounded-full mb-1.5 md:mb-2 overflow-hidden">
              {narrationOn && isNarrating ? (
                <div className="h-full bg-amber-400 rounded-full transition-none shadow-[0_0_6px_rgba(245,158,11,0.4)]"
                  style={{ width: `${narrationProgress * 100}%` }} />
              ) : (
                <div className="h-full bg-amber-400/60 rounded-full transition-none" style={{ width: `${progress * 100}%` }} />
              )}
            </div>

            <div className="mb-1.5 md:mb-2 hidden sm:block">
              <VisualTimeline events={events} activeIndex={currentScene} onJump={(i) => goToScene(i)} lang={lang} />
            </div>
            <div className="flex sm:hidden justify-center gap-0.5 mb-1.5 overflow-x-auto py-0.5">
              {events.map((ev, i) => (
                <button key={ev.id} onClick={() => goToScene(i)}
                  className={`rounded-full transition-all duration-500 flex-shrink-0 ${
                    i === currentScene ? 'w-4 h-1.5 bg-amber-400 shadow-sm shadow-amber-400/40'
                      : i < currentScene ? 'w-1.5 h-1.5 bg-white/40' : 'w-1.5 h-1.5 bg-white/15'
                  }`} />
              ))}
            </div>

            <div className="flex items-center justify-center gap-1.5 md:gap-2">
              <button onClick={prevScene} disabled={currentScene === 0}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all disabled:opacity-30"
                title="Previous scene">
                <Icons.ChevronLeft size={14} color="#fff" />
              </button>
              <button onClick={() => setIsPlaying(p => !p)}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-all"
                title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}>
                {isPlaying ? <Icons.Pause size={14} color="#fff" /> : <Icons.Play size={14} color="#fff" />}
              </button>
              <button onClick={nextScene} disabled={currentScene === totalScenes - 1}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all disabled:opacity-30"
                title="Next scene">
                <Icons.ChevronRight size={14} color="#fff" />
              </button>
              <button onClick={cycleSpeed}
                className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-white/10 hover:bg-white/20 text-[10px] md:text-xs text-gray-300 font-medium tabular-nums transition-all"
                title="Playback speed">
                {speed}x
              </button>
              {/* Narration toggle */}
              <button onClick={() => setNarrationOn(n => !n)}
                className={`relative w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all ${narrationOn ? 'bg-amber-500/30 text-amber-400' : 'bg-white/10 hover:bg-white/20 text-gray-400'}`}
                title={narrationOn ? 'Narration ON (N)' : 'Narration OFF (N)'}>
                {narrationOn ? <Icons.Volume2 size={12} color="currentColor" /> : <Icons.VolumeX size={12} color="currentColor" />}
              </button>
              {/* Verse recitation toggle */}
              <button onClick={() => setVerseAudioOn(v => !v)}
                className={`relative w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all ${verseAudioOn ? 'bg-purple-500/30 text-purple-400' : 'bg-white/10 hover:bg-white/20 text-gray-400'}`}
                title={verseAudioOn ? 'Verse audio ON (V)' : 'Verse audio OFF (V)'}>
                <Icons.BookOpen size={12} color="currentColor" />
              </button>
            </div>
            {/* Labels row — hidden on small mobile */}
            <div className="hidden sm:flex items-center justify-center gap-6 mt-1.5 text-[9px] text-gray-500">
              <span>Navigate</span>
              <span>{narrationOn ? 'Narrating' : 'Narration'}</span>
              <span>{verseAudioOn ? 'Reciting' : 'Recitation'}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default memo(TimeMachine);
