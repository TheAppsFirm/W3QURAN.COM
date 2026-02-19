-- Credit System Migration for w3Quran
-- Run with: npx wrangler d1 execute w3quran-db --file=./scripts/migrate-credits.sql --remote

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
  type TEXT NOT NULL,
  amount INTEGER NOT NULL,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Talk to Quran conversations (stores conversation history)
CREATE TABLE IF NOT EXISTS quran_conversations (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  message TEXT NOT NULL,
  response TEXT NOT NULL,
  verses_cited TEXT,
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
