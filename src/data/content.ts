export interface MonographStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  typology: string;
  role: string;
  year: string;
  premise: string;
  order: string;
  atmosphere: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  principles: {
    index: string;
    name: string;
    description: string;
    subtext: string;
  }[];
  notes: string[];
}

export const MONOGRAPH_DATA: MonographStudy = {
  id: "raemian-one-bailey",
  title: "일상의 침묵을 설계하다",
  subtitle: "Raemian One Bailey Community Space",
  client: "Raemian One Bailey Residents & Developer",
  location: "Seoul, Banpo",
  typology: "High-End Residential Community",
  role: "Spatial Philosophy & Experience Design Strategy",
  year: "2023",
  premise:
    "2,990세대가 공존하는 대단지 하이엔드 주거 공간에서 가장 절실한 것은 외형적 화려함이 아니었습니다. 타인의 시선으로부터 자유로우면서도 단절되지 않고, 일상의 소음 속에서도 즉각적인 평온을 되찾을 수 있는 '침묵의 안식처'가 필요했습니다.",
  order:
    "모든 선과 재료에는 엄밀한 이유가 있습니다. 7.2m 구조 모듈을 따라 시선의 각도를 15도씩 어긋나게 배치하여 프라이버시를 지켰으며, 250 Lux 미만의 부드러운 자연 간접광을 천창과 루버를 통해 유입시켰습니다. 또한 공기 중의 발걸음 진동을 흡음하는 다공질 석재와 음향 흡음 오크 패널의 비례를 정밀하게 조율했습니다.",
  atmosphere:
    "입구의 깊은 전실을 지나는 순간 도시의 고주파 소음이 감쇄되고, 발밑의 촉각과 은은한 목재 향이 호흡을 가라앉힙니다. 과시를 위한 공간이 아닌, 머무는 이가 비로소 자신의 생각과 마주할 수 있는 사유의 그릇으로 완성되었습니다.",
  metrics: [
    {
      label: "Acoustic Attenuation",
      value: "0.42s",
      detail: "잔향 시간 제어로 사적인 대화 명료도 및 정적 보장"
    },
    {
      label: "Luminance Transition",
      value: "220 Lux",
      detail: "자연 천창을 통한 망막 자극 최소화 간접 조도"
    },
    {
      label: "Axis Orientation",
      value: "15° Shift",
      detail: "정원 축선 정렬 및 세대 간 시선 간섭 원천 차폐"
    }
  ],
  principles: [
    {
      index: "01",
      name: "감각의 역치 조절 (Sensory Threshold)",
      description: "외부 도시의 분주함에서 개인의 내면으로 전환되는 점진적 완충 전실 설계",
      subtext: "조도와 흡음률을 3단계에 걸쳐 감쇄시켜 신경계를 안정화하는 전이 공간"
    },
    {
      index: "02",
      name: "빛의 궤적과 그림자의 물성 (Light & Shadow Order)",
      description: "시간의 흐름에 따라 변화하는 자연광의 각도를 고려한 벽면 텍스처",
      subtext: "거친 라임스톤의 표면에 부딪히는 사선광이 만들어내는 차분한 시간성"
    },
    {
      index: "03",
      name: "비대칭 시선 설계 (Asymmetric Sightlines)",
      description: "마주침의 긴장 없이 공간 전체의 개방감을 누리는 좌석 및 동선 배치",
      subtext: "공용 라운지에서도 혼자만의 서재에 머무는 듯한 심리적 보호 영역 형성"
    }
  ],
  notes: [
    "공간의 본질은 마감재의 단가가 아닌, 머무는 사람의 신경계가 느끼는 안온함에 있습니다.",
    "소음을 없애는 것이 아니라, 소리가 아름답게 감쇄되는 물성의 비례를 찾아내는 작업이었습니다.",
    "모든 코너의 음각 줄눈(Shadow Gap)은 두 재료가 충돌하지 않고 각자의 호흡을 지키도록 배려한 결과입니다."
  ]
};

export interface DiscourseArticle {
  id: string;
  category: "Flânerie" | "Spatial Critique" | "Nordic Essence";
  categoryKr: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyQuote: string;
}

