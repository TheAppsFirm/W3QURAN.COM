-- Analytics Tables Migration
-- Run: npx wrangler d1 execute w3quran-db --remote --file=./migrations/003_analytics_tables.sql

-- Analytics events table (raw event tracking from client)
CREATE TABLE IF NOT EXISTS analytics_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL,
  user_id TEXT,
  session_id TEXT NOT NULL,
  page_url TEXT,
  surah_id INTEGER,
  ayah_num INTEGER,
  feature_name TEXT,
  duration_seconds INTEGER,
  completion_percent INTEGER,
  search_query TEXT,
  result_count INTEGER,
  metadata TEXT,
  country TEXT,
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

-- Daily aggregates table
CREATE TABLE IF NOT EXISTS analytics_daily (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  metric_name TEXT NOT NULL,
  metric_value REAL NOT NULL,
  dimensions TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(date, metric_name, dimensions)
);

-- Indexes for daily aggregates
CREATE INDEX IF NOT EXISTS idx_analytics_daily_date ON analytics_daily(date);
CREATE INDEX IF NOT EXISTS idx_analytics_daily_metric ON analytics_daily(metric_name);
CREATE INDEX IF NOT EXISTS idx_analytics_daily_metric_date ON analytics_daily(metric_name, date);

-- AI Insights cache table
CREATE TABLE IF NOT EXISTS ai_insights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  insight_type TEXT NOT NULL,
  insights_json TEXT NOT NULL,
  metrics_snapshot TEXT,
  generated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  expires_at DATETIME,
  sent_email BOOLEAN DEFAULT FALSE
);

-- Index for AI insights
CREATE INDEX IF NOT EXISTS idx_ai_insights_type ON ai_insights(insight_type);
CREATE INDEX IF NOT EXISTS idx_ai_insights_generated ON ai_insights(generated_at);
CREATE INDEX IF NOT EXISTS idx_ai_insights_expires ON ai_insights(expires_at);
