/**
 * Logout - Clear session
 */

export async function onRequest(context) {
  const { env, request } = context;

  // Get session token from cookie
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [key, ...val] = c.trim().split('=');
      return [key, val.join('=')];
    })
  );

  const sessionToken = cookies['w3quran_session'];

  // Delete session from database if it exists
  if (sessionToken && env.DB) {
    try {
      await env.DB.prepare('DELETE FROM sessions WHERE token = ?')
        .bind(sessionToken)
        .run();
    } catch (error) {
      console.error('[Auth] Logout error:', error);
    }
  }

  // Clear the cookie
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': 'w3quran_session=; Path=/; HttpOnly; Secure; SameSite=None; Domain=.w3quran.com; Max-Age=0',
    },
  });
}
