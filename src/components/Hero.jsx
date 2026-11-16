/**
 * ACT 00 — THE PROMISE
 * The product's core trick is demonstrated in the first second:
 * the headline itself switches language in place. No browser chrome,
 * no dotted grids — editorial confidence on paper.
 */
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Tv } from "lucide-react";
import { BRAND } from "../data/contentData";
import { Reveal, Stamp } from "./ui/primitives";

const Github = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const HEADLINES = [
  {
    lang: "en",
    text: (
      <>
        Learning without <em className="font-light italic">barriers.</em>
      </>
    ),
  },
  {
    lang: "am",
    text: <>ያለ ምንም እንቅፋት መማር።</>,
  },
];

const LANGUAGES = [
  "English", "አማርኛ", "Afaan Oromoo", "ትግርኛ", "Soomaali", "العربية", "Kiswahili", "Français",
];

const EVIDENCE = [
  { value: "8", label: "Languages, in place" },
  { value: "14.2 KB", label: "Drop-in widget" },
  { value: "27/27", label: "axe-core rules passing" },
  { value: "0", label: "Medical proofs demanded" },
];

export default function Hero({ onOpenPresentation }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (!auto || reduceMotion.current) return undefined;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % HEADLINES.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [auto]);

  const pin = (i) => {
    setAuto(false);
    setActive(i);
  };

  return (
    <section id="promise" aria-label="The promise" className="relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 pb-14">
        {/* Record row */}
        <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="annotation text-muted">
            Digital Bridge Accessibility Hackathon · 2026 · Track 3
          </span>
          <Stamp>WCAG 2.2 AA — Audited</Stamp>
        </Reveal>

        {/* The headline that translates itself */}
        <h1
          className="font-display font-medium text-ink tracking-tight leading-[1.02] text-[13.5vw] sm:text-7xl lg:text-[6.5rem] max-w-5xl mt-10 sm:mt-14"
          style={{ textWrap: "balance" }}
        >
          <span className="line-mask is-in">
            <span>
              <span className="lang-swap" lang={HEADLINES[active].lang}>
                {HEADLINES.map((h, i) => (
                  <span
                    key={h.lang}
                    lang={h.lang}
                    data-active={active === i}
                    aria-hidden={active !== i}
                    className={h.lang === "am" ? "font-ethiopic font-medium" : ""}
                  >
                    {h.text}
                  </span>
                ))}
              </span>
            </span>
          </span>
        </h1>

        {/* Language pins — the visitor controls the swap */}
        <Reveal
          delay={150}
          className="mt-5 flex items-center gap-2"
          role="group"
          aria-label="Headline language"
        >
          {HEADLINES.map((h, i) => (
            <button
              key={h.lang}
              type="button"
              onClick={() => pin(i)}
              aria-pressed={active === i}
              className={`font-mono text-xs px-3 py-1.5 border transition-colors cursor-pointer ${
                active === i
                  ? "border-forest bg-forest text-paper"
                  : "border-rule text-muted hover:text-forest hover:border-forest"
              }`}
            >
              {h.lang === "en" ? "EN" : "አማ"}
            </button>
          ))}
          <span className="annotation text-muted ml-2 hidden sm:inline">
            — the course page does this, in place, live
          </span>
        </Reveal>

        {/* One sentence, then actions */}
        <Reveal delay={250}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-body">
            Inklu is an accessibility companion embedded into existing learning
            platforms — grounding answers in the course itself, translating it
            into the learner's language, and reaching a human when it matters.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href={BRAND.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 bg-forest text-paper font-semibold text-sm px-6 py-3.5 rounded-md transition-colors hover:bg-ink"
            >
              Launch the live MVP
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={onOpenPresentation}
              className="group inline-flex items-center gap-3 text-sm font-semibold text-forest cursor-pointer"
            >
              <Tv className="w-4 h-4" />
              <span className="border-b border-forest/30 group-hover:border-forest transition-colors pb-0.5">
                Watch the pitch deck
              </span>
              <kbd className="kbd kbd-light">P</kbd>
            </button>
            <a
              href={BRAND.branchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-forest transition-colors"
              title="Submitted code, branch ermi"
            >
              <Github />
              source/ermi
            </a>
          </div>
        </Reveal>

        {/* Evidence strip */}
        <Reveal delay={350}>
          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 border-y border-rule">
            {EVIDENCE.map((e, i) => (
              <div
                key={e.label}
                className={`py-5 pr-6 ${i !== 0 ? "sm:border-l sm:border-rule sm:pl-6" : ""}`}
              >
                <dt className="annotation text-muted order-2 mt-1">{e.label}</dt>
                <dd className="font-display text-3xl font-medium text-ink tabular-nums order-1">
                  {e.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Language ribbon: eight tongues, one line */}
      <div className="ribbon border-y border-rule overflow-hidden py-3.5 bg-paper-dim/60" aria-label="Supported languages">
        <div className="ribbon-track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex items-center shrink-0"
            >
              {LANGUAGES.map((l) => (
                <li
                  key={`${copy}-${l}`}
                  className="annotation text-forest/80 flex items-center whitespace-nowrap"
                  lang={/[\u1200-\u137F\u0600-\u06FF]/.test(l) ? (l === "العربية" ? "ar" : "am") : undefined}
                >
                  <span className="px-6">{l}</span>
                  <span aria-hidden="true" className="text-gold-deep">·</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
