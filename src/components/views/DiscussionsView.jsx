/**
 * DiscussionsView — Full /discussions page.
 * Shows 114 surah rooms grid or a selected surah's discussion board.
 * Includes DM inbox tab for direct messages.
 */

import React, { useState, useEffect, useMemo, useRef, useCallback, lazy, Suspense } from 'react';
import { Icons } from '../common';
import { SURAHS } from '../../data';
import { useRooms } from '../../hooks/useDiscussion';
import { useAuth } from '../../contexts/AuthContext';
import { useIsMobile } from '../../hooks';
import { useTranslation } from '../../contexts/LocaleContext';
import DiscussionBoard from '../discussions/DiscussionBoard';
import UserProfile from '../discussions/UserProfile';

const DMInbox = lazy(() => import('../discussions/DMInbox'));
const DMConversation = lazy(() => import('../discussions/DMConversation'));

const SURAH_COLORS = [
  'from-emerald-500/20 to-teal-500/20 border-emerald-500/20',
  'from-blue-500/20 to-indigo-500/20 border-blue-500/20',
  'from-purple-500/20 to-violet-500/20 border-purple-500/20',
  'from-rose-500/20 to-pink-500/20 border-rose-500/20',
  'from-amber-500/20 to-yellow-500/20 border-amber-500/20',
  'from-cyan-500/20 to-sky-500/20 border-cyan-500/20',
  'from-fuchsia-500/20 to-purple-500/20 border-fuchsia-500/20',
  'from-teal-500/20 to-emerald-500/20 border-teal-500/20',
  'from-indigo-500/20 to-blue-500/20 border-indigo-500/20',
  'from-orange-500/20 to-red-500/20 border-orange-500/20',
];

const ACCENT_COLORS = [
  'text-emerald-400', 'text-blue-400', 'text-purple-400', 'text-rose-400',
  'text-amber-400', 'text-cyan-400', 'text-fuchsia-400', 'text-teal-400',
  'text-indigo-400', 'text-orange-400',
];

