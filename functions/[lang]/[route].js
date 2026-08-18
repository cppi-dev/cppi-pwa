/* 다국어 SEO 페이지 - /en/about, /ja/about, /zh/about ... */
import { respond, LANGS } from "../_seo.js";

export async function onRequest(context) {
  const lang = String(context.params.lang || "");
  const route = String(context.params.route || "");
  if (!LANGS.includes(lang) || lang === "ko") return context.next();
  const res = respond(lang, route);
  return res || context.next();
}
