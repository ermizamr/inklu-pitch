/**
 * Shared primitives for the "Barrier Is the Design" language.
 * Small, dependency-free, reduced-motion aware.
 */
import { useInView } from "./useInView";

/* Reveal: children rise through the threshold once, then stay. */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ChapterMark: every act opens the same way — a rule, a numeral, a name. */
export function ChapterMark({ numeral, act, title, mirror, dark = false }) {
  return (
    <Reveal className={`max-w-3xl ${dark ? "text-paper" : ""}`}>
      <div
        className={`flex items-baseline gap-4 ${dark ? "text-gold" : "text-forest"}`}
      >
        <span className="font-display text-5xl sm:text-6xl font-light leading-none tabular-nums">
          {numeral}
        </span>
        <span className="annotation pt-1">{act}</span>
      </div>
      <h2
        className={`font-display font-medium text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-6 ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {mirror ? (
        <p
          className={`font-ethiopic text-lg sm:text-xl mt-4 ${
            dark ? "text-gold/90" : "text-forest-bright"
          }`}
          lang="am"
        >
          {mirror}
        </p>
      ) : null}
      <div
        aria-hidden="true"
        className={`mt-8 h-px w-full ${dark ? "bg-ink-rule" : "bg-rule"}`}
      />
    </Reveal>
  );
}

/* Stamp: verification is part of the design language, not a green pill. */
export function Stamp({ tone = "forest", children }) {
  const tones = {
    forest: "text-forest",
    gold: "text-gold-deep",
    paper: "text-gold",
    muted: "text-muted",
  };
  return <span className={`stamp ${tones[tone] ?? tones.forest}`}>{children}</span>;
}

/* Plate: screenshots are archival evidence — numbered, captioned, sourced. */
export function Plate({ number, source, src, alt, caption, meta, onSelectImage, dark = false }) {
  const open = () =>
    onSelectImage?.({ src, title: caption, caption: meta ?? source });
  return (
    <Reveal
      className={`group border ${dark ? "border-ink-rule bg-ink-raised" : "border-rule bg-paper-raised"}`}
    >
      <div
        className={`flex items-center justify-between gap-3 px-4 py-2.5 border-b ${
          dark ? "border-ink-rule" : "border-rule"
        }`}
      >
        <span className={`annotation ${dark ? "text-gold" : "text-forest"}`}>
          Pl. {number}
        </span>
        <span className={`annotation ${dark ? "text-paper/60" : "text-muted"}`}>
          {source}
        </span>
      </div>
      <button
        type="button"
        onClick={open}
        className={`block w-full cursor-zoom-in p-3 sm:p-4 text-left ${
          dark ? "focus-dark" : ""
        }`}
        aria-label={`Enlarge plate ${number}: ${caption}`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto object-contain max-h-[420px] border border-rule/70 bg-white transition-transform duration-500 group-hover:scale-[1.012]"
        />
      </button>
      <div
        className={`px-4 py-3 border-t text-sm leading-relaxed ${
          dark ? "border-ink-rule text-paper/80" : "border-rule text-body"
        }`}
      >
        {caption}
        {meta ? (
          <span className={`block mt-1 text-xs ${dark ? "text-paper/50" : "text-muted"}`}>
            {meta}
          </span>
        ) : null}
      </div>
    </Reveal>
  );
}

/* KbdChip: labelled keyboard shortcut. */
export function KbdChip({ keys, label, dark = false }) {
  return (
    <span className="inline-flex items-center gap-2">
      {keys.map((k, i) => (
        <kbd key={`${k}-${i}`} className={`kbd ${dark ? "" : "kbd-light"}`}>
          {k}
        </kbd>
      ))}
      {label ? (
        <span className={`annotation ${dark ? "text-paper/70" : "text-muted"}`}>
          {label}
        </span>
      ) : null}
    </span>
  );
}
