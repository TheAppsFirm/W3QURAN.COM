/**
 * Search Analytics API
 * Provides search usage data for the admin dashboard
 *
 * GET /api/admin/search-analytics
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
    const { start } = getDateRange(period);

    // Run all queries in parallel
    const [topSearches, trend, stats] = await Promise.all([
      // 1. Top search terms
      safeQuery(async () => {
        const result = await env.DB.prepare(`
          SELECT extra_data as term, COUNT(*) as count, COUNT(DISTINCT COALESCE(user_id, session_id)) as unique_users
          FROM app_logs
          WHERE log_type = 'action' AND message LIKE '%search%' AND extra_data IS NOT NULL AND extra_data != ''
          AND created_at >= ?
          GROUP BY extra_data
          ORDER BY count DESC
          LIMIT 50
        `).bind(start).all();
        return result?.results || [];
      }, []),

      // 2. Search volume trend (daily)
      safeQuery(async () => {
        const result = await env.DB.prepare(`
          SELECT DATE(created_at) as date, COUNT(*) as count
          FROM app_logs
          WHERE log_type = 'action' AND message LIKE '%search%'
          AND created_at >= ?
          GROUP BY DATE(created_at)
          ORDER BY date
        `).bind(start).all();
        return result?.results || [];
      }, []),

      // 3. Total search stats
      safeQuery(async () => {
        const result = await env.DB.prepare(`
          SELECT COUNT(*) as total, COUNT(DISTINCT COALESCE(user_id, session_id)) as unique_users
          FROM app_logs
          WHERE log_type = 'action' AND message LIKE '%search%'
          AND created_at >= ?
        `).bind(start).first();
        return result || { total: 0, unique_users: 0 };
      }, { total: 0, unique_users: 0 }),
    ]);

    return new Response(JSON.stringify({
      topSearches,
      trend,
      totalSearches: stats.total || 0,
      uniqueSearchers: stats.unique_users || 0,
      period,
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[Search Analytics] Error:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch search analytics',
      message: error.message,
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

/**
 * Calculate start date based on period
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
 * Safe query wrapper — returns fallback on failure
 */
async function safeQuery(fn, fallback = null) {
  try { return await fn(); } catch (e) { console.warn('[Search Analytics] Query failed:', e.message); return fallback; }
}
