/**
 * Gamification Hub
 * Central hub for XP, levels, achievements, daily challenges, and streaks
 */

import { useState, useEffect, useCallback, memo, useMemo } from 'react';
import { Icons } from './Icons';
import {
  LEVELS,
  ACHIEVEMENTS,
  getGamificationData,
  getLevelInfo,
  generateDailyChallenges,
  updateStreak,
} from '../../data/gamificationSystem';

// Level Badge Component
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
      {/* Glow ring */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          border: `2px solid ${level.color}`,
          opacity: 0.5,
        }}
      />
    </div>
  );
});

// XP Progress Bar Component
const XPProgressBar = memo(function XPProgressBar({ levelInfo, xp }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-white/60">XP Progress</span>
        <span className="text-white font-medium">{xp} XP</span>
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
          <span>{levelInfo.xpNeeded - levelInfo.xpProgress} XP to {levelInfo.next.name}</span>
        )}
      </div>
    </div>
  );
});

// Streak Display Component
const StreakDisplay = memo(function StreakDisplay({ current, best }) {
  return (
    <div className="flex items-center gap-4">
      {/* Current Streak */}
      <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30">
        <div className="flex items-center gap-2 mb-2">
          <Icons.Fire className="w-5 h-5 text-orange-400" />
          <span className="text-white/60 text-sm">Current Streak</span>
        </div>
        <p className="text-3xl font-bold text-white">{current}</p>
        <p className="text-white/40 text-xs">days</p>
      </div>

      {/* Best Streak */}
      <div className="flex-1 p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
        <div className="flex items-center gap-2 mb-2">
          <Icons.Trophy className="w-5 h-5 text-purple-400" />
          <span className="text-white/60 text-sm">Best Streak</span>
        </div>
        <p className="text-3xl font-bold text-white">{best}</p>
        <p className="text-white/40 text-xs">days</p>
      </div>
    </div>
  );
});

// Daily Challenge Card Component
const ChallengeCard = memo(function ChallengeCard({ challenge }) {
  const Icon = Icons[challenge.icon] || Icons.Star;
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
            <h4 className="text-white font-medium truncate">{challenge.name}</h4>
            {challenge.completed && (
              <Icons.Check className="w-5 h-5 text-green-400" />
            )}
          </div>
          <p className="text-white/60 text-sm mb-2">{challenge.description}</p>

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
            <span className="text-white/60">+{challenge.xpReward} XP</span>
          </div>
        </div>
      </div>
    </div>
  );
});

// Achievement Badge Component
const AchievementBadge = memo(function AchievementBadge({ achievement, unlocked }) {
  const Icon = Icons[achievement.icon] || Icons.Award;

  return (
    <div
      className={`p-3 rounded-xl border text-center transition-all ${
        unlocked
          ? 'bg-white/5 border-white/20'
          : 'bg-white/5 border-white/5 opacity-40 grayscale'
      }`}
      title={achievement.description}
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
      <p className="text-white text-xs font-medium truncate">{achievement.name}</p>
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
  const statItems = [
    { label: 'Verses Read', value: stats.versesRead, icon: 'BookOpen', color: '#10B981' },
    { label: 'Surahs Completed', value: stats.surahsCompleted.length, icon: 'Book', color: '#3B82F6' },
    { label: 'Meditations', value: stats.meditationSessions, icon: 'Breath', color: '#8B5CF6' },
    { label: 'Time Capsules', value: stats.capsuleCreated, icon: 'Capsule', color: '#F472B6' },
    { label: 'Locations Found', value: stats.mapLocationsVisited.length, icon: 'Globe3D', color: '#0EA5E9' },
    { label: 'Shares', value: stats.sharesCount, icon: 'Share', color: '#10B981' },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {statItems.map((stat) => {
        const Icon = Icons[stat.icon] || Icons.Star;
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

// Main Gamification Hub Component
const GamificationHub = memo(function GamificationHub({
  isVisible,
  onClose,
}) {
  const [activeTab, setActiveTab] = useState('overview');
  const [data, setData] = useState(null);
  const [levelInfo, setLevelInfo] = useState(null);
  const [challenges, setChallenges] = useState([]);

  // Load data
  useEffect(() => {
    if (!isVisible) return;

    const gamData = getGamificationData();
    setData(gamData);
    setLevelInfo(getLevelInfo(gamData.xp));

    // Update streak on open
    updateStreak();

    // Generate/get daily challenges
    const dailyChallenges = generateDailyChallenges();
    setChallenges(dailyChallenges);
  }, [isVisible]);

  // Achievement categories
  const achievementCategories = useMemo(() => {
    if (!data) return [];

    return [
      { id: 'reading', name: 'Reading', achievements: Object.values(ACHIEVEMENTS).filter(a => a.category === 'reading') },
      { id: 'streak', name: 'Streaks', achievements: Object.values(ACHIEVEMENTS).filter(a => a.category === 'streak') },
      { id: 'features', name: 'Features', achievements: Object.values(ACHIEVEMENTS).filter(a => a.category === 'features') },
      { id: 'hifz', name: 'Memorization', achievements: Object.values(ACHIEVEMENTS).filter(a => a.category === 'hifz') },
      { id: 'social', name: 'Social', achievements: Object.values(ACHIEVEMENTS).filter(a => a.category === 'social') },
    ];
  }, [data]);

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
              <LevelBadge level={levelInfo.current} size="lg" />
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
        </div>

        {/* Tabs */}
        <div className="flex-shrink-0 flex border-b border-white/10">
          {[
            { id: 'overview', label: 'Overview', icon: 'Home' },
            { id: 'challenges', label: 'Challenges', icon: 'Target' },
            { id: 'achievements', label: 'Badges', icon: 'Award' },
          ].map((tab) => {
            const Icon = Icons[tab.icon];
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'text-white border-b-2'
                    : 'text-white/50 hover:text-white/80'
                }`}
                style={{
                  borderColor: activeTab === tab.id ? levelInfo.current.color : 'transparent',
                }}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
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
                <h3 className="text-white/60 text-sm uppercase mb-3">Your Stats</h3>
                <StatsGrid stats={data.stats} />
              </div>

              {/* Recent Achievements */}
              {data.achievements.length > 0 && (
                <div>
                  <h3 className="text-white/60 text-sm uppercase mb-3">Recent Achievements</h3>
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
                <h3 className="text-white font-medium">Today's Challenges</h3>
                <span className="text-white/40 text-sm">
                  {challenges.filter(c => c.completed).length}/{challenges.length} completed
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
        </div>
      </div>

      {/* Shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
});

// Mini XP Display (for embedding in header)
export const MiniXPDisplay = memo(function MiniXPDisplay({ onClick }) {
  const [data, setData] = useState(null);
  const [levelInfo, setLevelInfo] = useState(null);

  useEffect(() => {
    const gamData = getGamificationData();
    setData(gamData);
    setLevelInfo(getLevelInfo(gamData.xp));
  }, []);

  if (!data || !levelInfo) return null;

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all"
    >
      <LevelBadge level={levelInfo.current} size="sm" />
      <div className="text-left">
        <p className="text-white text-xs font-medium">{data.xp} XP</p>
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
      {data.streaks.current > 0 && (
        <div className="flex items-center gap-1 text-orange-400">
          <Icons.Fire className="w-3 h-3" />
          <span className="text-xs font-medium">{data.streaks.current}</span>
        </div>
      )}
    </button>
  );
});

export default GamificationHub;
