/**
 * API Health Monitor Panel — Client-side health checks for external APIs
 * Pings each API endpoint and reports status, latency, and overall health.
 */
import { useState, useCallback, useEffect } from 'react';
import { Icons } from '../common/Icons';
import { StatCard } from './shared';

// API endpoints to monitor
const API_ENDPOINTS = [
  {
    id: 'alquran-cloud',
    name: 'Al-Quran Cloud API',
    description: 'Main Quran text, translations, and audio references',
    url: 'https://api.alquran.cloud/v1/surah/1',
    expectedCors: true,
  },
  {
    id: 'quran-com',
    name: 'Quran.com API v4',
    description: 'Word-by-word data, morphology, and chapter metadata',
    url: 'https://api.quran.com/api/v4/chapters',
    expectedCors: true,
  },
  {
    id: 'audio-cdn',
    name: 'Audio CDN (Islamic Network)',
    description: 'Reciter audio files — Al-Afasy, Abdul Basit, etc.',
    url: 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3',
    expectedCors: false,
  },
  {
    id: 'everyayah-cdn',
    name: 'EveryAyah CDN',
    description: 'Translation audio — Urdu, English narration tracks',
    url: 'https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps/001001.mp3',
    expectedCors: false,
  },
  {
    id: 'quran-tafseer',
    name: 'Quran.com Tafseer API',
    description: 'Tafseer data — Ibn Kathir, Jalalayn, and others',
    url: 'https://api.quran.com/api/v4/tafsirs/169/by_ayah/1:1',
    expectedCors: true,
  },
];

const SLOW_THRESHOLD_MS = 3000;
const TIMEOUT_MS = 10000;

/**
 * Ping a single API endpoint. Tries CORS mode first, falls back to no-cors.
 * Returns { status, latency, error, noCors }
 */
async function pingEndpoint(endpoint) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const start = performance.now();

  try {
    // Attempt normal CORS fetch first
    const res = await fetch(endpoint.url, {
      method: 'GET',
      mode: 'cors',
      signal: controller.signal,
      cache: 'no-store',
    });
    clearTimeout(timer);
    const latency = Math.round(performance.now() - start);
    const status = latency > SLOW_THRESHOLD_MS ? 'slow' : 'healthy';
    return { status, latency, httpStatus: res.status, noCors: false, error: null };
  } catch (corsError) {
    // If it was an abort (timeout), mark as down
    if (controller.signal.aborted) {
      clearTimeout(timer);
      return { status: 'down', latency: TIMEOUT_MS, error: 'Request timed out', noCors: false };
    }

    // CORS error — retry with no-cors (we can't read the response, but we know the server responded)
    try {
      const controller2 = new AbortController();
      const timer2 = setTimeout(() => controller2.abort(), TIMEOUT_MS);
      const start2 = performance.now();

      await fetch(endpoint.url, {
        method: 'GET',
        mode: 'no-cors',
        signal: controller2.signal,
        cache: 'no-store',
      });
      clearTimeout(timer2);
      const latency = Math.round(performance.now() - start2);
      const status = latency > SLOW_THRESHOLD_MS ? 'slow' : 'healthy';
      return { status, latency, httpStatus: null, noCors: true, error: null };
    } catch (noCorsError) {
      clearTimeout(timer);
      if (noCorsError.name === 'AbortError') {
        return { status: 'down', latency: TIMEOUT_MS, error: 'Request timed out', noCors: false };
      }
      return { status: 'down', latency: null, error: noCorsError.message || 'Network error', noCors: false };
    }
  }
}

