/* 사이트맵 - 정적 sitemap.xml 대신 코드에서 생성한다.
   로케일(zh-Hant 등)이나 라우트를 추가하면 자동으로 반영된다. */
import { sitemapXML } from "./_seo.js";

export async function onRequest() {
  return new Response(sitemapXML(), {
    headers: {
      "content-type": "application/xml; charset=UTF-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
