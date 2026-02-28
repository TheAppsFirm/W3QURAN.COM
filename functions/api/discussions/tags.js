/**
 * Discussion Tags API
 * GET /api/discussions/tags — List all available tags
 */

import { handleCors, errorResponse, jsonResponse } from '../_helpers/auth.js';

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === 'OPTIONS') return handleCors();
  if (!env.DB) return errorResponse('Service unavailable', 503);
  if (request.method !== 'GET') return errorResponse('Method not allowed', 405);

  try {
    const { results } = await env.DB.prepare(`
      SELECT id, name, slug, name_ur, icon, color, post_count
      FROM discussion_tags
      ORDER BY post_count DESC, name ASC
    `).all();

    return jsonResponse({
      tags: (results || []).map(t => ({
        id: t.id,
        name: t.name,
        slug: t.slug,
        nameUr: t.name_ur,
        icon: t.icon,
        color: t.color,
        postCount: t.post_count,
      })),
    });
  } catch (err) {
    // Table may not exist yet — return empty tags gracefully
    console.error('[Tags] Fetch error:', err);
    return jsonResponse({ tags: [] });
  }
}
