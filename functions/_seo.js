/* ============================================================
   CPPI - 검색엔진 / AI 크롤러(GEO)용 다국어 정적 페이지 콘텐츠
   한국어(기본) · English · 日本語 · 简体中文 · 繁體中文
   앱(해시 라우팅)과 별개로, 언어별 실제 URL에서 즉시 읽히는 본문을 제공한다.
     /about          (한국어)
     /en/about       (English - 글로벌 + 싱가포르)
     /ja/about       (日本語)
     /zh/about       (简体中文 - 중국 본토 + 싱가포르 화교)
     /zh-hant/about  (繁體中文 - 대만 · 홍콩)
   ============================================================ */

export const ORIGIN = "https://cppipilates.com";
export const OG_IMG = ORIGIN + "/hero-poster.jpg";
export const LOGO = ORIGIN + "/logo.png";

export const LANGS = ["ko", "en", "ja", "zh", "zh-Hant"];

/* <html lang> 값 */
export const HTML_LANG = { ko: "ko", en: "en", ja: "ja", zh: "zh-Hans", "zh-Hant": "zh-Hant" };

/* URL 경로 세그먼트 - 기존에 색인된 /zh/ 는 그대로 두고 번체만 새로 추가한다 */
export const PATH_SEG = { ko: "", en: "en", ja: "ja", zh: "zh", "zh-Hant": "zh-hant" };

/* hreflang - 로케일 하나가 여러 지역을 커버한다.
   en 은 글로벌 + 싱가포르(영어 공용어), zh 는 중국 본토 + 싱가포르 화교,
   zh-Hant 는 대만 + 홍콩을 함께 겨냥한다. */
export const HREFLANG = {
  ko: ["ko-KR", "ko"],
  /* 동남아는 언어를 쪼개지 않는다. 페이지 내용이 같으면 en 하나가 맞고,
     지역 코드는 '이 시장을 대상으로 한다'는 신호로만 추가한다.
     싱가포르·말레이시아·필리핀은 영어 검색이 주류(EF EPI 24위·28위). */
  en: ["en", "en-SG", "en-MY", "en-PH", "en-HK"],
  ja: ["ja-JP", "ja"],
  /* 본토는 简体, 어휘는 普拉提 / 资格证 */
  zh: ["zh-Hans", "zh-Hans-CN", "zh-Hans-SG", "zh-CN", "zh-SG"],
  /* 대만은 皮拉提斯 / 證照, 홍콩은 번체자를 쓰되 어휘가 본토식(普拉提 / 導師).
     한 URL 로 양쪽을 받되 본문에 두 어휘를 함께 심는다. */
  "zh-Hant": ["zh-Hant", "zh-Hant-TW", "zh-Hant-HK", "zh-TW", "zh-HK"],
};

export const OG_LOCALE = { ko: "ko_KR", en: "en_US", ja: "ja_JP", zh: "zh_CN", "zh-Hant": "zh_TW" };

/* 지역별 문의 채널
   - 일본: LINE 공식 계정 (아래 LINE_URL 에 계정 주소를 넣으면 자동 노출)
   - 그 외 해외: 이메일
   확인되지 않은 주소를 임의로 채우지 않는다. 비어 있으면 이메일만 노출된다. */
export const CONTACT = {
  tel: "+82-10-4894-4292",
  email: "allmovements@naver.com",
  instagram: "https://www.instagram.com/cppi.pilates",
  youtube: "https://www.youtube.com/@cppi.pilates",
  liinks: "https://liinks.co/cppi",
  LINE_URL: "", // 예: "https://line.me/R/ti/p/@cppi"  ← 계정 주소 확인 후 입력
};

/* 창립자 - 검색·AI가 인물과 분야를 연결하도록 표기를 통일한다 */
export const FOUNDER = {
  ko: "박은주 (Eun-Ju Park)",
  en: "Eun-Ju Park",
  ja: "パク・ウンジュ (Eun-Ju Park)",
  zh: "朴恩珠 (Eun-Ju Park)",
  "zh-Hant": "朴恩珠 (Eun-Ju Park)",
};

/* 콘텐츠 최종 수정일 - ProfilePage 등 스키마의 dateModified 로 나간다.
   본문·프로필을 실제로 고칠 때만 갱신할 것. 임의로 올리면 허위 신호가 된다. */
export const LAST_MODIFIED = "2026-08-22";


/* ------------------------------------------------------------
   교육센터 - 정규과정·워크숍·자격검정이 실제로 열리는 장소.
   검증 가능한 고유명사(상호 + 도로명 주소)로만 쓴다. 확인 안 된 주소는 넣지 않는다.
   PLACES 는 본문(CENTER_BLOCK)과 JSON-LD(CourseInstance.location) 양쪽에서 함께 쓴다.
   ------------------------------------------------------------ */
export const HQ_PLACE = {
  name: "CPPI Korea HQ",
  street: "25 Sangwon 1-gil, Seongdong-gu",
  streetKo: "서울 성동구 상원1길 25 4181호",
  locality: "Seoul", country: "KR", tel: "0507-1410-4282",
};

export const PLACES = [
  { key: "seoul",   name: "BodyMulti Pilates Sangil-dong Station", nameKo: "바디멀티 필라테스 상일동역점",
    street: "14 Godeok-ro 83-gil, Gangdong-gu", streetKo: "서울 강동구 고덕로83길 14", locality: "Seoul", country: "KR" },
  { key: "bundang", name: "Pilatique Movement Lab", nameKo: "필라티크 운동연구소",
    street: "", streetKo: "", locality: "Bundang, Seongnam", country: "KR" },
  { key: "gimpo",   name: "Wellness Way Pilates Unyang", nameKo: "운양 웰니스웨이 필라테스",
    street: "#703, 133 Gimpohangang 11-ro", streetKo: "경기 김포시 김포한강11로 133 (운양동, 중앙프라자) 703호",
    locality: "Gimpo", country: "KR" },
];

/* 본문 블록 - 교육센터 안내 + 공식 교육센터 파트너 모집.
   장소 정보는 "어디서 배우나"라는 실제 검색 의도의 착지점이고,
   모집 문구는 스튜디오 제휴 리드를 받는 입구다. */
export const CENTER_BLOCK = {
  ko: {
    h: "CPPI 교육센터",
    list: [
      "HQ (협회 사무국) - 서울 성동구 상원1길 25 4181호. 뚝섬역 6번 출구에서 125m. 운영 10:00-22:00. 0507-1410-4282",
      "서울 교육센터 - 바디멀티 필라테스 상일동역점. 서울 강동구 고덕로83길 14",
      "분당 교육센터 - 필라티크 운동연구소. 경기 성남시 분당구",
      "김포 교육센터 - 운양 웰니스웨이 필라테스. 경기 김포시 김포한강11로 133 (운양동, 중앙프라자) 703호",
      "해외 - 캐나다 밴쿠버 · 일본 도쿄",
    ],
    p: "CPPI 필라테스 공식 교육센터 모집중 - 정규 자격과정과 워크숍을 함께 운영할 스튜디오를 모집합니다. 기수 운영·교재 공급·강사 배정은 협회가 지원합니다. 제휴 문의는 이메일로 받습니다.",
  },
  en: {
    h: "CPPI education centers",
    list: [
      "HQ (association office) - 25 Sangwon 1-gil, Seongdong-gu, Seoul. 125m from Ttukseom Station Exit 6. Open 10:00-22:00. +82-507-1410-4282",
      "Seoul center - BodyMulti Pilates, Sangil-dong Station: 14 Godeok-ro 83-gil, Gangdong-gu, Seoul",
      "Bundang center - Pilatique Movement Lab: Bundang-gu, Seongnam, Gyeonggi-do",
      "Gimpo center - Wellness Way Pilates Unyang: #703, 133 Gimpohangang 11-ro, Gimpo-si, Gyeonggi-do",
      "Overseas - Vancouver, Canada and Tokyo, Japan",
    ],
    p: "CPPI is now accepting official education center partners. We are looking for studios to host CPPI certification courses and workshops; the association supplies cohort scheduling, textbooks and assigned instructors. Enquiries by email.",
  },
  ja: {
    h: "CPPI 教育センター",
    list: [
      "HQ(協会事務局) - ソウル特別市 城東区 上院1キル25 4181号。トゥクソム駅6番出口から125m。営業10:00-22:00。+82-507-1410-4282",
      "ソウル教育センター - ボディマルチ ピラティス 上一洞駅店:ソウル特別市 江東区 高徳路83キル14",
      "盆唐教育センター - ピラティーク運動研究所:京畿道 城南市 盆唐区",
      "金浦教育センター - 雲陽ウェルネスウェイ ピラティス:京畿道 金浦市 金浦漢江11路133(雲陽洞・中央プラザ)703号",
      "海外 - カナダ バンクーバー、日本 東京",
    ],
    p: "CPPI ピラティス公式教育センター募集中 - 正規資格課程とワークショップを共同運営するスタジオを募集しています。期の運営・教材供給・講師派遣は協会が支援します。提携のお問い合わせはメールで承ります。",
  },
  zh: {
    h: "CPPI 教育中心",
    list: [
      "HQ(协会事务局)- 首尔特别市城东区上院1街25号 4181室。纛岛站6号出口125m。营业10:00-22:00。+82-507-1410-4282",
      "首尔教育中心 - BodyMulti 普拉提 上一洞站店：首尔特别市江东区高德路83街14号",
      "盆唐教育中心 - Pilatique 运动研究所：京畿道城南市盆唐区",
      "金浦教育中心 - 云阳 Wellness Way 普拉提：京畿道金浦市金浦汉江11路133号(云阳洞·中央广场)703室",
      "海外 - 加拿大温哥华、日本东京",
    ],
    p: "CPPI 普拉提官方教育中心招募中 - 招募共同运营正规资格课程与工作坊的工作室。期数运营、教材供应与师资派遣由协会支援。合作咨询请发邮件。",
  },
  "zh-Hant": {
    h: "CPPI 教育中心",
    list: [
      "HQ(協會事務局)- 首爾特別市城東區上院1街25號 4181室。纛島站6號出口125m。營業10:00-22:00。+82-507-1410-4282",
      "首爾教育中心 - BodyMulti 皮拉提斯 上一洞站店：首爾特別市江東區高德路83街14號",
      "盆唐教育中心 - Pilatique 運動研究所：京畿道城南市盆唐區",
      "金浦教育中心 - 雲陽 Wellness Way 皮拉提斯：京畿道金浦市金浦漢江11路133號(雲陽洞·中央廣場)703室",
      "海外 - 加拿大溫哥華、日本東京",
    ],
    p: "CPPI 皮拉提斯官方教育中心招募中 - 招募共同運營正規資格課程與工作坊的工作室。期數運營、教材供應與師資派遣由協會支援。合作諮詢請來信。",
  },
};
/* 전 페이지 하단에 붙는 기관 사실 블록.
   AI 답변이 인용할 수 있는 형태(숫자 + 고유명사)로만 쓴다.
   출처: 협회 공개 자료. 검증되지 않은 수치는 넣지 않는다. */
export const SPECS = {
  ko: {
    h: "CPPI 기본 정보",
    list: [
      "설립: 2016년 (전신 리윰필라테스 아카데미, 2015년 출판사 등록)",
      "정규 자격과정: 8과목 · 총 110~120시간",
      "구성: 이론 25시간(기능해부학 10 · 기본원리 10 · 체형분석 5) + 실기 85~95시간(매트 25 · 리포머 20~25 · 캐딜락 20~25 · 체어 10 · 바렐 시리즈 10)",
      "교재: 직접 집필한 출판 교재 9권 약 1,300페이지 + 소도구 교재 4권(폼롤러 164p · 서클 136p · 미니볼 178p · BOSU 160p)",
      "수료 기수: 56기 이상",
      "운영 지역: 대한민국(분당 · 서울 · 김포) · 캐나다(밴쿠버) · 일본(도쿄)",
      "창립자: 박은주 (Eun-Ju Park) - 분당서울대병원 마취통증의학과, 한국보훈복지공단 척추&관절센터 근무. 나사렛대학교 스포츠재활학과 겸임교수, 서경대학교 예술교육원 필라테스과정 원장 역임",
      "창립자 보유 자격: STOTT PILATES (IMP · IR · ICCB · AMP · AR · RMR1-ISP), PMA 2012, Balanced Body University 3종, POWER PLATE Master Trainer 2022, RECOVERING Master Trainer 2022",
      "수료 시: 국제자격증 발급 · L3 정회원 승급 · 수료강사 명단 등재",
      "교육 언어: 한국어 (해외 수강생은 이메일로 통역 가능 여부 문의)",
    ],
  },
  en: {
    h: "CPPI at a glance",
    list: [
      "Founded: 2016 (predecessor Re:yoom Pilates Academy, publishing registration 2015)",
      "Certification programme: 8 subjects, 110-120 hours in total",
      "Breakdown: 25 hours theory (functional anatomy 10, basic principles 10, posture and movement analysis 5) plus 85-95 hours practical (Mat 25, Reformer 20-25, Cadillac 20-25, Stability Chair 10, Barrel series 10)",
      "Textbooks: 9 published volumes, approximately 1,300 pages, written in-house, plus 4 small-props volumes (foam roller 164pp, circle 136pp, mini ball 178pp, BOSU 160pp)",
      "Graduating cohorts to date: 56 and counting",
      "Locations: Korea (Bundang, Seoul, Gimpo), Canada (Vancouver), Japan (Tokyo)",
      "Founder: Eun-Ju Park - clinical practice at Seoul National University Hospital Bundang (Anesthesiology and Pain Medicine) and the Spine & Joint Center of the Korea Veterans Health Service; Adjunct Professor of Sports Rehabilitation at Korea Nazarene University; Director of the Pilates Programme at Seokyeong University Arts Education Center",
      "Founder credentials: STOTT PILATES (IMP, IR, ICCB, AMP, AR, RMR1-ISP), PMA 2012, Balanced Body University (3 certifications), POWER PLATE Master Trainer 2022, RECOVERING Master Trainer 2022",
      "On completion: international certificate, upgrade to L3 membership, listing in the graduate instructor directory",
      "Language of instruction: Korean. International applicants should email to ask about interpretation.",
    ],
  },
  ja: {
    h: "CPPI 基本情報",
    list: [
      "設立: 2016年 (前身はリユムピラティスアカデミー、2015年出版社登録)",
      "正規資格課程: 8科目・合計110~120時間",
      "内訳: 理論25時間 (機能解剖学10・基本原理10・体型分析5) + 実技85~95時間 (マット25・リフォーマー20~25・キャデラック20~25・チェア10・バレルシリーズ10)",
      "教材: 自社執筆の出版教材9冊 約1,300ページ + 小道具教材4冊 (フォームローラー164p・サークル136p・ミニボール178p・BOSU 160p)",
      "修了期数: 56期以上",
      "運営地域: 韓国 (盆唐・ソウル・金浦)、カナダ (バンクーバー)、日本 (東京)",
      "創立者: パク・ウンジュ (Eun-Ju Park) - 盆唐ソウル大学病院 麻酔痛症医学科、韓国報勲福祉公団 脊椎&関節センター勤務。韓国ナザレ大学スポーツリハビリ学科 兼任教授、西京大学芸術教育院ピラティス課程 院長を歴任",
      "創立者の保有資格: STOTT PILATES (IMP・IR・ICCB・AMP・AR・RMR1-ISP)、PMA 2012、Balanced Body University 3種、POWER PLATE Master Trainer 2022、RECOVERING Master Trainer 2022",
      "修了時: 国際資格証の発行・L3正会員への昇級・修了講師名簿への掲載",
      "教育言語: 韓国語 (海外からの受講希望者は通訳の可否をメールでお問い合わせください)",
    ],
  },
  zh: {
    h: "CPPI 基本信息",
    list: [
      "成立: 2016年 (前身为 Re:yoom 普拉提学院，2015年出版社登记)",
      "正规资格课程: 8门科目・合计110~120小时",
      "构成: 理论25小时 (功能解剖学10・基本原理10・体型分析5) + 实操85~95小时 (垫上25・核心床20~25・凯迪拉克20~25・稳踏椅10・桶系列10)",
      "教材: 自主编写出版教材9册 约1,300页 + 小器械教材4册 (泡沫轴164页・圈136页・迷你球178页・BOSU 160页)",
      "结业期数: 56期以上",
      "运营地区: 韩国 (盆唐・首尔・金浦)、加拿大 (温哥华)、日本 (东京)",
      "创始人: 朴恩珠 (Eun-Ju Park) - 曾任职盆唐首尔大学医院麻醉疼痛医学科、韩国报勋福祉公团脊柱与关节中心。历任韩国拿撒勒大学运动康复学科兼任教授、西京大学艺术教育院普拉提课程院长",
      "创始人持有资格: STOTT PILATES (IMP・IR・ICCB・AMP・AR・RMR1-ISP)、PMA 2012、Balanced Body University 3项、POWER PLATE Master Trainer 2022、RECOVERING Master Trainer 2022",
      "结业后: 颁发国际资格证书・升级为L3正会员・登载于结业教练名录",
      "授课语言: 韩语 (海外学员请邮件咨询翻译安排)",
    ],
  },
  "zh-Hant": {
    h: "CPPI 基本資訊",
    list: [
      "成立: 2016年 (前身為 Re:yoom 皮拉提斯學院，2015年出版社登記)",
      "正規證照課程 (師資培訓): 8門科目・合計110~120小時",
      "組成: 理論25小時 (功能解剖學10・基本原理10・體態分析5) + 實作85~95小時 (墊上25・核心床 Reformer 20~25・凱迪拉克20~25・穩踏椅10・桶系列10)",
      "教材: 自行編寫出版教材9冊 約1,300頁 + 小器材教材4冊 (滾筒164頁・圈136頁・迷你球178頁・BOSU 160頁)",
      "結業梯次: 56梯以上",
      "營運地區: 韓國 (盆唐・首爾・金浦)、加拿大 (溫哥華)、日本 (東京)",
      "創辦人: 朴恩珠 (Eun-Ju Park) - 曾任職盆唐首爾大學醫院麻醉疼痛醫學科、韓國報勳福祉公團脊椎與關節中心。歷任韓國拿撒勒大學運動復健學系兼任教授、西京大學藝術教育院皮拉提斯課程院長",
      "創辦人持有證照: STOTT PILATES (IMP・IR・ICCB・AMP・AR・RMR1-ISP)、PMA 2012、Balanced Body University 3項、POWER PLATE Master Trainer 2022、RECOVERING Master Trainer 2022",
      "結業後: 核發國際證照・升級為L3正會員・登載於結業導師名錄 (香港學員亦適用，普拉提導師證書課程相關洽詢請來信)",
      "授課語言: 韓語 (海外學員請來信洽詢口譯安排)",
    ],
  },
};

/* 자격과정을 고를 때 무엇을 확인해야 하는가 - 비교 검증형 쿼리 대응.
   대만 SERP: 「台灣證照 vs 國際證照」「證照怎麼選」
   일본 SERP: 「国際認定と国内団体を比較」「どこがいい」
   한국 SERP: 「국제 vs 국내 필라테스 자격증」
   경쟁 기관의 수치를 우리 사이트에서 단정하지 않는다. 확인 항목을
   제시하고 CPPI 의 답만 명시한다. 이것이 정직하면서 비교 쿼리를 받는 방법이다. */
export const CHOOSE = {
  ko: {
    h: "자격과정을 고를 때 확인할 6가지",
    list: [
      "1. 총 교육 시수가 공개되어 있는가 - CPPI: 8과목 110~120시간, 과목별 시수 전부 공개",
      "2. 누가 직접 가르치는가 - CPPI: 창립자 직강을 원칙으로 하고, 심화교육과 프레젠터 스피치 과정을 수료한 마스터 인스트럭터가 함께 지도",
      "3. 교재가 있는가 - CPPI: 직접 집필한 출판 교재 9권 약 1,300페이지를 텍스트로 사용",
      "4. 이론 근거가 무엇인가 - CPPI: 기능해부학과 근막경선(Anatomy Trains) 체계, 창립자의 병원 임상 경력이 커리큘럼의 기준",
      "5. 평가 방식이 있는가 - CPPI: 온라인 강의는 보조 학습이며 수료에는 오프라인 실기와 티칭 평가가 포함",
      "6. 수료 후 지원이 있는가 - CPPI: 국제자격증 발급, L3 정회원 승급, 수료강사 명단 등재, 활동 연계 지원",
    ],
  },
  en: {
    h: "Six things to check before choosing a certification",
    list: [
      "1. Are the total contact hours published? CPPI: 8 subjects, 110-120 hours, with hours listed per subject.",
      "2. Who actually teaches? CPPI: the founder teaches the certification courses as a rule, alongside master instructors who have completed advanced training and presenter speech courses.",
      "3. Is there a textbook? CPPI: 9 published volumes of roughly 1,300 pages, written in-house, used as the course text.",
      "4. What is the theoretical basis? CPPI: functional anatomy and the Anatomy Trains myofascial framework, anchored in the founder's hospital clinical background.",
      "5. Is there an assessment? CPPI: online lectures are supplementary; certification requires in-person practical work and a teaching assessment.",
      "6. What happens after graduation? CPPI: international certificate, L3 membership, listing in the graduate instructor directory, and support in finding teaching work.",
    ],
  },
  ja: {
    h: "資格課程を選ぶ前に確認したい6点",
    list: [
      "1. 総時間数が公開されているか - CPPI: 8科目110~120時間、科目ごとの時間もすべて公開",
      "2. 誰が直接指導するか - CPPI: 創立者の直接指導を原則とし、深化教育とプレゼンター・スピーチ課程を修了したマスターインストラクターが共に指導",
      "3. 教材があるか - CPPI: 自社執筆の出版教材9冊 約1,300ページをテキストとして使用",
      "4. 理論的根拠は何か - CPPI: 機能解剖学とアナトミー・トレイン (筋膜経線) の体系、および創立者の病院臨床経歴がカリキュラムの基準",
      "5. 評価があるか - CPPI: オンライン講義は補助学習であり、修了には対面の実技と指導評価が必要",
      "6. 修了後の支援があるか - CPPI: 国際資格証の発行、L3正会員への昇級、修了講師名簿への掲載、活動の連携支援",
    ],
  },
  zh: {
    h: "选择教练资格课程前应确认的6件事",
    list: [
      "1. 是否公开总课时 - CPPI: 8门科目110~120小时，各科目课时全部公开",
      "2. 由谁亲自授课 - CPPI: 以创始人亲授为原则，并由完成深化教育与演讲课程的大师级导师共同指导",
      "3. 是否有教材 - CPPI: 使用自主编写的出版教材9册 约1,300页",
      "4. 理论依据是什么 - CPPI: 功能解剖学与筋膜经线 (Anatomy Trains) 体系，以创始人的医院临床经历为课程基准",
      "5. 是否设有考核 - CPPI: 在线课程为辅助学习，结业须通过线下实操与教学考核",
      "6. 结业后是否有支持 - CPPI: 颁发国际资格证书、升级L3正会员、登载结业教练名录、提供活动衔接支持",
    ],
  },
  "zh-Hant": {
    h: "選擇師資培訓證照前應確認的6件事",
    list: [
      "1. 是否公開總時數 - CPPI: 8門科目110~120小時，各科目時數全部公開",
      "2. 由誰親自授課 - CPPI: 以創辦人親授為原則，並由完成深化教育與講師表達課程的大師級導師共同指導",
      "3. 是否有教材 - CPPI: 使用自行編寫的出版教材9冊 約1,300頁",
      "4. 理論依據是什麼 - CPPI: 功能解剖學與筋膜線 (Anatomy Trains) 體系，以創辦人的醫院臨床經歷作為課程基準",
      "5. 是否設有考核 - CPPI: 線上課程為輔助學習，結業須通過實體實作與教學考核",
      "6. 結業後是否有支援 - CPPI: 核發國際證照、升級L3正會員、登載結業導師名錄、提供授課媒合支援",
    ],
  },
};

