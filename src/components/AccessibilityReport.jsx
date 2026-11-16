/**
 * ACT 04 — THE PROOF (part two)
 * The WCAG 2.2 AA result rendered as a conformance certificate:
 * a stamped PASS, four principle ledgers, and the honest limits.
 */
import { ACCESSIBILITY_EVIDENCE } from "../data/contentData";
import { Reveal, ChapterMark, Stamp } from "./ui/primitives";

export default function AccessibilityReport() {
  const s = ACCESSIBILITY_EVIDENCE.summary;

  return (
    <section id="proof" aria-label="Accessibility proof" className="border-t border-rule">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <ChapterMark
          numeral="04"
          act="Act 04 — The Proof, continued"
          title="Accessibility, audited — not asserted."
        />

        {/* Certificate header */}
        <Reveal className="mt-14 border-2 border-forest">
          <div className="px-6 sm:px-10 py-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="annotation text-muted">
                {ACCESSIBILITY_EVIDENCE.standard} · Evaluated {ACCESSIBILITY_EVIDENCE.date}
              </span>
              <p className="font-display text-4xl sm:text-5xl font-medium text-ink mt-3 tabular-nums">
                {s.passes} <span className="font-light italic">criteria passing</span>
              </p>
              <p className="font-mono text-xs text-muted mt-2">
                {ACCESSIBILITY_EVIDENCE.automatedAudit.engine} · 0 violations across
                initial load, active conversation, and escalation dialog
              </p>
            </div>
            <div className="rotate-[-4deg] border-4 border-forest-bright text-forest-bright px-5 py-3">
              <span className="font-display text-3xl font-bold tracking-wide">PASS</span>
              <span className="annotation block text-[9px] mt-1">conformance</span>
            </div>
          </div>

          {/* Violation ledger */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-rule">
            {[
              ["Critical", s.criticalViolations],
              ["Serious", s.seriousViolations],
              ["Moderate", s.moderateViolations],
              ["Minor", s.minorViolations],
            ].map(([label, v], i) => (
              <div
                key={label}
                className={`px-6 py-5 ${i !== 0 ? "sm:border-l sm:border-rule" : ""}`}
              >
                <span className="font-display text-3xl text-ink tabular-nums">{v}</span>
                <span className="annotation text-muted block mt-1">{label} violations</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Four principles as ledger columns */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
          {ACCESSIBILITY_EVIDENCE.principles.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-4xl font-light text-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-medium text-ink">{p.name}</h3>
              </div>
              <ul className="mt-5 space-y-4 border-t border-rule pt-5">
                {p.highlights.map((h) => (
                  <li key={h} className="text-sm leading-relaxed text-body flex gap-3">
                    <span aria-hidden="true" className="text-gold-deep font-display leading-none mt-0.5">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* Assistive technology table */}
        <Reveal className="mt-20">
          <span className="annotation text-forest block mb-5">
            Tested with the tools learners actually use
          </span>
          <div className="overflow-x-auto border border-rule">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-rule bg-paper-dim/60">
                  {["Tool", "Browser", "Platform", "Result"].map((h) => (
                    <th key={h} className="annotation text-muted text-left px-5 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ACCESSIBILITY_EVIDENCE.assistiveTechTested.map((t) => (
                  <tr key={t.tool} className="border-b border-rule last:border-b-0">
                    <td className="px-5 py-3.5 font-semibold text-ink">{t.tool}</td>
                    <td className="px-5 py-3.5 font-mono text-xs text-muted">{t.browser}</td>
                    <td className="px-5 py-3.5 font-mono text-xs text-muted">{t.os}</td>
                    <td className="px-5 py-3.5"><Stamp>Pass</Stamp></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Honest limits — disclosed, not buried */}
        <Reveal className="mt-14 border-l-2 border-gold-deep pl-6">
          <span className="annotation text-gold-ink block mb-4">
            Known limits, disclosed
          </span>
          <ul className="space-y-5 max-w-3xl">
            {ACCESSIBILITY_EVIDENCE.knownLimits.map((l) => (
              <li key={l.issue} className="text-sm leading-relaxed text-body">
                <span className="font-semibold text-ink">{l.issue}</span>
                <span className="font-mono text-[10px] text-muted ml-2 uppercase">
                  {l.severity}
                </span>
                <span className="block text-muted mt-1">{l.mitigation}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
