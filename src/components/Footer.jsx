/**
 * Colophon — the record-keeping close of the site.
 */
import { BRAND } from "../data/contentData";
import { FileCheck, Tv } from "lucide-react";
import { KbdChip } from "./ui/primitives";

export default function Footer({ onOpenPresentation, onOpenLicenses }) {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-display text-3xl font-medium text-ink leading-none">
              Inklu<span className="text-gold-deep">.</span>
            </p>
            <p className="font-ethiopic text-sm text-muted mt-2" lang="am">
              ያለ ምንም እንቅፋት መማር
            </p>
            <p className="text-sm text-muted mt-4 max-w-sm leading-relaxed">
              A Track 3 submission for the Digital Bridge Accessibility
              Hackathon 2026. Built to be judged — every claim on this page
              links to code, evidence, or a live endpoint.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="annotation text-forest block mb-4">Record</span>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href={BRAND.branchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1.5 font-mono text-xs text-muted hover:text-forest transition-colors"
                >
                  source/ermi — submitted branch
                </a>
              </li>
              <li>
                <a
                  href={BRAND.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1.5 font-mono text-xs text-muted hover:text-forest transition-colors"
                >
                  habibi-code/Savanna-static-pages
                </a>
              </li>
              <li>
                <a
                  href={BRAND.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1.5 font-mono text-xs text-muted hover:text-forest transition-colors"
                >
                  live Cloud Run MVP
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenLicenses}
                  className="font-mono text-xs text-muted hover:text-forest transition-colors inline-flex items-center gap-1.5 py-1.5 cursor-pointer"
                >
                  <FileCheck className="w-3 h-3" />
                  asset licenses & provenance
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="annotation text-forest block mb-4">Keyboard-first, like the product</span>
            <ul className="space-y-3">
              <li><KbdChip keys={["P"]} label="Pitch deck" /></li>
              <li><KbdChip keys={["S"]} label="Single-switch scanning (in the live widget)" /></li>
              <li><KbdChip keys={["Alt", "I"]} label="Describe active image" /></li>
              <li><KbdChip keys={["Space", "Space"]} label="Double-tap for live help" /></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-rule flex flex-wrap items-center justify-between gap-4">
          <span className="annotation text-muted">
            © 2026 · Inklu team · WCAG 2.2 Level AA evaluated
          </span>
          <button
            type="button"
            onClick={onOpenPresentation}
            className="annotation text-forest hover:text-gold-ink transition-colors inline-flex items-center gap-2 py-2 -my-2 cursor-pointer"
          >
            <Tv className="w-3.5 h-3.5" />
            Presenting? Open pitch deck
          </button>
        </div>
      </div>
    </footer>
  );
}