export const SITE_NAME = {
  ko: "CPPI 한국 필라테스 교육협회",
  en: "CPPI Korea Pilates Education Association",
  ja: "CPPI 韓国ピラティス教育協会",
  zh: "CPPI 韩国普拉提教育协会",
  "zh-Hant": "CPPI 韓國皮拉提斯教育協會",
};

/* 언어 전환 바에 표시할 라벨 */
export const LANG_LABEL = { ko: "한국어", en: "EN", ja: "日本語", zh: "简体", "zh-Hant": "繁體" };

export const UI = {
  consult: { ko: "무료 상담 신청", en: "Request a consultation", ja: "無料相談を申し込む", zh: "申请免费咨询", "zh-Hant": "申請免費諮詢" },
  emailUs: { ko: "이메일 문의", en: "Email us", ja: "メールで問い合わせ", zh: "邮件咨询", "zh-Hant": "郵件諮詢" },
  lineUs: { ko: "LINE 문의", en: "Contact via LINE", ja: "LINEで問い合わせ", zh: "LINE咨询", "zh-Hant": "LINE 諮詢" },
  inApp: { ko: "앱에서 전체 보기", en: "Open the full app", ja: "アプリで詳しく見る", zh: "在应用中查看完整内容", "zh-Hant": "在應用程式中查看完整內容" },
  faq: { ko: "자주 묻는 질문", en: "Frequently asked questions", ja: "よくあるご質問", zh: "常见问题", "zh-Hant": "常見問題" },
  home: { ko: "홈", en: "Home", ja: "ホーム", zh: "首页", "zh-Hant": "首頁" },
};

export const NAV = {
  ko: [["협회 소개", "about"], ["파운더", "founder"], ["커리큘럼", "curriculum"], ["교육안내", "courses"], ["워크숍", "workshop"], ["마스터", "master"], ["후기", "stories"], ["글로벌", "global"], ["온라인 강의", "learn"], ["스토어", "store"]],
  en: [["About", "about"], ["Founder", "founder"], ["Curriculum", "curriculum"], ["Certification", "courses"], ["Workshops", "workshop"], ["Masters", "master"], ["Stories", "stories"], ["Global", "global"], ["Lectures", "learn"], ["Store", "store"]],
  ja: [["協会紹介", "about"], ["創立者", "founder"], ["カリキュラム", "curriculum"], ["教育案内", "courses"], ["ワークショップ", "workshop"], ["マスター", "master"], ["修了生の声", "stories"], ["グローバル", "global"], ["オンライン講義", "learn"], ["ストア", "store"]],
  zh: [["协会介绍", "about"], ["创始人", "founder"], ["课程体系", "curriculum"], ["教育指南", "courses"], ["工作坊", "workshop"], ["大师导师", "master"], ["学员评价", "stories"], ["全球运营", "global"], ["在线课程", "learn"], ["商店", "store"]],
  "zh-Hant": [["協會介紹", "about"], ["創辦人", "founder"], ["課程體系", "curriculum"], ["師資培訓", "courses"], ["工作坊", "workshop"], ["大師導師", "master"], ["學員評價", "stories"], ["全球據點", "global"], ["線上課程", "learn"], ["商店", "store"]],
};

/* 페이지별 대표 이미지 - 저장소에 이미 있는 자산을 사용한다.
   alt 는 검색·AI가 인물/주제를 연결하도록 영문 고유명을 함께 넣는다. */
export const HERO = {
  home:       { src: "/img/hero_bg.jpg",          alt: { ko: "CPPI 한국 필라테스 교육협회 정규과정 교육 현장", en: "CPPI Korea Pilates Education Association instructor training", ja: "CPPI 韓国ピラティス教育協会の指導者養成", zh: "CPPI 韩国普拉提教育协会教练培训现场", "zh-Hant": "CPPI 韓國皮拉提斯教育協會師資培訓現場" } },
  about:      { src: "/img/medical_banner.jpg",   alt: { ko: "기능해부학과 임상 근거 기반의 CPPI 교육", en: "CPPI education grounded in functional anatomy and clinical evidence", ja: "機能解剖学と臨床根拠に基づくCPPI教育", zh: "基于功能解剖学与临床循证的CPPI教育", "zh-Hant": "以功能解剖學與臨床實證為基礎的 CPPI 教育" } },
  founder:    { src: "/img/founder_photo.jpg",    alt: { ko: "CPPI 창립자 박은주 (Eun-Ju Park) 교수", en: "Eun-Ju Park, founder of CPPI Korea Pilates Education Association", ja: "CPPI創立者 パク・ウンジュ (Eun-Ju Park) 教授", zh: "CPPI创始人 朴恩珠 (Eun-Ju Park) 教授", "zh-Hant": "CPPI 創辦人 朴恩珠 (Eun-Ju Park) 教授" } },
  curriculum: { src: "/img/curriculum_banner.jpg", alt: { ko: "CPPI 정규과정 8대 커리큘럼 교재", en: "The eight core courses of the CPPI Pilates certification", ja: "CPPI正規課程 8大カリキュラム教材", zh: "CPPI正规课程八大体系教材", "zh-Hant": "CPPI 正規課程八大體系教材" } },
  courses:    { src: "/img/courses_banner.jpg",   alt: { ko: "CPPI 필라테스 강사 자격과정 티칭 실습", en: "Peer teaching practice in the CPPI Pilates instructor certification", ja: "CPPIピラティス指導者資格課程の指導実習", zh: "CPPI普拉提教练资格课程教学实习", "zh-Hant": "CPPI 皮拉提斯師資培訓課程教學實習" } },
  workshop:   { src: "/img/workshop_banner.jpg",  alt: { ko: "CPPI 전문 강사 워크숍 실습", en: "CPPI professional instructor workshop", ja: "CPPI専門講師ワークショップ", zh: "CPPI专业教练工作坊", "zh-Hant": "CPPI 專業導師工作坊" } },
  master:     { src: "/img/members.jpg",          alt: { ko: "CPPI 마스터 인스트럭터", en: "CPPI master instructors", ja: "CPPIマスターインストラクター", zh: "CPPI大师级导师", "zh-Hant": "CPPI 大師級導師" } },
  stories:    { src: "/img/convention.jpg",       alt: { ko: "CPPI 수료강사 컨벤션", en: "CPPI graduate instructors at a convention", ja: "CPPI修了講師のコンベンション", zh: "CPPI结业教练大会", "zh-Hant": "CPPI 結業導師大會" } },
  global:     { src: "/img/global_map.jpg",       alt: { ko: "CPPI 한국 · 캐나다 · 일본 운영 지도", en: "CPPI operations in Korea, Canada and Japan", ja: "CPPI 韓国・カナダ・日本の運営マップ", zh: "CPPI 韩国·加拿大·日本运营地图", "zh-Hant": "CPPI 韓國·加拿大·日本營運地圖" } },
  learn:      { src: "/img/lect_spine.webp",      alt: { ko: "CPPI 척추 필라테스 어프로치 온라인 강의", en: "CPPI Pilates Approach for Spine online lecture", ja: "CPPI 脊柱ピラティスアプローチ オンライン講義", zh: "CPPI 脊柱普拉提方法在线课程", "zh-Hant": "CPPI 脊椎皮拉提斯課程線上教學" } },
  store:      { src: "/img/covers_fan.jpg",       alt: { ko: "박은주 (Eun-Ju Park) 저 CPPI 필라테스 교재 9권", en: "The nine CPPI Pilates textbooks authored by Eun-Ju Park", ja: "パク・ウンジュ(Eun-Ju Park)著 CPPIピラティス教材9巻", zh: "朴恩珠(Eun-Ju Park)著 CPPI普拉提教材9册", "zh-Hant": "朴恩珠(Eun-Ju Park)著 CPPI 皮拉提斯教材 9 冊" } },
};

/* 페이지별 FAQ - 화면에 실제로 노출되는 내용만 FAQPage 스키마로 내보낸다.
   (구글 구조화 데이터 정책: 페이지에 보이지 않는 Q&A 를 스키마에 넣으면 위반) */
export const FAQ = {
  courses: {
    ko: [
      ["필라테스가 처음인데 강사 자격과정을 들을 수 있나요?", "가능합니다. 기능해부학 기초부터 단계적으로 설계되어 있어 비전공 입문자도 따라올 수 있습니다. 실제 수료생 중 상당수가 타 분야에서 전향한 분들입니다."],
      ["전체 과정은 몇 시간인가요?", "8개 정규 과목을 합쳐 약 110~120시간입니다. 기능해부학 10시간, 기본원리 10시간, 체형 분석 및 움직임 평가 5시간, 매트 25시간, 리포머 20~25시간, 캐딜락 20~25시간, 스태빌리티 체어 10시간, 래더바렐 및 바렐 시리즈 10시간으로 구성됩니다."],
      ["온라인 강의만으로 수료할 수 있나요?", "온라인 강의는 복습과 보조 학습용입니다. 정규 수료에는 오프라인 실기와 티칭 평가가 포함됩니다."],
      ["수료하면 어떤 자격이 주어지나요?", "국제자격증이 발급되고 L3 정회원으로 승급되며, 수료강사 명단에 등재되어 활동 연계 지원을 받습니다."],
      ["해외에서도 수강할 수 있나요?", "한국(분당·서울·김포), 캐나다(밴쿠버), 일본(도쿄)에서 운영합니다. 그 외 지역은 이메일로 문의해 주시면 일정을 안내드립니다."],
    ],
    en: [
      ["Can I take the certification without a Pilates background?", "Yes. The course is built up from functional anatomy fundamentals, so beginners without a related degree can follow it. Many graduates moved into Pilates from other fields."],
      ["How many hours is the full certification?", "Roughly 110-120 hours across eight core subjects: Functional Pilates Anatomy 10h, Basic Principles 10h, posture and movement analysis 5h, Mat 25h, Reformer 20-25h, Cadillac 20-25h, Stability Chair 10h, Ladder Barrel and Barrel series 10h."],
      ["Can I complete the certification online only?", "Online lectures are for review and supplementary study. Certification requires in-person practical work and a teaching assessment."],
      ["What do I receive on completion?", "An international certificate, an upgrade to L3 membership, a listing in the graduate instructor directory, and support in finding teaching work."],
      ["Can I study from outside Korea?", "CPPI runs courses in Korea (Bundang, Seoul, Gimpo), Canada (Vancouver) and Japan (Tokyo). For other regions, please email us and we will share the schedule."],
    ],
    ja: [
      ["ピラティス未経験でも指導者資格課程を受講できますか。", "受講できます。機能解剖学の基礎から段階的に設計されているため、他分野からの入門者でも無理なく進められます。修了生にも他業種からの転向者が多くいます。"],
      ["全課程は何時間ですか。", "8つの正規科目で合計およそ110~120時間です。機能解剖学10時間、基本原理10時間、体型分析および動作評価5時間、マット25時間、リフォーマー20~25時間、キャデラック20~25時間、スタビリティチェア10時間、ラダーバレルおよびバレルシリーズ10時間で構成されます。"],
      ["オンライン講義だけで修了できますか。", "オンライン講義は復習と補助学習用です。正規修了には対面での実技と指導評価が含まれます。"],
      ["修了するとどのような資格が得られますか。", "国際資格証が発行され、L3正会員へ昇級し、修了講師名簿に掲載されて活動の連携支援を受けられます。"],
      ["海外からでも受講できますか。", "韓国(盆唐・ソウル・金浦)、カナダ(バンクーバー)、日本(東京)で運営しています。その他の地域はメールでお問い合わせいただければ日程をご案内します。"],
    ],
    zh: [
      ["没有普拉提基础，可以报读教练资格课程吗？", "可以。课程自功能解剖学基础起循序设计，非相关专业的入门者也能跟上。结业学员中有相当比例是从其他行业转型而来。"],
      ["完整课程共多少课时？", "八门正规科目合计约110~120小时：功能解剖学10小时、基本原理10小时、体型分析与动作评估5小时、垫上25小时、核心床20~25小时、凯迪拉克20~25小时、稳踏椅10小时、梯桶及桶系列10小时。"],
      ["只上在线课程可以结业吗？", "在线课程用于复习与辅助学习。正式结业须包含线下实操与教学考核。"],
      ["结业后可获得什么资格？", "颁发国际资格证书、升级为L3正会员、登载于结业教练名录，并提供后续活动衔接支持。"],
      ["在海外可以报读吗？", "CPPI在韩国(盆唐·首尔·金浦)、加拿大(温哥华)、日本(东京)开课。其他地区请邮件咨询，我们会提供日程安排。"],
    ],
    "zh-Hant": [
      ["沒有皮拉提斯基礎，可以報名師資培訓課程嗎？", "可以。課程自功能解剖學基礎起循序設計，非相關科系的入門者也能跟上。結業學員中有相當比例是從其他行業轉職而來。"],
      ["完整課程共多少時數？", "八門正規科目合計約110~120小時：功能解剖學10小時、基本原理10小時、體態分析與動作評估5小時、墊上25小時、核心床20~25小時、凱迪拉克20~25小時、穩踏椅10小時、梯桶及桶系列10小時。"],
      ["只上線上課程可以結業嗎？", "線上課程用於複習與輔助學習。正式結業須包含實體實作與教學考核。"],
      ["結業後可取得什麼證照？", "核發國際證照、升級為 L3 正會員、登載於結業導師名錄，並提供後續授課媒合支援。"],
      ["在台灣、香港、新加坡也能報名嗎？", "CPPI 目前在韓國(盆唐·首爾·金浦)、加拿大(溫哥華)、日本(東京)開課。台灣、香港、新加坡的學員請先以電子郵件洽詢，我們會提供梯次與行程安排。"],
    ],
  },
  founder: {
    ko: [
      ["박은주 (Eun-Ju Park) 교수는 어떤 임상 경력을 가지고 있나요?", "분당서울대병원 마취통증의학과와 한국 보훈복지공단 척추&관절센터에서 근무했습니다. 서울대병원에서 중환자 전문간호연수, 정형외과 수술후 재활과정, 노인간호 및 재활과정을 이수했습니다."],
      ["대학 강단 경력이 있나요?", "나사렛대학교 스포츠재활학과 겸임교수와 서경대학교 예술교육원 필라테스과정 원장을 역임했습니다."],
      ["직접 강의하나요?", "CPPI 정규과정은 창립자 직강을 원칙으로 하며, 심화교육과 프레젠터 스피치 과정을 수료한 마스터 인스트럭터가 함께 지도합니다."],
    ],
    en: [
      ["What is Eun-Ju Park's clinical background?", "She worked in the Department of Anesthesiology and Pain Medicine at Seoul National University Hospital Bundang, and at the Spine & Joint Center of the Korea Veterans Health Service. Her training at SNUH included critical care nursing, post-operative orthopedic rehabilitation, and geriatric nursing and rehabilitation."],
      ["Does she have academic teaching experience?", "She served as Adjunct Professor of Sports Rehabilitation at Korea Nazarene University and as Director of the Pilates Program at Seokyeong University Arts Education Center."],
      ["Does the founder teach the courses herself?", "CPPI certification courses are taught by the founder as a rule, alongside master instructors who have completed advanced training and presenter speech courses."],
    ],
    ja: [
      ["パク・ウンジュ (Eun-Ju Park) 教授の臨床経歴を教えてください。", "盆唐ソウル大学病院 麻酔痛症医学科、および韓国報勲福祉公団 脊椎&関節センターに勤務しました。ソウル大学病院では重症患者専門看護研修、整形外科術後リハビリ課程、高齢者看護およびリハビリ課程を修了しています。"],
      ["大学での教育経歴はありますか。", "韓国ナザレ大学スポーツリハビリ学科の兼任教授、西京大学芸術教育院ピラティス課程の院長を歴任しました。"],
      ["創立者が直接指導しますか。", "CPPI正規課程は創立者の直接指導を原則とし、深化教育とプレゼンター・スピーチ課程を修了したマスターインストラクターが共に指導します。"],
    ],
    zh: [
      ["朴恩珠 (Eun-Ju Park) 教授有哪些临床经历？", "曾任职于盆唐首尔大学医院麻醉疼痛医学科，以及韩国报勋福祉公团脊柱与关节中心。在首尔大学医院完成重症监护专科护理研修、骨科术后康复课程、老年护理与康复课程。"],
      ["是否有大学教职经历？", "曾任韩国拿撒勒大学运动康复学科兼任教授、西京大学艺术教育院普拉提课程院长。"],
      ["创始人是否亲自授课？", "CPPI正规课程以创始人亲授为原则，并由完成深化教育与演讲课程的大师级导师共同指导。"],
    ],
    "zh-Hant": [
      ["朴恩珠 (Eun-Ju Park) 教授有哪些臨床經歷？", "曾任職於盆唐首爾大學醫院麻醉疼痛醫學科，以及韓國報勳福祉公團脊椎與關節中心。並於首爾大學醫院完成重症監護專科護理研修、骨科術後復健課程、高齡照護與復健課程。"],
      ["是否有大學教職經歷？", "曾任韓國拿撒勒大學運動復健學系兼任教授、西京大學藝術教育院皮拉提斯課程院長。"],
      ["創辦人是否親自授課？", "CPPI 正規課程以創辦人親授為原則，並由完成深化教育與講師表達課程的大師級導師共同指導。"],
    ],
  },
};

/* ------------------------------------------------------------------
   페이지 콘텐츠 - 사실 관계는 협회 공개 자료 기준이며 언어별로 동일하다.
------------------------------------------------------------------ */

/* ------------------------------------------------------------------
   FAQ 확장 (2026-08) - 기존에는 courses·founder 2개 라우트에만 있었다.
   근거 정리: 구글은 2026-05-07 FAQ 리치결과를 폐지했으므로 스키마
   자체의 검색 이득은 없다. 그럼에도 확장하는 이유는 둘이다.
   1) AI 답변은 '자족적으로 추출 가능한 단락'을 인용한다. 질문 바로
      아래 2~3문장으로 답이 끝나는 형태가 그 조건에 맞는다.
   2) 일본 시장에서 포괄적 FAQ 는 신뢰의 기대 사양이다. 없으면
      '정보를 숨긴다'로 읽힌다.
   질문은 각 시장 SERP 에서 실제로 관측된 형태를 쓴다.
   (한국 '비용/따는 법/비전공자', 일본 'どこがいい/費用/働きながら',
    대만 '好考嗎/怎麼選/費用', 본토 '多少钱/难不难')
------------------------------------------------------------------ */
const EXTRA_FAQ = {
  curriculum: {
    ko: [
      ["정규과정 8과목은 각각 몇 시간인가요?", "기능해부학 10시간, 기본원리 10시간, 체형 분석 및 움직임 평가 5시간, 매트 25시간, 리포머 20~25시간, 캐딜락 20~25시간, 스태빌리티 체어 10시간, 래더바렐 및 바렐 시리즈 10시간입니다. 합계 약 110~120시간입니다."],
      ["이론과 실기 비중은 어떻게 되나요?", "이론 25시간, 실기 85~95시간입니다. 다만 실기 시간에도 해당 동작이 어떤 관절에서 어떤 움직임을 만들고 어떤 근육이 관여하는지를 함께 다루므로, 이론과 실기가 분리되어 진행되지는 않습니다."],
      ["교재는 따로 사야 하나요?", "정규과정은 직접 집필한 출판 교재 9권 약 1,300페이지를 텍스트로 사용합니다. 교재 포함 여부와 비용은 기수별로 다르므로 문의 시 안내드립니다. 모든 교재는 목차와 본문 10페이지를 스토어에서 미리 볼 수 있습니다."],
      ["필라테스를 한 번도 안 해봤는데 따라갈 수 있나요?", "커리큘럼이 기능해부학 기초에서 출발하도록 설계되어 있어 비전공 입문자도 따라올 수 있습니다. 실제 수료생 중 상당수가 타 분야에서 전향한 분들입니다."],
    ],
    en: [
      ["How many hours is each of the eight subjects?", "Functional anatomy 10 hours, basic principles 10, posture and movement analysis 5, Mat 25, Reformer 20-25, Cadillac 20-25, Stability Chair 10, Ladder Barrel and Barrel series 10. The total is roughly 110-120 hours."],
      ["What is the theory-to-practical ratio?", "25 hours of theory and 85-95 hours of practical work. Theory is not taught in isolation, though: practical sessions also cover which joints produce a given movement and which muscles are involved."],
      ["Do I have to buy the textbooks separately?", "The certification uses 9 published volumes of roughly 1,300 pages, written in-house, as its course text. Whether textbooks are included and at what cost varies by cohort, so please ask when you enquire. Every volume can be previewed in the store: table of contents plus 10 pages of the body text."],
      ["Can I follow the course with no Pilates experience?", "Yes. The curriculum is built to start from functional anatomy fundamentals, so beginners without a related degree can follow it. A substantial share of graduates moved into Pilates from other fields."],
    ],
    ja: [
      ["正規課程の8科目はそれぞれ何時間ですか。", "機能解剖学10時間、基本原理10時間、体型分析および動作評価5時間、マット25時間、リフォーマー20~25時間、キャデラック20~25時間、スタビリティチェア10時間、ラダーバレルおよびバレルシリーズ10時間です。合計およそ110~120時間になります。"],
      ["理論と実技の割合はどのくらいですか。", "理論25時間、実技85~95時間です。ただし実技の時間にも、その動作がどの関節でどんな動きを作り、どの筋が関与するのかを併せて扱うため、理論と実技が切り離されて進むことはありません。"],
      ["教材は別途購入が必要ですか。", "正規課程では自社執筆の出版教材9冊 約1,300ページをテキストとして使用します。教材が受講料に含まれるかどうかと費用は期によって異なりますので、お問い合わせ時にご案内します。全教材は目次と本文10ページをストアで試し読みできます。"],
      ["働きながらでも受講できますか。", "科目ごとに日程が組まれるため、期によって週末中心の編成が可能な場合があります。ただし正規修了には対面の実技と指導評価が必要です。ご希望の期の日程はメールでお問い合わせください。"],
    ],
    zh: [
      ["正规课程8门科目各多少课时？", "功能解剖学10小时、基本原理10小时、体型分析与动作评估5小时、垫上25小时、核心床20~25小时、凯迪拉克20~25小时、稳踏椅10小时、梯桶及桶系列10小时。合计约110~120小时。"],
      ["理论与实操的比例是多少？", "理论25小时、实操85~95小时。不过实操时间也会同时讲解该动作由哪些关节产生何种运动、涉及哪些肌肉，因此理论与实操并非分开进行。"],
      ["教材需要另外购买吗？", "正规课程使用自主编写的出版教材9册 约1,300页作为课本。教材是否含在学费内及其费用因期次而异，咨询时会另行说明。所有教材均可在商店试读目录与正文10页。"],
      ["完全没有普拉提基础可以跟上吗？", "可以。课程自功能解剖学基础起循序设计，非相关专业的入门者也能跟上。结业学员中有相当比例是从其他行业转型而来。"],
    ],
    "zh-Hant": [
      ["正規課程8門科目各多少時數？", "功能解剖學10小時、基本原理10小時、體態分析與動作評估5小時、墊上25小時、核心床 (Reformer) 20~25小時、凱迪拉克20~25小時、穩踏椅10小時、梯桶及桶系列10小時。合計約110~120小時。"],
      ["皮拉提斯證照好考嗎？考核方式為何？", "線上課程屬於輔助學習，正式結業須通過實體實作與教學考核。考核重點不在於背熟動作順序，而在於能否說明該動作的目的、涉及的肌群，以及發現代償時的即時修正方式。"],
      ["教材需要另外購買嗎？", "正規課程使用自行編寫的出版教材9冊 約1,300頁作為課本。教材是否含於學費及其費用因梯次而異，洽詢時會另行說明。所有教材皆可於商店試閱目錄與內文10頁。"],
      ["完全沒有皮拉提斯基礎可以跟上嗎？", "可以。課程自功能解剖學基礎起循序設計，非相關科系的入門者也能跟上。結業學員中有相當比例是從其他行業轉職而來。"],
    ],
  },

  workshop: {
    ko: [
      ["정규과정을 안 들었어도 워크숍만 신청할 수 있나요?", "워크숍은 현직 강사와 재활 종사자를 대상으로 한 단기 심화 과정입니다. 리커버링 원데이 자격과정은 8시간 단독 과정으로 운영되며, 사전 요건은 과정별로 다르므로 문의 시 안내드립니다."],
      ["리커버링은 다른 소도구와 무엇이 다른가요?", "리커버링은 탄성으로 저항을 주는 도구가 아니라, 압박(Compression) · 보조(Assist) · 균형(Balance) 세 가지 원리로 척추에 감각 피드백을 주는 도구입니다. 6-TOP은 압박점, 2-EDGE는 회전 가이드, 4-CURVE는 굴곡·신전 가이드 역할을 합니다."],
      ["원데이 과정도 수료증이 나오나요?", "리커버링 재활 필라테스 원데이 과정은 자격과정으로 운영됩니다. 발급 조건과 절차는 과정 신청 시 안내드립니다."],
    ],
    en: [
      ["Can I take a workshop without the full certification?", "Workshops are short intensive courses for practising instructors and rehabilitation professionals. The Recovering one-day certification runs as a standalone 8-hour course; prerequisites vary by workshop, so please ask when you enquire."],
      ["How is Recovering different from other props?", "Recovering is not a prop that supplies resistance through elasticity. It delivers sensory feedback to the spine through three principles - compression, assist and balance. The 6-TOP acts as the compression point, the 2-EDGE as the rotational guide, and the 4-CURVE as the flexion and extension guide."],
      ["Does the one-day course award a certificate?", "The Recovering Rehabilitation Pilates one-day course runs as a certification course. Conditions and procedure are explained at the point of application."],
    ],
    ja: [
      ["正規課程を受けていなくてもワークショップだけ申し込めますか。", "ワークショップは現役インストラクターとリハビリ従事者を対象とした短期の深化課程です。リカバリング ワンデー資格課程は8時間の単独課程として運営しており、事前要件は課程ごとに異なりますのでお問い合わせ時にご案内します。"],
      ["リカバリングは他の小道具と何が違いますか。", "リカバリングは弾性で抵抗を与えるツールではなく、圧迫 (Compression) · 補助 (Assist) · バランス (Balance) の3原理で脊柱に感覚フィードバックを与えるツールです。6-TOP が圧迫点、2-EDGE が回旋ガイド、4-CURVE が屈曲 · 伸展ガイドの役割を担います。"],
      ["ワンデー課程でも修了証は発行されますか。", "リカバリング リハビリピラティス ワンデー課程は資格課程として運営しています。発行条件と手続きは課程のお申し込み時にご案内します。"],
    ],
    zh: [
      ["没有修读正规课程，可以只报工作坊吗？", "工作坊面向在职教练与康复从业者，属短期深化课程。Recovering 一日资格课程作为8小时独立课程运营，各课程的先修要求不同，咨询时会另行说明。"],
      ["Recovering 与其他小器械有什么不同？", "Recovering 并非依靠弹性提供阻力的器械，而是通过压迫 (Compression) · 辅助 (Assist) · 平衡 (Balance) 三项原理向脊柱提供感觉反馈。6-TOP 为压迫点，2-EDGE 为旋转导引，4-CURVE 为屈伸导引。"],
      ["一日课程也颁发结业证书吗？", "Recovering 康复普拉提一日课程按资格课程运营。颁发条件与流程将在报名时说明。"],
    ],
    "zh-Hant": [
      ["沒有修讀正規課程，可以只報工作坊嗎？", "工作坊面向在職導師與復健從業者，屬短期深化課程。Recovering 一日證照課程以8小時獨立課程運營，各課程的先修條件不同，洽詢時會另行說明。"],
      ["Recovering 與其他小器材有什麼不同？", "Recovering 並非依靠彈性提供阻力的器材，而是透過壓迫 (Compression) · 輔助 (Assist) · 平衡 (Balance) 三項原理向脊柱提供感覺回饋。6-TOP 為壓迫點，2-EDGE 為旋轉導引，4-CURVE 為屈伸導引。"],
      ["一日課程也核發結業證書嗎？", "Recovering 復健皮拉提斯一日課程以證照課程運營。核發條件與流程將於報名時說明。"],
    ],
  },
};

