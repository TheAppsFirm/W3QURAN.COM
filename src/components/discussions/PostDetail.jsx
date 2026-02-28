/**
 * PostDetail — Full post view with threaded comments.
 * Polished UI with clear visual hierarchy and beautiful interactions.
 */

import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Icons } from '../common';
import { usePostDetail, useVote, useReport } from '../../hooks/useDiscussion';
import { useAuth } from '../../contexts/AuthContext';
import VoteButton from './VoteButton';
import AyahReference from './AyahReference';
import RichPostBody from './RichPostBody';
import CommentThread from './CommentThread';
import CommentInput from './CommentInput';
import UserPopover from './UserPopover';
import { useTranslation } from '../../contexts/LocaleContext';
import { getTextDir } from './quranQuoteUtils';

const PremiumGate = lazy(() => import('../kids/KidsPremiumGate'));

const POST_TYPE_CONFIG = {
  discussion: { label: 'Discussion', icon: '💬', color: 'text-cyan-400', bg: 'bg-cyan-500/15', border: 'border-cyan-500/30', glow: 'shadow-cyan-500/5' },
  reflection: { label: 'Reflection', icon: '🌙', color: 'text-yellow-400', bg: 'bg-yellow-500/15', border: 'border-yellow-500/30', glow: 'shadow-yellow-500/5' },
  tafseer:    { label: 'Tafseer', icon: '📖', color: 'text-purple-400', bg: 'bg-purple-500/15', border: 'border-purple-500/30', glow: 'shadow-purple-500/5' },
  question:   { label: 'Question', icon: '❓', color: 'text-green-400', bg: 'bg-green-500/15', border: 'border-green-500/30', glow: 'shadow-green-500/5' },
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
  return `${Math.floor(days / 30)}mo ago`;
}

