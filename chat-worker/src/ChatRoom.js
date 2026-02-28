/**
 * ChatRoom Durable Object
 * Manages WebSocket connections for a single chat room (surah or DM).
 *
 * Features:
 *  - Real-time message broadcasting
 *  - Typing indicators
 *  - Online presence tracking
 *  - Message persistence to D1
 *  - Emoji reactions
 *  - Rate limiting (free users: 5/day)
 */

const MAX_STORED_MESSAGES = 500;
const REACTIONS = ['❤️', '👍', '📖', '🤲', 'ماشاءالله'];
const FREE_DAILY_LIMIT = 5;
const MAX_MESSAGE_LENGTH = 500;

// ─── Inline Content Filter (can't import from Pages Functions) ─────

function sanitizeText(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function normalizeForFilter(text) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    // Remove Arabic diacritics
    .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/g, '')
    // Remove zero-width, soft hyphen, bidi overrides, variation selectors
    .replace(/[\u00AD\u034F\u061C\u180E\u200B-\u200F\u2028-\u202F\u2060-\u206F\uFE00-\uFE0F\uFEFF]/g, '')
    // Map Cyrillic/Greek confusables to Latin
    .replace(/\u0430/g, 'a').replace(/\u043E/g, 'o').replace(/\u0441/g, 'c')
    .replace(/\u0435/g, 'e').replace(/\u0440/g, 'p').replace(/\u0443/g, 'y')
    .replace(/\u03BF/g, 'o').replace(/\u03B5/g, 'e')
    // Collapse repeated characters
    .replace(/(.)(\1){2,}/g, '$1$1')
    // Leet speak
    .replace(/0/g, 'o').replace(/1/g, 'i').replace(/3/g, 'e')
    .replace(/4/g, 'a').replace(/5/g, 's').replace(/7/g, 't')
    .replace(/8/g, 'b').replace(/@/g, 'a').replace(/\$/g, 's')
    .replace(/!/g, 'i').replace(/\|/g, 'l')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function checkContentFilter(env, text) {
  if (!text || typeof text !== 'string') return { clean: true, matched: [], severity: null };
  try {
    const { results: keywords } = await env.DB.prepare(
      'SELECT word, severity FROM moderation_keywords ORDER BY severity DESC'
    ).all();
    if (!keywords || keywords.length === 0) return { clean: true, matched: [], severity: null };

    const normalized = normalizeForFilter(text);
    const matched = [];
    let highestSeverity = null;

    for (const kw of keywords) {
      const nw = normalizeForFilter(kw.word);
      const regex = new RegExp(`(?:^|\\s|[^\\w\\u0600-\\u06FF])${escapeRegex(nw)}(?:$|\\s|[^\\w\\u0600-\\u06FF])`, 'i');
      if (regex.test(` ${normalized} `)) {
        matched.push(kw.word);
        if (kw.severity === 'block') highestSeverity = 'block';
        else if (kw.severity === 'flag' && highestSeverity !== 'block') highestSeverity = 'flag';
      }
    }
    return { clean: matched.length === 0, matched, severity: highestSeverity };
  } catch (err) {
    console.error('[ChatFilter] Error:', err);
    return { clean: true, matched: [], severity: null };
  }
}

async function logModerationIncident(env, { userId, userName, userEmail, contentPreview, matchedKeywords, severity, roomId }) {
  try {
    await env.DB.prepare(`
      INSERT INTO moderation_incidents
        (user_id, user_name, user_email, content_type, content_preview, matched_keywords, severity, target_type, target_id)
      VALUES (?, ?, ?, 'chat', ?, ?, ?, 'chat_message', ?)
    `).bind(
      userId, userName || null, userEmail || null,
      (contentPreview || '').substring(0, 200),
      JSON.stringify(matchedKeywords || []),
      severity, roomId || null
    ).run();
  } catch (err) {
    console.error('[ChatFilter] Failed to log incident:', err);
  }
}

