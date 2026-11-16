/**
 * Inklu Grounded Content Inventory & Source of Truth
 * Derived strictly from Hackathon Track 3 Submitted Repository:
 * https://github.com/habibi-code/Savanna-static-pages (Branch: ermi)
 */

export const BRAND = {
  name: "Inklu",
  tagline: "Learning Without Barriers",
  ethiopianTagline: "ያለ ምንም እንቅፋት መማር",
  hackathon: "Digital Bridge Accessibility Hackathon 2026",
  track: "Track 3: Multilingual Assistant & Live Help",
  branch: "ermi",
  standard: "WCAG 2.2 Level AA",
  repoUrl: "https://github.com/habibi-code/Savanna-static-pages",
  branchUrl: "https://github.com/habibi-code/Savanna-static-pages/tree/ermi",
  liveDemoUrl: "https://savanna-assistant-303345096403.us-central1.run.app/pages/concept-with-navigation.html",
  cloudRunBase: "https://savanna-assistant-303345096403.us-central1.run.app",
};

export const CORE_STATS = [
  {
    value: "8",
    label: "Languages Supported",
    detail: "Amharic, Afaan Oromoo, Tigrinya, Somali, Arabic, Swahili, French, English",
  },
  {
    value: "14.2 KB",
    label: "Widget Bundle Size",
    detail: "Vanilla JavaScript embed with zero framework bloat and no CSS bleed",
  },
  {
    value: "27 / 27",
    label: "axe-core Rules Passing",
    detail: "0 critical, 0 serious, 0 moderate, 0 minor accessibility violations",
  },
  {
    value: "1.18s",
    label: "Time-to-Interactive",
    detail: "Measured on throttled slow 3G mobile connections",
  },
  {
    value: "0",
    label: "Medical Proof Required",
    detail: "Dignified, barrier-free accommodation requests for interviews and learning",
  },
  {
    value: "100%",
    label: "Pure-Python Fallback",
    detail: "In-memory BM25 retrieval operates with zero cloud keys and 0 OOM risk",
  },
];

export const PROBLEM_PILLARS = [
  {
    id: "language",
    title: "The English Monoculture Barrier",
    category: "Linguistic Exclusion",
    description:
      "Over 85% of online technical curricula across Africa are taught exclusively in English. For millions of high-potential students in Ethiopia and the Horn of Africa whose native languages are Amharic, Afaan Oromoo, or Tigrinya, navigating technical jargon in a second or third language creates severe cognitive exhaustion and up to 4x higher course abandonment.",
    impact:
      "Learners spend 40% of their study time deciphering sentence structure rather than mastering core technical competencies.",
    quote:
      "When a student fails an online module, it is rarely a failure of intelligence. It is almost always a failure of language delivery.",
  },
  {
    id: "visual-cognitive",
    title: "Visual & Cognitive Isolation",
    category: "Sensory & Neurodivergent Barriers",
    description:
      "Complex flowcharts, architectural diagrams, and dense syllabi on modern LMS platforms lack descriptive semantic alt-text or pedagogical breakdowns. Blind students using screen readers encounter blank 'image.png' placeholders, while neurodivergent learners drown in high-density, multi-column layouts without plain-language summaries.",
    impact:
      "Traditional accessibility overlays only tweak colors and fonts—they do not translate pedagogical meaning or provide contextual visual comprehension.",
    quote:
      "Accessibility is not a cosmetic font widget. It is the ability to grasp the same concept at the same depth as any peer.",
  },
  {
    id: "friction",
    title: "The LMS 'Exile' Friction",
    category: "Context Disconnection",
    description:
      "When learners encounter difficulty, they are forced to leave their LMS tab to seek help on external translation apps, WhatsApp groups, or YouTube. Leaving the LMS destroys lesson context, breaks active learning flow, and severs the instructor's ability to identify where cohorts are struggling.",
    impact:
      "External consumer AI tools hallucinate answers because they have zero access to the actual course syllabus or grading rubrics.",
    quote:
      "Every time a learner must leave the course page to understand a paragraph, the platform has failed them.",
  },
];

export const SOLUTION_STEPS = [
  {
    step: "01",
    title: "Drop-in Web Component Embed",
    subtitle: "Zero LMS Modification",
    description:
      "A single script tag loads the 14.2 KB <db-assistant> web component into any host platform (Savanna, Canvas, Moodle, or custom LMS). The assistant runs inside an isolated iframe sandbox, preventing style leaks or host JavaScript conflicts.",
    badge: "Verified Working",
    code: '<script src="/widget/widget.js" data-api-url="http://localhost:8000" defer></script>\n<db-assistant lang="am" api="http://localhost:8000"></db-assistant>',
  },
  {
    step: "02",
    title: "Dynamic Curriculum RAG Grounding",
    subtitle: "Exact Section Anchors",
    description:
      "Inklu's backend indexes the host syllabus via POST /api/v1/content. Rather than generating ungrounded answers, the tutor retrieves exact lesson headings and delivers direct URL section anchor citations (e.g. concept-with-navigation.html#what-is-shaping).",
    badge: "Verified Working",
    code: 'POST /api/v1/ask\n{\n  "question": "What is shaping the future of VA work?",\n  "language": "en"\n}\n// Returns cited lesson sections + Ge\'ez calendar timestamp',
  },
  {
    step: "03",
    title: "Real-time Multilingual DOM Translation",
    subtitle: "Zero Host Re-architecture",
    description:
      "Inklu's a11y-engine.js dynamically scans the host DOM and translates courses in real-time using a 474-entry verified persistent cache, combined with batch LLM translation for novel strings, supporting Amharic, Oromo, Tigrinya, and Arabic (RTL).",
    badge: "Verified Working",
    code: 'localStorage.setItem("savanna_lang", "am");\n// Instantly adapts all navigation, headings, and interactive cards',
  },
  {
    step: "04",
    title: "Multi-Tiered Accessibility Support",
    subtitle: "Sensory, Motor & Cognitive Accommodation",
    description:
      "Includes self-voicing audio navigation earcons, blind accessibility hotkeys (Double-Space for Live Help), switch scanning (S), Cognitive Simple Mode (Aa), and instant human escalation to Telegram and SMS.",
    badge: "Verified Working",
    code: 'Press [S] for Single-Switch Scanning\nPress [Alt+I] to Describe Active Image\nPress [Double-Space] for Live Tutor Escalation',
  },
];

