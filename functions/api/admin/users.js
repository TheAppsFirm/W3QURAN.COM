/**
 * Admin API - User Management
 * Protected: Only accessible by admin email
 */

// Admin emails - set via ADMIN_EMAILS environment variable (comma-separated)
// Example: ADMIN_EMAILS=admin@example.com,theappsfirm@gmail.com
const getAdminEmails = (env) => {
  const emails = env.ADMIN_EMAILS || 'theappsfirm@gmail.com';
  return emails.split(',').map(e => e.trim().toLowerCase());
};

// Helper to verify admin session
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

export async function onRequest(context) {
  const { env, request } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Verify admin access
  const auth = await verifyAdminSession(request, env);
  if (auth.error) {
    return new Response(JSON.stringify({ error: auth.error }), {
      status: auth.status,
      headers: corsHeaders,
    });
  }

  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const search = url.searchParams.get('search') || '';
    const tier = url.searchParams.get('tier') || '';
    const offset = (page - 1) * limit;

    if (request.method === 'GET') {
      // Build query with filters
      let whereClause = '1=1';
      const params = [];

      if (search) {
        whereClause += ' AND (u.email LIKE ? OR u.name LIKE ?)';
        params.push(`%${search}%`, `%${search}%`);
      }

      if (tier) {
        whereClause += ' AND COALESCE(c.subscription_tier, "free") = ?';
        params.push(tier);
      }

      // Get total count
      const countQuery = await env.DB.prepare(`
        SELECT COUNT(*) as total
        FROM users u
        LEFT JOIN user_credits c ON u.id = c.user_id
        WHERE ${whereClause}
      `).bind(...params).first();

      // Get users with their credits and subscriptions
      const users = await env.DB.prepare(`
        SELECT
          u.id,
          u.email,
          u.name,
          u.picture,
          u.created_at,
          COALESCE(c.subscription_tier, 'free') as tier,
          COALESCE(c.credits_balance, 0) as credits,
          COALESCE(c.credits_monthly_allowance, 0) as monthly_allowance,
          COALESCE(c.credits_used_this_month, 0) as used_this_month,
          c.lifetime_purchase,
          s.plan as subscription_plan,
          s.status as subscription_status,
          s.stripe_customer_id,
          s.current_period_end
        FROM users u
        LEFT JOIN user_credits c ON u.id = c.user_id
        LEFT JOIN subscriptions s ON u.id = s.user_id
        WHERE ${whereClause}
        ORDER BY u.created_at DESC
        LIMIT ? OFFSET ?
      `).bind(...params, limit, offset).all();

      // Get conversation counts per user
      const convCounts = await env.DB.prepare(`
        SELECT user_id, COUNT(*) as count
        FROM quran_conversations
        GROUP BY user_id
      `).all();

      const convMap = {};
      (convCounts.results || []).forEach(c => {
        convMap[c.user_id] = c.count;
      });

      // Add conversation count to each user
      const usersWithConv = (users.results || []).map(u => ({
        ...u,
        conversation_count: convMap[u.id] || 0,
      }));

      return new Response(JSON.stringify({
        users: usersWithConv,
        pagination: {
          total: countQuery?.total || 0,
          page,
          limit,
          totalPages: Math.ceil((countQuery?.total || 0) / limit),
        },
      }), {
        status: 200,
        headers: corsHeaders,
      });
    }

    // PUT - Update user
    if (request.method === 'PUT') {
      const { userId, credits, tier, monthlyAllowance } = await request.json();

      if (!userId) {
        return new Response(JSON.stringify({ error: 'User ID required' }), {
          status: 400,
          headers: corsHeaders,
        });
      }

      // Update user credits
      await env.DB.prepare(`
        INSERT INTO user_credits (user_id, credits_balance, subscription_tier, credits_monthly_allowance)
        VALUES (?, ?, ?, ?)
        ON CONFLICT(user_id) DO UPDATE SET
          credits_balance = COALESCE(?, credits_balance),
          subscription_tier = COALESCE(?, subscription_tier),
          credits_monthly_allowance = COALESCE(?, credits_monthly_allowance),
          updated_at = datetime('now')
      `).bind(
        userId, credits || 0, tier || 'free', monthlyAllowance || 0,
        credits, tier, monthlyAllowance
      ).run();

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('[Admin Users] Error:', error);
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}
