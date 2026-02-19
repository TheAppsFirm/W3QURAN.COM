/**
 * Admin API - User Management
 * List all users and their subscription status
 */

export async function onRequest(context) {
  const { env, request } = context;

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

    // GET - List all users
    if (request.method === 'GET') {
      const users = await env.DB.prepare(`
        SELECT
          u.id,
          u.email,
          u.name,
          u.picture,
          u.created_at,
          s.plan,
          s.status as subscription_status,
          s.current_period_end,
          s.stripe_customer_id,
          uc.credits_balance,
          uc.credits_monthly_allowance,
          uc.subscription_tier,
          uc.lifetime_purchase,
          uc.credits_used_this_month,
          (SELECT COUNT(*) FROM quran_conversations WHERE user_id = u.id) as conversation_count
        FROM users u
        LEFT JOIN subscriptions s ON u.id = s.user_id
        LEFT JOIN user_credits uc ON u.id = uc.user_id
        ORDER BY u.created_at DESC
      `).all();

      // Transform for frontend
      const transformedUsers = users.results.map(u => ({
        id: u.id,
        email: u.email,
        name: u.name,
        picture: u.picture,
        created_at: u.created_at,
        plan: u.plan,
        tier: u.subscription_tier || 'free',
        credits: u.credits_balance || 0,
        monthly_allowance: u.credits_monthly_allowance || 0,
        used_this_month: u.credits_used_this_month || 0,
        conversation_count: u.conversation_count || 0,
        lifetime_purchase: u.lifetime_purchase || 0,
      }));

      return new Response(JSON.stringify({
        users: transformedUsers,
        pagination: { page: 1, totalPages: 1, total: transformedUsers.length }
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // PUT - Update user
    if (request.method === 'PUT') {
      const { userId, tier, credits, monthlyAllowance } = await request.json();

      if (!userId) {
        return new Response(JSON.stringify({ error: 'User ID required' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // Map tier to plan name
      const tierToPlan = {
        free: 'free',
        starter: 'starter_monthly',
        premium: 'premium_monthly',
        scholar: 'scholar_monthly',
        lifetime: 'lifetime',
      };
      const plan = tierToPlan[tier] || 'free';

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
      `).bind(plan, userId).run();

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
        tier || 'free',
        credits || 0,
        monthlyAllowance || 0,
        nextResetDate,
        tier === 'lifetime' ? 1 : 0,
        userId
      ).run();

      console.log('[Admin] Updated user:', userId, 'to tier:', tier, 'credits:', credits);

      return new Response(JSON.stringify({
        success: true,
        message: 'User updated successfully',
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response('Method not allowed', { status: 405 });

  } catch (error) {
    console.error('[Admin] Users error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
