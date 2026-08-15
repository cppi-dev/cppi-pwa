/* ============================================================
   CPPI 회원 서버와 별개 - 검색엔진/AI 크롤러(GEO)를 위한
   경로 기반 정적 랜딩 페이지 (예: /about, /founder ...)
   해시 앱(#about 등)의 실제 UX는 그대로 유지되며, 이 파일은
   /about 같은 "진짜 URL"로 접속했을 때 즉시 읽을 수 있는
   정적 HTML(제목/설명/본문 텍스트/구조화데이터)을 내려줍니다.
   ============================================================ */

const ORIGIN = "https://cppipilates.com";
const OG_IMG = ORIGIN + "/hero-poster.jpg";
const LOGO = ORIGIN + "/logo.png";

const CONTENT = {
  about: {
    title: "협회 소개 | CPPI 한국 필라테스 교육협회",
    desc: "감각이 아니라 근거로 가르치는 CPPI 한국 필라테스 교육협회 - EST.2016, 한국·캐나다·일본 글로벌 운영, 분당서울대병원 임상 기반 커리큘럼.",
    eyebrow: "ABOUT CPPI",
    h1: "감각이 아니라, 근거로 가르칩니다",
    lead: "한국필라테스교육협회 (CPPI Korea) · Certified Professional Pilates Instructor",
    blocks: [
      { h: "협회 개요", p: "EST. 2016 · 2년 집중개발로 교과정 완성 · 한국-캐나다-일본 글로벌 운영. 8개 정규 과정, 총 1,300여 페이지의 출판교재(9권+부교재)로 교육합니다." },
      { h: "동작 매뉴얼", p: "매트 53 · 리포머 79 · 캐딜락 62 · 체어 28 · 래더바렐 27 · 아크바렐 29 · 스파인코렉터 39 동작 + 배리에이션 · 모디피케이션 · 소도구 티칭." },
      { h: "타 단체와의 차별성", list: [
        "의료 임상 기반 - 분당서울대병원 · 보훈복지공단 척추&관절센터 임상경험 기반",
        "대학 검증 - 나사렛대학교 스포츠재활학부 강단 경력의 창립자 직강",
        "실무형 교육 - 배리에이션·모디피케이션, 창의적인 지도력과 재활 시퀀스 교육",
        "국제 운영 - 한국 · 캐나다 · 일본 교육 운영, 국제 자격 발급",
      ] },
    ],
    note: "인증 단체 - 한국필라테스교육협회 (CPPI Korea) · 고유번호 201-82-74381 (비영리)",
    cta: [["정규과정 알아보기", "/#curriculum"], ["박은주 교수 소개", "/founder"]],
    schema: { "@type": "AboutPage" },
  },
  founder: {
    title: "박은주 교수 - 파운더 | CPPI 한국 필라테스 교육협회",
    desc: "분당서울대병원 척추·관절센터 임상 경험과 나사렛대 강단 경력을 지닌 CPPI 창립자 박은주 교수의 전체 프로필.",
    eyebrow: "FOUNDER",
    h1: "박은주 교수",
    lead: "최상위 교육자 - 의료·대학이 검증한, 타협 없는 프로필을 요약 없이 공개합니다.",
    blocks: [
      { h: "주요경력", list: ["(현) 한국 필라테스 교육협회장", "(현) 경기도 배구협회 이사", "(현) 리커버링 재활 필라테스 마스터", "(현) 대한 간호정우회 / 간호 Q&A협회 정회원", "(현) 대한 비만학회 정회원", "(전) 나사렛대학교 스포츠재활학과 겸임교수", "(전) 서경대학교 예술교육원 필라테스과정 원장", "(전) 분당 서울대병원 마취통증의학과", "(전) 한국 보훈복지공단 척추&관절센터"] },
      { h: "주요연수 - 서울대병원", list: ["서울대병원 중환자 전문간호연수", "서울대병원 정형외과 수술후 재활과정", "서울대병원 당뇨 · 고혈압 · 골다공증 관리", "서울대병원 노인간호 및 재활과정"] },
      { h: "주요자격", list: ["STOTT PILATES : IMP / IR / ICCB / AMP / AR / RMR1", "ISP (Injury Special Population) 2009~2011", "PMA : Certification Education 2012", "BBU Creating Length & Strength Certification", "BBU Scoliosis Spiral Certification", "BBU : Innovate Mate Sequences for Motor control", "STOTT Pre-Natal Pilates On the Reformer", "POWER PLATE Master Trainer Certification 2022", "RECOVERING Master Trainer Certification 2022"] },
      { h: "활동", p: "IDEA 컨벤션 · CKLZ 피트니스 컨벤션 초청 프레젠터. K-POP 아티스트(가희·JOO)와 배우 황우슬혜 전담 인스트럭터. 2009년부터 강사 교육에 매진." },
    ],
    cta: [["박은주 교수 직강 - 교육안내 보기", "/courses"]],
    schema: { "@type": "ProfilePage" },
  },
  curriculum: {
    title: "정규과정 에센셜 커리큘럼 | CPPI 한국 필라테스 교육협회",
    desc: "기능해부학과 의학적 근거 위에 설계된 CPPI 정규과정 8대 커리큘럼 - 매트·리포머·캐딜락·체어·바렐 시리즈 상세 안내.",
    eyebrow: "CURRICULUM",
    h1: "CPPI 정규과정 에센셜 커리큘럼",
    lead: "모든 과정은 기능해부학과 의학적 근거 위에 설계되었습니다.",
    blocks: [
      { h: "8대 커리큘럼", list: [
        "1. 필라테스 기능 해부학 - 10시간",
        "2. 베이직 프린서플 10가지 / 5가지 움직임 원칙 - 10시간",
        "3. 체형, 자세 및 움직임 평가 - 5시간",
        "4. 필라테스 매트 - 25시간",
        "5. 리포머 - 20~25시간",
        "6. 캐딜락 - 20~25시간",
        "7. 스태빌리티 체어 - 10시간",
        "8. 래더바렐 및 바렐 시리즈 - 10시간",
      ] },
    ],
    cta: [["과목별 교재 미리보기 - 앱에서 보기", "/#curriculum"], ["상담 신청", "/#apply"]],
    schema: { "@type": "Course", name: "CPPI 필라테스 전문강사 국제자격증 통합과정" },
  },
  courses: {
    title: "교육 안내 - CPPI 필라테스 자격과정 | CPPI 한국 필라테스 교육협회",
    desc: "이론+실기+티칭실습 중심의 CPPI 국제 필라테스 강사 자격과정 안내. 마스터 강사진, 수료 혜택, 모집 정보.",
    eyebrow: "EDUCATION",
    h1: "CPPI 필라테스 교육안내",
    lead: "CPPI Pilates Certification Full Course",
    blocks: [
      { h: "교육 방식", p: "이론 강의 + 실기 체득 + 교육생 상호 인스트럭팅(티칭 실습) 반복 - 레슨 실무 중심." },
      { h: "수료 혜택 · 국제자격증", p: "국제자격증 발급 · L3 정회원 승급 · 수료강사 명단 등재 · 활동 연계 지원." },
      { h: "모집 · 수강료", p: "기수별 모집 - 일정과 수강료는 상담 시 안내드립니다. 사업 대행: 씨앤티파트너스 (C&T Partners) · 842-09-02365" },
      { h: "졸업생 성과", p: "타 아카데미에서 마스터(교육강사)로 활동하는 수료생 다수 배출 - 56기+ 명단은 수료강사 명단에서 확인할 수 있습니다." },
    ],
    cta: [["박은주 교수 소개", "/founder"], ["상담 신청", "/#apply"]],
    schema: { "@type": "Course", name: "CPPI Pilates Certification Full Course" },
  },
  workshop: {
    title: "전문 강사 워크숍 | CPPI 한국 필라테스 교육협회",
    desc: "현직 강사·재활 종사자를 위한 단기 심화 실습 워크숍 - 리커버링 재활, 임산부, 소도구 필라테스 과정.",
    eyebrow: "WORKSHOP",
    h1: "전문 강사 워크숍",
    lead: "현직 강사 · 재활 종사자를 위한 단기 심화 실습.",
    blocks: [
      { h: "운영 워크숍", list: [
        "'리커버링 재활 필라테스' 원데이 자격과정 - 8시간",
        "임산부 필라테스 전문가 과정",
        "소도구 필라테스 전문가 과정 - 16시간 (과목별 4시간, 폼롤러 · 써클 · 미니볼 · BOSU)",
      ] },
    ],
    cta: [["워크숍 신청 · 일정 문의 (Instagram)", "https://www.instagram.com/cppi.pilates"]],
    schema: { "@type": "EducationEvent" },
  },
  master: {
    title: "마스터 강사진 | CPPI 한국 필라테스 교육협회",
    desc: "엄격한 심화교육과 프레젠터 스피치 과정을 거친 CPPI 마스터 인스트럭터를 소개합니다.",
    eyebrow: "MASTER INSTRUCTORS",
    h1: "마스터 강사",
    lead: "엄격한 기준의 심화교육과 프레젠터 스피치 과정을 거친 CPPI 교육강사입니다.",
    blocks: [
      { h: "마스터 인스트럭터", list: ["김민서 (Min-seo KIM)", "이청아 (Cheong-ah LEE)", "손희정 (Hee-jung SOHN)", "김휘향 (Hwy-hyang KIM)"] },
    ],
    note: "마스터 인스트럭터는 심화교육 · 스피치 교육 · 심화과정을 수료하고 실제 강의에서 교육을 담당합니다.",
    cta: [["교육 안내 보기", "/courses"]],
    schema: { "@type": "CollectionPage" },
  },
  stories: {
    title: "수료강사 후기 | CPPI 한국 필라테스 교육협회",
    desc: "CPPI와 함께 성장한 수료강사들의 생생한 후기와 56기 이상의 수료강사 명단.",
    eyebrow: "STORIES",
    h1: "수료강사들의 이야기",
    lead: "CPPI와 함께 성장한 수료강사들의 생생한 이야기입니다.",
    blocks: [
      { h: "수료강사 명단", p: "56기 이상의 수료강사가 CPPI 정규과정을 마쳤습니다. 전체 후기와 기수별 명단은 앱에서 확인하실 수 있습니다." },
    ],
    cta: [["후기·명단 전체 보기 - 앱에서 보기", "/#stories"]],
    schema: { "@type": "CollectionPage" },
  },
  global: {
    title: "글로벌 운영 - 한국·캐나다·일본 | CPPI 한국 필라테스 교육협회",
    desc: "CPPI는 한국-캐나다-일본에서 교육을 운영합니다. 지역별 교육센터와 운영 현황 안내.",
    eyebrow: "GLOBAL",
    h1: "CPPI는 한국 - 캐나다 - 일본에서 교육을 운영합니다",
    blocks: [
      { h: "대한민국 KOREA", p: "분당 · 서울 · 김포 교육센터 운영. 정규과정 · 워크숍 · 자격검정 진행." },
      { h: "캐나다 CANADA", p: "밴쿠버 - 팬데믹 기간에도 온라인 병행으로 교육을 지속했습니다." },
      { h: "일본 JAPAN", p: "도쿄 - 국제 자격 대응 인스트럭터 양성 과정 운영." },
    ],
    cta: [["상담 신청", "/#apply"]],
    schema: { "@type": "AboutPage" },
  },
  learn: {
    title: "온라인 강의 | CPPI 한국 필라테스 교육협회",
    desc: "정규과정 온라인 강의, 척추 필라테스 어프로치, 무브먼트 테라피 등 CPPI 복습 영상 안내.",
    eyebrow: "ONLINE LECTURES",
    h1: "온라인 강의",
    lead: "과정을 선택하면 강의 목록이 표시됩니다.",
    blocks: [
      { h: "정규과정 온라인 강의", p: "8개 과목 · 등록자/수료자 전용 · 비회원 5분 하이라이트 제공." },
      { h: "척추 필라테스 어프로치", p: "이론 1강 + 실기 2강 · 결제 후 시청." },
      { h: "CPPI 필라테스 무브먼트 테라피", p: "경추 · 견관절 · 척추 · 골반 - 결제 후 시청 · 수료증 온라인 발급." },
    ],
    cta: [["강의 목록 전체 보기 - 앱에서 보기", "/#learn"]],
    schema: { "@type": "CollectionPage" },
  },
  store: {
    title: "스토어 - 교재·수강권 | CPPI 한국 필라테스 교육협회",
    desc: "CPPI 출판교재 9권, 전자책, 수강권을 미리보기와 함께 만나보세요.",
    eyebrow: "STORE",
    h1: "스토어",
    lead: "모든 교재는 목차와 본문 10페이지를 미리 볼 수 있습니다.",
    blocks: [
      { h: "정규과정 교재 (9권)", list: [
        "필라테스 기능해부학 - 238p", "필라테스 기본원리 - 80p", "필라테스 더 매트 - 160p",
        "리포머 - 306p", "캐딜락 - 368p", "스태빌리티 체어 - 202p",
        "래더 바렐 - 76p", "아크 바렐 - 79p", "스파인 코렉터 - 108p",
      ] },
      { h: "전자책 · 영상 수강권", p: "필라테스 전문 지침서(무브먼트 테라피 4종) 전자책과, 척추 어프로치·무브먼트 테라피 영상 수강권을 구매하실 수 있습니다." },
    ],
    cta: [["미리보기 · 구매 - 앱에서 보기", "/#store"]],
    schema: { "@type": "CollectionPage" },
  },
};