export const DISCOURSE_ARTICLES: DiscourseArticle[] = [
  {
    id: "silence-and-light",
    category: "Flânerie",
    categoryKr: "산책자의 기록",
    title: "침묵이 공간의 형태가 될 때",
    subtitle: "여백을 채우는 빛에 대하여",
    date: "2024. 11",
    readTime: "5 min read",
    excerpt:
      "비어 있는 공간은 아무것도 없는 무(無)가 아닙니다. 그것은 빛이 머물고 호흡이 드나들 수 있도록 정밀하게 계산된 여백의 질서입니다.",
    keyQuote:
      "빛은 어둠이 있을 때 비로소 형태를 얻고, 공간은 침묵을 품을 때 비로소 사람의 마음에 가닿는다.",
    content: [
      "우리는 매일 수많은 시각적 정보와 자극에 노출되어 살아갑니다. 눈을 뜨는 순간부터 마주하는 스크린, 쉴 새 없이 말을 거는 도시의 광고판, 그리고 과도한 장식으로 스스로를 과시하려는 건축물들 속에서 사람의 감각은 점차 무뎌져 갑니다.",
      "오로라아이디랩이 공간을 구상할 때 가장 먼저 하는 질문은 '무엇을 더 채울 것인가'가 아니라 '무엇을 비워내야 침묵이 들릴 것인가'입니다. 비움은 단순한 결핍이 아닙니다. 비어 있는 공간이야말로 아침의 서늘한 햇살이 벽면을 타고 내려앉는 궤적을 온전히 감상할 수 있는 유일한 무대입니다.",
      "루이스 칸(Louis Kahn)은 빛이 기둥에 닿아 그림자를 만드는 순간 비로소 건축이 탄생한다고 말했습니다. 우리는 벽체와 바닥이 만나는 하이라인, 창을 통해 스며드는 빛의 부드러운 산란, 그리고 공간 속에 남겨진 고요한 여백이야말로 인간이 일상에서 얻을 수 있는 최고의 위로라고 믿습니다.",
      "좋은 디자인은 결코 큰 소리로 주장하지 않습니다. 그저 조용히 뒤로 물러서서, 그 공간에 머무는 사람의 생각과 숨결이 주인공이 되도록 침묵의 형태를 빚어낼 뿐입니다."
    ]
  },
  {
    id: "pedestrian-rhythm",
    category: "Spatial Critique",
    categoryKr: "공간 비평",
    title: "산책자가 머무는 자리",
    subtitle: "보행자의 속도로 도시를 감각하는 법",
    date: "2024. 08",
    readTime: "6 min read",
    excerpt:
      "자동차가 아닌 두 발의 속도로 걸을 때 비로소 드러나는 도시의 틈새. 진정한 럭셔리는 속도를 늦출 수 있는 시공간적 선택권에서 출발합니다.",
    keyQuote:
      "빠르게 지나치는 풍경 속에는 감각이 깃들 수 없다. 멈추어 서서 바라볼 수 있는 모서리 하나가 공간의 품격을 결정한다.",
    content: [
      "현대 도시는 효율과 속도의 논리로 건설되었습니다. 더 빠른 도로, 더 높은 건물, 더 즉각적인 접근성이 도시 계획의 최우선 가치였습니다. 그러나 그러한 도시 구조 속에서 우리는 길을 잃지 않는 대신, 길을 음미하는 감각을 잃어버렸습니다.",
      "보행자의 시선으로 도시를 걷는 '플라뇌르(Flâneur, 산책자)'의 태도는 오로라아이디랩의 공간 설계 철학에 깊은 영감을 줍니다. 외부의 거친 보도블록에서 현관 문턱을 넘어 부드러운 원목 마루에 발을 디디는 그 몇 초의 순간, 인간의 보행 리듬은 극적으로 변화합니다.",
      "우리는 실내 공간의 동선을 계획할 때 직선의 최단 거리를 고집하지 않습니다. 때로는 빛이 비치는 중정을 향해 부드럽게 돌아가도록 유도하고, 때로는 손끝에 닿는 벽면의 질감을 느끼며 호흡을 가다듬을 수 있도록 의도된 '감각의 우회로'를 만듭니다.",
      "공간의 품격은 면적의 넓이가 아니라, 그 안을 거니는 사람에게 주어지는 호흡의 길이에 비례합니다."
    ]
  },
  {
    id: "essence-of-high-end",
    category: "Nordic Essence",
    categoryKr: "북유럽 디자인 단상",
    title: "하이엔드의 본질",
    subtitle: "마감재의 가격이 아닌 감각의 비례에 관하여",
    date: "2024. 04",
    readTime: "5 min read",
    excerpt:
      "화려한 대리석의 패턴이 품격을 보장하지 않습니다. 진정한 고결함은 손이 닿는 모서리의 곡률과 발에 닿는 온도의 균형에 있습니다.",
    keyQuote:
      "이유 없는 장식은 시각적 소음일 뿐이다. 정직한 재료와 완벽한 비례만이 시간의 풍화를 견뎌낸다.",
    content: [
      "최근 많은 공간들이 값비싼 수입 석재와 화려한 금속 마감재를 앞다투어 적용하며 스스로를 '하이엔드'라 칭합니다. 그러나 정작 그 공간에 들어섰을 때 차갑고 메마른 인상을 받게 되는 이유는 무엇일까요?",
      "알바 알토(Alvar Aalto)를 비롯한 북유럽의 거장들은 언제나 사람의 신체가 직접 닿는 부분부터 생각을 시작했습니다. 문손잡이를 잡았을 때 느껴지는 황동의 무게감과 가죽의 온기, 의자에 앉았을 때 무릎 뒤편을 부드럽게 받쳐주는 자작나무의 곡률처럼 말입니다.",
      "진정한 하이엔드는 눈속임용 시각적 화려함이 아닌 '촉각과 청각, 조도의 균형'에서 완성됩니다. 우리는 공간에 쓰이는 모든 소재가 왜 그 자리에 있어야 하는지 논리적인 이유를 묻습니다. 자연에서 온 석재와 나무는 인공 조명이 아닌 자연광 아래에서 본연의 생명력을 발합니다.",
      "시간이 흘러도 가치를 잃지 않는 공간, 세월의 흔적이 낡음이 아닌 기품 있는 태닝으로 축적되는 공간—그것이 오로라아이디랩이 정의하는 보이지 않는 감각의 질서입니다."
    ]
  }
];

