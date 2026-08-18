/* 언어별 홈 - /en/, /ja/, /zh/, /zh-hant/
   기존에는 홈의 hreflang 이 "?lang=en" 같은 파라미터 URL 을 가리켰는데,
   그 URL 들의 canonical 이 "/" 라서 구글이 hreflang 세트를 통째로 폐기할 수 있었다.
   언어마다 실제 홈 경로를 두어 canonical 과 hreflang 을 일치시킨다. */
import { respond, langFromSeg } from "../_seo.js";

export async function onRequest(context) {
  const seg = String(context.params.lang || "");
  const lang = langFromSeg(seg);
  if (!lang || lang === "ko") return context.next();
  const res = respond(lang, "home");
  return res || context.next();
}
