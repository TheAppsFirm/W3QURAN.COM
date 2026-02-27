/**
 * Gamification Hub
 * Central hub for XP, levels, achievements, daily challenges, and streaks
 */

import { useState, useEffect, memo, useMemo } from 'react';
import { Icons } from './Icons';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../contexts/LocaleContext';
import {
  LEVELS,
  ACHIEVEMENTS,
  CHALLENGE_TEMPLATES,
  getGamificationData,
  getLevelInfo,
  generateDailyChallenges,
  updateStreak,
} from '../../data/gamificationSystem';

// Safe icon resolver — prevents React Error #130 from undefined icons
const getIcon = (name, fallback = Icons.Star) => Icons[name] || fallback;

// Helper: pick localized field from data objects (e.g., name/nameAr/nameUr)
const getLocalized = (obj, field, lang) => {
  if (lang === 'ar') return obj[`${field}Ar`] || obj[field] || '';
  if (lang === 'ur') return obj[`${field}Ur`] || obj[field] || '';
  return obj[field] || '';
};

// Build a lookup map from challenge templateId → template (for cached challenges missing locale fields)
const CHALLENGE_TEMPLATE_MAP = {};
CHALLENGE_TEMPLATES.forEach(t => { CHALLENGE_TEMPLATE_MAP[t.id] = t; });

// Get localized challenge field — checks challenge object first, falls back to template
const getChallengeLocalized = (challenge, field, lang) => {
  const suffix = lang === 'ar' ? 'Ar' : lang === 'ur' ? 'Ur' : '';
  const localizedKey = suffix ? `${field}${suffix}` : field;

  // If the challenge object has the localized field, use it
  if (challenge[localizedKey]) return challenge[localizedKey];

  // Fall back to the template (handles old cached challenges without locale fields)
  const template = CHALLENGE_TEMPLATE_MAP[challenge.templateId];
  if (template) {
    const templateValue = template[localizedKey] || template[field] || '';
    // For description, replace {target} with the challenge's actual target
    if (field === 'description' && challenge.target) {
      return templateValue.replace('{target}', challenge.target);
    }
    return templateValue;
  }

  return challenge[field] || '';
};

// Level Badge Component (used in MiniXPDisplay)
const LevelBadge = memo(function LevelBadge({ level, size = 'md' }) {
  const sizes = {
    sm: { badge: 'w-8 h-8', text: 'text-xs' },
    md: { badge: 'w-12 h-12', text: 'text-sm' },
    lg: { badge: 'w-20 h-20', text: 'text-xl' },
  };

  const s = sizes[size];

  return (
    <div
      className={`${s.badge} rounded-full flex items-center justify-center font-bold text-white relative`}
      style={{
        background: `linear-gradient(135deg, ${level.color}, ${level.color}aa)`,
        boxShadow: `0 0 20px ${level.color}60`,
      }}
    >
      <span className={s.text}>{level.level}</span>
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{ border: `2px solid ${level.color}`, opacity: 0.5 }}
      />
    </div>
  );
});

// Profile Avatar — shows user's Google picture with level badge overlay
const ProfileAvatar = memo(function ProfileAvatar({ user, level }) {
  return (
    <div className="relative flex-shrink-0">
      {user?.picture ? (
        <img
          src={user.picture}
          alt={user.name || ''}
          className="w-20 h-20 rounded-full object-cover"
          style={{
            border: `3px solid ${level.color}`,
            boxShadow: `0 0 20px ${level.color}60, inset 0 0 20px rgba(0,0,0,0.2)`,
          }}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
          style={{
            background: `linear-gradient(135deg, ${level.color}, ${level.color}aa)`,
            boxShadow: `0 0 20px ${level.color}60`,
          }}
        >
          {(user?.name || 'U')[0].toUpperCase()}
        </div>
      )}
      {/* Level badge overlay */}
      <div
        className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold border-2 border-black/50"
        style={{
          background: `linear-gradient(135deg, ${level.color}, ${level.color}cc)`,
          boxShadow: `0 2px 8px ${level.color}60`,
        }}
      >
        {level.level}
      </div>
      {/* Glow ring */}
      <div
        className="absolute inset-0 rounded-full animate-pulse pointer-events-none"
        style={{ border: `2px solid ${level.color}`, opacity: 0.4 }}
      />
    </div>
  );
});