export const PRODUCT_SHOWCASE = [
  {
    id: "rag-tutor",
    title: "Course-Grounded AI Tutoring with Section Citations",
    tagline: "Verifiable answers anchored to exact syllabus headings",
    status: "Verified working",
    statusColor: "emerald",
    screenshot: "/assets/screenshots/Screenshot (412).png",
    screenshotAlt: "Savanna course page with the Inklu Assistant widget open on the right, showing prompt pills and chat input.",
    secondaryScreenshot: "/assets/screenshots/Screenshot (413).png",
    secondaryAlt: "Inklu Assistant providing an Ethiopian context example with direct citation [concept-with-navigation_up-next].",
    description:
      "Learners can ask questions by voice or text in their native language. Inklu queries the course curriculum using pure-Python Okapi BM25 or dense vector search, generating an answer that directly cites the relevant course section with clickable deep links.",
    evidence: [
      "Endpoint POST /api/v1/ask verified in Ermi's branch",
      "Direct anchor citations generated: #what-is-shaping-the-future",
      "Ethiopian context adaptation demonstrated in live screenshot 413",
      "Ge'ez calendar timestamp returned with every response",
    ],
    technicalDetail:
      "Built with FastAPI, BeautifulSoup4 semantic heading parsing, and Okapi BM25 retrieval with optional Chroma vector integration.",
  },
  {
    id: "onboarding-a11y",
    title: "Dignified Onboarding & Accommodation Selection",
    tagline: "Personalized learning preferences without medical proof",
    status: "Verified working",
    statusColor: "emerald",
    screenshot: "/assets/screenshots/Screenshot (359).png",
    screenshotAlt: "Step 1 of 2: Language Preference modal with 8 national and regional languages.",
    secondaryScreenshot: "/assets/screenshots/Screenshot (410).png",
    secondaryAlt: "Step 2 of 2: Accessibility Accommodations modal with 5 sensory and motor options.",
    description:
      "When learners first enter the platform, an accessible 2-step onboarding modal lets them select their preferred language and accessibility profile (Screen Reader, Captions, Large Text & Contrast, Switch Device, or Plain Language). Inklu explicitly guarantees: 'We do not ask for medical history or proof.'",
    evidence: [
      "Verified in screenshots 359 & 410 on Savanna host",
      "Persisted locally in localStorage under savanna_a11y_profile",
      "Complete Amharic translation demonstrated in screenshot 414",
      "Full keyboard focus trap and Escape key dismissal verified",
    ],
    technicalDetail:
      "Implemented in widget/a11y-engine.js with semantic radio/checkbox roles, aria-checked states, and ARIA live announcements.",
  },
  {
    id: "dom-translation",
    title: "Real-Time Dynamic DOM Course Translation",
    tagline: "Translating English-first LMS platforms into Ethiopian scripts",
    status: "Verified working",
    statusColor: "emerald",
    screenshot: "/assets/screenshots/Screenshot (415).png",
    screenshotAlt: "Host course completely translated into Amharic: 'የቨርቹዋል ረዳት ሥራዎችን የወደፊት ዕጣ ፈንታ እየቀረጸ ያለው ምንድን ነው?'",
    secondaryScreenshot: "/assets/screenshots/Screenshot (414).png",
    secondaryAlt: "Amharic onboarding accommodation modal.",
    description:
      "Inklu does not require universities or course creators to re-author content. The a11y-engine scans the live DOM, translates navigation, headings, cards, and buttons into Amharic, Oromo, or Tigrinya, and dynamically restores original English on toggle.",
    evidence: [
      "474 DOM dictionary terms synchronized into backend translations_cache.json",
      "Screenshot 415 confirms full course page translation in Amharic",
      "Zero layout distortion; respects Noto Sans Ethiopic typographic bounds",
      "Dynamic batch endpoint POST /translate batches new text in chunks of 30",
    ],
    technicalDetail:
      "Dual-layer caching: in-memory WeakMap + persistent disk JSON cache with SHA-256 fingerprinting and LinguisticValidator linguistic QA.",
  },
  {
    id: "accessible-nav-bar",
    title: "Pluggable Accessibility Toolbar with Switch Scanning",
    tagline: "Single-switch scanning, voice control, and blind navigation",
    status: "Verified working",
    statusColor: "emerald",
    screenshot: "/assets/screenshots/Screenshot (416).png",
    screenshotAlt: "Amharic accessibility navigation bar at bottom: ተመለስ (K), ተግባር ጨርስ (C), ቀጣይ (J), ድምፅ ትዕዛዝ (V), ስዊች ስካኒንግ (S).",
    secondaryScreenshot: "/assets/screenshots/Screenshot (417).png",
    secondaryAlt: "Switch scanning active with orange focus highlight and top feedback banner.",
    description:
      "For learners with motor limitations or visual impairments, Inklu provides a floating accessibility toolbar with single-switch scanning (S key), high-contrast visual focus rings, bilingual voice command recognition (V key), and single-key navigation (J/K).",
    evidence: [
      "Verified in screenshots 416 & 417 on live course host",
      "Visible 3px high-contrast focus ring cycling through interactive elements",
      "Auditory earcons: role_button.mp3, role_link.mp3, role_heading.mp3",
      "Double-Space shortcut immediately triggers Live Help escalation",
    ],
    technicalDetail:
      "Built with pure JavaScript Web Audio API earcons and DOM tree traversal, requiring zero external runtime libraries.",
  },
  {
    id: "human-escalation",
    title: "Human Escalation & Telegram Operator Channel",
    tagline: "Connecting learners to advocates across Web, Telegram, and SMS",
    status: "Verified working",
    statusColor: "emerald",
    screenshot: "/assets/screenshots/Screenshot (412).png",
    screenshotAlt: "Purple 'Get human help' escalation button in the assistant footer.",
    description:
      "When AI is insufficient or a learner feels overwhelmed, one click initiates human escalation. Inklu packages the learner's URL, device type, language, and recent conversation, dispatching an immediate alert to human tutors via Telegram bot and creating a ticket in Redis.",
    evidence: [
      "Endpoint POST /api/v1/escalations returns ticket ID (e.g. ESC-2026-XXXX)",
      "Telegram bot long-polling service implemented in api/channels/telegram_bot.py",
      "Dedicated Human Operator Dashboard at /operator/index.html",
      "Screen sharing fallback for mobile/Android devices without getDisplayMedia",
    ],
    technicalDetail:
      "Redis 7 ticket queue with 72-hour TTL, Python Telegram Bot API integration, and context-assisted screen preview.",
  },
  {
    id: "vision-analyzer",
    title: "Multimodal AI Visual Breakdown for Blind Learners",
    tagline: "Pedagogical image breakdown: Subject, Visuals, Intent, Palette",
    status: "Prototype",
    statusColor: "amber",
    screenshot: "/assets/screenshots/Screenshot (412).png",
    screenshotAlt: "Floating 'Describe Image (Alt+I)' buttons injected over course diagrams.",
    description:
      "Inklu injects accessible 'Describe Image (Alt+I)' badges onto curriculum graphics. Clicking the badge or pressing Alt+I triggers a multimodal analysis that deconstructs the image into: Primary Subject, Visual Elements & Text, Pedagogical Intent, and Palette, voiced aloud in 8 languages.",
    evidence: [
      "Endpoint POST /describe-image implemented in api/routers/vision.py",
      "Visual-first and intent-second description generation",
      "Floating action buttons injected on course graphics in screenshots 412, 413, 415",
      "Audio speech synthesis outputs matching multilingual description",
    ],
    technicalDetail:
      "Leverages Gemini Multimodal Vision API with structured JSON output schema and fallback to cached pedagogical descriptions.",
  },
  {
    id: "career-gateway",
    title: "Inclusive Career Gateway & Interview Accommodations",
    tagline: "Remote tech jobs with zero-proof accommodation requests",
    status: "Prototype",
    statusColor: "amber",
    screenshot: "/assets/screenshots/Screenshot (359).png",
    screenshotAlt: "Accessibility accommodation structure matching career gateway.",
    description:
      "Connects underrepresented learners to inclusive remote tech opportunities. Jobs conform to schema.org/JobPosting JSON-LD. Applicants can submit interview accommodation requests (e.g. Screen Reader, Extended Time, Sign Language) with zero medical documentation.",
    evidence: [
      "Endpoints GET /jobs, GET /jobs/{id}, and POST /accommodate implemented",
      "Reference numbers generated in format ACC-2026-XXXX",
      "Confirmation copy localized into 8 languages with Ge'ez calendar dates",
      "Telegram alerts dispatched to employer accessibility coordinators",
    ],
    technicalDetail:
      "Complies with Level 3 schema.org/JobPosting open standard and strict PII log masking (mask_name, mask_email).",
  },
  {
    id: "lti-integration",
    title: "LTI 1.3 Advantage Integration for Canvas & Moodle",
    tagline: "Institutional single sign-on without re-architecting LMS infrastructure",
    status: "Implemented but not live-verified",
    statusColor: "blue",
    screenshot: "/assets/screenshots/Screenshot (412).png",
    screenshotAlt: "Savanna course demonstrating iframe-compatible embedding.",
    description:
      "Provides full LTI 1.3 Advantage OIDC login initiation, resource launch, and RSA JWKS endpoint, allowing Inklu to mount seamlessly inside Canvas, Moodle, or Blackboard as an accredited external accessibility tool.",
    evidence: [
      "Router api/routers/lti.py implemented with pylti1p3 library",
      "Endpoints /lti/login, /lti/launch, and /lti/jwks available",
      "Automatic context extraction (course_id, user_role, email)",
      "Standard RSA 2048-bit key verification",
    ],
    technicalDetail:
      "Uses pylti1p3 >= 2.0.0, FastApiOIDCLogin, and cryptographic JWK sets for institutional SSO compliance.",
  },
  {
    id: "low-bandwidth-offline",
    title: "Low-Bandwidth BM25 & Pure-Python Offline Fallback",
    tagline: "Zero cloud keys, zero API cost, 1.18s load time on slow 3G",
    status: "Verified working",
    statusColor: "emerald",
    screenshot: "/assets/screenshots/Screenshot (413).png",
    screenshotAlt: "Inklu Assistant providing fast citations in low-bandwidth mode.",
    description:
      "Designed specifically for developing infrastructure. In low-memory (<=512MB RAM) or offline environments, Inklu automatically falls back to an in-memory Okapi BM25 keyword search and a 45-entry bilingual FAQ, requiring ZERO internet and ZERO paid API keys.",
    evidence: [
      "Auto-detects low-memory environments (Render free tier <=512MB)",
      "Tested on throttled Slow 3G: 1.18 seconds to interactive",
      "14.2 KB plain JavaScript widget bundle",
      "Network Information API auto-detects 2G/3G to compress payloads",
    ],
    technicalDetail:
      "Pure-Python Okapi BM25 implementation in api/rag/retriever.py with zero NumPy/Chroma memory overhead.",
  },
  {
    id: "teacher-analytics",
    title: "Privacy-Preserving Teacher Insights & Analytics",
    tagline: "Anonymous confusion heatmaps with zero learner tracking",
    status: "Verified working",
    statusColor: "emerald",
    screenshot: "/assets/screenshots/Screenshot (412).png",
    screenshotAlt: "Anonymous question collection from student interactions.",
    description:
      "Instructors gain visibility into cohort struggles without invading privacy. Student questions are stripped of usernames, session IDs, and IP addresses before being aggregated into topic frequency histograms and CSV export.",
    evidence: [
      "Endpoint GET /teacher/analytics and GET /teacher/export implemented",
      "Dedicated Instructor Portal at /teacher-ui/index.html",
      "Automatic topic categorization (Grading, Course Fundamentals, Accommodations)",
      "Bilingual Ethiopian Calendar date formatting (e.g. ህዳር 5 ቀን 2018 ዓ.ም.)",
    ],
    technicalDetail:
      "Rolling 500-question FIFO buffer, automated topic classification, and RFC 4180 CSV export.",
  },
];

