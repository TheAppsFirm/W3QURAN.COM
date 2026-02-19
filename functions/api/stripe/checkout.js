/**
 * Stripe Checkout - Create checkout session
 * Supports subscriptions (Starter, Premium, Scholar) and one-time purchases (Lifetime, Credit Packs)
 */

// Price IDs from Stripe (created via scripts/create-stripe-products.js)
const STRIPE_PRICES = {
  starter_monthly: 'price_1T2Rh7CnbCeWpM4XTdLXxgfU', // 30 credits
  premium_monthly: 'price_1T2Rh8CnbCeWpM4XiQL1YsAI', // 80 credits
  premium_yearly: 'price_1T2Rh9CnbCeWpM4XdHjDJcuv', // 80 credits
  scholar_monthly: 'price_1T2RhACnbCeWpM4XGhAaaAnD', // 300 credits
  scholar_yearly: 'price_1T2RhBCnbCeWpM4XEfsrQUhd', // 300 credits
  lifetime: 'price_1T2RhCCnbCeWpM4XEBx0EKSI', // 100 credits/month forever
  credits_20: 'price_1T2RhDCnbCeWpM4XqnbWkTrI', // 20 credits
  credits_50: 'price_1T2RhFCnbCeWpM4XSWjxl9yf', // 50 credits
  credits_100: 'price_1T2RhGCnbCeWpM4XatkkkMA3', // 100 credits
};

// One-time purchase prices (not subscriptions)
const ONE_TIME_PRICES = [
  STRIPE_PRICES.lifetime,
  STRIPE_PRICES.credits_20,
  STRIPE_PRICES.credits_50,
  STRIPE_PRICES.credits_100,
];

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

    // Check if this is a one-time purchase or subscription
    const isOneTime = ONE_TIME_PRICES.includes(priceId);
    const mode = isOneTime ? 'payment' : 'subscription';

    // Build checkout session params
    const params = {
      'mode': mode,
      'customer_email': userResult.email,
      'client_reference_id': userResult.id,
      'line_items[0][price]': priceId,
      'line_items[0][quantity]': '1',
      'success_url': `${baseUrl}/settings?payment=success`,
      'cancel_url': `${baseUrl}/settings?payment=canceled`,
      'metadata[user_id]': userResult.id,
      'metadata[price_id]': priceId,
    };

    // If user already has a Stripe customer ID, use it
    if (userResult.stripe_customer_id) {
      params['customer'] = userResult.stripe_customer_id;
      delete params['customer_email'];
    }

    // Create Stripe checkout session
    const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(params),
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
