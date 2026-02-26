/**
 * Error Dashboard Panel — Real-time error monitoring
 * Reuses existing /api/admin/logs?view=summary endpoint.
 */
import { useState, useEffect, useCallback } from 'react';
import { Icons } from '../common/Icons';
import { StatCard, SimpleBarChart, TrendChart, AdminLoadingSpinner, EmptyState } from './shared';

const HOUR_OPTIONS = [
  { value: '1', label: '1 Hour' },
  { value: '6', label: '6 Hours' },
  { value: '24', label: '24 Hours' },
  { value: '48', label: '48 Hours' },
  { value: '168', label: '7 Days' },
];

const ErrorDashboardPanel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hours, setHours] = useState('24');
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/logs?view=summary&hours=${hours}`, { credentials: 'include' });
      if (!res.ok) {
        const errBody = await res.text().catch(() => '');
        let detail = '';
        try { detail = JSON.parse(errBody)?.error || errBody; } catch { detail = errBody; }
        throw new Error(`HTTP ${res.status}: ${detail || 'Failed to fetch error data'}`);
      }
      const json = await res.json();
      setData(json);
    } catch (e) {
      console.error('[ErrorDashboard] Fetch failed:', e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [hours]);

  useEffect(() => { fetchData(); }, [fetchData]);

  if (loading) return <AdminLoadingSpinner />;

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-white text-lg font-bold">Error Dashboard</h2>
          <p className="text-white/40 text-sm mt-1">Monitor app errors in real-time — track error rates, memory warnings, crashes by browser/OS, and identify the most frequent issues affecting users.</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
          <Icons.AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
          <p className="text-red-400 font-medium">Failed to load error data</p>
          <p className="text-white/40 text-sm mt-1">{error}</p>
          <button onClick={fetchData} className="mt-3 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm transition-colors">
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-white text-lg font-bold">Error Dashboard</h2>
          <p className="text-white/40 text-sm mt-1">Monitor app errors in real-time — track error rates, memory warnings, crashes by browser/OS, and identify the most frequent issues affecting users.</p>
        </div>
        <EmptyState icon={Icons.AlertCircle} title="No Error Data" message="No error logs found for this time range." />
      </div>
    );
  }

  const totals = data.totals || {};
  const errorRate = totals.total_errors && hours ? (totals.total_errors / parseInt(hours)).toFixed(1) : '0';
  const hasCritical = (data.topErrors || []).some(e => e.log_level === 'critical' && e.count > 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-white text-lg font-bold">Error Dashboard</h2>
        <p className="text-white/40 text-sm mt-1">Monitor app errors in real-time — track error rates, memory warnings, crashes by browser/OS, and identify the most frequent issues affecting users.</p>
      </div>

      {/* Critical Alert Banner */}
      {hasCritical && (
        <div className="bg-red-500/20 border border-red-500/40 rounded-xl p-4 flex items-center gap-3">
          <Icons.AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <div>
            <p className="text-red-300 font-medium text-sm">Critical Errors Detected</p>
            <p className="text-red-300/60 text-xs">There are critical errors in the selected time range. Check the details below.</p>
          </div>
        </div>
      )}

      {/* Time Range Selector */}
      <div className="flex items-center justify-between">
        <h3 className="text-white/60 text-sm">Error Overview</h3>
        <select
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="bg-white/10 border border-white/20 text-white text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          {HOUR_OPTIONS.map(o => (
            <option key={o.value} value={o.value} className="bg-gray-900">{o.label}</option>
          ))}
        </select>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard title="Total Errors" value={totals.total_errors || 0} icon={Icons.AlertCircle} color="#EF4444" />
        <StatCard title="Error Rate" value={`${errorRate}/hr`} subtitle="Avg errors per hour" icon={Icons.TrendingUp} color="#F59E0B" />
        <StatCard title="Memory Warnings" value={data.memoryWarnings?.length || 0} icon={Icons.Cpu} color="#8B5CF6" />
        <StatCard title="Unique Sessions" value={totals.unique_sessions || 0} icon={Icons.Users} color="#3B82F6" />
      </div>

      {/* Error Trend (hourly bars) */}
      {data.errorTrend && data.errorTrend.length > 0 && (
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h4 className="text-white/60 text-sm font-medium mb-3">Error Trend (Hourly)</h4>
          <TrendChart
            data={data.errorTrend}
            valueKey="count"
            color="#F59E0B"
            formatTooltip={(item) => `${item.hour || item.date}: ${item.count} errors`}
          />
          <div className="flex justify-between mt-1">
            <span className="text-[9px] text-white/30">{data.errorTrend[0]?.hour || ''}</span>
            <span className="text-[9px] text-white/30">Now</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top Errors */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h4 className="text-white/60 text-sm font-medium mb-3">Top Error Messages</h4>
          {data.topErrors && data.topErrors.length > 0 ? (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {data.topErrors.slice(0, 10).map((err, i) => (
                <div key={i} className="flex items-start gap-2 py-1.5 border-b border-white/5 last:border-0">
                  <span className="text-red-400 font-bold text-xs w-8 text-right flex-shrink-0">{err.count}x</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-white/80 text-xs truncate" title={err.message}>{err.message}</p>
                    {err.last_seen && (
                      <p className="text-white/30 text-[10px]">Last: {new Date(err.last_seen).toLocaleString()}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/40 text-sm">No errors in this period</p>
          )}
        </div>

        {/* Errors by Browser */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h4 className="text-white/60 text-sm font-medium mb-3">Errors by Browser</h4>
          <SimpleBarChart
            data={(data.errorsByBrowser || []).map(e => ({ browser: e.browser || e.name || 'Unknown', count: e.count || e.errors || 0 }))}
            labelKey="browser"
            valueKey="count"
            color="#3B82F6"
            maxItems={6}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Errors by Type */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h4 className="text-white/60 text-sm font-medium mb-3">Errors by Type</h4>
          <SimpleBarChart
            data={(data.errorsByType || []).map(e => ({ type: e.type || e.log_type || 'Unknown', count: e.count || 0 }))}
            labelKey="type"
            valueKey="count"
            color="#EF4444"
            maxItems={8}
          />
        </div>

        {/* Errors by Surah */}
        {data.errorsBySurah && data.errorsBySurah.length > 0 && (
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <h4 className="text-white/60 text-sm font-medium mb-3">Errors by Surah</h4>
            <SimpleBarChart
              data={data.errorsBySurah.map(e => ({ surah: `Surah ${e.surah_id}`, count: e.count || 0 }))}
              labelKey="surah"
              valueKey="count"
              color="#F59E0B"
              maxItems={8}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorDashboardPanel;
