/**
 * Emotional Journey Tracker
 * Track how Quran reading affects your mood and spiritual wellbeing
 * Features:
 * - Quick mood check after reading
 * - Weekly/monthly insights
 * - Personalized surah suggestions
 * - Emotional journey visualization
 */

import { useState, useEffect, useCallback, memo, useMemo } from 'react';
import { Icons } from './Icons';
import { SURAHS } from '../../data';
import { useTranslation } from '../../contexts/LocaleContext';

// Mood definitions with colors and Arabic translations
const MOODS = [
  { id: 'peaceful', label: 'Peaceful', labelAr: 'سكينة', icon: 'Cloud', color: '#06B6D4', gradient: 'from-cyan-500 to-teal-500' },
  { id: 'motivated', label: 'Motivated', labelAr: 'همة', icon: 'Zap', color: '#F59E0B', gradient: 'from-amber-500 to-orange-500' },
  { id: 'reflective', label: 'Reflective', labelAr: 'تأمل', icon: 'Eye', color: '#8B5CF6', gradient: 'from-purple-500 to-indigo-500' },
  { id: 'moved', label: 'Moved', labelAr: 'تأثر', icon: 'Heart', color: '#EC4899', gradient: 'from-pink-500 to-rose-500' },
  { id: 'grateful', label: 'Grateful', labelAr: 'شكر', icon: 'Star', color: '#10B981', gradient: 'from-emerald-500 to-green-500' },
  { id: 'hopeful', label: 'Hopeful', labelAr: 'رجاء', icon: 'Sun', color: '#3B82F6', gradient: 'from-blue-500 to-sky-500' },
];

// Surah recommendations based on emotional states
const MOOD_SURAH_RECOMMENDATIONS = {
  anxious: [93, 94, 55, 20, 35], // Ad-Duha, Ash-Sharh, Ar-Rahman, Ta-Ha, Fatir
  sad: [12, 93, 94, 65, 3], // Yusuf, Ad-Duha, Ash-Sharh, At-Talaq, Al-Imran
  stressed: [55, 67, 36, 13, 89], // Ar-Rahman, Al-Mulk, Ya-Sin, Ar-Ra'd, Al-Fajr
  grateful: [1, 55, 14, 31, 16], // Al-Fatiha, Ar-Rahman, Ibrahim, Luqman, An-Nahl
  seeking_guidance: [2, 3, 18, 6, 17], // Al-Baqarah, Al-Imran, Al-Kahf, Al-An'am, Al-Isra
  need_strength: [8, 3, 47, 9, 61], // Al-Anfal, Al-Imran, Muhammad, At-Tawbah, As-Saff
};

// Storage key for emotional data
const STORAGE_KEY = 'w3quran_emotional_journey';

// Get stored emotional data
const getStoredData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { entries: [], insights: {} };
  } catch {
    return { entries: [], insights: {} };
  }
};

// Save emotional data
const saveData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    console.error('Failed to save emotional data');
  }
};

