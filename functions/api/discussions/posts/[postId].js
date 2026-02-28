/**
 * Single Discussion Post API
 * GET    /api/discussions/posts/:postId — Get post with comments
 * PUT    /api/discussions/posts/:postId — Edit own post
 * DELETE /api/discussions/posts/:postId — Delete own post
 */

import {
  verifySession, verifyAdmin, getBlockedUserIds,
  handleCors, errorResponse, jsonResponse,
} from '../../_helpers/auth.js';
import { checkContent, sanitizeHtml, logIncident } from '../../_helpers/contentFilter.js';

export async function onRequest(context) {
  const { request, env, params } = context;

  if (request.method === 'OPTIONS') return handleCors();
  if (!env.DB) return errorResponse('Service unavailable', 503);

  const postId = parseInt(params.postId, 10);
  if (!postId || isNaN(postId)) return errorResponse('Invalid post ID');

  if (request.method === 'GET') return handleGet(request, env, postId);
  if (request.method === 'PUT') return handleEdit(request, env, postId);
  if (request.method === 'DELETE') return handleDelete(request, env, postId);

  return errorResponse('Method not allowed', 405);
}

// ─── GET: Full post with threaded comments ───────────────────
async function handleGet(request, env, postId) {
  try {
    const user = await verifySession(request, env);
    const blockedIds = user ? await getBlockedUserIds(env, user.id) : [];

    // Fetch the post
    const post = await env.DB.prepare(`
      SELECT id, surah_id, user_id, user_name, user_picture,
             post_type, title, body, ayah_refs, score,
             comment_count, is_pinned, is_locked, created_at, updated_at
      FROM discussion_posts
      WHERE id = ? AND is_deleted = FALSE
    `).bind(postId).first();

    if (!post) return errorResponse('Post not found', 404);

    // Check if post author is blocked
    if (blockedIds.includes(post.user_id)) {
      return errorResponse('Post not found', 404);
    }

    // Get user's vote on this post
    let userVote = 0;
    if (user) {
      const vote = await env.DB.prepare(`
        SELECT vote FROM discussion_votes
        WHERE user_id = ? AND target_type = 'post' AND target_id = ?
      `).bind(user.id, postId).first();
      userVote = vote?.vote || 0;
    }

    // Fetch all comments for this post (we'll build the tree in JS)
    let commentWhere = 'WHERE c.post_id = ? AND c.is_deleted = FALSE';
    const commentParams = [postId];

    if (blockedIds.length > 0) {
      commentWhere += ` AND c.user_id NOT IN (${blockedIds.map(() => '?').join(',')})`;
      commentParams.push(...blockedIds);
    }

    const comments = await env.DB.prepare(`
      SELECT c.id, c.post_id, c.parent_id, c.depth, c.user_id,
             c.user_name, c.user_picture, c.body, c.score, c.created_at
      FROM discussion_comments c
      ${commentWhere}
      ORDER BY c.score DESC, c.created_at ASC
    `).bind(...commentParams).all();

    // Get user's votes on comments
    let commentVotes = {};
    if (user && comments.results?.length) {
      const commentIds = comments.results.map(c => c.id);
      const votesResult = await env.DB.prepare(`
        SELECT target_id, vote FROM discussion_votes
        WHERE user_id = ? AND target_type = 'comment'
        AND target_id IN (${commentIds.map(() => '?').join(',')})
      `).bind(user.id, ...commentIds).all();

      for (const v of (votesResult.results || [])) {
        commentVotes[v.target_id] = v.vote;
      }
    }

    // Fetch tags for this post
    let postTags = [];
    try {
      const tagsResult = await env.DB.prepare(`
        SELECT dt.id, dt.name, dt.slug, dt.icon, dt.color
        FROM post_tags pt
        JOIN discussion_tags dt ON dt.id = pt.tag_id
        WHERE pt.post_id = ?
      `).bind(postId).all();
      postTags = (tagsResult.results || []).map(t => ({
        id: t.id, name: t.name, slug: t.slug, icon: t.icon, color: t.color,
      }));
    } catch { /* tag tables may not exist yet */ }

    // Build threaded comment tree
    const commentMap = {};
    const topLevelComments = [];

    for (const c of (comments.results || [])) {
      const formatted = {
        id: c.id,
        parentId: c.parent_id,
        depth: c.depth,
        userId: c.user_id,
        userName: c.user_name,
        userPicture: c.user_picture,
        body: c.body,
        score: c.score,
        userVote: commentVotes[c.id] || 0,
        createdAt: c.created_at,
        replies: [],
      };
      commentMap[c.id] = formatted;

      if (c.parent_id && commentMap[c.parent_id]) {
        commentMap[c.parent_id].replies.push(formatted);
      } else {
        topLevelComments.push(formatted);
      }
    }

    return jsonResponse({
      post: {
        id: post.id,
        surahId: post.surah_id,
        userId: post.user_id,
        userName: post.user_name,
        userPicture: post.user_picture,
        postType: post.post_type,
        title: post.title,
        body: post.body,
        ayahRefs: post.ayah_refs ? JSON.parse(post.ayah_refs) : [],
        score: post.score,
        commentCount: post.comment_count,
        tags: postTags,
        isPinned: !!post.is_pinned,
        isLocked: !!post.is_locked,
        userVote,
        createdAt: post.created_at,
        updatedAt: post.updated_at,
      },
      comments: topLevelComments,
    });
  } catch (error) {
    console.error('[Discussions] Get post error:', error);
    return errorResponse('Failed to fetch post', 500);
  }
}