// XP Progress Bar Component
const XPProgressBar = memo(function XPProgressBar({ levelInfo, xp }) {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-white/60">{t('gamification.xpProgress', 'XP Progress')}</span>
        <span className="text-white font-medium">{xp} {t('gamification.xpLabel', 'XP')}</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 relative"
          style={{
            width: `${levelInfo.progressPercent}%`,
            background: `linear-gradient(90deg, ${levelInfo.current.color}, ${levelInfo.next?.color || levelInfo.current.color})`,
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-white/40">
        <span>{levelInfo.current.name}</span>
        {levelInfo.next && (
          <span>{levelInfo.xpNeeded - levelInfo.xpProgress} {t('gamification.xpToNext', 'XP to')} {levelInfo.next.name}</span>
        )}
      </div>
    </div>
  );
});

// Streak Display Component
const StreakDisplay = memo(function StreakDisplay({ current, best }) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-4">
      {/* Current Streak */}
      <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
        <div className="flex items-center gap-2 mb-2">
          <Icons.Fire className="w-5 h-5 text-orange-400" />
          <span className="text-white/60 text-sm">{t('gamification.currentStreak', 'Current Streak')}</span>
        </div>
        <p className="text-3xl font-bold text-white">{current}</p>
        <p className="text-white/40 text-xs">{t('stats.days')}</p>
      </div>

      {/* Best Streak */}
      <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
        <div className="flex items-center gap-2 mb-2">
          <Icons.Trophy className="w-5 h-5 text-purple-400" />
          <span className="text-white/60 text-sm">{t('gamification.bestStreak', 'Best Streak')}</span>
        </div>
        <p className="text-3xl font-bold text-white">{best}</p>
        <p className="text-white/40 text-xs">{t('stats.days')}</p>
      </div>
    </div>
  );
});

