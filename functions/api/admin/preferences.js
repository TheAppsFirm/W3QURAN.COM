/**
 * Admin API - Reciter & Language Preferences
 * Tracks reciter usage, translation/language preferences, and audio play counts
 *
 * GET /api/admin/preferences?period=30d
 * Returns: { reciters, translations, totalPlays, period }
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
    const dateRange = getDateRange(period);

    // Safe query wrapper
    const safeQuery = async (queryFn) => {
      try {
        return await queryFn();
      } catch (e) {
        console.warn('[Preferences] Query failed:', e.message);
        return null;
      }
    };

    // Run all queries in parallel
    const [recitersResult, translationsResult, totalPlaysResult] = await Promise.all([
      // Reciter usage
      safeQuery(() => env.DB.prepare(`
        SELECT extra_data as preference, COUNT(*) as count
        FROM app_logs
        WHERE log_type = 'action'
        AND (message LIKE '%reciter%' OR message LIKE '%audio%play%')
        AND extra_data IS NOT NULL
        AND created_at >= ?
        GROUP BY extra_data
        ORDER BY count DESC
        LIMIT 30
      `).bind(dateRange.start).all()),

      // Translation/language usage
      safeQuery(() => env.DB.prepare(`
        SELECT extra_data as preference, COUNT(*) as count
        FROM app_logs
        WHERE log_type = 'action'
        AND (message LIKE '%translation%' OR message LIKE '%language%')
        AND extra_data IS NOT NULL
        AND created_at >= ?
        GROUP BY extra_data
        ORDER BY count DESC
        LIMIT 30
      `).bind(dateRange.start).all()),

      // Total audio play count
      safeQuery(() => env.DB.prepare(`
        SELECT COUNT(*) as count
        FROM app_logs
        WHERE log_type = 'action'
        AND message LIKE '%audio%play%'
        AND created_at >= ?
      `).bind(dateRange.start).first()),
    ]);

    return new Response(JSON.stringify({
      reciters: recitersResult?.results || [],
      translations: translationsResult?.results || [],
      totalPlays: totalPlaysResult?.count || 0,
      period,
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[Admin Preferences] Error:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch preference analytics',
      message: error.message,
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

/**
 * Calculate date range start based on period string
 */
function getDateRange(period) {
  const now = new Date();
  const end = now.toISOString().split('T')[0];
  let start;

  switch (period) {
    case '24h':
      start = new Date(now - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      break;
    case '7d':
      start = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      break;
    case '30d':
      start = new Date(now - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      break;
    case '90d':
      start = new Date(now - 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      break;
    default:
      start = new Date(now - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  }

  return { start, end };
}
