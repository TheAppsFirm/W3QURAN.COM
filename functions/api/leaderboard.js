/**
 * Global Leaderboard API
 * GET /api/leaderboard — Returns top users ranked by XP, streak, or verses
 *
 * Query params:
 *   - limit: number of top users (default 50, max 100)
 *   - sort: 'xp' | 'streak' | 'verses' (default 'xp')
 *
 * Returns: { leaderboard: [...], myRank: {...} | null, sort, total }
 */

const SORT_COLUMNS = { xp: 'xp', streak: 'current_streak', verses: 'verses_read' };

export async function onRequest(context) {
  const { env, request } = context;

  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  const url = new URL(request.url);
  const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit') || '50', 10) || 50, 1), 100);
  const sort = url.searchParams.get('sort') || 'xp';
  const sortColumn = SORT_COLUMNS[sort] || 'xp';

  try {
    // Get top users
    const topUsers = await env.DB.prepare(`
      SELECT display_name, picture, xp, level, current_streak, verses_read, surahs_completed, achievements_count
      FROM leaderboard
      ORDER BY ${sortColumn} DESC, xp DESC
      LIMIT ?
    `).bind(limit).all();

    // Try to get current user's rank (if authenticated)
    let myRank = null;
    const sessionToken = parseSessionToken(request.headers.get('Cookie'));

    if (sessionToken) {
      const session = await env.DB.prepare(`
        SELECT u.id FROM sessions sess
        JOIN users u ON sess.user_id = u.id
        WHERE sess.token = ? AND sess.expires_at > datetime('now')
        LIMIT 1
      `).bind(sessionToken).first();

      if (session) {
        const rankResult = await env.DB.prepare(`
          SELECT
            l.display_name, l.picture, l.xp, l.level,
            l.current_streak, l.verses_read, l.surahs_completed,
            l.achievements_count,
            (SELECT COUNT(*) + 1 FROM leaderboard l2 WHERE l2.${sortColumn} > l.${sortColumn}) as rank
          FROM leaderboard l
          WHERE l.user_id = ?
        `).bind(session.id).first();

        if (rankResult) {
          myRank = {
            rank: rankResult.rank,
            displayName: rankResult.display_name,
            picture: rankResult.picture,
            xp: rankResult.xp,
            level: rankResult.level,
            currentStreak: rankResult.current_streak,
            versesRead: rankResult.verses_read,
            surahsCompleted: rankResult.surahs_completed,
            achievementsCount: rankResult.achievements_count,
          };
        }
      }
    }

    // Format response
    const leaderboard = (topUsers.results || []).map((row, index) => ({
      rank: index + 1,
      displayName: row.display_name,
      picture: row.picture,
      xp: row.xp,
      level: row.level,
      currentStreak: row.current_streak,
      versesRead: row.verses_read,
      surahsCompleted: row.surahs_completed,
      achievementsCount: row.achievements_count,
    }));

    return new Response(JSON.stringify({ leaderboard, myRank, sort, total: leaderboard.length }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60',
      },
    });
  } catch (error) {
    console.error('[Leaderboard] Error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

function parseSessionToken(cookieHeader) {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(/w3quran_session=([^;]+)/);
  return match ? match[1] : null;
}
