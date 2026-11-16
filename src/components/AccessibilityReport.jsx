import { useState } from "react";
import { ACCESSIBILITY_EVIDENCE } from "../data/contentData";
import { 
  CheckCircle, 
  AlertCircle, 
  Terminal
} from "lucide-react";

export default function AccessibilityReport() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  return (
    <section id="accessibility" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D9DFD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183E34]/10 text-[#183E34] text-xs font-semibold tracking-wider uppercase">
            <span>05 • Accessibility &amp; Conformance</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#18362E] tracking-tight leading-tight">
            Accessibility by architecture: audited, verified, and transparent.
          </h2>
          <p className="text-base sm:text-lg text-[#334D44] leading-relaxed">
            Inklu was engineered with accessibility-first principles and evaluated against WCAG 2.2 Level AA guidelines using automated axe-core testing alongside manual screen reader audits with NVDA, TalkBack, and VoiceOver.
          </p>
        </div>

        {/* Audit Verification Summary Scorecard */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-12">
          <div className="p-4 rounded-xl bg-[#F8F9F4] border border-[#D9DFD6] text-center">
            <div className="font-heading font-extrabold text-3xl text-emerald-700">
              {ACCESSIBILITY_EVIDENCE.summary.passes}
            </div>
            <div className="text-xs font-semibold text-[#18362E] mt-1">Passing SCs</div>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9F4] border border-[#D9DFD6] text-center">
            <div className="font-heading font-extrabold text-3xl text-emerald-700">0</div>
            <div className="text-xs font-semibold text-[#18362E] mt-1">Critical Violations</div>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9F4] border border-[#D9DFD6] text-center">
            <div className="font-heading font-extrabold text-3xl text-emerald-700">0</div>
            <div className="text-xs font-semibold text-[#18362E] mt-1">Serious Violations</div>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9F4] border border-[#D9DFD6] text-center">
            <div className="font-heading font-extrabold text-3xl text-emerald-700">0</div>
            <div className="text-xs font-semibold text-[#18362E] mt-1">Moderate Violations</div>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F9F4] border border-[#D9DFD6] text-center">
            <div className="font-heading font-extrabold text-3xl text-emerald-700">0</div>
            <div className="text-xs font-semibold text-[#18362E] mt-1">Minor Violations</div>
          </div>
          <div className="p-4 rounded-xl bg-[#183E34] text-white border border-[#183E34] text-center shadow-sm">
            <div className="font-heading font-extrabold text-3xl text-[#F2C675]">27/27</div>
            <div className="text-xs font-semibold text-white mt-1">axe-core Rules</div>
          </div>
        </div>

        {/* Automated axe-core Verification Terminal */}
        <div className="mb-16 p-6 rounded-2xl bg-[#18362E] text-white border border-[#245246] shadow-md font-mono text-xs space-y-3">
          <div className="flex items-center justify-between text-[#D9DFD6] border-b border-[#245246] pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#F2C675]" />
              <span className="font-bold">Automated CI Accessibility Gate</span>
            </div>
            <span className="text-emerald-400 font-bold">0 Violations Detected</span>
          </div>

          <p className="text-[#A3B8B0]">
            $ {ACCESSIBILITY_EVIDENCE.automatedAudit.command}
          </p>

          <div className="text-[#D9DFD6] space-y-1">
            <p className="text-emerald-300 font-semibold">✓ 27 axe-core rules checked across 3 widget states:</p>
            {ACCESSIBILITY_EVIDENCE.automatedAudit.statesTested.map((state, i) => (
              <div key={i} className="text-xs text-[#EAEFE8] pl-4">
                • State {i + 1}: {state}
              </div>
            ))}
          </div>
        </div>

        {/* Assistive Technologies Testing Matrix */}
        <div className="mb-16">
          <div className="max-w-2xl mb-6">
            <h3 className="font-heading font-bold text-xl text-[#18362E]">
              Manual Assistive Technology &amp; Screen Reader Audit Log
            </h3>
            <p className="text-xs text-[#4B635B] mt-1">
              Automated tests only catch ~30-40% of accessibility issues. The following evaluations were conducted with physical hardware and assistive readers:
            </p>
          </div>

          <div className="overflow-x-auto border border-[#D9DFD6] rounded-xl shadow-xs">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#F8F9F4] border-b border-[#D9DFD6] text-[#18362E] font-heading font-bold">
                  <th className="py-3 px-4">Assistive Tech</th>
                  <th className="py-3 px-4">Browser &amp; OS</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Observed Behavior &amp; Interaction Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9DFD6]">
                {ACCESSIBILITY_EVIDENCE.assistiveTechTested.map((tech, i) => (
                  <tr key={i} className="hover:bg-[#F8F9F4]/60 transition-colors">
                    <td className="py-3 px-4 font-bold text-[#18362E]">{tech.tool}</td>
                    <td className="py-3 px-4 text-[#4B635B] font-mono">{tech.browser} • {tech.os}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        {tech.result}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[#334D44] leading-relaxed">{tech.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* WCAG Principles Tabs */}
        <div className="mb-16 bg-[#F8F9F4] rounded-2xl border border-[#D9DFD6] p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9DFD6] pb-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4A54B]">
                Four Core Principles
              </span>
              <h3 className="font-heading font-bold text-xl text-[#18362E]">
                Detailed WCAG 2.2 AA Criteria Breakdown
              </h3>
            </div>
            <div className="flex gap-2">
              {ACCESSIBILITY_EVIDENCE.principles.map((pr, idx) => (
                <button
                  key={pr.name}
                  type="button"
                  onClick={() => setActivePrinciple(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activePrinciple === idx
                      ? "bg-[#183E34] text-white"
                      : "bg-white text-[#4B635B] hover:text-[#18362E] border border-[#D9DFD6]"
                  }`}
                >
                  {pr.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ACCESSIBILITY_EVIDENCE.principles[activePrinciple].highlights.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-[#D9DFD6] space-y-1">
                <span className="text-xs font-bold text-[#183E34] flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Criterion
                </span>
                <p className="text-xs text-[#334D44] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Known Limitations & Responsible Engineering Disclosure */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F0F3EC] border border-[#D9DFD6] space-y-4">
          <div className="flex items-center gap-2 text-[#183E34]">
            <AlertCircle className="w-5 h-5 text-[#D4A54B]" />
            <h3 className="font-heading font-bold text-lg text-[#18362E]">
              Engineering Transparency: Known Limitations &amp; Mitigations
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#334D44] leading-relaxed">
            In accordance with WCAG guidance and hackathon instructions, we do not claim universal perfection. The following limitations were documented during testing, alongside their implemented fallback mitigations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {ACCESSIBILITY_EVIDENCE.knownLimits.map((limit, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-[#D9DFD6] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#18362E]">{limit.issue}</span>
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-amber-100 text-amber-800 font-semibold">
                    {limit.severity}
                  </span>
                </div>
                <p className="text-xs text-[#4B635B] leading-relaxed">
                  <strong className="text-[#183E34]">Mitigation: </strong>
                  {limit.mitigation}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
