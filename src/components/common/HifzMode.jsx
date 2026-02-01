/**
 * Enhanced Hifz Mode Component - Bubble Style
 * Single Responsibility: Spaced repetition memorization interface in bubble modal
 */

import { memo, useState, useEffect, useCallback, useMemo } from 'react';
import BubbleOverlay from './BubbleOverlay';
import { Icons } from './Icons';
import {
  RATING,
  HIFZ_STATE,
  getDueAyahs,
  getTodaySession,
  getHifzStats,
  reviewAyah,
  addAyahRangeToHifz,
  getSurahHifzStats,
  updateDailyGoals,
} from '../../data/hifzTracker';
import { SURAHS } from '../../data';

/**
 * Rating Button Component
 */
const RatingButton = memo(function RatingButton({ rating, label, color, description, onClick, disabled }) {
  return (
    <button
      onClick={() => onClick(rating)}
      disabled={disabled}
      className="flex-1 py-2 px-1 rounded-xl text-center transition-all"
      style={{
        background: disabled ? 'rgba(255,255,255,0.05)' : color,
        color: disabled ? 'rgba(255,255,255,0.3)' : '#fff',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <div className="text-xs font-semibold">{label}</div>
      <div className="text-[9px] opacity-80">{description}</div>
    </button>
  );
});

/**
 * Progress Ring Component
 */
const ProgressRing = memo(function ProgressRing({ percentage, size = 60, strokeWidth = 5, color = '#a78bfa' }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={strokeWidth} />
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
    </svg>
  );
});

/**
 * Stat Bubble Component
 */
const StatBubble = memo(function StatBubble({ label, value, color = '#a78bfa' }) {
  return (
    <div className="flex flex-col items-center p-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.08)' }}>
      <div className="text-lg font-bold" style={{ color }}>{value}</div>
      <div className="text-[9px] text-white/50">{label}</div>
    </div>
  );
});

/**
 * Ayah Review Card
 */
const AyahReviewCard = memo(function AyahReviewCard({ ayah, surahInfo, onRate, showAnswer, onShowAnswer }) {
  return (
    <div className="p-3 rounded-2xl mb-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
      {/* Surah Info */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}>
            {ayah.surahId}
          </div>
          <div>
            <div className="text-xs font-medium">{surahInfo?.name || `Surah ${ayah.surahId}`}</div>
            <div className="text-[10px] text-white/50">Ayah {ayah.ayahNumber}</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-lg text-[10px]" style={{
          background: ayah.state === HIFZ_STATE.MASTERED ? 'rgba(34,197,94,0.2)' : ayah.state === HIFZ_STATE.LEARNING ? 'rgba(251,191,36,0.2)' : 'rgba(96,165,250,0.2)',
          color: ayah.state === HIFZ_STATE.MASTERED ? '#4ade80' : ayah.state === HIFZ_STATE.LEARNING ? '#fbbf24' : '#60a5fa',
        }}>
          {ayah.state}
        </span>
      </div>

      {/* Question Area */}
      <div className="p-3 rounded-xl mb-2 min-h-[60px] flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.2)' }}>
        {showAnswer ? (
          <div className="text-center">
            <div className="text-[11px] text-white/50">Recite Ayah {ayah.ayahNumber} from memory</div>
            <div className="text-[9px] text-white/40 mt-1">Check and rate your response</div>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-xl mb-1">?</div>
            <div className="text-[11px] text-white/60">Recall Ayah {ayah.ayahNumber}</div>
          </div>
        )}
      </div>

      {/* Actions */}
      {!showAnswer ? (
        <button onClick={onShowAnswer} className="w-full py-2 rounded-xl text-xs font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}>
          Show Answer
        </button>
      ) : (
        <div className="flex gap-1">
          <RatingButton rating={RATING.AGAIN} label="Again" color="rgba(239,68,68,0.3)" description="<1m" onClick={onRate} />
          <RatingButton rating={RATING.HARD} label="Hard" color="rgba(251,191,36,0.3)" description="~10m" onClick={onRate} />
          <RatingButton rating={RATING.GOOD} label="Good" color="rgba(34,197,94,0.3)" description={`${ayah.interval || 1}d`} onClick={onRate} />
          <RatingButton rating={RATING.EASY} label="Easy" color="rgba(96,165,250,0.3)" description={`${Math.round((ayah.interval || 1) * 1.3)}d`} onClick={onRate} />
        </div>
      )}

      {/* Stats */}
      <div className="flex justify-center gap-3 mt-2 text-[9px] text-white/40">
        <span>Reviews: {ayah.totalReviews}</span>
        <span>Interval: {ayah.interval || 0}d</span>
        <span>Ease: {(ayah.ease || 2.5).toFixed(1)}</span>
      </div>
    </div>
  );
});

/**
 * Add Ayahs Panel
 */
