#!/usr/bin/env node
/**
 * generate-sitemap.js
 * Generates sitemap.xml for w3quran.com with all 114 surahs + main views.
 * Run: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DOMAIN = 'https://w3quran.com';
const TODAY = new Date().toISOString().split('T')[0];

// All 114 surah names for readable URLs in comments
const SURAH_NAMES = [
  'Al-Fatiha','Al-Baqarah','Aal-E-Imran','An-Nisa','Al-Maida','Al-Anam','Al-Araf','Al-Anfal',
  'At-Tawbah','Yunus','Hud','Yusuf','Ar-Ra\'d','Ibrahim','Al-Hijr','An-Nahl','Al-Isra',
  'Al-Kahf','Maryam','Taha','Al-Anbiya','Al-Hajj','Al-Muminun','An-Nur','Al-Furqan','Ash-Shuara',
  'An-Naml','Al-Qasas','Al-Ankabut','Ar-Rum','Luqman','As-Sajdah','Al-Ahzab','Saba','Fatir',
  'Ya-Sin','As-Saffat','Sad','Az-Zumar','Ghafir','Fussilat','Ash-Shuraa','Az-Zukhruf','Ad-Dukhan',
  'Al-Jathiyah','Al-Ahqaf','Muhammad','Al-Fath','Al-Hujurat','Qaf','Adh-Dhariyat','At-Tur',
  'An-Najm','Al-Qamar','Ar-Rahman','Al-Waqiah','Al-Hadid','Al-Mujadila','Al-Hashr','Al-Mumtahanah',
  'As-Saf','Al-Jumuah','Al-Munafiqun','At-Taghabun','At-Talaq','At-Tahrim','Al-Mulk','Al-Qalam',
  'Al-Haqqah','Al-Maarij','Nuh','Al-Jinn','Al-Muzzammil','Al-Muddathir','Al-Qiyamah','Al-Insan',
  'Al-Mursalat','An-Naba','An-Naziat','Abasa','At-Takwir','Al-Infitar','Al-Mutaffifin','Al-Inshiqaq',
  'Al-Buruj','At-Tariq','Al-Ala','Al-Ghashiyah','Al-Fajr','Al-Balad','Ash-Shams','Al-Layl',
  'Ad-Duhaa','Ash-Sharh','At-Tin','Al-Alaq','Al-Qadr','Al-Bayyinah','Az-Zalzalah','Al-Adiyat',
  'Al-Qariah','At-Takathur','Al-Asr','Al-Humazah','Al-Fil','Quraysh','Al-Maun','Al-Kawthar',
  'Al-Kafirun','An-Nasr','Al-Masad','Al-Ikhlas','Al-Falaq','An-Nas'
];

const views = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/?view=daily', priority: '0.8', changefreq: 'daily' },
  { path: '/?view=kids', priority: '0.8', changefreq: 'weekly' },
  { path: '/?view=quiz', priority: '0.7', changefreq: 'weekly' },
  { path: '/?view=names', priority: '0.7', changefreq: 'monthly' },
  { path: '/?view=listen', priority: '0.7', changefreq: 'monthly' },
  { path: '/?view=prayer', priority: '0.7', changefreq: 'daily' },
  { path: '/?view=stats', priority: '0.5', changefreq: 'monthly' },
  { path: '/?view=privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/?view=terms', priority: '0.3', changefreq: 'yearly' },
];

function buildSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Main views
  for (const v of views) {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}${v.path}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>${v.changefreq}</changefreq>\n`;
    xml += `    <priority>${v.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  // All 114 surahs
  for (let i = 1; i <= 114; i++) {
    xml += `  <!-- Surah ${i}: ${SURAH_NAMES[i - 1]} -->\n`;
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/?surah=${i}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.9</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += '</urlset>\n';
  return xml;
}

const sitemap = buildSitemap();
const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, sitemap, 'utf-8');
console.log(`Sitemap generated: ${outPath}`);
console.log(`  - ${views.length} views + 114 surahs = ${views.length + 114} URLs`);
