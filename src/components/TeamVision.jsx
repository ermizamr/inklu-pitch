/**
 * ACT 05 — THE PEOPLE
 * A team ledger verified by commit history, the honest roadmap,
 * and the manifesto close on dark paper.
 */
import { TEAM_MEMBERS } from "../data/contentData";
import { Reveal, ChapterMark, Stamp, KbdChip } from "./ui/primitives";

const ROADMAP = [
  {
    title: "Multi-party WebRTC session archiving",
    detail: "Consent-driven recording of live tutor sessions for audits and operator training.",
  },
  {
    title: "USSD shortcode access — *804#",
    detail: "Course deadlines and grading thresholds on basic 2G feature phones, no internet required.",
  },
  {
    title: "Bi-directional gradebook sync",
    detail: "Grade reporting into Canvas and Moodle via LTI 1.3 Assignment and Grade Services.",
  },
];

export default function TeamVision({ onOpenPresentation }) {
  return (
    <section id="people" aria-label="The people" className="border-t border-rule">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <ChapterMark
          numeral="05"
          act="Act 05 — The People"
          title="Four people, verified by their commits."
        />

        <Reveal className="mt-6 max-w-2xl text-base leading-relaxed text-body">
          Every member below is a confirmed contributor in the submitted
          repository's git history. No invented credentials, no inflated claims —
          the same honesty the product applies to its capability taxonomy.
        </Reveal>

        {/* Team ledger */}
        <div className="mt-14 border-t border-rule">
          {TEAM_MEMBERS.map((m, i) => (
            <Reveal key={m.github} delay={i * 60}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8 border-b border-rule">
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-[11px] text-muted tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink leading-tight">
                      {m.name}
                    </h3>
                    <a
                      href={`https://github.com/${m.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-forest hover:underline"
                    >
                      @{m.github}
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <span className="annotation text-muted block mb-1.5">Role</span>
                  <span className="text-sm text-body">{m.role}</span>
                </div>
                <div className="lg:col-span-1">
                  <span className="annotation text-muted block mb-1.5">Commits</span>
                  <span className="font-display text-xl text-ink tabular-nums">{m.commits}</span>
                </div>
                <div className="lg:col-span-4">
                  <span className="annotation text-muted block mb-1.5">Filed contributions</span>
                  <ul className="space-y-1.5">
                    {m.contributions.slice(0, 3).map((c) => (
                      <li key={c} className="text-xs leading-relaxed text-muted flex gap-2">
                        <span aria-hidden="true" className="text-gold-deep">·</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Roadmap horizon */}
        <Reveal className="mt-16">
          <span className="annotation text-gold-deep">Horizon — what comes next</span>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROADMAP.map((r) => (
              <div key={r.title} className="border-t border-rule pt-5">
                <span aria-hidden="true" className="font-mono text-gold-deep">○</span>
                <h4 className="font-display text-lg font-medium text-ink mt-2 leading-snug">
                  {r.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed mt-2">{r.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Manifesto close */}
      <div className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-36 text-center">
          <Reveal>
            <p className="font-ethiopic text-gold text-lg sm:text-xl" lang="am">
              ትምህርቱ ሰዎችን ይስማማ — ሰዎች እንቅፋቶችን እንዲያልፉ አይጠይቅም።
            </p>
            <p className="font-display font-medium text-4xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-5xl mx-auto mt-6">
              Learning should adapt to people — <em className="italic font-light">not require people to overcome barriers to access it.</em>
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <button
              type="button"
              onClick={onOpenPresentation}
              className="inline-flex items-center gap-3 bg-gold text-ink font-semibold text-sm px-7 py-4 rounded-md hover:bg-paper transition-colors cursor-pointer"
            >
              Open the pitch deck
              <KbdChip keys={["P"]} dark />
            </button>
            <Stamp tone="paper">ህዳር 2018 · November 2026 · Addis Ababa</Stamp>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
