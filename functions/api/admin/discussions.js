/**
 * Admin Discussion Moderation API
 * GET  /api/admin/discussions?action=reports|stats|bans|incidents|keywords
 * POST /api/admin/discussions — Moderate content
 *   Body actions:
 *     { action: 'review_report', reportId, decision: 'dismiss'|'delete'|'ban', banReason? }
 *     { action: 'pin_post', postId, pin: true|false }
 *     { action: 'lock_post', postId, lock: true|false }
 *     { action: 'ban_user', userId, reason, expiresInDays? }
 *     { action: 'unban_user', userId }
 *     { action: 'delete_content', targetType, targetId }
 *     { action: 'add_keyword', word, severity, category }
 *     { action: 'delete_keyword', keywordId }
 *     { action: 'bulk_add_keywords', words: string[], severity, category }
 *     { action: 'review_incident', incidentId, decision: 'approve'|'delete'|'ban' }
 *     { action: 'clear_chat', roomType: 'surah', roomId }
 */

import {
  verifyAdmin,
  handleCors, errorResponse, jsonResponse,
} from '../_helpers/auth.js';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') return handleCors();
  if (!env.DB) return errorResponse('Service unavailable', 503);

  const authResult = await verifyAdmin(request, env);
  if (!authResult) return errorResponse('Authentication required', 401);
  if (!authResult.isAdmin) return errorResponse('Admin access required', 403);

  const { user } = authResult;

  if (request.method === 'GET') return handleGet(request, env);
  if (request.method === 'POST') return handlePost(request, env, user);

  return errorResponse('Method not allowed', 405);
}

// ─── GET: Fetch reports, stats, or bans ──────────────────────
async function handleGet(request, env) {
  const url = new URL(request.url);
  const action = url.searchParams.get('action') || 'reports';

  try {
    if (action === 'reports') {
      const status = url.searchParams.get('status') || 'pending';
      const limit = Math.min(50, parseInt(url.searchParams.get('limit'), 10) || 20);
      const offset = parseInt(url.searchParams.get('offset'), 10) || 0;

      const reports = await env.DB.prepare(`
        SELECT r.*, u.name as reporter_name, u.email as reporter_email
        FROM discussion_reports r
        JOIN users u ON r.reporter_id = u.id
        WHERE r.status = ?
        ORDER BY r.created_at DESC
        LIMIT ? OFFSET ?
      `).bind(status, limit, offset).all();

      const count = await env.DB.prepare(`
        SELECT COUNT(*) as total FROM discussion_reports WHERE status = ?
      `).bind(status).first();

      return jsonResponse({
        reports: (reports.results || []).map(r => ({
          id: r.id,
          reporterName: r.reporter_name,
          reporterEmail: r.reporter_email,
          targetType: r.target_type,
          targetId: r.target_id,
          reason: r.reason,
          details: r.details,
          status: r.status,
          actionTaken: r.action_taken,
          createdAt: r.created_at,
        })),
        total: count?.total || 0,
      });
    }

    if (action === 'stats') {
      const [totalPosts, totalComments, totalReports, activeBans] = await Promise.all([
        env.DB.prepare('SELECT COUNT(*) as c FROM discussion_posts WHERE is_deleted = FALSE').first(),
        env.DB.prepare('SELECT COUNT(*) as c FROM discussion_comments WHERE is_deleted = FALSE').first(),
        env.DB.prepare("SELECT COUNT(*) as c FROM discussion_reports WHERE status = 'pending'").first(),
        env.DB.prepare("SELECT COUNT(*) as c FROM discussion_bans WHERE expires_at IS NULL OR expires_at > datetime('now')").first(),
      ]);

      return jsonResponse({
        totalPosts: totalPosts?.c || 0,
        totalComments: totalComments?.c || 0,
        pendingReports: totalReports?.c || 0,
        activeBans: activeBans?.c || 0,
      });
    }

    if (action === 'bans') {
      const bans = await env.DB.prepare(`
        SELECT b.*, u.name as user_name, u.email as user_email,
               a.name as banned_by_name
        FROM discussion_bans b
        JOIN users u ON b.user_id = u.id
        JOIN users a ON b.banned_by = a.id
        WHERE b.expires_at IS NULL OR b.expires_at > datetime('now')
        ORDER BY b.created_at DESC
      `).all();

      return jsonResponse({
        bans: (bans.results || []).map(b => ({
          id: b.id,
          userId: b.user_id,
          userName: b.user_name,
          userEmail: b.user_email,
          reason: b.reason,
          bannedBy: b.banned_by_name,
          expiresAt: b.expires_at,
          createdAt: b.created_at,
        })),
      });
    }

    if (action === 'incidents') {
      const limit = Math.min(50, parseInt(url.searchParams.get('limit'), 10) || 50);
      const offset = parseInt(url.searchParams.get('offset'), 10) || 0;

      const incidents = await env.DB.prepare(`
        SELECT * FROM moderation_incidents
        ORDER BY created_at DESC
        LIMIT ? OFFSET ?
      `).bind(limit, offset).all();

      const unreviewedRow = await env.DB.prepare(
        "SELECT COUNT(*) as c FROM moderation_incidents WHERE action_taken = 'auto'"
      ).first();

      return jsonResponse({
        incidents: (incidents.results || []).map(i => ({
          id: i.id,
          userId: i.user_id,
          userName: i.user_name,
          userEmail: i.user_email,
          contentType: i.content_type || i.target_type,
          contentPreview: i.content_preview,
          matchedKeywords: (() => { try { return JSON.parse(i.matched_keywords); } catch { return []; } })(),
          severity: i.severity,
          actionTaken: i.action_taken,
          reviewedBy: i.reviewed_by,
          reviewedAt: i.reviewed_at,
          createdAt: i.created_at,
        })),
        unreviewedCount: unreviewedRow?.c || 0,
      });
    }

    if (action === 'keywords') {
      const keywords = await env.DB.prepare(`
        SELECT * FROM moderation_keywords
        ORDER BY severity DESC, category, word
      `).all();

      return jsonResponse({
        keywords: (keywords.results || []).map(k => ({
          id: k.id,
          word: k.word,
          severity: k.severity,
          category: k.category,
          addedBy: k.added_by,
          createdAt: k.created_at,
        })),
      });
    }

    return errorResponse('Invalid action. Use: reports, stats, bans, incidents, or keywords');
  } catch (error) {
    console.error('[Admin Discussions] GET error:', error);
    return errorResponse('Failed to fetch data', 500);
  }
}

