# SEO Setup Guide for w3Quran

Follow these steps to complete the SEO setup for w3quran.com.

---

## 1. Create OG Image (Social Sharing Preview)

You need a **1200x630px PNG** image at `public/og-image.png`. This is what shows when someone shares your link on WhatsApp, Facebook, Twitter, Discord, etc.

**Quick way:** Use Canva, Figma, or any image editor:
- Size: 1200 x 630 pixels
- Include: w3Quran logo, tagline "Interactive Quran Explorer", nice background
- Save as: `public/og-image.png`

**Also create:** `public/apple-touch-icon.png` (180x180px) for iOS home screen icon.

---

## 2. Google Search Console

### Register
1. Go to **https://search.google.com/search-console**
2. Sign in with your Google account
3. Click **"Add Property"**
4. Choose **"URL prefix"** and enter: `https://w3quran.com`
5. Choose **"HTML tag"** verification method
6. Copy the `content` value from the meta tag they give you

### Add Verification Code
Open `index.html` and replace the placeholder:
```html
<meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
```
Replace `YOUR_GOOGLE_VERIFICATION_CODE` with the code from step 6.

### Deploy & Verify
1. Deploy the site with the updated `index.html`
2. Go back to Search Console and click **Verify**
3. Once verified, go to **Sitemaps** in the left menu
4. Enter: `sitemap.xml` and click **Submit**

### What You Get
- See which Google searches bring visitors
- Monitor indexing status for all 124 URLs
- Get alerts about crawl errors, mobile issues
- Monitor Core Web Vitals (loading speed, interactivity)

---

## 3. Bing Webmaster Tools

### Register
1. Go to **https://www.bing.com/webmasters**
2. Sign in (Microsoft account or import from Google Search Console)
3. Click **"Add a Site"** and enter: `https://w3quran.com`
4. Choose **"HTML Meta Tag"** verification
5. Copy the `content` value

### Add Verification Code
Open `index.html` and replace the placeholder:
```html
<meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
```

### Deploy & Verify
1. Deploy the updated site
2. Go back to Bing Webmaster Tools and click **Verify**
3. Go to **Sitemaps** and submit: `https://w3quran.com/sitemap.xml`

### What You Get
- Search analytics for Bing, Yahoo, DuckDuckGo
- Backlink analysis
- SEO reports with fix suggestions
- IndexNow integration (see below)

---

## 4. IndexNow (Instant Indexing for Bing/Yandex)

IndexNow is **already configured**. The API key file is at:
- Key: `9e154e1175194170a8d953d962f933a2`
- Verification file: `public/9e154e1175194170a8d953d962f933a2.txt`

### How to Use
After deploying new content, run:
```bash
# Submit all pages (homepage + 114 surahs + views)
npm run indexnow

# Submit specific URLs
node scripts/indexnow.js /?surah=1 /?surah=2
```

### When to Use
- After deploying new features
- After adding new content/pages
- After significant content changes

Bing typically indexes within **minutes** after an IndexNow ping.

---

## 5. Google Indexing API (Instant Indexing for Google)

### Setup (One-time)
1. Go to **https://console.cloud.google.com**
2. Create a project (or use existing)
3. Go to **APIs & Services > Library**
4. Search for **"Web Search Indexing API"** and **Enable** it
5. Go to **IAM & Admin > Service Accounts**
6. Click **Create Service Account**
   - Name: `w3quran-indexing`
   - Role: (skip)
   - Click **Done**
7. Click on the new service account > **Keys** tab
8. **Add Key > Create new key > JSON**
9. Save the downloaded file as: `scripts/google-service-account.json`
10. Copy the service account email (looks like: `w3quran-indexing@project.iam.gserviceaccount.com`)
11. Go to **Google Search Console > Settings > Users and permissions**
12. Click **Add user** and paste the service account email
13. Set permission to **Owner**

### Install dependency
```bash
npm install googleapis
```

### How to Use
```bash
# Submit homepage
npm run google-index

# Submit specific URLs
node scripts/google-index.js /?surah=36 /?surah=67

# Submit all surahs (uses 115 of your 200/day quota)
node scripts/google-index.js --all
```

### Quota
Google allows **200 URL submissions per day**. For bulk updates, rely on the sitemap instead — Google re-crawls it periodically.

---

## 6. Sitemap

The sitemap auto-generates before each build via `prebuild` script.

```bash
# Manually regenerate
npm run sitemap
```

This creates `public/sitemap.xml` with:
- 10 main views (homepage, daily, quiz, names, etc.)
- 114 surah pages
- **Total: 124 URLs**

The sitemap is referenced in `robots.txt` so search engines find it automatically.

---

## 7. Verify Everything Works

### After deploying with all changes:

1. **robots.txt**: Visit `https://w3quran.com/robots.txt` — should show crawl rules
2. **Sitemap**: Visit `https://w3quran.com/sitemap.xml` — should show all URLs
3. **OG Tags**: Test at https://developers.facebook.com/tools/debug/ — enter your URL
4. **Twitter Cards**: Test at https://cards-dev.twitter.com/validator
5. **Rich Results**: Test at https://search.google.com/test/rich-results — paste URL
6. **IndexNow**: Check Bing Webmaster Tools > URL Submission for IndexNow status
7. **Google**: Check Search Console > Coverage for indexing status

---

## What Each Tool Does For You

| Tool | Benefit |
|------|---------|
| **Open Graph tags** | Beautiful previews when your links are shared on social media |
| **robots.txt** | Tells Google/Bing which pages to crawl (and finds your sitemap) |
| **sitemap.xml** | Search engines discover all 124 pages without manually crawling |
| **Google Search Console** | See search traffic, fix issues, monitor performance |
| **Bing Webmaster Tools** | Same for Bing/Yahoo/DuckDuckGo + IndexNow dashboard |
| **IndexNow** | New content indexed on Bing in minutes instead of days |
| **Google Indexing API** | Request immediate Google crawling of specific pages |
| **JSON-LD** | Rich snippets in search results (app info, features list) |
| **Canonical tags** | Prevents duplicate content penalties from different URL formats |
| **Dynamic meta tags** | Each surah page has unique title & description for better SEO |