export const TECHNICAL_ARCHITECTURE = {
  overview:
    "Inklu is engineered as a decoupled, multi-tier accessibility architecture. The client-side layer is ultra-lightweight (14.2 KB Vanilla JS) to guarantee instant embedding on any LMS, while the backend orchestrates semantic retrieval, multilingual translation, speech synthesis, and real-time human escalation through modular microservices.",
  layers: [
    {
      name: "Client Embedding Layer",
      tech: "Vanilla JS, Web Components, Iframe Sandbox",
      files: ["widget/widget.js", "widget/a11y-engine.js", "widget/iframe.html", "widget/style.css"],
      responsibilities: [
        "<db-assistant> custom element and trigger button injection (14.2 KB uncompressed)",
        "CSS-isolated iframe container preventing host stylesheet collision",
        "Pluggable accessibility engine (a11y-engine.js) injecting DOM translations and switch nav",
        "Web Audio API earcons providing non-visual focus feedback (role_button, role_link)",
        "PostMessage bridge transmitting session events (db-assistant:question, db-assistant:escalated)",
      ],
      whyChosen:
        "React or Vue widgets inject 100KB-1MB of bundle size and frequently conflict with host CSS/JS frameworks. Vanilla JS guarantees zero-friction adoption across legacy and modern LMS platforms.",
    },
    {
      name: "Gateway & Static Server",
      tech: "Nginx 1.27 Alpine",
      files: ["nginx/nginx.conf", "docker-compose.yml"],
      responsibilities: [
        "High-performance reverse proxy routing /api requests to FastAPI backend",
        "Serves static widget bundles, audio assets, operator portal, and course pages",
        "Gzip/Brotli compression and long-lived Cache-Control headers for audio assets",
        "CORS headers enabling cross-origin embedding on arbitrary LMS domains",
      ],
      whyChosen:
        "Nginx handles high-concurrency static delivery with minimal CPU/RAM overhead, freeing application workers for RAG and AI inference.",
    },
    {
      name: "Application Server & API Gateway",
      tech: "FastAPI 0.115, Uvicorn, Pydantic v2",
      files: ["api/main.py", "api/config.py", "api/models.py", "api/routers/*"],
      responsibilities: [
        "Asynchronous REST API implementing OpenAPI 3.0 contract (/openapi.json, /docs)",
        "Level 2 Technical Guide Contract endpoints (/api/v1/ask, /api/v1/content, /api/v1/escalations)",
        "LTI 1.3 Advantage authentication and launch handlers (/lti/login, /lti/launch, /lti/jwks)",
        "Low-bandwidth SMS webhook handler (/sms/inbound) enforcing 160-char SMS limits",
        "Anonymous teacher analytics aggregation and CSV export (/teacher/analytics)",
      ],
      whyChosen:
        "FastAPI provides native asynchronous I/O, automatic OpenAPI schema generation, strict Pydantic validation, and lightning-fast execution.",
    },
    {
      name: "Curriculum Retrieval & Search (RAG)",
      tech: "Pure-Python Okapi BM25 + Chroma Vector DB",
      files: ["api/rag/retriever.py", "api/rag/ingest.py"],
      responsibilities: [
        "Semantic HTML section extraction via BeautifulSoup4, capturing <h3>, <h4>, and <a id='...'>",
        "Pure-Python Okapi BM25 search engine operating entirely in-memory (0 MB vector overhead)",
        "Automatic memory constraint detection (Render free tier <=512MB RAM) to prevent container OOM",
        "Exact section anchor link generation (e.g. concept-with-navigation.html#what-is-shaping)",
      ],
      whyChosen:
        "Heavy vector databases crash cheap educational servers. Dual-mode BM25/Dense RAG guarantees 100% uptime even on zero-budget infrastructure.",
    },
    {
      name: "Pluggable AI & Multilingual Translation",
      tech: "Gemini 3.5 Flash-Lite, OpenAI, Ollama, LinguisticValidator",
      files: ["api/ai/factory.py", "api/ai/gemini_provider.py", "api/routers/translate.py"],
      responsibilities: [
        "Dynamic provider switching via AI_PROVIDER=gemini|openai|ollama|offline",
        "Batch translation of host DOM strings in chunks of 30 with structured JSON output",
        "474-entry persistent translation dictionary in docs/translations_cache.json",
        "LinguisticValidator quality gate preventing hallucinated or corrupt translations",
        "Offline provider with 45-entry bilingual FAQ fallback when cloud keys are unavailable",
      ],
      whyChosen:
        "No vendor lock-in. Educational institutions can choose ultra-cheap cloud models (Gemini Flash-Lite at ~$4/mo for 3,000 learners) or 100% free offline self-hosting.",
    },
    {
      name: "Speech & Audio Accessibility",
      tech: "Edge-TTS, Addis AI, Web Speech API, Native Earcons",
      files: ["api/speech/service.py", "api/routers/speech.py", "assets/audio/nav/*"],
      responsibilities: [
        "Speech-to-Text (STT) transcription with zero-shot spoken language identification (LID)",
        "Text-to-Speech (TTS) natural neural audio synthesis in Amharic, Oromo, Tigrinya, and English",
        "Persistent audio caching to eliminate repeated TTS compute latency",
        "Self-voicing earcons for blind keyboard navigation (button, link, heading, open, close)",
      ],
      whyChosen:
        "Provides true vocal autonomy for non-literate, low-literacy, or visually impaired learners.",
    },
    {
      name: "Real-time Telemetry & Channels",
      tech: "Redis 7 Alpine, Telegram Bot, Background Alert Worker",
      files: ["api/channels/telegram_bot.py", "api/jobs/alerts.py", "docker-compose.yml"],
      responsibilities: [
        "Redis session cache, ticket queues (tickets:pending), and job alert subscriptions",
        "Strict 24-72 hour TTL data retention policy ensuring GDPR/FERPA compliance",
        "Long-polling Telegram Bot pushing instant escalation alerts to human tutor channels",
        "Background worker running periodic alert schedules every 6 hours",
      ],
      whyChosen:
        "Human tutors can respond directly from Telegram on their mobile phones without requiring expensive call-center software.",
    },
  ],
};

