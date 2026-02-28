/**
 * Google OAuth - Initiate Login
 * Redirects user to Google OAuth consent screen
 *
 * - GET (browser): redirects to Google OAuth
 * - GET (fetch/JSON): returns JSON with login URL or status
 * - OPTIONS: CORS preflight
 */

import { handleCors, verifySession, jsonResponse, errorResponse } from '../_helpers/auth.js';

export async function onRequest(context) {
  const { env, request } = context;

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return handleCors();
  }

  // Only allow GET
  if (request.method !== 'GET') {
    return errorResponse('Method not allowed', 405);
  }

  const url = new URL(request.url);
  const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
  const baseUrl = isLocal
    ? `${url.protocol}//${url.host}`
    : 'https://w3quran.com';
  const wantsJson = request.headers.get('Accept')?.includes('application/json');

  // Check if user is already logged in
  const user = await verifySession(request, env);
  if (user) {
    if (wantsJson) {
      return jsonResponse({ authenticated: true, message: 'Already logged in', user: { id: user.id, name: user.name } });
    }
    return Response.redirect(baseUrl + '/', 302);
  }

  // Check Google OAuth configuration
  const clientId = env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    if (wantsJson) {
      return errorResponse('Google OAuth not configured. Please set GOOGLE_CLIENT_ID environment variable.', 500);
    }
    return Response.redirect(baseUrl + '/?auth_error=not_configured', 302);
  }

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

  // For JSON requests, return the URL instead of redirecting
  if (wantsJson) {
    return jsonResponse({ authenticated: false, loginUrl: googleAuthUrl });
  }

  // Store state in cookie for CSRF validation in callback
  const state = params.get('state');
  const securePart = isLocal ? '' : ' Secure;';
  return new Response(null, {
    status: 302,
    headers: {
      'Location': googleAuthUrl,
      'Set-Cookie': `w3quran_oauth_state=${state}; Path=/; HttpOnly;${securePart} SameSite=Lax; Max-Age=600`,
    },
  });
}
