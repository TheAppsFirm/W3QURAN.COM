/**
 * Cloudflare Pages Function - TTS Proxy
 * Supports Google Cloud TTS (high quality) and Google Translate TTS (fallback)
 */

// Google Cloud TTS voices - Chirp3-HD (highest quality male voices)
// Male voices: Achird, Algenib, Charon, Enceladus, Fenrir, Orus, Puck, etc.
// Female voices: Aoede, Kore, Leda, Zephyr, etc.
const GOOGLE_CLOUD_VOICES = {
  // South Asian
  ur: { languageCode: 'ur-IN', name: 'ur-IN-Chirp3-HD-Puck' },
  hi: { languageCode: 'hi-IN', name: 'hi-IN-Chirp3-HD-Puck' },
  bn: { languageCode: 'bn-IN', name: 'bn-IN-Chirp3-HD-Charon' },
  ta: { languageCode: 'ta-IN', name: 'ta-IN-Chirp3-HD-Charon' },
  te: { languageCode: 'te-IN', name: 'te-IN-Chirp3-HD-Charon' },
  ml: { languageCode: 'ml-IN', name: 'ml-IN-Chirp3-HD-Charon' },
  kn: { languageCode: 'kn-IN', name: 'kn-IN-Chirp3-HD-Charon' },
  gu: { languageCode: 'gu-IN', name: 'gu-IN-Chirp3-HD-Charon' },
  mr: { languageCode: 'mr-IN', name: 'mr-IN-Chirp3-HD-Charon' },
  // English & Arabic
  en: { languageCode: 'en-US', name: 'en-US-Chirp3-HD-Charon' },
  ar: { languageCode: 'ar-XA', name: 'ar-XA-Chirp3-HD-Charon' },
  // East Asian
  zh: { languageCode: 'cmn-CN', name: 'cmn-CN-Chirp3-HD-Charon' },
  ja: { languageCode: 'ja-JP', name: 'ja-JP-Chirp3-HD-Charon' },
  ko: { languageCode: 'ko-KR', name: 'ko-KR-Chirp3-HD-Charon' },
  // European - Western
  es: { languageCode: 'es-ES', name: 'es-ES-Chirp3-HD-Charon' },
  fr: { languageCode: 'fr-FR', name: 'fr-FR-Chirp3-HD-Charon' },
  de: { languageCode: 'de-DE', name: 'de-DE-Chirp3-HD-Charon' },
  pt: { languageCode: 'pt-BR', name: 'pt-BR-Chirp3-HD-Charon' },
  it: { languageCode: 'it-IT', name: 'it-IT-Chirp3-HD-Charon' },
  nl: { languageCode: 'nl-NL', name: 'nl-NL-Chirp3-HD-Charon' },
  // European - Northern
  sv: { languageCode: 'sv-SE', name: 'sv-SE-Chirp3-HD-Charon' },
  no: { languageCode: 'nb-NO', name: 'nb-NO-Chirp3-HD-Charon' },
  fi: { languageCode: 'fi-FI', name: 'fi-FI-Chirp3-HD-Charon' },
  // European - Eastern
  ru: { languageCode: 'ru-RU', name: 'ru-RU-Chirp3-HD-Charon' },
  pl: { languageCode: 'pl-PL', name: 'pl-PL-Chirp3-HD-Charon' },
  cs: { languageCode: 'cs-CZ', name: 'cs-CZ-Chirp3-HD-Charon' },
  ro: { languageCode: 'ro-RO', name: 'ro-RO-Chirp3-HD-Charon' },
  bg: { languageCode: 'bg-BG', name: 'bg-BG-Chirp3-HD-Charon' },
  uk: { languageCode: 'uk-UA', name: 'uk-UA-Chirp3-HD-Charon' },
  hu: { languageCode: 'hu-HU', name: 'hu-HU-Chirp3-HD-Charon' },
  hr: { languageCode: 'hr-HR', name: 'hr-HR-Chirp3-HD-Charon' },
  sr: { languageCode: 'sr-RS', name: 'sr-RS-Chirp3-HD-Charon' },
  sk: { languageCode: 'sk-SK', name: 'sk-SK-Chirp3-HD-Charon' },
  sq: { languageCode: 'sq-AL', name: 'sq-AL-Chirp3-HD-Charon' },
  // Turkish & Central Asian
  tr: { languageCode: 'tr-TR', name: 'tr-TR-Chirp3-HD-Charon' },
  // Southeast Asian
  id: { languageCode: 'id-ID', name: 'id-ID-Chirp3-HD-Charon' },
  ms: { languageCode: 'ms-MY', name: 'ms-MY-Chirp3-HD-Charon' },
  th: { languageCode: 'th-TH', name: 'th-TH-Chirp3-HD-Charon' },
  vi: { languageCode: 'vi-VN', name: 'vi-VN-Chirp3-HD-Charon' },
  tl: { languageCode: 'fil-PH', name: 'fil-PH-Chirp3-HD-Charon' },
  // Middle Eastern
  fa: { languageCode: 'fa-IR', name: 'fa-IR-Chirp3-HD-Charon' },
  he: { languageCode: 'he-IL', name: 'he-IL-Chirp3-HD-Charon' },
  // African
  sw: { languageCode: 'sw-KE', name: 'sw-KE-Chirp3-HD-Charon' },
};

