/* ==================================================================
   앱 경로 진입점 (모든 화면 경로를 한 곳에서 처리)

   /curriculum          한국어 - 본문이 들어간 앱 셸
   /en/curriculum       영어   - 〃
   /zh-hant/curriculum  번체   - 앱 번역 전이라 독립 정적 페이지
   /lecture/spine       하위 경로 - 앱 셸
   /my  /checkout       SEO 콘텐츠 없는 화면 - 앱 셸 (새로고침 404 방지)

   서버가 본문을 먼저 내려주므로 자바스크립트를 실행하지 않는 AI 크롤러도
   내용을 읽을 수 있고, 사람에게는 같은 URL 에서 앱이 부팅해 화면을 대체한다.
================================================================== */
import { respondApp, respondShell, respond, langFromSeg,
         CONTENT, APP_LANGS, APP_ROUTES } from "./_seo.js";

/* ------------------------------------------------------------------
   URL 정규화 - 2026-08-23 GSC 색인 리포트 대응

   리포트에서 확인된 사실
     · www.cppipilates.com 이 apex 와 별개 사이트로 크롤되고 있었다.
       canonical 태그는 힌트일 뿐이라 구글이 /curriculum 의 표준을 www 로
       바꿔 선택했다. 크롤 예산이 두 호스트로 쪼개졌다.
     · 존재하지 않는 경로가 404 가 아니라 200 으로 앱 셸을 반환했다.
       구 Wix 사이트의 /post/... /challenge-page/... 가 전부 살아 있는
       것처럼 보였고, 어떤 쓰레기 URL도 홈과 같은 내용의 중복 페이지가 됐다.
     · /courses/ 처럼 끝에 슬래시가 붙은 변형, /ja 처럼 언어 루트에서
       슬래시가 빠진 변형이 따로 크롤됐다.

   그래서 이 함수가 렌더 이전에 URL 을 한 가지 형태로 못박는다.
   ------------------------------------------------------------------ */

/* 구 Wix 사이트의 경로 접두어. 대응 페이지가 없으므로 410(영구 삭제)을 준다.
   410 은 404 와 달리 "다시 오지 마라"는 뜻이라 색인에서 더 빨리 빠진다. */
const GONE_PREFIX = ["post", "challenge-page", "blog", "service-page",
  "book-online", "plans-pricing", "forum", "group", "profile", "bookings-checkout"];

/* 구 경로 -> 현재 경로. 언어 접두어는 그대로 유지한다. */
const MOVED = { "pilates-workshop": "workshop", "ebooks": "guide" };

/* 구 ?lang= 파라미터 -> 경로 */
const QLANG = { ko: "/", en: "/en/", ja: "/ja/", zh: "/zh/", "zh-hant": "/zh-hant/", "zh-hans": "/zh/" };

const moved301 = (to) => new Response(null, {
  status: 301,
  headers: { location: to, "cache-control": "public, max-age=3600" },
});

/* 사람에게 보여줄 404. 검색엔진에는 색인 대상이 아님을 명시한다. */
function notFound(status) {
  const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,follow">
<title>페이지를 찾을 수 없습니다 | CPPI 한국 필라테스 교육협회</title>
<style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#FFFBF7;color:#241C18;font-family:Pretendard,'Malgun Gothic',sans-serif;text-align:center;padding:24px}
a{display:inline-block;margin-top:18px;background:#F15A22;color:#fff;padding:12px 22px;border-radius:100px;text-decoration:none;font-weight:700}</style>
</head><body><div>
<p style="font-size:13px;letter-spacing:.14em;color:#9A8478;margin:0 0 8px">CPPI KOREA</p>
<h1 style="font-size:22px;margin:0 0 10px">페이지를 찾을 수 없습니다</h1>
<p style="font-size:14px;color:#6E5B50;margin:0">주소가 바뀌었거나 삭제된 페이지입니다.</p>
<a href="/">홈으로 이동</a>
</div></body></html>`;
  return new Response(html, {
    status,
    headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "public, max-age=300" },
  });
}

export async function onRequest(context) {
  const url = new URL(context.request.url);

  /* 1) www -> apex 301.
     사이트를 하나로 합친다. 이것 하나가 색인 문제의 대부분을 차지했다. */
  if (url.hostname.toLowerCase().startsWith("www.")) {
    const u = new URL(url);
    u.hostname = url.hostname.slice(4);
    return moved301(u.toString());
  }

  const segs = url.pathname.split("/").filter(Boolean);
  if (segs[0] === "api") return context.next();       // 회원·결제 API
  if (segs.length && segs[segs.length - 1].includes(".")) return context.next(); // 정적 자산

  /* 2) 구 ?lang= 파라미터 -> 경로로 301 */
  const q = (url.searchParams.get("lang") || "").toLowerCase();
  if (q && QLANG[q] && !segs.length) {
    const u = new URL(url);
    u.pathname = QLANG[q];
    u.searchParams.delete("lang");
    return moved301(u.toString());
  }

  if (!segs.length) return context.next();            // "/" 는 정적 index.html

  /* 언어 접두어 분리 */
  let lang = "ko", prefix = "";
  const seg = langFromSeg(segs[0]);
  if (seg) { lang = seg; prefix = "/" + segs.shift(); }

  const route = segs[0] || "home";

  /* 3) 구 사이트 잔재 정리 */
  if (GONE_PREFIX.includes(route)) return notFound(410);
  if (MOVED[route]) return moved301(new URL(prefix + "/" + MOVED[route], url).toString());
  if (segs[0] === "home") return moved301(new URL((prefix || "") + "/", url).toString());

  /* 4) 슬래시 정규화 - 언어 루트만 "/" 로 끝나고 나머지는 붙이지 않는다.
     사이트맵·canonical 과 정확히 같은 형태로 맞춘다. */
  const want = segs.length ? prefix + "/" + segs.join("/") : (prefix || "") + "/";
  if (url.pathname !== want) {
    const u = new URL(url);
    u.pathname = want;
    return moved301(u.toString());
  }

  /* 5) 정상 경로 렌더 */
  if (CONTENT[route]) {
    if (APP_LANGS.includes(lang)) {
      const res = await respondApp(context, lang, route);
      if (res) return res;
    }
    const res = respond(lang, route);                 // 앱 미지원 언어
    if (res) return res;
  }

  if (APP_LANGS.includes(lang) && APP_ROUTES.includes(route)) {
    const res = await respondShell(context);
    if (res) return res;
  }

  /* 6) 그 외에는 진짜 404 를 준다.
     예전에는 여기서 context.next() 로 빠져 앱 셸이 200 으로 나갔다.
     그 결과 아무 URL 이나 홈과 같은 내용의 중복 페이지가 되었고,
     구 Wix 주소들이 살아 있는 것처럼 크롤됐다. */
  return notFound(404);
}
