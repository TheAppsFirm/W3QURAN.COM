/**
 * Feature Usage Panel — Shows which features are most/least used
 * Fetches from /api/admin/feature-usage endpoint, merges app_logs + analytics_events data.
 */
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Icons } from '../common/Icons';
import { StatCard, SimpleBarChart, PeriodSelector, AdminLoadingSpinner, EmptyState } from './shared';

const FeatureUsagePanel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [period, setPeriod] = useState('30d');
  const [sortBy, setSortBy] = useState('total_uses'); // total_uses | unique_users | adoption

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/feature-usage?period=${period}`, { credentials: 'include' });
      if (!res.ok) throw new Error('Failed to fetch feature usage data');
      const json = await res.json();
      setData(json);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => { fetchData(); }, [fetchData]);

  // Merge featureLogs and featureEvents, deduplicate by feature name
  const mergedFeatures = useMemo(() => {
    if (!data) return [];

    const featureMap = new Map();

    // Add from featureLogs (app_logs table)
    (data.featureLogs || []).forEach(item => {
      const name = normalizeFeatureName(item.feature);
      if (!name) return;
      const existing = featureMap.get(name) || { feature: name, total_uses: 0, unique_users: 0, last_used: null };
      existing.total_uses += item.total_uses || 0;
      existing.unique_users += item.unique_users || 0;
      if (!existing.last_used || (item.last_used && item.last_used > existing.last_used)) {
        existing.last_used = item.last_used;
      }
      featureMap.set(name, existing);
    });

    // Add from featureEvents (analytics_events table)
    (data.featureEvents || []).forEach(item => {
      const name = normalizeFeatureName(item.feature);
      if (!name) return;
      const existing = featureMap.get(name) || { feature: name, total_uses: 0, unique_users: 0, last_used: null };
      existing.total_uses += item.total_uses || 0;
      // For unique_users we take the max (not sum) since the same users may appear in both tables
      existing.unique_users = Math.max(existing.unique_users, item.unique_users || 0);
      if (!existing.last_used || (item.last_used && item.last_used > existing.last_used)) {
        existing.last_used = item.last_used;
      }
      featureMap.set(name, existing);
    });

    const totalUsers = data.totalUsers || 1;
    const result = Array.from(featureMap.values()).map(f => ({
      ...f,
      adoption: totalUsers > 0 ? Math.round((f.unique_users / totalUsers) * 1000) / 10 : 0,
    }));

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'adoption') return b.adoption - a.adoption;
      if (sortBy === 'unique_users') return b.unique_users - a.unique_users;
      return b.total_uses - a.total_uses;
    });

    return result;
  }, [data, sortBy]);

  // Summary stats
  const stats = useMemo(() => {
    if (!mergedFeatures.length) return { totalUses: 0, uniqueUsers: 0, topFeature: 'N/A', totalFeatures: 0 };

    const totalUses = mergedFeatures.reduce((sum, f) => sum + f.total_uses, 0);
    const uniqueUsers = data?.totalUsers || 0;
    const topFeature = mergedFeatures[0]?.feature || 'N/A';
    const totalFeatures = mergedFeatures.length;

    return { totalUses, uniqueUsers, topFeature, totalFeatures };
  }, [mergedFeatures, data]);

  if (loading) return <AdminLoadingSpinner />;

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-white text-lg font-bold">Feature Usage</h2>
          <p className="text-white/40 text-sm mt-1">See which features users actually use — helps prioritize what to improve and what to skip.</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
          <Icons.AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
          <p className="text-red-400 font-medium">Failed to load feature usage data</p>
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
          <h2 className="text-white text-lg font-bold">Feature Usage</h2>
          <p className="text-white/40 text-sm mt-1">See which features users actually use — helps prioritize what to improve and what to skip.</p>
        </div>
        <EmptyState icon={Icons.BarChart} title="No Feature Data" message="No feature usage data found for this time range." />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-white text-lg font-bold">Feature Usage</h2>
          <p className="text-white/40 text-sm mt-1">See which features users actually use — word-by-word, tajweed, kids mode, memorization, verse art, and more. Helps prioritize what to improve and what to skip.</p>
        </div>
        <PeriodSelector value={period} onChange={setPeriod} />
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard
          title="Total Uses"
          value={stats.totalUses.toLocaleString()}
          subtitle={`${period} period`}
          icon={Icons.Activity}
          color="#A855F7"
        />
        <StatCard
          title="Active Users"
          value={stats.uniqueUsers.toLocaleString()}
          subtitle="Unique users in period"
          icon={Icons.Users}
          color="#3B82F6"
        />
        <StatCard
          title="Most Popular"
          value={formatFeatureLabel(stats.topFeature)}
          subtitle={mergedFeatures[0] ? `${mergedFeatures[0].total_uses} uses` : ''}
          icon={Icons.Star}
          color="#F59E0B"
        />
        <StatCard
          title="Features Tracked"
          value={stats.totalFeatures}
          subtitle="Unique features"
          icon={Icons.Layers}
          color="#10B981"
        />
      </div>

      {/* Bar Chart — Top Features */}
      {mergedFeatures.length > 0 && (
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h4 className="text-white/60 text-sm font-medium mb-3">Top Features by Usage</h4>
          <SimpleBarChart
            data={mergedFeatures.slice(0, 12).map(f => ({
              feature: formatFeatureLabel(f.feature),
              count: f.total_uses,
            }))}
            labelKey="feature"
            valueKey="count"
            color="#A855F7"
            maxItems={12}
          />
        </div>
      )}

      {/* Detailed Table */}
      {mergedFeatures.length > 0 && (
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white/60 text-sm font-medium">Feature Breakdown</h4>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/10 border border-white/20 text-white text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="total_uses" className="bg-gray-900">Sort by Total Uses</option>
              <option value="unique_users" className="bg-gray-900">Sort by Unique Users</option>
              <option value="adoption" className="bg-gray-900">Sort by Adoption %</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/40 text-xs font-medium py-2 pr-4">Feature</th>
                  <th className="text-right text-white/40 text-xs font-medium py-2 px-3">Total Uses</th>
                  <th className="text-right text-white/40 text-xs font-medium py-2 px-3">Unique Users</th>
                  <th className="text-right text-white/40 text-xs font-medium py-2 px-3">Adoption %</th>
                  <th className="text-right text-white/40 text-xs font-medium py-2 pl-3 hidden sm:table-cell">Last Used</th>
                </tr>
              </thead>
              <tbody>
                {mergedFeatures.map((f, i) => (
                  <tr key={f.feature} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="py-2.5 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="text-white/30 text-xs w-5 text-right">{i + 1}</span>
                        <span className="text-white/80 text-xs font-medium">{formatFeatureLabel(f.feature)}</span>
                      </div>
                    </td>
                    <td className="text-right py-2.5 px-3">
                      <span className="text-white font-medium text-xs">{f.total_uses.toLocaleString()}</span>
                    </td>
                    <td className="text-right py-2.5 px-3">
                      <span className="text-white/70 text-xs">{f.unique_users.toLocaleString()}</span>
                    </td>
                    <td className="text-right py-2.5 px-3">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden hidden md:block">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${Math.min(f.adoption, 100)}%`,
                              background: f.adoption >= 50 ? '#10B981' : f.adoption >= 20 ? '#F59E0B' : '#EF4444',
                            }}
                          />
                        </div>
                        <span className={`text-xs font-medium ${
                          f.adoption >= 50 ? 'text-green-400' : f.adoption >= 20 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {f.adoption}%
                        </span>
                      </div>
                    </td>
                    <td className="text-right py-2.5 pl-3 hidden sm:table-cell">
                      <span className="text-white/40 text-[10px]">
                        {f.last_used ? formatRelativeTime(f.last_used) : '—'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {mergedFeatures.length === 0 && (
            <p className="text-white/40 text-sm text-center py-6">No feature usage data for this period</p>
          )}
        </div>
      )}

      {/* Empty state when no data at all */}
      {mergedFeatures.length === 0 && (
        <EmptyState
          icon={Icons.BarChart}
          title="No Feature Usage Data"
          message="Feature usage events will appear here once users interact with app features."
        />
      )}
    </div>
  );
};

/**
 * Normalize feature name for deduplication (lowercase, trim whitespace)
 */
function normalizeFeatureName(name) {
  if (!name) return null;
  return name.trim().toLowerCase();
}

/**
 * Format a feature key/slug into a readable label
 * e.g. "audio_play" => "Audio Play", "word-by-word" => "Word By Word"
 */
function formatFeatureLabel(name) {
  if (!name) return 'Unknown';
  return name
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

/**
 * Format a date string into relative time (e.g. "2 hours ago")
 */
function formatRelativeTime(dateStr) {
  try {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  } catch {
    return dateStr;
  }
}

export default FeatureUsagePanel;