const StatusBadge = ({ status }) => {
  const config = {
    healthy: { label: 'Healthy', color: '#10B981', bg: 'bg-emerald-500/20', icon: Icons.Check },
    slow: { label: 'Slow', color: '#F59E0B', bg: 'bg-yellow-500/20', icon: Icons.Clock },
    down: { label: 'Down', color: '#EF4444', bg: 'bg-red-500/20', icon: Icons.X },
    checking: { label: 'Checking...', color: '#8B5CF6', bg: 'bg-purple-500/20', icon: Icons.Activity },
  };
  const c = config[status] || config.checking;
  const IconComp = c.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${c.bg}`} style={{ color: c.color }}>
      {status === 'checking' ? (
        <span className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <IconComp className="w-3 h-3" />
      )}
      {c.label}
    </span>
  );
};

const ApiHealthPanel = () => {
  // { [endpointId]: { status, latency, error, noCors, httpStatus } }
  const [results, setResults] = useState({});
  const [checking, setChecking] = useState(false);
  const [lastChecked, setLastChecked] = useState(null);

  const checkEndpoint = useCallback(async (endpoint) => {
    // Mark as checking
    setResults(prev => ({
      ...prev,
      [endpoint.id]: { status: 'checking', latency: null, error: null, noCors: false },
    }));

    const result = await pingEndpoint(endpoint);

    setResults(prev => ({
      ...prev,
      [endpoint.id]: result,
    }));
  }, []);

  const checkAll = useCallback(async () => {
    setChecking(true);

    // Mark all as checking first
    const initialResults = {};
    API_ENDPOINTS.forEach(ep => {
      initialResults[ep.id] = { status: 'checking', latency: null, error: null, noCors: false };
    });
    setResults(initialResults);

    // Run all checks in parallel
    await Promise.allSettled(API_ENDPOINTS.map(ep => checkEndpoint(ep)));

    setLastChecked(new Date());
    setChecking(false);
  }, [checkEndpoint]);

  // Check all on mount
  useEffect(() => {
    checkAll();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Derived stats
  const endpointResults = API_ENDPOINTS.map(ep => ({
    ...ep,
    result: results[ep.id] || { status: 'checking' },
  }));

  const finishedResults = endpointResults.filter(ep => ep.result.status !== 'checking');
  const healthyCount = finishedResults.filter(ep => ep.result.status === 'healthy').length;
  const slowCount = finishedResults.filter(ep => ep.result.status === 'slow').length;
  const downCount = finishedResults.filter(ep => ep.result.status === 'down').length;
  const latencies = finishedResults.filter(ep => ep.result.latency != null).map(ep => ep.result.latency);
  const avgLatency = latencies.length > 0 ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length) : 0;

  const allChecked = finishedResults.length === API_ENDPOINTS.length;
  const allHealthy = allChecked && downCount === 0 && slowCount === 0;
  const hasDegraded = downCount > 0 || slowCount > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-white text-lg font-bold">API Health Monitor</h2>
          <p className="text-white/40 text-sm mt-1">
            Real-time availability checks for the external APIs that w3Quran depends on.
            Each endpoint is pinged from the browser to measure latency and reachability.
          </p>
        </div>
        <button
          onClick={checkAll}
          disabled={checking}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
        >
          <Icons.RefreshCw className={`w-4 h-4 ${checking ? 'animate-spin' : ''}`} />
          Check All
        </button>
      </div>

      {/* Last checked timestamp */}
      {lastChecked && (
        <p className="text-white/30 text-xs -mt-3">
          Last checked: {lastChecked.toLocaleTimeString()} ({lastChecked.toLocaleDateString()})
        </p>
      )}

      {/* Overall Status Banner */}
      {allChecked && (
        <div className={`rounded-xl p-4 flex items-center gap-3 border ${
          allHealthy
            ? 'bg-emerald-500/10 border-emerald-500/30'
            : 'bg-yellow-500/10 border-yellow-500/30'
        }`}>
          {allHealthy ? (
            <Icons.Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          ) : (
            <Icons.AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
          )}
          <div>
            <p className={`font-medium text-sm ${allHealthy ? 'text-emerald-300' : 'text-yellow-300'}`}>
              {allHealthy
                ? 'All Systems Operational'
                : `${downCount + slowCount} service${downCount + slowCount !== 1 ? 's' : ''} degraded`
              }
            </p>
            {hasDegraded && (
              <p className="text-yellow-300/60 text-xs mt-0.5">
                {downCount > 0 && `${downCount} down`}
                {downCount > 0 && slowCount > 0 && ', '}
                {slowCount > 0 && `${slowCount} slow`}
                {' — '}some features may be affected.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard
          title="Total APIs"
          value={API_ENDPOINTS.length}
          subtitle="Monitored endpoints"
          icon={Icons.Globe}
          color="#8B5CF6"
        />
        <StatCard
          title="Healthy"
          value={healthyCount}
          subtitle={allChecked ? `of ${API_ENDPOINTS.length} endpoints` : 'Checking...'}
          icon={Icons.Check}
          color="#10B981"
        />
        <StatCard
          title="Degraded"
          value={downCount + slowCount}
          subtitle={downCount > 0 ? `${downCount} down, ${slowCount} slow` : slowCount > 0 ? `${slowCount} slow` : 'None'}
          icon={Icons.AlertCircle}
          color={hasDegraded ? '#EF4444' : '#10B981'}
        />
        <StatCard
          title="Avg Latency"
          value={latencies.length > 0 ? `${avgLatency}ms` : '--'}
          subtitle={latencies.length > 0 ? `From ${latencies.length} responses` : 'Waiting...'}
          icon={Icons.Zap}
          color={avgLatency > SLOW_THRESHOLD_MS ? '#F59E0B' : '#3B82F6'}
        />
      </div>

      {/* Endpoint Cards */}
      <div className="space-y-3">
        {endpointResults.map(ep => {
          const r = ep.result;
          const borderColor =
            r.status === 'healthy' ? '#10B981' :
            r.status === 'slow' ? '#F59E0B' :
            r.status === 'down' ? '#EF4444' :
            '#8B5CF680';

          return (
            <div
              key={ep.id}
              className="bg-white/5 rounded-xl p-4 border border-white/10 transition-all hover:bg-white/[0.07]"
              style={{ borderLeftWidth: '4px', borderLeftColor: borderColor }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-white font-medium text-sm">{ep.name}</h4>
                    <StatusBadge status={r.status} />
                  </div>
                  <p className="text-white/40 text-xs mt-1">{ep.description}</p>
                  <p className="text-white/25 text-[10px] mt-1 font-mono truncate">{ep.url}</p>
                </div>

                <div className="text-right flex-shrink-0">
                  {r.latency != null ? (
                    <div>
                      <p className={`text-lg font-bold ${
                        r.status === 'healthy' ? 'text-emerald-400' :
                        r.status === 'slow' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {r.latency}
                        <span className="text-xs font-normal ml-0.5">ms</span>
                      </p>
                    </div>
                  ) : r.status === 'checking' ? (
                    <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <p className="text-red-400 text-sm font-medium">--</p>
                  )}
                </div>
              </div>

              {/* Extra info row */}
              <div className="flex items-center gap-4 mt-2 flex-wrap">
                {r.httpStatus && (
                  <span className="text-white/30 text-[10px]">
                    HTTP {r.httpStatus}
                  </span>
                )}
                {r.noCors && (
                  <span className="text-white/30 text-[10px] flex items-center gap-1">
                    <Icons.Shield className="w-3 h-3" />
                    Reachable (CORS opaque — response not readable from browser)
                  </span>
                )}
                {r.error && (
                  <span className="text-red-400/70 text-[10px]">
                    {r.error}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
        <div className="flex items-start gap-3">
          <Icons.AlertCircle className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />
          <div className="text-white/30 text-xs space-y-1">
            <p>
              <strong className="text-white/50">Note:</strong> Latency is measured from the browser and includes
              network round-trip time. Actual server response times may be lower.
            </p>
            <p>
              Some CDN endpoints use CORS restrictions. These are tested in opaque mode --
              we can verify the server is reachable but cannot read the response body or HTTP status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiHealthPanel;
