/**
 * User Data Sync - Upload/Download user data
 *
 * GET: Download all synced data
 * POST: Upload data to sync
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

  if (!sessionToken) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // Verify session and check premium status
    const userResult = await env.DB.prepare(`
      SELECT u.id, s.plan
      FROM sessions sess
      JOIN users u ON sess.user_id = u.id
      LEFT JOIN subscriptions s ON u.id = s.user_id
      WHERE sess.token = ? AND sess.expires_at > datetime('now')
      LIMIT 1
    `).bind(sessionToken).first();

    if (!userResult) {
      return new Response(JSON.stringify({ error: 'Invalid session' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const isPremium = ['monthly', 'yearly', 'lifetime'].includes(userResult.plan);

    // Cloud sync is a premium feature
    if (!isPremium) {
      return new Response(JSON.stringify({
        error: 'Cloud sync is a premium feature',
        requiresPremium: true,
      }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const userId = userResult.id;

    if (request.method === 'GET') {
      // Download all user data
      const dataResults = await env.DB.prepare(`
        SELECT data_type, data, updated_at
        FROM user_data
        WHERE user_id = ?
      `).bind(userId).all();

      const data = {};
      for (const row of dataResults.results || []) {
        try {
          data[row.data_type] = {
            data: JSON.parse(row.data),
            updatedAt: row.updated_at,
          };
        } catch (e) {
          console.error('[Sync] Parse error for', row.data_type);
        }
      }

      return new Response(JSON.stringify({ data }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (request.method === 'POST') {
      // Upload user data
      const body = await request.json();
      const { dataType, data } = body;

      if (!dataType || !data) {
        return new Response(JSON.stringify({ error: 'Missing dataType or data' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // Validate data types
      const validTypes = ['bookmarks', 'progress', 'settings', 'mood', 'activity'];
      if (!validTypes.includes(dataType)) {
        return new Response(JSON.stringify({ error: 'Invalid data type' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      // Upsert data
      const dataId = `data_${userId}_${dataType}`;
      await env.DB.prepare(`
        INSERT INTO user_data (id, user_id, data_type, data, updated_at)
        VALUES (?, ?, ?, ?, datetime('now'))
        ON CONFLICT(id) DO UPDATE SET
          data = excluded.data,
          updated_at = datetime('now')
      `).bind(dataId, userId, dataType, JSON.stringify(data)).run();

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response('Method not allowed', { status: 405 });

  } catch (error) {
    console.error('[Sync] Error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
