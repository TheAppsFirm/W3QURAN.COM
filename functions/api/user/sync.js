/**
 * User Data Sync - Upload/Download user data
 *
 * GET: Download synced data (gamification is free, rest is premium)
 * POST: Upload data to sync
 */

// Data types free for all authenticated users
const FREE_TYPES = ['gamification', 'tasbih'];
// Data types requiring premium subscription
const PREMIUM_TYPES = ['bookmarks', 'progress', 'settings', 'mood', 'activity'];
const ALL_VALID_TYPES = [...FREE_TYPES, ...PREMIUM_TYPES];

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
    const userId = userResult.id;

    if (request.method === 'GET') {
      // Check if requesting a specific type via query param
      const url = new URL(request.url);
      const requestedType = url.searchParams.get('type');

      if (requestedType) {
        // Single-type fetch
        if (!ALL_VALID_TYPES.includes(requestedType)) {
          return new Response(JSON.stringify({ error: 'Invalid data type' }), {
            status: 400, headers: { 'Content-Type': 'application/json' },
          });
        }
        // Premium check for non-free types
        if (PREMIUM_TYPES.includes(requestedType) && !isPremium) {
          return new Response(JSON.stringify({ error: 'Cloud sync is a premium feature', requiresPremium: true }), {
            status: 403, headers: { 'Content-Type': 'application/json' },
          });
        }

        const result = await env.DB.prepare(
          `SELECT data, updated_at FROM user_data WHERE user_id = ? AND data_type = ?`
        ).bind(userId, requestedType).first();

        const data = {};
        if (result) {
          try { data[requestedType] = { data: JSON.parse(result.data), updatedAt: result.updated_at }; } catch {}
        }
        return new Response(JSON.stringify({ data }), {
          status: 200, headers: { 'Content-Type': 'application/json' },
        });
      }

      // Full download — premium users get everything, free users get only free types
      const typesToFetch = isPremium ? ALL_VALID_TYPES : FREE_TYPES;
      const placeholders = typesToFetch.map(() => '?').join(',');
      const dataResults = await env.DB.prepare(
        `SELECT data_type, data, updated_at FROM user_data WHERE user_id = ? AND data_type IN (${placeholders})`
      ).bind(userId, ...typesToFetch).all();

      const data = {};
      for (const row of dataResults.results || []) {
        try {
          data[row.data_type] = { data: JSON.parse(row.data), updatedAt: row.updated_at };
        } catch (e) {
          console.error('[Sync] Parse error for', row.data_type);
        }
      }

      return new Response(JSON.stringify({ data }), {
        status: 200, headers: { 'Content-Type': 'application/json' },
      });
    }

    if (request.method === 'POST') {
      const body = await request.json();
      const { dataType, data } = body;

      if (!dataType || !data) {
        return new Response(JSON.stringify({ error: 'Missing dataType or data' }), {
          status: 400, headers: { 'Content-Type': 'application/json' },
        });
      }

      if (!ALL_VALID_TYPES.includes(dataType)) {
        return new Response(JSON.stringify({ error: 'Invalid data type' }), {
          status: 400, headers: { 'Content-Type': 'application/json' },
        });
      }

      // Premium check for non-free types
      if (PREMIUM_TYPES.includes(dataType) && !isPremium) {
        return new Response(JSON.stringify({ error: 'Cloud sync is a premium feature', requiresPremium: true }), {
          status: 403, headers: { 'Content-Type': 'application/json' },
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

      // Update leaderboard stats when gamification data syncs
      if (dataType === 'gamification') {
        await updateLeaderboardStats(env.DB, userId, data);
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200, headers: { 'Content-Type': 'application/json' },
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

// Format display name for privacy: "Zia Ahmed" → "Zia A."
function formatDisplayName(fullName) {
  if (!fullName) return 'Anonymous';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[parts.length - 1][0]}.`;
}

// Extract leaderboard stats from gamification JSON and upsert into leaderboard table
async function updateLeaderboardStats(db, userId, gamData) {
  try {
    const user = await db.prepare(
      'SELECT name, picture FROM users WHERE id = ?'
    ).bind(userId).first();

    if (!user) return;

    const displayName = formatDisplayName(user.name);
    const xp = gamData.xp || 0;
    const level = gamData.level || 1;
    const currentStreak = gamData.streaks?.current || 0;
    const bestStreak = gamData.streaks?.best || 0;
    const versesRead = gamData.stats?.versesRead || 0;
    const surahsCompleted = Array.isArray(gamData.stats?.surahsCompleted)
      ? gamData.stats.surahsCompleted.length : 0;
    const achievementsCount = Array.isArray(gamData.achievements)
      ? gamData.achievements.length : 0;

    await db.prepare(`
      INSERT INTO leaderboard (user_id, display_name, picture, xp, level, current_streak, best_streak, verses_read, surahs_completed, achievements_count, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
      ON CONFLICT(user_id) DO UPDATE SET
        display_name = excluded.display_name,
        picture = excluded.picture,
        xp = excluded.xp,
        level = excluded.level,
        current_streak = excluded.current_streak,
        best_streak = excluded.best_streak,
        verses_read = excluded.verses_read,
        surahs_completed = excluded.surahs_completed,
        achievements_count = excluded.achievements_count,
        updated_at = datetime('now')
    `).bind(
      userId, displayName, user.picture || null,
      xp, level, currentStreak, bestStreak,
      versesRead, surahsCompleted, achievementsCount
    ).run();
  } catch (error) {
    // Non-blocking: leaderboard update failure should not fail the sync
    console.error('[Sync] Leaderboard update error:', error);
  }
}
