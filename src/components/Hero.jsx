import { useState } from "react";
import { 
  Tv, 
  ZoomIn, 
  ChevronDown,
  Sparkles,
  Languages,
  Accessibility,
  BookOpenCheck,
  ExternalLink
} from "lucide-react";
import { BRAND } from "../data/contentData";

const Github = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero({ onOpenPresentation, onSelectImage }) {
  const [activePreviewTab, setActivePreviewTab] = useState("tutor");

  const previewScreens = {
    tutor: {
      title: "Course-Grounded AI Tutor & Citations",
      description: "Direct section citations linking back to lesson headings, with localized Ethiopian examples.",
      image: "/assets/screenshots/Screenshot (413).png",
      alt: "Inklu Assistant providing an Ethiopian context example with direct citation [concept-with-navigation_up-next].",
      badge: "Cited AI Tutoring",
      hotspot: "Direct Citation to Lesson Heading",
    },
    translation: {
      title: "Real-Time In-Situ Course Translation",
      description: "Host course translated directly into Amharic without requiring students to leave the LMS.",
      image: "/assets/screenshots/Screenshot (415).png",
      alt: "Host course completely translated into Amharic: 'የቨርቹዋል ረዳት ሥራዎችን የወደፊት ዕጣ ፈንታ እየቀረጸ ያለው ምንድን ነው?'",
      badge: "DOM Translation",
      hotspot: "474 Persistent Translated Terms",
    },
    onboarding: {
      title: "Dignified Accessibility Onboarding",
      description: "Sensory and cognitive accommodation profiles chosen without demanding medical history or proof.",
      image: "/assets/screenshots/Screenshot (410).png",
      alt: "Accessibility Accommodations selection modal with 5 sensory and motor options.",
      badge: "No-Barrier Accommodations",
      hotspot: "Zero Medical Proof Required",
    },
  };

  const currentPreview = previewScreens[activePreviewTab];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#D9DFD6]">
      {/* Background Subtle Grid Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(#183E34 0.75px, transparent 0.75px)",
          backgroundSize: "28px 28px"
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Narrative & Pitch Hero Copy */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Hackathon Track Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183E34]/10 border border-[#183E34]/20 text-[#183E34] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A54B]" />
              <span>Digital Bridge Accessibility Hackathon 2026</span>
              <span className="text-[#4B635B]">•</span>
              <span className="font-bold">Track 3</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[3.5rem] text-[#18362E] tracking-tight leading-[1.12] sm:leading-[1.08]">
                Learning without <br className="sm:hidden" />
                <span className="text-[#183E34] relative inline-block">
                  barriers.
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full h-3 text-[#F2C675]"
                    viewBox="0 0 100 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 8C25 2 75 2 100 8"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="font-ethiopic text-lg sm:text-xl text-[#4B635B] font-medium">
                ያለ ምንም እንቅፋት መማር — ለሁሉም ተማሪዎች
              </p>
            </div>

            {/* Supporting Pitch Narrative */}
            <p className="text-base sm:text-lg text-[#334D44] leading-relaxed max-w-xl font-normal">
              An accessibility companion that helps learners understand course content in the language and format they need.
              Embedded directly into existing learning platforms with zero re-architecture, designed with accessibility-first principles and evaluated with automated axe-core testing and assistive screen readers.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={BRAND.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F2C675] text-[#18362E] font-bold text-sm hover:bg-[#E5B860] shadow-md hover:shadow-lg transition-all focus-visible:outline-[#183E34] cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>Launch Live MVP Demo</span>
                <ExternalLink className="w-4 h-4 text-[#18362E]" />
              </a>

              <button
                type="button"
                onClick={onOpenPresentation}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#183E34] text-[#F8F9F4] font-bold text-sm hover:bg-[#123028] shadow-md hover:shadow-lg transition-all focus-visible:outline-[#183E34] cursor-pointer"
              >
                <Tv className="w-4 h-4 text-[#F2C675]" />
                <span>Pitch Mode</span>
                <kbd className="px-1.5 py-0.5 bg-[#122822] text-[#F2C675] text-[10px] rounded font-mono border border-[#245246]">
                  P
                </kbd>
              </button>

              <a
                href={BRAND.branchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white text-[#18362E] font-mono font-semibold text-xs border border-[#D9DFD6] hover:bg-[#EAEFE8] shadow-xs transition-all focus-visible:outline-[#183E34]"
                title="View Submitted Code on GitHub (branch: ermi)"
              >
                <Github className="w-4 h-4 text-[#183E34]" />
                <span>GitHub (ermi)</span>
                <ExternalLink className="w-3 h-3 text-[#4B635B]" />
              </a>
            </div>

            {/* Grounded Trust Bar */}
            <div className="pt-4 border-t border-[#D9DFD6]/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="font-heading font-extrabold text-xl text-[#18362E]">8</div>
                <div className="text-xs text-[#4B635B] font-medium leading-tight">National &amp; Regional Languages</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-xl text-[#18362E]">14.2 KB</div>
                <div className="text-xs text-[#4B635B] font-medium leading-tight">Plain JS Widget Embed</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-xl text-[#18362E]">27 / 27</div>
                <div className="text-xs text-[#4B635B] font-medium leading-tight">axe-core Rules Passing</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-xl text-[#18362E]">0 Proof</div>
                <div className="text-xs text-[#4B635B] font-medium leading-tight">Medical Verification Demanded</div>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Redesigned Product Showcase */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-[#D9DFD6] shadow-xl overflow-hidden">
              
              {/* Product Frame Header (No dev URLs, no branch labels) */}
              <div className="bg-[#18362E] px-4 py-3 flex items-center justify-between border-b border-[#245246] text-white">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block"></span>
                  </div>
                  <span className="text-xs font-medium text-[#D9DFD6] ml-2 hidden sm:inline">
                    Savanna Academy • Inklu Accessibility Companion
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F2C675]/20 text-[#F2C675] text-[11px] font-semibold">
                    {currentPreview.badge}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onSelectImage({
                        src: currentPreview.image,
                        title: currentPreview.title,
                        caption: currentPreview.description,
                      })
                    }
                    className="p-1 text-white hover:text-[#F2C675] transition-colors rounded"
                    title="Zoom in full screenshot"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Interactive Showcase Tabs */}
              <div className="bg-[#F8F9F4] border-b border-[#D9DFD6] px-4 py-2 flex items-center gap-2 overflow-x-auto text-xs">
                <button
                  type="button"
                  onClick={() => setActivePreviewTab("tutor")}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
                    activePreviewTab === "tutor"
                      ? "bg-[#183E34] text-white shadow-xs"
                      : "bg-white text-[#4B635B] hover:text-[#18362E] border border-[#D9DFD6]"
                  }`}
                >
                  <BookOpenCheck className="w-3.5 h-3.5" />
                  <span>AI Tutor &amp; Citations</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePreviewTab("translation")}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
                    activePreviewTab === "translation"
                      ? "bg-[#183E34] text-white shadow-xs"
                      : "bg-white text-[#4B635B] hover:text-[#18362E] border border-[#D9DFD6]"
                  }`}
                >
                  <Languages className="w-3.5 h-3.5" />
                  <span>Amharic Translation</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePreviewTab("onboarding")}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 shrink-0 ${
                    activePreviewTab === "onboarding"
                      ? "bg-[#183E34] text-white shadow-xs"
                      : "bg-white text-[#4B635B] hover:text-[#18362E] border border-[#D9DFD6]"
                  }`}
                >
                  <Accessibility className="w-3.5 h-3.5" />
                  <span>Dignified Onboarding</span>
                </button>
              </div>

              {/* High-Resolution Screenshot Media Display */}
              <div className="relative bg-[#122822]/5 p-3 group">
                <img
                  src={currentPreview.image}
                  alt={currentPreview.alt}
                  className="w-full h-auto max-h-[460px] object-contain rounded-xl border border-[#D9DFD6] shadow-sm cursor-pointer transition-transform duration-300 group-hover:scale-[1.005]"
                  onClick={() =>
                    onSelectImage({
                      src: currentPreview.image,
                      title: currentPreview.title,
                      caption: currentPreview.description,
                    })
                  }
                />

                {/* Hotspot Floating Callout */}
                <div className="absolute bottom-6 right-6 bg-[#18362E]/90 text-white backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-[#245246] shadow-lg hidden sm:flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F2C675] animate-ping"></span>
                  <span>{currentPreview.hotspot}</span>
                </div>
              </div>

              {/* Showcase Caption Bar */}
              <div className="px-5 py-3.5 bg-white border-t border-[#D9DFD6] flex flex-wrap items-center justify-between gap-3 text-xs text-[#334D44]">
                <div>
                  <strong className="text-[#183E34]">{currentPreview.title}: </strong>
                  <span>{currentPreview.description}</span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onSelectImage({
                      src: currentPreview.image,
                      title: currentPreview.title,
                      caption: currentPreview.description,
                    })
                  }
                  className="text-[#183E34] hover:underline font-bold flex items-center gap-1 shrink-0"
                >
                  <span>Zoom Full Screen</span>
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <a
            href="#problem"
            className="group inline-flex flex-col items-center gap-1.5 text-xs font-medium text-[#4B635B] hover:text-[#183E34] transition-colors focus-visible:outline-[#183E34]"
          >
            <span>Explore the problem narrative</span>
            <div className="w-8 h-8 rounded-full border border-[#D9DFD6] bg-white group-hover:bg-[#EAEFE8] flex items-center justify-center transition-transform group-hover:translate-y-0.5">
              <ChevronDown className="w-4 h-4 text-[#183E34]" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
