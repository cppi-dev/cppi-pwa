/* ------------------------------------------------------------
   CPPI 구조화 데이터 사전 검증 게이트
   실행: node tools/schema-audit.mjs        (저장소 루트에서)

   왜 필요한가 - 2026-08 GSC 이슈 2건이 모두 "배포 후 메일로 알게 된" 오류였다.
     · 08-22  ProfilePage 'mainEntity' 누락        (필수 필드 미출력)
     · 08-23  ProfilePage 'dateModified' datetime 오류 (Date 를 DateTime 자리에)
   node --check 는 문법만 본다. 스키마 계약은 못 본다.
   이 스크립트가 그 사이를 메운다. 배포 전 반드시 통과시킬 것.

   package.json 이 없어 functions/_seo.js 가 CommonJS 로 해석되므로
   data: URL 로 ESM 강제 로드한다. 임시 파일을 만들지 않는다.
   ------------------------------------------------------------ */
import fs from "node:fs";

const SEO = "functions/_seo.js";
const src = fs.readFileSync(SEO, "utf8");
const m = await import("data:text/javascript;base64," + Buffer.from(src).toString("base64"));

const LANGS = ["ko", "en", "ja", "zh", "zh-Hant"];
const ROUTES = Object.keys(m.CONTENT);

const errors = [];
const notes = [];
const fail = (msg) => errors.push(msg);

/* --- 1. 날짜 형식 -------------------------------------------------
   구글은 dateModified / dateCreated / datePublished / uploadDate 를
   DateTime(시각 + 시간대 오프셋 포함)으로 요구한다. 날짜만 있으면 반려된다. */
const DATETIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
const DATE_OK  = /^\d{4}(-\d{2}(-\d{2})?)?$/;
const NEED_DATETIME = ["dateModified", "dateCreated", "datePublished", "uploadDate"];
const DATE_KEYS = [...NEED_DATETIME, "startDate", "endDate", "validFrom", "priceValidUntil", "foundingDate"];

/* --- 2. 리치결과 필수 필드 계약 ------------------------------------
   구글 문서 기준. 새 스키마를 붙이면 여기에 계약을 추가할 것. */
const REQUIRED = {
  ProfilePage: ["mainEntity"],
  Course:      ["name", "description", "provider"],
  FAQPage:     ["mainEntity"],
  BreadcrumbList: ["itemListElement"],
};
const REQUIRED_NESTED = {
  "ProfilePage.mainEntity": ["name", "@type"],
};

function nodesOf(g) {
  if (Array.isArray(g)) return g;
  if (g && g["@graph"]) return g["@graph"];
  return g ? [g] : [];
}
const typesOf = (n) => (Array.isArray(n["@type"]) ? n["@type"] : [n["@type"]]).filter(Boolean);

function walkDates(o, path, where) {
  if (o === null || typeof o !== "object") return;
  for (const [k, v] of Object.entries(o)) {
    if (DATE_KEYS.includes(k) && typeof v === "string") {
      if (NEED_DATETIME.includes(k)) {
        if (!DATETIME.test(v)) fail(`[날짜] ${where} ${path}.${k} = "${v}" - DateTime(시간대 포함) 이어야 한다`);
      } else if (!DATETIME.test(v) && !DATE_OK.test(v)) {
        fail(`[날짜] ${where} ${path}.${k} = "${v}" - ISO 8601 이 아니다`);
      }
    }
    walkDates(v, path + "." + k, where);
  }
}

let rendered = 0;
for (const lang of LANGS) {
  for (const route of ROUTES) {
    const where = `${lang}/${route}`;
    let graph;
    try {
      graph = JSON.parse(JSON.stringify(m.jsonLD(lang, route)));   // 순환참조·직렬화 불가 값 검출
      m.ssrBody(lang, route);
      m.pageHTML(lang, route);
      rendered++;
    } catch (e) {
      fail(`[렌더] ${where} - ${e.message}`);
      continue;
    }

    walkDates(graph, "", where);

    for (const node of nodesOf(graph)) {
      for (const t of typesOf(node)) {
        for (const req of REQUIRED[t] || []) {
          if (node[req] === undefined || node[req] === null || node[req] === "")
            fail(`[필수] ${where} ${t}.${req} 누락`);
        }
        for (const [key, fields] of Object.entries(REQUIRED_NESTED)) {
          const [pt, child] = key.split(".");
          if (t !== pt || !node[child]) continue;
          for (const f of fields)
            if (node[child][f] === undefined) fail(`[필수] ${where} ${t}.${child}.${f} 누락`);
        }
      }
      /* 빈 값이 스키마에 새어 나가는 것을 막는다 - 코드 설계상 빈 값은 빠져야 한다 */
      for (const [k, v] of Object.entries(node))
        if (v === "" || (Array.isArray(v) && v.length === 0))
          notes.push(`[빈값] ${where} ${typesOf(node)[0]}.${k} 가 비어 있다`);
    }
  }
}

/* --- 3. 사이트맵 · 라우트 정합 -------------------------------------- */
const locs = (m.sitemapXML().match(/<loc>/g) || []).length;
const expected = (ROUTES.length - (m.THIN_ROUTES || []).length) * LANGS.length;
if (locs !== expected) fail(`[사이트맵] URL ${locs}개 - 기대값 ${expected}개 (라우트 ${ROUTES.length} × 언어 ${LANGS.length} - THIN ${(m.THIN_ROUTES||[]).length})`);

/* --- 출력 --------------------------------------------------------- */
console.log(`라우트 ${ROUTES.length} × 언어 ${LANGS.length} = ${rendered}페이지 렌더 완료`);
console.log(`사이트맵 URL ${locs}개 / THIN_ROUTES ${JSON.stringify(m.THIN_ROUTES)}`);
if (notes.length) {
  console.log(`\n참고 ${[...new Set(notes)].length}건`);
  for (const n of [...new Set(notes)].slice(0, 20)) console.log("  " + n);
}
if (errors.length) {
  console.log(`\n실패 ${errors.length}건`);
  for (const e of [...new Set(errors)].slice(0, 40)) console.log("  " + e);
  console.log("\n배포하지 말 것.");
  process.exit(1);
}
console.log("\n전 항목 통과. 배포 가능.");
