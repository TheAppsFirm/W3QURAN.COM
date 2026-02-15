/**
 * Google OAuth - Callback Handler
 * Exchanges code for tokens, creates/updates user, sets session cookie
 */

export async function onRequest(context) {
  const { env, request } = context;

  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  // Handle OAuth errors
  if (error) {
    console.error('[Auth] OAuth error:', error);
    return Response.redirect('/?auth_error=' + error, 302);
  }

  if (!code) {
    return Response.redirect('/?auth_error=no_code', 302);
  }

  try {
    // Determine redirect URI (must match what was sent to Google)
    const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
    const baseUrl = isLocal
      ? `${url.protocol}//${url.host}`
      : 'https://w3quran.com';
    const redirectUri = `${baseUrl}/api/auth/callback`;

    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: env.GOOGLE_CLIENT_ID,
        client_secret: env.GOOGLE_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('[Auth] Token exchange failed:', errorText);
      return Response.redirect('/?auth_error=token_exchange', 302);
    }

    const tokens = await tokenResponse.json();

    // Get user info from Google
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });

    if (!userInfoResponse.ok) {
      console.error('[Auth] Failed to get user info');
      return Response.redirect('/?auth_error=user_info', 302);
    }

    const googleUser = await userInfoResponse.json();
    console.log('[Auth] Google user:', googleUser.email);

    // Generate user ID and session token
    const userId = `user_${crypto.randomUUID().replace(/-/g, '').slice(0, 16)}`;
    const sessionToken = crypto.randomUUID() + crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

    // Upsert user in D1
    await env.DB.prepare(`
      INSERT INTO users (id, google_id, email, name, picture, updated_at)
      VALUES (?, ?, ?, ?, ?, datetime('now'))
      ON CONFLICT(google_id) DO UPDATE SET
        email = excluded.email,
        name = excluded.name,
        picture = excluded.picture,
        updated_at = datetime('now')
    `).bind(
      userId,
      googleUser.id,
      googleUser.email,
      googleUser.name || null,
      googleUser.picture || null
    ).run();

    // Get the actual user ID (in case user already existed)
    const existingUser = await env.DB.prepare(
      'SELECT id FROM users WHERE google_id = ?'
    ).bind(googleUser.id).first();

    const finalUserId = existingUser?.id || userId;

    // Create session
    const sessionId = `sess_${crypto.randomUUID().replace(/-/g, '').slice(0, 16)}`;
    await env.DB.prepare(`
      INSERT INTO sessions (id, user_id, token, expires_at)
      VALUES (?, ?, ?, ?)
    `).bind(
      sessionId,
      finalUserId,
      sessionToken,
      expiresAt.toISOString()
    ).run();

    // Ensure user has a subscription record (free tier by default)
    await env.DB.prepare(`
      INSERT OR IGNORE INTO subscriptions (id, user_id, plan, status)
      VALUES (?, ?, 'free', 'active')
    `).bind(`sub_${crypto.randomUUID().replace(/-/g, '').slice(0, 16)}`, finalUserId).run();

    // Set session cookie and redirect
    const response = Response.redirect(baseUrl + '/?auth_success=1', 302);

    // Create new response with cookie
    const headers = new Headers(response.headers);
    headers.set('Set-Cookie',
      `w3quran_session=${sessionToken}; ` +
      `Path=/; ` +
      `HttpOnly; ` +
      `Secure; ` +
      `SameSite=Lax; ` +
      `Expires=${expiresAt.toUTCString()}`
    );

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });

  } catch (error) {
    console.error('[Auth] Callback error:', error);
    return Response.redirect('/?auth_error=server_error', 302);
  }
}
