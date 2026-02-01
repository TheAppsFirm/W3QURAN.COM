/**
 * Offline Manager Component - Bubble Style
 * Single Responsibility: Manage offline downloads in bubble modal
 */

import { memo, useState, useEffect, useCallback } from 'react';
import BubbleOverlay from './BubbleOverlay';
import { Icons } from './Icons';
import {
  isOfflineModeAvailable,
  isOnline,
  getDownloadedSurahs,
  getTotalStorageUsed,
  downloadSurahForOffline,
  downloadSurahsForOffline,
  deleteCachedSurah,
  clearAllCache,
  isSurahCached,
} from '../../data/offlineStorage';
import { SURAHS } from '../../data';

const formatBytes = (bytes) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Download Progress
 */
const DownloadProgress = memo(function DownloadProgress({ progress, current, total }) {
  return (
    <div className="p-3 rounded-xl mb-3" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="flex justify-between mb-2">
        <span className="text-xs text-white/70">Downloading...</span>
        <span className="text-xs font-semibold text-blue-400">{progress}%</span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
        <div className="h-full rounded-full transition-all" style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
        }} />
      </div>
      {current && total && <div className="text-[10px] text-white/40 mt-1">{current} of {total} surahs</div>}
    </div>
  );
});

/**
 * Surah Download Item
 */
const SurahItem = memo(function SurahItem({ surah, isCached, onDownload, isDownloading }) {
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
        <span className={`text-xs ${isCached ? 'text-green-400 font-medium' : 'text-white/70'}`}>{surah.name}</span>
      </div>
      {isCached ? (
        <Icons.Check className="w-4 h-4 text-green-400" />
      ) : (
        <button onClick={() => onDownload(surah.id)} disabled={isDownloading}
          className="px-2 py-1 rounded-lg text-[10px] transition-all" style={{
            background: isDownloading ? 'rgba(255,255,255,0.05)' : 'rgba(96,165,250,0.2)',
            color: isDownloading ? 'rgba(255,255,255,0.3)' : '#60a5fa',
          }}>
          {isDownloading ? '...' : 'Get'}
        </button>
      )}
    </div>
  );
});

/**
 * Downloaded Item
 */
const DownloadedItem = memo(function DownloadedItem({ item, onDelete }) {
  const surah = SURAHS.find(s => s.id === item.surahId);
  return (
    <div className="flex items-center justify-between p-2 rounded-xl mb-1" style={{ background: 'rgba(255,255,255,0.05)' }}>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
          style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
          {item.surahId}
        </div>
        <div>
          <div className="text-xs font-medium">{surah?.name || `Surah ${item.surahId}`}</div>
          <div className="text-[10px] text-white/40">{formatBytes(item.size)}</div>
        </div>
      </div>
      <button onClick={() => onDelete(item.surahId, item.translationId)}
        className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/20 transition-all">
        <Icons.X className="w-3 h-3" />
      </button>
    </div>
  );
});

/**
 * Main Offline Manager - Bubble Style
 */
