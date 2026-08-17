/* ============================================================
   CPPI PWA - 앱 로직 v4 (오렌지 아이덴티티 · 한/영/중/일)
   - 문구 수정: L({ko,en,zh,ja}) 사전에서
   - 영상 등록: LECTURES 의 yt 에 공식 채널 영상 ID만
   - 관리자: 주소 뒤 #admin (비밀번호 ADMIN_PASS)
   ============================================================ */

/* ---------- 0) 상수 ---------- */
const OFFICIAL_CHANNEL_ID = "UCLQfjfqeKP3j94Fa94avYxg"; // @cppi.pilates
const OFFICIAL_CHANNEL_URL = "https://www.youtube.com/@cppi.pilates";
const INSTA_URL = "https://www.instagram.com/cppi.pilates";
const CONTACT = { tel: "010-4894-4292", telIntl: "+82-10-4894-4292", mail: "allmovements@naver.com" };
const BANK = { name: "우리은행", num: "1002-836-066783", holder: "김형석 (씨앤티파트너스 C&T Partners)" };
const SELLER = "씨앤티파트너스 (C&T Partners) · 842-09-02365";
const PG = { naver: "", kakao: "" }; // 간편결제 링크 - 연동 후 입력, 비어 있으면 계좌이체 안내
const ADMIN_PASS = "cppi-4292";
const NAVER_TALK = "https://talk.naver.com/profile/c/cppi"; // 네이버 톡톡 상담
/* 히어로 영상: 접속 시마다 랜덤 재생 */
const HEROS = ["hero1.mp4", "hero2.mp4", "hero3.mp4"];
const heroSrc = () => HEROS[Math.floor(Math.random() * HEROS.length)];
/* 브랜드 지침: "Redeem your Body" 문구 사용 금지 · 이모티콘 사용 금지 · '—' 대신 '-' */

/* ---------- 1) 언어 ---------- */
const _qlang = new URLSearchParams(location.search).get("lang");
let LANG = (["ko", "en", "zh", "ja"].includes(_qlang) ? _qlang : null) || localStorage.getItem("cppi_lang") || "ko";
const L = (o) => (o && (o[LANG] ?? o.en ?? o.ko)) ?? "";
/* 마침표 뒤 줄바꿈(가독성 규칙) */
const br = (s) => String(s).replace(/\.\s+/g, ".<br>");

const SLOGAN = { ko: "움직임의 가치를 전하는 사람으로", en: "Becoming one who delivers the value of movement", zh: "成为传递运动价值的人", ja: "動きの価値を伝える人へ" };
const SLOGAN_SUB = "To Begin a New Life";

const UI = {
  tabs: {
    home: { ko: "홈", en: "Home", zh: "首页", ja: "ホーム" },
    courses: { ko: "교육", en: "Education", zh: "教育", ja: "教育" },
    learn: { ko: "강의", en: "Lectures", zh: "课程", ja: "講義" },
    store: { ko: "교재샵", en: "Book Shop", zh: "教材店", ja: "教材ショップ" },
    my: { ko: "마이", en: "My", zh: "我的", ja: "マイ" },
  },
  menu: {
    hAssoc: { ko: "협회", en: "Association", zh: "协会", ja: "協会" },
    hEdu: { ko: "교육", en: "Education", zh: "教育", ja: "教育" },
    hUse: { ko: "이용", en: "Service", zh: "服务", ja: "利用" },
    why: { ko: "왜 CPPI인가", en: "Why CPPI", zh: "为何选择CPPI", ja: "なぜCPPIか" },
    about: { ko: "협회 소개", en: "About CPPI", zh: "协会介绍", ja: "協会紹介" },
    founder: { ko: "파운더 - 박은주 교수", en: "Founder - Prof. Eun-Ju Park", zh: "创始人 - 朴恩珠教授", ja: "創立者 - パク・ウンジュ教授" },
    master: { ko: "마스터 인스트럭터", en: "Master Instructors", zh: "大师级导师", ja: "マスターインストラクター" },
    members: { ko: "수료강사 명단", en: "Graduates", zh: "结业教练名单", ja: "修了講師名簿" },
    stories: { ko: "수료강사들의 이야기", en: "Graduate Stories", zh: "结业教练的故事", ja: "修了講師のストーリー" },
    global: { ko: "글로벌 운영", en: "Global Centers", zh: "全球运营", ja: "グローバル拠点" },
    curriculum: { ko: "에센셜 커리큘럼", en: "Essential Curriculum", zh: "核心课程", ja: "エッセンシャルカリキュラム" },
    courses: { ko: "CPPI 필라테스 교육안내", en: "CPPI Pilates Education", zh: "CPPI教育指南", ja: "CPPI教育のご案内" },
    workshop: { ko: "전문 강사 워크숍", en: "Pro Instructor Workshop", zh: "专业教练工作坊", ja: "専門講師ワークショップ" },
    learn: { ko: "온라인 강의", en: "Online Lectures", zh: "在线课程", ja: "オンライン講義" },
    store: { ko: "전자책 · 교재 스토어", en: "E-book & Textbook Store", zh: "电子书·教材商店", ja: "電子書籍·教材ストア" },
    guide: { ko: "필라테스 전문 지침서", en: "Pilates Pro Guidebooks", zh: "普拉提专业指南", ja: "ピラティス専門指針書" },
    apply: { ko: "상담 · 신청", en: "Consultation", zh: "咨询 · 申请", ja: "相談 · 申込" },
    support: { ko: "FAQ · 후기 · 앱 설치", en: "FAQ · Reviews · Install", zh: "FAQ · 评价 · 安装", ja: "FAQ · 口コミ · インストール" },
    my: { ko: "마이페이지", en: "My Page", zh: "我的页面", ja: "マイページ" },
  },
  btn: {
    consult: { ko: "무료 온라인 상담", en: "Free Online Consultation", zh: "免费在线咨询", ja: "無料オンライン相談" },
    watch: { ko: "온라인 강의 보기", en: "View Online Lectures", zh: "查看在线课程", ja: "オンライン講義を見る" },
    preview: { ko: "목차 · 미리보기", en: "Preview", zh: "目录·预览", ja: "目次·プレビュー" },
    buy: { ko: "구매하기", en: "Buy", zh: "购买", ja: "購入する" },
    buyInq: { ko: "구매 신청", en: "Order", zh: "订购", ja: "注文する" },
    login: { ko: "로그인", en: "Log in", zh: "登录", ja: "ログイン" },
    signup: { ko: "회원가입", en: "Sign up", zh: "注册会员", ja: "会員登録" },
    logout: { ko: "로그아웃", en: "Log out", zh: "退出登录", ja: "ログアウト" },
    submit: { ko: "신청 제출", en: "Submit", zh: "提交", ja: "送信する" },
    install: { ko: "홈 화면에 추가", en: "Add to Home Screen", zh: "添加到主屏幕", ja: "ホーム画面に追加" },
    channel: { ko: "공식 유튜브 채널 바로가기", en: "Official YouTube Channel", zh: "官方YouTube频道", ja: "公式YouTubeチャンネル" },
    toCourses: { ko: "커리큘럼 보기", en: "View Curriculum", zh: "查看课程", ja: "カリキュラムを見る" },
    pay: { ko: "결제 진행", en: "Proceed to Payment", zh: "进行支付", ja: "決済へ進む" },
  },
  badge: {
    free: { ko: "무료", en: "FREE", zh: "免费", ja: "無料" },
    l2: { ko: "L2 이상", en: "L2+", zh: "L2以上", ja: "L2以上" },
    l3: { ko: "L3 전용", en: "L3 only", zh: "仅限L3", ja: "L3限定" },
    coming: { ko: "준비중", en: "Coming", zh: "即将上线", ja: "準備中" },
  },
  viewer: {
    cover: { ko: "표지", en: "Cover", zh: "封面", ja: "表紙" },
    toc: { ko: "목차", en: "Contents", zh: "目录", ja: "目次" },
    body: { ko: "본문 미리보기", en: "Preview", zh: "正文预览", ja: "本文プレビュー" },
    end: { ko: "미리보기는 여기까지 - 전체 교재는 스토어에서!", en: "End of preview - get the full book in Store!", zh: "预览到此为止 - 完整教材请到商店!", ja: "プレビューはここまで - 全編はストアで！" },
  },
  grade: {
    0: { ko: "비회원", en: "Guest", zh: "非会员", ja: "非会員" },
    1: { ko: "L1 일반회원", en: "L1 Basic", zh: "L1 普通会员", ja: "L1 一般会員" },
    2: { ko: "L2 교육회원", en: "L2 Learner", zh: "L2 教育会员", ja: "L2 教育会員" },
    3: { ko: "L3 정회원(수료강사)", en: "L3 Certified Instructor", zh: "L3 正式会员(结业教练)", ja: "L3 正会員(修了講師)" },
  },
};

const TICKER = [
  { ko: "리커버링 재활필라테스 자격과정 모집중 - 8월 23일 개강", en: "Recovering Rehab Pilates Certification - Enrolling, starts Aug 23", zh: "康复普拉提资格课程招生中 - 8月23日开课", ja: "リカバリングリハビリピラティス資格課程 募集中 - 8月23日開講" },
  { ko: "CPPI 정규과정 모집중", en: "CPPI Certification - Now Enrolling", zh: "CPPI 正规课程招生中", ja: "CPPI 正規課程 募集中" },
  { ko: "무료 온라인 상담 신청", en: "Free Online Consultation", zh: "免费在线咨询", ja: "無料オンライン相談" },
  { ko: "교재 미리보기 오픈", en: "Textbook Preview Open", zh: "教材预览开放", ja: "教材プレビュー公開" },
  { ko: "韓 · 加 · 日 글로벌 운영", en: "Korea · Canada · Japan", zh: "韩·加·日全球运营", ja: "韓·加·日グローバル運営" },
];

/* ---------- 2) 에센셜 커리큘럼 ---------- */
const CURRICULUM = [
  { slug: "anatomy", hrs: "10", n: { ko: "필라테스 기능 해부학", en: "Functional Pilates Anatomy" },
    d: { ko: "필라테스 강사가 필수적으로 알아야 할 인체에 대한 해부학적 이해와 지식을 공부합니다. 골격과 관절, 근육에 대한 기본 원리, 어깨 복합체, 척추의 구조, 고관절을 비롯한 정렬의 구조와 기능 그리고, 움직임의 원리를 이해해 가는 과정입니다.", en: "Essential anatomical understanding for Pilates instructors: skeleton, joints and muscles, the shoulder complex, spinal structure, alignment including the hip, and the principles of movement." } },
  { slug: "principle", hrs: "10", n: { ko: "베이직 프린서플 10가지 / 5가지 움직임 원칙", en: "Basic Principle - 10 Principles / 5 Movement Rules" },
    d: { ko: "창안자 요제프 필라테스의 철학이 담긴 필라테스 원리와 리움필라테스의 움직임 철학이 담긴 호흡, 집중, 조절, 중심화, 정확성, 흐름과 효율성, 이완, 축성신장, 전신 움직임, 근육의 균형적 발달까지 필라테스의 기본 원리를 공부합니다. 또한, 호흡, 요추-골반 안정화, 흉곽-복부 연결성, 견갑 안정화와 움직임, 머리-경추 안정화의 5가지 움직임 원칙으로 필라테스 무브먼트 기본원칙을 이론과 실습을 통하여 배워나가는 과정입니다.", en: "The 10 Pilates principles from breath to balanced muscle development, plus the 5 movement rules: breathing, lumbo-pelvic stability, ribcage-abdominal connection, scapular stability, and head-cervical stability." } },
  { slug: "analysis", hrs: "5", n: { ko: "체형,자세 및 움직임 평가", en: "Body type, Posture & Movement Analysis" },
    d: { ko: "사람의 각 체형과 올바른 자세와 비정상적 자세를 분석하고 그 체형의 특징과 단축 된 근육군 및 약화된 근육을 파악하여 체형별 운동프로그램 구성법을 이론과 실습을 통해 배워 나가는 과정입니다.", en: "Analyze body types and postures, identify shortened and weakened muscle groups, and learn to build type-specific exercise programs." } },
  { slug: "mat", hrs: "25", n: { ko: "필라테스 매트", en: "Pilates Mat" },
    d: { ko: "필라테스의 기본 34가지 동작을 포함한 총 53가지의 매트 필라테스의 동작을 웜업, 수파인, 시팅프론, 사이드 라잉, 사이드 닐링, 스탠딩, 포포인츠 닐링 등 각 자세에서 시작자세, 동작순서, 운동목적, 활성화 근육, 운동 포커스와 큐잉, 수정동작과 변형동작, 주의사항까지 매뉴얼화 되어 움직임 실습과 티칭 실습을 통해 효율적으로 배워 나가는 과정입니다.", en: "53 mat exercises including the classical 34, fully manualized from start position to cueing, modifications and precautions." } },
  { slug: "reformer", hrs: "20~25", n: { ko: "리포머", en: "Reformer" },
    d: { ko: "'필라테스의 꽃'이라고 불리우는 리포머 기구는 도르레의 저항으로 움직이는 캐리지 테이블을 활용한 필라테스 동작을 풋바, 핏 스트랩, 핸즈 스트랩, 핸즈 풋바, 핸즈 레일, 숏박스, 롱박스, 스플릿 시리즈 등을 시작방향 및 포지션에 따라 시작자세, 동작순서, 운동목적, 활성화 근육, 운동 포커스와 큐잉, 수정동작과 변형동작, 주의사항까지 매뉴얼화 하여 리포머 동작에 대한 이해를 철저하게 배워 나가는 과정입니다.", en: "The Reformer covered thoroughly by series and position, from footbar to short/long box and split series, fully manualized." } },
  { slug: "cadillac", hrs: "20~25", n: { ko: "캐딜락", en: "Cadillac" },
    d: { ko: "척추 분절의 정교한 움직임을 만들어 내는 캐딜락에서의 동작을 롤다운바, 푸스 쓰루바, 암 스프링, 레그 스프링, 트라페즈에서 실시하는 각 동작들로 분류되어 필라테스 시퀀스를 구성하는데 많은 도움이 되도록 구성되었으며, 시작자세, 동작순서, 운동목적, 활성화 근육, 운동 포커스와 큐잉, 수정동작과 변형동작, 주의사항까지 매뉴얼화 된 컨텐츠를 동작 실습과 티칭 실습을 통해 배워 나가는 과정입니다.", en: "Precise spinal articulation on the Cadillac - roll-down bar, push-through bar, arm/leg springs and trapeze." } },
  { slug: "chair", hrs: "10", n: { ko: "스태빌리티 체어", en: "Stability Chair" },
    d: { ko: "필라테스 기구 중 지지면이 가장 적은 기구로서 신체의 조절력을 더욱 향상 시킬 수 있는 필라테스의 동작의 앉은 자세와 선 자세에 대한 인지력을 끌어올릴 수 있는 효과적인 기구로서 시팅, 스탠딩, 사이드 라잉, 수파인, 프론 등 포지션별 챕터로 구성되어 시작자세, 동작순서, 운동목적, 활성화 근육, 운동 포커스와 큐잉, 수정동작과 변형동작, 주의사항까지 매뉴얼까지 동작 실습과 티칭 실습을 통해 배워 나가는 과정입니다.", en: "The smallest base of support among Pilates apparatus - developing control and awareness, chaptered by position." } },
  { slug: "lbarrel", hrs: "10", n: { ko: "래더바렐 및 바렐 시리즈", en: "Ladder Barrel & Barrel Series" },
    d: { ko: "척추의 신전과 고관절 및 견관절 가동성을 확장 시킬 수 있도록 둥근 곡선형의 배럴에 사다리를 결합하여 배럴운동과 사다리를 활용하여 다양한 움직임을 할 수 있도록 고안된 기구로서 래더배럴 스트레치, 핏 온 래더, 핸즈 온 래더, 사이드 라잉 시리즈, 시팅 시리즈, 숏박스 시리즈 등 자세별 챕터로 구성되어 동작 실습과 티칭 실습을 통해 배워 나가는 과정입니다.", en: "Spinal extension and hip/shoulder mobility on the curved barrel with ladder, chaptered by position." } },
];

/* ---------- 3) 교재 ---------- */
const BOOKS = [
  { slug: "anatomy",    t: { ko: "필라테스 기능해부학", en: "Anatomy of Movement", zh: "功能解剖学", ja: "機能解剖学" }, pages: 238 },
  { slug: "principle",  t: { ko: "필라테스 기본원리", en: "Basic Principle", zh: "基本原理", ja: "基本原理" }, pages: 80 },
  { slug: "mat",        t: { ko: "필라테스 더 매트", en: "Pilates Mat", zh: "垫上普拉提", ja: "ピラティス・マット" }, pages: 160 },
  { slug: "reformer",   t: { ko: "리포머", en: "Reformer", zh: "核心床", ja: "リフォーマー" }, pages: 306 },
  { slug: "cadillac",   t: { ko: "캐딜락", en: "Cadillac", zh: "凯迪拉克床", ja: "キャデラック" }, pages: 368 },
  { slug: "chair",      t: { ko: "스태빌리티 체어", en: "Stability Chair", zh: "稳踏椅", ja: "スタビリティチェア" }, pages: 202 },
  { slug: "lbarrel",    t: { ko: "래더 바렐", en: "Ladder Barrel", zh: "梯桶", ja: "ラダーバレル" }, pages: 76 },
  { slug: "abarrel",    t: { ko: "아크 바렐", en: "Arc Barrel", zh: "弧形桶", ja: "アークバレル" }, pages: 79 },
  { slug: "scorrector", t: { ko: "스파인 코렉터", en: "Spine Corrector", zh: "脊柱矫正器", ja: "スパインコレクター" }, pages: 108 },
];
const PV_COUNT = 13;
const COVER = (slug) => (["anatomy", "principle", "mat", "reformer", "cadillac", "chair", "lbarrel"].includes(slug) ? `covers/${slug}.jpg` : `books/${slug}/p01.jpg`);

/* 전자책: 필라테스 전문 지침서 (무브먼트 테라피 4종) */
const GUIDEBOOKS = [
  { t: { ko: "경추 : 필라테스 무브먼트 테라피", en: "Cervical : Pilates Movement Therapy" } },
  { t: { ko: "견관절 : 필라테스 무브먼트 테라피", en: "Shoulder : Pilates Movement Therapy" } },
  { t: { ko: "척추 : 필라테스 무브먼트 테라피", en: "Spine : Pilates Movement Therapy" } },
  { t: { ko: "골반 : 필라테스 무브먼트 테라피", en: "Pelvis : Pilates Movement Therapy" } },
];

/* ---------- 4) 온라인 강의 ---------- */
/* 등록 규칙: 오직 공식 채널(@cppi.pilates) 영상 ID만. 비어 있으면 준비중. */
const LECT_REG = CURRICULUM.map(c => ({ yt: "", t: c.n, slug: c.slug }));
const LECT_SPINE = [
  { yt: "", t: { ko: "1강 - 이론", en: "Lesson 1 - Theory" } },
  { yt: "", t: { ko: "2강 - 실기 1", en: "Lesson 2 - Practice 1" } },
  { yt: "", t: { ko: "3강 - 실기 2", en: "Lesson 3 - Practice 2" } },
];
const LECT_MT = GUIDEBOOKS.map(g => ({ yt: "", t: g.t }));

const MASTERS = [
  { n: { ko: "김민서", en: "Min-seo KIM" }, img: "masters/minseo.jpg" },
  { n: { ko: "이청아", en: "Cheong-ah LEE" }, img: "masters/cheongah.jpg" },
  { n: { ko: "손희정", en: "Hee-jung SOHN" }, img: "masters/heejung.jpg" },
  { n: { ko: "김휘향", en: "Hwy-hyang KIM" }, img: "masters/hwyhyang.jpg" },
];

const FAQS = [
  { q: { ko: "필라테스가 처음인데 정규과정을 들을 수 있나요?", en: "I'm new to Pilates. Can I take the course?", zh: "我是新手，能上正规课程吗？", ja: "初心者でも正規課程を受けられますか？" },
    a: { ko: "네. 기능해부학 기초부터 단계적으로 설계되어 비전공 입문자도 따라올 수 있습니다.", en: "Yes. It builds step-by-step from anatomy basics.", zh: "可以。课程从解剖学基础循序渐进。", ja: "はい。解剖学の基礎から段階的に学べます。" } },
  { q: { ko: "온라인 강의만으로 수료가 가능한가요?", en: "Can I graduate with online lectures only?", zh: "只看在线课程能结业吗？", ja: "オンライン講義だけで修了できますか？" },
    a: { ko: "온라인 강의는 보조 학습이며, 정규 수료에는 오프라인 실기·티칭 평가가 포함됩니다.", en: "Online lectures are supplementary; certification includes offline assessment.", zh: "在线课程为辅助，结业含线下实操评估。", ja: "講義は補助で、修了には実技評価が含まれます。" } },
  { q: { ko: "수료 후 활동 연계가 되나요?", en: "Is there post-graduation support?", zh: "结业后有活动衔接吗？", ja: "修了後のサポートはありますか？" },
    a: { ko: "수료증 발급과 함께 활동·네트워크 연계를 지원하며 수료강사 명단에 등재됩니다.", en: "We support networking and list you on the graduates page.", zh: "支持活动衔接并登载于名单。", ja: "活動連携を支援し、名簿に掲載されます。" } },
  { q: { ko: "결제는 어디서 하나요?", en: "Who handles payments?", zh: "在哪里付款？", ja: "決済はどこで行いますか？" },
    a: { ko: "모든 결제·환불·고객응대는 교육사업 대행사 씨앤티파트너스(C&T Partners)가 담당합니다.", en: "All payments/refunds are handled by C&T Partners.", zh: "所有付款/退款由C&T Partners负责。", ja: "決済・返金はC&T Partnersが担当します。" } },
  { q: { ko: "계좌이체 후 강의가 바로 열리나요?", en: "Does access open right after bank transfer?", zh: "转账后立即开通吗？", ja: "振込後すぐ視聴できますか？" },
    a: { ko: "'입금 확인중'으로 접수되며 관리자가 확인하면 열람 권한이 부여됩니다.", en: "Orders open after the admin confirms your deposit.", zh: "确认到账后开通权限。", ja: "入金確認後に権限が付与されます。" } },
  { q: { ko: "환불 규정은 어떻게 되나요?", en: "What is the refund policy?", zh: "退款政策？", ja: "返金規定は？" },
    a: { ko: "디지털 상품(전자책·영상)은 열람 이후 환불이 어렵습니다. 과정·워크숍은 개별 규정에 따릅니다.", en: "Digital items are non-refundable after access.", zh: "数字商品开通后难以退款。", ja: "デジタル商品は閲覧後の返金不可です。" } },
];

