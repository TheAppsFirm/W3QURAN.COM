/**
 * Google OAuth - Callback Handler
 * Exchanges code for tokens, creates/updates user, sets session cookie
 */

export async function onRequest(context) {
  const { env, request } = context;

  console.log('[Auth] ========== CALLBACK START ==========');
  console.log('[Auth] Method:', request.method);
  console.log('[Auth] URL:', request.url);

  const url = new URL(request.url);

  // Determine base URL for redirects
  const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
  const baseUrl = isLocal
    ? `${url.protocol}//${url.host}`
    : 'https://w3quran.com';

  console.log('[Auth] Base URL:', baseUrl);
  console.log('[Auth] Is Local:', isLocal);

  // Helper for redirects with absolute URLs
  const redirectTo = (path) => {
    console.log('[Auth] Redirecting to:', baseUrl + path);
    return Response.redirect(baseUrl + path, 302);
  };

  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  console.log('[Auth] Code present:', !!code);
  console.log('[Auth] Error param:', error);

  // Handle OAuth errors
  if (error) {
    console.error('[Auth] OAuth error from Google:', error);
    return redirectTo('/?auth_error=' + error);
  }

  if (!code) {
    console.error('[Auth] No code in callback');
    return redirectTo('/?auth_error=no_code');
  }

  try {
    const redirectUri = `${baseUrl}/api/auth/callback`;

    // Log environment variables (partial for security)
    console.log('[Auth] ENV Check:');
    console.log('[Auth] - GOOGLE_CLIENT_ID exists:', !!env.GOOGLE_CLIENT_ID);
    console.log('[Auth] - GOOGLE_CLIENT_ID starts with:', env.GOOGLE_CLIENT_ID?.substring(0, 15));
    console.log('[Auth] - GOOGLE_CLIENT_SECRET exists:', !!env.GOOGLE_CLIENT_SECRET);
    console.log('[Auth] - GOOGLE_CLIENT_SECRET length:', env.GOOGLE_CLIENT_SECRET?.length);
    console.log('[Auth] - DB exists:', !!env.DB);

    // Exchange code for tokens
    console.log('[Auth] Step 1: Exchanging code for tokens...');
    console.log('[Auth] Redirect URI:', redirectUri);

    const tokenBody = new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
    });

    console.log('[Auth] Token request body (partial):', {
      client_id: env.GOOGLE_CLIENT_ID?.substring(0, 20) + '...',
      code: code?.substring(0, 20) + '...',
      redirect_uri: redirectUri,
    });

    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: tokenBody,
    });

    console.log('[Auth] Token response status:', tokenResponse.status);

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('[Auth] Token exchange FAILED!');
      console.error('[Auth] Status:', tokenResponse.status);
      console.error('[Auth] Response:', errorText);
      return redirectTo('/?auth_error=token_exchange');
    }

    const tokens = await tokenResponse.json();
    console.log('[Auth] Step 1 SUCCESS: Got tokens');
    console.log('[Auth] Token type:', tokens.token_type);
    console.log('[Auth] Has access_token:', !!tokens.access_token);
    console.log('[Auth] Has refresh_token:', !!tokens.refresh_token);

    // Get user info from Google
    console.log('[Auth] Step 2: Getting user info from Google...');
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });

    console.log('[Auth] User info response status:', userInfoResponse.status);

    if (!userInfoResponse.ok) {
      const errorText = await userInfoResponse.text();
      console.error('[Auth] User info FAILED!');
      console.error('[Auth] Response:', errorText);
      return redirectTo('/?auth_error=user_info');
    }

    const googleUser = await userInfoResponse.json();
    console.log('[Auth] Step 2 SUCCESS: Got user info');
    console.log('[Auth] User email:', googleUser.email);
    console.log('[Auth] User name:', googleUser.name);
    console.log('[Auth] User ID:', googleUser.id);

    // Generate user ID and session token
    const newUserId = `user_${crypto.randomUUID().replace(/-/g, '').slice(0, 16)}`;
    const sessionToken = crypto.randomUUID() + crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

    // Check if user exists
    console.log('[Auth] Step 3: Checking if user exists in DB...');
    const existingUser = await env.DB.prepare(
      'SELECT id FROM users WHERE google_id = ?'
    ).bind(googleUser.id).first();

    console.log('[Auth] Existing user found:', !!existingUser);

    let finalUserId;

    if (existingUser) {
      // Update existing user
      finalUserId = existingUser.id;
      console.log('[Auth] Step 3a: Updating existing user:', finalUserId);
      await env.DB.prepare(`
        UPDATE users SET email = ?, name = ?, picture = ?, updated_at = datetime('now')
        WHERE google_id = ?
      `).bind(
        googleUser.email,
        googleUser.name || null,
        googleUser.picture || null,
        googleUser.id
      ).run();
      console.log('[Auth] User updated successfully');
    } else {
      // Create new user
      finalUserId = newUserId;
      console.log('[Auth] Step 3b: Creating new user:', finalUserId);
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
      console.log('[Auth] User created successfully');

      // Create subscription record for new user
      console.log('[Auth] Step 3c: Creating subscription record...');
      await env.DB.prepare(`
        INSERT INTO subscriptions (id, user_id, plan, status, created_at)
        VALUES (?, ?, 'free', 'active', datetime('now'))
      `).bind(`sub_${crypto.randomUUID().replace(/-/g, '').slice(0, 16)}`, finalUserId).run();
      console.log('[Auth] Subscription created successfully');
    }

    // Create session
    console.log('[Auth] Step 4: Creating session...');
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
    console.log('[Auth] Session created successfully');

    console.log('[Auth] ========== LOGIN SUCCESS ==========');
    console.log('[Auth] User:', googleUser.email);
    console.log('[Auth] User ID:', finalUserId);
    console.log('[Auth] Session ID:', sessionId);

    // Return redirect with session cookie
    return new Response(null, {
      status: 302,
      headers: {
        'Location': baseUrl + '/?auth_success=1',
        'Set-Cookie': `w3quran_session=${sessionToken}; Path=/; HttpOnly; SameSite=Lax; Expires=${expiresAt.toUTCString()}`,
      },
    });

  } catch (error) {
    console.error('[Auth] ========== CALLBACK ERROR ==========');
    console.error('[Auth] Error name:', error.name);
    console.error('[Auth] Error message:', error.message);
    console.error('[Auth] Error stack:', error.stack);
    return redirectTo('/?auth_error=server_error');
  }
}
