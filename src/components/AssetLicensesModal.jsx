import { useEffect } from "react";
import { ASSET_LICENSES } from "../data/contentData";
import { X, ExternalLink, ShieldCheck, FileText } from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#18362E]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full max-h-[85vh] bg-[#FFFFFF] rounded-2xl shadow-2xl overflow-hidden border border-[#D9DFD6] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#D9DFD6] bg-[#F8F9F4]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#183E34] text-[#F2C675] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="licenses-modal-title" className="font-heading font-bold text-xl text-[#18362E]">
                Asset Licenses &amp; Provenance Record
              </h2>
              <p className="text-xs text-[#4B635B] mt-0.5">
                Permissive Open-Source Software and Authentic Project Assets
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#18362E] hover:bg-[#EAEFE8] transition-colors focus-visible:outline-[#183E34]"
            aria-label="Close licenses modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-4">
          <div className="p-4 rounded-xl bg-[#F0F3EC] border border-[#D9DFD6] text-xs text-[#18362E] leading-relaxed">
            <strong className="font-bold text-[#183E34] block mb-1">
              Source of Truth &amp; Authenticity Policy:
            </strong>
            All visual product representations shown on this website are authentic, unedited
            screenshots and video recordings from the submitted Hackathon repository branch (
            <code className="text-[#183E34] font-mono bg-[#FFFFFF] px-1 py-0.5 rounded border border-[#D9DFD6]">
              origin/ermi
            </code>
            ). No fictional or AI-generated UI mocks are presented as actual application screens.
          </div>

          <div className="divide-y divide-[#D9DFD6]/70 border border-[#D9DFD6] rounded-xl overflow-hidden">
            {ASSET_LICENSES.map((asset, idx) => (
              <div key={idx} className="p-4 bg-white hover:bg-[#F8F9F4]/60 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-semibold text-sm text-[#18362E] flex items-center gap-2">
                      {asset.name}
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-medium bg-[#183E34]/10 text-[#183E34] border border-[#183E34]/20">
                        {asset.license}
                      </span>
                    </h3>
                    <p className="text-xs text-[#4B635B] mt-1">{asset.purpose}</p>
                    <div className="mt-2 text-[11px] text-[#4B635B]/80 font-mono">
                      Source: {asset.source}
                    </div>
                  </div>
                  {asset.url.startsWith("http") && (
                    <a
                      href={asset.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#183E34] hover:underline flex items-center gap-1 shrink-0 font-medium"
                    >
                      Official URL <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F8F9F4] border-t border-[#D9DFD6] flex items-center justify-between text-xs text-[#4B635B]">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% Permissive Licenses Compliant
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#183E34] text-white text-xs font-semibold rounded-lg hover:bg-[#123028] transition-colors"
          >
            Close Record
          </button>
        </div>
      </div>
    </div>
  );
}
