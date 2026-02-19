/**
 * Admin Logs API
 * Read and analyze application logs
 * Only accessible by admin users
 */

export async function onRequest(context) {
  const { env, request } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Verify admin session
  const cookies = request.headers.get('Cookie') || '';
  const sessionMatch = cookies.match(/w3quran_session=([^;]+)/);
  const sessionToken = sessionMatch?.[1];

  if (!sessionToken) {
    return new Response(JSON.stringify({ error: 'Authentication required' }), {
      status: 401,
      headers: corsHeaders,
    });
  }

  const user = await env.DB.prepare(`
    SELECT u.id, u.email
    FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.token = ? AND s.expires_at > datetime('now')
  `).bind(sessionToken).first();

  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid session' }), {
      status: 401,
      headers: corsHeaders,
    });
  }

  // Check admin
  const adminEmails = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase());
  const isAdmin = adminEmails.includes(user.email.toLowerCase());

  if (!isAdmin) {
    return new Response(JSON.stringify({ error: 'Admin access required' }), {
      status: 403,
      headers: corsHeaders,
    });
  }

  const url = new URL(request.url);

  if (request.method === 'GET') {
    // Parse query parameters
    const level = url.searchParams.get('level'); // error, warn, info, critical
    const type = url.searchParams.get('type'); // error, performance, action, audio, api, etc.
    const surahId = url.searchParams.get('surah');
    const browser = url.searchParams.get('browser');
    const os = url.searchParams.get('os');
    const device = url.searchParams.get('device');
    const search = url.searchParams.get('search');
    const hours = parseInt(url.searchParams.get('hours') || '24', 10);
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '100', 10), 500);
    const offset = parseInt(url.searchParams.get('offset') || '0', 10);
    const view = url.searchParams.get('view'); // 'summary', 'errors', 'performance', null

    try {
      // Summary view - aggregate stats
      if (view === 'summary') {
        const stats = await getSummaryStats(env, hours);
        return new Response(JSON.stringify(stats), {
          status: 200,
          headers: corsHeaders,
        });
      }

      // Build query with filters
      let query = `
        SELECT
          id, user_id, session_id, log_level, log_type, message,
          browser, os, device, memory_used_mb, memory_percent,
          page_url, surah_id, ayah_num, extra_data, created_at
        FROM app_logs
        WHERE created_at > datetime('now', '-${hours} hours')
      `;
      const params = [];

      if (level) {
        query += ` AND log_level = ?`;
        params.push(level);
      }

      if (type) {
        query += ` AND log_type = ?`;
        params.push(type);
      }

      if (surahId) {
        query += ` AND surah_id = ?`;
        params.push(parseInt(surahId, 10));
      }

      if (browser) {
        query += ` AND browser = ?`;
        params.push(browser);
      }

      if (os) {
        query += ` AND os = ?`;
        params.push(os);
      }

      if (device) {
        query += ` AND device = ?`;
        params.push(device);
      }

      if (search) {
        query += ` AND message LIKE ?`;
        params.push(`%${search}%`);
      }

      // Errors view - only errors and crashes
      if (view === 'errors') {
        query += ` AND (log_level = 'error' OR log_level = 'critical')`;
      }

      // Performance view - slow operations and memory warnings
      if (view === 'performance') {
        query += ` AND (log_type = 'performance' OR log_type = 'memory')`;
      }

      query += ` ORDER BY created_at DESC LIMIT ? OFFSET ?`;
      params.push(limit, offset);

      const logs = await env.DB.prepare(query).bind(...params).all();

      // Parse extra_data JSON
      const parsedLogs = logs.results.map(log => ({
        ...log,
        extra_data: log.extra_data ? JSON.parse(log.extra_data) : null,
      }));

      // Get total count for pagination
      let countQuery = `
        SELECT COUNT(*) as total FROM app_logs
        WHERE created_at > datetime('now', '-${hours} hours')
      `;
      if (level) countQuery += ` AND log_level = '${level}'`;
      if (type) countQuery += ` AND log_type = '${type}'`;
      if (view === 'errors') countQuery += ` AND (log_level = 'error' OR log_level = 'critical')`;
      if (view === 'performance') countQuery += ` AND (log_type = 'performance' OR log_type = 'memory')`;

      const countResult = await env.DB.prepare(countQuery).first();

      return new Response(JSON.stringify({
        logs: parsedLogs,
        total: countResult?.total || 0,
        limit,
        offset,
        hours,
      }), {
        status: 200,
        headers: corsHeaders,
      });

    } catch (error) {
      console.error('[Admin Logs] Error:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch logs', details: error.message }), {
        status: 500,
        headers: corsHeaders,
      });
    }
  }

  if (request.method === 'DELETE') {
    const clearAll = url.searchParams.get('all') === 'true';

    try {
      let result;
      if (clearAll) {
        // Delete ALL logs
        result = await env.DB.prepare(`DELETE FROM app_logs`).run();
      } else {
        // Clean up old logs by days
        const days = parseInt(url.searchParams.get('days') || '7', 10);
        result = await env.DB.prepare(`
          DELETE FROM app_logs
          WHERE created_at < datetime('now', '-${days} days')
        `).run();
      }

      return new Response(JSON.stringify({
        success: true,
        deleted: result.changes || 0,
        message: clearAll ? 'Cleared all logs' : `Deleted old logs`,
      }), {
        status: 200,
        headers: corsHeaders,
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to delete logs' }), {
        status: 500,
        headers: corsHeaders,
      });
    }
  }

  return new Response(JSON.stringify({ error: 'Method not allowed' }), {
    status: 405,
    headers: corsHeaders,
  });
}

