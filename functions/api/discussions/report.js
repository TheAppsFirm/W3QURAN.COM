/**
 * Report Content API
 * POST /api/discussions/report — Report a post, comment, chat message, or user
 *   Body: { targetType: 'post'|'comment'|'chat_message'|'user', targetId, reason, details? }
 */

import {
  verifySession, isDiscussionBanned,
  handleCors, errorResponse, jsonResponse,
} from '../_helpers/auth.js';

const VALID_REASONS = ['spam', 'offensive', 'misinformation', 'harassment', 'other'];
const VALID_TARGET_TYPES = ['post', 'comment', 'chat_message', 'user'];

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') return handleCors();
  if (!env.DB) return errorResponse('Service unavailable', 503);
  if (request.method !== 'POST') return errorResponse('Method not allowed', 405);

  const user = await verifySession(request, env);
  if (!user) return errorResponse('Authentication required', 401);

  try {
    const body = await request.json();
    const { targetType, targetId, reason, details } = body;

    if (!VALID_TARGET_TYPES.includes(targetType)) {
      return errorResponse(`targetType must be one of: ${VALID_TARGET_TYPES.join(', ')}`);
    }

    if (!targetId) return errorResponse('targetId is required');

    if (!VALID_REASONS.includes(reason)) {
      return errorResponse(`reason must be one of: ${VALID_REASONS.join(', ')}`);
    }

    // Check for duplicate report
    const existing = await env.DB.prepare(`
      SELECT id FROM discussion_reports
      WHERE reporter_id = ? AND target_type = ? AND target_id = ? AND status = 'pending'
    `).bind(user.id, targetType, targetId).first();

    if (existing) {
      return errorResponse('You have already reported this content');
    }

    await env.DB.prepare(`
      INSERT INTO discussion_reports (reporter_id, target_type, target_id, reason, details)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      user.id,
      targetType,
      targetId,
      reason,
      details ? details.substring(0, 1000) : null,
    ).run();

    console.log(`[Discussions] Report: ${targetType} #${targetId} by ${user.email} (${reason})`);

    return jsonResponse({ success: true, message: 'Report submitted. Thank you for helping keep the community safe.' }, 201);
  } catch (error) {
    console.error('[Discussions] Report error:', error);
    return errorResponse('Failed to submit report', 500);
  }
}
