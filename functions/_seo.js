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
  ko: ["ko-KR"],
  en: ["en", "en-SG"],
  ja: ["ja-JP"],
  zh: ["zh-Hans", "zh-Hans-CN", "zh-Hans-SG"],
  "zh-Hant": ["zh-Hant", "zh-Hant-TW", "zh-Hant-HK"],
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
      title: "CPPI 韓国ピラティス教育協会 | 国際ピラティス指導者資格課程",
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
      title: "正規課程エッセンシャルカリキュラム | CPPI ピラティス指導者資格",
      desc: "機能解剖学と医学的根拠に基づいて設計されたCPPI正規課程の8大カリキュラム。マット・リフォーマー・キャデラック・チェア・バレルシリーズを詳しくご案内します。",
      eyebrow: "CURRICULUM", h1: "CPPI エッセンシャルカリキュラム",
      lead: "全課程が機能解剖学と医学的根拠の上に設計されています。",
      blocks: [{ h: "8大カリキュラム", list: ["1. 機能解剖学ピラティス - 10時間", "2. ベーシックプリンシプル 10原則 / 5つの動作原則 - 10時間", "3. 体型分析および動作評価 - 5時間", "4. ピラティス・マット - 25時間", "5. リフォーマー - 20~25時間", "6. キャデラック - 20~25時間", "7. スタビリティチェア - 10時間", "8. ラダーバレルおよびバレルシリーズ - 10時間"] }],
    },
    zh: {
      title: "正规课程核心体系 | CPPI 普拉提教练资格",
      desc: "基于功能解剖学与医学循证设计的CPPI正规课程八大体系 - 垫上、核心床、凯迪拉克、椅、桶系列详细介绍。",
      eyebrow: "CURRICULUM", h1: "CPPI 核心课程体系",
      lead: "所有课程均建立在功能解剖学与医学循证之上。",
      blocks: [{ h: "八大课程", list: ["1. 普拉提功能解剖学 - 10小时", "2. 基本原理10项 / 5大动作原则 - 10小时", "3. 体型分析与动作评估 - 5小时", "4. 垫上普拉提 - 25小时", "5. 核心床 - 20~25小时", "6. 凯迪拉克 - 20~25小时", "7. 稳踏椅 - 10小时", "8. 梯桶及桶系列 - 10小时"] }],
    },
    "zh-Hant": {
      title: "正規課程核心體系 | CPPI 皮拉提斯師資培訓",
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
      title: "ピラティス指導者資格課程 | CPPI 韓国ピラティス教育協会",
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
      title: "専門講師ワークショップ | CPPI 韓国ピラティス教育協会",
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
      title: "オンライン講義 | CPPI ピラティス教育",
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

export const ROUTES = Object.keys(CONTENT);
/* 홈을 제외한 하위 페이지 목록 - 네비게이션·사이트맵에서 사용 */
export const SUB_ROUTES = ROUTES.filter(r => r !== "home");

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
    pageNode.educationalCredentialAwarded = "CPPI Certified Professional Pilates Instructor";
    pageNode.inLanguage = ["ko", "en", "ja"];
    pageNode.hasCourseInstance = {
      "@type": "CourseInstance",
      courseMode: ["Onsite", "Blended"],
      courseWorkload: "PT115H",
      location: [
        { "@type": "Place", name: "CPPI Korea", address: { "@type": "PostalAddress", addressCountry: "KR" } },
        { "@type": "Place", name: "CPPI Vancouver", address: { "@type": "PostalAddress", addressCountry: "CA" } },
        { "@type": "Place", name: "CPPI Tokyo", address: { "@type": "PostalAddress", addressCountry: "JP" } },
      ],
    };
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
  return `<link rel="canonical" href="${url}">
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
  ${faq}
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
