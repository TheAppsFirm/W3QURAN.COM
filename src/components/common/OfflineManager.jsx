/**
 * Offline Manager Component - Bubble Style
 * Single Responsibility: Manage offline downloads in bubble modal
 */

import { memo, useState, useEffect, useCallback } from 'react';
import BubbleOverlay from './BubbleOverlay';
import { Icons } from './Icons';
import { useTranslation } from '../../contexts/LocaleContext';
import {
  isOfflineModeAvailable,
  isOnline,
  getDownloadedSurahs,
  getDownloadedAudio,
  getTotalStorageUsed,
  downloadSurahForOffline,
  downloadSurahsForOffline,
  deleteCachedSurah,
  deleteAudioCacheForSurah,
  clearAllCache,
  isSurahCached,
  migrateAudioMetadata,
  cacheAudioForSurah,
} from '../../data/offlineStorage';
import { SURAHS } from '../../data';
import { TRANSLATIONS } from '../../hooks/useTranslationsAPI';
import { RECITERS } from '../../hooks/useAudioPlayer';

const formatBytes = (bytes) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/** Get friendly name for a translation ID */
const getTranslationLabel = (id) => {
  if (id === 'quran-uthmani') return 'Arabic';
  const t = TRANSLATIONS[id];
  return t ? t.language : id;
};

/** Get friendly name for a reciter ID */
const getReciterLabel = (id) => {
  const r = RECITERS[id];
  return r ? r.name : id;
};

/**
 * Download Progress
 */
const DownloadProgress = memo(function DownloadProgress({ progress, current, total, phase }) {
  const { t } = useTranslation();
  return (
    <div className="p-3 rounded-xl mb-3" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="flex justify-between mb-2">
        <span className="text-xs text-white/70">
          {phase === 'audio' ? t('offline.downloadingAudio', 'Downloading audio...') : t('offline.downloadingText', 'Downloading text...')}
        </span>
        <span className="text-xs font-semibold text-blue-400">{progress}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
        <div className="h-full rounded-full transition-all" style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
        }} />
      </div>
      {current > 0 && total > 0 && <div className="text-[10px] text-white/40 mt-1">{current} {t('offline.of', 'of')} {total} {t('offline.surahs', 'surahs')}</div>}
    </div>
  );
});

/**
 * Surah Download Item
 */
const SurahItem = memo(function SurahItem({ surah, isCached, onDownload, isDownloading }) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between p-2 rounded-xl mb-1" style={{
      background: isCached ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.03)',
      border: isCached ? '1px solid rgba(34,197,94,0.2)' : '1px solid transparent',
    }}>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold" style={{
          background: isCached ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'rgba(255,255,255,0.1)',
        }}>
          {surah.id}
        </div>
        <div>
          <span className={`text-xs ${isCached ? 'text-green-400 font-medium' : 'text-white/70'}`}>{surah.name}</span>
          <div className="text-[10px] text-white/30">{surah.ayahs} {t('offline.ayahs', 'ayahs')}</div>
        </div>
      </div>
      {isCached ? (
        <Icons.Check className="w-4 h-4 text-green-400" />
      ) : (
        <button onClick={() => onDownload(surah.id)} disabled={isDownloading}
          className="px-2 py-1 rounded-lg text-[10px] transition-all" style={{
            background: isDownloading ? 'rgba(255,255,255,0.05)' : 'rgba(96,165,250,0.2)',
            color: isDownloading ? 'rgba(255,255,255,0.3)' : '#60a5fa',
          }}>
          {isDownloading ? '...' : t('offline.get', 'Get')}
        </button>
      )}
    </div>
  );
});

/**
 * Downloaded Item - grouped by surah (combined Arabic + translation + audio)
 */
