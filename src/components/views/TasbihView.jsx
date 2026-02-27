/**
 * TasbihView Component
 * Beautiful digital tasbih (prayer beads) counter with dhikr phrase selection,
 * progress ring, target setting, and session tracking.
 * Also includes an Adhkar reader for morning/evening/after-salah remembrances.
 */

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Icons } from '../common/Icons';
import { useLocalStorage } from '../../hooks';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../contexts/LocaleContext';
import { playClickSound } from '../../utils/soundUtils';
import { ADHKAR_CATEGORIES, ADHKAR_LIST } from '../../data/adhkarData';
import KidsPremiumGate from '../kids/KidsPremiumGate';

const DHIKR_PHRASES = [
  { arabic: 'سُبْحَانَ اللّٰهِ', transliteration: 'SubhanAllah', english: 'Glory be to Allah', urdu: 'اللہ پاک ہے', short: 'SubhanAllah', color: '#10b981' },
  { arabic: 'اَلْحَمْدُ لِلّٰهِ', transliteration: 'Alhamdulillah', english: 'All praise to Allah', urdu: 'تمام تعریفیں اللہ کے لیے ہیں', short: 'Alhamdulillah', color: '#f59e0b' },
  { arabic: 'اَللّٰهُ أَكْبَرُ', transliteration: 'Allahu Akbar', english: 'Allah is the Greatest', urdu: 'اللہ سب سے بڑا ہے', short: 'Allahu Akbar', color: '#8b5cf6' },
  { arabic: 'لَا إِلٰهَ إِلَّا اللّٰهُ', transliteration: 'La ilaha illallah', english: 'There is no god but Allah', urdu: 'اللہ کے سوا کوئی معبود نہیں', short: 'Kalimah', color: '#06b6d4' },
  { arabic: 'أَسْتَغْفِرُ اللّٰهَ', transliteration: 'Astaghfirullah', english: 'I seek forgiveness', urdu: 'میں اللہ سے معافی مانگتا ہوں', short: 'Istighfar', color: '#ec4899' },
  { arabic: 'سُبْحَانَ اللّٰهِ وَبِحَمْدِهِ', transliteration: 'SubhanAllahi wa bihamdihi', english: 'Glory and praise to Allah', urdu: 'اللہ پاک ہے اپنی حمد کے ساتھ', short: 'Tasbeeh', color: '#22c55e' },
  { arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ', transliteration: 'La hawla wa la quwwata illa billah', english: 'No power except with Allah', urdu: 'اللہ کے بغیر کوئی طاقت اور قوت نہیں', short: 'Hawqala', color: '#3b82f6' },
  { arabic: 'اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ', transliteration: 'Allahumma salli ala Muhammad ﷺ', english: 'Send blessings upon Muhammad ﷺ', urdu: 'اے اللہ محمد ﷺ پر رحمت نازل فرما', short: 'Salawat', color: '#f43f5e' },
];

// Famous tasbih presets — popular dhikr routines
const FAMOUS_TASBIHAT = [
  {
    name: 'After Salah',
    nameAr: 'بعد الصلاة',
    description: '33 + 33 + 33 = 99',
    steps: [
      { dhikrIndex: 0, count: 33 }, // SubhanAllah x33
      { dhikrIndex: 1, count: 33 }, // Alhamdulillah x33
      { dhikrIndex: 2, count: 33 }, // Allahu Akbar x33
    ],
    color: '#10b981',
  },
  {
    name: 'Morning Adhkar',
    nameAr: 'أذكار الصباح',
    emoji: '🌅',
    description: 'SubhanAllah 33 + Alhamdulillah 33 + Allahu Akbar 34 + Kalimah 10 + Istighfar 100',
    steps: [
      { dhikrIndex: 0, count: 33 },  // SubhanAllah
      { dhikrIndex: 1, count: 33 },  // Alhamdulillah
      { dhikrIndex: 2, count: 34 },  // Allahu Akbar
      { dhikrIndex: 3, count: 10 },  // La ilaha illallah
      { dhikrIndex: 4, count: 100 }, // Astaghfirullah
      { dhikrIndex: 5, count: 100 }, // SubhanAllahi wa bihamdihi
    ],
    color: '#f59e0b',
  },
  {
    name: 'Evening Adhkar',
    nameAr: 'أذكار المساء',
    emoji: '🌙',
    description: 'SubhanAllah 33 + Alhamdulillah 33 + Allahu Akbar 34 + Kalimah 10 + Istighfar 100',
    steps: [
      { dhikrIndex: 0, count: 33 },  // SubhanAllah
      { dhikrIndex: 1, count: 33 },  // Alhamdulillah
      { dhikrIndex: 2, count: 34 },  // Allahu Akbar
      { dhikrIndex: 3, count: 10 },  // La ilaha illallah
      { dhikrIndex: 4, count: 100 }, // Astaghfirullah
      { dhikrIndex: 5, count: 100 }, // SubhanAllahi wa bihamdihi
    ],
    color: '#8b5cf6',
  },
  {
    name: 'Istighfar 100',
    nameAr: 'استغفار',
    description: 'Astaghfirullah x100',
    steps: [
      { dhikrIndex: 4, count: 100 },
    ],
    color: '#ec4899',
  },
  {
    name: 'Salawat 100',
    nameAr: 'صلوات',
    description: 'Durood x100',
    steps: [
      { dhikrIndex: 7, count: 100 },
    ],
    color: '#f43f5e',
  },
  {
    name: 'Heaviest Words',
    nameAr: 'أثقل الكلمات',
    description: 'SubhanAllahi wa bihamdihi x100',
    steps: [
      { dhikrIndex: 5, count: 100 },
    ],
    color: '#22c55e',
  },
];

const TARGET_PRESETS = [33, 99, 100, 500, 1000];

const DEFAULT_DATA = {
  selectedDhikr: 0,
  target: 33,
  currentCount: 0,
  totalLifetimeCount: 0,
  sessionsCompleted: 0,
  lastSessionDate: null,
  // Preset mode tracking
  activePreset: null,      // index into FAMOUS_TASBIHAT or null
  presetStepIndex: 0,      // current step within preset
};

const DEFAULT_ADHKAR_PROGRESS = {
  lastDate: null,
  completed: [],
  showUrdu: true,
  showEnglish: true,
  selectedCategory: 'morning_evening',
};

// ─── Adhkar Reader Tab ───────────────────────────────────────────

function AdhkarReader() {
  const { t, tInterpolate, language, isRTL } = useTranslation();
  const [progress, setProgress] = useLocalStorage('adhkar_progress', DEFAULT_ADHKAR_PROGRESS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const categoryScrollRef = useRef(null);
  const cardRef = useRef(null);

  const { completed, showUrdu, showEnglish, selectedCategory } = progress;

  // Daily reset — if the date changed, clear completed
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    if (progress.lastDate !== today) {
      setProgress(prev => ({ ...prev, lastDate: today, completed: [] }));
    }
  }, [progress.lastDate, setProgress]);

  // Filter adhkar by selected category
  const filteredAdhkar = useMemo(() =>
    ADHKAR_LIST.filter(a => a.categories.includes(selectedCategory)),
    [selectedCategory]
  );

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const currentDhikr = filteredAdhkar[currentIndex];
  const category = ADHKAR_CATEGORIES.find(c => c.key === selectedCategory);
  const accentColor = category?.color || '#f59e0b';

  const isCompleted = (id) => (completed || []).includes(id);

  const toggleDone = useCallback((id) => {
    setProgress(prev => {
      const list = prev.completed || [];
      const next = list.includes(id) ? list.filter(x => x !== id) : [...list, id];
      return { ...prev, completed: next };
    });
  }, [setProgress]);

  const goNext = useCallback(() => {
    if (currentIndex < filteredAdhkar.length - 1) {
      setCurrentIndex(i => i + 1);
      cardRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentIndex, filteredAdhkar.length]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      cardRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentIndex]);

  const completedCount = filteredAdhkar.filter(a => isCompleted(a.id)).length;

  // Touch swipe support
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  if (!currentDhikr) {
    return (
      <div className="flex-1 flex items-center justify-center px-4">
        <p className="text-white/40 text-sm">{t('tasbih.noAdhkar')}</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col relative z-10 w-full overflow-hidden">
      {/* Category chips */}
      <div
        ref={categoryScrollRef}
        className="flex gap-2 overflow-x-auto px-4 py-3 no-scrollbar shrink-0"
        style={{ scrollbarWidth: 'none' }}
      >
        {ADHKAR_CATEGORIES.map(cat => (
          <button
            key={cat.key}
            onClick={() => setProgress(prev => ({ ...prev, selectedCategory: cat.key }))}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all"
            style={{
              background: selectedCategory === cat.key ? `${cat.color}30` : 'rgba(255,255,255,0.06)',
              border: selectedCategory === cat.key ? `1.5px solid ${cat.color}50` : '1.5px solid rgba(255,255,255,0.08)',
              boxShadow: selectedCategory === cat.key ? `0 0 12px ${cat.color}25` : 'none',
            }}
          >
            <span className="text-sm">{cat.emoji}</span>
            <span className="text-xs font-medium whitespace-nowrap" style={{ color: selectedCategory === cat.key ? cat.color : 'rgba(255,255,255,0.6)' }}>
              {cat.label}
            </span>
          </button>
        ))}
      </div>

      {/* Card area */}
      <div
        className="flex-1 px-4 pb-40 overflow-y-auto"
        ref={cardRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Card header — index + title + done badge */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${accentColor}25`, color: accentColor }}>
              {currentIndex + 1}/{filteredAdhkar.length}
            </span>
            <span className="text-sm font-semibold text-white">{currentDhikr.title}</span>
            <span className="text-sm font-arabic text-white/50">{currentDhikr.titleAr}</span>
          </div>
          {isCompleted(currentDhikr.id) && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">{t('tasbih.done')}</span>
          )}
        </div>

        {/* Main card */}
        <div
          className="rounded-2xl p-5 mb-4"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${accentColor}25`,
            boxShadow: `0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)`,
          }}
        >
          {/* Arabic text */}
          <div className="mb-4">
            <p
              className="text-2xl sm:text-3xl font-arabic text-white leading-[2.2] text-center"
              style={{ direction: 'rtl', fontFamily: "'Scheherazade New', 'Amiri', serif" }}
            >
              {currentDhikr.arabic}
            </p>
          </div>

          {/* Urdu translation — collapsible */}
          {showUrdu && (
            <div className="mb-3 p-3 rounded-xl" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}>
              <p className="text-[10px] text-blue-400/60 font-semibold mb-1 uppercase tracking-wider">{t('tasbih.urdu')}</p>
              <p className="text-sm font-urdu text-blue-200/80" style={{ direction: 'rtl' }}>
                {currentDhikr.urdu}
              </p>
            </div>
          )}

          {/* English translation — collapsible */}
          {showEnglish && (
            <div className="mb-3 p-3 rounded-xl" style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.15)' }}>
              <p className="text-[10px] text-purple-400/60 font-semibold mb-1 uppercase tracking-wider">{t('tasbih.english')}</p>
              <p className="text-sm text-purple-200/80 leading-relaxed">
                {currentDhikr.english}
              </p>
            </div>
          )}

          {/* Count + Reference */}
          <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/40">{t('tasbih.recite')}</span>
              <span className="text-sm font-bold" style={{ color: accentColor }}>
                {currentDhikr.count === 1 ? t('tasbih.time') : tInterpolate('tasbih.times', { count: currentDhikr.count })}
              </span>
            </div>
            <span className="text-[10px] text-white/30">{currentDhikr.reference}</span>
          </div>
        </div>

        {/* Mark Done button */}
        <button
          onClick={() => toggleDone(currentDhikr.id)}
          className="w-full py-3 rounded-xl font-semibold text-sm transition-all active:scale-[0.98]"
          style={{
            background: isCompleted(currentDhikr.id) ? 'rgba(16,185,129,0.15)' : `${accentColor}20`,
            border: isCompleted(currentDhikr.id) ? '1.5px solid rgba(16,185,129,0.3)' : `1.5px solid ${accentColor}30`,
            color: isCompleted(currentDhikr.id) ? '#10b981' : accentColor,
          }}
        >
          {isCompleted(currentDhikr.id) ? `${t('tasbih.completed')} ✓` : `${t('tasbih.markDone')} ✓`}
        </button>

        {/* Navigation arrows */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-20"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <Icons.ChevronLeft className="w-5 h-5 text-white/60" />
          </button>

          {/* Progress dots */}
          <div className="flex gap-1.5 flex-wrap justify-center max-w-[60%]">
            {filteredAdhkar.map((a, i) => (
              <button
                key={a.id}
                onClick={() => { setCurrentIndex(i); cardRef.current?.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{
                  background: isCompleted(a.id) ? '#10b981'
                    : i === currentIndex ? accentColor : 'rgba(255,255,255,0.15)',
                  boxShadow: i === currentIndex ? `0 0 8px ${accentColor}` : 'none',
                  transform: i === currentIndex ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={currentIndex >= filteredAdhkar.length - 1}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-20"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <Icons.ChevronRight className="w-5 h-5 text-white/60" />
          </button>
        </div>

        {/* Session progress bar */}
        <div className="mt-4 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/40">{t('tasbih.todaysProgress')}</span>
            <span className="text-xs font-semibold" style={{ color: accentColor }}>{completedCount}/{filteredAdhkar.length}</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${filteredAdhkar.length > 0 ? (completedCount / filteredAdhkar.length) * 100 : 0}%`,
                background: `linear-gradient(90deg, ${accentColor}, ${accentColor}cc)`,
              }}
            />
          </div>
        </div>

        {/* Toggle buttons for Urdu/English */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => setProgress(prev => ({ ...prev, showUrdu: !prev.showUrdu }))}
            className="flex-1 py-2 rounded-xl text-xs font-medium transition-all"
            style={{
              background: showUrdu ? 'rgba(59,130,246,0.12)' : 'rgba(255,255,255,0.04)',
              border: showUrdu ? '1px solid rgba(59,130,246,0.25)' : '1px solid rgba(255,255,255,0.06)',
              color: showUrdu ? '#93c5fd' : 'rgba(255,255,255,0.35)',
            }}
          >
            {showUrdu ? t('tasbih.urduOn') : t('tasbih.urduOff')}
          </button>
          <button
            onClick={() => setProgress(prev => ({ ...prev, showEnglish: !prev.showEnglish }))}
            className="flex-1 py-2 rounded-xl text-xs font-medium transition-all"
            style={{
              background: showEnglish ? 'rgba(168,85,247,0.12)' : 'rgba(255,255,255,0.04)',
              border: showEnglish ? '1px solid rgba(168,85,247,0.25)' : '1px solid rgba(255,255,255,0.06)',
              color: showEnglish ? '#c4b5fd' : 'rgba(255,255,255,0.35)',
            }}
          >
            {showEnglish ? t('tasbih.englishOn') : t('tasbih.englishOff')}
          </button>
        </div>
      </div>
    </div>
  );
}


// ─── Main TasbihView ─────────────────────────────────────────────

function TasbihView({ darkMode, onBack }) {
  const { t, language, isRTL } = useTranslation();
  const [activeTab, setActiveTab] = useState('counter');
  const [data, setData] = useLocalStorage('tasbih_data', DEFAULT_DATA);
  const [showTargetPicker, setShowTargetPicker] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  const [customTarget, setCustomTarget] = useState('');
  const [ripple, setRipple] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [stepCompleted, setStepCompleted] = useState(false);
  const containerRef = useRef(null);
  const dhikrScrollRef = useRef(null);

  // ─── Cloud Sync ──────────────────────────────────────
  const { isAuthenticated, isPremium, refreshUser } = useAuth();
  const syncingRef = useRef(false);
  const syncTimerRef = useRef(null);
  const hasSyncedRef = useRef(false);
  const mountedRef = useRef(true);
  const downloadCompleteRef = useRef(false);
  const dataRef = useRef(data);
  dataRef.current = data; // always keep ref fresh

  // Cleanup on unmount
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Download from server once on mount
  useEffect(() => {
    if (!isAuthenticated || hasSyncedRef.current) return;
    hasSyncedRef.current = true;

    const controller = new AbortController();

    (async () => {
      try {
        const res = await fetch('/api/user/sync?type=tasbih', {
          credentials: 'include',
          signal: controller.signal
        });
        if (!res.ok || !mountedRef.current) return;
        const { data: serverResponse } = await res.json();
        if (!mountedRef.current) return;

        if (serverResponse?.tasbih?.data) {
          const server = serverResponse.tasbih.data;
          const counterData = server.counter || server;
          if (counterData.totalLifetimeCount !== undefined) {
            const local = dataRef.current;
            setData({
              ...local,
              totalLifetimeCount: Math.max(local.totalLifetimeCount || 0, counterData.totalLifetimeCount || 0),
              sessionsCompleted: Math.max(local.sessionsCompleted || 0, counterData.sessionsCompleted || 0),
              lastSessionDate: (counterData.lastSessionDate && (!local.lastSessionDate || counterData.lastSessionDate > local.lastSessionDate))
                ? counterData.lastSessionDate : local.lastSessionDate,
            });
          }
        }
        downloadCompleteRef.current = true;
      } catch {
        // Use local data (also catches AbortError)
        downloadCompleteRef.current = true;
      }
    })();

    return () => controller.abort();
  }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  // Debounced upload — 3s after last data change (only after download completes)
  useEffect(() => {
    if (!isAuthenticated) return;
    // Don't upload until initial download is complete to prevent race condition
    if (!downloadCompleteRef.current) return;

    if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    syncTimerRef.current = setTimeout(() => {
      if (syncingRef.current || !mountedRef.current) return;
      syncingRef.current = true;
      const current = dataRef.current;
      let adhkarProgress = DEFAULT_ADHKAR_PROGRESS;
      try { adhkarProgress = JSON.parse(localStorage.getItem('quran_app_adhkar_progress')) || DEFAULT_ADHKAR_PROGRESS; } catch {}
      fetch('/api/user/sync', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dataType: 'tasbih', data: { counter: current, adhkar: adhkarProgress } }),
      }).catch(() => {}).finally(() => {
        if (mountedRef.current) syncingRef.current = false;
      });
    }, 3000);
    return () => { if (syncTimerRef.current) clearTimeout(syncTimerRef.current); };
  }, [data, isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showPremiumGate, setShowPremiumGate] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null); // 'success' | 'canceled' | null
  const [isRefreshingUser, setIsRefreshingUser] = useState(false);
  const paymentHandledRef = useRef(false);

  // Detect payment return from Stripe (run once on mount)
  useEffect(() => {
    if (paymentHandledRef.current) return;

    const params = new URLSearchParams(window.location.search);
    const paymentSuccess = params.get('payment_success') === '1';
    const paymentCanceled = params.get('payment_canceled') === '1';

    if (paymentSuccess) {
      paymentHandledRef.current = true;
      setPaymentResult('success');
      localStorage.removeItem('kids_payment_pending');
      window.history.replaceState({}, '', window.location.pathname);

      // Refresh user to get updated premium status
      if (refreshUser) {
        setIsRefreshingUser(true);
        refreshUser().catch(() => {}).finally(() => {
          if (mountedRef.current) setIsRefreshingUser(false);
        });
      }
    } else if (paymentCanceled) {
      paymentHandledRef.current = true;
      setPaymentResult('canceled');
      localStorage.removeItem('kids_payment_pending');
      window.history.replaceState({}, '', window.location.pathname);
    } else if (localStorage.getItem('kids_payment_pending') === 'true') {
      localStorage.removeItem('kids_payment_pending');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Reset local tasbih data only (free)
  const resetLocalData = useCallback(() => {
    setData(DEFAULT_DATA);
    try { localStorage.setItem('quran_app_adhkar_progress', JSON.stringify(DEFAULT_ADHKAR_PROGRESS)); } catch {}
    setShowResetConfirm(false);
  }, [setData]);

  // Reset cloud sync data (premium only)
  const resetCloudSync = useCallback(() => {
    if (!isPremium) return;
    fetch('/api/user/sync', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dataType: 'tasbih', data: { counter: DEFAULT_DATA, adhkar: DEFAULT_ADHKAR_PROGRESS } }),
    }).catch(() => {});
    setData(DEFAULT_DATA);
    try { localStorage.setItem('quran_app_adhkar_progress', JSON.stringify(DEFAULT_ADHKAR_PROGRESS)); } catch {}
    setShowResetConfirm(false);
  }, [setData, isPremium]);

  const { selectedDhikr, target, currentCount, totalLifetimeCount, sessionsCompleted, activePreset, presetStepIndex } = data;
  const dhikr = DHIKR_PHRASES[selectedDhikr] || DHIKR_PHRASES[0];
  const progress = target > 0 ? Math.min(currentCount / target, 1) : 0;
  const accentColor = dhikr.color || '#10b981';

  // Active preset info
  const preset = activePreset !== null ? FAMOUS_TASBIHAT[activePreset] : null;
  const totalPresetSteps = preset ? preset.steps.length : 0;

  // Localized preset names
  const PRESET_NAME_KEYS = [
    'tasbih.presetAfterSalah',
    'tasbih.presetMorning',
    'tasbih.presetEvening',
    'tasbih.presetIstighfar',
    'tasbih.presetSalawat',
    'tasbih.presetHeaviest',
  ];
  const getPresetName = (index) => t(PRESET_NAME_KEYS[index]) || FAMOUS_TASBIHAT[index].name;

  // SVG ring calculations
  const radius = 130;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  const increment = useCallback(() => {
    const newCount = currentCount + 1;
    const isComplete = newCount >= target;

    setRipple(true);
    setTimeout(() => setRipple(false), 400);

    if (navigator.vibrate) {
      navigator.vibrate(isComplete ? [50, 30, 50] : 30);
    }

    try { playClickSound(); } catch {}

    if (isComplete) {
      // Check if we're in a preset and have more steps
      if (preset && (presetStepIndex || 0) < totalPresetSteps - 1) {
        const nextStep = (presetStepIndex || 0) + 1;
        const nextStepData = preset.steps[nextStep];
        setStepCompleted(true);
        setTimeout(() => setStepCompleted(false), 1500);
        setData(prev => ({
          ...prev,
          currentCount: 0,
          selectedDhikr: nextStepData.dhikrIndex,
          target: nextStepData.count,
          presetStepIndex: nextStep,
          totalLifetimeCount: (prev.totalLifetimeCount || 0) + newCount,
        }));
      } else {
        // Fully completed (single dhikr or last preset step)
        setCompleted(true);
        setTimeout(() => setCompleted(false), 2000);
        setData(prev => ({
          ...prev,
          currentCount: 0,
          totalLifetimeCount: (prev.totalLifetimeCount || 0) + newCount,
          sessionsCompleted: (prev.sessionsCompleted || 0) + 1,
          lastSessionDate: new Date().toISOString(),
          activePreset: null,
          presetStepIndex: 0,
        }));
      }
    } else {
      setData(prev => ({
        ...prev,
        currentCount: newCount,
        totalLifetimeCount: (prev.totalLifetimeCount || 0) + 1,
      }));
    }
  }, [currentCount, target, setData, preset, presetStepIndex, totalPresetSteps]);

  const reset = useCallback(() => {
    setData(prev => ({ ...prev, currentCount: 0 }));
  }, [setData]);

  const selectDhikr = useCallback((index) => {
    setData(prev => ({ ...prev, selectedDhikr: index, currentCount: 0, activePreset: null, presetStepIndex: 0 }));
  }, [setData]);

  const selectTarget = useCallback((t) => {
    setData(prev => ({ ...prev, target: t, currentCount: 0 }));
    setShowTargetPicker(false);
  }, [setData]);

  const startPreset = useCallback((presetIndex) => {
    const p = FAMOUS_TASBIHAT[presetIndex];
    const firstStep = p.steps[0];
    setData(prev => ({
      ...prev,
      activePreset: presetIndex,
      presetStepIndex: 0,
      selectedDhikr: firstStep.dhikrIndex,
      target: firstStep.count,
      currentCount: 0,
    }));
    setShowPresets(false);
  }, [setData]);

  const applyCustomTarget = useCallback(() => {
    const t = parseInt(customTarget, 10);
    if (t > 0 && t <= 99999) {
      selectTarget(t);
      setCustomTarget('');
    }
  }, [customTarget, selectTarget]);

  // Navigate dhikr left/right
  const prevDhikr = useCallback(() => {
    const newIdx = selectedDhikr > 0 ? selectedDhikr - 1 : DHIKR_PHRASES.length - 1;
    selectDhikr(newIdx);
  }, [selectedDhikr, selectDhikr]);

  const nextDhikr = useCallback(() => {
    const newIdx = selectedDhikr < DHIKR_PHRASES.length - 1 ? selectedDhikr + 1 : 0;
    selectDhikr(newIdx);
  }, [selectedDhikr, selectDhikr]);

  // Swipe gesture for dhikr switching on mobile
  const counterTouchStartX = useRef(null);
  const handleCounterTouchStart = useCallback((e) => { counterTouchStartX.current = e.touches[0].clientX; }, []);
  const handleCounterTouchEnd = useCallback((e) => {
    if (counterTouchStartX.current === null) return;
    const diff = counterTouchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) nextDhikr();
      else prevDhikr();
    }
    counterTouchStartX.current = null;
  }, [nextDhikr, prevDhikr]);

  // Scroll selected chip into view
  useEffect(() => {
    if (dhikrScrollRef.current && activeTab === 'counter') {
      const activeChip = dhikrScrollRef.current.children[selectedDhikr];
      if (activeChip) {
        activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedDhikr, activeTab]);

  // Keyboard support (only in counter tab)
  useEffect(() => {
    if (activeTab !== 'counter') return;
    const handleKey = (e) => {
      if (e.code === 'Space' && !showTargetPicker && !showPresets) {
        e.preventDefault();
        increment();
      } else if (e.code === 'ArrowLeft') {
        prevDhikr();
      } else if (e.code === 'ArrowRight') {
        nextDhikr();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeTab, increment, showTargetPicker, showPresets, prevDhikr, nextDhikr]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex flex-col items-center overflow-hidden select-none z-50"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #0f172a 100%)',
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      {/* Ambient glow — color changes with selected dhikr */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-700"
          style={{ background: activeTab === 'counter' ? accentColor : '#f59e0b', top: '10%', left: '-10%' }} />
        <div className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 transition-colors duration-700"
          style={{ background: activeTab === 'counter' ? accentColor : '#8b5cf6', bottom: '5%', right: '-10%' }} />
        <div className="absolute w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: '#6366f1', top: '40%', right: '20%' }} />
      </div>

      {/* Header */}
      <div className="w-full flex items-center justify-between px-3 pt-2 pb-2 relative z-10 shrink-0">
        <button
          onClick={() => onBack ? onBack() : window.history.back()}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.15)',
            minWidth: '44px',
            minHeight: '44px',
          }}
        >
          <Icons.ArrowLeft className="w-5 h-5 text-white/80 rtl:rotate-180" />
        </button>

        <h1 className="text-lg font-bold text-white/90">📿 {t('tasbih.title')}</h1>

        {activeTab === 'counter' ? (
          <div className="flex gap-2">
            <button
              onClick={reset}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)',
                minWidth: '44px',
                minHeight: '44px',
              }}
              title={t('tasbih.resetCount')}
            >
              <Icons.RefreshCw className="w-4 h-4 text-white/80" />
            </button>

            <button
              onClick={() => setShowResetConfirm(true)}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
              style={{
                background: 'rgba(239,68,68,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(239,68,68,0.2)',
                minWidth: '44px',
                minHeight: '44px',
              }}
              title={t('tasbih.resetAllData')}
            >
              <Icons.X className="w-4 h-4 text-red-400/80" />
            </button>

            <button
              onClick={() => { setShowTargetPicker(!showTargetPicker); setShowPresets(false); }}
              className="h-10 px-3 rounded-full flex items-center gap-1.5 transition-all hover:scale-105"
              style={{
                background: `${accentColor}25`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${accentColor}40`,
              }}
            >
              <Icons.Target className="w-4 h-4" style={{ color: accentColor }} />
              <span className="text-sm font-semibold" style={{ color: accentColor }}>{target}</span>
            </button>
          </div>
        ) : (
          <div className="w-10" /> /* spacer for layout balance */
        )}
      </div>

      {/* Tab Bar */}
      <div className="w-full px-4 relative z-10 shrink-0 mb-1">
        <div className="flex mx-auto w-fit rounded-full p-1" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
          {[
            { key: 'counter', label: t('tasbih.counter'), icon: '📿' },
            { key: 'adhkar', label: t('tasbih.adhkar'), icon: '📖' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setShowTargetPicker(false); setShowPresets(false); }}
              className="flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                background: activeTab === tab.key ? 'rgba(255,255,255,0.12)' : 'transparent',
                color: activeTab === tab.key ? '#fff' : 'rgba(255,255,255,0.4)',
                boxShadow: activeTab === tab.key ? '0 2px 8px rgba(0,0,0,0.3)' : 'none',
              }}
            >
              <span className="text-sm">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Counter Tab ──────────────────────────────────── */}
      {activeTab === 'counter' && (
        <>
          {/* Target Picker Dropdown */}
          {showTargetPicker && (
            <div className="absolute top-16 right-4 z-50 p-3 rounded-2xl"
              style={{
                background: 'rgba(15,23,42,0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}>
              <p className="text-xs text-white/50 mb-2 font-medium">{t('tasbih.setTarget')}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {TARGET_PRESETS.map(t => (
                  <button
                    key={t}
                    onClick={() => selectTarget(t)}
                    className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
                      target === t ? 'text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                    style={target === t ? { background: accentColor } : undefined}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={customTarget}
                  onChange={(e) => setCustomTarget(e.target.value)}
                  placeholder={t('tasbih.custom')}
                  className="flex-1 px-3 py-1.5 rounded-full text-sm bg-white/10 text-white border border-white/10 outline-none focus:border-emerald-500/50 w-24"
                  min="1"
                  max="99999"
                />
                <button
                  onClick={applyCustomTarget}
                  className="px-3 py-1.5 rounded-full text-sm font-semibold text-white transition-colors"
                  style={{ background: accentColor }}
                >
                  {t('tasbih.set')}
                </button>
              </div>
            </div>
          )}

          {/* Preset Progress Indicator */}
          {preset && (
            <div className="w-full px-4 relative z-10 mb-1">
              <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-full mx-auto w-fit"
                style={{
                  background: `${preset.color}15`,
                  border: `1px solid ${preset.color}30`,
                }}>
                <span className="text-xs font-bold" style={{ color: preset.color }}>{getPresetName(activePreset)}</span>
                <span className="text-white/30 text-xs">•</span>
                <div className="flex gap-1">
                  {preset.steps.map((s, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full transition-all"
                      style={{
                        background: i < (presetStepIndex || 0) ? preset.color
                          : i === (presetStepIndex || 0) ? `${preset.color}` : 'rgba(255,255,255,0.2)',
                        boxShadow: i === (presetStepIndex || 0) ? `0 0 8px ${preset.color}` : 'none',
                        transform: i === (presetStepIndex || 0) ? 'scale(1.3)' : 'scale(1)',
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs text-white/40">{t('tasbih.step')} {(presetStepIndex || 0) + 1}/{totalPresetSteps}</span>
              </div>
            </div>
          )}

          {/* Main Counter Area — all in one scrollable column */}
          <div className="flex-1 flex flex-col items-center justify-start pt-2 relative z-10 w-full px-4 overflow-y-auto pb-44">
            {/* Dhikr Text with Navigation Arrows — swipe to switch */}
            <div className="flex items-center gap-2 mb-2" onTouchStart={handleCounterTouchStart} onTouchEnd={handleCounterTouchEnd}>
              <button
                onClick={prevDhikr}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 shrink-0"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Icons.ChevronLeft className="w-4 h-4 text-white/50" />
              </button>

              <div className="text-center min-w-0">
                <p className="text-2xl sm:text-3xl font-bold text-white font-arabic leading-snug" style={{ direction: 'rtl' }}>
                  {dhikr.arabic}
                </p>
                <p className="text-xs font-medium mt-0.5" style={{ color: `${accentColor}cc` }}>{dhikr.transliteration}</p>
                {language === 'ur' || language === 'ar' ? (
                  <p className="text-xs font-urdu text-white/60 mt-0.5" style={{ direction: 'rtl' }}>{dhikr.urdu}</p>
                ) : (
                  <p className="text-[10px] text-white/40 mt-0.5">{dhikr.english}</p>
                )}
              </div>

              <button
                onClick={nextDhikr}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110 shrink-0"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Icons.ChevronRight className="w-4 h-4 text-white/50" />
              </button>
            </div>

            {/* Counter Circle + SVG Ring */}
            <div className="relative mb-2" style={{ width: '200px', height: '200px' }}>
              <button
                onClick={increment}
                className="relative w-full h-full rounded-full flex flex-col items-center justify-center transition-transform active:scale-95 cursor-pointer"
                style={{
                  background: `linear-gradient(145deg, ${accentColor}20, ${accentColor}0a)`,
                  backdropFilter: 'blur(20px)',
                  border: `2px solid ${accentColor}35`,
                  boxShadow: ripple
                    ? `0 0 60px ${accentColor}50, inset 0 0 30px ${accentColor}15`
                    : `0 0 40px ${accentColor}18, inset 0 0 20px ${accentColor}08`,
                }}
              >
                <div className="absolute inset-2 rounded-full opacity-40"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 40%)' }} />

                <span className="text-5xl sm:text-6xl font-bold text-white relative z-10" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {currentCount}
                </span>
                <span className="text-xs text-white/40 mt-1 relative z-10">{t('tasbih.of')} {target}</span>

                {ripple && (
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{ background: `${accentColor}40` }} />
                )}
              </button>

              {/* SVG Progress Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 300 300">
                <circle cx="150" cy="150" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                <circle
                  cx="150" cy="150" r={radius}
                  fill="none"
                  stroke={accentColor}
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                />
              </svg>

              {/* Step completion */}
              {stepCompleted && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="text-2xl animate-bounce bg-black/50 rounded-full px-3 py-1.5 text-white font-bold">
                    {t('tasbih.next')}
                  </div>
                </div>
              )}

              {/* Full completion */}
              {completed && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="text-4xl animate-bounce">✨</div>
                </div>
              )}
            </div>

            {/* Tap hint + Stats in one compact row */}
            <p className="text-[10px] text-white/25 mb-2">{t('tasbih.tapHint')}</p>

            <div className="flex gap-3 mb-3">
              <div className="px-3 py-1.5 rounded-xl text-center"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-base font-bold" style={{ color: accentColor }}>{sessionsCompleted || 0}</p>
                <p className="text-[9px] text-white/40">{t('tasbih.rounds')}</p>
              </div>
              <div className="px-3 py-1.5 rounded-xl text-center"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-base font-bold text-cyan-400">{(totalLifetimeCount || 0).toLocaleString()}</p>
                <p className="text-[9px] text-white/40">{t('tasbih.total')}</p>
              </div>
            </div>

            {/* Famous Presets Button */}
            <div className="flex justify-center mb-2">
              <button
                onClick={() => { setShowPresets(!showPresets); setShowTargetPicker(false); }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full transition-all hover:scale-105"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <span className="text-sm">⭐</span>
                <span className="text-xs text-white/70">{t('tasbih.famousTasbihat')}</span>
                <Icons.ChevronDown className={`w-3 h-3 text-white/50 transition-transform ${showPresets ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Dhikr Chips — 2-row wrapped grid */}
            <div
              ref={dhikrScrollRef}
              className="flex flex-wrap gap-2 justify-center w-full"
            >
              {DHIKR_PHRASES.map((d, i) => (
                <button
                  key={i}
                  onClick={() => selectDhikr(i)}
                  className="px-3 py-1.5 rounded-full transition-all"
                  style={{
                    background: selectedDhikr === i ? `${d.color}30` : 'rgba(255,255,255,0.06)',
                    border: selectedDhikr === i ? `1.5px solid ${d.color}50` : '1.5px solid rgba(255,255,255,0.08)',
                    boxShadow: selectedDhikr === i ? `0 0 12px ${d.color}25` : 'none',
                  }}
                >
                  <p className="text-xs font-semibold whitespace-nowrap" style={{ color: selectedDhikr === i ? d.color : 'rgba(255,255,255,0.6)' }}>
                    {d.short}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Famous Presets Panel — outside scrollable area, above click-away */}
          {showPresets && (
            <div className="absolute left-4 right-4 bottom-36 z-50 p-3 rounded-2xl max-h-[50vh] overflow-y-auto"
              style={{
                background: 'rgba(15,23,42,0.97)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 -10px 40px rgba(0,0,0,0.4)',
              }}>
              <p className="text-xs text-white/40 mb-2 text-center font-medium">{t('tasbih.popularRoutines')}</p>
              <div className="space-y-2">
                {FAMOUS_TASBIHAT.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => startPreset(i)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-white/5"
                    style={{
                      border: activePreset === i ? `1px solid ${p.color}40` : '1px solid transparent',
                      background: activePreset === i ? `${p.color}10` : 'transparent',
                    }}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: `${p.color}20`, border: `1px solid ${p.color}30` }}>
                      <span className="text-lg">📿</span>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-white">{getPresetName(i)}</p>
                        <p className="text-sm font-arabic text-white/50">{p.nameAr}</p>
                      </div>
                      <p className="text-xs text-white/40">{p.description}</p>
                      <div className="flex gap-1 mt-1 flex-wrap">
                        {p.steps.map((s, j) => (
                          <span key={j} className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ background: `${DHIKR_PHRASES[s.dhikrIndex].color}20`, color: DHIKR_PHRASES[s.dhikrIndex].color }}>
                            {DHIKR_PHRASES[s.dhikrIndex].short} x{s.count}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* ─── Adhkar Tab ───────────────────────────────────── */}
      {activeTab === 'adhkar' && <AdhkarReader />}

      {/* Click-away to close pickers */}
      {(showTargetPicker || showPresets) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => { setShowTargetPicker(false); setShowPresets(false); }}
        />
      )}

      {/* Reset Confirmation Dialog */}
      {showResetConfirm && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          style={{ padding: 'max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left))' }}
          onClick={() => setShowResetConfirm(false)}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="relative z-10 p-5 rounded-2xl max-w-sm w-full"
            style={{ background: 'rgba(15,23,42,0.98)', border: '1px solid rgba(255,255,255,0.12)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white font-semibold text-base mb-1">{t('tasbih.resetTitle')}</p>
            <p className="text-white/50 text-xs mb-4">{t('tasbih.resetMessage')}</p>

            {/* Option 1: Reset Local — free */}
            <button
              onClick={resetLocalData}
              className="w-full p-3 rounded-xl mb-2 text-left transition-all active:scale-[0.98]"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{t('tasbih.resetLocal')}</p>
                  <p className="text-[11px] text-white/40 mt-0.5">{t('tasbih.resetLocalDesc')}</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-semibold">{t('tasbih.free')}</span>
              </div>
            </button>

            {/* Option 2: Reset Cloud Sync — premium or show premium gate */}
            <button
              onClick={() => {
                if (isPremium) { resetCloudSync(); }
                else { setShowResetConfirm(false); setShowPremiumGate(true); }
              }}
              className="w-full p-3 rounded-xl mb-3 text-left transition-all active:scale-[0.98]"
              style={{
                background: isPremium ? 'rgba(239,68,68,0.08)' : 'rgba(255,255,255,0.03)',
                border: isPremium ? '1px solid rgba(239,68,68,0.2)' : '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold" style={{ color: isPremium ? '#f87171' : 'rgba(255,255,255,0.35)' }}>
                    {t('tasbih.resetCloud')}
                  </p>
                  <p className="text-[11px] mt-0.5" style={{ color: isPremium ? 'rgba(248,113,113,0.5)' : 'rgba(255,255,255,0.25)' }}>
                    {t('tasbih.resetCloudDesc')}
                  </p>
                </div>
                {isPremium ? (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 font-semibold">{t('tasbih.reset')}</span>
                ) : (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 font-semibold">{t('tasbih.premium')}</span>
                )}
              </div>
            </button>

            <button
              onClick={() => setShowResetConfirm(false)}
              className="w-full py-2.5 rounded-xl text-sm font-medium text-white/50 transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {t('tasbih.cancel')}
            </button>
          </div>
        </div>
      )}

      {/* Premium Gate — existing 3-tier subscription popup */}
      {showPremiumGate && (
        <KidsPremiumGate
          feature="cloud-sync"
          onClose={() => setShowPremiumGate(false)}
          returnPath="/tasbih"
          source="tasbih"
        />
      )}

      {/* Payment Result Popup */}
      {paymentResult && (
        <div
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          style={{ padding: 'max(1rem, env(safe-area-inset-top)) max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(1rem, env(safe-area-inset-left))' }}
        >
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
            {paymentResult === 'success' ? (
              <>
                <div className="text-7xl mb-4 animate-bounce">🎉</div>
                <h2 className="text-2xl font-bold text-green-600 mb-2">{t('tasbih.paymentSuccess')}</h2>
                <p className="text-gray-600 mb-6">{t('tasbih.paymentSuccessMsg')}</p>
                <button
                  onClick={() => setPaymentResult(null)}
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                >
                  {isRefreshingUser ? t('tasbih.updating') : t('tasbih.continue')}
                </button>
              </>
            ) : (
              <>
                <div className="text-7xl mb-4">🤔</div>
                <h2 className="text-2xl font-bold text-amber-600 mb-2">{t('tasbih.paymentCanceled')}</h2>
                <p className="text-gray-600 mb-6">{t('tasbih.paymentCanceledMsg')}</p>
                <div className="space-y-2">
                  <button
                    onClick={() => { setPaymentResult(null); setShowPremiumGate(true); }}
                    className="w-full py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                  >
                    {t('tasbih.tryAgain')}
                  </button>
                  <button
                    onClick={() => setPaymentResult(null)}
                    className="w-full py-2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {t('tasbih.continueWithFree')}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hide scrollbar CSS */}
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}

export default TasbihView;