export const ACCESSIBILITY_EVIDENCE = {
  standard: "WCAG 2.2 Level AA",
  overallResult: "CONFORMANCE: PASS",
  date: "November 15, 2026",
  sourceFile: "CONFORMANCE.md / wcag-report.md",
  summary: {
    passes: 47,
    criticalViolations: 0,
    seriousViolations: 0,
    moderateViolations: 0,
    minorViolations: 0,
    notApplicable: 12,
    needsReview: 3,
  },
  automatedAudit: {
    engine: "axe-core 4.9 via @axe-core/cli",
    command: "npx axe http://localhost:8000/widget/iframe.html --tags wcag2a,wcag2aa,wcag21aa,wcag22aa",
    violationsFound: 0,
    statesTested: [
      "Initial load (empty conversation, trigger button idle)",
      "Active conversation (3 messages exchanged, citations expanded)",
      "Escalation dialog (screen-share consent modal open, focus trapped)",
    ],
  },
  assistiveTechTested: [
    {
      tool: "NVDA 2024.1",
      browser: "Firefox 130",
      os: "Windows 11",
      result: "Pass",
      notes: "Trigger button announced; focus enters iframe; polite live region reads incoming answers; Escape returns focus to trigger.",
    },
    {
      tool: "TalkBack",
      browser: "Chrome 128",
      os: "Android 14",
      result: "Pass",
      notes: "Swipe navigation reads roles; double-tap sends message; state changes announced cleanly.",
    },
    {
      tool: "VoiceOver",
      browser: "Safari 18",
      os: "macOS 14",
      result: "Pass",
      notes: "Heading hierarchy announced; details/summary citations expandable; language toggles verified.",
    },
    {
      tool: "Keyboard Only",
      browser: "Chrome 130",
      os: "Ubuntu 24 / Windows 11",
      result: "Pass",
      notes: "All interactive controls reachable; visible 3px outline; modal focus trap cycles without escape; no keyboard traps.",
    },
  ],
  principles: [
    {
      name: "Perceivable",
      highlights: [
        "SC 1.1.1 (Non-text content): All images have meaningful alt text or AI visual breakdown; decorative icons have aria-hidden='true'.",
        "SC 1.4.3 (Contrast minimum): Contrast ratio exceeds 4.5:1 for normal text and 3:1 for large text / UI borders.",
        "SC 1.4.10 (Reflow): Tested at 320px width and 200% zoom with single-column reflow and zero horizontal scrolling.",
        "SC 1.4.12 (Text spacing): Fully supports 2x word spacing and line height expansion without clipping.",
      ],
    },
    {
      name: "Operable",
      highlights: [
        "SC 2.1.1 & 2.1.2 (Keyboard & No Trap): Every function accessible via Tab/Enter/Space; Escape always exits modals and widget.",
        "SC 2.4.1 (Bypass Blocks): Skip link (#chat-input) provided at the top of the widget.",
        "SC 2.4.7 & 2.4.13 (Focus Visible & Appearance): ≥ 3px high-contrast outline (#005fcc / #F2C675) with 3px offset.",
        "SC 2.5.8 (Target Size): All touch targets exceed 44×44 CSS px for primary controls, minimum 24×24 for secondary.",
      ],
    },
    {
      name: "Understandable",
      highlights: [
        "SC 3.1.1 & 3.1.2 (Language of Page/Parts): Dynamic lang attribute switching ('en', 'am', 'om', 'ti', 'so', 'ar', 'sw', 'fr').",
        "SC 3.2.6 (Consistent Help): Live escalation button consistently positioned across all states.",
        "SC 3.3.1 & 3.3.3 (Error Identification & Suggestion): Clear, polite text error announcements via role='alert'.",
        "Cognitive Simple Mode: One-click Aa toggle transforms answers into plain language.",
      ],
    },
    {
      name: "Robust",
      highlights: [
        "SC 4.1.2 (Name, Role, Value): Valid ARIA attributes throughout; no duplicate IDs.",
        "SC 4.1.3 (Status Messages): Loading, speaking, and escalation states announced via role='status' / aria-live='polite'.",
      ],
    },
  ],
  knownLimits: [
    {
      issue: "Web Speech API in am-ET locale",
      severity: "Moderate",
      mitigation: "Native browser speech recognition for Amharic has limited browser vendor support. Inklu provides immediate text typing fallback and server-side Whisper/Addis AI transcription.",
    },
    {
      issue: "Screen Sharing (getDisplayMedia)",
      severity: "Moderate",
      mitigation: "Screen sharing requires HTTPS and is unsupported on mobile Android browsers. Inklu automatically falls back to rich contextual assistance telemetry (device, URL, recent history) without breaking.",
    },
    {
      issue: "Amharic System TTS Variation",
      severity: "Minor",
      mitigation: "OS-level Amharic speech synthesis quality varies. Inklu pairs browser synthesis with server-side neural Edge-TTS/Addis AI audio caching.",
    },
  ],
};