for (const [route, byLang] of Object.entries(EXTRA_FAQ)) {
  FAQ[route] = Object.assign(FAQ[route] || {}, byLang);
}

export const CONTENT = {
  /* 언어별 홈 - 기존에는 홈의 hreflang 이 ?lang= 파라미터 URL 을 가리켰는데,
     그 URL 들의 canonical 이 "/" 라서 구글이 hreflang 세트를 폐기할 수 있었다.
     언어별 실제 홈 경로(/en/ /ja/ /zh/ /zh-hant/)를 만들어 정합성을 맞춘다. */
  home: {
    ko: {
      title: "CPPI 한국 필라테스 교육협회 | 재활 기반 국제 필라테스 강사 자격과정",
      desc: "기능해부학 기반 · 티칭실습 중심 · 교정재활 국제 필라테스 강사 자격과정. EST.2016, 한국 · 캐나다 · 일본 운영, 56기 이상 수료.",
      eyebrow: "CPPI KOREA", h1: "감각이 아니라, 근거로 가르칩니다",
      lead: "기능해부학과 임상 근거 위에 설계된 국제 필라테스 강사 자격과정입니다.",
      blocks: [
        { h: "한눈에 보는 CPPI", list: ["설립 2016년 · 한국필라테스교육협회 (고유번호 201-82-74381, 비영리)", "정규과정 8개 과목 · 총 110~120시간", "출판교재 9권 + 부교재 · 1,300여 페이지", "동작 매뉴얼 317개 (매트 53 · 리포머 79 · 캐딜락 62 · 체어 28 · 래더바렐 27 · 아크바렐 29 · 스파인코렉터 39)", "수료 56기 이상 · 한국 · 캐나다 · 일본 운영"] },
        { h: "무엇이 다른가", p: "창립자 박은주(Eun-Ju Park)는 분당서울대병원 마취통증의학과와 보훈복지공단 척추&관절센터에서 근무했고, 나사렛대학교 스포츠재활학과 겸임교수를 지냈습니다. CPPI 커리큘럼은 그 임상·학술 경험 위에 설계되었습니다." },
        { h: "어디서 시작하나", list: ["처음이라면 - 교육안내에서 과정 구성과 수료 요건을 확인하세요", "현직 강사라면 - 워크숍에서 단기 심화 과정을 확인하세요", "해외 거주자라면 - 글로벌에서 지역별 운영 현황을 확인하세요"] },
      ],
    },
    en: {
      title: "CPPI Korea Pilates Education Association | International Pilates Instructor Certification",
      desc: "An international Pilates instructor certification built on functional anatomy, clinical rehabilitation and repeated teaching practice. Established 2016, running in Korea, Canada and Japan, with 56+ certified classes.",
      eyebrow: "CPPI KOREA", h1: "We teach with evidence, not intuition",
      lead: "An international Pilates instructor certification built on functional anatomy and clinical evidence.",
      blocks: [
        { h: "CPPI at a glance", list: ["Established 2016 · Korea Pilates Education Association (reg. 201-82-74381, non-profit)", "8 core subjects · approx. 110-120 hours", "9 published textbooks plus supplements · 1,300+ pages", "317 documented movements (Mat 53 · Reformer 79 · Cadillac 62 · Chair 28 · Ladder Barrel 27 · Arc Barrel 29 · Spine Corrector 39)", "56+ certified classes · operating in Korea, Canada and Japan"] },
        { h: "What makes it different", p: "Founder Eun-Ju Park worked in the Department of Anesthesiology and Pain Medicine at Seoul National University Hospital Bundang and at the Spine & Joint Center of the Korea Veterans Health Service, and served as Adjunct Professor of Sports Rehabilitation at Korea Nazarene University. The CPPI curriculum is built on that clinical and academic foundation." },
        { h: "Where to start", list: ["New to Pilates - see Certification for course structure and completion requirements", "Already teaching - see Workshops for short intensive courses", "Outside Korea - see Global for regional operations"] },
      ],
    },
    ja: {
      title: "CPPI 韓国ピラティス教育協会 | 国際ピラティスインストラクター資格",
      desc: "機能解剖学・臨床リハビリ・指導実習を軸にした国際ピラティス指導者資格課程。2016年設立、韓国・カナダ・日本で運営、修了56期以上。",
      eyebrow: "CPPI KOREA", h1: "感覚ではなく、根拠で教えます",
      lead: "機能解剖学と臨床根拠の上に設計された国際ピラティス指導者資格課程です。",
      blocks: [
        { h: "CPPIの概要", list: ["2016年設立 · 韓国ピラティス教育協会 (固有番号 201-82-74381、非営利)", "正規課程8科目 · 合計約110~120時間", "出版教材9巻＋副教材 · 1,300ページ超", "動作マニュアル317種 (マット53 · リフォーマー79 · キャデラック62 · チェア28 · ラダーバレル27 · アークバレル29 · スパインコレクター39)", "修了56期以上 · 韓国・カナダ・日本で運営"] },
        { h: "他との違い", p: "創立者パク・ウンジュ(Eun-Ju Park)は盆唐ソウル大学病院 麻酔痛症医学科、韓国報勲福祉公団 脊椎&関節センターに勤務し、韓国ナザレ大学スポーツリハビリ学科の兼任教授を務めました。CPPIのカリキュラムはその臨床・学術の経験の上に設計されています。" },
        { h: "どこから始めるか", list: ["初めての方 - 教育案内で課程構成と修了要件をご確認ください", "現役講師の方 - ワークショップで短期深化課程をご確認ください", "海外在住の方 - グローバルで地域別の運営状況をご確認ください"] },
      ],
    },
    zh: {
      title: "CPPI 韩国普拉提教育协会 | 国际普拉提教练资格课程",
      desc: "以功能解剖学、临床康复与教学实习为核心的国际普拉提教练资格课程。2016年创立，在韩国、加拿大、日本运营，已培养56期以上。",
      eyebrow: "CPPI KOREA", h1: "以循证教学，而非凭感觉",
      lead: "建立在功能解剖学与临床循证之上的国际普拉提教练资格课程。",
      blocks: [
        { h: "CPPI 概览", list: ["2016年创立 · 韩国普拉提教育协会 (编号 201-82-74381，非营利)", "正规课程8门科目 · 合计约110~120小时", "出版教材9册＋副教材 · 1,300余页", "动作手册317个 (垫上53 · 核心床79 · 凯迪拉克62 · 椅28 · 梯桶27 · 弧形桶29 · 脊柱矫正器39)", "已培养56期以上 · 在韩国、加拿大、日本运营"] },
        { h: "差异何在", p: "创始人朴恩珠(Eun-Ju Park)曾任职于盆唐首尔大学医院麻醉疼痛医学科、韩国报勋福祉公团脊柱与关节中心，并担任韩国拿撒勒大学运动康复学科兼任教授。CPPI课程体系正是建立在这一临床与学术基础之上。" },
        { h: "从哪里开始", list: ["初次接触 - 请查看教育指南了解课程结构与结业要求", "在职教练 - 请查看工作坊了解短期深化课程", "海外学员 - 请查看全球运营了解各地区开课情况"] },
      ],
    },
    "zh-Hant": {
      title: "CPPI 韓國皮拉提斯教育協會 | 國際皮拉提斯師資培訓證照課程",
      desc: "以功能解剖學、臨床復健與教學實習為核心的國際皮拉提斯師資培訓證照課程。2016 年創立，於韓國、加拿大、日本營運，已培育 56 期以上。台灣稱皮拉提斯證照，香港稱普拉提導師證書課程。",
      eyebrow: "CPPI KOREA", h1: "以實證教學，而非憑感覺",
      lead: "建立在功能解剖學與臨床實證之上的國際皮拉提斯師資培訓證照課程。",
      blocks: [
        { h: "CPPI 概覽", list: ["2016 年創立 · 韓國皮拉提斯教育協會 (編號 201-82-74381，非營利)", "正規課程 8 門科目 · 合計約 110~120 小時", "出版教材 9 冊＋輔助教材 · 1,300 餘頁", "動作手冊 317 個 (墊上 53 · 核心床 79 · 凱迪拉克 62 · 椅 28 · 梯桶 27 · 弧形桶 29 · 脊椎矯正器 39)", "已培育 56 期以上 · 於韓國、加拿大、日本營運"] },
        { h: "差異何在", p: "創辦人朴恩珠(Eun-Ju Park)曾任職於盆唐首爾大學醫院麻醉疼痛醫學科、韓國報勳福祉公團脊椎與關節中心，並擔任韓國拿撒勒大學運動復健學系兼任教授。CPPI 課程體系正是建立在這份臨床與學術基礎之上。" },
        { h: "從哪裡開始", list: ["初次接觸 - 請查看師資培訓了解課程結構與結業要求", "在職導師 - 請查看工作坊了解短期深化課程", "台灣 · 香港 · 新加坡學員 - 請查看全球據點或直接以電子郵件洽詢梯次安排"] },
      ],
    },
    schema: { "@type": "WebPage" },
  },

  about: {
    ko: {
      title: "협회 소개 | CPPI 한국 필라테스 교육협회",
      desc: "감각이 아니라 근거로 가르치는 CPPI 한국 필라테스 교육협회 - EST.2016, 한국·캐나다·일본 운영, 분당서울대병원 임상 기반 커리큘럼.",
      eyebrow: "ABOUT CPPI", h1: "감각이 아니라, 근거로 가르칩니다",
      lead: "한국필라테스교육협회 (CPPI Korea) · Certified Professional Pilates Instructor",
      blocks: [
        { h: "한 문단 요약", p: "CPPI 한국필라테스교육협회는 기능해부학과 임상 근거 위에 필라테스 지도자를 양성하는 비영리 교육 단체입니다. 2016년 설립 이후 8개 정규 과목 약 110~120시간의 자격과정을 운영해 56기 이상의 수료강사를 배출했고, 직접 집필·출판한 9권 1,300여 페이지의 교재와 317개 동작 매뉴얼을 교육 표준으로 삼습니다. 한국·캐나다·일본에서 운영하며 국제 자격증을 발급합니다." },
        { h: "협회 개요", p: "정식 명칭은 한국필라테스교육협회(CPPI Korea)이며 고유번호는 201-82-74381, 비영리 단체로 등록되어 있습니다. 2016년 설립되었고, 교과정은 2년의 집중 개발 기간을 거쳐 완성되었습니다. 대표이자 협회장은 박은주(Eun-Ju Park)입니다. 설립 이후 현재까지 정규 자격과정과 전문 강사 워크숍, 온라인 강의를 운영하며 한국·캐나다·일본에서 국제 자격증을 발급하고 있습니다." },
        { h: "왜 '감각'이 아니라 '근거'인가", p: "필라테스 지도 현장에서 가장 자주 발생하는 문제는 강사가 동작을 외워서 가르치는 것입니다. 외운 동작은 교과서적인 몸에만 작동합니다. 수강생의 골반이 전방경사이거나 흉추가 굳어 있거나 어깨 통증 이력이 있으면, 같은 동작이 오히려 보상작용을 키웁니다. CPPI는 동작 암기 대신 '이 동작이 어떤 관절에서 어떤 움직임을 만들고 어떤 근육이 관여하는가'를 먼저 가르칩니다. 그래야 눈앞의 몸에 맞춰 배리에이션과 모디피케이션을 스스로 만들어낼 수 있습니다." },
        { h: "출판 교재 9권 - 커리큘럼의 뿌리", p: "CPPI 커리큘럼은 외부 교재를 빌려 쓰지 않고 협회가 직접 집필한 교재 위에 서 있습니다. 총 9권 1,300여 페이지이며, 각 권은 동작·운동 목적·활성화 근육·큐잉 및 주의사항·변형 동작이라는 동일한 포맷으로 구성되어 있습니다.", list: ["필라테스 기능해부학 - 238페이지. 뼈·관절·근육의 구조와 기능, 근육 불균형 평가, 자세학 연계", "필라테스 기본원리 - 80페이지. 조셉 필라테스의 10가지 기본 원리와 5가지 움직임 원칙, 견갑 안정화, 자세 분석(Flat-Back·Sway-Back)", "필라테스 더 매트 - 160페이지. 기본 34동작 + 매트 59동작을 Supine·Sitting·Side Lying·Prone·Kneeling·Standing 포지션별로 구성", "리포머 - 306페이지. Feet on Footbar, Feet in Straps, Hands in Straps, Short Box, Long Box, Split Series 등 시작 포지션별 구성", "캐딜락 - 368페이지. Roll Down Bar, Push Thru Bar, Arm Springs, Leg Springs, Trapeze별 분류", "스태빌리티 체어 - 202페이지. Sitting·Standing·Side Lying·Supine·Prone 포지션별 구성", "래더 바렐 - 76페이지 / 아크 바렐 - 79페이지 / 스파인 코렉터 - 108페이지. 척추 정렬 인지와 교정에 초점"] },
        { h: "동작 매뉴얼 317개", p: "매트 53 · 리포머 79 · 캐딜락 62 · 스태빌리티 체어 28 · 래더바렐 27 · 아크바렐 29 · 스파인코렉터 39, 합계 317개 동작을 문서화해 교육합니다. 각 동작마다 배리에이션과 모디피케이션, 소도구 활용 티칭이 함께 붙습니다. 수강생이 수료 후 현장에서 마주칠 상황을 미리 손에 익히게 하기 위한 구성입니다." },
        { h: "교육 프레임워크 - 기능해부학과 근막경선", p: "CPPI의 동작 분석은 근육 하나를 따로 보지 않고 사슬(chain)로 봅니다. 자체 교육자료 '이야기가 있는 해부학'은 113페이지 분량으로 전면사슬(Anterior Chain)·후면사슬(Posterior Chain)·측면사슬(Lateral Chain) 세 축에 필라테스 동작을 대응시킵니다. 예를 들어 컬업(Curl Up)은 척추 고정근으로 복직근과 내외복사근, 고관절 고정근으로 장요근·대퇴직근·대퇴근막장근이 관여한다는 식으로 관절·움직임·근육을 표로 정리합니다. Thomas Myers의 아나토미 트레인(Anatomy Trains) 체계를 필라테스 지도 언어로 옮긴 것이 CPPI 콘텐츠의 특징입니다." },
        { h: "타 단체와의 차별성", list: ["의료 임상 기반 - 창립자가 분당서울대병원 마취통증의학과, 한국보훈복지공단 척추&관절센터에서 근무한 임상 경력을 커리큘럼에 반영", "대학 검증 - 나사렛대학교 스포츠재활학과 겸임교수, 서경대학교 예술교육원 필라테스과정 원장 경력의 창립자 직강", "자체 교재 - 외부 교재 라이선스가 아니라 협회가 직접 집필한 9권 1,300여 페이지로 교육", "실무형 교육 - 동작 암기가 아니라 배리에이션·모디피케이션과 재활 시퀀스 설계를 훈련", "국제 운영 - 한국·캐나다(밴쿠버)·일본(도쿄)에서 운영하며 국제 자격증 발급"] },
        { h: "시그니처 프로그램 - 리커버링 재활 필라테스", p: "2022년 RECOVERING Master Trainer 자격을 취득하면서 리커버링 재활 필라테스가 CPPI의 대표 시그니처 프로그램이 되었습니다. 9가지 적용 원리(축성 신장과 감압, 항회전과 요추 분절 안정화, 나선·사선 근막 사슬 활성화, 요추 안정과 흉추 가동성의 분리, 관절 중심화, 방산 법칙, 고유수용감각 증폭 등)와 13가지 시그니처 동작으로 구성되며, 각 동작은 목적·세팅·동작 순서·보상작용과 중재·적용 근막 라인·기능적 의미·핵심 큐라는 표준 포맷으로 문서화되어 있습니다." },
        { h: "글로벌 운영", p: "한국은 분당·서울·김포 교육센터에서 정규과정과 워크숍, 자격검정을 운영합니다. 캐나다 밴쿠버에서는 팬데믹 기간에도 온라인을 병행해 교육을 이어왔고, 일본 도쿄에서는 국제 자격에 대응하는 인스트럭터 양성 과정을 운영합니다. 대만·홍콩·싱가포르 지역은 상설 거점은 없으나 개별 문의와 단체 기수 편성을 받고 있습니다." },
      ],
      note: "인증 단체 - 한국필라테스교육협회 (CPPI Korea) · 고유번호 201-82-74381 (비영리) · 대표 박은주",
    },
    en: {
      title: "About CPPI | Korea Pilates Education Association",
      desc: "CPPI Korea Pilates Education Association teaches Pilates with evidence, not intuition. Founded 2016, operating in Korea, Canada and Japan, with a curriculum built on SNUH Bundang clinical experience.",
      eyebrow: "ABOUT CPPI", h1: "We teach with evidence, not intuition",
      lead: "Korea Pilates Education Association (CPPI) · Certified Professional Pilates Instructor",
      blocks: [
        { h: "Overview", p: "Established 2016. The curriculum was developed over two intensive years and is delivered in Korea, Canada and Japan. Eight core courses are taught with more than 1,300 pages of published textbooks (9 volumes plus supplements)." },
        { h: "Movement manual", p: "Mat 53 · Reformer 79 · Cadillac 62 · Chair 28 · Ladder Barrel 27 · Arc Barrel 29 · Spine Corrector 39 movements, with variations, modifications and small-props teaching." },
        { h: "What sets CPPI apart", list: ["Clinical foundation - experience at Seoul National University Hospital Bundang and the Spine & Joint Center of the Korea Veterans Health Service", "Academic verification - taught directly by founder Eun-Ju Park, former faculty in sports rehabilitation at Korea Nazarene University", "Practice-first training - variations, modifications and rehabilitation sequencing", "International operation - Korea, Canada and Japan, with international certification"] },
      ],
      note: "Registered non-profit association - Korea Pilates Education Association (CPPI), registration no. 201-82-74381",
    },
    ja: {
      title: "協会紹介 | CPPI 韓国ピラティス教育協会",
      desc: "感覚ではなく根拠で教えるCPPI韓国ピラティス教育協会。2016年設立、韓国・カナダ・日本で運営、盆唐ソウル大学病院の臨床経験に基づくカリキュラム。",
      eyebrow: "ABOUT CPPI", h1: "感覚ではなく、根拠で教えます",
      lead: "韓国ピラティス教育協会 (CPPI) · Certified Professional Pilates Instructor",
      blocks: [
        { h: "協会概要", p: "2016年設立。2年間の集中開発でカリキュラムを完成させ、韓国・カナダ・日本で運営しています。8つの正規課程を、1,300ページを超える出版教材(全9巻＋副教材)で教育します。" },
        { h: "動作マニュアル", p: "マット53 · リフォーマー79 · キャデラック62 · チェア28 · ラダーバレル27 · アークバレル29 · スパインコレクター39動作。バリエーション・修正法・小道具指導まで収録。" },
        { h: "他団体との違い", list: ["医療臨床に基づく - 盆唐ソウル大学病院、韓国報勲福祉公団 脊椎&関節センターでの臨床経験", "大学での検証 - 韓国ナザレ大学スポーツリハビリ学部の教壇経験を持つ創立者パク・ウンジュ(Eun-Ju Park)が直接指導", "実務型教育 - バリエーション・修正法、リハビリシークエンスの指導", "国際運営 - 韓国・カナダ・日本、国際資格の発行"] },
      ],
      note: "認証団体 - 韓国ピラティス教育協会 (CPPI) · 固有番号 201-82-74381 (非営利)",
    },
    zh: {
      title: "协会介绍 | CPPI 韩国普拉提教育协会",
      desc: "CPPI韩国普拉提教育协会以循证而非凭感觉教学。2016年创立，在韩国、加拿大、日本运营，课程建立于盆唐首尔大学医院临床经验之上。",
      eyebrow: "ABOUT CPPI", h1: "以循证教学，而非凭感觉",
      lead: "韩国普拉提教育协会 (CPPI) · Certified Professional Pilates Instructor",
      blocks: [
        { h: "协会概要", p: "2016年创立。经两年集中开发完成课程体系，在韩国、加拿大、日本运营。八门正规课程配合1,300余页出版教材(9册及副教材)进行教学。" },
        { h: "动作手册", p: "垫上53 · 核心床79 · 凯迪拉克62 · 椅28 · 梯桶27 · 弧形桶29 · 脊柱矫正器39个动作，含变式、调整与小工具教学。" },
        { h: "与其他机构的差异", list: ["医疗临床基础 - 盆唐首尔大学医院、韩国报勋福祉公团脊柱与关节中心的临床经验", "学术验证 - 由曾任韩国拿撒勒大学运动康复学部教职的创始人朴恩珠(Eun-Ju Park)亲授", "实务型教育 - 变式与调整、康复序列编排", "国际运营 - 韩国、加拿大、日本，颁发国际资格证书"] },
      ],
      note: "认证团体 - 韩国普拉提教育协会 (CPPI) · 编号 201-82-74381 (非营利)",
    },
    "zh-Hant": {
      title: "協會介紹 | CPPI 韓國皮拉提斯教育協會",
      desc: "CPPI 韓國皮拉提斯教育協會(普拉提)以實證教學而非憑感覺。2016 年創立，於韓國、加拿大、日本營運，課程建立在盆唐首爾大學醫院的臨床經驗之上。",
      eyebrow: "ABOUT CPPI", h1: "以實證教學，而非憑感覺",
      lead: "韓國皮拉提斯教育協會 (CPPI Korea) · Certified Professional Pilates Instructor",
      blocks: [
        { h: "協會概要", p: "2016 年創立。歷經兩年集中開發完成課程體系，並於韓國、加拿大、日本營運。八門正規課程搭配 1,300 餘頁出版教材(9 冊及輔助教材)進行教學。" },
        { h: "動作手冊", p: "墊上 53 · 核心床 79 · 凱迪拉克 62 · 椅 28 · 梯桶 27 · 弧形桶 29 · 脊椎矯正器 39 個動作，含變化式、調整法與小器材教學。" },
        { h: "與其他機構的差異", list: ["醫療臨床基礎 - 盆唐首爾大學醫院、韓國報勳福祉公團脊椎與關節中心的臨床經驗", "學術驗證 - 由曾任韓國拿撒勒大學運動復健學系教職的創辦人朴恩珠(Eun-Ju Park)親授", "實務型教學 - 變化式與調整法、復健序列編排", "國際營運 - 韓國、加拿大、日本，核發國際證照"] },
        { h: "用語說明", p: "本協會課程在台灣多稱為「皮拉提斯師資培訓」或「皮拉提斯證照課程」，在香港則多稱為「普拉提導師證書課程」。兩者指的是同一套 CPPI 國際認證體系。" },
      ],
      note: "認證團體 - 韓國皮拉提斯教育協會 (CPPI) · 編號 201-82-74381 (非營利)",
    },
    schema: { "@type": "AboutPage" },
  },

  founder: {
    ko: {
      title: "박은주 교수 (Eun-Ju Park) - 파운더 | CPPI 한국 필라테스 교육협회",
      desc: "분당서울대병원 척추·관절센터 임상 경험과 나사렛대 강단 경력을 지닌 CPPI 창립자 박은주(Eun-Ju Park) 교수의 전체 프로필.",
      eyebrow: "FOUNDER", h1: "박은주 (Eun-Ju Park) 교수",
      blocks: [
        { h: "한 문단 요약", p: "박은주(Eun-Ju Park)는 CPPI 한국필라테스교육협회의 창립자이자 협회장입니다. 분당서울대병원 마취통증의학과와 한국보훈복지공단 척추&관절센터에서 근무한 의료 임상 경력, 나사렛대학교 스포츠재활학과 겸임교수와 서경대학교 예술교육원 필라테스과정 원장을 지낸 대학 강단 경력, 그리고 STOTT PILATES·PMA·Balanced Body University·RECOVERING으로 이어지는 국제 자격을 모두 갖춘 필라테스 교육자입니다. 9권 1,300여 페이지의 CPPI 교재를 직접 집필했고, 2009년부터 지도자 교육에 전념해 56기 이상의 수료강사를 배출했습니다." },
        { h: "임상에서 출발한 이력", p: "박은주 교수의 출발점은 필라테스 스튜디오가 아니라 병원이었습니다. 간호 임상을 거쳐 분당서울대병원 마취통증의학과에서 통증 환자를 접했고, 한국보훈복지공단 척추&관절센터에서 척추·관절 재활 현장을 경험했습니다. 이 시기에 서울대병원에서 중환자 전문간호연수, 정형외과 수술후 재활과정, 당뇨·고혈압·골다공증 관리, 노인간호 및 재활과정을 이수했습니다. 수술 후 회복 단계의 몸, 만성 통증을 안고 사는 몸, 대사질환과 고령을 함께 가진 몸을 직접 다뤄 본 경험이 이후 CPPI 커리큘럼이 '재활·교정 중심'으로 설계된 직접적인 배경입니다." },
        { h: "주요 경력", list: ["(현) CPPI 한국필라테스교육협회 회장", "(현) 리커버링 재활 필라테스 공인 마스터 (RECOVERING Master Trainer)", "(현) 경기도 배구협회 이사", "(현) 대한간호정우회 / 간호 Q&A협회 정회원", "(현) 대한비만학회 정회원", "(전) 나사렛대학교 스포츠재활학과 겸임교수", "(전) 서경대학교 예술교육원 필라테스과정 원장", "(전) 분당서울대병원 마취통증의학과", "(전) 한국보훈복지공단 척추&관절센터"] },
        { h: "주요 연수 - 서울대학교병원", list: ["중환자 전문간호연수", "정형외과 수술후 재활과정", "당뇨 · 고혈압 · 골다공증 관리", "노인간호 및 재활과정"] },
        { h: "국제 자격", p: "필라테스 지도자 자격은 한 단체에 머무르지 않고 여러 체계를 교차해 이수했습니다. 서로 다른 학파의 접근을 비교할 수 있어야 수강생에게 '왜 이렇게 가르치는가'를 설명할 수 있다는 판단에서입니다.", list: ["STOTT PILATES : IMP / IR / ICCB / AMP / AR / RMR1", "ISP (Injury Special Population) 2009~2011", "PMA (Pilates Method Alliance) Certification Education 2012", "BBU (Balanced Body University) Creating Length & Strength Certification", "BBU Scoliosis Spiral Certification", "BBU Innovate Mat Sequences for Motor Control, Stability and Balance", "STOTT Pre-Natal Pilates On the Reformer", "POWER PLATE Master Trainer Certification 2022", "RECOVERING Master Trainer Certification 2022"] },
        { h: "저술 - CPPI 교재 9권", p: "CPPI 정규과정에서 쓰는 교재는 전량 자체 집필본입니다. 필라테스 기능해부학 238페이지, 필라테스 기본원리 80페이지를 비롯해 매트·리포머·캐딜락·스태빌리티 체어·래더바렐·아크바렐·스파인코렉터까지 총 9권 1,300여 페이지입니다. 각 권은 동작, 운동 목적, 활성화 근육, 큐잉 및 주의사항, 변형 동작이라는 동일한 포맷을 따릅니다." },
        { h: "교육 철학 - 근막경선으로 동작을 읽는다", p: "박은주 교수의 동작 분석은 개별 근육이 아니라 사슬을 봅니다. 자체 자료 '이야기가 있는 해부학'(113페이지)은 전면사슬·후면사슬·측면사슬 세 축으로 필라테스 동작을 재배열하고, 동작마다 관여 관절과 움직임, 근육을 표로 정리한 뒤 임상 팁을 덧붙입니다. Thomas Myers의 아나토미 트레인 체계를 지도 언어로 옮긴 이 접근은 CPPI 전 과정에 일관되게 적용됩니다." },
        { h: "리커버링 재활 필라테스", p: "2022년 RECOVERING Master Trainer 자격을 취득한 이후, 리커버링을 CPPI의 시그니처 프로그램으로 체계화했습니다. 축성 신장과 감압, 항회전과 요추 분절 안정화, 나선·사선 근막 사슬 교차 활성화, 요추 안정과 흉추 가동성의 분리, 관절 중심화, 방산 법칙, 고유수용감각 증폭 등 9가지 원리와 13가지 시그니처 동작으로 구성됩니다. 원데이 자격과정은 7교시 × 50분 구성으로 하루 동안 동작 37개와 이론 14개를 다룹니다." },
        { h: "활동", p: "IDEA 컨벤션과 CKLZ 피트니스 컨벤션에 초청 프레젠터로 참여했습니다. 2009년부터 지도자 교육에 전념해 왔으며, 수료생 중 다수가 현재 타 아카데미에서 마스터(교육강사)로 활동하고 있습니다. 유튜브 채널 @cppi.pilates를 통해 필라테스 자격과정과 지도자 교육에 관한 정보를 공개하고 있습니다." },
      ],
    },
    en: {
      title: "Prof. Eun-Ju Park - Founder | CPPI Korea Pilates Education Association",
      desc: "Full profile of Eun-Ju Park, founder of CPPI Korea: clinical experience at Seoul National University Hospital Bundang Spine & Joint Center and faculty experience at Korea Nazarene University.",
      eyebrow: "FOUNDER", h1: "Prof. Eun-Ju Park",
      blocks: [
        { h: "Career", list: ["President, Korea Pilates Education Association (current)", "Director, Gyeonggi Volleyball Association (current)", "Recovering Rehabilitation Pilates Master (current)", "Member, Korean Society for the Study of Obesity (current)", "Former Adjunct Professor, Sports Rehabilitation, Korea Nazarene University", "Former Director, Pilates Program, Seokyeong University Arts Education Center", "Former, Department of Anesthesiology and Pain Medicine, SNUH Bundang", "Former, Spine & Joint Center, Korea Veterans Health Service"] },
        { h: "Clinical training - Seoul National University Hospital", list: ["Critical care nursing training", "Post-operative orthopedic rehabilitation", "Diabetes, hypertension and osteoporosis care", "Geriatric nursing and rehabilitation"] },
        { h: "Certifications", list: ["STOTT PILATES : IMP / IR / ICCB / AMP / AR / RMR1", "ISP (Injury Special Population) 2009-2011", "PMA : Certification Education 2012", "BBU Creating Length & Strength / Scoliosis Spiral", "STOTT Pre-Natal Pilates On the Reformer", "POWER PLATE Master Trainer 2022", "RECOVERING Master Trainer 2022"] },
        { h: "Activities", p: "Invited presenter at the IDEA and CKLZ fitness conventions. Dedicated to instructor education since 2009." },
      ],
    },
    ja: {
      title: "パク・ウンジュ教授 (Eun-Ju Park) - 創立者 | CPPI 韓国ピラティス教育協会",
      desc: "盆唐ソウル大学病院 脊椎・関節センターでの臨床経験と韓国ナザレ大学での教壇経験を持つCPPI創立者パク・ウンジュ(Eun-Ju Park)教授の全プロフィール。",
      eyebrow: "FOUNDER", h1: "パク・ウンジュ (Eun-Ju Park) 教授",
      blocks: [
        { h: "主要経歴", list: ["(現) 韓国ピラティス教育協会 会長", "(現) 京畿道バレーボール協会 理事", "(現) リカバリング リハビリピラティス マスター", "(現) 大韓肥満学会 正会員", "(元) 韓国ナザレ大学 スポーツリハビリ学科 兼任教授", "(元) 西京大学 芸術教育院 ピラティス課程 院長", "(元) 盆唐ソウル大学病院 麻酔痛症医学科", "(元) 韓国報勲福祉公団 脊椎&関節センター"] },
        { h: "主要研修 - ソウル大学病院", list: ["重症患者専門看護研修", "整形外科 術後リハビリ課程", "糖尿病・高血圧・骨粗鬆症の管理", "高齢者看護およびリハビリ課程"] },
        { h: "主要資格", list: ["STOTT PILATES : IMP / IR / ICCB / AMP / AR / RMR1", "ISP (Injury Special Population) 2009~2011", "PMA : Certification Education 2012", "BBU Creating Length & Strength / Scoliosis Spiral", "STOTT Pre-Natal Pilates On the Reformer", "POWER PLATE Master Trainer 2022", "RECOVERING Master Trainer 2022"] },
        { h: "活動", p: "IDEAコンベンション、CKLZフィットネスコンベンション招待プレゼンター。2009年より指導者教育に専念。" },
      ],
    },
    zh: {
      title: "朴恩珠教授 (Eun-Ju Park) - 创始人 | CPPI 韩国普拉提教育协会",
      desc: "CPPI创始人朴恩珠(Eun-Ju Park)教授的完整履历：盆唐首尔大学医院脊柱与关节中心临床经验，以及韩国拿撒勒大学教职经历。",
      eyebrow: "FOUNDER", h1: "朴恩珠 (Eun-Ju Park) 教授",
      blocks: [
        { h: "主要经历", list: ["(现) 韩国普拉提教育协会 会长", "(现) 京畿道排球协会 理事", "(现) Recovering 康复普拉提 大师", "(现) 大韩肥胖学会 正会员", "(前) 韩国拿撒勒大学 运动康复学科 兼任教授", "(前) 西京大学 艺术教育院 普拉提课程 院长", "(前) 盆唐首尔大学医院 麻醉疼痛医学科", "(前) 韩国报勋福祉公团 脊柱与关节中心"] },
        { h: "主要研修 - 首尔大学医院", list: ["重症监护专科护理研修", "骨科术后康复课程", "糖尿病·高血压·骨质疏松管理", "老年护理与康复课程"] },
        { h: "主要资格", list: ["STOTT PILATES : IMP / IR / ICCB / AMP / AR / RMR1", "ISP (Injury Special Population) 2009~2011", "PMA : Certification Education 2012", "BBU Creating Length & Strength / Scoliosis Spiral", "STOTT Pre-Natal Pilates On the Reformer", "POWER PLATE Master Trainer 2022", "RECOVERING Master Trainer 2022"] },
        { h: "活动", p: "IDEA大会、CKLZ健身大会特邀讲师。自2009年起专注于教练培训。" },
      ],
    },
    "zh-Hant": {
      title: "朴恩珠教授 (Eun-Ju Park) - 創辦人 | CPPI 韓國皮拉提斯教育協會",
      desc: "CPPI 創辦人朴恩珠(Eun-Ju Park)教授的完整經歷：盆唐首爾大學醫院脊椎與關節中心臨床經驗，以及韓國拿撒勒大學教職資歷。",
      eyebrow: "FOUNDER", h1: "朴恩珠 (Eun-Ju Park) 教授",
      blocks: [
        { h: "主要經歷", list: ["(現) 韓國皮拉提斯教育協會 會長", "(現) 京畿道排球協會 理事", "(現) Recovering 復健皮拉提斯 大師導師", "(現) 大韓肥胖學會 正會員", "(前) 韓國拿撒勒大學 運動復健學系 兼任教授", "(前) 西京大學 藝術教育院 皮拉提斯課程 院長", "(前) 盆唐首爾大學醫院 麻醉疼痛醫學科", "(前) 韓國報勳福祉公團 脊椎與關節中心"] },
        { h: "主要研修 - 首爾大學醫院", list: ["重症監護專科護理研修", "骨科術後復健課程", "糖尿病·高血壓·骨質疏鬆管理", "高齡照護與復健課程"] },
        { h: "主要證照", list: ["STOTT PILATES : IMP / IR / ICCB / AMP / AR / RMR1", "ISP (Injury Special Population) 2009~2011", "PMA : Certification Education 2012", "BBU Creating Length & Strength / Scoliosis Spiral", "STOTT Pre-Natal Pilates On the Reformer", "POWER PLATE Master Trainer 2022", "RECOVERING Master Trainer 2022"] },
        { h: "活動", p: "IDEA 大會、CKLZ 健身大會特邀講師。自 2009 年起專注於師資培訓。" },
      ],
    },
    schema: { "@type": "ProfilePage" },
  },

  curriculum: {
    ko: {
      title: "정규과정 에센셜 커리큘럼 | CPPI 한국 필라테스 교육협회",
      desc: "기능해부학과 의학적 근거 위에 설계된 CPPI 정규과정 8대 커리큘럼 - 매트·리포머·캐딜락·체어·바렐 시리즈 상세 안내.",
      eyebrow: "CURRICULUM", h1: "CPPI 정규과정 에센셜 커리큘럼",
      lead: "모든 과정은 기능해부학과 의학적 근거 위에 설계되었습니다.",
      blocks: [
        { h: "한 문단 요약", p: "CPPI 정규과정은 8개 과목 약 110~120시간으로 구성됩니다. 기능해부학 10시간에서 출발해 기본원리 10시간, 체형 분석 및 움직임 평가 5시간으로 이론 토대를 세운 뒤, 매트 25시간과 기구 4종(리포머·캐딜락·스태빌리티 체어·바렐 시리즈) 60~70시간의 실기로 이어집니다. 모든 과목은 직접 집필한 출판 교재 9권 1,300여 페이지를 텍스트로 사용합니다." },
        { h: "8대 커리큘럼", list: ["1. 필라테스 기능해부학 - 10시간", "2. 베이직 프린서플 10가지 / 5가지 움직임 원칙 - 10시간", "3. 체형 분석 및 움직임 평가 - 5시간", "4. 필라테스 매트 - 25시간", "5. 리포머 - 20~25시간", "6. 캐딜락 - 20~25시간", "7. 스태빌리티 체어 - 10시간", "8. 래더바렐 및 바렐 시리즈 - 10시간"] },
        { h: "01. 필라테스 기능해부학 (10시간)", p: "교재 238페이지. 뼈·관절·근육의 구조와 기능, 움직임의 원리를 다룹니다. 단순 암기가 아니라 해부학 지식을 근거로 인체와 움직임을 분석하는 훈련이 목표입니다. 근육 불균형의 평가와 중재, 근육과 자세학의 연계를 포함합니다. 이 과목이 뒤따르는 모든 실기 과목의 판단 기준이 됩니다." },
        { h: "02. 베이직 프린서플 (10시간)", p: "교재 80페이지. 조셉 필라테스가 정립한 10가지 기본 원리와 5가지 움직임 원칙을 다룹니다. 견갑 안정화와 움직임의 원리(Scapular Stability & Mobility), 신체 비정렬, 근막 시스템, 그리고 Flat-Back·Sway-Back 등 자세 유형 분석이 포함됩니다. 실기에서 '왜 이 큐를 주는가'를 설명할 수 있게 만드는 과목입니다." },
        { h: "03. 체형 분석 및 움직임 평가 (5시간)", p: "수강생이 처음 마주하는 몸을 어떻게 읽을 것인가를 훈련합니다. 정적 자세 관찰과 동적 움직임 평가를 통해 보상작용의 위치를 찾아내고, 그 결과를 수업 설계로 연결하는 절차를 다룹니다. 이 과목이 있어야 뒤의 실기가 '정해진 순서 반복'이 아니라 '평가 기반 설계'가 됩니다." },
        { h: "04. 필라테스 매트 (25시간)", p: "교재 160페이지. 조셉 필라테스의 기본 34동작과 매트 59동작을 다룹니다. Pre-Pilates 동작부터 시작해 Supine, Sitting, Side Lying, Prone, Kneeling, Four Points Kneeling, Standing까지 포지션별로 진행하며, 동작마다 운동 목적·활성화 근육·큐잉 및 주의사항·변형 동작을 익힙니다. 기구가 없는 환경에서도 수업을 구성할 수 있는 능력이 목표입니다." },
        { h: "05. 리포머 (20~25시간)", p: "교재 306페이지. Feet on Footbar, Feet in Straps, Hands in Straps, Hands on Footbar, Hands on Rail, Short Box, Long Box, Split Series 등 시작 방향과 포지션별로 79개 동작을 다룹니다. 스프링 저항을 어떻게 조절해 난이도와 목적을 바꾸는지가 핵심입니다." },
        { h: "06. 캐딜락 (20~25시간)", p: "교재 368페이지로 전 과목 중 분량이 가장 큽니다. Roll Down Bar, Push Thru Bar, Arm Springs, Leg Springs, Trapeze 각각에서 수행하는 62개 동작을 다룹니다. 재활 세션에서 활용 폭이 가장 넓은 기구이며, 지지와 보조를 설계하는 방법을 집중적으로 훈련합니다." },
        { h: "07. 스태빌리티 체어 (10시간)", p: "교재 202페이지. Sitting·Standing·Side Lying·Supine·Prone 포지션별 28개 동작을 다룹니다. 앉은 자세와 선 자세에서의 효과, 자세 인지력 향상에 초점을 둡니다. 좁은 공간에서 운영하는 스튜디오에 특히 활용도가 높습니다." },
        { h: "08. 래더바렐 및 바렐 시리즈 (10시간)", p: "래더바렐 76페이지·아크바렐 79페이지·스파인코렉터 108페이지 교재를 사용합니다. 래더바렐은 Ladder Barrel Stretch, Feet on Ladder, Hands on Ladder 등으로, 아크바렐은 Warm up·Sitting·Supine·Prone으로, 스파인코렉터는 여기에 Side Lying을 더해 구성됩니다. 세 기구 모두 척추 정렬 인지와 교정에 초점이 있습니다." },
        { h: "전 과정을 관통하는 프레임워크", p: "8개 과목은 따로 놀지 않습니다. 모든 동작 분석에 근막경선(Anatomy Trains) 관점이 일관되게 적용됩니다. 자체 교육자료 '이야기가 있는 해부학' 113페이지는 전면사슬·후면사슬·측면사슬 세 축으로 필라테스 동작을 재배열하고, 동작마다 관여 관절·움직임·근육을 표로 정리한 뒤 임상 팁을 덧붙입니다. 예컨대 컬업(Curl Up)은 척추 고정근으로 복직근과 내외복사근, 고관절 고정근으로 장요근·대퇴직근·대퇴근막장근이 관여한다는 식입니다." },
        { h: "총 317개 동작 매뉴얼", p: "매트 53 · 리포머 79 · 캐딜락 62 · 스태빌리티 체어 28 · 래더바렐 27 · 아크바렐 29 · 스파인코렉터 39, 합계 317개 동작이 문서화되어 있습니다. 각 동작에는 배리에이션, 모디피케이션, 소도구 활용 티칭이 함께 붙습니다." },
      ],
    },
    en: {
      title: "Essential Curriculum | CPPI Pilates Instructor Certification",
      desc: "The eight core courses of the CPPI Pilates instructor certification, built on functional anatomy and medical evidence - Mat, Reformer, Cadillac, Chair and Barrel series.",
      eyebrow: "CURRICULUM", h1: "CPPI Essential Curriculum",
      lead: "Every course is built on functional anatomy and medical evidence.",
      blocks: [{ h: "Eight core courses", list: ["1. Functional Pilates Anatomy - 10 hours", "2. Basic Principles: 10 principles / 5 movement rules - 10 hours", "3. Body type, posture and movement analysis - 5 hours", "4. Pilates Mat - 25 hours", "5. Reformer - 20-25 hours", "6. Cadillac - 20-25 hours", "7. Stability Chair - 10 hours", "8. Ladder Barrel and Barrel series - 10 hours"] }],
    },
    ja: {
      title: "ピラティス資格カリキュラム 8科目110~120時間 | CPPI 韓国",
      desc: "機能解剖学と医学的根拠に基づいて設計されたCPPI正規課程の8大カリキュラム。マット・リフォーマー・キャデラック・チェア・バレルシリーズを詳しくご案内します。",
      eyebrow: "CURRICULUM", h1: "CPPI エッセンシャルカリキュラム",
      lead: "全課程が機能解剖学と医学的根拠の上に設計されています。",
      blocks: [{ h: "8大カリキュラム", list: ["1. 機能解剖学ピラティス - 10時間", "2. ベーシックプリンシプル 10原則 / 5つの動作原則 - 10時間", "3. 体型分析および動作評価 - 5時間", "4. ピラティス・マット - 25時間", "5. リフォーマー - 20~25時間", "6. キャデラック - 20~25時間", "7. スタビリティチェア - 10時間", "8. ラダーバレルおよびバレルシリーズ - 10時間"] }],
    },
    zh: {
      title: "普拉提教练培训课程 8大科目110~120小时 | CPPI 韩国资格证",
      desc: "基于功能解剖学与医学循证设计的CPPI正规课程八大体系 - 垫上、核心床、凯迪拉克、椅、桶系列详细介绍。",
      eyebrow: "CURRICULUM", h1: "CPPI 核心课程体系",
      lead: "所有课程均建立在功能解剖学与医学循证之上。",
      blocks: [{ h: "八大课程", list: ["1. 普拉提功能解剖学 - 10小时", "2. 基本原理10项 / 5大动作原则 - 10小时", "3. 体型分析与动作评估 - 5小时", "4. 垫上普拉提 - 25小时", "5. 核心床 - 20~25小时", "6. 凯迪拉克 - 20~25小时", "7. 稳踏椅 - 10小时", "8. 梯桶及桶系列 - 10小时"] }],
    },
    "zh-Hant": {
      title: "皮拉提斯師資培訓課程 8大科目110~120小時 | CPPI 韓國證照",
      desc: "以功能解剖學與醫學實證設計的 CPPI 正規課程八大體系 - 墊上、核心床、凱迪拉克、椅、桶系列完整介紹。台灣稱皮拉提斯證照，香港稱普拉提導師課程。",
      eyebrow: "CURRICULUM", h1: "CPPI 核心課程體系",
      lead: "所有課程均建立在功能解剖學與醫學實證之上。",
      blocks: [{ h: "八大課程", list: ["1. 皮拉提斯功能解剖學 - 10 小時", "2. 基本原理 10 項 / 5 大動作原則 - 10 小時", "3. 體態分析與動作評估 - 5 小時", "4. 墊上皮拉提斯 - 25 小時", "5. 核心床 (Reformer) - 20~25 小時", "6. 凱迪拉克 (Cadillac) - 20~25 小時", "7. 穩踏椅 (Stability Chair) - 10 小時", "8. 梯桶及桶系列 - 10 小時"] }],
    },
    schema: { "@type": "Course", name: "CPPI Pilates Instructor Certification" },
  },

  courses: {
    ko: {
      title: "교육 안내 - 필라테스 강사 자격과정 | CPPI 한국 필라테스 교육협회",
      desc: "이론+실기+티칭실습 중심의 CPPI 국제 필라테스 강사 자격과정 안내. 마스터 강사진, 수료 혜택, 모집 정보.",
      eyebrow: "CERTIFICATION", h1: "CPPI 필라테스 교육안내",
      lead: "이론 · 실기 · 티칭 실습을 반복하는 실무 중심 자격과정입니다.",
      blocks: [
        { h: "한 문단 요약", p: "CPPI 필라테스 강사 자격과정은 8개 과목 약 110~120시간으로 구성된 국제 자격과정입니다. 이론 강의, 실기 체득, 교육생 상호 티칭 실습을 반복하는 실무 중심 구조이며, 수료 시 국제자격증 발급과 L3 정회원 승급, 수료강사 명단 등재, 활동 연계 지원이 따릅니다. 2016년 이후 56기 이상을 배출했고 한국·캐나다·일본에서 운영합니다." },
        { h: "교육 방식 - 세 번 반복한다", p: "CPPI의 한 과목은 세 단계를 거칩니다. 첫째, 이론 강의로 해당 동작이 어떤 관절에서 어떤 움직임을 만들고 어떤 근육이 관여하는지를 이해합니다. 둘째, 자기 몸으로 직접 수행해 감각을 익힙니다. 셋째, 교육생끼리 서로를 지도하는 티칭 실습을 반복합니다. 세 번째 단계가 가장 중요합니다. 아는 것과 가르치는 것은 다른 능력이고, 현장에서 필요한 것은 후자이기 때문입니다. 이 과정에서 큐잉 언어, 핸즈온 타이밍, 보상작용을 발견했을 때의 즉각적인 수정안이 훈련됩니다." },
        { h: "누가 듣는가", p: "수강생 구성은 크게 셋으로 나뉩니다. 첫째, 필라테스를 접해본 적 없는 완전 입문자입니다. 기능해부학 기초부터 단계적으로 설계되어 있어 비전공자도 따라올 수 있고, 실제 수료생 중 상당수가 타 분야에서 전향한 분들입니다. 둘째, 경력 단절 이후 전문직으로 복귀하려는 30~40대입니다. 셋째, 이미 현장에서 지도하고 있으나 근거 없이 외운 동작을 반복하는 데 한계를 느낀 현직 강사입니다." },
        { h: "과정 구성과 시간", p: "필라테스 기능해부학 10시간, 베이직 프린서플 10시간, 체형 분석 및 움직임 평가 5시간, 필라테스 매트 25시간, 리포머 20~25시간, 캐딜락 20~25시간, 스태빌리티 체어 10시간, 래더바렐 및 바렐 시리즈 10시간으로 합계 약 110~120시간입니다. 교재는 직접 집필·출판한 9권 1,300여 페이지를 사용하며, 317개 동작 매뉴얼이 실기의 기준이 됩니다." },
        { h: "수료 요건", p: "정규 수료에는 오프라인 실기와 티칭 평가가 포함됩니다. 온라인 강의는 복습과 보조 학습용이며 온라인만으로는 수료가 인정되지 않습니다. 실기 평가는 동작 수행 정확도뿐 아니라 '수강생의 몸 상태를 읽고 그에 맞게 조정할 수 있는가'를 함께 봅니다." },
        { h: "수료 혜택 · 국제자격증", p: "수료 시 CPPI 국제자격증(Certified Professional Pilates Instructor)이 발급되고 L3 정회원으로 승급됩니다. 수료강사 명단에 등재되며, 스튜디오 연계와 네트워크 지원을 받습니다. 수료 이후에도 워크숍과 온라인 강의를 통해 심화 학습을 이어갈 수 있습니다." },
        { h: "모집 · 수강료", p: "기수별로 모집합니다. 개강 일정과 수강료는 공지 및 개별 상담 시 자세히 안내드립니다. 무료 상담을 통해 현재 상태에서 어떤 과정부터 시작하는 것이 적절한지 먼저 확인하실 수 있습니다." },
        { h: "졸업생 성과", p: "2016년 이후 56기 이상을 배출했습니다. 수료생 중 다수가 현재 타 아카데미에서 마스터(교육강사)로 활동하고 있습니다. 수강생이 다시 교육자가 되는 구조가 만들어졌다는 점이 CPPI가 지표로 삼는 성과입니다." },
        { h: "심화 - 워크숍과 시그니처 과정", p: "정규과정 외에 현직 강사와 재활 종사자를 위한 단기 심화 워크숍을 운영합니다. 리커버링 재활 필라테스 원데이 자격과정(8시간, 7교시 × 50분 구성으로 동작 37개와 이론 14개), 임산부 필라테스 전문가 과정, 소도구 필라테스 전문가 과정(16시간, 폼롤러·써클·미니볼·BOSU)이 있습니다." },
      ],
    },
    en: {
      title: "Pilates Instructor Certification | CPPI Korea",
      desc: "The CPPI international Pilates instructor certification: theory, hands-on practice and repeated peer teaching. Master instructors, certification benefits and enrollment information.",
      eyebrow: "CERTIFICATION", h1: "CPPI Pilates Instructor Certification",
      lead: "A practice-first certification built on repeated cycles of theory, practice and teaching.",
      blocks: [
        { h: "How we teach", p: "Theory, hands-on embodiment, and repeated peer instructing - training that prepares you for real lessons." },
        { h: "Certification benefits", p: "International certificate, L3 membership upgrade, listing in the graduates directory, and career support." },
        { h: "Enrollment and tuition", p: "Enrollment runs by class. Schedules are announced publicly and explained in detail during consultation." },
        { h: "Graduate outcomes", p: "More than 56 certified classes to date. Many graduates now teach as master instructors at other academies." },
      ],
    },
    ja: {
      title: "ピラティスインストラクター資格取得コース 8科目110~120時間 | CPPI",
      desc: "理論＋実技＋指導実習を中心としたCPPI国際ピラティス指導者資格課程のご案内。マスター講師陣、修了特典、募集情報。",
      eyebrow: "CERTIFICATION", h1: "CPPI ピラティス指導者資格課程",
      lead: "理論・実技・指導実習を繰り返す、実務中心の資格課程です。",
      blocks: [
        { h: "教育方式", p: "理論講義＋実技習得＋受講生相互の指導実習を繰り返す、レッスン実務中心の構成です。" },
        { h: "修了特典・国際資格証", p: "国際資格証の発行、L3正会員への昇級、修了講師名簿への掲載、活動連携の支援。" },
        { h: "募集・受講料", p: "期別募集です。日程は告知および相談時に詳しくご案内します。" },
        { h: "卒業生の実績", p: "これまでに56期以上を輩出。他アカデミーでマスター(指導講師)として活動する修了生も多数います。" },
      ],
    },
    zh: {
      title: "普拉提教练资格课程 | CPPI 韩国普拉提教育协会",
      desc: "以理论+实操+教学实习为核心的CPPI国际普拉提教练资格课程介绍。大师导师阵容、结业福利与招生信息。",
      eyebrow: "CERTIFICATION", h1: "CPPI 普拉提教练资格课程",
      lead: "反复进行理论、实操与教学实习的实务型资格课程。",
      blocks: [
        { h: "教学方式", p: "理论讲授＋实操掌握＋学员相互教学实习反复进行，以实际授课能力为核心。" },
        { h: "结业福利·国际证书", p: "颁发国际资格证书、升级为L3正会员、登载于结业教练名录、提供活动衔接支持。" },
        { h: "招生·学费", p: "按期招生。日程通过公告与咨询详细告知。" },
        { h: "毕业生成果", p: "迄今已培养56期以上。多位结业生在其他学院担任大师级导师。" },
      ],
    },
    "zh-Hant": {
      title: "皮拉提斯師資培訓證照課程 | CPPI 韓國皮拉提斯教育協會",
      desc: "以理論＋實作＋教學實習為核心的 CPPI 國際皮拉提斯師資培訓證照課程。大師導師陣容、結業權益與招生資訊。香港亦稱普拉提導師證書課程。",
      eyebrow: "CERTIFICATION", h1: "CPPI 皮拉提斯師資培訓證照課程",
      lead: "反覆進行理論、實作與教學實習的實務型證照課程。",
      blocks: [
        { h: "教學方式", p: "理論講授＋實作掌握＋學員相互教學實習反覆進行，以實際授課能力為核心。" },
        { h: "結業權益 · 國際證照", p: "核發國際證照、升級為 L3 正會員、登載於結業導師名錄、提供授課媒合支援。" },
        { h: "招生 · 學費", p: "採梯次招生。詳細日程於公告與諮詢時說明。" },
        { h: "畢業生成果", p: "迄今已培育 56 期以上。多位結業學員於其他學院擔任大師級導師。" },
      ],
    },
    schema: { "@type": "Course", name: "CPPI Pilates Instructor Certification" },
  },

  workshop: {
    ko: {
      title: "전문 강사 워크숍 | CPPI 한국 필라테스 교육협회",
      desc: "현직 강사·재활 종사자를 위한 단기 심화 실습 워크숍 - 리커버링 재활, 임산부, 소도구 필라테스 과정.",
      eyebrow: "WORKSHOP", h1: "전문 강사 워크숍",
      lead: "현직 강사 · 재활 종사자를 위한 단기 심화 실습.",
      blocks: [{ h: "운영 워크숍", list: ["'리커버링 재활 필라테스' 원데이 자격과정 - 8시간", "임산부 필라테스 전문가 과정", "소도구 필라테스 전문가 과정 - 16시간 (폼롤러 · 써클 · 미니볼 · BOSU)"] }],
    },
    en: {
      title: "Professional Instructor Workshops | CPPI Korea",
      desc: "Short intensive Pilates workshops for practising instructors and rehabilitation professionals: recovering rehabilitation, prenatal, and small-props courses.",
      eyebrow: "WORKSHOP", h1: "Professional instructor workshops",
      lead: "Short intensive practicums for practising instructors and rehabilitation professionals.",
      blocks: [{ h: "Current workshops", list: ["Recovering Rehabilitation Pilates - one-day certification, 8 hours", "Prenatal Pilates specialist course", "Small-props Pilates specialist course - 16 hours (foam roller, circle, mini ball, BOSU)"] }],
    },
    ja: {
      title: "現役インストラクター向けワークショップ | CPPI 韓国ピラティス教育協会",
      desc: "現役講師・リハビリ従事者のための短期深化実習ワークショップ。リカバリングリハビリ、マタニティ、小道具ピラティス課程。",
      eyebrow: "WORKSHOP", h1: "専門講師ワークショップ",
      lead: "現役講師・リハビリ従事者のための短期深化実習です。",
      blocks: [{ h: "開催ワークショップ", list: ["「リカバリング リハビリピラティス」ワンデイ資格課程 - 8時間", "マタニティピラティス専門課程", "小道具ピラティス専門課程 - 16時間 (フォームローラー・サークル・ミニボール・BOSU)"] }],
    },
    zh: {
      title: "专业教练工作坊 | CPPI 韩国普拉提教育协会",
      desc: "面向在职教练与康复从业者的短期深化实操工作坊：康复、孕产、小工具普拉提课程。",
      eyebrow: "WORKSHOP", h1: "专业教练工作坊",
      lead: "面向在职教练与康复从业者的短期深化实操。",
      blocks: [{ h: "开设工作坊", list: ["「Recovering 康复普拉提」一日资格课程 - 8小时", "孕产普拉提专家课程", "小工具普拉提专家课程 - 16小时 (泡沫轴·普拉提圈·迷你球·BOSU)"] }],
    },
    "zh-Hant": {
      title: "專業導師工作坊 | CPPI 韓國皮拉提斯教育協會",
      desc: "為在職導師與復健從業人員開設的短期深化實作工作坊：復健、孕產、小器材皮拉提斯課程。",
      eyebrow: "WORKSHOP", h1: "專業導師工作坊",
      lead: "為在職導師與復健從業人員開設的短期深化實作。",
      blocks: [{ h: "開設工作坊", list: ["「Recovering 復健皮拉提斯」一日證照課程 - 8 小時", "孕產皮拉提斯專業課程", "小器材皮拉提斯專業課程 - 16 小時 (滾筒 · 圈 · 迷你球 · BOSU)"] }],
    },
    schema: { "@type": "EducationEvent" },
  },

  master: {
    ko: {
      title: "마스터 강사진 | CPPI 한국 필라테스 교육협회",
      desc: "엄격한 심화교육과 프레젠터 스피치 과정을 거친 CPPI 마스터 인스트럭터를 소개합니다.",
      eyebrow: "MASTER INSTRUCTORS", h1: "마스터 강사",
      lead: "심화교육과 프레젠터 스피치 과정을 거친 CPPI 교육강사입니다.",
      blocks: [{ h: "마스터 인스트럭터", list: ["박은주 (Eun-Ju Park) - 파운더 · 대표 마스터", "김민서 (Min-seo KIM)", "이청아 (Cheong-ah LEE)", "손희정 (Hee-jung SOHN)", "김휘향 (Hwy-hyang KIM)"] }],
    },
    en: {
      title: "Master Instructors | CPPI Korea Pilates Education Association",
      desc: "CPPI master instructors, trained through rigorous advanced education and presenter speech courses.",
      eyebrow: "MASTER INSTRUCTORS", h1: "Master instructors",
      lead: "CPPI educators who have completed advanced training and presenter speech courses.",
      blocks: [{ h: "Master instructors", list: ["Eun-Ju Park - Founder and Lead Master", "Min-seo KIM", "Cheong-ah LEE", "Hee-jung SOHN", "Hwy-hyang KIM"] }],
    },
    ja: {
      title: "マスター講師陣 | CPPI 韓国ピラティス教育協会",
      desc: "厳格な深化教育とプレゼンター・スピーチ課程を修了したCPPIマスターインストラクターをご紹介します。",
      eyebrow: "MASTER INSTRUCTORS", h1: "マスター講師",
      lead: "深化教育とスピーチ課程を修了したCPPIの教育講師です。",
      blocks: [{ h: "マスターインストラクター", list: ["パク・ウンジュ (Eun-Ju Park) - 創立者・代表マスター", "キム・ミンソ (Min-seo KIM)", "イ・チョンア (Cheong-ah LEE)", "ソン・ヒジョン (Hee-jung SOHN)", "キム・フィヒャン (Hwy-hyang KIM)"] }],
    },
    zh: {
      title: "大师导师团队 | CPPI 韩国普拉提教育协会",
      desc: "介绍经过严格深化教育与演讲课程的CPPI大师级导师。",
      eyebrow: "MASTER INSTRUCTORS", h1: "大师级导师",
      lead: "完成深化教育与演讲课程的CPPI教育导师。",
      blocks: [{ h: "大师级导师", list: ["朴恩珠 (Eun-Ju Park) - 创始人·首席大师", "金玟序 (Min-seo KIM)", "李清娥 (Cheong-ah LEE)", "孙熙贞 (Hee-jung SOHN)", "金辉香 (Hwy-hyang KIM)"] }],
    },
    "zh-Hant": {
      title: "大師導師團隊 | CPPI 韓國皮拉提斯教育協會",
      desc: "介紹通過嚴格深化教育與講師表達課程的 CPPI 大師級導師。",
      eyebrow: "MASTER INSTRUCTORS", h1: "大師級導師",
      lead: "完成深化教育與講師表達課程的 CPPI 教育導師。",
      blocks: [{ h: "大師級導師", list: ["朴恩珠 (Eun-Ju Park) - 創辦人·首席大師", "金玟序 (Min-seo KIM)", "李清娥 (Cheong-ah LEE)", "孫熙貞 (Hee-jung SOHN)", "金輝香 (Hwy-hyang KIM)"] }],
    },
    schema: { "@type": "CollectionPage" },
  },

  stories: {
    ko: {
      title: "수료강사 후기 | CPPI 한국 필라테스 교육협회",
      desc: "CPPI와 함께 성장한 수료강사들의 후기와 56기 이상의 수료강사 명단.",
      eyebrow: "STORIES", h1: "수료강사들의 이야기",
      lead: "CPPI와 함께 성장한 수료강사들의 이야기입니다.",
      blocks: [{ h: "수료강사 명단", p: "56기 이상의 수료강사가 CPPI 정규과정을 마쳤습니다. 전체 후기와 기수별 명단은 앱에서 확인하실 수 있습니다." }],
    },
    en: {
      title: "Graduate Stories | CPPI Korea Pilates Education Association",
      desc: "Reviews from CPPI graduates and the directory of more than 56 certified classes.",
      eyebrow: "STORIES", h1: "Stories from our graduates",
      lead: "Instructors who grew with CPPI.",
      blocks: [{ h: "Graduates directory", p: "More than 56 classes have completed the CPPI certification. The full reviews and class-by-class directory are available in the app." }],
    },
    ja: {
      title: "修了講師の声 | CPPI 韓国ピラティス教育協会",
      desc: "CPPIとともに成長した修了講師の口コミと、56期以上の修了講師名簿。",
      eyebrow: "STORIES", h1: "修了講師のストーリー",
      lead: "CPPIとともに成長した講師たちの声です。",
      blocks: [{ h: "修了講師名簿", p: "56期以上の修了講師がCPPI正規課程を修了しています。口コミ全文と期別名簿はアプリでご確認いただけます。" }],
    },
    zh: {
      title: "结业教练评价 | CPPI 韩国普拉提教育协会",
      desc: "与CPPI共同成长的结业教练评价，以及56期以上的结业教练名录。",
      eyebrow: "STORIES", h1: "结业教练的故事",
      lead: "与CPPI共同成长的教练们的心声。",
      blocks: [{ h: "结业教练名录", p: "已有56期以上学员完成CPPI正规课程。完整评价与各期名录可在应用中查看。" }],
    },
    "zh-Hant": {
      title: "結業導師評價 | CPPI 韓國皮拉提斯教育協會",
      desc: "與 CPPI 一同成長的結業導師評價，以及 56 期以上的結業導師名錄。",
      eyebrow: "STORIES", h1: "結業導師的故事",
      lead: "與 CPPI 一同成長的導師們的心聲。",
      blocks: [{ h: "結業導師名錄", p: "已有 56 期以上學員完成 CPPI 正規課程。完整評價與各梯次名錄可於應用程式中查看。" }],
    },
    schema: { "@type": "CollectionPage" },
  },

  global: {
    ko: {
      title: "글로벌 운영 - 한국·캐나다·일본 | CPPI 한국 필라테스 교육협회",
      desc: "CPPI는 한국-캐나다-일본에서 필라테스 강사 교육을 운영합니다. 지역별 교육센터와 운영 현황.",
      eyebrow: "GLOBAL", h1: "한국 · 캐나다 · 일본에서 운영합니다",
      blocks: [
        { h: "대한민국 KOREA", p: "분당 · 서울 · 김포 교육센터 운영. 정규과정 · 워크숍 · 자격검정 진행." },
        { h: "캐나다 CANADA", p: "밴쿠버 - 팬데믹 기간에도 온라인 병행으로 교육을 지속했습니다." },
        { h: "일본 JAPAN", p: "도쿄 - 국제 자격 대응 인스트럭터 양성 과정 운영. 문의는 LINE 또는 이메일로 받습니다." },
      ],
    },
    en: {
      title: "Global - Korea, Canada, Japan | CPPI Pilates Education",
      desc: "CPPI runs Pilates instructor education in Korea, Canada and Japan. Regional centers and current operations.",
      eyebrow: "GLOBAL", h1: "Operating across Korea, Canada and Japan",
      blocks: [
        { h: "KOREA", p: "Education centers in Bundang, Seoul and Gimpo, running certification courses, workshops and assessments." },
        { h: "CANADA", p: "Vancouver - education continued online throughout the pandemic and remains active." },
        { h: "JAPAN", p: "Tokyo - instructor training aligned with international certification. Enquiries are welcome by email, or by LINE for Japan." },
      ],
    },
    ja: {
      title: "グローバル展開 - 韓国・カナダ・日本 | CPPI ピラティス教育",
      desc: "CPPIは韓国・カナダ・日本でピラティス指導者教育を運営しています。地域別センターと運営状況。",
      eyebrow: "GLOBAL", h1: "韓国・カナダ・日本で運営しています",
      blocks: [
        { h: "韓国 KOREA", p: "盆唐・ソウル・金浦の教育センターを運営。正規課程・ワークショップ・資格検定を実施しています。" },
        { h: "カナダ CANADA", p: "バンクーバー - パンデミック期間中もオンラインを併用して教育を継続しました。" },
        { h: "日本 JAPAN", p: "東京 - 国際資格に対応したインストラクター養成課程を運営しています。お問い合わせはLINEまたはメールで承ります。" },
      ],
    },
    zh: {
      title: "全球运营 - 韩国·加拿大·日本 | CPPI 普拉提教育",
      desc: "CPPI在韩国、加拿大、日本开展普拉提教练教育。各地区教育中心与运营现状。",
      eyebrow: "GLOBAL", h1: "在韩国、加拿大、日本运营",
      blocks: [
        { h: "韩国 KOREA", p: "运营盆唐、首尔、金浦教育中心，开展正规课程、工作坊与资格检定。" },
        { h: "加拿大 CANADA", p: "温哥华 - 疫情期间亦通过线上并行持续教学。" },
        { h: "日本 JAPAN", p: "东京 - 运营对应国际资格的教练养成课程。咨询可通过邮件，日本地区亦可使用LINE。" },
      ],
    },
    "zh-Hant": {
      title: "全球據點 - 韓國·加拿大·日本 | CPPI 皮拉提斯教育",
      desc: "CPPI 於韓國、加拿大、日本開展皮拉提斯師資培訓。各地區教育中心與營運現況，並受理台灣、香港、新加坡的洽詢。",
      eyebrow: "GLOBAL", h1: "於韓國、加拿大、日本營運",
      blocks: [
        { h: "韓國 KOREA", p: "營運盆唐、首爾、金浦教育中心，開設正規課程、工作坊與證照檢定。" },
        { h: "加拿大 CANADA", p: "溫哥華 - 疫情期間亦以線上並行方式持續授課。" },
        { h: "日本 JAPAN", p: "東京 - 營運對應國際證照的師資培訓課程。洽詢可透過電子郵件，日本地區亦可使用 LINE。" },
        { h: "台灣 · 香港 · 新加坡", p: "目前尚未設置常設據點，惟已受理個別洽詢與團體班次規劃。請以電子郵件聯繫，我們會依人數與地點提供梯次安排。" },
      ],
    },
    schema: { "@type": "AboutPage" },
  },

  learn: {
    ko: {
      title: "온라인 강의 | CPPI 한국 필라테스 교육협회",
      desc: "정규과정 온라인 강의, 척추 필라테스 어프로치, 무브먼트 테라피 등 CPPI 온라인 강의 안내.",
      eyebrow: "ONLINE LECTURES", h1: "온라인 강의",
      blocks: [
        { h: "정규과정 온라인 강의", p: "8개 과목 · 등록자/수료자 전용." },
        { h: "척추 필라테스 어프로치", p: "이론 1강 + 실기 2강 · 구매 후 시청." },
        { h: "CPPI 필라테스 무브먼트 테라피", p: "경추 · 견관절 · 척추 · 골반 - 구매 후 시청 · 수료증 온라인 발급." },
      ],
    },
    en: {
      title: "Online Lectures | CPPI Pilates Education",
      desc: "CPPI online Pilates lectures: certification course review, the Pilates Approach for Spine, and Movement Therapy.",
      eyebrow: "ONLINE LECTURES", h1: "Online lectures",
      blocks: [
        { h: "Certification course lectures", p: "Eight subjects, available to enrolled students and graduates." },
        { h: "Pilates Approach for Spine", p: "One theory lesson and two practical lessons, viewable after purchase." },
        { h: "CPPI Pilates Movement Therapy", p: "Cervical, shoulder, spine and pelvis. Viewable after purchase, with an e-certificate on completion." },
      ],
    },
    ja: {
      title: "ピラティス オンライン講義 | CPPI 韓国ピラティス教育協会",
      desc: "正規課程オンライン講義、脊柱ピラティスアプローチ、ムーブメントセラピーなどCPPIオンライン講義のご案内。",
      eyebrow: "ONLINE LECTURES", h1: "オンライン講義",
      blocks: [
        { h: "正規課程オンライン講義", p: "8科目・受講者/修了者限定。" },
        { h: "脊柱ピラティスアプローチ", p: "理論1講＋実技2講・購入後に視聴できます。" },
        { h: "CPPIピラティス・ムーブメントセラピー", p: "頸椎・肩関節・脊柱・骨盤。購入後に視聴でき、修了時にオンラインで修了証を発行します。" },
      ],
    },
    zh: {
      title: "在线课程 | CPPI 普拉提教育",
      desc: "CPPI在线普拉提课程：正规课程复习、脊柱普拉提方法、运动治疗。",
      eyebrow: "ONLINE LECTURES", h1: "在线课程",
      blocks: [
        { h: "正规课程在线课程", p: "8门科目，学员与结业生专享。" },
        { h: "脊柱普拉提方法", p: "理论1讲＋实操2讲，购买后可观看。" },
        { h: "CPPI普拉提运动治疗", p: "颈椎·肩关节·脊柱·骨盆。购买后观看，结业时在线颁发证书。" },
      ],
    },
    "zh-Hant": {
      title: "線上課程 | CPPI 皮拉提斯教育",
      desc: "CPPI 線上皮拉提斯課程：正規課程複習、脊椎皮拉提斯方法、動作治療。",
      eyebrow: "ONLINE LECTURES", h1: "線上課程",
      blocks: [
        { h: "正規課程線上複習", p: "8 門科目，學員與結業生專屬。" },
        { h: "脊椎皮拉提斯方法", p: "理論 1 講＋實作 2 講，購買後即可觀看。" },
        { h: "CPPI 皮拉提斯動作治療", p: "頸椎 · 肩關節 · 脊椎 · 骨盆。購買後觀看，結業時線上核發證書。" },
      ],
    },
    schema: { "@type": "CollectionPage" },
  },

  store: {
    ko: {
      title: "전자책 · 교재 스토어 | CPPI 한국 필라테스 교육협회",
      desc: "박은주(Eun-Ju Park) 저 CPPI 출판교재 9권과 전자책, 수강권을 미리보기와 함께 만나보세요.",
      eyebrow: "E-BOOK & TEXTBOOK STORE", h1: "전자책 · 교재 스토어",
      lead: "모든 교재는 목차와 본문 10페이지를 미리 볼 수 있습니다.",
      blocks: [
        { h: "정규과정 교재 (9권)", list: ["필라테스 기능해부학 - 238p", "필라테스 기본원리 - 80p", "필라테스 더 매트 - 160p", "리포머 - 306p", "캐딜락 - 368p", "스태빌리티 체어 - 202p", "래더 바렐 - 76p", "아크 바렐 - 79p", "스파인 코렉터 - 108p"] },
        { h: "전자책 · 영상 수강권", p: "필라테스 전문 지침서(무브먼트 테라피 4종) 전자책과 영상 수강권을 구매하실 수 있습니다." },
      ],
    },
    en: {
      title: "E-book & Textbook Store | CPPI Pilates",
      desc: "Nine CPPI Pilates textbooks authored by Eun-Ju Park, plus e-books and course passes, each with a preview.",
      eyebrow: "E-BOOK & TEXTBOOK STORE", h1: "E-book and textbook store",
      lead: "Every book offers a table of contents and a ten-page preview.",
      blocks: [
        { h: "Certification textbooks (9 volumes)", list: ["Functional Pilates Anatomy - 238 pages", "Basic Principles - 80 pages", "Pilates Mat - 160 pages", "Reformer - 306 pages", "Cadillac - 368 pages", "Stability Chair - 202 pages", "Ladder Barrel - 76 pages", "Arc Barrel - 79 pages", "Spine Corrector - 108 pages"] },
        { h: "E-books and video passes", p: "Professional guidebooks (four Movement Therapy volumes) as e-books, plus video course passes." },
      ],
    },
    ja: {
      title: "電子書籍・教材ストア | CPPI ピラティス",
      desc: "パク・ウンジュ(Eun-Ju Park)著のCPPI出版教材9巻、電子書籍、受講券をプレビュー付きでご覧いただけます。",
      eyebrow: "E-BOOK & TEXTBOOK STORE", h1: "電子書籍・教材ストア",
      lead: "すべての教材で目次と本文10ページをプレビューできます。",
      blocks: [
        { h: "正規課程教材 (全9巻)", list: ["機能解剖学ピラティス - 238ページ", "ピラティス基本原理 - 80ページ", "ピラティス・ザ・マット - 160ページ", "リフォーマー - 306ページ", "キャデラック - 368ページ", "スタビリティチェア - 202ページ", "ラダーバレル - 76ページ", "アークバレル - 79ページ", "スパインコレクター - 108ページ"] },
        { h: "電子書籍・動画受講券", p: "ピラティス専門指針書(ムーブメントセラピー4種)の電子書籍と、動画受講券をご購入いただけます。" },
      ],
    },
    zh: {
      title: "电子书·教材商店 | CPPI 普拉提",
      desc: "朴恩珠(Eun-Ju Park)著CPPI出版教材9册、电子书与课程券，均提供预览。",
      eyebrow: "E-BOOK & TEXTBOOK STORE", h1: "电子书·教材商店",
      lead: "所有教材均可预览目录与正文10页。",
      blocks: [
        { h: "正规课程教材 (9册)", list: ["普拉提功能解剖学 - 238页", "普拉提基本原理 - 80页", "垫上普拉提 - 160页", "核心床 - 306页", "凯迪拉克 - 368页", "稳踏椅 - 202页", "梯桶 - 76页", "弧形桶 - 79页", "脊柱矫正器 - 108页"] },
        { h: "电子书·视频课程券", p: "可购买普拉提专业指南(运动治疗4种)电子书与视频课程券。" },
      ],
    },
    "zh-Hant": {
      title: "電子書 · 教材商店 | CPPI 皮拉提斯",
      desc: "朴恩珠(Eun-Ju Park)著 CPPI 出版教材 9 冊、電子書與課程券，均提供試閱。",
      eyebrow: "E-BOOK & TEXTBOOK STORE", h1: "電子書 · 教材商店",
      lead: "所有教材皆可試閱目錄與正文 10 頁。",
      blocks: [
        { h: "正規課程教材 (9 冊)", list: ["皮拉提斯功能解剖學 - 238 頁", "皮拉提斯基本原理 - 80 頁", "墊上皮拉提斯 - 160 頁", "核心床 Reformer - 306 頁", "凱迪拉克 Cadillac - 368 頁", "穩踏椅 Stability Chair - 202 頁", "梯桶 Ladder Barrel - 76 頁", "弧形桶 Arc Barrel - 79 頁", "脊椎矯正器 Spine Corrector - 108 頁"] },
        { h: "電子書 · 影片課程券", p: "可購買皮拉提斯專業指南(動作治療 4 種)電子書與影片課程券。" },
      ],
    },
    schema: { "@type": "CollectionPage" },
  },
};


