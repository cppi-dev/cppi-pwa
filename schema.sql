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
  news INTEGER, at TEXT,
  -- 유입 경로. 어떤 검색어·채널이 실제 상담으로 이어지는지 알기 위한 최소 정보.
  -- 전체 URL 과 IP 는 받지 않는다.
  ref TEXT,           -- 유입 도메인 (search.naver.com, google.com 등)
  utm_source TEXT,    -- 캠페인 출처 (naver, instagram, blog 등)
  utm_medium TEXT,    -- 매체 (cpc, organic, sns 등)
  utm_campaign TEXT,  -- 캠페인명
  landing TEXT        -- 첫 진입 경로 (/courses, /ja/curriculum 등)
);

-- [기존 DB 마이그레이션] 이미 leads 테이블이 있는 D1 에서는 위 CREATE 가
-- 건너뛰어지므로 아래 5줄을 D1 콘솔에서 한 번 실행해야 컬럼이 생긴다.
-- 이미 있는 컬럼이면 오류가 나는데 그 줄만 건너뛰면 된다.
--   ALTER TABLE leads ADD COLUMN ref TEXT;
--   ALTER TABLE leads ADD COLUMN utm_source TEXT;
--   ALTER TABLE leads ADD COLUMN utm_medium TEXT;
--   ALTER TABLE leads ADD COLUMN utm_campaign TEXT;
--   ALTER TABLE leads ADD COLUMN landing TEXT;

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