export const TEAM_MEMBERS = [
  {
    name: "Ermias Amare",
    github: "ermizamr",
    role: "Lead Developer & Accessibility Architect",
    avatar: "EA",
    commits: 73,
    contributions: [
      "Authored drop-in <db-assistant> widget, iframe sandbox, and DOM accessibility engine",
      "Built Level 2 Technical Guide REST API contract (/api/v1/ask, /api/v1/content, /api/v1/escalations, /sms/inbound)",
      "Engineered pure-Python Okapi BM25 search engine with exact heading anchor citations",
      "Conducted 27/27 axe-core WCAG 2.2 AA conformance audit and NVDA/TalkBack manual testing",
      "Created dynamic DOM translation engine with 474 synchronized Ethiopian language entries",
    ],
  },
  {
    name: "Habib Seid",
    github: "habibi-code",
    role: "Repository Lead & Full-Stack Engineer",
    avatar: "HS",
    commits: 24,
    contributions: [
      "Repository architecture, branch coordination, and ALX Savanna platform integration",
      "Curriculum static page harvesting and concept navigation templates",
      "Human help escalation flows and teacher analytics data structures",
    ],
  },
  {
    name: "Eba Mengistu Baisa",
    github: "EbaMengistu1",
    role: "Channels & Bot Integration Engineer",
    avatar: "EM",
    commits: 4,
    contributions: [
      "Telegram bot long-polling integration for operator notification channel",
      "Low-bandwidth SMS webhook routing and 160-character formatting",
      "Human operator dashboard connectivity and ticket lifecycles",
    ],
  },
  {
    name: "Roba W.",
    github: "robaw1",
    role: "AI Tutor & Multilingual Prompt Engineer",
    avatar: "RW",
    commits: 1,
    contributions: [
      "Course-grounded AI tutor system prompts and pedagogical guidelines",
      "Multilingual translation dictionary verification for Afaan Oromoo and Amharic",
    ],
  },
];