/* ------------------------------------------------------------------
   본문 보강 (2026-08) - 아래 5개 라우트는 본문이 100~380자에 그쳐
   색인 시 사이트 전체 품질 신호를 떨어뜨리고 있었다. AI 답변이 인용할
   수 있는 형태(숫자·고유명사·정의)로 사실을 채운다.
   원본 CONTENT 리터럴은 건드리지 않고 블록만 덧붙인다.
   ※ 리커버링의 이론 프레임워크는 CPPI 자체 교육 체계이며 동료심사
      문헌으로 검증된 수준이 아니다. 그 점을 본문에 명시한다.
------------------------------------------------------------------ */
const EXTRA_BLOCKS = {
  workshop: {
    ko: [
      { h: "리커버링 재활 필라테스 원데이 자격과정 (8시간)", p: "7교시 x 50분 구성으로 09:30에 시작해 17:30에 마칩니다(점심 12:30~13:30). 동작 37개와 이론 14개를 다룹니다. 교시 구성은 P1 오프닝 및 근막 기초, P2 풋워크, P3 포포인트 및 스탠딩, P4 스탠딩 브릿지 및 시티드 시리즈, P5 사이드라잉, P6 프론 및 롤업, P7 클로징입니다." },
      { h: "리커버링이란 무엇인가", p: "리커버링(Recovering)은 CPPI가 운영하는 소도구 겸 프로그램명입니다. 단순 탄성 도구가 아니라 압박(Compression) · 보조(Assist) · 균형(Balance) 세 가지 원리로 척추를 입체적으로 자극하는 3D 감각 피드백 도구로 정의합니다." },
      { h: "도구의 3요소", list: [
        "6-TOP - 압박 포인트의 중심. 골반 · 흉골 · 발바닥 · 종아리 등에 압박 자극을 주어 즉각적인 감각 피드백을 전달합니다.",
        "2-EDGE - 밀고 당기기의 경계선. 양손의 회전력을 형성하는 가이드로, 척추 회전 시 좌우 비대칭을 감지하게 합니다.",
        "4-CURVE - 움직임의 가이드 레일. 굴곡과 신전의 방향을 안내하고 손목 · 팔꿈치 정렬과 안전한 가동범위 확보에 관여합니다." ] },
      { h: "그 밖의 워크숍", list: [
        "임산부 필라테스 전문가 과정",
        "소도구 필라테스 전문가 과정 - 16시간 (폼롤러 · 서클 · 미니볼 · BOSU, 전용 교재 4권 총 638페이지)" ] },
      { h: "이론 근거에 대한 고지", p: "리커버링의 생체역학 프레임워크(닫힌 사슬, 축성 신장, 항회전, 나선 근막 사슬, 관절 중심화, 고유수용감각 등)는 CPPI가 현장 교육을 위해 정리한 자체 체계입니다. 개별 항목이 무작위 대조시험이나 메타분석으로 검증된 수준인지는 별도의 문헌 검토가 필요합니다." },
    ],
    en: [
      { h: "Recovering Rehabilitation Pilates - one-day certification (8 hours)", p: "Seven 50-minute periods running 09:30 to 17:30 with a lunch break from 12:30 to 13:30, covering 37 movements and 14 theory segments. The sequence is P1 opening and myofascial foundation, P2 foot work, P3 four-point and standing, P4 standing bridge and seated series, P5 side-lying, P6 prone and roll up, P7 closing." },
      { h: "What Recovering is", p: "Recovering is both a prop and a programme run by CPPI. Rather than a simple elastic device, it is defined as a three-dimensional sensory feedback tool that works the spine through three principles: compression, assist and balance." },
      { h: "The three elements of the prop", list: [
        "6-TOP - the centre of compression. Applies pressure at the pelvis, sternum, sole and calf, returning immediate sensory feedback.",
        "2-EDGE - the boundary of push and pull. Guides the rotational force of both hands and makes left-right asymmetry perceptible during spinal rotation.",
        "4-CURVE - the guide rail of movement. Directs flexion and extension, and governs wrist and elbow alignment and a safe range of motion." ] },
      { h: "Other workshops", list: [
        "Prenatal Pilates specialist course",
        "Small-props Pilates specialist course - 16 hours (foam roller, circle, mini ball, BOSU), with 4 dedicated textbooks totalling 638 pages" ] },
      { h: "A note on the theoretical basis", p: "The biomechanical framework behind Recovering - closed kinetic chain, axial elongation, anti-rotation, spiral myofascial slings, joint centration, proprioception and related concepts - is CPPI's own teaching framework, compiled for field instruction. Whether each individual claim has been validated by randomised controlled trials or meta-analysis would require a separate literature review." },
    ],
    ja: [
      { h: "リカバリング リハビリピラティス ワンデー資格課程 (8時間)", p: "7教時 x 50分の構成で、09:30に始まり17:30に終了します (昼食12:30~13:30)。動作37種と理論14項目を扱います。教時構成は P1 オープニングおよび筋膜基礎、P2 フットワーク、P3 フォーポイントおよびスタンディング、P4 スタンディングブリッジおよびシーテッドシリーズ、P5 サイドライイング、P6 プローンおよびロールアップ、P7 クロージングです。" },
      { h: "リカバリングとは", p: "リカバリング (Recovering) は CPPI が運営する小道具兼プログラム名です。単なる弾性ツールではなく、圧迫 (Compression) · 補助 (Assist) · バランス (Balance) の3原理で脊柱を立体的に刺激する 3D 感覚フィードバックツールとして定義しています。" },
      { h: "ツールの3要素", list: [
        "6-TOP - 圧迫ポイントの中心。骨盤 · 胸骨 · 足底 · ふくらはぎなどに圧迫刺激を与え、即時の感覚フィードバックを伝えます。",
        "2-EDGE - 押しと引きの境界線。両手の回旋力を形成するガイドで、脊柱回旋時の左右非対称を知覚させます。",
        "4-CURVE - 動きのガイドレール。屈曲と伸展の方向を導き、手首 · 肘のアライメントと安全な可動域の確保に関わります。" ] },
      { h: "その他のワークショップ", list: [
        "マタニティピラティス専門家課程",
        "小道具ピラティス専門家課程 - 16時間 (フォームローラー · サークル · ミニボール · BOSU)、専用教材4冊 計638ページ" ] },
      { h: "理論的根拠についての注記", p: "リカバリングの生体力学フレームワーク (閉鎖性運動連鎖、軸性伸長、抗回旋、螺旋筋膜スリング、関節中心化、固有受容感覚など) は、CPPI が現場教育のために整理した独自の体系です。各項目がランダム化比較試験やメタ分析で検証された水準かどうかは、別途の文献レビューが必要です。" },
    ],
    zh: [
      { h: "Recovering 康复普拉提 一日资格课程 (8小时)", p: "由7个课时 x 50分钟组成，09:30开始，17:30结束 (午餐12:30~13:30)。涵盖37个动作与14项理论。课时结构为 P1 开场与筋膜基础、P2 足部训练、P3 四点支撑与站姿、P4 站姿桥式与坐姿系列、P5 侧卧、P6 俯卧与卷起、P7 收尾。" },
      { h: "什么是 Recovering", p: "Recovering 是 CPPI 运营的小器械兼课程名称。它并非单纯的弹性器械，而被定义为通过压迫 (Compression) · 辅助 (Assist) · 平衡 (Balance) 三项原理立体唤醒脊柱的 3D 感觉反馈系统。" },
      { h: "器械的三要素", list: [
        "6-TOP - 压迫点的中心。对骨盆 · 胸骨 · 足底 · 小腿等部位施加压迫刺激，即时传递感觉反馈。",
        "2-EDGE - 推与拉的边界线。作为形成双手旋转力的导引，在脊柱旋转时提供左右不对称的反馈。",
        "4-CURVE - 动作的导轨。引导屈曲与伸展的方向，并参与腕 · 肘对位及安全活动范围的确保。" ] },
      { h: "其他工作坊", list: [
        "孕产妇普拉提专家课程",
        "小器械普拉提专家课程 - 16小时 (泡沫轴 · 圈 · 迷你球 · BOSU)，配套教材4册 共638页" ] },
      { h: "关于理论依据的说明", p: "Recovering 的生物力学框架 (闭链运动、轴向延展、抗旋转、螺旋筋膜链、关节中心化、本体感觉等) 是 CPPI 为现场教学整理的自有体系。各项内容是否已通过随机对照试验或荟萃分析验证，需另行进行文献审阅。" },
    ],
    "zh-Hant": [
      { h: "Recovering 復健皮拉提斯 一日證照課程 (8小時)", p: "由7堂課 x 50分鐘組成，09:30開始、17:30結束 (午餐12:30~13:30)。涵蓋37個動作與14項理論。課堂結構為 P1 開場與筋膜基礎、P2 足部訓練、P3 四足跪姿與站姿、P4 站姿橋式與坐姿系列、P5 側躺、P6 俯臥與捲起、P7 收尾。" },
      { h: "什麼是 Recovering", p: "Recovering 是 CPPI 營運的小器材兼課程名稱。它並非單純的彈性器材，而是以壓迫 (Compression) · 輔助 (Assist) · 平衡 (Balance) 三項原理立體喚醒脊柱的 3D 感覺回饋系統。" },
      { h: "器材的三要素", list: [
        "6-TOP - 壓迫點的中心。對骨盆 · 胸骨 · 足底 · 小腿等部位施加壓迫刺激，即時傳遞感覺回饋。",
        "2-EDGE - 推與拉的邊界線。作為形成雙手旋轉力的導引，在脊柱旋轉時提供左右不對稱的回饋。",
        "4-CURVE - 動作的導軌。引導屈曲與伸展的方向，並參與腕 · 肘對位及安全活動範圍的確保。" ] },
      { h: "其他工作坊", list: [
        "孕產婦皮拉提斯專家課程",
        "小器材皮拉提斯專家課程 - 16小時 (滾筒 · 圈 · 迷你球 · BOSU)，配套教材4冊 共638頁" ] },
      { h: "關於理論依據的說明", p: "Recovering 的生物力學框架 (閉鎖鏈運動、軸向延展、抗旋轉、螺旋筋膜鏈、關節中心化、本體感覺等) 是 CPPI 為現場教學整理的自有體系。各項內容是否已通過隨機對照試驗或統合分析驗證，需另行進行文獻審閱。" },
    ],
  },

  master: {
    ko: [
      { h: "마스터 인스트럭터가 되는 경로", p: "CPPI 정규과정 수료 후 심화교육과 프레젠터 스피치 과정을 이수해야 마스터 인스트럭터로 지도에 참여할 수 있습니다. 프레젠터 스피치 과정을 별도로 두는 이유는, 동작을 아는 것과 그것을 남에게 가르치는 것이 다른 역량이기 때문입니다." },
      { h: "창립자 · 대표 마스터 - 박은주 (Eun-Ju Park)", p: "간호 임상 출신으로 분당서울대병원 마취통증의학과와 한국보훈복지공단 척추&관절센터에서 근무했습니다. 서울대병원에서 중환자 전문간호연수, 정형외과 수술후 재활과정, 노인간호 및 재활과정, 당뇨 · 고혈압 · 골다공증 관리 과정을 이수했습니다. 나사렛대학교 스포츠재활학과 겸임교수와 서경대학교 예술교육원 필라테스과정 원장을 역임했습니다." },
      { h: "창립자 보유 국제 자격", list: [
        "STOTT PILATES - IMP · IR · ICCB · AMP · AR · RMR1-ISP (Injury Special Population)",
        "PMA (Pilates Method Alliance) Certification Education - 2012",
        "Balanced Body University - Creating Length & Strength / Scoliosis Spiral / Innovate Mat Sequences for Motor Control, Stability and Balance",
        "POWER PLATE Master Trainer Certification - 2022",
        "RECOVERING Master Trainer Certification - 2022" ] },
      { h: "학회 · 단체 활동", list: ["경기도 배구협회 이사", "대한 간호정우회 · 간호 Q&A협회 정회원", "대한 비만학회 정회원"] },
    ],
    en: [
      { h: "How one becomes a master instructor", p: "After completing the CPPI certification, an instructor must finish advanced training and a presenter speech course before teaching on CPPI programmes. The speech course exists as a separate requirement because knowing a movement and teaching it to someone else are different competencies." },
      { h: "Founder and lead master - Eun-Ju Park", p: "A clinically trained nurse, she worked in the Department of Anesthesiology and Pain Medicine at Seoul National University Hospital Bundang and at the Spine & Joint Center of the Korea Veterans Health Service. Her training at SNUH covered critical care nursing, post-operative orthopedic rehabilitation, geriatric nursing and rehabilitation, and the management of diabetes, hypertension and osteoporosis. She served as Adjunct Professor of Sports Rehabilitation at Korea Nazarene University and as Director of the Pilates Programme at Seokyeong University Arts Education Center." },
      { h: "International credentials held by the founder", list: [
        "STOTT PILATES - IMP, IR, ICCB, AMP, AR, RMR1-ISP (Injury and Special Populations)",
        "PMA (Pilates Method Alliance) Certification Education - 2012",
        "Balanced Body University - Creating Length & Strength; Scoliosis Spiral; Innovate Mat Sequences for Motor Control, Stability and Balance",
        "POWER PLATE Master Trainer Certification - 2022",
        "RECOVERING Master Trainer Certification - 2022" ] },
      { h: "Professional affiliations", list: ["Director, Gyeonggi-do Volleyball Association", "Full member, Korean Nurses associations", "Full member, Korean Society for the Study of Obesity"] },
    ],
    ja: [
      { h: "マスターインストラクターになる道筋", p: "CPPI正規課程の修了後、深化教育とプレゼンター・スピーチ課程を修了して初めて、マスターインストラクターとして指導に参加できます。スピーチ課程を別に設けているのは、動作を知っていることと、それを他者に教えることが別の能力だからです。" },
      { h: "創立者 · 代表マスター - パク・ウンジュ (Eun-Ju Park)", p: "看護臨床出身で、盆唐ソウル大学病院 麻酔痛症医学科および韓国報勲福祉公団 脊椎&関節センターに勤務しました。ソウル大学病院では重症患者専門看護研修、整形外科術後リハビリ課程、高齢者看護およびリハビリ課程、糖尿 · 高血圧 · 骨粗鬆症管理課程を修了しています。韓国ナザレ大学スポーツリハビリ学科 兼任教授、西京大学芸術教育院ピラティス課程 院長を歴任しました。" },
      { h: "創立者が保有する国際資格", list: [
        "STOTT PILATES - IMP · IR · ICCB · AMP · AR · RMR1-ISP (Injury Special Population)",
        "PMA (Pilates Method Alliance) Certification Education - 2012",
        "Balanced Body University - Creating Length & Strength / Scoliosis Spiral / Innovate Mat Sequences",
        "POWER PLATE Master Trainer Certification - 2022",
        "RECOVERING Master Trainer Certification - 2022" ] },
      { h: "学会 · 団体活動", list: ["京畿道バレーボール協会 理事", "大韓看護関連団体 正会員", "大韓肥満学会 正会員"] },
    ],
    zh: [
      { h: "成为大师级导师的路径", p: "结业于 CPPI 正规课程后，须再完成深化教育与演讲 (Presenter Speech) 课程，方可作为大师级导师参与授课。之所以将演讲课程单独设为条件，是因为掌握动作与把动作教给他人是两种不同的能力。" },
      { h: "创始人 · 首席大师 - 朴恩珠 (Eun-Ju Park)", p: "护理临床出身，曾任职于盆唐首尔大学医院麻醉疼痛医学科及韩国报勋福祉公团脊柱与关节中心。在首尔大学医院完成重症监护专科护理研修、骨科术后康复课程、老年护理与康复课程，以及糖尿病 · 高血压 · 骨质疏松管理课程。历任韩国拿撒勒大学运动康复学科兼任教授、西京大学艺术教育院普拉提课程院长。" },
      { h: "创始人持有的国际资格", list: [
        "STOTT PILATES - IMP · IR · ICCB · AMP · AR · RMR1-ISP",
        "PMA (Pilates Method Alliance) Certification Education - 2012",
        "Balanced Body University - Creating Length & Strength / Scoliosis Spiral / Innovate Mat Sequences",
        "POWER PLATE Master Trainer Certification - 2022",
        "RECOVERING Master Trainer Certification - 2022" ] },
      { h: "学会 · 团体活动", list: ["京畿道排球协会 理事", "大韩护理相关团体 正会员", "大韩肥胖学会 正会员"] },
    ],
    "zh-Hant": [
      { h: "成為大師級導師的路徑", p: "結業於 CPPI 正規課程後，須再完成深化教育與講師表達 (Presenter Speech) 課程，方可作為大師級導師參與授課。之所以將表達課程單獨列為條件，是因為掌握動作與把動作教給他人是兩種不同的能力。" },
      { h: "創辦人 · 首席大師 - 朴恩珠 (Eun-Ju Park)", p: "護理臨床出身，曾任職於盆唐首爾大學醫院麻醉疼痛醫學科及韓國報勳福祉公團脊椎與關節中心。並於首爾大學醫院完成重症監護專科護理研修、骨科術後復健課程、高齡照護與復健課程，以及糖尿病 · 高血壓 · 骨質疏鬆管理課程。歷任韓國拿撒勒大學運動復健學系兼任教授、西京大學藝術教育院皮拉提斯課程院長。" },
      { h: "創辦人持有的國際證照", list: [
        "STOTT PILATES - IMP · IR · ICCB · AMP · AR · RMR1-ISP",
        "PMA (Pilates Method Alliance) Certification Education - 2012",
        "Balanced Body University - Creating Length & Strength / Scoliosis Spiral / Innovate Mat Sequences",
        "POWER PLATE Master Trainer Certification - 2022",
        "RECOVERING Master Trainer Certification - 2022" ] },
      { h: "學會 · 團體活動", list: ["京畿道排球協會 理事", "大韓護理相關團體 正會員", "大韓肥胖學會 正會員"] },
    ],
  },
};