// ─── POST: Moderation actions ────────────────────────────────
async function handlePost(request, env, admin) {
  try {
    const body = await request.json();
    const { action } = body;

    switch (action) {
      case 'review_report':
        return await reviewReport(env, admin, body);
      case 'pin_post':
        return await pinPost(env, admin, body);
      case 'lock_post':
        return await lockPost(env, admin, body);
      case 'ban_user':
        return await banUser(env, admin, body);
      case 'unban_user':
        return await unbanUser(env, admin, body);
      case 'delete_content':
        return await deleteContent(env, admin, body);
      case 'add_keyword':
        return await addKeyword(env, admin, body);
      case 'delete_keyword':
        return await deleteKeyword(env, admin, body);
      case 'bulk_add_keywords':
        return await bulkAddKeywords(env, admin, body);
      case 'review_incident':
        return await reviewIncident(env, admin, body);
      case 'clear_chat':
        return await clearChat(env, admin, body);
      default:
        return errorResponse('Invalid action');
    }
  } catch (error) {
    console.error('[Admin Discussions] POST error:', error);
    return errorResponse('Moderation action failed', 500);
  }
}

async function reviewReport(env, admin, { reportId, decision, banReason }) {
  if (!reportId) return errorResponse('reportId is required');
  if (!['dismiss', 'delete', 'ban'].includes(decision)) {
    return errorResponse('decision must be: dismiss, delete, or ban');
  }

  const report = await env.DB.prepare(
    'SELECT * FROM discussion_reports WHERE id = ?'
  ).bind(reportId).first();

  if (!report) return errorResponse('Report not found', 404);

  const statements = [];

  // Update report status
  statements.push(
    env.DB.prepare(`
      UPDATE discussion_reports
      SET status = 'reviewed', reviewed_by = ?, reviewed_at = datetime('now'), action_taken = ?
      WHERE id = ?
    `).bind(admin.id, decision === 'dismiss' ? null : decision, reportId)
  );

  if (decision === 'delete') {
    // Soft-delete the reported content
    if (report.target_type === 'post') {
      statements.push(
        env.DB.prepare(`
          UPDATE discussion_posts SET is_deleted = TRUE, deleted_by = 'admin' WHERE id = ?
        `).bind(report.target_id)
      );
    } else if (report.target_type === 'comment') {
      statements.push(
        env.DB.prepare(`
          UPDATE discussion_comments SET is_deleted = TRUE, deleted_by = 'admin' WHERE id = ?
        `).bind(report.target_id)
      );
    } else if (report.target_type === 'chat_message') {
      statements.push(
        env.DB.prepare(`
          UPDATE chat_messages SET is_deleted = TRUE WHERE id = ?
        `).bind(report.target_id)
      );
    }
  }

  if (decision === 'ban' && report.target_type !== 'user') {
    // Find the user who created the reported content, delete content, and ban them
    let userId;
    if (report.target_type === 'post') {
      const p = await env.DB.prepare('SELECT user_id FROM discussion_posts WHERE id = ?').bind(report.target_id).first();
      userId = p?.user_id;
      statements.push(
        env.DB.prepare('UPDATE discussion_posts SET is_deleted = TRUE, deleted_by = \'admin\' WHERE id = ?').bind(report.target_id)
      );
    } else if (report.target_type === 'comment') {
      const c = await env.DB.prepare('SELECT user_id, post_id FROM discussion_comments WHERE id = ?').bind(report.target_id).first();
      userId = c?.user_id;
      statements.push(
        env.DB.prepare('UPDATE discussion_comments SET is_deleted = TRUE, deleted_by = \'admin\' WHERE id = ?').bind(report.target_id)
      );
      if (c?.post_id) {
        statements.push(
          env.DB.prepare('UPDATE discussion_posts SET comment_count = MAX(0, comment_count - 1) WHERE id = ?').bind(c.post_id)
        );
      }
    } else if (report.target_type === 'chat_message') {
      const m = await env.DB.prepare('SELECT user_id FROM chat_messages WHERE id = ?').bind(report.target_id).first();
      userId = m?.user_id;
      statements.push(
        env.DB.prepare('UPDATE chat_messages SET is_deleted = TRUE WHERE id = ?').bind(report.target_id)
      );
    }

    if (userId) {
      statements.push(
        env.DB.prepare(`
          INSERT INTO discussion_bans (user_id, banned_by, reason)
          VALUES (?, ?, ?)
        `).bind(userId, admin.id, banReason || 'Reported content violation')
      );
    }
  }

  await env.DB.batch(statements);

  console.log(`[Admin] Report ${reportId} reviewed by ${admin.email}: ${decision}`);

  return jsonResponse({ success: true, message: `Report ${decision === 'dismiss' ? 'dismissed' : 'actioned'}` });
}

