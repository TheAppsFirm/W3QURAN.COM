/**
 * Analytics Events API
 * Receives batched analytics events from client and stores in D1
 *
 * POST /api/analytics/events
 * Body: { events: [...] }
 */

export async function onRequest(context) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await request.json();
    const { events } = body;

    if (!events || !Array.isArray(events) || events.length === 0) {
      return new Response(JSON.stringify({ error: 'No events provided' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Limit batch size to 100 events
    const eventsToInsert = events.slice(0, 100);

    // Get user ID from session if authenticated
    let userId = null;
    const cookies = request.headers.get('Cookie') || '';
    const sessionMatch = cookies.match(/w3quran_session=([^;]+)/);
    if (sessionMatch) {
      const sessionToken = sessionMatch[1];
      const user = await env.DB.prepare(`
        SELECT u.id FROM sessions s
        JOIN users u ON s.user_id = u.id
        WHERE s.token = ? AND s.expires_at > datetime('now')
      `).bind(sessionToken).first();
      if (user) {
        userId = user.id;
      }
    }

    // Insert events in batches
    let inserted = 0;
    const batchSize = 20; // D1 works best with smaller batches

    for (let i = 0; i < eventsToInsert.length; i += batchSize) {
      const batch = eventsToInsert.slice(i, i + batchSize);
      const statements = [];

      for (const event of batch) {
        // Validate required fields
        if (!event.event_type || !event.session_id) {
          continue;
        }

        // Sanitize and prepare values
        const stmt = env.DB.prepare(`
          INSERT INTO analytics_events (
            event_type, user_id, session_id, page_url, surah_id, ayah_num,
            feature_name, duration_seconds, completion_percent, search_query,
            result_count, metadata, country, created_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          String(event.event_type).slice(0, 50),
          userId || event.user_id || null,
          String(event.session_id).slice(0, 100),
          event.page_url ? String(event.page_url).slice(0, 500) : null,
          event.surah_id ? parseInt(event.surah_id, 10) : null,
          event.ayah_num ? parseInt(event.ayah_num, 10) : null,
          event.feature_name ? String(event.feature_name).slice(0, 50) : null,
          event.duration_seconds ? parseInt(event.duration_seconds, 10) : null,
          event.completion_percent ? Math.min(100, Math.max(0, parseInt(event.completion_percent, 10))) : null,
          event.search_query ? String(event.search_query).slice(0, 200) : null,
          event.result_count ? parseInt(event.result_count, 10) : null,
          event.metadata ? JSON.stringify(event.metadata).slice(0, 2000) : null,
          event.country ? String(event.country).slice(0, 10) : null,
          event.timestamp || new Date().toISOString()
        );

        statements.push(stmt);
        inserted++;
      }

      // Execute batch
      if (statements.length > 0) {
        await env.DB.batch(statements);
      }
    }

    // Also update daily aggregates for common metrics
    await updateDailyAggregates(env, eventsToInsert, userId);

    return new Response(JSON.stringify({
      success: true,
      inserted,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('[Analytics Events] Error:', error);
    return new Response(JSON.stringify({
      error: 'Internal server error',
      message: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
}

/**
 * Update daily aggregates for fast dashboard queries
 */
async function updateDailyAggregates(env, events, userId) {
  const today = new Date().toISOString().split('T')[0];

  // Count events by type
  const counts = {
    page_view: 0,
    surah_read: 0,
    audio_play: 0,
    feature_use: 0,
    search: 0
  };

  const surahs = new Set();
  const features = {};

  for (const event of events) {
    if (counts[event.event_type] !== undefined) {
      counts[event.event_type]++;
    }
    if (event.surah_id) {
      surahs.add(event.surah_id);
    }
    if (event.feature_name) {
      features[event.feature_name] = (features[event.feature_name] || 0) + 1;
    }
  }

  const statements = [];

  // Update page views
  if (counts.page_view > 0) {
    statements.push(env.DB.prepare(`
      INSERT INTO analytics_daily (date, metric_name, metric_value, dimensions)
      VALUES (?, 'page_views', ?, '{}')
      ON CONFLICT(date, metric_name, dimensions)
      DO UPDATE SET metric_value = metric_value + ?
    `).bind(today, counts.page_view, counts.page_view));
  }

  // Update surah reads
  if (counts.surah_read > 0) {
    statements.push(env.DB.prepare(`
      INSERT INTO analytics_daily (date, metric_name, metric_value, dimensions)
      VALUES (?, 'surah_reads', ?, '{}')
      ON CONFLICT(date, metric_name, dimensions)
      DO UPDATE SET metric_value = metric_value + ?
    `).bind(today, counts.surah_read, counts.surah_read));
  }

  // Update audio plays
  if (counts.audio_play > 0) {
    statements.push(env.DB.prepare(`
      INSERT INTO analytics_daily (date, metric_name, metric_value, dimensions)
      VALUES (?, 'audio_plays', ?, '{}')
      ON CONFLICT(date, metric_name, dimensions)
      DO UPDATE SET metric_value = metric_value + ?
    `).bind(today, counts.audio_play, counts.audio_play));
  }

  // Update feature usage
  for (const [feature, count] of Object.entries(features)) {
    statements.push(env.DB.prepare(`
      INSERT INTO analytics_daily (date, metric_name, metric_value, dimensions)
      VALUES (?, 'feature_use', ?, ?)
      ON CONFLICT(date, metric_name, dimensions)
      DO UPDATE SET metric_value = metric_value + ?
    `).bind(today, count, JSON.stringify({ feature }), count));
  }

  // Update unique surahs read
  for (const surahId of surahs) {
    statements.push(env.DB.prepare(`
      INSERT INTO analytics_daily (date, metric_name, metric_value, dimensions)
      VALUES (?, 'surah_read_count', 1, ?)
      ON CONFLICT(date, metric_name, dimensions)
      DO UPDATE SET metric_value = metric_value + 1
    `).bind(today, JSON.stringify({ surah_id: surahId })));
  }

  // Execute all aggregate updates
  if (statements.length > 0) {
    try {
      await env.DB.batch(statements);
    } catch (err) {
      console.error('[Analytics] Failed to update daily aggregates:', err);
    }
  }
}
