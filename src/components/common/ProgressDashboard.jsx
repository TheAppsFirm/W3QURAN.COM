/**
 * Progress Dashboard Component - Bubble Style
 * Single Responsibility: Display reading progress and statistics in bubble modal
 */

import { memo, useState, useMemo } from 'react';
import BubbleOverlay from './BubbleOverlay';
import { Icons } from './Icons';
import {
  getOverallProgress,
  getReadingHistory,
  getReadingStats,
  loadGoals,
  saveGoals,
} from '../../data/progressTracker';
import { JUZZ } from '../../data';

/**
 * Circular Progress Ring
 */
const ProgressRing = memo(function ProgressRing({ percentage, size = 100, strokeWidth = 8, color = '#4ade80' }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth={strokeWidth} />
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
    </svg>
  );
});

/**
 * Mini Stat Bubble
 */
const StatBubble = memo(function StatBubble({ label, value, color = '#4ade80' }) {
  return (
    <div className="flex flex-col items-center p-3 rounded-2xl" style={{ background: 'rgba(255,255,255,0.08)' }}>
      <div className="text-lg font-bold" style={{ color }}>{value}</div>
      <div className="text-[10px] text-white/50 mt-1">{label}</div>
    </div>
  );
});

/**
 * Juzz Mini Bar
 */
const JuzzMiniBar = memo(function JuzzMiniBar({ juzzId, percentage }) {
  return (
    <div className="flex items-center gap-2 py-1">
      <span className="text-[10px] text-white/50 w-5">{juzzId}</span>
      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
        <div className="h-full rounded-full transition-all" style={{
          width: `${percentage}%`,
          background: percentage === 100 ? 'linear-gradient(90deg, #4ade80, #22c55e)' : 'linear-gradient(90deg, #60a5fa, #3b82f6)',
        }} />
      </div>
      <span className="text-[10px] w-7 text-right" style={{ color: percentage === 100 ? '#4ade80' : 'rgba(255,255,255,0.4)' }}>
        {percentage}%
      </span>
    </div>
  );
});

/**
 * History Item
 */
const HistoryItem = memo(function HistoryItem({ item }) {
  const timeAgo = useMemo(() => {
    const diff = Date.now() - item.timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (minutes < 60) return `${minutes}m`;
    if (hours < 24) return `${hours}h`;
    return `${days}d`;
  }, [item.timestamp]);

  return (
    <div className="flex items-center gap-2 p-2 rounded-xl mb-1" style={{ background: 'rgba(255,255,255,0.05)' }}>
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
        style={{ background: item.isComplete ? 'linear-gradient(135deg, #4ade80, #22c55e)' : 'linear-gradient(135deg, #60a5fa, #3b82f6)' }}>
        {item.surahId}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-medium truncate">{item.surahName}</div>
        <div className="text-[10px] text-white/40">{item.ayahsRead} ayahs</div>
      </div>
      <span className="text-[10px] text-white/30">{timeAgo}</span>
    </div>
  );
});

/**
 * Goals Editor
 */
const GoalsEditor = memo(function GoalsEditor({ goals, onSave }) {
  const [editedGoals, setEditedGoals] = useState(goals);

  const handleChange = (key, value) => {
    setEditedGoals(prev => ({ ...prev, [key]: parseInt(value) || 0 }));
  };

  const handleSave = () => {
    saveGoals(editedGoals);
    onSave(editedGoals);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <span className="text-xs text-white/70">Daily Ayahs</span>
        <input type="number" value={editedGoals.dailyAyahs} onChange={(e) => handleChange('dailyAyahs', e.target.value)}
          min="1" max="100" className="w-14 px-2 py-1 rounded-lg text-center text-xs"
          style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} />
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <span className="text-xs text-white/70">Daily Minutes</span>
        <input type="number" value={editedGoals.dailyMinutes} onChange={(e) => handleChange('dailyMinutes', e.target.value)}
          min="5" max="120" className="w-14 px-2 py-1 rounded-lg text-center text-xs"
          style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} />
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <span className="text-xs text-white/70">Weekly Juzz</span>
        <input type="number" value={editedGoals.weeklyJuzz} onChange={(e) => handleChange('weeklyJuzz', e.target.value)}
          min="1" max="30" className="w-14 px-2 py-1 rounded-lg text-center text-xs"
          style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }} />
      </div>
      <button onClick={handleSave} className="w-full py-2 rounded-xl text-sm font-semibold text-black transition-all hover:scale-[1.02]"
        style={{ background: 'linear-gradient(135deg, #4ade80, #22c55e)' }}>
        Save Goals
      </button>
    </div>
  );
});

