-- Supabase テーブル作成SQL
-- Supabaseダッシュボードの SQL Editor で実行してください

-- お問い合わせテーブル
CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service TEXT NOT NULL,
  budget TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- RLS (Row Level Security) を有効化
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- 匿名ユーザーからの挿入を許可するポリシー
CREATE POLICY "Allow anonymous insert" ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 認証済みユーザーのみ読み取り可能（管理用）
CREATE POLICY "Allow authenticated read" ON contacts
  FOR SELECT
  TO authenticated
  USING (true);
