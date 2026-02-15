/**
 * Stripe Checkout - Create checkout session
 */

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
    // Get user from session
    const userResult = await env.DB.prepare(`
      SELECT u.id, u.email, s.stripe_customer_id
      FROM sessions sess
      JOIN users u ON sess.user_id = u.id
      LEFT JOIN subscriptions s ON u.id = s.user_id
      WHERE sess.token = ? AND sess.expires_at > datetime('now')
      LIMIT 1
    `).bind(sessionToken).first();

    if (!userResult) {
      return new Response(JSON.stringify({ error: 'Invalid session' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { priceId } = await request.json();

    if (!priceId) {
      return new Response(JSON.stringify({ error: 'Price ID required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Determine base URL
    const url = new URL(request.url);
    const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
    const baseUrl = isLocal ? `${url.protocol}//${url.host}` : 'https://w3quran.com';

    // Create Stripe checkout session
    const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'mode': 'subscription',
        'customer_email': userResult.email,
        'client_reference_id': userResult.id,
        'line_items[0][price]': priceId,
        'line_items[0][quantity]': '1',
        'success_url': `${baseUrl}/settings?payment=success`,
        'cancel_url': `${baseUrl}/settings?payment=canceled`,
        'metadata[user_id]': userResult.id,
      }),
    });

    if (!stripeResponse.ok) {
      const errorText = await stripeResponse.text();
      console.error('[Stripe] Checkout error:', errorText);
      return new Response(JSON.stringify({ error: 'Failed to create checkout' }), {
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
    console.error('[Stripe] Checkout error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