/* 수료강사 전 기수 명단 */
const GRADUATES = [
  ["1", "우나영｜차서윤｜윤미애｜구지원｜인혜영｜권태현"],
  ["2", "신혜수｜신연수｜서수진｜구슬이｜김은혜｜고두이｜허윤미｜김예지｜한지후｜정주희"],
  ["3", "표연재｜김경화｜서유민｜김민선｜최지혜｜임자영｜이혜림｜이유진｜정혜완｜왕윤희"],
  ["4", "이선정｜황인비｜김현진｜이수산나｜손희정｜김은정｜이예위｜김효진｜김보름｜변준혁"],
  ["5", "조영은｜김예림｜이원석｜정지은｜김혜연｜이혜민｜곽다애｜고미영｜형재원｜김현진"],
  ["6", "조유진｜유은희｜송원진｜김현진｜정은진｜이서연｜차경희｜지현아"],
  ["7", "이은정｜윤난영｜박소윤｜문민정｜양지혜｜최선영｜노현정"],
  ["8", "서영선｜홍지유｜원종란｜최지현｜차지인｜김은혜｜홍지연｜한인영｜류윤지｜김채리"],
  ["9", "윤지선｜김진｜김혜능｜신리라｜오수진｜진준수｜신연경"],
  ["10", "박소현｜박수지｜성보현｜엄화진｜김남숙｜이윤주｜박지은｜박정윤｜박련주"],
  ["11", "손은영｜이미지｜박경미｜박유진｜이지인｜노은지｜고다은｜이운기｜김유민｜이혜진｜정수현"],
  ["12", "이혜영｜김휘향｜이서연"],
  ["13", "민세희｜양주리｜손주연｜정미연｜김다인｜정주예"],
  ["14", "강지윤｜김시율｜송채원"],
  ["15", "김보원｜김수민｜이주희｜천희정｜신우진｜전재아｜문선｜한서희｜최원정｜김령희"],
  ["16", "박신애｜김정민｜김경미｜최연희｜강현주｜유혜영"],
  ["17", "공예은｜강주희｜최연재｜임은경｜용나경"],
  ["18", "마민희｜김소희｜김고운｜금주현｜김경현｜김현정｜신지선｜신은선"],
  ["19", "홍혜령｜김재연｜이슬비｜안애라｜김선영｜이다은｜안지서｜김상숙｜최은정｜배아영"],
  ["20", "신예슬｜문지원｜오지은｜박샛별｜윤여란｜배예빈｜강진주｜성혜림｜정윤희｜강혜영｜조인숙"],
  ["21", "이시은｜조윤진｜유승희｜김승미｜주혜린｜김은경｜이수연"],
  ["22", "박예림｜박선주｜김소휘｜박은숙｜오은지"],
  ["23", "송민선｜임다빈｜김태연｜박미선｜이세은｜김선영｜이소영｜안서라"],
  ["24", "강민지｜정은아｜강민지｜박은빈"],
  ["25", "김민정｜김혜경｜윤지영｜김미현｜반성령"],
  ["26", "손한나｜남혜주｜김보람｜최다현｜이호연｜문혜진"],
  ["27", "정영신｜임은애｜강지효｜홍혜정｜김자영｜나혜정｜김수경｜김아리"],
  ["28", "조새영｜한정원"],
  ["29", "김다영｜김재희｜이은별｜김지수"],
  ["30", "김미정｜김예술｜박은선｜노진선｜김다연｜유지수"],
  ["31", "허지선｜김유리｜최서영｜김기연｜고도희｜이다은"],
  ["32", "김하은｜진유하｜오윤희｜고지희｜김민지"],
  ["33", "유주아｜안희영｜이소정｜허지원｜김지인"],
  ["34", "강지은｜김민서｜김태연｜나혜란｜송효진｜이솔지｜전슬기"],
  ["35", "이솔｜김정민｜김주연｜성혜지｜정유진"],
  ["36", "김민아｜이은영｜장세"],
  ["37", "이소연｜김태숙｜송수지｜이슬기｜최경숙"],
  ["38", "김민지｜김정미｜이한솔｜천다애｜원수미"],
  ["39", "Canada"],
  ["40", "정영미｜곽소연｜김보성｜김정희｜민수진"],
  ["41", "노기영｜우지형｜윤상희｜이민경｜정혜인"],
  ["42", "우주｜김지우｜이설아｜정유진"],
  ["43", "백지혜｜정다빈"],
  ["44", "강수연｜박선아｜박채아｜유은미｜이송민｜장다희｜한지연｜김민지"],
  ["45", "김서연｜김예주｜민보영｜신은정｜심은진｜양수정｜윤상희｜임세아｜장예지｜정다"],
  ["46", "김보경｜송유리｜이세정"],
  ["47", "김민주｜이유선｜최나희"],
  ["48", "김금비｜김민지｜박예송｜박유빈｜박해정｜배승현｜여길환｜여은비｜진혜린"],
  ["49", "김범구｜김선진｜김신향"],
  ["50", "권정하｜송다예｜오영이"],
  ["51", "이솔｜박시유｜윤신우｜이은영｜성유리안나｜방건록"],
  ["53", "Canada"],
  ["54", "김서영｜김소슬｜김여진｜박소민｜정희라｜허민지｜김지아"],
  ["55", "장연주｜홍여울｜배영재"],
  ["56", "문채은｜정연희｜최윤숙｜허나연"],
];
/* 한글 이름 로마자 표기 (비한국어 언어에서 사용) - 빌드 시 자동 주입 */
const GRAD_ROMAN = {};
const cohortLabel = (n) => LANG === "ko" ? n + "기" : LANG === "en" ? "Class " + n : "第" + n + "期";
const gradName = (nm) => LANG === "ko" ? nm : (GRAD_ROMAN[nm] || nm);

/* ---------- 5) 상태 · 저장소 ---------- */
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)); },
};
const APP = {
  get users() { return store.get("cppi_users", []); }, set users(v) { store.set("cppi_users", v); },
  get session() { return store.get("cppi_session", null); }, set session(v) { store.set("cppi_session", v); },
  get orders() { return store.get("cppi_orders", []); }, set orders(v) { store.set("cppi_orders", v); },
  get leads() { return store.get("cppi_leads", []); }, set leads(v) { store.set("cppi_leads", v); },
};
function me() { const s = APP.session; return s ? (APP.users.find(u => u.email === s) || null) : null; }
function grade() { const u = me(); return u ? u.grade : 0; }
let deferredPrompt = null;

/* ---------- 서버 연동 (있으면 서버, 없으면 로컬 폴백) ---------- */
let SERVER = false; // /api/me 성공 시 true
async function apiGet(p) { const r = await fetch("/api/" + p, { credentials: "include" }); if (!r.ok) throw await r.json().catch(() => ({})); return r.json(); }
async function apiPost(p, b) { const r = await fetch("/api/" + p, { method: "POST", credentials: "include", headers: { "content-type": "application/json" }, body: JSON.stringify(b || {}) }); if (!r.ok) throw await r.json().catch(() => ({})); return r.json(); }
function cacheUser(u) { const us = APP.users.filter(x => x.email !== u.email); us.push({ ...u }); APP.users = us; }
async function bootServer() {
  try {
    const { user } = await apiGet("me");
    SERVER = true;
    if (user) { APP.session = user.email; cacheUser(user); }
    else if (APP.session && !me()) APP.session = null; // 서버 세션 없으면 로컬 세션 무효화
    render();
  } catch (e) { SERVER = false; } // 서버 없음 → 기존 로컬 방식 유지
}

/* ---------- 6) 유틸 ---------- */
const $ = (q) => document.querySelector(q);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.style.display = "block";
  clearTimeout(t._tm); t._tm = setTimeout(() => t.style.display = "none", 2600);
}
function copyText(txt) { navigator.clipboard?.writeText(txt).then(() => toast(L({ ko: "복사되었습니다: ", en: "Copied: ", zh: "已复制: ", ja: "コピーしました: " }) + txt)).catch(() => toast(txt)); }
function openSheet() { $("#sheet").classList.add("open"); }
function closeSheet() { $("#sheet").classList.remove("open"); }

/* ---------- 7) 라우터 ---------- */
const routes = {};
function go(h) { location.hash = h; }
window.addEventListener("hashchange", render);
function currentRoute() { return (location.hash || "#home").replace("#", "").split("/")[0]; }
function subRoute() { return (location.hash || "").split("/")[1] || ""; }
/* ---------- Renewal v1: 라우트별 SEO 메타 (GEO/SEO 보강, 해시라우팅 한계 내 최선) ---------- */
const ROUTE_META = {
  why: { t: { ko: "왜 CPPI인가", en: "Why CPPI" }, d: { ko: "임상에서 출발한 커리큘럼, 기능해부학 기반 동작 이해, 티칭 실습 중심 훈련, 수료 이후의 연결 - CPPI가 근거를 먼저 보여드립니다.", en: "A curriculum born in the clinic, movement understood through functional anatomy, teaching-first training, and life after graduation - CPPI shows the evidence first." } },
  about: { t: { ko: "협회 소개", en: "About CPPI" }, d: { ko: "감각이 아니라 근거로 가르치는 CPPI 한국 필라테스 교육협회 - EST.2016, 한국·캐나다·일본 글로벌 운영, 분당서울대병원 임상 기반 커리큘럼.", en: "About CPPI Korea - evidence-based Pilates education since 2016, operating in Korea, Canada and Japan, built on SNUH Bundang clinical experience." } },
  founder: { t: { ko: "박은주 교수 - 파운더", en: "Prof. Eun-Ju Park - Founder" }, d: { ko: "분당서울대병원 척추·관절센터 임상 경험과 나사렛대 강단 경력을 지닌 CPPI 창립자 박은주 교수의 전체 프로필.", en: "Founder profile - clinical and academic credentials of Prof. Eun-Ju Park, founder of CPPI Korea." } },
  curriculum: { t: { ko: "정규과정 에센셜 커리큘럼", en: "CPPI Essential Curriculum" }, d: { ko: "기능해부학과 의학적 근거 위에 설계된 CPPI 정규과정 8대 커리큘럼 - 매트·리포머·캐딜락·체어·바렐 시리즈 상세 안내.", en: "8 core courses of the CPPI certification, built on functional anatomy and medical evidence." } },
  courses: { t: { ko: "교육 안내 - CPPI 필라테스 자격과정", en: "CPPI Pilates Certification Course Guide" }, d: { ko: "이론+실기+티칭실습 중심의 CPPI 국제 필라테스 강사 자격과정 안내. 마스터 강사진, 수료 혜택, 모집 정보.", en: "CPPI's theory + practice + teaching-focused international Pilates instructor certification." } },
  workshop: { t: { ko: "전문 강사 워크숍", en: "CPPI Workshops" }, d: { ko: "현직 강사·재활 종사자를 위한 단기 심화 실습 워크숍 - 리커버링 재활, 임산부, 소도구 필라테스 과정.", en: "Short intensive workshops for active instructors and rehab professionals." } },
  master: { t: { ko: "마스터 강사진", en: "Master Instructors" }, d: { ko: "엄격한 심화교육과 프레젠터 스피치 과정을 거친 CPPI 마스터 인스트럭터를 소개합니다.", en: "Meet CPPI's master instructors, trained through rigorous advanced education." } },
  stories: { t: { ko: "수료강사 후기", en: "Graduate Stories" }, d: { ko: "CPPI와 함께 성장한 수료강사들의 생생한 후기와 56기 이상의 수료강사 명단.", en: "Real stories and the graduates directory from CPPI alumni." } },
  global: { t: { ko: "글로벌 운영 - 한국·캐나다·일본", en: "Global - Korea, Canada, Japan" }, d: { ko: "CPPI는 한국-캐나다-일본에서 교육을 운영합니다. 지역별 교육센터와 운영 현황 안내.", en: "CPPI operates education programs in Korea, Canada and Japan." } },
  learn: { t: { ko: "온라인 강의", en: "Online Lectures" }, d: { ko: "정규과정 온라인 강의, 척추 필라테스 어프로치, 무브먼트 테라피 등 CPPI 복습 영상 안내.", en: "CPPI's online lecture library - certification review, spine approach and movement therapy." } },
  store: { t: { ko: "전자책 · 교재 스토어", en: "E-book & Textbook Store" }, d: { ko: "CPPI 출판교재 9권, 전자책, 수강권을 미리보기와 함께 만나보세요.", en: "CPPI's published textbooks, e-books and course passes with previews." } },
};
const _DEFAULT_TITLE = document.title;
const _DEFAULT_DESC = document.querySelector('meta[name="description"]')?.content || "";
function updateMeta(r) {
  const m = ROUTE_META[r];
  const title = m ? `${L(m.t)} | CPPI 한국 필라테스 교육협회` : _DEFAULT_TITLE;
  const desc = m ? L(m.d) : _DEFAULT_DESC;
  document.title = title;
  const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
  set('meta[name="description"]', "content", desc);
  set('meta[property="og:title"]', "content", title);
  set('meta[property="og:description"]', "content", desc);
}

function render() {
  const r = currentRoute();
  $("#view").innerHTML = (routes[r] || routes.home)();
  updateMeta(r);
  const tabMap = { home: "home", why: "courses", learn: "learn", lecture: "learn", prep: "learn", courses: "courses", curriculum: "courses", workshop: "courses", master: "courses", store: "store", books: "store", ebooks: "store", guide: "store", checkout: "store", bank: "store", my: "my", login: "my", signup: "my" };
  document.querySelectorAll(".tabbar a").forEach(a => {
    a.textContent = L(UI.tabs[a.dataset.tab]);
    a.classList.toggle("on", a.dataset.tab === (tabMap[r] || ""));
  });
  if (_lenis) _lenis.scrollTo(0, { immediate: true }); else window.scrollTo({ top: 0 });
  closeSheet();
  initHeroReel();
  if (SERVER && r === "my" && me()) loadMyOrders();
  if (SERVER && me() && (r === "learn" || r === "lecture")) loadEntitlements().then(() => { if (currentRoute() === r) $("#view").innerHTML = (routes[r] || routes.home)(); });
  requestAnimationFrame(() => requestAnimationFrame(initDesktopFX));
}

/* ---------- Renewal v2: 데스크톱 스크롤 연출 (1024px+, GSAP 없으면 조용히 무시) ----------
   1) .dreveal  - 진입 즉시 페이드업 (히어로/인트로용)
   2) .sreveal  - 스크롤로 뷰포트에 들어올 때 페이드업
   3) .cband    - 챕터 전환 배너: 스크롤 진행에 따라 텍스트가 가로로 흐름
   4) 히어로 영상 - 스크롤에 따라 미세한 시차(패럴랙스)
   접근성: prefers-reduced-motion 사용자는 애니메이션 없이 즉시 표시                        */
/* 히어로 영상 릴 - hero1~4를 순서대로 이어 재생 (끝나면 처음으로 순환).
   기존에는 접속 시 4개 중 1개만 무작위 재생되어 나머지가 노출되지 않았음. */
function initHeroReel() {
  const v = document.getElementById("xheroVid");
  if (!v || v.dataset.reel === "on") return;
  v.dataset.reel = "on";
  let i = 0;
  const next = () => {
    i = (i + 1) % HEROS.length;
    v.src = HEROS[i];
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  };
  v.addEventListener("ended", next);
  // 파일이 없거나 재생 실패 시 다음 영상으로 넘어가 멈추지 않게 함
  v.addEventListener("error", next);
}

/* Lenis 관성 스크롤 - 데스크톱에서만, 1회만 초기화. 실패해도 기본 스크롤로 동작 */
let _lenis = null;
function initSmoothScroll() {
  if (_lenis || typeof Lenis === "undefined") return;
  if (!window.matchMedia("(min-width:1024px)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  try {
    _lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1.6 });
    _lenis.on("scroll", () => { if (typeof ScrollTrigger !== "undefined") ScrollTrigger.update(); });
    const raf = (t) => { _lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  } catch (e) { _lenis = null; }
}

function initDesktopFX() {
  const desktop = window.matchMedia("(min-width:1024px)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (typeof gsap === "undefined" || reduced) {
    document.querySelectorAll(".dreveal,.sreveal").forEach(el => { el.style.opacity = "1"; el.style.transform = "none"; });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  /* kill()만 하면 pin 처리 때 삽입된 자리확보 여백(pin-spacer)이 남아
     화면 상단에 빈 공간이 생긴다. revert=true 로 원상복구까지 시킨다. */
  ScrollTrigger.getAll().forEach(t => t.kill(true));
  initSmoothScroll();

  // 1) 인트로 즉시 리빌 (데스크톱 히어로 전용)
  const intro = document.querySelectorAll(".dreveal");
  if (intro.length) {
    if (desktop) {
      gsap.set(intro, { opacity: 0, y: 30 });
      gsap.to(intro, { opacity: 1, y: 0, duration: 0.9, ease: "expo.out", stagger: 0.1, delay: 0.15 });
    } else {
      gsap.set(intro, { opacity: 1, y: 0 });
    }
  }

  // 2) 스크롤 리빌 (모바일 포함 - 서사형 페이지에서도 동작)
  document.querySelectorAll(".sreveal").forEach(el => {
    const d = parseFloat(getComputedStyle(el).getPropertyValue("--d")) || 0;
    gsap.set(el, { opacity: 0, y: desktop ? 44 : 26 });
    gsap.to(el, {
      opacity: 1, y: 0, duration: desktop ? 1 : 0.75, ease: "expo.out", delay: d / 1000,
      scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
    });
  });

  // 3) 챕터 밴드 - 스크롤 진행에 비례해 텍스트가 흐름
  document.querySelectorAll(".cband").forEach(band => {
    const track = band.querySelector(".cband-track span");
    if (!track) return;
    gsap.fromTo(track, { xPercent: 4 }, {
      xPercent: -36, ease: "none",
      scrollTrigger: { trigger: band, start: "top bottom", end: "bottom top", scrub: 0.6 },
    });
    const no = band.querySelector(".cband-no");
    if (no) {
      gsap.fromTo(no, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.9, ease: "expo.out",
        scrollTrigger: { trigger: band, start: "top 85%", toggleActions: "play none none reverse" },
      });
    }
  });

  // 4) 스크롤 확장 히어로 - 영상이 화면 전체로 펼쳐지며 제목이 좌우로 갈라짐
  const xh = document.querySelector(".xhero");
  if (xh && desktop) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: xh, start: "top top", end: "bottom bottom",
        scrub: 0.5, pin: ".xhero-stage", pinSpacing: true, invalidateOnRefresh: true,
      },
    });
    tl.to(".xhero-bg", { opacity: 0, ease: "none" }, 0)
      .to(".xhero-box", {
        width: () => window.innerWidth, height: () => window.innerHeight,
        borderRadius: 0, boxShadow: "0 0 0 rgba(0,0,0,0)", ease: "none",
      }, 0)
      .to(".xhero-veil", { backgroundColor: "rgba(20,14,10,.5)", ease: "none" }, 0)
      .to(".xhero-w1", { xPercent: -128, ease: "none" }, 0)
      .to(".xhero-w2", { xPercent: 128, ease: "none" }, 0)
      .to(".xhero-meta", { opacity: 0, ease: "none" }, 0)
      .fromTo(".xhero-end", { opacity: 0, y: 26 }, { opacity: 1, y: 0, ease: "power2.out" }, 0.72);
  }

  // 5) 3D 교재 씬 - 카드마다 다른 속도로 떠오르고(스크롤), 마우스에 미세 반응
  initBookScene(desktop);

  ScrollTrigger.refresh();

  /* 히어로 영상·배경 이미지가 늦게 로드되면 측정값이 어긋나므로 로드 후 다시 계산 */
  const hv = document.getElementById("xheroVid");
  const hb = document.querySelector(".xhero-bg");
  const again = () => ScrollTrigger.refresh();
  if (hv) hv.addEventListener("loadedmetadata", again, { once: true });
  if (hb && !hb.complete) hb.addEventListener("load", again, { once: true });
}

