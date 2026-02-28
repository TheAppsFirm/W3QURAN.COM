-- Discussion Board & Chat Tables Migration
-- Run: npx wrangler d1 execute w3quran-db --remote --file=./migrations/004_discussions.sql

-- ============================================================
-- 1. Discussion Posts (Reddit-style per surah)
-- ============================================================
CREATE TABLE IF NOT EXISTS discussion_posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  surah_id INTEGER NOT NULL,
  user_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  user_picture TEXT,
  post_type TEXT NOT NULL DEFAULT 'discussion',  -- discussion, reflection, tafseer, question
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  ayah_refs TEXT,          -- JSON array of ayah references e.g. [{"surah":2,"ayah":255}]
  score INTEGER DEFAULT 0, -- net upvotes - downvotes
  comment_count INTEGER DEFAULT 0,
  is_pinned BOOLEAN DEFAULT FALSE,
  is_locked BOOLEAN DEFAULT FALSE,
  is_deleted BOOLEAN DEFAULT FALSE,
  deleted_by TEXT,         -- 'user' or 'admin'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_posts_surah ON discussion_posts(surah_id, is_deleted);
CREATE INDEX IF NOT EXISTS idx_posts_user ON discussion_posts(user_id);
CREATE INDEX IF NOT EXISTS idx_posts_score ON discussion_posts(surah_id, score DESC);
CREATE INDEX IF NOT EXISTS idx_posts_created ON discussion_posts(surah_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_posts_pinned ON discussion_posts(surah_id, is_pinned DESC, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_posts_type ON discussion_posts(surah_id, post_type);

-- ============================================================
-- 2. Discussion Comments (threaded, max 3 levels)
-- ============================================================
CREATE TABLE IF NOT EXISTS discussion_comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL,
  parent_id INTEGER,       -- NULL = top-level, otherwise reply to comment
  depth INTEGER DEFAULT 0, -- 0, 1, 2 (max 3 levels)
  user_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  user_picture TEXT,
  body TEXT NOT NULL,
  score INTEGER DEFAULT 0,
  is_deleted BOOLEAN DEFAULT FALSE,
  deleted_by TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES discussion_posts(id),
  FOREIGN KEY (parent_id) REFERENCES discussion_comments(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_comments_post ON discussion_comments(post_id, is_deleted);
CREATE INDEX IF NOT EXISTS idx_comments_parent ON discussion_comments(parent_id);
CREATE INDEX IF NOT EXISTS idx_comments_user ON discussion_comments(user_id);
CREATE INDEX IF NOT EXISTS idx_comments_score ON discussion_comments(post_id, score DESC);

-- ============================================================
-- 3. Votes (posts and comments)
-- ============================================================
CREATE TABLE IF NOT EXISTS discussion_votes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  target_type TEXT NOT NULL,   -- 'post' or 'comment'
  target_id INTEGER NOT NULL,
  vote INTEGER NOT NULL,       -- 1 = upvote, -1 = downvote
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, target_type, target_id)
);

CREATE INDEX IF NOT EXISTS idx_votes_target ON discussion_votes(target_type, target_id);
CREATE INDEX IF NOT EXISTS idx_votes_user ON discussion_votes(user_id);

-- ============================================================
-- 4. Chat Messages (live chat per surah)
-- ============================================================
CREATE TABLE IF NOT EXISTS chat_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  room_type TEXT NOT NULL DEFAULT 'surah',  -- 'surah' or 'dm'
  room_id TEXT NOT NULL,       -- surah_id for surah rooms, dm_connection_id for DMs
  user_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  user_picture TEXT,
  message TEXT NOT NULL,
  reply_to_id INTEGER,         -- reply to another message
  reply_to_user TEXT,          -- name of the user being replied to
  reply_to_text TEXT,          -- preview of the replied message
  reactions TEXT,              -- JSON e.g. {"❤️":["user1","user2"],"👍":["user3"]}
  is_deleted BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_chat_room ON chat_messages(room_type, room_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_user ON chat_messages(user_id);

-- ============================================================
-- 5. DM Connections (request/accept/block)
-- ============================================================
CREATE TABLE IF NOT EXISTS dm_connections (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  requester_id TEXT NOT NULL,
  requester_name TEXT,
  requester_email TEXT,
  requester_picture TEXT,
  recipient_id TEXT NOT NULL,
  recipient_name TEXT,
  recipient_email TEXT,
  recipient_picture TEXT,
  status TEXT NOT NULL DEFAULT 'pending',  -- pending, accepted, rejected, blocked
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(requester_id, recipient_id),
  FOREIGN KEY (requester_id) REFERENCES users(id),
  FOREIGN KEY (recipient_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_dm_requester ON dm_connections(requester_id, status);
CREATE INDEX IF NOT EXISTS idx_dm_recipient ON dm_connections(recipient_id, status);

-- ============================================================
-- 6. User Blocks
-- ============================================================
CREATE TABLE IF NOT EXISTS user_blocks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  blocker_id TEXT NOT NULL,
  blocked_id TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(blocker_id, blocked_id),
  FOREIGN KEY (blocker_id) REFERENCES users(id),
  FOREIGN KEY (blocked_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_blocks_blocker ON user_blocks(blocker_id);
CREATE INDEX IF NOT EXISTS idx_blocks_blocked ON user_blocks(blocked_id);

-- ============================================================
-- 7. Content Reports
-- ============================================================
CREATE TABLE IF NOT EXISTS discussion_reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  reporter_id TEXT NOT NULL,
  target_type TEXT NOT NULL,   -- 'post', 'comment', 'chat_message', 'user'
  target_id INTEGER NOT NULL,
  reason TEXT NOT NULL,        -- 'spam', 'offensive', 'misinformation', 'harassment', 'other'
  details TEXT,
  status TEXT NOT NULL DEFAULT 'pending',  -- pending, reviewed, dismissed, actioned
  reviewed_by TEXT,
  reviewed_at DATETIME,
  action_taken TEXT,           -- 'deleted', 'banned', 'warned', NULL
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (reporter_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_reports_status ON discussion_reports(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reports_target ON discussion_reports(target_type, target_id);
CREATE INDEX IF NOT EXISTS idx_reports_reporter ON discussion_reports(reporter_id);

-- ============================================================
-- 8. Daily Usage (rate limiting for free users)
-- ============================================================
CREATE TABLE IF NOT EXISTS discussion_daily_usage (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  date TEXT NOT NULL,          -- YYYY-MM-DD
  post_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  chat_count INTEGER DEFAULT 0,
  UNIQUE(user_id, date),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_daily_usage_user_date ON discussion_daily_usage(user_id, date);

-- ============================================================
-- 9. Discussion Bans (separate from global user blocking)
-- ============================================================
CREATE TABLE IF NOT EXISTS discussion_bans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  banned_by TEXT NOT NULL,     -- admin user_id
  reason TEXT,
  expires_at DATETIME,         -- NULL = permanent
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (banned_by) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_bans_user ON discussion_bans(user_id);
CREATE INDEX IF NOT EXISTS idx_bans_expires ON discussion_bans(expires_at);
