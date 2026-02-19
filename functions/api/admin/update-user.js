/**
 * Admin API - Update User Subscription
 * Upgrade or downgrade user plans and credits
 */

// Plan configurations
const PLAN_CONFIG = {
  free: { tier: 'free', credits: 0, allowance: 0 },
  starter_monthly: { tier: 'starter', credits: 30, allowance: 30 },
  premium_monthly: { tier: 'premium', credits: 80, allowance: 80 },
  premium_yearly: { tier: 'premium', credits: 80, allowance: 80 },
  scholar_monthly: { tier: 'scholar', credits: 300, allowance: 300 },
  scholar_yearly: { tier: 'scholar', credits: 300, allowance: 300 },
  lifetime: { tier: 'lifetime', credits: 100, allowance: 100, lifetime: true },
};

export async function onRequest(context) {
  const { env, request } = context;

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  // Get session token from cookie
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [key, ...val] = c.trim().split('=');
      return [key, val.join('=')];
    })
  );

  const sessionToken = cookies['w3quran_session'];

  if (!sessionToken) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Get current user and verify admin status
    const currentUser = await env.DB.prepare(`
      SELECT u.email
      FROM sessions sess
      JOIN users u ON sess.user_id = u.id
      WHERE sess.token = ? AND sess.expires_at > datetime('now')
      LIMIT 1
    `).bind(sessionToken).first();

    if (!currentUser) {
      return new Response(JSON.stringify({ error: 'Invalid session' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if admin
    const adminEmails = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
    if (!adminEmails.includes(currentUser.email?.toLowerCase())) {
      return new Response(JSON.stringify({ error: 'Admin access required' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { userId, plan, credits } = await request.json();

    if (!userId) {
      return new Response(JSON.stringify({ error: 'User ID required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get plan config or use custom credits
    const config = PLAN_CONFIG[plan] || PLAN_CONFIG.free;
    const finalCredits = credits !== undefined ? credits : config.credits;
    const finalAllowance = credits !== undefined ? credits : config.allowance;

    // Calculate next reset date (1st of next month)
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const nextResetDate = nextMonth.toISOString().split('T')[0];

    // Update subscriptions table
    await env.DB.prepare(`
      UPDATE subscriptions
      SET plan = ?,
          status = 'active',
          current_period_end = datetime('now', '+1 month')
      WHERE user_id = ?
    `).bind(plan || 'free', userId).run();

    // Update user_credits table
    await env.DB.prepare(`
      UPDATE user_credits
      SET subscription_tier = ?,
          credits_balance = ?,
          credits_monthly_allowance = ?,
          credits_used_this_month = 0,
          credits_reset_date = ?,
          lifetime_purchase = ?,
          updated_at = datetime('now')
      WHERE user_id = ?
    `).bind(
      config.tier,
      finalCredits,
      finalAllowance,
      nextResetDate,
      config.lifetime ? 1 : 0,
      userId
    ).run();

    // Log the action
    const txId = 'tx_admin_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    await env.DB.prepare(`
      INSERT INTO credit_transactions (id, user_id, type, amount, description)
      VALUES (?, ?, 'admin', ?, ?)
    `).bind(txId, userId, finalCredits, 'Admin set plan to ' + plan + ' with ' + finalCredits + ' credits').run();

    console.log('[Admin] Updated user:', userId, 'to plan:', plan, 'credits:', finalCredits);

    return new Response(JSON.stringify({
      success: true,
      message: 'User updated to ' + plan + ' with ' + finalCredits + ' credits',
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[Admin] Update user error:', error);
    return new Response(JSON.stringify({ error: 'Server error: ' + error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