export interface PracticePillar {
  id: string;
  number: string;
  titleEn: string;
  titleKr: string;
  lead: string;
  description: string;
  scope: string[];
}

export const PRACTICE_PILLARS: PracticePillar[] = [
  {
    id: "spatial-consulting",
    number: "01",
    titleEn: "Spatial Consulting & Branding",
    titleKr: "공간 컨설팅 및 브랜드 경험 설계",
    lead: "하이엔드 주거, 웰니스, 상업 공간을 위한 철학적 마스터플랜",
    description:
      "단순 도면 작업을 넘어 브랜드가 전하고자 하는 고유한 가치를 공간의 질서로 번역합니다. 머무는 이의 시선 동선, 자연 채광 설계, 음향 제어 및 소재 큐레이션을 종합적으로 자문합니다.",
    scope: [
      "하이엔드 주거 커뮤니티 및 프라이빗 레지던스 기획",
      "웰니스 및 사우나·스파 감각 경험 디렉팅",
      "공간 브랜딩 콘셉트 정의 및 마스터플랜 수립"
    ]
  },
  {
    id: "discourse-lecture",
    number: "02",
    titleEn: "Discourse & Lecture",
    titleKr: "공간 철학 담론 및 특강",
    lead: "주거 문화의 미래와 감각의 질서에 관한 지적 통찰 공유",
    description:
      "공간이 인간의 심리와 행동에 미치는 영향, 웰니스 아키텍처의 미래, 북유럽 공간 디자인의 정수를 주제로 기업, 학술 기관, 문화 재단과 함께 깊이 있는 대화를 나눕니다.",
    scope: [
      "기업 C-Level 대상 하이엔드 공간 트렌드 특강",
      "건축 및 디자인 전문 포럼 기조 강연",
      "주거 문화 및 웰니스 라이프스타일 세미나"
    ]
  },
  {
    id: "writing-curation",
    number: "03",
    titleEn: "Writing & Curation",
    titleKr: "에세이 집필 및 텍스트 큐레이션",
    lead: "공간과 도시를 바라보는 시선의 기록과 서적 출판",
    description:
      "공간을 물리적 구조체가 아닌 문학적 텍스트로 읽어냅니다. 브랜드 스토리북 집필, 전문 매체 정기 칼럼 기고, 전시 서문 및 카탈로그 큐레이션 프로젝트를 수행합니다.",
    scope: [
      "건축·인테리어 모노그래프 및 브랜드 북 집필",
      "디자인 및 라이프스타일 매체 칼럼 연재",
      "공간 전시 기획 및 텍스트 디렉팅"
    ]
  }
];
