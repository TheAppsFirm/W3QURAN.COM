/**
 * Shared authentication helpers for API endpoints.
 * Extracts duplicated session/admin verification logic.
 */

function getCorsHeaders(request) {
  const origin = request?.headers?.get('Origin') || '*';
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Cookie',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
  };
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Cookie',
  'Access-Control-Allow-Credentials': 'true',
  'Content-Type': 'application/json',
};

/**
 * Parse session token from Cookie header.
 * @param {Request} request
 * @returns {string|null}
 */
function getSessionToken(request) {
  const cookies = request.headers.get('Cookie') || '';
  const match = cookies.match(/w3quran_session=([^;]+)/);
  return match ? match[1] : null;
}

/**
 * Verify session and return user object.
 * @param {Request} request
 * @param {object} env - Cloudflare env with DB binding
 * @returns {Promise<{id: string, email: string, name: string, picture: string}|null>}
 */
export async function verifySession(request, env) {
  const token = getSessionToken(request);
  if (!token) return null;

  try {
    const user = await env.DB.prepare(`
      SELECT u.id, u.email, u.name, u.picture
      FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.token = ? AND s.expires_at > datetime('now')
    `).bind(token).first();

    return user || null;
  } catch {
    return null;
  }
}

/**
 * Verify session and check admin status.
 * @param {Request} request
 * @param {object} env
 * @returns {Promise<{user: object, isAdmin: boolean}|null>}
 */
export async function verifyAdmin(request, env) {
  const user = await verifySession(request, env);
  if (!user) return null;

  const adminEmails = (env.ADMIN_EMAILS || '')
    .split(',')
    .map(e => e.trim().toLowerCase())
    .filter(Boolean);

  return {
    user,
    isAdmin: adminEmails.includes(user.email?.toLowerCase()),
  };
}

/**
 * Check if user has premium subscription.
 * @param {object} env
 * @param {string} userId
 * @returns {Promise<boolean>}
 */
export async function isPremium(env, userId) {
  try {
    const sub = await env.DB.prepare(`
      SELECT plan FROM subscriptions
      WHERE user_id = ? AND status = 'active'
    `).bind(userId).first();

    return sub && sub.plan !== 'free';
  } catch {
    return false;
  }
}

/**
 * Check if user is banned from discussions.
 * @param {object} env
 * @param {string} userId
 * @returns {Promise<{banned: boolean, reason: string|null}>}
 */
export async function isDiscussionBanned(env, userId) {
  try {
    const ban = await env.DB.prepare(`
      SELECT reason FROM discussion_bans
      WHERE user_id = ? AND (expires_at IS NULL OR expires_at > datetime('now'))
      ORDER BY created_at DESC LIMIT 1
    `).bind(userId).first();

    return ban ? { banned: true, reason: ban.reason } : { banned: false, reason: null };
  } catch {
    return { banned: false, reason: null };
  }
}

/**
 * Check and increment daily usage for rate-limited free users.
 * Returns remaining count or -1 if limit exceeded.
 * @param {object} env
 * @param {string} userId
 * @param {string} type - 'post', 'comment', or 'chat'
 * @param {number} limit - daily limit
 * @returns {Promise<{allowed: boolean, remaining: number, used: number}>}
 */
export async function checkDailyLimit(env, userId, type, limit) {
  const today = new Date().toISOString().split('T')[0];
  const column = `${type}_count`;

  // Upsert daily usage row
  await env.DB.prepare(`
    INSERT INTO discussion_daily_usage (user_id, date)
    VALUES (?, ?)
    ON CONFLICT(user_id, date) DO NOTHING
  `).bind(userId, today).run();

  // Get current usage
  const usage = await env.DB.prepare(`
    SELECT ${column} as count FROM discussion_daily_usage
    WHERE user_id = ? AND date = ?
  `).bind(userId, today).first();

  const used = usage?.count || 0;

  if (used >= limit) {
    return { allowed: false, remaining: 0, used };
  }

  // Increment
  await env.DB.prepare(`
    UPDATE discussion_daily_usage SET ${column} = ${column} + 1
    WHERE user_id = ? AND date = ?
  `).bind(userId, today).run();

  return { allowed: true, remaining: limit - used - 1, used: used + 1 };
}

/**
 * Get list of user IDs blocked by a user.
 * @param {object} env
 * @param {string} userId
 * @returns {Promise<string[]>}
 */
export async function getBlockedUserIds(env, userId) {
  try {
    const result = await env.DB.prepare(`
      SELECT blocked_id FROM user_blocks WHERE blocker_id = ?
    `).bind(userId).all();

    return (result.results || []).map(r => r.blocked_id);
  } catch {
    return [];
  }
}

/**
 * Handle OPTIONS preflight request.
 * @returns {Response}
 */
export function handleCors() {
  return new Response(null, { headers: CORS_HEADERS });
}

/**
 * Create a JSON error response.
 * @param {string} message
 * @param {number} status
 * @returns {Response}
 */
export function errorResponse(message, status = 400) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: CORS_HEADERS,
  });
}

/**
 * Create a JSON success response.
 * @param {object} data
 * @param {number} status
 * @returns {Response}
 */
export function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: CORS_HEADERS,
  });
}

export { CORS_HEADERS };
