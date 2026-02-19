/**
 * Batch Logging API
 * Receives batched logs from the client logger utility
 * Stores in D1 database for analysis
 */

export async function onRequest(context) {
  const { env, request } = context;

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
    const { logs } = await request.json();

    if (!Array.isArray(logs) || logs.length === 0) {
      return new Response(JSON.stringify({ success: true, inserted: 0 }), {
        status: 200,
        headers: corsHeaders,
      });
    }

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

    // Batch insert logs (max 50 at a time to avoid D1 limits)
    const logsToInsert = logs.slice(0, 50);
    let inserted = 0;

    for (const log of logsToInsert) {
      try {
        await env.DB.prepare(`
          INSERT INTO app_logs (
            user_id,
            session_id,
            log_level,
            log_type,
            message,
            browser,
            os,
            device,
            memory_used_mb,
            memory_percent,
            page_url,
            surah_id,
            ayah_num,
            extra_data,
            created_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          userId,
          log.sessionId || null,
          log.level || 'info',
          log.type || 'general',
          log.message || '',
          log.browser || null,
          log.os || null,
          log.device || null,
          log.memory?.usedMB || null,
          log.memory?.usagePercent || null,
          log.url || null,
          log.surahId || null,
          log.ayahNum || null,
          JSON.stringify({
            ...log,
            // Remove duplicates already in columns
            sessionId: undefined,
            level: undefined,
            type: undefined,
            message: undefined,
            browser: undefined,
            os: undefined,
            device: undefined,
            memory: undefined,
            url: undefined,
            surahId: undefined,
            ayahNum: undefined,
          }),
          log.timestamp || new Date().toISOString()
        ).run();
        inserted++;
      } catch (err) {
        console.error('[Logs] Insert error:', err.message);
      }
    }

    // Log critical errors to console for Cloudflare dashboard
    logsToInsert
      .filter(l => l.level === 'error' || l.level === 'critical')
      .forEach(l => {
        console.error('[App Error]', {
          type: l.type,
          message: l.message,
          surahId: l.surahId,
          browser: l.browser,
          os: l.os,
        });
      });

    return new Response(JSON.stringify({ success: true, inserted }), {
      status: 200,
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('[Logs API] Error:', error);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: corsHeaders,
    });
  }
}
