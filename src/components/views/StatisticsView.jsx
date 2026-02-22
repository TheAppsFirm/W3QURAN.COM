/**
 * StatisticsView Component
 * Single Responsibility: Display user statistics and achievements with real data
 */

import { useState, useEffect } from 'react';
import { Icons } from '../common/Icons';
import {
  getWeeklyActivity,
  calculateStreak,
  getTotalAyahsRead,
  getTotalReadingTime,
  getUniqueSurahsRead,
  getTodayStats,
  getRecentActivity,
} from '../../utils/trackingUtils';
import { loadProgress } from '../../data/progressTracker';

function StatisticsView({ darkMode, readingProgress, streak: propStreak, points }) {
  // Real statistics
  const [weeklyData, setWeeklyData] = useState([0, 0, 0, 0, 0, 0, 0]);

  // Handle back navigation
  const handleBack = () => {
    window.history.back();
  };
  const [realStreak, setRealStreak] = useState(0);
  const [totalAyahs, setTotalAyahs] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [uniqueSurahs, setUniqueSurahs] = useState(0);
  const [todayStats, setTodayStats] = useState({ ayahsRead: 0, sessions: 0 });
  const [recentActivity, setRecentActivity] = useState([]);

  // Load real statistics — use progressTracker as source of truth
  const trackerProgress = loadProgress();
  useEffect(() => {
    setWeeklyData(getWeeklyActivity());
    setRealStreak(calculateStreak());
    setTotalAyahs(getTotalAyahsRead());
    setTotalTime(getTotalReadingTime());
    setUniqueSurahs(getUniqueSurahsRead(readingProgress));
    setTodayStats(getTodayStats());
    setRecentActivity(getRecentActivity(7));
  }, [readingProgress]);

  // Use either calculated streak or prop streak (whichever is higher)
  const displayStreak = Math.max(realStreak, propStreak || 0);

  // Calculate completion from progressTracker (real source of truth)
  const completedSurahs = Object.keys(trackerProgress.surahs || {}).length;
  const completionPercent = Math.round((completedSurahs / 114) * 100);

  // Get max value for chart scaling
  const maxData = Math.max(...weeklyData, 1);

  // Format reading time
  const formatTime = (minutes) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  };

  return (
    <div className={`h-full flex flex-col overflow-auto ${darkMode ? 'text-white' : ''}`}>
      {/* Header with back button */}
      <div className={`sticky top-0 z-10 backdrop-blur-xl ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3 p-4">
          <button
            onClick={handleBack}
            className={`p-2.5 rounded-full transition-all active:scale-95 ${darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
            title="Go back"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <Icons.ChevronLeft className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-600'}`} />
          </button>
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Your Statistics
          </h2>
        </div>
      </div>

      <div className="p-6">

      {/* Today's Progress */}
      <div className={`max-w-lg mx-auto w-full rounded-2xl p-4 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
        <div className="flex items-center justify-between">
          <div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Today</p>
            <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {todayStats.ayahsRead} Ayahs
            </p>
          </div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <Icons.Book className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="mt-3 flex items-center gap-4 text-sm">
          <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
            {todayStats.sessions || 0} session{todayStats.sessions !== 1 ? 's' : ''}
          </span>
          {displayStreak > 0 && (
            <span className="text-orange-500 font-semibold flex items-center gap-1">
              <Icons.Fire className="w-4 h-4" />
              {displayStreak} day streak!
            </span>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto w-full mb-6">
        {[
          { label: 'Surahs Started', value: uniqueSurahs, icon: Icons.Book, color: 'from-emerald-500 to-teal-500' },
          { label: 'Total Ayahs', value: totalAyahs, icon: Icons.Layers, color: 'from-violet-500 to-purple-500' },
          { label: 'Day Streak', value: displayStreak, icon: Icons.Fire, color: 'from-orange-500 to-amber-500' },
          { label: 'Total Points', value: points || 0, icon: Icons.Star, color: 'from-pink-500 to-rose-500' },
        ].map((stat, i) => {
          const StatIcon = stat.icon;
          return (
            <div key={i} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 text-white shadow-lg`}>
              <StatIcon className="w-6 h-6 mb-2" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Completion Progress */}
      <div className={`max-w-lg mx-auto w-full rounded-2xl p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl mb-6`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Quran Completion</h3>
          <span className="text-emerald-500 font-bold">{completionPercent}%</span>
        </div>
        <div className={`h-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
            style={{ width: `${completionPercent}%` }}
          />
        </div>
        <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {completedSurahs} of 114 surahs started
        </p>
      </div>

      {/* Weekly Activity Chart */}
      <div className={`max-w-lg mx-auto w-full rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl mb-6`}>
        <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Weekly Activity</h3>
        <div className="flex items-end justify-between h-32 gap-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => {
            const isToday = i === new Date().getDay();
            const value = weeklyData[i] || 0;
            const height = maxData > 0 ? (value / maxData) * 100 : 0;
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="relative w-full flex flex-col justify-end h-24">
                  <div
                    className={`w-full rounded-t-lg transition-all ${
                      isToday
                        ? 'bg-gradient-to-t from-emerald-500 to-teal-400'
                        : darkMode
                          ? 'bg-gray-600'
                          : 'bg-gradient-to-t from-emerald-500/60 to-teal-500/60'
                    }`}
                    style={{ height: `${Math.max(height, 4)}%` }}
                  />
                  {value > 0 && (
                    <span className={`absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {value}
                    </span>
                  )}
                </div>
                <span className={`text-xs font-medium ${isToday ? 'text-emerald-500' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {day}
                </span>
              </div>
            );
          })}
        </div>
        {totalTime > 0 && (
          <p className={`text-sm mt-4 text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Total reading time: {formatTime(totalTime)}
          </p>
        )}
      </div>

      {/* Achievements */}
      <div className={`max-w-lg mx-auto w-full rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl mb-24`}>
        <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Achievements</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { emoji: '📖', title: 'First Read', unlocked: totalAyahs > 0, desc: 'Read your first ayah' },
            { emoji: '🔥', title: '7 Day Streak', unlocked: displayStreak >= 7, desc: '7 days in a row' },
            { emoji: '⭐', title: '100 Points', unlocked: (points || 0) >= 100, desc: 'Earn 100 points' },
            { emoji: '🏆', title: 'Quiz Master', unlocked: false, desc: 'Pass 10 quizzes' },
            { emoji: '📚', title: '10 Surahs', unlocked: uniqueSurahs >= 10, desc: 'Start 10 surahs' },
            { emoji: '🎯', title: '100 Ayahs', unlocked: totalAyahs >= 100, desc: 'Read 100 ayahs' },
            { emoji: '💎', title: 'Dedicated', unlocked: displayStreak >= 30, desc: '30 day streak' },
            { emoji: '🌟', title: 'Complete Juz', unlocked: false, desc: 'Complete 1 Juz' },
          ].map((ach, i) => (
            <div
              key={i}
              className={`text-center p-3 rounded-xl transition-all ${
                ach.unlocked ? 'scale-100' : 'opacity-30 grayscale scale-95'
              } ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
              title={ach.desc}
            >
              <div className={`text-2xl mb-1 ${ach.unlocked ? 'animate-bounce' : ''}`} style={{ animationDuration: '2s' }}>
                {ach.emoji}
              </div>
              <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{ach.title}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default StatisticsView;
