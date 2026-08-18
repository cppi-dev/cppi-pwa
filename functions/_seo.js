/* ============================================================
   CPPI - 검색엔진 / AI 크롤러(GEO)용 다국어 정적 페이지 콘텐츠
   한국어(기본) · English · 日本語 · 中文
   앱(해시 라우팅)과 별개로, 언어별 실제 URL에서 즉시 읽히는 본문을 제공한다.
     /about        (한국어)
     /en/about     (English)
     /ja/about     (日本語)
     /zh/about     (中文)
   ============================================================ */

export const ORIGIN = "https://cppipilates.com";
export const OG_IMG = ORIGIN + "/hero-poster.jpg";
export const LOGO = ORIGIN + "/logo.png";

export const LANGS = ["ko", "en", "ja", "zh"];
export const HTML_LANG = { ko: "ko", en: "en", ja: "ja", zh: "zh-Hans" };

/* 지역별 문의 채널
   - 일본: LINE 공식 계정 (아래 LINE_URL 에 계정 주소를 넣으면 자동 노출)
   - 그 외 해외: 이메일
   확인되지 않은 주소를 임의로 채우지 않는다. 비어 있으면 이메일만 노출된다. */
export const CONTACT = {
  tel: "+82-10-4894-4292",
  email: "allmovements@naver.com",
  instagram: "https://www.instagram.com/cppi.pilates",
  youtube: "https://www.youtube.com/@cppi.pilates",
  LINE_URL: "", // 예: "https://line.me/R/ti/p/@cppi"  ← 계정 주소 확인 후 입력
};

/* 창립자 - 검색·AI가 인물과 분야를 연결하도록 표기를 통일한다 */
export const FOUNDER = {
  ko: "박은주 (Eun-Ju Park)",
  en: "Eun-Ju Park",
  ja: "パク・ウンジュ (Eun-Ju Park)",
  zh: "朴恩珠 (Eun-Ju Park)",
};

export const SITE_NAME = {
  ko: "CPPI 한국 필라테스 교육협회",
  en: "CPPI Korea Pilates Education Association",
  ja: "CPPI 韓国ピラティス教育協会",
  zh: "CPPI 韩国普拉提教育协会",
};

export const UI = {
  consult: { ko: "무료 상담 신청", en: "Request a consultation", ja: "無料相談を申し込む", zh: "申请免费咨询" },
  emailUs: { ko: "이메일 문의", en: "Email us", ja: "メールで問い合わせ", zh: "邮件咨询" },
  lineUs: { ko: "LINE 문의", en: "Contact via LINE", ja: "LINEで問い合わせ", zh: "LINE咨询" },
  inApp: { ko: "앱에서 보기", en: "Open in the app", ja: "アプリで見る", zh: "在应用中查看" },
};

export const NAV = {
  ko: [["협회 소개", "about"], ["파운더", "founder"], ["커리큘럼", "curriculum"], ["교육안내", "courses"], ["워크숍", "workshop"], ["마스터", "master"], ["후기", "stories"], ["글로벌", "global"], ["온라인 강의", "learn"], ["스토어", "store"]],
  en: [["About", "about"], ["Founder", "founder"], ["Curriculum", "curriculum"], ["Certification", "courses"], ["Workshops", "workshop"], ["Masters", "master"], ["Stories", "stories"], ["Global", "global"], ["Lectures", "learn"], ["Store", "store"]],
  ja: [["協会紹介", "about"], ["創立者", "founder"], ["カリキュラム", "curriculum"], ["教育案内", "courses"], ["ワークショップ", "workshop"], ["マスター", "master"], ["修了生の声", "stories"], ["グローバル", "global"], ["オンライン講義", "learn"], ["ストア", "store"]],
  zh: [["协会介绍", "about"], ["创始人", "founder"], ["课程体系", "curriculum"], ["教育指南", "courses"], ["工作坊", "workshop"], ["大师导师", "master"], ["学员评价", "stories"], ["全球运营", "global"], ["在线课程", "learn"], ["商店", "store"]],
};

