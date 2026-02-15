/**
 * Cloudflare Pages Function - TTS Proxy
 * Supports Google Cloud TTS (high quality) and Google Translate TTS (fallback)
 */

// Google Cloud TTS voices - Chirp3-HD (highest quality male voices)
// Male voices: Achird, Algenib, Charon, Enceladus, Fenrir, Orus, Puck, etc.
// Female voices: Aoede, Kore, Leda, Zephyr, etc.
const GOOGLE_CLOUD_VOICES = {
  ur: { languageCode: 'ur-IN', name: 'ur-IN-Chirp3-HD-Puck' },
  hi: { languageCode: 'hi-IN', name: 'hi-IN-Chirp3-HD-Puck' },
  en: { languageCode: 'en-US', name: 'en-US-Chirp3-HD-Charon' },
  ar: { languageCode: 'ar-XA', name: 'ar-XA-Chirp3-HD-Charon' },
};

// Language code mapping for fallback TTS providers
const LANG_MAPPING = {
  'ur': 'ur-PK',
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
    if (!audioData) {
      try {
        console.log('[TTS] Trying Google Translate TTS (tw-ob)');
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

    // Source 4: VoiceRSS free tier (as final fallback for common languages)
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
