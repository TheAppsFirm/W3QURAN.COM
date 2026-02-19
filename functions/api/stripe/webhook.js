/**
 * Stripe Webhook Handler
 * Handles subscription and payment events from Stripe
 * Updates user credits based on subscription tier or credit pack purchase
 */

// Price IDs from Stripe
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

// Map price IDs to subscription details
const PRICE_CONFIG = {
  [STRIPE_PRICES.starter_monthly]: { tier: 'starter', credits: 30, interval: 'month' },
  [STRIPE_PRICES.premium_monthly]: { tier: 'premium', credits: 80, interval: 'month' },
  [STRIPE_PRICES.premium_yearly]: { tier: 'premium', credits: 80, interval: 'year' },
  [STRIPE_PRICES.scholar_monthly]: { tier: 'scholar', credits: 300, interval: 'month' },
  [STRIPE_PRICES.scholar_yearly]: { tier: 'scholar', credits: 300, interval: 'year' },
  [STRIPE_PRICES.lifetime]: { tier: 'lifetime', credits: 100, lifetime: true },
  [STRIPE_PRICES.credits_20]: { creditPack: true, credits: 20 },
  [STRIPE_PRICES.credits_50]: { creditPack: true, credits: 50 },
  [STRIPE_PRICES.credits_100]: { creditPack: true, credits: 100 },
};

// Simple HMAC-SHA256 for webhook signature verification
async function verifyStripeSignature(payload, signature, secret) {
  const parts = signature.split(',').reduce((acc, part) => {
    const [key, value] = part.split('=');
    acc[key] = value;
    return acc;
  }, {});

  const timestamp = parts['t'];
  const expectedSig = parts['v1'];

  if (!timestamp || !expectedSig) {
    return false;
  }

  // Check timestamp is within tolerance (5 minutes)
  const currentTime = Math.floor(Date.now() / 1000);
  if (Math.abs(currentTime - parseInt(timestamp)) > 300) {
    return false;
  }

  // Compute expected signature
  const signedPayload = `${timestamp}.${payload}`;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signatureBytes = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(signedPayload)
  );

  const computedSig = Array.from(new Uint8Array(signatureBytes))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  return computedSig === expectedSig;
}

// Get or create user credits record
async function ensureUserCredits(env, userId) {
  let credits = await env.DB.prepare(`
    SELECT * FROM user_credits WHERE user_id = ?
  `).bind(userId).first();

  if (!credits) {
    await env.DB.prepare(`
      INSERT INTO user_credits (user_id, credits_balance, credits_monthly_allowance, subscription_tier, free_credits_claimed)
      VALUES (?, 0, 0, 'free', FALSE)
    `).bind(userId).run();
  }
}

