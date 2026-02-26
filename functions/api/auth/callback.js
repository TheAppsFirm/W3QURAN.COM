/**
 * Google OAuth - Callback Handler
 * Exchanges code for tokens, creates/updates user, sets session cookie
 */

export async function onRequest(context) {
  const { env, request } = context;

  const url = new URL(request.url);

  // Determine base URL for redirects
  const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
  const baseUrl = isLocal
    ? `${url.protocol}//${url.host}`
    : 'https://w3quran.com';

  // Helper for redirects with absolute URLs
  const redirectTo = (path) => {
    return Response.redirect(baseUrl + path, 302);
  };

  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');
  const state = url.searchParams.get('state');

  // CSRF validation: compare state param with cookie
  const cookieHeader = request.headers.get('Cookie') || '';
  const stateCookieMatch = cookieHeader.match(/w3quran_oauth_state=([^;]+)/);
  const storedState = stateCookieMatch?.[1];

  if (!state || !storedState || state !== storedState) {
    console.error('[Auth] CSRF state mismatch');
    return redirectTo('/?auth_error=invalid_state');
  }

  // Handle OAuth errors
  if (error) {
    console.error('[Auth] OAuth error from Google:', error);
    return redirectTo('/?auth_error=' + error);
  }

  if (!code) {
    console.error('[Auth] No code in callback');
    return redirectTo('/?auth_error=no_code');
  }

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'Service unavailable' }), { status: 503, headers: { 'Content-Type': 'application/json' }});
  }

  try {
    const redirectUri = `${baseUrl}/api/auth/callback`;

    const tokenBody = new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    });

    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: tokenBody,
    });

    if (!tokenResponse.ok) {
      console.error('[Auth] Token exchange failed, status:', tokenResponse.status);
      return redirectTo('/?auth_error=token_exchange');
    }

    const tokens = await tokenResponse.json();

    // Get user info from Google
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });

    if (!userInfoResponse.ok) {
      console.error('[Auth] User info fetch failed, status:', userInfoResponse.status);
      return redirectTo('/?auth_error=user_info');
    }

    const googleUser = await userInfoResponse.json();

    // Generate user ID and session token
    const newUserId = `user_${crypto.randomUUID().replace(/-/g, '').slice(0, 16)}`;
    const sessionToken = crypto.randomUUID() + crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

    // Check if user exists
    const existingUser = await env.DB.prepare(
      'SELECT id FROM users WHERE google_id = ?'
    ).bind(googleUser.id).first();

    let finalUserId;

    if (existingUser) {
      // Update existing user
      finalUserId = existingUser.id;
      await env.DB.prepare(`
        UPDATE users SET email = ?, name = ?, picture = ?, updated_at = datetime('now')
        WHERE google_id = ?
      `).bind(
        googleUser.email,
        googleUser.name || null,
        googleUser.picture || null,
        googleUser.id
      ).run();
    } else {
      // Create new user
      finalUserId = newUserId;
      await env.DB.prepare(`
        INSERT INTO users (id, google_id, email, name, picture, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))
      `).bind(
        finalUserId,
        googleUser.id,
        googleUser.email,
        googleUser.name || null,
        googleUser.picture || null
      ).run();

      // Create subscription record for new user
      await env.DB.prepare(`
        INSERT INTO subscriptions (id, user_id, plan, status, created_at)
        VALUES (?, ?, 'free', 'active', datetime('now'))
      `).bind(`sub_${crypto.randomUUID().replace(/-/g, '').slice(0, 16)}`, finalUserId).run();
    }

    // Create session
    const sessionId = `sess_${crypto.randomUUID().replace(/-/g, '').slice(0, 16)}`;
    await env.DB.prepare(`
      INSERT INTO sessions (id, user_id, token, expires_at, created_at)
      VALUES (?, ?, ?, ?, datetime('now'))
    `).bind(
      sessionId,
      finalUserId,
      sessionToken,
      expiresAt.toISOString()
    ).run();

    // Return redirect with session cookie
    return new Response(null, {
      status: 302,
      headers: {
        'Location': baseUrl + '/?auth_success=1',
        'Set-Cookie': `w3quran_session=${sessionToken}; Path=/; HttpOnly; Secure; SameSite=Lax; Expires=${expiresAt.toUTCString()}`,
      },
    });

  } catch (error) {
    console.error('[Auth] Callback error:', error.name);
    return redirectTo('/?auth_error=server_error');
  }
}