/**
 * Get summary statistics
 */
async function getSummaryStats(env, hours) {
  const timeFilter = `created_at > datetime('now', '-${hours} hours')`;

  // Error counts by type
  const errorsByType = await env.DB.prepare(`
    SELECT log_type, COUNT(*) as count
    FROM app_logs
    WHERE ${timeFilter} AND (log_level = 'error' OR log_level = 'critical')
    GROUP BY log_type
    ORDER BY count DESC
  `).all();

  // Errors by browser
  const errorsByBrowser = await env.DB.prepare(`
    SELECT browser, COUNT(*) as count
    FROM app_logs
    WHERE ${timeFilter} AND (log_level = 'error' OR log_level = 'critical')
    GROUP BY browser
    ORDER BY count DESC
  `).all();

  // Errors by OS
  const errorsByOS = await env.DB.prepare(`
    SELECT os, COUNT(*) as count
    FROM app_logs
    WHERE ${timeFilter} AND (log_level = 'error' OR log_level = 'critical')
    GROUP BY os
    ORDER BY count DESC
  `).all();

  // Errors by Surah (crashes during reading)
  const errorsBySurah = await env.DB.prepare(`
    SELECT surah_id, COUNT(*) as count
    FROM app_logs
    WHERE ${timeFilter} AND (log_level = 'error' OR log_level = 'critical') AND surah_id IS NOT NULL
    GROUP BY surah_id
    ORDER BY count DESC
    LIMIT 10
  `).all();

  // Top error messages
  const topErrors = await env.DB.prepare(`
    SELECT message, COUNT(*) as count, MAX(created_at) as last_seen
    FROM app_logs
    WHERE ${timeFilter} AND (log_level = 'error' OR log_level = 'critical')
    GROUP BY message
    ORDER BY count DESC
    LIMIT 20
  `).all();

  // Memory warnings
  const memoryWarnings = await env.DB.prepare(`
    SELECT COUNT(*) as count, AVG(memory_percent) as avg_percent, MAX(memory_percent) as max_percent
    FROM app_logs
    WHERE ${timeFilter} AND log_type = 'memory'
  `).first();

  // Feature usage
  const featureUsage = await env.DB.prepare(`
    SELECT message, COUNT(*) as count
    FROM app_logs
    WHERE ${timeFilter} AND log_type = 'feature'
    GROUP BY message
    ORDER BY count DESC
    LIMIT 20
  `).all();

  // Hourly error trend
  const errorTrend = await env.DB.prepare(`
    SELECT
      strftime('%Y-%m-%d %H:00', created_at) as hour,
      COUNT(*) as count
    FROM app_logs
    WHERE ${timeFilter} AND (log_level = 'error' OR log_level = 'critical')
    GROUP BY hour
    ORDER BY hour DESC
    LIMIT 24
  `).all();

  // Total counts
  const totals = await env.DB.prepare(`
    SELECT
      COUNT(*) as total_logs,
      SUM(CASE WHEN log_level = 'error' OR log_level = 'critical' THEN 1 ELSE 0 END) as total_errors,
      SUM(CASE WHEN log_type = 'action' THEN 1 ELSE 0 END) as total_actions,
      COUNT(DISTINCT session_id) as unique_sessions
    FROM app_logs
    WHERE ${timeFilter}
  `).first();

  return {
    timeRange: `Last ${hours} hours`,
    totals,
    errorsByType: errorsByType.results,
    errorsByBrowser: errorsByBrowser.results,
    errorsByOS: errorsByOS.results,
    errorsBySurah: errorsBySurah.results,
    topErrors: topErrors.results,
    memoryWarnings,
    featureUsage: featureUsage.results,
    errorTrend: errorTrend.results,
  };
}