async function pinPost(env, admin, { postId, pin }) {
  if (!postId) return errorResponse('postId is required');

  await env.DB.prepare(`
    UPDATE discussion_posts SET is_pinned = ?, updated_at = datetime('now') WHERE id = ?
  `).bind(pin ? 1 : 0, postId).run();

  console.log(`[Admin] Post ${postId} ${pin ? 'pinned' : 'unpinned'} by ${admin.email}`);

  return jsonResponse({ success: true, message: `Post ${pin ? 'pinned' : 'unpinned'}` });
}

async function lockPost(env, admin, { postId, lock }) {
  if (!postId) return errorResponse('postId is required');

  await env.DB.prepare(`
    UPDATE discussion_posts SET is_locked = ?, updated_at = datetime('now') WHERE id = ?
  `).bind(lock ? 1 : 0, postId).run();

  console.log(`[Admin] Post ${postId} ${lock ? 'locked' : 'unlocked'} by ${admin.email}`);

  return jsonResponse({ success: true, message: `Post ${lock ? 'locked' : 'unlocked'}` });
}

async function banUser(env, admin, { userId, reason, expiresInDays }) {
  if (!userId) return errorResponse('userId is required');

  const expiresAt = expiresInDays
    ? new Date(Date.now() + expiresInDays * 86400000).toISOString()
    : null;

  await env.DB.prepare(`
    INSERT INTO discussion_bans (user_id, banned_by, reason, expires_at)
    VALUES (?, ?, ?, ?)
  `).bind(userId, admin.id, reason || 'Community guidelines violation', expiresAt).run();

  console.log(`[Admin] User ${userId} banned by ${admin.email} (expires: ${expiresAt || 'permanent'})`);

  return jsonResponse({ success: true, message: 'User banned from discussions' });
}

