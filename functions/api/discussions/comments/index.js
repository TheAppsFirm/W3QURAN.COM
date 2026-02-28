/**
 * Discussion Comments API
 * POST /api/discussions/comments — Add a comment to a post
 *   Body: { postId, parentId?, body }
 */

import {
  verifySession, isPremium, isDiscussionBanned,
  checkDailyLimit,
  handleCors, errorResponse, jsonResponse,
} from '../../_helpers/auth.js';
import { checkContent, sanitizeHtml, logIncident } from '../../_helpers/contentFilter.js';

const FREE_DAILY_LIMIT = 5;
const MAX_COMMENT_LENGTH = 2000;
const MIN_COMMENT_LENGTH = 2;
const MAX_DEPTH = 2; // 0, 1, 2 = 3 levels

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') return handleCors();
  if (!env.DB) return errorResponse('Service unavailable', 503);
  if (request.method !== 'POST') return errorResponse('Method not allowed', 405);

  const user = await verifySession(request, env);
  if (!user) return errorResponse('Authentication required', 401);

  // Check ban
  const banStatus = await isDiscussionBanned(env, user.id);
  if (banStatus.banned) {
    return errorResponse(`You are banned from discussions. Reason: ${banStatus.reason || 'Violation of community guidelines'}`, 403);
  }

  // Rate limit for free users
  const premium = await isPremium(env, user.id);
  if (!premium) {
    const usage = await checkDailyLimit(env, user.id, 'comment', FREE_DAILY_LIMIT);
    if (!usage.allowed) {
      return jsonResponse({
        error: 'Daily limit reached. Upgrade to premium for unlimited comments.',
        requiresPremium: true,
        limit: FREE_DAILY_LIMIT,
        used: usage.used,
      }, 429);
    }
  }

  try {
    const body = await request.json();
    const { postId, parentId, body: commentBody } = body;

    // Validate post exists and isn't locked
    if (!postId) return errorResponse('Post ID is required');

    const post = await env.DB.prepare(`
      SELECT id, is_locked, is_deleted FROM discussion_posts WHERE id = ?
    `).bind(postId).first();

    if (!post || post.is_deleted) return errorResponse('Post not found', 404);
    if (post.is_locked) return errorResponse('This post is locked. No new comments allowed.', 403);

    // Validate comment body
    if (!commentBody || typeof commentBody !== 'string') {
      return errorResponse('Comment body is required');
    }
    const trimmed = commentBody.trim();
    if (trimmed.length < MIN_COMMENT_LENGTH || trimmed.length > MAX_COMMENT_LENGTH) {
      return errorResponse(`Comment must be ${MIN_COMMENT_LENGTH}-${MAX_COMMENT_LENGTH} characters`);
    }

    // Handle parent comment (for replies)
    let depth = 0;
    let resolvedParentId = null;

    if (parentId) {
      const parent = await env.DB.prepare(`
        SELECT id, depth, is_deleted FROM discussion_comments WHERE id = ? AND post_id = ?
      `).bind(parentId, postId).first();

      if (!parent || parent.is_deleted) {
        return errorResponse('Parent comment not found', 404);
      }

      if (parent.depth >= MAX_DEPTH) {
        // Flatten: reply to the same parent instead of nesting deeper
        resolvedParentId = parentId;
        depth = MAX_DEPTH;
      } else {
        resolvedParentId = parentId;
        depth = parent.depth + 1;
      }
    }

    // Sanitize input
    const safeBody = sanitizeHtml(trimmed);

    // Content filter check
    const filterResult = await checkContent(env, trimmed);

    if (filterResult.severity === 'block') {
      await logIncident(env, {
        userId: user.id, userName: user.name, userEmail: user.email,
        contentType: 'comment', contentPreview: trimmed,
        matchedKeywords: filterResult.matched, severity: 'block',
      });
      return errorResponse('Your comment contains prohibited language and cannot be posted.', 403);
    }

    if (filterResult.severity === 'flag') {
      // Auto-hold: insert with is_deleted = TRUE so it's hidden until reviewed
      const result = await env.DB.prepare(`
        INSERT INTO discussion_comments (post_id, parent_id, depth, user_id, user_name, user_picture, body, is_deleted)
        VALUES (?, ?, ?, ?, ?, ?, ?, TRUE)
      `).bind(
        postId,
        resolvedParentId,
        depth,
        user.id,
        user.name || 'Anonymous',
        user.picture || null,
        safeBody,
      ).run();

      const commentId = result.meta?.last_row_id;

      await logIncident(env, {
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        contentType: 'comment',
        contentPreview: trimmed,
        matchedKeywords: filterResult.matched,
        severity: 'flag',
        targetType: 'comment',
        targetId: commentId,
      });

      console.log(`[Discussions] Flagged comment by ${user.email} on post ${postId}`);

      return jsonResponse({
        success: true,
        held: true,
        commentId,
        message: 'Your comment is under review',
      }, 201);
    }

    // Insert comment (clean content)
    const result = await env.DB.prepare(`
      INSERT INTO discussion_comments (post_id, parent_id, depth, user_id, user_name, user_picture, body)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
      postId,
      resolvedParentId,
      depth,
      user.id,
      user.name || 'Anonymous',
      user.picture || null,
      safeBody,
    ).run();

    // Increment comment count on post
    await env.DB.prepare(`
      UPDATE discussion_posts SET comment_count = comment_count + 1, updated_at = datetime('now')
      WHERE id = ?
    `).bind(postId).run();

    console.log(`[Discussions] New comment by ${user.email} on post ${postId}`);

    return jsonResponse({
      success: true,
      commentId: result.meta?.last_row_id,
      message: 'Comment added',
    }, 201);
  } catch (error) {
    console.error('[Discussions] Add comment error:', error);
    return errorResponse('Failed to add comment', 500);
  }
}
