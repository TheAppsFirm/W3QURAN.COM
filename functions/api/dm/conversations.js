/**
 * DM Conversations API
 * GET /api/dm/conversations — List all DM conversations for the current user
 * Returns:
 *   - pending: Array of pending requests where user is recipient
 *   - sent: Array of pending requests where user is requester
 *   - conversations: Array of accepted connections with last message info
 */

import {
  verifySession,
  handleCors, errorResponse, jsonResponse,
} from '../_helpers/auth.js';

export async function onRequestGet(context) {
  const { request, env } = context;

  if (!env.DB) return errorResponse('Service unavailable', 503);

  const user = await verifySession(request, env);
  if (!user) return errorResponse('Authentication required', 401);

  try {
    // 1. Fetch pending requests where the current user is the recipient
    const pendingResult = await env.DB.prepare(`
      SELECT id, requester_id, requester_name, requester_picture, created_at
      FROM dm_connections
      WHERE recipient_id = ? AND status = 'pending'
      ORDER BY created_at DESC
    `).bind(user.id).all();

    const pending = (pendingResult.results || []).map(r => ({
      connectionId: r.id,
      from: {
        id: r.requester_id,
        name: r.requester_name,
        picture: r.requester_picture,
      },
      createdAt: r.created_at,
    }));

    // 2. Fetch pending requests the current user has SENT
    const sentResult = await env.DB.prepare(`
      SELECT id, recipient_id, recipient_name, recipient_picture, created_at
      FROM dm_connections
      WHERE requester_id = ? AND status = 'pending'
      ORDER BY created_at DESC
    `).bind(user.id).all();

    const sent = (sentResult.results || []).map(r => ({
      connectionId: r.id,
      to: {
        id: r.recipient_id,
        name: r.recipient_name,
        picture: r.recipient_picture,
      },
      createdAt: r.created_at,
    }));

    // 3. Fetch accepted conversations with last message info
    const convoResult = await env.DB.prepare(`
      SELECT dc.*,
        (SELECT cm.message FROM chat_messages cm WHERE cm.room_type='dm' AND cm.room_id=CAST(dc.id AS TEXT) AND cm.is_deleted=0 ORDER BY cm.created_at DESC LIMIT 1) as last_message,
        (SELECT cm.created_at FROM chat_messages cm WHERE cm.room_type='dm' AND cm.room_id=CAST(dc.id AS TEXT) AND cm.is_deleted=0 ORDER BY cm.created_at DESC LIMIT 1) as last_message_at,
        (SELECT cm.user_id FROM chat_messages cm WHERE cm.room_type='dm' AND cm.room_id=CAST(dc.id AS TEXT) AND cm.is_deleted=0 ORDER BY cm.created_at DESC LIMIT 1) as last_message_sender
      FROM dm_connections dc
      WHERE (dc.requester_id = ? OR dc.recipient_id = ?) AND dc.status = 'accepted'
      ORDER BY last_message_at DESC NULLS LAST
    `).bind(user.id, user.id).all();

    const conversations = (convoResult.results || []).map(c => {
      const isRequester = c.requester_id === user.id;
      const otherUser = isRequester
        ? { id: c.recipient_id, name: c.recipient_name, picture: c.recipient_picture }
        : { id: c.requester_id, name: c.requester_name, picture: c.requester_picture };

      return {
        connectionId: c.id,
        otherUser,
        lastMessage: c.last_message ? {
          message: c.last_message,
          createdAt: c.last_message_at,
          isOwn: c.last_message_sender === user.id,
        } : null,
        unreadCount: 0,
      };
    });

    return jsonResponse({ pending, sent, conversations });
  } catch (error) {
    console.error('[DM] Conversations error:', error);
    return errorResponse('Failed to fetch conversations', 500);
  }
}

export async function onRequestOptions() {
  return handleCors();
}
