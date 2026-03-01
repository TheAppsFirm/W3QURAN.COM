#!/usr/bin/env node
/**
 * purge-cache.js
 * Purges Cloudflare CDN cache after deployment.
 * Requires CLOUDFLARE_API_TOKEN and CLOUDFLARE_ZONE_ID env vars,
 * or falls back to wrangler OAuth token for zone lookup.
 *
 * Usage: node scripts/purge-cache.js [--files sitemap.xml,robots.txt]
 * Without --files, purges everything.
 *
 * Set env vars:
 *   export CLOUDFLARE_ZONE_ID="your-zone-id"
 *   export CLOUDFLARE_API_TOKEN="your-api-token"
 */

const ZONE_ID = process.env.CLOUDFLARE_ZONE_ID || '51ceeee9bfa1975b8c337611e9ac2c3c';
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const DOMAIN = 'https://w3quran.com';

// Files to always purge (SEO-critical)
const CRITICAL_FILES = [
  '/sitemap.xml',
  '/robots.txt',
  '/index.html',
  '/',
];

async function purgeCache() {
  if (!API_TOKEN) {
    console.log('⚠️  CLOUDFLARE_API_TOKEN not set — skipping cache purge.');
    console.log('   To enable auto-purge, run:');
    console.log('   export CLOUDFLARE_API_TOKEN="your-api-token"');
    console.log('   (Create token at: https://dash.cloudflare.com/profile/api-tokens)');
    console.log('   Required permission: Zone > Cache Purge > Purge');
    return;
  }

  const filesArg = process.argv.indexOf('--files');
  let body;

  if (filesArg !== -1 && process.argv[filesArg + 1]) {
    const files = process.argv[filesArg + 1].split(',').map(f => `${DOMAIN}/${f.replace(/^\//, '')}`);
    body = JSON.stringify({ files });
    console.log(`🧹 Purging ${files.length} specific files...`);
  } else {
    // Purge critical SEO files
    const files = CRITICAL_FILES.map(f => `${DOMAIN}${f}`);
    body = JSON.stringify({ files });
    console.log(`🧹 Purging ${files.length} critical files (sitemap, robots, index)...`);
  }

  try {
    const res = await fetch(`https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body,
    });

    const data = await res.json();

    if (data.success) {
      console.log('✅ Cache purged successfully!');
    } else {
      console.error('❌ Cache purge failed:', data.errors?.[0]?.message || 'Unknown error');
      console.error('   Make sure your API token has "Cache Purge > Purge" permission.');
    }
  } catch (err) {
    console.error('❌ Cache purge request failed:', err.message);
  }
}

purgeCache();
