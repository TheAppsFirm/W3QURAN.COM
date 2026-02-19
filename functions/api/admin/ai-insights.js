/**
 * AI Insights API
 * Uses GPT-4o to analyze metrics and provide actionable business recommendations
 *
 * POST /api/admin/ai-insights
 * Body: { analysisType: 'full' | 'quick' | 'revenue' | 'growth' }
 *
 * GET /api/admin/ai-insights
 * Returns cached insights if available and not expired
 */

export async function onRequest(context) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
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
    if (request.method === 'GET') {
      // Return cached insights if available
      return await getCachedInsights(env, corsHeaders);
    }

    if (request.method === 'POST') {
      // Generate new insights
      const body = await request.json();
      const analysisType = body.analysisType || 'full';
      return await generateInsights(env, analysisType, corsHeaders);
    }

    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('[AI Insights] Error:', error);
    return new Response(JSON.stringify({
      error: 'Failed to generate insights',
      message: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

/**
 * Get cached insights if not expired
 */
async function getCachedInsights(env, corsHeaders) {
  const cached = await env.DB.prepare(`
    SELECT insights_json, metrics_snapshot, generated_at
    FROM ai_insights
    WHERE expires_at > datetime('now')
    ORDER BY generated_at DESC
    LIMIT 1
  `).first();

  if (cached) {
    return new Response(JSON.stringify({
      ...JSON.parse(cached.insights_json),
      generatedAt: cached.generated_at,
      metricsSnapshot: JSON.parse(cached.metrics_snapshot || '{}'),
      fromCache: true
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({
    error: 'No cached insights available',
    message: 'Use POST to generate new insights'
  }), {
    status: 404,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

/**
 * Generate new insights using GPT-4o
 */
async function generateInsights(env, analysisType, corsHeaders) {
  // Fetch current metrics
  const metrics = await fetchMetricsForAI(env);

  // Build the prompt based on analysis type
  const systemPrompt = buildSystemPrompt(analysisType);
  const userPrompt = buildUserPrompt(metrics, analysisType);

  // Call GPT-4o
  const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 2000,
      response_format: { type: 'json_object' }
    })
  });

  if (!openaiResponse.ok) {
    const error = await openaiResponse.text();
    console.error('[AI Insights] OpenAI error:', error);
    throw new Error('Failed to get AI response');
  }

  const aiResult = await openaiResponse.json();
  const content = aiResult.choices[0]?.message?.content;

  if (!content) {
    throw new Error('Empty AI response');
  }

  // Parse the AI response
  let insights;
  try {
    insights = JSON.parse(content);
  } catch (e) {
    console.error('[AI Insights] Failed to parse AI response:', content);
    throw new Error('Invalid AI response format');
  }

  // Add metadata
  const response = {
    analysisType,
    generatedAt: new Date().toISOString(),
    insights: insights.insights || [],
    weeklyTrends: insights.weeklyTrends || {},
    recommendations: insights.recommendations || [],
    marketingTips: insights.marketingTips || [],
    summary: insights.summary || ''
  };

  // Cache the result (6 hours expiry)
  const expiresAt = new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString();
  await env.DB.prepare(`
    INSERT INTO ai_insights (insight_type, insights_json, metrics_snapshot, generated_at, expires_at)
    VALUES (?, ?, ?, ?, ?)
  `).bind(
    analysisType,
    JSON.stringify(response),
    JSON.stringify(metrics),
    response.generatedAt,
    expiresAt
  ).run();

  return new Response(JSON.stringify({
    ...response,
    metricsSnapshot: metrics,
    fromCache: false
  }), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}

/**
 * Fetch metrics for AI analysis
 */
async function fetchMetricsForAI(env) {
  const today = new Date().toISOString().split('T')[0];
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const [
    totalUsers,
    newUsersThisMonth,
    newUsersThisWeek,
    activeUsersThisWeek,
    subscriptionsByTier,
    mrr,
    dailyUsageLimitHits,
    topSurahs,
    errorsByBrowser,
    talkToQuranStats,
    featureUsage
  ] = await Promise.all([
    // Total users
    env.DB.prepare('SELECT COUNT(*) as count FROM users').first(),

    // New users this month
    env.DB.prepare(`
      SELECT COUNT(*) as count FROM users
      WHERE DATE(created_at) >= ?
    `).bind(thirtyDaysAgo).first(),

    // New users this week
    env.DB.prepare(`
      SELECT COUNT(*) as count FROM users
      WHERE DATE(created_at) >= ?
    `).bind(sevenDaysAgo).first(),

    // Active users this week
    env.DB.prepare(`
      SELECT COUNT(DISTINCT COALESCE(user_id, session_id)) as count
      FROM analytics_events
      WHERE DATE(created_at) >= ?
    `).bind(sevenDaysAgo).first(),

    // Subscriptions by tier
    env.DB.prepare(`
      SELECT subscription_tier as tier, COUNT(*) as count
      FROM user_credits
      GROUP BY subscription_tier
    `).all(),

    // MRR
    env.DB.prepare(`
      SELECT SUM(CASE
        WHEN plan LIKE '%starter_monthly%' THEN 3
        WHEN plan LIKE '%premium_monthly%' THEN 7
        WHEN plan LIKE '%scholar_monthly%' THEN 20
        WHEN plan LIKE '%starter_yearly%' THEN 2.5
        WHEN plan LIKE '%premium_yearly%' THEN 5.83
        WHEN plan LIKE '%scholar_yearly%' THEN 16.67
        ELSE 0
      END) as mrr
      FROM subscriptions WHERE status = 'active'
    `).first(),

    // Users hitting daily free limit
    env.DB.prepare(`
      SELECT COUNT(DISTINCT user_id) as count
      FROM free_daily_usage
      WHERE query_count >= 5 AND DATE(created_at) >= ?
    `).bind(sevenDaysAgo).first(),

    // Top surahs (last 30 days)
    env.DB.prepare(`
      SELECT surah_id, COUNT(*) as count
      FROM analytics_events
      WHERE event_type = 'surah_read' AND surah_id IS NOT NULL
      AND DATE(created_at) >= ?
      GROUP BY surah_id ORDER BY count DESC LIMIT 5
    `).bind(thirtyDaysAgo).all(),

    // Errors by browser
    env.DB.prepare(`
      SELECT browser, COUNT(*) as count
      FROM app_logs
      WHERE log_level IN ('error', 'critical') AND DATE(created_at) >= ?
      GROUP BY browser ORDER BY count DESC
    `).bind(sevenDaysAgo).all(),

    // Talk to Quran stats
    env.DB.prepare(`
      SELECT
        COUNT(*) as total,
        COUNT(DISTINCT user_id) as unique_users,
        (SELECT COUNT(*) FROM quran_conversations WHERE DATE(created_at) = ?) as today
      FROM quran_conversations
      WHERE DATE(created_at) >= ?
    `).bind(today, thirtyDaysAgo).first(),

    // Feature usage (top 5)
    env.DB.prepare(`
      SELECT feature_name, COUNT(*) as count
      FROM analytics_events
      WHERE event_type = 'feature_use' AND feature_name IS NOT NULL
      AND DATE(created_at) >= ?
      GROUP BY feature_name ORDER BY count DESC LIMIT 5
    `).bind(sevenDaysAgo).all()
  ]);

  // Calculate conversion rate
  const paidUsers = (subscriptionsByTier.results || [])
    .filter(t => t.tier && t.tier !== 'free')
    .reduce((sum, t) => sum + t.count, 0);

  return {
    totalUsers: totalUsers?.count || 0,
    newUsersThisMonth: newUsersThisMonth?.count || 0,
    newUsersThisWeek: newUsersThisWeek?.count || 0,
    activeUsersThisWeek: activeUsersThisWeek?.count || 0,
    mrr: mrr?.mrr || 0,
    conversionRate: totalUsers?.count ? Math.round((paidUsers / totalUsers.count) * 100 * 10) / 10 : 0,
    subscriptionsByTier: subscriptionsByTier.results || [],
    freeUsersHittingLimit: dailyUsageLimitHits?.count || 0,
    topSurahs: topSurahs.results || [],
    errorsByBrowser: errorsByBrowser.results || [],
    talkToQuran: {
      totalConversations: talkToQuranStats?.total || 0,
      uniqueUsers: talkToQuranStats?.unique_users || 0,
      conversationsToday: talkToQuranStats?.today || 0
    },
    featureUsage: featureUsage.results || []
  };
}

/**
 * Build system prompt for GPT-4o
 */
function buildSystemPrompt(analysisType) {
  return `You are a senior business growth analyst specializing in SaaS products, specifically for w3Quran - an Islamic Quran learning app with premium subscriptions.

BUSINESS MODEL:
- Freemium SaaS with 4 paid tiers:
  - Starter: $3/month (30 AI credits)
  - Premium: $7/month (80 AI credits)
  - Scholar: $20/month (300 AI credits)
  - Lifetime: $49 one-time (100 credits forever)
- Key premium feature: "Talk to Quran" - AI-powered Quranic Q&A (uses credits)
- Free tier: 5 questions/day limit

TARGET AUDIENCE:
- Muslims worldwide
- Primary languages: English, Urdu, Arabic
- Peak usage during Islamic prayer times and Ramadan

YOUR TASK:
Analyze the provided metrics and return a JSON object with actionable insights to maximize revenue and user growth.

RESPONSE FORMAT (must be valid JSON):
{
  "summary": "Brief 1-2 sentence executive summary",
  "insights": [
    {
      "id": "unique_id",
      "priority": "high|medium|low",
      "category": "revenue|growth|retention|marketing|technical",
      "title": "Brief title (max 60 chars)",
      "description": "Detailed explanation of the finding",
      "action": "Specific actionable step to take",
      "potentialRevenue": 123,
      "effort": "low|medium|high",
      "confidence": 0.85
    }
  ],
  "weeklyTrends": {
    "revenueChange": "+12%",
    "userGrowth": "+8%",
    "engagementScore": 7.2
  },
  "recommendations": [
    {
      "action": "What to do",
      "impact": "high|medium|low",
      "effort": "low|medium|high",
      "timeframe": "immediate|this_week|this_month"
    }
  ],
  "marketingTips": [
    "Specific marketing suggestion based on data"
  ]
}

IMPORTANT:
- Prioritize insights by revenue impact
- Be specific with dollar amounts when possible
- Focus on actionable steps, not vague advice
- Consider the Islamic/Quranic context of the app
- ${analysisType === 'revenue' ? 'Focus primarily on revenue optimization opportunities' : ''}
- ${analysisType === 'growth' ? 'Focus primarily on user acquisition and retention' : ''}
- ${analysisType === 'quick' ? 'Provide only top 3 most critical insights' : 'Provide 5-7 comprehensive insights'}`;
}

/**
 * Build user prompt with metrics data
 */
function buildUserPrompt(metrics, analysisType) {
  return `Please analyze these metrics for w3Quran and provide ${analysisType === 'quick' ? '3 critical' : '5-7 comprehensive'} actionable insights:

CURRENT METRICS (as of ${new Date().toISOString().split('T')[0]}):

USER METRICS:
- Total Users: ${metrics.totalUsers}
- New Users This Month: ${metrics.newUsersThisMonth}
- New Users This Week: ${metrics.newUsersThisWeek}
- Active Users This Week: ${metrics.activeUsersThisWeek}
- User Growth Rate: ${metrics.totalUsers > 0 ? Math.round((metrics.newUsersThisMonth / metrics.totalUsers) * 100) : 0}%

REVENUE METRICS:
- Monthly Recurring Revenue (MRR): $${metrics.mrr}
- Conversion Rate (free to paid): ${metrics.conversionRate}%
- Subscriptions by Tier: ${JSON.stringify(metrics.subscriptionsByTier)}

ENGAGEMENT SIGNALS:
- Free Users Hitting Daily Limit (potential upgrades): ${metrics.freeUsersHittingLimit}
- Top Read Surahs: ${JSON.stringify(metrics.topSurahs)}
- Feature Usage: ${JSON.stringify(metrics.featureUsage)}

TALK TO QURAN (Premium Feature):
- Total Conversations (30d): ${metrics.talkToQuran.totalConversations}
- Unique Users: ${metrics.talkToQuran.uniqueUsers}
- Conversations Today: ${metrics.talkToQuran.conversationsToday}

TECHNICAL HEALTH:
- Errors by Browser: ${JSON.stringify(metrics.errorsByBrowser)}

Based on this data, what are the most impactful actions the founder should take to maximize revenue and growth? Be specific with estimated revenue impact.`;
}
