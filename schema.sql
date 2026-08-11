-- CPPI 회원 서버 D1 스키마
-- 적용:  npx wrangler d1 execute cppi-db --file=schema.sql --remote
--   또는 Cloudflare 대시보드 → D1 → 콘솔에 붙여넣기 실행

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nameKo TEXT, nameEn TEXT,
  email TEXT UNIQUE,
  phone TEXT, pw TEXT,
  grade INTEGER DEFAULT 1,
  token TEXT, joined TEXT
);
CREATE INDEX IF NOT EXISTS idx_users_token ON users(token);

CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  oid TEXT, email TEXT, buyer TEXT,
  item TEXT, type TEXT, method TEXT,
  status TEXT, payer TEXT, at TEXT
);
CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(email);

CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT, email TEXT, phone TEXT,
  birth TEXT, region TEXT, interest TEXT,
  news INTEGER, at TEXT
);
