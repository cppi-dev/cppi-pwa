/* ============================================================
   CPPI 회원 서버 — Cloudflare Pages Functions + D1
   경로: /api/*  (예: /api/signup, /api/login, /api/me ...)
   필요 설정(대시보드):
    - D1 데이터베이스 바인딩 이름: DB
    - 환경변수 ADMIN_PASS (관리자 비밀번호)
   OAuth(소셜) 키가 준비되면 아래 OAUTH 부분에 추가하면 활성화됩니다.
   ============================================================ */

async function sha(s) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
}
const json = (o, init = {}) => new Response(JSON.stringify(o), { headers: { "content-type": "application/json", ...(init.headers || {}) }, status: init.status || 200 });
const tok = () => (crypto.randomUUID() + crypto.randomUUID()).replace(/-/g, "");
function getCookie(req, name) {
  const c = req.headers.get("cookie") || "";
  const m = c.match(new RegExp("(?:^|; )" + name + "=([^;]+)"));
  return m ? m[1] : null;
}
const setSid = (t) => ({ "set-cookie": `cppi_sid=${t}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=31536000` });
const clrSid = { "set-cookie": "cppi_sid=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0" };
const pubUser = (u) => u ? { id: u.id, nameKo: u.nameKo, nameEn: u.nameEn, email: u.email, phone: u.phone, grade: u.grade } : null;

