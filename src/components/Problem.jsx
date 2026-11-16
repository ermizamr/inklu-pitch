import { PROBLEM_PILLARS } from "../data/contentData";
import { Languages, EyeOff, LogOut, Quote, AlertTriangle, CheckCircle } from "lucide-react";

export default function Problem() {
  const getIcon = (id) => {
    switch (id) {
      case "language":
        return <Languages className="w-6 h-6 text-[#183E34]" />;
      case "visual-cognitive":
        return <EyeOff className="w-6 h-6 text-[#183E34]" />;
      case "friction":
        return <LogOut className="w-6 h-6 text-[#183E34]" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-[#183E34]" />;
    }
  };

  return (
    <section id="problem" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D9DFD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183E34]/10 text-[#183E34] text-xs font-semibold tracking-wider uppercase">
            <span>01 • The Problem</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#18362E] tracking-tight leading-tight">
            The hidden tax on potential: why online learning fails when it ignores human difference.
          </h2>
          <p className="text-base sm:text-lg text-[#334D44] leading-relaxed">
            When learners struggle on an educational platform, platforms usually assume the student lacked aptitude.
            The reality is far simpler: the platform imposed linguistic, sensory, and cognitive hurdles that made
            comprehension unnecessarily arduous.
          </p>
        </div>

        {/* Narrative Storytelling Sequence (3 Sequential Chapters) */}
        <div className="space-y-12">
          {PROBLEM_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 rounded-2xl bg-[#F8F9F4] border border-[#D9DFD6] hover:border-[#183E34]/40 transition-colors"
            >
              {/* Left Pillar Indicator */}
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#D9DFD6] flex items-center justify-center shadow-xs">
                    {getIcon(pillar.id)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#D4A54B] tracking-widest uppercase">
                      Chapter 0{idx + 1}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-[#18362E] leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 rounded bg-[#EAEFE8] text-[#183E34] text-xs font-semibold">
                  {pillar.category}
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#D9DFD6] text-xs text-[#334D44] leading-relaxed italic">
                  <Quote className="w-4 h-4 text-[#D4A54B] mb-1.5 inline mr-1" />
                  {pillar.quote}
                </div>
              </div>

              {/* Right Pillar Narrative Body */}
              <div className="lg:col-span-8 space-y-4 text-left">
                <p className="text-base sm:text-lg text-[#18362E] leading-relaxed font-normal">
                  {pillar.description}
                </p>

                <div className="p-4 rounded-xl bg-[#FFFFFF] border-l-4 border-l-[#183E34] border-[#D9DFD6] space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#183E34] block">
                    Observed Practical Impact
                  </span>
                  <p className="text-sm text-[#334D44] font-medium leading-relaxed">
                    {pillar.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Reality Comparison Grid */}
        <div className="mt-16 p-8 rounded-2xl bg-[#18362E] text-[#F8F9F4] border border-[#245246] shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-[#F2C675] font-mono text-xs uppercase tracking-widest font-semibold block mb-1">
              Architectural Imperative
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight text-white">
              Why traditional band-aids fail: Cosmetic Accessibility vs. Grounded Pedagogical Companion
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="p-6 rounded-xl bg-[#122822] border border-[#245246] space-y-3">
              <div className="flex items-center gap-2 text-red-300 font-bold uppercase tracking-wide text-xs">
                <AlertTriangle className="w-4 h-4" /> Traditional Overlays &amp; External AI
              </div>
              <ul className="space-y-2.5 text-[#D9DFD6] text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Superficial visual tweaks (font enlargement) that ignore comprehension and language barriers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>External consumer LLMs generate ungrounded answers with zero awareness of course syllabus or rubric.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Requires learners to leave the LMS, breaking study momentum and isolating student progress.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Demands invasive medical proof or disability disclosure for basic accommodations.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#1F4439] border border-[#F2C675]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#F2C675] font-bold uppercase tracking-wide text-xs">
                <CheckCircle className="w-4 h-4" /> The Inklu Architecture
              </div>
              <ul className="space-y-2.5 text-[#F8F9F4] text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#F2C675] font-bold">✓</span>
                  <span>Drop-in 14.2 KB widget embedded directly into course pages with zero LMS code alterations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F2C675] font-bold">✓</span>
                  <span>Course-grounded RAG retrieves verified syllabus sections with clickable deep link citations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F2C675] font-bold">✓</span>
                  <span>In-situ dynamic DOM translation into Amharic, Oromo, and Tigrinya without leaving the tab.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F2C675] font-bold">✓</span>
                  <span>Dignified, no-barrier accommodations: zero medical history demanded or stored.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
