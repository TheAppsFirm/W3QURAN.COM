/**
 * Create Stripe Products and Prices for w3Quran
 *
 * Run with: node scripts/create-stripe-products.js
 *
 * Make sure to set STRIPE_SECRET_KEY environment variable first:
 * export STRIPE_SECRET_KEY=sk_live_xxx
 */

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

if (!STRIPE_SECRET_KEY) {
  console.error('❌ Error: STRIPE_SECRET_KEY environment variable not set');
  console.log('\nRun: export STRIPE_SECRET_KEY=sk_live_xxx');
  process.exit(1);
}

const products = [
  {
    name: 'Starter',
    description: '30 credits/month - 10+ reciters, more translations',
    prices: [
      { nickname: 'Starter Monthly', amount: 300, interval: 'month', credits: 30 }
    ]
  },
  {
    name: 'Premium',
    description: '80 credits/month - All features, cloud sync, offline mode',
    prices: [
      { nickname: 'Premium Monthly', amount: 700, interval: 'month', credits: 80 },
      { nickname: 'Premium Yearly', amount: 6000, interval: 'year', credits: 80 }
    ]
  },
  {
    name: 'Scholar',
    description: '300 credits/month - HD voice, conversation export, priority support',
    prices: [
      { nickname: 'Scholar Monthly', amount: 2000, interval: 'month', credits: 300 },
      { nickname: 'Scholar Yearly', amount: 20000, interval: 'year', credits: 300 }
    ]
  },
  {
    name: 'Lifetime',
    description: 'Premium forever - 100 credits/month for life',
    prices: [
      { nickname: 'Lifetime', amount: 29900, interval: null, credits: 100 }
    ]
  },
  {
    name: 'Credit Pack - 20',
    description: '20 additional credits',
    prices: [
      { nickname: '20 Credits', amount: 200, interval: null, credits: 20 }
    ]
  },
  {
    name: 'Credit Pack - 50',
    description: '50 additional credits (save 20%)',
    prices: [
      { nickname: '50 Credits', amount: 400, interval: null, credits: 50 }
    ]
  },
  {
    name: 'Credit Pack - 100',
    description: '100 additional credits (save 30%)',
    prices: [
      { nickname: '100 Credits', amount: 700, interval: null, credits: 100 }
    ]
  }
];

async function stripeRequest(endpoint, method, body) {
  const response = await fetch(`https://api.stripe.com/v1${endpoint}`, {
    method,
    headers: {
      'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body ? new URLSearchParams(body) : undefined,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || 'Stripe API error');
  }
  return data;
}

async function createProduct(product) {
  console.log(`\n📦 Creating product: ${product.name}`);

  const productData = await stripeRequest('/products', 'POST', {
    name: product.name,
    description: product.description,
  });

  console.log(`   ✅ Product created: ${productData.id}`);

  const priceIds = [];

  for (const price of product.prices) {
    const priceParams = {
      product: productData.id,
      currency: 'usd',
      unit_amount: price.amount.toString(),
      nickname: price.nickname,
      [`metadata[credits]`]: price.credits.toString(),
    };

    if (price.interval) {
      priceParams['recurring[interval]'] = price.interval;
    }

    const priceData = await stripeRequest('/prices', 'POST', priceParams);

    console.log(`   💰 Price created: ${price.nickname} = $${price.amount / 100} (${priceData.id})`);
    priceIds.push({ name: price.nickname, id: priceData.id, credits: price.credits });
  }

  return { product: productData.id, prices: priceIds };
}

async function main() {
  console.log('🚀 Creating Stripe Products for w3Quran\n');
  console.log('=========================================');

  const results = [];

  for (const product of products) {
    try {
      const result = await createProduct(product);
      results.push(result);
    } catch (error) {
      console.error(`   ❌ Error: ${error.message}`);
    }
  }

  console.log('\n=========================================');
  console.log('📋 COPY THESE PRICE IDs TO YOUR CODE:\n');

  console.log('const STRIPE_PRICES = {');
  for (const result of results) {
    for (const price of result.prices) {
      const key = price.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
      console.log(`  ${key}: '${price.id}', // ${price.credits} credits`);
    }
  }
  console.log('};');

  console.log('\n✅ Done! Update your SettingsView.jsx with these price IDs');
}

main().catch(console.error);