async function checkSpamFilter(env, userId, text, roomId) {
  try {
    const fiveMinAgo = new Date(Date.now() - 5 * 60000).toISOString();
    const oneMinAgo = new Date(Date.now() - 60000).toISOString();

    const crossPost = await env.DB.prepare(`
      SELECT COUNT(DISTINCT room_id) as room_count FROM chat_messages
      WHERE user_id = ? AND message = ? AND created_at > ? AND is_deleted = 0
    `).bind(userId, text, fiveMinAgo).first();
    if (crossPost && crossPost.room_count >= 3) return { isSpam: true, reason: 'Cross-posting detected' };

    const flood = await env.DB.prepare(`
      SELECT COUNT(*) as msg_count FROM chat_messages
      WHERE user_id = ? AND room_id = ? AND created_at > ? AND is_deleted = 0
    `).bind(userId, roomId, oneMinAgo).first();
    if (flood && flood.msg_count >= 10) return { isSpam: true, reason: 'Too many messages — slow down' };

    const dup = await env.DB.prepare(`
      SELECT COUNT(*) as dup_count FROM chat_messages
      WHERE user_id = ? AND room_id = ? AND message = ? AND created_at > ? AND is_deleted = 0
    `).bind(userId, roomId, text, fiveMinAgo).first();
    if (dup && dup.dup_count >= 3) return { isSpam: true, reason: 'Duplicate message' };

    return { isSpam: false, reason: null };
  } catch {
    return { isSpam: false, reason: null };
  }
}

