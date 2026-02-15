/**
 * Get Current User
 * Returns the authenticated user's profile and subscription status
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
    return new Response(JSON.stringify({ user: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Look up session and user
    const result = await env.DB.prepare(`
      SELECT
        u.id,
        u.email,
        u.name,
        u.picture,
        u.created_at,
        s.plan,
        s.status as subscription_status,
        s.current_period_end
      FROM sessions sess
      JOIN users u ON sess.user_id = u.id
      LEFT JOIN subscriptions s ON u.id = s.user_id
      WHERE sess.token = ? AND sess.expires_at > datetime('now')
      LIMIT 1
    `).bind(sessionToken).first();

    if (!result) {
      // Invalid or expired session
      return new Response(JSON.stringify({ user: null }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Set-Cookie': 'w3quran_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0',
        },
      });
    }

    // Check if user is admin (from environment variable)
    const adminEmails = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
    const isAdmin = adminEmails.includes(result.email?.toLowerCase());
    const hasPaidPlan = ['monthly', 'yearly', 'lifetime'].includes(result.plan);

    // Return user data
    const user = {
      id: result.id,
      email: result.email,
      name: result.name,
      picture: result.picture,
      createdAt: result.created_at,
      isAdmin,
      subscription: {
        plan: result.plan || 'free',
        status: result.subscription_status || 'active',
        currentPeriodEnd: result.current_period_end,
        isPremium: hasPaidPlan || isAdmin, // Admins get premium for free
      },
    };

    return new Response(JSON.stringify({ user }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[Auth] Get user error:', error);
    return new Response(JSON.stringify({ user: null, error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
