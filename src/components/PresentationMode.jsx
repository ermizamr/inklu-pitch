import { useState, useEffect, useRef, useCallback } from "react";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize, 
  HelpCircle, 
  ExternalLink
} from "lucide-react";

const Github = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function PresentationMode({ isOpen, onClose }) {
  const totalSlides = 8;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const s = parseInt(params.get("slide"), 10);
      if (!isNaN(s) && s >= 1 && s <= 8) {
        return s - 1;
      }
    }
    return 0;
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const containerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

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

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;

      switch (e.key) {
        case "ArrowRight":
        case " ": // Space
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
          setCurrentSlideIndex(totalSlides - 1);
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
  }, [isOpen, nextSlide, prevSlide, totalSlides, onClose, toggleFullscreen]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Inklu Pitch Presentation Mode"
      className="pitch-shell fixed inset-0 z-50 bg-[#091713] text-[#F8F9F4] select-none font-body"
      style={{
        backgroundImage: "radial-gradient(circle at 70% 35%, rgba(24, 62, 52, 0.48) 0%, rgba(9, 23, 19, 0.98) 75%)",
      }}
    >
      {/* ── Top Header Navigation Bar (Row 1: auto) ───────────────── */}
      <header className="px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#183E34]/40 bg-[#091713]/90 backdrop-blur-md z-10">
        {/* Left Meta Tag */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-[#F2C675] font-semibold uppercase">
            [ INKLU ] • 2026
          </span>
          <span className="text-[#3E5C52] text-xs">•</span>
          <span className="text-xs font-mono text-[#A2B5AD] uppercase tracking-wider hidden sm:inline">
            Digital Bridge Hackathon • Track 3
          </span>
        </div>

        {/* Center Minimal Slide Number Indicator */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#A2B5AD]">
          <span className="text-[#F2C675] font-bold">0{currentSlideIndex + 1}</span>
          <span className="text-[#3E5C52]">/</span>
          <span>0{totalSlides}</span>
        </div>

        {/* Right Icon Controls & Quick Links */}
        <div className="flex items-center gap-2">
          <a
            href="https://savanna-assistant-303345096403.us-central1.run.app/pages/concept-with-navigation.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F2C675] text-[#18362E] text-xs font-bold hover:bg-[#E5B860] transition-colors shadow-xs"
            title="Launch Live Cloud Run MVP Demo"
          >
            <span>Live MVP</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <a
            href="https://github.com/habibi-code/Savanna-static-pages/tree/ermi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F2822] text-[#F8F9F4] text-xs font-mono hover:bg-[#183E34] border border-[#245246] transition-colors"
            title="View Submitted Code on GitHub (branch: ermi)"
          >
            <Github className="w-3.5 h-3.5 text-[#F2C675]" />
            <span>GitHub</span>
          </a>

          <div className="hidden sm:block w-px h-5 bg-[#183E34] mx-1"></div>

          <button
            type="button"
            onClick={() => setShowHelp(!showHelp)}
            className="p-2 rounded-lg text-[#A2B5AD] hover:text-white hover:bg-[#183E34]/60 transition-colors"
            title="Keyboard shortcuts (?)"
            aria-label="Show shortcuts"
          >
            <HelpCircle className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2 rounded-lg text-[#A2B5AD] hover:text-white hover:bg-[#183E34]/60 transition-colors"
            title="Toggle fullscreen (F)"
            aria-label="Toggle full screen"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#A2B5AD] hover:text-white hover:bg-[#183E34]/60 transition-colors ml-1"
            title="Exit presentation (Escape)"
            aria-label="Exit pitch presentation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ── Slide Canvas Container (Row 2: minmax(0, 1fr)) ──────────── */}
      <main className="pitch-main pitch-scroll flex flex-col px-4 sm:px-8 lg:px-12 py-3 sm:py-5 w-full">
        <div className="w-full max-w-7xl mx-auto my-auto py-2">
        
          {/* ── SLIDE 1: VISION / HERO ───────────────────────────── */}
          {currentSlideIndex === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#F2C675] font-bold">
                    Vision &amp; Mandate • 2026
                  </span>
                  <h1 className="font-heading font-extrabold text-[clamp(2.25rem,3.4vw+2vh,4.25rem)] text-[#F8F9F4] tracking-tight leading-[0.98]">
                    <span>Learning</span>
                    <br />
                    <span className="text-[#F2C675]">Without</span>
                    <br />
                    <span>Barriers.</span>
                  </h1>
                  <p className="font-ethiopic text-lg sm:text-xl text-[#A2B5AD] font-medium pt-0.5">
                    ያለ ምንም እንቅፋት መማር — ለሁሉም ተማሪዎች
                  </p>
                </div>

                {/* Clean Editorial Description on Dark Background */}
                <div className="space-y-2 border-l-2 border-[#F2C675] pl-4 sm:pl-5 py-0.5 max-w-xl">
                  <p className="font-heading font-semibold text-lg sm:text-xl text-[#F8F9F4] leading-snug">
                    An accessibility companion embedded directly into course pages.
                  </p>
                  <p className="text-sm sm:text-base text-[#A2B5AD] leading-relaxed">
                    Helps learners understand technical curricula in the language and sensory format they need—with zero host LMS re-architecture.
                  </p>
                </div>

                {/* Metrics Row */}
                <div className="flex flex-wrap items-center gap-6 pt-1 text-xs font-mono text-[#A2B5AD]">
                  <div>
                    <span className="text-[#F2C675] font-bold text-base sm:text-lg block">8 Languages</span>
                    <span className="text-[11px] text-[#A2B5AD]/80">Amharic, Oromo, Tigrinya + Regional</span>
                  </div>
                  <div className="hidden sm:block w-px h-8 bg-[#183E34]"></div>
                  <div>
                    <span className="text-[#F2C675] font-bold text-base sm:text-lg block">14.2 KB</span>
                    <span className="text-[11px] text-[#A2B5AD]/80">Drop-in Plain JavaScript Embed</span>
                  </div>
                </div>
              </div>

              {/* Right: Enlarged & Simplified Product Screenshot */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-xl rounded-2xl bg-[#122822] border border-[#245246] shadow-2xl p-2.5 sm:p-3 overflow-hidden">
                  <div className="bg-[#091713] px-3 sm:px-4 py-2 rounded-lg flex items-center justify-between text-xs mb-2.5 border border-[#183E34]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      <span className="text-[#A2B5AD] font-mono text-[11px] ml-2">Savanna Academy • VA Foundations</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#F2C675]/20 text-[#F2C675] text-[10px] font-bold font-mono">
                      Grounded RAG
                    </span>
                  </div>

                  <img
                    src="/assets/screenshots/Screenshot (413).png"
                    alt="Inklu Assistant live on Savanna course page with Ethiopian context example and citation."
                    className="w-full h-auto max-h-[clamp(260px,44vh,460px)] object-contain object-top rounded-lg border border-[#183E34]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── SLIDE 2: THE PROBLEM ─────────────────────────────── */}
          {currentSlideIndex === 1 && (
            <div className="w-full space-y-6 sm:space-y-8 text-left animate-in fade-in duration-300 max-w-5xl mx-auto">
              <div className="space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-widest text-[#F2C675] font-bold">
                  02 • The Core Problem
                </span>
                <h2 className="font-heading font-extrabold text-[clamp(2rem,3vw+1.8vh,3.75rem)] text-[#F8F9F4] tracking-tight leading-[1.02]">
                  The Invisible Tax <br />
                  <span className="text-[#F2C675]">On Technical Potential.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#A2B5AD] max-w-3xl leading-relaxed">
                  When online platforms teach exclusively in English and present dense, unannotated visuals, learners don’t drop out from lack of aptitude. They drop out from friction.
                </p>
              </div>

              {/* 3 Bold Pain Points Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#0F2822] border border-[#245246] space-y-2">
                  <div className="text-2xl font-heading font-extrabold text-[#F2C675]">01</div>
                  <h3 className="font-heading font-bold text-lg text-white">Linguistic Exile</h3>
                  <p className="text-xs sm:text-sm text-[#A2B5AD] leading-relaxed">
                    85%+ of African tech curricula operate exclusively in English. Non-native speakers spend 40% of their study time decoding sentence grammar rather than mastering skills.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#0F2822] border border-[#245246] space-y-2">
                  <div className="text-2xl font-heading font-extrabold text-[#F2C675]">02</div>
                  <h3 className="font-heading font-bold text-lg text-white">Visual Isolation</h3>
                  <p className="text-xs sm:text-sm text-[#A2B5AD] leading-relaxed">
                    Instructional charts, slides, and code flowcharts lack semantic breakdowns. Blind and low-vision learners hit dead-end image placeholders.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#0F2822] border border-[#245246] space-y-2">
                  <div className="text-2xl font-heading font-extrabold text-[#F2C675]">03</div>
                  <h3 className="font-heading font-bold text-lg text-white">The Broken Loop</h3>
                  <p className="text-xs sm:text-sm text-[#A2B5AD] leading-relaxed">
                    Leaving the LMS to seek translations on Google or YouTube shatters course context, breaks cognitive flow, and hides cohort struggles from instructors.
                  </p>
                </div>
              </div>

              {/* Editorial Callout Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F2EB] text-[#18362E] shadow-xl border border-[#F2C675]/40 flex items-center justify-between gap-6">
                <div className="space-y-0.5">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#D4A54B] font-bold block">
                    The Core Realization
                  </span>
                  <p className="font-heading font-bold text-base sm:text-xl text-[#18362E] leading-snug">
                    “Every time a learner must leave their course to understand a concept, the platform has failed them.”
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ── SLIDE 3: THE SOLUTION ────────────────────────────── */}
          {currentSlideIndex === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
                <div className="space-y-2.5">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#F2C675] font-bold">
                    03 • The Solution
                  </span>
                  <h2 className="font-heading font-extrabold text-[clamp(2rem,3vw+1.8vh,3.75rem)] text-[#F8F9F4] tracking-tight leading-[1.02]">
                    Zero LMS Friction. <br />
                    <span className="text-[#F2C675]">Instant Autonomy.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#A2B5AD] leading-relaxed">
                    Inklu does not ask universities or bootcamps to re-platform. It attaches as a non-invasive, 14.2 KB companion layer directly into the learner’s course view.
                  </p>
                </div>

                {/* Simple Flow: Learner -> LMS -> Inklu -> Support */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#F2C675] uppercase tracking-wider block font-bold">
                    Integration Architecture Pipeline
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-xl bg-[#0F2822] border border-[#245246] text-center">
                      <span className="text-[#F2C675] block font-bold text-sm">01</span>
                      <span className="text-white font-semibold">Learner</span>
                      <span className="text-[10px] text-[#A2B5AD] block mt-0.5">Voice or Text</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0F2822] border border-[#245246] text-center">
                      <span className="text-[#F2C675] block font-bold text-sm">02</span>
                      <span className="text-white font-semibold">Host LMS</span>
                      <span className="text-[10px] text-[#A2B5AD] block mt-0.5">&lt;db-assistant&gt;</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#0F2822] border border-[#245246] text-center">
                      <span className="text-[#F2C675] block font-bold text-sm">03</span>
                      <span className="text-white font-semibold">Inklu RAG</span>
                      <span className="text-[10px] text-[#A2B5AD] block mt-0.5">Section BM25</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#183E34] border border-[#F2C675] text-center shadow-md">
                      <span className="text-[#F2C675] block font-bold text-sm">04</span>
                      <span className="text-white font-semibold">Support</span>
                      <span className="text-[10px] text-[#F2C675] block mt-0.5">Voice / Human</span>
                    </div>
                  </div>
                </div>

                {/* Callout */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F2EB] text-[#18362E] shadow-xl border border-[#F2C675]/40 max-w-lg">
                  <h3 className="font-heading font-bold text-base sm:text-lg leading-snug">
                    100% Pluggable &amp; Portable.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3E5C52] leading-relaxed mt-0.5">
                    Verified inside Savanna course pages and outside on blank HTML hosts with zero external CSS dependencies.
                  </p>
                </div>
              </div>

              {/* Right: Onboarding Language Preference Screenshot */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-xl rounded-2xl bg-[#122822] border border-[#245246] shadow-2xl p-2.5 sm:p-3 overflow-hidden">
                  <div className="bg-[#091713] px-3 sm:px-4 py-2 rounded-lg text-xs font-mono text-[#A2B5AD] mb-2.5 flex items-center justify-between border border-[#183E34]">
                    <span>Onboarding Language Selection</span>
                    <span className="text-[#F2C675] font-bold">8 Native Options</span>
                  </div>
                  <img
                    src="/assets/screenshots/Screenshot (359).png"
                    alt="Inklu Onboarding screen with Amharic, Oromo, Tigrinya, and Arabic options."
                    className="w-full h-auto max-h-[clamp(240px,42vh,420px)] object-contain object-top rounded-lg border border-[#183E34]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── SLIDE 4: PRODUCT SHOWCASE ────────────────────────── */}
          {currentSlideIndex === 3 && (
            <div className="w-full space-y-6 sm:space-y-7 text-left animate-in fade-in duration-300 max-w-6xl mx-auto">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div className="space-y-1.5">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#F2C675] font-bold">
                    04 • Product Ground Truth
                  </span>
                  <h2 className="font-heading font-extrabold text-[clamp(1.75rem,2.6vw+1.5vh,3.25rem)] text-[#F8F9F4] tracking-tight leading-[1.05]">
                    Course-Grounded AI Tutoring With Exact Citations.
                  </h2>
                </div>
                <div className="text-xs font-mono text-[#F2C675] px-3 py-1 rounded-full bg-[#183E34] border border-[#245246]">
                  Verified Live Implementation
                </div>
              </div>

              {/* Dual Layered Screenshots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-center">
                <div className="rounded-2xl bg-[#0F2822] border border-[#245246] p-2.5 sm:p-3 shadow-xl space-y-1.5">
                  <div className="text-xs font-mono text-[#A2B5AD] px-2 flex justify-between">
                    <span>Assistant Interface &amp; Prompt Pills</span>
                    <span className="text-[#F2C675]">Savanna LMS</span>
                  </div>
                  <img
                    src="/assets/screenshots/Screenshot (412).png"
                    alt="Savanna Assistant running alongside course content with starter pills."
                    className="w-full h-auto max-h-[clamp(200px,34vh,340px)] object-contain rounded-lg border border-[#183E34]"
                  />
                </div>

                <div className="rounded-2xl bg-[#0F2822] border border-[#245246] p-2.5 sm:p-3 shadow-xl space-y-1.5">
                  <div className="text-xs font-mono text-[#A2B5AD] px-2 flex justify-between">
                    <span>Cited Lesson Anchor &amp; Local Context</span>
                    <span className="text-emerald-400 font-bold">Verified Citation</span>
                  </div>
                  <img
                    src="/assets/screenshots/Screenshot (413).png"
                    alt="Assistant reply with Ethiopian VA context and direct deep-link citation."
                    className="w-full h-auto max-h-[clamp(200px,34vh,340px)] object-contain rounded-lg border border-[#183E34]"
                  />
                </div>
              </div>

              {/* Bottom Keypoint Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F2EB] text-[#18362E] border border-[#F2C675]/40 flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#D4A54B] font-bold block">
                    Grounding Guarantee
                  </span>
                  <p className="font-heading font-bold text-base sm:text-lg text-[#18362E]">
                    Answers are never hallucinated. Every reply links to the verified syllabus anchor (#section-id).
                  </p>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#183E34] text-[#F2C675] font-mono text-xs font-bold shrink-0">
                  POST /api/v1/ask
                </span>
              </div>
            </div>
          )}

          {/* ── SLIDE 5: ACCESSIBILITY ───────────────────────────── */}
          {currentSlideIndex === 4 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full animate-in fade-in duration-300">
              <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
                <div className="space-y-2.5">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#F2C675] font-bold">
                    05 • Accessibility-First Design
                  </span>
                  <h2 className="font-heading font-extrabold text-[clamp(2rem,3vw+1.8vh,3.75rem)] text-[#F8F9F4] tracking-tight leading-[1.02]">
                    Built For Dignity, <br />
                    <span className="text-[#F2C675]">Not An Afterthought.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-[#A2B5AD] leading-relaxed">
                    Engineered with accessibility-first principles and evaluated with automated axe-core testing and assistive screen readers.
                  </p>
                </div>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-[#0F2822] border border-[#245246] space-y-1">
                    <span className="font-bold text-white block">Switch Scanning</span>
                    <span className="text-[#A2B5AD] text-xs">Press [S] to cycle focus with visible high-contrast outline.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0F2822] border border-[#245246] space-y-1">
                    <span className="font-bold text-white block">Cognitive Simple Mode</span>
                    <span className="text-[#A2B5AD] text-xs">Click [Aa] for plain-language, low-distraction summaries.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0F2822] border border-[#245246] space-y-1">
                    <span className="font-bold text-white block">Screen Reader Audio</span>
                    <span className="text-[#A2B5AD] text-xs">Bilingual navigation earcons &amp; aria-live announcements.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0F2822] border border-[#245246] space-y-1">
                    <span className="font-bold text-white block">Zero Medical Proof</span>
                    <span className="text-[#A2B5AD] text-xs">Accommodations selected without medical history disclosure.</span>
                  </div>
                </div>

                {/* Callout */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F2EB] text-[#18362E] shadow-xl border border-[#F2C675]/40 max-w-lg">
                  <span className="text-xs font-mono font-bold uppercase text-[#D4A54B] block">Audit Evaluation</span>
                  <p className="font-heading font-bold text-sm sm:text-base text-[#18362E]">
                    27/27 automated axe-core rules passing with 0 violations. Verified with NVDA, TalkBack, and VoiceOver.
                  </p>
                </div>
              </div>

              {/* Right: Full Amharic Course Translation Screenshot */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-xl rounded-2xl bg-[#122822] border border-[#245246] shadow-2xl p-2.5 sm:p-3 overflow-hidden space-y-2">
                  <div className="bg-[#091713] px-3 sm:px-4 py-2 rounded-lg text-xs font-mono text-[#A2B5AD] flex items-center justify-between border border-[#183E34]">
                    <span>Live Amharic DOM Course Translation</span>
                    <span className="text-[#F2C675] font-bold">474 Cached Terms</span>
                  </div>
                  <img
                    src="/assets/screenshots/Screenshot (415).png"
                    alt="ALX course page translated entirely into Amharic in real-time."
                    className="w-full h-auto max-h-[clamp(240px,42vh,420px)] object-contain object-top rounded-lg border border-[#183E34]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ── SLIDE 6: ARCHITECTURE ────────────────────────────── */}
          {currentSlideIndex === 5 && (
            <div className="w-full space-y-6 sm:space-y-7 text-left animate-in fade-in duration-300 max-w-5xl mx-auto">
              <div className="space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-widest text-[#F2C675] font-bold">
                  06 • Technical Architecture
                </span>
                <h2 className="font-heading font-extrabold text-[clamp(2rem,3vw+1.8vh,3.75rem)] text-[#F8F9F4] tracking-tight leading-[1.02]">
                  Engineered For <br />
                  <span className="text-[#F2C675]">Resilient Infrastructure.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#A2B5AD] max-w-3xl leading-relaxed">
                  A decoupled multi-container stack running on Docker Compose, engineered to run smoothly on low-bandwidth 3G and memory-constrained 512MB RAM servers.
                </p>
              </div>

              {/* Clean Architecture Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5 sm:gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#0F2822] border border-[#245246] space-y-1.5">
                  <span className="text-xs font-mono text-[#F2C675] font-bold">01 • Client Layer</span>
                  <h4 className="font-heading font-bold text-base text-white">14.2 KB Vanilla JS</h4>
                  <p className="text-xs text-[#A2B5AD] leading-relaxed">
                    &lt;db-assistant&gt; web component + isolated iframe shell. Zero host CSS leakage.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#0F2822] border border-[#245246] space-y-1.5">
                  <span className="text-xs font-mono text-[#F2C675] font-bold">02 • Application</span>
                  <h4 className="font-heading font-bold text-base text-white">FastAPI + OpenAPI</h4>
                  <p className="text-xs text-[#A2B5AD] leading-relaxed">
                    Async Python 3.11 ASGI server powering /api/v1/ask, /translate, and LTI 1.3 Canvas routes.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#0F2822] border border-[#245246] space-y-1.5">
                  <span className="text-xs font-mono text-[#F2C675] font-bold">03 • Retrieval (RAG)</span>
                  <h4 className="font-heading font-bold text-base text-white">Pure-Python BM25</h4>
                  <p className="text-xs text-[#A2B5AD] leading-relaxed">
                    In-memory Okapi BM25 index auto-detects &lt;=512MB RAM to prevent container OOM crashes.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#0F2822] border border-[#245246] space-y-1.5">
                  <span className="text-xs font-mono text-[#F2C675] font-bold">04 • Telemetry &amp; Bots</span>
                  <h4 className="font-heading font-bold text-base text-white">Redis + Telegram</h4>
                  <p className="text-xs text-[#A2B5AD] leading-relaxed">
                    Redis 72h TTL session queues and long-polling Telegram bot for immediate human tutor alerts.
                  </p>
                </div>
              </div>

              {/* Performance Stat Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F2EB] text-[#18362E] border border-[#F2C675]/40 flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#D4A54B] font-bold block">
                    Measured Low-Bandwidth Performance
                  </span>
                  <p className="font-heading font-bold text-base sm:text-lg text-[#18362E]">
                    1.18 seconds time-to-interactive measured on throttled slow 3G mobile connections.
                  </p>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#183E34] text-[#F2C675] font-mono text-xs font-bold shrink-0">
                  Zero Cloud Lock-in
                </span>
              </div>
            </div>
          )}

          {/* ── SLIDE 7: HUMAN IMPACT ────────────────────────────── */}
          {currentSlideIndex === 6 && (
            <div className="w-full space-y-6 sm:space-y-8 text-left animate-in fade-in duration-300 max-w-5xl mx-auto">
              <div className="space-y-2.5">
                <span className="font-mono text-xs uppercase tracking-widest text-[#F2C675] font-bold">
                  07 • Human Impact
                </span>
                <h2 className="font-heading font-extrabold text-[clamp(2rem,3vw+1.8vh,3.75rem)] text-[#F8F9F4] tracking-tight leading-[1.02]">
                  Democratizing <br />
                  <span className="text-[#F2C675]">Technical Opportunity.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#A2B5AD] max-w-3xl leading-relaxed">
                  When you remove linguistic, sensory, and cognitive barriers, you unlock thousands of high-potential creators, engineers, and digital specialists who would otherwise be left behind.
                </p>
              </div>

              {/* Contrast Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div className="p-5 sm:p-6 rounded-2xl bg-[#091713] border border-red-900/40 space-y-2.5">
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest block">
                    Without Inklu
                  </span>
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-white">The Cycle of Disengagement</h4>
                  <ul className="text-xs sm:text-sm text-[#A2B5AD] space-y-2">
                    <li>• High drop-out rates when technical English overwhelms learners.</li>
                    <li>• Blind learners stranded by inaccessible visual diagrams.</li>
                    <li>• Zero instructor visibility into where cohorts are getting stuck.</li>
                  </ul>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#0F2822] border border-[#F2C675]/50 space-y-2.5 shadow-lg">
                  <span className="text-xs font-mono font-bold text-[#F2C675] uppercase tracking-widest block">
                    With Inklu
                  </span>
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-white">Dignified Learner Autonomy</h4>
                  <ul className="text-xs sm:text-sm text-[#F8F9F4] space-y-2">
                    <li>✓ Ask questions and listen in native Amharic or Afaan Oromo.</li>
                    <li>✓ Click citations that take them directly to the exact lesson section.</li>
                    <li>✓ Connect to a human advocate in one click via Telegram or SMS.</li>
                  </ul>
                </div>
              </div>

              {/* Quote Banner */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F0F2EB] text-[#18362E] shadow-xl border border-[#F2C675]/40">
                <p className="font-heading font-extrabold text-xl sm:text-2xl leading-snug">
                  “Accessibility is not a luxury or an afterthought. It is the prerequisite for human talent to flourish.”
                </p>
              </div>
            </div>
          )}

          {/* ── SLIDE 8: CONCLUSION & DEMO ───────────────────────── */}
          {currentSlideIndex === 7 && (
            <div className="w-full space-y-6 sm:space-y-8 text-left animate-in fade-in duration-300 max-w-5xl mx-auto">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#F2C675] font-bold">
                  08 • Conclusion &amp; Live Verification
                </span>
                <h2 className="font-heading font-extrabold text-[clamp(1.75rem,2.8vw+1.6vh,3.25rem)] text-[#F8F9F4] tracking-tight leading-snug">
                  “Learning should adapt to people— <br />
                  <span className="text-[#F2C675]">not require people to overcome barriers to access it.”</span>
                </h2>
              </div>

              {/* Live Verification Links Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {/* Primary Live Demo Card */}
                <a
                  href="https://savanna-assistant-303345096403.us-central1.run.app/pages/concept-with-navigation.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 rounded-2xl bg-[#122822] border-2 border-[#F2C675] hover:bg-[#183E34] transition-all group block space-y-1.5 shadow-lg relative overflow-hidden"
                >
                  <div className="flex items-center justify-between text-[#F2C675]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="font-bold text-sm text-white">Live Cloud MVP</span>
                    </div>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-xs text-[#D9DFD6]">
                    Savanna course module on Cloud Run with live assistant &amp; audio.
                  </p>
                  <span className="inline-block text-[10px] font-mono font-bold text-[#F2C675] bg-[#091713] px-2 py-0.5 rounded border border-[#245246] mt-1">
                    Direct Judge Demo ↗
                  </span>
                </a>

                {/* GitHub Repository Card */}
                <a
                  href="https://github.com/habibi-code/Savanna-static-pages/tree/ermi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 rounded-2xl bg-[#0F2822] border border-[#245246] hover:border-[#F2C675] transition-all group block space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[#F2C675]">
                    <div className="flex items-center gap-1.5">
                      <Github className="w-4 h-4 text-[#F2C675]" />
                      <span className="font-bold text-sm text-white">GitHub (ermi)</span>
                    </div>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-xs text-[#A2B5AD]">
                    Submitted source: FastAPI, BM25 retrieval, Docker &amp; widget.
                  </p>
                  <span className="inline-block text-[10px] font-mono text-[#A2B5AD] bg-[#091713] px-2 py-0.5 rounded border border-[#183E34] mt-1">
                    branch: ermi
                  </span>
                </a>

                {/* OpenAPI Docs Card */}
                <a
                  href="https://savanna-assistant-303345096403.us-central1.run.app/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 rounded-2xl bg-[#0F2822] border border-[#245246] hover:border-[#F2C675] transition-all group block space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[#F2C675]">
                    <span className="font-bold text-sm text-white">OpenAPI 3.0 Specs</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-xs text-[#A2B5AD]">
                    Swagger interactive docs for all 18 endpoints across chat &amp; LTI.
                  </p>
                  <span className="inline-block text-[10px] font-mono text-[#A2B5AD] bg-[#091713] px-2 py-0.5 rounded border border-[#183E34] mt-1">
                    /docs
                  </span>
                </a>

                {/* Operator Desk Card */}
                <a
                  href="https://savanna-assistant-303345096403.us-central1.run.app/operator/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 rounded-2xl bg-[#0F2822] border border-[#245246] hover:border-[#F2C675] transition-all group block space-y-1.5"
                >
                  <div className="flex items-center justify-between text-[#F2C675]">
                    <span className="font-bold text-sm text-white">Operator Live Help</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-xs text-[#A2B5AD]">
                    Real-time ticket queue receiving learner context telemetry.
                  </p>
                  <span className="inline-block text-[10px] font-mono text-[#A2B5AD] bg-[#091713] px-2 py-0.5 rounded border border-[#183E34] mt-1">
                    /operator
                  </span>
                </a>
              </div>

              {/* Team Credits & Exit */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F2EB] text-[#18362E] border border-[#F2C675]/40 flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#D4A54B] font-bold block">
                    Hackathon Team Contributors
                  </span>
                  <p className="font-heading font-bold text-sm sm:text-base text-[#18362E]">
                    Ermias Amare (Lead) • Habib Seid (Repo Lead) • Eba Mengistu Baisa (Channels) • Roba W. (Prompts)
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#183E34] text-white rounded-xl text-xs font-bold hover:bg-[#122822] transition-colors shrink-0"
                >
                  Return to Product Website
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* ── Keyboard Shortcuts Modal ────────────────────────────── */}
      {showHelp && (
        <div className="absolute bottom-20 right-8 p-5 rounded-2xl bg-[#091713] border border-[#245246] shadow-2xl text-xs space-y-3 z-30 max-w-xs animate-in fade-in duration-200">
          <div className="font-heading font-bold text-[#F2C675] border-b border-[#183E34] pb-2 flex items-center justify-between">
            <span>Keynote Shortcuts</span>
            <button
              type="button"
              onClick={() => setShowHelp(false)}
              className="text-[#A2B5AD] hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="space-y-1.5 text-[#D9DFD6] font-mono text-[11px]">
            <div className="flex justify-between"><span>Next Slide:</span> <span className="text-[#F2C675]">→ or Space</span></div>
            <div className="flex justify-between"><span>Prev Slide:</span> <span className="text-[#F2C675]">← or Backspace</span></div>
            <div className="flex justify-between"><span>First / Last:</span> <span className="text-[#F2C675]">Home / End</span></div>
            <div className="flex justify-between"><span>Fullscreen:</span> <span className="text-[#F2C675]">F</span></div>
            <div className="flex justify-between"><span>Exit Mode:</span> <span className="text-[#F2C675]">Escape</span></div>
          </div>
        </div>
      )}

      {/* ── Bottom Controls & Progress Dots (Row 3: auto) ─────────── */}
      <footer className="px-6 sm:px-8 py-3 sm:py-3.5 border-t border-[#183E34]/40 flex items-center justify-between bg-[#091713]/90 backdrop-blur-md z-10">
        {/* Left Subtitle Meta */}
        <div className="text-xs font-mono text-[#A2B5AD] hidden sm:block">
          Digital Bridge Accessibility Hackathon 2026
        </div>

        {/* Center Progress Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlideIndex(idx)}
              className={`rounded-full transition-all cursor-pointer ${
                currentSlideIndex === idx
                  ? "w-8 h-2 bg-[#F2C675]"
                  : "w-2 h-2 bg-[#183E34] hover:bg-[#A2B5AD]"
              }`}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Previous / Next Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
              currentSlideIndex === 0
                ? "opacity-30 border-[#183E34] cursor-not-allowed text-[#3E5C52]"
                : "border-[#245246] bg-[#0F2822] hover:bg-[#183E34] text-white cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            disabled={currentSlideIndex === totalSlides - 1}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all ${
              currentSlideIndex === totalSlides - 1
                ? "opacity-30 border-[#183E34] cursor-not-allowed text-[#3E5C52]"
                : "border-[#F2C675] bg-[#F2C675] hover:bg-[#E5B860] text-[#18362E] cursor-pointer shadow-md"
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}