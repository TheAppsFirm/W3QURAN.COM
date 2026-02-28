/**
 * Block/Unblock User API
 * POST   /api/discussions/block — Block a user
 *   Body: { userId: string }
 * DELETE /api/discussions/block — Unblock a user
 *   Body: { userId: string }
 * GET    /api/discussions/block — List blocked users
 */

import {
  verifySession,
  handleCors, errorResponse, jsonResponse,
} from '../_helpers/auth.js';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') return handleCors();
  if (!env.DB) return errorResponse('Service unavailable', 503);

  const user = await verifySession(request, env);
  if (!user) return errorResponse('Authentication required', 401);

  if (request.method === 'GET') return handleList(env, user);
  if (request.method === 'POST') return handleBlock(request, env, user);
  if (request.method === 'DELETE') return handleUnblock(request, env, user);

  return errorResponse('Method not allowed', 405);
}

// ─── GET: List blocked users ─────────────────────────────────
async function handleList(env, user) {
  try {
    const result = await env.DB.prepare(`
      SELECT ub.blocked_id, u.name, u.picture, ub.created_at
      FROM user_blocks ub
      JOIN users u ON ub.blocked_id = u.id
      WHERE ub.blocker_id = ?
      ORDER BY ub.created_at DESC
    `).bind(user.id).all();

    const blocked = (result.results || []).map(r => ({
      userId: r.blocked_id,
      name: r.name,
      picture: r.picture,
      blockedAt: r.created_at,
    }));

    return jsonResponse({ blocked });
  } catch (error) {
    console.error('[Discussions] List blocks error:', error);
    return errorResponse('Failed to fetch blocked users', 500);
  }
}

// ─── POST: Block a user ──────────────────────────────────────
async function handleBlock(request, env, user) {
  try {
    const { userId } = await request.json();

    if (!userId) return errorResponse('userId is required');
    if (userId === user.id) return errorResponse('You cannot block yourself');

    // Check target user exists
    const target = await env.DB.prepare('SELECT id FROM users WHERE id = ?').bind(userId).first();
    if (!target) return errorResponse('User not found', 404);

    await env.DB.prepare(`
      INSERT INTO user_blocks (blocker_id, blocked_id)
      VALUES (?, ?)
      ON CONFLICT(blocker_id, blocked_id) DO NOTHING
    `).bind(user.id, userId).run();

    // Also reject any pending DM connections between these users
    await env.DB.prepare(`
      UPDATE dm_connections SET status = 'rejected', updated_at = datetime('now')
      WHERE status = 'pending'
      AND ((requester_id = ? AND recipient_id = ?) OR (requester_id = ? AND recipient_id = ?))
    `).bind(user.id, userId, userId, user.id).run();

    console.log(`[Discussions] User ${user.email} blocked user ${userId}`);

    return jsonResponse({ success: true, message: 'User blocked' });
  } catch (error) {
    console.error('[Discussions] Block error:', error);
    return errorResponse('Failed to block user', 500);
  }
}

// ─── DELETE: Unblock a user ──────────────────────────────────
async function handleUnblock(request, env, user) {
  try {
    const { userId } = await request.json();

    if (!userId) return errorResponse('userId is required');

    await env.DB.prepare(`
      DELETE FROM user_blocks WHERE blocker_id = ? AND blocked_id = ?
    `).bind(user.id, userId).run();

    console.log(`[Discussions] User ${user.email} unblocked user ${userId}`);

    return jsonResponse({ success: true, message: 'User unblocked' });
  } catch (error) {
    console.error('[Discussions] Unblock error:', error);
    return errorResponse('Failed to unblock user', 500);
  }
}
