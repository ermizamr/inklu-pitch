/**
 * AssetLicensesModal — the provenance record. Set like a registry
 * document: hairline rules, mono annotations, stamped assurance.
 */
import { useEffect } from "react";
import { ASSET_LICENSES } from "../data/contentData";
import { X, ExternalLink } from "lucide-react";
import { Stamp } from "./ui/primitives";

export default function AssetLicensesModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="licenses-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/90"
      onClick={onClose}
    >
      <div
        className="slide-enter relative max-w-3xl w-full max-h-[85vh] bg-paper text-body overflow-hidden border border-rule flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-5 sm:px-6 py-4 border-b border-rule bg-paper-dim/60">
          <div>
            <span className="annotation text-forest block">
              Registry · provenance
            </span>
            <h2
              id="licenses-modal-title"
              className="font-display font-medium text-xl sm:text-2xl text-ink mt-1"
            >
              Asset licenses &amp; provenance record
            </h2>
            <p className="text-xs text-muted mt-1">
              Permissive open-source software and authentic project assets.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-muted hover:text-ink transition-colors cursor-pointer shrink-0"
            aria-label="Close licenses modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-5 sm:px-6 py-5 space-y-5">
          <div className="border-l-2 border-gold-deep pl-4 text-xs leading-relaxed text-body">
            <strong className="font-semibold text-ink block mb-1">
              Source-of-truth &amp; authenticity policy
            </strong>
            All visual product representations shown on this website are
            authentic, unedited screenshots and video recordings from the
            submitted hackathon repository branch{" "}
            <code className="font-mono text-[11px] text-forest border border-rule bg-paper-raised px-1 py-0.5">
              origin/ermi
            </code>
            . No fictional or AI-generated UI mocks are presented as actual
            application screens.
          </div>

          <ul className="border-t border-rule">
            {ASSET_LICENSES.map((asset, idx) => (
              <li
                key={idx}
                className="py-4 border-b border-rule flex flex-wrap items-start justify-between gap-x-6 gap-y-2"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-[11px] text-muted tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display font-medium text-base text-ink">
                      {asset.name}
                    </h3>
                    <span className="annotation text-gold-deep">
                      {asset.license}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-1.5 leading-relaxed">
                    {asset.purpose}
                  </p>
                  <p className="font-mono text-[10.5px] text-muted mt-1.5">
                    source: {asset.source}
                  </p>
                </div>
                {asset.url.startsWith("http") && (
                  <a
                    href={asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-forest hover:underline shrink-0"
                  >
                    official url
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-rule bg-paper-dim/60 flex flex-wrap items-center justify-between gap-3">
          <Stamp>All licenses permissive</Stamp>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-forest text-paper text-xs font-semibold hover:bg-ink transition-colors cursor-pointer"
          >
            Close record
          </button>
        </div>
      </div>
    </div>
  );
}