export default function DiscussionsView({ darkMode, onBack, initialSurahId, initialTab, initialProfileUserId, initialDmConnectionId, onNavigate, onOpenAyah, onNavigateSettings }) {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { user, isAuthenticated, login } = useAuth();
  const { rooms, loading: roomsLoading, fetchRooms } = useRooms();
  const [selectedSurah, setSelectedSurah] = useState(initialSurahId || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [topTab, setTopTab] = useState(initialTab === 'dms' ? 'dms' : initialTab === 'profile' ? 'profile' : 'rooms');
  const [dmConversation, setDmConversation] = useState(null);
  const [profileUserId, setProfileUserId] = useState(initialProfileUserId || null);
  const [profileReturnSurah, setProfileReturnSurah] = useState(null);
  const [pendingPostId, setPendingPostId] = useState(null);
  const [pendingRequestCount, setPendingRequestCount] = useState(0);
  const pollRef = useRef(null);

  // Poll for pending friend requests (shows badge on tabs)
  const fetchPendingCount = useCallback(() => {
    if (!isAuthenticated) return;
    fetch('/api/dm/conversations', { credentials: 'include' })
      .then(r => r.json())
      .then(data => {
        setPendingRequestCount((data.pending || []).length);
      })
      .catch(() => {});
  }, [isAuthenticated]);

  useEffect(() => {
    fetchPendingCount();
    // Poll every 30 seconds for new requests
    pollRef.current = setInterval(fetchPendingCount, 30000);
    return () => clearInterval(pollRef.current);
  }, [fetchPendingCount]);

  // URL navigation helpers
  const selectSurah = (surahId) => {
    setSelectedSurah(surahId);
    onNavigate?.(`/discussions/surah/${surahId}`);
  };
  const deselectSurah = () => {
    setSelectedSurah(null);
    setPendingPostId(null);
    onNavigate?.('/discussions');
  };
  const switchTab = (tab) => {
    if (tab === 'dms') {
      if (!isAuthenticated) { login(); return; }
      setTopTab('dms');
      onNavigate?.('/discussions/messages');
    } else if (tab === 'profile') {
      if (!isAuthenticated) { login(); return; }
      setTopTab('profile');
      onNavigate?.('/discussions/profile');
    } else {
      setTopTab('rooms');
      onNavigate?.('/discussions');
    }
  };

  // Sync internal state when initial props change (e.g. browser back/forward)
  useEffect(() => {
    setProfileUserId(initialProfileUserId || null);
  }, [initialProfileUserId]);

  useEffect(() => {
    setSelectedSurah(initialSurahId || null);
  }, [initialSurahId]);

  // Open DM conversation from URL (e.g. /discussions/messages/:connectionId)
  useEffect(() => {
    if (initialDmConnectionId) {
      setTopTab('dms');
      setDmConversation({ connectionId: initialDmConnectionId, otherUser: {} });
    }
  }, [initialDmConnectionId]);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  // Build room data with surah info
  const surahRooms = useMemo(() => {
    return SURAHS.map(s => {
      const room = rooms.find(r => r.surahId === s.id) || { postCount: 0, activeUsers: 0 };
      return { ...s, postCount: room.postCount, activeUsers: room.activeUsers };
    });
  }, [rooms]);

  const filteredSurahs = useMemo(() => {
    if (!searchQuery.trim()) return surahRooms;
    const q = searchQuery.toLowerCase();
    return surahRooms.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.arabic.includes(q) ||
      s.meaning.toLowerCase().includes(q) ||
      String(s.id) === q
    );
  }, [surahRooms, searchQuery]);

  const viewProfile = (userId) => {
    setProfileReturnSurah(selectedSurah);
    setProfileUserId(userId);
    onNavigate?.(`/discussions/profile/${userId}`);
  };

  // Profile view
  if (profileUserId) {
    return (
      <div className="h-full overflow-auto bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
        style={{ paddingBottom: 'max(6rem, calc(env(safe-area-inset-bottom, 0px) + 6rem))' }}
      >
        <div className="px-4 py-6 max-w-3xl mx-auto">
          <UserProfile
            userId={profileUserId}
            onBack={() => {
              setProfileUserId(null);
              if (profileReturnSurah) {
                setSelectedSurah(profileReturnSurah);
                onNavigate?.(`/discussions/surah/${profileReturnSurah}`);
                setProfileReturnSurah(null);
              } else {
                onNavigate?.('/discussions');
              }
            }}
            onOpenPost={(postId, surahId) => {
              setProfileUserId(null);
              setProfileReturnSurah(null);
              setPendingPostId(postId);
              setSelectedSurah(surahId);
              onNavigate?.(`/discussions/surah/${surahId}`);
            }}
            onOpenDM={(connectionId, otherUser) => {
              setProfileUserId(null);
              setProfileReturnSurah(null);
              setDmConversation({ connectionId, otherUser });
              onNavigate?.(`/discussions/messages/${connectionId}`);
            }}
            onNavigateSettings={onNavigateSettings}
          />
        </div>
      </div>
    );
  }

  // DM conversation view
  if (dmConversation) {
    return (
      <div className="h-full overflow-auto bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div className="max-w-3xl mx-auto">
          <Suspense fallback={<LoadingSpinner />}>
            <DMConversation
              connectionId={dmConversation.connectionId}
              otherUser={dmConversation.otherUser}
              onBack={() => { setDmConversation(null); onNavigate?.('/discussions/messages'); }}
            />
          </Suspense>
        </div>
      </div>
    );
  }

  // Selected surah view
  if (selectedSurah) {
    const surah = SURAHS.find(s => s.id === selectedSurah);
    return (
      <div className="h-full overflow-auto bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
        style={{ paddingBottom: 'max(6rem, calc(env(safe-area-inset-bottom, 0px) + 6rem))' }}
      >
        <div className="px-4 py-6 max-w-3xl mx-auto">
          {/* Top bar */}
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={deselectSurah}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm text-white/50 hover:text-purple-300
                bg-white/5 hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <Icons.ArrowLeft className="w-4 h-4" />
              {t('discussions.goBack', 'Back')}
            </button>
            <div className="h-5 w-px bg-white/10" />
            <div>
              <h1 className="text-white font-semibold text-lg">
                {surah?.name}
                <span className="text-white/40 font-normal text-sm ml-2">{surah?.arabic}</span>
              </h1>
            </div>
          </div>

          <DiscussionBoard
            surahId={selectedSurah}
            surahName={surah?.name}
            onOpenAyah={onOpenAyah}
            onViewProfile={viewProfile}
            initialPostId={pendingPostId}
            key={pendingPostId || selectedSurah}
          />
        </div>
      </div>
    );
  }

  // Room grid / DMs view
  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-600/[0.07] blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 rounded-full bg-cyan-500/[0.05] blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-indigo-500/[0.06] blur-3xl" />
      </div>

      <div className="relative px-4 py-6 max-w-5xl mx-auto"
        style={{ paddingBottom: 'max(8rem, calc(env(safe-area-inset-bottom, 0px) + 8rem))' }}
      >
        {/* Back button */}
        {onBack && (
          <div className="mb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm text-white/50 hover:text-purple-300
                bg-white/5 hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <Icons.ArrowLeft className="w-4 h-4" />
              {t('common.home', 'Home')}
            </button>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 mb-2">
            <div className="p-2 rounded-xl bg-purple-500/15 border border-purple-500/20">
              <Icons.MessageCircle className="w-6 h-6 text-purple-400" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              {t('discussions.community', 'Community')}
            </h1>
          </div>
          <p className="text-sm text-white/40">{t('discussions.subtitle', 'Discuss, connect, and learn together')}</p>
        </div>

        {/* Top tabs: Rooms / Messages */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex p-1 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
            <button
              onClick={() => switchTab('rooms')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                topTab === 'rooms'
                  ? 'bg-purple-600/30 text-purple-200 shadow-lg shadow-purple-500/10 border border-purple-500/20'
                  : 'text-white/40 hover:text-white/60'
              }`}
            >
              <Icons.Grid className="w-4 h-4" />
              {t('discussions.surahRooms', 'Surah Rooms')}
            </button>
            <button
              onClick={() => switchTab('dms')}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                topTab === 'dms'
                  ? 'bg-cyan-600/30 text-cyan-200 shadow-lg shadow-cyan-500/10 border border-cyan-500/20'
                  : 'text-white/40 hover:text-white/60'
              }`}
            >
              <Icons.Send className="w-4 h-4" />
              {t('discussions.messages', 'Messages')}
              {pendingRequestCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center px-1 rounded-full bg-cyan-500 text-white text-[10px] font-bold shadow-lg shadow-cyan-500/30 animate-pulse">
                  {pendingRequestCount}
                </span>
              )}
            </button>
            <button
              onClick={() => switchTab('profile')}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                topTab === 'profile'
                  ? 'bg-emerald-600/30 text-emerald-200 shadow-lg shadow-emerald-500/10 border border-emerald-500/20'
                  : 'text-white/40 hover:text-white/60'
              }`}
            >
              <Icons.User className="w-4 h-4" />
              {t('discussions.myProfile', 'My Profile')}
              {pendingRequestCount > 0 && topTab !== 'profile' && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/30 animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {/* DMs Tab */}
        {topTab === 'dms' && (
          <Suspense fallback={<LoadingSpinner />}>
            <DMInbox
              onOpenConversation={(connectionId, otherUser) => {
                setDmConversation({ connectionId, otherUser });
                onNavigate?.(`/discussions/messages/${connectionId}`);
              }}
            />
          </Suspense>
        )}

        {/* Profile Tab */}
        {topTab === 'profile' && isAuthenticated && user && (
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Own Profile */}
            <UserProfile
              userId={user.id}
              onBack={null}
              onOpenPost={(postId, surahId) => {
                setPendingPostId(postId);
                setSelectedSurah(surahId);
                setTopTab('rooms');
                onNavigate?.(`/discussions/surah/${surahId}`);
              }}
              onOpenDM={(connectionId, otherUser) => {
                setDmConversation({ connectionId, otherUser });
                onNavigate?.(`/discussions/messages/${connectionId}`);
              }}
              onNavigateSettings={onNavigateSettings}
            />

            {/* Requests + Friends List — below profile & recent posts */}
            <ProfileConnectionsSection
              onOpenConversation={(connectionId, otherUser) => {
                setDmConversation({ connectionId, otherUser });
                onNavigate?.(`/discussions/messages/${connectionId}`);
              }}
              onRequestCountChange={setPendingRequestCount}
            />
          </div>
        )}

        {/* Rooms Tab */}
        {topTab === 'rooms' && (
          <>
            {/* Search */}
            <div className="relative max-w-md mx-auto mb-8">
              <Icons.Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t('discussions.searchSurahs', 'Search surahs...')}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/[0.05] border border-white/[0.08]
                  text-white placeholder-white/25 text-sm backdrop-blur-sm
                  focus:outline-none focus:border-purple-500/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-purple-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 text-white/30 hover:text-white/50"
                >
                  <Icons.X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Loading */}
            {roomsLoading && rooms.length === 0 && <LoadingSpinner />}

            {/* Surah Grid */}
            <div className={`grid gap-2.5 ${
              isMobile ? 'grid-cols-2' : 'grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
            }`}>
              {filteredSurahs.map(surah => {
                const colorIdx = (surah.id - 1) % SURAH_COLORS.length;
                const hasActivity = surah.postCount > 0 || surah.activeUsers > 0;

                return (
                  <button
                    key={surah.id}
                    onClick={() => selectSurah(surah.id)}
                    className={`group relative rounded-2xl border overflow-hidden transition-all duration-300
                      bg-gradient-to-br ${SURAH_COLORS[colorIdx]}
                      hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-500/10
                      active:scale-[0.98] ${isMobile ? 'p-3' : 'p-3.5'}`}
                  >
                    {/* Surah number badge */}
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-lg bg-white/[0.06] flex items-center justify-center">
                      <span className="text-[10px] text-white/30 font-mono font-bold">{surah.id}</span>
                    </div>

                    {/* Active indicator */}
                    {surah.activeUsers > 0 && (
                      <div className="absolute top-2 left-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="mt-1">
                      <div className={`text-sm font-semibold text-white/90 group-hover:text-white transition-colors truncate ${
                        isMobile ? 'text-[13px]' : ''
                      }`}>
                        {surah.name}
                      </div>
                      <div className="text-sm text-white/35 font-arabic mt-0.5 leading-relaxed">{surah.arabic}</div>
                      <div className="text-[10px] text-white/20 mt-0.5 truncate">{surah.meaning}</div>
                    </div>

                    {/* Stats row */}
                    <div className="flex items-center gap-2.5 mt-2.5">
                      <span className={`text-[10px] ${hasActivity ? 'text-white/30' : 'text-white/15'}`}>
                        {surah.ayahs} ayahs
                      </span>
                      {surah.postCount > 0 && (
                        <span className="flex items-center gap-0.5 text-[10px] text-purple-400/70">
                          <Icons.MessageCircle className="w-2.5 h-2.5" />
                          {surah.postCount}
                        </span>
                      )}
                      {surah.activeUsers > 0 && (
                        <span className="flex items-center gap-0.5 text-[10px] text-green-400/70">
                          {surah.activeUsers} {t('discussions.online', 'online')}
                        </span>
                      )}
                    </div>

                    {/* Type badge */}
                    <div className="mt-2">
                      <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-medium tracking-wide uppercase
                        ${surah.type === 'Makki'
                          ? 'bg-amber-500/10 text-amber-400/60 border border-amber-500/10'
                          : 'bg-emerald-500/10 text-emerald-400/60 border border-emerald-500/10'
                        }`}
                      >
                        {surah.type}
                      </span>
                    </div>

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      bg-gradient-to-t from-purple-500/[0.08] to-transparent pointer-events-none" />
                  </button>
                );
              })}
            </div>

            {filteredSurahs.length === 0 && (
              <div className="text-center py-16">
                <Icons.Search className="w-10 h-10 text-white/10 mx-auto mb-3" />
                <p className="text-sm text-white/30">{t('discussions.noSurahsMatching', 'No surahs matching')} "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {t('discussions.clearSearch', 'Clear search')}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative">
        <div className="w-10 h-10 border-2 border-purple-500/20 rounded-full" />
        <div className="absolute inset-0 w-10 h-10 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}

function RemoveFriendModal({ friend, onConfirm, onCancel, removing }) {
  const { t } = useTranslation();
  if (!friend) return null;
  const user = friend.otherUser || {};

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={onCancel}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      {/* Modal */}
      <div
        className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden animate-[scaleIn_0.2s_ease-out]"
        onClick={e => e.stopPropagation()}
      >
        {/* Red accent line */}
        <div className="h-1 bg-gradient-to-r from-red-500 via-rose-500 to-red-400" />

        <div className="px-6 pt-5 pb-6">
          {/* Avatar + name */}
          <div className="flex flex-col items-center text-center mb-5">
            {user.picture ? (
              <img src={user.picture} alt="" className="w-16 h-16 rounded-full mb-3 ring-2 ring-red-500/20" referrerPolicy="no-referrer" />
            ) : (
              <div className="w-16 h-16 rounded-full mb-3 bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center text-white text-xl font-bold ring-2 ring-red-500/20">
                {(user.name || '?')[0].toUpperCase()}
              </div>
            )}
            <h3 className="text-base font-semibold text-white">{t('discussions.removeFriend', 'Remove Friend')}</h3>
            <p className="text-sm text-white/50 mt-2 leading-relaxed">
              {t('discussions.removeFriendDesc', 'Are you sure you want to remove')} <span className="text-white/80 font-medium">{user.name || 'this user'}</span>{t('discussions.removeFriendDesc2', '? You won\'t be able to message each other anymore.')}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white/60 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all"
            >
              {t('common.cancel', 'Cancel')}
            </button>
            <button
              onClick={onConfirm}
              disabled={removing}
              className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
            >
              {removing ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Icons.X className="w-4 h-4" />
                  {t('discussions.remove', 'Remove')}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileConnectionsSection({ onOpenConversation, onRequestCountChange }) {
  const { t } = useTranslation();
  const [requests, setRequests] = useState([]);
  const [sent, setSent] = useState([]);
  const [friends, setFriends] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [acting, setActing] = useState(null);
  const [confirmRemove, setConfirmRemove] = useState(null);

  const fetchAll = () => {
    setLoading(true);
    Promise.all([
      fetch('/api/dm/conversations', { credentials: 'include' }).then(r => r.json()),
      fetch('/api/discussions/block', { credentials: 'include' }).then(r => r.json()).catch(() => ({ blocked: [] })),
    ])
      .then(([convData, blockData]) => {
        const pending = convData.pending || [];
        setRequests(pending);
        setSent(convData.sent || []);
        setFriends(convData.conversations || []);
        setBlockedUsers(blockData.blocked || []);
        onRequestCountChange?.(pending.length);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchAll(); }, []);

  const handleRespond = async (connectionId, action) => {
    setActing(connectionId + ':' + action);
    try {
      const res = await fetch('/api/dm/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ connectionId, action }),
      });
      const data = await res.json();
      if (!data.error) {
        setRequests(prev => prev.filter(r => r.connectionId !== connectionId));
        if (action === 'accept') fetchAll();
      }
    } catch { /* logged in console */ }
    setActing(null);
  };

  const handleUnblock = async (userId) => {
    setActing(userId + ':unblock');
    try {
      const res = await fetch('/api/discussions/block', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      if (!data.error) {
        setBlockedUsers(prev => prev.filter(b => b.userId !== userId));
      }
    } catch { /* handled */ }
    setActing(null);
  };

  const handleRemove = async (connectionId) => {
    setActing(connectionId + ':remove');
    try {
      const res = await fetch('/api/dm/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ connectionId }),
      });
      const data = await res.json();
      if (!data.error) {
        setFriends(prev => prev.filter(f => f.connectionId !== connectionId));
        setSent(prev => prev.filter(s => s.connectionId !== connectionId));
      }
    } catch { /* handled */ }
    setActing(null);
    setConfirmRemove(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="w-5 h-5 border-2 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  const hasContent = requests.length > 0 || sent.length > 0 || friends.length > 0 || blockedUsers.length > 0;
  if (!hasContent) return null;

  const renderAvatar = (user, gradient = 'from-purple-500 to-cyan-500') => (
    user?.picture ? (
      <img src={user.picture} alt="" className="w-10 h-10 rounded-full shrink-0" referrerPolicy="no-referrer" />
    ) : (
      <div className={`w-10 h-10 rounded-full shrink-0 bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold`}>
        {(user?.name || '?')[0].toUpperCase()}
      </div>
    )
  );

  return (
    <div className="space-y-4">
      {/* Pending Requests (received) */}
      {requests.length > 0 && (
        <div className="rounded-2xl border border-cyan-500/15 bg-gradient-to-b from-cyan-500/[0.04] to-transparent overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
            <Icons.MessageCircle className="w-4 h-4 text-cyan-400/60" />
            <h3 className="text-sm text-cyan-400/70 font-semibold">
              {t('discussions.requests', 'Requests')}
            </h3>
            <span className="text-[10px] font-normal text-cyan-400/50 bg-cyan-500/10 px-1.5 py-0.5 rounded-full">
              {requests.length}
            </span>
          </div>
          <div className="divide-y divide-white/5">
            {requests.map(req => {
              const otherUser = req.from || {};
              const busy = acting?.startsWith(req.connectionId + ':');
              return (
                <div key={req.connectionId} className="flex items-center gap-3 px-5 py-3.5">
                  {renderAvatar(otherUser)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-medium truncate">{otherUser.name || 'Unknown'}</p>
                    <p className="text-[11px] text-white/30">{t('discussions.wantsToMessage', 'Wants to message you')}</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => handleRespond(req.connectionId, 'accept')}
                      disabled={busy}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 text-xs font-medium
                        hover:bg-cyan-500/30 disabled:opacity-40 transition-colors"
                    >
                      {acting === req.connectionId + ':accept' ? '...' : t('discussions.accept', 'Accept')}
                    </button>
                    <button
                      onClick={() => handleRespond(req.connectionId, 'reject')}
                      disabled={busy}
                      className="px-3 py-1.5 rounded-lg bg-white/5 text-white/40 text-xs
                        hover:bg-white/10 disabled:opacity-40 transition-colors"
                    >
                      {acting === req.connectionId + ':reject' ? '...' : t('discussions.decline', 'Decline')}
                    </button>
                    <button
                      onClick={() => handleRespond(req.connectionId, 'block')}
                      disabled={busy}
                      className="p-1.5 rounded-lg text-red-400/40 hover:bg-red-500/10 hover:text-red-400
                        disabled:opacity-40 transition-colors"
                      title={t('discussions.block', 'Block')}
                    >
                      <Icons.Shield className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Sent Requests (waiting for response) */}
      {sent.length > 0 && (
        <div className="rounded-2xl border border-amber-500/15 bg-gradient-to-b from-amber-500/[0.04] to-transparent overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
            <Icons.Send className="w-4 h-4 text-amber-400/60" />
            <h3 className="text-sm text-amber-400/70 font-semibold">
              {t('discussions.sentRequests', 'Sent Requests')}
            </h3>
            <span className="text-[10px] font-normal text-amber-400/50 bg-amber-500/10 px-1.5 py-0.5 rounded-full">
              {sent.length}
            </span>
          </div>
          <div className="divide-y divide-white/5">
            {sent.map(req => {
              const otherUser = req.to || {};
              const busy = acting === req.connectionId + ':remove';
              return (
                <div key={req.connectionId} className="flex items-center gap-3 px-5 py-3.5">
                  {renderAvatar(otherUser, 'from-amber-500 to-orange-500')}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-medium truncate">{otherUser.name || 'Unknown'}</p>
                    <p className="text-[11px] text-amber-400/40">{t('discussions.pending', 'Pending')}</p>
                  </div>
                  <button
                    onClick={() => handleRemove(req.connectionId)}
                    disabled={busy}
                    className="px-3 py-1.5 rounded-lg bg-white/5 text-white/40 text-xs
                      hover:bg-red-500/10 hover:text-red-400 disabled:opacity-40 transition-colors"
                  >
                    {busy ? '...' : t('discussions.cancelRequest', 'Cancel')}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Friends List (accepted connections) */}
      {friends.length > 0 && (
        <div className="rounded-2xl border border-emerald-500/15 bg-gradient-to-b from-emerald-500/[0.04] to-transparent overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
            <Icons.Users className="w-4 h-4 text-emerald-400/60" />
            <h3 className="text-sm text-emerald-400/70 font-semibold">
              {t('discussions.friends', 'Friends')}
            </h3>
            <span className="text-[10px] font-normal text-emerald-400/50 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">
              {friends.length}
            </span>
          </div>
          <div className="divide-y divide-white/5">
            {friends.map(conv => {
              const otherUser = conv.otherUser || {};
              const lastMsg = conv.lastMessage;
              return (
                <div key={conv.connectionId} className="flex items-center gap-3 px-5 py-3.5">
                  {renderAvatar(otherUser, 'from-emerald-500 to-cyan-500')}
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => onOpenConversation?.(conv.connectionId, otherUser)}>
                    <p className="text-sm text-white font-medium truncate">{otherUser.name || 'Unknown'}</p>
                    {lastMsg?.message && (
                      <p className="text-[11px] text-white/25 truncate mt-0.5">
                        {lastMsg.isOwn ? 'You: ' : ''}{lastMsg.message}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => onOpenConversation?.(conv.connectionId, otherUser)}
                      className="p-1.5 rounded-lg text-white/20 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                      title={t('discussions.message', 'Message')}
                    >
                      <Icons.Send className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setConfirmRemove(conv)}
                      className="p-1.5 rounded-lg text-white/15 hover:text-red-400/60 hover:bg-red-500/10 transition-colors"
                      title={t('discussions.unfriend', 'Remove')}
                    >
                      <Icons.X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Blocked Users */}
      {blockedUsers.length > 0 && (
        <div className="rounded-2xl border border-red-500/15 bg-gradient-to-b from-red-500/[0.04] to-transparent overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
            <Icons.Shield className="w-4 h-4 text-red-400/60" />
            <h3 className="text-sm text-red-400/70 font-semibold">
              {t('discussions.blockedUsers', 'Blocked Users')}
            </h3>
            <span className="text-[10px] font-normal text-red-400/50 bg-red-500/10 px-1.5 py-0.5 rounded-full">
              {blockedUsers.length}
            </span>
          </div>
          <div className="divide-y divide-white/5">
            {blockedUsers.map(blocked => {
              const busy = acting === blocked.userId + ':unblock';
              return (
                <div key={blocked.userId} className="flex items-center gap-3 px-5 py-3.5">
                  {renderAvatar({ name: blocked.name, picture: blocked.picture }, 'from-red-500 to-rose-500')}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/60 font-medium truncate">{blocked.name || 'Unknown'}</p>
                    <p className="text-[11px] text-red-400/30">{t('discussions.blocked', 'Blocked')}</p>
                  </div>
                  <button
                    onClick={() => handleUnblock(blocked.userId)}
                    disabled={busy}
                    className="px-3 py-1.5 rounded-lg bg-white/5 text-white/50 text-xs font-medium
                      hover:bg-emerald-500/10 hover:text-emerald-400 disabled:opacity-40 transition-colors"
                  >
                    {busy ? (
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      t('discussions.unblock', 'Unblock')
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Remove friend confirmation modal */}
      {confirmRemove && (
        <RemoveFriendModal
          friend={confirmRemove}
          removing={acting === confirmRemove.connectionId + ':remove'}
          onConfirm={() => handleRemove(confirmRemove.connectionId)}
          onCancel={() => setConfirmRemove(null)}
        />
      )}
    </div>
  );
}
