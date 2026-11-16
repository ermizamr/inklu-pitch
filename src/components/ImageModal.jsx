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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#18362E]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-[#FFFFFF] rounded-2xl shadow-2xl overflow-hidden border border-[#D9DFD6] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D9DFD6] bg-[#F8F9F4]">
          <div>
            <h3 id="image-modal-title" className="font-heading font-bold text-lg text-[#18362E]">
              {image.title || "Product Screenshot"}
            </h3>
            {image.caption && (
              <p className="text-xs text-[#4B635B] mt-0.5">{image.caption}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#18362E] hover:bg-[#EAEFE8] transition-colors focus-visible:outline-[#183E34]"
            aria-label="Close zoomed image modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Content Container */}
        <div className="overflow-auto p-4 flex items-center justify-center bg-[#122822]/5 max-h-[75vh]">
          <img
            src={image.src}
            alt={image.alt || "High resolution screenshot of Inklu"}
            className="max-w-full max-h-[70vh] object-contain rounded-lg border border-[#D9DFD6] shadow-md"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#F8F9F4] border-t border-[#D9DFD6] flex items-center justify-between text-xs text-[#4B635B]">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Authentic Unedited Capture • Savanna Course Host Demo
          </span>
          <a
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#183E34] hover:underline font-semibold"
          >
            Open Original File <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
