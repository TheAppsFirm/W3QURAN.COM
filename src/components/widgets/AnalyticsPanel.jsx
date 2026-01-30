/**
 * AnalyticsPanel Component
 * Single Responsibility: Display surah analytics
 */

import { memo } from 'react';

const AnalyticsPanel = memo(function AnalyticsPanel({ surahs }) {
  const makkiCount = surahs.filter((s) => s.type === 'Makki').length;
  const madaniCount = surahs.filter((s) => s.type === 'Madani').length;
  const totalAyahs = surahs.reduce((sum, s) => sum + s.ayahs, 0);
  const avgAyahs = Math.round(totalAyahs / surahs.length);
  const longestSurah = surahs.reduce((max, s) => (s.ayahs > max.ayahs ? s : max), surahs[0]);

  const stats = [
    { label: 'Total Surahs', value: surahs.length, color: 'from-violet-500 to-purple-500' },
    { label: 'Total Ayahs', value: totalAyahs.toLocaleString(), color: 'from-emerald-500 to-teal-500' },
    { label: 'Makki', value: makkiCount, color: 'from-orange-500 to-amber-500' },
    { label: 'Madani', value: madaniCount, color: 'from-blue-500 to-cyan-500' },
    { label: 'Avg Ayahs', value: avgAyahs, color: 'from-pink-500 to-rose-500' },
    { label: 'Longest', value: longestSurah?.name, color: 'from-indigo-500 to-violet-500' },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-xl px-4 py-4 border-b border-gray-100 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-6 gap-3">
          {stats.map((stat, i) => (
            <div key={i} className={`bg-gradient-to-br ${stat.color} rounded-xl p-3 text-white text-center shadow-lg`}>
              <div className="text-xl font-bold">{stat.value}</div>
              <div className="text-xs opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default AnalyticsPanel;
