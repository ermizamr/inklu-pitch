/**
 * Pitch Deck — full-screen presentation mode.
 * Editorial language: ink paper, Fraunces display, mono annotations,
 * evidence plates. All keyboard handling and deep-linking preserved.
 */
import { useState, useEffect, useRef, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

const Github = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TOTAL = 8;

/* Evidence plate — replaces the traffic-light browser frame. */
function Plate({ number, source, badge, src, alt, maxH = "clamp(240px,42vh,420px)" }) {
  return (
    <figure className="w-full max-w-xl border border-ink-rule bg-ink-raised">
      <figcaption className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-ink-rule">
        <span className="annotation text-gold">Pl. {number}</span>
        <span className="annotation text-paper/50">{source}</span>
      </figcaption>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain object-top bg-white"
        style={{ maxHeight: maxH }}
      />
      {badge ? (
        <div className="px-4 py-2 border-t border-ink-rule">
          <span className="annotation text-gold">{badge}</span>
        </div>
      ) : null}
    </figure>
  );
}

/* Paper callout — statements that deserve light. */
function Callout({ kicker, children, mono }) {
  return (
    <div className="bg-paper text-ink px-5 py-4 sm:px-6 sm:py-5">
      <span className="annotation text-gold-deep block mb-1.5">{kicker}</span>
      <p className={`text-ink leading-snug ${mono ? "font-mono text-sm" : "font-display font-medium text-lg sm:text-xl"}`}>
        {children}
      </p>
    </div>
  );
}

function Kicker({ children }) {
  return <span className="annotation text-gold block">{children}</span>;
}

export default function PresentationMode({ isOpen, onClose }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const s = parseInt(params.get("slide"), 10);
      if (!isNaN(s) && s >= 1 && s <= TOTAL) {
        return s - 1;
      }
    }
    return 0;
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const containerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, TOTAL - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;

      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          e.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
        case "PageUp":
        case "Backspace":
          e.preventDefault();
          prevSlide();
          break;
        case "Home":
          e.preventDefault();
          setCurrentSlideIndex(0);
          break;
        case "End":
          e.preventDefault();
          setCurrentSlideIndex(TOTAL - 1);
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        case "?":
          setShowHelp((prev) => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextSlide, prevSlide, onClose, toggleFullscreen]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Inklu Pitch Presentation Mode"
      className="pitch-shell fixed inset-0 z-50 bg-ink text-paper select-none font-body focus-dark"
    >
      {/* ── Masthead ─────────────────────────────────────────────── */}
      <header className="px-5 sm:px-8 py-3 flex items-center justify-between border-b border-ink-rule shrink-0">
        <div className="flex items-baseline gap-4 min-w-0">
          <span className="font-display text-xl text-paper leading-none shrink-0">
            Inklu<span className="text-gold">.</span>
          </span>
          <span className="annotation text-paper/60 hidden sm:inline truncate">
            Digital Bridge Hackathon · 2026 · Track 3
          </span>
        </div>

        <div className="font-mono text-xs text-paper/50 tabular-nums" aria-live="polite">
          <span className="text-gold font-semibold">{String(currentSlideIndex + 1).padStart(2, "0")}</span>
          {" / "}
          {String(TOTAL).padStart(2, "0")}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="https://savanna-assistant-303345096403.us-central1.run.app/pages/concept-with-navigation.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-gold text-ink text-xs font-semibold hover:bg-paper transition-colors"
            title="Launch Live Cloud Run MVP Demo"
          >
            Live MVP
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://github.com/habibi-code/Savanna-static-pages/tree/ermi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-ink-rule text-xs font-mono text-paper/70 hover:text-paper hover:border-paper/40 transition-colors"
            title="View Submitted Code on GitHub (branch: ermi)"
          >
            <Github className="w-3.5 h-3.5" />
            ermi
          </a>
          <button
            type="button"
            onClick={() => setShowHelp(!showHelp)}
            className="p-2 text-paper/50 hover:text-paper transition-colors cursor-pointer"
            title="Keyboard shortcuts (?)"
            aria-label="Show shortcuts"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 text-paper/50 hover:text-paper transition-colors cursor-pointer"
            title="Toggle fullscreen (F)"
            aria-label="Toggle full screen"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-paper/50 hover:text-paper transition-colors cursor-pointer"
            title="Exit presentation (Escape)"
            aria-label="Exit pitch presentation"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>
      </header>

      {/* ── Slide canvas ─────────────────────────────────────────── */}
      <main
        className="pitch-main pitch-scroll flex flex-col px-5 sm:px-10 lg:px-16 py-6 sm:py-8 w-full"
        tabIndex={0}
        aria-label="Presentation slides"
      >
        <div key={currentSlideIndex} className="slide-enter w-full max-w-6xl mx-auto my-auto">

          {/* ── SLIDE 1: VISION ─────────────────────────────────── */}
          {currentSlideIndex === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
              <div>
                <Kicker>Vision &amp; mandate · 2026</Kicker>
                <h1 className="font-display font-medium text-[clamp(2.75rem,5vw+3vh,5.5rem)] text-paper tracking-tight leading-[1.0] mt-5">
                  Learning<br />
                  <em className="italic font-light text-gold">without</em><br />
                  barriers<span className="text-gold">.</span>
                </h1>
                <p className="font-ethiopic text-lg text-gold/90 mt-5" lang="am">
                  ያለ ምንም እንቅፋት መማር
                </p>
                <p className="text-base text-paper/75 leading-relaxed mt-6 max-w-md">
                  An accessibility companion embedded directly into course pages —
                  grounding answers in the curriculum, in the learner's language,
                  with a human one click away.
                </p>
                <dl className="mt-8 flex gap-8 border-t border-ink-rule pt-5">
                  <div>
                    <dt className="annotation text-paper/60">Languages</dt>
                    <dd className="font-display text-3xl text-paper mt-1">8</dd>
                  </div>
                  <div>
                    <dt className="annotation text-paper/60">Widget</dt>
                    <dd className="font-display text-3xl text-paper mt-1">14.2 KB</dd>
                  </div>
                  <div>
                    <dt className="annotation text-paper/60">axe-core</dt>
                    <dd className="font-display text-3xl text-paper mt-1">27/27</dd>
                  </div>
                </dl>
              </div>
              <div className="flex justify-center">
                <Plate
                  number="01"
                  source="Savanna LMS · live"
                  badge="Course-grounded answer with section citation"
                  src="/assets/screenshots/Screenshot (413).png"
                  alt="Inklu Assistant live on Savanna course page with Ethiopian context example and citation."
                  maxH="clamp(260px,48vh,480px)"
                />
              </div>
            </div>
          )}

          {/* ── SLIDE 2: THE PROBLEM ────────────────────────────── */}
          {currentSlideIndex === 1 && (
            <div className="max-w-5xl mx-auto">
              <Kicker>Act 01 — the wall</Kicker>
              <h2 className="font-display font-medium text-[clamp(2.25rem,4vw+2vh,4.25rem)] text-paper tracking-tight leading-[1.02] mt-5">
                The invisible tax on<br />
                <em className="italic font-light text-gold">technical potential.</em>
              </h2>
              <p className="text-base text-paper/70 max-w-2xl leading-relaxed mt-6">
                Learners don't drop out from lack of aptitude. They drop out from
                friction — linguistic, sensory, and structural.
              </p>

              <ol className="mt-10 border-t border-ink-rule">
                {[
                  ["Linguistic exile", "85%+ of African tech curricula operate exclusively in English. Non-native speakers spend 40% of study time decoding grammar instead of mastering skills."],
                  ["Visual isolation", "Instructional charts and flowcharts lack semantic breakdowns. Blind and low-vision learners hit dead-end image placeholders."],
                  ["The broken loop", "Leaving the LMS to translate on external apps shatters course context and hides cohort struggles from instructors."],
                ].map(([t, d], i) => (
                  <li key={t} className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 py-5 border-b border-ink-rule">
                    <span className="font-display text-4xl font-light text-paper/40 tabular-nums leading-none pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl text-paper font-medium">{t}</h3>
                      <p className="text-sm text-paper/65 leading-relaxed mt-1.5 max-w-2xl">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 max-w-2xl">
                <Callout kicker="The core realization">
                  “Every time a learner must leave their course to understand a
                  concept, the platform has failed them.”
                </Callout>
              </div>
            </div>
          )}

          {/* ── SLIDE 3: THE SOLUTION ───────────────────────────── */}
          {currentSlideIndex === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
              <div>
                <Kicker>Act 02 — the bridge</Kicker>
                <h2 className="font-display font-medium text-[clamp(2.25rem,4vw+2vh,4.25rem)] text-paper tracking-tight leading-[1.02] mt-5">
                  Zero LMS friction.<br />
                  <em className="italic font-light text-gold">Instant autonomy.</em>
                </h2>
                <p className="text-base text-paper/70 leading-relaxed mt-6 max-w-md">
                  Inklu attaches as a non-invasive, 14.2 KB companion layer
                  directly into the learner's course view. No re-platforming.
                </p>

                <ol className="mt-8 space-y-0 border-t border-ink-rule font-mono text-xs">
                  {[
                    ["L1", "Learner", "voice or text"],
                    ["L2", "Host LMS", "<db-assistant> embed"],
                    ["L3", "Inklu RAG", "section-level BM25"],
                    ["L4", "Support", "voice / human escalation"],
                  ].map(([n, t, d]) => (
                    <li key={n} className="flex items-baseline gap-4 border-b border-ink-rule py-3">
                      <span className="text-gold font-semibold">{n}</span>
                      <span className="text-paper font-semibold">{t}</span>
                      <span className="text-paper/60 ml-auto text-right">{d}</span>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 max-w-md">
                  <Callout kicker="100% pluggable & portable">
                    Verified inside Savanna and outside it, on a blank HTML host
                    with zero dependencies.
                  </Callout>
                </div>
              </div>
              <div className="flex justify-center">
                <Plate
                  number="02"
                  source="Onboarding · step 1"
                  badge="Eight languages, dignified by design"
                  src="/assets/screenshots/Screenshot (359).png"
                  alt="Inklu Onboarding screen with Amharic, Oromo, Tigrinya, and Arabic options."
                />
              </div>
            </div>
          )}

          {/* ── SLIDE 4: GROUND TRUTH ───────────────────────────── */}
          {currentSlideIndex === 3 && (
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Kicker>Act 03 — the evidence</Kicker>
                  <h2 className="font-display font-medium text-[clamp(2rem,3.4vw+2vh,3.75rem)] text-paper tracking-tight leading-[1.05] mt-5">
                    Course-grounded tutoring,<br />
                    <em className="italic font-light text-gold">exact citations.</em>
                  </h2>
                </div>
                <span className="stamp text-gold">Verified live</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <Plate
                  number="03"
                  source="Assistant interface"
                  src="/assets/screenshots/Screenshot (412).png"
                  alt="Savanna Assistant running alongside course content with starter pills."
                  maxH="clamp(200px,34vh,340px)"
                />
                <Plate
                  number="04"
                  source="Verified citation"
                  badge="POST /api/v1/ask — answers link to the syllabus anchor, never hallucinated"
                  src="/assets/screenshots/Screenshot (413).png"
                  alt="Assistant reply with Ethiopian VA context and direct deep-link citation."
                  maxH="clamp(200px,34vh,340px)"
                />
              </div>
            </div>
          )}

          {/* ── SLIDE 5: ACCESSIBILITY ──────────────────────────── */}
          {currentSlideIndex === 4 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
              <div>
                <Kicker>Act 04 — the proof</Kicker>
                <h2 className="font-display font-medium text-[clamp(2.25rem,4vw+2vh,4.25rem)] text-paper tracking-tight leading-[1.02] mt-5">
                  Built for dignity,<br />
                  <em className="italic font-light text-gold">not as an afterthought.</em>
                </h2>

                <ul className="mt-8 border-t border-ink-rule">
                  {[
                    ["Switch scanning", "press S to cycle focus with a high-contrast outline"],
                    ["Simple mode", "Aa for plain-language, low-distraction summaries"],
                    ["Self-voicing nav", "bilingual earcons & aria-live announcements"],
                    ["Zero medical proof", "accommodations without disclosure, ever"],
                  ].map(([t, d]) => (
                    <li key={t} className="flex items-baseline gap-4 border-b border-ink-rule py-3.5">
                      <span className="text-sm font-semibold text-paper shrink-0">{t}</span>
                      <span className="font-mono text-[11px] text-paper/50 text-right ml-auto">{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 max-w-md">
                  <Callout kicker="Audit evaluation">
                    27/27 automated axe-core rules passing — verified with NVDA,
                    TalkBack, and VoiceOver.
                  </Callout>
                </div>
              </div>
              <div className="flex justify-center">
                <Plate
                  number="05"
                  source="Live DOM translation"
                  badge="474 cached terms · Amharic in place"
                  src="/assets/screenshots/Screenshot (415).png"
                  alt="ALX course page translated entirely into Amharic in real-time."
                />
              </div>
            </div>
          )}

          {/* ── SLIDE 6: ARCHITECTURE ───────────────────────────── */}
          {currentSlideIndex === 5 && (
            <div className="max-w-5xl mx-auto">
              <Kicker>Act 04 — the proof, continued</Kicker>
              <h2 className="font-display font-medium text-[clamp(2.25rem,4vw+2vh,4.25rem)] text-paper tracking-tight leading-[1.02] mt-5">
                Engineered for the infrastructure<br />
                <em className="italic font-light text-gold">that actually exists.</em>
              </h2>
              <p className="text-base text-paper/70 max-w-2xl leading-relaxed mt-6">
                A decoupled multi-container stack that runs smoothly on slow 3G
                and memory-constrained 512MB servers.
              </p>

              <ol className="mt-10 border-t border-ink-rule">
                {[
                  ["Client layer", "14.2 KB Vanilla JS", "<db-assistant> web component + isolated iframe. Zero CSS leakage."],
                  ["Application", "FastAPI + OpenAPI", "Async Python ASGI — /api/v1/ask, /translate, LTI 1.3."],
                  ["Retrieval", "Pure-Python BM25", "In-memory index; auto-detects ≤512MB RAM to prevent OOM."],
                  ["Telemetry", "Redis + Telegram", "72h TTL queues; long-polling bot alerts human tutors instantly."],
                ].map(([n, t, d], i) => (
                  <li key={n} className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_14rem_1fr] gap-x-6 gap-y-1 py-4 border-b border-ink-rule items-baseline">
                    <span className="font-mono text-[11px] text-gold tabular-nums">L{i + 1}</span>
                    <span>
                      <span className="font-mono text-[10px] text-paper/60 block">{n}</span>
                      <span className="font-display text-lg text-paper font-medium">{t}</span>
                    </span>
                    <span className="text-sm text-paper/60 leading-relaxed md:mt-1">{d}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <Callout kicker="Measured, low-bandwidth">
                  1.18s time-to-interactive on throttled slow 3G.
                </Callout>
                <span className="stamp text-gold">Zero cloud lock-in</span>
              </div>
            </div>
          )}

          {/* ── SLIDE 7: HUMAN IMPACT ───────────────────────────── */}
          {currentSlideIndex === 6 && (
            <div className="max-w-5xl mx-auto">
              <Kicker>Act 05 — the people</Kicker>
              <h2 className="font-display font-medium text-[clamp(2.25rem,4vw+2vh,4.25rem)] text-paper tracking-tight leading-[1.02] mt-5">
                Democratizing<br />
                <em className="italic font-light text-gold">technical opportunity.</em>
              </h2>
              <p className="text-base text-paper/70 max-w-2xl leading-relaxed mt-6">
                Remove the barriers, and thousands of high-potential engineers,
                creators, and specialists stop being left behind.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 border border-ink-rule mt-10">
                <div className="p-6 md:p-8 md:border-r border-b md:border-b-0 border-ink-rule">
                  <span className="annotation text-paper/60">Without Inklu</span>
                  <h3 className="font-display text-xl text-paper/85 font-medium mt-3">The cycle of disengagement</h3>
                  <ul className="text-sm text-paper/60 space-y-3 mt-4">
                    <li className="flex gap-3"><span aria-hidden="true" className="text-paper/30">✕</span>Drop-out when technical English overwhelms.</li>
                    <li className="flex gap-3"><span aria-hidden="true" className="text-paper/30">✕</span>Blind learners stranded by inaccessible diagrams.</li>
                    <li className="flex gap-3"><span aria-hidden="true" className="text-paper/30">✕</span>Instructors can't see where cohorts struggle.</li>
                  </ul>
                </div>
                <div className="p-6 md:p-8 bg-ink-raised">
                  <span className="annotation text-gold">With Inklu</span>
                  <h3 className="font-display text-xl text-paper font-medium mt-3">Dignified learner autonomy</h3>
                  <ul className="text-sm text-paper/85 space-y-3 mt-4">
                    <li className="flex gap-3"><span aria-hidden="true" className="text-gold">→</span>Ask and listen in Amharic or Afaan Oromo.</li>
                    <li className="flex gap-3"><span aria-hidden="true" className="text-gold">→</span>Citations jump to the exact lesson section.</li>
                    <li className="flex gap-3"><span aria-hidden="true" className="text-gold">→</span>A human advocate, one click away via Telegram or SMS.</li>
                  </ul>
                </div>
              </div>

              <blockquote className="mt-8 border-l-2 border-gold pl-6">
                <p className="font-display italic text-xl sm:text-2xl text-paper/90 leading-snug max-w-3xl">
                  “Accessibility is not a luxury. It is the prerequisite for human
                  talent to flourish.”
                </p>
              </blockquote>
            </div>
          )}

          {/* ── SLIDE 8: CONCLUSION ─────────────────────────────── */}
          {currentSlideIndex === 7 && (
            <div className="max-w-5xl mx-auto">
              <Kicker>Conclusion · live verification</Kicker>
              <h2 className="font-display font-medium text-[clamp(2rem,3.6vw+2vh,4rem)] text-paper tracking-tight leading-[1.08] mt-6">
                “Learning should adapt to people —<br />
                <em className="italic font-light text-gold">not require people to overcome barriers to access it.”</em>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink-rule border border-ink-rule mt-10">
                {[
                  ["Live Cloud MVP", "Savanna course on Cloud Run with live assistant & audio.", "https://savanna-assistant-303345096403.us-central1.run.app/pages/concept-with-navigation.html", "judge demo"],
                  ["GitHub — ermi", "Submitted source: FastAPI, BM25 retrieval, Docker & widget.", "https://github.com/habibi-code/Savanna-static-pages/tree/ermi", "branch: ermi"],
                  ["OpenAPI 3.0 specs", "Interactive docs for all 18 endpoints across chat & LTI.", "https://savanna-assistant-303345096403.us-central1.run.app/docs", "/docs"],
                  ["Operator help desk", "Real-time ticket queue receiving learner context packets.", "https://savanna-assistant-303345096403.us-central1.run.app/operator/index.html", "/operator"],
                ].map(([t, d, href, tag]) => (
                  <a
                    key={tag}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-ink hover:bg-ink-raised transition-colors p-5 block"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-paper">{t}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-paper/40 group-hover:text-gold transition-colors" />
                    </div>
                    <p className="text-xs text-paper/55 leading-relaxed mt-2">{d}</p>
                    <span className="annotation text-gold mt-3 inline-block">{tag}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="annotation text-gold block mb-1.5">The team</span>
                  <p className="text-sm text-paper/75 font-medium">
                    Ermyas Misiker (Lead) · Habib Seid (Repo Lead) · Eba Mengistu
                    Baisa (Channels) · Roba W. (Prompts)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-ink-rule text-xs font-semibold text-paper hover:bg-ink-raised transition-colors cursor-pointer"
                >
                  Return to the site — Esc
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* ── Shortcuts overlay ───────────────────────────────────── */}
      {showHelp && (
        <div className="absolute bottom-16 right-5 sm:right-8 bg-ink-raised border border-ink-rule px-5 py-4 z-30 max-w-xs slide-enter" role="dialog" aria-label="Keyboard shortcuts">
          <div className="flex items-center justify-between border-b border-ink-rule pb-2.5 mb-3">
            <span className="annotation text-gold">Shortcuts</span>
            <button type="button" onClick={() => setShowHelp(false)} className="text-paper/50 hover:text-paper cursor-pointer" aria-label="Close shortcuts">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <ul className="space-y-2 font-mono text-[11px] text-paper/65">
            {[
              ["Next", "→ or Space"],
              ["Previous", "← or Backspace"],
              ["First / last", "Home / End"],
              ["Fullscreen", "F"],
              ["Exit", "Esc"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-center justify-between gap-6">
                <span>{k}</span>
                <span className="text-gold">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Footer controls ─────────────────────────────────────── */}
      <footer className="px-5 sm:px-8 py-3 border-t border-ink-rule flex items-center justify-between shrink-0">
        <span className="annotation text-paper/60 hidden sm:block">
          Learning without barriers
        </span>

        <div
          className="flex items-center gap-1.5"
          role="group"
          aria-label="Slides"
        >
          {Array.from({ length: TOTAL }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlideIndex(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              aria-current={currentSlideIndex === idx}
              className={`h-1 transition-all cursor-pointer ${
                currentSlideIndex === idx ? "w-7 bg-gold" : "w-3 bg-ink-soft hover:bg-paper/40"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="px-3 py-2 text-xs font-semibold text-paper/70 border border-ink-rule hover:border-paper/40 hover:text-paper disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Prev</span>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            disabled={currentSlideIndex === TOTAL - 1}
            className="px-4 py-2 text-xs font-semibold bg-gold text-ink hover:bg-paper disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            Next
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
