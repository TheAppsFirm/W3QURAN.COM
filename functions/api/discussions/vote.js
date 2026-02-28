/**
 * Discussion Vote API
 * POST /api/discussions/vote — Upvote or downvote a post or comment
 *   Body: { targetType: 'post'|'comment', targetId: number, vote: 1|-1|0 }
 *   vote=0 removes the vote
 */

import {
  verifySession, isDiscussionBanned,
  handleCors, errorResponse, jsonResponse,
} from '../_helpers/auth.js';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') return handleCors();
  if (!env.DB) return errorResponse('Service unavailable', 503);
  if (request.method !== 'POST') return errorResponse('Method not allowed', 405);

  const user = await verifySession(request, env);
  if (!user) return errorResponse('Authentication required', 401);

  // Check ban
  const banStatus = await isDiscussionBanned(env, user.id);
  if (banStatus.banned) return errorResponse('You are banned from discussions', 403);

  try {
    const body = await request.json();
    const { targetType, targetId, vote } = body;

    // Validate
    if (!['post', 'comment'].includes(targetType)) {
      return errorResponse('targetType must be "post" or "comment"');
    }

    if (!targetId || typeof targetId !== 'number') {
      return errorResponse('Valid targetId is required');
    }

    if (![1, -1, 0].includes(vote)) {
      return errorResponse('Vote must be 1 (upvote), -1 (downvote), or 0 (remove)');
    }

    // Verify target exists
    const table = targetType === 'post' ? 'discussion_posts' : 'discussion_comments';
    const target = await env.DB.prepare(
      `SELECT id, user_id, score FROM ${table} WHERE id = ? AND is_deleted = FALSE`
    ).bind(targetId).first();

    if (!target) return errorResponse(`${targetType} not found`, 404);

    // Prevent self-voting
    if (target.user_id === user.id) {
      return errorResponse('You cannot vote on your own content');
    }

    // Get existing vote
    const existing = await env.DB.prepare(`
      SELECT vote FROM discussion_votes
      WHERE user_id = ? AND target_type = ? AND target_id = ?
    `).bind(user.id, targetType, targetId).first();

    const oldVote = existing?.vote || 0;

    if (oldVote === vote) {
      // No change needed
      return jsonResponse({ score: target.score, userVote: vote });
    }

    // Calculate score change
    const scoreDelta = vote - oldVote;

    // Use a batch for atomicity
    const statements = [];

    if (vote === 0) {
      // Remove vote
      statements.push(
        env.DB.prepare(`
          DELETE FROM discussion_votes
          WHERE user_id = ? AND target_type = ? AND target_id = ?
        `).bind(user.id, targetType, targetId)
      );
    } else {
      // Upsert vote
      statements.push(
        env.DB.prepare(`
          INSERT INTO discussion_votes (user_id, target_type, target_id, vote)
          VALUES (?, ?, ?, ?)
          ON CONFLICT(user_id, target_type, target_id) DO UPDATE SET vote = ?
        `).bind(user.id, targetType, targetId, vote, vote)
      );
    }

    // Update score on target
    statements.push(
      env.DB.prepare(
        `UPDATE ${table} SET score = score + ? WHERE id = ?`
      ).bind(scoreDelta, targetId)
    );

    await env.DB.batch(statements);

    const newScore = target.score + scoreDelta;

    return jsonResponse({
      score: newScore,
      userVote: vote,
    });
  } catch (error) {
    console.error('[Discussions] Vote error:', error);
    return errorResponse('Failed to vote', 500);
  }
}