/* ------------------------------------------------------------------
   페이지 콘텐츠 - 사실 관계는 협회 공개 자료 기준이며 언어별로 동일하다.
------------------------------------------------------------------ */
export const CONTENT = {
  about: {
    ko: {
      title: "협회 소개 | CPPI 한국 필라테스 교육협회",
      desc: "감각이 아니라 근거로 가르치는 CPPI 한국 필라테스 교육협회 - EST.2016, 한국·캐나다·일본 운영, 분당서울대병원 임상 기반 커리큘럼.",
      eyebrow: "ABOUT CPPI", h1: "감각이 아니라, 근거로 가르칩니다",
      lead: "한국필라테스교육협회 (CPPI Korea) · Certified Professional Pilates Instructor",
      blocks: [
        { h: "협회 개요", p: "EST. 2016 · 2년 집중개발로 교과정 완성 · 한국-캐나다-일본 운영. 8개 정규 과정, 총 1,300여 페이지의 출판교재(9권+부교재)로 교육합니다." },
        { h: "동작 매뉴얼", p: "매트 53 · 리포머 79 · 캐딜락 62 · 체어 28 · 래더바렐 27 · 아크바렐 29 · 스파인코렉터 39 동작 + 배리에이션 · 모디피케이션 · 소도구 티칭." },
        { h: "타 단체와의 차별성", list: ["의료 임상 기반 - 분당서울대병원 · 보훈복지공단 척추&관절센터 임상경험", "대학 검증 - 나사렛대학교 스포츠재활학부 강단 경력의 창립자 직강", "실무형 교육 - 배리에이션·모디피케이션, 재활 시퀀스 교육", "국제 운영 - 한국 · 캐나다 · 일본, 국제 자격 발급"] },
      ],
      note: "인증 단체 - 한국필라테스교육협회 (CPPI Korea) · 고유번호 201-82-74381 (비영리)",
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
    schema: { "@type": "AboutPage" },
  },

  founder: {
    ko: {
      title: "박은주 교수 (Eun-Ju Park) - 파운더 | CPPI 한국 필라테스 교육협회",
      desc: "분당서울대병원 척추·관절센터 임상 경험과 나사렛대 강단 경력을 지닌 CPPI 창립자 박은주(Eun-Ju Park) 교수의 전체 프로필.",
      eyebrow: "FOUNDER", h1: "박은주 (Eun-Ju Park) 교수",
      lead: "의료·대학이 검증한 프로필을 요약 없이 공개합니다.",
      blocks: [
        { h: "주요 경력", list: ["(현) 한국 필라테스 교육협회장", "(현) 경기도 배구협회 이사", "(현) 리커버링 재활 필라테스 마스터", "(현) 대한 비만학회 정회원", "(전) 나사렛대학교 스포츠재활학과 겸임교수", "(전) 서경대학교 예술교육원 필라테스과정 원장", "(전) 분당 서울대병원 마취통증의학과", "(전) 한국 보훈복지공단 척추&관절센터"] },
        { h: "주요 연수 - 서울대병원", list: ["중환자 전문간호연수", "정형외과 수술후 재활과정", "당뇨 · 고혈압 · 골다공증 관리", "노인간호 및 재활과정"] },
        { h: "주요 자격", list: ["STOTT PILATES : IMP / IR / ICCB / AMP / AR / RMR1", "ISP (Injury Special Population) 2009~2011", "PMA : Certification Education 2012", "BBU Creating Length & Strength / Scoliosis Spiral", "STOTT Pre-Natal Pilates On the Reformer", "POWER PLATE Master Trainer 2022", "RECOVERING Master Trainer 2022"] },
        { h: "활동", p: "IDEA 컨벤션 · CKLZ 피트니스 컨벤션 초청 프레젠터. 2009년부터 강사 교육에 매진." },
      ],
    },
    en: {
      title: "Prof. Eun-Ju Park - Founder | CPPI Korea Pilates Education Association",
      desc: "Full profile of Eun-Ju Park, founder of CPPI Korea: clinical experience at Seoul National University Hospital Bundang Spine & Joint Center and faculty experience at Korea Nazarene University.",
      eyebrow: "FOUNDER", h1: "Prof. Eun-Ju Park",
      lead: "A clinically and academically verified profile, published in full.",
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
      lead: "医療・大学が検証したプロフィールを省略せず公開します。",
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
      lead: "医疗与大学验证的履历，完整公开。",
      blocks: [
        { h: "主要经历", list: ["(现) 韩国普拉提教育协会 会长", "(现) 京畿道排球协会 理事", "(现) Recovering 康复普拉提 大师", "(现) 大韩肥胖学会 正会员", "(前) 韩国拿撒勒大学 运动康复学科 兼任教授", "(前) 西京大学 艺术教育院 普拉提课程 院长", "(前) 盆唐首尔大学医院 麻醉疼痛医学科", "(前) 韩国报勋福祉公团 脊柱与关节中心"] },
        { h: "主要研修 - 首尔大学医院", list: ["重症监护专科护理研修", "骨科术后康复课程", "糖尿病·高血压·骨质疏松管理", "老年护理与康复课程"] },
        { h: "主要资格", list: ["STOTT PILATES : IMP / IR / ICCB / AMP / AR / RMR1", "ISP (Injury Special Population) 2009~2011", "PMA : Certification Education 2012", "BBU Creating Length & Strength / Scoliosis Spiral", "STOTT Pre-Natal Pilates On the Reformer", "POWER PLATE Master Trainer 2022", "RECOVERING Master Trainer 2022"] },
        { h: "活动", p: "IDEA大会、CKLZ健身大会特邀讲师。自2009年起专注于教练培训。" },
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
      blocks: [{ h: "8대 커리큘럼", list: ["1. 필라테스 기능 해부학 - 10시간", "2. 베이직 프린서플 10가지 / 5가지 움직임 원칙 - 10시간", "3. 체형 분석 및 움직임 평가 - 5시간", "4. 필라테스 매트 - 25시간", "5. 리포머 - 20~25시간", "6. 캐딜락 - 20~25시간", "7. 스태빌리티 체어 - 10시간", "8. 래더바렐 및 바렐 시리즈 - 10시간"] }],
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
    schema: { "@type": "Course", name: "CPPI Pilates Instructor Certification" },
  },

  courses: {
    ko: {
      title: "교육 안내 - 필라테스 강사 자격과정 | CPPI 한국 필라테스 교육협회",
      desc: "이론+실기+티칭실습 중심의 CPPI 국제 필라테스 강사 자격과정 안내. 마스터 강사진, 수료 혜택, 모집 정보.",
      eyebrow: "CERTIFICATION", h1: "CPPI 필라테스 교육안내",
      lead: "이론 · 실기 · 티칭 실습을 반복하는 실무 중심 자격과정입니다.",
      blocks: [
        { h: "교육 방식", p: "이론 강의 + 실기 체득 + 교육생 상호 인스트럭팅(티칭 실습) 반복 - 레슨 실무 중심." },
        { h: "수료 혜택 · 국제자격증", p: "국제자격증 발급 · L3 정회원 승급 · 수료강사 명단 등재 · 활동 연계 지원." },
        { h: "모집 · 수강료", p: "기수별 모집 - 일정은 공지 및 상담 시 자세히 안내드립니다." },
        { h: "졸업생 성과", p: "타 아카데미에서 마스터(교육강사)로 활동하는 수료생 다수 배출 - 56기 이상 배출." },
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
    schema: { "@type": "CollectionPage" },
  },
};

export const ROUTES = Object.keys(CONTENT);

export function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

function pathFor(lang, route) { return lang === "ko" ? `/${route}` : `/${lang}/${route}`; }

function blockHTML(b) {
  let out = `<div class="blk">`;
  if (b.h) out += `<h2>${esc(b.h)}</h2>`;
  if (b.p) out += `<p>${esc(b.p)}</p>`;
  if (b.list) out += `<ul>${b.list.map(li => `<li>${esc(li)}</li>`).join("")}</ul>`;
  out += `</div>`;
  return out;
}

export function pageHTML(lang, route) {
  const entry = CONTENT[route];
  const c = entry[lang] || entry.en || entry.ko;
  const url = ORIGIN + pathFor(lang, route);
  const nav = NAV[lang] || NAV.en;
  const navHTML = nav.map(([label, r]) =>
    `<a href="${pathFor(lang, r)}"${r === route ? ' aria-current="page"' : ""}>${esc(label)}</a>`).join("");
  const langHTML = LANGS.map(l =>
    `<a href="${pathFor(l, route)}"${l === lang ? ' aria-current="true"' : ""}>${l.toUpperCase()}</a>`).join("");
  const alts = LANGS.map(l =>
    `<link rel="alternate" hreflang="${l}" href="${ORIGIN + pathFor(l, route)}">`).join("\n");

  const contacts = [`<a class="cta" href="mailto:${CONTACT.email}">${esc(UI.emailUs[lang])}</a>`];
  if (lang === "ja" && CONTACT.LINE_URL) contacts.unshift(`<a class="cta" href="${CONTACT.LINE_URL}">${esc(UI.lineUs[lang])}</a>`);
  contacts.push(`<a class="cta ghost" href="/#apply">${esc(UI.consult[lang])}</a>`);

  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "EducationalOrganization"],
        "@id": ORIGIN + "/#org",
        name: SITE_NAME[lang], alternateName: ["CPPI", "CPPI Korea", "한국필라테스교육협회"],
        url: ORIGIN + "/", logo: LOGO, foundingDate: "2016",
        areaServed: [{ "@type": "Country", name: "South Korea" }, { "@type": "Country", name: "Canada" }, { "@type": "Country", name: "Japan" }],
        founder: { "@id": ORIGIN + "/#founder" },
        email: CONTACT.email, telephone: CONTACT.tel,
        sameAs: [CONTACT.instagram, CONTACT.youtube],
      },
      {
        "@type": "Person", "@id": ORIGIN + "/#founder",
        name: FOUNDER[lang], alternateName: ["Eun-Ju Park", "박은주"],
        jobTitle: lang === "en" ? "Founder, Pilates educator" : UI.consult[lang] && (lang === "ja" ? "創立者・ピラティス教育者" : lang === "zh" ? "创始人·普拉提教育者" : "파운더 · 필라테스 교육자"),
        worksFor: { "@id": ORIGIN + "/#org" },
        knowsAbout: ["Pilates", "Functional anatomy", "Rehabilitation exercise", "Corrective exercise", "Spinal rehabilitation"],
        url: ORIGIN + pathFor(lang, "founder"),
      },
      Object.assign({ "@id": url + "#page", url, name: c.title, description: c.desc, inLanguage: HTML_LANG[lang], isPartOf: { "@id": ORIGIN + "/#org" } }, entry.schema || {}),
    ],
  };

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
<meta property="og:locale" content="${lang === "ko" ? "ko_KR" : lang === "ja" ? "ja_JP" : lang === "zh" ? "zh_CN" : "en_US"}">
<meta property="og:title" content="${esc(c.title)}">
<meta property="og:description" content="${esc(c.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${OG_IMG}">
<meta name="twitter:card" content="summary_large_image">
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
footer{border-top:1px solid var(--line);padding:22px;text-align:center;font-size:12.5px;color:var(--ink2)}
footer a{color:var(--ink2)}
</style>
</head>
<body>
<header><div class="in">
  <a href="/"><img src="/logo_header.png" alt="${esc(SITE_NAME[lang])}"></a>
  <nav>${navHTML}</nav>
  <div class="langbar">${langHTML}</div>
</div></header>
<main>
  <div class="eyebrow">${esc(c.eyebrow)}</div>
  <h1>${esc(c.h1)}</h1>
  ${c.lead ? `<p class="lead">${esc(c.lead)}</p>` : ""}
  ${(c.blocks || []).map(blockHTML).join("")}
  ${c.note ? `<div class="note">${esc(c.note)}</div>` : ""}
  <div class="ctabar">${contacts.join("")}</div>
</main>
<footer>${esc(SITE_NAME[lang])} · ${CONTACT.tel} · <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> · <a href="/">cppipilates.com</a></footer>
</body>
</html>`;
}

export function respond(lang, route) {
  if (!CONTENT[route]) return null;
  return new Response(pageHTML(lang, route), {
    headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "public, max-age=300" },
  });
}