function initBookScene(desktop) {
  const scene = document.getElementById("bscatter");
  if (!scene || typeof gsap === "undefined") return;
  const items = scene.querySelectorAll(".bs-item");
  if (!items.length) return;

  // 등장: 아래에서 하나씩 떠오르며 회전이 제자리를 찾아감
  items.forEach((el, i) => {
    const rot = parseFloat(getComputedStyle(el).getPropertyValue("--br")) || 0;
    gsap.fromTo(el,
      { opacity: 0, y: 70, rotate: rot * 2.4, scale: 0.9 },
      {
        opacity: 1, y: 0, rotate: rot, scale: 1, duration: 1.05, ease: "expo.out", delay: i * 0.07,
        scrollTrigger: { trigger: scene, start: "top 82%", toggleActions: "play none none reverse" },
      });
  });

  if (!desktop) return;

  // 스크롤 패럴랙스: --bd(깊이)가 클수록 더 많이 움직여 층이 갈린다
  items.forEach(el => {
    const depth = parseFloat(getComputedStyle(el).getPropertyValue("--bd")) || 1;
    gsap.to(el, {
      yPercent: -16 * depth, ease: "none",
      scrollTrigger: { trigger: scene, start: "top bottom", end: "bottom top", scrub: 0.8 },
    });
  });

  // 마우스 반응 (미세하게, 깊이별로 다르게)
  if (scene.dataset.mouse === "on") return;
  scene.dataset.mouse = "on";
  const setters = [...items].map(el => ({
    el,
    depth: parseFloat(getComputedStyle(el).getPropertyValue("--bd")) || 1,
    qx: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
    qy: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
  }));
  scene.addEventListener("pointermove", (e) => {
    const r = scene.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    setters.forEach(s => { s.qx(nx * 26 * s.depth); s.qy(ny * 18 * s.depth); });
  });
  scene.addEventListener("pointerleave", () => {
    setters.forEach(s => { s.qx(0); s.qy(0); });
  });
}

/* ---------- 8) 공통 조각 ---------- */
/* 챕터 밴드 - 데스크톱에서만 보이는 섹션 전환 배너 (스크롤에 따라 텍스트가 가로로 흐름) */
const chapterBand = (no, title, sub) => `
  <div class="cband" data-ch="${esc(no)}">
    <div class="cband-track"><span>${Array(3).fill(`${esc(title)} <em>/</em> ${esc(sub)} <em>/</em> `).join("")}</span></div>
    <div class="cband-no">${esc(no)}</div>
  </div>`;
const secHead = (eye, h, lead) => `<div class="eyebrow">${eye}</div><h2 class="sec">${h}</h2>${lead ? `<p class="lead">${lead}</p>` : ""}`;

/* ---------- 데스크톱 전용 에디토리얼 홈 (1024px+) ----------
   모바일 카드 대시보드(.mhome)는 그대로 두고, 넓은 화면에서만 이 레이아웃으로 대체.
   콘텐츠·링크는 모바일판과 동일하며 표현 방식만 다르다.                              */
/* 커리큘럼 폴더 스택 - 8과목을 색상 폴더 탭으로 쌓고, 클릭하면 옆에 내용이 펼쳐진다.
   색상은 CPPI 팔레트(오렌지·옐로우·핑크 계열)에서만 사용. */
