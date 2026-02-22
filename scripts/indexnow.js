#!/usr/bin/env node
/**
 * indexnow.js
 * Pings IndexNow API (Bing, Yandex, Seznam, Naver) to instantly index updated URLs.
 * Run after deployment: node scripts/indexnow.js
 *
 * IndexNow is a protocol that lets you notify search engines instantly
 * when content changes. One ping reaches Bing, Yandex, Seznam, and Naver.
 *
 * Usage:
 *   node scripts/indexnow.js                  # Submit all URLs from sitemap
 *   node scripts/indexnow.js /?surah=1        # Submit specific URL(s)
 */

const DOMAIN = 'https://w3quran.com';
const API_KEY = '9e154e1175194170a8d953d962f933a2';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';

async function submitUrls(urls) {
  const payload = {
    host: 'w3quran.com',
    key: API_KEY,
    keyLocation: `${DOMAIN}/${API_KEY}.txt`,
    urlList: urls,
  };

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      console.log(`IndexNow: ${response.status} - URLs submitted successfully`);
    } else {
      const text = await response.text();
      console.error(`IndexNow: ${response.status} - ${text}`);
    }
  } catch (err) {
    console.error('IndexNow request failed:', err.message);
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length > 0) {
    // Submit specific URLs
    const urls = args.map(path => `${DOMAIN}${path.startsWith('/') ? '' : '/'}${path}`);
    await submitUrls(urls);
  } else {
    // Submit all URLs from sitemap
    const urls = [
      `${DOMAIN}/`,
      `${DOMAIN}/?view=daily`,
      `${DOMAIN}/?view=kids`,
      `${DOMAIN}/?view=quiz`,
      `${DOMAIN}/?view=names`,
      `${DOMAIN}/?view=listen`,
      `${DOMAIN}/?view=prayer`,
      `${DOMAIN}/?view=stats`,
    ];

    // Add all 114 surahs
    for (let i = 1; i <= 114; i++) {
      urls.push(`${DOMAIN}/?surah=${i}`);
    }

    await submitUrls(urls);
  }
}

main();
