/**
 * Email Stats API
 * GET /api/email-stats
 *
 * Returns email usage stats: today, this month, all time, recent logs
 */

export async function onRequest(context) {
  const { env, request } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Admin only
  const cookies = request.headers.get('Cookie') || '';
  const sessionMatch = cookies.match(/w3quran_session=([^;]+)/);
  const sessionToken = sessionMatch?.[1];

  if (!sessionToken) {
    return new Response(JSON.stringify({ error: 'Auth required' }), { status: 401, headers: corsHeaders });
  }

  const user = await env.DB.prepare(`
    SELECT s.user_id, u.email FROM sessions s JOIN users u ON s.user_id = u.id
    WHERE s.token = ? AND s.expires_at > datetime('now')
  `).bind(sessionToken).first();

  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid session' }), { status: 401, headers: corsHeaders });
  }

  const adminEmails = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase());
  if (!adminEmails.includes(user.email.toLowerCase())) {
    return new Response(JSON.stringify({ error: 'Admin access required' }), { status: 403, headers: corsHeaders });
  }

  try {
    // Get today's date in UTC
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

    // Run all queries in parallel
    const [sentToday, sentThisMonth, sentAllTime, failedAllTime, recentLogs] = await Promise.all([
      // Sent today
      env.DB.prepare(
        `SELECT COUNT(*) as count FROM email_logs WHERE status = 'sent' AND created_at >= ?`
      ).bind(todayStart).first(),

      // Sent this month
      env.DB.prepare(
        `SELECT COUNT(*) as count FROM email_logs WHERE status = 'sent' AND created_at >= ?`
      ).bind(monthStart).first(),

      // All time sent
      env.DB.prepare(
        `SELECT COUNT(*) as count FROM email_logs WHERE status = 'sent'`
      ).first(),

      // All time failed
      env.DB.prepare(
        `SELECT COUNT(*) as count FROM email_logs WHERE status = 'failed'`
      ).first(),

      // Recent 20 logs
      env.DB.prepare(
        `SELECT to_email, template, subject, status, triggered_by, created_at FROM email_logs ORDER BY created_at DESC LIMIT 20`
      ).all(),
    ]);

    // Resend free tier limits
    const DAILY_LIMIT = 100;
    const MONTHLY_LIMIT = 3000;

    return new Response(JSON.stringify({
      today: {
        sent: sentToday?.count || 0,
        limit: DAILY_LIMIT,
        remaining: Math.max(0, DAILY_LIMIT - (sentToday?.count || 0)),
      },
      month: {
        sent: sentThisMonth?.count || 0,
        limit: MONTHLY_LIMIT,
        remaining: Math.max(0, MONTHLY_LIMIT - (sentThisMonth?.count || 0)),
      },
      allTime: {
        sent: sentAllTime?.count || 0,
        failed: failedAllTime?.count || 0,
      },
      recentLogs: recentLogs?.results || [],
    }), { status: 200, headers: corsHeaders });

  } catch (error) {
    console.error('[EmailStats] Error:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Failed to fetch stats',
    }), { status: 500, headers: corsHeaders });
  }
}
