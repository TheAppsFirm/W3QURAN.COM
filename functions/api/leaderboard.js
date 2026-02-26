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

// Pre-built SQL queries for each sort option (avoids template string interpolation in SQL)
const QUERIES = {
  xp: {
    top: `SELECT display_name, picture, xp, level, current_streak, verses_read, surahs_completed, achievements_count
          FROM leaderboard ORDER BY xp DESC, current_streak DESC LIMIT ?`,
    rank: `SELECT l.display_name, l.picture, l.xp, l.level, l.current_streak, l.verses_read, l.surahs_completed, l.achievements_count,
           (SELECT COUNT(*) + 1 FROM leaderboard l2 WHERE l2.xp > l.xp) as rank
           FROM leaderboard l WHERE l.user_id = ?`,
  },
  streak: {
    top: `SELECT display_name, picture, xp, level, current_streak, verses_read, surahs_completed, achievements_count
          FROM leaderboard ORDER BY current_streak DESC, xp DESC LIMIT ?`,
    rank: `SELECT l.display_name, l.picture, l.xp, l.level, l.current_streak, l.verses_read, l.surahs_completed, l.achievements_count,
           (SELECT COUNT(*) + 1 FROM leaderboard l2 WHERE l2.current_streak > l.current_streak) as rank
           FROM leaderboard l WHERE l.user_id = ?`,
  },
  verses: {
    top: `SELECT display_name, picture, xp, level, current_streak, verses_read, surahs_completed, achievements_count
          FROM leaderboard ORDER BY verses_read DESC, xp DESC LIMIT ?`,
    rank: `SELECT l.display_name, l.picture, l.xp, l.level, l.current_streak, l.verses_read, l.surahs_completed, l.achievements_count,
           (SELECT COUNT(*) + 1 FROM leaderboard l2 WHERE l2.verses_read > l.verses_read) as rank
           FROM leaderboard l WHERE l.user_id = ?`,
  },
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Cookie',
};

export async function onRequest(context) {
  const { env, request } = context;

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }

  const url = new URL(request.url);
  const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit') || '50', 10) || 50, 1), 100);
  const sort = url.searchParams.get('sort') || 'xp';

  // Validate sort param — only allow known keys
  const queries = QUERIES[sort] || QUERIES.xp;

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'Service unavailable', leaderboard: [], myRank: null, sort, total: 0 }), { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' }});
  }

  try {
    // Get top users using pre-built query (no template interpolation)
    const topUsers = await env.DB.prepare(queries.top).bind(limit).all();

    // Try to get current user's rank (if authenticated)
    let myRank = null;
    const sessionToken = parseSessionToken(request.headers.get('Cookie'));

    if (sessionToken) {
      try {
        const session = await env.DB.prepare(`
          SELECT u.id FROM sessions sess
          JOIN users u ON sess.user_id = u.id
          WHERE sess.token = ? AND sess.expires_at > datetime('now')
          LIMIT 1
        `).bind(sessionToken).first();

        if (session) {
          const rankResult = await env.DB.prepare(queries.rank).bind(session.id).first();

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
      } catch (rankErr) {
        // Non-blocking: rank lookup failure shouldn't break leaderboard
        console.error('[Leaderboard] Rank lookup error:', rankErr.message);
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
        ...corsHeaders,
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60',
      },
    });
  } catch (error) {
    const errMsg = error?.message || String(error);
    console.error('[Leaderboard] Error:', errMsg);

    // Detect table-missing errors (D1 may use different phrasing)
    const isTableMissing = /no such table|does not exist|not found|SQLITE_ERROR/i.test(errMsg);

    // Always return 200 with empty data — leaderboard is non-critical
    return new Response(JSON.stringify({
      error: isTableMissing ? 'Leaderboard not available yet' : 'Leaderboard temporarily unavailable',
      leaderboard: [],
      myRank: null,
      sort,
      total: 0,
    }), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  }
}

function parseSessionToken(cookieHeader) {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(/w3quran_session=([^;]+)/);
  return match ? match[1] : null;
}
