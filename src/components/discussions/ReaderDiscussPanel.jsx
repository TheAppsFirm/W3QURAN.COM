/**
 * ReaderDiscussPanel — Compact discussion panel for use inside the BubbleReaderOverlay.
 * Shows a mini feed of posts + live chat toggle for the current surah.
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Icons } from '../common';
import { useAuth } from '../../contexts/AuthContext';

const API_BASE = '/api/discussions';

async function apiFetch(url, options = {}) {
  const res = await fetch(url, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  return res.json();
}

const TYPE_EMOJI = { discussion: '💬', reflection: '🌟', tafseer: '📖', question: '❓' };

function timeAgo(dateStr) {
  const seconds = Math.floor((Date.now() - new Date(dateStr + 'Z').getTime()) / 1000);
  if (seconds < 60) return 'now';
  const m = Math.floor(seconds / 60);
  if (m < 60) return `${m}m`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  return `${Math.floor(h / 24)}d`;
}

export default function ReaderDiscussPanel({ surahId, surahName, onNavigateToDiscussions }) {
  const { isAuthenticated, login } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [onlineCount, setOnlineCount] = useState(0);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiFetch(`${API_BASE}/posts?surahId=${surahId}&sort=hot&limit=5`);
      setPosts(data.posts || []);
    } catch { /* silent */ }
    setLoading(false);
  }, [surahId]);

  useEffect(() => {
    if (surahId) fetchPosts();
  }, [surahId, fetchPosts]);

  // Fetch online count from trending
  useEffect(() => {
    apiFetch(`${API_BASE}/trending?limit=1`)
      .then(data => setOnlineCount(data.onlineCount || 0))
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-3 text-sm">
      {/* Online indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-white/70 font-medium">{surahName}</span>
          {onlineCount > 0 && (
            <span className="flex items-center gap-1 text-[10px] text-green-400/60">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {onlineCount}
            </span>
          )}
        </div>
        <button
          onClick={() => onNavigateToDiscussions?.()}
          className="text-[10px] text-cyan-300/70 hover:text-cyan-200 transition-colors flex items-center gap-0.5"
        >
          Full View <Icons.ChevronRight className="w-3 h-3" />
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-6">
          <div className="w-5 h-5 border-2 border-white/40 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Posts */}
      {!loading && posts.length === 0 && (
        <div className="text-center py-6">
          <Icons.MessageCircle className="w-8 h-8 text-white/15 mx-auto mb-2" />
          <p className="text-white/30 text-xs">No discussions yet</p>
          <p className="text-white/20 text-[10px] mt-1">Be the first to start one!</p>
        </div>
      )}

      {!loading && posts.map(post => (
        <button
          key={post.id}
          onClick={() => onNavigateToDiscussions?.()}
          className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
        >
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-xs">{TYPE_EMOJI[post.postType] || '💬'}</span>
            <span className="text-white/50 text-[10px] font-medium truncate flex-1">{post.title}</span>
            <span className="text-[10px] text-white/20">{timeAgo(post.createdAt)}</span>
          </div>
          {post.body && (
            <p className="text-white/30 text-[10px] line-clamp-2 leading-relaxed">
              {post.body.substring(0, 120)}
            </p>
          )}
          <div className="flex items-center gap-3 mt-1.5 text-[10px] text-white/20">
            <span className="flex items-center gap-0.5">
              <span className="text-orange-400/50">▲</span> {post.score || 0}
            </span>
            <span className="flex items-center gap-0.5">
              <Icons.MessageCircle className="w-2.5 h-2.5" /> {post.commentCount || 0}
            </span>
            <span>{post.authorName}</span>
          </div>
        </button>
      ))}

      {/* Action buttons */}
      <div className="flex gap-2 pt-1">
        <button
          onClick={() => {
            if (!isAuthenticated) { login(); return; }
            onNavigateToDiscussions?.();
          }}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl
            bg-white/10 hover:bg-white/15 text-white/70 text-xs font-medium transition-colors"
        >
          <Icons.Plus className="w-3 h-3" />
          New Post
        </button>
        <button
          onClick={() => onNavigateToDiscussions?.()}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl
            bg-white/10 hover:bg-white/15 text-white/70 text-xs font-medium transition-colors"
        >
          <Icons.MessageCircle className="w-3 h-3" />
          Live Chat
        </button>
      </div>
    </div>
  );
}
