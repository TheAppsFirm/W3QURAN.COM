/**
 * KidsDuaJourney.jsx
 * Animated dua learning feature for Kids Mode.
 * Grid of 30 daily duas with animated SVG scenes, audio, and translations.
 */

import React, { useState, useEffect, useRef, useCallback, useMemo, lazy, Suspense } from 'react';
import { Icons } from '../common/Icons';
// DuaScenes (SVG) no longer used - all duas use 3D scenes now
import KidsPremiumGate from './KidsPremiumGate';

// Lazy-load 3D scene
const DuaScene3D = lazy(() => import('./components/DuaScene3D'));
// Preload the 3D chunk in background as soon as this module loads
const preload3D = () => import('./components/DuaScene3D');
if (typeof window !== 'undefined') {
  // Start preloading after a short idle delay so it doesn't block initial render
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(preload3D);
  } else {
    setTimeout(preload3D, 2000);
  }
}
import { KIDS_DUAS, DUA_CATEGORIES, getDuasByCategory } from './data/duaData';

// ============================================================
// HELPERS
// ============================================================

const loadLearnedDuas = () => {
  try {
    return JSON.parse(localStorage.getItem('kids_learned_duas') || '[]');
  } catch { return []; }
};

const saveLearnedDuas = (ids) => {
  try { localStorage.setItem('kids_learned_duas', JSON.stringify(ids)); } catch {}
};

// ============================================================
// DUA GRID CARD
// ============================================================

const DuaGridCard = React.memo(({ dua, isLearned, isLocked, onClick, index }) => (
  <button
    onClick={onClick}
    className="relative w-full text-left rounded-2xl overflow-hidden transition-all duration-300 active:scale-95 hover:scale-[1.02]"
    style={{
      background: `linear-gradient(135deg, ${dua.color}22, ${dua.color}44)`,
      border: `1.5px solid ${dua.color}55`,
      animationDelay: `${index * 50}ms`,
    }}
  >
    <div className="p-3 sm:p-4">
      {/* Emoji */}
      <div className="text-2xl sm:text-3xl mb-1">{dua.emoji}</div>
      {/* Name */}
      <div className="text-white text-xs sm:text-sm font-bold leading-tight mb-1 line-clamp-1">{dua.name}</div>
      {/* Arabic snippet */}
      <div className="text-white/60 text-[10px] sm:text-xs font-arabic leading-relaxed line-clamp-1 direction-rtl" dir="rtl">
        {dua.arabic.length > 30 ? dua.arabic.slice(0, 30) + '...' : dua.arabic}
      </div>
    </div>

    {/* Learned badge */}
    {isLearned && (
      <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
        <Icons.Check className="w-3 h-3 text-white" />
      </div>
    )}

    {/* Premium lock */}
    {isLocked && (
      <div className="absolute inset-0 z-10 rounded-2xl bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center gap-1">
        <Icons.Lock className="w-5 h-5 text-white/80" />
        <span className="text-white/80 text-[10px] font-bold">PREMIUM</span>
      </div>
    )}
  </button>
));

// ============================================================
// CATEGORY TAB
// ============================================================