const DownloadedItem = memo(function DownloadedItem({ surahId, entries, audioInfo, onDelete, onRedownload, isDownloading }) {
  const { t } = useTranslation();
  const surah = SURAHS.find(s => s.id === surahId);
  const textSize = entries.reduce((sum, e) => sum + (e.size || 0), 0);
  const audioSize = audioInfo?.size || 0;
  const totalSize = textSize + audioSize;
  const translationIds = entries.map(e => e.translationId).filter(id => id !== 'quran-uthmani');
  const hasArabic = entries.some(e => e.translationId === 'quran-uthmani');

  // Build description: "Arabic + Urdu + Audio"
  const parts = [];
  if (hasArabic) parts.push(t('offline.arabic', 'Arabic'));
  translationIds.forEach(id => parts.push(getTranslationLabel(id)));
  if (audioInfo) parts.push(t('offline.audio', 'Audio'));

  const missingAudio = !audioInfo;

  return (
    <div className="flex items-center justify-between p-2 rounded-xl mb-1" style={{ background: 'rgba(255,255,255,0.05)' }}>
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold"
          style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
          {surahId}
        </div>
        <div className="min-w-0">
          <div className="text-xs font-medium text-white">{surah?.name || `${t('offline.surah', 'Surah')} ${surahId}`}</div>
          <div className="text-[10px] text-white/40">{parts.join(' + ')} · {formatBytes(totalSize)}</div>
          {missingAudio && (
            <div className="text-[9px] text-amber-400/70 mt-0.5">{t('offline.noAudioTapUpdate', 'No audio — tap update to download')}</div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-1 flex-shrink-0">
        {missingAudio && (
          <button onClick={() => onRedownload(surahId)} disabled={isDownloading}
            className="px-1.5 py-1 rounded-lg text-[9px] text-blue-400 hover:bg-blue-500/20 transition-all disabled:opacity-30"
            title={t('offline.downloadAudio', 'Download audio')}>
            <Icons.Download className="w-3 h-3" />
          </button>
        )}
        <button onClick={() => onDelete(surahId)}
          className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/20 transition-all">
          <Icons.X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
});

/**
 * Main Offline Manager - Bubble Style
 */
const OfflineManager = memo(function OfflineManager({ onClose, translationId }) {
  const { t, isRTL } = useTranslation();
  // Use the user's selected reader translation/reciter, fallback to defaults
  if (!translationId) {
    try { translationId = localStorage.getItem('reader_translation')?.replace(/^"|"$/g, '') || 'en.sahih'; } catch { translationId = 'en.sahih'; }
  }
  let reciterId = 'ar.alafasy';
  try { reciterId = localStorage.getItem('reader_reciter')?.replace(/^"|"$/g, '') || 'ar.alafasy'; } catch {}
  const downloadOpts = { includeAudio: true, reciterId };
  const [activeTab, setActiveTab] = useState('status');
  const [networkOnline, setNetworkOnline] = useState(isOnline());
  const [downloadedSurahs, setDownloadedSurahs] = useState([]);
  const [downloadedAudioMap, setDownloadedAudioMap] = useState({}); // { surahId: audioInfo }
  const [totalStorage, setTotalStorage] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState({ progress: 0, current: 0, total: 0, phase: 'text' });
  const [cachedStatus, setCachedStatus] = useState({});

  const loadAllData = useCallback(async () => {
    const downloaded = await getDownloadedSurahs();
    setDownloadedSurahs(downloaded);

    // Migrate: detect audio already in Cache API for surahs that have text but no audio metadata
    let audioList = await getDownloadedAudio();
    const audioSurahIds = new Set(audioList.map(a => a.surahId));
    const textSurahIds = [...new Set(downloaded.map(d => d.surahId))];
    const needsMigration = textSurahIds.filter(id => !audioSurahIds.has(id));
    if (needsMigration.length > 0) {
      await migrateAudioMetadata(needsMigration, reciterId);
      audioList = await getDownloadedAudio(); // Reload after migration
    }

    const audioMap = {};
    audioList.forEach(a => { audioMap[a.surahId] = a; });
    setDownloadedAudioMap(audioMap);
    // getTotalStorageUsed includes both text + audio metadata sizes
    const storage = await getTotalStorageUsed();
    setTotalStorage(storage);
    const status = {};
    for (const surah of SURAHS) {
      status[surah.id] = await isSurahCached(surah.id, translationId);
    }
    setCachedStatus(status);
  }, [translationId, reciterId]);

  useEffect(() => {
    loadAllData();
  }, [loadAllData]);

  useEffect(() => {
    const handleOnline = () => setNetworkOnline(true);
    const handleOffline = () => setNetworkOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleDownloadSurah = useCallback(async (surahId) => {
    if (!networkOnline) return;
    setIsDownloading(true);
    try {
      await downloadSurahForOffline(surahId, translationId, (progress) => {
        setDownloadProgress({ progress, current: 1, total: 1, phase: progress <= 50 ? 'text' : 'audio' });
      }, downloadOpts);
      setCachedStatus(prev => ({ ...prev, [surahId]: true }));
      await loadAllData();
    } catch {
      // Download failed - user will see the incomplete status
    } finally {
      setIsDownloading(false);
      setDownloadProgress({ progress: 0, current: 0, total: 0, phase: 'text' });
    }
  }, [networkOnline, translationId, loadAllData]);

  const handleDownloadAll = useCallback(async () => {
    if (!networkOnline) return;
    const uncachedSurahs = SURAHS.filter(s => !cachedStatus[s.id]).map(s => s.id);
    if (uncachedSurahs.length === 0) return;
    setIsDownloading(true);
    try {
      await downloadSurahsForOffline(uncachedSurahs, translationId, (progress, current, total) => {
        setDownloadProgress({ progress, current, total, phase: 'text' });
      }, downloadOpts);
      await loadAllData();
    } finally {
      setIsDownloading(false);
      setDownloadProgress({ progress: 0, current: 0, total: 0, phase: 'text' });
    }
  }, [networkOnline, cachedStatus, translationId, loadAllData]);

  // Delete all entries for a surah (Arabic + translation + audio cache)
  const handleDeleteSurah = useCallback(async (surahId) => {
    // Delete all IndexedDB text entries for this surah
    const entries = downloadedSurahs.filter(d => d.surahId === surahId);
    for (const entry of entries) {
      await deleteCachedSurah(entry.surahId, entry.translationId);
    }
    // Delete audio cache + metadata for this surah
    const audioInfo = downloadedAudioMap[surahId];
    if (audioInfo) {
      await deleteAudioCacheForSurah(surahId, audioInfo.reciterId);
    }
    setCachedStatus(prev => ({ ...prev, [surahId]: false }));
    await loadAllData();
  }, [downloadedSurahs, downloadedAudioMap, loadAllData]);

  // Re-download audio only for a surah that already has text
  const handleRedownloadAudio = useCallback(async (surahId) => {
    if (!networkOnline) return;
    setIsDownloading(true);
    try {
      await cacheAudioForSurah(surahId, reciterId, (done, total) => {
        setDownloadProgress({ progress: Math.round((done / total) * 100), current: 1, total: 1, phase: 'audio' });
      });
      await loadAllData();
    } catch {
      // Audio download failed
    } finally {
      setIsDownloading(false);
      setDownloadProgress({ progress: 0, current: 0, total: 0, phase: 'text' });
    }
  }, [networkOnline, reciterId, loadAllData]);

  const handleClearAll = useCallback(async () => {
    await clearAllCache();
    // Also clear audio offline cache
    if ('caches' in window) {
      try { await caches.delete('w3quran-audio-offline'); } catch {}
    }
    setDownloadedSurahs([]);
    setTotalStorage(0);
    const status = {};
    SURAHS.forEach(s => { status[s.id] = false; });
    setCachedStatus(status);
  }, []);

  const cachedCount = Object.values(cachedStatus).filter(Boolean).length;
  const tabs = [{ id: 'status', label: t('offline.tabStatus', 'Status') }, { id: 'download', label: t('offline.tabDownload', 'Download') }, { id: 'manage', label: t('offline.tabManage', 'Manage') }];

  // Group downloaded surahs by surahId for Manage tab
  const groupedDownloads = {};
  downloadedSurahs.forEach(item => {
    if (!groupedDownloads[item.surahId]) groupedDownloads[item.surahId] = [];
    groupedDownloads[item.surahId].push(item);
  });
  const groupedIds = Object.keys(groupedDownloads).map(Number).sort((a, b) => a - b);

  if (!isOfflineModeAvailable()) {
    return (
      <BubbleOverlay onClose={onClose} title={t('offline.title', 'Offline Mode')} icon={Icons.Download} gradient={['#ef4444', '#dc2626', '#b91c1c']} size="small">
        <div className="text-center py-8">
          <div className="text-4xl mb-3">:(</div>
          <div className="text-sm text-white/70">{t('offline.notSupported', 'Offline mode not supported')}</div>
        </div>
      </BubbleOverlay>
    );
  }

  return (
    <BubbleOverlay onClose={onClose} title={t('offline.title', 'Offline Mode')} subtitle={`${cachedCount}/114 ${t('offline.surahs', 'Surahs')}`} icon={Icons.Download} gradient={['#3b82f6', '#2563eb', '#1d4ed8']} size="medium">
      {/* Network Status */}
      <div className="flex items-center gap-2 p-2 rounded-xl mb-3" style={{
        background: networkOnline ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
      }}>
        <div className="w-2 h-2 rounded-full" style={{ background: networkOnline ? '#22c55e' : '#ef4444' }} />
        <span className={`text-xs ${networkOnline ? 'text-green-400' : 'text-red-400'}`}>
          {networkOnline ? t('offline.online', 'Online') : t('offline.offline', 'Offline')}
        </span>
      </div>

      {/* Download config info */}
      <div className="flex items-center gap-3 px-2 mb-3">
        <div className="flex items-center gap-1">
          <Icons.BookOpen className="w-3 h-3 text-white/30" />
          <span className="text-[10px] text-white/40">{getTranslationLabel(translationId)}</span>
        </div>
        <div className="flex items-center gap-1">
          <Icons.Volume2 className="w-3 h-3 text-white/30" />
          <span className="text-[10px] text-white/40">{getReciterLabel(reciterId)}</span>
        </div>
      </div>

      {/* Tab Pills */}
      <div className="flex gap-1 mb-3 p-1 rounded-2xl" style={{ background: 'rgba(0,0,0,0.2)' }}>
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-1.5 rounded-xl text-[11px] font-medium transition-all ${
              activeTab === tab.id ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white/70'
            }`}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Download Progress */}
      {isDownloading && <DownloadProgress progress={downloadProgress.progress} current={downloadProgress.current} total={downloadProgress.total} phase={downloadProgress.phase} />}

      {/* Status Tab */}
      {activeTab === 'status' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-3xl font-bold text-blue-400">{cachedCount} / 114</div>
            <div className="text-xs text-white/50 mt-1">{t('offline.surahsAvailableOffline', 'Surahs available offline')}</div>
            <div className="text-[10px] text-white/30 mt-2">
              {cachedCount > 0 ? (
                <>{t('offline.text', 'Text')}{Object.keys(downloadedAudioMap).length > 0 ? ` + ${t('offline.audio', 'Audio')}` : ''} · {formatBytes(totalStorage)}</>
              ) : t('offline.noDownloadsYet', 'No downloads yet')}
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={handleDownloadAll} disabled={isDownloading || !networkOnline}
              className="flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all" style={{
                background: isDownloading || !networkOnline ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: isDownloading || !networkOnline ? 'rgba(255,255,255,0.3)' : '#fff',
              }}>
              {t('offline.downloadAll', 'Download All')}
            </button>
            <button onClick={handleClearAll} disabled={totalStorage === 0}
              className="px-4 py-2.5 rounded-xl text-xs font-medium transition-all" style={{
                background: totalStorage === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(239,68,68,0.2)',
                color: totalStorage === 0 ? 'rgba(255,255,255,0.3)' : '#ef4444',
              }}>
              {t('offline.clear', 'Clear')}
            </button>
          </div>
        </div>
      )}

      {/* Download Tab */}
      {activeTab === 'download' && (
        <div className="space-y-1 max-h-64 overflow-y-auto">
          {SURAHS.map(surah => (
            <SurahItem key={surah.id} surah={surah} isCached={cachedStatus[surah.id]} onDownload={handleDownloadSurah} isDownloading={isDownloading} />
          ))}
        </div>
      )}

      {/* Manage Tab */}
      {activeTab === 'manage' && (
        <div>
          {groupedIds.length > 0 ? (
            <div className="space-y-1 max-h-64 overflow-y-auto">
              {groupedIds.map(surahId => (
                <DownloadedItem key={surahId} surahId={surahId} entries={groupedDownloads[surahId]} audioInfo={downloadedAudioMap[surahId]} onDelete={handleDeleteSurah} onRedownload={handleRedownloadAudio} isDownloading={isDownloading} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-3xl mb-2">📲</div>
              <div className="text-xs text-white/50">{t('offline.noDownloadsYet', 'No downloads yet')}</div>
            </div>
          )}
        </div>
      )}
    </BubbleOverlay>
  );
});

export default OfflineManager;
