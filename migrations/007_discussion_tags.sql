-- Discussion Tags / Topics System
-- Allows posts to be categorized with predefined topic tags

CREATE TABLE IF NOT EXISTS discussion_tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  name_ur TEXT,
  icon TEXT,
  color TEXT,
  post_count INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS post_tags (
  post_id INTEGER NOT NULL,
  tag_id INTEGER NOT NULL,
  PRIMARY KEY (post_id, tag_id)
);

CREATE INDEX IF NOT EXISTS idx_post_tags_tag ON post_tags(tag_id);
CREATE INDEX IF NOT EXISTS idx_post_tags_post ON post_tags(post_id);

-- Seed predefined tags
INSERT OR IGNORE INTO discussion_tags (name, slug, name_ur, icon, color) VALUES
  ('Science',        'science',        'سائنس',        '🔬', '#3B82F6'),
  ('Hadith',         'hadith',         'حدیث',         '📜', '#F59E0B'),
  ('Tafseer',        'tafseer',        'تفسیر',        '📖', '#8B5CF6'),
  ('Morality',       'morality',       'اخلاقیات',     '⚖️', '#10B981'),
  ('History',        'history',        'تاریخ',        '🏛️', '#EF4444'),
  ('Arabic Grammar', 'arabic-grammar', 'عربی قواعد',   '✏️', '#EC4899'),
  ('Daily Life',     'daily-life',     'روزمرہ زندگی', '🌅', '#06B6D4'),
  ('Women in Islam', 'women-in-islam', 'خواتین',       '👩', '#F472B6'),
  ('Spirituality',   'spirituality',   'روحانیت',      '🕌', '#A855F7'),
  ('Fiqh',           'fiqh',           'فقہ',          '⚙️', '#22C55E'),
  ('Dua & Worship',  'dua-worship',    'دعا و عبادت', '🤲', '#14B8A6'),
  ('Stories',        'stories',        'قصص',          '📚', '#D97706'),
  ('Aqeedah',        'aqeedah',        'عقیدہ',        '💡', '#7C3AED');
