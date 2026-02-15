/**
 * Google OAuth - Initiate Login
 * Redirects user to Google OAuth consent screen
 */

export async function onRequest(context) {
  const { env, request } = context;

  const clientId = env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    return new Response('Google OAuth not configured', { status: 500 });
  }

  // Determine redirect URI based on environment
  const url = new URL(request.url);
  const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
  const baseUrl = isLocal
    ? `${url.protocol}//${url.host}`
    : 'https://w3quran.com';
  const redirectUri = `${baseUrl}/api/auth/callback`;

  // Build Google OAuth URL
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'offline',
    prompt: 'consent',
    state: crypto.randomUUID(), // CSRF protection
  });

  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;

  return Response.redirect(googleAuthUrl, 302);
}
