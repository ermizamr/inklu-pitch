/**
 * Masthead — a thin editorial header. The chapter rail (Spine) carries
 * navigation on desktop; the masthead carries identity and actions.
 */
import { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { BRAND } from "../data/contentData";
import { ACTS } from "../data/acts";

export default function Navbar({ onOpenPresentation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 bg-paper ${
        isScrolled ? "border-b border-rule" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-6">
        {/* Identity */}
        <a href="#promise" className="flex items-baseline gap-3 shrink-0">
          <span className="font-display text-2xl font-medium text-ink leading-none">
            Inklu<span className="text-gold-deep">.</span>
          </span>
          <span className="annotation text-muted hidden sm:inline">
            Learning without barriers
          </span>
        </a>

        {/* Desktop: acts as quiet links */}
        <nav aria-label="Chapters" className="hidden lg:flex items-center gap-6">
          {ACTS.slice(1).map((a) => (
            <a
              key={a.id}
              href={a.href}
              className="annotation text-muted hover:text-forest transition-colors inline-block py-2 -my-2"
            >
              <span className="text-gold-deep mr-1.5">{a.numeral}</span>
              {a.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={BRAND.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-forest text-paper text-xs font-semibold px-4 py-2.5 rounded-md hover:bg-ink transition-colors"
          >
            Live MVP
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            type="button"
            onClick={onOpenPresentation}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-forest cursor-pointer"
          >
            <span className="border-b border-forest/30 hover:border-forest transition-colors pb-0.5">
              Pitch deck
            </span>
            <kbd className="kbd kbd-light">P</kbd>
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-ink border border-rule cursor-pointer"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu: the acts */}
      {open && (
        <nav aria-label="Chapters" className="lg:hidden border-t border-rule bg-paper px-5 py-4">
          <ul>
            {ACTS.slice(1).map((a) => (
              <li key={a.id} className="border-b border-rule last:border-b-0">
                <a
                  href={a.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-3"
                >
                  <span className="font-mono text-xs text-gold-deep">{a.numeral}</span>
                  <span className="font-display text-lg text-ink">{a.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href={BRAND.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-forest text-paper text-xs font-semibold px-4 py-3 rounded-md"
            >
              Live MVP
            </a>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onOpenPresentation();
              }}
              className="flex-1 text-center border border-forest text-forest text-xs font-semibold px-4 py-3 rounded-md cursor-pointer"
            >
              Pitch deck
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