async function unbanUser(env, admin, { userId }) {
  if (!userId) return errorResponse('userId is required');

  await env.DB.prepare(`
    DELETE FROM discussion_bans WHERE user_id = ?
  `).bind(userId).run();

  console.log(`[Admin] User ${userId} unbanned by ${admin.email}`);

  return jsonResponse({ success: true, message: 'User unbanned' });
}

async function deleteContent(env, admin, { targetType, targetId }) {
  if (!['post', 'comment', 'chat_message'].includes(targetType)) {
    return errorResponse('Invalid targetType');
  }
  if (!targetId) return errorResponse('targetId is required');

  if (targetType === 'post') {
    await env.DB.prepare(`
      UPDATE discussion_posts SET is_deleted = TRUE, deleted_by = 'admin', updated_at = datetime('now')
      WHERE id = ?
    `).bind(targetId).run();
  } else if (targetType === 'comment') {
    const comment = await env.DB.prepare('SELECT post_id FROM discussion_comments WHERE id = ?').bind(targetId).first();
    await env.DB.batch([
      env.DB.prepare(`
        UPDATE discussion_comments SET is_deleted = TRUE, deleted_by = 'admin' WHERE id = ?
      `).bind(targetId),
      ...(comment ? [env.DB.prepare(`
        UPDATE discussion_posts SET comment_count = MAX(0, comment_count - 1) WHERE id = ?
      `).bind(comment.post_id)] : []),
    ]);
  } else if (targetType === 'chat_message') {
    await env.DB.prepare(`
      UPDATE chat_messages SET is_deleted = TRUE WHERE id = ?
    `).bind(targetId).run();
  }

  console.log(`[Admin] ${targetType} ${targetId} deleted by ${admin.email}`);

  return jsonResponse({ success: true, message: 'Content deleted' });
}

// ─── Keyword Management ──────────────────────────────────────

async function addKeyword(env, admin, { word, severity, category }) {
  if (!word || !word.trim()) return errorResponse('word is required');
  const trimmedWord = word.trim();
  if (trimmedWord.length < 2 || trimmedWord.length > 100) {
    return errorResponse('Keyword must be between 2 and 100 characters');
  }
  if (!['block', 'flag'].includes(severity)) {
    return errorResponse('severity must be: block or flag');
  }

  await env.DB.prepare(`
    INSERT OR IGNORE INTO moderation_keywords (word, severity, category, added_by)
    VALUES (?, ?, ?, ?)
  `).bind(word.trim().toLowerCase(), severity, category || 'general', admin.email).run();

  console.log(`[Admin] Keyword "${word}" (${severity}) added by ${admin.email}`);

  return jsonResponse({ success: true });
}

async function deleteKeyword(env, admin, { keywordId }) {
  if (!keywordId) return errorResponse('keywordId is required');

  await env.DB.prepare(
    'DELETE FROM moderation_keywords WHERE id = ?'
  ).bind(keywordId).run();

  console.log(`[Admin] Keyword ${keywordId} deleted by ${admin.email}`);

  return jsonResponse({ success: true });
}