// Daily Challenge Card Component
const ChallengeCard = memo(function ChallengeCard({ challenge }) {
  const { t, language } = useTranslation();
  const Icon = getIcon(challenge.icon);
  const progress = Math.min((challenge.progress / challenge.target) * 100, 100);

  return (
    <div
      className={`p-4 rounded-xl border transition-all ${
        challenge.completed
          ? 'bg-green-500/10 border-green-500/30'
          : 'bg-white/5 border-white/10'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${challenge.color}30` }}
        >
          <Icon className="w-5 h-5" style={{ color: challenge.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-white font-medium truncate">{getChallengeLocalized(challenge, 'name', language)}</h4>
            {challenge.completed && (
              <Icons.Check className="w-5 h-5 text-green-400" />
            )}
          </div>
          <p className="text-white/60 text-sm mb-2">{getChallengeLocalized(challenge, 'description', language)}</p>

          {/* Progress bar */}
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${progress}%`,
                backgroundColor: challenge.completed ? '#10B981' : challenge.color,
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-1 text-xs">
            <span className="text-white/40">{challenge.progress}/{challenge.target}</span>
            <span className="text-white/60">+{challenge.xpReward} {t('gamification.xpLabel', 'XP')}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

// Achievement Badge Component
const AchievementBadge = memo(function AchievementBadge({ achievement, unlocked }) {
  const { language } = useTranslation();
  const Icon = getIcon(achievement.icon, Icons.Award);
  const displayName = getLocalized(achievement, 'name', language);
  const displayDesc = getLocalized(achievement, 'description', language);

  return (
    <div
      className={`p-3 rounded-xl border text-center transition-all ${
        unlocked
          ? 'bg-white/5 border-white/20'
          : 'bg-white/5 border-white/5 opacity-40 grayscale'
      }`}
      title={displayDesc}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2"
        style={{
          backgroundColor: unlocked ? `${achievement.color}30` : 'rgba(255,255,255,0.1)',
          boxShadow: unlocked ? `0 0 20px ${achievement.color}40` : 'none',
        }}
      >
        <Icon
          className="w-6 h-6"
          style={{ color: unlocked ? achievement.color : 'rgba(255,255,255,0.3)' }}
        />
      </div>
      <p className="text-white text-xs font-medium truncate">{displayName}</p>
      <p
        className="text-xs truncate"
        style={{ fontFamily: "'Scheherazade New', serif", color: unlocked ? achievement.color : 'rgba(255,255,255,0.3)' }}
        dir="rtl"
      >
        {achievement.nameAr}
      </p>
    </div>
  );
});

// Stats Grid Component
const StatsGrid = memo(function StatsGrid({ stats }) {
  const { t } = useTranslation();
  const statItems = [
    { label: t('gamification.versesRead', 'Verses Read'), value: stats.versesRead, icon: 'BookOpen', color: '#10B981' },
    { label: t('gamification.surahsCompleted', 'Surahs Completed'), value: stats.surahsCompleted.length, icon: 'Book', color: '#3B82F6' },
    { label: t('gamification.meditations', 'Meditations'), value: stats.meditationSessions, icon: 'Breath', color: '#8B5CF6' },
    { label: t('gamification.timeCapsules', 'Time Capsules'), value: stats.capsuleCreated, icon: 'Capsule', color: '#F472B6' },
    { label: t('gamification.locationsFound', 'Locations Found'), value: stats.mapLocationsVisited.length, icon: 'Globe3D', color: '#0EA5E9' },
    { label: t('gamification.shares', 'Shares'), value: stats.sharesCount, icon: 'Share', color: '#10B981' },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {statItems.map((stat) => {
        const Icon = getIcon(stat.icon);
        return (
          <div
            key={stat.label}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-center"
          >
            <Icon className="w-5 h-5 mx-auto mb-1" style={{ color: stat.color }} />
            <p className="text-xl font-bold text-white">{stat.value}</p>
            <p className="text-white/40 text-xs">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
});

// Leaderboard Row Component - Compact pill design on mobile
const LeaderboardRow = memo(function LeaderboardRow({ entry, isCurrentUser }) {
  const { t } = useTranslation();
  const levelColor = LEVELS.find(l => l.level === entry.level)?.color || '#6B7280';

  return (
    <div
      className={`flex items-center gap-1.5 sm:gap-3 p-1.5 sm:p-3 rounded-full sm:rounded-xl transition-all ${
        isCurrentUser
          ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30'
          : 'bg-white/5 border border-white/5'
      }`}
    >
      {/* Rank */}
      <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold flex-shrink-0 ${
        entry.rank === 1 ? 'bg-yellow-500/30 text-yellow-400' :
        entry.rank === 2 ? 'bg-gray-300/30 text-gray-300' :
        entry.rank === 3 ? 'bg-amber-700/30 text-amber-600' :
        'bg-white/10 text-white/60'
      }`}>
        {entry.rank <= 3 ? ['', '🥇', '🥈', '🥉'][entry.rank] : entry.rank}
      </div>

      {/* Avatar */}
      {entry.picture ? (
        <img
          src={entry.picture}
          alt=""
          className="w-7 h-7 sm:w-10 sm:h-10 rounded-full border-2 flex-shrink-0 object-cover"
          style={{ borderColor: levelColor }}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div
          className="w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-base font-bold flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${levelColor}, ${levelColor}aa)` }}
        >
          {(entry.displayName || 'U')[0]}
        </div>
      )}

      {/* Name + Level - Hidden level on mobile */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium truncate text-xs sm:text-sm">
          {entry.displayName}
          {isCurrentUser && <span className="text-amber-400 text-[10px] sm:text-xs ml-1">({t('gamification.you', 'You')})</span>}
        </p>
        <p className="text-[10px] sm:text-xs hidden sm:block" style={{ color: levelColor }}>{t('gamification.levelAbbr', 'Lv.')} {entry.level}</p>
      </div>

      {/* XP + Streak - Compact on mobile */}
      <div className="text-right flex-shrink-0 flex sm:flex-col items-center sm:items-end gap-1 sm:gap-0">
        <p className="text-white font-bold text-[10px] sm:text-sm">{entry.xp.toLocaleString()}</p>
        {entry.currentStreak > 0 && (
          <div className="flex items-center gap-0.5 text-orange-400 text-[10px] sm:text-xs">
            <Icons.Fire className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="hidden sm:inline">{entry.currentStreak}{t('gamification.dayAbbr', 'd')}</span>
            <span className="sm:hidden">{entry.currentStreak}</span>
          </div>
        )}
      </div>
    </div>
  );
});

// Leaderboard Tab Component
const LeaderboardTab = memo(function LeaderboardTab({ data, loading, error, sort, onSortChange }) {
  const { t } = useTranslation();
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-white/20 border-t-amber-400 rounded-full animate-spin" />
        <p className="text-white/40 text-sm mt-3">{t('common.loading')}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <Icons.AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
        <p className="text-white/60 text-sm">{error}</p>
        <button
          onClick={() => onSortChange(sort)}
          className="mt-3 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-all"
        >
          {t('common.retry')}
        </button>
      </div>
    );
  }

  if (!data?.leaderboard?.length) {
    return (
      <div className="text-center py-12">
        <Icons.Trophy className="w-10 h-10 text-white/20 mx-auto mb-3" />
        <p className="text-white/40 text-sm">{t('gamification.noLeaderboardData', 'No leaderboard data yet. Keep reading!')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Sort controls */}
      <div className="flex gap-2">
        {[
          { id: 'xp', label: t('gamification.sortXP', 'XP (Naikee)') },
          { id: 'streak', label: t('gamification.sortStreak', 'Streak') },
          { id: 'verses', label: t('gamification.sortVerses', 'Verses') },
        ].map(s => (
          <button
            key={s.id}
            onClick={() => onSortChange(s.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              sort === s.id
                ? 'bg-amber-500/30 text-amber-400 border border-amber-500/50'
                : 'bg-white/5 text-white/50 hover:bg-white/10 border border-white/10'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Current user's rank if not in top list */}
      {data.myRank && data.myRank.rank > data.leaderboard.length && (
        <div className="space-y-2">
          <p className="text-white/40 text-xs uppercase">{t('gamification.yourRank', 'Your Rank')}</p>
          <LeaderboardRow entry={data.myRank} isCurrentUser />
          <div className="border-b border-white/10 my-2" />
        </div>
      )}

      {/* Top users */}
      <div className="space-y-2">
        {data.leaderboard.map((entry) => (
          <LeaderboardRow
            key={entry.rank}
            entry={entry}
            isCurrentUser={data.myRank?.rank === entry.rank}
          />
        ))}
      </div>

      <p className="text-center text-white/30 text-xs mt-4">
        {t('gamification.updatedEveryMinute', 'Updated every minute')}
      </p>
    </div>
  );
});

// Main Gamification Hub Component
const GamificationHub = memo(function GamificationHub({
  isVisible,
  onClose,
}) {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');
  const [data, setData] = useState(null);
  const [levelInfo, setLevelInfo] = useState(null);
  const [challenges, setChallenges] = useState([]);

  // Leaderboard state
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [leaderboardLoading, setLeaderboardLoading] = useState(false);
  const [leaderboardError, setLeaderboardError] = useState(null);
  const [leaderboardSort, setLeaderboardSort] = useState('xp');

  // Load gamification data
  useEffect(() => {
    if (!isVisible) return;

    const gamData = getGamificationData();
    setData(gamData);
    setLevelInfo(getLevelInfo(gamData.xp));
    updateStreak();
    setChallenges(generateDailyChallenges());
  }, [isVisible]);

  // Fetch leaderboard when tab selected
  useEffect(() => {
    if (activeTab !== 'leaderboard' || !isVisible) return;

    setLeaderboardLoading(true);
    setLeaderboardError(null);

    fetch(`/api/leaderboard?sort=${leaderboardSort}&limit=50`, { credentials: 'include' })
      .then(res => res.json())
      .then(result => {
        if (result.error && (!result.leaderboard || result.leaderboard.length === 0)) {
          setLeaderboardError(result.error);
        } else {
          setLeaderboardData(result);
        }
        setLeaderboardLoading(false);
      })
      .catch(() => {
        setLeaderboardError(t('gamification.leaderboardError', 'Could not load leaderboard. Check your connection.'));
        setLeaderboardLoading(false);
      });
  }, [activeTab, leaderboardSort, isVisible]);

  // Achievement categories
  const achievementCategories = useMemo(() => {
    if (!data) return [];

    return [
      { id: 'reading', name: t('gamification.catReading', 'Reading'), achievements: Object.values(ACHIEVEMENTS).filter(a => a.category === 'reading') },
      { id: 'streak', name: t('gamification.catStreaks', 'Streaks'), achievements: Object.values(ACHIEVEMENTS).filter(a => a.category === 'streak') },
      { id: 'features', name: t('gamification.catFeatures', 'Features'), achievements: Object.values(ACHIEVEMENTS).filter(a => a.category === 'features') },
      { id: 'hifz', name: t('gamification.catMemorization', 'Memorization'), achievements: Object.values(ACHIEVEMENTS).filter(a => a.category === 'hifz') },
      { id: 'social', name: t('gamification.catSocial', 'Social'), achievements: Object.values(ACHIEVEMENTS).filter(a => a.category === 'social') },
    ];
  }, [data, t]);

  if (!isVisible || !data || !levelInfo) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-purple-900/80 to-black/90 backdrop-blur-sm" />

      {/* Content */}
      <div
        className="relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <ProfileAvatar user={user} level={levelInfo.current} />
              <div>
                <h2 className="text-2xl font-bold text-white">{levelInfo.current.name}</h2>
                <p
                  className="text-lg"
                  style={{ fontFamily: "'Scheherazade New', serif", color: levelInfo.current.color }}
                  dir="rtl"
                >
                  {levelInfo.current.nameAr}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-all"
            >
              <Icons.X className="w-6 h-6 text-white/70" />
            </button>
          </div>

          {/* XP Bar */}
          <div className="mt-4">
            <XPProgressBar levelInfo={levelInfo} xp={data.xp} />
          </div>
          <p className="text-white/30 text-[10px] mt-1 text-center">{t('gamification.xpExplanation', 'XP = Naikee (نیکی) — every good deed earns you XP')}</p>
        </div>

        {/* Tabs */}
        <div className="flex-shrink-0 flex border-b border-white/10">
          {[
            { id: 'overview', label: t('gamification.overview', 'Overview'), icon: 'Compass' },
            { id: 'challenges', label: t('gamification.dailyGoal'), icon: 'Target' },
            { id: 'achievements', label: t('gamification.badges'), icon: 'Award' },
            { id: 'leaderboard', label: t('gamification.leaderboard'), icon: 'Trophy' },
          ].map((tab) => {
            const Icon = getIcon(tab.icon);
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-3 text-xs sm:text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'text-white border-b-2'
                    : 'text-white/50 hover:text-white/80'
                }`}
                style={{
                  borderColor: activeTab === tab.id ? levelInfo.current.color : 'transparent',
                }}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Streak */}
              <StreakDisplay
                current={data.streaks.current}
                best={data.streaks.best}
              />

              {/* Stats */}
              <div>
                <h3 className="text-white/60 text-sm uppercase mb-3">{t('stats.title')}</h3>
                <StatsGrid stats={data.stats} />
              </div>

              {/* Recent Achievements */}
              {data.achievements.length > 0 && (
                <div>
                  <h3 className="text-white/60 text-sm uppercase mb-3">{t('gamification.achievements')}</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {data.achievements.slice(-4).map((achId) => {
                      const ach = ACHIEVEMENTS[achId];
                      if (!ach) return null;
                      return (
                        <AchievementBadge
                          key={achId}
                          achievement={ach}
                          unlocked={true}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">{t('gamification.dailyGoal')}</h3>
                <span className="text-white/40 text-sm">
                  {challenges.filter(c => c.completed).length}/{challenges.length} {t('gamification.completed', 'completed')}
                </span>
              </div>
              {challenges.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              {achievementCategories.map((cat) => (
                <div key={cat.id}>
                  <h3 className="text-white/60 text-sm uppercase mb-3">{cat.name}</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {cat.achievements.map((ach) => (
                      <AchievementBadge
                        key={ach.id}
                        achievement={ach}
                        unlocked={data.achievements.includes(ach.id)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <LeaderboardTab
              data={leaderboardData}
              loading={leaderboardLoading}
              error={leaderboardError}
              sort={leaderboardSort}
              onSortChange={setLeaderboardSort}
            />
          )}
        </div>
      </div>

    </div>
  );
});

// Mini XP Display (for embedding in header) — uses shared context via props
export const MiniXPDisplay = memo(function MiniXPDisplay({ onClick, xp, levelInfo, streak }) {
  if (!levelInfo) return null;

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all"
    >
      <LevelBadge level={levelInfo.current} size="sm" />
      <div className="text-left">
        <p className="text-white text-xs font-medium">{xp || 0} XP</p>
        <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${levelInfo.progressPercent}%`,
              backgroundColor: levelInfo.current.color,
            }}
          />
        </div>
      </div>
      {streak > 0 && (
        <div className="flex items-center gap-1 text-orange-400">
          <Icons.Fire className="w-3 h-3" />
          <span className="text-xs font-medium">{streak}</span>
        </div>
      )}
    </button>
  );
});

export default GamificationHub;