export async function onRequest(context) {
  const { request, env } = context;
  const DB = env.DB;
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/api\//, "").replace(/\/$/, "");
  if (!DB) return json({ error: "no-db", hint: "D1 바인딩(DB) 미설정" }, { status: 503 });

  const body = request.method === "POST" ? await request.json().catch(() => ({})) : {};
  const sid = getCookie(request, "cppi_sid");
  const meRow = sid ? await DB.prepare("SELECT * FROM users WHERE token=?").bind(sid).first() : null;

  try {
    /* ---- 회원 ---- */
    if (path === "signup" && request.method === "POST") {
      const em = (body.email || "").toLowerCase().trim();
      if (!em || !body.pw) return json({ error: "invalid" }, { status: 400 });
      const ex = await DB.prepare("SELECT id FROM users WHERE email=?").bind(em).first();
      if (ex) return json({ error: "exists" }, { status: 409 });
      const t = tok();
      await DB.prepare("INSERT INTO users(nameKo,nameEn,email,phone,pw,grade,token,joined) VALUES(?,?,?,?,?,1,?,?)")
        .bind(body.nameKo || "", (body.nameEn || "").toUpperCase(), em, body.phone || "", await sha(body.pw), t, new Date().toISOString().slice(0, 10)).run();
      const u = await DB.prepare("SELECT * FROM users WHERE email=?").bind(em).first();
      return json({ user: pubUser(u) }, { headers: setSid(t) });
    }
    if (path === "login" && request.method === "POST") {
      const em = (body.email || "").toLowerCase().trim();
      const u = await DB.prepare("SELECT * FROM users WHERE email=?").bind(em).first();
      if (!u || u.pw !== await sha(body.pw)) return json({ error: "invalid" }, { status: 401 });
      const t = tok();
      await DB.prepare("UPDATE users SET token=? WHERE id=?").bind(t, u.id).run();
      return json({ user: pubUser(u) }, { headers: setSid(t) });
    }
    if (path === "me") return json({ user: pubUser(meRow) });
    if (path === "logout") {
      if (meRow) await DB.prepare("UPDATE users SET token=NULL WHERE id=?").bind(meRow.id).run();
      return json({ ok: 1 }, { headers: clrSid });
    }

    /* ---- 주문 ---- */
    if (path === "order" && request.method === "POST") {
      const em = (meRow?.email || body.email || "guest").toLowerCase();
      const id = "CP" + Date.now().toString().slice(-8);
      await DB.prepare("INSERT INTO orders(oid,email,buyer,item,type,method,status,payer,at) VALUES(?,?,?,?,?,?,?,?,?)")
        .bind(id, em, body.buyer || meRow?.nameKo || "", body.item || "", body.type || "", body.method || "", "입금 확인중", "", new Date().toISOString().slice(0, 16).replace("T", " ")).run();
      return json({ id });
    }
    if (path === "orders") {
      if (!meRow) return json({ orders: [] });
      const r = await DB.prepare("SELECT * FROM orders WHERE email=? ORDER BY id DESC").bind(meRow.email).all();
      return json({ orders: r.results.map(o => ({ id: o.oid, item: o.item, status: o.status, type: o.type })) });
    }
    if (path === "bankname" && request.method === "POST") {
      const em = (meRow?.email || body.email || "").toLowerCase();
      await DB.prepare("UPDATE orders SET payer=? WHERE email=? AND id=(SELECT MAX(id) FROM orders WHERE email=?)").bind(body.payer || "", em, em).run();
      return json({ ok: 1 });
    }

    /* ---- 상담 리드 ---- */
    if (path === "lead" && request.method === "POST") {
      await DB.prepare("INSERT INTO leads(name,email,phone,birth,region,interest,news,at) VALUES(?,?,?,?,?,?,?,?)")
        .bind(body.name, body.email, body.phone, body.birth || "", body.region || "", body.interest, body.news ? 1 : 0, new Date().toISOString().slice(0, 16).replace("T", " ")).run();
      return json({ ok: 1 });
    }

    /* ---- 관리자 ---- */
    if (path.startsWith("admin/")) {
      const pass = body.pass || url.searchParams.get("pass");
      if (pass !== env.ADMIN_PASS) return json({ error: "auth" }, { status: 401 });
      if (path === "admin/users") { const r = await DB.prepare("SELECT id,nameKo,email,phone,grade FROM users ORDER BY id DESC").all(); return json({ users: r.results }); }
      if (path === "admin/orders") { const r = await DB.prepare("SELECT * FROM orders ORDER BY id DESC").all(); return json({ orders: r.results }); }
      if (path === "admin/leads") { const r = await DB.prepare("SELECT * FROM leads ORDER BY id DESC").all(); return json({ leads: r.results }); }
      if (path === "admin/grade" && request.method === "POST") { await DB.prepare("UPDATE users SET grade=? WHERE id=?").bind(body.grade, body.id).run(); return json({ ok: 1 }); }
      if (path === "admin/confirm" && request.method === "POST") {
        const o = await DB.prepare("SELECT * FROM orders WHERE oid=?").bind(body.oid).first();
        await DB.prepare("UPDATE orders SET status='완료' WHERE oid=?").bind(body.oid).run();
        if (o && String(o.type || "").startsWith("lecture")) await DB.prepare("UPDATE users SET grade=2 WHERE email=? AND grade<2").bind(o.email).run();
        return json({ ok: 1 });
      }
    }

    /* ================= 소셜 로그인 ================= */
    /* 흐름: /api/auth/kakao(로그인 시작) → 카카오 동의 → 같은 주소로 code 리턴 → 토큰교환 → 회원 생성/로그인 → 홈으로 */
    if (path.startsWith("auth/")) {
      const provider = path.split("/")[1];      // kakao | naver | google
      const code = url.searchParams.get("code");
      const origin = url.origin;
      const redirect = `${origin}/api/auth/${provider}`;

      /* --- 카카오 --- */
      if (provider === "kakao") {
        const KEY = env.KAKAO_REST_KEY, SECRET = env.KAKAO_CLIENT_SECRET;
        if (!KEY) return json({ error: "no-key", hint: "환경변수 KAKAO_REST_KEY 미설정" }, { status: 503 });

        // 1) 로그인 시작 - 카카오 동의 화면으로 보냄
        if (!code) {
          const auth = `https://kauth.kakao.com/oauth/authorize?client_id=${KEY}&redirect_uri=${encodeURIComponent(redirect)}&response_type=code&scope=profile_nickname,account_email`;
          return Response.redirect(auth, 302);
        }

        // 2) code → 토큰
        const form = new URLSearchParams({ grant_type: "authorization_code", client_id: KEY, redirect_uri: redirect, code });
        if (SECRET) form.set("client_secret", SECRET);
        const tr = await fetch("https://kauth.kakao.com/oauth/token", {
          method: "POST", headers: { "content-type": "application/x-www-form-urlencoded;charset=utf-8" }, body: form
        });
        const tj = await tr.json();
        if (!tj.access_token) return json({ error: "token-failed", detail: tj }, { status: 400 });

        // 3) 사용자 정보
        const ur = await fetch("https://kapi.kakao.com/v2/user/me", { headers: { authorization: "Bearer " + tj.access_token } });
        const uj = await ur.json();
        const kid = String(uj.id || "");
        const acc = uj.kakao_account || {};
        const email = (acc.email || `kakao_${kid}@social.cppipilates.com`).toLowerCase();
        const nick = (acc.profile && acc.profile.nickname) || "카카오회원";

        // 4) 회원 생성 또는 로그인 (이메일 기준 연동)
        let u = await DB.prepare("SELECT * FROM users WHERE email=?").bind(email).first();
        const t = tok();
        if (!u) {
          await DB.prepare("INSERT INTO users(nameKo,nameEn,email,phone,pw,grade,token,joined) VALUES(?,?,?,?,?,1,?,?)")
            .bind(nick, "", email, "", "social:kakao:" + kid, t, new Date().toISOString().slice(0, 10)).run();
        } else {
          await DB.prepare("UPDATE users SET token=? WHERE id=?").bind(t, u.id).run();
        }
        // 5) 앱으로 복귀 (세션 쿠키 세팅)
        return new Response(null, { status: 302, headers: { location: origin + "/#my", ...setSid(t) } });
      }

      /* --- 네이버 --- */
      if (provider === "naver") {
        const KEY = env.NAVER_CLIENT_ID, SECRET = env.NAVER_CLIENT_SECRET;
        if (!KEY || !SECRET) return json({ error: "no-key", hint: "환경변수 NAVER_CLIENT_ID / NAVER_CLIENT_SECRET 미설정" }, { status: 503 });

        // 1) 로그인 시작 - 네이버 동의 화면으로 보냄
        if (!code) {
          const state = tok();
          const auth = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${KEY}&redirect_uri=${encodeURIComponent(redirect)}&state=${state}`;
          return Response.redirect(auth, 302);
        }

        // 2) code → 토큰
        const state = url.searchParams.get("state") || "";
        const tokUrl = `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${KEY}&client_secret=${SECRET}&code=${encodeURIComponent(code)}&state=${encodeURIComponent(state)}`;
        const tr = await fetch(tokUrl);
        const tj = await tr.json();
        if (!tj.access_token) return json({ error: "token-failed", detail: tj }, { status: 400 });

        // 3) 사용자 정보
        const ur = await fetch("https://openapi.naver.com/v1/nid/me", { headers: { authorization: "Bearer " + tj.access_token } });
        const uj = await ur.json();
        const info = uj.response || {};
        const nid = String(info.id || "");
        const email = (info.email || `naver_${nid}@social.cppipilates.com`).toLowerCase();
        const nick = info.name || info.nickname || "네이버회원";

        // 4) 회원 생성 또는 로그인 (이메일 기준 연동)
        let u = await DB.prepare("SELECT * FROM users WHERE email=?").bind(email).first();
        const t = tok();
        if (!u) {
          await DB.prepare("INSERT INTO users(nameKo,nameEn,email,phone,pw,grade,token,joined) VALUES(?,?,?,?,?,1,?,?)")
            .bind(nick, "", email, info.mobile || "", "social:naver:" + nid, t, new Date().toISOString().slice(0, 10)).run();
        } else {
          await DB.prepare("UPDATE users SET token=? WHERE id=?").bind(t, u.id).run();
        }
        // 5) 앱으로 복귀 (세션 쿠키 세팅)
        return new Response(null, { status: 302, headers: { location: origin + "/#my", ...setSid(t) } });
      }

      /* --- 구글 --- */
      if (provider === "google") {
        const KEY = env.GOOGLE_CLIENT_ID, SECRET = env.GOOGLE_CLIENT_SECRET;
        if (!KEY || !SECRET) return json({ error: "no-key", hint: "환경변수 GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET 미설정" }, { status: 503 });

        // 1) 로그인 시작 - 구글 동의 화면으로 보냄
        if (!code) {
          const auth = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${KEY}&redirect_uri=${encodeURIComponent(redirect)}&response_type=code&scope=${encodeURIComponent("openid email profile")}&prompt=select_account`;
          return Response.redirect(auth, 302);
        }

        // 2) code → 토큰
        const form = new URLSearchParams({ grant_type: "authorization_code", client_id: KEY, client_secret: SECRET, redirect_uri: redirect, code });
        const tr = await fetch("https://oauth2.googleapis.com/token", {
          method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body: form
        });
        const tj = await tr.json();
        if (!tj.access_token) return json({ error: "token-failed", detail: tj }, { status: 400 });

        // 3) 사용자 정보
        const ur = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", { headers: { authorization: "Bearer " + tj.access_token } });
        const uj = await ur.json();
        const gid = String(uj.sub || "");
        const email = (uj.email || `google_${gid}@social.cppipilates.com`).toLowerCase();
        const nick = uj.name || "구글회원";

        // 4) 회원 생성 또는 로그인 (이메일 기준 연동)
        let u = await DB.prepare("SELECT * FROM users WHERE email=?").bind(email).first();
        const t = tok();
        if (!u) {
          await DB.prepare("INSERT INTO users(nameKo,nameEn,email,phone,pw,grade,token,joined) VALUES(?,?,?,?,?,1,?,?)")
            .bind(nick, "", email, "", "social:google:" + gid, t, new Date().toISOString().slice(0, 10)).run();
        } else {
          await DB.prepare("UPDATE users SET token=? WHERE id=?").bind(t, u.id).run();
        }
        // 5) 앱으로 복귀 (세션 쿠키 세팅)
        return new Response(null, { status: 302, headers: { location: origin + "/#my", ...setSid(t) } });
      }

      return json({ error: "unknown-provider", provider }, { status: 400 });
    }

    return json({ error: "not-found" }, { status: 404 });
  } catch (e) {
    return json({ error: String(e && e.message || e) }, { status: 500 });
  }
}
