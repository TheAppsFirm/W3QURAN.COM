/**
 * Single Comment API
 * DELETE /api/discussions/comments/:commentId — Delete own comment (or admin)
 */

import {
  verifyAdmin,
  handleCors, errorResponse, jsonResponse,
} from '../../_helpers/auth.js';

export async function onRequest(context) {
  const { request, env, params } = context;

  if (request.method === 'OPTIONS') return handleCors();
  if (!env.DB) return errorResponse('Service unavailable', 503);
  if (request.method !== 'DELETE') return errorResponse('Method not allowed', 405);

  const commentId = parseInt(params.commentId, 10);
  if (!commentId || isNaN(commentId)) return errorResponse('Invalid comment ID');

  const authResult = await verifyAdmin(request, env);
  if (!authResult) return errorResponse('Authentication required', 401);

  const { user, isAdmin } = authResult;

  try {
    const comment = await env.DB.prepare(`
      SELECT id, post_id, user_id FROM discussion_comments
      WHERE id = ? AND is_deleted = FALSE
    `).bind(commentId).first();

    if (!comment) return errorResponse('Comment not found', 404);

    if (comment.user_id !== user.id && !isAdmin) {
      return errorResponse('You can only delete your own comments', 403);
    }

    const deletedBy = comment.user_id === user.id ? 'user' : 'admin';

    // Soft delete comment and decrement post comment count
    await env.DB.batch([
      env.DB.prepare(`
        UPDATE discussion_comments SET is_deleted = TRUE, deleted_by = ?
        WHERE id = ?
      `).bind(deletedBy, commentId),
      env.DB.prepare(`
        UPDATE discussion_posts SET comment_count = MAX(0, comment_count - 1), updated_at = datetime('now')
        WHERE id = ?
      `).bind(comment.post_id),
    ]);

    console.log(`[Discussions] Comment ${commentId} deleted by ${deletedBy} (${user.email})`);

    return jsonResponse({ success: true, message: 'Comment deleted' });
  } catch (error) {
    console.error('[Discussions] Delete comment error:', error);
    return errorResponse('Failed to delete comment', 500);
  }
}
