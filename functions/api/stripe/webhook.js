/**
 * Stripe Webhook Handler
 * Handles subscription events from Stripe
 */

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

        if (!userId) {
          console.error('[Stripe Webhook] No user ID in session');
          break;
        }

        // Determine plan from the subscription
        let plan = 'monthly';
        if (subscriptionId) {
          // Fetch subscription details to get the price
          const subResponse = await fetch(`https://api.stripe.com/v1/subscriptions/${subscriptionId}`, {
            headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}` },
          });
          if (subResponse.ok) {
            const subData = await subResponse.json();
            const priceId = subData.items?.data?.[0]?.price?.id;
            if (priceId === env.STRIPE_PRICE_YEARLY) {
              plan = 'yearly';
            }
          }
        }

        // Generate subscription ID if not exists
        const subId = `sub_${userId}_${Date.now()}`;

        // Upsert subscription record (INSERT or UPDATE if exists)
        await env.DB.prepare(`
          INSERT INTO subscriptions (id, user_id, stripe_customer_id, stripe_subscription_id, plan, status, current_period_end, created_at)
          VALUES (?, ?, ?, ?, ?, 'active', datetime('now', '+1 month'), datetime('now'))
          ON CONFLICT(user_id) DO UPDATE SET
            stripe_customer_id = excluded.stripe_customer_id,
            stripe_subscription_id = excluded.stripe_subscription_id,
            plan = excluded.plan,
            status = 'active',
            current_period_end = datetime('now', '+1 month')
        `).bind(subId, userId, customerId, subscriptionId, plan).run();

        console.log('[Stripe Webhook] Subscription activated for user:', userId, 'plan:', plan);
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        const customerId = subscription.customer;
        const status = subscription.status;
        const currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString();

        // Determine plan from price
        let plan = 'monthly';
        const priceId = subscription.items?.data?.[0]?.price?.id;
        if (priceId === env.STRIPE_PRICE_YEARLY) {
          plan = 'yearly';
        }

        await env.DB.prepare(`
          UPDATE subscriptions
          SET plan = ?,
              status = ?,
              current_period_end = ?
          WHERE stripe_customer_id = ?
        `).bind(plan, status, currentPeriodEnd, customerId).run();

        console.log('[Stripe Webhook] Subscription updated for customer:', customerId);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        const customerId = subscription.customer;

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