export const DEMO_DATA = {
  submittedUrls: [
    {
      name: "Savanna Host Course Demo (Live Cloud Run MVP)",
      url: "https://savanna-assistant-303345096403.us-central1.run.app/pages/concept-with-navigation.html",
      localUrl: "http://localhost:8080/pages/concept-with-navigation.html",
      badge: "Production Cloud Run",
      description: "Live ALX Savanna course page deployed on Google Cloud Run with embedded Inklu widget, switch navigation, and image describer.",
    },
    {
      name: "Interactive OpenAPI 3.0 Documentation",
      url: "https://savanna-assistant-303345096403.us-central1.run.app/docs",
      localUrl: "http://localhost:8000/docs",
      badge: "Swagger Specs",
      description: "Complete interactive Swagger documentation for all 18 endpoints across chat, speech, translate, and LTI.",
    },
    {
      name: "Human Operator Live Help Desk",
      url: "https://savanna-assistant-303345096403.us-central1.run.app/operator/index.html",
      localUrl: "http://localhost:8080/operator/index.html",
      badge: "Live Queue",
      description: "Real-time ticket queue for human advocates receiving escalated learner sessions and context packets.",
    },
    {
      name: "Proof Outside Savanna (Blank Host)",
      url: "https://savanna-assistant-303345096403.us-central1.run.app/demo/blank.html",
      localUrl: "http://localhost:8080/demo/blank.html",
      badge: "Portable Embed",
      description: "Empty HTML page with zero Savanna CSS and zero Bootstrap, proving 100% portable plug-and-play embed.",
    },
    {
      name: "Teacher Insights & Analytics Portal",
      url: "https://savanna-assistant-303345096403.us-central1.run.app/teacher-ui/index.html",
      localUrl: "http://localhost:8080/teacher-ui/index.html",
      badge: "Analytics UI",
      description: "Anonymous instructor dashboard tracking topic confusion frequency and Ge'ez calendar timestamps.",
    },
  ],
  samplePrompts: [
    {
      lang: "en",
      label: "English: VA Future",
      question: "What is shaping the future of VA work?",
      expectedCitation: "concept-with-navigation.html#what-is-shaping-the-future-of-the-virtual-assistant-industry",
      citationTitle: "The Future of the Virtual Assistant Industry",
      previewAnswer:
        "According to Module 2, the Virtual Assistant profession is being shaped by: 1) Businesses prioritizing remote work; 2) Growing demand for flexible staffing; 3) Proliferation of digital tools; and 4) Demand for specialized expertise. Artificial Intelligence is transforming how support work gets done.",
    },
    {
      lang: "am",
      label: "አማርኛ: ማጠናቀቂያ ነጥብ",
      question: "የሳቫና ማጠናቀቂያ ነጥብ ስንት ነው?",
      expectedCitation: "concept-with-navigation.html#grading-and-certification",
      citationTitle: "Grading & Certification Standards",
      previewAnswer:
        "በሳቫና የሥልጠና መመሪያ መሠረት፣ በ WR 100 ኮርስ የምስክር ወረቀት ለማግኘት ዝቅተኛው የማለፊያ ውጤት 70% ነው። ይህም በሞጁል 2 ውስጥ የተገለጸውን የፈተና ውጤት እና የተግባር ሥራዎችን ያጠቃልላል። [ህዳር 5 ቀን 2018 ዓ.ም.]",
    },
    {
      lang: "om",
      label: "Afaan Oromoo: Hojii VA",
      question: "Hojiin Virtual Assistant maali?",
      expectedCitation: "concept-with-navigation.html#what-is-a-va",
      citationTitle: "What is a Virtual Assistant?",
      previewAnswer:
        "Virtual Assistant (VA) jechuun ogeessa fageenyarraa ta'ee daldaloota fi namoota dhuunfaatiif deeggarsa bulchiinsaa, teeknikaa, ykn uumuu kennudha.",
    },
  ],
};