const AddAyahsPanel = memo(function AddAyahsPanel({ onAdd, onClose }) {
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [startAyah, setStartAyah] = useState(1);
  const [endAyah, setEndAyah] = useState(7);

  const surahInfo = SURAHS.find(s => s.id === selectedSurah);

  const handleAdd = () => {
    if (startAyah <= endAyah && endAyah <= (surahInfo?.ayahs || 1)) {
      onAdd(selectedSurah, startAyah, endAyah);
      onClose();
    }
  };

  return (
    <div className="p-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
      <h3 className="text-sm font-semibold mb-3">Add Ayahs to Memorize</h3>

      <div className="mb-3">
        <label className="block text-[10px] text-white/60 mb-1">Select Surah</label>
        <select
          value={selectedSurah}
          onChange={(e) => {
            const newSurah = parseInt(e.target.value);
            setSelectedSurah(newSurah);
            setStartAyah(1);
            const info = SURAHS.find(s => s.id === newSurah);
            setEndAyah(Math.min(7, info?.ayahs || 1));
          }}
          className="w-full p-2 rounded-lg text-xs"
          style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}
        >
          {SURAHS.map(surah => (
            <option key={surah.id} value={surah.id}>{surah.id}. {surah.name} ({surah.ayahs})</option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <label className="block text-[10px] text-white/60 mb-1">From</label>
          <input type="number" value={startAyah} onChange={(e) => setStartAyah(Math.max(1, parseInt(e.target.value) || 1))}
            min="1" max={surahInfo?.ayahs || 1} className="w-full p-2 rounded-lg text-xs text-center"
            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} />
        </div>
        <div className="flex-1">
          <label className="block text-[10px] text-white/60 mb-1">To</label>
          <input type="number" value={endAyah} onChange={(e) => setEndAyah(Math.min(surahInfo?.ayahs || 1, parseInt(e.target.value) || 1))}
            min={startAyah} max={surahInfo?.ayahs || 1} className="w-full p-2 rounded-lg text-xs text-center"
            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} />
        </div>
      </div>

      <div className="p-2 rounded-lg mb-3 text-[11px] text-white/70" style={{ background: 'rgba(96,165,250,0.1)' }}>
        Adding {endAyah - startAyah + 1} ayahs from {surahInfo?.name}
      </div>

      <div className="flex gap-2">
        <button onClick={onClose} className="flex-1 py-2 rounded-lg text-xs border border-white/20 text-white">Cancel</button>
        <button onClick={handleAdd} className="flex-1 py-2 rounded-lg text-xs font-semibold text-black"
          style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)' }}>Add Ayahs</button>
      </div>
    </div>
  );
});

/**
 * Settings Panel
 */
const SettingsPanel = memo(function SettingsPanel({ stats, onUpdate }) {
  const [dailyGoal, setDailyGoal] = useState(stats.dailyGoal);
  const [newPerDay, setNewPerDay] = useState(stats.newPerDay);

  const handleSave = () => {
    updateDailyGoals(dailyGoal, newPerDay);
    onUpdate();
  };

  return (
    <div className="space-y-3">
      <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <h4 className="text-xs font-medium mb-3">Daily Goals</h4>

        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] text-white/60">Reviews Per Day</span>
          <input type="number" value={dailyGoal} onChange={(e) => setDailyGoal(Math.max(1, parseInt(e.target.value) || 1))}
            min="1" max="100" className="w-14 px-2 py-1 rounded-lg text-center text-xs"
            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} />
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] text-white/60">New Ayahs Per Day</span>
          <input type="number" value={newPerDay} onChange={(e) => setNewPerDay(Math.max(1, parseInt(e.target.value) || 1))}
            min="1" max="20" className="w-14 px-2 py-1 rounded-lg text-center text-xs"
            style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} />
        </div>

        <button onClick={handleSave} className="w-full py-2 rounded-xl text-xs font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}>
          Save Settings
        </button>
      </div>

      <div className="p-3 rounded-xl text-[11px] text-white/70" style={{ background: 'rgba(251,191,36,0.1)' }}>
        <strong>Tip:</strong> Start with 3-5 new ayahs per day and increase gradually.
      </div>
    </div>
  );
});

/**
 * Main Hifz Mode Component - Bubble Style
 */
