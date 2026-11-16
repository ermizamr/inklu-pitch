/**
 * ACT 04 — THE PROOF (part one)
 * Architecture as a blueprint spread: dark paper, layer index on the
 * left, the selected layer's contract on the right. Mono, precise.
 */
import { useState } from "react";
import { TECHNICAL_ARCHITECTURE } from "../data/contentData";
import { Reveal, ChapterMark } from "./ui/primitives";

export default function Architecture() {
  const [selected, setSelected] = useState(0);
  const layer = TECHNICAL_ARCHITECTURE.layers[selected];

  return (
    <section id="architecture" aria-label="Architecture" className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <ChapterMark
          numeral="04"
          act="Act 04 — The Proof"
          title="Engineered for the infrastructure that actually exists."
          dark
        />

        <Reveal>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-paper/75">
            {TECHNICAL_ARCHITECTURE.overview}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 border border-ink-rule">
          {/* Layer index */}
          <Reveal className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-ink-rule">
            <ol>
              {TECHNICAL_ARCHITECTURE.layers.map((l, i) => (
                <li key={l.name}>
                  <button
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-pressed={selected === i}
                    className={`w-full text-left px-5 py-4 border-b border-ink-rule last:border-b-0 transition-colors cursor-pointer ${
                      selected === i
                        ? "bg-ink-raised"
                        : "hover:bg-ink-raised/60"
                    }`}
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className={`font-mono text-[11px] tabular-nums ${
                          selected === i ? "text-gold" : "text-paper/60"
                        }`}
                      >
                        L{i + 1}
                      </span>
                      <span>
                        <span
                          className={`block text-sm font-semibold ${
                            selected === i ? "text-paper" : "text-paper/70"
                          }`}
                        >
                          {l.name}
                        </span>
                        <span className="block font-mono text-[10.5px] text-paper/60 mt-0.5">
                          {l.tech}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Selected layer contract */}
          <Reveal delay={120} className="lg:col-span-7 p-6 sm:p-10">
            <span className="annotation text-gold">
              Layer {String(selected + 1).padStart(2, "0")} — {layer.tech}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium mt-3">
              {layer.name}
            </h3>

            <span className="annotation text-paper/50 block mt-8 mb-4">
              Responsibilities
            </span>
            <ul className="space-y-3">
              {layer.responsibilities.map((r) => (
                <li key={r} className="flex gap-3 text-sm leading-relaxed text-paper/80">
                  <span aria-hidden="true" className="text-gold font-display leading-none mt-0.5">→</span>
                  {r}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-ink-rule">
              <span className="annotation text-paper/50 block mb-2">Why this choice</span>
              <p className="font-display italic text-lg text-paper/85 leading-snug">
                {layer.whyChosen}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {layer.files.map((f) => (
                <span
                  key={f}
                  className="font-mono text-[10.5px] text-gold/90 border border-ink-rule px-2.5 py-1"
                >
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
