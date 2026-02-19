/**
 * Audio Transcription API using OpenAI Whisper
 * Converts audio to text for Talk to Quran feature
 * Used as fallback when Web Speech API is not available (iOS, etc.)
 *
 * Cost: ~$0.006 per minute of audio
 */

export async function onRequest(context) {
  const { env, request } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    // Get session token from cookie to verify user
    const cookies = request.headers.get('Cookie') || '';
    const sessionMatch = cookies.match(/w3quran_session=([^;]+)/);
    const sessionToken = sessionMatch?.[1];

    if (!sessionToken) {
      return new Response(JSON.stringify({ error: 'Authentication required' }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    // Verify session
    const user = await env.DB.prepare(`
      SELECT s.user_id, u.email
      FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.token = ? AND s.expires_at > datetime('now')
    `).bind(sessionToken).first();

    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid session' }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    // Get audio data from request
    const formData = await request.formData();
    const audioFile = formData.get('audio');
    const language = formData.get('language') || 'en';

    if (!audioFile) {
      return new Response(JSON.stringify({ error: 'No audio file provided' }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Map language codes to Whisper language codes
    const whisperLangMap = {
      'en': 'en',
      'ur': 'ur',
      'ar': 'ar',
    };
    const whisperLang = whisperLangMap[language] || 'en';

    // Prepare form data for Whisper API
    const whisperFormData = new FormData();
    whisperFormData.append('file', audioFile, 'audio.webm');
    whisperFormData.append('model', 'whisper-1');
    whisperFormData.append('language', whisperLang);
    whisperFormData.append('response_format', 'json');

    // Call OpenAI Whisper API
    const whisperResponse = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
      },
      body: whisperFormData,
    });

    if (!whisperResponse.ok) {
      const errorData = await whisperResponse.text();
      console.error('[Whisper] API Error:', errorData);
      return new Response(JSON.stringify({
        error: 'Transcription failed',
        details: whisperResponse.status
      }), {
        status: 500,
        headers: corsHeaders,
      });
    }

    const result = await whisperResponse.json();

    return new Response(JSON.stringify({
      success: true,
      text: result.text,
      language: whisperLang,
    }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('[Transcribe] Error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}