// Quick Mood Selector Component
export const MoodSelector = memo(function MoodSelector({ onSelect, selectedMood }) {
  const { t } = useTranslation();
  const moodLabels = {
    peaceful: t('mood.peaceful'),
    motivated: t('mood.motivated'),
    reflective: t('mood.reflective'),
    moved: t('mood.moved'),
    grateful: t('mood.grateful'),
    hopeful: t('mood.hopeful'),
  };
  return (
    <div className="grid grid-cols-3 gap-3">
      {MOODS.map((mood) => {
        const Icon = Icons[mood.icon] || Icons.Heart;
        const isSelected = selectedMood === mood.id;
        return (
          <button
            key={mood.id}
            onClick={() => onSelect(mood.id)}
            className={`p-4 rounded-2xl transition-all duration-300 flex flex-col items-center gap-2 ${
              isSelected
                ? `bg-gradient-to-br ${mood.gradient} scale-105 shadow-lg`
                : 'bg-white/10 hover:bg-white/20 hover:scale-102'
            }`}
            style={{
              boxShadow: isSelected ? `0 10px 30px ${mood.color}40` : 'none',
            }}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isSelected ? 'bg-white/30' : `bg-gradient-to-br ${mood.gradient}`
              }`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-medium text-sm">{moodLabels[mood.id] || mood.label}</span>
            <span className="text-white/60 text-xs" dir="rtl">{mood.labelAr}</span>
          </button>
        );
      })}
    </div>
  );
});

// Mood Entry Form - Shown after reading
export const MoodEntryForm = memo(function MoodEntryForm({
  isVisible,
  onClose,
  surahId,
  surahName,
  readingDuration, // in minutes
  versesRead,
}) {
  const { t } = useTranslation();
  const [selectedMood, setSelectedMood] = useState(null);
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = useCallback(() => {
    if (!selectedMood) return;

    const data = getStoredData();
    const entry = {
      id: Date.now(),
      date: new Date().toISOString(),
      surahId,
      surahName,
      mood: selectedMood,
      notes: notes.trim(),
      duration: readingDuration,
      versesRead,
    };

    data.entries.unshift(entry);

    // Keep only last 365 entries
    if (data.entries.length > 365) {
      data.entries = data.entries.slice(0, 365);
    }

    // Update insights
    if (!data.insights.surahMoods) data.insights.surahMoods = {};
    if (!data.insights.surahMoods[surahId]) {
      data.insights.surahMoods[surahId] = {};
    }
    data.insights.surahMoods[surahId][selectedMood] =
      (data.insights.surahMoods[surahId][selectedMood] || 0) + 1;

    saveData(data);
    setSaved(true);

    setTimeout(() => {
      onClose();
      setSaved(false);
      setSelectedMood(null);
      setNotes('');
    }, 1500);
  }, [selectedMood, notes, surahId, surahName, readingDuration, versesRead, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 max-w-md w-full shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {saved ? (
          <div className="text-center py-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
              <Icons.Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{t('success.saved')}</h3>
            <p className="text-white/60">Your emotional journey is being tracked</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Icons.Activity className="w-5 h-5 text-purple-400" />
                  {t('mood.howFeeling')}
                </h2>
                <p className="text-white/60 text-sm mt-1">
                  After reading {surahName}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-all"
              >
                <Icons.X className="w-5 h-5 text-white/70" />
              </button>
            </div>

            {/* Reading Stats */}
            {(readingDuration || versesRead) && (
              <div className="flex gap-4 mb-6 p-3 rounded-xl bg-white/5">
                {readingDuration && (
                  <div className="flex items-center gap-2">
                    <Icons.Clock className="w-4 h-4 text-cyan-400" />
                    <span className="text-white/80 text-sm">{readingDuration} min</span>
                  </div>
                )}
                {versesRead && (
                  <div className="flex items-center gap-2">
                    <Icons.BookOpen className="w-4 h-4 text-amber-400" />
                    <span className="text-white/80 text-sm">{versesRead} verses</span>
                  </div>
                )}
              </div>
            )}

            {/* Mood Selector */}
            <MoodSelector selectedMood={selectedMood} onSelect={setSelectedMood} />

            {/* Notes (Optional) */}
            <div className="mt-6">
              <label className="text-white/60 text-xs uppercase tracking-wide">
                Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any thoughts or reflections..."
                className="w-full mt-2 p-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50 resize-none"
                rows={2}
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={!selectedMood}
              className={`w-full mt-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                selectedMood
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-102'
                  : 'bg-white/10 text-white/40 cursor-not-allowed'
              }`}
            >
              <Icons.Check className="w-5 h-5" />
              {t('common.save')}
            </button>
          </>
        )}
      </div>
    </div>
  );
});

// Main Emotional Journey Dashboard
const EmotionalTracker = memo(function EmotionalTracker({ isVisible, onClose, onNavigateToSurah }) {
  const { t } = useTranslation();
  const [data, setData] = useState({ entries: [], insights: {} });
  const [activeTab, setActiveTab] = useState('overview'); // overview, history, suggestions
  const [currentMoodState, setCurrentMoodState] = useState(null);

  // Load data on mount
  useEffect(() => {
    if (isVisible) {
      setData(getStoredData());
    }
  }, [isVisible]);

  // Calculate insights
  const insights = useMemo(() => {
    const { entries } = data;
    if (entries.length === 0) return null;

    // Most common mood
    const moodCounts = {};
    entries.forEach((e) => {
      moodCounts[e.mood] = (moodCounts[e.mood] || 0) + 1;
    });
    const mostCommonMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0]?.[0];

    // Most peaceful surah
    const peacefulSurahs = {};
    entries.forEach((e) => {
      if (e.mood === 'peaceful' || e.mood === 'grateful') {
        peacefulSurahs[e.surahId] = (peacefulSurahs[e.surahId] || 0) + 1;
      }
    });
    const mostPeacefulSurahId = Object.entries(peacefulSurahs).sort((a, b) => b[1] - a[1])[0]?.[0];
    const mostPeacefulSurah = mostPeacefulSurahId ? SURAHS.find((s) => s.id === parseInt(mostPeacefulSurahId)) : null;

    // Weekly stats
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const weeklyEntries = entries.filter((e) => new Date(e.date).getTime() > weekAgo);
    const totalMinutes = weeklyEntries.reduce((sum, e) => sum + (e.duration || 0), 0);

    // Streak calculation
    let streak = 0;
    const entriesByDate = {};
    entries.forEach((e) => {
      const dateStr = new Date(e.date).toDateString();
      entriesByDate[dateStr] = true;
    });

    // Start checking from yesterday if today has no entry yet
    const today = new Date().toDateString();
    const startOffset = entriesByDate[today] ? 0 : 1;

    for (let i = startOffset; i < 365; i++) {
      const checkDate = new Date(Date.now() - i * 24 * 60 * 60 * 1000).toDateString();
      if (entriesByDate[checkDate]) {
        streak++;
      } else {
        break;
      }
    }

    // If we started from yesterday and today has an entry, add it
    if (startOffset === 0) {
      // Already counting from today
    }

    return {
      totalEntries: entries.length,
      mostCommonMood,
      mostPeacefulSurah,
      weeklyMinutes: totalMinutes,
      weeklyEntries: weeklyEntries.length,
      streak,
    };
  }, [data]);

  // Get personalized suggestions based on current mood
  const suggestions = useMemo(() => {
    if (!currentMoodState) return [];
    const surahIds = MOOD_SURAH_RECOMMENDATIONS[currentMoodState] || [];
    return surahIds.map((id) => SURAHS.find((s) => s.id === id)).filter(Boolean);
  }, [currentMoodState]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Icons.Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{t('mood.title')}</h2>
                <p className="text-white/60 text-sm">Track your spiritual wellness</p>
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
              { id: 'overview', label: 'Overview', icon: Icons.PieChart },
              { id: 'history', label: t('mood.moodHistory'), icon: Icons.Clock },
              { id: 'suggestions', label: 'For You', icon: Icons.Sparkles },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-purple-500/30 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {insights ? (
                <>
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Icons.Fire className="w-5 h-5 text-orange-400" />
                        <span className="text-white/60 text-sm">{t('mood.streak')}</span>
                      </div>
                      <p className="text-3xl font-bold text-white">{insights.streak} {t('stats.days')}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Icons.BookOpen className="w-5 h-5 text-purple-400" />
                        <span className="text-white/60 text-sm">{t('stats.thisWeek')}</span>
                      </div>
                      <p className="text-3xl font-bold text-white">{insights.weeklyEntries} {t('mood.sessions')}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Icons.Clock className="w-5 h-5 text-amber-400" />
                        <span className="text-white/60 text-sm">Time This Week</span>
                      </div>
                      <p className="text-3xl font-bold text-white">{insights.weeklyMinutes} min</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Icons.TrendingUp className="w-5 h-5 text-emerald-400" />
                        <span className="text-white/60 text-sm">Total Entries</span>
                      </div>
                      <p className="text-3xl font-bold text-white">{insights.totalEntries}</p>
                    </div>
                  </div>

                  {/* Most Common Mood */}
                  {insights.mostCommonMood && (
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-white/60 text-sm mb-3">Your Most Common Feeling</h3>
                      <div className="flex items-center gap-3">
                        {(() => {
                          const mood = MOODS.find((m) => m.id === insights.mostCommonMood);
                          const Icon = Icons[mood?.icon] || Icons.Heart;
                          return (
                            <>
                              <div
                                className={`w-14 h-14 rounded-full bg-gradient-to-br ${mood?.gradient} flex items-center justify-center`}
                              >
                                <Icon className="w-7 h-7 text-white" />
                              </div>
                              <div>
                                <p className="text-white font-bold text-lg">{mood?.label}</p>
                                <p className="text-white/60 text-sm" dir="rtl">{mood?.labelAr}</p>
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  )}

                  {/* Most Peaceful Surah */}
                  {insights.mostPeacefulSurah && (
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <h3 className="text-white/60 text-sm mb-3">Brings You Most Peace</h3>
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                          <span className="text-white font-bold">{insights.mostPeacefulSurah.id}</span>
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg">{insights.mostPeacefulSurah.name}</p>
                          <p className="text-white/60 text-sm" dir="rtl">{insights.mostPeacefulSurah.arabic}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    <Icons.Activity className="w-10 h-10 text-white/40" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Start Your Journey</h3>
                  <p className="text-white/60 text-sm max-w-xs mx-auto">
                    After reading Quran, track how you feel to see insights about your spiritual wellness.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-3">
              {data.entries.length > 0 ? (
                data.entries.slice(0, 30).map((entry) => {
                  const mood = MOODS.find((m) => m.id === entry.mood);
                  const Icon = Icons[mood?.icon] || Icons.Heart;
                  const date = new Date(entry.date);
                  return (
                    <div
                      key={entry.id}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4"
                    >
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${mood?.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-white font-medium">{entry.surahName}</p>
                          <span className="text-white/40 text-xs">
                            {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                        <p className="text-white/60 text-sm">{mood?.label}</p>
                        {entry.notes && (
                          <p className="text-white/40 text-xs mt-1 truncate">{entry.notes}</p>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-12">
                  <Icons.Clock className="w-12 h-12 text-white/20 mx-auto mb-4" />
                  <p className="text-white/60">{t('errors.notFound')}</p>
                </div>
              )}
            </div>
          )}

          {/* Suggestions Tab */}
          {activeTab === 'suggestions' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-medium mb-4">{t('mood.howFeeling')}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'anxious', label: t('mood.anxious'), icon: 'Cloud', color: '#EF4444' },
                    { id: 'sad', label: t('mood.sad'), icon: 'Frown', color: '#6366F1' },
                    { id: 'stressed', label: 'Stressed', icon: 'Zap', color: '#F59E0B' },
                    { id: 'grateful', label: t('mood.grateful'), icon: 'Heart', color: '#10B981' },
                    { id: 'seeking_guidance', label: 'Seeking Guidance', icon: 'Compass', color: '#8B5CF6' },
                    { id: 'need_strength', label: 'Need Strength', icon: 'Award', color: '#EC4899' },
                  ].map((state) => {
                    const Icon = Icons[state.icon] || Icons.Heart;
                    const isSelected = currentMoodState === state.id;
                    return (
                      <button
                        key={state.id}
                        onClick={() => setCurrentMoodState(isSelected ? null : state.id)}
                        className={`p-3 rounded-xl transition-all flex items-center gap-3 ${
                          isSelected
                            ? 'bg-white/20 ring-2 ring-white/40'
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${state.color}30` }}
                        >
                          <Icon className="w-5 h-5" style={{ color: state.color }} />
                        </div>
                        <span className="text-white text-sm font-medium">{state.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {suggestions.length > 0 && (
                <div>
                  <h3 className="text-white font-medium mb-4">{t('mood.suggestedSurahs')}</h3>
                  <div className="space-y-3">
                    {suggestions.map((surah) => (
                      <button
                        key={surah.id}
                        onClick={() => onNavigateToSurah && onNavigateToSurah(surah.id)}
                        className="w-full p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20 flex items-center gap-4 hover:from-purple-500/30 hover:to-pink-500/30 transition-all hover:scale-[1.02] text-left"
                      >
                        <div className="w-12 h-12 rounded-full bg-purple-500/30 flex items-center justify-center">
                          <span className="text-white font-bold">{surah.id}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium">{surah.name}</p>
                          <p className="text-white/60 text-sm">{surah.meaning}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/80 text-lg" dir="rtl" style={{ fontFamily: "'Scheherazade New', serif" }}>
                            {surah.arabic}
                          </p>
                          <p className="text-white/40 text-xs">{surah.ayahs} verses</p>
                        </div>
                        <Icons.ChevronRight className="w-5 h-5 text-white/40" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default EmotionalTracker;
