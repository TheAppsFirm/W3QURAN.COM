/**
 * Admin API - User Feedback Management
 * CRUD operations for user-submitted feedback, bug reports, and feature requests.
 *
 * GET    /api/admin/feedback?type=&status=&page=1&limit=20  — List feedback with filters + stats
 * PATCH  /api/admin/feedback  { id, status }                — Update feedback status
 * DELETE /api/admin/feedback  { id }                         — Delete feedback
 */

async function verifyAdmin(request, env) {
  const cookieHeader = request.headers.get('Cookie') || '';
  const sessionMatch = cookieHeader.match(/w3quran_session=([^;]+)/);
  if (!sessionMatch) return null;

  try {
    const result = await env.DB.prepare(
      'SELECT u.id, u.email, u.name FROM sessions s JOIN users u ON s.user_id = u.id WHERE s.token = ? AND s.expires_at > datetime("now")'
    ).bind(sessionMatch[1]).first();

    if (!result) return null;
    const adminEmails = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase());
    if (!adminEmails.includes(result.email.toLowerCase())) return null;
    return result;
  } catch {
    return null;
  }
}

export async function onRequest(context) {
  const { request, env } = context;

  const headers = { 'Content-Type': 'application/json' };

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503, headers });
  }

  // Verify admin authentication
  const admin = await verifyAdmin(request, env);
  if (!admin) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers });
  }

  try {
    // ─── GET: List feedback with filters, pagination, and stats ───
    if (request.method === 'GET') {
      const url = new URL(request.url);
      const type = url.searchParams.get('type') || '';
      const status = url.searchParams.get('status') || '';
      const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10));
      const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get('limit') || '20', 10)));
      const offset = (page - 1) * limit;

      // Build WHERE clause dynamically
      const conditions = ['1=1'];
      const binds = [];

      if (type) {
        conditions.push('f.type = ?');
        binds.push(type);
      }
      if (status) {
        conditions.push('f.status = ?');
        binds.push(status);
      }

      const where = conditions.join(' AND ');

      // Query items
      const itemsQuery = `
        SELECT f.*, u.name as user_name, u.email as user_email
        FROM user_feedback f
        LEFT JOIN users u ON f.user_id = u.id
        WHERE ${where}
        ORDER BY f.created_at DESC
        LIMIT ? OFFSET ?
      `;
      const itemsBinds = [...binds, limit, offset];

      const itemsResult = await env.DB.prepare(itemsQuery).bind(...itemsBinds).all();
      const items = itemsResult.results || [];

      // Query total count for pagination (with same filters)
      const countQuery = `SELECT COUNT(*) as count FROM user_feedback f WHERE ${where}`;
      const countResult = await env.DB.prepare(countQuery).bind(...binds).first();
      const total = countResult?.count || 0;

      // Query aggregate stats (unfiltered — always show overall stats)
      const statsResult = await env.DB.prepare(`
        SELECT
          COUNT(*) as total,
          SUM(CASE WHEN status = 'new' THEN 1 ELSE 0 END) as new,
          SUM(CASE WHEN type = 'bug' THEN 1 ELSE 0 END) as bugs,
          SUM(CASE WHEN type = 'feature' THEN 1 ELSE 0 END) as features
        FROM user_feedback
      `).first();

      const stats = {
        total: statsResult?.total || 0,
        new: statsResult?.new || 0,
        bugs: statsResult?.bugs || 0,
        features: statsResult?.features || 0,
      };

      return new Response(JSON.stringify({ items, total, stats }), { status: 200, headers });
    }

    // ─── PATCH: Update feedback status ───
    if (request.method === 'PATCH') {
      const body = await request.json();
      const { id, status } = body;

      if (!id) {
        return new Response(JSON.stringify({ error: 'Feedback ID is required' }), { status: 400, headers });
      }

      const validStatuses = ['new', 'reviewed', 'resolved'];
      if (!status || !validStatuses.includes(status)) {
        return new Response(
          JSON.stringify({ error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` }),
          { status: 400, headers }
        );
      }

      await env.DB.prepare(
        "UPDATE user_feedback SET status = ?, updated_at = datetime('now') WHERE id = ?"
      ).bind(status, id).run();

      console.log(`[Admin] Feedback ${id} status updated to ${status} by ${admin.email}`);

      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }

    // ─── DELETE: Delete feedback ───
    if (request.method === 'DELETE') {
      const body = await request.json();
      const { id } = body;

      if (!id) {
        return new Response(JSON.stringify({ error: 'Feedback ID is required' }), { status: 400, headers });
      }

      await env.DB.prepare('DELETE FROM user_feedback WHERE id = ?').bind(id).run();

      console.log(`[Admin] Feedback ${id} deleted by ${admin.email}`);

      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }

    // ─── Unsupported method ───
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers });

  } catch (error) {
    console.error('[Admin] Feedback error:', error);
    const detail = error.message || 'Unknown error';
    // If table doesn't exist, give helpful message
    const msg = detail.includes('no such table')
      ? 'Table "user_feedback" does not exist. Please create it in your D1 database.'
      : `Server error: ${detail}`;
    return new Response(JSON.stringify({ error: msg }), { status: 500, headers });
  }
}