const FOLDER_SKIN = [
  { bg: "#F15A22", fg: "#FFFFFF", x: 0 },
  { bg: "#FF8A3D", fg: "#3A2405", x: 86 },
  { bg: "#FFA24B", fg: "#3A2405", x: 172 },
  { bg: "#FFC078", fg: "#3A2405", x: 34 },
  { bg: "#FFD24C", fg: "#3A2405", x: 120 },
  { bg: "#F47F92", fg: "#FFFFFF", x: 206 },
  { bg: "#D9491A", fg: "#FFFFFF", x: 68 },
  { bg: "#241C18", fg: "#FFD24C", x: 154 },
];
function curriculumFolders() {
  const HR = L({ ko: "시간", en: "h", zh: "小时", ja: "時間" });
  return `<div class="fstack" id="fstack">${CURRICULUM.map((c, i) => {
    const sk = FOLDER_SKIN[i % FOLDER_SKIN.length];
    const short = LANG === "ko" ? c.n.ko.split(" 10가지")[0].split(",")[0] : c.n.en.split(" - ")[0];
    return `
    <div class="ffolder${i === 0 ? " is-open" : ""}" style="--fbg:${sk.bg};--ffg:${sk.fg};--fx:${sk.x}px;--fz:${i + 1}">
      <div class="ffolder-tabrow">
        <button class="ffolder-tab" type="button" onclick="toggleFolder(${i})" aria-expanded="${i === 0}">
          <i>${String(i + 1).padStart(2, "0")}</i><b>${esc(short)}</b>
        </button>
      </div>
      <div class="ffolder-panel">
        <div class="ffolder-inner">
          <div class="ffolder-side">
            <div class="ffolder-hrs">${esc(c.hrs)}<em>${HR}</em></div>
            <div class="ffolder-en">${esc(c.n.en)}</div>
          </div>
          <div class="ffolder-main">
            <p>${esc(L(c.d))}</p>
            <div class="ffolder-cta">
              ${c.slug !== "analysis" ? `<button type="button" onclick="openViewer(${BOOKS.findIndex(b => b.slug === c.slug)})">${L(UI.btn.preview)}</button>` : ""}
              <a href="#curriculum">${L({ ko: "과정 상세", en: "Course detail", zh: "课程详情", ja: "課程詳細" })}</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }).join("")}</div>`;
}
function toggleFolder(i) {
  const wrap = document.getElementById("fstack");
  if (!wrap) return;
  const items = wrap.querySelectorAll(".ffolder");
  const target = items[i];
  if (!target) return;
  const willOpen = !target.classList.contains("is-open");
  items.forEach(el => {
    el.classList.remove("is-open");
    const b = el.querySelector(".ffolder-tab");
    if (b) b.setAttribute("aria-expanded", "false");
  });
  if (willOpen) {
    target.classList.add("is-open");
    const b = target.querySelector(".ffolder-tab");
    if (b) b.setAttribute("aria-expanded", "true");
  }
  if (typeof ScrollTrigger !== "undefined") setTimeout(() => ScrollTrigger.refresh(), 700);
}

/* 3D 교재 흩뿌리기 - 정적 이미지 대신 개별 표지를 각도·깊이를 달리해 배치.
   스크롤에 따라 서로 다른 속도로 떠오르고, 마우스 위치에 미세하게 반응한다. */
const BOOK_SCATTER = [
  { f: "anatomy",   t: { ko: "움직임 해부학", en: "Anatomy of Movement" },  x: 2,  y: 2,  w: 30, r: -8,  d: 1.00, z: 6 },
  { f: "principle", t: { ko: "기본원리", en: "Basic Principle" },           x: 36, y: 0,  w: 28, r: 6,   d: 0.62, z: 5 },
  { f: "mat",       t: { ko: "매트", en: "Mat" },                           x: 68, y: 6,  w: 27, r: -5,  d: 1.32, z: 4 },
  { f: "reformer",  t: { ko: "리포머", en: "Reformer" },                    x: 6,  y: 33, w: 29, r: 10,  d: 0.44, z: 7 },
  { f: "cadillac",  t: { ko: "캐딜락", en: "Cadillac" },                    x: 39, y: 31, w: 26, r: -12, d: 1.05, z: 3 },
  { f: "chair",     t: { ko: "스태빌리티 체어", en: "Stability Chair" },     x: 69, y: 36, w: 25, r: 5,   d: 0.80, z: 2 },
  { f: "lbarrel",   t: { ko: "래더바렐", en: "Ladder Barrel" },             x: 12, y: 63, w: 26, r: 9,   d: 1.50, z: 1 },
  { f: "analysis",  t: { ko: "움직임 분석", en: "Movement Analysis" },       x: 48, y: 62, w: 27, r: -6,  d: 0.30, z: 8 },
];
function bookScatter() {
  return `<div class="bscatter" id="bscatter">${BOOK_SCATTER.map((b, i) => `
    <figure class="bs-item" style="--bx:${b.x}%;--by:${b.y}%;--bw:${b.w}%;--br:${b.r}deg;--bs:1;--bd:${b.d};--bz:${b.z};--bi:${i}">
      <img src="img/books3d/b_${b.f}.webp" alt="${esc(L(b.t))} ${esc(L({ ko: "교재", en: "textbook" }))}" loading="lazy" decoding="async">
      <figcaption>${esc(L(b.t))}</figcaption>
    </figure>`).join("")}</div>`;
}

function desktopHome() {

  return `
  <div class="dhome">

    <section class="ed-quad">
      <a class="ed-quad-i sreveal" style="--d:0ms" href="#about"><span class="qk">EST. 2016</span><b>${L({ ko: "협회 소개", en: "About CPPI", zh: "协会介绍", ja: "協会紹介" })}</b><i>→</i></a>
      <a class="ed-quad-i sreveal" style="--d:70ms" href="#members"><span class="qk">56+ CLASSES</span><b>${L({ ko: "멤버스 · 수료강사", en: "Members", zh: "会员名单", ja: "メンバーズ" })}</b><i>→</i></a>
      <a class="ed-quad-i sreveal" style="--d:140ms" href="#support"><span class="qk">SUPPORT</span><b>${L({ ko: "FAQ · 후기", en: "FAQ & Reviews", zh: "FAQ·评价", ja: "FAQ·口コミ" })}</b><i>→</i></a>
      <a class="ed-quad-i sreveal" style="--d:210ms" href="#apply"><span class="qk">1:1 SESSION</span><b>${L({ ko: "무료 상담 신청", en: "Free Consultation", zh: "免费咨询", ja: "無料相談" })}</b><i>→</i></a>
    </section>

    ${chapterBand("01", L({ ko: "정규 자격과정", en: "CERTIFICATION" }), L({ ko: "기능해부학 · 8대 커리큘럼", en: "FUNCTIONAL ANATOMY · 8 COURSES" }))}

    <section class="ed-cur">
      <div class="ed-cur-head sreveal">
        <div class="ed-eyebrow">ESSENTIAL CURRICULUM</div>
        <h2 class="ed-h2">${L({ ko: "여덟 개의 과정,<br>하나의 기준", en: "Eight courses,<br>one standard", zh: "八门课程，<br>一个标准", ja: "八つの課程、<br>ひとつの基準" })}</h2>
        <p class="ed-lead">${L({ ko: "모든 과정은 기능해부학과 의학적 근거 위에 설계되었습니다. 동작을 외우는 것이 아니라, 왜 그렇게 움직이는지 설명할 수 있는 강사를 길러냅니다.", en: "Every course is built on functional anatomy and medical evidence. We train instructors who can explain why the body moves - not merely memorize sequences.", zh: "所有课程均基于功能解剖学与医学循证设计。我们培养能解释身体为何如此运动的教练，而非死记动作。", ja: "全課程が機能解剖学と医学的根拠に基づき設計。動作を暗記するのではなく、なぜそう動くかを説明できる指導者を育てます。" })}</p>
      </div>
      <div class="sreveal">${curriculumFolders()}</div>
      <a class="ed-link" href="#curriculum">${L({ ko: "커리큘럼 자세히 보기", en: "View full curriculum", zh: "查看完整课程", ja: "カリキュラム詳細" })}</a>
    </section>

    ${chapterBand("02", L({ ko: "강의와 교재", en: "LECTURES & BOOKS" }), L({ ko: "출판교재 9권 · 온라인 복습", en: "9 PUBLISHED BOOKS · ONLINE REVIEW" }))}

    <section class="ed-split rev bookscene-sec">
      <div class="ed-media bookscene">${bookScatter()}</div>
      <div class="ed-body sreveal">
        <div class="ed-eyebrow">TEXTBOOKS &amp; LECTURES</div>
        <h2 class="ed-h2">${L({ ko: "1,300 페이지로<br>증명합니다", en: "Proven across<br>1,300 pages", zh: "以1,300页<br>加以证明", ja: "1,300ページで<br>証明します" })}</h2>
        <p class="ed-lead">${L({ ko: "매트 53 · 리포머 79 · 캐딜락 62 · 체어 28 · 래더바렐 27 · 아크바렐 29 · 스파인코렉터 39 동작. 배리에이션과 모디피케이션까지 출판교재 9권에 담았습니다.", en: "Mat 53 · Reformer 79 · Cadillac 62 · Chair 28 · Ladder Barrel 27 · Arc Barrel 29 · Spine Corrector 39 movements - with variations and modifications, across 9 published volumes.", zh: "垫上53·核心床79·凯迪拉克62·椅28·梯桶27·弧形桶29·脊柱矫正器39个动作，含变式与调整，收录于9册出版教材。", ja: "マット53·リフォーマー79·キャデラック62·チェア28·ラダーバレル27·アークバレル29·スパインコレクター39動作。バリエーションと修正法まで出版教材9冊に収録。" })}</p>
      </div>
    </section>



    ${chapterBand("03", L({ ko: "강의 · 스토어 · 워크숍 · 멤버스", en: "LECTURES · STORE · WORKSHOP · MEMBERS" }), L({ ko: "배우고, 갖추고, 이어집니다", en: "LEARN · EQUIP · CONNECT" }))}

    <section class="ed-quadtile">
      <a class="ed-tile sreveal" href="#learn">
        <img src="frame1.jpg" alt="">
        <div class="ov"><div class="ed-eyebrow light">ONLINE LECTURES</div><b>${L(UI.menu.learn)}</b><span>${L({ ko: "정규 · 척추 · 테라피", en: "Cert · Spine · Therapy", zh: "正规·脊柱·治疗", ja: "正規·脊柱·セラピー" })}</span></div>
      </a>
      <a class="ed-tile fit sreveal" href="#store">
        <img src="img/books3d/b_anatomy.webp" alt="${esc(L({ ko: "CPPI 출판교재", en: "CPPI textbooks" }))}">
        <div class="ov"><div class="ed-eyebrow light">E-BOOK STORE</div><b>${L(UI.tabs.store)}</b><span>${L({ ko: "실물교재 · 전자책 · 수강권 · 미리보기", en: "Books · E-books · Pass · Preview", zh: "教材·电子书·课程券·预览", ja: "教材·電子書籍·受講券·プレビュー" })}</span></div>
      </a>
    
      <a class="ed-tile sreveal" href="#workshop">
        <img src="img/workshop_banner.jpg" alt="" style="object-position:50% 24%">
        <div class="ov"><div class="ed-eyebrow light">WORKSHOP</div><b>${L(UI.menu.workshop)}</b><span>${L({ ko: "리커버링 · 임산부 · 소도구", en: "Recovering · Prenatal · Props", zh: "康复·孕产·小工具", ja: "リカバリング·マタニティ·小道具" })}</span></div>
      </a>
      <a class="ed-tile sreveal" href="#members">
        <img src="img/members.jpg" alt="" style="object-position:50% 18%">
        <div class="ov"><div class="ed-eyebrow light">MEMBERS</div><b>${L({ ko: "멤버스", en: "Members", zh: "会员名单", ja: "メンバーズ" })}</b><span>${L({ ko: "수료강사 56기+ 명단", en: "56+ classes directory", zh: "结业56期+名单", ja: "修了56期+名簿" })}</span></div>
      </a>
    
    </section>

    ${chapterBand("04", L({ ko: "수료강사의 이야기", en: "GRADUATE STORIES" }), L({ ko: "현장에서 증명된 교육", en: "PROVEN IN THE FIELD" }))}

    <section class="ed-stories">
      <div class="ed-body narrow sreveal">
        <div class="ed-eyebrow">STORIES</div>
        <h2 class="ed-h2">${L({ ko: "교육의 증거는<br>현장에 있습니다", en: "The proof of teaching<br>lives in the field", zh: "教育的证据<br>在现场", ja: "教育の証拠は<br>現場にあります" })}</h2>
      </div>
      <div class="ed-story-strip sreveal">
        ${[1, 4, 6, 8, 10].map(i => `<a href="#stories"><img src="reviews/r${i}.jpg" alt="" loading="lazy"></a>`).join("")}
      </div>
      <a class="ed-link center sreveal" href="#stories">${L({ ko: "후기 전체 보기", en: "See all reviews", zh: "查看全部评价", ja: "口コミをすべて見る" })}</a>
    </section>

    <section class="ed-closing sreveal">
      <div class="ed-eyebrow light">FREE SESSION</div>
      <h2 class="ed-h2 light">${L({ ko: "어떤 과정이 맞을지,<br>먼저 물어보세요", en: "Not sure which course<br>fits you? Just ask.", zh: "不确定哪门课程适合？<br>先来问问吧", ja: "どの課程が合うか、<br>まずご相談ください" })}</h2>
      <p class="ed-lead light">${L({ ko: "커리큘럼 · 수료 후 활동 · 비용을 1:1로 안내드립니다.", en: "1:1 guidance on curriculum, career paths and cost.", zh: "1对1介绍课程、结业去向与费用。", ja: "カリキュラム・修了後・費用を1:1でご案内。" })}</p>
      <div class="ed-closing-cta">
        <a class="dpri" href="#apply">${L({ ko: "내게 맞는 과정 물어보기", en: "Find my right course", zh: "咨询适合我的课程", ja: "私に合う課程を相談" })}</a>
        <a class="dgh" href="${NAVER_TALK}" target="_blank" rel="noopener">${L({ ko: "네이버 톡톡 상담", en: "Chat on NAVER TalkTalk", zh: "NAVER TalkTalk咨询", ja: "NAVERトークトーク相談" })}</a>
      </div>
    </section>

  </div>`;
}
const tierBadge = (t) => `<span class="badge ${t === "free" ? "free" : t === "l2" ? "l2" : "l3"}">${L(UI.badge[t === "free" ? "free" : t])}</span>`;
const bookCard = (b, i) => `<div class="bookcard">
  <img src="${COVER(b.slug)}" alt="${esc(L(b.t))}" loading="lazy" onclick="openViewer(${i})">
  <div class="in"><h4>${esc(L(b.t))}</h4><div class="m">${b.pages}p</div>
  <button class="btn ghost small" onclick="openViewer(${i})">${L(UI.btn.preview)}</button></div></div>`;

function rosterHTML() {
  return `
  <div class="cohort-grid">
    ${GRADUATES.map(([gen], i) => `<button class="cohort-btn" onclick="showCohort(${i})">${esc(cohortLabel(gen))}</button>`).join("")}
  </div>
  <div class="card" id="cohortPanel" style="margin-top:12px">
    <b id="cohortTitle">${L({ ko: "기수를 선택하세요", en: "Select a class", zh: "请选择期数", ja: "期を選択してください" })}</b>
    <p id="cohortNames" style="font-size:14px;line-height:2;color:var(--ink2);margin-top:6px">${L({ ko: "기수 버튼을 누르면 수료 강사 명단이 표시됩니다.", en: "Tap a class button to see its graduates.", zh: "点击期数按钮显示结业教练名单。", ja: "期のボタンを押すと修了講師名簿が表示されます。" })}</p>
  </div>`;
}
function showCohort(i) {
  const [gen, names] = GRADUATES[i];
  document.querySelectorAll(".cohort-btn").forEach((b, j) => b.classList.toggle("on", j === i));
  $("#cohortTitle").textContent = "CPPI " + cohortLabel(gen) + " " + L({ ko: "수료 강사", en: "Graduates", zh: "结业教练", ja: "修了講師" });
  $("#cohortNames").innerHTML = names.split("｜").map(n => `<span class="chip">${esc(gradName(n.trim()))}</span>`).join("");
  $("#cohortPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ---------- 9) 뷰 ---------- */
/* 홈 = 레이아웃 1안 (그리드 대시보드형) */
routes.home = () => `
  <div class="xhero">
    <div class="xhero-stage">
      <img class="xhero-bg" src="img/hero_bg.jpg" alt="CPPI 교육 현장 - 박은주 교수 지도 장면">
      <div class="xhero-box">
        <video id="xheroVid" src="${HEROS[0]}" poster="hero-poster.jpg" autoplay muted playsinline preload="auto"></video>
        <div class="xhero-veil"></div>
      </div>
      <div class="xhero-title">
        <span class="xhero-w1">${L({ ko: "감각이 아니라,", en: "We teach with", zh: "以循证教学，", ja: "感覚ではなく、" })}</span>
        <span class="xhero-w2">${L({ ko: "근거로 가르칩니다", en: "evidence, not intuition", zh: "而非凭感觉", ja: "根拠で教えます" })}</span>
      </div>
      <div class="xhero-meta">
        <span class="xhero-eyebrow">CPPI KOREA · EST. 2016</span>
        <span class="xhero-scroll">${L({ ko: "스크롤하세요", en: "SCROLL TO EXPAND", zh: "向下滚动", ja: "スクロール" })}</span>
      </div>
      <div class="xhero-end">
        <p>${L({ ko: "분당서울대병원 척추·관절센터 임상 경험을 기반으로 설계된 국제 필라테스 강사 자격과정. 8대 커리큘럼, 1,300여 페이지의 출판교재로 증명합니다.", en: "An international Pilates instructor certification built on clinical experience from SNUH Bundang Spine & Joint Center. 8 core courses, 1,300+ pages of published textbooks.", zh: "以分堂首尔大学医院脊柱关节中心临床经验为基础设计的国际普拉提教练资格课程。8大课程体系，1300余页出版教材佐证。", ja: "盆唐ソウル大学病院脊椎·関節センターの臨床経験を基に設計された国際ピラティス指導者資格課程。8大カリキュラム、1,300ページ超の出版教材で証明します。" })}</p>
        <div class="xhero-cta">
          <a class="dpri" href="#why">${L({ ko: "왜 CPPI인가", en: "Why CPPI", zh: "为何选择CPPI", ja: "なぜCPPIか" })}</a>
          <a class="dgh" href="#curriculum">${L({ ko: "정규과정 알아보기", en: "Explore the Curriculum", zh: "了解正规课程", ja: "正規課程を見る" })}</a>
        </div>
      </div>
    </div>
  </div>

  ${desktopHome()}

  <section class="mhome" style="padding-top:14px">
    <!-- Row 1 : 히어로(2) + 파운더(1) -->
    <div class="lay-hero">
      <a class="hcard big" href="#courses">
        <video src="${heroSrc()}" poster="hero-poster.jpg" autoplay muted loop playsinline></video>
        <span class="hbadge">${L({ ko: "모집중", en: "Enrolling", zh: "招生中", ja: "募集中" })}</span>
        <div class="hov">
          <b>${L({ ko: "CPPI 정규 자격과정", en: "CPPI Certification", zh: "CPPI正规资格课程", ja: "CPPI正規資格課程" })}</b>
          <span>${L({ ko: "국제자격증 · 이론+실기+티칭실습", en: "Intl. cert · Theory + Practice + Teaching", zh: "国际证书·理论+实操+教学", ja: "国際資格·理論+実技+指導" })}</span>
        </div>
      </a>
      <a class="hcard sm" href="#founder">
        <img src="img/founder_face.jpg" alt="박은주 교수" style="object-position:top">
        <div class="hov">
          <b>${L({ ko: "파운더", en: "Founder", zh: "创始人", ja: "創立者" })}</b>
          <span>${L({ ko: "박은주 교수", en: "Prof. Eun-Ju Park", zh: "朴恩珠教授", ja: "パク・ウンジュ教授" })}</span>
        </div>
      </a>
    </div>

    <!-- Row 2 : 퀵칩 4 + 앱설치 -->
    <div class="lay-quick">
      <a class="qchip t1" href="#about">${L({ ko: "협회<br>소개", en: "About<br>CPPI", zh: "协会<br>介绍", ja: "協会<br>紹介" })}</a>
      <a class="qchip t2" href="#members">${L({ ko: "멤버스<br>수료강사", en: "Members<br>Graduates", zh: "会员<br>名单", ja: "メンバー<br>修了講師" })}</a>
      <a class="qchip t3" href="#support">${L({ ko: "FAQ<br>후기", en: "FAQ<br>Reviews", zh: "FAQ<br>评价", ja: "FAQ<br>口コミ" })}</a>
      <a class="qchip t4" href="#apply">${L({ ko: "상담<br>신청", en: "Free<br>Consult", zh: "咨询<br>申请", ja: "相談<br>申込" })}</a>
      <button class="qapp" onclick="installApp()">
        <img src="img/logo3d.jpg" alt="">
        <div><b>${L({ ko: "CPPI 앱 설치", en: "Install App", zh: "安装应用", ja: "アプリ追加" })}</b><span>${L({ ko: "홈 화면에 추가", en: "Add to Home", zh: "添加到主屏", ja: "ホームに追加" })}</span></div>
      </button>
    </div>

    <!-- Row 3 : 에센셜 커리큘럼 대형 박스 (오렌지-옐로우) + 8칩 -->
    <div class="curbox sreveal">
      <div class="curtop">
        <b>${L({ ko: "CPPI 정규과정 에센셜 커리큘럼", en: "CPPI Essential Curriculum", zh: "CPPI核心课程", ja: "CPPIエッセンシャルカリキュラム" })}</b>
        <a href="#curriculum">${L({ ko: "안내 보기", en: "View", zh: "查看", ja: "見る" })} →</a>
      </div>
      <div class="curgrid">
        ${CURRICULUM.map((c, i) => `<a href="#curriculum">${i + 1}. ${esc(LANG === "ko" ? c.n.ko.split(" 10가지")[0].split(",")[0] : c.n.en.split(" - ")[0])}</a>`).join("")}
      </div>
    </div>

    <!-- Row 4 : 온라인 강의 + 스토어 -->
    <div class="grid2 sreveal" style="margin-top:12px">
      <a class="card imgcard" href="#learn"><img src="frame1.jpg" alt=""><div class="cap"><b>${L(UI.menu.learn)}</b><span>${L({ ko: "정규 · 척추 · 테라피", en: "Cert · Spine · Therapy", zh: "正规·脊柱·治疗", ja: "正規·脊柱·セラピー" })}</span></div></a>
      <a class="card imgcard" href="#store"><img src="img/books3d/b_anatomy.webp" alt="" style="object-fit:contain;background:linear-gradient(160deg,#FFF3E6,#FFE6D2);padding:10px"><div class="cap"><b>${L(UI.tabs.store)}</b><span>${L({ ko: "실물교재 · 전자책 · 수강권 · 미리보기 →", en: "Books · E-books · Pass →", zh: "教材·电子书·课程券 →", ja: "教材·電子書籍·受講券 →" })}</span></div></a>
    </div>

    <!-- Row 5 : 전문 강사 워크숍 + 멤버스 -->
    <div class="grid2 sreveal" style="margin-top:12px">
      <a class="card imgcard" href="#workshop"><img src="img/workshop_banner.jpg" alt="" style="object-position:50% 24%"><div class="cap"><b>${L(UI.menu.workshop)}</b><span>${L({ ko: "리커버링 · 임산부 · 소도구", en: "Recovering · Prenatal · Props", zh: "康复·孕产·小工具", ja: "リカバリング·マタニティ·小道具" })}</span></div></a>
      <a class="card imgcard" href="#members"><img src="img/members.jpg" alt="" style="object-position:50% 18%"><div class="cap"><b>${L({ ko: "멤버스", en: "Members", zh: "会员名单", ja: "メンバーズ" })}</b><span>${L({ ko: "수료강사 56기+ 명단", en: "56+ classes directory", zh: "结业56期+名单", ja: "修了56期+名簿" })}</span></div></a>
    </div>

    <!-- Row 5.5 : 수료강사 후기 (CPPI 자체 후기 카드) -->
    <div class="sreveal" style="margin-top:18px"><div class="eyebrow">REVIEWS</div><h2 class="sec">${L(UI.menu.stories)}</h2></div>
    <div class="rev-strip sreveal">
      ${[1, 4, 6, 8, 10].map(i => `<a href="#stories"><img src="reviews/r${i}.jpg" alt="" loading="lazy"></a>`).join("")}
    </div>
    <a class="btn ghost" href="#stories" style="margin-top:10px">${L({ ko: "후기 전체 보기", en: "See all reviews", zh: "查看全部评价", ja: "口コミをすべて見る" })}</a>

    <!-- Row 6 : 무료 상담 배너 -->
    <div class="card sreveal" style="background:linear-gradient(135deg,var(--acc),var(--sun));text-align:center;margin-top:16px;border:none">
      <div class="eyebrow" style="color:#7A4A12">FREE SESSION</div>
      <h2 class="sec" style="color:#5A3410">${L(UI.btn.consult)}</h2>
      <p style="font-size:13.5px;color:#6E521A;margin-bottom:14px">${L({ ko: "커리큘럼 · 수료 후 활동 · 비용을 1:1로 안내드립니다.", en: "1:1 guidance on curriculum, career paths and cost.", zh: "1对1介绍课程、结业去向与费用。", ja: "カリキュラム・修了後・費用を1:1でご案内。" })}</p>
      <a class="btn" style="background:#fff;color:var(--pri)" href="#apply">${L({ ko: "내게 맞는 과정 물어보기 →", en: "Find my right course →", zh: "咨询适合我的课程 →", ja: "私に合う課程を相談 →" })}</a>
    </div>
  </section>`;

routes.global = () => `
  <section>
    ${secHead("GLOBAL", L(UI.menu.global), L({ ko: "CPPI는 한국 - 캐나다 - 일본에서 교육을 운영합니다.", en: "CPPI operates in Korea, Canada and Japan.", zh: "CPPI在韩国、加拿大和日本开展教育。", ja: "CPPIは韓国・カナダ・日本で教育を運営しています。" }))}
    <img src="img/global_map.jpg" alt="Global" style="border-radius:14px;margin-bottom:12px">
    <div class="global-grid">
    <div class="card" style="margin-bottom:9px"><b>${L({ ko: "대한민국 KOREA", en: "KOREA", zh: "韩国 KOREA", ja: "韓国 KOREA" })}</b>
      <p style="font-size:13.5px;color:var(--ink2);margin-top:5px">${L({ ko: "분당 · 서울 · 김포 교육센터 운영.", en: "Education centers in Bundang, Seoul and Gimpo.", zh: "运营盆唐、首尔、金浦教育中心。", ja: "盆唐・ソウル・金浦の教育センターを運営。" })}<br>${L({ ko: "정규과정 · 워크숍 · 자격검정 진행.", en: "Certification courses, workshops and assessments.", zh: "进行正规课程·工作坊·资格检定。", ja: "正規課程・ワークショップ・検定を実施。" })}</p></div>
    <div class="card" style="margin-bottom:9px"><b>${L({ ko: "캐나다 CANADA", en: "CANADA", zh: "加拿大 CANADA", ja: "カナダ CANADA" })}</b>
      <p style="font-size:13.5px;color:var(--ink2);margin-top:5px">${L({ ko: "밴쿠버 - 팬데믹 기간에도 온라인 병행으로 교육을 지속했습니다.", en: "Vancouver - education continued online through the pandemic.", zh: "温哥华 - 疫情期间线上持续教学。", ja: "バンクーバー - パンデミック期間もオンラインで継続。" })}</p></div>
    <div class="card" style="margin-bottom:12px"><b>${L({ ko: "일본 JAPAN", en: "JAPAN", zh: "日本 JAPAN", ja: "日本 JAPAN" })}</b>
      <p style="font-size:13.5px;color:var(--ink2);margin-top:5px">${L({ ko: "도쿄 - 국제 자격 대응 인스트럭터 양성 과정 운영.", en: "Tokyo - instructor training aligned with international certification.", zh: "东京 - 运营国际资格对应教练课程。", ja: "東京 - 国際資格対応の養成コースを運営。" })}</p></div>
    </div>
    <a class="btn pri" href="#apply">${L(UI.btn.consult)}</a>
  </section>`;

const REVIEW_IMGS = 11; // CPPI 자체 후기 카드 (reviews/r1~r11.jpg)
routes.stories = () => `
  <section>
    ${secHead("STORIES", L(UI.menu.stories), L({ ko: "CPPI와 함께 성장한 수료강사들의 생생한 이야기입니다.", en: "Real stories from CPPI graduates.", zh: "与CPPI共同成长的结业教练心声。", ja: "CPPIと共に成長した修了講師のリアルな声。" }))}
    <div class="grid2 reviews-grid">
      ${Array.from({ length: REVIEW_IMGS }, (_, i) => `<img src="reviews/r${i + 1}.jpg" alt="CPPI graduate review ${i + 1}" loading="lazy" style="border-radius:12px;border:1px solid var(--line)">`).join("")}
    </div>
    <div style="height:18px"></div>
    ${secHead("MEMBERS", L(UI.menu.members))}
    ${rosterHTML()}
  </section>`;

/* ============================================================
   WHY CPPI - 서사형 설득 페이지 (Phive Fitness Hub 구조 응용)
   4개 기둥 각각: 선언문 + 근거 카드 3~4개, 사이에 전환 문장
   모든 수치·이력은 협회 공개 자료 기준이며 새로 만든 주장 없음
============================================================ */
const WHY_PILLARS = [
  {
    no: "01",
    tag: "CLINICAL",
    img: "img/medical_banner.jpg",
    name: { ko: "임상에서 왔습니다", en: "It came from the clinic", zh: "源自临床", ja: "臨床から来ました" },
    lede: {
      ko: "필라테스 교육의 대부분은 동작 체계에서 출발합니다. CPPI는 병원에서 출발했습니다. 창립자는 분당서울대병원 마취통증의학과와 한국보훈복지공단 척추&관절센터에서 통증과 수술 후 회복을 직접 다뤘고, 그 경험이 커리큘럼의 뼈대가 되었습니다.",
      en: "Most Pilates education starts from a movement repertoire. CPPI started in a hospital. Our founder worked in anesthesiology and pain medicine at SNUH Bundang and at the Spine & Joint Center of the Korea Veterans Health Service - that experience became the backbone of the curriculum.",
    },
    items: [
      { h: { ko: "병원 임상", en: "Hospital practice" }, p: { ko: "분당서울대병원 마취통증의학과 · 보훈복지공단 척추&관절센터 근무 이력.", en: "Anesthesiology & Pain Medicine, SNUH Bundang; Spine & Joint Center, Korea Veterans Health Service." } },
      { h: { ko: "전문 연수", en: "Clinical training" }, p: { ko: "서울대병원 중환자 전문간호, 정형외과 수술후 재활, 당뇨·고혈압·골다공증 관리, 노인간호 및 재활 연수.", en: "SNUH training in critical care nursing, post-op orthopedic rehabilitation, chronic disease care, and geriatric rehabilitation." } },
      { h: { ko: "대학 강단", en: "University faculty" }, p: { ko: "나사렛대학교 스포츠재활학과 겸임교수, 서경대학교 예술교육원 필라테스과정 원장 역임.", en: "Former adjunct professor of sports rehabilitation, Korea Nazarene University; former director of the Pilates program, Seokyeong University." } },
      { h: { ko: "학회 활동", en: "Academic bodies" }, p: { ko: "대한비만학회 정회원, 대한간호정우회·간호 Q&A협회 정회원.", en: "Member of the Korean Society for the Study of Obesity and Korean nursing associations." } },
    ],
  },
  {
    no: "02",
    tag: "ANATOMY",
    img: "img/curriculum_banner.jpg",
    name: { ko: "동작을 외우지 않습니다", en: "We do not memorize movements", zh: "不靠死记动作", ja: "動作を暗記しません" },
    lede: {
      ko: "같은 동작도 대상이 달라지면 다른 운동이 됩니다. 임신 중인 수강생, 수술 후 6주차 회원, 어깨 가동범위가 제한된 시니어에게 같은 큐잉을 줄 수는 없습니다. CPPI는 기능해부학에서 시작해 배리에이션과 모디피케이션까지 가르칩니다.",
      en: "The same exercise becomes a different exercise when the person changes. You cannot give identical cues to a pregnant client, someone six weeks post-op, and a senior with limited shoulder range. CPPI teaches from functional anatomy through variation and modification.",
    },
    items: [
      { h: { ko: "매트 53 · 리포머 79", en: "Mat 53 · Reformer 79" }, p: { ko: "기구별 동작을 원리 단위로 분해해 배웁니다.", en: "Movements broken down by principle, apparatus by apparatus." } },
      { h: { ko: "캐딜락 62 · 체어 28", en: "Cadillac 62 · Chair 28" }, p: { ko: "스프링 저항과 지지면 변화가 부하에 어떻게 작용하는지 다룹니다.", en: "How spring resistance and base of support alter loading." } },
      { h: { ko: "바렐 시리즈 95", en: "Barrel series 95" }, p: { ko: "래더바렐 27 · 아크바렐 29 · 스파인코렉터 39 동작.", en: "Ladder Barrel 27 · Arc Barrel 29 · Spine Corrector 39." } },
      { h: { ko: "체형·자세 평가", en: "Postural assessment" }, p: { ko: "단축근과 약화근을 판별해 체형별 프로그램을 구성하는 5시간 과정.", en: "A 5-hour course on identifying shortened and weakened muscles to build type-specific programs." } },
    ],
  },
  {
    no: "03",
    tag: "TEACHING",
    img: "img/courses_banner.jpg",
    name: { ko: "가르치는 법을 배웁니다", en: "You learn how to teach", zh: "学习如何教学", ja: "教え方を学びます" },
    lede: {
      ko: "동작을 할 줄 아는 것과 가르칠 줄 아는 것은 다른 능력입니다. CPPI 정규과정은 이론 강의 후 반드시 교육생 상호 인스트럭팅을 반복합니다. 수료 시점에 이미 레슨을 해본 사람이 되어 나갑니다.",
      en: "Performing a movement and teaching it are different skills. Every CPPI module pairs theory with repeated peer instructing, so graduates leave having already taught real sessions.",
    },
    items: [
      { h: { ko: "티칭 실습 반복", en: "Repeated peer teaching" }, p: { ko: "이론 → 실기 체득 → 상호 인스트럭팅 순으로 과목마다 반복합니다.", en: "Theory, then embodiment, then peer instructing - repeated in every module." } },
      { h: { ko: "설명할 수 있는 강사", en: "Instructors who can explain" }, p: { ko: "왜 이 동작을 이 순서로 주는지 스스로 설명할 수 있게 훈련합니다.", en: "Trained to explain why a movement is given, and why in that order." } },
      { h: { ko: "마스터 심화 과정", en: "Master track" }, p: { ko: "심화교육과 프레젠터 스피치 과정을 거친 마스터 인스트럭터가 실제 강의를 담당합니다.", en: "Master instructors complete advanced and presenter-speech training before teaching." } },
    ],
  },
  {
    no: "04",
    tag: "AFTER",
    img: "img/convention.jpg",
    name: { ko: "수료 이후가 있습니다", en: "There is life after graduation", zh: "结业之后仍有路", ja: "修了後があります" },
    lede: {
      ko: "자격증 발급으로 끝나는 과정이 많습니다. CPPI는 수료강사 명단에 등재되고, 워크숍으로 재교육을 이어가며, 일부는 타 아카데미에서 교육강사로 활동합니다. 한국·캐나다·일본에서 운영되는 국제 자격입니다.",
      en: "Many programs end at certification. CPPI graduates are listed in the directory, continue through workshops, and some go on to teach as masters at other academies. The certification operates across Korea, Canada and Japan.",
    },
    items: [
      { h: { ko: "56기+ 수료강사", en: "56+ graduating classes" }, p: { ko: "기수별 명단이 공개되어 있습니다.", en: "The directory is published by class." } },
      { h: { ko: "국제 자격 발급", en: "International certification" }, p: { ko: "한국 · 캐나다 · 일본에서 교육을 운영합니다.", en: "Programs run in Korea, Canada and Japan." } },
      { h: { ko: "지속 재교육", en: "Continuing education" }, p: { ko: "리커버링 재활, 임산부, 소도구 워크숍으로 이어집니다.", en: "Recovering rehab, prenatal and small-props workshops." } },
    ],
  },
];
const WHY_BRIDGE = [
  { ko: "그래서 동작이 아니라 사람을 봅니다.", en: "So we look at the person, not the movement." },
  { ko: "그래서 큐잉에는 이유가 있어야 합니다.", en: "So every cue must have a reason." },
  { ko: "그래서 수료증은 시작점입니다.", en: "So the certificate is a starting point." },
];

routes.why = () => `
  <div class="why">
    <div class="why-hero">
      <div class="why-eyebrow">WHY CPPI</div>
      <h1>${L({ ko: "왜 근거인가", en: "Why evidence", zh: "为何强调循证", ja: "なぜ根拠なのか" })}</h1>
      <p>${L({ ko: "필라테스 강사 자격과정은 많습니다. 우리가 다르다고 말하려면, 그 근거를 먼저 보여야 한다고 생각했습니다.", en: "There are many Pilates certifications. If we claim to be different, we should show the evidence first.", zh: "普拉提教练课程很多。若要说我们不同，就该先拿出依据。", ja: "ピラティス指導者資格は数多くあります。違うと言うなら、まず根拠を示すべきだと考えました。" })}</p>
      <div class="why-stats">
        <div><b>2016</b><span>EST.</span></div>
        <div><b>8</b><span>${L({ ko: "정규 과목", en: "COURSES", zh: "科目", ja: "科目" })}</span></div>
        <div><b>1,300+</b><span>${L({ ko: "교재 페이지", en: "TEXTBOOK PAGES", zh: "教材页数", ja: "教材ページ" })}</span></div>
        <div><b>56+</b><span>${L({ ko: "수료 기수", en: "CLASSES", zh: "结业期数", ja: "修了期" })}</span></div>
        <div><b>3</b><span>${L({ ko: "운영 국가", en: "COUNTRIES", zh: "运营国家", ja: "運営国" })}</span></div>
      </div>
    </div>

    ${WHY_PILLARS.map((p, i) => `
      <section class="why-pillar ${i % 2 ? "dark" : "light"}">
        <div class="why-pillar-in">
          <div class="why-pillar-head sreveal">
            <div class="why-no">${p.no}</div>
            <div>
              <div class="why-tag">${p.tag}</div>
              <h2>${L(p.name)}</h2>
            </div>
          </div>
          <div class="why-grid">
            <p class="why-lede sreveal">${esc(L(p.lede))}</p>
            <figure class="why-fig sreveal"><img src="${p.img}" alt="" loading="lazy"></figure>
          </div>
          <div class="why-items${p.items.length === 3 ? " three" : ""}">
            ${p.items.map((it, k) => `<div class="why-item sreveal" style="--d:${k * 70}ms"><i>${String(k + 1).padStart(2, "0")}</i><b>${esc(L(it.h))}</b><span>${esc(L(it.p))}</span></div>`).join("")}
          </div>
        </div>
      </section>
      ${WHY_BRIDGE[i] ? `<div class="why-bridge"><span class="sreveal">${esc(L(WHY_BRIDGE[i]))}</span></div>` : ""}
    `).join("")}

    <section class="why-cta sreveal">
      <h2>${L({ ko: "근거는 확인하는 것입니다", en: "Evidence is meant to be checked", zh: "依据是用来核实的", ja: "根拠は確かめるものです" })}</h2>
      <p>${L({ ko: "커리큘럼 · 수료 후 활동 · 비용을 1:1로 안내드립니다. 교재는 목차와 본문 10페이지를 먼저 보실 수 있습니다.", en: "We guide you 1:1 through curriculum, career paths and cost. You can preview the table of contents and 10 pages of any textbook first.", zh: "1对1介绍课程、结业去向与费用。教材可先查看目录与正文10页。", ja: "カリキュラム・修了後・費用を1:1でご案内。教材は目次と本文10ページを先にご覧いただけます。" })}</p>
      <div class="why-cta-btns">
        <a class="wb pri" href="#apply">${L({ ko: "무료 상담 신청", en: "Free consultation", zh: "免费咨询", ja: "無料相談" })}</a>
        <a class="wb gh" href="#curriculum">${L({ ko: "커리큘럼 보기", en: "See the curriculum", zh: "查看课程", ja: "カリキュラムを見る" })}</a>
        <a class="wb gh" href="#store">${L({ ko: "교재 미리보기", en: "Preview textbooks", zh: "教材预览", ja: "教材プレビュー" })}</a>
      </div>
    </section>
  </div>`;

routes.about = () => `
  <section>
    <div class="dsplit dreveal">
      <img src="img/founder_studio.jpg" alt="CPPI 교육 현장">
      <div class="dtxt">
        <div class="eyebrow">ABOUT CPPI</div>
        <h1>${L({ ko: "감각이 아니라,<br>근거로 가르칩니다", en: "We teach with<br>evidence, not intuition", zh: "以循证教学，<br>而非凭感觉", ja: "感覚ではなく、<br>根拠で教えます" })}</h1>
        <p class="dlead">${L({ ko: "한국필라테스교육협회 (CPPI Korea) · Certified Professional Pilates Instructor. EST. 2016 · 한국-캐나다-일본 글로벌 운영.", en: "Korea Pilates Education Association (CPPI Korea) · Certified Professional Pilates Instructor. EST. 2016 · Korea-Canada-Japan.", zh: "韩国普拉提教育协会 (CPPI Korea)。2016年创立 · 韩加日全球运营。", ja: "韓国ピラティス教育協会 (CPPI Korea)。2016年設立 · 韓国-カナダ-日本で運営。" })}</p>
      </div>
    </div>
    <div class="monly">
      ${secHead("ABOUT CPPI", L({ ko: "감각이 아니라 근거로 가르칩니다", en: "We teach with evidence, not intuition", zh: "以循证教学，而非凭感觉", ja: "感覚ではなく根拠で教えます" }), "한국필라테스교육협회 (CPPI Korea) · Certified Professional Pilates Instructor")}
      <img src="img/medical_banner.jpg" alt="" style="border-radius:14px;margin-bottom:12px">
    </div>
    <div class="card" style="margin-bottom:10px"><b>${L({ ko: "협회 개요", en: "Overview", zh: "协会概要", ja: "協会概要" })}</b>
      <p style="font-size:13.5px;color:var(--ink2);margin-top:6px">${br(L({ ko: "EST. 2016 · 2년 집중개발로 교과정 완성 · 한국-캐나다-일본 글로벌 운영. 8개 정규 과정, 총 1,300여 페이지의 출판교재(9권+부교재)로 교육합니다.", en: "EST. 2016 · Curriculum built over 2 years · Korea-Canada-Japan. 8 core courses taught with 1,300+ pages of published textbooks." }))}</p></div>
    <div class="card" style="margin-bottom:10px"><b>${L({ ko: "동작 매뉴얼", en: "Movement Manual", zh: "动作手册", ja: "動作マニュアル" })}</b>
      <p style="font-size:13.5px;color:var(--ink2);margin-top:6px">${br(L({ ko: "매트 53 · 리포머 79 · 캐딜락 62 · 체어 28 · 래더바렐 27 · 아크바렐 29 · 스파인코렉터 39 동작 + 배리에이션 · 모디피케이션 · 소도구 티칭.", en: "Mat 53 · Reformer 79 · Cadillac 62 · Chair 28 · Ladder Barrel 27 · Arc Barrel 29 · Spine Corrector 39 + variations and props." }))}</p></div>
    ${secHead("WHY CPPI", L({ ko: "타 단체와의 차별성", en: "What sets CPPI apart", zh: "与其他机构的差异", ja: "他団体との差別化" }))}
    <div class="grid2">
      <div class="card"><b>${L({ ko: "의료 임상 기반", en: "Clinical Foundation", zh: "医疗临床基础", ja: "医療臨床基盤" })}</b><p style="font-size:12.5px;color:var(--ink2);margin-top:4px">${br(L({ ko: "분당서울대병원 · 보훈복지공단 척추&관절센터 임상경험 기반 - 국내 유일성.", en: "Built on SNUH Bundang and VHS Spine/Joint Center clinical experience." }))}</p></div>
      <div class="card"><b>${L({ ko: "대학 검증", en: "Academic Credentials", zh: "大学验证", ja: "大学検証" })}</b><p style="font-size:12.5px;color:var(--ink2);margin-top:4px">${br(L({ ko: "나사렛대학교 스포츠재활학부 강단 경력의 창립자 직강.", en: "Taught directly by the founder with university faculty experience." }))}</p></div>
      <div class="card"><b>${L({ ko: "실무형 교육", en: "Practical Training", zh: "实务型教育", ja: "実務型教育" })}</b><p style="font-size:12.5px;color:var(--ink2);margin-top:4px">${br(L({ ko: "동작 암기가 아닌 배리에이션·모디피케이션, 창의적인 지도력과 재활 시퀀스 교육.", en: "Variations, modifications, creative teaching and rehab sequencing." }))}</p></div>
      <div class="card"><b>${L({ ko: "국제 운영", en: "International", zh: "国际运营", ja: "国際運営" })}</b><p style="font-size:12.5px;color:var(--ink2);margin-top:4px">${br(L({ ko: "한국 · 캐나다 · 일본 교육 운영, 국제 자격 발급.", en: "Programs in Korea, Canada and Japan with international certification." }))}</p></div>
    </div>
    <div class="note">${L({ ko: "인증 단체 - 한국필라테스교육협회 (CPPI Korea) · 고유번호 201-82-74381 (비영리). 사업 대행: ", en: "Registered non-profit (No. 201-82-74381). Business agency: ", zh: "注册非营利团体 (201-82-74381)。业务代理：", ja: "登録非営利団体 (201-82-74381)。事業代行：" })}${SELLER}</div>
  </section>`;

const FOUNDER_CAREER = {
  ko: ["(현) 한국 필라테스 교육협회장", "(현) 경기도 배구협회 이사", "(현) 리커버링 재활 필라테스 마스터", "(현) 대한 간호정우회 / 간호 Q&A협회 정회원", "(현) 대한 비만학회 정회원", "(전) 나사렛대학교 스포츠재활학과 겸임교수", "(전) 서경대학교 예술교육원 필라테스과정 원장", "(전) 분당 서울대병원 마취통증의학과", "(전) 한국 보훈복지공단 척추&관절센터"],
  en: ["(Now) President, Korea Pilates Education Association", "(Now) Director, Gyeonggi Volleyball Association", "(Now) Recovering Rehab Pilates Master", "(Now) Member, Korean Nursing Associations", "(Now) Member, Korean Society for the Study of Obesity", "(Fmr) Adjunct Professor, Sports Rehabilitation, Korea Nazarene Univ.", "(Fmr) Director, Pilates Program, Seokyeong Univ. Arts Education Center", "(Fmr) Anesthesiology & Pain Medicine, Seoul National University Hospital (SNUH), Bundang", "(Fmr) Spine & Joint Center, Korea Veterans Health Service"],
};
const FOUNDER_TRAINING = {
  ko: ["서울대병원 중환자 전문간호연수", "서울대병원 정형외과 수술후 재활과정", "서울대병원 당뇨 · 고혈압 · 골다공증 관리", "서울대병원 노인간호 및 재활과정"],
  en: ["Seoul National University Hospital (SNUH) Critical Care Nursing Training", "Seoul National University Hospital (SNUH) Post-op Orthopedic Rehabilitation", "Seoul National University Hospital (SNUH) Diabetes · Hypertension · Osteoporosis Care", "Seoul National University Hospital (SNUH) Geriatric Nursing & Rehabilitation"],
};
const FOUNDER_CERTS = ["STOTT PILATES : IMP / IR / ICCB / AMP / AR / RMR1", "ISP (Injury Special Population) 2009~2011", "PMA : Certification Education 2012", "BBU Creating Length & Strength Certification", "BBU Scoliosis Spiral Certification", "BBU : Innovate Mate Sequences for Motor control", "STOTT Pre-Natal Pilates On the Reformer", "POWER PLATE Master Trainer Certification 2022", "RECOVERING Master Trainer Certification 2022"];

routes.founder = () => `
  <section>
    <div class="dsplit dreveal">
      <img src="img/founder_photo.jpg" alt="박은주 교수">
      <div class="dtxt">
        <div class="eyebrow">FOUNDER</div>
        <h1>${L({ ko: "박은주 교수", en: "Prof. Eun-Ju Park", zh: "朴恩珠教授", ja: "パク・ウンジュ教授" })}</h1>
        <p class="dlead">${L({ ko: "최상위 교육자 - 의료·대학이 검증한, 타협 없는 프로필을 요약 없이 공개합니다.", en: "The full, uncompromised profile - clinically and academically verified.", zh: "顶级教育者 - 医疗与大学验证的完整履历。", ja: "医療·大学が検証した妥協なきプロフィールを全公開。" })}</p>
      </div>
    </div>
    <div class="monly">
      ${secHead("FOUNDER", L({ ko: "박은주 교수", en: "Prof. Eun-Ju Park", zh: "朴恩珠教授", ja: "パク・ウンジュ教授" }), L({ ko: "최상위 교육자 - 의료·대학이 검증한, 타협 없는 프로필을 요약 없이 공개합니다.", en: "The full, uncompromised profile - clinically and academically verified.", zh: "顶级教育者 - 医疗与大学验证的完整履历。", ja: "医療·大学が検証した妥協なきプロフィールを全公開。" }))}
      <img src="img/founder_photo.jpg" alt="박은주 교수" style="border-radius:14px;margin-bottom:12px">
    </div>
    <div class="card" style="margin-bottom:10px;background:var(--tint)">
      <b>${L({ ko: "왜 '진짜'는 흉내 낼 수 없는가", en: "Why the real thing can't be imitated", zh: "为何'真材实料'无法模仿", ja: "なぜ「本物」は真似できないのか" })}</b>
      <p style="font-size:13.5px;margin-top:6px">${br(L({ ko: "필라테스 분야에서 서울대병원 임상경험과 전문연수를 함께 보유한 이력은 국내에서 찾기 어렵습니다. 척추·관절센터 임상과 대학 강단을 모두 거친 창립자가 직접 가르칩니다.", en: "Few in Korean Pilates hold both Seoul National University Hospital (SNUH) clinical experience and professional training. The founder teaches directly." }))}</p>
    </div>
    <img src="img/medical_banner.jpg" alt="" style="border-radius:14px;margin-bottom:12px">
    <div class="card" style="margin-bottom:10px"><b>${L({ ko: "주요경력", en: "Career", zh: "主要经历", ja: "主要経歴" })}</b>
      <ul style="font-size:13.5px;color:var(--ink2);margin:8px 0 0 18px;line-height:1.95">${(FOUNDER_CAREER[LANG] || FOUNDER_CAREER.en).map(c => `<li>${esc(c)}</li>`).join("")}</ul></div>
    <div class="card" style="margin-bottom:10px"><b>${L({ ko: "주요연수 - 서울대병원", en: "Professional Training - SNUH", zh: "主要研修 - 首尔大医院", ja: "主要研修 - ソウル大病院" })}</b>
      <ul style="font-size:13.5px;color:var(--ink2);margin:8px 0 0 18px;line-height:1.95">${(FOUNDER_TRAINING[LANG] || FOUNDER_TRAINING.en).map(c => `<li>${esc(c)}</li>`).join("")}</ul></div>
    <div class="card" style="margin-bottom:10px"><b>${L({ ko: "주요자격", en: "Certifications", zh: "主要资格", ja: "主要資格" })}</b>
      <ul style="font-size:13.5px;color:var(--ink2);margin:8px 0 0 18px;line-height:1.95">${FOUNDER_CERTS.map(c => `<li>${esc(c)}</li>`).join("")}</ul></div>
    <div class="card" style="margin-bottom:10px"><b>${L({ ko: "활동", en: "Activities", zh: "活动", ja: "活動" })}</b>
      <p style="font-size:13.5px;color:var(--ink2);margin-top:6px">${br(L({ ko: "IDEA 컨벤션 · CKLZ 피트니스 컨벤션 초청 프레젠터. K-POP 아티스트(가희·JOO)와 배우 황우슬혜 전담 인스트럭터. 2009년부터 강사 교육에 매진.", en: "Invited presenter at IDEA and CKLZ conventions. Personal instructor to K-pop artists and actress Hwang Woo-seul-hye. Educating instructors since 2009." }))}</p></div>
    <div class="grid2">
      <a class="btn ghost" target="_blank" rel="noopener" href="https://namu.wiki/w/%EB%B0%95%EC%9D%80%EC%A3%BC(%EA%B5%90%EC%88%98)">나무위키</a>
      <a class="btn ghost" target="_blank" rel="noopener" href="https://search.naver.com/search.naver?where=m&sm=mtb_etc&mra=bjky&pkid=1&os=13979924&qvt=0&query=%EB%B0%95%EC%9D%80%EC%A3%BC">${L({ ko: "네이버 인물정보", en: "Naver Profile", zh: "Naver人物信息", ja: "Naver人物情報" })}</a>
    </div>
    <div style="height:10px"></div>
    <a class="btn pri" href="#courses">${L({ ko: "박은주 교수 직강 - 교육안내 보기", en: "See the education guide", zh: "查看教育指南", ja: "教育案内を見る" })}</a>
  </section>`;

const masterGrid = () => `<div class="master-grid">${MASTERS.map(m => `<div class="master-card">
  <img src="${m.img}" alt="${esc(m.n.ko)}" loading="lazy">
  <div class="in"><b>${esc(LANG === "ko" ? m.n.ko : m.n.en)}</b><div class="m">${LANG === "ko" ? esc(m.n.en) + " · " : ""}Master</div></div></div>`).join("")}</div>`;

routes.master = () => `
  <section>
    ${secHead("MASTER INSTRUCTORS", L(UI.menu.master), L({ ko: "엄격한 기준의 심화교육과 프레젠터 스피치 과정을 거친 CPPI 교육강사입니다.", en: "Trained through rigorous advanced education and presenter speech courses.", zh: "经过严格深化教育与演讲课程的CPPI教育导师。", ja: "厳格な深化教育とスピーチ課程を経たCPPI教育講師。" }))}
    ${masterGrid()}
    <div class="note">${L({ ko: "마스터 인스트럭터는 심화교육 · 스피치 교육 · 심화과정을 수료하고 실제 강의에서 교육을 담당합니다.", en: "Master instructors complete advanced courses and teach in actual classes.", zh: "大师级导师完成深化课程后担任实际教学。", ja: "マスターは深化課程を修了し実際の講義を担当します。" })}</div>
  </section>`;

routes.curriculum = () => `
  <section>
    ${secHead("CURRICULUM", L({ ko: "CPPI 정규과정 에센셜 커리큘럼", en: "CPPI Essential Curriculum", zh: "CPPI正规课程核心课程", ja: "CPPI正規課程エッセンシャル" }), L({ ko: "모든 과정은 기능해부학과 의학적 근거 위에 설계되었습니다.", en: "Every course is built on functional anatomy and medical evidence.", zh: "所有课程均基于功能解剖学与医学循证设计。", ja: "全課程が機能解剖学と医学的根拠に基づき設計。" }))}
    <img src="img/curriculum_banner.jpg" alt="" style="border-radius:14px;margin-bottom:12px">
    <div class="curriculum-list">
    ${CURRICULUM.map((c, i) => `<div class="card" style="margin-bottom:10px">
      <div style="display:flex;gap:12px">
        <img src="covers/${c.slug}.jpg" alt="" style="width:76px;min-width:76px;aspect-ratio:3/4;object-fit:cover;object-position:top;border-radius:8px;border:1px solid var(--line)">
        <div style="min-width:0"><b style="font-size:15px">${i + 1}. ${esc(L(c.n))}</b>
          <div style="font-size:13px;color:var(--pri);font-weight:700;margin-top:3px">${L({ ko: "강의 시간", en: "Hours", zh: "课时", ja: "講義時間" })}: ${c.hrs}${L({ ko: "시간", en: "h", zh: "小时", ja: "時間" })}</div>
        </div>
      </div>
      <p style="font-size:13px;color:var(--ink2);margin-top:9px;line-height:1.8">${br(esc(L(c.d)))}</p>
      <div style="margin-top:9px;display:flex;gap:6px;flex-wrap:wrap">
        ${c.slug !== "analysis" ? `<button class="btn ghost small" onclick="openViewer(${BOOKS.findIndex(b => b.slug === c.slug)})">${L(UI.btn.preview)}</button>` : ""}
        <a class="btn ghost small" href="#prep">${L(UI.menu.learn)}</a>
      </div></div>`).join("")}
    </div>
    <a class="btn pri" href="#apply">${L(UI.btn.consult)}</a>
  </section>`;

routes.prep = () => `
  <section style="text-align:center;padding-top:60px">
    <img src="img/logo3d.jpg" alt="" style="width:110px;height:110px;border-radius:50%;object-fit:cover;margin:0 auto 18px">
    <h2 class="sec">${L({ ko: "준비중입니다", en: "Coming Soon", zh: "准备中", ja: "準備中です" })}</h2>
    <p class="lead" style="margin-bottom:22px">${L({ ko: "해당 온라인 강의는 공식 유튜브 채널 영상으로 준비되는 대로 오픈됩니다.", en: "This online lecture opens as soon as it is ready on our official channel.", zh: "该在线课程准备就绪后即将上线。", ja: "公式チャンネルで準備でき次第公開されます。" })}</p>
    <a class="btn pri" target="_blank" rel="noopener" href="${OFFICIAL_CHANNEL_URL}">${L(UI.btn.channel)}</a>
    <div style="height:8px"></div>
    <a class="btn ghost" href="#learn">${L({ ko: "온라인 강의 홈으로", en: "Back to Lectures", zh: "返回课程", ja: "講義ホームへ" })}</a>
  </section>`;

/* 교육: CPPI 필라테스 교육안내 */
routes.courses = () => `
  <section>
    ${secHead("EDUCATION", L(UI.menu.courses), "CPPI Pilates Certification Full Course")}
    <img src="img/courses_banner.jpg" alt="CPPI" style="border-radius:14px;margin-bottom:12px">

    <a class="card" href="#founder" style="display:flex;gap:14px;align-items:center;text-decoration:none;margin-bottom:10px">
      <img src="img/founder_face.jpg" alt="박은주 교수" style="width:88px;height:110px;object-fit:cover;object-position:top;border-radius:12px">
      <div><div class="eyebrow" style="margin-bottom:2px">FOUNDER · ${L({ ko: "대표 마스터", en: "Lead Master", zh: "首席大师", ja: "代表マスター" })}</div>
      <b style="font-size:15.5px">${L({ ko: "박은주 교수", en: "Prof. Eun-Ju Park", zh: "朴恩珠教授", ja: "パク・ウンジュ教授" })}</b>
      <div style="font-size:13px;color:var(--ink2);margin-top:3px">${L({ ko: "분당서울대병원 · 척추&관절센터 임상 / 나사렛대 강단 - 프로필 전체 보기 →", en: "Clinical and academic profile - view full →", zh: "临床与大学履历 - 查看全部 →", ja: "臨床·大学経歴 - 全プロフィール →" })}</div></div>
    </a>

    <div class="eyebrow" style="margin-top:6px">MASTER INSTRUCTORS</div>
    <h2 class="sec" style="font-size:18px;margin-bottom:10px">${L({ ko: "마스터 강사", en: "Master Instructors", zh: "大师级导师", ja: "マスター講師" })}</h2>
    ${masterGrid()}
    <div style="height:14px"></div>

    <a class="card" href="#curriculum" style="display:block;text-decoration:none;margin-bottom:10px;background:var(--tint)">
      <b>${L(UI.btn.toCourses)}</b>
      <p style="font-size:13px;color:var(--ink2);margin-top:4px">${L({ ko: "CPPI 정규과정 에센셜 커리큘럼 - 과목별 교재 미리보기 포함 →", en: "Essential curriculum with textbook previews →", zh: "核心课程 - 含教材预览 →", ja: "エッセンシャルカリキュラム - 教材プレビュー付き →" })}</p>
    </a>
    <a class="card" href="#workshop" style="display:block;text-decoration:none;margin-bottom:14px;background:var(--tint2)">
      <b>${L(UI.menu.workshop)}</b>
      <p style="font-size:13px;color:var(--ink2);margin-top:4px">${L({ ko: "현직 강사 · 재활 종사자를 위한 단기 심화 실습 →", en: "Short intensive practice for active instructors →", zh: "面向在职教练的短期深化实操 →", ja: "現役講師向けの短期深化実習 →" })}</p>
    </a>

    <div class="card" style="margin-bottom:9px"><b>${L({ ko: "교육 방식", en: "How we teach", zh: "教学方式", ja: "教育方式" })}</b><p style="font-size:13.5px;color:var(--ink2);margin-top:5px">${br(L({ ko: "이론 강의 + 실기 체득 + 교육생 상호 인스트럭팅(티칭 실습) 반복 - 레슨 실무 중심.", en: "Theory + hands-on practice + repeated peer instructing - lesson-ready training." }))}</p></div>
    <div class="card" style="margin-bottom:9px"><b>${L({ ko: "수료 혜택 · 국제자격증", en: "Certification Benefits", zh: "结业福利·国际证书", ja: "修了特典·国際資格証" })}</b>
      <p style="font-size:13.5px;color:var(--ink2);margin:5px 0 10px">${br(L({ ko: "국제자격증 발급 · L3 정회원 승급 · 수료강사 명단 등재 · 활동 연계 지원. 아래는 실제 자격증입니다.", en: "International certificate · L3 upgrade · graduates listing · career support. Actual certificate below." }))}</p>
      <img src="img/cert_real.jpg" alt="CPPI Certificate" style="border-radius:10px;border:1px solid var(--line)" loading="lazy">
    </div>
    <div class="card" style="margin-bottom:9px"><b>${L({ ko: "모집 · 수강료", en: "Enrollment & Tuition", zh: "招生·学费", ja: "募集·受講料" })}</b><p style="font-size:13.5px;color:var(--ink2);margin-top:5px">${br(L({ ko: "기수별 모집 - 일정과 수강료는 상담 시 안내드립니다. 사업 대행: ", en: "Enrollment by class - schedule and tuition guided in consultation. Business agency: " }))}${SELLER}</p></div>
    <div class="card" style="margin-bottom:12px;background:var(--tint2)"><b>${L({ ko: "졸업생 성과", en: "Graduate Outcomes", zh: "毕业生成果", ja: "卒業生の成果" })}</b><p style="font-size:13.5px;color:var(--ink2);margin-top:5px">${br(L({ ko: "타 아카데미에서 마스터(교육강사)로 활동하는 수료생 다수 배출 - 56기+ 명단은 수료강사 명단에서.", en: "Many graduates now teach as masters at other academies - see the graduates page." }))}</p></div>
    <a class="btn pri" href="#apply">${L(UI.btn.consult)}</a>
  </section>`;

routes.workshop = () => `
  <section>
    ${secHead("WORKSHOP", L(UI.menu.workshop), L({ ko: "현직 강사 · 재활 종사자를 위한 단기 심화 실습.", en: "Short intensive practice for active instructors and rehab professionals.", zh: "面向在职教练·康复从业者的短期深化实操。", ja: "現役講師·リハビリ従事者向けの短期深化実習。" }))}
    <img src="img/workshop_banner.jpg" alt="workshop" style="border-radius:14px;margin-bottom:12px;object-fit:contain;width:100%;background:#fff">
    ${[
      { t: { ko: "'리커버링 재활 필라테스' 원데이 자격과정", en: "'Recovering Rehab Pilates' One-day Certification" }, m: { ko: "8시간(hrs)", en: "8 hrs" } },
      { t: { ko: "임산부 필라테스 전문가 과정", en: "Prenatal Pilates Specialist Course" }, m: { ko: "전문가 과정", en: "Specialist course" } },
      { t: { ko: "소도구 필라테스 전문가 과정", en: "Small Props Pilates Specialist Course" }, m: { ko: "16시간 (과목별 4시간) - 폼롤러 / 써클(필라테스 링) / 미니볼 / BOSU", en: "16 hrs (4 hrs each) - Foam Roller / Circle / Mini Ball / BOSU" } },
    ].map(w => `<div class="vrow"><div class="th" style="font-weight:800;color:var(--pri);font-size:13px">WS</div>
      <div class="tx"><h4>${esc(L(w.t))}</h4><div class="m">${esc(L(w.m))}</div></div></div>`).join("")}
    <div class="card" style="margin:12px 0"><b>${L({ ko: "워크숍 교재 미리보기", en: "Workshop Textbook Preview", zh: "工作坊教材预览", ja: "教材プレビュー" })}</b>
      <div style="height:8px"></div>
      <div class="grid3">
        <button class="btn ghost small" onclick="openProps('foam')">${L({ ko: "폼롤러", en: "Foam Roller", zh: "泡沫轴", ja: "フォームローラー" })}</button>
        <button class="btn ghost small" onclick="openProps('circle')">${L({ ko: "써클", en: "Circle", zh: "普拉提圈", ja: "サークル" })}</button>
        <button class="btn ghost small" onclick="openProps('bosu')">BOSU</button>
      </div>
    </div>
    <p style="font-size:12.5px;color:var(--ink2);margin-bottom:12px">${L({ ko: "지난 워크숍 현장 - 더 많은 사진은", en: "Past workshops - more on", zh: "工作坊现场 - 更多请见", ja: "ワークショップの様子 - 詳しくは" })} <a href="${INSTA_URL}" target="_blank" rel="noopener">@cppi.pilates</a></p>
    <a class="btn pri" target="_blank" rel="noopener" href="${INSTA_URL}">${L({ ko: "워크숍 신청 · 일정 문의 - 인스타그램 DM", en: "Apply / Ask - Instagram DM", zh: "申请·咨询 - Instagram私信", ja: "申込·問い合わせ - Instagram DM" })}</a>
    <div style="height:8px"></div>
    <a class="btn ghost" href="tel:${CONTACT.telIntl}">${L({ ko: "전화 문의", en: "Call", zh: "电话咨询", ja: "電話問い合わせ" })} ${CONTACT.tel}</a>
  </section>`;

/* 온라인 강의 */
routes.learn = () => `
  <section>
    ${secHead("ONLINE LECTURES", L(UI.menu.learn), L({ ko: "과정을 선택하면 강의 목록이 표시됩니다.", en: "Choose a program to see its lectures.", zh: "选择课程查看列表。", ja: "課程を選ぶと講義一覧が表示されます。" }))}
    <a class="card imgcard fit" href="#lecture/reg" style="display:block;margin-bottom:10px"><img src="img/curriculum_banner.jpg" alt=""><div class="cap"><b>${L({ ko: "정규과정 온라인 강의", en: "Certification Course Lectures", zh: "正规课程在线课程", ja: "正規課程オンライン講義" })}</b><span>${L({ ko: "8개 과목 · 등록자/수료자 전용 · 비회원 5분 하이라이트", en: "8 subjects · enrolled/graduates only · 5-min highlights for guests", zh: "8门科目 · 学员专享 · 访客5分钟精华", ja: "8科目 · 受講者限定 · 5分ハイライト" })}</span></div></a>
    <a class="card imgcard" href="#lecture/spine" style="display:block;margin-bottom:10px"><img src="covers/spine.jpg" alt="" style="object-position:top"><div class="cap"><b>${L({ ko: "척추 필라테스 어프로치", en: "Pilates Approach for Spine", zh: "脊柱普拉提方法", ja: "脊柱ピラティスアプローチ" })}</b><span>${L({ ko: "이론 1강 + 실기 2강 · 결제 후 시청", en: "1 theory + 2 practice · watch after purchase", zh: "理论1讲+实操2讲 · 购买后观看", ja: "理論1+実技2 · 購入後視聴" })}</span></div></a>
    <a class="card imgcard fit" href="#lecture/mt" style="display:block;margin-bottom:10px"><img src="img/medical_banner.jpg" alt=""><div class="cap"><b>${L({ ko: "CPPI 필라테스 무브먼트 테라피", en: "CPPI Pilates Movement Therapy", zh: "CPPI运动治疗", ja: "CPPIムーブメントセラピー" })}</b><span>${L({ ko: "경추 · 견관절 · 척추 · 골반 - 결제 후 시청 · 수료증 온라인 발급", en: "Cervical · Shoulder · Spine · Pelvis - e-certificate issued", zh: "颈椎·肩·脊柱·骨盆 - 在线颁发证书", ja: "頸椎·肩·脊柱·骨盤 - 修了証発行" })}</span></div></a>
    <a class="btn ghost" target="_blank" rel="noopener" href="${OFFICIAL_CHANNEL_URL}">${L(UI.btn.channel)}</a>
  </section>`;

routes.lecture = () => {
  const sub = subRoute();
  const back = `<a class="btn ghost small" href="#learn" style="margin-bottom:12px">← ${L({ ko: "온라인 강의 홈", en: "Lectures Home", zh: "课程首页", ja: "講義ホーム" })}</a>`;
  if (sub === "spine") return `
  <section>${back}
    ${secHead("SPINE APPROACH", L({ ko: "척추 필라테스 어프로치", en: "Pilates Approach for Spine" }), L({ ko: "척추질환별 금지 동작과 추천 동작을 의학적 근거로 배우는 과정입니다.", en: "Contraindicated and recommended movements by spinal condition, on medical evidence." }))}
    <img src="covers/spine.jpg" alt="" style="border-radius:14px;margin-bottom:12px;max-height:300px;object-fit:cover;object-position:top;width:100%">
    ${LECT_SPINE.map((v, i) => { const ok = hasAccess("lecture-spine", 0); return `<div class="vrow" onclick="openLecture('lecture-spine',0,${JSON.stringify(esc(L(v.t)))})" style="cursor:pointer">
      <div class="th" style="font-weight:800;font-size:15px">${ok ? "▶" : i + 1}</div>
      <div class="tx"><h4>${esc(L(v.t))}</h4><div class="m">${ok ? L({ ko: "지금 시청하기", en: "Watch now", zh: "立即观看", ja: "今すぐ視聴" }) : L({ ko: "구매 후 시청", en: "Watch after purchase", zh: "购买后观看", ja: "購入後視聴" })}</div></div>
      <span class="badge ${ok ? "free" : "l2"}">${ok ? L({ ko: "시청 가능", en: "UNLOCKED", zh: "可观看", ja: "視聴可" }) : L({ ko: "유료", en: "PAID", zh: "付费", ja: "有料" })}</span></div>`; }).join("")}
    <div class="note">${L({ ko: "결제 확인 후 시청 링크가 제공되며, 과정 수료 시 수료증이 온라인 발급됩니다.", en: "A viewing link is provided after payment; an e-certificate is issued upon completion.", zh: "确认付款后提供观看链接，结业后在线颁发证书。", ja: "決済確認後に視聴リンクを提供、修了時に修了証を発行します。" })}</div>
    <div style="height:10px"></div>
    <button class="btn pri" onclick="openLecture('lecture-spine',0,${JSON.stringify(esc(L({ ko: "척추 필라테스 어프로치", en: "Pilates Approach for Spine" })))})">${hasAccess("lecture-spine", 0) ? L({ ko: "지금 시청하기", en: "Watch now", zh: "立即观看", ja: "今すぐ視聴" }) : L({ ko: "수강권 구매", en: "Buy Access", zh: "购买课程", ja: "受講券を購入" })}</button>
  </section>`;
  if (sub === "mt") return `
  <section>${back}
    ${secHead("MOVEMENT THERAPY", L({ ko: "CPPI 필라테스 무브먼트 테라피", en: "CPPI Pilates Movement Therapy" }), L({ ko: "부위별 통증·기능 개선 특화 과정 - 결제 후 시청, 과정별 수료증 온라인 발급.", en: "Region-specific therapy courses - e-certificate per course." }))}
    ${LECT_MT.map((v, i) => { const ok = hasAccess("lecture-mt", i); return `<div class="vrow" onclick="openLecture('lecture-mt',${i},${JSON.stringify(esc(L(v.t)))})" style="cursor:pointer">
      <div class="th" style="font-weight:800;font-size:15px">${ok ? "▶" : ["C", "S", "V", "P"][i]}</div>
      <div class="tx"><h4>${esc(L(v.t))}</h4><div class="m">${ok ? L({ ko: "지금 시청하기 · 수료증 발급", en: "Watch now · certificate", zh: "立即观看·颁发证书", ja: "今すぐ視聴·修了証" }) : L({ ko: "구매 후 시청 · 수료증 발급", en: "Watch after purchase · certificate", zh: "购买后观看·颁发证书", ja: "購入後視聴·修了証" })}</div></div>
      <span class="badge ${ok ? "free" : "l2"}">${ok ? L({ ko: "시청 가능", en: "UNLOCKED", zh: "可观看", ja: "視聴可" }) : L({ ko: "유료", en: "PAID", zh: "付费", ja: "有料" })}</span></div>`; }).join("")}
    <div class="note">${L({ ko: "전자책(필라테스 전문 지침서)과 함께 구매 시 워크숍 50% 할인 혜택이 제공됩니다.", en: "Buy with the Pro Guidebook e-book for a 50% workshop discount.", zh: "与电子书同购可享工作坊50%折扣。", ja: "電子書籍と同時購入でワークショップ50%割引。" })}</div>
  </section>`;
  const g = grade();
  return `
  <section>${back}
    ${secHead("CERTIFICATION LECTURES", L({ ko: "정규과정 온라인 강의", en: "Certification Course Lectures" }), L({ ko: "정규과정 등록자 및 수료자만 전체 강의를 볼 수 있습니다. 방문자 및 그 외 회원은 5분 하이라이트만 시청 가능합니다.", en: "Full lectures are for enrolled students and graduates only. Guests can watch 5-minute highlights." }))}
    <div class="chip">${L({ ko: "내 등급", en: "My grade", zh: "我的等级", ja: "マイ等級" })}: ${L(UI.grade[g])}</div>
    <div style="height:8px"></div>
    ${LECT_REG.map((v, i) => `<div class="vrow" onclick="openRegLecture(${i})" style="cursor:pointer">
      <div class="th"><img src="covers/${v.slug}.jpg" alt="" loading="lazy" style="object-position:top"></div>
      <div class="tx"><h4>${i + 1}. ${esc(LANG === "ko" ? v.t.ko : v.t.en)}</h4><div class="m">${v.yt ? "" : L(UI.badge.coming)}</div></div>
      ${v.yt ? tierBadge("l2") : `<span class="badge coming">${L(UI.badge.coming)}</span>`}</div>`).join("")}
  </section>`;
};
/* ============================================================
   강의 시청 권한 (Entitlement)
   - 결제가 '완료' 처리된 항목만 시청 가능 (서버 orders 기준)
   - 정규과정 강의는 등급 L2 이상(등록자·수료자)에게 열림
   - 외부 채널로 내보내지 않고 앱 안에서 재생한다
   - 영상 파일이 아직 등록되지 않은 항목은 '준비중'으로 정직하게 안내
============================================================ */
const LECTURE_VIDEO = {
  /* 예: "lecture-spine#0": "media/spine-01.mp4"  (파일 등록 후 채움) */
};
let ENT = [];           // 서버에서 받은 보유 권한 목록
function entKey(type, idx) { return `${type}#${idx}`; }
async function loadEntitlements() {
  if (!SERVER || !me()) { ENT = []; return; }
  try { const r = await apiGet("entitlements"); ENT = (r && r.items) || []; }
  catch (e) { ENT = []; }
}
function hasAccess(type, idx) {
  const k = entKey(type, idx);
  return ENT.some(t => t === k || t === type);   // 구버전 주문(인덱스 없음)도 인정
}
/* 유료 강의 열기 - 권한 있으면 인앱 재생, 없으면 구매로 안내 */
function openLecture(type, idx, title) {
  if (!hasAccess(type, idx)) {
    toast(L({ ko: "구매 후 시청하실 수 있습니다.", en: "Available after purchase.", zh: "购买后可观看。", ja: "購入後に視聴できます。" }));
    buyItem(type, idx);
    return;
  }
  const src = LECTURE_VIDEO[entKey(type, idx)];
  if (!src) {
    openPlayer(title, null);
    return;
  }
  openPlayer(title, src);
}
/* 정규과정 강의 - 등급 기반 */
function openRegLecture(i) {
  const v = LECT_REG[i];
  const title = LANG === "ko" ? v.t.ko : v.t.en;
  if (!v.yt) { go("prep"); return; }
  if (grade() >= 2) { openPlayer(title, LECTURE_VIDEO[`lecture-reg#${i}`] || null); return; }
  toast(L({ ko: "정규과정 등록자·수료자 전용입니다. 상담을 통해 등록하실 수 있습니다.", en: "For enrolled students and graduates only. Contact us to enroll.", zh: "仅限学员与结业生。可通过咨询报名。", ja: "受講者·修了者限定です。ご相談から登録できます。" }));
  go("apply"); render();
}
/* 인앱 플레이어 모달 */
function openPlayer(title, src) {
  const el = $("#player");
  if (!el) return;
  el.querySelector(".ptitle").textContent = title || "";
  const stage = el.querySelector(".pstage");
  stage.innerHTML = src
    ? `<video src="${esc(src)}" controls autoplay playsinline controlsList="nodownload" oncontextmenu="return false"></video>`
    : `<div class="pempty">
         <b>${L({ ko: "영상 준비중입니다", en: "Video coming soon", zh: "视频准备中", ja: "動画準備中" })}</b>
         <p>${L({ ko: "수강 권한은 확인되었습니다. 영상이 등록되면 이 화면에서 바로 시청하실 수 있습니다.", en: "Your access is confirmed. The video will play here once it is uploaded.", zh: "已确认观看权限。视频上线后可在此直接观看。", ja: "受講権限は確認済みです。動画公開後、この画面で視聴できます。" })}</p>
       </div>`;
  el.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closePlayer() {
  const el = $("#player");
  if (!el) return;
  const v = el.querySelector("video");
  if (v) { try { v.pause(); } catch (e) {} }
  el.querySelector(".pstage").innerHTML = "";
  el.classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- 스토어 ---------- */
routes.store = () => `
  <section>
    ${secHead("E-BOOK &amp; TEXTBOOK STORE", L({ ko: "전자책 · 교재 스토어", en: "E-book & Textbook Store", zh: "电子书·教材商店", ja: "電子書籍·教材ストア" }), L({ ko: "모든 교재는 목차와 본문 10페이지를 미리 볼 수 있습니다.", en: "Every book offers a contents + 10-page preview.", zh: "所有教材可预览目录与10页正文。", ja: "全教材で目次と本文10ページをプレビュー可能。" }))}
    <a class="card" href="#books" style="display:block;text-decoration:none;margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
        <div><b>${L({ ko: "정규과정 교재", en: "Textbooks", zh: "正规课程教材", ja: "正規課程教材" })}</b>
        <p style="font-size:13px;color:var(--ink2);margin-top:3px">${L({ ko: "9권 과목별 구매 - 미리보기 후 주문", en: "Buy by subject (9 books)", zh: "按科目购买(9册)", ja: "科目別購入(9冊)" })}</p></div>
        <span class="btn acc small" style="white-space:nowrap">${L({ ko: "과목별 구매 →", en: "Shop →", zh: "购买 →", ja: "購入 →" })}</span>
      </div></a>
    <a class="card" href="#guide" style="display:block;text-decoration:none;margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
        <div><b>${L({ ko: "전자책 - 필라테스 전문 지침서", en: "E-books - Pilates Pro Guidebooks", zh: "电子书 - 专业指南", ja: "電子書籍 - 専門指針書" })}</b>
        <p style="font-size:13px;color:var(--ink2);margin-top:3px">${L({ ko: "무브먼트 테라피 4종 · 구입 시 워크숍 50% 할인", en: "4 Movement Therapy titles · 50% workshop discount", zh: "运动治疗4种 · 工作坊5折", ja: "ムーブメントセラピー4種 · WS50%割引" })}</p></div>
        <span class="btn acc small" style="white-space:nowrap">${L({ ko: "목록 보기 →", en: "Browse →", zh: "查看 →", ja: "一覧 →" })}</span>
      </div></a>
    <div class="card" style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
        <div><b>${L({ ko: "영상 수강권", en: "Video Pass", zh: "课程券", ja: "受講券" })}</b> <span class="badge l2">${L({ ko: "온라인 강의", en: "Lectures", zh: "在线课程", ja: "講義" })}</span>
        <p style="font-size:13px;color:var(--ink2);margin-top:3px">${L({ ko: "척추 어프로치 · 무브먼트 테라피 - 온라인 강의 목록에서 선택", en: "Spine Approach · Movement Therapy - choose from lectures", zh: "从在线课程中选择", ja: "オンライン講義から選択" })}</p></div>
        <a class="btn acc small" href="#learn" style="white-space:nowrap">${L({ ko: "강의 보기 →", en: "View →", zh: "查看 →", ja: "見る →" })}</a>
      </div></div>
    ${secHead("PREVIEW", L({ ko: "교재 미리보기", en: "Book Previews", zh: "教材预览", ja: "教材プレビュー" }))}
    <div class="grid3 books">${BOOKS.map((b, i) => bookCard(b, i)).join("")}</div>
    <div class="note">${L({ ko: "사업 대행: ", en: "Business agency: ", zh: "业务代理：", ja: "事業代行：" })}${SELLER}<br>${L({ ko: "결제수단: 네이버페이 · 카카오페이 · 계좌이체 (", en: "Payment: Naver Pay · Kakao Pay · Bank transfer (", zh: "支付：Naver Pay·Kakao Pay·转账 (", ja: "決済：Naver Pay·Kakao Pay·振込 (" })}${BANK.name} ${BANK.num})</div>
  </section>`;

routes.books = () => `
  <section>
    ${secHead("TEXTBOOKS", L({ ko: "정규과정 교재 - 과목별 구매", en: "Printed Textbooks by Subject", zh: "正规课程教材 - 按科目购买", ja: "正規課程教材 - 科目別購入" }), L({ ko: "실물 교재 · 배송. 미리보기로 목차를 확인한 뒤 주문하세요.", en: "Physical books, shipped. Preview the contents before ordering.", zh: "实体教材·配送。请先预览再订购。", ja: "実物教材·配送。目次を確認してご注文ください。" }))}
    ${BOOKS.map((b, i) => `<div class="shoprow">
      <img src="${COVER(b.slug)}" alt="" loading="lazy" onclick="openViewer(${i})">
      <div class="tx"><h4>${esc(L(b.t))}</h4><div class="m">${b.pages}p · ${L({ ko: "가격 문의", en: "Price on request", zh: "价格咨询", ja: "価格お問い合わせ" })}</div></div>
      <div class="ops">
        <button class="btn ghost small" onclick="openViewer(${i})">${L(UI.btn.preview)}</button>
        <button class="btn acc small" onclick="buyItem('book',${i})">${L(UI.btn.buyInq)}</button>
      </div></div>`).join("")}
    <div class="note">${L({ ko: "세트 구매 · 해외 배송은 상담으로 안내드립니다.", en: "Set purchase and international shipping via consultation.", zh: "整套购买·海外配送请咨询。", ja: "セット購入·海外配送はご相談ください。" })} ${CONTACT.tel}</div>
  </section>`;

routes.guide = () => `
  <section>
    ${secHead("PRO GUIDEBOOKS", L(UI.menu.guide), L({ ko: "CPPI 필라테스 무브먼트 테라피 - 부위별 전문 지침서 (PDF 전자책)", en: "CPPI Pilates Movement Therapy - region-specific guidebooks (PDF)", zh: "CPPI运动治疗 - 部位别专业指南 (PDF)", ja: "CPPIムーブメントセラピー - 部位別指針書 (PDF)" }))}
    <div class="card" style="margin-bottom:12px;background:var(--sunt);border-color:var(--sun)">
      <b>${L({ ko: "구입 혜택", en: "Purchase Benefit", zh: "购买福利", ja: "購入特典" })}</b>
      <p style="font-size:13.5px;margin-top:4px">${L({ ko: "전문 지침서 구입 시 전문 강사 워크숍 50% 할인 혜택을 드립니다.", en: "Buy a guidebook and get 50% off the Pro Instructor Workshop.", zh: "购买指南即享专业工作坊5折优惠。", ja: "指針書購入でワークショップ50%割引。" })}</p>
    </div>
    ${GUIDEBOOKS.map((e, i) => `<div class="shoprow">
      <div style="width:52px;min-width:52px;aspect-ratio:3/4;border-radius:6px;background:var(--tint);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;color:var(--pri)">${["C", "S", "V", "P"][i]}</div>
      <div class="tx"><h4>${esc(L(e.t))}</h4><div class="m">PDF · ${L({ ko: "가격 문의", en: "Price on request", zh: "价格咨询", ja: "価格お問い合わせ" })}</div></div>
      <div class="ops"><button class="btn acc small" onclick="buyItem('ebook',${i})">${L(UI.btn.buy)}</button></div>
    </div>`).join("")}
    <div class="note">${L({ ko: "전자책에는 구매자 이메일 워터마크가 삽입됩니다. 열람 후 환불 불가.", en: "E-books are watermarked with the buyer's email. Non-refundable after access.", zh: "电子书含购买者水印，开通后不可退款。", ja: "電子書籍には透かしが入ります。閲覧後の返金不可。" })}</div>
  </section>`;

routes.ebooks = () => routes.guide();

routes.checkout = () => {
  const item = store.get("cppi_cart", null);
  if (!item) return `<section>${secHead("CHECKOUT", L({ ko: "결제", en: "Checkout", zh: "结算", ja: "決済" }))}<a class="btn pri" href="#store">${L({ ko: "스토어로 가기", en: "Go to Store", zh: "前往商店", ja: "ストアへ" })}</a></section>`;
  const u = me();
  return `
  <section>
    ${secHead("CHECKOUT", L({ ko: "주문 · 결제", en: "Order & Payment", zh: "订单·支付", ja: "注文·決済" }))}
    <div class="card" style="margin-bottom:10px"><b>${L({ ko: "주문 상품", en: "Item", zh: "商品", ja: "商品" })}</b>
      <p style="font-size:14px;margin-top:5px">${esc(item.name)}</p>
      <p style="font-size:12.5px;color:var(--ink2)">${L({ ko: "금액: 상담 후 안내 (가격 확정 전)", en: "Price: guided after consultation", zh: "金额：咨询后告知", ja: "金額：相談後にご案内" })}</p></div>
    ${u ? "" : `<div class="form card" style="margin-bottom:10px">
      <b>${L({ ko: "비회원 주문 정보", en: "Guest Order Info", zh: "非会员订单信息", ja: "非会員注文情報" })}</b>
      <label>${L({ ko: "이름 *", en: "Name *", zh: "姓名 *", ja: "お名前 *" })}</label><input id="gName" required>
      <label>${L({ ko: "연락처 *", en: "Phone *", zh: "电话 *", ja: "電話 *" })}</label><input id="gPhone" required>
      <label>${L({ ko: "이메일 *", en: "Email *", zh: "邮箱 *", ja: "メール *" })}</label><input id="gEmail" type="email" required>
      <p style="font-size:12px;color:var(--ink2);margin-top:8px">${L({ ko: "이미 회원이신가요?", en: "Already a member?", zh: "已是会员？", ja: "会員の方は" })} <a href="#login">${L(UI.btn.login)}</a></p>
    </div>`}
    <div class="card" style="margin-bottom:10px">
      <b>${L({ ko: "결제수단 선택", en: "Payment Method", zh: "支付方式", ja: "決済方法" })}</b>
      <label style="display:flex;gap:10px;align-items:center;border:1.5px solid var(--line);border-radius:10px;padding:12px;margin-top:10px">
        <input type="radio" name="pay" value="naver" style="width:auto" checked> <span><b style="color:#03C75A">N</b> <b>${L({ ko: "네이버페이", en: "Naver Pay", zh: "Naver Pay", ja: "Naver Pay" })}</b> <span style="font-size:12px;color:var(--ink2)">- ${L({ ko: "카드 · 간편결제", en: "Card / Easy pay", zh: "银行卡·快捷支付", ja: "カード·簡単決済" })}</span></span></label>
      <label style="display:flex;gap:10px;align-items:center;border:1.5px solid var(--line);border-radius:10px;padding:12px;margin-top:8px">
        <input type="radio" name="pay" value="kakao" style="width:auto"> <span><b style="color:#B8860B">K</b> <b>${L({ ko: "카카오페이", en: "Kakao Pay", zh: "Kakao Pay", ja: "Kakao Pay" })}</b> <span style="font-size:12px;color:var(--ink2)">- ${L({ ko: "카드 · 간편결제", en: "Card / Easy pay", zh: "银行卡·快捷支付", ja: "カード·簡単決済" })}</span></span></label>
      <label style="display:flex;gap:10px;align-items:center;border:1.5px solid var(--line);border-radius:10px;padding:12px;margin-top:8px">
        <input type="radio" name="pay" value="bank" style="width:auto"> <span><b>${L({ ko: "계좌이체 (무통장 입금)", en: "Bank Transfer", zh: "银行转账", ja: "銀行振込" })}</b> <span style="font-size:12px;color:var(--ink2)">- ${BANK.name} ${BANK.num} · ${L({ ko: "입금 확인 후 처리", en: "processed on confirmation", zh: "确认后处理", ja: "確認後処理" })}</span></span></label>
    </div>
    <div class="note">${L({ ko: "사업 대행: ", en: "Business agency: ", zh: "业务代理：", ja: "事業代行：" })}${SELLER}</div>
    <div style="height:10px"></div>
    <button class="btn pri" onclick="doCheckout()">${L(UI.btn.pay)}</button>
  </section>`;
};

routes.bank = () => {
  const em = me()?.email || store.get("cppi_guest", {}).email || "guest";
  const o = APP.orders.filter(x => x.email === em).slice(-1)[0];
  return `
  <section>
    ${secHead("BANK TRANSFER", L({ ko: "계좌이체 안내", en: "Bank Transfer", zh: "银行转账指南", ja: "銀行振込のご案内" }), L({ ko: "아래 계좌로 입금해 주시면 확인 후 처리해 드립니다.", en: "Deposit to the account below; we'll process on confirmation.", zh: "请向以下账户汇款，确认后处理。", ja: "以下の口座にお振込みください。" }))}
    <div class="card" style="background:var(--tint);margin-bottom:10px;text-align:center">
      <div style="font-size:12.5px;color:var(--ink2)">${L({ ko: "입금 계좌", en: "Account", zh: "汇款账户", ja: "振込口座" })}</div>
      <b style="font-size:19px;display:block;margin:6px 0">${BANK.name} ${BANK.num}</b>
      <div style="font-size:13px;color:var(--ink2)">${L({ ko: "예금주", en: "Holder", zh: "户名", ja: "名義" })}: ${BANK.holder}</div>
      <div style="height:10px"></div>
      <button class="btn ghost small" onclick="copyText('${BANK.name} ${BANK.num}')">${L({ ko: "계좌번호 복사", en: "Copy account no.", zh: "复制账号", ja: "口座番号をコピー" })}</button>
    </div>
    ${o ? `<div class="card" style="margin-bottom:10px"><b>${L({ ko: "주문 정보", en: "Order", zh: "订单", ja: "注文" })}</b><p style="font-size:13.5px;margin-top:5px">${esc(o.item)} · ${o.id}</p><p style="font-size:12.5px;color:var(--rose);font-weight:700">${L({ ko: "상태: 입금 확인중", en: "Status: awaiting deposit", zh: "状态：等待确认", ja: "状態：入金確認中" })}</p></div>` : ""}
    <div class="form card" style="margin-bottom:10px">
      <label>${L({ ko: "입금자명 (주문자와 다르면 입력)", en: "Depositor name (if different)", zh: "汇款人姓名(如不同)", ja: "振込名義(異なる場合)" })}</label>
      <input id="bankName">
      <div style="height:10px"></div>
      <button class="btn pri" onclick="saveBankName()">${L({ ko: "입금 예정으로 접수", en: "Register as pending deposit", zh: "登记为待汇款", ja: "入金予定で受付" })}</button>
    </div>
    <div class="card"><b>${L({ ko: "안내", en: "Notes", zh: "说明", ja: "ご案内" })}</b>
      <ul style="font-size:13px;color:var(--ink2);margin:6px 0 0 18px;line-height:1.85">
        <li>${L({ ko: "24시간 내 입금해 주세요. 미입금 시 주문이 취소될 수 있습니다.", en: "Please deposit within 24h or the order may be cancelled.", zh: "请24小时内汇款。", ja: "24時間以内にお振込みください。" })}</li>
        <li>${L({ ko: "입금 확인 후 열람 권한 부여 · 배송이 시작됩니다.", en: "Access/shipping starts after confirmation.", zh: "确认后开通权限·发货。", ja: "確認後に権限付与·発送します。" })}</li>
        <li>${L({ ko: "문의", en: "Contact", zh: "咨询", ja: "お問い合わせ" })}: ${CONTACT.tel} · ${CONTACT.mail}</li>
      </ul></div>
  </section>`;
};

routes.members = () => `
  <section>
    ${secHead("MEMBERS", "CPPI Members - " + L({ ko: "수료 강사", en: "Graduates", zh: "结业教练", ja: "修了講師" }), L({ ko: "기수 버튼을 누르면 해당 기수의 수료 강사 명단이 표시됩니다. (공식 등록 기준 · 2017~)", en: "Tap a class button to see its graduates. (Official registry, since 2017)", zh: "点击期数按钮显示该期结业教练名单。", ja: "期のボタンで修了講師名簿を表示。" }))}
    ${rosterHTML()}
    <div class="note">"Patience and persistence are vital qualities in the ultimate successful accomplishment of any worthwhile endeavor." - Joseph Pilates<br>${L({ ko: "명단 등재 · 수정 요청", en: "Listing requests", zh: "名单登载·修改申请", ja: "掲載·修正依頼" })}: ${CONTACT.mail}</div>
  </section>`;

routes.apply = () => `
  <section>
    ${secHead("CONSULTATION", L(UI.btn.consult), L({ ko: "남겨주시면 24시간 내 연락드립니다.", en: "We'll reach out within 24 hours.", zh: "我们将在24小时内联系您。", ja: "24時間以内にご連絡します。" }))}
    <form class="form card" onsubmit="return submitLead(event)">
      <label>${L({ ko: "이름 *", en: "Name *", zh: "姓名 *", ja: "お名前 *" })}</label><input name="name" required>
      <label>${L({ ko: "이메일 *", en: "Email *", zh: "邮箱 *", ja: "メール *" })}</label><input name="email" type="email" required>
      <label>${L({ ko: "전화번호 *", en: "Phone *", zh: "电话 *", ja: "電話 *" })}</label><input name="phone" required>
      <label>${L({ ko: "생년 (연도)", en: "Birth year", zh: "出生年份", ja: "生年" })}</label><input name="birth">
      <label>${L({ ko: "거주 및 활동지역", en: "Region", zh: "居住/活动地区", ja: "居住·活動地域" })}</label><input name="region">
      <label>${L({ ko: "관심 과정 *", en: "Interest *", zh: "感兴趣课程 *", ja: "関心課程 *" })}</label>
      <select name="interest" required>
        <option>${L({ ko: "CPPI 정규 자격과정", en: "CPPI Certification Course", zh: "CPPI正规资格课程", ja: "CPPI正規資格課程" })}</option>
        <option>${L(UI.menu.workshop)}</option>
        <option>${L(UI.menu.learn)}</option>
        <option>${L(UI.btn.consult)}</option>
        <option>${L({ ko: "교재 구매", en: "Textbook Purchase", zh: "教材购买", ja: "教材購入" })}</option>
      </select>
      <label style="display:flex;align-items:center;gap:8px;font-weight:600"><input type="checkbox" name="news" style="width:auto"> ${L({ ko: "뉴스레터 구독에 동의합니다", en: "Subscribe to newsletter", zh: "同意订阅通讯", ja: "ニュースレター購読に同意" })}</label>
      <div style="height:12px"></div>
      <button class="btn pri" type="submit">${L(UI.btn.submit)}</button>
    </form>
    <div style="height:12px"></div>
    <a class="btn navertalk" href="${NAVER_TALK}" target="_blank" rel="noopener">
      <span class="ntlogo">talk</span> ${L({ ko: "네이버 톡톡으로 실시간 상담", en: "Live chat via NAVER TalkTalk", zh: "NAVER TalkTalk 实时咨询", ja: "NAVER トークトークで相談" })}</a>
    <div style="height:8px"></div>
    <div class="grid2">
      <a class="btn ghost" href="tel:${CONTACT.telIntl}">${L({ ko: "전화 상담", en: "Call", zh: "电话咨询", ja: "電話相談" })}</a>
      <a class="btn ghost" href="mailto:${CONTACT.mail}">${L({ ko: "이메일 상담", en: "Email", zh: "邮件咨询", ja: "メール相談" })}</a>
    </div>
  </section>`;

routes.support = () => `
  <section>
    ${secHead("FAQ", L({ ko: "자주 묻는 질문", en: "FAQ", zh: "常见问题", ja: "よくある質問" }))}
    <div class="faq">${FAQS.map(f => `<div class="q">
      <div class="top" onclick="this.parentElement.classList.toggle('open')"><h4>${esc(L(f.q))}</h4><span style="color:var(--pri)">+</span></div>
      <div class="a">${esc(L(f.a))}</div></div>`).join("")}</div>
    ${secHead("STORIES", L(UI.menu.stories))}
    <a class="btn ghost" href="#stories">${L({ ko: "수료강사 이야기 · 명단 보기 →", en: "Graduate stories & directory →", zh: "结业教练故事·名单 →", ja: "修了講師の声·名簿 →" })}</a>
    <div style="height:16px"></div>
    <div class="card"><b>${L({ ko: "앱 설치 안내", en: "Install Guide", zh: "安装指南", ja: "インストール案内" })}</b>
      <p style="font-size:13px;color:var(--ink2);margin:6px 0 10px">iPhone: Safari ${L({ ko: "공유 →", en: "Share →", zh: "分享 →", ja: "共有 →" })} "${L(UI.btn.install)}"</p>
      <button class="btn ghost" onclick="installApp()">${L(UI.btn.install)}</button></div>
  </section>`;

routes.login = () => me() ? routes.my() : `
  <section>
    ${secHead("LOGIN", L({ ko: "로그인 · 간편 가입", en: "Log in / Sign up", zh: "登录·注册", ja: "ログイン·登録" }), L({ ko: "이메일로 가입하거나, 카카오·네이버·구글로 간편하게 시작하세요.", en: "Sign up with email, or start instantly with Kakao, NAVER or Google.", zh: "邮箱注册，或使用Kakao·NAVER·Google一键开始。", ja: "メール登録、またはKakao·NAVER·Googleで簡単に開始。" }))}
    <form class="form card" onsubmit="return doLogin(event)">
      <label>${L({ ko: "이메일", en: "Email", zh: "邮箱", ja: "メール" })}</label><input name="email" type="email" required>
      <label>${L({ ko: "비밀번호", en: "Password", zh: "密码", ja: "パスワード" })}</label><input name="pw" type="password" required>
      <div style="height:12px"></div>
      <button class="btn pri" type="submit">${L(UI.btn.login)}</button>
      <div style="height:8px"></div>
      <a class="btn ghost" href="#signup">${L(UI.btn.signup)}</a>
    </form>
    <div class="orline">${L({ ko: "또는 간편하게", en: "or continue with", zh: "或使用", ja: "または" })}</div>
    <button class="socialbtn kakao" onclick="socialLogin('kakao')">${L({ ko: "카카오로 계속하기", en: "Continue with Kakao", zh: "使用Kakao继续", ja: "Kakaoで続ける" })}</button>
    <button class="socialbtn naver" onclick="socialLogin('naver')">${L({ ko: "네이버로 계속하기", en: "Continue with NAVER", zh: "使用NAVER继续", ja: "NAVERで続ける" })}</button>
    <button class="socialbtn google" onclick="socialLogin('google')">${L({ ko: "구글로 계속하기", en: "Continue with Google", zh: "使用Google继续", ja: "Googleで続ける" })}</button>
  </section>`;

routes.signup = () => `
  <section>
    ${secHead("SIGN UP", L(UI.btn.signup), L({ ko: "가입 즉시 L1 일반회원 - 무료 강의와 스토어를 이용할 수 있습니다.", en: "Instant L1 membership - free lectures and store access.", zh: "注册即为L1会员。", ja: "登録後すぐL1会員。" }))}
    <form class="form card" onsubmit="return doSignup(event)">
      <label>${L({ ko: "성명 (국문) *", en: "Name (Korean/Local) *", zh: "姓名(韩文/本地) *", ja: "氏名(現地語) *" })}</label><input name="nameKo" required>
      <label>${L({ ko: "성명 (영문 - 자격증 표기용) *", en: "Name (English - for certificate) *", zh: "姓名(英文-证书用) *", ja: "氏名(英字-資格証用) *" })}</label><input name="nameEn" required>
      <label>${L({ ko: "이메일 *", en: "Email *", zh: "邮箱 *", ja: "メール *" })}</label><input name="email" type="email" required>
      <label>${L({ ko: "연락처 *", en: "Phone *", zh: "电话 *", ja: "電話 *" })}</label><input name="phone" required>
      <label>${L({ ko: "비밀번호 *", en: "Password *", zh: "密码 *", ja: "パスワード *" })}</label><input name="pw" type="password" required minlength="6">
      <label style="display:flex;align-items:center;gap:8px;font-weight:600"><input type="checkbox" required style="width:auto"> ${L({ ko: "(필수) 이용약관 · 개인정보 처리방침 동의", en: "(Required) Agree to Terms & Privacy", zh: "(必选)同意条款与隐私", ja: "(必須)規約·プライバシー同意" })}</label>
      <div style="height:12px"></div>
      <button class="btn pri" type="submit">${L({ ko: "가입하기 → L1 일반회원", en: "Sign up → L1 member", zh: "注册 → L1会员", ja: "登録 → L1会員" })}</button>
    </form>
    <div class="note">${L({ ko: "영문 성명은 국제자격증 · 수료증에 그대로 표기됩니다.", en: "Your English name appears on certificates as entered.", zh: "英文姓名将原样印在证书上。", ja: "英字氏名はそのまま資格証に表記されます。" })}</div>
  </section>`;

routes.my = () => {
  const u = me();
  if (!u) return routes.login();
  const myOrders = APP.orders.filter(o => o.email === u.email);
  return `
  <section>
    ${secHead("MY PAGE", L(UI.menu.my))}
    <div class="card" style="margin-bottom:10px;background:var(--tint)">
      <b style="font-size:16px">${esc(u.nameKo)}</b> <span style="font-size:12.5px;color:var(--ink2)">${esc(u.nameEn)}</span>
      <div style="margin-top:6px"><span class="badge ${u.grade === 3 ? "l3" : u.grade === 2 ? "l2" : "free"}">${L(UI.grade[u.grade])}</span></div>
    </div>
    <div class="tiers" style="margin-bottom:12px">
      <div class="tier t1"><b>${L(UI.grade[1])}</b><span class="m">${L({ ko: "무료 강의 · 스토어 · 워크숍 신청", en: "Free lectures · store · workshops", zh: "免费课程·商店·工作坊", ja: "無料講義·ストア·ワークショップ" })}</span></div>
      <div class="tier t2"><b>${L(UI.grade[2])}</b><span class="m">${L({ ko: "정규과정 온라인 강의 전체 열람", en: "Full lecture access", zh: "全部在线课程", ja: "講義全視聴" })}</span></div>
      <div class="tier t3"><b>${L(UI.grade[3])}</b><span class="m">${L({ ko: "심화 · 보수교육 · 수료강사 등재", en: "Advanced CE · graduates listing", zh: "深化·进修·名单登载", ja: "深化·研修·名簿掲載" })}</span></div>
    </div>
    <div class="card" style="margin-bottom:10px"><b>${L({ ko: "구매 내역", en: "Orders", zh: "购买记录", ja: "購入履歴" })}</b>
      ${myOrders.length ? myOrders.map(o => `<p style="font-size:13.5px;margin-top:6px">${esc(o.item)} - <b style="color:${o.status === "완료" ? "var(--pri)" : "var(--rose)"}">${o.status === "완료" ? L({ ko: "완료", en: "Complete", zh: "完成", ja: "完了" }) : L({ ko: "입금 확인중", en: "Pending", zh: "确认中", ja: "確認中" })}</b> <span style="font-size:11.5px;color:var(--ink2)">(${o.id})</span></p>`).join("") : `<p style="font-size:13px;color:var(--ink2);margin-top:5px">${L({ ko: "구매 내역이 없습니다.", en: "No orders yet.", zh: "暂无记录。", ja: "履歴がありません。" })}</p>`}
    </div>
    <div class="card" style="margin-bottom:10px"><b>${L({ ko: "고객센터", en: "Support", zh: "客服中心", ja: "サポート" })}</b>
      <p style="font-size:13.5px;color:var(--ink2);margin-top:5px">${CONTACT.tel} · ${CONTACT.mail}</p></div>
    <button class="btn ghost" onclick="logout()">${L(UI.btn.logout)}</button>
  </section>`;
};

routes.admin = () => {
  if (sessionStorage.getItem("cppi_admin") !== "1") {
    return `<section>${secHead("ADMIN", "관리자 콘솔", "관리자 비밀번호를 입력하세요.")}
      <form class="form card" onsubmit="return adminLogin(event)">
        <label>비밀번호</label><input name="pw" type="password" required>
        <div style="height:10px"></div><button class="btn pri" type="submit">접속</button></form></section>`;
  }
  const users = APP.users, orders = APP.orders, leads = APP.leads;
  return `
  <section>
    ${secHead("ADMIN", "관리자 콘솔", "회원 등급(3단계) · 입금 확인 · 상담 리드 관리")}
    <h3 style="font-size:15px;margin:6px 0 8px">회원 (${users.length})</h3>
    ${users.length ? users.map((u, i) => `<div class="admin-row">
      <div class="who"><b>${esc(u.nameKo)}</b> <span>${esc(u.email)} · ${esc(u.phone)}</span></div>
      <select onchange="setGrade(${i}, this.value)">
        <option value="1" ${u.grade === 1 ? "selected" : ""}>L1 일반</option>
        <option value="2" ${u.grade === 2 ? "selected" : ""}>L2 교육</option>
        <option value="3" ${u.grade === 3 ? "selected" : ""}>L3 정회원</option>
      </select></div>`).join("") : `<p class="lead">가입 회원이 없습니다.</p>`}
    <h3 style="font-size:15px;margin:16px 0 8px">주문 · 입금 확인 (${orders.length})</h3>
    ${orders.length ? orders.map((o, i) => `<div class="admin-row">
      <div class="who"><b>${esc(o.item)}</b><span>${esc(o.buyer || o.email)} · ${o.method}${o.payer ? " · 입금자 " + esc(o.payer) : ""} · ${o.id}</span></div>
      ${o.status === "완료" ? `<span class="badge free">완료</span>` : `<button class="btn acc small" onclick="confirmPay(${i})">입금 확인</button>`}
    </div>`).join("") : `<p class="lead">주문이 없습니다.</p>`}
    <h3 style="font-size:15px;margin:16px 0 8px">상담 리드 (${leads.length})</h3>
    ${leads.length ? leads.map(l => `<div class="admin-row"><div class="who"><b>${esc(l.name)}</b><span>${esc(l.phone)} · ${esc(l.email)} · ${esc(l.interest)} · ${l.at}</span></div></div>`).join("") : `<p class="lead">접수된 리드가 없습니다.</p>`}
    <div class="note">등급 변경은 즉시 반영. 계좌이체 주문은 입금 확인 시 '완료' 처리되며, 온라인 강의 수강권은 자동 L2 승급.</div>
    <div style="height:10px"></div>
    <button class="btn ghost" onclick="sessionStorage.removeItem('cppi_admin');render()">관리자 로그아웃</button>
  </section>`;
};

/* ---------- 10) 동작 ---------- */
/* 서버(회원 API)가 연결되지 않은 환경 안내.
   소셜 로그인은 각 플랫폼에 등록된 정식 도메인(cppipilates.com)에서만 동작한다.
   미리보기 배포는 주소가 매번 바뀌어 콜백 등록이 불가능하므로 여기서 차단된다. */
function socialStub(name) {
  toast(L({
    ko: "이 미리보기 주소에서는 소셜 로그인을 사용할 수 없습니다. cppipilates.com 에서 이용해 주세요.",
    en: "Social login is unavailable on this preview URL. Please use cppipilates.com.",
    zh: "此预览地址无法使用社交登录，请访问 cppipilates.com。",
    ja: "このプレビューURLではソーシャルログインをご利用いただけません。cppipilates.com をご利用ください。",
  }));
}
/* 소셜 로그인 - 서버(functions)로 이동. 서버 미설정 시 안내 */
function socialLogin(provider) {
  if (!SERVER) { socialStub(provider === "kakao" ? "카카오" : provider); return; }
  location.href = "/api/auth/" + provider;
}

const WELCOME = L({ ko: "가입을 환영합니다! L1 일반회원이 되었습니다.", en: "Welcome! You're now an L1 member.", zh: "欢迎！您已成为L1会员。", ja: "ようこそ！L1会員になりました。" });
async function doSignup(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const email = f.get("email").trim().toLowerCase();
  const rec = { nameKo: f.get("nameKo").trim(), nameEn: f.get("nameEn").trim().toUpperCase(), email, phone: f.get("phone").trim(), pw: f.get("pw") };
  const back = store.get("cppi_cart", null);
  if (SERVER) {
    try { const { user } = await apiPost("signup", rec); APP.session = email; cacheUser(user); toast(WELCOME); go(back ? "checkout" : "my"); }
    catch (err) { toast(err.error === "exists" ? L({ ko: "이미 가입된 이메일입니다.", en: "Email already registered.", zh: "邮箱已注册。", ja: "登録済みのメールです。" }) : L({ ko: "가입 처리 오류. 잠시 후 다시 시도해 주세요.", en: "Signup error. Try again.", zh: "注册出错，请重试。", ja: "登録エラー。再度お試しください。" })); if (err.error === "exists") go("login"); }
    return false;
  }
  const users = APP.users;
  if (users.some(u => u.email === email)) { toast(L({ ko: "이미 가입된 이메일입니다.", en: "Email already registered.", zh: "邮箱已注册。", ja: "登録済みのメールです。" })); go("login"); return false; }
  users.push({ ...rec, pw: btoa(unescape(encodeURIComponent(rec.pw))), grade: 1, joined: new Date().toISOString().slice(0, 10) });
  APP.users = users; APP.session = email;
  toast(WELCOME); go(back ? "checkout" : "my");
  return false;
}
async function doLogin(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const email = f.get("email").trim().toLowerCase();
  const pw = f.get("pw");
  const back = store.get("cppi_cart", null);
  const bad = () => toast(L({ ko: "이메일 또는 비밀번호를 확인해 주세요.", en: "Check your email or password.", zh: "请检查邮箱或密码。", ja: "メールまたはパスワードをご確認ください。" }));
  if (SERVER) {
    try { const { user } = await apiPost("login", { email, pw }); APP.session = email; cacheUser(user); toast(user.nameKo); go(back ? "checkout" : "my"); }
    catch (err) { bad(); }
    return false;
  }
  const u = APP.users.find(x => x.email === email && x.pw === btoa(unescape(encodeURIComponent(pw))));
  if (!u) { bad(); return false; }
  APP.session = email; toast(u.nameKo); go(back ? "checkout" : "my");
  return false;
}
async function logout() { if (SERVER) { try { await apiPost("logout"); } catch (e) {} } APP.session = null; go("home"); }

/* 교재 미리보기 뷰어 (교재/소도구 겸용) */
let vwMode = "book";
let vw = { b: 0, p: 1 };
let pv = { k: "foam", p: 0 };
const PROPS = {
  foam: ["props/foam_cover.jpg", "props/foam1.jpg", "props/foam2.jpg"],
  circle: ["props/circle_cover.jpg", "props/circle1.jpg", "props/circle2.jpg"],
  bosu: ["props/bosu_cover.jpg", "props/bosu1.jpg", "props/bosu2.jpg"],
};
function openViewer(bi) {
  if (bi < 0) return;
  vwMode = "book"; vw = { b: bi, p: 1 };
  $("#viewer").classList.add("open"); document.body.style.overflow = "hidden";
  vwShow();
}
function openProps(k) {
  vwMode = "props"; pv = { k, p: 0 };
  $("#viewer").classList.add("open"); document.body.style.overflow = "hidden";
  vwShow();
}
function closeViewer() { $("#viewer").classList.remove("open"); document.body.style.overflow = ""; }
function vwShow() {
  if (vwMode === "props") {
    const arr = PROPS[pv.k];
    $("#vwTitle").textContent = L({ ko: "워크숍 교재 미리보기", en: "Workshop Textbook Preview", zh: "工作坊教材预览", ja: "教材プレビュー" });
    $("#vwImg").src = arr[pv.p];
    $("#vwCnt").textContent = (pv.p + 1) + " / " + arr.length;
    $("#vwTag").textContent = pv.p === 0 ? L(UI.viewer.cover) : L(UI.viewer.body);
    return;
  }
  const b = BOOKS[vw.b];
  $("#vwTitle").textContent = L(b.t);
  $("#vwImg").src = `books/${b.slug}/p${String(vw.p).padStart(2, "0")}.jpg`;
  $("#vwCnt").textContent = vw.p + " / " + PV_COUNT;
  $("#vwTag").textContent = vw.p === 1 ? L(UI.viewer.cover) : vw.p <= 3 ? L(UI.viewer.toc) : L(UI.viewer.body) + " " + (vw.p - 3) + "/10";
}
function vwMove(d) {
  if (vwMode === "props") {
    const arr = PROPS[pv.k];
    const np = pv.p + d;
    if (np < 0) return;
    if (np >= arr.length) { toast(L(UI.viewer.end)); return; }
    pv.p = np; vwShow(); return;
  }
  const np = vw.p + d;
  if (np < 1) return;
  if (np > PV_COUNT) { toast(L(UI.viewer.end)); return; }
  vw.p = np; vwShow();
}
(function swipe() {
  let x0 = null;
  const st = document.getElementById("vwStage");
  st.addEventListener("touchstart", e => x0 = e.touches[0].clientX, { passive: true });
  st.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) vwMove(dx < 0 ? 1 : -1);
    x0 = null;
  }, { passive: true });
})();

