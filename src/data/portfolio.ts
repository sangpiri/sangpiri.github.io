export const profile = {
  name: "이상혁",
  nameEn: "Sanghyeok Lee",
  tagline: "도메인에 대한 높은 이해를 바탕으로\n비즈니스와 기술을 연결합니다.",
  bio: [
    { label: "학력", value: "한양대학교 영어영문/공공수행(법 특화) 학사 졸업" },
    { label: "경력", value: "한국방송공사(KBS) 방송경영 46기 - 마케팅, 광고기획, 인사기획" },
    { label: "교육 이수", value: "SK네트웍스 Family AI CAMP (960시간) 수료" },
    { label: "자격증", value: "빅데이터분석기사, SQL개발자(SQLD), 투자자산운용사, 공인중개사" },
    { label: "기타", value: "사법시험·세무사·감정평가사 1차 합격" },
    { label: "특화 도메인", value: "법, 회계, 세무, 금융, 부동산, 미디어, 콘텐츠" },
    { label: "소개", value: "성장하는 삶을 위해 직무 전환을 꿈꾸며,\n대량/고난이도 데이터 처리부터 ML 모델링, 벡터DB 구축, RAG 파이프라인 설계, LangGraph 기반 Agent 구현, React + FastAPI 풀스택 개발까지 전체 AI 서비스 개발 사이클을 경험했습니다.\n현재는 시계열 금융 데이터 파이프라인, 백테스팅, 퀀트 모델링 기능을 갖춘 주식 분석 플랫폼을 1인 개발·배포·운영하고 있습니다." },
  ],
  email: "sangpiri1107@gmail.com",
  github: "https://github.com/sangpiri",
  linkedin: "",
  profileImage: "/profile.jpg",
};

export interface Skill {
  name: string;
  category: "language" | "data" | "ai_ml" | "ai_finetune" | "ai_serving" | "ai_llm" | "frontend" | "backend" | "database" | "devops";
}

