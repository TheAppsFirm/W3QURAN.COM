/**
 * CommunityWidget — Mini trending discussions feed for the home page.
 * Shows 3-5 trending posts + online count + "See All" link.
 */

import React, { useEffect } from 'react';
import { Icons } from '../common';
import { useTrending } from '../../hooks/useDiscussion';
import { SURAHS } from '../../data';

const POST_TYPE_ICONS = {
  discussion: '💬',
  reflection: '🌟',
  tafseer: '📖',
  question: '❓',
};

function timeAgo(dateStr) {
  const seconds = Math.floor((Date.now() - new Date(dateStr + 'Z').getTime()) / 1000);
  if (seconds < 60) return 'now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  return `${Math.floor(hours / 24)}d`;
}

export default function CommunityWidget({ onNavigate }) {
  const { trending, onlineCount, loading, fetchTrending } = useTrending();

  useEffect(() => {
    fetchTrending(5);
  }, [fetchTrending]);

  // Don't render if no data and not loading
  if (!loading && trending.length === 0) return null;

  return (
    <div className="mx-auto max-w-2xl px-4 mt-8 mb-6">
      <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-cyan-900/10 backdrop-blur-sm overflow-hidden shadow-lg shadow-purple-500/5">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <Icons.MessageCircle className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm text-white/90 font-semibold">Community Discussions</span>
            {onlineCount > 0 && (
              <span className="flex items-center gap-1 text-[10px] text-green-400 ml-1 bg-green-400/10 px-1.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {onlineCount} online
              </span>
            )}
          </div>
          <button
            onClick={() => onNavigate?.('discussions')}
            className="text-xs text-purple-300 hover:text-white bg-purple-500/20 hover:bg-purple-500/30 px-2.5 py-1 rounded-full transition-all flex items-center gap-1 font-medium"
          >
            See All <Icons.ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Loading */}
        {loading && trending.length === 0 && (
          <div className="flex items-center justify-center py-6">
            <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Trending posts */}
        <div className="divide-y divide-white/5">
          {trending.map(post => {
            const surah = SURAHS.find(s => s.id === post.surahId);
            return (
              <button
                key={post.id}
                onClick={() => onNavigate?.('discussions')}
                className="w-full flex items-start gap-3 px-4 py-3 hover:bg-white/[0.05] transition-colors text-left"
              >
                <span className="text-sm mt-0.5">{POST_TYPE_ICONS[post.postType] || '💬'}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-purple-300/80 font-medium">{surah?.name || `Surah ${post.surahId}`}</span>
                    <span className="text-[10px] text-white/20">·</span>
                    <span className="text-[10px] text-white/30">{timeAgo(post.createdAt)}</span>
                  </div>
                  <p className="text-sm text-white/70 truncate mt-0.5">{post.title}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-white/30 shrink-0 mt-1">
                  <span className="text-orange-400/70">▲</span>
                  <span>{post.score}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Join CTA */}
        <button
          onClick={() => onNavigate?.('discussions')}
          className="w-full py-2.5 text-center text-xs text-purple-300/80 hover:text-white border-t border-white/5 hover:bg-white/[0.03] transition-colors font-medium"
        >
          Join the conversation — ask questions, share reflections
        </button>
      </div>
    </div>
  );
}
