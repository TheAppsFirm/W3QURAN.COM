/**
 * DM Connection Remove API
 * POST /api/dm/remove — Remove (unfriend) an accepted DM connection
 *   Body: { connectionId }
 * DELETE /api/dm/remove — Cancel a pending sent request
 *   Body: { connectionId }
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
    let body;
    try {
      body = await request.json();
    } catch {
      return errorResponse('Invalid JSON body', 400);
    }
    const { connectionId } = body;

    if (!connectionId) return errorResponse('connectionId is required');

    // Fetch the connection
    const connection = await env.DB.prepare(`
      SELECT id, requester_id, recipient_id, status
      FROM dm_connections WHERE id = ?
    `).bind(connectionId).first();

    if (!connection) return errorResponse('Connection not found', 404);

    // Only participants can remove
    if (connection.requester_id !== user.id && connection.recipient_id !== user.id) {
      return errorResponse('Not authorized', 403);
    }

    // Can only remove accepted connections or cancel pending sent requests
    if (connection.status === 'accepted') {
      // Delete the connection (unfriend)
      await env.DB.prepare('DELETE FROM dm_connections WHERE id = ?')
        .bind(connectionId).run();
      console.log(`[DM] User ${user.email} removed connection ${connectionId}`);
      return jsonResponse({ success: true });
    }

    if (connection.status === 'pending' && connection.requester_id === user.id) {
      // Cancel own sent request
      await env.DB.prepare('DELETE FROM dm_connections WHERE id = ?')
        .bind(connectionId).run();
      console.log(`[DM] User ${user.email} cancelled sent request ${connectionId}`);
      return jsonResponse({ success: true });
    }

    return errorResponse('Cannot remove this connection');
  } catch (error) {
    console.error('[DM] Remove error:', error);
    return errorResponse('Failed to remove connection', 500);
  }
}

export async function onRequestOptions() {
  return handleCors();
}
