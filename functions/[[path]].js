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

export async function onRequest(context) {
  const { pathname } = new URL(context.request.url);
  const segs = pathname.split("/").filter(Boolean);

  if (!segs.length) return context.next();      // "/" 는 정적 index.html
  if (segs[0] === "api") return context.next(); // 회원/결제 API 는 별도 함수

  let lang = "ko";
  const seg = langFromSeg(segs[0]);
  if (seg) { lang = seg; segs.shift(); }

  const route = segs[0] || "home";
  if (route.includes(".")) return context.next(); // 확장자가 있으면 정적 자산

  if (CONTENT[route]) {
    if (APP_LANGS.includes(lang)) {
      const res = await respondApp(context, lang, route);
      if (res) return res;
    }
    const res = respond(lang, route);   // 번체 등 앱 미지원 언어
    if (res) return res;
  }

  if (APP_LANGS.includes(lang) && APP_ROUTES.includes(route)) {
    const res = await respondShell(context);
    if (res) return res;
  }

  return context.next();
}
