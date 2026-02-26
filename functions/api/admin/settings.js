/**
 * Admin Settings API
 * GET - Get current settings (including Stripe mode)
 * PUT - Update settings
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

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503, headers: { 'Content-Type': 'application/json' }});
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

    // GET - Get current settings
    if (request.method === 'GET') {
      // Check if we have both test and live keys
      // Live key can be STRIPE_SECRET_KEY_LIVE or STRIPE_SECRET_KEY starting with sk_live_
      const hasTestKey = !!env.STRIPE_SECRET_KEY_TEST;
      const primaryKey = env.STRIPE_SECRET_KEY || '';
      const hasLiveKey = !!env.STRIPE_SECRET_KEY_LIVE || primaryKey.startsWith('sk_live_');

      // Detect current mode from the active key
      const currentKey = primaryKey;
      const isTestMode = currentKey.startsWith('sk_test_');

      // Get stored mode preference from KV or fallback
      let stripeMode = 'auto'; // auto, test, live
      if (env.SETTINGS_KV) {
        stripeMode = await env.SETTINGS_KV.get('stripe_mode') || 'auto';
      }

      return new Response(JSON.stringify({
        stripe: {
          mode: stripeMode,
          currentMode: isTestMode ? 'test' : 'live',
          hasTestKey,
          hasLiveKey,
          canToggle: hasTestKey && hasLiveKey,
        },
        // Add more settings here as needed
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // PUT - Update settings
    if (request.method === 'PUT') {
      const { stripeMode } = await request.json();

      if (stripeMode && ['auto', 'test', 'live'].includes(stripeMode)) {
        // Store in KV if available
        if (env.SETTINGS_KV) {
          await env.SETTINGS_KV.put('stripe_mode', stripeMode);
        }

        console.log('[Admin] Stripe mode set to:', stripeMode);

        return new Response(JSON.stringify({
          success: true,
          message: `Stripe mode set to ${stripeMode}`,
          stripeMode,
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ error: 'Invalid settings' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    console.error('[Admin] Settings error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