for (const [route, byLang] of Object.entries(EXTRA_BLOCKS)) {
  for (const [lang, extra] of Object.entries(byLang)) {
    const entry = CONTENT[route] && CONTENT[route][lang];
    if (entry) entry.blocks = (entry.blocks || []).concat(extra);
  }
}


const EXTRA_BLOCKS_2 = {
  stories: {
    ko: [
      { h: "회원 등급 체계", p: "CPPI는 3단계 회원 등급을 운영합니다. 정규과정을 수료하면 L3 정회원으로 승급되고, 수료강사 명단에 등재되어 활동 연계 지원을 받습니다. 등급은 수강 이력과 활동에 따라 관리됩니다." },
      { h: "수료생 구성", p: "56기 이상이 정규과정을 마쳤습니다. 수료생 중 상당수가 필라테스 비전공자로, 다른 분야에서 전향해 강사가 된 경우입니다. 커리큘럼이 기능해부학 기초에서 출발하도록 설계된 것도 이 때문입니다." },
      { h: "수료 후 진로", list: [
        "필라테스 스튜디오 강사 - 그룹 수업 및 개인 지도",
        "재활 · 교정 중심 프로그램 운영 - 병원 · 재활센터 연계",
        "스튜디오 창업 및 운영",
        "CPPI 심화교육 이수 후 마스터 인스트럭터 과정" ] },
      { h: "후기 열람", p: "기수별 수료강사 명단과 개별 후기는 CPPI 앱에서 확인하실 수 있습니다. 후기는 수료생이 직접 작성한 것만 게재합니다." },
    ],
    en: [
      { h: "Membership tiers", p: "CPPI runs a three-tier membership system. Graduates of the certification programme are upgraded to L3 full membership and listed in the graduate instructor directory, which carries support in finding teaching work. Tiers are maintained according to study history and activity." },
      { h: "Who takes the course", p: "More than 56 cohorts have completed the certification. A substantial share of graduates had no Pilates background and moved into teaching from other fields. This is why the curriculum is built to start from functional anatomy fundamentals." },
      { h: "Where graduates go", list: [
        "Studio instructor - group classes and private instruction",
        "Rehabilitation and corrective programmes, in partnership with clinics and rehabilitation centres",
        "Opening and running a studio",
        "The master instructor track, after completing CPPI advanced training" ] },
      { h: "Reading the reviews", p: "Cohort-by-cohort graduate listings and individual reviews are available in the CPPI app. Only reviews written by graduates themselves are published." },
    ],
    ja: [
      { h: "会員等級制度", p: "CPPI は3段階の会員等級を運営しています。正規課程を修了すると L3 正会員に昇級し、修了講師名簿に掲載されて活動の連携支援を受けられます。等級は受講履歴と活動に応じて管理されます。" },
      { h: "受講者の構成", p: "56期以上が正規課程を修了しました。修了生のうち相当数はピラティス未経験者で、他分野から転向して指導者になった方々です。カリキュラムが機能解剖学の基礎から始まる設計になっているのはこのためです。" },
      { h: "修了後の進路", list: [
        "ピラティススタジオのインストラクター - グループレッスンおよびパーソナル指導",
        "リハビリ · 姿勢矯正中心のプログラム運営 - 病院 · リハビリセンターとの連携",
        "スタジオの開業および運営",
        "CPPI 深化教育の修了を経てマスターインストラクター課程へ" ] },
      { h: "レビューの閲覧", p: "期別の修了講師名簿と個別レビューは CPPI アプリでご確認いただけます。レビューは修了生本人が書いたもののみを掲載しています。" },
    ],
    zh: [
      { h: "会员等级体系", p: "CPPI 采用三级会员等级制度。结业于正规课程后升级为 L3 正会员，并登载于结业教练名录，可获得活动衔接支持。等级依据学习履历与活动情况管理。" },
      { h: "学员构成", p: "已有56期以上完成正规课程。结业学员中相当比例并无普拉提基础，是从其他行业转型而来。课程之所以从功能解剖学基础起步，正是出于这一考量。" },
      { h: "结业后的出路", list: [
        "普拉提工作室教练 - 团体课与私教",
        "康复 · 矫正导向课程的运营 - 与医院 · 康复中心衔接",
        "工作室创业与经营",
        "完成 CPPI 深化教育后进入大师级导师课程" ] },
      { h: "查看评价", p: "各期结业教练名录与个别评价可在 CPPI 应用中查看。仅刊载由结业学员本人撰写的评价。" },
    ],
    "zh-Hant": [
      { h: "會員等級制度", p: "CPPI 採用三級會員等級制度。結業於正規課程後升級為 L3 正會員，並登載於結業導師名錄，可獲得授課媒合支援。等級依據學習履歷與活動情況管理。" },
      { h: "學員組成", p: "已有56梯以上完成正規課程。結業學員中相當比例並無皮拉提斯基礎，是從其他行業轉職而來。課程之所以從功能解剖學基礎起步，正是出於這一考量。" },
      { h: "結業後的出路", list: [
        "皮拉提斯工作室導師 - 團課與私人指導",
        "復健 · 矯正導向課程的營運 - 與醫院 · 復健中心銜接",
        "工作室創業與經營",
        "完成 CPPI 深化教育後進入大師級導師課程" ] },
      { h: "查看評價", p: "各梯次結業導師名錄與個別評價可於 CPPI 應用程式查看。僅刊載由結業學員本人撰寫的評價。" },
    ],
  },

  global: {
    ko: [
      { h: "교육 언어와 통역", p: "정규과정의 교육 언어는 한국어입니다. 해외에서 수강을 원하시는 분은 이메일로 통역 가능 여부와 일정을 먼저 문의해 주세요. 교재는 한국어판이 기준입니다." },
      { h: "지역별 문의 채널", list: [
        "대한민국 - 010-4894-4292 · 네이버 톡톡",
        "일본 - 이메일 (LINE 공식 계정 준비 중)",
        "대만 · 홍콩 · 싱가포르 · 말레이시아 - 이메일 (영어 또는 중국어)",
        "캐나다 및 그 외 지역 - 이메일 (영어)",
        "공통 이메일 - allmovements@naver.com" ] },
      { h: "해외 수강 시 확인할 것", list: [
        "정규과정은 오프라인 실기와 티칭 평가를 포함하므로 방한 일정이 필요합니다.",
        "온라인 강의는 사전 학습과 복습용이며 단독으로는 수료가 되지 않습니다.",
        "기수 일정, 총 소요 기간, 숙박 및 이동은 문의 시 개별 안내드립니다." ] },
    ],
    en: [
      { h: "Language of instruction and interpretation", p: "Certification courses are taught in Korean. If you are applying from outside Korea, please email first to ask about interpretation and scheduling. Textbooks are published in Korean." },
      { h: "Contact by region", list: [
        "Korea - +82-10-4894-4292, Naver TalkTalk",
        "Japan - email (an official LINE account is in preparation)",
        "Taiwan, Hong Kong, Singapore, Malaysia - email, in English or Chinese",
        "Canada and elsewhere - email, in English",
        "General email - allmovements@naver.com" ] },
      { h: "What to check before applying from abroad", list: [
        "Certification includes in-person practical work and a teaching assessment, so a stay in Korea is required.",
        "Online lectures are for preparation and review; they do not lead to certification on their own.",
        "Cohort dates, total duration, accommodation and travel are advised individually on enquiry." ] },
    ],
    ja: [
      { h: "教育言語と通訳", p: "正規課程の教育言語は韓国語です。海外から受講をご希望の方は、まずメールで通訳の可否と日程をお問い合わせください。教材は韓国語版が基準です。" },
      { h: "地域別のお問い合わせ窓口", list: [
        "韓国 - 010-4894-4292 · Naver トークトーク",
        "日本 - メール (LINE 公式アカウントは準備中)",
        "台湾 · 香港 · シンガポール · マレーシア - メール (英語または中国語)",
        "カナダおよびその他の地域 - メール (英語)",
        "共通メール - allmovements@naver.com" ] },
      { h: "海外から受講する際の確認事項", list: [
        "正規課程は対面の実技と指導評価を含むため、訪韓の日程が必要です。",
        "オンライン講義は事前学習と復習用であり、単独では修了になりません。",
        "期の日程、総所要期間、宿泊および移動については、お問い合わせ時に個別にご案内します。" ] },
    ],
    zh: [
      { h: "授课语言与翻译", p: "正规课程的授课语言为韩语。希望从海外报读者，请先通过邮件咨询翻译安排与日程。教材以韩语版为准。" },
      { h: "各地区咨询渠道", list: [
        "韩国 - 010-4894-4292 · Naver TalkTalk",
        "日本 - 邮件 (LINE 官方账号筹备中)",
        "台湾 · 香港 · 新加坡 · 马来西亚 - 邮件 (英语或中文)",
        "加拿大及其他地区 - 邮件 (英语)",
        "通用邮箱 - allmovements@naver.com" ] },
      { h: "海外报读前需确认", list: [
        "正规课程包含线下实操与教学考核，因此需要安排赴韩行程。",
        "在线课程用于课前学习与复习，单独学习无法结业。",
        "期次日程、总时长、住宿与交通将在咨询时个别说明。" ] },
    ],
    "zh-Hant": [
      { h: "授課語言與口譯", p: "正規課程的授課語言為韓語。希望自海外報名者，請先以電子郵件洽詢口譯安排與梯次日程。教材以韓語版為準。" },
      { h: "各地區洽詢管道", list: [
        "韓國 - 010-4894-4292 · Naver TalkTalk",
        "日本 - 電子郵件 (LINE 官方帳號籌備中)",
        "台灣 · 香港 · 新加坡 · 馬來西亞 - 電子郵件 (英文或中文)",
        "加拿大及其他地區 - 電子郵件 (英文)",
        "共用信箱 - allmovements@naver.com" ] },
      { h: "海外報名前需確認", list: [
        "正規課程包含實體實作與教學考核，因此需安排赴韓行程。",
        "線上課程用於課前學習與複習，單獨修習無法結業。",
        "梯次日程、總時長、住宿與交通將於洽詢時個別說明。" ] },
    ],
  },

  learn: {
    ko: [
      { h: "온라인 강의 3종 비교", list: [
        "정규과정 온라인 강의 - 8개 과목 전체. 박은주 교수 직강. 정규과정 등록자와 수료자 전용이며 복습과 사전학습에 사용합니다.",
        "척추 필라테스 어프로치 - 이론 1강 + 실기 2강. 척추질환별 금지 동작과 추천 동작을 다룹니다. 구매 후 시청 가능합니다.",
        "CPPI 필라테스 무브먼트 테라피 - 경추 · 견관절 · 척추 · 골반 4개 부위별 교정운동. 구매 후 시청, 수료증은 온라인으로 발급됩니다." ] },
      { h: "온라인 강의로 수료가 되나요", p: "되지 않습니다. 온라인 강의는 보조 학습 수단입니다. 정규 수료에는 오프라인 실기와 티칭 평가가 반드시 포함됩니다. 다만 무브먼트 테라피 강의는 자체 수료증을 온라인으로 발급합니다." },
      { h: "결제와 열람", p: "결제 · 환불 · 고객응대는 교육사업 대행사 씨앤티파트너스(C&T Partners)가 담당합니다. 계좌이체는 입금 확인 후 열람 권한이 부여되며, 디지털 상품은 열람 이후 환불이 어렵습니다." },
    ],
    en: [
      { h: "The three online courses compared", list: [
        "Certification online lectures - all 8 subjects, taught by Prof. Eun-Ju Park. Restricted to enrolled students and graduates, for preparation and review.",
        "Pilates Approach for Spine - 1 theory lecture plus 2 practical lectures, covering contraindicated and recommended movements by spinal condition. Available after purchase.",
        "CPPI Pilates Movement Therapy - corrective exercise for four regions: cervical spine, shoulder, spine and pelvis. Available after purchase; a certificate is issued online." ] },
      { h: "Can I certify online only?", p: "No. Online lectures are a supplement. Certification always requires in-person practical work and a teaching assessment. The Movement Therapy course does issue its own certificate online." },
      { h: "Payment and access", p: "Payment, refunds and customer service are handled by C&T Partners, CPPI's education business agency. For bank transfers, access is granted once the deposit is confirmed. Digital products are difficult to refund once accessed." },
    ],
    ja: [
      { h: "オンライン講義3種の比較", list: [
        "正規課程オンライン講義 - 8科目すべて。パク・ウンジュ教授の直接講義。正規課程の登録者と修了者専用で、予習と復習に使用します。",
        "脊柱ピラティスアプローチ - 理論1講 + 実技2講。脊椎疾患別の禁忌動作と推奨動作を扱います。購入後に視聴できます。",
        "CPPI ピラティス・ムーブメントセラピー - 頸椎 · 肩関節 · 脊柱 · 骨盤の4部位別の矯正運動。購入後に視聴、修了証はオンラインで発行されます。" ] },
      { h: "オンライン講義だけで修了できますか", p: "できません。オンライン講義は補助的な学習手段です。正規修了には対面の実技と指導評価が必ず含まれます。ただしムーブメントセラピー講義は独自の修了証をオンラインで発行します。" },
      { h: "決済と視聴", p: "決済 · 返金 · 顧客対応は教育事業代行社の C&T Partners が担当します。銀行振込は入金確認後に視聴権限が付与され、デジタル商品は視聴後の返金が困難です。" },
    ],
    zh: [
      { h: "三种在线课程对比", list: [
        "正规课程在线课程 - 全部8门科目，朴恩珠教授亲授。仅限正规课程报名者与结业学员，用于预习与复习。",
        "脊柱普拉提方法 - 理论1讲 + 实操2讲，讲解按脊柱疾病分类的禁忌动作与推荐动作。购买后可观看。",
        "CPPI 普拉提运动治疗 - 颈椎 · 肩关节 · 脊柱 · 骨盆四个部位的矫正运动。购买后可观看，结业证书在线颁发。" ] },
      { h: "只上在线课程可以结业吗", p: "不可以。在线课程属于辅助学习手段。正式结业必须包含线下实操与教学考核。不过运动治疗课程会在线颁发其自有结业证书。" },
      { h: "支付与观看", p: "支付 · 退款 · 客户服务由教育事业代理机构 C&T Partners 负责。银行转账在确认到账后开通观看权限，数字商品一经观看难以退款。" },
    ],
    "zh-Hant": [
      { h: "三種線上課程比較", list: [
        "正規課程線上課程 - 全部8門科目，朴恩珠教授親授。僅限正規課程報名者與結業學員，用於預習與複習。",
        "脊柱皮拉提斯方法 - 理論1講 + 實作2講，講解按脊椎疾病分類的禁忌動作與建議動作。購買後即可觀看。",
        "CPPI 皮拉提斯運動治療 - 頸椎 · 肩關節 · 脊柱 · 骨盆四個部位的矯正運動。購買後即可觀看，結業證書線上核發。" ] },
      { h: "只上線上課程可以結業嗎", p: "不可以。線上課程屬於輔助學習手段。正式結業必須包含實體實作與教學考核。不過運動治療課程會線上核發其自有結業證書。" },
      { h: "付款與觀看", p: "付款 · 退款 · 客戶服務由教育事業代理機構 C&T Partners 負責。銀行匯款於確認入帳後開通觀看權限，數位商品一經觀看難以退款。" },
    ],
  },
};

