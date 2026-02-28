/**
 * User Profile API
 * GET /api/user/profile/:userId — Public profile with stats, leaderboard, recent posts
 */

import {
  verifySession,
  handleCors, errorResponse, jsonResponse,
} from '../../_helpers/auth.js';

export async function onRequest(context) {
  const { request, env, params } = context;

  if (request.method === 'OPTIONS') return handleCors();
  if (!env.DB) return errorResponse('Service unavailable', 503);
  if (request.method !== 'GET') return errorResponse('Method not allowed', 405);

  const userId = params.userId;
  if (!userId) return errorResponse('User ID is required');

  try {
    // Optionally get the viewer's session (for own-profile detection)
    const viewer = await verifySession(request, env);
    const isOwnProfile = viewer?.id === userId;

    // Fetch user info
    const user = await env.DB.prepare(`
      SELECT id, name, picture, email, created_at
      FROM users WHERE id = ?
    `).bind(userId).first();

    if (!user) return errorResponse('User not found', 404);

    // Fetch privacy preferences
    let showEmail = false;
    let allowDMs = true;
    try {
      const prefs = await env.DB.prepare(
        'SELECT show_email, allow_dms FROM user_preferences WHERE user_id = ?'
      ).bind(userId).first();
      if (prefs) {
        showEmail = !!prefs.show_email;
        allowDMs = !!prefs.allow_dms;
      }
    } catch { /* table may not exist */ }

    // Compute discussion stats
    const [postCount, commentCount, postKarma, commentKarma] = await Promise.all([
      env.DB.prepare(
        'SELECT COUNT(*) as c FROM discussion_posts WHERE user_id = ? AND is_deleted = FALSE'
      ).bind(userId).first(),
      env.DB.prepare(
        'SELECT COUNT(*) as c FROM discussion_comments WHERE user_id = ? AND is_deleted = FALSE'
      ).bind(userId).first(),
      env.DB.prepare(
        'SELECT COALESCE(SUM(score), 0) as s FROM discussion_posts WHERE user_id = ? AND is_deleted = FALSE'
      ).bind(userId).first(),
      env.DB.prepare(
        'SELECT COALESCE(SUM(score), 0) as s FROM discussion_comments WHERE user_id = ? AND is_deleted = FALSE'
      ).bind(userId).first(),
    ]);

    // Connection status between viewer and this user (for DM button state)
    let connectionStatus = null; // null = no connection, 'pending' = waiting, 'accepted' = friends
    let connectionId = null;
    let connectionDirection = null; // 'sent' or 'received' (for pending)
    if (viewer && !isOwnProfile) {
      try {
        const conn = await env.DB.prepare(`
          SELECT id, status, requester_id FROM dm_connections
          WHERE ((requester_id = ? AND recipient_id = ?) OR (requester_id = ? AND recipient_id = ?))
          AND status IN ('pending', 'accepted')
        `).bind(viewer.id, userId, userId, viewer.id).first();
        if (conn) {
          connectionStatus = conn.status;
          connectionId = conn.id;
          if (conn.status === 'pending') {
            connectionDirection = conn.requester_id === viewer.id ? 'sent' : 'received';
          }
        }
      } catch { /* table may not exist */ }

      // Also check if viewer has blocked this user
      try {
        const block = await env.DB.prepare(
          'SELECT id FROM user_blocks WHERE blocker_id = ? AND blocked_id = ?'
        ).bind(viewer.id, userId).first();
        if (block) connectionStatus = 'blocked';
      } catch { /* ignore */ }
    }

    // Leaderboard data (optional — table may not exist)
    let leaderboard = null;
    try {
      const lb = await env.DB.prepare(
        'SELECT xp, level, streak, verses_read FROM leaderboard WHERE user_id = ?'
      ).bind(userId).first();
      if (lb) {
        leaderboard = {
          xp: lb.xp || 0,
          level: lb.level || 1,
          streak: lb.streak || 0,
          versesRead: lb.verses_read || 0,
        };
      }
    } catch { /* table may not exist */ }

    // Recent posts (last 10)
    const recentPosts = await env.DB.prepare(`
      SELECT id, title, post_type, surah_id, score, comment_count, created_at
      FROM discussion_posts
      WHERE user_id = ? AND is_deleted = FALSE
      ORDER BY created_at DESC
      LIMIT 10
    `).bind(userId).all();

    return jsonResponse({
      profile: {
        id: user.id,
        name: user.name,
        picture: user.picture,
        email: (showEmail || isOwnProfile) ? user.email : null,
        joinedAt: user.created_at,
        isOwnProfile,
        allowDMs,
        connectionStatus,
        connectionId,
        connectionDirection,
        stats: {
          postCount: postCount?.c || 0,
          commentCount: commentCount?.c || 0,
          totalKarma: (postKarma?.s || 0) + (commentKarma?.s || 0),
        },
        leaderboard,
        recentPosts: (recentPosts.results || []).map(p => ({
          id: p.id,
          title: p.title,
          postType: p.post_type,
          surahId: p.surah_id,
          score: p.score,
          commentCount: p.comment_count,
          createdAt: p.created_at,
        })),
      },
    });
  } catch (error) {
    console.error('[Profile] Error:', error);
    return errorResponse('Failed to fetch profile', 500);
  }
}
