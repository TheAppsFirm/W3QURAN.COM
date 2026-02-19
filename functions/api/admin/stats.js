/**
 * Admin API - Dashboard Statistics
 * Protected: Only accessible by admin email
 */

// Admin email
const ADMIN_EMAIL = 'theappsfirm@gmail.com';

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

  if (result.email !== ADMIN_EMAIL) {
    return { error: 'Access denied. Admin only.', status: 403 };
  }

  return { user: result };
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

  // Verify admin access
  const auth = await verifyAdminSession(request, env);
  if (auth.error) {
    return new Response(JSON.stringify({ error: auth.error }), {
      status: auth.status,
      headers: corsHeaders,
    });
  }

  try {
    // Total users
    const totalUsers = await env.DB.prepare(`
      SELECT COUNT(*) as count FROM users
    `).first();

    // Users by tier
    const usersByTier = await env.DB.prepare(`
      SELECT
        COALESCE(subscription_tier, 'free') as tier,
        COUNT(*) as count
      FROM user_credits
      GROUP BY subscription_tier
    `).all();

    // Free users (no credits record)
    const freeUsersNoRecord = await env.DB.prepare(`
      SELECT COUNT(*) as count
      FROM users u
      LEFT JOIN user_credits c ON u.id = c.user_id
      WHERE c.user_id IS NULL
    `).first();

    // Active subscriptions
    const activeSubscriptions = await env.DB.prepare(`
      SELECT
        plan,
        COUNT(*) as count
      FROM subscriptions
      WHERE status = 'active'
      GROUP BY plan
    `).all();

    // Total revenue estimate (based on active subscriptions)
    const revenueEstimate = await env.DB.prepare(`
      SELECT
        SUM(CASE
          WHEN plan = 'starter_monthly' THEN 3
          WHEN plan = 'premium_monthly' THEN 7
          WHEN plan = 'premium_yearly' THEN 5 -- monthly avg
          WHEN plan = 'scholar_monthly' THEN 20
          WHEN plan = 'scholar_yearly' THEN 16.67 -- monthly avg
          WHEN plan = 'lifetime' THEN 0 -- already paid
          ELSE 0
        END) as monthly_revenue
      FROM subscriptions
      WHERE status = 'active'
    `).first();

    // Credit usage stats
    const creditStats = await env.DB.prepare(`
      SELECT
        SUM(credits_balance) as total_credits_available,
        SUM(credits_used_this_month) as total_used_this_month,
        AVG(credits_used_this_month) as avg_usage_per_user
      FROM user_credits
      WHERE subscription_tier != 'free'
    `).first();

    // Conversation stats
    const conversationStats = await env.DB.prepare(`
      SELECT
        COUNT(*) as total_conversations,
        COUNT(DISTINCT user_id) as unique_users
      FROM quran_conversations
    `).first();

    // Conversations today
    const conversationsToday = await env.DB.prepare(`
      SELECT COUNT(*) as count
      FROM quran_conversations
      WHERE DATE(created_at) = DATE('now')
    `).first();

    // Conversations this week
    const conversationsWeek = await env.DB.prepare(`
      SELECT COUNT(*) as count
      FROM quran_conversations
      WHERE created_at >= datetime('now', '-7 days')
    `).first();

    // Recent transactions
    const recentTransactions = await env.DB.prepare(`
      SELECT
        t.*,
        u.email,
        u.name
      FROM credit_transactions t
      JOIN users u ON t.user_id = u.id
      ORDER BY t.created_at DESC
      LIMIT 20
    `).all();

    // Users registered today
    const usersToday = await env.DB.prepare(`
      SELECT COUNT(*) as count FROM users WHERE DATE(created_at) = DATE('now')
    `).first();

    // Users this week
    const usersWeek = await env.DB.prepare(`
      SELECT COUNT(*) as count FROM users WHERE created_at >= datetime('now', '-7 days')
    `).first();

    // Users this month
    const usersMonth = await env.DB.prepare(`
      SELECT COUNT(*) as count FROM users WHERE created_at >= datetime('now', '-30 days')
    `).first();

    // Lifetime purchases count
    const lifetimeCount = await env.DB.prepare(`
      SELECT COUNT(*) as count FROM user_credits WHERE lifetime_purchase = TRUE
    `).first();

    // Build tier breakdown
    const tierBreakdown = {};
    (usersByTier.results || []).forEach(t => {
      tierBreakdown[t.tier] = t.count;
    });
    // Add users with no credits record as free
    tierBreakdown.free = (tierBreakdown.free || 0) + (freeUsersNoRecord?.count || 0);

    return new Response(JSON.stringify({
      overview: {
        totalUsers: totalUsers?.count || 0,
        usersToday: usersToday?.count || 0,
        usersThisWeek: usersWeek?.count || 0,
        usersThisMonth: usersMonth?.count || 0,
        lifetimePurchases: lifetimeCount?.count || 0,
      },
      subscriptions: {
        byTier: tierBreakdown,
        activePlans: activeSubscriptions?.results || [],
        estimatedMonthlyRevenue: revenueEstimate?.monthly_revenue || 0,
      },
      credits: {
        totalAvailable: creditStats?.total_credits_available || 0,
        totalUsedThisMonth: creditStats?.total_used_this_month || 0,
        avgUsagePerUser: Math.round(creditStats?.avg_usage_per_user || 0),
      },
      conversations: {
        total: conversationStats?.total_conversations || 0,
        uniqueUsers: conversationStats?.unique_users || 0,
        today: conversationsToday?.count || 0,
        thisWeek: conversationsWeek?.count || 0,
      },
      recentTransactions: recentTransactions?.results || [],
    }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('[Admin Stats] Error:', error);
    return new Response(JSON.stringify({ error: 'Server error', details: error.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}
