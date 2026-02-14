/**
 * Cloudflare Pages Function - TTS Proxy
 * Multiple TTS sources with fallback
 */

// Language code mapping for different TTS providers
const LANG_MAPPING = {
  'ur': 'ur-PK',  // Urdu
  'en': 'en-US',
  'hi': 'hi-IN',
  'ar': 'ar-SA',
  'bn': 'bn-BD',
  'tr': 'tr-TR',
  'id': 'id-ID',
  'fr': 'fr-FR',
  'de': 'de-DE',
};

export async function onRequest(context) {
  const { request } = context;

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

  // Only allow GET
  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const url = new URL(request.url);
    const text = url.searchParams.get('text');
    const lang = url.searchParams.get('lang') || 'en';

    if (!text) {
      return new Response(JSON.stringify({ error: 'Missing text parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Truncate text if too long (Google has limits)
    const truncatedText = text.length > 200 ? text.substring(0, 200) : text;

    // Try multiple TTS sources
    let audioData = null;
    let error = null;

    // Source 1: Google Translate TTS (with tw-ob client)
    try {
      const ttsUrl1 = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${lang}&q=${encodeURIComponent(truncatedText)}`;
      const response1 = await fetch(ttsUrl1, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://translate.google.com/',
          'Accept': 'audio/mpeg, audio/*',
        },
      });
      if (response1.ok) {
        const data = await response1.arrayBuffer();
        if (data.byteLength > 100) { // Valid audio should be > 100 bytes
          audioData = data;
        }
      }
    } catch (e) {
      error = e;
    }

    // Source 2: Google Translate TTS (with gtx client)
    if (!audioData) {
      try {
        const ttsUrl2 = `https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=${lang}&q=${encodeURIComponent(truncatedText)}`;
        const response2 = await fetch(ttsUrl2, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
            'Referer': 'https://translate.google.com/',
          },
        });
        if (response2.ok) {
          const data = await response2.arrayBuffer();
          if (data.byteLength > 100) {
            audioData = data;
          }
        }
      } catch (e) {
        error = e;
      }
    }

    // Source 3: VoiceRSS free tier (as final fallback for common languages)
    if (!audioData && ['en', 'ur', 'hi', 'ar'].includes(lang)) {
      try {
        // VoiceRSS has a free tier with limited requests
        const voiceRssLang = LANG_MAPPING[lang] || 'en-us';
        const ttsUrl3 = `https://api.voicerss.org/?key=demo&hl=${voiceRssLang}&src=${encodeURIComponent(truncatedText)}&c=MP3`;
        const response3 = await fetch(ttsUrl3);
        if (response3.ok) {
          const data = await response3.arrayBuffer();
          if (data.byteLength > 100) {
            audioData = data;
          }
        }
      } catch (e) {
        // Ignore VoiceRSS errors
      }
    }

    if (!audioData) {
      // Return error with signal to use browser TTS
      return new Response(JSON.stringify({
        error: 'TTS unavailable',
        useBrowserTTS: true,
        lang: lang
      }), {
        status: 503,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // Return audio with CORS headers
    return new Response(audioData, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error('TTS Error:', error);
    return new Response(JSON.stringify({
      error: error.message,
      useBrowserTTS: true
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
