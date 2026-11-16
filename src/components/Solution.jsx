import { useState } from "react";
import { SOLUTION_STEPS } from "../data/contentData";
import { 
  Puzzle, 
  Binary, 
  Languages, 
  Ear, 
  ArrowRight, 
  Code2, 
  Check, 
  Copy, 
  ShieldCheck
} from "lucide-react";

export default function Solution() {
  const [activeStep, setActiveStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const stepIcons = [
    <Puzzle className="w-5 h-5 text-[#183E34]" key="puzzle" />,
    <Binary className="w-5 h-5 text-[#183E34]" key="binary" />,
    <Languages className="w-5 h-5 text-[#183E34]" key="languages" />,
    <Ear className="w-5 h-5 text-[#183E34]" key="ear" />,
  ];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="solution" className="py-20 lg:py-28 bg-[#F8F9F4] border-b border-[#D9DFD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183E34]/10 text-[#183E34] text-xs font-semibold tracking-wider uppercase">
            <span>02 • The Solution</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#18362E] tracking-tight leading-tight">
            Seamless integration: from host LMS to dignified learner autonomy in four verified steps.
          </h2>
          <p className="text-base sm:text-lg text-[#334D44] leading-relaxed">
            Inklu operates as a non-invasive layer over existing platforms. Rather than replacing Canvas, Moodle, or custom LMSs like Savanna, it injects context-aware accessibility into the learner’s view with zero infrastructure migration.
          </p>
        </div>

        {/* LMS -> Inklu -> Learner Support Flow Diagram */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#D9DFD6] shadow-sm">
          <div className="text-xs font-mono uppercase tracking-widest text-[#4B635B] font-semibold mb-6 flex items-center justify-between">
            <span>Live Integration Flow Architecture</span>
            <span className="text-[#183E34] font-bold">100% Client &amp; API Compatible</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Stage 1 */}
            <div className="p-4 rounded-xl bg-[#F8F9F4] border border-[#D9DFD6] relative">
              <div className="w-8 h-8 rounded-lg bg-[#183E34] text-[#F2C675] flex items-center justify-center font-heading font-bold text-sm mb-3">
                1
              </div>
              <h4 className="font-heading font-bold text-sm text-[#18362E]">Host LMS Platform</h4>
              <p className="text-xs text-[#4B635B] mt-1">
                Savanna, Canvas, or Moodle loads course HTML &amp; syllabus chunks.
              </p>
              <div className="mt-3 text-[10px] font-mono text-[#183E34] bg-white px-2 py-1 rounded border border-[#D9DFD6]">
                &lt;db-assistant&gt;
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-4 rounded-xl bg-[#F8F9F4] border border-[#D9DFD6] relative">
              <div className="w-8 h-8 rounded-lg bg-[#183E34] text-[#F2C675] flex items-center justify-center font-heading font-bold text-sm mb-3">
                2
              </div>
              <h4 className="font-heading font-bold text-sm text-[#18362E]">Curriculum Grounding</h4>
              <p className="text-xs text-[#4B635B] mt-1">
                POST /api/v1/content indexes sections via Okapi BM25 engine.
              </p>
              <div className="mt-3 text-[10px] font-mono text-[#183E34] bg-white px-2 py-1 rounded border border-[#D9DFD6]">
                Headings &amp; Anchors
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-4 rounded-xl bg-[#F8F9F4] border border-[#D9DFD6] relative">
              <div className="w-8 h-8 rounded-lg bg-[#183E34] text-[#F2C675] flex items-center justify-center font-heading font-bold text-sm mb-3">
                3
              </div>
              <h4 className="font-heading font-bold text-sm text-[#18362E]">Inklu Engine</h4>
              <p className="text-xs text-[#4B635B] mt-1">
                Translates DOM, synthesizes speech, and evaluates cognitive load.
              </p>
              <div className="mt-3 text-[10px] font-mono text-[#183E34] bg-white px-2 py-1 rounded border border-[#D9DFD6]">
                a11y-engine.js
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-4 rounded-xl bg-[#183E34] text-white border border-[#183E34] relative shadow-md">
              <div className="w-8 h-8 rounded-lg bg-[#F2C675] text-[#183E34] flex items-center justify-center font-heading font-bold text-sm mb-3">
                4
              </div>
              <h4 className="font-heading font-bold text-sm text-white">Learner Autonomy</h4>
              <p className="text-xs text-[#D9DFD6] mt-1">
                Native voice, Switch nav, Simple Mode, and Telegram help.
              </p>
              <div className="mt-3 text-[10px] font-mono text-[#F2C675] bg-[#122822] px-2 py-1 rounded border border-[#245246]">
                WCAG 2.2 AA Pass
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Deep Dive Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selection List */}
          <div className="lg:col-span-5 space-y-3">
            {SOLUTION_STEPS.map((step, idx) => (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                  activeStep === idx
                    ? "bg-white border-[#183E34] shadow-md ring-1 ring-[#183E34]"
                    : "bg-[#F8F9F4] border-[#D9DFD6] hover:bg-white hover:border-[#4B635B]"
                }`}
                aria-pressed={activeStep === idx}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                    activeStep === idx
                      ? "bg-[#183E34] text-[#F2C675] border-[#183E34]"
                      : "bg-white text-[#18362E] border-[#D9DFD6]"
                  }`}
                >
                  {stepIcons[idx]}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#D4A54B]">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#18362E]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#4B635B] line-clamp-1">{step.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Details & Code Contract Preview */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#D9DFD6] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#D9DFD6] pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#D4A54B]">
                  Step {SOLUTION_STEPS[activeStep].step}
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#18362E]">
                  {SOLUTION_STEPS[activeStep].title}
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {SOLUTION_STEPS[activeStep].badge}
              </span>
            </div>

            <p className="text-base text-[#334D44] leading-relaxed">
              {SOLUTION_STEPS[activeStep].description}
            </p>

            {/* Code / Verification Snippet Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#4B635B]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Code2 className="w-3.5 h-3.5 text-[#183E34]" />
                  Verified Implementation Code / Data Contract
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyCode(SOLUTION_STEPS[activeStep].code)}
                  className="flex items-center gap-1 text-[#183E34] hover:underline cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy snippet</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-[#18362E] text-[#F8F9F4] font-mono text-xs overflow-x-auto leading-relaxed border border-[#245246]">
                <code>{SOLUTION_STEPS[activeStep].code}</code>
              </pre>
            </div>

            <div className="p-4 rounded-xl bg-[#F0F3EC] border border-[#D9DFD6] flex items-center justify-between text-xs text-[#18362E]">
              <span className="font-medium">
                Tested against Savanna concept-with-navigation.html and external blank.html host.
              </span>
              <a href="#showcase" className="font-bold text-[#183E34] hover:underline flex items-center gap-1">
                See Live Screenshot <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