/**
 * Main Progress Dashboard Component - Bubble Style
 */
const ProgressDashboard = memo(function ProgressDashboard({ onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [goals, setGoals] = useState(() => loadGoals());

  // Re-compute on every open (no deps cache) so it always shows latest data
  const overallProgress = getOverallProgress();
  const readingHistory = getReadingHistory(10);
  const weeklyStats = getReadingStats(7);

  const tabs = [
    { id: 'overview', label: 'Stats' },
    { id: 'juzz', label: 'Juzz' },
    { id: 'history', label: 'History' },
    { id: 'goals', label: 'Goals' },
  ];

  return (
    <BubbleOverlay
      onClose={onClose}
      title="Reading Progress"
      subtitle={`${overallProgress.percentage}% Complete`}
      icon={Icons.BarChart}
      gradient={['#10b981', '#059669', '#047857']}
      size="medium"
    >
      {/* Tab Pills */}
      <div className="flex gap-1 mb-4 p-1 rounded-2xl" style={{ background: 'rgba(0,0,0,0.2)' }}>
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-1.5 rounded-xl text-[11px] font-medium transition-all ${
              activeTab === tab.id ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white/70'
            }`}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          {/* Main Progress */}
          <div className="flex flex-col items-center py-2">
            <div className="relative">
              <ProgressRing percentage={overallProgress.percentage} size={100} strokeWidth={10} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">{overallProgress.percentage}%</span>
                <span className="text-[9px] text-white/50">Complete</span>
              </div>
            </div>
            <div className="text-xs text-white/60 mt-2">
              {overallProgress.totalAyahsRead.toLocaleString()} / {overallProgress.totalAyahs.toLocaleString()} Ayahs
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2">
            <StatBubble label="Streak" value={`${overallProgress.currentStreak}d`} color="#fbbf24" />
            <StatBubble label="Surahs" value={`${overallProgress.totalSurahsCompleted}`} color="#60a5fa" />
            <StatBubble label="Weekly" value={`${weeklyStats.consistency}%`} color="#a78bfa" />
          </div>

          {/* Today Status */}
          <div className="p-3 rounded-2xl text-center" style={{
            background: overallProgress.readToday ? 'linear-gradient(135deg, rgba(74,222,128,0.2), rgba(34,197,94,0.1))' : 'rgba(255,255,255,0.05)'
          }}>
            <div className={`text-xs font-medium ${overallProgress.readToday ? 'text-green-400' : 'text-white/50'}`}>
              {overallProgress.readToday ? "You've read today!" : "Start reading today"}
            </div>
          </div>
        </div>
      )}

      {/* Juzz Tab */}
      {activeTab === 'juzz' && (
        <div className="space-y-1">
          <div className="text-xs text-white/50 mb-2">Juzz Progress (1-30)</div>
          <div className="p-2 rounded-xl" style={{ background: 'rgba(0,0,0,0.15)' }}>
            {JUZZ.slice(0, 15).map(juzz => (
              <JuzzMiniBar key={juzz.id} juzzId={juzz.id} percentage={overallProgress.juzzProgress[juzz.id]?.percentage || 0} />
            ))}
          </div>
          <div className="p-2 rounded-xl" style={{ background: 'rgba(0,0,0,0.15)' }}>
            {JUZZ.slice(15).map(juzz => (
              <JuzzMiniBar key={juzz.id} juzzId={juzz.id} percentage={overallProgress.juzzProgress[juzz.id]?.percentage || 0} />
            ))}
          </div>
        </div>
      )}

      {/* History Tab */}
      {activeTab === 'history' && (
        <div>
          {readingHistory.length > 0 ? (
            readingHistory.map((item, index) => <HistoryItem key={`${item.surahId}-${index}`} item={item} />)
          ) : (
            <div className="text-center py-6">
              <div className="text-3xl mb-2">📖</div>
              <div className="text-xs text-white/50">No reading history yet</div>
            </div>
          )}
        </div>
      )}

      {/* Goals Tab */}
      {activeTab === 'goals' && <GoalsEditor goals={goals} onSave={setGoals} />}
    </BubbleOverlay>
  );
});

export default ProgressDashboard;
