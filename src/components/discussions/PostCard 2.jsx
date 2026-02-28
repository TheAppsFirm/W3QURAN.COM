/**
 * PostCard — Card-based post display for the discussion feed.
 */

import React, { useState } from 'react';
import { Icons } from '../common';
import VoteButton from './VoteButton';
import AyahReference from './AyahReference';
import UserPopover from './UserPopover';
import { stripQuranQuotes } from './quranQuoteUtils';

const POST_TYPE_CONFIG = {
  discussion: { label: 'Discussion', color: 'text-cyan-400', bg: 'bg-cyan-500/15', border: 'border-cyan-500/30' },
  reflection: { label: 'Reflection', color: 'text-yellow-400', bg: 'bg-yellow-500/15', border: 'border-yellow-500/30' },
  tafseer:    { label: 'Tafseer', color: 'text-purple-400', bg: 'bg-purple-500/15', border: 'border-purple-500/30' },
  question:   { label: 'Question', color: 'text-green-400', bg: 'bg-green-500/15', border: 'border-green-500/30' },
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
  return `${months}mo ago`;
}

export default function PostCard({ post, onVote, onOpenPost, onOpenAyah, onDelete, currentUserId, voting, isAdmin, onAdminAction, onViewProfile }) {
  const typeConfig = POST_TYPE_CONFIG[post.postType] || POST_TYPE_CONFIG.discussion;
  const [popoverUser, setPopoverUser] = useState(null);
  const [popoverPos, setPopoverPos] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isOwner = currentUserId && post.userId === currentUserId;

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    setDeleting(true);
    try {
      const res = await fetch(`/api/discussions/posts/${post.id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (res.ok) {
        onDelete?.(post.id);
      }
    } catch { /* handled */ }
    setDeleting(false);
    setShowDeleteModal(false);
  };

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

  const handleBlock = async (targetUser) => {
    try {
      await fetch('/api/discussions/block', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ userId: targetUser.id }),
      });
    } catch { /* handled */ }
  };

  return (
    <div
      className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm
        hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-pointer"
      onClick={() => onOpenPost?.(post.id)}
    >
      {/* Pinned indicator */}
      {post.isPinned && (
        <div className="absolute -top-2 right-3 px-2 py-0.5 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-[10px] font-bold">
          PINNED
        </div>
      )}

      <div className="p-4">
        {/* Header: User + Type + Time */}
        <div className="flex items-center gap-2 mb-2">
          {/* Avatar */}
          {post.userPicture ? (
            <img src={post.userPicture} alt="" className="w-7 h-7 rounded-full cursor-pointer hover:ring-2 hover:ring-purple-400/50 transition-all" referrerPolicy="no-referrer" onClick={handleUserClick} />
          ) : (
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:ring-2 hover:ring-purple-400/50 transition-all" onClick={handleUserClick}>
              {(post.userName || '?')[0]}
            </div>
          )}
          <span className="text-sm text-white/80 font-medium cursor-pointer hover:text-purple-300 transition-colors" onClick={handleUserClick}>{post.userName}</span>
          <span className="text-xs text-white/30">·</span>
          <span className="text-xs text-white/40">{timeAgo(post.createdAt)}</span>

          {/* Post type badge */}
          <span className={`ml-auto px-2 py-0.5 rounded-full text-[10px] font-semibold border
            ${typeConfig.bg} ${typeConfig.border} ${typeConfig.color}`}>
            {typeConfig.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-base leading-snug mb-1 group-hover:text-purple-300 transition-colors">
          {post.title}
        </h3>

        {/* Body preview */}
        <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
          {stripQuranQuotes(post.body)}
        </p>

        {/* Tag pills */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1.5">
            {post.tags.map(tag => (
              <span key={tag.id} className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-medium border"
                style={{ backgroundColor: tag.color + '15', color: tag.color, borderColor: tag.color + '30' }}>
                {tag.icon} {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Ayah refs */}
        <div onClick={e => e.stopPropagation()}>
          <AyahReference refs={post.ayahRefs} onOpenAyah={onOpenAyah} />
        </div>

        {/* Footer: Votes + Comments + Locked */}
        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-white/5">
          <div onClick={e => e.stopPropagation()}>
            <VoteButton
              score={post.score}
              userVote={post.userVote}
              onVote={(v) => onVote?.(post.id, v)}
              disabled={!!voting}
            />
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 text-sm">
            <Icons.MessageCircle className="w-4 h-4" />
            <span>{post.commentCount}</span>
          </div>

          {post.isLocked && (
            <div className="flex items-center gap-1 text-yellow-500/60 text-xs">
              <Icons.Lock className="w-3 h-3" />
              <span>Locked</span>
            </div>
          )}

          {/* 3-dot menu for owner + admin */}
          {(isOwner || isAdmin) && (
            <div className="ml-auto relative" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="w-7 h-7 flex items-center justify-center rounded-lg text-white/20 hover:text-white/50 hover:bg-white/10 transition-all"
              >
                <Icons.MoreVertical className="w-4 h-4" />
              </button>

              {showMenu && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)} />
                  <div className="absolute right-0 bottom-full mb-1 z-20 w-40 rounded-xl bg-slate-800 border border-white/10 shadow-xl shadow-black/30 overflow-hidden py-1">
                    {isOwner && (
                      <button
                        onClick={() => { setShowMenu(false); onOpenPost?.(post.id); }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white/60 hover:text-purple-300 hover:bg-purple-500/10 transition-colors"
                      >
                        <Icons.Edit className="w-3.5 h-3.5" />
                        Edit
                      </button>
                    )}
                    {isAdmin && (
                      <button
                        onClick={() => { setShowMenu(false); onAdminAction?.('pin_post', post.id, !post.isPinned); }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white/60 hover:text-yellow-300 hover:bg-yellow-500/10 transition-colors"
                      >
                        <Icons.MapPin className="w-3.5 h-3.5" />
                        {post.isPinned ? 'Unpin' : 'Pin'}
                      </button>
                    )}
                    {isAdmin && (
                      <button
                        onClick={() => { setShowMenu(false); onAdminAction?.('lock_post', post.id, !post.isLocked); }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white/60 hover:text-amber-300 hover:bg-amber-500/10 transition-colors"
                      >
                        <Icons.Lock className="w-3.5 h-3.5" />
                        {post.isLocked ? 'Unlock' : 'Lock'}
                      </button>
                    )}
                    <button
                      onClick={() => { setShowMenu(false); setShowDeleteModal(true); }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs text-white/60 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                    >
                      <Icons.Trash className="w-3.5 h-3.5" />
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
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
          onBlock={handleBlock}
          onReport={() => {}}
          onViewProfile={onViewProfile}
        />
      )}

      {/* Delete confirmation modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={(e) => { e.stopPropagation(); setShowDeleteModal(false); }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl shadow-black/50 p-6 animate-[scaleIn_0.2s_ease-out]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center mb-4">
                <Icons.Trash className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">Delete Post?</h3>
              <p className="text-sm text-white/40 mb-6">
                This action cannot be undone. Your post will be permanently removed.
              </p>
              <div className="flex gap-3 w-full">
                <button
                  onClick={(e) => { e.stopPropagation(); setShowDeleteModal(false); }}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-white/60
                    bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white/80 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); confirmDelete(); }}
                  disabled={deleting}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-white
                    bg-red-600 hover:bg-red-500 border border-red-500/50 shadow-lg shadow-red-500/20
                    transition-all disabled:opacity-50"
                >
                  {deleting ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
