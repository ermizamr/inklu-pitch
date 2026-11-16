/**
 * ACT 02 — THE BRIDGE
 * The solution as a numbered protocol: four moves, real code,
 * mono annotations. Set like a specification sheet, not feature cards.
 */
import { SOLUTION_STEPS } from "../data/contentData";
import { Reveal, ChapterMark, Stamp } from "./ui/primitives";

export default function Solution() {
  return (
    <section id="bridge" aria-label="The bridge — how Inklu works">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <ChapterMark
            numeral="02"
            act="Act 02 — The Bridge"
            title="Four moves, and any course becomes reachable."
          />
          <Reveal delay={200} className="pb-2">
            <Stamp>All four: verified working</Stamp>
          </Reveal>
        </div>

        <ol className="mt-20">
          {SOLUTION_STEPS.map((step, idx) => (
            <li key={step.step}>
              <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-t border-rule group">
                {/* Step number */}
                <div className="lg:col-span-1">
                  <span className="annotation text-gold-deep tabular-nums">
                    {step.step}
                  </span>
                </div>

                {/* Narrative */}
                <div className="lg:col-span-5">
                  <span className="annotation text-muted block mb-3">
                    {step.subtitle}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink leading-tight tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-body max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* The real thing: code as evidence */}
                <div className="lg:col-span-6">
                  <div className="bg-ink rounded-md overflow-hidden border border-ink-rule">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-ink-rule">
                      <span className="annotation text-gold">
                        {String(idx + 1).padStart(2, "0")} · {step.badge}
                      </span>
                      <span className="font-mono text-[10px] text-paper/40">
                        verified
                      </span>
                    </div>
                    <pre className="px-4 py-4 overflow-x-auto">
                      <code className="font-mono text-[12.5px] leading-relaxed text-paper/85 whitespace-pre">
                        {step.code}
                      </code>
                    </pre>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Closing line of the act */}
        <Reveal className="border-t border-rule pt-10">
          <p className="font-display italic text-2xl sm:text-3xl text-forest max-w-3xl leading-snug">
            100% portable — proven inside Savanna, and outside it, on an empty
            page with nothing but one script tag.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
