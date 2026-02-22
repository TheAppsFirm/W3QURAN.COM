#!/usr/bin/env node
/**
 * google-index.js
 * Requests Google to re-crawl/index specific URLs using the Web Search Indexing API.
 *
 * SETUP REQUIRED:
 * 1. Go to Google Cloud Console: https://console.cloud.google.com
 * 2. Create or select a project
 * 3. Enable "Web Search Indexing API"
 * 4. Create a Service Account (IAM > Service Accounts > Create)
 * 5. Download the JSON key file
 * 6. Save it as: scripts/google-service-account.json (git-ignored)
 * 7. Go to Google Search Console > Settings > Users and permissions
 * 8. Add the service account email as an Owner
 *
 * Usage:
 *   node scripts/google-index.js                   # Submit homepage
 *   node scripts/google-index.js /?surah=1         # Submit specific URL
 *   node scripts/google-index.js --all             # Submit all surahs
 *
 * Note: Google Indexing API has a quota of 200 requests/day.
 * For bulk submissions, use the sitemap in Search Console instead.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOMAIN = 'https://w3quran.com';
const KEY_FILE = path.join(__dirname, 'google-service-account.json');
const INDEXING_ENDPOINT = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

async function getAccessToken() {
  if (!fs.existsSync(KEY_FILE)) {
    console.error('\nERROR: Service account key file not found.');
    console.error(`Expected at: ${KEY_FILE}`);
    console.error('\nSetup instructions:');
    console.error('1. Go to https://console.cloud.google.com');
    console.error('2. Enable "Web Search Indexing API"');
    console.error('3. Create a Service Account and download JSON key');
    console.error('4. Save as: scripts/google-service-account.json');
    console.error('5. Add the service account email as Owner in Search Console\n');
    process.exit(1);
  }

  // For Google APIs, you need googleapis or manual JWT signing.
  // This script provides the structure — install googleapis if needed:
  //   npm install googleapis
  try {
    const { google } = await import('googleapis');
    const auth = new google.auth.GoogleAuth({
      keyFile: KEY_FILE,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    const client = await auth.getClient();
    const token = await client.getAccessToken();
    return token.token;
  } catch (err) {
    if (err.code === 'ERR_MODULE_NOT_FOUND') {
      console.error('\nTo use Google Indexing API, install googleapis:');
      console.error('  npm install googleapis\n');
      console.error('Or use IndexNow instead (no setup needed):');
      console.error('  node scripts/indexnow.js\n');
    } else {
      console.error('Auth error:', err.message);
    }
    process.exit(1);
  }
}

async function submitUrl(url, token) {
  try {
    const response = await fetch(INDEXING_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        url: url,
        type: 'URL_UPDATED',
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log(`  OK: ${url}`);
    } else {
      console.error(`  FAIL: ${url} — ${data.error?.message || response.status}`);
    }

    // Rate limit: max 200/day, space them out
    await new Promise(r => setTimeout(r, 500));
  } catch (err) {
    console.error(`  ERROR: ${url} — ${err.message}`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const token = await getAccessToken();

  let urls = [];

  if (args.includes('--all')) {
    // Submit all surahs + main views
    urls.push(`${DOMAIN}/`);
    for (let i = 1; i <= 114; i++) {
      urls.push(`${DOMAIN}/?surah=${i}`);
    }
    console.log(`Submitting ${urls.length} URLs to Google Indexing API...`);
    console.log('(Quota: 200/day — this will use 115 of your daily quota)\n');
  } else if (args.length > 0) {
    urls = args.map(p => `${DOMAIN}${p.startsWith('/') ? '' : '/'}${p}`);
    console.log(`Submitting ${urls.length} URL(s) to Google Indexing API...\n`);
  } else {
    urls = [`${DOMAIN}/`];
    console.log('Submitting homepage to Google Indexing API...\n');
  }

  for (const url of urls) {
    await submitUrl(url, token);
  }

  console.log('\nDone.');
}

main();
