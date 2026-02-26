/**
 * Stripe Customer Portal - Manage subscription
 */

// Helper to get Stripe secret key based on admin settings
async function getStripeSecretKey(env) {
  let stripeMode = 'auto';
  try {
    if (env.SETTINGS_KV) {
      stripeMode = await env.SETTINGS_KV.get('stripe_mode') || 'auto';
    }
  } catch (e) {
    // KV not available
  }

  if (stripeMode === 'test' && env.STRIPE_SECRET_KEY_TEST) {
    return env.STRIPE_SECRET_KEY_TEST;
  } else if (stripeMode === 'live') {
    return env.STRIPE_SECRET_KEY_LIVE || env.STRIPE_SECRET_KEY;
  }
  return env.STRIPE_SECRET_KEY;
}

export async function onRequest(context) {
  const { env, request } = context;

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
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

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503, headers: { 'Content-Type': 'application/json' }});
  }

  try {
    // Get user's Stripe customer ID
    const result = await env.DB.prepare(`
      SELECT s.stripe_customer_id
      FROM sessions sess
      JOIN subscriptions s ON sess.user_id = s.user_id
      WHERE sess.token = ? AND sess.expires_at > datetime('now')
      LIMIT 1
    `).bind(sessionToken).first();

    if (!result || !result.stripe_customer_id) {
      return new Response(JSON.stringify({ error: 'No subscription found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Determine return URL
    const url = new URL(request.url);
    const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
    const baseUrl = isLocal ? `${url.protocol}//${url.host}` : 'https://w3quran.com';

    // Get Stripe key (respects admin mode setting)
    const secretKey = await getStripeSecretKey(env);

    // Create Stripe billing portal session
    const stripeResponse = await fetch('https://api.stripe.com/v1/billing_portal/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'customer': result.stripe_customer_id,
        'return_url': `${baseUrl}/settings`,
      }),
    });

    if (!stripeResponse.ok) {
      const errorData = await stripeResponse.json().catch(() => ({}));
      console.error('[Stripe] Portal error:', JSON.stringify(errorData));

      // Check if customer doesn't exist in current mode (test vs live mismatch)
      if (errorData.error?.code === 'resource_missing' ||
          errorData.error?.message?.includes('No such customer')) {
        return new Response(JSON.stringify({
          error: 'Subscription was created in a different Stripe mode (test vs live). Please contact support or re-subscribe in the current mode.',
          code: 'MODE_MISMATCH'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({
        error: 'Failed to create portal session',
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const session = await stripeResponse.json();

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[Stripe] Portal error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
