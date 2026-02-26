/**
 * Credits API
 * GET - Check user's credit balance
 * POST - Purchase credits (handled separately via Stripe)
 */

// Subscription tier credit allowances
const TIER_CREDITS = {
  free: 0, // free users get 5 per day
  starter: 30, // per month
  premium: 80, // per month
  scholar: 300, // per month
  lifetime: 100, // per month forever
};

// Free tier daily limit
const FREE_DAILY_LIMIT = 5;

// Helper to get admin emails from environment
const getAdminEmails = (env) => {
  const emails = env.ADMIN_EMAILS || '';
  if (!emails) return [];
  return emails.split(',').map(e => e.trim().toLowerCase());
};

// Check if user is admin
const isAdminUser = (email, env) => {
  if (!email) return false;
  const adminEmails = getAdminEmails(env);
  return adminEmails.includes(email.toLowerCase());
};

// Get today's date in YYYY-MM-DD format
function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

// Get free user daily usage
async function getFreeDailyUsage(env, userId) {
  const today = getTodayDate();

  const usage = await env.DB.prepare(`
    SELECT * FROM free_daily_usage
    WHERE user_id = ? AND usage_date = ?
  `).bind(userId, today).first();

  if (!usage) {
    return { count: 0, remaining: FREE_DAILY_LIMIT };
  }

  return {
    count: usage.query_count,
    remaining: Math.max(0, FREE_DAILY_LIMIT - usage.query_count)
  };
}

// Helper to verify user session
async function verifySession(request, env) {
  const cookies = request.headers.get('Cookie') || '';
  const sessionMatch = cookies.match(/w3quran_session=([^;]+)/);
  const sessionToken = sessionMatch?.[1];

  if (!sessionToken) {
    return null;
  }

  const result = await env.DB.prepare(`
    SELECT s.user_id, u.email, u.name
    FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.token = ? AND s.expires_at > datetime('now')
  `).bind(sessionToken).first();

  return result;
}

// Get or create user credits record
async function getUserCredits(env, userId) {
  let credits = await env.DB.prepare(`
    SELECT * FROM user_credits WHERE user_id = ?
  `).bind(userId).first();

  if (!credits) {
    // Create new credits record with free tier
    await env.DB.prepare(`
      INSERT INTO user_credits (user_id, credits_balance, credits_monthly_allowance, subscription_tier, free_credits_claimed)
      VALUES (?, 0, 0, 'free', FALSE)
    `).bind(userId).run();

    credits = await env.DB.prepare(`
      SELECT * FROM user_credits WHERE user_id = ?
    `).bind(userId).first();
  }

  return credits;
}

