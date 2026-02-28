/**
 * CommentThread — Nested threaded comments (up to 3 levels).
 */

import React, { useState } from 'react';
import VoteButton from './VoteButton';
import CommentInput from './CommentInput';
import RichPostBody from './RichPostBody';

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

function Comment({ comment, depth = 0, onVote, onReply, onDelete, currentUserId, isAdmin, isLocked, voting }) {
  const [showReply, setShowReply] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const canReply = depth < 2 && !isLocked;

  const handleReply = async (body) => {
    await onReply(body, comment.id);
    setShowReply(false);
  };

  return (
    <div className={`${depth > 0 ? 'ml-4 pl-3 border-l border-white/10' : ''}`}>
      <div className="py-2">
        {/* Comment header */}
        <div className="flex items-center gap-2 mb-1">
          {comment.userPicture ? (
            <img src={comment.userPicture} alt="" className="w-5 h-5 rounded-full" referrerPolicy="no-referrer" />
          ) : (
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[9px] font-bold">
              {(comment.userName || '?')[0]}
            </div>
          )}
          <span className="text-xs text-white/70 font-medium">{comment.userName}</span>
          <span className="text-[10px] text-white/30">·</span>
          <span className="text-[10px] text-white/30">{timeAgo(comment.createdAt)}</span>
        </div>

        {/* Comment body */}
        {!collapsed && (
          <>
            <div className="ml-7">
              <RichPostBody text={comment.body} />
            </div>

            {/* Comment actions */}
            <div className="flex items-center gap-3 ml-7 mt-1">
              <VoteButton
                score={comment.score}
                userVote={comment.userVote}
                onVote={(v) => onVote?.('comment', comment.id, v)}
                size="sm"
                disabled={!!voting}
              />

              {canReply && (
                <button
                  onClick={() => setShowReply(!showReply)}
                  className="text-xs text-white/30 hover:text-purple-400 transition-colors"
                >
                  Reply
                </button>
              )}

              {(comment.userId === currentUserId || isAdmin) && (
                <button
                  onClick={() => onDelete?.(comment.id)}
                  className="text-xs text-white/20 hover:text-red-400 transition-colors"
                >
                  Delete
                </button>
              )}

              {comment.replies?.length > 0 && (
                <button
                  onClick={() => setCollapsed(!collapsed)}
                  className="text-xs text-white/30 hover:text-white/50 transition-colors"
                >
                  {collapsed ? `Show ${comment.replies.length} replies` : 'Collapse'}
                </button>
              )}
            </div>

            {/* Reply input */}
            {showReply && (
              <div className="ml-7 mt-2">
                <CommentInput
                  onSubmit={handleReply}
                  placeholder={`Reply to ${comment.userName}...`}
                  compact
                />
              </div>
            )}
          </>
        )}

        {collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            className="text-xs text-purple-400/60 hover:text-purple-400 ml-7 transition-colors"
          >
            [+] Show {comment.replies?.length || 0} replies
          </button>
        )}
      </div>

      {/* Nested replies */}
      {!collapsed && comment.replies?.map(reply => (
        <Comment
          key={reply.id}
          comment={reply}
          depth={depth + 1}
          onVote={onVote}
          onReply={onReply}
          onDelete={onDelete}
          currentUserId={currentUserId}
          isAdmin={isAdmin}
          isLocked={isLocked}
          voting={voting}
        />
      ))}
    </div>
  );
}

export default function CommentThread({ comments, onVote, onReply, onDelete, currentUserId, isAdmin, isLocked, voting }) {
  if (!comments || comments.length === 0) {
    return (
      <div className="text-center py-6 text-white/30 text-sm">
        No comments yet. Be the first to share your thoughts.
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          onVote={onVote}
          onReply={onReply}
          onDelete={onDelete}
          currentUserId={currentUserId}
          isAdmin={isAdmin}
          isLocked={isLocked}
          voting={voting}
        />
      ))}
    </div>
  );
}