/* 구매 · 결제 */
function buyItem(type, idx) {
  let name;
  if (type === "book") name = L(BOOKS[idx].t) + " - " + L({ ko: "실물 교재", en: "Printed book", zh: "实体教材", ja: "実物教材" });
  else if (type === "ebook") name = L(GUIDEBOOKS[idx].t) + " - " + L({ ko: "전자책 PDF (워크숍 50% 할인 혜택)", en: "E-book PDF (50% workshop discount)", zh: "电子书PDF(工作坊5折)", ja: "電子書籍PDF(WS50%割引)" });
  else if (type === "lecture-mt") name = L(LECT_MT[idx].t) + " - " + L({ ko: "온라인 강의 수강권", en: "Online lecture access", zh: "在线课程券", ja: "オンライン受講券" });
  else name = L({ ko: "척추 필라테스 어프로치 - 온라인 강의 수강권 (3강)", en: "Spine Approach - lecture access (3 lessons)", zh: "脊柱方法 - 课程券(3讲)", ja: "脊柱アプローチ - 受講券(3講)" });
  store.set("cppi_cart", { type, idx, name, key: `${type}#${idx}` });
  go("checkout"); render();
}
function doCheckout() {
  const method = document.querySelector('input[name="pay"]:checked')?.value || "naver";
  const item = store.get("cppi_cart", null); if (!item) { go("store"); return; }
  const u = me();
  let email = u?.email, buyer = u?.nameKo;
  if (!u) {
    const n = $("#gName")?.value.trim(), p = $("#gPhone")?.value.trim(), em = $("#gEmail")?.value.trim();
    if (!n || !p || !em) { toast(L({ ko: "비회원 주문 정보를 입력해 주세요.", en: "Please fill in guest order info.", zh: "请填写非会员订单信息。", ja: "非会員情報をご入力ください。" })); return; }
    email = em.toLowerCase(); buyer = n;
    store.set("cppi_guest", { name: n, phone: p, email });
  }
  if (method !== "bank") {
    if (!PG[method]) { toast(L({ ko: "간편결제는 오픈 준비중입니다. 계좌이체를 이용해 주세요.", en: "Easy pay is coming soon - please use bank transfer.", zh: "快捷支付即将开通，请用银行转账。", ja: "簡単決済は準備中です。振込をご利用ください。" })); return; }
    window.open(PG[method], "_blank");
  }
  const methodKo = method === "bank" ? "계좌이체" : method === "naver" ? "네이버페이" : "카카오페이";
  const orderType = item.key || item.type;
  const rec = { id: "CP" + Date.now().toString().slice(-8), email, buyer, item: item.name, type: orderType, method: methodKo, status: "입금 확인중", payer: "", at: new Date().toISOString().slice(0, 16).replace("T", " ") };
  const orders = APP.orders; orders.push(rec); APP.orders = orders; // 로컬 캐시(즉시 표시)
  if (SERVER) { apiPost("order", { item: item.name, type: orderType, method: methodKo, buyer, email }).catch(() => {}); }
  store.set("cppi_cart", null);
  if (method === "bank") go("bank"); else { toast("OK"); go(u ? "my" : "home"); }
}
function saveBankName() {
  const nm = $("#bankName").value.trim();
  const em = me()?.email || store.get("cppi_guest", {}).email;
  const orders = APP.orders;
  const o = orders.filter(x => x.email === em).slice(-1)[0];
  if (o) { o.payer = nm; APP.orders = orders; }
  if (SERVER) { apiPost("bankname", { email: em, payer: nm }).catch(() => {}); }
  toast(L({ ko: "접수되었습니다. 입금 확인 후 알림드릴게요!", en: "Registered! We'll notify you on confirmation.", zh: "已受理！确认后通知您。", ja: "受付けました！確認後にご連絡します。" }));
  go(me() ? "my" : "home");
}

