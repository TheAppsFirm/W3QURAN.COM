/**
 * StatisticsView Component
 * Single Responsibility: Display user statistics and achievements
 */

import { Icons } from '../common/Icons';

function StatisticsView({ darkMode, readingProgress, streak, points }) {
  const completedSurahs = Object.keys(readingProgress).length;
  const totalAyahsRead = Object.values(readingProgress).reduce((sum, p) => sum + (p.ayahsRead || 0), 0);

  const weeklyData = [65, 40, 80, 30, 95, 50, 70]; // Sample data
  const maxData = Math.max(...weeklyData);

  return (
    <div className={`h-full flex flex-col p-6 overflow-auto ${darkMode ? 'text-white' : ''}`}>
      <h2 className={`text-3xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Your Statistics</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto w-full mb-6">
        {[
          { label: 'Surahs Read', value: completedSurahs, icon: Icons.Book, color: 'from-emerald-500 to-teal-500' },
          { label: 'Ayahs Read', value: totalAyahsRead, icon: Icons.Layers, color: 'from-violet-500 to-purple-500' },
          { label: 'Day Streak', value: streak, icon: Icons.Fire, color: 'from-orange-500 to-amber-500' },
          { label: 'Total Points', value: points, icon: Icons.Star, color: 'from-pink-500 to-rose-500' },
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

      {/* Weekly Activity Chart */}
      <div className={`max-w-lg mx-auto w-full rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl mb-6`}>
        <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Weekly Activity</h3>
        <div className="flex items-end justify-between h-32 gap-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-gradient-to-t from-emerald-500 to-teal-500 rounded-t-lg transition-all"
                style={{ height: `${(weeklyData[i] / maxData) * 100}%`, minHeight: '8px' }}
              />
              <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className={`max-w-lg mx-auto w-full rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
        <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Achievements</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { emoji: '📖', title: 'First Read', unlocked: true },
            { emoji: '🔥', title: '7 Day Streak', unlocked: streak >= 7 },
            { emoji: '⭐', title: '100 Points', unlocked: points >= 100 },
            { emoji: '🏆', title: 'Quiz Master', unlocked: false },
            { emoji: '📚', title: '10 Surahs', unlocked: completedSurahs >= 10 },
            { emoji: '🎯', title: 'Memorizer', unlocked: false },
            { emoji: '💎', title: 'Pro Member', unlocked: false },
            { emoji: '🌟', title: 'Dedicated', unlocked: streak >= 30 },
          ].map((ach, i) => (
            <div
              key={i}
              className={`text-center p-3 rounded-xl ${ach.unlocked ? '' : 'opacity-30 grayscale'} ${
                darkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}
            >
              <div className="text-2xl mb-1">{ach.emoji}</div>
              <div className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{ach.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatisticsView;