const OfflineManager = memo(function OfflineManager({ onClose, translationId = 'en.sahih' }) {
  const [activeTab, setActiveTab] = useState('status');
  const [networkOnline, setNetworkOnline] = useState(isOnline());
  const [downloadedSurahs, setDownloadedSurahs] = useState([]);
  const [totalStorage, setTotalStorage] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState({ progress: 0, current: 0, total: 0 });
  const [cachedStatus, setCachedStatus] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const downloaded = await getDownloadedSurahs();
      setDownloadedSurahs(downloaded);
      const storage = await getTotalStorageUsed();
      setTotalStorage(storage);
      const status = {};
      for (const surah of SURAHS) {
        status[surah.id] = await isSurahCached(surah.id, translationId);
      }
      setCachedStatus(status);
    };
    loadData();
  }, [translationId]);

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
        setDownloadProgress({ progress, current: 1, total: 1 });
      });
      setCachedStatus(prev => ({ ...prev, [surahId]: true }));
      const downloaded = await getDownloadedSurahs();
      setDownloadedSurahs(downloaded);
      const storage = await getTotalStorageUsed();
      setTotalStorage(storage);
    } catch {
      // Download failed - user will see the incomplete status
    } finally {
      setIsDownloading(false);
      setDownloadProgress({ progress: 0, current: 0, total: 0 });
    }
  }, [networkOnline, translationId]);

  const handleDownloadAll = useCallback(async () => {
    if (!networkOnline) return;
    const uncachedSurahs = SURAHS.filter(s => !cachedStatus[s.id]).map(s => s.id);
    if (uncachedSurahs.length === 0) return;
    setIsDownloading(true);
    try {
      await downloadSurahsForOffline(uncachedSurahs, translationId, (progress, current, total) => {
        setDownloadProgress({ progress, current, total });
      });
      const status = {};
      for (const surah of SURAHS) {
        status[surah.id] = await isSurahCached(surah.id, translationId);
      }
      setCachedStatus(status);
      const downloaded = await getDownloadedSurahs();
      setDownloadedSurahs(downloaded);
      const storage = await getTotalStorageUsed();
      setTotalStorage(storage);
    } finally {
      setIsDownloading(false);
      setDownloadProgress({ progress: 0, current: 0, total: 0 });
    }
  }, [networkOnline, cachedStatus, translationId]);

  const handleDeleteSurah = useCallback(async (surahId, transId) => {
    await deleteCachedSurah(surahId, transId);
    setCachedStatus(prev => ({ ...prev, [surahId]: false }));
    const downloaded = await getDownloadedSurahs();
    setDownloadedSurahs(downloaded);
    const storage = await getTotalStorageUsed();
    setTotalStorage(storage);
  }, []);

  const handleClearAll = useCallback(async () => {
    await clearAllCache();
    setDownloadedSurahs([]);
    setTotalStorage(0);
    const status = {};
    SURAHS.forEach(s => { status[s.id] = false; });
    setCachedStatus(status);
  }, []);

  const cachedCount = Object.values(cachedStatus).filter(Boolean).length;
  const tabs = [{ id: 'status', label: 'Status' }, { id: 'download', label: 'Download' }, { id: 'manage', label: 'Manage' }];

  if (!isOfflineModeAvailable()) {
    return (
      <BubbleOverlay onClose={onClose} title="Offline Mode" icon={Icons.Download} gradient={['#ef4444', '#dc2626', '#b91c1c']} size="small">
        <div className="text-center py-8">
          <div className="text-4xl mb-3">:(</div>
          <div className="text-sm text-white/70">Offline mode not supported</div>
        </div>
      </BubbleOverlay>
    );
  }

  return (
    <BubbleOverlay onClose={onClose} title="Offline Mode" subtitle={`${cachedCount}/114 Surahs`} icon={Icons.Download} gradient={['#3b82f6', '#2563eb', '#1d4ed8']} size="medium">
      {/* Network Status */}
      <div className="flex items-center gap-2 p-2 rounded-xl mb-3" style={{
        background: networkOnline ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
      }}>
        <div className="w-2 h-2 rounded-full" style={{ background: networkOnline ? '#22c55e' : '#ef4444' }} />
        <span className={`text-xs ${networkOnline ? 'text-green-400' : 'text-red-400'}`}>
          {networkOnline ? 'Online' : 'Offline'}
        </span>
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
      {isDownloading && <DownloadProgress progress={downloadProgress.progress} current={downloadProgress.current} total={downloadProgress.total} />}

      {/* Status Tab */}
      {activeTab === 'status' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-3xl font-bold text-blue-400">{cachedCount} / 114</div>
            <div className="text-xs text-white/50 mt-1">Surahs available offline</div>
            <div className="text-[10px] text-white/30 mt-2">Storage: {formatBytes(totalStorage)}</div>
          </div>
          <div className="flex gap-2">
            <button onClick={handleDownloadAll} disabled={isDownloading || !networkOnline}
              className="flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all" style={{
                background: isDownloading || !networkOnline ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                color: isDownloading || !networkOnline ? 'rgba(255,255,255,0.3)' : '#fff',
              }}>
              Download All
            </button>
            <button onClick={handleClearAll} disabled={totalStorage === 0}
              className="px-4 py-2.5 rounded-xl text-xs font-medium transition-all" style={{
                background: totalStorage === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(239,68,68,0.2)',
                color: totalStorage === 0 ? 'rgba(255,255,255,0.3)' : '#ef4444',
              }}>
              Clear
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
          {downloadedSurahs.length > 0 ? (
            <div className="space-y-1 max-h-64 overflow-y-auto">
              {downloadedSurahs.map(item => (
                <DownloadedItem key={`${item.surahId}-${item.translationId}`} item={item} onDelete={handleDeleteSurah} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-3xl mb-2">📲</div>
              <div className="text-xs text-white/50">No downloads yet</div>
            </div>
          )}
        </div>
      )}
    </BubbleOverlay>
  );
});

export default OfflineManager;
