-- User Preferences Migration
-- Run: npx wrangler d1 execute w3quran-db --remote --file=./migrations/006_user_preferences.sql

-- ============================================================
-- User Preferences (privacy settings synced from client)
-- ============================================================
CREATE TABLE IF NOT EXISTS user_preferences (
  user_id TEXT PRIMARY KEY,
  show_email BOOLEAN DEFAULT FALSE,    -- Show email on profile popover
  allow_dms BOOLEAN DEFAULT TRUE,      -- Allow DM requests from anyone
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