const HifzMode = memo(function HifzMode({ onClose }) {
  const [activeTab, setActiveTab] = useState('study');
  const [showAddPanel, setShowAddPanel] = useState(false);
  const [currentAyahIndex, setCurrentAyahIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [session, setSession] = useState(() => getTodaySession());
  const [stats, setStats] = useState(() => getHifzStats());

  const studyQueue = useMemo(() => {
    return [...session.reviewsDue, ...session.newToLearn];
  }, [session]);

  const currentAyah = studyQueue[currentAyahIndex];
  const surahInfo = currentAyah ? SURAHS.find(s => s.id === currentAyah.surahId) : null;

  const handleRate = useCallback((rating) => {
    if (currentAyah) {
      reviewAyah(currentAyah.surahId, currentAyah.ayahNumber, rating);
      if (currentAyahIndex < studyQueue.length - 1) {
        setCurrentAyahIndex(prev => prev + 1);
        setShowAnswer(false);
      } else {
        setSessionComplete(true);
      }
      setStats(getHifzStats());
    }
  }, [currentAyah, currentAyahIndex, studyQueue.length]);

  const handleAddAyahs = useCallback((surahId, startAyah, endAyah) => {
    addAyahRangeToHifz(surahId, startAyah, endAyah);
    setSession(getTodaySession());
    setStats(getHifzStats());
  }, []);

  const resetSession = useCallback(() => {
    setSession(getTodaySession());
    setCurrentAyahIndex(0);
    setShowAnswer(false);
    setSessionComplete(false);
  }, []);

  const tabs = [{ id: 'study', label: 'Study' }, { id: 'stats', label: 'Stats' }, { id: 'settings', label: 'Settings' }];

  return (
    <BubbleOverlay
      onClose={onClose}
      title="Hifz Mode"
      subtitle={`${stats.total} Ayahs | ${stats.streakDays}d Streak`}
      icon={Icons.Book}
      gradient={['#8b5cf6', '#6366f1', '#4f46e5']}
      size="medium"
    >
      {/* Tab Pills */}
      <div className="flex gap-1 mb-3 p-1 rounded-2xl" style={{ background: 'rgba(0,0,0,0.2)' }}>
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-1.5 rounded-xl text-[11px] font-medium transition-all ${
              activeTab === tab.id ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white/70'
            }`}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Study Tab */}
      {activeTab === 'study' && (
        <div>
          {showAddPanel ? (
            <AddAyahsPanel onAdd={handleAddAyahs} onClose={() => setShowAddPanel(false)} />
          ) : studyQueue.length === 0 ? (
            <div className="text-center py-6">
              <div className="text-4xl mb-3">📚</div>
              <div className="text-sm mb-1">No ayahs to study</div>
              <div className="text-[11px] text-white/50 mb-4">Add some ayahs to start memorizing</div>
              <button onClick={() => setShowAddPanel(true)} className="px-6 py-2 rounded-xl text-xs font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}>
                Add Ayahs
              </button>
            </div>
          ) : sessionComplete ? (
            <div className="text-center py-6">
              <div className="text-4xl mb-3">🎉</div>
              <div className="text-sm font-semibold mb-1">Session Complete!</div>
              <div className="text-[11px] text-white/50 mb-4">You reviewed {studyQueue.length} ayahs</div>
              <div className="flex gap-2 justify-center">
                <button onClick={resetSession} className="px-4 py-2 rounded-xl text-xs border border-white/20">Study More</button>
                <button onClick={() => setShowAddPanel(true)} className="px-4 py-2 rounded-xl text-xs font-semibold text-black"
                  style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)' }}>Add More</button>
              </div>
            </div>
          ) : (
            <>
              {/* Progress bar */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <div className="h-full rounded-full transition-all" style={{
                    width: `${((currentAyahIndex + 1) / studyQueue.length) * 100}%`,
                    background: 'linear-gradient(90deg, #8b5cf6, #6366f1)',
                  }} />
                </div>
                <span className="text-[10px] text-white/50">{currentAyahIndex + 1}/{studyQueue.length}</span>
              </div>

              {currentAyah && (
                <AyahReviewCard ayah={currentAyah} surahInfo={surahInfo} onRate={handleRate} showAnswer={showAnswer} onShowAnswer={() => setShowAnswer(true)} />
              )}

              <button onClick={() => setShowAddPanel(true)} className="w-full py-2 rounded-xl text-[11px] border border-dashed border-white/20 text-white/50">
                + Add More Ayahs
              </button>
            </>
          )}
        </div>
      )}

      {/* Stats Tab */}
      {activeTab === 'stats' && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <StatBubble label="Total" value={stats.total} color="#a78bfa" />
            <StatBubble label="Mastered" value={stats.mastered} color="#4ade80" />
            <StatBubble label="Learning" value={stats.learning} color="#fbbf24" />
            <StatBubble label="Retention" value={`${stats.retentionRate}%`} color="#60a5fa" />
          </div>

          <div className="p-3 rounded-2xl text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-3xl font-bold text-amber-400">{stats.streakDays}</div>
            <div className="text-[11px] text-white/60">Day Streak</div>
          </div>

          <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <h4 className="text-xs font-medium mb-2">Details</h4>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between"><span className="text-white/60">Total Reviews</span><span>{stats.totalReviews}</span></div>
              <div className="flex justify-between"><span className="text-white/60">Average Ease</span><span>{stats.avgEase}</span></div>
              <div className="flex justify-between"><span className="text-white/60">New Per Day</span><span>{stats.newPerDay}</span></div>
              <div className="flex justify-between"><span className="text-white/60">Daily Goal</span><span>{stats.dailyGoal}</span></div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && <SettingsPanel stats={stats} onUpdate={() => setStats(getHifzStats())} />}
    </BubbleOverlay>
  );
});

export default HifzMode;