export default function PostDetail({ postId, onBack, onOpenAyah, onViewProfile }) {
  const { t } = useTranslation();
  const { user, isAdmin, isAuthenticated, login } = useAuth();
  const { post, comments, loading, error, fetchPost, addComment, editPost, deletePost, deleteComment, setPost, setComments } = usePostDetail(postId);
  const { vote, voting } = useVote();
  const { report } = useReport();
  const [commentSort, setCommentSort] = useState('best');
  const [showPremiumGate, setShowPremiumGate] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [reportReason, setReportReason] = useState('');
  const [reportSuccess, setReportSuccess] = useState(false);
  const [popoverUser, setPopoverUser] = useState(null);
  const [popoverPos, setPopoverPos] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const [editError, setEditError] = useState('');
  const [saving, setSaving] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const handleUserClick = (e) => {
    e.stopPropagation();
    setPopoverUser({ id: post.userId, name: post.userName, picture: post.userPicture });
    setPopoverPos({ top: Math.min(e.clientY + 8, window.innerHeight - 300), left: Math.min(e.clientX, window.innerWidth - 260) });
  };

  const handleSendDMRequest = async (targetUser) => {
    try {
      await fetch('/api/dm/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          recipientId: targetUser.id,
          recipientName: targetUser.name || 'Unknown',
          recipientPicture: targetUser.picture || '',
        }),
      });
    } catch { /* handled */ }
  };

  const handleBlockUser = async (targetUser) => {
    try {
      await fetch('/api/discussions/block', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ userId: targetUser.id }),
      });
    } catch { /* handled */ }
  };

  useEffect(() => {
    fetchPost();

    // Poll for new comments every 15s so other users see updates
    const pollInterval = setInterval(() => {
      fetchPost({ silent: true });
    }, 15000);

    return () => clearInterval(pollInterval);
  }, [fetchPost]);

  const handleVote = async (targetType, targetId, voteValue) => {
    if (!isAuthenticated) return login();
    try {
      const result = await vote(targetType, targetId, voteValue);
      if (targetType === 'post') {
        setPost(prev => ({ ...prev, score: result.score, userVote: result.userVote }));
      } else {
        const updateCommentVote = (list) => list.map(c => {
          if (c.id === targetId) return { ...c, score: result.score, userVote: result.userVote };
          if (c.replies) return { ...c, replies: updateCommentVote(c.replies) };
          return c;
        });
        setComments(updateCommentVote);
      }
    } catch { /* handled */ }
  };

  const handleAddComment = async (body, parentId = null) => {
    if (!isAuthenticated) { login(); return; }
    await addComment(body, parentId);
    await fetchPost();
  };

  const handleDeletePost = () => setDeleteConfirm({ type: 'post' });
  const handleDeleteComment = (commentId) => setDeleteConfirm({ type: 'comment', id: commentId });

  const confirmDeleteAction = async () => {
    if (!deleteConfirm) return;
    if (deleteConfirm.type === 'post') {
      await deletePost();
      setDeleteConfirm(null);
      onBack?.();
    } else {
      await deleteComment(deleteConfirm.id);
      setDeleteConfirm(null);
      await fetchPost();
    }
  };

  const handleStartEdit = () => {
    setEditTitle(post.title);
    setEditBody(post.body);
    setEditError('');
    setEditing(true);
    setShowActions(false);
  };

  const handleSaveEdit = async () => {
    const trimTitle = editTitle.trim();
    const b = editBody.trim();
    if (trimTitle.length < 5) { setEditError('Title must be at least 5 characters'); return; }
    if (b.length < 10) { setEditError('Body must be at least 10 characters'); return; }
    setSaving(true);
    setEditError('');
    try {
      const result = await editPost(trimTitle, b);
      setPost(prev => ({ ...prev, title: result.title, body: result.body }));
      setEditing(false);
    } catch (err) {
      setEditError(err.message || 'Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const handleReport = async () => {
    if (!reportReason) return;
    try {
      await report('post', postId, reportReason);
      setReportSuccess(true);
      setTimeout(() => { setShowReport(false); setReportReason(''); setReportSuccess(false); }, 2000);
    } catch { /* handled */ }
  };

  // Loading state
  if (loading && !post) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <div className="relative">
          <div className="w-10 h-10 border-2 border-purple-500/20 rounded-full" />
          <div className="absolute inset-0 w-10 h-10 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-xs text-white/20">{t('discussions.loadingPost', 'Loading post...')}</p>
      </div>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <div className="text-center py-16">
        <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
          <Icons.AlertCircle className="w-6 h-6 text-red-400/60" />
        </div>
        <p className="text-white/50 text-sm mb-1">{error || t('discussions.postNotFound', 'Post not found')}</p>
        <p className="text-white/20 text-xs mb-4">{t('discussions.postNotFoundMessage', 'This post may have been deleted or moved.')}</p>
        <button onClick={onBack} className="px-4 py-2 rounded-xl text-sm text-purple-400 hover:text-purple-300 bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/15 transition-all">
          {t('discussions.goBack', 'Go Back')}
        </button>
      </div>
    );
  }

  const typeConfig = POST_TYPE_CONFIG[post.postType] || POST_TYPE_CONFIG.discussion;
  const isOwner = post.userId === user?.id;

  return (
    <div className="space-y-4">
      {/* Post Card */}
      <div className={`rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm shadow-xl ${typeConfig.glow}`}>

        {/* Post Type Banner */}
        <div className={`flex items-center gap-2 px-5 py-2.5 rounded-t-2xl border-b border-white/[0.06] ${typeConfig.bg}`}>
          <button onClick={onBack} className="flex items-center gap-1 text-white/40 hover:text-white/70 transition-colors mr-1">
            <Icons.ArrowLeft className="w-4 h-4" />
          </button>
          <span className="text-sm">{typeConfig.icon}</span>
          <span className={`text-xs font-semibold tracking-wide uppercase ${typeConfig.color}`}>{typeConfig.label}</span>

          {/* Pinned / Locked */}
          {post.isPinned && (
            <span className="px-2 py-0.5 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-[9px] font-bold tracking-wider">{t('discussions.pinned', 'PINNED')}</span>
          )}
          {post.isLocked && (
            <span className="px-2 py-0.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-[9px] font-bold flex items-center gap-0.5 tracking-wider">
              <Icons.Lock className="w-2.5 h-2.5" /> {t('discussions.locked', 'LOCKED')}
            </span>
          )}

          {/* 3-dot menu */}
          <div className="ml-auto relative">
            <button
              onClick={() => setShowActions(!showActions)}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-white/30 hover:text-white/60 hover:bg-white/10 transition-all"
            >
              <Icons.MoreVertical className="w-4 h-4" />
            </button>
            {showActions && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowActions(false)} />
                <div className="absolute right-0 top-full mt-1 z-20 w-40 max-w-[calc(100vw-2rem)] rounded-xl bg-slate-800 border border-white/10 shadow-xl shadow-black/30 overflow-hidden py-1">
                  {isOwner && !editing && (
                    <button onClick={handleStartEdit} className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white/60 hover:text-purple-300 hover:bg-purple-500/10 transition-colors">
                      <Icons.Edit className="w-3.5 h-3.5" /> {t('discussions.editPost', 'Edit Post')}
                    </button>
                  )}
                  {isAuthenticated && (
                    <button onClick={() => { setShowReport(!showReport); setShowActions(false); }} className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white/60 hover:text-yellow-300 hover:bg-yellow-500/10 transition-colors">
                      <Icons.Flag className="w-3.5 h-3.5" /> {t('discussions.report', 'Report')}
                    </button>
                  )}
                  {(isOwner || isAdmin) && (
                    <button onClick={() => { handleDeletePost(); setShowActions(false); }} className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-400/70 hover:text-red-300 hover:bg-red-500/10 transition-colors">
                      <Icons.Trash className="w-3.5 h-3.5" /> {t('discussions.delete', 'Delete')}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Post Content */}
        <div className="p-5">
          {/* Author Row */}
          <div className="flex items-center gap-3 mb-4">
            {post.userPicture ? (
              <img src={post.userPicture} alt="" className="w-10 h-10 rounded-full cursor-pointer hover:ring-2 hover:ring-purple-400/50 transition-all shadow-lg" referrerPolicy="no-referrer" onClick={handleUserClick} />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:ring-2 hover:ring-purple-400/50 transition-all shadow-lg" onClick={handleUserClick}>
                {(post.userName || '?')[0]}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm text-white font-semibold cursor-pointer hover:text-purple-300 transition-colors truncate" onClick={handleUserClick}>
                  {post.userName}
                </span>
                {isOwner && (
                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-purple-500/15 text-purple-400 font-medium">{t('discussions.you', 'You')}</span>
                )}
              </div>
              <span className="text-[11px] text-white/30">{timeAgo(post.createdAt)}</span>
            </div>
          </div>

          {/* Title & Body */}
          {editing ? (
            <div className="space-y-3 mb-4">
              <div>
                <input
                  type="text"
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  maxLength={200}
                  autoFocus
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-purple-500/30 text-white text-base font-semibold
                    placeholder-white/25 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 transition-all"
                  placeholder={t('discussions.postTitlePlaceholder', 'Post title...')}
                />
                <div className="text-[10px] text-white/20 mt-1 text-right">{editTitle.length}/200</div>
              </div>
              <div>
                <textarea
                  value={editBody}
                  onChange={e => setEditBody(e.target.value)}
                  maxLength={5000}
                  rows={6}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-purple-500/30 text-white text-sm leading-relaxed
                    placeholder-white/25 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 transition-all resize-y"
                  placeholder={t('discussions.postBodyPlaceholder', 'Post body...')}
                />
                <div className="text-[10px] text-white/20 mt-1 text-right">{editBody.length}/5000</div>
              </div>
              {editError && (
                <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{editError}</p>
              )}
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setEditing(false)}
                  className="px-5 py-2 rounded-xl text-sm font-medium text-white/50 bg-white/5 border border-white/10
                    hover:bg-white/10 hover:text-white/70 transition-all"
                >
                  {t('common.cancel', 'Cancel')}
                </button>
                <button
                  onClick={handleSaveEdit}
                  disabled={saving}
                  className="px-5 py-2 rounded-xl text-sm font-medium text-white bg-purple-600 hover:bg-purple-500
                    border border-purple-500/50 shadow-lg shadow-purple-500/20 transition-all disabled:opacity-50"
                >
                  {saving ? t('discussions.saving', 'Saving...') : t('discussions.saveChanges', 'Save Changes')}
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-4">
              <h1 className="text-xl text-white font-bold leading-snug mb-3" dir={getTextDir(post.title)}>{post.title}</h1>

              {/* Tags */}
              {post.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.map(tag => (
                    <span key={tag.id} className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-medium border"
                      style={{ backgroundColor: tag.color + '15', color: tag.color, borderColor: tag.color + '30' }}>
                      {tag.icon} {tag.name}
                    </span>
                  ))}
                </div>
              )}

              <RichPostBody text={post.body} onOpenAyah={onOpenAyah} />
            </div>
          )}

          {/* Ayah refs */}
          <AyahReference refs={post.ayahRefs} onOpenAyah={onOpenAyah} />

          {/* Report form - inline */}
          {showReport && (
            <div className="mt-3 p-4 rounded-xl bg-yellow-500/[0.04] border border-yellow-500/15 animate-[scaleIn_0.15s_ease-out]">
              {reportSuccess ? (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <Icons.CheckCircle className="w-4 h-4" /> {t('discussions.reportSubmitted', 'Report submitted. Thank you.')}
                </div>
              ) : (
                <>
                  <p className="text-xs text-white/40 mb-2 font-medium">{t('discussions.reportTitle', 'Why are you reporting this post?')}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {[
                      { id: 'spam', label: t('discussions.reportSpam', 'Spam') },
                      { id: 'offensive', label: t('discussions.reportOffensive', 'Offensive') },
                      { id: 'misinformation', label: t('discussions.reportMisinformation', 'Misinformation') },
                      { id: 'harassment', label: t('discussions.reportHarassment', 'Harassment') },
                      { id: 'other', label: t('discussions.reportOther', 'Other') },
                    ].map(r => (
                      <button
                        key={r.id}
                        onClick={() => setReportReason(r.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all
                          ${reportReason === r.id
                            ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/40'
                            : 'bg-white/5 text-white/40 border border-white/10 hover:bg-white/10'
                          }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2 justify-end">
                    <button onClick={() => { setShowReport(false); setReportReason(''); }} className="text-xs text-white/30 hover:text-white/50 px-3 py-1.5">{t('common.cancel', 'Cancel')}</button>
                    <button
                      onClick={handleReport}
                      disabled={!reportReason}
                      className="text-xs text-yellow-400 hover:text-yellow-300 disabled:opacity-30 px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20"
                    >
                      {t('discussions.submitReport', 'Submit Report')}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Engagement Bar */}
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/[0.06]">
            <VoteButton
              score={post.score}
              userVote={post.userVote}
              onVote={(v) => handleVote('post', post.id, v)}
              disabled={!!voting}
            />

            <div className="h-5 w-px bg-white/10" />

            <div className="flex items-center gap-1.5 text-white/30 text-sm">
              <Icons.MessageCircle className="w-4 h-4" />
              <span>{post.commentCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
        {/* Comments Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
          <h3 className="text-sm text-white/70 font-semibold flex items-center gap-2">
            <Icons.MessageCircle className="w-4 h-4 text-purple-400/60" />
            {t('discussions.comments', 'Comments')}
            {post.commentCount > 0 && (
              <span className="text-[10px] font-normal text-white/30 bg-white/[0.06] px-1.5 py-0.5 rounded-full">
                {post.commentCount}
              </span>
            )}
          </h3>
          {comments.length > 1 && (
            <div className="flex p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
              {['best', 'new'].map(s => (
                <button
                  key={s}
                  onClick={() => setCommentSort(s)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all
                    ${commentSort === s
                      ? 'bg-purple-500/20 text-purple-300 shadow-sm'
                      : 'text-white/30 hover:text-white/50'
                    }`}
                >
                  {s === 'best' ? t('discussions.bestSort', 'Best') : t('discussions.newSort', 'New')}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-5">
          {/* Comment Input */}
          {!post.isLocked && isAuthenticated && (
            <div className="mb-5">
              <CommentInput onSubmit={(body) => handleAddComment(body)} placeholder={t('discussions.shareYourThoughts', 'Share your thoughts...')} onShowPremium={() => setShowPremiumGate(true)} />
            </div>
          )}

          {!isAuthenticated && (
            <div className="mb-5 text-center py-4 rounded-xl bg-purple-500/[0.04] border border-purple-500/15">
              <Icons.MessageCircle className="w-6 h-6 text-purple-400/20 mx-auto mb-2" />
              <p className="text-sm text-white/40">
                <button onClick={login} className="text-purple-400 hover:text-purple-300 font-medium">{t('discussions.signIn', 'Sign in')}</button> {t('discussions.signInToDiscuss', 'to join the discussion')}
              </p>
            </div>
          )}

          {post.isLocked && (
            <div className="mb-5 text-center py-3 rounded-xl bg-yellow-500/[0.04] border border-yellow-500/15">
              <p className="text-xs text-yellow-400/50 flex items-center justify-center gap-1.5">
                <Icons.Lock className="w-3.5 h-3.5" /> {t('discussions.postLocked', 'This post is locked. No new comments allowed.')}
              </p>
            </div>
          )}

          {/* Empty state */}
          {comments.length === 0 && (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-3">
                <Icons.MessageCircle className="w-5 h-5 text-white/10" />
              </div>
              <p className="text-sm text-white/25">{t('discussions.noCommentsYet', 'No comments yet')}</p>
              <p className="text-[11px] text-white/15 mt-0.5">{t('discussions.beFirstToComment', 'Be the first to share your thoughts')}</p>
            </div>
          )}

          {/* Comment Thread */}
          {comments.length > 0 && (
            <CommentThread
              comments={commentSort === 'new' ? [...comments].reverse() : comments}
              onVote={handleVote}
              onReply={handleAddComment}
              onDelete={handleDeleteComment}
              currentUserId={user?.id}
              isAdmin={isAdmin}
              isLocked={post.isLocked}
              voting={voting}
              onShowPremium={() => setShowPremiumGate(true)}
            />
          )}
        </div>
      </div>

      {/* User popover */}
      {popoverUser && (
        <UserPopover
          user={popoverUser}
          position={popoverPos}
          onClose={() => setPopoverUser(null)}
          onSendDMRequest={handleSendDMRequest}
          onBlock={handleBlockUser}
          onReport={() => {}}
          onViewProfile={onViewProfile}
        />
      )}

      {/* Delete confirmation dialog */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setDeleteConfirm(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl shadow-black/50 p-6 animate-[scaleIn_0.2s_ease-out]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                <Icons.Trash className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">
                {deleteConfirm.type === 'post' ? t('discussions.deletePostQuestion', 'Delete Post?') : t('discussions.deleteCommentQuestion', 'Delete Comment?')}
              </h3>
              <p className="text-sm text-white/35 mb-6 leading-relaxed">
                {deleteConfirm.type === 'post'
                  ? t('discussions.deletePostMessage', 'This cannot be undone. The post will be permanently removed.')
                  : t('discussions.deleteCommentMessage', 'This cannot be undone. The comment will be permanently removed.')}
              </p>
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-white/60
                    bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all"
                >
                  {t('common.cancel', 'Cancel')}
                </button>
                <button
                  onClick={confirmDeleteAction}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-white
                    bg-red-600 hover:bg-red-500 border border-red-500/50 shadow-lg shadow-red-500/20 transition-all"
                >
                  {t('discussions.delete', 'Delete')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Premium upgrade gate */}
      {showPremiumGate && (
        <Suspense fallback={null}>
          <PremiumGate
            onClose={() => setShowPremiumGate(false)}
            feature="daily_limit"
            source="discussions"
            returnPath="/discussions"
          />
        </Suspense>
      )}
    </div>
  );
}
