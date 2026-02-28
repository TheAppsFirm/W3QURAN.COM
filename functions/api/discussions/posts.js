/**
 * Discussion Posts API
 * GET  /api/discussions/posts?surah=2&sort=hot&page=1&limit=20&type=all
 * POST /api/discussions/posts — Create a new post
 */

import {
  verifySession, isPremium, isDiscussionBanned,
  checkDailyLimit, getBlockedUserIds,
  handleCors, errorResponse, jsonResponse,
} from '../_helpers/auth.js';
import { checkContent, sanitizeHtml, logIncident } from '../_helpers/contentFilter.js';

const FREE_DAILY_LIMIT = 5;
const MAX_TITLE_LENGTH = 200;
const MIN_TITLE_LENGTH = 5;
const MAX_BODY_LENGTH = 5000;
const MIN_BODY_LENGTH = 10;
const VALID_POST_TYPES = ['discussion', 'reflection', 'tafseer', 'question'];
const VALID_SORTS = ['hot', 'new', 'top_week', 'top_month', 'top_all'];

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') return handleCors();

  if (!env.DB) return errorResponse('Service unavailable', 503);

  if (request.method === 'GET') return handleGet(request, env);
  if (request.method === 'POST') return handlePost(request, env);

  return errorResponse('Method not allowed', 405);
}

// ─── GET: List posts for a surah ──────────────────────────────
async function handleGet(request, env) {
  const url = new URL(request.url);
  const surahId = parseInt(url.searchParams.get('surah'), 10);
  const sort = url.searchParams.get('sort') || 'hot';
  const postType = url.searchParams.get('type') || 'all';
  const page = Math.max(1, parseInt(url.searchParams.get('page'), 10) || 1);
  const limit = Math.min(50, Math.max(1, parseInt(url.searchParams.get('limit'), 10) || 20));
  const offset = (page - 1) * limit;

  if (!surahId || surahId < 1 || surahId > 114) {
    return errorResponse('Valid surah ID (1-114) is required');
  }

  if (!VALID_SORTS.includes(sort)) {
    return errorResponse(`Invalid sort. Must be one of: ${VALID_SORTS.join(', ')}`);
  }

  try {
    // Get blocked user IDs if user is authenticated
    const user = await verifySession(request, env);
    const blockedIds = user ? await getBlockedUserIds(env, user.id) : [];

    // Build WHERE clause
    let where = 'WHERE p.surah_id = ? AND p.is_deleted = FALSE';
    const params = [surahId];

    if (postType !== 'all' && VALID_POST_TYPES.includes(postType)) {
      where += ' AND p.post_type = ?';
      params.push(postType);
    }

    // Exclude blocked users' posts
    if (blockedIds.length > 0) {
      where += ` AND p.user_id NOT IN (${blockedIds.map(() => '?').join(',')})`;
      params.push(...blockedIds);
    }

    // Build ORDER BY
    let orderBy;
    switch (sort) {
      case 'new':
        orderBy = 'p.is_pinned DESC, p.created_at DESC';
        break;
      case 'top_week':
        where += " AND p.created_at > datetime('now', '-7 days')";
        orderBy = 'p.is_pinned DESC, p.score DESC, p.created_at DESC';
        break;
      case 'top_month':
        where += " AND p.created_at > datetime('now', '-30 days')";
        orderBy = 'p.is_pinned DESC, p.score DESC, p.created_at DESC';
        break;
      case 'top_all':
        orderBy = 'p.is_pinned DESC, p.score DESC, p.created_at DESC';
        break;
      case 'hot':
      default:
        // Hot = score weighted by recency (simplified Reddit hot algorithm)
        orderBy = `p.is_pinned DESC, (p.score + 1.0) / (1.0 + (julianday('now') - julianday(p.created_at)) * 24) DESC`;
        break;
    }

    // Count total
    const countResult = await env.DB.prepare(
      `SELECT COUNT(*) as total FROM discussion_posts p ${where}`
    ).bind(...params).first();

    // Fetch posts
    const posts = await env.DB.prepare(`
      SELECT p.id, p.surah_id, p.user_id, p.user_name, p.user_picture,
             p.post_type, p.title, p.body, p.ayah_refs, p.score,
             p.comment_count, p.is_pinned, p.is_locked, p.created_at, p.updated_at
      FROM discussion_posts p
      ${where}
      ORDER BY ${orderBy}
      LIMIT ? OFFSET ?
    `).bind(...params, limit, offset).all();

    // Get current user's votes on these posts
    let userVotes = {};
    if (user && posts.results?.length) {
      const postIds = posts.results.map(p => p.id);
      const votesResult = await env.DB.prepare(`
        SELECT target_id, vote FROM discussion_votes
        WHERE user_id = ? AND target_type = 'post'
        AND target_id IN (${postIds.map(() => '?').join(',')})
      `).bind(user.id, ...postIds).all();

      for (const v of (votesResult.results || [])) {
        userVotes[v.target_id] = v.vote;
      }
    }

    const formattedPosts = (posts.results || []).map(p => ({
      id: p.id,
      surahId: p.surah_id,
      userId: p.user_id,
      userName: p.user_name,
      userPicture: p.user_picture,
      postType: p.post_type,
      title: p.title,
      body: p.body.length > 300 ? p.body.substring(0, 300) + '...' : p.body,
      ayahRefs: p.ayah_refs ? JSON.parse(p.ayah_refs) : [],
      score: p.score,
      commentCount: p.comment_count,
      isPinned: !!p.is_pinned,
      isLocked: !!p.is_locked,
      userVote: userVotes[p.id] || 0,
      createdAt: p.created_at,
      updatedAt: p.updated_at,
    }));

    return jsonResponse({
      posts: formattedPosts,
      pagination: {
        page,
        limit,
        total: countResult?.total || 0,
        totalPages: Math.ceil((countResult?.total || 0) / limit),
      },
      sort,
      surahId,
    });
  } catch (error) {
    console.error('[Discussions] List posts error:', error);
    return errorResponse('Failed to fetch posts', 500);
  }
}

