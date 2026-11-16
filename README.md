# Inklu — Learning Without Barriers (Track 3 Pitch Website)

> **Digital Bridge Accessibility Hackathon 2026 — Track 3 Submission**  
> **🚀 Live Cloud Run MVP Demo:** [`https://savanna-assistant-303345096403.us-central1.run.app/pages/concept-with-navigation.html`](https://savanna-assistant-303345096403.us-central1.run.app/pages/concept-with-navigation.html)  
> **Source of Truth Repository:** [`https://github.com/habibi-code/Savanna-static-pages`](https://github.com/habibi-code/Savanna-static-pages)  
> **Submitted Branch:** [`ermi`](https://github.com/habibi-code/Savanna-static-pages/tree/ermi)  
> **Standard:** WCAG 2.2 Level AA Evaluated (27/27 axe-core automated rules passing, 0 violations)  
> **🐕 This site runs Inklu itself** — the floating assistant is the real 14.2 KB `<db-assistant>` widget, embedded with one script tag and zero host changes (the same Level-1 integration documented in Act 02).

---

## Executive Summary

**Inklu** is a context-aware, drop-in accessibility companion designed to bridge linguistic, sensory, and cognitive divides in digital education. Operating as a non-invasive layer over existing learning management systems (Savanna, Canvas, Moodle), Inklu provides real-time course-grounded voice and text tutoring in local Ethiopian languages (Amharic, Afaan Oromoo, Tigrinya, Somali) and regional languages (Arabic, Swahili, French, English), cited directly from curriculum section anchors.

When learners encounter blockers, Inklu allows instant escalation to human advocates across Web, Telegram, and low-bandwidth SMS. The architecture is engineered for low-cost, resilient delivery on African infrastructure, featuring an in-memory pure-Python Okapi BM25 engine with zero API key dependencies and a 14.2 KB vanilla JavaScript embed.

---

## Core Capabilities & Implementation Taxonomy

In accordance with hackathon evaluation guidelines, every capability is strictly delineated into its verified operational state:

### 1. Verified Working (Grounded in Submitted Code & Live Screenshots)
- **Drop-in Web Component (`<db-assistant>`):** 14.2 KB plain JavaScript widget (`widget/widget.js`) with isolated iframe shell (`widget/iframe.html`). Zero host CSS pollution, zero framework overhead.
- **Level 2 REST API Contract:** Fully documented OpenAPI 3.0 specification implemented in `api/routers/v1_contract.py` (`POST /api/v1/ask`, `POST /api/v1/content`, `POST /api/v1/escalations`, `POST /sms/inbound`).
- **Course-Grounded RAG with Deep Anchor Citations:** Retrieves curriculum sections using Okapi BM25 or Chroma vector search, returning direct deep links (`concept-with-navigation.html#what-is-shaping-the-future`).
- **Real-Time Dynamic DOM Translation:** `widget/a11y-engine.js` translates host LMS courses in real-time with 474 synchronized persistent entries in `docs/translations_cache.json` across Amharic, Oromo, Tigrinya, and Arabic (RTL).
- **Pluggable Accessibility Toolbar:** Single-switch scanning (`S` key), blind accessibility shortcuts (`J`/`K`/`C`/`V`), high-contrast focus rings, and self-voicing audio navigation earcons (`role_button.mp3`, `role_link.mp3`).
- **Cognitive "Simple Mode" (`Aa` Toggle):** Delivers plain-language, low-distraction explanations for neurodivergent learners.
- **Dignified Onboarding & Accommodation Selection:** 2-step accessible modal for language and accommodation preferences with **ZERO medical proof demanded or collected**.
- **Human Escalation via Telegram:** Packaging rich learner context packets (URL, device, language) and dispatching instant alerts to human advocates via long-polling Telegram bot.
- **Privacy-Preserving Teacher Analytics:** Anonymous aggregation of student inquiry frequency and topic clustering (`/teacher/analytics`, `/teacher/export`) with Ge'ez calendar timestamps.
- **WCAG 2.2 Level AA Gate:** 27/27 axe-core rules passing with 0 critical, 0 serious, 0 moderate, and 0 minor violations.

### 2. Implemented but Not Live-Verified (Backend Exists)
- **LTI 1.3 Advantage Integration:** Full OIDC login initiation, resource launch, and RSA JWKS endpoint in `api/routers/lti.py` using `pylti1p3`.
- **Low-Bandwidth SMS Inbound Webhook:** `POST /sms/inbound` truncating answers to 160 characters for basic feature phones.
- **Scheduled Job Alerts Worker:** `api/jobs/alerts.py` background worker polling Redis for automated notifications.
- **Local Ollama AI Provider:** Self-hosted inference (`llama3:8b`, `mistral`) for air-gapped zero-internet deployments.
- **Edge-TTS / Addis AI Speech Synthesis:** Neural text-to-speech providers with disk and in-memory audio caching.

### 3. Prototype (Demonstrated in Code / Local Mockup)
- **AI Multimodal Vision Image Describer:** `POST /describe-image` generating structured pedagogical breakdowns (Primary Subject, Visuals, Intent, Palette).
- **Inclusive Career Gateway:** `schema.org/JobPosting` listings with barrier-free interview accommodation requests (`/accommodate`).
- **In-Browser Screen Sharing Fallback:** Desktop Chrome `getDisplayMedia` preview with automatic graceful degradation to contextual telemetry on Android/mobile.

### 4. Roadmap Horizon (Future Ambitions)
- Multi-party WebRTC video and audio recording for live operator archiving.
- Direct USSD shortcode menu (`*804#`) for non-smartphone access without data connectivity.
- Automated bi-directional gradebook sync for proprietary LMS grade passback.

---

## Technical Stack & Design Direction

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animation & Transitions:** Motion for React (`motion`)
- **Icons:** Lucide React (`lucide-react`)
- **Typography:** Manrope (Headings), DM Sans (Interface/Body), Noto Sans Ethiopic (Amharic & Tigrinya scripts)
- **Color Palette:**
  - Forest Green: `#183E34`
  - Deep Ink: `#18362E`
  - Cream Background: `#F8F9F4`
  - Muted Gold: `#F2C675`
  - Subtle Borders: `#D9DFD6`

---

## Getting Started

### Prerequisites
- Node.js >= 20 (Verified on v24.19.0)
- npm >= 10 (Verified on v11.17.0)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Run Production Build & Type Check
```bash
npm run build
npm run lint
```

### 4. Preview Production Build
```bash
npm run preview
```

Open `http://localhost:4173` in your browser.

---

## Pitch Presentation Mode

This website features a dedicated full-screen pitch presentation deck designed for 16:9 projection screens:

- **Launch:** Press the <kbd>P</kbd> key anywhere on the website, or click the **Pitch Mode** button in the header.
- **Controls:**
  - Next Slide: <kbd>→</kbd> or <kbd>Space</kbd> or <kbd>PageDown</kbd>
  - Previous Slide: <kbd>←</kbd> or <kbd>Backspace</kbd> or <kbd>PageUp</kbd>
  - Jump to Start / End: <kbd>Home</kbd> / <kbd>End</kbd>
  - Fullscreen Toggle: <kbd>F</kbd>
  - Keyboard Help: <kbd>?</kbd>
  - Exit Presentation: <kbd>Escape</kbd>
- **Direct URL:** Append `?mode=presentation` to the URL.

---

## Verified Submission Endpoints

When running Ermi's Docker Compose stack from the submitted repository:

| Service / Endpoint | URL | Verification Notes |
|---|---|---|
| **Savanna Course Host Demo** | `http://localhost:8080/pages/concept-with-navigation.html` | Live ALX course with widget and toolbar |
| **Proof Outside Savanna (Blank)** | `http://localhost:8080/demo/blank.html` | Empty HTML page proving zero-dependency embed |
| **Interactive API Documentation** | `http://localhost:8000/docs` | OpenAPI 3.0 Swagger interface |
| **Human Operator Dashboard** | `http://localhost:8080/operator/index.html` | Live ticket queue with learner context packets |
| **Teacher Analytics Portal** | `http://localhost:8080/teacher-ui/index.html` | Anonymous question frequency histograms |

---

## Confirmed Team Members

All team members are verified contributors from the git repository commit history:

- **Ermyas Misiker (`@ermizamr`)** — Lead Developer & Accessibility Architect
- **Habib Seid (`@habibi-code`)** — Repository Lead & Full-Stack Engineer (24 commits)
- **Eba Mengistu Baisa (`@EbaMengistu1`)** — Channels & Bot Integration Engineer (4 commits)
- **Roba W. (`@robaw1`)** — AI Tutor Prompt Engineer & Multilingual Localization (1 commit)

---

## Asset Licenses & Provenance Record

| Asset | Source / URL | License | Purpose |
|---|---|---|---|
| **Product Screenshots** | `Savanna-static-pages` (branch `ermi`) | Project Asset | Authentic, unedited visual evidence of working widget |
| **Walkthrough Video** | `public/assets/videos/vid1.mp4` | Project Asset | Live recorded session of voice, RAG, and escalation |
| **Lucide Icons** | [lucide.dev](https://lucide.dev/) | ISC | Accessible UI iconography |
| **Google Fonts** | [fonts.google.com](https://fonts.google.com/) | OFL 1.1 | Manrope, DM Sans, Noto Sans Ethiopic typography |
| **axe-core** | [github.com/dequelabs/axe-core](https://github.com/dequelabs/axe-core) | MPL-2.0 | Automated WCAG 2.2 AA testing engine |
| **FastAPI / Uvicorn** | [github.com/fastapi/fastapi](https://github.com/fastapi/fastapi) | MIT / BSD | ASGI backend & data validation |
