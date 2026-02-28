/**
 * DM Connection Respond API
 * POST /api/dm/respond — Accept, reject, or block a DM request
 *   Body: { connectionId, action } where action is 'accept', 'reject', or 'block'
 */

import {
  verifySession,
  handleCors, errorResponse, jsonResponse,
} from '../_helpers/auth.js';

const VALID_ACTIONS = ['accept', 'reject', 'block'];
const ACTION_TO_STATUS = {
  accept: 'accepted',
  reject: 'rejected',
  block: 'blocked',
};

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.DB) return errorResponse('Service unavailable', 503);

  const user = await verifySession(request, env);
  if (!user) return errorResponse('Authentication required', 401);

  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return errorResponse('Invalid JSON body', 400);
    }
    const { connectionId, action } = body;

    if (!connectionId) return errorResponse('connectionId is required');
    if (!action || !VALID_ACTIONS.includes(action)) {
      return errorResponse('action must be one of: accept, reject, block');
    }

    // Fetch the connection
    const connection = await env.DB.prepare(`
      SELECT id, requester_id, recipient_id, status
      FROM dm_connections WHERE id = ?
    `).bind(connectionId).first();

    if (!connection) return errorResponse('Connection not found', 404);

    // Only the recipient can respond to a request
    if (connection.recipient_id !== user.id) {
      return errorResponse('Only the recipient can respond to this request', 403);
    }

    // Can only respond to pending requests
    if (connection.status !== 'pending') {
      return errorResponse(`This request has already been ${connection.status}`);
    }

    const newStatus = ACTION_TO_STATUS[action];

    // Update the connection status
    await env.DB.prepare(`
      UPDATE dm_connections SET status = ?, updated_at = datetime('now')
      WHERE id = ?
    `).bind(newStatus, connectionId).run();

    // If blocking, also insert into user_blocks
    if (action === 'block') {
      await env.DB.prepare(`
        INSERT INTO user_blocks (blocker_id, blocked_id, created_at)
        VALUES (?, ?, datetime('now'))
        ON CONFLICT(blocker_id, blocked_id) DO NOTHING
      `).bind(user.id, connection.requester_id).run();

      console.log(`[DM] User ${user.email} blocked user ${connection.requester_id} via DM request`);
    }

    console.log(`[DM] User ${user.email} ${action}ed DM connection ${connectionId}`);

    return jsonResponse({ success: true });
  } catch (error) {
    console.error('[DM] Respond error:', error);
    return errorResponse('Failed to respond to DM request', 500);
  }
}

export async function onRequestOptions() {
  return handleCors();
}