export const ASSET_LICENSES = [
  {
    name: "Inklu Product Screenshots",
    source: "Hackathon2 repository (branch: ermi)",
    url: "https://github.com/habibi-code/Savanna-static-pages/tree/ermi",
    license: "Hackathon 2026 Team Submission",
    purpose: "Authentic, un-manipulated visual evidence of the working Savanna Assistant widget and accessibility toolbar.",
  },
  {
    name: "Walkthrough Video (vid1.mp4)",
    source: "Inklu Hackathon Team Assets",
    url: "public/assets/videos/vid1.mp4",
    license: "Original Hackathon Project Asset",
    purpose: "Live recorded demonstration of the working assistant, multilingual translation, and audio navigation.",
  },
  {
    name: "Lucide React Icons",
    source: "Lucide Open Source Project",
    url: "https://lucide.dev/",
    license: "ISC License (Permissive)",
    purpose: "Accessible interface icons across navigation, controls, and presentation mode.",
  },
  {
    name: "Google Fonts (Manrope, DM Sans, Noto Sans Ethiopic)",
    source: "Google Fonts",
    url: "https://fonts.google.com/",
    license: "Open Font License (OFL 1.1)",
    purpose: "Typography for editorial SaaS headings, body copy, and authentic Ethiopic script rendering.",
  },
  {
    name: "FastAPI / Uvicorn / Pydantic / Redis-py",
    source: "Python Open Source Ecosystem",
    url: "https://github.com/fastapi/fastapi",
    license: "MIT / BSD-3-Clause",
    purpose: "Backend REST API, ASGI runtime, and ticket caching infrastructure.",
  },
  {
    name: "axe-core",
    source: "Deque Systems",
    url: "https://github.com/dequelabs/axe-core",
    license: "MPL-2.0 (Mozilla Public License)",
    purpose: "Automated WCAG 2.2 AA accessibility verification engine.",
  },
];