for (const [route, byLang] of Object.entries(EXTRA_BLOCKS_2)) {
  for (const [lang, extra] of Object.entries(byLang)) {
    const entry = CONTENT[route] && CONTENT[route][lang];
    if (entry) entry.blocks = (entry.blocks || []).concat(extra);
  }
}

export const ROUTES = Object.keys(CONTENT);
/* 홈을 제외한 하위 페이지 목록 - 네비게이션·사이트맵에서 사용 */
export const SUB_ROUTES = ROUTES.filter(r => r !== "home");

/* 본문이 아직 얇아서, 색인되면 사이트 전체의 품질 신호를 떨어뜨리는 라우트.
   5개 라우트 x 5개 언어 = 25개 URL 을 '일시적으로' 색인에서 빼 둔다.
   noindex,follow 이므로 링크 자산은 그대로 흐르고, 사람은 정상적으로 볼 수 있다.
   본문을 채운 라우트는 이 배열에서 한 줄만 빼면 즉시 색인 대상으로 돌아온다. */
/* 2026-08: 5개 라우트 모두 본문을 채워 색인 대상으로 복귀시켰다.
   기준은 글자 수가 아니라 '답할 거리'다 - 시수, 구성, 자격, 절차 같은
   검증 가능한 사실이 각 언어의 본문에 실제로 들어 있는지로 판단한다.
   앞으로 새 라우트를 만들 때 본문이 비어 있으면 여기에 넣어 두고,
   채운 뒤에 빼면 된다. */
