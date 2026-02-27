-- Email Logs Migration
-- Run: npx wrangler d1 execute w3quran-db --remote --file=./migrations/004_email_logs.sql

-- Email logs table — tracks every email sent
CREATE TABLE IF NOT EXISTS email_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  to_email TEXT NOT NULL,
  template TEXT,
  subject TEXT,
  status TEXT NOT NULL DEFAULT 'sent',   -- sent, failed
  resend_id TEXT,                         -- Resend message ID
  error TEXT,                             -- Error message if failed
  triggered_by TEXT DEFAULT 'admin',      -- admin, system (auto welcome, etc.)
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for email stats queries
CREATE INDEX IF NOT EXISTS idx_email_logs_created ON email_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_email_logs_status ON email_logs(status);
CREATE INDEX IF NOT EXISTS idx_email_logs_template ON email_logs(template);
