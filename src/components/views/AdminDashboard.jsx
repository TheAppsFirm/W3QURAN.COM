/**
 * Admin Dashboard - User Management & Sales Board
 * Only accessible by admin users (configured via ADMIN_EMAILS env var)
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { Icons } from '../common/Icons';
import { useAuth } from '../../contexts/AuthContext';

// Stat Card Component
const StatCard = ({ title, value, subtitle, icon: Icon, color, trend }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-white/60 text-sm">{title}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        {subtitle && <p className="text-white/40 text-xs mt-1">{subtitle}</p>}
        {trend && (
          <p className={`text-xs mt-1 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% from last week
          </p>
        )}
      </div>
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${color}40, ${color}20)` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
    </div>
  </div>
);

// Tier Badge Component
const TierBadge = ({ tier }) => {
  const colors = {
    free: 'bg-gray-500/20 text-gray-300',
    starter: 'bg-blue-500/20 text-blue-300',
    premium: 'bg-purple-500/20 text-purple-300',
    scholar: 'bg-amber-500/20 text-amber-300',
    lifetime: 'bg-emerald-500/20 text-emerald-300',
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${colors[tier] || colors.free}`}>
      {tier}
    </span>
  );
};

// User Row Component (Desktop)
const UserRow = ({ user, onEdit }) => (
  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
    <td className="py-3 px-4">
      <div className="flex items-center gap-3">
        {user.picture ? (
          <img src={user.picture} alt="" className="w-8 h-8 rounded-full" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {user.name?.[0] || user.email?.[0] || '?'}
            </span>
          </div>
        )}
        <div>
          <p className="text-white text-sm font-medium">{user.name || 'No name'}</p>
          <p className="text-white/50 text-xs">{user.email}</p>
        </div>
      </div>
    </td>
    <td className="py-3 px-4">
      <TierBadge tier={user.tier} />
    </td>
    <td className="py-3 px-4 text-white/70 text-sm">
      {user.credits} / {user.monthly_allowance}
    </td>
    <td className="py-3 px-4 text-white/70 text-sm">
      {user.used_this_month}
    </td>
    <td className="py-3 px-4 text-white/70 text-sm">
      {user.conversation_count}
    </td>
    <td className="py-3 px-4 text-white/50 text-xs">
      {new Date(user.created_at).toLocaleDateString()}
    </td>
    <td className="py-3 px-4">
      <button
        onClick={() => onEdit(user)}
        className="text-purple-400 hover:text-purple-300 transition-colors"
      >
        <Icons.Edit className="w-4 h-4" />
      </button>
    </td>
  </tr>
);

// User Card Component (Mobile)
const UserCard = ({ user, onEdit }) => (
  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-3">
        {user.picture ? (
          <img src={user.picture} alt="" className="w-10 h-10 rounded-full" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white text-sm font-bold">
              {user.name?.[0] || user.email?.[0] || '?'}
            </span>
          </div>
        )}
        <div>
          <p className="text-white text-sm font-medium">{user.name || 'No name'}</p>
          <p className="text-white/50 text-xs truncate max-w-[180px]">{user.email}</p>
        </div>
      </div>
      <button
        onClick={() => onEdit(user)}
        className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-purple-400 hover:bg-white/20 transition-colors"
      >
        <Icons.Edit className="w-4 h-4" />
      </button>
    </div>
    <div className="grid grid-cols-3 gap-2 text-center">
      <div className="bg-white/5 rounded-lg p-2">
        <p className="text-white/50 text-xs">Tier</p>
        <TierBadge tier={user.tier} />
      </div>
      <div className="bg-white/5 rounded-lg p-2">
        <p className="text-white/50 text-xs">Credits</p>
        <p className="text-white text-sm font-medium">{user.credits}</p>
      </div>
      <div className="bg-white/5 rounded-lg p-2">
        <p className="text-white/50 text-xs">Convos</p>
        <p className="text-white text-sm font-medium">{user.conversation_count}</p>
      </div>
    </div>
  </div>
);

// Log Level Badge
const LogLevelBadge = ({ level }) => {
  const colors = {
    debug: 'bg-gray-500/20 text-gray-300',
    info: 'bg-blue-500/20 text-blue-300',
    warn: 'bg-amber-500/20 text-amber-300',
    error: 'bg-red-500/20 text-red-300',
    critical: 'bg-red-600/30 text-red-200 border border-red-500/50',
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium uppercase ${colors[level] || colors.info}`}>
      {level}
    </span>
  );
};

// Log Type Badge
const LogTypeBadge = ({ type }) => {
  const colors = {
    error: 'text-red-400',
    crash: 'text-red-500',
    performance: 'text-amber-400',
    memory: 'text-orange-400',
    audio: 'text-purple-400',
    api: 'text-blue-400',
    action: 'text-green-400',
    navigation: 'text-cyan-400',
    feature: 'text-pink-400',
    talk_to_quran: 'text-indigo-400',
    treebank: 'text-teal-400',
  };

  return (
    <span className={`text-xs font-medium ${colors[type] || 'text-white/60'}`}>
      {type}
    </span>
  );
};

// Browser/OS Icon
const DeviceInfo = ({ browser, os, device }) => {
  const browserIcons = {
    chrome: '🌐',
    safari: '🧭',
    firefox: '🦊',
    edge: '📘',
  };
  const osIcons = {
    ios: '📱',
    android: '🤖',
    macos: '🍎',
    windows: '🪟',
    linux: '🐧',
  };

  return (
    <div className="flex items-center gap-1 text-xs text-white/50">
      <span>{browserIcons[browser] || '🌐'}</span>
      <span>{browser}</span>
      <span className="mx-1">•</span>
      <span>{osIcons[os] || '💻'}</span>
      <span>{os}</span>
      {device === 'mobile' && <span className="ml-1">📱</span>}
    </div>
  );
};

// Toast Notification Component
const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: 'from-green-500 to-emerald-600 border-green-400',
    error: 'from-red-500 to-rose-600 border-red-400',
    info: 'from-blue-500 to-cyan-600 border-blue-400',
    warning: 'from-amber-500 to-orange-600 border-amber-400'
  };

  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠'
  };

  return (
    <div className="fixed top-4 right-4 z-[9999] animate-slideDown">
      <div className={`bg-gradient-to-r ${colors[type]} border rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 min-w-[300px]`}>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-lg font-bold">
          {icons[type]}
        </div>
        <p className="text-white font-medium flex-1">{message}</p>
        <button onClick={onClose} className="text-white/70 hover:text-white text-xl">&times;</button>
      </div>
    </div>
  );
};

// Logs Panel Component
const LogsPanel = () => {
  const [logs, setLogs] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [filters, setFilters] = useState({
    level: '',
    type: '',
    browser: '',
    os: '',
    surah: '',
    search: '',
    hours: 24,
    view: '', // 'errors', 'performance', ''
  });
  const [pagination, setPagination] = useState({ total: 0, limit: 50, offset: 0 });
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [expandedLog, setExpandedLog] = useState(null);

  // Fetch logs
  const fetchLogs = useCallback(async () => {
    try {
      const params = new URLSearchParams({
        hours: filters.hours.toString(),
        limit: pagination.limit.toString(),
        offset: pagination.offset.toString(),
        ...(filters.level && { level: filters.level }),
        ...(filters.type && { type: filters.type }),
        ...(filters.browser && { browser: filters.browser }),
        ...(filters.os && { os: filters.os }),
        ...(filters.surah && { surah: filters.surah }),
        ...(filters.search && { search: filters.search }),
        ...(filters.view && { view: filters.view }),
      });

      const response = await fetch(`/api/admin/logs?${params}`, { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setLogs(data.logs || []);
        setPagination(prev => ({ ...prev, total: data.total || 0 }));
      }
    } catch (err) {
      console.error('Failed to fetch logs:', err);
    }
  }, [filters, pagination.limit, pagination.offset]);

  // Fetch summary
  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(`/api/admin/logs?view=summary&hours=${filters.hours}`, { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setSummary(data);
      }
    } catch (err) {
      console.error('Failed to fetch summary:', err);
    }
  }, [filters.hours]);

  // Initial load
  useEffect(() => {
    setLoading(true);
    Promise.all([fetchLogs(), fetchSummary()]).finally(() => setLoading(false));
  }, []);

  // Refetch on filter change
  useEffect(() => {
    fetchLogs();
  }, [filters, pagination.offset]);

  // Refetch summary on hours change
  useEffect(() => {
    fetchSummary();
  }, [filters.hours]);

  // Auto-refresh
  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      fetchLogs();
      fetchSummary();
    }, 10000);
    return () => clearInterval(interval);
  }, [autoRefresh, fetchLogs, fetchSummary]);

  // Show toast notification
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Clear all logs
  const handleClearAllLogs = async () => {
    if (!confirm('⚠️ Are you sure you want to delete ALL logs? This cannot be undone!')) return;
    try {
      const response = await fetch(`/api/admin/logs?all=true`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        showToast(
          data.deleted > 0
            ? `🧹 Cleared ${data.deleted} logs successfully!`
            : '✨ Database is already clean - no logs to delete!',
          data.deleted > 0 ? 'success' : 'info'
        );
        fetchLogs();
        fetchSummary();
      } else {
        showToast('Failed to clear logs. Server error.', 'error');
      }
    } catch (err) {
      console.error('Failed to clear logs:', err);
      showToast('Failed to clear logs. Please try again.', 'error');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Summary Cards */}
      {summary && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            title="Total Errors"
            value={summary.totals?.total_errors || 0}
            subtitle={`${summary.totals?.total_logs || 0} total logs`}
            icon={Icons.AlertCircle}
            color="#EF4444"
          />
          <StatCard
            title="Unique Sessions"
            value={summary.totals?.unique_sessions || 0}
            subtitle={`Last ${filters.hours}h`}
            icon={Icons.Users}
            color="#8B5CF6"
          />
          <StatCard
            title="Memory Warnings"
            value={summary.memoryWarnings?.count || 0}
            subtitle={summary.memoryWarnings?.max_percent ? `Max: ${summary.memoryWarnings.max_percent}%` : 'No warnings'}
            icon={Icons.Cpu}
            color="#F59E0B"
          />
          <StatCard
            title="Actions Logged"
            value={summary.totals?.total_actions || 0}
            subtitle="Feature usage"
            icon={Icons.Activity}
            color="#10B981"
          />
        </div>
      )}

      {/* Error Breakdown */}
      {summary && (summary.errorsByBrowser?.length > 0 || summary.errorsBySurah?.length > 0) && (
        <div className="grid md:grid-cols-2 gap-4">
          {/* Errors by Browser */}
          {summary.errorsByBrowser?.length > 0 && (
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                <Icons.Globe className="w-4 h-4 text-blue-400" />
                Errors by Browser
              </h4>
              <div className="space-y-2">
                {summary.errorsByBrowser.map(({ browser, count }) => (
                  <div key={browser} className="flex items-center justify-between">
                    <span className="text-white/70 text-sm capitalize">{browser || 'Unknown'}</span>
                    <span className="text-red-400 font-medium">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Errors by Surah */}
          {summary.errorsBySurah?.length > 0 && (
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                <Icons.BookOpen className="w-4 h-4 text-emerald-400" />
                Crashes by Surah
              </h4>
              <div className="space-y-2">
                {summary.errorsBySurah.map(({ surah_id, count }) => (
                  <div key={surah_id} className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Surah {surah_id}</span>
                    <span className="text-red-400 font-medium">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Top Errors */}
      {summary?.topErrors?.length > 0 && (
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <h4 className="text-white font-medium mb-3 flex items-center gap-2">
            <Icons.AlertTriangle className="w-4 h-4 text-red-400" />
            Top Error Messages
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {summary.topErrors.slice(0, 10).map((err, i) => (
              <div key={i} className="flex items-start justify-between gap-4 py-2 border-b border-white/5 last:border-0">
                <span className="text-white/70 text-sm truncate flex-1">{err.message}</span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-red-400 font-medium text-sm">{err.count}x</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
        <div className="flex flex-wrap gap-3 items-center">
          {/* Time Range */}
          <select
            value={filters.hours}
            onChange={(e) => setFilters(f => ({ ...f, hours: parseInt(e.target.value) }))}
            className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm"
          >
            <option value="1">Last 1 hour</option>
            <option value="6">Last 6 hours</option>
            <option value="24">Last 24 hours</option>
            <option value="48">Last 48 hours</option>
            <option value="168">Last 7 days</option>
          </select>

          {/* Quick Filters */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilters(f => ({ ...f, view: f.view === 'errors' ? '' : 'errors', level: '', type: '' }))}
              className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                filters.view === 'errors' ? 'bg-red-500/30 text-red-300 border border-red-500/50' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              🔴 Errors Only
            </button>
            <button
              onClick={() => setFilters(f => ({ ...f, view: f.view === 'performance' ? '' : 'performance', level: '', type: '' }))}
              className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                filters.view === 'performance' ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              ⚡ Performance
            </button>
          </div>

          {/* Level Filter */}
          <select
            value={filters.level}
            onChange={(e) => setFilters(f => ({ ...f, level: e.target.value, view: '' }))}
            className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm"
          >
            <option value="">All Levels</option>
            <option value="critical">Critical</option>
            <option value="error">Error</option>
            <option value="warn">Warning</option>
            <option value="info">Info</option>
            <option value="debug">Debug</option>
          </select>

          {/* Type Filter */}
          <select
            value={filters.type}
            onChange={(e) => setFilters(f => ({ ...f, type: e.target.value, view: '' }))}
            className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm"
          >
            <option value="">All Types</option>
            <option value="crash">Crash</option>
            <option value="error">Error</option>
            <option value="audio">Audio</option>
            <option value="api">API</option>
            <option value="memory">Memory</option>
            <option value="performance">Performance</option>
            <option value="navigation">Navigation</option>
            <option value="action">Action</option>
            <option value="feature">Feature</option>
            <option value="talk_to_quran">Talk to Quran</option>
            <option value="treebank">Treebank</option>
          </select>

          {/* Browser Filter */}
          <select
            value={filters.browser}
            onChange={(e) => setFilters(f => ({ ...f, browser: e.target.value }))}
            className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm"
          >
            <option value="">All Browsers</option>
            <option value="safari">Safari</option>
            <option value="chrome">Chrome</option>
            <option value="firefox">Firefox</option>
            <option value="edge">Edge</option>
          </select>

          {/* OS Filter */}
          <select
            value={filters.os}
            onChange={(e) => setFilters(f => ({ ...f, os: e.target.value }))}
            className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm"
          >
            <option value="">All OS</option>
            <option value="ios">iOS</option>
            <option value="android">Android</option>
            <option value="macos">macOS</option>
            <option value="windows">Windows</option>
          </select>

          {/* Surah Filter */}
          <input
            type="number"
            placeholder="Surah #"
            value={filters.surah}
            onChange={(e) => setFilters(f => ({ ...f, surah: e.target.value }))}
            className="w-20 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder-white/40"
            min="1"
            max="114"
          />

          {/* Search */}
          <div className="relative flex-1 min-w-[150px]">
            <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search messages..."
              value={filters.search}
              onChange={(e) => setFilters(f => ({ ...f, search: e.target.value }))}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm"
            />
          </div>

          {/* Auto-refresh toggle */}
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors ${
              autoRefresh ? 'bg-green-500/30 text-green-300' : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${autoRefresh ? 'bg-green-400 animate-pulse' : 'bg-white/40'}`} />
            Auto
          </button>

          {/* Refresh */}
          <button
            onClick={() => { fetchLogs(); fetchSummary(); }}
            className="px-3 py-2 rounded-lg bg-white/10 text-white/70 hover:bg-white/20 transition-colors"
          >
            <Icons.RefreshCw className="w-4 h-4" />
          </button>

          {/* Clear all logs */}
          <button
            onClick={handleClearAllLogs}
            className="px-3 py-1.5 rounded bg-red-500/30 text-red-300 hover:bg-red-500/50 transition-colors text-sm font-medium"
            title="Delete all logs"
          >
            🗑️ Clear All
          </button>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">
            Logs ({pagination.total})
          </h3>
        </div>

        <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-slate-800">
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left py-3 px-4 text-white/60 text-xs font-medium">Time</th>
                <th className="text-left py-3 px-4 text-white/60 text-xs font-medium">Level</th>
                <th className="text-left py-3 px-4 text-white/60 text-xs font-medium">Type</th>
                <th className="text-left py-3 px-4 text-white/60 text-xs font-medium">Message</th>
                <th className="text-left py-3 px-4 text-white/60 text-xs font-medium">Device</th>
                <th className="text-left py-3 px-4 text-white/60 text-xs font-medium">Surah</th>
                <th className="text-left py-3 px-4 text-white/60 text-xs font-medium">Memory</th>
              </tr>
            </thead>
            <tbody>
              {logs.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-white/50">
                    No logs found matching filters
                  </td>
                </tr>
              ) : logs.map((log) => (
                <tr
                  key={log.id}
                  className={`border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors ${
                    expandedLog === log.id ? 'bg-white/10' : ''
                  } ${log.log_level === 'error' || log.log_level === 'critical' ? 'bg-red-500/5' : ''}`}
                  onClick={() => setExpandedLog(expandedLog === log.id ? null : log.id)}
                >
                  <td className="py-2 px-4 text-white/50 text-xs whitespace-nowrap">
                    {new Date(log.created_at).toLocaleString()}
                  </td>
                  <td className="py-2 px-4">
                    <LogLevelBadge level={log.log_level} />
                  </td>
                  <td className="py-2 px-4">
                    <LogTypeBadge type={log.log_type} />
                  </td>
                  <td className="py-2 px-4 text-white/80 text-sm max-w-xs truncate">
                    {log.message}
                  </td>
                  <td className="py-2 px-4">
                    <DeviceInfo browser={log.browser} os={log.os} device={log.device} />
                  </td>
                  <td className="py-2 px-4 text-white/60 text-xs">
                    {log.surah_id ? `${log.surah_id}:${log.ayah_num || '?'}` : '-'}
                  </td>
                  <td className="py-2 px-4 text-white/60 text-xs">
                    {log.memory_percent ? (
                      <span className={log.memory_percent > 70 ? 'text-amber-400' : ''}>
                        {log.memory_percent}%
                      </span>
                    ) : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Expanded Log Details */}
        {expandedLog && logs.find(l => l.id === expandedLog) && (
          <div className="p-4 bg-white/5 border-t border-white/10">
            <h4 className="text-white font-medium mb-2">Log Details</h4>
            <pre className="text-white/70 text-xs bg-black/30 p-3 rounded-lg overflow-x-auto max-h-64 overflow-y-auto">
              {JSON.stringify(logs.find(l => l.id === expandedLog), null, 2)}
            </pre>
          </div>
        )}

        {/* Pagination */}
        {pagination.total > pagination.limit && (
          <div className="p-4 border-t border-white/10 flex items-center justify-between">
            <p className="text-white/50 text-sm">
              Showing {pagination.offset + 1}-{Math.min(pagination.offset + pagination.limit, pagination.total)} of {pagination.total}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPagination(p => ({ ...p, offset: Math.max(0, p.offset - p.limit) }))}
                disabled={pagination.offset === 0}
                className="px-3 py-1 rounded bg-white/10 text-white text-sm disabled:opacity-50"
              >
                Prev
              </button>
              <button
                onClick={() => setPagination(p => ({ ...p, offset: p.offset + p.limit }))}
                disabled={pagination.offset + pagination.limit >= pagination.total}
                className="px-3 py-1 rounded bg-white/10 text-white text-sm disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Edit User Modal
const EditUserModal = ({ user, onClose, onSave }) => {
  const [credits, setCredits] = useState(user.credits || 0);
  const [tier, setTier] = useState(user.tier || 'free');
  const [monthlyAllowance, setMonthlyAllowance] = useState(user.monthly_allowance || 0);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await onSave({ userId: user.id, credits, tier, monthlyAllowance });
    setSaving(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-slate-800 rounded-2xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-4">Edit User</h3>

        <div className="space-y-4">
          <div>
            <p className="text-white/60 text-sm mb-1">Email</p>
            <p className="text-white">{user.email}</p>
          </div>

          <div>
            <label className="text-white/60 text-sm block mb-1">Subscription Tier</label>
            <select
              value={tier}
              onChange={(e) => setTier(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
            >
              <option value="free">Free</option>
              <option value="starter">Starter</option>
              <option value="premium">Premium</option>
              <option value="scholar">Scholar</option>
              <option value="lifetime">Lifetime</option>
            </select>
          </div>

          <div>
            <label className="text-white/60 text-sm block mb-1">Credits Balance</label>
            <input
              type="number"
              value={credits}
              onChange={(e) => setCredits(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
            />
          </div>

          <div>
            <label className="text-white/60 text-sm block mb-1">Monthly Allowance</label>
            <input
              type="number"
              value={monthlyAllowance}
              onChange={(e) => setMonthlyAllowance(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium disabled:opacity-50"
          >
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Analytics Panel Component - Firebase-style analytics with AI insights
const AnalyticsPanel = () => {
  const [analytics, setAnalytics] = useState(null);
  const [aiInsights, setAiInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [insightsLoading, setInsightsLoading] = useState(false);
  const [period, setPeriod] = useState('30d');
  const [error, setError] = useState(null);

  // AI Chat state
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Funnel data state
  const [funnelData, setFunnelData] = useState(null);
  const [funnelLoading, setFunnelLoading] = useState(false);

  // Fetch analytics data
  const fetchAnalytics = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/analytics?period=${period}&metrics=realtime,users,revenue,content,errors`, {
        credentials: 'include'
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to fetch analytics');
      }
      setAnalytics(data);
      setError(null);
    } catch (err) {
      console.error('[Analytics] Fetch error:', err);
      setError(err.message || 'Failed to connect to analytics API');
    } finally {
      setLoading(false);
    }
  }, [period]);

  // Fetch AI insights
  const fetchAiInsights = useCallback(async (forceNew = false) => {
    setInsightsLoading(true);
    try {
      const method = forceNew ? 'POST' : 'GET';
      const body = forceNew ? JSON.stringify({ analysisType: 'full' }) : undefined;
      const response = await fetch('/api/admin/ai-insights', {
        method,
        headers: forceNew ? { 'Content-Type': 'application/json' } : {},
        body,
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setAiInsights(data);
      } else if (response.status === 404 && !forceNew) {
        // No cached insights, generate new ones
        await fetchAiInsights(true);
      }
    } catch (err) {
      console.error('Failed to fetch AI insights:', err);
    } finally {
      setInsightsLoading(false);
    }
  }, []);

  // Fetch funnel data
  const fetchFunnelData = useCallback(async () => {
    setFunnelLoading(true);
    try {
      const response = await fetch(`/api/admin/analytics?period=${period}&metrics=funnel`, {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setFunnelData(data.funnel);
      }
    } catch (err) {
      console.error('Failed to fetch funnel data:', err);
    } finally {
      setFunnelLoading(false);
    }
  }, [period]);

  useEffect(() => {
    fetchAnalytics();
    fetchAiInsights();
    fetchFunnelData();
  }, [fetchAnalytics, fetchFunnelData]);

  // Scroll chat to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Send chat message to AI
  const sendChatMessage = async () => {
    if (!chatInput.trim() || chatLoading) return;

    const userMessage = chatInput.trim();
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setChatLoading(true);

    try {
      const response = await fetch('/api/admin/ai-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          analysisType: 'chat',
          question: userMessage,
          context: analytics // Send current analytics data as context
        }),
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        setChatMessages(prev => [...prev, {
          role: 'assistant',
          content: data.answer || data.insights?.[0]?.description || 'I analyzed your data but couldn\'t generate a specific response. Try asking a different question.'
        }]);
      } else {
        setChatMessages(prev => [...prev, {
          role: 'assistant',
          content: 'Sorry, I encountered an error analyzing your request. Please try again.'
        }]);
      }
    } catch (err) {
      console.error('Chat error:', err);
      setChatMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Failed to connect to AI service. Please try again.'
      }]);
    } finally {
      setChatLoading(false);
    }
  };

  // Handle Enter key in chat
  const handleChatKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  };

  // Simple bar chart component
  const SimpleBarChart = ({ data, labelKey, valueKey, color = '#A855F7', maxItems = 10 }) => {
    if (!data || data.length === 0) return <p className="text-white/40 text-sm">No data available</p>;
    const maxValue = Math.max(...data.slice(0, maxItems).map(d => d[valueKey] || 0));
    return (
      <div className="space-y-2">
        {data.slice(0, maxItems).map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-white/60 w-20 truncate">{item[labelKey] || 'Unknown'}</span>
            <div className="flex-1 h-4 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${maxValue > 0 ? (item[valueKey] / maxValue) * 100 : 0}%`,
                  background: `linear-gradient(90deg, ${color}80, ${color})`
                }}
              />
            </div>
            <span className="text-xs text-white font-medium w-12 text-right">{item[valueKey]}</span>
          </div>
        ))}
      </div>
    );
  };

  // Priority badge for insights
  const PriorityBadge = ({ priority }) => {
    const colors = {
      high: 'bg-red-500/20 text-red-300 border-red-500/30',
      medium: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      low: 'bg-green-500/20 text-green-300 border-green-500/30'
    };
    return (
      <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${colors[priority] || colors.medium}`}>
        {priority}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Icons.Loader className="w-8 h-8 animate-spin text-purple-400" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Period Selector */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Analytics Dashboard</h2>
        <div className="flex items-center gap-2">
          {['today', '7d', '30d', '90d'].map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                period === p
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
            >
              {p === 'today' ? 'Today' : p}
            </button>
          ))}
          <button
            onClick={fetchAnalytics}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            title="Refresh"
          >
            <Icons.RefreshCw className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4">
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Real-time Stats */}
      {analytics?.realtime && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            title="Users Online"
            value={analytics.realtime.usersOnline}
            subtitle="Last 5 minutes"
            icon={Icons.Users}
            color="#10B981"
          />
          <StatCard
            title="Sessions Today"
            value={analytics.realtime.sessionsToday}
            subtitle="Unique sessions"
            icon={Icons.Activity}
            color="#3B82F6"
          />
          <StatCard
            title="Revenue Today"
            value={`$${analytics.realtime.revenueToday || 0}`}
            subtitle="New subscriptions"
            icon={Icons.CreditCard}
            color="#A855F7"
          />
          <StatCard
            title="AI Credits Used"
            value={analytics.realtime.creditsUsedToday}
            subtitle="Talk to Quran"
            icon={Icons.MessageCircle}
            color="#F59E0B"
          />
        </div>
      )}

      {/* AI Insights Section */}
      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-5 border border-purple-500/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <Icons.Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold">AI Growth Advisor</h3>
              <p className="text-white/50 text-xs">
                {aiInsights?.generatedAt
                  ? `Updated ${new Date(aiInsights.generatedAt).toLocaleString()}`
                  : 'Powered by GPT-4o'}
              </p>
            </div>
          </div>
          <button
            onClick={() => fetchAiInsights(true)}
            disabled={insightsLoading}
            className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium disabled:opacity-50 transition-colors flex items-center gap-2"
          >
            {insightsLoading ? (
              <>
                <Icons.Loader className="w-4 h-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Icons.Zap className="w-4 h-4" />
                Analyze Now
              </>
            )}
          </button>
        </div>

        {aiInsights?.insights && aiInsights.insights.length > 0 ? (
          <div className="space-y-3">
            {aiInsights.insights.slice(0, 5).map((insight, i) => (
              <div
                key={insight.id || i}
                className="bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">
                    {insight.category === 'revenue' ? '💰' :
                     insight.category === 'growth' ? '📈' :
                     insight.category === 'retention' ? '🎯' :
                     insight.category === 'marketing' ? '📣' : '💡'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <PriorityBadge priority={insight.priority} />
                      <span className="text-white/40 text-xs">{insight.category}</span>
                    </div>
                    <h4 className="text-white font-medium">{insight.title}</h4>
                    <p className="text-white/60 text-sm mt-1">{insight.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-emerald-400 text-sm font-medium">
                        → {insight.action}
                      </span>
                      {insight.potentialRevenue && (
                        <span className="text-amber-400 text-xs">
                          +${insight.potentialRevenue}/mo potential
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : insightsLoading ? (
          <div className="text-center py-8">
            <Icons.Loader className="w-8 h-8 animate-spin text-purple-400 mx-auto mb-2" />
            <p className="text-white/60 text-sm">Analyzing your metrics with AI...</p>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-white/60 text-sm">Click "Analyze Now" to get AI-powered insights</p>
          </div>
        )}

        {aiInsights?.summary && (
          <div className="mt-4 p-3 bg-white/5 rounded-xl">
            <p className="text-white/80 text-sm italic">"{aiInsights.summary}"</p>
          </div>
        )}
      </div>

      {/* AI Chat Interface */}
      <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20 overflow-hidden">
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
            <Icons.MessageCircle className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">Ask Analytics AI</h3>
            <p className="text-white/50 text-xs">Ask questions about your data</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-64 overflow-y-auto p-4 space-y-3">
          {chatMessages.length === 0 ? (
            <div className="text-center py-8">
              <Icons.MessageCircle className="w-12 h-12 text-white/20 mx-auto mb-3" />
              <p className="text-white/40 text-sm mb-4">Ask me anything about your analytics!</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "What's my top performing surah?",
                  "How can I increase revenue?",
                  "Why are users churning?",
                  "Show me growth trends"
                ].map((suggestion, i) => (
                  <button
                    key={i}
                    onClick={() => setChatInput(suggestion)}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full text-white/70 text-xs transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-white/90'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))
          )}
          {chatLoading && (
            <div className="flex justify-start">
              <div className="bg-white/10 rounded-2xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <Icons.Loader className="w-4 h-4 animate-spin text-blue-400" />
                  <span className="text-white/60 text-sm">Analyzing...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-3 border-t border-white/10 flex gap-2">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyPress={handleChatKeyPress}
            placeholder="Ask about revenue, users, errors..."
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/40 text-sm focus:outline-none focus:border-blue-500/50"
          />
          <button
            onClick={sendChatMessage}
            disabled={chatLoading || !chatInput.trim()}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white transition-colors"
          >
            <Icons.Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* User Engagement */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Icons.Users className="w-5 h-5 text-blue-400" />
            User Engagement
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{analytics?.users?.wau || 0}</p>
              <p className="text-white/40 text-xs">Weekly Active</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{analytics?.users?.mau || 0}</p>
              <p className="text-white/40 text-xs">Monthly Active</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{analytics?.users?.newUsers || 0}</p>
              <p className="text-white/40 text-xs">New Users</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-white/60 text-sm mb-2">Retention</p>
            <div className="flex gap-4">
              <div className="flex-1 text-center p-2 bg-white/5 rounded-lg">
                <p className="text-lg font-bold text-green-400">{analytics?.users?.retention?.day1 || 0}%</p>
                <p className="text-white/40 text-[10px]">Day 1</p>
              </div>
              <div className="flex-1 text-center p-2 bg-white/5 rounded-lg">
                <p className="text-lg font-bold text-amber-400">{analytics?.users?.retention?.day7 || 0}%</p>
                <p className="text-white/40 text-[10px]">Day 7</p>
              </div>
              <div className="flex-1 text-center p-2 bg-white/5 rounded-lg">
                <p className="text-lg font-bold text-purple-400">{analytics?.users?.retention?.day30 || 0}%</p>
                <p className="text-white/40 text-[10px]">Day 30</p>
              </div>
            </div>
          </div>
          <p className="text-white/60 text-sm mb-2">By Device</p>
          <SimpleBarChart data={analytics?.users?.byDevice} labelKey="device" valueKey="count" color="#3B82F6" />
        </div>

        {/* Revenue */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Icons.CreditCard className="w-5 h-5 text-green-400" />
            Revenue & Subscriptions
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
              <p className="text-white/60 text-xs">MRR</p>
              <p className="text-2xl font-bold text-green-400">${analytics?.revenue?.mrr || 0}</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl">
              <p className="text-white/60 text-xs">Conversion Rate</p>
              <p className="text-2xl font-bold text-white">{analytics?.revenue?.conversionRate || 0}%</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-white/60 text-sm mb-2">Churn Rate</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 rounded-full"
                  style={{ width: `${Math.min(analytics?.revenue?.churnRate || 0, 100)}%` }}
                />
              </div>
              <span className="text-red-400 text-sm font-medium">{analytics?.revenue?.churnRate || 0}%</span>
            </div>
          </div>
          <p className="text-white/60 text-sm mb-2">Users by Tier</p>
          <SimpleBarChart data={analytics?.revenue?.byTier} labelKey="tier" valueKey="count" color="#10B981" />
        </div>

        {/* Content Performance */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Icons.BookOpen className="w-5 h-5 text-amber-400" />
            Content Performance
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{analytics?.content?.talkToQuran?.totalConversations || 0}</p>
              <p className="text-white/40 text-xs">AI Conversations</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{analytics?.content?.audioStats?.totalPlays || 0}</p>
              <p className="text-white/40 text-xs">Audio Plays</p>
            </div>
          </div>
          <p className="text-white/60 text-sm mb-2">Top Surahs Read</p>
          <SimpleBarChart data={analytics?.content?.topSurahs} labelKey="surah_id" valueKey="count" color="#F59E0B" />
        </div>

        {/* Error Monitoring */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Icons.AlertCircle className="w-5 h-5 text-red-400" />
            Error Monitoring
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
              <p className="text-white/60 text-xs">Error Rate</p>
              <p className="text-2xl font-bold text-red-400">{analytics?.errors?.errorRate || 0}%</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl">
              <p className="text-white/60 text-xs">Memory Warnings</p>
              <p className="text-2xl font-bold text-amber-400">{analytics?.errors?.memoryWarnings?.count || 0}</p>
            </div>
          </div>
          <p className="text-white/60 text-sm mb-2">Errors by Browser</p>
          <SimpleBarChart data={analytics?.errors?.byBrowser} labelKey="browser" valueKey="count" color="#EF4444" />
        </div>
      </div>

      {/* Top Features */}
      {analytics?.content?.topFeatures && analytics.content.topFeatures.length > 0 && (
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <Icons.Zap className="w-5 h-5 text-purple-400" />
            Feature Usage
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {analytics.content.topFeatures.map((feature, i) => (
              <div key={i} className="text-center p-3 bg-white/5 rounded-xl">
                <p className="text-xl font-bold text-white">{feature.count}</p>
                <p className="text-white/60 text-xs capitalize">{feature.feature_name?.replace(/_/g, ' ')}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Funnel Analysis */}
      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-5 border border-indigo-500/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
              <Icons.Filter className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold">Conversion Funnel</h3>
              <p className="text-white/50 text-xs">User journey from visitor to paid subscriber</p>
            </div>
          </div>
          <button
            onClick={fetchFunnelData}
            disabled={funnelLoading}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Icons.RefreshCw className={`w-4 h-4 text-white/60 ${funnelLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {funnelLoading ? (
          <div className="flex items-center justify-center h-48">
            <Icons.Loader className="w-8 h-8 animate-spin text-indigo-400" />
          </div>
        ) : funnelData ? (
          <div className="space-y-4">
            {/* Funnel Visualization */}
            <div className="relative">
              {[
                { key: 'visitors', label: 'Total Visitors', icon: '👥', color: 'from-blue-500 to-blue-600' },
                { key: 'signups', label: 'Signed Up', icon: '✍️', color: 'from-cyan-500 to-cyan-600' },
                { key: 'activeUsers', label: 'Active Users', icon: '⚡', color: 'from-emerald-500 to-emerald-600' },
                { key: 'trialUsers', label: 'Used AI Feature', icon: '🤖', color: 'from-amber-500 to-amber-600' },
                { key: 'hitLimit', label: 'Hit Free Limit', icon: '🔥', color: 'from-orange-500 to-orange-600' },
                { key: 'paidUsers', label: 'Paid Subscribers', icon: '💎', color: 'from-purple-500 to-purple-600' },
              ].map((step, index, arr) => {
                const value = funnelData[step.key] || 0;
                const prevValue = index > 0 ? (funnelData[arr[index - 1].key] || 1) : value;
                const conversionRate = index > 0 && prevValue > 0 ? Math.round((value / prevValue) * 100) : 100;
                const totalConversion = funnelData.visitors > 0 ? Math.round((value / funnelData.visitors) * 100) : 0;
                const width = funnelData.visitors > 0 ? Math.max(20, (value / funnelData.visitors) * 100) : 100;

                return (
                  <div key={step.key} className="relative mb-2">
                    {/* Connector line */}
                    {index > 0 && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                        <div className="w-0.5 h-2 bg-white/20" />
                        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
                          conversionRate >= 50 ? 'bg-green-500/20 text-green-300' :
                          conversionRate >= 20 ? 'bg-amber-500/20 text-amber-300' :
                          'bg-red-500/20 text-red-300'
                        }`}>
                          {conversionRate}%
                        </span>
                      </div>
                    )}

                    {/* Funnel bar */}
                    <div
                      className="mx-auto transition-all duration-500"
                      style={{ width: `${width}%`, minWidth: '200px' }}
                    >
                      <div className={`bg-gradient-to-r ${step.color} rounded-xl p-3 flex items-center justify-between shadow-lg`}>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{step.icon}</span>
                          <span className="text-white font-medium text-sm">{step.label}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-white font-bold">{value.toLocaleString()}</span>
                          {index > 0 && (
                            <span className="text-white/60 text-xs ml-1">({totalConversion}%)</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Funnel Insights */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-white/10">
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-400">
                  {funnelData.visitors > 0 ? Math.round((funnelData.signups / funnelData.visitors) * 100) : 0}%
                </p>
                <p className="text-white/50 text-xs">Visitor → Signup</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-400">
                  {funnelData.signups > 0 ? Math.round((funnelData.hitLimit / funnelData.signups) * 100) : 0}%
                </p>
                <p className="text-white/50 text-xs">Signup → Hit Limit</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-400">
                  {funnelData.hitLimit > 0 ? Math.round((funnelData.paidUsers / funnelData.hitLimit) * 100) : 0}%
                </p>
                <p className="text-white/50 text-xs">Hit Limit → Paid</p>
              </div>
            </div>

            {/* Optimization Tips */}
            {funnelData.hitLimit > 0 && funnelData.paidUsers === 0 && (
              <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <div className="flex items-start gap-2">
                  <span className="text-lg">💡</span>
                  <div>
                    <p className="text-amber-300 font-medium text-sm">Conversion Opportunity</p>
                    <p className="text-white/60 text-xs mt-1">
                      {funnelData.hitLimit} users hit the free limit but haven't converted.
                      Consider sending targeted upgrade emails or offering a discount.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <Icons.Filter className="w-12 h-12 text-white/20 mx-auto mb-3" />
            <p className="text-white/40 text-sm">No funnel data available yet</p>
            <p className="text-white/30 text-xs mt-1">Data will appear as users interact with your app</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Payment Analytics Panel
const PaymentsPanel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');

  const fetchPayments = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        ...(statusFilter && { status: statusFilter }),
        ...(sourceFilter && { source: sourceFilter }),
      });
      const res = await fetch(`/api/admin/payment-analytics?${params}`, { credentials: 'include' });
      if (res.ok) {
        setData(await res.json());
      }
    } catch (err) {
      console.error('[PaymentsPanel] Error:', err);
    }
    setLoading(false);
  }, [page, statusFilter, sourceFilter]);

  useEffect(() => { fetchPayments(); }, [fetchPayments]);

  if (loading && !data) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!data) return <p className="text-white/50 text-center py-12">No payment data available</p>;

  const { summary, bySource, byProduct, list, pagination } = data;

  // Aggregate source breakdown
  const sourceAgg = {};
  (bySource || []).forEach(r => {
    if (!sourceAgg[r.source]) sourceAgg[r.source] = { total: 0, completed: 0 };
    sourceAgg[r.source].total += r.count;
    if (r.status === 'completed') sourceAgg[r.source].completed += r.count;
  });

  // Aggregate product breakdown
  const productAgg = {};
  (byProduct || []).forEach(r => {
    if (!productAgg[r.product_type]) productAgg[r.product_type] = { total: 0, completed: 0 };
    productAgg[r.product_type].total += r.count;
    if (r.status === 'completed') productAgg[r.product_type].completed += r.count;
  });

  const statusColors = {
    initiated: 'bg-amber-500/20 text-amber-300',
    completed: 'bg-green-500/20 text-green-300',
    failed: 'bg-red-500/20 text-red-300',
    abandoned: 'bg-gray-500/20 text-gray-300',
  };

  const sourceLabels = {
    kids: 'Kids Mode',
    talk_to_quran: 'Talk to Quran',
    general: 'Settings / General',
  };

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Initiations"
          value={summary.totalInitiated}
          icon={Icons.CreditCard}
          color="#A855F7"
        />
        <StatCard
          title="Completed"
          value={summary.completed}
          subtitle={`${summary.conversionRate}% conversion`}
          icon={Icons.Check}
          color="#10B981"
        />
        <StatCard
          title="Failed"
          value={summary.failed}
          icon={Icons.AlertCircle}
          color="#EF4444"
        />
        <StatCard
          title="Abandoned"
          value={summary.abandoned}
          subtitle="Initiated but not completed"
          icon={Icons.Clock}
          color="#F59E0B"
        />
      </div>

      {/* Breakdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* By Source */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h3 className="text-sm font-semibold text-white/70 mb-3">By Source</h3>
          <div className="space-y-2">
            {Object.entries(sourceAgg).map(([src, vals]) => (
              <div key={src} className="flex items-center justify-between">
                <span className="text-white text-sm">{sourceLabels[src] || src}</span>
                <div className="flex items-center gap-2">
                  <span className="text-white/50 text-xs">{vals.completed}/{vals.total} completed</span>
                  <span className="text-white font-medium text-sm">{vals.total}</span>
                </div>
              </div>
            ))}
            {Object.keys(sourceAgg).length === 0 && (
              <p className="text-white/30 text-sm">No data yet</p>
            )}
          </div>
        </div>

        {/* By Product */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h3 className="text-sm font-semibold text-white/70 mb-3">By Product</h3>
          <div className="space-y-2">
            {Object.entries(productAgg).map(([prod, vals]) => (
              <div key={prod} className="flex items-center justify-between">
                <span className="text-white text-sm capitalize">{prod.replace(/_/g, ' ')}</span>
                <div className="flex items-center gap-2">
                  <span className="text-white/50 text-xs">{vals.completed}/{vals.total}</span>
                  <span className="text-white font-medium text-sm">{vals.total}</span>
                </div>
              </div>
            ))}
            {Object.keys(productAgg).length === 0 && (
              <p className="text-white/30 text-sm">No data yet</p>
            )}
          </div>
        </div>
      </div>

      {/* Filters + Table */}
      <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-white">Payment Initiations</h3>
          <div className="flex gap-2 flex-wrap">
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
              className="bg-white/10 text-white text-xs rounded-lg px-3 py-1.5 border border-white/20 outline-none"
            >
              <option value="">All Status</option>
              <option value="initiated">Initiated</option>
              <option value="completed">Completed</option>
              <option value="failed">Failed</option>
            </select>
            <select
              value={sourceFilter}
              onChange={(e) => { setSourceFilter(e.target.value); setPage(1); }}
              className="bg-white/10 text-white text-xs rounded-lg px-3 py-1.5 border border-white/20 outline-none"
            >
              <option value="">All Sources</option>
              <option value="kids">Kids Mode</option>
              <option value="talk_to_quran">Talk to Quran</option>
              <option value="general">General</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">User</th>
                    <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Plan</th>
                    <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Source</th>
                    <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Status</th>
                    <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {list.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-white/40 text-sm">
                        No payment initiations found
                      </td>
                    </tr>
                  ) : list.map((item) => (
                    <tr key={item.id} className="border-b border-white/10 hover:bg-white/5">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          {item.user_picture ? (
                            <img src={item.user_picture} alt="" className="w-7 h-7 rounded-full" />
                          ) : (
                            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                              <span className="text-white text-[10px] font-bold">
                                {(item.user_name || item.user_email || '?')[0]}
                              </span>
                            </div>
                          )}
                          <div>
                            <p className="text-white text-sm">{item.user_name || 'Unknown'}</p>
                            <p className="text-white/50 text-xs">{item.user_email || item.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-white text-sm capitalize">{item.product_type?.replace(/_/g, ' ')}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-white/70 text-sm">{sourceLabels[item.source] || item.source}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[item.status] || 'bg-gray-500/20 text-gray-300'}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-white/50 text-xs">
                        {new Date(item.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="flex items-center justify-between p-4 border-t border-white/10">
                <p className="text-white/50 text-xs">
                  Page {pagination.page} of {pagination.totalPages} ({pagination.total} total)
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page <= 1}
                    className="px-3 py-1 rounded-lg bg-white/10 text-white text-xs hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setPage(p => Math.min(pagination.totalPages, p + 1))}
                    disabled={page >= pagination.totalPages}
                    className="px-3 py-1 rounded-lg bg-white/10 text-white text-xs hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default function AdminDashboard({ onClose, initialTab = 'overview', onTabChange }) {
  const { user, isAuthenticated, isAdmin, loading: authLoading } = useAuth();

  // Check if user is admin (either via isAdmin flag or email check as fallback)
  const isAdminUser = isAdmin || user?.email === 'ziadevtmc@gmail.com';

  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTier, setFilterTier] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [activeTab, setActiveTab] = useState(initialTab); // overview, users, transactions, settings

  // Handle tab change with URL update
  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  }, [onTabChange]);

  // Sync activeTab when initialTab changes (browser back/forward)
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);
  const [settings, setSettings] = useState(null);
  const [settingsLoading, setSettingsLoading] = useState(false);
  const [settingsSaving, setSettingsSaving] = useState(false);

  // Fetch stats
  const fetchStats = useCallback(async () => {
    try {
      const response = await fetch('/api/admin/stats', { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      } else if (response.status === 403) {
        setError('Access denied. Admin only.');
      }
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    }
  }, []);

  // Fetch users
  const fetchUsers = useCallback(async (page = 1) => {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        ...(searchTerm && { search: searchTerm }),
        ...(filterTier && { tier: filterTier }),
      });

      const response = await fetch(`/api/admin/users?${params}`, { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
        setPagination(data.pagination);
      }
    } catch (err) {
      console.error('Failed to fetch users:', err);
    }
  }, [searchTerm, filterTier]);

  // Save user changes
  const saveUserChanges = async (changes) => {
    try {
      const response = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(changes),
      });

      if (response.ok) {
        fetchUsers(pagination.page);
        fetchStats();
      }
    } catch (err) {
      console.error('Failed to save user:', err);
    }
  };

  // Fetch admin settings
  const fetchSettings = useCallback(async () => {
    setSettingsLoading(true);
    try {
      const response = await fetch('/api/admin/settings', { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setSettings(data);
      }
    } catch (err) {
      console.error('Failed to fetch settings:', err);
    }
    setSettingsLoading(false);
  }, []);

  // Save admin settings
  const saveSettings = async (newSettings) => {
    setSettingsSaving(true);
    try {
      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(newSettings),
      });

      if (response.ok) {
        await fetchSettings();
      }
    } catch (err) {
      console.error('Failed to save settings:', err);
    }
    setSettingsSaving(false);
  };

  // Initial load
  useEffect(() => {
    if (isAdminUser) {
      setLoading(true);
      Promise.all([fetchStats(), fetchUsers(), fetchSettings()]).finally(() => setLoading(false));
    } else if (!authLoading) {
      setError('Access denied. Admin only.');
      setLoading(false);
    }
  }, [isAdminUser, authLoading, fetchStats, fetchUsers, fetchSettings]);

  // Refetch users when search/filter changes
  useEffect(() => {
    if (isAdminUser) {
      const timer = setTimeout(() => fetchUsers(1), 300);
      return () => clearTimeout(timer);
    }
  }, [searchTerm, filterTier, isAdminUser, fetchUsers]);

  // Show loading while auth is being checked
  if (authLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-white/20 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/60">Loading...</p>
        </div>
      </div>
    );
  }

  // Check admin access - allow if isAdmin flag OR email matches
  if (!isAdminUser) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <Icons.Shield className="w-16 h-16 text-red-400/50 mx-auto mb-4" />
          <p className="text-white text-lg font-medium mb-2">Access Denied</p>
          <p className="text-white/60">Admin access required</p>
          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <Icons.AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <p className="text-red-400 text-lg font-medium">{error}</p>
          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900 overflow-hidden">
      {/* Header */}
      <div className="h-16 border-b border-white/10 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Icons.Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Admin Dashboard</h1>
            <p className="text-xs text-white/50">w3Quran Management</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <Icons.X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Tabs - Horizontally scrollable on mobile */}
      <div className="border-b border-white/10 px-4 sm:px-6 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex gap-4 sm:gap-6 min-w-max">
          {[
            { id: 'overview', label: 'Overview', icon: Icons.PieChart },
            { id: 'analytics', label: 'Analytics', icon: Icons.Activity },
            { id: 'users', label: 'Users', icon: Icons.Users },
            { id: 'logs', label: 'Logs', icon: Icons.FileText },
            { id: 'transactions', label: 'Transactions', icon: Icons.CreditCard },
            { id: 'payments', label: 'Payments', icon: Icons.DollarSign },
            { id: 'settings', label: 'Settings', icon: Icons.Settings },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 py-4 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-purple-500 text-white'
                  : 'border-transparent text-white/50 hover:text-white/70'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100vh-120px)] overflow-y-auto p-6">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Overview Tab */}
            {activeTab === 'overview' && stats && (
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard
                    title="Total Users"
                    value={stats.overview.totalUsers}
                    subtitle={`+${stats.overview.usersThisMonth} this month`}
                    icon={Icons.Users}
                    color="#A855F7"
                  />
                  <StatCard
                    title="Monthly Revenue"
                    value={`$${stats.subscriptions.estimatedMonthlyRevenue?.toFixed(2) || '0'}`}
                    subtitle="Estimated from active subs"
                    icon={Icons.DollarSign}
                    color="#10B981"
                  />
                  <StatCard
                    title="Conversations"
                    value={stats.conversations.total}
                    subtitle={`${stats.conversations.today} today`}
                    icon={Icons.MessageCircle}
                    color="#EC4899"
                  />
                  <StatCard
                    title="Lifetime Sales"
                    value={stats.overview.lifetimePurchases}
                    subtitle={`$${(stats.overview.lifetimePurchases * 299).toLocaleString()} total`}
                    icon={Icons.Award}
                    color="#F59E0B"
                  />
                </div>

                {/* Subscription Breakdown */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Subscription Breakdown</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Object.entries(stats.subscriptions.byTier || {}).map(([tier, count]) => (
                      <div key={tier} className="text-center">
                        <TierBadge tier={tier} />
                        <p className="text-2xl font-bold text-white mt-2">{count}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Credit Usage */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Credit Usage This Month</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-white/60 text-sm">Total Available</p>
                      <p className="text-2xl font-bold text-white">{stats.credits.totalAvailable}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white/60 text-sm">Total Used</p>
                      <p className="text-2xl font-bold text-purple-400">{stats.credits.totalUsedThisMonth}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white/60 text-sm">Avg per User</p>
                      <p className="text-2xl font-bold text-white">{stats.credits.avgUsagePerUser}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && <AnalyticsPanel />}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div className="space-y-4">
                {/* Search & Filters */}
                <div className="flex gap-2 sm:gap-4 flex-wrap">
                  <div className="relative flex-1 min-w-[150px]">
                    <Icons.Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm"
                    />
                  </div>
                  <select
                    value={filterTier}
                    onChange={(e) => setFilterTier(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm"
                  >
                    <option value="">All</option>
                    <option value="free">Free</option>
                    <option value="starter">Starter</option>
                    <option value="premium">Premium</option>
                    <option value="scholar">Scholar</option>
                    <option value="lifetime">Lifetime</option>
                  </select>
                </div>

                {/* Mobile: User Cards */}
                <div className="md:hidden space-y-3">
                  {users.map(u => (
                    <UserCard key={u.id} user={u} onEdit={setEditingUser} />
                  ))}
                </div>

                {/* Desktop: Users Table */}
                <div className="hidden md:block bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">User</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Tier</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Credits</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Used</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Convos</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Joined</th>
                          <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map(u => (
                          <UserRow key={u.id} user={u} onEdit={setEditingUser} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-white/50 text-xs sm:text-sm">
                      {users.length} of {pagination.total}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => fetchUsers(pagination.page - 1)}
                        disabled={pagination.page <= 1}
                        className="px-3 py-1 rounded bg-white/10 text-white text-sm disabled:opacity-50"
                      >
                        Prev
                      </button>
                      <span className="px-2 py-1 text-white/60 text-sm">
                        {pagination.page}/{pagination.totalPages}
                      </span>
                      <button
                        onClick={() => fetchUsers(pagination.page + 1)}
                        disabled={pagination.page >= pagination.totalPages}
                        className="px-3 py-1 rounded bg-white/10 text-white text-sm disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Logs Tab */}
            {activeTab === 'logs' && <LogsPanel />}

            {/* Transactions Tab */}
            {activeTab === 'transactions' && stats && (
              <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                <div className="p-4 border-b border-white/10">
                  <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">User</th>
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Type</th>
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Amount</th>
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Description</th>
                        <th className="text-left py-3 px-4 text-white/60 text-sm font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.recentTransactions.map((tx, i) => (
                        <tr key={tx.id || i} className="border-b border-white/10 hover:bg-white/5">
                          <td className="py-3 px-4">
                            <p className="text-white text-sm">{tx.name || 'Unknown'}</p>
                            <p className="text-white/50 text-xs">{tx.email}</p>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              tx.type === 'purchase' ? 'bg-green-500/20 text-green-300' :
                              tx.type === 'use' ? 'bg-purple-500/20 text-purple-300' :
                              tx.type === 'subscription' ? 'bg-blue-500/20 text-blue-300' :
                              'bg-gray-500/20 text-gray-300'
                            }`}>
                              {tx.type}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={tx.amount > 0 ? 'text-green-400' : 'text-red-400'}>
                              {tx.amount > 0 ? '+' : ''}{tx.amount}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-white/70 text-sm">{tx.description}</td>
                          <td className="py-3 px-4 text-white/50 text-xs">
                            {new Date(tx.created_at).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Payments Tab */}
            {activeTab === 'payments' && <PaymentsPanel />}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-6 max-w-2xl">
                {/* Stripe Mode Toggle */}
                <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                  <div className="p-4 border-b border-white/10">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Icons.CreditCard className="w-5 h-5 text-purple-400" />
                      Stripe Payment Mode
                    </h3>
                    <p className="text-white/50 text-sm mt-1">
                      Toggle between test and live mode for purchases
                    </p>
                  </div>
                  <div className="p-4">
                    {settingsLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                      </div>
                    ) : settings?.stripe ? (
                      <div className="space-y-4">
                        {/* Current Mode Indicator */}
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                          <div className={`w-3 h-3 rounded-full ${
                            settings.stripe.currentMode === 'test' ? 'bg-amber-400' : 'bg-emerald-400'
                          }`} />
                          <span className="text-white font-medium">
                            Currently: {settings.stripe.currentMode === 'test' ? 'Test Mode' : 'Live Mode'}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${
                            settings.stripe.currentMode === 'test'
                              ? 'bg-amber-500/20 text-amber-300'
                              : 'bg-emerald-500/20 text-emerald-300'
                          }`}>
                            {settings.stripe.currentMode === 'test' ? 'No real charges' : 'Real money'}
                          </span>
                        </div>

                        {/* Mode Selection */}
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: 'auto', label: 'Auto', desc: 'Detect from key', icon: Icons.Zap },
                            { id: 'test', label: 'Test', desc: 'Test purchases', icon: Icons.AlertCircle, color: 'amber' },
                            { id: 'live', label: 'Live', desc: 'Real purchases', icon: Icons.Check, color: 'emerald' },
                          ].map(mode => (
                            <button
                              key={mode.id}
                              onClick={() => saveSettings({ stripeMode: mode.id })}
                              disabled={settingsSaving}
                              className={`p-4 rounded-xl border transition-all ${
                                settings.stripe.mode === mode.id
                                  ? mode.color === 'amber'
                                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                                    : mode.color === 'emerald'
                                      ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                                      : 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                              } ${settingsSaving ? 'opacity-50 cursor-wait' : ''}`}
                            >
                              <mode.icon className="w-5 h-5 mx-auto mb-2" />
                              <p className="font-medium">{mode.label}</p>
                              <p className="text-xs opacity-70">{mode.desc}</p>
                            </button>
                          ))}
                        </div>

                        {/* Keys Status */}
                        <div className="p-3 rounded-xl bg-white/5 space-y-2">
                          <p className="text-white/60 text-sm font-medium">Environment Keys:</p>
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${settings.stripe.hasTestKey ? 'bg-emerald-400' : 'bg-red-400'}`} />
                            <span className="text-white/70 text-sm">Test Key: {settings.stripe.hasTestKey ? 'Configured' : 'Missing'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${settings.stripe.hasLiveKey ? 'bg-emerald-400' : 'bg-red-400'}`} />
                            <span className="text-white/70 text-sm">Live Key: {settings.stripe.hasLiveKey ? 'Configured' : 'Missing'}</span>
                          </div>
                        </div>

                        {/* Warning for Live Mode */}
                        {settings.stripe.mode === 'live' && (
                          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                            <div className="flex items-start gap-2">
                              <Icons.AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-red-300 font-medium">Live Mode Active</p>
                                <p className="text-red-300/70 text-sm">
                                  All purchases will be charged real money. Make sure your products and prices are correct.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-white/50 text-center py-4">Settings not available</p>
                    )}
                  </div>
                </div>

                {/* Security Notice */}
                <div className="bg-white/5 rounded-2xl border border-white/10 p-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                    <Icons.Shield className="w-5 h-5 text-blue-400" />
                    Security Notes
                  </h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      Stripe handles all payment security (PCI compliant)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      Webhook signatures are verified to prevent tampering
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      Credits are only granted after successful payment confirmation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      If a user cancels subscription, they keep access until period ends
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Edit User Modal */}
      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={saveUserChanges}
        />
      )}
    </div>
  );
}