export const THIN_ROUTES = [];

export function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

/* 로케일 + 라우트 -> URL 경로
     ko   home  -> "/"            (index.html - 앱 본체)
     ko   about -> "/about"
     en   home  -> "/en/"
     zh-Hant about -> "/zh-hant/about"                            */
export function pathFor(lang, route) {
  const seg = PATH_SEG[lang] ?? lang;
  if (route === "home") return seg ? `/${seg}/` : "/";
  return seg ? `/${seg}/${route}` : `/${route}`;
}

/* URL 세그먼트(zh-hant) -> 내부 로케일 키(zh-Hant). 대소문자 무관하게 받는다. */
export function langFromSeg(seg) {
  if (!seg) return "ko";
  const s = String(seg).toLowerCase();
  return LANGS.find(l => (PATH_SEG[l] || "").toLowerCase() === s) || null;
}

function blockHTML(b) {
  let out = `<div class="blk">`;
  if (b.h) out += `<h2>${esc(b.h)}</h2>`;
  if (b.p) out += `<p>${esc(b.p)}</p>`;
  if (b.list) out += `<ul>${b.list.map(li => `<li>${esc(li)}</li>`).join("")}</ul>`;
  out += `</div>`;
  return out;
}

function faqHTML(lang, route) {
  const items = (FAQ[route] || {})[lang];
  if (!items || !items.length) return "";
  return `<section class="faq"><h2>${esc(UI.faq[lang])}</h2>` +
    items.map(([q, a]) => `<div class="qa"><h3>${esc(q)}</h3><p>${esc(a)}</p></div>`).join("") +
    `</section>`;
}

