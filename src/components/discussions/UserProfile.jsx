/**
 * UserProfile — Full profile page for discussion board users.
 * Shows Google profile data, discussion stats, leaderboard info, and recent posts.
 */

import React, { useState, useEffect } from 'react';
import { Icons } from '../common';
import { getSurahById } from '../../data';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from '../../contexts/LocaleContext';

const POST_TYPE_CONFIG = {
  discussion: { label: 'Discussion', color: 'text-cyan-400', bg: 'bg-cyan-500/15' },
  reflection: { label: 'Reflection', color: 'text-yellow-400', bg: 'bg-yellow-500/15' },
  tafseer:    { label: 'Tafseer', color: 'text-purple-400', bg: 'bg-purple-500/15' },
  question:   { label: 'Question', color: 'text-green-400', bg: 'bg-green-500/15' },
};

function timeAgo(dateStr) {
  const ts = dateStr?.endsWith('Z') ? dateStr : dateStr + 'Z';
  const seconds = Math.floor((Date.now() - new Date(ts).getTime()) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const ts = dateStr.endsWith('Z') ? dateStr : dateStr + 'Z';
    const d = new Date(ts);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return '';
  }
}

export default function UserProfile({ userId, onBack, onOpenPost, onNavigateSettings, onOpenDM }) {
  const { t } = useTranslation();
  const { user: currentUser, isAuthenticated, login } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dmAction, setDmAction] = useState(null); // null | 'sending' | 'sent' | 'error'
  const [blockConfirm, setBlockConfirm] = useState(false);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    setError(null);
    setDmAction(null);

    let cancelled = false;
    const controller = new AbortController();

    fetch(`/api/user/profile/${encodeURIComponent(userId)}`, {
      credentials: 'include',
      signal: controller.signal,
    })
      .then(res => res.json())
      .then(data => {
        if (cancelled) return;
        if (data.error) throw new Error(data.error);
        setProfile(data.profile);
      })
      .catch(err => {
        if (cancelled) return;
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to load profile');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [userId]);

  const handleDMAction = async () => {
    if (!isAuthenticated) { login(); return; }

    // If already friends, open the conversation
    if (profile.connectionStatus === 'accepted' && profile.connectionId) {
      onOpenDM?.(profile.connectionId, { id: profile.id, name: profile.name, picture: profile.picture });
      return;
    }

    // If we received a request from them, accept it
    if (profile.connectionStatus === 'pending' && profile.connectionDirection === 'received') {
      setDmAction('sending');
      try {
        const res = await fetch('/api/dm/respond', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ connectionId: profile.connectionId, action: 'accept' }),
        });
        if (res.ok) {
          setDmAction('sent');
          // Update profile to reflect new status
          setProfile(prev => ({ ...prev, connectionStatus: 'accepted' }));
        } else {
          setDmAction('error');
        }
      } catch { setDmAction('error'); }
      return;
    }

    // Otherwise, send a new DM request
    setDmAction('sending');
    try {
      const res = await fetch('/api/dm/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          recipientId: profile.id,
          recipientName: profile.name || 'Unknown',
          recipientPicture: profile.picture || '',
        }),
      });
      if (res.ok) {
        setDmAction('sent');
        setProfile(prev => ({ ...prev, connectionStatus: 'pending', connectionDirection: 'sent' }));
      } else {
        const data = await res.json().catch(() => ({}));
        // If already connected, update local state
        if (data.error?.includes('already connected')) {
          setProfile(prev => ({ ...prev, connectionStatus: 'accepted' }));
        }
        setDmAction('error');
      }
    } catch { setDmAction('error'); }
  };

  const handleBlock = async () => {
    if (!blockConfirm) { setBlockConfirm(true); return; }
    try {
      const res = await fetch('/api/discussions/block', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ userId: profile.id }),
      });
      if (res.ok) onBack?.();
    } catch { /* handled */ }
    setBlockConfirm(false);
  };

  // Loading
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3" role="status" aria-label="Loading profile">
        <div className="relative">
          <div className="w-10 h-10 border-2 border-purple-500/20 rounded-full" />
          <div className="absolute inset-0 w-10 h-10 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-xs text-white/20">{t('discussions.loadingProfile', 'Loading profile...')}</p>
      </div>
    );
  }

  // Error
  if (error || !profile) {
    return (
      <div className="text-center py-16" role="alert">
        <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
          <Icons.AlertCircle className="w-6 h-6 text-red-400/60" />
        </div>
        <p className="text-white/50 text-sm mb-1">{error || t('discussions.userNotFound', 'User not found')}</p>
        {onBack && (
          <button onClick={onBack} className="mt-4 px-4 py-2 rounded-xl text-sm text-purple-400 hover:text-purple-300 bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/15 transition-all">
            {t('discussions.goBack', 'Go Back')}
          </button>
        )}
      </div>
    );
  }

  const stats = profile.stats || { postCount: 0, commentCount: 0, totalKarma: 0 };
  const leaderboard = profile.leaderboard;
  const recentPosts = profile.recentPosts || [];

  return (
    <div className="space-y-4">
      {/* Back button */}
      {onBack && (
        <button onClick={onBack} className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors text-sm">
          <Icons.ArrowLeft className="w-4 h-4" />
          {t('discussions.goBack', 'Back')}
        </button>
      )}

      {/* Profile Header Card */}
      <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] overflow-hidden">
        {/* Banner gradient */}
        <div className="h-20 bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-pink-600/20" />

        <div className="px-5 pb-5 -mt-10">
          {/* Avatar */}
          {profile.picture ? (
            <img
              src={profile.picture}
              alt=""
              className="w-20 h-20 rounded-full border-4 border-slate-900 shadow-xl"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-20 h-20 rounded-full border-4 border-slate-900 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
              {(profile.name || '?')[0]}
            </div>
          )}

          {/* Name + meta */}
          <div className="mt-3">
            <h1 className="text-xl text-white font-bold">{profile.name || t('discussions.anonymous', 'Anonymous')}</h1>

            <div className="flex flex-wrap items-center gap-3 mt-1.5">
              {profile.email && (
                <span className="text-xs text-white/30 flex items-center gap-1 min-w-0 max-w-full">
                  <Icons.Mail className="w-3 h-3 shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </span>
              )}
              <span className="text-xs text-white/25 flex items-center gap-1">
                <Icons.Calendar className="w-3 h-3" />
                {t('discussions.joined', 'Joined')} {formatDate(profile.joinedAt)}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 mt-4">
            {profile.isOwnProfile ? (
              <button
                onClick={onNavigateSettings}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium
                  text-white/60 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all"
              >
                <Icons.Settings className="w-4 h-4" />
                {t('discussions.settings', 'Settings')}
              </button>
            ) : isAuthenticated && (
              <>
                {profile.connectionStatus !== 'blocked' && profile.allowDMs && (() => {
                  const cs = profile.connectionStatus;
                  const dir = profile.connectionDirection;
                  const isSending = dmAction === 'sending';

                  // Already friends → "Message" button (opens DM)
                  if (cs === 'accepted') return (
                    <button
                      onClick={handleDMAction}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium
                        text-white bg-purple-600 hover:bg-purple-500 border border-purple-500/50
                        shadow-lg shadow-purple-500/20 transition-all"
                    >
                      <Icons.MessageCircle className="w-4 h-4" />
                      {t('discussions.message', 'Message')}
                    </button>
                  );

                  // Pending request we sent → "Request Pending" (disabled)
                  if (cs === 'pending' && dir === 'sent') return (
                    <button
                      disabled
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium
                        text-amber-300/70 bg-amber-500/10 border border-amber-500/20 opacity-70 cursor-default"
                    >
                      <Icons.Clock className="w-4 h-4" />
                      {t('discussions.requestPending', 'Request Pending')}
                    </button>
                  );

                  // Pending request from them → "Accept Request"
                  if (cs === 'pending' && dir === 'received') return (
                    <button
                      onClick={handleDMAction}
                      disabled={isSending}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium
                        text-white bg-cyan-600 hover:bg-cyan-500 border border-cyan-500/50
                        shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50"
                    >
                      {isSending ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Icons.Check className="w-4 h-4" />
                      )}
                      {t('discussions.acceptRequest', 'Accept Request')}
                    </button>
                  );

                  // No connection → "Send Request"
                  return (
                    <button
                      onClick={handleDMAction}
                      disabled={isSending}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium
                        text-white bg-purple-600 hover:bg-purple-500 border border-purple-500/50
                        shadow-lg shadow-purple-500/20 transition-all disabled:opacity-50"
                    >
                      {isSending ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <Icons.Send className="w-4 h-4" />
                      )}
                      {dmAction === 'sent' ? t('discussions.requestSent', 'Request Sent') : t('discussions.sendRequest', 'Send Request')}
                    </button>
                  );
                })()}

                {dmAction === 'error' && (
                  <span className="text-[11px] text-red-400/60 self-center">{t('discussions.requestFailed', 'Failed')}</span>
                )}

                {profile.connectionStatus !== 'blocked' ? (
                  <button
                    onClick={handleBlock}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      blockConfirm
                        ? 'text-red-400 bg-red-500/20 border border-red-500/40'
                        : 'text-red-400/60 bg-red-500/[0.06] border border-red-500/15 hover:bg-red-500/10 hover:text-red-400'
                    }`}
                  >
                    <Icons.Shield className="w-4 h-4" />
                    {blockConfirm ? t('discussions.confirmBlock', 'Confirm Block?') : t('discussions.block', 'Block')}
                  </button>
                ) : (
                  <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-red-400/50 bg-red-500/[0.06] border border-red-500/15">
                    <Icons.Shield className="w-4 h-4" />
                    {t('discussions.userBlocked', 'Blocked')}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: t('discussions.posts', 'Posts'), value: stats.postCount, icon: Icons.BookOpen, iconClass: 'text-purple-400/50' },
          { label: t('discussions.comments', 'Comments'), value: stats.commentCount, icon: Icons.MessageCircle, iconClass: 'text-cyan-400/50' },
          { label: t('discussions.karma', 'Karma'), value: stats.totalKarma, icon: Icons.TrendingUp, iconClass: 'text-emerald-400/50' },
        ].map(stat => (
          <div
            key={stat.label}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center"
          >
            <stat.icon className={`w-4 h-4 mx-auto mb-1.5 ${stat.iconClass}`} />
            <div className="text-lg text-white font-bold">{stat.value}</div>
            <div className="text-[10px] text-white/30 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Leaderboard Badge */}
      {leaderboard && (
        <div className="rounded-xl border border-amber-500/10 bg-amber-500/[0.03] p-4">
          <div className="flex items-center gap-2 mb-3">
            <Icons.Trophy className="w-4 h-4 text-amber-400/60" />
            <span className="text-xs text-amber-400/60 font-medium uppercase tracking-wider">{t('discussions.quranJourney', 'Quran Journey')}</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="text-center">
              <div className="text-base text-amber-300 font-bold">{leaderboard.level}</div>
              <div className="text-[9px] text-white/25">{t('discussions.level', 'Level')}</div>
            </div>
            <div className="text-center">
              <div className="text-base text-white/80 font-bold">{leaderboard.xp.toLocaleString()}</div>
              <div className="text-[9px] text-white/25">{t('discussions.xp', 'XP')}</div>
            </div>
            <div className="text-center">
              <div className="text-base text-white/80 font-bold">{leaderboard.streak}</div>
              <div className="text-[9px] text-white/25">{t('discussions.streak', 'Streak')}</div>
            </div>
            <div className="text-center">
              <div className="text-base text-white/80 font-bold">{leaderboard.versesRead.toLocaleString()}</div>
              <div className="text-[9px] text-white/25">{t('discussions.verses', 'Verses')}</div>
            </div>
          </div>

          {/* XP progress bar */}
          <div className="mt-3">
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
                style={{ width: `${Math.min(100, (leaderboard.xp % 1000) / 10)}%` }}
              />
            </div>
            <div className="text-[9px] text-white/20 mt-1 text-right">
              {leaderboard.xp % 1000}/1000 {t('discussions.xpToNextLevel', 'XP to next level')}
            </div>
          </div>
        </div>
      )}

      {/* Recent Posts */}
      <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
          <Icons.BookOpen className="w-4 h-4 text-purple-400/60" />
          <h3 className="text-sm text-white/70 font-semibold">{t('discussions.recentPosts', 'Recent Posts')}</h3>
          {recentPosts.length > 0 && (
            <span className="text-[10px] font-normal text-white/30 bg-white/[0.06] px-1.5 py-0.5 rounded-full">
              {recentPosts.length}
            </span>
          )}
        </div>

        <div className="p-3">
          {recentPosts.length === 0 ? (
            <div className="text-center py-8">
              <Icons.BookOpen className="w-8 h-8 text-white/8 mx-auto mb-2" />
              <p className="text-sm text-white/25">{t('discussions.noPostsYet', 'No posts yet')}</p>
            </div>
          ) : (
            <div className="space-y-1">
              {recentPosts.map(post => {
                const typeConfig = POST_TYPE_CONFIG[post.postType] || POST_TYPE_CONFIG.discussion;
                const surah = getSurahById(post.surahId);

                return (
                  <button
                    key={post.id}
                    onClick={() => onOpenPost?.(post.id, post.surahId)}
                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm text-white/80 font-medium leading-snug truncate group-hover:text-purple-300 transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${typeConfig.bg} ${typeConfig.color}`}>
                            {typeConfig.label}
                          </span>
                          {surah && (
                            <span className="text-[10px] text-white/25">{surah.name}</span>
                          )}
                          <span className="text-[10px] text-white/20">{timeAgo(post.createdAt)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 pt-0.5">
                        <span className="flex items-center gap-1 text-[11px] text-white/25">
                          <Icons.TrendingUp className="w-3 h-3" />
                          {post.score}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-white/25">
                          <Icons.MessageCircle className="w-3 h-3" />
                          {post.commentCount}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
