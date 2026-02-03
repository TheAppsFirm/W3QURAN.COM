/**
 * Cloudflare Pages Function - Quran Foundation API Proxy
 * Handles OAuth2 authentication securely and fetches word-by-word translations
 */

// Token cache (in-memory, resets on cold start)
let tokenCache = {
  accessToken: null,
  expiresAt: 0,
};

/**
 * Get OAuth2 access token from Quran Foundation
 */
async function getAccessToken(env) {
  // Check cache first
  if (tokenCache.accessToken && Date.now() < tokenCache.expiresAt) {
    return tokenCache.accessToken;
  }

  // Access environment variables
  const clientId = env.QURAN_CLIENT_ID;
  const clientSecret = env.QURAN_CLIENT_SECRET;

  // Debug: Log available env keys (remove in production)
  console.log('Available env keys:', Object.keys(env || {}));

  if (!clientId || !clientSecret) {
    console.error('Missing credentials. CLIENT_ID exists:', !!clientId, 'CLIENT_SECRET exists:', !!clientSecret);
    throw new Error('Missing OAuth credentials');
  }

  // OAuth2 client credentials flow
  const tokenUrl = 'https://oauth2.quran.foundation/oauth/token';

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      scope: 'content',
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('OAuth error:', error);
    throw new Error(`OAuth failed: ${response.status}`);
  }

  const data = await response.json();

  // Cache the token (with 5 min buffer before expiry)
  tokenCache = {
    accessToken: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 300) * 1000,
  };

  return data.access_token;
}

/**
 * Fetch word-by-word translations from Quran Foundation API
 */
async function fetchWords(surahId, language, accessToken) {
  const apiUrl = `https://api.quran.com/api/v4/verses/by_chapter/${surahId}`;
  const params = new URLSearchParams({
    words: 'true',
    word_translation_language: language,
    per_page: '300',
    word_fields: 'text_uthmani,text_indopak,code_v1',
  });

  const response = await fetch(`${apiUrl}?${params}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

/**
 * Main handler for the Cloudflare Function
 */
export async function onRequest(context) {
  const { request, env } = context;

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  // Only allow GET requests
  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const url = new URL(request.url);
    const surahId = url.searchParams.get('surah');
    const language = url.searchParams.get('lang') || 'en';

    if (!surahId || surahId < 1 || surahId > 114) {
      return new Response(JSON.stringify({ error: 'Invalid surah ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get access token
    const accessToken = await getAccessToken(env);

    // Fetch words from API
    const data = await fetchWords(surahId, language, accessToken);

    // Transform data into our format
    const wordsMap = {};
    data.verses?.forEach(verse => {
      const verseNum = verse.verse_number;
      wordsMap[verseNum] = verse.words
        ?.filter(w => w.char_type_name === 'word')
        ?.map(w => ({
          arabic: w.text_uthmani || w.text,
          meaning: w.translation?.text || '',
          transliteration: w.transliteration?.text || '',
          audioUrl: w.audio_url ? `https://audio.qurancdn.com/${w.audio_url}` : null,
          position: w.position,
        })) || [];
    });

    return new Response(JSON.stringify({
      success: true,
      language,
      surahId: parseInt(surahId),
      words: wordsMap
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({
      error: error.message,
      fallback: true
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