export class ChatRoom {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    // Map of WebSocket → user info
    this.sessions = new Map();
    // Typing state: userId → timeout handle
    this.typingTimers = new Map();
  }

  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === '/ws') {
      return this.handleWebSocket(request);
    }

    return new Response('Not found', { status: 404 });
  }

  async handleWebSocket(request) {
    const pair = new WebSocketPair();
    const [client, server] = [pair[0], pair[1]];

    const userId = request.headers.get('X-User-Id');
    const userName = request.headers.get('X-User-Name');
    const userPicture = request.headers.get('X-User-Picture');
    const roomType = request.headers.get('X-Room-Type');
    const roomId = request.headers.get('X-Room-Id');

    // Accept the WebSocket
    this.state.acceptWebSocket(server);

    // Store session info
    this.sessions.set(server, {
      userId,
      userName,
      userPicture,
      roomType,
      roomId,
      joinedAt: Date.now(),
    });

    // Send recent messages to the newly connected user
    try {
      const history = await this.loadHistory(roomType, roomId, 50);
      server.send(JSON.stringify({
        type: 'history',
        messages: history,
      }));
    } catch (e) {
      console.error('Failed to load history:', e);
    }

    // Broadcast updated presence
    this.broadcastPresence();

    return new Response(null, { status: 101, webSocket: client });
  }

  async webSocketMessage(ws, messageStr) {
    const session = this.sessions.get(ws);
    if (!session) return;

    let data;
    try {
      data = JSON.parse(messageStr);
    } catch {
      return;
    }

    switch (data.type) {
      case 'message':
        await this.handleMessage(ws, session, data);
        break;
      case 'typing':
        this.handleTyping(session);
        break;
      case 'stop_typing':
        this.handleStopTyping(session);
        break;
      case 'reaction':
        await this.handleReaction(session, data);
        break;
      default:
        break;
    }
  }

  async webSocketClose(ws) {
    const session = this.sessions.get(ws);
    this.sessions.delete(ws);

    if (session) {
      // Clear typing timer
      this.handleStopTyping(session);
      // Update presence
      this.broadcastPresence();
    }
  }

  webSocketError(ws) {
    this.webSocketClose(ws);
  }

  // ─── Message Handling ─────────────────────────────────────

  async handleMessage(ws, session, data) {
    const text = (data.text || '').trim();
    if (!text || text.length > MAX_MESSAGE_LENGTH) return;

    // Rate limit check for free users
    const isLimited = await this.checkRateLimit(session.userId);
    if (isLimited) {
      ws.send(JSON.stringify({
        type: 'error',
        message: 'Daily limit reached. Upgrade to premium for unlimited messages.',
        requiresPremium: true,
      }));
      return;
    }

    // Content filter — check for banned/flagged words (before sanitize, on raw text)
    const filter = await checkContentFilter(this.env, text);

    // Sanitize for XSS
    const sanitized = sanitizeText(text);

    // Spam detection (use sanitized text so DB comparisons match stored messages)
    const spam = await checkSpamFilter(this.env, session.userId, sanitized, session.roomId);
    if (spam.isSpam) {
      ws.send(JSON.stringify({
        type: 'error',
        message: spam.reason,
      }));
      return;
    }

    if (filter.severity === 'block') {
      // Reject — send error back to sender only
      ws.send(JSON.stringify({
        type: 'error',
        message: 'Your message contains prohibited content and was not sent.',
      }));
      await logModerationIncident(this.env, {
        userId: session.userId,
        userName: session.userName,
        contentPreview: text,
        matchedKeywords: filter.matched,
        severity: 'blocked',
        roomId: session.roomId,
      });
      return;
    }

    // Clear typing
    this.handleStopTyping(session);

    const message = {
      id: Date.now() + '-' + session.userId.slice(-4),
      roomType: session.roomType,
      roomId: session.roomId,
      userId: session.userId,
      userName: session.userName,
      userPicture: session.userPicture,
      message: sanitized,
      replyToId: data.replyToId || null,
      replyToText: data.replyToText ? sanitizeText(String(data.replyToText).substring(0, 100)) : null,
      replyToUser: data.replyToUser ? sanitizeText(String(data.replyToUser).substring(0, 50)) : null,
      reactions: {},
      createdAt: new Date().toISOString(),
    };

    // If flagged, log incident but still broadcast
    if (filter.severity === 'flag') {
      await logModerationIncident(this.env, {
        userId: session.userId,
        userName: session.userName,
        contentPreview: text,
        matchedKeywords: filter.matched,
        severity: 'flagged',
        roomId: session.roomId,
      });
    }

    // Persist to D1
    try {
      await this.persistMessage(message);
    } catch (e) {
      console.error('Failed to persist message:', e);
    }

    // Broadcast to all connected users
    this.broadcast(JSON.stringify({ type: 'message', message }));
  }

  // ─── Typing Indicator ─────────────────────────────────────

  handleTyping(session) {
    // Clear existing timer
    if (this.typingTimers.has(session.userId)) {
      clearTimeout(this.typingTimers.get(session.userId));
    }

    // Broadcast typing
    this.broadcast(JSON.stringify({
      type: 'typing',
      userId: session.userId,
      userName: session.userName,
    }), session.userId);

    // Auto-clear after 3 seconds
    this.typingTimers.set(session.userId, setTimeout(() => {
      this.handleStopTyping(session);
    }, 3000));
  }

  handleStopTyping(session) {
    if (this.typingTimers.has(session.userId)) {
      clearTimeout(this.typingTimers.get(session.userId));
      this.typingTimers.delete(session.userId);
    }

    this.broadcast(JSON.stringify({
      type: 'stop_typing',
      userId: session.userId,
    }), session.userId);
  }

  // ─── Reactions ─────────────────────────────────────────────

  async handleReaction(session, data) {
    const { messageId, emoji } = data;
    if (!messageId || !REACTIONS.includes(emoji)) return;

    // Update reaction in D1
    try {
      const msg = await this.env.DB.prepare(
        'SELECT reactions FROM chat_messages WHERE id = ?'
      ).bind(messageId).first();

      if (!msg) return;

      const reactions = msg.reactions ? JSON.parse(msg.reactions) : {};

      if (!reactions[emoji]) reactions[emoji] = [];

      const idx = reactions[emoji].indexOf(session.userId);
      if (idx >= 0) {
        // Toggle off
        reactions[emoji].splice(idx, 1);
        if (reactions[emoji].length === 0) delete reactions[emoji];
      } else {
        // Toggle on
        reactions[emoji].push(session.userId);
      }

      await this.env.DB.prepare(
        'UPDATE chat_messages SET reactions = ? WHERE id = ?'
      ).bind(JSON.stringify(reactions), messageId).run();

      // Broadcast reaction update
      this.broadcast(JSON.stringify({
        type: 'reaction_update',
        messageId,
        reactions,
      }));
    } catch (e) {
      console.error('Failed to update reaction:', e);
    }
  }

  // ─── Presence ──────────────────────────────────────────────

  broadcastPresence() {
    const users = [];
    const seenIds = new Set();

    for (const session of this.sessions.values()) {
      if (!seenIds.has(session.userId)) {
        seenIds.add(session.userId);
        users.push({
          userId: session.userId,
          userName: session.userName,
          userPicture: session.userPicture,
        });
      }
    }

    this.broadcast(JSON.stringify({
      type: 'presence',
      users,
      count: users.length,
    }));
  }

  // ─── Broadcasting ─────────────────────────────────────────

  broadcast(message, excludeUserId = null) {
    for (const [ws, session] of this.sessions.entries()) {
      if (excludeUserId && session.userId === excludeUserId) continue;
      try {
        ws.send(message);
      } catch {
        // Remove dead connections
        this.sessions.delete(ws);
      }
    }
  }

  // ─── Persistence ──────────────────────────────────────────

  async persistMessage(message) {
    await this.env.DB.prepare(`
      INSERT INTO chat_messages (room_type, room_id, user_id, user_name, user_picture, message, reply_to_id, reactions)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      message.roomType,
      message.roomId,
      message.userId,
      message.userName,
      message.userPicture || null,
      message.message,
      message.replyToId,
      JSON.stringify(message.reactions),
    ).run();

    // Trim old messages (keep last MAX_STORED_MESSAGES per room)
    await this.env.DB.prepare(`
      DELETE FROM chat_messages
      WHERE room_type = ? AND room_id = ? AND id NOT IN (
        SELECT id FROM chat_messages
        WHERE room_type = ? AND room_id = ?
        ORDER BY created_at DESC
        LIMIT ?
      )
    `).bind(
      message.roomType, message.roomId,
      message.roomType, message.roomId,
      MAX_STORED_MESSAGES,
    ).run();
  }

  async loadHistory(roomType, roomId, limit = 50) {
    const result = await this.env.DB.prepare(`
      SELECT id, user_id, user_name, user_picture, message, reply_to_id, reactions, created_at
      FROM chat_messages
      WHERE room_type = ? AND room_id = ? AND is_deleted = FALSE
      ORDER BY created_at DESC
      LIMIT ?
    `).bind(roomType, roomId, limit).all();

    return (result.results || []).reverse().map(m => ({
      id: m.id,
      userId: m.user_id,
      userName: m.user_name,
      userPicture: m.user_picture,
      message: m.message,
      replyToId: m.reply_to_id,
      reactions: m.reactions ? JSON.parse(m.reactions) : {},
      createdAt: m.created_at,
    }));
  }

  // ─── Rate Limiting ────────────────────────────────────────

  async checkRateLimit(userId) {
    try {
      // Check if premium
      const sub = await this.env.DB.prepare(
        "SELECT plan FROM subscriptions WHERE user_id = ? AND status = 'active'"
      ).bind(userId).first();

      if (sub && sub.plan !== 'free') return false; // Premium = no limit

      // Check daily usage
      const today = new Date().toISOString().split('T')[0];

      await this.env.DB.prepare(`
        INSERT INTO discussion_daily_usage (user_id, date)
        VALUES (?, ?)
        ON CONFLICT(user_id, date) DO NOTHING
      `).bind(userId, today).run();

      const usage = await this.env.DB.prepare(
        'SELECT chat_count FROM discussion_daily_usage WHERE user_id = ? AND date = ?'
      ).bind(userId, today).first();

      if ((usage?.chat_count || 0) >= FREE_DAILY_LIMIT) return true;

      // Increment
      await this.env.DB.prepare(
        'UPDATE discussion_daily_usage SET chat_count = chat_count + 1 WHERE user_id = ? AND date = ?'
      ).bind(userId, today).run();

      return false;
    } catch {
      return false; // Fail open
    }
  }
}