/* 페이지 JSON-LD - pageHTML 과 앱 셸(respondApp) 양쪽에서 함께 쓴다 */
export function jsonLD(lang, route) {
  const entry = CONTENT[route];
  const c = entry[lang] || entry.en;
  const url = ORIGIN + pathFor(lang, route);
  const hero = HERO[route];
  const heroSrc = hero ? ORIGIN + hero.src : OG_IMG;
  const JOB_TITLE = {
    ko: "파운더 · 필라테스 교육자",
    en: "Founder, Pilates educator",
    ja: "創立者・ピラティス教育者",
    zh: "创始人·普拉提教育者",
    "zh-Hant": "創辦人 · 皮拉提斯教育者",
  };

  /* 페이지 노드 - 스키마 타입에 따라 필요한 필드를 채운다 */
  const pageNode = Object.assign(
    {
      "@id": url + "#page", url, name: c.title, description: c.desc,
      inLanguage: HTML_LANG[lang], isPartOf: { "@id": ORIGIN + "/#website" },
      primaryImageOfPage: heroSrc,
    },
    entry.schema || {}
  );
  /* Course 리치결과 요건: provider 필수 */
  if (pageNode["@type"] === "Course") {
    pageNode.provider = { "@id": ORIGIN + "/#org" };
    pageNode.educationalCredentialAwarded = {
      "@type": "EducationalOccupationalCredential",
      name: "CPPI Certified Professional Pilates Instructor",
      credentialCategory: "certificate",
      recognizedBy: { "@id": ORIGIN + "/#org" },
    };
    pageNode.timeRequired = "PT115H";
    pageNode.numberOfCredits = 8;
    pageNode.educationalLevel = "Professional certification";
    pageNode.occupationalCategory = "Pilates instructor";
    pageNode.coursePrerequisites = "No prior Pilates qualification required. The curriculum begins from functional anatomy fundamentals.";
    pageNode.teaches = [
      "Functional Pilates anatomy",
      "Pilates basic principles and the five movement rules",
      "Posture and movement analysis",
      "Pilates Mat repertoire",
      "Reformer", "Cadillac", "Stability Chair", "Ladder Barrel and Barrel series",
      "Cueing and hands-on teaching practice",
    ];
    pageNode.inLanguage = ["ko", "en", "ja", "zh-Hans", "zh-Hant"];
    pageNode.hasCourseInstance = {
      "@type": "CourseInstance",
      courseMode: ["Onsite", "Blended"],
      courseWorkload: "PT115H",
      /* 실제 개설 장소 - 검증 가능한 상호와 도로명 주소로 내보낸다 */
      location: PLACES.map(pl => ({
        "@type": "Place", name: pl.name,
        address: Object.assign(
          { "@type": "PostalAddress", addressLocality: pl.locality, addressCountry: pl.country },
          pl.street ? { streetAddress: pl.street } : {}
        ),
      })).concat([
        { "@type": "Place", name: "CPPI Vancouver", address: { "@type": "PostalAddress", addressLocality: "Vancouver", addressCountry: "CA" } },
        { "@type": "Place", name: "CPPI Tokyo", address: { "@type": "PostalAddress", addressLocality: "Tokyo", addressCountry: "JP" } },
      ]),
    };
  }

  /* ProfilePage 리치결과 요건: mainEntity 는 필수 필드다.
     2026-08-22 GSC "'mainEntity' 입력란이 누락되었습니다"(심각) 대응.
     @graph 에 Person 노드(/#founder)가 이미 있으나 ProfilePage 에서 가리키지 않아 누락으로 판정됐다.
     참조(@id)만 두면 검증기가 필수 필드(name)를 못 읽는 경우가 있어 최소 필드를 안에 직접 넣는다.
     @id 가 동일하므로 JSON-LD 규칙상 두 노드는 하나로 병합된다. */
  if (pageNode["@type"] === "ProfilePage") {
    pageNode.mainEntity = {
      "@id": ORIGIN + "/#founder",
      "@type": "Person",
      name: FOUNDER[lang],
      alternateName: ["Eun-Ju Park", "박은주", "パク・ウンジュ", "朴恩珠"],
      jobTitle: JOB_TITLE[lang] || JOB_TITLE.en,
      image: ORIGIN + "/img/founder_photo.jpg",
      url: ORIGIN + pathFor(lang, "founder"),
      worksFor: { "@id": ORIGIN + "/#org" },
    };
    pageNode.dateModified = LAST_MODIFIED;
  }

  /* 빵부스러기 - 홈 > 현재 페이지 */
  const crumbs = [{ "@type": "ListItem", position: 1, name: UI.home[lang], item: ORIGIN + pathFor(lang, "home") }];
  if (route !== "home") crumbs.push({ "@type": "ListItem", position: 2, name: c.h1, item: url });

  const graph = [
    {
      "@type": "WebSite", "@id": ORIGIN + "/#website",
      url: ORIGIN + "/", name: SITE_NAME[lang], inLanguage: HTML_LANG[lang],
      publisher: { "@id": ORIGIN + "/#org" },
    },
    {
      "@type": ["Organization", "EducationalOrganization"],
      "@id": ORIGIN + "/#org",
      name: SITE_NAME[lang],
      alternateName: ["CPPI", "CPPI Korea", "한국필라테스교육협회", "Korea Pilates Education Association", "CPPI 韓國皮拉提斯教育協會"],
      url: ORIGIN + "/", logo: LOGO, image: ORIGIN + "/img/hero_bg.jpg", foundingDate: "2016",
      description: c.desc,
      founder: { "@id": ORIGIN + "/#founder" },
      areaServed: [
        { "@type": "Country", name: "South Korea" }, { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Japan" }, { "@type": "Country", name: "Taiwan" },
        { "@type": "Country", name: "Hong Kong" }, { "@type": "Country", name: "Singapore" },
      ],
      email: CONTACT.email, telephone: CONTACT.tel,
      address: {
        "@type": "PostalAddress",
        streetAddress: HQ_PLACE.street,
        addressLocality: HQ_PLACE.locality,
        addressCountry: HQ_PLACE.country,
      },
      location: PLACES.map(pl => ({
        "@type": "Place", name: pl.name,
        address: Object.assign(
          { "@type": "PostalAddress", addressLocality: pl.locality, addressCountry: pl.country },
          pl.street ? { streetAddress: pl.street } : {}
        ),
      })),
      contactPoint: {
        "@type": "ContactPoint", contactType: "admissions",
        email: CONTACT.email, telephone: CONTACT.tel,
        availableLanguage: ["Korean", "English", "Japanese", "Chinese"],
      },
      sameAs: [CONTACT.instagram, CONTACT.youtube, CONTACT.liinks].filter(Boolean),
    },
    {
      "@type": "Person", "@id": ORIGIN + "/#founder",
      name: FOUNDER[lang],
      alternateName: ["Eun-Ju Park", "박은주", "パク・ウンジュ", "朴恩珠"],
      jobTitle: JOB_TITLE[lang] || JOB_TITLE.en,
      image: ORIGIN + "/img/founder_photo.jpg",
      worksFor: { "@id": ORIGIN + "/#org" },
      affiliation: { "@id": ORIGIN + "/#org" },
      knowsAbout: ["Pilates", "Functional anatomy", "Rehabilitation exercise", "Corrective exercise", "Spinal rehabilitation", "Prenatal Pilates", "Movement analysis"],
      knowsLanguage: ["ko", "en"],
      url: ORIGIN + pathFor(lang, "founder"),
      mainEntityOfPage: ORIGIN + pathFor(lang, "founder"),
      sameAs: [CONTACT.instagram, CONTACT.youtube].filter(Boolean),
    },
    { "@type": "BreadcrumbList", "@id": url + "#breadcrumb", itemListElement: crumbs },
    pageNode,
  ];

  /* FAQPage - 화면에 실제로 렌더링되는 Q&A 만 스키마로 내보낸다 */
  const faqItems = (FAQ[route] || {})[lang];
  if (faqItems && faqItems.length) {
    graph.push({
      "@type": "FAQPage", "@id": url + "#faq",
      mainEntity: faqItems.map(([q, a]) => ({
        "@type": "Question", name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function pageHTML(lang, route) {
  const entry = CONTENT[route];
  const c = entry[lang] || entry.en || entry.ko;
  const url = ORIGIN + pathFor(lang, route);
  const nav = NAV[lang] || NAV.en;
  const navHTML = nav.map(([label, r]) =>
    `<a href="${pathFor(lang, r)}"${r === route ? ' aria-current="page"' : ""}>${esc(label)}</a>`).join("");
  const langHTML = LANGS.map(l =>
    `<a href="${pathFor(l, route)}" hreflang="${HTML_LANG[l]}"${l === lang ? ' aria-current="true"' : ""}>${esc(LANG_LABEL[l])}</a>`).join("");

  /* hreflang - 로케일마다 여러 지역 코드를 내보낸다 (en-SG, zh-Hant-TW, zh-Hant-HK 등) */
  const alts = LANGS.flatMap(l =>
    HREFLANG[l].map(code => `<link rel="alternate" hreflang="${code}" href="${ORIGIN + pathFor(l, route)}">`)
  ).join("\n");

  /* 페이지 대표 이미지 - og:image 도 페이지별로 분리한다 */
  const hero = HERO[route];
  const heroSrc = hero ? ORIGIN + hero.src : OG_IMG;
  const heroAlt = hero ? (hero.alt[lang] || hero.alt.en) : SITE_NAME[lang];
  const heroHTML = hero
    ? `<figure class="hero"><img src="${hero.src}" alt="${esc(heroAlt)}" width="1200" height="630" loading="eager" decoding="async"><figcaption>${esc(heroAlt)}</figcaption></figure>`
    : "";

  const contacts = [`<a class="cta" href="mailto:${CONTACT.email}">${esc(UI.emailUs[lang])}</a>`];
  if (lang === "ja" && CONTACT.LINE_URL) contacts.unshift(`<a class="cta" href="${CONTACT.LINE_URL}">${esc(UI.lineUs[lang])}</a>`);
  contacts.push(`<a class="cta ghost" href="/#apply">${esc(UI.consult[lang])}</a>`);

  /* 앱(해시 라우팅) 으로 가는 동선 - 방문자가 검색으로 들어와도 앱 본체로 넘어갈 수 있게 한다 */
  const appHref = route === "home" ? "/" : `/#${route}`;
  const appHTML = `<a class="applink" href="${appHref}">${esc(UI.inApp[lang])} <span aria-hidden="true">&rarr;</span></a>`;

  const jsonld = jsonLD(lang, route);


  return `<!DOCTYPE html>
<html lang="${HTML_LANG[lang]}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(c.title)}</title>
<meta name="description" content="${esc(c.desc)}">
<link rel="canonical" href="${url}">
${alts}
<link rel="alternate" hreflang="x-default" href="${ORIGIN + pathFor("en", route)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(SITE_NAME[lang])}">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
${LANGS.filter(l => l !== lang).map(l => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}">`).join("\n")}
<meta property="og:title" content="${esc(c.title)}">
<meta property="og:description" content="${esc(c.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${heroSrc}">
<meta property="og:image:alt" content="${esc(heroAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${heroSrc}">
<link rel="icon" href="/favicon.ico">
<script type="application/ld+json">${JSON.stringify(jsonld)}</script>
<style>
:root{--pri:#F15A22;--ink:#241C18;--ink2:#6E5B50;--line:#F0E1D5;--bg:#FFFBF7}
*{box-sizing:border-box}
body{margin:0;font-family:'Pretendard','Malgun Gothic','Hiragino Sans','Microsoft YaHei',sans-serif;background:var(--bg);color:var(--ink);line-height:1.75;word-break:keep-all}
header{border-bottom:1px solid var(--line);padding:16px 20px}
header .in{max-width:940px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
header img{height:28px}
nav{display:flex;gap:14px;flex-wrap:wrap;font-size:13px}
nav a{color:var(--ink2);text-decoration:none}
nav a[aria-current]{color:var(--pri);font-weight:700}
.langbar{display:flex;gap:8px;font-size:12px;letter-spacing:.06em}
.langbar a{color:var(--ink2);text-decoration:none}
.langbar a[aria-current]{color:var(--pri);font-weight:800}
main{max-width:780px;margin:0 auto;padding:44px 20px 60px}
.eyebrow{font-size:12px;letter-spacing:.16em;font-weight:800;color:var(--pri);text-transform:uppercase;margin-bottom:10px}
h1{font-size:34px;line-height:1.3;margin:0 0 16px;letter-spacing:-.02em}
.lead{color:var(--ink2);font-size:16px;margin-bottom:30px}
.blk{margin-bottom:24px}
.blk h2{font-size:19px;margin-bottom:9px}
.blk p{font-size:15px;color:var(--ink2)}
.blk ul{margin:0;padding-left:20px;font-size:15px;color:var(--ink2);line-height:1.95}
.note{background:#FFF3D6;border:1px solid #F1DDA6;border-radius:12px;padding:14px 16px;font-size:13.5px;color:#6E521A;margin:18px 0}
.ctabar{margin-top:34px;display:flex;gap:10px;flex-wrap:wrap}
.cta{display:inline-block;background:var(--pri);color:#fff;text-decoration:none;padding:13px 24px;border-radius:100px;font-size:14px;font-weight:700}
.cta.ghost{background:#fff;color:var(--pri);border:1.5px solid var(--pri)}
.applink{display:inline-flex;align-items:center;gap:6px;color:var(--pri);font-weight:700;font-size:14px;text-decoration:none;border:1.5px solid var(--pri);border-radius:100px;padding:9px 18px}
.appbar{max-width:940px;margin:0 auto;padding:12px 20px 0;display:flex;justify-content:flex-end}
figure.hero{margin:0 0 30px}
figure.hero img{width:100%;height:auto;border-radius:16px;display:block;background:#F5EAE1}
figure.hero figcaption{font-size:12.5px;color:var(--ink2);margin-top:8px;text-align:center}
.faq{margin-top:40px;border-top:1px solid var(--line);padding-top:28px}
.faq h2{font-size:21px;margin:0 0 18px}
.faq .qa{margin-bottom:18px}
.faq .qa h3{font-size:15.5px;margin:0 0 6px;color:var(--ink)}
.faq .qa p{font-size:14.5px;color:var(--ink2);margin:0}
footer{border-top:1px solid var(--line);padding:22px;text-align:center;font-size:12.5px;color:var(--ink2)}
footer a{color:var(--ink2)}
footer .social{margin-top:8px;display:flex;gap:12px;justify-content:center}
@media(max-width:640px){h1{font-size:26px}main{padding:28px 18px 48px}}
</style>
</head>
<body>
<header><div class="in">
  <a href="/"><img src="/logo_header.png" alt="${esc(SITE_NAME[lang])}"></a>
  <nav>${navHTML}</nav>
  <div class="langbar">${langHTML}</div>
</div></header>
<div class="appbar">${appHTML}</div>
<main>
  <div class="eyebrow">${esc(c.eyebrow)}</div>
  <h1>${esc(c.h1)}</h1>
  ${c.lead ? `<p class="lead">${esc(c.lead)}</p>` : ""}
  ${heroHTML}
  ${(c.blocks || []).map(blockHTML).join("")}
  ${c.note ? `<div class="note">${esc(c.note)}</div>` : ""}
  ${faqHTML(lang, route)}
  <div class="ctabar">${contacts.join("")}${appHTML}</div>
</main>
<footer>
  ${esc(SITE_NAME[lang])} · ${CONTACT.tel} · <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> · <a href="/">cppipilates.com</a>
  <div class="social"><a href="${CONTACT.instagram}" rel="me">Instagram</a><a href="${CONTACT.youtube}" rel="me">YouTube</a></div>
</footer>
</body>
</html>`;
}

/* ------------------------------------------------------------------
   사이트맵 - 정적 파일 대신 코드에서 생성한다.
   로케일이나 라우트를 추가해도 사이트맵이 자동으로 따라온다.
------------------------------------------------------------------ */
export function sitemapXML() {
  const urls = [];
  for (const route of ROUTES) {
    /* 색인 제외(noindex) 라우트는 사이트맵에도 올리지 않는다.
       noindex 인데 사이트맵에 있으면 서치콘솔이 계속 경고를 띄운다. */
    if (THIN_ROUTES.includes(route)) continue;
    for (const lang of LANGS) {
      const alt = LANGS.flatMap(l =>
        HREFLANG[l].map(code =>
          `    <xhtml:link rel="alternate" hreflang="${code}" href="${ORIGIN + pathFor(l, route)}"/>`)
      ).join("\n");
      urls.push(
        `  <url><loc>${ORIGIN + pathFor(lang, route)}</loc>\n${alt}\n` +
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN + pathFor("en", route)}"/>\n` +
        `  </url>`
      );
    }
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;
}

export function respond(lang, route) {
  if (!CONTENT[route]) return null;
  return new Response(pageHTML(lang, route), {
    headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "public, max-age=300" },
  });
}

/* ==================================================================
   앱 직접 진입 (SSR + 하이드레이션)

   해시 라우팅에서는 /#curriculum 이 서버에 전달되지 않아 검색엔진이
   개별 페이지로 수집할 수 없었다. 그렇다고 앱을 그냥 경로 방식 SPA 로
   바꾸면 이번엔 AI 크롤러(GPTBot·ClaudeBot·PerplexityBot)가 자바스크립트를
   실행하지 않기 때문에 빈 페이지를 보게 되어 GEO 가 무너진다.

   그래서 같은 URL 에서
     1) 서버가 본문이 들어 있는 HTML 을 먼저 내려주고 (크롤러가 읽는다)
     2) 그 위에서 앱이 부팅해 인터랙티브 화면으로 교체한다 (사람이 쓴다)
   사람과 로봇이 같은 내용을 받으므로 클로킹이 아니다.
================================================================== */

/* 앱 UI 가 지원하는 언어 (번체 포함 - app.js 에 zh-Hant 문구가 들어가 있다) */
export const APP_LANGS = ["ko", "en", "ja", "zh", "zh-Hant"];

/* 앱이 가진 전체 라우트. SEO 콘텐츠가 없는 화면(/my, /checkout 등)도
   새로고침·직접접속에서 404 가 나지 않도록 앱 셸을 돌려주기 위해 필요하다. */
export const APP_ROUTES = ["home","about","founder","curriculum","courses","workshop","master",
  "stories","global","learn","store","why","lecture","prep","books","ebooks","guide","checkout",
  "bank","apply","support","members","my","login","signup","admin"];

/* index.html 의 <!--SEO:START--> ~ <!--SEO:END--> 구간을 대체할 헤드 태그 */
export function seoHead(lang, route) {
  const entry = CONTENT[route];
  const c = entry[lang] || entry.en;
  const url = ORIGIN + pathFor(lang, route);
  const hero = HERO[route];
  const heroSrc = hero ? ORIGIN + hero.src : OG_IMG;
  const heroAlt = hero ? (hero.alt[lang] || hero.alt.en) : SITE_NAME[lang];
  const alts = LANGS.flatMap(l =>
    HREFLANG[l].map(code => `<link rel="alternate" hreflang="${code}" href="${ORIGIN + pathFor(l, route)}">`)
  ).join("\n");
  const noindex = THIN_ROUTES.includes(route)
    ? `<meta name="robots" content="noindex,follow">\n` : "";
  return `${noindex}<link rel="canonical" href="${url}">
${alts}
<link rel="alternate" hreflang="x-default" href="${ORIGIN + pathFor("en", route)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(SITE_NAME[lang])}">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
${LANGS.filter(l => l !== lang).map(l => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}">`).join("\n")}
<meta property="og:title" content="${esc(c.title)}">
<meta property="og:description" content="${esc(c.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${heroSrc}">
<meta property="og:image:alt" content="${esc(heroAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${heroSrc}">
<script type="application/ld+json">${JSON.stringify(jsonLD(lang, route))}</script>`;
}

/* #view 안에 먼저 들어갈 본문. 앱이 부팅하면 같은 자리를 인터랙티브 화면이 대체한다.
   앱의 기존 클래스(.eyebrow/.card/.note)를 그대로 써서 첫 화면이 이질적이지 않게 한다. */
export function ssrBody(lang, route) {
  const entry = CONTENT[route];
  const c = entry[lang] || entry.en;
  const hero = HERO[route];
  const heroAlt = hero ? (hero.alt[lang] || hero.alt.en) : SITE_NAME[lang];
  const blocks = (c.blocks || []).map(b => {
    let out = `<div class="card" style="margin-bottom:10px">`;
    if (b.h) out += `<b>${esc(b.h)}</b>`;
    if (b.p) out += `<p style="font-size:13.5px;color:var(--ink2);margin-top:6px">${esc(b.p)}</p>`;
    if (b.list) out += `<ul style="font-size:13.5px;color:var(--ink2);margin:6px 0 0;padding-left:18px;line-height:1.9">`
      + b.list.map(li => `<li>${esc(li)}</li>`).join("") + `</ul>`;
    return out + `</div>`;
  }).join("");
  /* 과정 선택 비교 블록 - 비교·검증형 검색어(국제 vs 국내, 證照怎麼選,
     国際認定と国内団体を比較)의 착지점이 되는 라우트에만 붙인다. */
  const chooseB = ["curriculum", "courses", "global", "home"].includes(route)
    ? blockHTML(CHOOSE[lang] || CHOOSE.en) : "";
  /* 기관 사실 블록 - 전 페이지 공통. 형용사가 아니라 숫자로 답한다. */
  /* 교육센터 - "어디서 배우나"는 실제 검색 의도의 착지점이고,
     모집 문구는 제휴 스튜디오 리드를 받는 입구다. 장소가 의미 있는 라우트에만 붙인다. */
  const centerB = ["home", "about", "curriculum", "courses", "workshop", "global"].includes(route)
    ? blockHTML(CENTER_BLOCK[lang] || CENTER_BLOCK.en) : "";
  const specsB = blockHTML(SPECS[lang] || SPECS.en);
  const faqItems = (FAQ[route] || {})[lang] || [];
  const faq = faqItems.length
    ? `<div class="eyebrow" style="margin-top:18px">${esc(UI.faq[lang])}</div>`
      + faqItems.map(([q, a]) => `<div class="card" style="margin-bottom:8px"><b>${esc(q)}</b>`
        + `<p style="font-size:13.5px;color:var(--ink2);margin-top:6px">${esc(a)}</p></div>`).join("")
    : "";
  return `<section data-ssr="1">
  <div class="eyebrow">${esc(c.eyebrow)}</div>
  <h1 style="font-size:26px;line-height:1.3;margin:6px 0 10px">${esc(c.h1)}</h1>
  ${c.lead ? `<p style="color:var(--ink2);font-size:14px;margin-bottom:16px">${esc(c.lead)}</p>` : ""}
  ${hero ? `<img src="${hero.src}" alt="${esc(heroAlt)}" style="width:100%;height:auto;border-radius:14px;margin-bottom:14px">` : ""}
  ${blocks}
  ${chooseB}
  ${centerB}
  ${faq}
  ${specsB}
  ${c.note ? `<div class="note">${esc(c.note)}</div>` : ""}
</section>`;
}

const RE_TITLE = /<title>[\s\S]*?<\/title>/;
const RE_DESC = /<meta name="description" content="[^"]*">/;
const RE_VIEW = /<main id="view" class="wrap"><\/main>/;

/* index.html(앱 셸)을 가져와 헤드와 본문만 갈아 끼운다.
   셸을 _seo.js 안에 복제하지 않으므로 앱 디자인이 바뀌어도 자동으로 따라온다. */
export async function respondApp(context, lang, route) {
  const entry = CONTENT[route];
  if (!entry || !APP_LANGS.includes(lang)) return null;
  const c = entry[lang] || entry.en;

  const shellRes = await context.env.ASSETS.fetch(new URL("/index.html", context.request.url));
  if (!shellRes || !shellRes.ok) return null;
  let html = await shellRes.text();

  const i = html.indexOf("<!--SEO:START-->");
  const j = html.indexOf("<!--SEO:END-->");
  if (i === -1 || j === -1) return null;

  html = html.slice(0, i) + seoHead(lang, route) + "\n" + html.slice(j + "<!--SEO:END-->".length);
  html = html.replace('<html lang="ko">', `<html lang="${HTML_LANG[lang]}">`);
  html = html.replace(RE_TITLE, `<title>${esc(c.title)}</title>`);
  html = html.replace(RE_DESC, `<meta name="description" content="${esc(c.desc)}">`);
  html = html.replace(RE_VIEW, `<main id="view" class="wrap">${ssrBody(lang, route)}</main>`);

  return new Response(html, {
    headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "public, max-age=300" },
  });
}

/* SEO 콘텐츠가 없는 앱 전용 경로(/my, /checkout 등)는 앱 셸만 그대로 돌려준다.
   새로고침이나 직접 접속에서 404 가 나지 않게 하기 위한 SPA 폴백이다. */
export async function respondShell(context) {
  const res = await context.env.ASSETS.fetch(new URL("/index.html", context.request.url));
  if (!res || !res.ok) return null;
  let html = await res.text();
  /* /my, /checkout, /lecture/spine 같은 화면은 검색 대상이 아니다.
     셸을 그대로 주면 홈과 같은 canonical 을 가진 중복 페이지가 되므로 색인에서 제외한다. */
  const i = html.indexOf("<!--SEO:START-->");
  const j = html.indexOf("<!--SEO:END-->");
  if (i !== -1 && j !== -1) {
    html = html.slice(0, i)
      + '<meta name="robots" content="noindex,follow">\n'
      + html.slice(j + "<!--SEO:END-->".length);
  }
  return new Response(html, {
    headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "public, max-age=60" },
  });
}
