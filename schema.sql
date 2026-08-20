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

-- 뉴스레터 발행분 (관리자 페이지에서 작성 · 발송)
CREATE TABLE IF NOT EXISTS newsletters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  subject TEXT,          -- 제목
  bodyHtml TEXT,         -- 본문(HTML)
  status TEXT,           -- draft | sent
  sentAt TEXT,           -- 발송 시각
  sentCount INTEGER DEFAULT 0,
  createdAt TEXT
);

-- 뉴스레터 수신 동의자 (회원가입 · 상담신청 · 직접 구독을 한 곳에 모은다)
CREATE TABLE IF NOT EXISTS subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE,
  name TEXT,
  source TEXT,           -- lead | signup | manual
  unsubToken TEXT,       -- 수신거부 링크용 토큰 (정보통신망법 필수)
  status TEXT DEFAULT 'active',   -- active | unsub
  at TEXT
);
CREATE INDEX IF NOT EXISTS idx_subs_status ON subscribers(status);