// Log credit transaction
async function logTransaction(env, userId, type, amount, description) {
  const txId = `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  await env.DB.prepare(`
    INSERT INTO credit_transactions (id, user_id, type, amount, description)
    VALUES (?, ?, ?, ?, ?)
  `).bind(txId, userId, type, amount, description).run();
}

export async function onRequest(context) {
  const { env, request } = context;

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return new Response('No signature', { status: 400 });
  }

  const payload = await request.text();

  // Verify webhook signature
  const isValid = await verifyStripeSignature(payload, signature, env.STRIPE_WEBHOOK_SECRET);
  if (!isValid) {
    console.error('[Stripe Webhook] Invalid signature');
    return new Response('Invalid signature', { status: 400 });
  }

  try {
    const event = JSON.parse(payload);
    console.log('[Stripe Webhook] Event:', event.type);

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const userId = session.client_reference_id || session.metadata?.user_id;
        const customerId = session.customer;
        const subscriptionId = session.subscription;
        const priceId = session.metadata?.price_id;

        if (!userId) {
          console.error('[Stripe Webhook] No user ID in session');
          break;
        }

        // Ensure user has credits record
        await ensureUserCredits(env, userId);

        // Get price configuration
        let config = priceId ? PRICE_CONFIG[priceId] : null;

        // If no direct price ID, fetch from subscription
        if (!config && subscriptionId) {
          const subResponse = await fetch(`https://api.stripe.com/v1/subscriptions/${subscriptionId}`, {
            headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}` },
          });
          if (subResponse.ok) {
            const subData = await subResponse.json();
            const subPriceId = subData.items?.data?.[0]?.price?.id;
            config = PRICE_CONFIG[subPriceId];
          }
        }

        if (!config) {
          console.error('[Stripe Webhook] Unknown price ID:', priceId);
          break;
        }

        // Handle credit pack purchase
        if (config.creditPack) {
          // Add credits immediately
          await env.DB.prepare(`
            UPDATE user_credits
            SET credits_balance = credits_balance + ?,
                updated_at = datetime('now')
            WHERE user_id = ?
          `).bind(config.credits, userId).run();

          await logTransaction(env, userId, 'purchase', config.credits, `Credit pack: ${config.credits} credits`);
          console.log('[Stripe Webhook] Credit pack added:', config.credits, 'for user:', userId);
          break;
        }

        // Handle lifetime purchase
        if (config.lifetime) {
          // Calculate next reset date (1st of next month)
          const now = new Date();
          const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
          const nextResetDate = nextMonth.toISOString().split('T')[0];

          await env.DB.prepare(`
            UPDATE user_credits
            SET subscription_tier = 'lifetime',
                credits_balance = ?,
                credits_monthly_allowance = ?,
                credits_reset_date = ?,
                lifetime_purchase = TRUE,
                updated_at = datetime('now')
            WHERE user_id = ?
          `).bind(config.credits, config.credits, nextResetDate, userId).run();

          // Update subscriptions table
          const subId = `sub_${userId}_${Date.now()}`;
          await env.DB.prepare(`
            INSERT INTO subscriptions (id, user_id, stripe_customer_id, plan, status, created_at)
            VALUES (?, ?, ?, 'lifetime', 'active', datetime('now'))
            ON CONFLICT(user_id) DO UPDATE SET
              stripe_customer_id = excluded.stripe_customer_id,
              plan = 'lifetime',
              status = 'active'
          `).bind(subId, userId, customerId).run();

          await logTransaction(env, userId, 'purchase', config.credits, 'Lifetime subscription activated');
          console.log('[Stripe Webhook] Lifetime activated for user:', userId);
          break;
        }

        // Handle regular subscription
        const plan = config.interval === 'year' ? `${config.tier}_yearly` : `${config.tier}_monthly`;
        const periodEnd = config.interval === 'year' ? '+1 year' : '+1 month';

        // Calculate next reset date
        const now = new Date();
        const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        const nextResetDate = nextMonth.toISOString().split('T')[0];

        // Update user credits
        await env.DB.prepare(`
          UPDATE user_credits
          SET subscription_tier = ?,
              credits_balance = ?,
              credits_monthly_allowance = ?,
              credits_used_this_month = 0,
              credits_reset_date = ?,
              updated_at = datetime('now')
          WHERE user_id = ?
        `).bind(config.tier, config.credits, config.credits, nextResetDate, userId).run();

        // Upsert subscription record
        const subId = `sub_${userId}_${Date.now()}`;
        await env.DB.prepare(`
          INSERT INTO subscriptions (id, user_id, stripe_customer_id, stripe_subscription_id, plan, status, current_period_end, created_at)
          VALUES (?, ?, ?, ?, ?, 'active', datetime('now', ?), datetime('now'))
          ON CONFLICT(user_id) DO UPDATE SET
            stripe_customer_id = excluded.stripe_customer_id,
            stripe_subscription_id = excluded.stripe_subscription_id,
            plan = excluded.plan,
            status = 'active',
            current_period_end = datetime('now', ?)
        `).bind(subId, userId, customerId, subscriptionId, plan, periodEnd, periodEnd).run();

        await logTransaction(env, userId, 'subscription', config.credits, `${config.tier} subscription activated`);
        console.log('[Stripe Webhook] Subscription activated for user:', userId, 'tier:', config.tier);
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        const customerId = subscription.customer;
        const status = subscription.status;
        const currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString();

        // Get price configuration
        const priceId = subscription.items?.data?.[0]?.price?.id;
        const config = PRICE_CONFIG[priceId];

        if (config && !config.creditPack && !config.lifetime) {
          const plan = config.interval === 'year' ? `${config.tier}_yearly` : `${config.tier}_monthly`;

          await env.DB.prepare(`
            UPDATE subscriptions
            SET plan = ?,
                status = ?,
                current_period_end = ?
            WHERE stripe_customer_id = ?
          `).bind(plan, status, currentPeriodEnd, customerId).run();

          // Get user ID and update credits if subscription renewed
          const sub = await env.DB.prepare(`
            SELECT user_id FROM subscriptions WHERE stripe_customer_id = ?
          `).bind(customerId).first();

          if (sub && status === 'active') {
            // Reset monthly credits on renewal
            const nextResetDate = new Date(subscription.current_period_end * 1000);
            nextResetDate.setMonth(nextResetDate.getMonth() + 1);
            nextResetDate.setDate(1);

            await env.DB.prepare(`
              UPDATE user_credits
              SET subscription_tier = ?,
                  credits_balance = ?,
                  credits_monthly_allowance = ?,
                  credits_used_this_month = 0,
                  credits_reset_date = ?,
                  updated_at = datetime('now')
              WHERE user_id = ?
            `).bind(config.tier, config.credits, config.credits, nextResetDate.toISOString().split('T')[0], sub.user_id).run();
          }
        }

        console.log('[Stripe Webhook] Subscription updated for customer:', customerId);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        const customerId = subscription.customer;

        // Get user ID
        const sub = await env.DB.prepare(`
          SELECT user_id FROM subscriptions WHERE stripe_customer_id = ?
        `).bind(customerId).first();

        if (sub) {
          // Don't reset credits for lifetime users
          const credits = await env.DB.prepare(`
            SELECT lifetime_purchase FROM user_credits WHERE user_id = ?
          `).bind(sub.user_id).first();

          if (!credits?.lifetime_purchase) {
            // Downgrade to free tier
            await env.DB.prepare(`
              UPDATE user_credits
              SET subscription_tier = 'free',
                  credits_monthly_allowance = 0,
                  updated_at = datetime('now')
              WHERE user_id = ?
            `).bind(sub.user_id).run();
          }
        }

        await env.DB.prepare(`
          UPDATE subscriptions
          SET plan = 'free',
              status = 'canceled',
              stripe_subscription_id = NULL
          WHERE stripe_customer_id = ?
        `).bind(customerId).run();

        console.log('[Stripe Webhook] Subscription canceled for customer:', customerId);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        const customerId = invoice.customer;

        await env.DB.prepare(`
          UPDATE subscriptions
          SET status = 'past_due'
          WHERE stripe_customer_id = ?
        `).bind(customerId).run();

        console.log('[Stripe Webhook] Payment failed for customer:', customerId);
        break;
      }

      case 'invoice.paid': {
        // Handle subscription renewal - credits already handled in subscription.updated
        const invoice = event.data.object;
        console.log('[Stripe Webhook] Invoice paid:', invoice.id);
        break;
      }

      default:
        console.log('[Stripe Webhook] Unhandled event type:', event.type);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('[Stripe Webhook] Error:', error);
    return new Response(JSON.stringify({ error: 'Webhook error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
