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

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503, headers: corsHeaders });
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
        WHERE created_at > datetime('now', '-' || ? || ' hours')
      `;
      const params = [hours];

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
      let countQuery = `SELECT COUNT(*) as total FROM app_logs WHERE created_at > datetime('now', '-' || ? || ' hours')`;
      const countBinds = [hours];
      if (level) { countQuery += ` AND log_level = ?`; countBinds.push(level); }
      if (type) { countQuery += ` AND log_type = ?`; countBinds.push(type); }
      if (view === 'errors') countQuery += ` AND (log_level = 'error' OR log_level = 'critical')`;
      if (view === 'performance') countQuery += ` AND (log_type = 'performance' OR log_type = 'memory')`;

      const countResult = await env.DB.prepare(countQuery).bind(...countBinds).first();

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
          WHERE created_at < datetime('now', '-' || ? || ' days')
        `).bind(days).run();
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
 * Safe query wrapper — returns empty result if query fails (missing column, etc.)
 */
async function safeQuery(env, sql, binds = [], mode = 'all') {
  try {
    const stmt = env.DB.prepare(sql).bind(...binds);
    if (mode === 'first') return await stmt.first();
    const result = await stmt.all();
    return result.results || [];
  } catch (err) {
    console.error('[Admin Logs] Query failed:', err.message, '— SQL:', sql.substring(0, 80));
    return mode === 'first' ? null : [];
  }
}

/**
 * Get summary statistics
 */
async function getSummaryStats(env, hours) {
  const h = String(hours);

  // Run all queries in parallel with safe wrappers
  const [
    errorsByType,
    errorsByBrowser,
    errorsByOS,
    errorsBySurah,
    topErrors,
    memoryWarnings,
    featureUsage,
    errorTrend,
    totals,
  ] = await Promise.all([
    // Error counts by type
    safeQuery(env, `
      SELECT log_type, COUNT(*) as count FROM app_logs
      WHERE created_at > datetime('now', '-' || ? || ' hours') AND (log_level = 'error' OR log_level = 'critical')
      GROUP BY log_type ORDER BY count DESC
    `, [h]),

    // Errors by browser
    safeQuery(env, `
      SELECT browser, COUNT(*) as count FROM app_logs
      WHERE created_at > datetime('now', '-' || ? || ' hours') AND (log_level = 'error' OR log_level = 'critical')
      GROUP BY browser ORDER BY count DESC
    `, [h]),

    // Errors by OS
    safeQuery(env, `
      SELECT os, COUNT(*) as count FROM app_logs
      WHERE created_at > datetime('now', '-' || ? || ' hours') AND (log_level = 'error' OR log_level = 'critical')
      GROUP BY os ORDER BY count DESC
    `, [h]),

    // Errors by Surah
    safeQuery(env, `
      SELECT surah_id, COUNT(*) as count FROM app_logs
      WHERE created_at > datetime('now', '-' || ? || ' hours') AND (log_level = 'error' OR log_level = 'critical') AND surah_id IS NOT NULL
      GROUP BY surah_id ORDER BY count DESC LIMIT 10
    `, [h]),

    // Top error messages
    safeQuery(env, `
      SELECT message, COUNT(*) as count, MAX(created_at) as last_seen FROM app_logs
      WHERE created_at > datetime('now', '-' || ? || ' hours') AND (log_level = 'error' OR log_level = 'critical')
      GROUP BY message ORDER BY count DESC LIMIT 20
    `, [h]),

    // Memory warnings
    safeQuery(env, `
      SELECT COUNT(*) as count, AVG(memory_percent) as avg_percent, MAX(memory_percent) as max_percent
      FROM app_logs WHERE created_at > datetime('now', '-' || ? || ' hours') AND log_type = 'memory'
    `, [h], 'first'),

    // Feature usage
    safeQuery(env, `
      SELECT message, COUNT(*) as count FROM app_logs
      WHERE created_at > datetime('now', '-' || ? || ' hours') AND log_type = 'feature'
      GROUP BY message ORDER BY count DESC LIMIT 20
    `, [h]),

    // Hourly error trend
    safeQuery(env, `
      SELECT strftime('%Y-%m-%d %H:00', created_at) as hour, COUNT(*) as count FROM app_logs
      WHERE created_at > datetime('now', '-' || ? || ' hours') AND (log_level = 'error' OR log_level = 'critical')
      GROUP BY hour ORDER BY hour DESC LIMIT 24
    `, [h]),

    // Total counts
    safeQuery(env, `
      SELECT COUNT(*) as total_logs,
        SUM(CASE WHEN log_level = 'error' OR log_level = 'critical' THEN 1 ELSE 0 END) as total_errors,
        SUM(CASE WHEN log_type = 'action' THEN 1 ELSE 0 END) as total_actions,
        COUNT(DISTINCT session_id) as unique_sessions
      FROM app_logs WHERE created_at > datetime('now', '-' || ? || ' hours')
    `, [h], 'first'),
  ]);

  return {
    timeRange: `Last ${hours} hours`,
    totals: totals || { total_logs: 0, total_errors: 0, total_actions: 0, unique_sessions: 0 },
    errorsByType,
    errorsByBrowser,
    errorsByOS,
    errorsBySurah,
    topErrors,
    memoryWarnings: memoryWarnings || { count: 0 },
    featureUsage,
    errorTrend,
  };
}
