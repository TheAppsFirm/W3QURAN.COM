/**
 * StatsBar Component
 * Single Responsibility: Display user stats and progress
 */

import { memo } from 'react';
import { Icons } from '../common/Icons';

const StatsBar = memo(function StatsBar({ level, points, streak, badges, onUpgrade }) {
  return (
    <div className="bg-white/95 backdrop-blur-xl px-4 py-4 shadow-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg shadow-emerald-500/30">
            <span className="text-xl">⭐</span>
            <span className="text-white font-bold tracking-wide">{level.toUpperCase()}</span>
          </div>
          {level === 'starter' && (
            <button
              onClick={onUpgrade}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all"
            >
              <Icons.Lock className="w-4 h-4 text-white" />
              <span className="text-white font-semibold">Upgrade PRO</span>
            </button>
          )}
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Icons.Star className="w-6 h-6 text-amber-500 drop-shadow-lg" />
            <span className="font-bold text-gray-700">
              {points} <span className="text-gray-400 font-normal">pts</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Icons.Fire className="w-6 h-6 text-orange-500 drop-shadow-lg" />
            <span className="font-bold text-gray-700">
              {streak} <span className="text-gray-400 font-normal">days</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Icons.Trophy className="w-6 h-6 text-purple-500 drop-shadow-lg" />
            <span className="font-bold text-gray-700">{badges}</span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-3">
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-full relative"
            style={{ width: `${(points / 1000) * 100}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white/70 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default StatsBar;
