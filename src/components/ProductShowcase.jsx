/**
 * ACT 03 — THE EVIDENCE
 * Screenshots reframed as archival plates. The team's honest capability
 * taxonomy (verified / implemented / prototype) becomes the index of the act.
 */
import { useState } from "react";
import { PRODUCT_SHOWCASE } from "../data/contentData";
import { Reveal, ChapterMark, Plate } from "./ui/primitives";

const TAXONOMY = [
  { id: "all", label: "All capabilities", mark: "—" },
  { id: "Verified working", label: "Verified working", mark: "●" },
  { id: "Implemented but not live-verified", label: "Implemented, not live-verified", mark: "◐" },
  { id: "Prototype", label: "Prototype", mark: "○" },
];

const markFor = (status) =>
  status === "Verified working" ? "●" : status === "Prototype" ? "○" : "◐";

export default function ProductShowcase({ onSelectImage }) {
  const [filter, setFilter] = useState("all");
  const plates = PRODUCT_SHOWCASE.filter((p) => filter === "all" || p.status === filter);

  return (
    <section id="evidence" aria-label="The evidence" className="bg-paper-dim/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <ChapterMark
          numeral="03"
          act="Act 03 — The Evidence"
          title="Nothing here is promised. Everything here is filed."
        />

        {/* The honest index — a ledger, not badges */}
        <Reveal className="mt-14 border border-rule bg-paper-raised">
          <div className="px-5 py-3 border-b border-rule flex items-center justify-between">
            <span className="annotation text-forest">Capability index</span>
            <span className="font-mono text-[10px] text-muted">
              {PRODUCT_SHOWCASE.length} exhibits filed
            </span>
          </div>
          <ul className="divide-y divide-rule">
            {PRODUCT_SHOWCASE.map((item, i) => (
              <li key={item.id} className="px-5 py-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-[11px] text-muted tabular-nums w-7 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className={`font-mono text-xs w-4 shrink-0 ${
                    item.status === "Verified working" ? "text-forest-bright" : "text-gold-deep"
                  }`}
                  title={item.status}
                >
                  {markFor(item.status)}
                </span>
                <span className="text-sm text-body flex-1 min-w-[16rem]">
                  {item.title}
                </span>
                <span className="annotation text-muted">{item.status}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Filter — styled as ledger tabs */}
        <Reveal className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter exhibits">
          {TAXONOMY.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setFilter(t.id)}
              aria-pressed={filter === t.id}
              className={`inline-flex items-center gap-2 font-mono text-xs px-4 py-2 border transition-colors cursor-pointer ${
                filter === t.id
                  ? "border-forest bg-forest text-paper"
                  : "border-rule text-muted hover:text-forest hover:border-forest"
              }`}
            >
              <span aria-hidden="true">{t.mark}</span>
              {t.label}
            </button>
          ))}
        </Reveal>

        {/* Plates */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {plates.map((item, i) => (
            <Plate
              key={item.id}
              number={String(i + 1).padStart(2, "0")}
              source={item.status}
              src={item.screenshot}
              alt={item.screenshotAlt}
              caption={item.tagline}
              meta={item.evidence?.[0]}
              onSelectImage={onSelectImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
