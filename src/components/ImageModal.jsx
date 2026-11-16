/**
 * ImageModal — the enlarged plate. Archival framing: numbered header,
 * hairline rules, provenance footer. No rounded cards, no blur.
 */
import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/90"
      onClick={onClose}
    >
      <div
        className="slide-enter relative max-w-5xl w-full max-h-[90vh] bg-paper text-body overflow-hidden border border-rule flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Plate header */}
        <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-rule bg-paper-dim/60">
          <div className="min-w-0">
            <span className="annotation text-forest block">Enlarged plate</span>
            <h3
              id="image-modal-title"
              className="font-display font-medium text-lg text-ink leading-tight truncate mt-0.5"
            >
              {image.title || "Product screenshot"}
            </h3>
            {image.caption && (
              <p className="text-xs text-muted mt-0.5">{image.caption}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-muted hover:text-ink transition-colors cursor-pointer shrink-0"
            aria-label="Close zoomed image modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* The plate itself */}
        <div className="overflow-auto p-4 sm:p-6 flex items-center justify-center bg-ink max-h-[75vh]">
          <img
            src={image.src}
            alt={image.alt || "High resolution screenshot of Inklu"}
            className="max-w-full max-h-[70vh] object-contain bg-white border border-ink-rule"
          />
        </div>

        {/* Provenance footer */}
        <div className="px-5 py-2.5 border-t border-rule bg-paper-dim/60 flex flex-wrap items-center justify-between gap-2">
          <span className="annotation text-muted">
            Authentic unedited capture · Savanna course host demo
          </span>
          <a
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-forest hover:underline"
          >
            open original file
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
