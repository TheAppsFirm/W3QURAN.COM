/**
 * Admin Verify API
 * Checks if a user email is in the admin list
 */

const getAdminEmails = (env) => {
  const emails = env.ADMIN_EMAILS || '';
  if (!emails) return [];
  return emails.split(',').map(e => e.trim().toLowerCase());
};

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ isAdmin: false }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const adminEmails = getAdminEmails(env);
    const isAdmin = adminEmails.includes(email.toLowerCase());

    return new Response(JSON.stringify({ isAdmin }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Admin verify error:', error);
    return new Response(JSON.stringify({ isAdmin: false }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
