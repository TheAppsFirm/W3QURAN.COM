/**
 * User Preferences API
 * GET  /api/user/preferences — Get current user's privacy preferences
 * POST /api/user/preferences — Update privacy preferences
 */

import {
  verifySession,
  handleCors, errorResponse, jsonResponse,
} from '../_helpers/auth.js';

export async function onRequestGet(context) {
  const { request, env } = context;
  if (!env.DB) return errorResponse('Service unavailable', 503);

  const user = await verifySession(request, env);
  if (!user) return errorResponse('Authentication required', 401);

  try {
    const prefs = await env.DB.prepare(
      'SELECT show_email, allow_dms FROM user_preferences WHERE user_id = ?'
    ).bind(user.id).first();

    return jsonResponse({
      show_email: prefs?.show_email ? true : false,
      allow_dms: prefs?.allow_dms !== undefined ? (prefs.allow_dms ? true : false) : true,
    });
  } catch (err) {
    console.error('[Preferences] GET error:', err);
    return errorResponse('Failed to load preferences', 500);
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;
  if (!env.DB) return errorResponse('Service unavailable', 503);

  const user = await verifySession(request, env);
  if (!user) return errorResponse('Authentication required', 401);

  try {
    const { show_email, allow_dms } = await request.json();

    await env.DB.prepare(`
      INSERT INTO user_preferences (user_id, show_email, allow_dms, updated_at)
      VALUES (?, ?, ?, datetime('now'))
      ON CONFLICT(user_id) DO UPDATE SET
        show_email = excluded.show_email,
        allow_dms = excluded.allow_dms,
        updated_at = datetime('now')
    `).bind(
      user.id,
      show_email ? 1 : 0,
      allow_dms !== false ? 1 : 0,
    ).run();

    return jsonResponse({ success: true });
  } catch (err) {
    console.error('[Preferences] POST error:', err);
    return errorResponse('Failed to save preferences', 500);
  }
}

export async function onRequestOptions() {
  return handleCors();
}
