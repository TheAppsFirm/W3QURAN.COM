-- Auto-Moderation System Migration
-- Run: npx wrangler d1 execute w3quran-db --remote --file=./migrations/005_auto_moderation.sql

-- ============================================================
-- 1. Moderation Keywords (configurable banned/flagged word list)
-- ============================================================
CREATE TABLE IF NOT EXISTS moderation_keywords (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  word TEXT NOT NULL UNIQUE,
  severity TEXT NOT NULL DEFAULT 'flag',  -- 'block' = reject outright, 'flag' = auto-hold for review
  category TEXT DEFAULT 'general',        -- 'profanity', 'slur', 'spam', 'hate', 'general'
  added_by TEXT,                          -- admin user_id or 'system'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_keywords_severity ON moderation_keywords(severity);
CREATE INDEX IF NOT EXISTS idx_keywords_category ON moderation_keywords(category);

-- ============================================================
-- 2. Moderation Incidents (auto-detection log)
-- ============================================================
CREATE TABLE IF NOT EXISTS moderation_incidents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  user_name TEXT,
  user_email TEXT,
  content_type TEXT NOT NULL,    -- 'post', 'comment', 'chat'
  content_preview TEXT,          -- first 200 chars of flagged content
  matched_keywords TEXT,         -- JSON array of matched words
  severity TEXT NOT NULL,        -- 'blocked' or 'flagged'
  action_taken TEXT DEFAULT 'auto',  -- 'auto', 'admin_approved', 'admin_deleted', 'admin_banned'
  target_type TEXT,              -- 'post', 'comment', 'chat_message' (for un-holding)
  target_id INTEGER,             -- ID of the held content
  reviewed_by TEXT,
  reviewed_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_incidents_user ON moderation_incidents(user_id);
CREATE INDEX IF NOT EXISTS idx_incidents_severity ON moderation_incidents(severity, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_incidents_action ON moderation_incidents(action_taken, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_incidents_unreviewed ON moderation_incidents(action_taken) WHERE action_taken = 'auto';

-- ============================================================
-- 3. Seed Default Keywords
-- ============================================================
-- English profanity (block)
INSERT OR IGNORE INTO moderation_keywords (word, severity, category, added_by) VALUES
  ('fuck', 'block', 'profanity', 'system'),
  ('shit', 'block', 'profanity', 'system'),
  ('bitch', 'block', 'profanity', 'system'),
  ('asshole', 'block', 'profanity', 'system'),
  ('bastard', 'block', 'profanity', 'system'),
  ('dick', 'flag', 'profanity', 'system'),
  ('damn', 'flag', 'profanity', 'system'),
  ('crap', 'flag', 'profanity', 'system');

-- Slurs & hate speech (block)
INSERT OR IGNORE INTO moderation_keywords (word, severity, category, added_by) VALUES
  ('nigger', 'block', 'slur', 'system'),
  ('nigga', 'block', 'slur', 'system'),
  ('faggot', 'block', 'slur', 'system'),
  ('retard', 'block', 'slur', 'system'),
  ('kike', 'block', 'slur', 'system'),
  ('chink', 'block', 'slur', 'system'),
  ('spic', 'block', 'slur', 'system');

-- Hate & threats (block)
INSERT OR IGNORE INTO moderation_keywords (word, severity, category, added_by) VALUES
  ('kill yourself', 'block', 'hate', 'system'),
  ('kys', 'block', 'hate', 'system'),
  ('i will kill', 'block', 'hate', 'system'),
  ('death threat', 'block', 'hate', 'system'),
  ('bomb threat', 'block', 'hate', 'system'),
  ('terrorist', 'flag', 'hate', 'system');

-- Spam patterns (flag)
INSERT OR IGNORE INTO moderation_keywords (word, severity, category, added_by) VALUES
  ('buy now', 'flag', 'spam', 'system'),
  ('click here', 'flag', 'spam', 'system'),
  ('free money', 'flag', 'spam', 'system'),
  ('earn money', 'flag', 'spam', 'system'),
  ('crypto invest', 'flag', 'spam', 'system'),
  ('whatsapp number', 'flag', 'spam', 'system'),
  ('telegram group', 'flag', 'spam', 'system');

-- Urdu abusive (block)
INSERT OR IGNORE INTO moderation_keywords (word, severity, category, added_by) VALUES
  ('بھڑوا', 'block', 'profanity', 'system'),
  ('حرامی', 'block', 'profanity', 'system'),
  ('کتا', 'flag', 'profanity', 'system'),
  ('گدھا', 'flag', 'profanity', 'system'),
  ('بےشرم', 'flag', 'profanity', 'system'),
  ('لعنتی', 'flag', 'profanity', 'system'),
  ('کمینا', 'block', 'profanity', 'system'),
  ('سالا', 'flag', 'profanity', 'system');

-- Islamically disrespectful (block)
INSERT OR IGNORE INTO moderation_keywords (word, severity, category, added_by) VALUES
  ('kafir scum', 'block', 'hate', 'system'),
  ('takfir', 'flag', 'hate', 'system'),
  ('murtad', 'flag', 'hate', 'system'),
  ('sectarian', 'flag', 'hate', 'system');
