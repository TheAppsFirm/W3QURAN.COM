/**
 * Trending Discussions API (public, no auth needed)
 * GET /api/discussions/trending?limit=5
 * Returns top posts across all surahs for the home page community widget.
 */

import { handleCors, errorResponse, jsonResponse } from '../_helpers/auth.js';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') return handleCors();
  if (!env.DB) return errorResponse('Service unavailable', 503);
  if (request.method !== 'GET') return errorResponse('Method not allowed', 405);

  try {
    const url = new URL(request.url);
    const limit = Math.min(10, Math.max(1, parseInt(url.searchParams.get('limit'), 10) || 5));

    // Get trending posts (hot algorithm, last 7 days)
    const posts = await env.DB.prepare(`
      SELECT p.id, p.surah_id, p.user_name, p.user_picture,
             p.post_type, p.title, p.score, p.comment_count, p.created_at
      FROM discussion_posts p
      WHERE p.is_deleted = FALSE
        AND p.created_at > datetime('now', '-7 days')
      ORDER BY (p.score + 1.0) / (1.0 + (julianday('now') - julianday(p.created_at)) * 24) DESC
      LIMIT ?
    `).bind(limit).all();

    // Get online count from surah chat rooms (approximate)
    const onlineCount = await env.DB.prepare(`
      SELECT COUNT(DISTINCT user_id) as online
      FROM chat_messages
      WHERE created_at > datetime('now', '-5 minutes')
    `).first().catch(() => ({ online: 0 }));

    return jsonResponse({
      posts: (posts.results || []).map(p => ({
        id: p.id,
        surahId: p.surah_id,
        userName: p.user_name,
        userPicture: p.user_picture,
        postType: p.post_type,
        title: p.title,
        score: p.score,
        commentCount: p.comment_count,
        createdAt: p.created_at,
      })),
      onlineCount: onlineCount?.online || 0,
    });
  } catch (error) {
    console.error('[Discussions] Trending error:', error);
    // Return empty on error (non-critical feature)
    return jsonResponse({ posts: [], onlineCount: 0 });
  }
}
