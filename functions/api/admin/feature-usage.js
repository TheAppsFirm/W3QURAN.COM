/**
 * Feature Usage API
 * Provides feature usage analytics from app_logs and analytics_events tables
 *
 * GET /api/admin/feature-usage
 * Query params:
 *   - period: '24h' | '7d' | '30d' | '90d' (default: '30d')
 */

export async function onRequest(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });
  if (request.method !== 'GET') return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  if (!env.DB) return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  // Verify admin authentication
  const cookies = request.headers.get('Cookie') || '';
  const sessionMatch = cookies.match(/w3quran_session=([^;]+)/);
  if (!sessionMatch) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  const sessionToken = sessionMatch[1];
  const user = await env.DB.prepare(`
    SELECT u.id, u.email FROM sessions s JOIN users u ON s.user_id = u.id
    WHERE s.token = ? AND s.expires_at > datetime('now')
  `).bind(sessionToken).first();
  if (!user) return new Response(JSON.stringify({ error: 'Invalid session' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  const adminEmails = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase());
  if (!adminEmails.includes(user.email.toLowerCase())) return new Response(JSON.stringify({ error: 'Admin access required' }), { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  try {
    const url = new URL(request.url);
    const period = url.searchParams.get('period') || '30d';
    const { start, end } = getDateRange(period);

    // --- Query 1: Feature usage from app_logs (log_type = 'feature') ---
    const featureLogs = await safeQuery(
      () => env.DB.prepare(`
        SELECT
          message as feature,
          COUNT(*) as total_uses,
          COUNT(DISTINCT COALESCE(user_id, session_id)) as unique_users,
          MAX(created_at) as last_used
        FROM app_logs
        WHERE log_type = 'feature'
          AND DATE(created_at) BETWEEN ? AND ?
        GROUP BY message
        ORDER BY total_uses DESC
      `).bind(start, end).all().then(r => r.results),
      []
    );

    // --- Query 2: Feature usage from analytics_events (event_type = 'feature_use') ---
    const featureEvents = await safeQuery(
      () => env.DB.prepare(`
        SELECT
          COALESCE(feature_name, JSON_EXTRACT(metadata, '$.feature'), message) as feature,
          COUNT(*) as total_uses,
          COUNT(DISTINCT COALESCE(user_id, session_id)) as unique_users,
          MAX(created_at) as last_used
        FROM analytics_events
        WHERE event_type = 'feature_use'
          AND DATE(created_at) BETWEEN ? AND ?
        GROUP BY feature
        ORDER BY total_uses DESC
      `).bind(start, end).all().then(r => r.results),
      []
    );

    // --- Query 3: Total users count for adoption rate calculation ---
    const totalUsersResult = await safeQuery(
      () => env.DB.prepare(`
        SELECT COUNT(DISTINCT COALESCE(user_id, session_id)) as count
        FROM analytics_events
        WHERE DATE(created_at) BETWEEN ? AND ?
      `).bind(start, end).first(),
      { count: 0 }
    );

    const totalUsers = totalUsersResult?.count || 0;

    return new Response(JSON.stringify({
      featureLogs,
      featureEvents,
      totalUsers,
      period,
      dateRange: { start, end },
      generatedAt: new Date().toISOString(),
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[Feature Usage] Error:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch feature usage data',
      message: error.message,
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

/**
 * Calculate date range based on period
 */
function getDateRange(period) {
  const now = new Date();
  const end = now.toISOString().split('T')[0];
  let start;
  switch (period) {
    case '24h': start = new Date(now - 24 * 60 * 60 * 1000).toISOString().split('T')[0]; break;
    case '7d': start = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; break;
    case '90d': start = new Date(now - 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; break;
    default: start = new Date(now - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  }
  return { start, end };
}

/**
 * Safe query wrapper — catches DB errors and returns fallback
 */
async function safeQuery(fn, fallback = null) {
  try { return await fn(); } catch (e) { console.warn('[Feature Usage] Query failed:', e.message); return fallback; }
}
