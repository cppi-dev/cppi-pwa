/* 한국어(기본) SEO 페이지 - /about, /founder, /curriculum ... */
import { respond } from "./_seo.js";

export async function onRequest(context) {
  const route = String(context.params.route || "");
  const res = respond("ko", route);
  /* 등록된 SEO 경로가 아니면 정적 자산(app.js, 이미지, 영상 등)으로 통과시킨다.
     이 처리가 없으면 Functions가 모든 최상위 경로를 가로채 앱이 로드되지 않는다. */
  return res || context.next();
}
