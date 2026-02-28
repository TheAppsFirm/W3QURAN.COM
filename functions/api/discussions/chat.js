/**
 * Chat History API (REST fallback)
 * GET /api/discussions/chat?surah=2&limit=50 — Get chat history for a surah room
 * GET /api/discussions/chat?dm=roomId&limit=50 — Get DM chat history
 */

import {
  verifySession, getBlockedUserIds,
  handleCors, errorResponse, jsonResponse,
} from '../_helpers/auth.js';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') return handleCors();
  if (!env.DB) return errorResponse('Service unavailable', 503);
  if (request.method !== 'GET') return errorResponse('Method not allowed', 405);

  try {
    const url = new URL(request.url);
    const surahId = url.searchParams.get('surah');
    const dmRoom = url.searchParams.get('dm');
    const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get('limit'), 10) || 50));
    const before = url.searchParams.get('before'); // cursor for pagination

    let roomType, roomId;
    if (surahId) {
      const sid = parseInt(surahId, 10);
      if (!sid || sid < 1 || sid > 114) return errorResponse('Invalid surah ID');
      roomType = 'surah';
      roomId = String(sid);
    } else if (dmRoom) {
      // DM rooms require authentication
      const user = await verifySession(request, env);
      if (!user) return errorResponse('Authentication required', 401);
      roomType = 'dm';
      roomId = dmRoom;
    } else {
      return errorResponse('surah or dm parameter required');
    }

    // Get blocked users for filtering
    const user = await verifySession(request, env);
    const blockedIds = user ? await getBlockedUserIds(env, user.id) : [];

    let query = `
      SELECT id, user_id, user_name, user_picture, message, reply_to_id, reactions, created_at
      FROM chat_messages
      WHERE room_type = ? AND room_id = ? AND is_deleted = FALSE
    `;
    const params = [roomType, roomId];

    if (before) {
      query += ' AND created_at < ?';
      params.push(before);
    }

    if (blockedIds.length > 0) {
      query += ` AND user_id NOT IN (${blockedIds.map(() => '?').join(',')})`;
      params.push(...blockedIds);
    }

    query += ' ORDER BY created_at DESC LIMIT ?';
    params.push(limit);

    const result = await env.DB.prepare(query).bind(...params).all();

    const messages = (result.results || []).reverse().map(m => ({
      id: m.id,
      userId: m.user_id,
      userName: m.user_name,
      userPicture: m.user_picture,
      message: m.message,
      replyToId: m.reply_to_id,
      reactions: m.reactions ? JSON.parse(m.reactions) : {},
      createdAt: m.created_at,
    }));

    return jsonResponse({ messages, roomType, roomId });
  } catch (error) {
    console.error('[Chat] History error:', error);
    return errorResponse('Failed to fetch chat history', 500);
  }
}
