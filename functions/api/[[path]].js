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

/* ------------------------------------------------------------------
   메일 발송 - Resend API
   Cloudflare Workers 는 SMTP 를 쓸 수 없어 HTTP API 방식을 쓴다.
   환경변수 RESEND_KEY 가 없으면 조용히 건너뛴다(사이트는 정상 동작).
     RESEND_KEY   : Resend API 키
     MAIL_FROM    : 발신 주소 (예: CPPI <no-reply@cppipilates.com>) - 도메인 인증 필요
     NOTIFY_TO    : 상담신청 알림을 받을 주소 (예: allmovements@naver.com)
------------------------------------------------------------------ */
async function sendMail(env, { to, subject, html, replyTo }) {
  if (!env.RESEND_KEY) return { skipped: "no-key" };
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${env.RESEND_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({
      from: env.MAIL_FROM || "CPPI <onboarding@resend.dev>",
      to: Array.isArray(to) ? to : [to],
      subject, html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });
  if (!r.ok) return { error: await r.text().catch(() => "send-failed") };
  return await r.json().catch(() => ({ ok: 1 }));
}

const esc = (v) => String(v ?? "").replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

/* 뉴스레터 수신 동의자 등록 (중복 시 무시) */
async function addSubscriber(DB, { email, name, source }) {
  if (!email) return;
  const t = (crypto.randomUUID() + crypto.randomUUID()).replace(/-/g, "");
  await DB.prepare(
    "INSERT INTO subscribers(email,name,source,unsubToken,status,at) VALUES(?,?,?,?,'active',?) " +
    "ON CONFLICT(email) DO UPDATE SET status='active', name=COALESCE(excluded.name,name)"
  ).bind(email.toLowerCase().trim(), name || "", source || "manual", t,
         new Date().toISOString().slice(0, 16).replace("T", " ")).run();
}

/* 뉴스레터 메일 템플릿 - 브랜드 톤(오렌지 #F15A22) 유지 + 수신거부 링크 필수 포함 */
function newsletterHtml(subject, bodyHtml, unsubToken) {
  return `<div style="margin:0;padding:24px 12px;background:#FFFBF7">
  <div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #F0E1D5;border-radius:16px;overflow:hidden;font-family:'Malgun Gothic',sans-serif;color:#241C18;line-height:1.8">
    <div style="padding:20px 24px;border-bottom:1px solid #F0E1D5">
      <img src="https://cppipilates.com/logo_header.png" alt="CPPI 한국 필라테스 교육협회" style="height:26px">
    </div>
    <div style="padding:28px 24px">
      <h1 style="font-size:21px;margin:0 0 18px;color:#241C18">${esc(subject)}</h1>
      <div style="font-size:15px;color:#3b302a">${bodyHtml || ""}</div>
    </div>
    <div style="padding:18px 24px;border-top:1px solid #F0E1D5;background:#FFFBF7;font-size:12px;color:#6E5B50">
      <b>CPPI 한국필라테스교육협회</b><br>
      대표 박은주 · 고유번호 201-82-74381<br>
      문의 010-4894-4292 · allmovements@naver.com<br>
      <a href="https://cppipilates.com" style="color:#F15A22">cppipilates.com</a>
      <div style="margin-top:12px;color:#9b8b80">
        본 메일은 수신 동의하신 분께 발송되었습니다.
        <a href="https://cppipilates.com/api/unsub?t=${unsubToken}" style="color:#6E5B50">수신거부</a>
      </div>
    </div>
  </div></div>`;
}

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
    /* ---- 수강 권한 (결제 완료된 항목만) ---- */
    if (path === "entitlements") {
      if (!meRow) return json({ items: [] });
      const r = await DB.prepare("SELECT DISTINCT type FROM orders WHERE email=? AND status='완료'").bind(meRow.email).all();
      return json({ items: r.results.map(o => o.type).filter(Boolean) });
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
      const at = new Date().toISOString().slice(0, 16).replace("T", " ");
      await DB.prepare("INSERT INTO leads(name,email,phone,birth,region,interest,news,at) VALUES(?,?,?,?,?,?,?,?)")
        .bind(body.name, body.email, body.phone, body.birth || "", body.region || "", body.interest, body.news ? 1 : 0, at).run();

      /* 뉴스레터 수신에 동의했으면 구독자로 등록 */
      if (body.news) await addSubscriber(DB, { email: body.email, name: body.name, source: "lead" }).catch(() => {});

      /* 관리자 알림 메일 - 실패해도 접수는 성공 처리한다 */
      context.waitUntil(sendMail(env, {
        to: env.NOTIFY_TO || "allmovements@naver.com",
        replyTo: body.email,
        subject: `[CPPI 상담신청] ${body.name} · ${body.interest || ""}`,
        html: `<div style="font-family:sans-serif;line-height:1.8">
          <h2 style="color:#F15A22;margin:0 0 12px">새 상담 신청</h2>
          <table style="border-collapse:collapse;font-size:14px">
            <tr><td style="padding:4px 12px 4px 0;color:#888">이름</td><td><b>${esc(body.name)}</b></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888">연락처</td><td>${esc(body.phone)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888">이메일</td><td>${esc(body.email)}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888">생년</td><td>${esc(body.birth) || "-"}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888">지역</td><td>${esc(body.region) || "-"}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888">관심 과정</td><td><b>${esc(body.interest)}</b></td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888">뉴스레터</td><td>${body.news ? "동의" : "미동의"}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888">접수 시각</td><td>${esc(at)}</td></tr>
          </table>
          <p style="margin-top:16px"><a href="https://cppipilates.com/admin" style="background:#F15A22;color:#fff;padding:10px 18px;border-radius:100px;text-decoration:none">관리자 콘솔에서 보기</a></p>
        </div>`,
      }).catch(() => {}));

      /* 신청자에게 접수 확인 메일 */
      if (body.email) context.waitUntil(sendMail(env, {
        to: body.email,
        subject: "[CPPI] 상담 신청이 접수되었습니다",
        html: `<div style="font-family:sans-serif;line-height:1.8">
          <h2 style="color:#F15A22;margin:0 0 12px">상담 신청이 접수되었습니다</h2>
          <p>${esc(body.name)} 님, CPPI 한국필라테스교육협회입니다.<br>
          신청해 주신 <b>${esc(body.interest)}</b> 관련 상담은 24시간 내에 연락드리겠습니다.</p>
          <p style="color:#6E5B50;font-size:14px">문의 010-4894-4292 · allmovements@naver.com</p>
        </div>`,
      }).catch(() => {}));

      return json({ ok: 1 });
    }

    /* ---- 뉴스레터 ---- */
    if (path === "subscribe" && request.method === "POST") {
      await addSubscriber(DB, { email: body.email, name: body.name, source: "manual" });
      return json({ ok: 1 });
    }
    /* 수신거부 - 메일 본문 링크로 접근 (정보통신망법상 필수) */
    if (path === "unsub") {
      const t = url.searchParams.get("t") || "";
      if (t) await DB.prepare("UPDATE subscribers SET status='unsub' WHERE unsubToken=?").bind(t).run();
      return new Response(
        `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8"><title>수신거부 완료</title></head>
         <body style="font-family:sans-serif;text-align:center;padding:80px 20px;background:#FFFBF7;color:#241C18">
         <h2 style="color:#F15A22">수신거부가 완료되었습니다</h2>
         <p>앞으로 CPPI 뉴스레터를 보내지 않습니다.</p>
         <p><a href="https://cppipilates.com/" style="color:#F15A22">cppipilates.com</a></p></body></html>`,
        { headers: { "content-type": "text/html; charset=UTF-8" } });
    }

    /* ---- 관리자 ---- */
    if (path.startsWith("admin/")) {
      const pass = body.pass || url.searchParams.get("pass");
      /* 관리자 비밀번호는 Cloudflare 환경변수 ADMIN_PASS 에만 존재한다.
         클라이언트 코드에는 어떤 형태로도 남기지 않는다. */
      if (!env.ADMIN_PASS) return json({ error: "no-admin-pass", hint: "Cloudflare 환경변수 ADMIN_PASS 미설정" }, { status: 503 });
      if (pass !== env.ADMIN_PASS) return json({ error: "auth" }, { status: 401 });

      /* 로그인 확인 전용 - 비밀번호가 맞는지만 알려준다 */
      if (path === "admin/check") return json({ ok: 1 });
      if (path === "admin/users") { const r = await DB.prepare("SELECT id,nameKo,email,phone,grade FROM users ORDER BY id DESC").all(); return json({ users: r.results }); }
      if (path === "admin/orders") { const r = await DB.prepare("SELECT * FROM orders ORDER BY id DESC").all(); return json({ orders: r.results }); }
      if (path === "admin/leads") { const r = await DB.prepare("SELECT * FROM leads ORDER BY id DESC").all(); return json({ leads: r.results }); }
      if (path === "admin/grade" && request.method === "POST") { await DB.prepare("UPDATE users SET grade=? WHERE id=?").bind(body.grade, body.id).run(); return json({ ok: 1 }); }

      /* 구독자 목록 */
      if (path === "admin/subs") {
        const r = await DB.prepare("SELECT id,email,name,source,status,at FROM subscribers ORDER BY id DESC").all();
        return json({ subs: r.results });
      }
      /* 뉴스레터 목록 */
      if (path === "admin/news") {
        const r = await DB.prepare("SELECT id,subject,status,sentAt,sentCount,createdAt FROM newsletters ORDER BY id DESC").all();
        return json({ news: r.results });
      }
      /* 뉴스레터 한 건 불러오기(수정용) */
      if (path === "admin/news-get") {
        const r = await DB.prepare("SELECT * FROM newsletters WHERE id=?").bind(url.searchParams.get("id")).first();
        return json({ item: r });
      }
      /* 뉴스레터 저장(임시저장 · 수정) */
      if (path === "admin/news-save" && request.method === "POST") {
        const now = new Date().toISOString().slice(0, 16).replace("T", " ");
        if (body.id) {
          await DB.prepare("UPDATE newsletters SET subject=?, bodyHtml=? WHERE id=?")
            .bind(body.subject, body.bodyHtml, body.id).run();
          return json({ ok: 1, id: body.id });
        }
        const r = await DB.prepare("INSERT INTO newsletters(subject,bodyHtml,status,createdAt) VALUES(?,?,'draft',?)")
          .bind(body.subject, body.bodyHtml, now).run();
        return json({ ok: 1, id: r.meta.last_row_id });
      }
      /* 테스트 발송 - 지정한 주소 한 곳으로만 보낸다 */
      if (path === "admin/news-test" && request.method === "POST") {
        const res = await sendMail(env, {
          to: body.to || env.NOTIFY_TO || "allmovements@naver.com",
          subject: "[테스트] " + body.subject,
          html: newsletterHtml(body.subject, body.bodyHtml, "TEST-TOKEN"),
        });
        return json({ ok: !res.error, detail: res });
      }
      /* 실제 발송 - 구독중(active) 전원에게 개별 발송 */
      if (path === "admin/news-send" && request.method === "POST") {
        if (!env.RESEND_KEY) return json({ error: "no-mail-key", hint: "Cloudflare 환경변수 RESEND_KEY 를 설정하세요." }, { status: 400 });
        const row = await DB.prepare("SELECT * FROM newsletters WHERE id=?").bind(body.id).first();
        if (!row) return json({ error: "not-found" }, { status: 404 });
        const subs = await DB.prepare("SELECT email,unsubToken FROM subscribers WHERE status='active'").all();
        let n = 0;
        for (const u of subs.results) {
          const r = await sendMail(env, {
            to: u.email, subject: row.subject,
            html: newsletterHtml(row.subject, row.bodyHtml, u.unsubToken),
          });
          if (!r.error) n++;
        }
        const now = new Date().toISOString().slice(0, 16).replace("T", " ");
        await DB.prepare("UPDATE newsletters SET status='sent', sentAt=?, sentCount=? WHERE id=?").bind(now, n, body.id).run();
        return json({ ok: 1, sent: n, total: subs.results.length });
      }
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
