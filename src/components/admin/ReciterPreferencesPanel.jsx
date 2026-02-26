/**
 * Reciter & Language Preferences Panel
 * Shows reciter usage distribution, translation/language preferences, and audio play stats.
 */
import { useState, useEffect, useCallback } from 'react';
import { Icons } from '../common/Icons';
import { StatCard, SimpleBarChart, PeriodSelector, AdminLoadingSpinner, EmptyState } from './shared';

const ReciterPreferencesPanel = () => {
  const [period, setPeriod] = useState('30d');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/preferences?period=${period}`, {
        credentials: 'include',
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error('[ReciterPreferencesPanel] Fetch failed:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <AdminLoadingSpinner />;

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-center">
        <Icons.AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
        <p className="text-red-400 font-medium">Failed to load preferences data</p>
        <p className="text-white/40 text-sm mt-1">{error}</p>
        <button
          onClick={fetchData}
          className="mt-3 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-sm transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data) {
    return (
      <EmptyState
        icon={Icons.Mic}
        title="No Preference Data"
        message="Reciter and language preference data will appear here once users interact with audio and translation settings."
      />
    );
  }

  const { reciters = [], translations = [], totalPlays = 0 } = data;

  const mostPopularReciter = reciters.length > 0 ? reciters[0].preference : 'N/A';
  const mostPopularLanguage = translations.length > 0 ? translations[0].preference : 'N/A';

  const hasAnyData = reciters.length > 0 || translations.length > 0 || totalPlays > 0;

  if (!hasAnyData) {
    return (
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-white text-lg font-bold">Reciter & Language Preferences</h2>
            <p className="text-white/40 text-sm mt-1">See which reciters and translation languages users prefer.</p>
          </div>
          <PeriodSelector value={period} onChange={setPeriod} />
        </div>
        <EmptyState
          icon={Icons.Mic}
          title="No Preference Data"
          message="No reciter or translation preference data found for this period."
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-white text-lg font-bold">Reciter & Language Preferences</h2>
          <p className="text-white/40 text-sm mt-1">See which reciters and translation languages users prefer — helps decide which audio/translation sources to prioritize and expand.</p>
        </div>
        <PeriodSelector value={period} onChange={setPeriod} />
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <StatCard
          title="Most Popular Reciter"
          value={mostPopularReciter}
          subtitle={reciters.length > 0 ? `${reciters[0].count} selections` : undefined}
          icon={Icons.Mic}
          color="#A855F7"
        />
        <StatCard
          title="Most Popular Language"
          value={mostPopularLanguage}
          subtitle={translations.length > 0 ? `${translations[0].count} selections` : undefined}
          icon={Icons.Globe}
          color="#3B82F6"
        />
        <StatCard
          title="Total Audio Plays"
          value={totalPlays.toLocaleString()}
          subtitle={`In the last ${period}`}
          icon={Icons.Play}
          color="#10B981"
        />
      </div>

      {/* Two-Column Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Reciter Distribution */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <h4 className="text-white/80 text-sm font-medium mb-3 flex items-center gap-2">
            <Icons.Mic className="w-4 h-4 text-purple-400" />
            Reciter Distribution
          </h4>
          {reciters.length > 0 ? (
            <SimpleBarChart
              data={reciters}
              labelKey="preference"
              valueKey="count"
              color="#A855F7"
              maxItems={10}
            />
          ) : (
            <p className="text-white/40 text-sm">No reciter data available for this period.</p>
          )}
        </div>

        {/* Translation/Language Distribution */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <h4 className="text-white/80 text-sm font-medium mb-3 flex items-center gap-2">
            <Icons.Globe className="w-4 h-4 text-blue-400" />
            Translation / Language Distribution
          </h4>
          {translations.length > 0 ? (
            <SimpleBarChart
              data={translations}
              labelKey="preference"
              valueKey="count"
              color="#3B82F6"
              maxItems={10}
            />
          ) : (
            <p className="text-white/40 text-sm">No translation data available for this period.</p>
          )}
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-start gap-3">
        <Icons.Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <p className="text-white/50 text-sm leading-relaxed">
          Data depends on client-side tracking. If data appears sparse, tracking of reciter/translation
          changes may need enhancement. Audio play counts reflect logged playback events from the app.
        </p>
      </div>
    </div>
  );
};

export default ReciterPreferencesPanel;
