/**
 * Public API - Get Active Announcements
 * Returns currently active announcements for display on main site
 */

export async function onRequest(context) {
  const { env, request } = context;

  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const url = new URL(request.url);
    const target = url.searchParams.get('target') || 'all';

    // Get active announcements:
    // - starts_at is NULL or in the past
    // - expires_at is NULL or in the future
    // - Filter by target (all users see 'all' announcements, specific targets see their targeted ones)
    const announcements = await env.DB.prepare(`
      SELECT id, title, message, type, target, priority, dismissible, link_url, link_text, created_at
      FROM announcements
      WHERE (starts_at IS NULL OR starts_at <= datetime('now'))
        AND (expires_at IS NULL OR expires_at > datetime('now'))
        AND (target = 'all' OR target = ?)
      ORDER BY priority DESC, created_at DESC
      LIMIT 5
    `).bind(target).all();

    return new Response(JSON.stringify({
      announcements: announcements.results || []
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate', // Always fetch fresh
      },
    });

  } catch (error) {
    console.error('[Announcements] Error:', error);
    // Return empty array on error to not break the site
    return new Response(JSON.stringify({ announcements: [] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
