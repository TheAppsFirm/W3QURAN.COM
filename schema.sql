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

-- Indexes for credit system
CREATE INDEX IF NOT EXISTS idx_credits_user ON user_credits(user_id);
CREATE INDEX IF NOT EXISTS idx_credits_tier ON user_credits(subscription_tier);
CREATE INDEX IF NOT EXISTS idx_transactions_user ON credit_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_created ON credit_transactions(created_at);
CREATE INDEX IF NOT EXISTS idx_conversations_user ON quran_conversations(user_id);
CREATE INDEX IF NOT EXISTS idx_conversations_created ON quran_conversations(created_at);
