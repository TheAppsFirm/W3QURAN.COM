/**
 * DM Connection Request API
 * POST /api/dm/request — Send a DM connection request
 *   Body: { recipientId, recipientName, recipientEmail, recipientPicture }
 */

import {
  verifySession,
  handleCors, errorResponse, jsonResponse,
} from '../_helpers/auth.js';

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.DB) return errorResponse('Service unavailable', 503);

  const user = await verifySession(request, env);
  if (!user) return errorResponse('Authentication required', 401);

  try {
    const { recipientId, recipientName, recipientEmail, recipientPicture } = await request.json();

    if (!recipientId) return errorResponse('recipientId is required');
    if (!recipientName) return errorResponse('recipientName is required');
    if (recipientId === user.id) return errorResponse('You cannot send a DM request to yourself');

    // Check if recipient exists
    const recipient = await env.DB.prepare('SELECT id FROM users WHERE id = ?').bind(recipientId).first();
    if (!recipient) return errorResponse('User not found', 404);

    // Check if recipient allows DM requests
    const recipientPrefs = await env.DB.prepare(
      'SELECT allow_dms FROM user_preferences WHERE user_id = ?'
    ).bind(recipientId).first();
    if (recipientPrefs && !recipientPrefs.allow_dms) {
      return errorResponse('This user is not accepting message requests', 403);
    }

    // Check if either user has blocked the other
    const block = await env.DB.prepare(`
      SELECT id FROM user_blocks
      WHERE (blocker_id = ? AND blocked_id = ?) OR (blocker_id = ? AND blocked_id = ?)
    `).bind(user.id, recipientId, recipientId, user.id).first();

    if (block) return errorResponse('Unable to send request', 403);

    // Check if a connection already exists between these two users (any status)
    const existing = await env.DB.prepare(`
      SELECT id, status FROM dm_connections
      WHERE (requester_id = ? AND recipient_id = ?) OR (requester_id = ? AND recipient_id = ?)
    `).bind(user.id, recipientId, recipientId, user.id).first();

    if (existing) {
      if (existing.status === 'pending') {
        return errorResponse('A pending request already exists between you and this user');
      }
      if (existing.status === 'accepted') {
        return errorResponse('You are already connected with this user');
      }
      if (existing.status === 'rejected') {
        // Allow re-requesting after a rejection — update the existing row
        await env.DB.prepare(`
          UPDATE dm_connections
          SET requester_id = ?, requester_name = ?, requester_email = ?, requester_picture = ?,
              recipient_id = ?, recipient_name = ?, recipient_email = ?, recipient_picture = ?,
              status = 'pending', updated_at = datetime('now')
          WHERE id = ?
        `).bind(
          user.id, user.name, user.email, user.picture || '',
          recipientId, recipientName, recipientEmail || '', recipientPicture || '',
          existing.id
        ).run();

        console.log(`[DM] User ${user.email} re-requested DM connection with ${recipientEmail || recipientId}`);
        return jsonResponse({ success: true, connectionId: existing.id });
      }
      if (existing.status === 'blocked') {
        return errorResponse('Unable to send request', 403);
      }
    }

    // Insert new connection request
    const result = await env.DB.prepare(`
      INSERT INTO dm_connections (requester_id, requester_name, requester_email, requester_picture,
                                  recipient_id, recipient_name, recipient_email, recipient_picture,
                                  status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending', datetime('now'), datetime('now'))
    `).bind(
      user.id, user.name, user.email, user.picture || '',
      recipientId, recipientName, recipientEmail || '', recipientPicture || ''
    ).run();

    const connectionId = result.meta?.last_row_id;

    console.log(`[DM] User ${user.email} sent DM request to ${recipientEmail || recipientId}`);

    return jsonResponse({ success: true, connectionId });
  } catch (error) {
    console.error('[DM] Request error:', error);
    return errorResponse('Failed to send DM request', 500);
  }
}

export async function onRequestOptions() {
  return handleCors();
}
