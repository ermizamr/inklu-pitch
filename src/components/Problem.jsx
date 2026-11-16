/**
 * ACT 01 — THE WALL
 * Three barriers, told as chapters with pull-quotes. Ends in a dark
 * act-break: the ledger of what fails vs. what Inklu does instead.
 */
import { PROBLEM_PILLARS } from "../data/contentData";
import { Reveal, ChapterMark, Stamp } from "./ui/primitives";

export default function Problem() {
  return (
    <section id="wall" aria-label="The wall — the problem">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <ChapterMark
          numeral="01"
          act="Act 01 — The Wall"
          title="Three walls stand between a learner and the lesson."
        />

        <div className="mt-20 space-y-24 lg:space-y-32">
          {PROBLEM_PILLARS.map((pillar, idx) => {
            const flip = idx % 2 === 1;
            return (
              <article
                key={pillar.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14"
              >
                {/* Chapter numeral in the margin */}
                <div className={`lg:col-span-2 ${flip ? "lg:order-2" : ""}`}>
                  <Reveal className="lg:sticky lg:top-28 flex lg:flex-col items-baseline lg:items-start gap-4">
                    <span className="font-display text-7xl lg:text-8xl font-light text-muted leading-none tabular-nums select-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="annotation text-gold-ink">
                      {pillar.category}
                    </span>
                  </Reveal>
                </div>

                {/* Chapter body */}
                <div className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
                  <Reveal>
                    <h3 className="font-display text-3xl sm:text-4xl font-medium text-ink leading-tight tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-6 text-lg leading-relaxed text-body max-w-xl">
                      {pillar.description}
                    </p>
                  </Reveal>
                  <Reveal delay={120}>
                    <p className="mt-6 border-l-2 border-gold pl-5 text-sm leading-relaxed text-muted max-w-xl">
                      <span className="annotation text-forest block mb-1.5">
                        Observed impact
                      </span>
                      {pillar.impact}
                    </p>
                  </Reveal>
                </div>

                {/* Pull quote — the chapter's voice */}
                <div className={`lg:col-span-4 ${flip ? "lg:order-3" : ""}`}>
                  <Reveal delay={180} className="lg:pt-14">
                    <blockquote className="relative pt-8">
                      <span
                        aria-hidden="true"
                        className="absolute top-0 left-0 font-display text-7xl leading-none text-gold select-none"
                      >
                        “
                      </span>
                      <p className="font-display italic text-xl sm:text-2xl leading-snug text-forest">
                        {pillar.quote}
                      </p>
                    </blockquote>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* ---- Act break: the ledger ---- */}
      <div className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
            <span className="annotation text-gold">
              Interlude — Why band-aids fail
            </span>
            <Stamp tone="paper">The honest comparison</Stamp>
          </Reveal>

          <Reveal>
            <h3 className="font-display text-3xl sm:text-5xl font-medium leading-tight tracking-tight max-w-3xl mt-8">
              Cosmetic overlays <em className="italic font-light">tweak</em> a page.
              Inklu <em className="italic font-light">translates</em> the lesson.
            </h3>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 border-t border-ink-rule">
            <Reveal className="py-10 md:pr-14 md:border-r border-ink-rule">
              <span className="annotation text-paper/50">
                Traditional overlays & external AI
              </span>
              <ul className="mt-6 space-y-5">
                {[
                  "Font-size tweaks that ignore language and comprehension entirely.",
                  "Consumer chatbots that hallucinate — no access to the real syllabus.",
                  "Help lives outside the LMS: context lost, flow broken.",
                  "Accommodations gated behind medical proof.",
                ].map((t) => (
                  <li key={t} className="flex gap-4 text-sm leading-relaxed text-paper/75">
                    <span aria-hidden="true" className="font-display text-paper/35 leading-none mt-0.5">✕</span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120} className="py-10 md:pl-14">
              <span className="annotation text-gold">The Inklu architecture</span>
              <ul className="mt-6 space-y-5">
                {[
                  "14.2 KB widget embedded in the course page itself — zero LMS changes.",
                  "Course-grounded retrieval citing the exact syllabus section, with deep links.",
                  "Live DOM translation into Amharic, Oromo, Tigrinya — without leaving the tab.",
                  "Dignified by default: accommodations with zero medical history, ever.",
                ].map((t) => (
                  <li key={t} className="flex gap-4 text-sm leading-relaxed text-paper/90">
                    <span aria-hidden="true" className="font-display text-gold leading-none mt-0.5">→</span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
