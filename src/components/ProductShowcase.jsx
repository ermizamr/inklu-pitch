import { useState } from "react";
import { PRODUCT_SHOWCASE } from "../data/contentData";
import { 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Compass, 
  ZoomIn, 
  ExternalLink, 
  Info
} from "lucide-react";

export default function ProductShowcase({ onSelectImage }) {
  const [filter, setFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "All Capabilities" },
    { id: "Verified working", label: "Verified Working" },
    { id: "Implemented but not live-verified", label: "Implemented (Backend)" },
    { id: "Prototype", label: "Prototypes" },
  ];

  const filteredShowcase = filter === "all" 
    ? PRODUCT_SHOWCASE 
    : PRODUCT_SHOWCASE.filter(item => item.status === filter);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Verified working":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified Working
          </span>
        );
      case "Implemented but not live-verified":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-300">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            Implemented (Not Live-Verified)
          </span>
        );
      case "Prototype":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Prototype
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-300">
            <Compass className="w-3.5 h-3.5 text-purple-600" />
            Roadmap
          </span>
        );
    }
  };

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D9DFD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183E34]/10 text-[#183E34] text-xs font-semibold tracking-wider uppercase">
            <span>03 • Product Showcase</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#18362E] tracking-tight leading-tight">
            Ground truth: verified capabilities from our submitted codebase.
          </h2>
          <p className="text-base sm:text-lg text-[#334D44] leading-relaxed">
            Every screen and capability below is grounded in our submitted Hackathon implementation (branch: <code className="text-[#183E34] font-mono font-bold bg-[#EAEFE8] px-1.5 py-0.5 rounded">ermi</code>). We maintain a strict boundary between what is live-verified, implemented at the API level, and future roadmap.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-16 border-b border-[#D9DFD6] pb-4">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === opt.id
                  ? "bg-[#183E34] text-white shadow-xs"
                  : "bg-[#F8F9F4] text-[#4B635B] hover:text-[#18362E] hover:bg-[#EAEFE8] border border-[#D9DFD6]"
              }`}
            >
              {opt.label}
            </button>
          ))}
          <span className="text-xs text-[#4B635B] ml-auto hidden sm:inline">
            Showing {filteredShowcase.length} of {PRODUCT_SHOWCASE.length} capabilities
          </span>
        </div>

        {/* Alternating Showcase Items */}
        <div className="space-y-24">
          {filteredShowcase.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Media Column (Screenshot & Viewer) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="rounded-2xl border border-[#D9DFD6] bg-[#F8F9F4] overflow-hidden shadow-lg group relative">
                    {/* Browser / Canvas Header */}
                    <div className="px-4 py-3 bg-[#18362E] text-white flex items-center justify-between border-b border-[#245246] text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                        <span className="font-mono text-[11px] text-[#D9DFD6] ml-2 truncate max-w-[200px] sm:max-w-none">
                          Savanna Course Host • {item.title}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          onSelectImage({
                            src: item.screenshot,
                            title: item.title,
                            caption: item.screenshotAlt,
                          })
                        }
                        className="inline-flex items-center gap-1 text-[#F2C675] hover:underline font-semibold"
                        title="Click to zoom in"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Zoom</span>
                      </button>
                    </div>

                    {/* Screenshot Display */}
                    <div className="relative bg-[#122822]/5 p-2">
                      <img
                        src={item.screenshot}
                        alt={item.screenshotAlt}
                        className="w-full h-auto rounded-lg object-contain cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
                        onClick={() =>
                          onSelectImage({
                            src: item.screenshot,
                            title: item.title,
                            caption: item.screenshotAlt,
                          })
                        }
                      />
                    </div>

                    {/* Secondary Screenshot Thumbnail if present */}
                    {item.secondaryScreenshot && (
                      <div className="p-3 bg-[#F0F3EC] border-t border-[#D9DFD6] flex items-center justify-between">
                        <span className="text-[11px] text-[#4B635B] font-medium">
                          Related Verified Screen:
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            onSelectImage({
                              src: item.secondaryScreenshot,
                              title: `${item.title} (Alternate View)`,
                              caption: item.secondaryAlt,
                            })
                          }
                          className="inline-flex items-center gap-1.5 text-xs text-[#183E34] font-bold hover:underline"
                        >
                          <span>Inspect Companion Screen</span>
                          <ExternalLink className="w-3 h-3 text-[#183E34]" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Narrative Column */}
                <div
                  className={`lg:col-span-5 space-y-5 text-left ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {getStatusBadge(item.status)}
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#18362E] leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#D4A54B]">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#334D44] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Concrete Evidence List */}
                  <div className="p-4 rounded-xl bg-[#F8F9F4] border border-[#D9DFD6] space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#183E34] block">
                      Concrete Evidence from Submitted Branch
                    </span>
                    <ul className="space-y-1.5">
                      {item.evidence.map((ev, i) => (
                        <li key={i} className="text-xs text-[#18362E] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Detail Tag */}
                  <div className="text-xs text-[#4B635B] bg-[#EAEFE8] px-3 py-2 rounded-lg border border-[#D9DFD6] flex items-start gap-2">
                    <Info className="w-3.5 h-3.5 text-[#183E34] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#18362E]">Tech: </strong>
                      {item.technicalDetail}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