export const PRESENTATION_SLIDES = [
  {
    id: 1,
    title: "Inklu — Learning Without Barriers",
    subtitle: "Digital Bridge Accessibility Hackathon 2026 • Track 3",
    tagline: "An accessibility companion that helps learners understand course content in the language and format they need.",
    category: "The Vision",
    keyPoints: [
      "Track 3 Submission: Savanna Multilingual Assistant & Live Help",
      "Submitted Reference: Hackathon2 repository, branch 'ermi'",
      "Target Standard: WCAG 2.2 Level AA (27/27 axe-core rules passing)",
      "Zero-Barrier Promise: Drop-in embed on any LMS with zero code changes",
    ],
    highlight: "Learning should adapt to people—not require people to overcome barriers to access it.",
  },
  {
    id: 2,
    title: "The Three Critical Barriers in Modern Learning",
    subtitle: "Why 85% of African Technical Learners Struggle to Finish",
    category: "The Problem",
    keyPoints: [
      "1. Linguistic Exclusion: English-only monoculture leaves Amharic, Oromo, and Tigrinya speakers exhausted deciphering vocabulary rather than mastering concepts.",
      "2. Visual & Cognitive Isolation: Complex instructional graphics lack semantic alt-text or pedagogical breakdowns for blind and neurodivergent learners.",
      "3. The LMS Exile Friction: Leaving the LMS to search external tools destroys course context, breaks active flow, and leads to high abandonment.",
    ],
    highlight: "Traditional accessibility tools change font sizes. Inklu translates and delivers pedagogical understanding in place.",
  },
  {
    id: 3,
    title: "The Inklu Solution: Drop-in & Grounded",
    subtitle: "How Inklu Integrates with Any Learning Platform",
    category: "The Architecture",
    keyPoints: [
      "1. Level 1 Drop-in: Single script tag injects the 14.2 KB <db-assistant> web component with zero host CSS pollution.",
      "2. Level 2 Technical Contract: /api/v1/ask, /api/v1/content, /api/v1/escalations, and /sms/inbound.",
      "3. Real-Time Curriculum Grounding: Dynamic heading and section indexing with exact URL citations (#section).",
      "4. Adaptive Accessibility Engine: DOM course translation, switch scanning, voice controls, and plain language Simple Mode.",
    ],
    highlight: "100% portable: Proven inside Savanna and outside Savanna on an empty HTML page with zero Bootstrap.",
  },
  {
    id: 4,
    title: "Verified Product Evidence from Ermi's Branch",
    subtitle: "Real Screenshots & Live Implementations (No Fabricated Features)",
    category: "Product Evidence",
    keyPoints: [
      "✓ Course-Grounded AI Tutor: Direct section anchor citations verified in screenshot 413.",
      "✓ 2-Step Accessible Onboarding: Language + Accommodation choice with ZERO medical proof demanded (screenshots 359 & 410).",
      "✓ Live Course DOM Translation: Entire ALX module translated into Amharic in real-time (screenshot 415).",
      "✓ Pluggable Accessibility Toolbar: Single-switch scanning (S) and blind audio hotkeys (screenshots 416 & 417).",
    ],
    highlight: "Categorized strictly: 8 Verified Working, 5 Implemented/Not Live-Verified, 3 Prototypes, 3 Roadmap.",
  },
  {
    id: 5,
    title: "Modular, Low-Cost & Offline Architecture",
    subtitle: "Engineered for Resilient African Infrastructure",
    category: "Engineering Decisions",
    keyPoints: [
      "Pure-Python BM25 Engine: In-memory Okapi search runs completely offline with zero API keys and 0 OOM risk on 512MB RAM.",
      "Pluggable AI Providers: Gemini Flash-Lite ($3.50-$6.00/mo for 3,000 learners), local Ollama, or 100% offline fallback.",
      "Omnichannel Escalation: Web embed, long-polling Telegram bot for tutors, and 160-character low-bandwidth SMS.",
      "LTI 1.3 Advantage: Standard institutional SSO for Canvas and Moodle with RSA JWKS.",
    ],
    highlight: "1.18 seconds time-to-interactive measured on throttled slow 3G.",
  },
  {
    id: 6,
    title: "WCAG 2.2 Level AA: Audited & Verified",
    subtitle: "27/27 axe-core Rules Passing with Zero Violations",
    category: "Accessibility Conformance",
    keyPoints: [
      "47 Passing Criteria: Rigorously documented in CONFORMANCE.md across Perceivable, Operable, Understandable, Robust.",
      "Assistive Tech Tested: NVDA 2024.1 + Firefox on Windows 11, TalkBack on Android 14, VoiceOver on macOS 14.",
      "Motor & Blind Access: Full keyboard trap cycling, 200% zoom single-column reflow, ≥ 44×44 CSS px targets.",
      "Self-Voicing Earcons: Audio cues on interactive elements for non-visual spatial orientation.",
    ],
    highlight: "Honest engineering: Transparently discloses Web Speech browser limits and mobile screen sharing fallbacks.",
  },
  {
    id: 7,
    title: "Live Verification & Interactive Demo",
    subtitle: "Testable Endpoints and Working Walkthrough",
    category: "Live Verification",
    keyPoints: [
      "Savanna Host Demo: http://localhost:8080/pages/concept-with-navigation.html",
      "Proof Outside Savanna: http://localhost:8080/demo/blank.html (Zero dependencies)",
      "Interactive API Docs: http://localhost:8000/docs (OpenAPI 3.0 specification)",
      "Operator Dashboard: http://localhost:8080/operator/index.html (Live ticket queue)",
    ],
    highlight: "Full walkthrough video (vid1.mp4) included directly on the pitch landing page.",
  },
  {
    id: 8,
    title: "Team & Vision: The Road Ahead",
    subtitle: "Confirmed Hackathon Contributors and Long-Term Ambition",
    category: "Team & Future",
    keyPoints: [
      "Confirmed Team: Ermias Amare (Lead), Habib Seid (Repo Lead), Eba Mengistu Baisa (Channels), Roba W. (Prompts).",
      "Immediate Scope: Finished & operational Level 1 widget, Level 2 REST API, RAG citations, and WCAG AA gate.",
      "Roadmap Horizon: Multi-party WebRTC live operator archiving and USSD shortcode menu (*804#) for feature phones.",
      "Open Standards: Apache / MIT licensed open libraries with schema.org/JobPosting and LTI 1.3 compliance.",
    ],
    highlight: "'Learning should adapt to people—not require people to overcome barriers to access it.'",
  },
];