async function bulkAddKeywords(env, admin, { words, severity, category }) {
  if (!Array.isArray(words) || words.length === 0) {
    return errorResponse('words must be a non-empty array of strings');
  }
  if (!['block', 'flag'].includes(severity)) {
    return errorResponse('severity must be: block or flag');
  }

  const cleaned = words.map(w => w.trim().toLowerCase()).filter(w => w.length >= 2 && w.length <= 100).slice(0, 100);
  if (cleaned.length === 0) return errorResponse('No valid keywords to add (must be 2-100 chars)');
  const statements = cleaned.map(w =>
    env.DB.prepare(`
      INSERT OR IGNORE INTO moderation_keywords (word, severity, category, added_by)
      VALUES (?, ?, ?, ?)
    `).bind(w, severity, category || 'general', admin.email)
  );

  await env.DB.batch(statements);

  console.log(`[Admin] ${cleaned.length} keywords bulk-added (${severity}) by ${admin.email}`);

  return jsonResponse({ success: true, added: cleaned.length });
}

// ─── Incident Review ─────────────────────────────────────────

async function reviewIncident(env, admin, { incidentId, decision }) {
  if (!incidentId) return errorResponse('incidentId is required');
  if (!['approve', 'delete', 'ban'].includes(decision)) {
    return errorResponse('decision must be: approve, delete, or ban');
  }

  const incident = await env.DB.prepare(
    'SELECT * FROM moderation_incidents WHERE id = ?'
  ).bind(incidentId).first();

  if (!incident) return errorResponse('Incident not found', 404);

  const statements = [];
  const targetType = incident.target_type;
  const targetId = incident.target_id;

  if (decision === 'approve') {
    // Un-hold the content (set is_deleted = FALSE)
    if (targetType === 'post') {
      statements.push(
        env.DB.prepare(
          'UPDATE discussion_posts SET is_deleted = FALSE WHERE id = ?'
        ).bind(targetId)
      );
    } else if (targetType === 'comment') {
      statements.push(
        env.DB.prepare(
          'UPDATE discussion_comments SET is_deleted = FALSE WHERE id = ?'
        ).bind(targetId)
      );
    } else if (targetType === 'chat_message') {
      statements.push(
        env.DB.prepare(
          'UPDATE chat_messages SET is_deleted = FALSE WHERE id = ?'
        ).bind(targetId)
      );
    }

    statements.push(
      env.DB.prepare(`
        UPDATE moderation_incidents
        SET action_taken = 'admin_approved', reviewed_by = ?, reviewed_at = datetime('now')
        WHERE id = ?
      `).bind(admin.email, incidentId)
    );
  } else if (decision === 'delete') {
    // Keep content deleted, mark incident as admin-deleted
    statements.push(
      env.DB.prepare(`
        UPDATE moderation_incidents
        SET action_taken = 'admin_deleted', reviewed_by = ?, reviewed_at = datetime('now')
        WHERE id = ?
      `).bind(admin.email, incidentId)
    );
  } else if (decision === 'ban') {
    // Keep deleted + ban the user + mark incident
    if (incident.user_id) {
      statements.push(
        env.DB.prepare(`
          INSERT INTO discussion_bans (user_id, banned_by, reason)
          VALUES (?, ?, ?)
        `).bind(incident.user_id, admin.id, 'Auto-moderation incident: banned by admin')
      );
    }

    statements.push(
      env.DB.prepare(`
        UPDATE moderation_incidents
        SET action_taken = 'admin_banned', reviewed_by = ?, reviewed_at = datetime('now')
        WHERE id = ?
      `).bind(admin.email, incidentId)
    );
  }

  await env.DB.batch(statements);

  console.log(`[Admin] Incident ${incidentId} reviewed by ${admin.email}: ${decision}`);

  return jsonResponse({ success: true });
}

// ─── Clear Chat ──────────────────────────────────────────────

async function clearChat(env, admin, { roomType, roomId }) {
  if (roomType !== 'surah') return errorResponse('roomType must be "surah"');
  if (!roomId) return errorResponse('roomId is required');

  await env.DB.prepare(`
    UPDATE chat_messages SET is_deleted = TRUE
    WHERE room_type = ? AND room_id = ? AND is_deleted = FALSE
  `).bind(roomType, roomId).run();

  console.log(`[Admin] Chat room ${roomType}:${roomId} cleared by ${admin.email}`);

  return jsonResponse({ success: true, message: 'Chat room cleared' });
}