// Language code mapping for fallback TTS providers
// Language code mapping for fallback TTS (Google Translate)
// Used when Chirp3-HD is unavailable for a language
const LANG_MAPPING = {
  'ur': 'ur', 'en': 'en', 'hi': 'hi', 'ar': 'ar',
  'bn': 'bn', 'ta': 'ta', 'te': 'te', 'ml': 'ml', 'kn': 'kn', 'gu': 'gu', 'mr': 'mr',
  'zh': 'zh-CN', 'ja': 'ja', 'ko': 'ko',
  'es': 'es', 'fr': 'fr', 'de': 'de', 'pt': 'pt', 'it': 'it', 'nl': 'nl',
  'sv': 'sv', 'no': 'no', 'fi': 'fi',
  'ru': 'ru', 'pl': 'pl', 'cs': 'cs', 'ro': 'ro', 'bg': 'bg', 'uk': 'uk', 'hu': 'hu',
  'hr': 'hr', 'sr': 'sr', 'sk': 'sk', 'sq': 'sq', 'bs': 'bs',
  'tr': 'tr', 'az': 'az',
  'id': 'id', 'ms': 'ms', 'th': 'th', 'vi': 'vi', 'tl': 'tl', 'km': 'km', 'my': 'my',
  'fa': 'fa', 'he': 'iw', 'ps': 'ps', 'ku': 'ku', 'sd': 'sd',
  'sw': 'sw', 'ha': 'ha', 'yo': 'yo', 'so': 'so', 'am': 'am',
  'ne': 'ne', 'si': 'si',
  'uz': 'uz', 'kk': 'kk', 'tg': 'tg',
  'as': 'as', 'dv': 'dv',
};

/**
 * Check if user has premium access (server-side verification)
 */
