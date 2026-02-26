/**
 * Engagement Panel — User engagement analytics with DAU/WAU/MAU,
 * retention, top surahs, DAU trend, and most active users leaderboard.
 */
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Icons } from '../common/Icons';
import { SURAHS } from '../../data/surahs';
import { StatCard, SimpleBarChart, TrendChart, PeriodSelector, AdminLoadingSpinner, EmptyState } from './shared';

const EngagementPanel = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [period, setPeriod] = useState('30d');

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/analytics?period=${period}&metrics=users,engagement`, {
        credentials: 'include'
      });
      if (!res.ok) throw new Error('Failed to fetch engagement data');
      const json = await res.json();
      setData(json);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => { fetchData(); }, [fetchData]);

  // Resolve surah names from SURAHS data
  const surahChartData = useMemo(() => {
    if (!data?.engagement?.topSurahs) return [];
    return data.engagement.topSurahs.map(s => ({
      surah_id: s.surah_id,
      reads: s.reads || 0,
      unique_readers: s.unique_readers || 0
    }));
  }, [data]);

  const formatSurahLabel = useCallback((id) => {
    const s = SURAHS.find(s => s.id === parseInt(id));
    return s ? `${s.id}. ${s.name}` : `Surah ${id}`;
  }, []);

  if (loading) return <AdminLoadingSpinner />;

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-white text-lg font-bold">User Engagement</h2>
          <p className="text-white/40 text-sm mt-1">Track daily/weekly/monthly active users, retention rates, most-read surahs, and your most active users.</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
          <Icons.AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
          <p className="text-red-400 font-medium">Failed to load engagement data</p>
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
          <h2 className="text-white text-lg font-bold">User Engagement</h2>
          <p className="text-white/40 text-sm mt-1">Track daily/weekly/monthly active users, retention rates, most-read surahs, and your most active users.</p>
        </div>
        <EmptyState icon={Icons.Activity} title="No Engagement Data" message="No engagement data available for this period." />
      </div>
    );
  }

  const users = data.users || {};
  const engagement = data.engagement || {};
  const retention = users.retention || {};
  const dauTrend = engagement.dauTrend || [];
  const mostActiveUsers = engagement.mostActiveUsers || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-white text-lg font-bold">User Engagement</h2>
          <p className="text-white/40 text-sm mt-1">Track daily/weekly/monthly active users, retention rates, most-read surahs, and your most active users. Understand how people engage with the app over time.</p>
        </div>
        <PeriodSelector value={period} onChange={setPeriod} />
      </div>

      {/* Active Users Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard
          title="DAU"
          value={Array.isArray(users.dau) ? (users.dau.length > 0 ? users.dau[users.dau.length - 1]?.count || 0 : 0) : (users.dau || 0)}
          subtitle="Daily active users"
          icon={Icons.Users}
          color="#3B82F6"
        />
        <StatCard
          title="WAU"
          value={users.wau || 0}
          subtitle="Weekly active users"
          icon={Icons.Activity}
          color="#8B5CF6"
        />
        <StatCard
          title="MAU"
          value={users.mau || 0}
          subtitle="Monthly active users"
          icon={Icons.TrendingUp}
          color="#10B981"
        />
        <StatCard
          title="New Users"
          value={users.newUsers || 0}
          subtitle="In selected period"
          icon={Icons.Plus}
          color="#F59E0B"
        />
      </div>

      {/* Retention Cards */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <p className="text-white/50 text-xs mb-1">Day 1 Retention</p>
          <p className="text-2xl font-bold text-white">{retention.day1 || 0}%</p>
          <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${retention.day1 || 0}%`,
                background: 'linear-gradient(90deg, #3B82F6, #60A5FA)'
              }}
            />
          </div>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <p className="text-white/50 text-xs mb-1">Day 7 Retention</p>
          <p className="text-2xl font-bold text-white">{retention.day7 || 0}%</p>
          <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${retention.day7 || 0}%`,
                background: 'linear-gradient(90deg, #8B5CF6, #A78BFA)'
              }}
            />
          </div>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <p className="text-white/50 text-xs mb-1">Day 30 Retention</p>
          <p className="text-2xl font-bold text-white">{retention.day30 || 0}%</p>
          <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${retention.day30 || 0}%`,
                background: 'linear-gradient(90deg, #10B981, #34D399)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Top Surahs + DAU Trend side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top 20 Most-Read Surahs */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h4 className="text-white/60 text-sm font-medium mb-3">Top Surahs by Reads</h4>
          {surahChartData.length > 0 ? (
            <SimpleBarChart
              data={surahChartData}
              labelKey="surah_id"
              valueKey="reads"
              color="#A855F7"
              maxItems={20}
              formatLabel={formatSurahLabel}
            />
          ) : (
            <p className="text-white/40 text-sm">No surah read data available</p>
          )}
        </div>

        {/* DAU Trend */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <h4 className="text-white/60 text-sm font-medium mb-3">Daily Active Users Trend</h4>
          {dauTrend.length > 0 ? (
            <>
              <TrendChart
                data={dauTrend}
                valueKey="active_users"
                color="#3B82F6"
                height="h-32"
                formatTooltip={(item) => `${item.date}: ${item.active_users} active users`}
              />
              <div className="flex justify-between mt-1">
                <span className="text-[9px] text-white/30">{dauTrend[0]?.date || ''}</span>
                <span className="text-[9px] text-white/30">{dauTrend[dauTrend.length - 1]?.date || ''}</span>
              </div>
            </>
          ) : (
            <p className="text-white/40 text-sm">No DAU trend data available</p>
          )}
        </div>
      </div>

      {/* Most Active Users Leaderboard */}
      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
        <h4 className="text-white/60 text-sm font-medium mb-3">Most Active Users</h4>
        {mostActiveUsers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/40 text-xs font-medium py-2 px-2 w-8">#</th>
                  <th className="text-left text-white/40 text-xs font-medium py-2 px-2">Name</th>
                  <th className="text-left text-white/40 text-xs font-medium py-2 px-2">Email</th>
                  <th className="text-right text-white/40 text-xs font-medium py-2 px-2">Sessions</th>
                  <th className="text-right text-white/40 text-xs font-medium py-2 px-2">Events</th>
                </tr>
              </thead>
              <tbody>
                {mostActiveUsers.map((user, i) => (
                  <tr key={user.user_id || i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-2 px-2 text-white/30 text-xs">{i + 1}</td>
                    <td className="py-2 px-2">
                      <div className="flex items-center gap-2">
                        {i < 3 && (
                          <Icons.Trophy
                            className="w-3.5 h-3.5 flex-shrink-0"
                            style={{ color: i === 0 ? '#F59E0B' : i === 1 ? '#94A3B8' : '#CD7F32' }}
                          />
                        )}
                        <span className="text-white/80 text-xs truncate max-w-[160px]">{user.name || 'Anonymous'}</span>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-white/50 text-xs truncate max-w-[200px]">{user.email || '-'}</td>
                    <td className="py-2 px-2 text-right text-white font-medium text-xs">{user.sessions}</td>
                    <td className="py-2 px-2 text-right text-white/60 text-xs">{user.events}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-white/40 text-sm">No user activity data available</p>
        )}
      </div>
    </div>
  );
};

export default EngagementPanel;
