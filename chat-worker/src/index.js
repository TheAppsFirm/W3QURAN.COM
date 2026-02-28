/**
 * w3Quran Chat Worker — Entry point
 * Routes WebSocket connections to Durable Object chat rooms.
 *
 * Endpoints:
 *   GET /ws/surah/:surahId  — WebSocket for surah chat room
 *   GET /ws/dm/:roomId      — WebSocket for DM conversation
 *   GET /health             — Health check
 */

export { ChatRoom } from './ChatRoom.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const allowedOrigin = env.ALLOWED_ORIGIN || 'https://w3quran.com';
    const reqOrigin = request.headers.get('Origin') || '';
    // Allow production + localhost for testing
    const origin = reqOrigin.startsWith('http://localhost') ? reqOrigin : allowedOrigin;

    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Cookie',
      'Access-Control-Allow-Credentials': 'true',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Health check
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok', service: 'w3quran-chat' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // WebSocket routes
    const surahMatch = url.pathname.match(/^\/ws\/surah\/(\d+)$/);
    const dmMatch = url.pathname.match(/^\/ws\/dm\/(.+)$/);

    if (!surahMatch && !dmMatch) {
      return new Response('Not found', { status: 404, headers: corsHeaders });
    }

    // Verify WebSocket upgrade
    if (request.headers.get('Upgrade') !== 'websocket') {
      return new Response('Expected WebSocket', { status: 426, headers: corsHeaders });
    }

    // Authenticate user from session cookie
    const user = await verifySession(request, env);
    if (!user) {
      return new Response('Unauthorized', { status: 401, headers: corsHeaders });
    }

    // Determine room ID and type
    let roomType, roomId;
    if (surahMatch) {
      const surahId = parseInt(surahMatch[1], 10);
      if (surahId < 1 || surahId > 114) {
        return new Response('Invalid surah ID', { status: 400, headers: corsHeaders });
      }
      roomType = 'surah';
      roomId = String(surahId);
    } else {
      roomType = 'dm';
      roomId = dmMatch[1];
    }

    // Get or create Durable Object for this room
    const doId = env.CHAT_ROOM.idFromName(`${roomType}:${roomId}`);
    const stub = env.CHAT_ROOM.get(doId);

    // Forward the WebSocket request to the Durable Object
    // Pass user info and room metadata via headers
    const doUrl = new URL(request.url);
    doUrl.pathname = '/ws';

    const doRequest = new Request(doUrl.toString(), {
      headers: new Headers({
        'Upgrade': 'websocket',
        'X-User-Id': user.id,
        'X-User-Name': user.name || 'Anonymous',
        'X-User-Picture': user.picture || '',
        'X-Room-Type': roomType,
        'X-Room-Id': roomId,
      }),
    });

    return stub.fetch(doRequest);
  },
};

/**
 * Verify session from cookie or query param (dev only) — same logic as main app.
 */
async function verifySession(request, env) {
  const cookies = request.headers.get('Cookie') || '';
  const cookieMatch = cookies.match(/w3quran_session=([^;]+)/);
  // Also check query param for local dev (cross-port cookies don't work)
  const url = new URL(request.url);
  const tokenParam = url.searchParams.get('token');
  const match = cookieMatch ? cookieMatch : (tokenParam ? [null, tokenParam] : null);
  if (!match) return null;

  try {
    const user = await env.DB.prepare(`
      SELECT u.id, u.email, u.name, u.picture
      FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.token = ? AND s.expires_at > datetime('now')
    `).bind(match[1]).first();
    return user || null;
  } catch {
    return null;
  }
}