async function checkPremiumAccess(request, env) {
  // Get session token from cookie
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [key, ...val] = c.trim().split('=');
      return [key, val.join('=')];
    })
  );

  const sessionToken = cookies['w3quran_session'];
  if (!sessionToken) {
    return { isPremium: false, isAdmin: false };
  }

  try {
    // Check session and subscription in database
    const result = await env.DB.prepare(`
      SELECT u.email, s.plan
      FROM sessions sess
      JOIN users u ON sess.user_id = u.id
      LEFT JOIN subscriptions s ON u.id = s.user_id
      WHERE sess.token = ? AND sess.expires_at > datetime('now')
      LIMIT 1
    `).bind(sessionToken).first();

    if (!result) {
      return { isPremium: false, isAdmin: false };
    }

    // Check admin emails from environment
    const adminEmails = (env.ADMIN_EMAILS || '').split(',').map(e => e.trim().toLowerCase()).filter(Boolean);
    const isAdmin = adminEmails.includes(result.email?.toLowerCase());
    const hasPaidPlan = ['monthly', 'yearly', 'lifetime'].includes(result.plan);

    return {
      isPremium: hasPaidPlan || isAdmin,
      isAdmin,
    };
  } catch (error) {
    console.error('[TTS] Premium check error:', error);
    return { isPremium: false, isAdmin: false };
  }
}

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

  // Only allow GET
  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const url = new URL(request.url);
    const text = url.searchParams.get('text');
    const lang = url.searchParams.get('lang') || 'en';
    const surahId = parseInt(url.searchParams.get('surah') || '0', 10);

    // SERVER-SIDE PREMIUM CHECK - This cannot be bypassed from frontend
    // Free cases: Surah Al-Fatiha (id=1), short text without surah param (Kids mode words)
    const isFreeTrialSurah = surahId === 1;
    const isShortText = text && text.length <= 50 && surahId === 0;

    if (!isFreeTrialSurah && !isShortText) {
      const { isPremium } = await checkPremiumAccess(request, env);
      if (!isPremium) {
        return new Response(JSON.stringify({
          error: 'Premium required',
          code: 'PREMIUM_REQUIRED',
          message: 'HD TTS is a premium feature. Surah Al-Fatiha is free for trial.',
        }), {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    if (!text) {
      return new Response(JSON.stringify({ error: 'Missing text parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Truncate text if too long (Google Cloud TTS limit is ~5000 chars, but we keep it reasonable)
    const truncatedText = text.length > 500 ? text.substring(0, 500) : text;

    // Try multiple TTS sources
    let audioData = null;
    let error = null;

    // Source 1: Google Cloud TTS (highest quality) - requires API key in env
    const apiKey = env.GOOGLE_TTS_API_KEY;
    if (apiKey && GOOGLE_CLOUD_VOICES[lang]) {
      try {
        const voiceConfig = GOOGLE_CLOUD_VOICES[lang];
        console.log('[TTS] Trying Google Cloud TTS for lang:', lang, 'voice:', voiceConfig.name);
        const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            input: { text: truncatedText },
            voice: voiceConfig,
            audioConfig: {
              audioEncoding: 'MP3',
              // Note: Chirp3-HD ignores speakingRate/pitch - uses natural LLM pacing
            },
          }),
        });

        console.log('[TTS] Google Cloud response status:', response.status);

        if (response.ok) {
          const data = await response.json();
          if (data.audioContent) {
            // Convert base64 to ArrayBuffer
            const binaryString = atob(data.audioContent);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
              bytes[i] = binaryString.charCodeAt(i);
            }
            audioData = bytes.buffer;
            console.log('[TTS] Google Cloud TTS success, voice:', voiceConfig.name, 'audio size:', audioData.byteLength);
          }
        } else {
          const errorText = await response.text();
          console.error('[TTS] Google Cloud TTS failed:', response.status, errorText);
        }
      } catch (e) {
        console.error('[Google Cloud TTS] Error:', e.message);
        error = e;
      }
    } else {
      console.log('[TTS] Skipping Google Cloud TTS - apiKey:', !!apiKey, 'voiceAvailable:', !!GOOGLE_CLOUD_VOICES[lang]);
    }

    // Source 2: Google Translate TTS (with tw-ob client) - free fallback
    const translateLang = LANG_MAPPING[lang] || lang;
    if (!audioData) {
      try {
        console.log('[TTS] Trying Google Translate TTS (tw-ob) lang:', translateLang);
        const ttsUrl1 = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${translateLang}&q=${encodeURIComponent(truncatedText)}`;
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
            console.log('[TTS] Google Translate (tw-ob) success');
          }
        }
      } catch (e) {
        error = e;
      }
    }

    // Source 3: Google Translate TTS (with gtx client)
    if (!audioData) {
      try {
        const ttsUrl2 = `https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=${translateLang}&q=${encodeURIComponent(truncatedText)}`;
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

    // Source 4: VoiceRSS free tier (as final fallback for common languages)
    if (!audioData && ['en', 'ur', 'hi', 'ar', 'zh', 'ja', 'ko', 'es', 'fr', 'de', 'ru', 'tr'].includes(lang)) {
      try {
        // VoiceRSS has a free tier with limited requests
        const voiceRssLang = translateLang || 'en-us';
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
