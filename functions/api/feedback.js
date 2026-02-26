/**
 * User Feedback Submission API
 * POST /api/feedback — Submit feedback (logged-in users only, no guest feedback)
 *
 * Body: { type: 'bug'|'feature'|'general', message: string, metadata?: object }
 */

export async function onRequest(context) {
  const { request, env } = context;
  const headers = { 'Content-Type': 'application/json' };

  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers });
  }

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503, headers });
  }

  // Verify logged-in user (no guest feedback)
  const cookieHeader = request.headers.get('Cookie') || '';
  const sessionMatch = cookieHeader.match(/w3quran_session=([^;]+)/);
  if (!sessionMatch) {
    return new Response(JSON.stringify({ error: 'You must be logged in to submit feedback' }), { status: 401, headers });
  }

  let user;
  try {
    user = await env.DB.prepare(
      'SELECT u.id, u.email, u.name FROM sessions s JOIN users u ON s.user_id = u.id WHERE s.token = ? AND s.expires_at > datetime("now")'
    ).bind(sessionMatch[1]).first();
  } catch {
    return new Response(JSON.stringify({ error: 'Authentication failed' }), { status: 401, headers });
  }

  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid or expired session. Please log in again.' }), { status: 401, headers });
  }

  try {
    const body = await request.json();
    const { type, message, metadata } = body;

    // Validate type
    const validTypes = ['bug', 'feature', 'general'];
    if (!type || !validTypes.includes(type)) {
      return new Response(
        JSON.stringify({ error: `Invalid type. Must be one of: ${validTypes.join(', ')}` }),
        { status: 400, headers }
      );
    }

    // Validate message
    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return new Response(
        JSON.stringify({ error: 'Message is required and must be at least 5 characters' }),
        { status: 400, headers }
      );
    }

    if (message.length > 5000) {
      return new Response(
        JSON.stringify({ error: 'Message must be under 5000 characters' }),
        { status: 400, headers }
      );
    }

    // Insert feedback
    await env.DB.prepare(
      `INSERT INTO user_feedback (user_id, type, message, metadata, status, created_at, updated_at)
       VALUES (?, ?, ?, ?, 'new', datetime('now'), datetime('now'))`
    ).bind(
      user.id,
      type,
      message.trim(),
      metadata ? JSON.stringify(metadata) : null
    ).run();

    console.log(`[Feedback] New ${type} from ${user.email}: ${message.substring(0, 50)}...`);

    return new Response(JSON.stringify({ success: true, message: 'Feedback submitted successfully' }), { status: 201, headers });
  } catch (error) {
    console.error('[Feedback] Submit error:', error);
    return new Response(JSON.stringify({ error: 'Failed to submit feedback' }), { status: 500, headers });
  }
}
