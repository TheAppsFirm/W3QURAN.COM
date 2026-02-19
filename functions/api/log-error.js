/**
 * Error Logging API
 * Captures client-side errors for debugging and crash analysis
 * Stored in D1 database for analysis
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
    const errorData = await request.json();

    // Get user info from session if available
    let userId = null;
    const cookies = request.headers.get('Cookie') || '';
    const sessionMatch = cookies.match(/w3quran_session=([^;]+)/);
    const sessionToken = sessionMatch?.[1];

    if (sessionToken) {
      const user = await env.DB.prepare(`
        SELECT s.user_id
        FROM sessions s
        WHERE s.token = ? AND s.expires_at > datetime('now')
      `).bind(sessionToken).first();
      userId = user?.user_id || null;
    }

    // Extract key error info
    const {
      type = 'unknown',
      timestamp = new Date().toISOString(),
      userAgent = '',
      url = '',
      surahId,
      ayahNum,
      errorMessage,
      stack,
      memoryUsage,
      ...additionalData
    } = errorData;

    // Insert into error_logs table
    await env.DB.prepare(`
      INSERT INTO error_logs (
        user_id,
        error_type,
        error_message,
        stack_trace,
        user_agent,
        page_url,
        surah_id,
        ayah_num,
        additional_data,
        created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      userId,
      type,
      errorMessage || type,
      stack || null,
      userAgent,
      url,
      surahId || null,
      ayahNum || null,
      JSON.stringify(additionalData),
      timestamp
    ).run();

    // Also log to console for Cloudflare dashboard
    console.log('[Error Log]', {
      type,
      userId,
      surahId,
      ayahNum,
      userAgent: userAgent.substring(0, 100),
      url,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('[Error Logger] Failed to log error:', error);
    // Don't return error to client - logging should be transparent
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });
  }
}
