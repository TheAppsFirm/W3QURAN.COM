/**
 * Chat Token Endpoint
 * Returns the session token so the client can pass it to the chat WebSocket.
 * This is needed because the session cookie is HttpOnly (JS can't read it)
 * and the chat worker runs on a different subdomain (chat.w3quran.com).
 *
 * The main app's cookie IS sent here (same origin), so we validate it
 * and return the token for the client to forward to the chat WebSocket.
 */

export async function onRequest(context) {
  const { env, request } = context;

  const cookieHeader = request.headers.get('Cookie') || '';
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [key, ...val] = c.trim().split('=');
      return [key, val.join('=')];
    })
  );

  const sessionToken = cookies['w3quran_session'];

  if (!sessionToken) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Validate the session is still valid
  try {
    const user = await env.DB.prepare(`
      SELECT u.id FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.token = ? AND s.expires_at > datetime('now')
    `).bind(sessionToken).first();

    if (!user) {
      return new Response(JSON.stringify({ error: 'Session expired' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ token: sessionToken }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Service unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