const NAV = [["협회소개", "/about"], ["파운더", "/founder"], ["커리큘럼", "/curriculum"], ["교육안내", "/courses"], ["워크숍", "/workshop"], ["마스터", "/master"], ["후기", "/stories"], ["글로벌", "/global"], ["온라인강의", "/learn"], ["스토어", "/store"]];

function esc(s) { return String(s ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m])); }

function blockHTML(b) {
  let out = `<div class="blk">`;
  if (b.h) out += `<h2>${esc(b.h)}</h2>`;
  if (b.p) out += `<p>${esc(b.p)}</p>`;
  if (b.list) out += `<ul>${b.list.map(li => `<li>${esc(li)}</li>`).join("")}</ul>`;
  out += `</div>`;
  return out;
}

function pageHTML(route, c) {
  const url = ORIGIN + "/" + route;
  const ctaHTML = (c.cta || []).map(([label, href]) => `<a class="cta" href="${esc(href)}">${esc(label)}</a>`).join(" ");
  const navHTML = NAV.map(([label, href]) => `<a href="${esc(href)}"${href === "/" + route ? ' aria-current="page"' : ""}>${esc(label)}</a>`).join("");
  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": ORIGIN + "/#org", name: "한국필라테스교육협회 (CPPI Korea)", url: ORIGIN + "/", logo: LOGO },
      Object.assign({ "@id": url + "#page", url, name: c.title, description: c.desc, isPartOf: { "@id": ORIGIN + "/#org" } }, c.schema || {}),
    ],
  };
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.title)}</title>
<meta name="description" content="${esc(c.desc)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="ko" href="${url}">
<link rel="alternate" hreflang="x-default" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="CPPI 한국 필라테스 교육협회">
<meta property="og:title" content="${esc(c.title)}">
<meta property="og:description" content="${esc(c.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${OG_IMG}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/icons/icon-192.png">
<script type="application/ld+json">${JSON.stringify(jsonld)}</script>
<style>
:root{--pri:#F15A22;--ink:#241C18;--ink2:#6E5B50;--line:#F0E1D5;--bg:#FFFBF7}
*{box-sizing:border-box}
body{margin:0;font-family:'Pretendard','Malgun Gothic','Apple SD Gothic Neo',sans-serif;background:var(--bg);color:var(--ink);line-height:1.7;word-break:keep-all}
header{border-bottom:1px solid var(--line);padding:16px 20px}
header .in{max-width:900px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
header img{height:28px}
nav{display:flex;gap:14px;flex-wrap:wrap;font-size:13px}
nav a{color:var(--ink2);text-decoration:none}
nav a[aria-current]{color:var(--pri);font-weight:700}
main{max-width:760px;margin:0 auto;padding:40px 20px 60px}
.eyebrow{font-size:12px;letter-spacing:.16em;font-weight:800;color:var(--pri);text-transform:uppercase;margin-bottom:8px}
h1{font-size:32px;line-height:1.35;margin:0 0 14px}
.lead{color:var(--ink2);font-size:16px;margin-bottom:28px}
.blk{margin-bottom:22px}
.blk h2{font-size:18px;margin-bottom:8px}
.blk p{font-size:14.5px;color:var(--ink2)}
.blk ul{margin:0;padding-left:20px;font-size:14.5px;color:var(--ink2);line-height:1.9}
.note{background:#FFF3D6;border:1px solid #F1DDA6;border-radius:12px;padding:13px 15px;font-size:13px;color:#6E521A;margin:16px 0}
.ctabar{margin-top:30px;display:flex;gap:10px;flex-wrap:wrap}
.cta{display:inline-block;background:var(--pri);color:#fff;text-decoration:none;padding:12px 22px;border-radius:100px;font-size:14px;font-weight:700}
.cta:nth-child(2){background:#fff;color:var(--pri);border:1.5px solid var(--pri)}
footer{border-top:1px solid var(--line);padding:20px;text-align:center;font-size:12px;color:var(--ink2)}
footer a{color:var(--ink2)}
</style>
</head>
<body>
<header><div class="in">
  <a href="/"><img src="/logo_header.png" alt="CPPI 한국 필라테스 교육협회"></a>
  <nav>${navHTML}</nav>
</div></header>
<main>
  <div class="eyebrow">${esc(c.eyebrow)}</div>
  <h1>${esc(c.h1)}</h1>
  ${c.lead ? `<p class="lead">${esc(c.lead)}</p>` : ""}
  ${(c.blocks || []).map(blockHTML).join("")}
  ${c.note ? `<div class="note">${esc(c.note)}</div>` : ""}
  <div class="ctabar">${ctaHTML}<a class="cta" href="/#apply" style="background:#fff;color:var(--pri);border:1.5px solid var(--pri)">무료 상담 신청</a></div>
</main>
<footer>CPPI 한국 필라테스 교육협회 · 010-4894-4292 · allmovements@naver.com · <a href="/">cppipilates.com</a></footer>
</body>
</html>`;
}

export async function onRequest(context) {
  const { params } = context;
  const route = String(params.route || "");
  const c = CONTENT[route];
  if (!c) return new Response("Not found", { status: 404 });
  return new Response(pageHTML(route, c), { headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "public, max-age=300" } });
}
