/**
 * Stripe Checkout - Create checkout session
 * Supports subscriptions (Starter, Premium, Scholar) and one-time purchases (Lifetime, Credit Packs)
 * Admin can toggle between test/live mode via admin settings
 */

// Live mode price IDs (production)
const LIVE_PRICES = {
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

// Test mode price IDs (created via Stripe CLI)
const TEST_PRICES = {
  starter_monthly: 'price_1T2Zt9CnbCeWpM4XtLcuhjkP', // $4.99/month test
  premium_monthly: 'price_1T2Zt9CnbCeWpM4XtLcuhjkP', // $4.99/month test
  premium_yearly: 'price_1T2Zt9CnbCeWpM4XtLcuhjkP', // Using same for testing
  scholar_monthly: 'price_1T2Zt9CnbCeWpM4XtLcuhjkP', // Using same for testing
  scholar_yearly: 'price_1T2Zt9CnbCeWpM4XtLcuhjkP', // Using same for testing
  lifetime: 'price_1T2Zt9CnbCeWpM4XtLcuhjkP', // Using same for testing
  credits_20: 'price_1T2Zt9CnbCeWpM4XtLcuhjkP',
  credits_50: 'price_1T2Zt9CnbCeWpM4XtLcuhjkP',
  credits_100: 'price_1T2Zt9CnbCeWpM4XtLcuhjkP',
};

// One-time purchase products (not subscriptions)
const ONE_TIME_PRODUCTS = ['lifetime', 'credits_20', 'credits_50', 'credits_100'];

// Helper to get Stripe config based on admin settings or auto-detect
async function getStripeConfig(env) {
  // Check admin setting from KV (gracefully handle if KV not set up)
  let stripeMode = 'auto';
  try {
    if (env.SETTINGS_KV) {
      stripeMode = await env.SETTINGS_KV.get('stripe_mode') || 'auto';
    }
  } catch (e) {
    console.log('[Stripe] KV not available, using auto mode');
  }

  let secretKey, isTestMode;

  if (stripeMode === 'test' && env.STRIPE_SECRET_KEY_TEST) {
    // Admin forced test mode
    secretKey = env.STRIPE_SECRET_KEY_TEST;
    isTestMode = true;
  } else if (stripeMode === 'live') {
    // Admin forced live mode - use _LIVE key or fall back to primary
    secretKey = env.STRIPE_SECRET_KEY_LIVE || env.STRIPE_SECRET_KEY;
    isTestMode = false;
  } else {
    // Auto-detect from primary key (fallback)
    secretKey = env.STRIPE_SECRET_KEY;
    isTestMode = secretKey?.startsWith('sk_test_');
  }

  console.log('[Stripe Config] Mode:', stripeMode, 'IsTest:', isTestMode, 'KeyExists:', !!secretKey);

  return {
    secretKey,
    isTestMode,
    stripeMode,
    prices: isTestMode ? TEST_PRICES : LIVE_PRICES,
  };
}

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

    const requestBody = await request.json();
    // Support both 'product' and 'productType' field names for backwards compatibility
    const { product, productType: productTypeField, priceId: legacyPriceId, successUrl: customSuccessUrl, cancelUrl: customCancelUrl, source: requestSource } = requestBody;

    // Sanitize source field
    const ALLOWED_SOURCES = ['kids', 'talk_to_quran', 'general'];
    const source = ALLOWED_SOURCES.includes(requestSource) ? requestSource : 'general';

    // SECURITY: Simple rate limiting using KV (1 checkout attempt per 10 seconds)
    const rateLimitKey = `checkout_${userResult.id}`;
    if (env.SETTINGS_KV) {
      const lastAttempt = await env.SETTINGS_KV.get(rateLimitKey);
      if (lastAttempt) {
        const elapsed = Date.now() - parseInt(lastAttempt);
        if (elapsed < 10000) { // 10 seconds
          console.log('[Stripe] SECURITY: Rate limit hit for user:', userResult.id);
          return new Response(JSON.stringify({ error: 'Please wait before trying again' }), {
            status: 429,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      }
      // Store this attempt
      await env.SETTINGS_KV.put(rateLimitKey, Date.now().toString(), { expirationTtl: 60 });
    }

    // SECURITY: Validate product type is in allowed list
    const ALLOWED_PRODUCTS = Object.keys(LIVE_PRICES);
    // Accept either 'product' or 'productType' field
    const productType = productTypeField || product || 'premium_monthly';

    if (!ALLOWED_PRODUCTS.includes(productType)) {
      console.error('[Stripe] SECURITY: Invalid product type attempted:', productType);
      return new Response(JSON.stringify({ error: 'Invalid product' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // SECURITY: Block legacy priceId requests (only accept product type)
    if (legacyPriceId) {
      console.error('[Stripe] SECURITY: Legacy priceId request blocked:', legacyPriceId);
      return new Response(JSON.stringify({ error: 'Invalid request format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // SECURITY: Check for existing active subscription (prevent duplicates)
    const existingSub = await env.DB.prepare(`
      SELECT plan, status FROM subscriptions WHERE user_id = ? AND status = 'active' AND plan != 'free'
    `).bind(userResult.id).first();

    const isSubscriptionProduct = !ONE_TIME_PRODUCTS.includes(productType);
    if (existingSub && isSubscriptionProduct && existingSub.plan !== 'free') {
      console.log('[Stripe] User already has active subscription:', existingSub.plan);
      return new Response(JSON.stringify({
        error: 'You already have an active subscription. Please manage or cancel it first.',
        currentPlan: existingSub.plan
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get Stripe config (respects admin setting)
    const stripeConfig = await getStripeConfig(env);
    const { secretKey, isTestMode, stripeMode, prices: STRIPE_PRICES } = stripeConfig;

    if (!secretKey) {
      return new Response(JSON.stringify({ error: 'Stripe not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Resolve price ID from product type
    const priceId = STRIPE_PRICES[productType];

    if (!priceId) {
      return new Response(JSON.stringify({ error: 'Invalid product type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log(`[Stripe] Mode: ${isTestMode ? 'TEST' : 'LIVE'} (setting: ${stripeMode}), Product: ${productType}, Price: ${priceId}`);

    // Determine base URL
    const url = new URL(request.url);
    const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
    const baseUrl = isLocal ? `${url.protocol}//${url.host}` : 'https://w3quran.com';

    // Check if this is a one-time purchase or subscription
    const isOneTime = ONE_TIME_PRODUCTS.includes(productType);
    const mode = isOneTime ? 'payment' : 'subscription';

    // SECURITY: Validate custom URLs if provided (must be same origin)
    let successUrl = `${baseUrl}/settings?payment=success`;
    let cancelUrl = `${baseUrl}/settings?payment=canceled`;

    if (customSuccessUrl) {
      try {
        const parsedUrl = new URL(customSuccessUrl);
        // Allow same origin or localhost for development
        if (parsedUrl.origin === baseUrl || parsedUrl.hostname === 'localhost' || parsedUrl.hostname === '127.0.0.1') {
          successUrl = customSuccessUrl;
        } else {
          console.log('[Stripe] SECURITY: Rejected custom successUrl with different origin:', parsedUrl.origin);
        }
      } catch (e) {
        console.log('[Stripe] Invalid successUrl format:', customSuccessUrl);
      }
    }

    if (customCancelUrl) {
      try {
        const parsedUrl = new URL(customCancelUrl);
        // Allow same origin or localhost for development
        if (parsedUrl.origin === baseUrl || parsedUrl.hostname === 'localhost' || parsedUrl.hostname === '127.0.0.1') {
          cancelUrl = customCancelUrl;
        } else {
          console.log('[Stripe] SECURITY: Rejected custom cancelUrl with different origin:', parsedUrl.origin);
        }
      } catch (e) {
        console.log('[Stripe] Invalid cancelUrl format:', customCancelUrl);
      }
    }

    console.log('[Stripe] Using URLs - success:', successUrl, 'cancel:', cancelUrl);

    // Build checkout session params
    const params = {
      'mode': mode,
      'customer_email': userResult.email,
      'client_reference_id': userResult.id,
      'line_items[0][price]': priceId,
      'line_items[0][quantity]': '1',
      'success_url': successUrl,
      'cancel_url': cancelUrl,
      'metadata[user_id]': userResult.id,
      'metadata[price_id]': priceId,
    };

    // If user already has a Stripe customer ID, use it
    // Note: Production DB should be clean - no test mode customer IDs
    // Stripe will create new customer if ID doesn't exist in current mode
    if (userResult.stripe_customer_id &&
        userResult.stripe_customer_id !== 'null' &&
        userResult.stripe_customer_id !== 'NULL') {
      params['customer'] = userResult.stripe_customer_id;
      delete params['customer_email'];
    }

    // Create Stripe checkout session (with idempotency key to prevent duplicates on retry)
    const idempotencyKey = `checkout_${userResult.id}_${productType}_${Math.floor(Date.now() / 30000)}`;
    const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Idempotency-Key': idempotencyKey,
      },
      body: new URLSearchParams(params),
    });

    if (!stripeResponse.ok) {
      const errorData = await stripeResponse.json().catch(() => ({}));
      console.error('[Stripe] Checkout error:', JSON.stringify(errorData));
      return new Response(JSON.stringify({
        error: 'Failed to create checkout',
        stripeError: errorData.error?.message || 'Unknown Stripe error',
        details: errorData.error
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const session = await stripeResponse.json();

    // Track payment initiation for analytics
    try {
      await env.DB.prepare(`
        CREATE TABLE IF NOT EXISTS payment_initiations (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id TEXT NOT NULL,
          email TEXT,
          name TEXT,
          product_type TEXT NOT NULL,
          source TEXT DEFAULT 'general',
          status TEXT DEFAULT 'initiated',
          stripe_session_id TEXT,
          created_at TEXT DEFAULT (datetime('now')),
          completed_at TEXT
        )
      `).run();

      await env.DB.prepare(`
        INSERT INTO payment_initiations (user_id, email, product_type, source, stripe_session_id)
        VALUES (?, ?, ?, ?, ?)
      `).bind(userResult.id, userResult.email, productType, source, session.id).run();

      console.log('[Stripe] Payment initiation tracked:', { userId: userResult.id, productType, source });
    } catch (trackErr) {
      // Don't fail checkout if tracking fails
      console.error('[Stripe] Failed to track payment initiation:', trackErr);
    }

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
