/**
 * Get User Subscription Status
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
    // Get subscription info
    const result = await env.DB.prepare(`
      SELECT
        s.plan,
        s.status,
        s.current_period_end,
        s.stripe_subscription_id
      FROM sessions sess
      JOIN subscriptions s ON sess.user_id = s.user_id
      WHERE sess.token = ? AND sess.expires_at > datetime('now')
      LIMIT 1
    `).bind(sessionToken).first();

    if (!result) {
      return new Response(JSON.stringify({ error: 'Invalid session' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      plan: result.plan || 'free',
      status: result.status || 'active',
      currentPeriodEnd: result.current_period_end,
      isPremium: [
        'monthly', 'yearly', 'lifetime',
        'starter_monthly', 'starter_yearly',
        'premium_monthly', 'premium_yearly',
        'scholar_monthly', 'scholar_yearly',
      ].includes(result.plan),
      canManage: !!result.stripe_subscription_id,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[Subscription] Error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
