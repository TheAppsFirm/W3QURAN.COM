/**
 * AnalyticsPanel Component
 * Single Responsibility: Display comprehensive surah and reading analytics
 */

import { memo, useState, useEffect } from 'react';
import { Icons } from '../common/Icons';
import {
  getWeeklyActivity,
  calculateStreak,
  getTotalAyahsRead,
  getTodayStats,
} from '../../utils/trackingUtils';

const AnalyticsPanel = memo(function AnalyticsPanel({ surahs, readingProgress, darkMode }) {
  // Surah statistics
  const makkiCount = surahs.filter((s) => s.type === 'Makki').length;
  const madaniCount = surahs.filter((s) => s.type === 'Madani').length;
  const totalAyahs = surahs.reduce((sum, s) => sum + s.ayahs, 0);
  const longestSurah = surahs.reduce((max, s) => (s.ayahs > max.ayahs ? s : max), surahs[0]);
  const shortestSurah = surahs.reduce((min, s) => (s.ayahs < min.ayahs ? s : min), surahs[0]);

  // Reading progress
  const surahsStarted = Object.keys(readingProgress || {}).length;
  const progressPercent = Math.round((surahsStarted / 114) * 100);

  // Real-time tracking stats
  const [streak, setStreak] = useState(0);
  const [todayAyahs, setTodayAyahs] = useState(0);
  const [totalRead, setTotalRead] = useState(0);
  const [weeklyTotal, setWeeklyTotal] = useState(0);

  useEffect(() => {
    setStreak(calculateStreak());
    setTotalRead(getTotalAyahsRead());
    const today = getTodayStats();
    setTodayAyahs(today.ayahsRead);
    const weekly = getWeeklyActivity();
    setWeeklyTotal(weekly.reduce((a, b) => a + b, 0));
  }, [readingProgress]);

  // Two rows of stats for comprehensive view
  const primaryStats = [
    { label: 'Total Surahs', value: surahs.length, icon: Icons.Book, color: 'from-violet-500 to-purple-500' },
    { label: 'Total Ayahs', value: totalAyahs.toLocaleString(), icon: Icons.Layers, color: 'from-emerald-500 to-teal-500' },
    { label: 'Makki', value: makkiCount, icon: Icons.Sun, color: 'from-orange-500 to-amber-500' },
    { label: 'Madani', value: madaniCount, icon: Icons.Moon, color: 'from-blue-500 to-cyan-500' },
    { label: 'Longest', value: longestSurah?.name, subtext: `${longestSurah?.ayahs} ayahs`, icon: Icons.ChevronUp, color: 'from-indigo-500 to-violet-500' },
    { label: 'Shortest', value: shortestSurah?.name, subtext: `${shortestSurah?.ayahs} ayahs`, icon: Icons.ChevronDown, color: 'from-pink-500 to-rose-500' },
  ];

  const readingStats = [
    { label: 'Progress', value: `${progressPercent}%`, subtext: `${surahsStarted}/114 surahs`, icon: Icons.PieChart, color: 'from-emerald-500 to-teal-500' },
    { label: 'Today', value: todayAyahs, subtext: 'ayahs read', icon: Icons.Calendar, color: 'from-cyan-500 to-blue-500' },
    { label: 'This Week', value: weeklyTotal, subtext: 'ayahs read', icon: Icons.BarChart, color: 'from-purple-500 to-violet-500' },
    { label: 'All Time', value: totalRead, subtext: 'ayahs read', icon: Icons.Trophy, color: 'from-amber-500 to-orange-500' },
    { label: 'Streak', value: streak, subtext: 'days', icon: Icons.Fire, color: streak >= 7 ? 'from-red-500 to-orange-500' : 'from-gray-400 to-gray-500' },
  ];

  return (
    <div className={`${darkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-xl px-4 py-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'} shadow-lg`}>
      <div className="max-w-6xl mx-auto">
        {/* Primary Stats - Quran Info */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 mb-3">
          {primaryStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`bg-gradient-to-br ${stat.color} rounded-xl p-2 md:p-3 text-white text-center shadow-lg hover:scale-105 transition-transform`}
              >
                <Icon className="w-4 h-4 mx-auto mb-1 opacity-80" />
                <div className="text-lg md:text-xl font-bold truncate">{stat.value}</div>
                <div className="text-[10px] md:text-xs opacity-80">{stat.label}</div>
                {stat.subtext && (
                  <div className="text-[9px] opacity-60 hidden md:block">{stat.subtext}</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reading Stats - User Progress */}
        <div className="grid grid-cols-5 gap-2 md:gap-3">
          {readingStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`bg-gradient-to-br ${stat.color} rounded-xl p-2 md:p-3 text-white text-center shadow-lg hover:scale-105 transition-transform`}
              >
                <Icon className="w-4 h-4 mx-auto mb-1 opacity-80" />
                <div className="text-lg md:text-xl font-bold">{stat.value}</div>
                <div className="text-[10px] md:text-xs opacity-80">{stat.label}</div>
                {stat.subtext && (
                  <div className="text-[9px] opacity-60 hidden md:block">{stat.subtext}</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Overall Progress</span>
            <span className="text-emerald-500 font-semibold">{progressPercent}%</span>
          </div>
          <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default AnalyticsPanel;