// Check and reset monthly credits if needed
async function checkMonthlyReset(env, userId, credits) {
  const today = new Date().toISOString().split('T')[0];
  const resetDate = credits.credits_reset_date;

  // Check if we need to reset (new month or no reset date)
  if (credits.credits_monthly_allowance > 0 && (!resetDate || resetDate < today)) {
    // Calculate next reset date (1st of next month)
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const nextResetDate = nextMonth.toISOString().split('T')[0];

    // Reset monthly credits
    await env.DB.prepare(`
      UPDATE user_credits
      SET credits_balance = credits_monthly_allowance,
          credits_used_this_month = 0,
          credits_reset_date = ?,
          updated_at = datetime('now')
      WHERE user_id = ?
    `).bind(nextResetDate, userId).run();

    // Log the reset
    const txId = `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await env.DB.prepare(`
      INSERT INTO credit_transactions (id, user_id, type, amount, description)
      VALUES (?, ?, 'monthly_reset', ?, 'Monthly credits reset')
    `).bind(txId, userId, credits.credits_monthly_allowance).run();

    // Return updated credits
    return await getUserCredits(env, userId);
  }

  return credits;
}

export async function onRequest(context) {
  const { env, request } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503, headers: corsHeaders });
  }

  try {
    // Verify user is logged in
    const user = await verifySession(request, env);
    if (!user) {
      return new Response(JSON.stringify({
        error: 'Authentication required',
        code: 'AUTH_REQUIRED'
      }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    if (request.method === 'GET') {
      // Check if user is admin
      const isAdmin = isAdminUser(user.email, env);

      // Get user credits
      let credits = await getUserCredits(env, user.user_id);

      // Check for monthly reset
      credits = await checkMonthlyReset(env, user.user_id, credits);

      // Get recent transactions
      const transactions = await env.DB.prepare(`
        SELECT * FROM credit_transactions
        WHERE user_id = ?
        ORDER BY created_at DESC
        LIMIT 10
      `).bind(user.user_id).all();

      // Get conversation count
      const convCount = await env.DB.prepare(`
        SELECT COUNT(*) as count FROM quran_conversations WHERE user_id = ?
      `).bind(user.user_id).first();

      // Build response based on user type
      let creditsResponse;

      if (isAdmin) {
        // Admin: unlimited access
        creditsResponse = {
          balance: '∞',
          tier: 'admin',
          unlimited: true,
          hasAccess: true,
        };
      } else if (credits.subscription_tier === 'free' || credits.credits_monthly_allowance <= 0) {
        // Free user: NO access to Talk to Quran (premium only)
        creditsResponse = {
          balance: 0,
          tier: 'free',
          hasAccess: false,
          premiumRequired: true,
        };
      } else {
        // Paid user: show credits
        creditsResponse = {
          balance: credits.credits_balance,
          monthlyAllowance: credits.credits_monthly_allowance,
          usedThisMonth: credits.credits_used_this_month,
          resetDate: credits.credits_reset_date,
          tier: credits.subscription_tier,
          isLifetime: credits.lifetime_purchase,
          hasAccess: true,
        };
      }

      return new Response(JSON.stringify({
        credits: creditsResponse,
        stats: {
          totalConversations: convCount?.count || 0,
        },
        recentTransactions: transactions?.results || [],
      }), {
        status: 200,
        headers: corsHeaders,
      });
    }

    // POST - Claim free credits
    if (request.method === 'POST') {
      const { action } = await request.json();

      if (action === 'claim_free') {
        let credits = await getUserCredits(env, user.user_id);

        if (credits.free_credits_claimed) {
          return new Response(JSON.stringify({
            error: 'Free credits already claimed',
            code: 'ALREADY_CLAIMED'
          }), {
            status: 400,
            headers: corsHeaders,
          });
        }

        // Claim free credits atomically - WHERE clause prevents race condition
        const claimResult = await env.DB.prepare(`
          UPDATE user_credits
          SET credits_balance = credits_balance + 3,
              free_credits_claimed = TRUE,
              updated_at = datetime('now')
          WHERE user_id = ? AND free_credits_claimed = FALSE
        `).bind(user.user_id).run();

        if (claimResult.changes === 0) {
          return new Response(JSON.stringify({
            error: 'Free credits already claimed',
            code: 'ALREADY_CLAIMED'
          }), {
            status: 400,
            headers: corsHeaders,
          });
        }

        // Log transaction
        const txId = `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        await env.DB.prepare(`
          INSERT INTO credit_transactions (id, user_id, type, amount, description)
          VALUES (?, ?, 'free_gift', 3, 'Welcome bonus - 3 free credits')
        `).bind(txId, user.user_id).run();

        credits = await getUserCredits(env, user.user_id);

        return new Response(JSON.stringify({
          success: true,
          message: 'Free credits claimed!',
          credits: {
            balance: credits.credits_balance,
            tier: credits.subscription_tier,
          }
        }), {
          status: 200,
          headers: corsHeaders,
        });
      }

      return new Response(JSON.stringify({ error: 'Unknown action' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('[Credits API] Error:', error);
    return new Response(JSON.stringify({
      error: 'Failed to process request',
    }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}