// ─── POST: Create a new discussion post ──────────────────────
async function handlePost(request, env) {
  const user = await verifySession(request, env);
  if (!user) return errorResponse('Authentication required', 401);

  // Check if banned
  const banStatus = await isDiscussionBanned(env, user.id);
  if (banStatus.banned) {
    return errorResponse(`You are banned from discussions. Reason: ${banStatus.reason || 'Violation of community guidelines'}`, 403);
  }

  // Check rate limit for free users
  const premium = await isPremium(env, user.id);
  if (!premium) {
    const usage = await checkDailyLimit(env, user.id, 'post', FREE_DAILY_LIMIT);
    if (!usage.allowed) {
      return jsonResponse({
        error: 'Daily limit reached. Upgrade to premium for unlimited posts.',
        requiresPremium: true,
        limit: FREE_DAILY_LIMIT,
        used: usage.used,
      }, 429);
    }
  }

  try {
    const body = await request.json();
    const { surahId, postType, title, content, ayahRefs } = body;

    // Validate surah
    if (!surahId || surahId < 1 || surahId > 114) {
      return errorResponse('Valid surah ID (1-114) is required');
    }

    // Validate post type
    if (!postType || !VALID_POST_TYPES.includes(postType)) {
      return errorResponse(`Invalid post type. Must be one of: ${VALID_POST_TYPES.join(', ')}`);
    }

    // Validate title
    if (!title || typeof title !== 'string') {
      return errorResponse('Title is required');
    }
    const trimmedTitle = title.trim();
    if (trimmedTitle.length < MIN_TITLE_LENGTH || trimmedTitle.length > MAX_TITLE_LENGTH) {
      return errorResponse(`Title must be ${MIN_TITLE_LENGTH}-${MAX_TITLE_LENGTH} characters`);
    }

    // Validate body
    if (!content || typeof content !== 'string') {
      return errorResponse('Post content is required');
    }
    const trimmedBody = content.trim();
    if (trimmedBody.length < MIN_BODY_LENGTH || trimmedBody.length > MAX_BODY_LENGTH) {
      return errorResponse(`Content must be ${MIN_BODY_LENGTH}-${MAX_BODY_LENGTH} characters`);
    }

    // Validate ayah references (optional)
    let ayahRefsJson = null;
    if (ayahRefs && Array.isArray(ayahRefs)) {
      const validRefs = ayahRefs.filter(ref =>
        ref.surah >= 1 && ref.surah <= 114 && ref.ayah >= 1
      ).slice(0, 5); // max 5 references
      if (validRefs.length > 0) {
        ayahRefsJson = JSON.stringify(validRefs);
      }
    }

    // Sanitize inputs
    const safeTitle = sanitizeHtml(trimmedTitle);
    const safeBody = sanitizeHtml(trimmedBody);

    // Content filter check
    const filterResult = await checkContent(env, trimmedTitle + ' ' + trimmedBody);

    if (filterResult.severity === 'block') {
      await logIncident(env, {
        userId: user.id, userName: user.name, userEmail: user.email,
        contentType: 'post', contentPreview: trimmedTitle + ' ' + trimmedBody,
        matchedKeywords: filterResult.matched, severity: 'block',
      });
      return errorResponse('Your content contains prohibited language and cannot be posted.', 403);
    }

    if (filterResult.severity === 'flag') {
      // Auto-hold: insert with is_deleted = TRUE so it's hidden until reviewed
      const result = await env.DB.prepare(`
        INSERT INTO discussion_posts (surah_id, user_id, user_name, user_picture, post_type, title, body, ayah_refs, is_deleted)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, TRUE)
      `).bind(
        surahId,
        user.id,
        user.name || 'Anonymous',
        user.picture || null,
        postType,
        safeTitle,
        safeBody,
        ayahRefsJson,
      ).run();

      const postId = result.meta?.last_row_id;

      await logIncident(env, {
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        contentType: 'post',
        contentPreview: trimmedTitle + ' ' + trimmedBody,
        matchedKeywords: filterResult.matched,
        severity: 'flag',
        targetType: 'post',
        targetId: postId,
      });

      console.log(`[Discussions] Flagged ${postType} post by ${user.email} in surah ${surahId}: "${trimmedTitle.substring(0, 50)}"`);

      return jsonResponse({
        success: true,
        held: true,
        message: 'Your post is under review',
        postId,
      }, 201);
    }

    // Insert post (clean content)
    const result = await env.DB.prepare(`
      INSERT INTO discussion_posts (surah_id, user_id, user_name, user_picture, post_type, title, body, ayah_refs)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      surahId,
      user.id,
      user.name || 'Anonymous',
      user.picture || null,
      postType,
      safeTitle,
      safeBody,
      ayahRefsJson,
    ).run();

    console.log(`[Discussions] New ${postType} post by ${user.email} in surah ${surahId}: "${trimmedTitle.substring(0, 50)}"`);

    return jsonResponse({
      success: true,
      postId: result.meta?.last_row_id,
      message: 'Post created successfully',
    }, 201);
  } catch (error) {
    console.error('[Discussions] Create post error:', error);
    return errorResponse('Failed to create post', 500);
  }
}
