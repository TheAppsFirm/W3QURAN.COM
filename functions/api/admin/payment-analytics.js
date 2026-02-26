/**
 * Admin API - Payment Analytics
 * Tracks payment initiations, completions, and abandonment
 * Auto-creates payment_initiations table on first request
 */

const getAdminEmails = (env) => {
  const emails = env.ADMIN_EMAILS || '';
  return emails.split(',').map(e => e.trim().toLowerCase());
};

async function verifyAdminSession(request, env) {
  const cookies = request.headers.get('Cookie') || '';
  const sessionMatch = cookies.match(/w3quran_session=([^;]+)/);
  const sessionToken = sessionMatch?.[1];

  if (!sessionToken) {
    return { error: 'Not authenticated', status: 401 };
  }

  const result = await env.DB.prepare(`
    SELECT s.user_id, u.email, u.name
    FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.token = ? AND s.expires_at > datetime('now')
  `).bind(sessionToken).first();

  if (!result) {
    return { error: 'Invalid session', status: 401 };
  }

  const adminEmails = getAdminEmails(env);
  if (!adminEmails.includes(result.email.toLowerCase())) {
    return { error: 'Access denied. Admin only.', status: 403 };
  }

  return { user: result };
}

// Auto-create table if it doesn't exist
async function ensureTable(env) {
  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS payment_initiations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      email TEXT,
      name TEXT,
      product_type TEXT NOT NULL,
      source TEXT DEFAULT 'general',
      status TEXT DEFAULT 'initiated',
      stripe_session_id TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      completed_at TEXT
    )
  `).run();
}

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

  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503, headers: corsHeaders });
  }

  const auth = await verifyAdminSession(request, env);
  if (auth.error) {
    return new Response(JSON.stringify({ error: auth.error }), {
      status: auth.status,
      headers: corsHeaders,
    });
  }

  try {
    await ensureTable(env);

    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 100);
    const offset = (page - 1) * limit;
    const statusFilter = url.searchParams.get('status') || '';
    const sourceFilter = url.searchParams.get('source') || '';
    const dateFrom = url.searchParams.get('from') || '';
    const dateTo = url.searchParams.get('to') || '';

    // Validate filter values
    const VALID_STATUSES = ['initiated', 'completed', 'failed'];
    const VALID_SOURCES = ['kids', 'talk_to_quran', 'tasbih', 'general'];

    // Build WHERE clause
    const conditions = [];
    const bindings = [];

    if (statusFilter && VALID_STATUSES.includes(statusFilter)) {
      conditions.push('pi.status = ?');
      bindings.push(statusFilter);
    }
    if (sourceFilter && VALID_SOURCES.includes(sourceFilter)) {
      conditions.push('pi.source = ?');
      bindings.push(sourceFilter);
    }
    if (dateFrom) {
      conditions.push('pi.created_at >= ?');
      bindings.push(dateFrom);
    }
    if (dateTo) {
      conditions.push('pi.created_at <= ?');
      bindings.push(dateTo + ' 23:59:59');
    }

    const whereClause = conditions.length > 0 ? 'WHERE ' + conditions.join(' AND ') : '';

    // Summary stats (always unfiltered for global overview)
    const totalAll = await env.DB.prepare(
      `SELECT COUNT(*) as count FROM payment_initiations`
    ).first();

    const totalCompleted = await env.DB.prepare(
      `SELECT COUNT(*) as count FROM payment_initiations WHERE status = 'completed'`
    ).first();

    const totalFailed = await env.DB.prepare(
      `SELECT COUNT(*) as count FROM payment_initiations WHERE status = 'failed'`
    ).first();

    // Abandoned = initiated for over 2 hours (not just pending)
    const totalAbandoned = await env.DB.prepare(
      `SELECT COUNT(*) as count FROM payment_initiations WHERE status = 'initiated' AND created_at < datetime('now', '-2 hours')`
    ).first();

    // Pending = initiated within last 2 hours (still might complete)
    const totalPending = await env.DB.prepare(
      `SELECT COUNT(*) as count FROM payment_initiations WHERE status = 'initiated' AND created_at >= datetime('now', '-2 hours')`
    ).first();

    const conversionRate = totalAll?.count > 0
      ? ((totalCompleted?.count || 0) / totalAll.count * 100).toFixed(1)
      : '0.0';

    // Breakdown by source
    const bySource = await env.DB.prepare(`
      SELECT source, status, COUNT(*) as count
      FROM payment_initiations
      GROUP BY source, status
      ORDER BY source
    `).all();

    // Breakdown by product type
    const byProduct = await env.DB.prepare(`
      SELECT product_type, status, COUNT(*) as count
      FROM payment_initiations
      GROUP BY product_type, status
      ORDER BY product_type
    `).all();

    // Daily trend (last 30 days)
    const dailyTrend = await env.DB.prepare(`
      SELECT
        DATE(created_at) as date,
        COUNT(*) as total,
        SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed,
        SUM(CASE WHEN status = 'initiated' THEN 1 ELSE 0 END) as pending
      FROM payment_initiations
      WHERE created_at >= datetime('now', '-30 days')
      GROUP BY DATE(created_at)
      ORDER BY date DESC
    `).all();

    // Paginated list with filters
    const countQuery = await env.DB.prepare(
      `SELECT COUNT(*) as count FROM payment_initiations pi ${whereClause}`
    ).bind(...bindings).first();

    const total = countQuery?.count || 0;
    const totalPages = Math.ceil(total / limit);

    const listQuery = await env.DB.prepare(`
      SELECT
        pi.*,
        u.name as user_name,
        u.email as user_email,
        u.picture as user_picture
      FROM payment_initiations pi
      LEFT JOIN users u ON pi.user_id = u.id
      ${whereClause}
      ORDER BY pi.created_at DESC
      LIMIT ? OFFSET ?
    `).bind(...bindings, limit, offset).all();

    return new Response(JSON.stringify({
      summary: {
        totalInitiated: totalAll?.count || 0,
        completed: totalCompleted?.count || 0,
        failed: totalFailed?.count || 0,
        abandoned: totalAbandoned?.count || 0,
        pending: totalPending?.count || 0,
        conversionRate: parseFloat(conversionRate),
      },
      bySource: bySource?.results || [],
      byProduct: byProduct?.results || [],
      dailyTrend: dailyTrend?.results || [],
      list: listQuery?.results || [],
      pagination: {
        page,
        totalPages,
        total,
        limit,
      },
    }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('[Payment Analytics] Error:', error);
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}