// ─── PUT: Edit own post ──────────────────────────────────────
async function handleEdit(request, env, postId) {
  const user = await verifySession(request, env);
  if (!user) return errorResponse('Authentication required', 401);

  try {
    const post = await env.DB.prepare(
      `SELECT user_id FROM discussion_posts WHERE id = ? AND is_deleted = FALSE`
    ).bind(postId).first();

    if (!post) return errorResponse('Post not found', 404);
    if (post.user_id !== user.id) return errorResponse('You can only edit your own posts', 403);

    const { title, body } = await request.json();

    if (!title?.trim() || title.trim().length < 5) return errorResponse('Title must be at least 5 characters');
    if (title.trim().length > 200) return errorResponse('Title too long (max 200 characters)');
    if (!body?.trim() || body.trim().length < 10) return errorResponse('Body must be at least 10 characters');
    if (body.trim().length > 5000) return errorResponse('Body too long (max 5000 characters)');

    const cleanTitle = sanitizeHtml(title.trim());
    const cleanBody = sanitizeHtml(body.trim());

    // Content filter
    const filterResult = await checkContent(env, cleanTitle + ' ' + cleanBody);
    if (filterResult.severity === 'block') {
      await logIncident(env, {
        userId: user.id, userName: user.name, userEmail: user.email,
        contentType: 'post_edit', contentPreview: (cleanTitle + ' ' + cleanBody).substring(0, 200),
        matchedKeywords: filterResult.matched, severity: 'block',
      });
      return errorResponse('Your edit contains prohibited language', 403);
    }

    if (filterResult.severity === 'flag') {
      await logIncident(env, {
        userId: user.id, userName: user.name, userEmail: user.email,
        contentType: 'post_edit', contentPreview: (cleanTitle + ' ' + cleanBody).substring(0, 200),
        matchedKeywords: filterResult.matched, severity: 'flag',
      });
    }

    await env.DB.prepare(`
      UPDATE discussion_posts
      SET title = ?, body = ?, updated_at = datetime('now')
      WHERE id = ?
    `).bind(cleanTitle, cleanBody, postId).run();

    return jsonResponse({ success: true, title: cleanTitle, body: cleanBody });
  } catch (error) {
    console.error('[Discussions] Edit post error:', error);
    return errorResponse('Failed to edit post', 500);
  }
}

// ─── DELETE: Delete own post (or admin delete) ───────────────
async function handleDelete(request, env, postId) {
  const authResult = await verifyAdmin(request, env);
  if (!authResult) return errorResponse('Authentication required', 401);

  const { user, isAdmin } = authResult;

  try {
    // Get the post
    const post = await env.DB.prepare(`
      SELECT user_id FROM discussion_posts WHERE id = ? AND is_deleted = FALSE
    `).bind(postId).first();

    if (!post) return errorResponse('Post not found', 404);

    // Only the author or admin can delete
    if (post.user_id !== user.id && !isAdmin) {
      return errorResponse('You can only delete your own posts', 403);
    }

    const deletedBy = post.user_id === user.id ? 'user' : 'admin';

    // Soft delete
    await env.DB.prepare(`
      UPDATE discussion_posts
      SET is_deleted = TRUE, deleted_by = ?, updated_at = datetime('now')
      WHERE id = ?
    `).bind(deletedBy, postId).run();

    console.log(`[Discussions] Post ${postId} deleted by ${deletedBy} (${user.email})`);

    return jsonResponse({ success: true, message: 'Post deleted' });
  } catch (error) {
    console.error('[Discussions] Delete post error:', error);
    return errorResponse('Failed to delete post', 500);
  }
}
