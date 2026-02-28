/**
 * useCloudSync — Reusable hook for syncing localStorage data to the server.
 *
 * Follows the TasbihView pattern:
 * 1. Download once on mount (when enabled)
 * 2. Merge server data with local via applyServerData callback
 * 3. Debounced upload on dependency changes (only after download completes)
 *
 * @param {string} dataType - Sync data type ('settings' | 'mood' | 'activity')
 * @param {Function} getLocalData - Returns current local data object to upload
 * @param {Function} applyServerData - Receives server data, merges into localStorage
 * @param {Array} deps - When these change, trigger debounced upload
 * @param {boolean} enabled - Must be true (isAuthenticated && isPremium)
 */

import { useEffect, useRef, useCallback } from 'react';

export function useCloudSync(dataType, getLocalData, applyServerData, deps, enabled) {
  const hasSyncedRef = useRef(false);
  const downloadCompleteRef = useRef(false);
  const syncingRef = useRef(false);
  const mountedRef = useRef(true);
  const syncTimerRef = useRef(null);
  const dataGetterRef = useRef(getLocalData);

  // Keep getter ref fresh
  dataGetterRef.current = getLocalData;

  // Cleanup on unmount
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    };
  }, []);

  // Download from server once on mount
  useEffect(() => {
    if (!enabled || hasSyncedRef.current) return;
    hasSyncedRef.current = true;

    (async () => {
      try {
        const res = await fetch(`/api/user/sync?type=${dataType}`, { credentials: 'include' });
        if (!res.ok || !mountedRef.current) return;
        const { data: serverResponse } = await res.json();

        if (serverResponse?.[dataType]?.data && mountedRef.current) {
          applyServerData(serverResponse[dataType].data);
        }
      } catch {
        // Silent fail — local data is the fallback
      }
      if (mountedRef.current) {
        downloadCompleteRef.current = true;
      }
    })();
  }, [enabled, dataType, applyServerData]);

  // Upload function
  const uploadToServer = useCallback(() => {
    if (syncingRef.current || !mountedRef.current || !enabled) return;
    syncingRef.current = true;

    const data = dataGetterRef.current();
    if (!data) {
      syncingRef.current = false;
      return;
    }

    fetch('/api/user/sync', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ dataType, data }),
    })
      .catch(() => {})
      .finally(() => {
        if (mountedRef.current) syncingRef.current = false;
      });
  }, [dataType, enabled]);

  // Debounced upload on deps change
  useEffect(() => {
    if (!enabled || !downloadCompleteRef.current) return;

    if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    syncTimerRef.current = setTimeout(() => {
      uploadToServer();
    }, 3000);

    return () => {
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { uploadNow: uploadToServer };
}
