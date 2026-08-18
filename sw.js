/* CPPI PWA Service Worker v4 — 전체 오프라인 캐싱 */
const CACHE = "cppi-v16";

/* 교재 미리보기 전체 (9권 × 13p) */
const BOOK_SLUGS = ["anatomy", "principle", "mat", "reformer", "cadillac", "chair", "lbarrel", "abarrel", "scorrector"];
const BOOK_IMGS = BOOK_SLUGS.flatMap(s => Array.from({ length: 13 }, (_, i) => `./books/${s}/p${String(i + 1).padStart(2, "0")}.jpg`));
const COVERS = ["anatomy","principle","analysis","mat","reformer","cadillac","chair","lbarrel","spine"].map(s => `./covers/${s}.jpg`);
const HOMEIMG = ["hero_bg","covers_fan","logo3d","curriculum_banner","medical_banner","courses_banner","workshop_banner","global_map","cert_real","founder_photo","founder_face","members","convention","ic_instagram","ic_youtube","ic_liinks"].map(n => `./img/${n}.jpg`).map(p => p.startsWith("./img/ic_") ? p.replace(".jpg", ".png") : p);
const REVIEWS = Array.from({ length: 11 }, (_, i) => `./reviews/r${i + 1}.jpg`);
const PROPS = ["foam_cover","circle_cover","bosu_cover","foam1","foam2","circle1","circle2","bosu1","bosu2"].map(n => `./props/${n}.jpg`);

const LECTIMG = ["lect_reg","lect_spine","lect_mt"].map(n => `./img/${n}.webp`);
const MASTERSV = ["founder","minseo","cheongah","heejung","hwyhyang"].map(n => `./img/masters_v/${n}.webp`);
const BOOKS3D = ["anatomy","principle","mat","reformer","cadillac","chair","lbarrel","analysis"].map(n => `./img/books3d/b_${n}.webp`);
const CORE = [
  "./", "./index.html", "./app.js", "./manifest.webmanifest",
  "./logo.png", "./logo_header.png", "./logo_light.png",
  "./hero1.mp4", "./hero-poster.jpg", "./frame1.jpg", "./frame2.jpg",
  "./icons/icon-192.png", "./icons/icon-512.png",
  "./masters/minseo.jpg", "./masters/cheongah.jpg", "./masters/heejung.jpg", "./masters/hwyhyang.jpg",
  ...BOOK_IMGS, ...COVERS, ...HOMEIMG, ...PROPS, ...REVIEWS, ...BOOKS3D, ...MASTERSV, ...LECTIMG,
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.allSettled(CORE.map(u => c.add(u)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  // 회원 API는 절대 캐시하지 않음 (항상 네트워크)
  if (url.pathname.startsWith("/api/")) return;

  if (url.origin !== location.origin) {
    e.respondWith(
      fetch(e.request).then(res => {
        const cp = res.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  /* 화면을 구성하는 파일(HTML·JS·CSS·JSON)은 네트워크 우선.
     캐시를 먼저 주면 배포 직후 첫 접속에서 예전 화면이 뜨고,
     새로고침해야 최신이 보이는 문제가 생긴다. 오프라인일 때만 캐시로 대체한다. */
  const isShell = e.request.mode === "navigate"
    || /\.(?:js|css|json|webmanifest)$/.test(url.pathname)
    || url.pathname === "/" || url.pathname.endsWith(".html");

  if (isShell) {
    e.respondWith(
      fetch(e.request).then(res => {
        const cp = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, cp));
        return res;
      }).catch(() => caches.match(e.request).then(hit => hit || caches.match("./index.html")))
    );
    return;
  }

  /* 이미지·영상·폰트 등은 잘 바뀌지 않으므로 캐시 우선(빠른 표시) + 뒤에서 갱신 */
  e.respondWith(
    caches.match(e.request).then(hit => {
      const net = fetch(e.request).then(res => {
        const cp = res.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return res;
      }).catch(() => hit);
      return hit || net;
    }).then(res => res || caches.match("./index.html"))
  );
});
