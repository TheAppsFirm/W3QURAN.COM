#!/usr/bin/env node
/**
 * generate-sitemap.js
 * Generates sitemap.xml for w3quran.com with clean URL paths.
 * Includes: homepage, main views, feature pages, 114 surahs, 114 discussion pages, legal pages.
 * Run: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DOMAIN = 'https://w3quran.com';
const TODAY = new Date().toISOString().split('T')[0];

// Main pages — clean URL paths (must match useSEO.js VIEW_SEO)
const mainPages = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/daily-verse', priority: '0.9', changefreq: 'daily' },
  { path: '/listen', priority: '0.8', changefreq: 'monthly' },
  { path: '/names-of-allah', priority: '0.8', changefreq: 'monthly' },
  { path: '/quiz', priority: '0.7', changefreq: 'weekly' },
  { path: '/prayer-times', priority: '0.8', changefreq: 'daily' },
  { path: '/kids', priority: '0.8', changefreq: 'weekly' },
  { path: '/tasbih', priority: '0.7', changefreq: 'monthly' },
  { path: '/statistics', priority: '0.5', changefreq: 'monthly' },
  { path: '/settings', priority: '0.4', changefreq: 'monthly' },
  { path: '/donate', priority: '0.5', changefreq: 'monthly' },
  { path: '/discussions', priority: '0.8', changefreq: 'daily' },
];

// Feature/modal pages — clean URL paths (must match useSEO.js MODAL_SEO)
const featurePages = [
  { path: '/search', priority: '0.7', changefreq: 'monthly' },
  { path: '/memorize', priority: '0.7', changefreq: 'monthly' },
  { path: '/hajj-umrah', priority: '0.8', changefreq: 'monthly' },
  { path: '/baby-names', priority: '0.7', changefreq: 'monthly' },
  { path: '/mind-map', priority: '0.6', changefreq: 'monthly' },
  { path: '/mood', priority: '0.5', changefreq: 'monthly' },
  { path: '/video-sync', priority: '0.6', changefreq: 'monthly' },
  { path: '/prophetic-map', priority: '0.7', changefreq: 'monthly' },
  { path: '/time-machine', priority: '0.6', changefreq: 'monthly' },
  { path: '/ai-guide', priority: '0.6', changefreq: 'monthly' },
  { path: '/ummah-pulse', priority: '0.6', changefreq: 'daily' },
  { path: '/weather-verse', priority: '0.5', changefreq: 'daily' },
  { path: '/sound-healing', priority: '0.5', changefreq: 'monthly' },
  { path: '/talk', priority: '0.6', changefreq: 'monthly' },
  { path: '/progress', priority: '0.5', changefreq: 'monthly' },
  { path: '/achievements', priority: '0.5', changefreq: 'monthly' },
  { path: '/faq', priority: '0.5', changefreq: 'monthly' },
];

// Legal pages
const legalPages = [
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
];

function urlEntry(p, indent = '  ') {
  return `${indent}<url><loc>${DOMAIN}${p.path}</loc><lastmod>${TODAY}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`;
}

function buildSitemap() {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <!-- Homepage -->',
  ];

  // Homepage (expanded format)
  const home = mainPages[0];
  lines.push(`  <url>`);
  lines.push(`    <loc>${DOMAIN}${home.path}</loc>`);
  lines.push(`    <lastmod>${TODAY}</lastmod>`);
  lines.push(`    <changefreq>${home.changefreq}</changefreq>`);
  lines.push(`    <priority>${home.priority}</priority>`);
  lines.push(`  </url>`);
  lines.push('');

  // Main pages
  lines.push('  <!-- Main Pages -->');
  for (const p of mainPages.slice(1)) {
    lines.push(urlEntry(p));
  }
  lines.push('');

  // Feature pages
  lines.push('  <!-- Feature Pages -->');
  for (const p of featurePages) {
    lines.push(urlEntry(p));
  }
  lines.push('');

  // Legal pages
  lines.push('  <!-- Legal Pages -->');
  for (const p of legalPages) {
    lines.push(urlEntry(p));
  }
  lines.push('');

  // 114 surah pages — clean paths /surah/N
  lines.push('  <!-- Surah Pages (114 surahs) -->');
  for (let i = 1; i <= 114; i++) {
    lines.push(`  <url><loc>${DOMAIN}/surah/${i}</loc><lastmod>${TODAY}</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>`);
  }
  lines.push('');

  // 114 discussion pages — clean paths /discussions/surah/N
  lines.push('  <!-- Discussion Pages (114 surahs) -->');
  for (let i = 1; i <= 114; i++) {
    lines.push(`  <url><loc>${DOMAIN}/discussions/surah/${i}</loc><lastmod>${TODAY}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`);
  }

  lines.push('</urlset>');
  return lines.join('\n') + '\n';
}

const sitemap = buildSitemap();
const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, sitemap, 'utf-8');

const totalUrls = mainPages.length + featurePages.length + legalPages.length + 114 + 114;
console.log(`Sitemap generated: ${outPath}`);
console.log(`  - ${totalUrls} URLs (${mainPages.length} main + ${featurePages.length} features + ${legalPages.length} legal + 114 surahs + 114 discussions)`);
