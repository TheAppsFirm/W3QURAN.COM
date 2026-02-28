/**
 * VoteButton — Upvote/downvote controls for posts and comments.
 */

import React from 'react';

export default function VoteButton({ score, userVote, onVote, size = 'md', disabled }) {
  const isSmall = size === 'sm';
  const btnClass = isSmall ? 'w-6 h-6' : 'w-8 h-8';
  const textClass = isSmall ? 'text-xs' : 'text-sm';

  return (
    <div className="flex items-center gap-0.5">
      {/* Upvote */}
      <button
        onClick={() => onVote(userVote === 1 ? 0 : 1)}
        disabled={disabled}
        className={`${btnClass} flex items-center justify-center rounded-md transition-all
          ${userVote === 1
            ? 'text-orange-400 bg-orange-500/20'
            : 'text-slate-400 hover:text-orange-400 hover:bg-white/5'
          } disabled:opacity-50`}
        title="Upvote"
      >
        <svg viewBox="0 0 24 24" fill="none" className={isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'}>
          <path
            d="M12 4L3 15h6v5h6v-5h6L12 4z"
            fill={userVote === 1 ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Score */}
      <span className={`${textClass} font-bold min-w-[1.5rem] text-center
        ${score > 0 ? 'text-orange-400' : score < 0 ? 'text-blue-400' : 'text-slate-400'}`}>
        {score}
      </span>

      {/* Downvote */}
      <button
        onClick={() => onVote(userVote === -1 ? 0 : -1)}
        disabled={disabled}
        className={`${btnClass} flex items-center justify-center rounded-md transition-all
          ${userVote === -1
            ? 'text-blue-400 bg-blue-500/20'
            : 'text-slate-400 hover:text-blue-400 hover:bg-white/5'
          } disabled:opacity-50`}
        title="Downvote"
      >
        <svg viewBox="0 0 24 24" fill="none" className={isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'}>
          <path
            d="M12 20L3 9h6V4h6v5h6L12 20z"
            fill={userVote === -1 ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