/* 관리자 */
function adminLogin(e) {
  e.preventDefault();
  if (new FormData(e.target).get("pw") === ADMIN_PASS) { sessionStorage.setItem("cppi_admin", "1"); render(); loadAdmin(); }
  else toast("비밀번호가 올바르지 않습니다.");
  return false;
}
function setGrade(i, g) { const users = APP.users; users[i].grade = Number(g); APP.users = users; if (SERVER && users[i].id) apiPost("admin/grade", { pass: ADMIN_PASS, id: users[i].id, grade: Number(g) }).catch(() => {}); toast(users[i].nameKo + " → L" + g); }
function confirmPay(i) {
  const orders = APP.orders; const o = orders[i];
  o.status = "완료"; APP.orders = orders;
  if (SERVER) apiPost("admin/confirm", { pass: ADMIN_PASS, oid: o.id }).then(() => loadAdmin()).catch(() => {});
  if (o.type && String(o.type).startsWith("lecture")) {
    const users = APP.users; const u = users.find(x => x.email === o.email);
    if (u && u.grade < 2) { u.grade = 2; APP.users = users; toast("입금 확인 - L2 승급 완료"); }
    else toast("입금 확인 완료");
  } else toast("입금 확인 완료");
  render();
}
/* 관리자 데이터 서버 로드 */
async function loadAdmin() {
  if (!SERVER) return;
  try {
    const p = "?pass=" + encodeURIComponent(ADMIN_PASS);
    const a = await apiGet("admin/users" + p), b = await apiGet("admin/orders" + p), c = await apiGet("admin/leads" + p);
    APP.users = a.users;
    APP.orders = b.orders.map(o => ({ id: o.oid, email: o.email, buyer: o.buyer, item: o.item, type: o.type, method: o.method, status: o.status, payer: o.payer, at: o.at }));
    APP.leads = c.leads;
    if (currentRoute() === "admin" && sessionStorage.getItem("cppi_admin") === "1") $("#view").innerHTML = routes.admin();
  } catch (e) {}
}
async function loadMyOrders() {
  if (!SERVER || !me()) return;
  try { const { orders } = await apiGet("orders"); const em = me().email; APP.orders = orders.map(o => ({ ...o, email: em })); if (currentRoute() === "my") $("#view").innerHTML = routes.my(); } catch (e) {}
}