const CategoryTab = ({ category, isActive, onClick, count }) => (
  <button
    onClick={onClick}
    className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
      isActive
        ? 'bg-white/25 text-white scale-105'
        : 'bg-white/10 text-white/60 hover:bg-white/15'
    }`}
  >
    {category ? `${category.emoji} ${category.name}` : `🤲 All`}
    {count > 0 && <span className="ml-1 text-[10px] opacity-60">({count})</span>}
  </button>
);

// ============================================================
// CELEBRATION MODAL
// ============================================================

const CelebrationModal = ({ duaName, onClose }) => {
  // Play celebration sound
  useEffect(() => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = freq;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.15 + 0.5);
        osc.start(ctx.currentTime + i * 0.15);
        osc.stop(ctx.currentTime + i * 0.15 + 0.5);
      });
      return () => ctx.close();
    } catch {}
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'][i % 6],
              left: `${Math.random() * 100}%`,
              top: -10,
              animation: `confettiFall ${2 + Math.random() * 2}s linear ${Math.random() * 0.5}s forwards`,
            }}
          />
        ))}
      </div>

      <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-6 sm:p-8 mx-4 max-w-sm text-center shadow-2xl transform animate-bounce-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="text-5xl mb-3">🌟</div>
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-2">Mashallah!</h2>
        <p className="text-white/80 text-sm mb-1">You learned a new dua!</p>
        <p className="text-white font-bold text-base mb-4">{duaName}</p>
        <button
          onClick={onClose}
          className="px-6 py-2.5 bg-white/20 hover:bg-white/30 text-white font-bold rounded-full transition-all"
        >
          Continue Learning
        </button>
      </div>

      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes bounce-in {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in { animation: bounce-in 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
};

// ============================================================
// DUA DETAIL VIEW (Animation + Text + Audio)
// ============================================================

const DuaDetailView = ({ dua, onBack, onNext, onPrev, hasNext, hasPrev, isLearned, onLearn }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const seekBarRef = useRef(null);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, []);

  // Stop audio when dua changes
  useEffect(() => {
    stopAudio();
  }, [dua.id]);

  const stopAudio = () => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.removeAttribute('src'); audioRef.current = null; }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsLoading(false);
    setCurrentTime(0);
    setDuration(0);
  };

  // Strategy 2: Browser Speech Synthesis fallback
  const playWithBrowserTTS = useCallback((text) => {
    if (!window.speechSynthesis) { setIsPlaying(false); setIsLoading(false); return; }

    // Prime speech synthesis (iOS fix)
    try {
      const primer = new SpeechSynthesisUtterance('');
      primer.volume = 0;
      window.speechSynthesis.speak(primer);
    } catch {}

    const doSpeak = () => {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = window.speechSynthesis.getVoices();
        const arabicVoice = voices.find(v =>
          v.lang === 'ar-SA' || v.lang === 'ar-AE' || v.lang.startsWith('ar')
        );
        if (arabicVoice) utterance.voice = arabicVoice;
        utterance.lang = 'ar-SA';
        utterance.rate = 0.6;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        utterance.onstart = () => { setIsPlaying(true); setIsLoading(false); };
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
      } catch { setIsPlaying(false); setIsLoading(false); }
    };

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      doSpeak();
    } else {
      window.speechSynthesis.addEventListener('voiceschanged', () => doSpeak(), { once: true });
      setTimeout(doSpeak, 300);
    }
  }, []);

  // Play audio helper: tries a URL, returns true on success
  const tryPlayUrl = useCallback((url, onFail) => {
    try {
      const audio = new Audio();
      audioRef.current = audio;
      audio.volume = 1.0;
      audio.preload = 'auto';

      audio.oncanplaythrough = () => {
        setIsLoading(false);
        audio.play().catch(() => onFail?.());
      };
      audio.onended = () => { setIsPlaying(false); setCurrentTime(0); };
      audio.onerror = () => onFail?.();
      audio.ontimeupdate = () => setCurrentTime(audio.currentTime);
      audio.onloadedmetadata = () => setDuration(audio.duration);
      audio.src = url;
      audio.load();
    } catch {
      onFail?.();
    }
  }, []);

  // Main play: Local MP3 → Google TTS → Browser Speech Synthesis
  const playAudio = useCallback(() => {
    if (isPlaying) { stopAudio(); return; }
    const text = dua.arabic;
    if (!text) return;

    // Stop any current playback
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.removeAttribute('src'); audioRef.current = null; }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    setIsLoading(true);
    setIsPlaying(true);

    const ttsUrl = `/api/tts?text=${encodeURIComponent(text)}&lang=ar`;
    const fallbackToTTS = () => tryPlayUrl(ttsUrl, () => playWithBrowserTTS(text));

    // Strategy 1: Local MP3 file (human voice)
    if (dua.audioUrl) {
      tryPlayUrl(dua.audioUrl, fallbackToTTS);
    } else {
      // Strategy 2: Google TTS → Strategy 3: Browser Speech Synthesis
      fallbackToTTS();
    }
  }, [dua.arabic, dua.audioUrl, isPlaying, playWithBrowserTTS, tryPlayUrl]);

  // Seek handler
  const handleSeek = useCallback((e) => {
    if (!audioRef.current || !duration) return;
    const bar = seekBarRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    audioRef.current.currentTime = pct * duration;
    setCurrentTime(pct * duration);
  }, [duration]);

  // Desktop drag support
  const handleMouseDown = useCallback((e) => {
    handleSeek(e);
    const onMove = (me) => handleSeek(me);
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }, [handleSeek]);

  // Format seconds to m:ss
  const formatTime = (s) => {
    if (!s || !isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-[9998] flex flex-col bg-gray-900 overflow-hidden">
      {/* Top navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3">
        <button onClick={() => { stopAudio(); onBack(); }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white text-sm font-medium">
          <Icons.ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back</span>
        </button>
        <div className="text-white text-xs sm:text-sm font-bold text-center flex-1 mx-2 truncate">
          {dua.emoji} {dua.name}
        </div>
        <div className="w-16" /> {/* Spacer */}
      </div>

      {/* Animated 3D scene for all duas */}
      <div className="pt-10">
        <Suspense fallback={
          <div className="w-full flex items-center justify-center rounded-b-3xl overflow-hidden"
            style={{ height: '35vh', minHeight: 200, maxHeight: 320, background: 'linear-gradient(180deg, #1a4731 0%, #065F46 40%, #10B981 100%)' }}>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full border-3 border-white/10" />
                <div className="absolute inset-0 rounded-full border-3 border-t-emerald-300 animate-spin" />
              </div>
              <p className="text-white/60 text-xs font-medium">Loading 3D Scene</p>
            </div>
          </div>
        }>
          <DuaScene3D sceneId={dua.sceneId} isActive={true} isAudioPlaying={isPlaying} duaId={dua.id} />
        </Suspense>
      </div>

      {/* Dua content card */}
      <div className="flex-1 overflow-y-auto -mt-4 relative z-10">
        <div className="bg-gray-900/95 backdrop-blur-sm rounded-t-3xl min-h-full px-4 sm:px-6 pt-6 pb-32">
          {/* Arabic text */}
          <div className="text-center mb-4">
            <p className="text-white text-xl sm:text-2xl leading-[2] font-arabic" dir="rtl"
              style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}>
              {dua.arabic}
            </p>
          </div>

          {/* Transliteration */}
          <p className="text-white/50 text-xs sm:text-sm text-center italic mb-4">
            {dua.transliteration}
          </p>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-white/10 mx-auto mb-4" />

          {/* English translation */}
          <div className="mb-3">
            <span className="text-[10px] uppercase tracking-wider text-white/30 font-bold">English</span>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mt-1">
              {dua.translation.en}
            </p>
          </div>

          {/* Urdu translation */}
          <div className="mb-4">
            <span className="text-[10px] uppercase tracking-wider text-white/30 font-bold">اردو</span>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-1 font-urdu" dir="rtl"
              style={{ fontFamily: "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif" }}>
              {dua.translation.ur}
            </p>
          </div>

          {/* Reference */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold ${
              dua.referenceType === 'quran'
                ? 'bg-emerald-500/20 text-emerald-400'
                : 'bg-amber-500/20 text-amber-400'
            }`}>
              {dua.referenceType === 'quran' ? '📖' : '📜'} {dua.reference}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent pt-8 pb-4 px-4">
        {/* Navigation + Audio */}
        <div className="flex items-center justify-center gap-4 mb-3">
          {/* Previous */}
          <button onClick={() => { stopAudio(); onPrev(); }} disabled={!hasPrev}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              hasPrev ? 'bg-white/15 text-white active:scale-90' : 'bg-white/5 text-white/20'
            }`}>
            <Icons.ChevronLeft className="w-5 h-5" />
          </button>

          {/* Play audio */}
          <button onClick={playAudio} disabled={isLoading}
            className="w-14 h-14 rounded-full flex items-center justify-center transition-all active:scale-90 shadow-lg"
            style={{ background: dua.color }}>
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : isPlaying ? (
              <Icons.Pause className="w-6 h-6 text-white" />
            ) : (
              <Icons.Volume2 className="w-6 h-6 text-white" />
            )}
          </button>

          {/* Next */}
          <button onClick={() => { stopAudio(); onNext(); }} disabled={!hasNext}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              hasNext ? 'bg-white/15 text-white active:scale-90' : 'bg-white/5 text-white/20'
            }`}>
            <Icons.ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Audio seek bar */}
        {(isPlaying || currentTime > 0) && duration > 0 && (
          <div className="flex items-center gap-2.5 mb-3 px-1">
            <span className="text-white/50 text-[10px] font-mono w-8 text-right shrink-0">{formatTime(currentTime)}</span>
            <div ref={seekBarRef}
              className="flex-1 h-7 flex items-center cursor-pointer relative"
              onMouseDown={handleMouseDown}
              onTouchStart={handleSeek}
              onTouchMove={handleSeek}>
              {/* Track */}
              <div className="w-full h-1.5 rounded-full bg-white/15 relative">
                {/* Fill */}
                <div className="absolute left-0 top-0 h-full rounded-full"
                  style={{ width: `${(currentTime / duration) * 100}%`, background: dua.color }} />
                {/* Thumb dot */}
                <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md"
                  style={{ left: `calc(${(currentTime / duration) * 100}% - 6px)` }} />
              </div>
            </div>
            <span className="text-white/50 text-[10px] font-mono w-8 shrink-0">{formatTime(duration)}</span>
          </div>
        )}

        {/* Learn button */}
        {!isLearned ? (
          <button onClick={onLearn}
            className="w-full py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm shadow-lg active:scale-95 transition-all">
            I Learned This! ✨
          </button>
        ) : (
          <div className="w-full py-3 rounded-full bg-white/10 text-white/60 text-center text-sm font-bold">
            ✅ Already Learned
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================

const KidsDuaJourney = ({ onBack, isPremium }) => {
  const [selectedDua, setSelectedDua] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [learnedDuas, setLearnedDuas] = useState(loadLearnedDuas);
  const [showPremiumGate, setShowPremiumGate] = useState(false);
  const [showCelebration, setShowCelebration] = useState(null);

  const filteredDuas = useMemo(() => getDuasByCategory(activeCategory), [activeCategory]);

  const handleDuaSelect = (dua) => {
    if (!dua.isFree && !isPremium) {
      setShowPremiumGate(true);
      return;
    }
    setSelectedDua(dua);
  };

  const handleLearn = () => {
    if (!selectedDua || learnedDuas.includes(selectedDua.id)) return;
    const updated = [...learnedDuas, selectedDua.id];
    setLearnedDuas(updated);
    saveLearnedDuas(updated);
    setShowCelebration(selectedDua.name);
  };

  const navigateDua = (direction) => {
    if (!selectedDua) return;
    const allDuas = KIDS_DUAS;
    const currentIdx = allDuas.findIndex(d => d.id === selectedDua.id);
    const nextIdx = currentIdx + direction;
    if (nextIdx >= 0 && nextIdx < allDuas.length) {
      const nextDua = allDuas[nextIdx];
      if (!nextDua.isFree && !isPremium) {
        setShowPremiumGate(true);
        return;
      }
      setSelectedDua(nextDua);
    }
  };

  const currentIdx = selectedDua ? KIDS_DUAS.findIndex(d => d.id === selectedDua.id) : -1;

  // ======== DUA DETAIL VIEW ========
  if (selectedDua) {
    return (
      <>
        <DuaDetailView
          dua={selectedDua}
          onBack={() => setSelectedDua(null)}
          onNext={() => navigateDua(1)}
          onPrev={() => navigateDua(-1)}
          hasNext={currentIdx < KIDS_DUAS.length - 1}
          hasPrev={currentIdx > 0}
          isLearned={learnedDuas.includes(selectedDua.id)}
          onLearn={handleLearn}
        />
        {showCelebration && (
          <CelebrationModal
            duaName={showCelebration}
            onClose={() => setShowCelebration(null)}
          />
        )}
        {showPremiumGate && (
          <KidsPremiumGate
            feature="all 30 daily duas"
            onClose={() => setShowPremiumGate(false)}
          />
        )}
      </>
    );
  }

  // ======== GRID VIEW ========
  const totalAccessible = isPremium ? KIDS_DUAS.length : KIDS_DUAS.filter(d => d.isFree).length;
  const learnedCount = isPremium
    ? learnedDuas.length
    : learnedDuas.filter(id => KIDS_DUAS.find(d => d.id === id)?.isFree).length;

  return (
    <div className="fixed inset-0 z-[9998] flex flex-col bg-gradient-to-b from-teal-900 via-emerald-900 to-gray-900 overflow-hidden">
      {/* Header */}
      <div className="flex-shrink-0 px-3 pt-3 pb-2 sm:px-4 sm:pt-4 sm:pb-3">
        <div className="flex items-center justify-between mb-2">
          <button onClick={onBack}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-all">
            <Icons.ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <div className="text-center flex-1 mx-2">
            <h1 className="text-white text-lg sm:text-xl font-bold">
              🤲 Kids Duas
            </h1>
            <p className="text-white/40 text-[10px] sm:text-xs font-arabic">أدعية الأطفال</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-bold">
            {learnedCount}/{totalAccessible}
          </div>
        </div>

        {/* Category filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
          <CategoryTab
            category={null}
            isActive={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            count={KIDS_DUAS.length}
          />
          {Object.values(DUA_CATEGORIES).map(cat => (
            <CategoryTab
              key={cat.id}
              category={cat}
              isActive={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              count={KIDS_DUAS.filter(d => d.category === cat.id).length}
            />
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {filteredDuas.map((dua, i) => (
            <DuaGridCard
              key={dua.id}
              dua={dua}
              index={i}
              isLearned={learnedDuas.includes(dua.id)}
              isLocked={!dua.isFree && !isPremium}
              onClick={() => handleDuaSelect(dua)}
            />
          ))}
        </div>

        {filteredDuas.length === 0 && (
          <div className="text-center text-white/40 py-12">
            <p className="text-3xl mb-2">🤲</p>
            <p>No duas in this category yet</p>
          </div>
        )}
      </div>

      {/* Premium gate */}
      {showPremiumGate && (
        <KidsPremiumGate
          feature="all 30 daily duas"
          onClose={() => setShowPremiumGate(false)}
        />
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default KidsDuaJourney;
