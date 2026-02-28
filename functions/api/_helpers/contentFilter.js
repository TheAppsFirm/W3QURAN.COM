/**
 * Content Filter & Auto-Moderation Helper
 *
 * Provides content checking, XSS sanitization, spam detection,
 * and incident logging for the discussion system.
 */

// ============================================================
// XSS Sanitization
// ============================================================

/**
 * Sanitize user input to prevent XSS attacks.
 * Escapes HTML entities while preserving safe text.
 */
export function sanitizeHtml(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// ============================================================
// Content Checking (Banned/Flagged Words)
// ============================================================

/**
 * Normalize text for matching: lowercase, strip diacritics,
 * collapse repeated characters, remove zero-width chars.
 */
function normalizeText(text) {
  return text
    .toLowerCase()
    // NFKD decomposition (handles full-width chars, ligatures)
    .normalize('NFKD')
    // Remove Arabic diacritics (tashkeel)
    .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/g, '')
    // Remove zero-width, soft hyphen, bidi overrides, variation selectors
    .replace(/[\u00AD\u034F\u061C\u180E\u200B-\u200F\u2028-\u202F\u2060-\u206F\uFE00-\uFE0F\uFEFF]/g, '')
    // Map common Cyrillic/Greek confusables to Latin
    .replace(/\u0430/g, 'a').replace(/\u043E/g, 'o').replace(/\u0441/g, 'c')
    .replace(/\u0435/g, 'e').replace(/\u0440/g, 'p').replace(/\u0443/g, 'y')
    .replace(/\u03BF/g, 'o').replace(/\u03B5/g, 'e')
    // Collapse repeated characters (e.g. "fuuuck" → "fuck")
    .replace(/(.)\1{2,}/g, '$1$1')
    // Replace common leet speak
    .replace(/0/g, 'o')
    .replace(/1/g, 'i')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a')
    .replace(/5/g, 's')
    .replace(/7/g, 't')
    .replace(/8/g, 'b')
    .replace(/@/g, 'a')
    .replace(/\$/g, 's')
    .replace(/!/g, 'i')
    .replace(/\|/g, 'l')
    // Normalize whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Check content against the moderation keywords database.
 *
 * @param {object} env - Cloudflare env with DB binding
 * @param {string} text - Text to check
 * @returns {{ clean: boolean, matched: string[], severity: 'block'|'flag'|null }}
 */
export async function checkContent(env, text) {
  if (!text || typeof text !== 'string') {
    return { clean: true, matched: [], severity: null };
  }

  try {
    // Fetch all keywords from DB
    const { results: keywords } = await env.DB.prepare(
      'SELECT word, severity FROM moderation_keywords ORDER BY severity DESC'
    ).all();

    if (!keywords || keywords.length === 0) {
      return { clean: true, matched: [], severity: null };
    }

    const normalized = normalizeText(text);
    const matched = [];
    let highestSeverity = null;

    for (const kw of keywords) {
      const normalizedWord = normalizeText(kw.word);

      // Check for word boundary match (whole word or phrase)
      const regex = new RegExp(`(?:^|\\s|[^\\w\\u0600-\\u06FF])${escapeRegex(normalizedWord)}(?:$|\\s|[^\\w\\u0600-\\u06FF])`, 'i');

      if (regex.test(` ${normalized} `)) {
        matched.push(kw.word);

        // Track highest severity ('block' > 'flag')
        if (kw.severity === 'block') {
          highestSeverity = 'block';
        } else if (kw.severity === 'flag' && highestSeverity !== 'block') {
          highestSeverity = 'flag';
        }
      }
    }

    return {
      clean: matched.length === 0,
      matched,
      severity: highestSeverity,
    };
  } catch (err) {
    console.error('[ContentFilter] Error checking content:', err);
    // Fail open — don't block content if filter errors
    return { clean: true, matched: [], severity: null };
  }
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============================================================
// Incident Logging
// ============================================================

/**
 * Log a moderation incident to the database.
 */
export async function logIncident(env, {
  userId,
  userName,
  userEmail,
  contentType,
  contentPreview,
  matchedKeywords,
  severity,
  targetType = null,
  targetId = null,
}) {
  try {
    await env.DB.prepare(`
      INSERT INTO moderation_incidents
        (user_id, user_name, user_email, content_type, content_preview, matched_keywords, severity, target_type, target_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      userId,
      userName || null,
      userEmail || null,
      contentType,
      (contentPreview || '').substring(0, 200),
      JSON.stringify(matchedKeywords || []),
      severity,
      targetType,
      targetId,
    ).run();

    console.log(`[AutoMod] Incident logged: ${severity} | user=${userEmail} | type=${contentType} | keywords=${matchedKeywords?.join(', ')}`);
  } catch (err) {
    console.error('[AutoMod] Failed to log incident:', err);
  }
}

// ============================================================
// Spam Detection
// ============================================================

/**
 * Check for spam patterns.
 *
 * @param {object} env - Cloudflare env with DB binding
 * @param {string} userId - User ID
 * @param {string} text - Message text
 * @param {string} roomId - Room ID (surah or DM)
 * @returns {{ isSpam: boolean, reason: string|null }}
 */
export async function checkSpam(env, userId, text, roomId) {
  try {
    const fiveMinAgo = new Date(Date.now() - 5 * 60000).toISOString();
    const oneMinAgo = new Date(Date.now() - 60000).toISOString();

    // Check 1: Same message in multiple rooms (cross-posting spam)
    const crossPost = await env.DB.prepare(`
      SELECT COUNT(DISTINCT room_id) as room_count
      FROM chat_messages
      WHERE user_id = ? AND message = ? AND created_at > ? AND is_deleted = 0
    `).bind(userId, text, fiveMinAgo).first();

    if (crossPost && crossPost.room_count >= 3) {
      return { isSpam: true, reason: 'Cross-posting: same message in 3+ rooms' };
    }

    // Check 2: Flood detection (too many messages per minute)
    const flood = await env.DB.prepare(`
      SELECT COUNT(*) as msg_count
      FROM chat_messages
      WHERE user_id = ? AND room_id = ? AND created_at > ? AND is_deleted = 0
    `).bind(userId, roomId, oneMinAgo).first();

    if (flood && flood.msg_count >= 10) {
      return { isSpam: true, reason: 'Flood: 10+ messages in 1 minute' };
    }

    // Check 3: Duplicate messages (same text repeated)
    const duplicate = await env.DB.prepare(`
      SELECT COUNT(*) as dup_count
      FROM chat_messages
      WHERE user_id = ? AND room_id = ? AND message = ? AND created_at > ? AND is_deleted = 0
    `).bind(userId, roomId, text, fiveMinAgo).first();

    if (duplicate && duplicate.dup_count >= 3) {
      return { isSpam: true, reason: 'Duplicate: same message 3+ times' };
    }

    return { isSpam: false, reason: null };
  } catch (err) {
    console.error('[SpamCheck] Error:', err);
    return { isSpam: false, reason: null };
  }
}