/* 상담 리드 */
function submitLead(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const lead = { name: f.get("name"), email: f.get("email"), phone: f.get("phone"), birth: f.get("birth"), region: f.get("region"), interest: f.get("interest"), news: !!f.get("news"), at: new Date().toISOString().slice(0, 16).replace("T", " ") };
  const leads = APP.leads; leads.push(lead); APP.leads = leads;
  if (SERVER) apiPost("lead", lead).catch(() => {});
  toast(L({ ko: "신청이 접수되었습니다! 24시간 내 연락드립니다.", en: "Received! We'll reach out within 24h.", zh: "已收到！24小时内联系您。", ja: "受付けました！24時間以内にご連絡します。" }));
  const body = encodeURIComponent(`[CPPI]\n${f.get("name")} / ${f.get("phone")} / ${f.get("email")}\n${f.get("interest")} / ${f.get("region") || "-"}`);
  setTimeout(() => { location.href = `mailto:${CONTACT.mail}?subject=${encodeURIComponent("[CPPI] " + f.get("name"))}&body=${body}`; }, 900);
  e.target.reset();
  return false;
}

/* ---------- 11) 헤더 · 시트 · 티커 · 언어 ---------- */
function renderTicker() {
  const one = TICKER.map(t => `<span>✦ ${L(t)}</span>`).join("");
  $("#ticker").innerHTML = one + one;
}
function renderSheet() {
  $("#sheetPanel").innerHTML = `
    <button class="close" onclick="closeSheet()">✕</button>
    <h3>${L(UI.menu.hAssoc)}</h3>
    <a href="#why" onclick="closeSheet()">${L(UI.menu.why)}</a>
    <a href="#about" onclick="closeSheet()">${L(UI.menu.about)}</a>
    <a href="#founder" onclick="closeSheet()">${L(UI.menu.founder)}</a>
    <a href="#master" onclick="closeSheet()">${L(UI.menu.master)}</a>
    <a href="#stories" onclick="closeSheet()">${L(UI.menu.stories)}</a>
    <a href="#members" onclick="closeSheet()">${L(UI.menu.members)}</a>
    <a href="#global" onclick="closeSheet()">${L(UI.menu.global)}</a>
    <h3>${L(UI.menu.hEdu)}</h3>
    <a href="#courses" onclick="closeSheet()">${L(UI.menu.courses)}</a>
    <a href="#curriculum" onclick="closeSheet()">${L(UI.menu.curriculum)}</a>
    <a href="#workshop" onclick="closeSheet()">${L(UI.menu.workshop)}</a>
    <a href="#learn" onclick="closeSheet()">${L(UI.menu.learn)}</a>
    <h3>${L(UI.menu.hUse)}</h3>
    <a href="#store" onclick="closeSheet()">${L(UI.menu.store)}</a>
    <a href="#guide" onclick="closeSheet()">${L(UI.menu.guide)}</a>
    <a href="#apply" onclick="closeSheet()">${L(UI.menu.apply)}</a>
    <a href="#support" onclick="closeSheet()">${L(UI.menu.support)}</a>
    <a href="#my" onclick="closeSheet()">${L(UI.menu.my)}</a>`;
}
function setLang(l) {
  LANG = l; localStorage.setItem("cppi_lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("#lang button").forEach(b => b.classList.toggle("on", b.dataset.l === l));
  renderTicker(); renderSheet(); render();
}
document.addEventListener("click", e => {
  const l = e.target.closest("#lang button");
  if (l) setLang(l.dataset.l);
});

/* 설치 · SW */
function installApp() {
  if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt = null; }
  else toast(L({ ko: 'iPhone: 공유 → "홈 화면에 추가" · Android: 메뉴 → 앱 설치', en: 'iPhone: Share → "Add to Home Screen" · Android: Menu → Install', zh: 'iPhone：分享→添加到主屏幕 · Android：菜单→安装', ja: 'iPhone：共有→ホーム画面に追加 · Android：メニュー→インストール' }));
}
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferredPrompt = e; });
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

/* ---------- 시작 ---------- */
setLang(LANG);
bootServer(); // 서버(D1) 연결 확인 → 있으면 서버 세션/데이터 사용, 없으면 로컬

document.addEventListener("keydown", e => { if (e.key === "Escape") closePlayer(); });
