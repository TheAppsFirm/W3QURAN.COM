/**
 * DiscussionsView — Full /discussions page.
 * Shows 114 surah rooms grid or a selected surah's discussion board.
 * Includes DM inbox tab for direct messages.
 */

import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
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

export default function DiscussionsView({ darkMode, onBack, initialSurahId, initialTab, initialProfileUserId, onNavigate, onOpenAyah, onNavigateSettings }) {
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
              onBack={() => setDmConversation(null)}
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
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                topTab === 'dms'
                  ? 'bg-cyan-600/30 text-cyan-200 shadow-lg shadow-cyan-500/10 border border-cyan-500/20'
                  : 'text-white/40 hover:text-white/60'
              }`}
            >
              <Icons.Send className="w-4 h-4" />
              {t('discussions.messages', 'Messages')}
            </button>
            <button
              onClick={() => switchTab('profile')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                topTab === 'profile'
                  ? 'bg-emerald-600/30 text-emerald-200 shadow-lg shadow-emerald-500/10 border border-emerald-500/20'
                  : 'text-white/40 hover:text-white/60'
              }`}
            >
              <Icons.User className="w-4 h-4" />
              {t('discussions.myProfile', 'My Profile')}
            </button>
          </div>
        </div>

        {/* DMs Tab */}
        {topTab === 'dms' && (
          <Suspense fallback={<LoadingSpinner />}>
            <DMInbox
              onOpenConversation={(connectionId, otherUser) => setDmConversation({ connectionId, otherUser })}
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
              onNavigateSettings={onNavigateSettings}
            />

            {/* Requests + Friends List — below profile & recent posts */}
            <ProfileConnectionsSection
              onOpenConversation={(connectionId, otherUser) => {
                setDmConversation({ connectionId, otherUser });
              }}
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

function ProfileConnectionsSection({ onOpenConversation }) {
  const { t } = useTranslation();
  const [requests, setRequests] = useState([]);
  const [sent, setSent] = useState([]);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [acting, setActing] = useState(null);
  const [confirmRemove, setConfirmRemove] = useState(null);

  const fetchAll = () => {
    setLoading(true);
    fetch('/api/dm/conversations', { credentials: 'include' })
      .then(r => r.json())
      .then(data => {
        setRequests(data.pending || []);
        setSent(data.sent || []);
        setFriends(data.conversations || []);
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

  const handleRemove = async (connectionId) => {
    if (confirmRemove !== connectionId) {
      setConfirmRemove(connectionId);
      return;
    }
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

  const hasContent = requests.length > 0 || sent.length > 0 || friends.length > 0;
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
              const isRemoving = acting === conv.connectionId + ':remove';
              const isConfirming = confirmRemove === conv.connectionId;
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
                      onClick={() => handleRemove(conv.connectionId)}
                      disabled={isRemoving}
                      className={`p-1.5 rounded-lg transition-colors disabled:opacity-40 ${
                        isConfirming
                          ? 'text-red-400 bg-red-500/15'
                          : 'text-white/15 hover:text-red-400/60 hover:bg-red-500/10'
                      }`}
                      title={isConfirming ? t('discussions.unfriendConfirm', 'Remove friend?') : t('discussions.unfriend', 'Remove')}
                    >
                      {isRemoving ? (
                        <div className="w-3.5 h-3.5 border border-red-400/40 border-t-red-400 rounded-full animate-spin" />
                      ) : (
                        <Icons.X className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
