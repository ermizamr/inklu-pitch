import { TEAM_MEMBERS, BRAND } from "../data/contentData";
import { 
  GitCommit, 
  Quote, 
  ArrowRight, 
  Compass, 
  CheckCircle2
} from "lucide-react";

const Github = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function TeamVision({ onOpenPresentation }) {
  const roadmapItems = [
    {
      title: "Multi-Party WebRTC Video Archiving",
      status: "Roadmap Horizon",
      description: "Secure, consent-driven video and audio archiving of live human tutor sessions for asynchronous accessibility audits and operator training.",
    },
    {
      title: "Direct USSD Shortcode Access (*804#)",
      status: "Roadmap Horizon",
      description: "Allowing learners in rural or non-data regions across Ethiopia to query course deadlines and grading thresholds using basic 2G feature phones without internet.",
    },
    {
      title: "Automated Bi-Directional Gradebook Sync",
      status: "Roadmap Horizon",
      description: "Seamless grade reporting back to Canvas and Moodle gradebooks via LTI 1.3 Assignment and Grade Services (AGS).",
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D9DFD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183E34]/10 text-[#183E34] text-xs font-semibold tracking-wider uppercase">
            <span>07 • Team &amp; Long-Term Vision</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#18362E] tracking-tight leading-tight">
            The team behind Inklu, and the future of dignified learning.
          </h2>
          <p className="text-base sm:text-lg text-[#334D44] leading-relaxed">
            All team members below are confirmed contributors from the submitted repository git commit history. We do not invent credentials or inflate claims.
          </p>
        </div>

        {/* Confirmed Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F8F9F4] border border-[#D9DFD6] hover:border-[#183E34] transition-all shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#183E34] text-[#F2C675] font-heading font-extrabold text-lg flex items-center justify-center border border-[#245246] shadow-xs">
                    {member.avatar}
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#D9DFD6] text-[11px] font-mono text-[#4B635B]">
                    <GitCommit className="w-3 h-3 text-[#183E34]" />
                    <span>{member.commits} commits</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg text-[#18362E]">
                    {member.name}
                  </h3>
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#D4A54B] hover:underline font-mono inline-flex items-center gap-1 mt-0.5"
                  >
                    @{member.github} <Github className="w-2.5 h-2.5" />
                  </a>
                  <p className="text-xs text-[#183E34] font-semibold mt-1">
                    {member.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D9DFD6]/70 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-[#4B635B] tracking-wider block">
                    Verified Repo Contributions
                  </span>
                  <ul className="space-y-1">
                    {member.contributions.slice(0, 3).map((c, i) => (
                      <li key={i} className="text-[11px] text-[#334D44] flex items-start gap-1.5 leading-snug">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#D9DFD6]/60 text-[11px] text-[#4B635B] font-mono">
                Track 3 Contributor
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#183E34] text-white border border-[#245246] shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2C675]/20 text-[#F2C675] border border-[#F2C675]/30 text-xs font-semibold uppercase tracking-wider">
              <Quote className="w-3 h-3" /> Foundational Mandate
            </span>

            <blockquote className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F8F9F4] leading-snug">
              “Learning should adapt to people—not require people to overcome barriers to access it.”
            </blockquote>

            <p className="text-sm sm:text-base text-[#D9DFD6] leading-relaxed pt-2">
              Whether a student is a non-English speaker in rural Oromia, a visually impaired programmer in Addis Ababa using NVDA, or a working adult relying on low-bandwidth 3G, education must meet them where they stand.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenPresentation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F2C675] text-[#183E34] font-bold text-xs hover:bg-[#E5B860] transition-colors"
              >
                <span>Review Hackathon Pitch Deck</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={BRAND.branchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white hover:underline font-semibold"
              >
                <span>View Submitted Code on GitHub</span>
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Clear Separation: Finished MVP vs. Future Roadmap */}
        <div>
          <div className="max-w-2xl mb-6">
            <h3 className="font-heading font-bold text-2xl text-[#18362E]">
              Separating Current Submission from Future Roadmap
            </h3>
            <p className="text-xs text-[#4B635B] mt-1">
              We strictly delineate the verified submitted deliverables from the planned post-hackathon horizon:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmapItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#F8F9F4] border border-[#D9DFD6] space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    {item.status}
                  </span>
                  <Compass className="w-4 h-4 text-purple-600" />
                </div>
                <h4 className="font-heading font-bold text-base text-[#18362E]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#334D44] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
