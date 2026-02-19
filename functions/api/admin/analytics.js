/**
 * Admin Analytics API
 * Provides comprehensive analytics data for the admin dashboard
 *
 * GET /api/admin/analytics
 * Query params:
 *   - period: 'today' | '7d' | '30d' | '90d' | 'ytd' (default: '30d')
 *   - metrics: 'users,revenue,content,errors' (comma-separated, default: all)
 */

export async function onRequest(context) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  // Verify admin authentication
  const cookies = request.headers.get('Cookie') || '';
  const sessionMatch = cookies.match(/w3quran_session=([^;]+)/);

  if (!sessionMatch) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  const sessionToken = sessionMatch[1];
  const user = await env.DB.prepare(`
    SELECT u.id, u.email FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.token = ? AND s.expires_at > datetime('now')
  `).bind(sessionToken).first();

  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid session' }), {
      status: 401,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  // Check admin status
  const adminEmails = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase());
  const isAdmin = adminEmails.includes(user.email.toLowerCase());

  if (!isAdmin) {
    return new Response(JSON.stringify({ error: 'Admin access required' }), {
      status: 403,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    const url = new URL(request.url);
    const period = url.searchParams.get('period') || '30d';
    const metricsParam = url.searchParams.get('metrics') || 'users,revenue,content,errors';
    const requestedMetrics = metricsParam.split(',').map(m => m.trim());

    // Calculate date range
    const dateRange = getDateRange(period);

    const response = {
      period,
      dateRange,
      generatedAt: new Date().toISOString()
    };

    // Fetch metrics in parallel
    const promises = [];

    if (requestedMetrics.includes('realtime')) {
      promises.push(getRealtimeMetrics(env).then(data => response.realtime = data));
    }

    if (requestedMetrics.includes('users')) {
      promises.push(getUserMetrics(env, dateRange).then(data => response.users = data));
    }

    if (requestedMetrics.includes('revenue')) {
      promises.push(getRevenueMetrics(env, dateRange).then(data => response.revenue = data));
    }

    if (requestedMetrics.includes('content')) {
      promises.push(getContentMetrics(env, dateRange).then(data => response.content = data));
    }

    if (requestedMetrics.includes('errors')) {
      promises.push(getErrorMetrics(env, dateRange).then(data => response.errors = data));
    }

    await Promise.all(promises);

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('[Admin Analytics] Error:', error);
    return new Response(JSON.stringify({
      error: 'Failed to fetch analytics',
      message: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
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
    case 'today':
      start = end;
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
    case 'ytd':
      start = `${now.getFullYear()}-01-01`;
      break;
    default:
      start = new Date(now - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  }

  return { start, end };
}

/**
 * Get real-time metrics (current state)
 */
async function getRealtimeMetrics(env) {
  const today = new Date().toISOString().split('T')[0];
  const now = new Date();
  const fiveMinutesAgo = new Date(now - 5 * 60 * 1000).toISOString();

  const [usersOnline, sessionsToday, revenueToday, creditsUsedToday] = await Promise.all([
    // Active users in last 5 minutes
    env.DB.prepare(`
      SELECT COUNT(DISTINCT session_id) as count
      FROM analytics_events
      WHERE created_at >= ?
    `).bind(fiveMinutesAgo).first(),

    // Sessions today
    env.DB.prepare(`
      SELECT COUNT(DISTINCT session_id) as count
      FROM analytics_events
      WHERE DATE(created_at) = ?
    `).bind(today).first(),

    // Revenue today (from subscriptions created today)
    env.DB.prepare(`
      SELECT
        SUM(CASE
          WHEN plan LIKE '%starter%' THEN 3
          WHEN plan LIKE '%premium%' THEN 7
          WHEN plan LIKE '%scholar%' THEN 20
          WHEN plan LIKE '%lifetime%' THEN 49
          ELSE 0
        END) as total
      FROM subscriptions
      WHERE DATE(created_at) = ? AND status = 'active'
    `).bind(today).first(),

    // AI credits used today
    env.DB.prepare(`
      SELECT ABS(SUM(amount)) as total
      FROM credit_transactions
      WHERE type = 'use' AND DATE(created_at) = ?
    `).bind(today).first()
  ]);

  return {
    usersOnline: usersOnline?.count || 0,
    sessionsToday: sessionsToday?.count || 0,
    revenueToday: revenueToday?.total || 0,
    creditsUsedToday: creditsUsedToday?.total || 0
  };
}

/**
 * Get user engagement metrics
 */
async function getUserMetrics(env, dateRange) {
  const { start, end } = dateRange;

  // DAU for each day in range
  const dauResult = await env.DB.prepare(`
    SELECT DATE(created_at) as date, COUNT(DISTINCT COALESCE(user_id, session_id)) as count
    FROM analytics_events
    WHERE DATE(created_at) BETWEEN ? AND ?
    GROUP BY DATE(created_at)
    ORDER BY date
  `).bind(start, end).all();

  // WAU (Weekly Active Users)
  const wauResult = await env.DB.prepare(`
    SELECT COUNT(DISTINCT COALESCE(user_id, session_id)) as count
    FROM analytics_events
    WHERE created_at >= datetime('now', '-7 days')
  `).first();

  // MAU (Monthly Active Users)
  const mauResult = await env.DB.prepare(`
    SELECT COUNT(DISTINCT COALESCE(user_id, session_id)) as count
    FROM analytics_events
    WHERE created_at >= datetime('now', '-30 days')
  `).first();

  // New users in period
  const newUsersResult = await env.DB.prepare(`
    SELECT COUNT(*) as count
    FROM users
    WHERE DATE(created_at) BETWEEN ? AND ?
  `).bind(start, end).first();

  // Users by device type
  const byDeviceResult = await env.DB.prepare(`
    SELECT
      COALESCE(device, 'unknown') as device,
      COUNT(DISTINCT COALESCE(user_id, session_id)) as count
    FROM app_logs
    WHERE DATE(created_at) BETWEEN ? AND ?
    GROUP BY device
    ORDER BY count DESC
  `).bind(start, end).all();

  // Users by browser
  const byBrowserResult = await env.DB.prepare(`
    SELECT
      COALESCE(browser, 'unknown') as browser,
      COUNT(DISTINCT COALESCE(user_id, session_id)) as count
    FROM app_logs
    WHERE DATE(created_at) BETWEEN ? AND ?
    GROUP BY browser
    ORDER BY count DESC
  `).bind(start, end).all();

  // Session duration (average)
  const sessionDurationResult = await env.DB.prepare(`
    SELECT AVG(duration_seconds) as avg_duration
    FROM analytics_events
    WHERE event_type = 'session_end' AND DATE(created_at) BETWEEN ? AND ?
  `).bind(start, end).first();

  // Retention calculation (D1, D7, D30)
  const retention = await calculateRetention(env);

  return {
    dau: dauResult.results || [],
    wau: wauResult?.count || 0,
    mau: mauResult?.count || 0,
    newUsers: newUsersResult?.count || 0,
    byDevice: byDeviceResult.results || [],
    byBrowser: byBrowserResult.results || [],
    avgSessionDuration: Math.round(sessionDurationResult?.avg_duration || 0),
    retention
  };
}

/**
 * Calculate user retention rates
 */
async function calculateRetention(env) {
  // Users who signed up 1 day ago and came back today
  const d1Result = await env.DB.prepare(`
    SELECT
      (SELECT COUNT(DISTINCT user_id) FROM analytics_events
       WHERE user_id IN (SELECT id FROM users WHERE DATE(created_at) = DATE('now', '-1 day'))
       AND DATE(created_at) = DATE('now')) * 100.0 /
      NULLIF((SELECT COUNT(*) FROM users WHERE DATE(created_at) = DATE('now', '-1 day')), 0) as rate
  `).first();

  // Users who signed up 7 days ago and were active in last 7 days
  const d7Result = await env.DB.prepare(`
    SELECT
      (SELECT COUNT(DISTINCT user_id) FROM analytics_events
       WHERE user_id IN (SELECT id FROM users WHERE DATE(created_at) <= DATE('now', '-7 days'))
       AND DATE(created_at) >= DATE('now', '-7 days')) * 100.0 /
      NULLIF((SELECT COUNT(*) FROM users WHERE DATE(created_at) <= DATE('now', '-7 days')), 0) as rate
  `).first();

  // Users who signed up 30 days ago and were active in last 30 days
  const d30Result = await env.DB.prepare(`
    SELECT
      (SELECT COUNT(DISTINCT user_id) FROM analytics_events
       WHERE user_id IN (SELECT id FROM users WHERE DATE(created_at) <= DATE('now', '-30 days'))
       AND DATE(created_at) >= DATE('now', '-30 days')) * 100.0 /
      NULLIF((SELECT COUNT(*) FROM users WHERE DATE(created_at) <= DATE('now', '-30 days')), 0) as rate
  `).first();

  return {
    day1: Math.round(d1Result?.rate || 0),
    day7: Math.round(d7Result?.rate || 0),
    day30: Math.round(d30Result?.rate || 0)
  };
}

/**
 * Get revenue and subscription metrics
 */
async function getRevenueMetrics(env, dateRange) {
  const { start, end } = dateRange;

  // MRR calculation
  const mrrResult = await env.DB.prepare(`
    SELECT
      SUM(CASE
        WHEN plan LIKE '%starter_monthly%' THEN 3
        WHEN plan LIKE '%premium_monthly%' THEN 7
        WHEN plan LIKE '%scholar_monthly%' THEN 20
        WHEN plan LIKE '%starter_yearly%' THEN 2.5
        WHEN plan LIKE '%premium_yearly%' THEN 5.83
        WHEN plan LIKE '%scholar_yearly%' THEN 16.67
        ELSE 0
      END) as mrr
    FROM subscriptions
    WHERE status = 'active'
  `).first();

  // Revenue by tier
  const byTierResult = await env.DB.prepare(`
    SELECT
      COALESCE(uc.subscription_tier, 'free') as tier,
      COUNT(*) as count
    FROM users u
    LEFT JOIN user_credits uc ON u.id = uc.user_id
    GROUP BY tier
    ORDER BY count DESC
  `).all();

  // Active subscriptions
  const activeSubsResult = await env.DB.prepare(`
    SELECT plan, COUNT(*) as count
    FROM subscriptions
    WHERE status = 'active'
    GROUP BY plan
    ORDER BY count DESC
  `).all();

  // New subscriptions in period
  const newSubsResult = await env.DB.prepare(`
    SELECT DATE(created_at) as date, COUNT(*) as count
    FROM subscriptions
    WHERE DATE(created_at) BETWEEN ? AND ?
    GROUP BY DATE(created_at)
    ORDER BY date
  `).bind(start, end).all();

  // Churn rate (subscriptions cancelled / total active)
  const churnResult = await env.DB.prepare(`
    SELECT
      (SELECT COUNT(*) FROM subscriptions WHERE status = 'cancelled' AND DATE(updated_at) >= DATE('now', '-30 days')) * 100.0 /
      NULLIF((SELECT COUNT(*) FROM subscriptions WHERE status = 'active'), 0) as rate
  `).first();

  // Conversion rate (free to paid)
  const conversionResult = await env.DB.prepare(`
    SELECT
      (SELECT COUNT(DISTINCT user_id) FROM subscriptions WHERE plan != 'free') * 100.0 /
      NULLIF((SELECT COUNT(*) FROM users), 0) as rate
  `).first();

  // LTV by tier (simplified: avg revenue per user by tier)
  const ltvResult = await env.DB.prepare(`
    SELECT
      uc.subscription_tier as tier,
      SUM(ABS(ct.amount)) as total_credits_used
    FROM user_credits uc
    LEFT JOIN credit_transactions ct ON uc.user_id = ct.user_id AND ct.type = 'use'
    WHERE uc.subscription_tier != 'free'
    GROUP BY uc.subscription_tier
  `).all();

  return {
    mrr: Math.round((mrrResult?.mrr || 0) * 100) / 100,
    arr: Math.round((mrrResult?.mrr || 0) * 12 * 100) / 100,
    byTier: byTierResult.results || [],
    activePlans: activeSubsResult.results || [],
    newSubscriptions: newSubsResult.results || [],
    churnRate: Math.round((churnResult?.rate || 0) * 10) / 10,
    conversionRate: Math.round((conversionResult?.rate || 0) * 10) / 10,
    ltv: ltvResult.results || []
  };
}

/**
 * Get content performance metrics
 */
async function getContentMetrics(env, dateRange) {
  const { start, end } = dateRange;

  // Top surahs by reads
  const topSurahsResult = await env.DB.prepare(`
    SELECT surah_id, COUNT(*) as count
    FROM analytics_events
    WHERE event_type = 'surah_read' AND surah_id IS NOT NULL
    AND DATE(created_at) BETWEEN ? AND ?
    GROUP BY surah_id
    ORDER BY count DESC
    LIMIT 10
  `).bind(start, end).all();

  // Top features by usage
  const topFeaturesResult = await env.DB.prepare(`
    SELECT feature_name, COUNT(*) as count
    FROM analytics_events
    WHERE event_type = 'feature_use' AND feature_name IS NOT NULL
    AND DATE(created_at) BETWEEN ? AND ?
    GROUP BY feature_name
    ORDER BY count DESC
    LIMIT 10
  `).bind(start, end).all();

  // Audio play stats
  const audioStatsResult = await env.DB.prepare(`
    SELECT
      COUNT(*) as total_plays,
      AVG(duration_seconds) as avg_duration,
      AVG(completion_percent) as avg_completion
    FROM analytics_events
    WHERE event_type = 'audio_play'
    AND DATE(created_at) BETWEEN ? AND ?
  `).bind(start, end).first();

  // Top search queries
  const searchQueriesResult = await env.DB.prepare(`
    SELECT search_query, COUNT(*) as count
    FROM analytics_events
    WHERE event_type = 'search' AND search_query IS NOT NULL
    AND DATE(created_at) BETWEEN ? AND ?
    GROUP BY search_query
    ORDER BY count DESC
    LIMIT 20
  `).bind(start, end).all();

  // Talk to Quran usage
  const talkToQuranResult = await env.DB.prepare(`
    SELECT
      COUNT(*) as total_conversations,
      COUNT(DISTINCT user_id) as unique_users
    FROM quran_conversations
    WHERE DATE(created_at) BETWEEN ? AND ?
  `).bind(start, end).first();

  // Tafseer usage by source
  const tafseerUsageResult = await env.DB.prepare(`
    SELECT
      JSON_EXTRACT(metadata, '$.tafseer_source') as source,
      COUNT(*) as count
    FROM analytics_events
    WHERE event_type = 'feature_use' AND feature_name = 'tafseer'
    AND DATE(created_at) BETWEEN ? AND ?
    GROUP BY source
    ORDER BY count DESC
    LIMIT 10
  `).bind(start, end).all();

  return {
    topSurahs: topSurahsResult.results || [],
    topFeatures: topFeaturesResult.results || [],
    audioStats: {
      totalPlays: audioStatsResult?.total_plays || 0,
      avgDuration: Math.round(audioStatsResult?.avg_duration || 0),
      avgCompletion: Math.round(audioStatsResult?.avg_completion || 0)
    },
    searchQueries: searchQueriesResult.results || [],
    talkToQuran: {
      totalConversations: talkToQuranResult?.total_conversations || 0,
      uniqueUsers: talkToQuranResult?.unique_users || 0
    },
    tafseerUsage: tafseerUsageResult.results || []
  };
}

/**
 * Get error and performance metrics
 */
async function getErrorMetrics(env, dateRange) {
  const { start, end } = dateRange;

  // Error rate (errors / total logs)
  const errorRateResult = await env.DB.prepare(`
    SELECT
      (SELECT COUNT(*) FROM app_logs WHERE log_level IN ('error', 'critical') AND DATE(created_at) BETWEEN ? AND ?) * 100.0 /
      NULLIF((SELECT COUNT(*) FROM app_logs WHERE DATE(created_at) BETWEEN ? AND ?), 0) as rate
  `).bind(start, end, start, end).first();

  // Errors by browser
  const byBrowserResult = await env.DB.prepare(`
    SELECT browser, COUNT(*) as count
    FROM app_logs
    WHERE log_level IN ('error', 'critical')
    AND DATE(created_at) BETWEEN ? AND ?
    GROUP BY browser
    ORDER BY count DESC
  `).bind(start, end).all();

  // Errors by surah
  const bySurahResult = await env.DB.prepare(`
    SELECT surah_id, COUNT(*) as count
    FROM app_logs
    WHERE log_level IN ('error', 'critical') AND surah_id IS NOT NULL
    AND DATE(created_at) BETWEEN ? AND ?
    GROUP BY surah_id
    ORDER BY count DESC
    LIMIT 10
  `).bind(start, end).all();

  // Top error messages
  const topErrorsResult = await env.DB.prepare(`
    SELECT message, COUNT(*) as count
    FROM app_logs
    WHERE log_level IN ('error', 'critical')
    AND DATE(created_at) BETWEEN ? AND ?
    GROUP BY message
    ORDER BY count DESC
    LIMIT 10
  `).bind(start, end).all();

  // Error trend (daily)
  const errorTrendResult = await env.DB.prepare(`
    SELECT DATE(created_at) as date, COUNT(*) as count
    FROM app_logs
    WHERE log_level IN ('error', 'critical')
    AND DATE(created_at) BETWEEN ? AND ?
    GROUP BY DATE(created_at)
    ORDER BY date
  `).bind(start, end).all();

  // Memory warnings
  const memoryWarningsResult = await env.DB.prepare(`
    SELECT COUNT(*) as count, AVG(memory_percent) as avg_percent, MAX(memory_percent) as max_percent
    FROM app_logs
    WHERE log_type = 'memory'
    AND DATE(created_at) BETWEEN ? AND ?
  `).bind(start, end).first();

  return {
    errorRate: Math.round((errorRateResult?.rate || 0) * 100) / 100,
    byBrowser: byBrowserResult.results || [],
    bySurah: bySurahResult.results || [],
    topErrors: topErrorsResult.results || [],
    trend: errorTrendResult.results || [],
    memoryWarnings: {
      count: memoryWarningsResult?.count || 0,
      avgPercent: Math.round(memoryWarningsResult?.avg_percent || 0),
      maxPercent: memoryWarningsResult?.max_percent || 0
    }
  };
}