export const skills: Skill[] = [
  // Language
  { name: "Python", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  // Data Analysis
  { name: "pandas", category: "data" },
  { name: "NumPy", category: "data" },
  { name: "SciPy", category: "data" },
  { name: "statsmodels", category: "data" },
  // AI (ML/DL)
  { name: "scikit-learn", category: "ai_ml" },
  { name: "PyTorch", category: "ai_ml" },
  // AI (Fine-tuning)
  { name: "Hugging Face Transformers", category: "ai_finetune" },
  { name: "PEFT", category: "ai_finetune" },
  { name: "TRL", category: "ai_finetune" },
  // AI (Inference & Serving)
  { name: "vLLM", category: "ai_serving" },
  { name: "SGLang", category: "ai_serving" },
  // AI (LLM/RAG/Agent)
  { name: "LangChain", category: "ai_llm" },
  { name: "LangGraph", category: "ai_llm" },
  { name: "LlamaIndex", category: "ai_llm" },
  { name: "MCP", category: "ai_llm" },
  // FE
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  // BE
  { name: "FastAPI", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "Celery", category: "backend" },
  { name: "RabbitMQ", category: "backend" },
  // Database
  { name: "PostgreSQL", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "TimescaleDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Supabase", category: "database" },
  // DevOps
  { name: "Docker", category: "devops" },
  { name: "Nginx", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "Vercel", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
];

export const skillCategories: Record<Skill["category"], string> = {
  language: "Language",
  data: "Data Analysis",
  ai_ml: "AI (ML/DL)",
  ai_finetune: "AI (Fine-tuning)",
  ai_serving: "AI (Inference & Serving)",
  ai_llm: "AI (LLM/RAG/Agent)",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  devops: "Infra / DevOps",
};

// --- Content block types ---

export interface OverviewRow {
  label: string;
  value: string;
}

export interface ContentText {
  type: "text";
  body: string;
}

export interface ContentTable {
  type: "table";
  headers: string[];
  rows: string[][];
}

export interface ContentList {
  type: "list";
  items: string[];
}

export type ContentBlock = ContentText | ContentTable | ContentList;

export interface ProjectSubSection {
  title: string;
  blocks: ContentBlock[];
}

export interface ProjectSection {
  title: string;
  blocks: ContentBlock[];
  subSections?: ProjectSubSection[];
}

// --- Project interface ---

export interface Project {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  period: string;
  overview: OverviewRow[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  // ── ANTenna ──
  {
    title: "ANTenna - 개미 투자자를 위한 주식 분석 플랫폼",
    slug: "antenna-stock-analysis",
    description: "한국/미국 주식 데이터 수집·분석·시각화 + 백테스팅 + 퀀트 모델링을 제공하는 풀스택 웹 서비스",
    techStack: [
      "React + TypeScript", "Tailwind CSS", "FastAPI", "Celery + RabbitMQ",
      "TimescaleDB", "Redis", "Docker", "Nginx", "Contabo Cloud VPS", "GitHub Actions CI/CD",
    ],
    liveUrl: "https://antenna-stock.duckdns.org/",
    githubUrl: "https://github.com/sangpiri/ANTenna",
    period: "2025.11. – 2026.03.",
    overview: [
      { label: "소개", value: "실전 투자 5년차의 경험에서 출발한 개인 풀스택 프로젝트. 한국/미국 주식의 시세, 재무제표, 실적 서프라이즈, 시장 지표 등 2,300만 건 이상의 데이터를 수집·분석하고, 규칙 기반 백테스팅과 ML/DL 퀀트 모델링까지 제공" },
      { label: "유형", value: "개인 프로젝트" },
      { label: "맡은 역할", value: "기획, 설계, 개발, 배포, 운영 전 과정 1인 담당" },
    ],
    sections: [
      {
        title: "배경 및 문제 정의",
        blocks: [
          {
            type: "text",
            body: "기존 주식 HTS/MTS는 과도한 기능으로 인한 혼란, 한국/미국 시장 분리, 데이터 기반 의사결정 도구 부재 등의 한계가 있었습니다.",
          },
          {
            type: "list",
            items: [
              "기존 서비스의 과도한 기능 → 핵심 기능에 집중한 직관적 UI 설계",
              "한국/미국 주식을 하나의 플랫폼에서 통합 분석",
              "분기별 핵심 실적·실적 서프라이즈·시장 지표 등 정량 데이터 기반 의사결정 지원",
              "규칙 기반 백테스팅으로 투자 전략 검증 환경 제공",
            ],
          },
        ],
      },
      {
        title: "핵심 기술 접근",
        blocks: [],
        subSections: [
          {
            title: "데이터 파이프라인 & 시계열 DB",
            blocks: [
              {
                type: "text",
                body: "한국/미국 9,400+ 종목의 2011년~현재 OHLCV 일봉 2,240만 건+(2026.3. 기준)을 TimescaleDB에 저장하고, 크론잡으로 매일 자동 수집·갱신하는 파이프라인을 구축했습니다.",
              },
              {
                type: "list",
                items: [
                  "TimescaleDB 하이퍼테이블 + 자동 압축으로 2,240만 건+(2026.3. 기준) 시계열 데이터 최적화",
                  "연속 집계(Continuous Aggregate)로 주봉/월봉 실시간 생성 — 별도 저장 없이 일봉에서 자동 집계",
                  "EDGAR(미국) / DART(한국) API로 재무제표 33만 건+ 수집",
                  "외부 API로 실적 서프라이즈(예상 vs 실제 실적) 22만 건+ 수집",
                  "주가지수, 금리, GDP, 실업률, 원자재, 환율 등 23개 시장 지표 수집·시각화",
                  "Celery + RabbitMQ 비동기 워커로 백테스팅 작업 비동기 처리",
                ],
              },
            ],
          },
          {
            title: "차트 & 종목 분석 UI/UX",
            blocks: [
              {
                type: "text",
                body: "투자자가 필요한 정보를 한 화면에서 빠르게 파악할 수 있도록 직관적인 분석 UI를 설계했습니다.",
              },
              {
                type: "list",
                items: [
                  "캔들스틱 차트 + 이동평균선(MA) + 거래대금 차트를 하나의 뷰에 통합",
                  "일봉/주봉/월봉 전환 — TimescaleDB 연속 집계 활용으로 즉시 렌더링",
                  "기업 개요(섹터, 사업 내용 등) + 재무제표(손익계산서, 재무상태표, 현금흐름표) + 최근 실적 및 실적 서프라이즈를 종목 상세 페이지에 한눈에 배치",
                  "거래대금/상승률 상위 종목, 빈출 종목, 눌림목, 연속 상승, 52주 신고가, 갭 상승, 주가 변동 분석 등 다양한 스크리닝 뷰 제공",
                ],
              },
            ],
          },
          {
            title: "풀스택 아키텍처 & 배포",
            blocks: [
              {
                type: "list",
                items: [
                  "FastAPI + React/TypeScript SPA 구조, JWT 인증 + 역할 기반 권한 관리",
                  "Docker Compose로 6개 서비스(backend, db, nginx, celery, rabbitmq, redis) 오케스트레이션",
                  "Nginx 리버스 프록시 + Let's Encrypt SSL 자동 갱신",
                  "GitHub Actions CI/CD → Contabo VPS 자동 배포",
                ],
              },
            ],
          },
          {
            title: "통계 + AI 퀀트 모델링",
            blocks: [
              {
                type: "text",
                body: "단순 규칙 기반 백테스팅을 넘어, 5개 ML/DL/통계 모델을 앙상블하여 미국 주식 매수/매도 시그널을 생성하는 퀀트 모델링을 설계·학습·배포했습니다.",
              },
              {
                type: "list",
                items: [
                  "XGBoost(3일 후 방향) + TCN(1일 후 패턴) + SARIMAX(주간 추세) 앙상블 예측",
                  "GJR-GARCH 변동성 예측 + Half Kelly 포지션 사이징으로 리스크 관리",
                  "Regime 모델(K-Means × MSM)로 9가지 시장 국면 감지 → 국면별 앙상블 가중치 자동 결정",
                  "109개 피처 엔지니어링 (기술적 지표, 모멘텀, 밸류에이션, 재무 비율, 매크로 등 9계층)",
                  "Walk-Forward 검증(46윈도우)으로 미래 데이터 누출 방지",
                  "3개월 Out-of-Sample 백테스트: 수익률 +32.4%, 승률 56.8%, Sharpe 2.15, MDD -18.3%",
                  "RunPod GPU로 학습 → Contabo VPS CPU로 매일 자동 추론",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "주요 성과",
        blocks: [
          {
            type: "list",
            items: [
              "한국 2,650+ / 미국 6,790+ 종목, 일봉 2,240만 건+ 통합 분석 플랫폼 구축 (2026.3. 기준)",
              "재무제표 33만 건+, 실적 서프라이즈 22만 건+ 데이터 수집·적재",
              "TimescaleDB 하이퍼테이블 + 연속 집계로 대규모 시계열 조회 성능 최적화",
              "5개 모델 앙상블 퀀트 시그널 시스템 설계·학습·배포 완료 (3개월 OOS: Sharpe 2.15)",
              "Celery 비동기 백테스팅으로 사용자 대기 시간 제거",
              "Docker + GitHub Actions로 1인 운영 가능한 CI/CD 파이프라인 구축",
            ],
          },
        ],
      },
    ],
  },

  // ── 똑소리 ──
  {
    title: "똑소리 - 소비자 분쟁 AI 상담 챗봇",
    slug: "ddoksori-legal-chatbot",
    description: "소비자 분쟁 AI 상담 챗봇 — RAG + Multi-Agent System 기반",
    techStack: [
      "React + TypeScript", "FastAPI", "LangGraph",
      "PostgreSQL + pgvector", "Redis", "Docker", "AWS (EC2/RDS)", "GitHub Actions CI/CD",
    ],
    imageUrl: "/projects/project1.png",
    githubUrl: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN19-FINAL-5Team",
    period: "2025.12. – 2026.02.",
    overview: [
      { label: "소개", value: "법률, 분쟁해결기준, 한국소비자원 조정사례 등 공공데이터를 활용하여, 소비자가 겪고 있는 분쟁에 대해 적용될 수 있는 근거 법률/해결기준과 유사 조정사례를 대화형으로 제공하는 AI 서비스" },
      { label: "유형", value: "팀 프로젝트" },
      { label: "맡은 역할", value: "전체 기획, 법률 및 사례 데이터 수집/파싱/청킹/임베딩, AWS RDS 구축, React 기반 프론트엔드 개발, FastAPI 기반 RESTful API 서버 구현" },
    ],
    sections: [
      {
        title: "배경 및 문제 정의",
        blocks: [
          {
            type: "text",
            body: "소비자 분쟁 시 참조해야 할 법률·시행령·분쟁해결기준·조정사례가 방대하여 일반인이 스스로 권리를 파악하기 어렵습니다. 이를 RAG + MAS 챗봇으로 해소하고자 했습니다.",
          },
          {
            type: "list",
            items: [
              "소비자기본법, 전자상거래법 등 다수의 법률과 하위 법령이 얽혀 있음",
              "한국소비자원 분쟁조정사례까지 교차 검색해야 실질적 도움이 됨",
              "단순 검색이 아닌, 질의 분석 → 선택적 병렬 검색 → 답변 생성 → 법률 검증의 다단계 파이프라인을 설계",
            ],
          },
        ],
      },
      {
        title: "핵심 기술 접근",
        blocks: [],
        subSections: [
          {
            title: "Hub-Spoke MAS 아키텍처",
            blocks: [
              {
                type: "text",
                body: "법률 도메인에서는 쿼리 의도 파악, 선택적 검색, 법적 정확성 검증이 필수적이므로 gpt-4o 기반 Supervisor가 전문 에이전트를 조율하는 Hub-Spoke 패턴을 채택했습니다.",
              },
              {
                type: "list",
                items: [
                  "QueryAnalyst: 의도 분류, 키워드 추출, 쿼리 확장",
                  "Retrieval Team (Law/Criteria/Case): 쿼리 유형에 따라 선택적 병렬 실행 (Fan-out/Fan-in)",
                  "AnswerDrafter: 온보딩 컨텍스트를 반영한 구조화된 답변 생성",
                  "LegalReviewer: 환각 검증 + 금지 표현 검사 + 면책 문구 자동 포함",
                ],
              },
            ],
          },
          {
            title: "데이터 파이프라인 & DB 설계",
            blocks: [
              {
                type: "text",
                body: "문서 유형마다 최적의 파싱 도구를 하이브리드로 활용했습니다.",
              },
              {
                type: "list",
                items: [
                  "PyMuPDF → 구조가 일정한 문서",
                  "pdfplumber → 표가 중요한 문서",
                  "Gemini 2.5 Flash API → 복잡한 레이아웃, 비정형 구조의 문서",
                ],
              },
              {
                type: "text",
                body: "청킹 전략도 데이터 특성에 맞게 이원화했습니다.",
              },
              {
                type: "list",
                items: [
                  "법률 → 조/항/호 구조 반영 구조적 청킹",
                  "조정사례 → 당사자주장-위원회 판단-근거 흐름을 보존하는 계층적 청킹",
                ],
              },
              {
                type: "text",
                body: "PostgreSQL + pgvector에서 데이터 접근 패턴을 분석해 세 가지 인덱스를 배치했습니다.",
              },
              {
                type: "list",
                items: [
                  "B-tree → 정확한 조건 검색 (법률명, 조정사례 출간연도 등)",
                  "GIN → 키워드 검색, 전문(Full-text) 검색 가속화",
                  "HNSW → 벡터 유사도 검색",
                ],
              },
              {
                type: "text",
                body: "결과: DB 인덱싱 최적화로 응답 Latency 40초 → 8초 (약 80% 단축)",
              },
            ],
          },
        ],
      },
    ],
  },

  // ── ZipFit ──
  {
    title: "ZipFit - 공공임대주택 AI 상담 챗봇",
    slug: "zipfit-housing-chatbot",
    description: "공공임대주택 정보 RAG 챗봇 — LangGraph 기반 반복 개선",
    techStack: [
      "Django", "LangGraph", "LangChain", "PostgreSQL + pgvector", "Docker", "AWS",
    ],
    imageUrl: "/projects/project2.png",
    githubUrl: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN19-4th-4Team",
    period: "2025.11. – 2025.12.",
    overview: [
      { label: "소개", value: "LLM과 RAG를 활용하여 LH·SH·GH 등 각 공공기관 사이트에 흩어진 공공주택 공고를 분석하고, 사용자 상세 조건에 따라 맞춤형으로 통합 검색 및 상담할 수 있는 AI 챗봇 서비스" },
      { label: "유형", value: "팀 프로젝트" },
      { label: "맡은 역할", value: "데이터 수집/크롤링, RAG 파이프라인 구축, 프론트엔드 개발, 프롬프트 최적화" },
    ],
    sections: [
      {
        title: "배경 및 문제 정의",
        blocks: [
          {
            type: "list",
            items: [
              "LH·SH·GH 등 공공기관마다 별도 청약 사이트 → 여러 사이트를 직접 방문해야 함",
              "수십 페이지 PDF 공고문에 전문 용어(선계약후검증, 묵시적갱신 등)가 가득",
              "소득/자산/거주 자격 요건이 공고 유형마다 달라 본인 자격 판단이 어려움",
            ],
          },
          {
            type: "text",
            body: "국토교통부의 통합시스템 '하나로' 가동(2027년 예정) 전에, AI 기반으로 이 문제를 선제적으로 해결하는 프로젝트입니다.",
          },
        ],
      },
      {
        title: "핵심 기술 접근",
        blocks: [
          {
            type: "text",
            body: "기존 프로젝트에서 확인한 한계점들을 체계적으로 개선했습니다.",
          },
        ],
        subSections: [
          {
            title: "PDF 파싱 개선",
            blocks: [
              {
                type: "text",
                body: "**문제** PyMuPDF4 단일 라이브러리만으로는 복잡한 표(다중 헤더, 병합 셀)가 정확히 추출되지 않음",
              },
              {
                type: "text",
                body: "**해결** LlamaParse + Camelot 하이브리드 파싱 도입",
              },
              {
                type: "list",
                items: [
                  "Camelot 정확도 70% 미만 테이블 자동 필터링 + 다중 헤더 행 자동 병합",
                  "TablePreprocessor로 한글 셀 내 줄바꿈/공백 정규화 (\"공급\\n형별\" → \"공급형별\")",
                ],
              },
            ],
          },
          {
            title: "청킹 전략 개선",
            blocks: [
              {
                type: "text",
                body: "**문제** 고정 크기 분할로 테이블 맥락이 유실됨",
              },
              {
                type: "text",
                body: "**해결** 요소 타입별(text/table/heading) 분리 청킹으로 전환",
              },
              {
                type: "list",
                items: [
                  "테이블 → 헤더 유지하며 행 단위 분할",
                  "이전 요소에서 제목/단지명 자동 추출 (컨텍스트 보존)",
                  "한국어 최적화 토큰 추정 (단어 수 + 한글 문자 수/2)",
                ],
              },
            ],
          },
          {
            title: "챗봇 아키텍처 재설계 (선형 → LangGraph)",
            blocks: [
              {
                type: "text",
                body: "**문제** 선형 파이프라인에서 질문당 LLM 4~5회 호출 → 응답 20초 이상, 다양한 의도 미처리",
              },
              {
                type: "text",
                body: "**해결** LangGraph StateGraph 기반 재설계",
              },
              {
                type: "list",
                items: [
                  "의도 분류 1회로 search / select / detail / compare / chat 5가지 분기 처리",
                  "GraphState에 prev_anncs, selected_annc, search_history 구조화 → 복합 대화 흐름 지원",
                  "BM25 + 벡터 검색 하이브리드 → RRF 통합 → Reranking으로 검색 정확도 개선",
                ],
              },
              {
                type: "text",
                body: "**결과** 응답 시간 20초 → 3~5초 (85% 단축), LLM 호출 비용 40~50% 절감",
              },
            ],
          },
        ],
      },
      {
        title: "기존 대비 개선 사항",
        blocks: [
          {
            type: "table",
            headers: ["항목", "Before", "After", "개선 효과"],
            rows: [
              ["PDF 파싱", "PyMuPDF 단일", "LlamaParse + Camelot", "테이블 정확도 ↑"],
              ["청킹", "고정 크기 분할", "요소 타입별 + 한글 최적화", "검색 정확도 ↑"],
              ["챗봇 구조", "선형 파이프라인", "LangGraph StateGraph", "복합 대화 흐름 지원"],
              ["의도 분류", "2가지 분기", "5가지 의도 분류", "UX 대폭 개선"],
              ["LLM 호출", "질문당 4~5회", "질문당 2~3회", "비용 40~50% 절감"],
              ["응답 시간", "20초 이상", "3~5초", "85% 단축"],
              ["상태 관리", "없음 (텍스트만 저장)", "GraphState 구조화", "공고 선택/비교 가능"],
            ],
          },
        ],
      },
    ],
  },

  // ── 게임 유저 이탈 예측 ──
  {
    title: "게임 유저 조기 탈락 예측 ML/DL 모델링",
    slug: "pubg-churn-prediction",
    description: "7,000만행에 해당하는 방대한 데이터를 분석하여, 배틀그라운드 게임 유저의 조기 이탈 확률을 예측하는 프로젝트",
    techStack: [
      "Streamlit", "Pandas", "Polars", "Matplotlib", "Seaborn",
      "Scikit-learn", "XGBoost", "LightGBM", "PyTorch(MLP)", "GCP",
    ],
    imageUrl: "/projects/project3.png",
    githubUrl: "https://github.com/SKNETWORKS-FAMILY-AICAMP/SKN19-2nd-4Team",
    period: "2025.10. – 2025.10.",
    overview: [
      { label: "소개", value: "7,000만행에 해당하는 방대한 데이터를 분석하여, 배틀그라운드 게임에서 유저의 조기 탈락 확률을 예측하여 데이터 기반 전략을 제공하는 ML/DL 모델링 프로젝트" },
      { label: "유형", value: "팀 프로젝트" },
      { label: "맡은 역할", value: "1차 데이터 정제, 2차 모델 학습 및 하이퍼파라미터 튜닝, Streamlit 페이지 개발" },
    ],
    sections: [
      {
        title: "배경 및 문제 정의",
        blocks: [
          {
            type: "text",
            body: "배틀그라운드 게임에서 초보 유저의 조기 탈락은 게임 이탈의 주요 원인이나, 기존 전적 검색은 단순 통계에 그칩니다. 유저의 플레이 스탯 + 위치 데이터로 착륙 지점별 조기 탈락 확률을 예측하여 데이터 기반 전략을 제공하고자 했습니다.",
          },
        ],
      },
      {
        title: "핵심 기술 접근",
        blocks: [
          {
            type: "text",
            body: "원본 데이터에 착륙 위치 컬럼이 없어, \"데이터가 없으면 직접 생성한다\"는 접근으로 2단계 연결 모델링을 설계했습니다.",
          },
        ],
        subSections: [
          {
            title: "1단계: 착륙 클러스터 예측 모델",
            blocks: [
              {
                type: "text",
                body: "7,000만 행, Colab에서 RAM 부족으로 세션 다운 → GCP 환경(최대 70GB RAM) 전환 + Polars 도입 + gc 모듈로 메모리 즉시 해제",
              },
              {
                type: "text",
                body: "클러스터 수 증가 시 RAM 급증 → GCP 환경에서 2~100개 범위 AIC/BIC 탐색 → 39개 최적 클러스터 도출",
              },
              {
                type: "list",
                items: [
                  "2분 30초 이내 사망 유저 좌표 → 지도 데이터 포인트로 변환",
                  "GMM으로 39개 착륙 존 클러스터링 (AIC/BIC 기준 최적 수 탐색)",
                  "초기 위치 특정 플레이어 킬 좌표 → 클러스터 예측 모델 학습",
                  "XGBoost 1차 모델 F1 0.917 → 나머지 유저 착륙 포인트 추정 데이터 생성",
                ],
              },
            ],
          },
          {
            title: "2단계: 조기 이탈 예측 모델",
            blocks: [
              {
                type: "text",
                body: "클래스 불균형으로 Accuracy는 높지만 F1은 낮음 → 하이퍼파라미터 튜닝 + 모델 구조 반복 실험 → XGBoost F1 0.60 최종 채택",
              },
              {
                type: "list",
                items: [
                  "72만 매치에서 40판 이상 플레이한 30만 명 추출 → 평균 스탯 생성",
                  "추정 착륙 위치 + 플레이어 스탯 결합 → 조기 이탈 예측",
                  "XGBoost F1 0.60으로 최종 채택 (클래스 불균형 고려, F1 기준)",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "모델링 결과",
        blocks: [
          {
            type: "table",
            headers: ["단계", "Model", "Accuracy", "Precision", "Recall", "F1-Score"],
            rows: [
              ["1차", "XGBoost ✓", "0.920", "0.915", "0.920", "0.917"],
              ["1차", "MLP", "0.900", "0.910", "0.900", "0.900"],
              ["2차", "XGBoost ✓", "0.670", "0.610", "0.600", "0.600"],
              ["2차", "LightGBM", "0.630", "0.640", "0.510", "0.520"],
              ["2차", "MLP", "0.600", "-", "-", "0.545"],
            ],
          },
        ],
      },
    ],
  },
];

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];
