/**
 * useDiscussion.js
 * Hook for discussion board state management and API calls.
 */

import { useState, useCallback, useRef } from 'react';

const API_BASE = '/api/discussions';

/**
 * Generic fetch with session cookie and JSON parsing.
 */
async function apiFetch(path, options = {}) {
  const { signal, ...rest } = options;
  const res = await fetch(path, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json', ...rest.headers },
    signal,
    ...rest,
  });
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.error || 'Request failed');
    error.status = res.status;
    error.data = data;
    throw error;
  }
  return data;
}

// ─── Posts Hook ──────────────────────────────────────────────

export function useDiscussionPosts(surahId) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({ page: 1, total: 0, totalPages: 0 });
  const [sort, setSort] = useState('hot');
  const abortRef = useRef(null);

  const fetchPosts = useCallback(async (opts = {}) => {
    if (!surahId) return;
    // Abort any in-flight request
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);
    try {
      const page = opts.page || 1;
      const sortBy = opts.sort || sort;
      const type = opts.type || 'all';
      const params = new URLSearchParams({
        surah: surahId, sort: sortBy, page, limit: 20, type,
      });
      if (opts.tag) params.set('tag', opts.tag);
      const data = await apiFetch(`${API_BASE}/posts?${params}`, { signal: controller.signal });
      setPosts(prev => page === 1 ? data.posts : [...prev, ...data.posts]);
      setPagination(data.pagination);
      if (opts.sort) setSort(opts.sort);
    } catch (err) {
      if (err.name === 'AbortError') return;
      setError(err.message);
    } finally {
      if (!controller.signal.aborted) setLoading(false);
    }
  }, [surahId, sort]);

  const createPost = useCallback(async ({ postType, title, content, ayahRefs, tags }) => {
    const data = await apiFetch(`${API_BASE}/posts`, {
      method: 'POST',
      body: JSON.stringify({ surahId, postType, title, content, ayahRefs, tags }),
    });
    return data;
  }, [surahId]);

  return {
    posts, loading, error, pagination, sort,
    fetchPosts, createPost, setSort, setPosts,
  };
}

// ─── Single Post Hook ────────────────────────────────────────

export function usePostDetail(postId) {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = useCallback(async (opts = {}) => {
    if (!postId) return;
    if (!opts.silent) {
      setLoading(true);
      setError(null);
    }
    try {
      const data = await apiFetch(`${API_BASE}/posts/${postId}`);
      setPost(data.post);
      setComments(data.comments);
    } catch (err) {
      if (!opts.silent) setError(err.message);
    } finally {
      if (!opts.silent) setLoading(false);
    }
  }, [postId]);

  const addComment = useCallback(async (body, parentId = null) => {
    const data = await apiFetch(`${API_BASE}/comments`, {
      method: 'POST',
      body: JSON.stringify({ postId, parentId, body }),
    });
    return data;
  }, [postId]);

  const editPost = useCallback(async (title, body) => {
    return apiFetch(`${API_BASE}/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, body }),
    });
  }, [postId]);

  const deletePost = useCallback(async () => {
    return apiFetch(`${API_BASE}/posts/${postId}`, { method: 'DELETE' });
  }, [postId]);

  const deleteComment = useCallback(async (commentId) => {
    return apiFetch(`${API_BASE}/comments/${commentId}`, { method: 'DELETE' });
  }, []);

  return {
    post, comments, loading, error,
    fetchPost, addComment, editPost, deletePost, deleteComment,
    setPost, setComments,
  };
}

// ─── Vote Hook ───────────────────────────────────────────────

export function useVote() {
  const [voting, setVoting] = useState(null); // target being voted on

  const vote = useCallback(async (targetType, targetId, voteValue) => {
    setVoting(`${targetType}-${targetId}`);
    try {
      const data = await apiFetch(`${API_BASE}/vote`, {
        method: 'POST',
        body: JSON.stringify({ targetType, targetId, vote: voteValue }),
      });
      return data; // { score, userVote }
    } finally {
      setVoting(null);
    }
  }, []);

  return { vote, voting };
}

// ─── Trending Hook ──────────────────────────────────────────

export function useTrending() {
  const [trending, setTrending] = useState([]);
  const [onlineCount, setOnlineCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchTrending = useCallback(async (limit = 5) => {
    setLoading(true);
    try {
      const data = await apiFetch(`${API_BASE}/trending?limit=${limit}`);
      setTrending(data.posts || []);
      setOnlineCount(data.onlineCount || 0);
    } catch {
      // Non-critical, fail silently
    } finally {
      setLoading(false);
    }
  }, []);

  return { trending, onlineCount, loading, fetchTrending };
}

// ─── Rooms Hook ─────────────────────────────────────────────

export function useRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRooms = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiFetch(`${API_BASE}/rooms`);
      setRooms(data.rooms || []);
    } catch {
      // Fail silently
    } finally {
      setLoading(false);
    }
  }, []);

  return { rooms, loading, fetchRooms };
}

// ─── Block Hook ─────────────────────────────────────────────

export function useBlock() {
  const blockUser = useCallback(async (userId) => {
    return apiFetch(`${API_BASE}/block`, {
      method: 'POST',
      body: JSON.stringify({ userId }),
    });
  }, []);

  const unblockUser = useCallback(async (userId) => {
    return apiFetch(`${API_BASE}/block`, {
      method: 'DELETE',
      body: JSON.stringify({ userId }),
    });
  }, []);

  const fetchBlocked = useCallback(async () => {
    return apiFetch(`${API_BASE}/block`);
  }, []);

  return { blockUser, unblockUser, fetchBlocked };
}

// ─── Tags Hook ─────────────────────────────────────────────

export function useTags() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTags = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiFetch(`${API_BASE}/tags`);
      setTags(data.tags || []);
    } catch {
      // Fail silently
    } finally {
      setLoading(false);
    }
  }, []);

  return { tags, loading, fetchTags };
}

// ─── Report Hook ────────────────────────────────────────────

export function useReport() {
  const report = useCallback(async (targetType, targetId, reason, details) => {
    return apiFetch(`${API_BASE}/report`, {
      method: 'POST',
      body: JSON.stringify({ targetType, targetId, reason, details }),
    });
  }, []);

  return { report };
}
