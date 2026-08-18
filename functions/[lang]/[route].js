/* 다국어 SEO 페이지 - /en/about, /ja/about, /zh/about, /zh-hant/about ... */
import { respond, langFromSeg } from "../_seo.js";

export async function onRequest(context) {
  const seg = String(context.params.lang || "");
  const route = String(context.params.route || "");
  /* URL 세그먼트(zh-hant)를 내부 로케일 키(zh-Hant)로 변환한다. */
  const lang = langFromSeg(seg);
  if (!lang || lang === "ko") return context.next();
  /* 언어별 홈은 /en/ 처럼 index 로 처리한다. /en/home 중복을 막는다. */
  if (route === "home") return context.next();
  const res = respond(lang, route);
  return res || context.next();
}
