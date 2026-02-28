/**
 * Discussion Rooms API (per surah stats)
 * GET /api/discussions/rooms — Get all surah rooms with activity stats
 * GET /api/discussions/rooms?surah=2 — Get single surah room stats
 */

import { handleCors, errorResponse, jsonResponse } from '../_helpers/auth.js';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') return handleCors();
  if (!env.DB) return errorResponse('Service unavailable', 503);
  if (request.method !== 'GET') return errorResponse('Method not allowed', 405);

  try {
    const url = new URL(request.url);
    const surahId = url.searchParams.get('surah');

    if (surahId) {
      // Single surah stats
      const sid = parseInt(surahId, 10);
      if (!sid || sid < 1 || sid > 114) return errorResponse('Invalid surah ID');

      const [postCount, recentChat] = await Promise.all([
        env.DB.prepare(
          'SELECT COUNT(*) as c FROM discussion_posts WHERE surah_id = ? AND is_deleted = FALSE'
        ).bind(sid).first(),
        env.DB.prepare(`
          SELECT COUNT(DISTINCT user_id) as active
          FROM chat_messages
          WHERE room_type = 'surah' AND room_id = ? AND created_at > datetime('now', '-5 minutes')
        `).bind(String(sid)).first().catch(() => ({ active: 0 })),
      ]);

      return jsonResponse({
        surahId: sid,
        postCount: postCount?.c || 0,
        activeUsers: recentChat?.active || 0,
      });
    }

    // All surah rooms with post counts
    const rooms = await env.DB.prepare(`
      SELECT surah_id, COUNT(*) as post_count
      FROM discussion_posts
      WHERE is_deleted = FALSE
      GROUP BY surah_id
      ORDER BY surah_id
    `).all();

    const roomMap = {};
    for (const r of (rooms.results || [])) {
      roomMap[r.surah_id] = { postCount: r.post_count, activeUsers: 0 };
    }

    // Get active chatters per surah (last 5 min)
    const activeChats = await env.DB.prepare(`
      SELECT room_id, COUNT(DISTINCT user_id) as active
      FROM chat_messages
      WHERE room_type = 'surah' AND created_at > datetime('now', '-5 minutes')
      GROUP BY room_id
    `).all().catch(() => ({ results: [] }));

    for (const c of (activeChats.results || [])) {
      const sid = parseInt(c.room_id, 10);
      if (roomMap[sid]) {
        roomMap[sid].activeUsers = c.active;
      } else {
        roomMap[sid] = { postCount: 0, activeUsers: c.active };
      }
    }

    // Return as array of 114 surahs
    const allRooms = [];
    for (let i = 1; i <= 114; i++) {
      allRooms.push({
        surahId: i,
        postCount: roomMap[i]?.postCount || 0,
        activeUsers: roomMap[i]?.activeUsers || 0,
      });
    }

    return jsonResponse({ rooms: allRooms });
  } catch (error) {
    console.error('[Discussions] Rooms error:', error);
    return errorResponse('Failed to fetch room data', 500);
  }
}
