/**
 * Admin Verify API
 * Checks if the authenticated user is an admin
 * Requires valid session cookie - no unauthenticated access
 */

const getAdminEmails = (env) => {
  const emails = env.ADMIN_EMAILS || '';
  if (!emails) return [];
  return emails.split(',').map(e => e.trim().toLowerCase());
};

export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Content-Type': 'application/json',
  };

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'Service unavailable', isAdmin: false }), { status: 503, headers: corsHeaders });
  }

  try {
    // Require session authentication
    const cookies = request.headers.get('Cookie') || '';
    const sessionMatch = cookies.match(/w3quran_session=([^;]+)/);
    const sessionToken = sessionMatch?.[1];

    if (!sessionToken) {
      return new Response(JSON.stringify({ error: 'Authentication required', isAdmin: false }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    const user = await env.DB.prepare(`
      SELECT u.id, u.email
      FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.token = ? AND s.expires_at > datetime('now')
    `).bind(sessionToken).first();

    if (!user) {
      return new Response(JSON.stringify({ error: 'Invalid session', isAdmin: false }), {
        status: 401,
        headers: corsHeaders,
      });
    }

    // Check admin status using the authenticated user's email (not request body)
    const adminEmails = getAdminEmails(env);
    const isAdmin = adminEmails.includes(user.email.toLowerCase());

    return new Response(JSON.stringify({ isAdmin }), {
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('Admin verify error:', error);
    return new Response(JSON.stringify({ isAdmin: false }), {
      headers: corsHeaders,
    });
  }
}
