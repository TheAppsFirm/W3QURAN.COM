/**
 * Search Analytics Panel — Search usage monitoring for admin dashboard
 * Fetches from /api/admin/search-analytics endpoint.
 */
import { useState, useEffect, useCallback } from 'react';
import { Icons } from '../common/Icons';
import { StatCard, SimpleBarChart, TrendChart, PeriodSelector, AdminLoadingSpinner, EmptyState } from './shared';

const SearchAnalyticsPanel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [period, setPeriod] = useState('30d');

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/search-analytics?period=${period}`, { credentials: 'include' });
      if (!res.ok) throw new Error('Failed to fetch search analytics');
      const json = await res.json();
      setData(json);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => { fetchData(); }, [fetchData]);

  if (loading) return <AdminLoadingSpinner />;

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-white text-lg font-bold">Search Analytics</h2>
          <p className="text-white/40 text-sm mt-1">See what users search for most — top search terms, search volume trends, and unique searchers.</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
          <Icons.AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
          <p className="text-red-400 font-medium">Failed to load search analytics</p>
          <p className="text-white/40 text-sm mt-1">{error}</p>
          <button onClick={fetchData} className="mt-3 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm transition-colors">Retry</button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-white text-lg font-bold">Search Analytics</h2>
          <p className="text-white/40 text-sm mt-1">See what users search for most — top search terms, search volume trends, and unique searchers.</p>
        </div>
        <EmptyState icon={Icons.Search} title="No Search Data" message="No search analytics available for this period." />
      </div>
    );
  }

  const topTerm = data.topSearches && data.topSearches.length > 0 ? data.topSearches[0] : null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-white text-lg font-bold">Search Analytics</h2>
          <p className="text-white/40 text-sm mt-1">See what users search for most — top search terms, search volume trends, and unique searchers. Helps identify content gaps and popular topics.</p>
        </div>
        <PeriodSelector value={period} onChange={setPeriod} />
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        <StatCard
          title="Total Searches"
          value={data.totalSearches || 0}
          icon={Icons.Search}
          color="#3B82F6"
        />
        <StatCard
          title="Unique Searchers"
          value={data.uniqueSearchers || 0}
          icon={Icons.Users}
          color="#8B5CF6"
        />
        <StatCard
          title="Top Search Term"
          value={topTerm ? topTerm.term : 'N/A'}
          subtitle={topTerm ? `${topTerm.count} searches` : undefined}
          icon={Icons.TrendingUp}
          color="#10B981"
        />
      </div>

      {/* Daily Search Volume Trend */}
      {data.trend && data.trend.length > 0 && (
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h4 className="text-white/60 text-sm font-medium mb-3">Daily Search Volume</h4>
          <TrendChart
            data={data.trend}
            valueKey="count"
            color="#3B82F6"
            formatTooltip={(item) => `${item.date}: ${item.count} searches`}
          />
          <div className="flex justify-between mt-1">
            <span className="text-[9px] text-white/30">{data.trend[0]?.date || ''}</span>
            <span className="text-[9px] text-white/30">{data.trend[data.trend.length - 1]?.date || ''}</span>
          </div>
        </div>
      )}

      {/* Top Search Terms Table */}
      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
        <h4 className="text-white/60 text-sm font-medium mb-3">Top Search Terms</h4>
        {data.topSearches && data.topSearches.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/40 text-xs font-medium py-2 pr-4">#</th>
                  <th className="text-left text-white/40 text-xs font-medium py-2 pr-4">Search Term</th>
                  <th className="text-right text-white/40 text-xs font-medium py-2 pr-4">Count</th>
                  <th className="text-right text-white/40 text-xs font-medium py-2">Unique Users</th>
                </tr>
              </thead>
              <tbody>
                {data.topSearches.slice(0, 20).map((item, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="text-white/30 text-xs py-2 pr-4">{i + 1}</td>
                    <td className="text-white/80 text-xs py-2 pr-4 max-w-[200px] truncate" title={item.term}>
                      {item.term}
                    </td>
                    <td className="text-white text-xs py-2 pr-4 text-right font-medium">{item.count}</td>
                    <td className="text-white/60 text-xs py-2 text-right">{item.unique_users || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-white/40 text-sm">No search terms recorded in this period</p>
        )}
      </div>

      {/* Search Terms Bar Chart */}
      {data.topSearches && data.topSearches.length > 0 && (
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h4 className="text-white/60 text-sm font-medium mb-3">Search Term Distribution</h4>
          <SimpleBarChart
            data={data.topSearches.slice(0, 10).map(s => ({ term: s.term, count: s.count }))}
            labelKey="term"
            valueKey="count"
            color="#3B82F6"
            maxItems={10}
          />
        </div>
      )}

      {/* Info Note */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 flex items-start gap-2">
        <Icons.Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-blue-300/70 text-xs">
          Zero-result tracking requires client-side enhancement. Currently only search actions logged to <code className="bg-white/10 px-1 rounded">app_logs</code> are tracked.
        </p>
      </div>
    </div>
  );
};

export default SearchAnalyticsPanel;
