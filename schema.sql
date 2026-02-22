-- w3Quran Database Schema for Cloudflare D1
-- Run: npx wrangler d1 execute w3quran-db --file=./schema.sql

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  google_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  picture TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan TEXT DEFAULT 'free',
  status TEXT DEFAULT 'active',
  current_period_end DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- User data sync table
CREATE TABLE IF NOT EXISTS user_data (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  data_type TEXT NOT NULL,
  data TEXT NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Sessions table
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  token TEXT UNIQUE NOT NULL,
  expires_at DATETIME NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_customer ON subscriptions(stripe_customer_id);
CREATE INDEX IF NOT EXISTS idx_user_data_user_type ON user_data(user_id, data_type);
CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions(token);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);

-- ============================================
-- UMMAH PULSE TABLES (Real-time reader tracking)
-- Migrated from Workers KV to D1 for better free tier limits
-- ============================================

-- Active presence (users currently online)
CREATE TABLE IF NOT EXISTS ummah_presence (
  user_id TEXT PRIMARY KEY,
  lat REAL,
  lng REAL,
  status TEXT DEFAULT 'browsing',
  surah_id INTEGER,
  page TEXT,
  last_seen DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Daily statistics
CREATE TABLE IF NOT EXISTS ummah_daily_stats (
  date TEXT PRIMARY KEY,
  total_visits INTEGER DEFAULT 0,
  unique_visitors INTEGER DEFAULT 0,
  total_readings INTEGER DEFAULT 0,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- All-time statistics
CREATE TABLE IF NOT EXISTS ummah_stats (
  id TEXT PRIMARY KEY DEFAULT 'global',
  total_visits INTEGER DEFAULT 0,
  unique_visitors INTEGER DEFAULT 0,
  total_readings INTEGER DEFAULT 0,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Recent activities (for live feed)
CREATE TABLE IF NOT EXISTS ummah_activities (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  activity_type TEXT,
  surah_id INTEGER,
  ayah INTEGER,
  lat REAL,
  lng REAL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for Ummah Pulse
CREATE INDEX IF NOT EXISTS idx_presence_last_seen ON ummah_presence(last_seen);
CREATE INDEX IF NOT EXISTS idx_activities_created ON ummah_activities(created_at);
CREATE INDEX IF NOT EXISTS idx_activities_type ON ummah_activities(activity_type);

-- ============================================
-- CREDIT SYSTEM TABLES (Talk to Quran feature)
-- ============================================

-- User credits table (tracks credit balance and usage)
CREATE TABLE IF NOT EXISTS user_credits (
  user_id TEXT PRIMARY KEY,
  credits_balance INTEGER DEFAULT 0,
  credits_monthly_allowance INTEGER DEFAULT 0,
  credits_used_this_month INTEGER DEFAULT 0,
  credits_reset_date TEXT,
  free_credits_claimed BOOLEAN DEFAULT FALSE,
  subscription_tier TEXT DEFAULT 'free',
  lifetime_purchase BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Credit transactions table (history of credit usage and purchases)
CREATE TABLE IF NOT EXISTS credit_transactions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  type TEXT NOT NULL, -- 'use', 'purchase', 'monthly_reset', 'free_gift', 'refund'
  amount INTEGER NOT NULL, -- positive for credits added, negative for credits used
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Talk to Quran conversations (stores conversation history)
CREATE TABLE IF NOT EXISTS quran_conversations (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  message TEXT NOT NULL, -- user's question
  response TEXT NOT NULL, -- AI response
  verses_cited TEXT, -- JSON array of verse references
  language TEXT DEFAULT 'en',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Free user daily usage (tracks daily query limit for free users)
CREATE TABLE IF NOT EXISTS free_daily_usage (
  user_id TEXT NOT NULL,
  usage_date TEXT NOT NULL, -- YYYY-MM-DD format
  query_count INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, usage_date),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Indexes for credit system
CREATE INDEX IF NOT EXISTS idx_credits_user ON user_credits(user_id);
CREATE INDEX IF NOT EXISTS idx_credits_tier ON user_credits(subscription_tier);
CREATE INDEX IF NOT EXISTS idx_transactions_user ON credit_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_created ON credit_transactions(created_at);
CREATE INDEX IF NOT EXISTS idx_conversations_user ON quran_conversations(user_id);
CREATE INDEX IF NOT EXISTS idx_conversations_created ON quran_conversations(created_at);
CREATE INDEX IF NOT EXISTS idx_free_daily_user_date ON free_daily_usage(user_id, usage_date);

-- ============================================
-- APPLICATION LOGGING TABLES (Comprehensive tracking)
-- ============================================

-- Main app logs table (stores all client-side logs)
CREATE TABLE IF NOT EXISTS app_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT,
  session_id TEXT, -- Groups logs from same browser session
  log_level TEXT NOT NULL DEFAULT 'info', -- debug, info, warn, error, critical
  log_type TEXT NOT NULL DEFAULT 'general', -- error, performance, action, navigation, audio, api, memory, feature, crash, etc.
  message TEXT,
  browser TEXT, -- chrome, safari, firefox, edge
  os TEXT, -- windows, macos, linux, android, ios
  device TEXT, -- desktop, mobile, tablet
  memory_used_mb INTEGER, -- JS heap used
  memory_percent INTEGER, -- Heap usage percentage
  page_url TEXT,
  surah_id INTEGER,
  ayah_num INTEGER,
  extra_data TEXT, -- JSON for additional context
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_app_logs_level ON app_logs(log_level);
CREATE INDEX IF NOT EXISTS idx_app_logs_type ON app_logs(log_type);
CREATE INDEX IF NOT EXISTS idx_app_logs_created ON app_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_app_logs_surah ON app_logs(surah_id);
CREATE INDEX IF NOT EXISTS idx_app_logs_session ON app_logs(session_id);
CREATE INDEX IF NOT EXISTS idx_app_logs_browser ON app_logs(browser);
CREATE INDEX IF NOT EXISTS idx_app_logs_os ON app_logs(os);
CREATE INDEX IF NOT EXISTS idx_app_logs_user ON app_logs(user_id);

-- Legacy error logs table (for backwards compatibility)
CREATE TABLE IF NOT EXISTS error_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT,
  error_type TEXT NOT NULL,
  error_message TEXT,
  stack_trace TEXT,
  user_agent TEXT,
  page_url TEXT,
  surah_id INTEGER,
  ayah_num INTEGER,
  additional_data TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Indexes for error logs
CREATE INDEX IF NOT EXISTS idx_error_logs_type ON error_logs(error_type);
CREATE INDEX IF NOT EXISTS idx_error_logs_created ON error_logs(created_at);

-- ============================================
-- ANALYTICS TABLES (Firebase-style tracking)
-- ============================================

-- Analytics events table (raw event tracking from client)
CREATE TABLE IF NOT EXISTS analytics_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL, -- 'page_view', 'surah_read', 'audio_play', 'feature_use', 'search', 'purchase', 'error'
  user_id TEXT,
  session_id TEXT NOT NULL,
  page_url TEXT,
  surah_id INTEGER,
  ayah_num INTEGER,
  feature_name TEXT, -- 'talk_to_quran', 'tafseer', 'memorize', 'bookmark', etc.
  duration_seconds INTEGER,
  completion_percent INTEGER, -- 0-100 for surah reading completion
  search_query TEXT,
  result_count INTEGER,
  metadata TEXT, -- JSON for additional context
  country TEXT, -- geo location
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for analytics events
CREATE INDEX IF NOT EXISTS idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_events_type_date ON analytics_events(event_type, created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_events_session ON analytics_events(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_user ON analytics_events(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_surah ON analytics_events(surah_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_feature ON analytics_events(feature_name);

-- Daily aggregates table (pre-computed metrics for fast dashboard queries)
CREATE TABLE IF NOT EXISTS analytics_daily (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL, -- YYYY-MM-DD
  metric_name TEXT NOT NULL, -- 'dau', 'sessions', 'page_views', 'revenue', 'new_users', 'surah_reads', etc.
  metric_value REAL NOT NULL,
  dimensions TEXT, -- JSON: {"country": "US", "tier": "premium", "browser": "chrome"}
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(date, metric_name, dimensions)
);

-- Indexes for daily aggregates
CREATE INDEX IF NOT EXISTS idx_analytics_daily_date ON analytics_daily(date);
CREATE INDEX IF NOT EXISTS idx_analytics_daily_metric ON analytics_daily(metric_name);
CREATE INDEX IF NOT EXISTS idx_analytics_daily_metric_date ON analytics_daily(metric_name, date);

-- AI Insights cache table (stores generated insights)
CREATE TABLE IF NOT EXISTS ai_insights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  insight_type TEXT NOT NULL, -- 'full', 'quick', 'revenue', 'growth', 'weekly'
  insights_json TEXT NOT NULL, -- Full AI response
  metrics_snapshot TEXT, -- Metrics used to generate insights
  generated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  expires_at DATETIME, -- Cache expiration
  sent_email BOOLEAN DEFAULT FALSE
);

-- Index for AI insights
CREATE INDEX IF NOT EXISTS idx_ai_insights_type ON ai_insights(insight_type);
CREATE INDEX IF NOT EXISTS idx_ai_insights_generated ON ai_insights(generated_at);
CREATE INDEX IF NOT EXISTS idx_ai_insights_expires ON ai_insights(expires_at);

-- ============================================
-- LEADERBOARD TABLE (Global XP ranking)
-- Denormalized stats extracted from gamification JSON on each sync
-- ============================================

CREATE TABLE IF NOT EXISTS leaderboard (
  user_id TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  picture TEXT,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  current_streak INTEGER DEFAULT 0,
  best_streak INTEGER DEFAULT 0,
  verses_read INTEGER DEFAULT 0,
  surahs_completed INTEGER DEFAULT 0,
  achievements_count INTEGER DEFAULT 0,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_leaderboard_xp ON leaderboard(xp DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_streak ON leaderboard(current_streak DESC);
