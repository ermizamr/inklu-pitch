import { BRAND } from "../data/contentData";
import { ShieldCheck, FileCheck, Tv, ExternalLink } from "lucide-react";

const Github = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer({ onOpenPresentation, onOpenLicenses }) {
  return (
    <footer className="bg-[#18362E] text-[#F8F9F4] border-t border-[#245246] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#245246]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#183E34] text-[#F2C675] flex items-center justify-center border border-[#245246] shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="14" r="5" fill="#F2C675" />
                  <path
                    d="M14 36V30C14 26.6863 16.6863 24 20 24H28C31.3137 24 34 26.6863 34 30V36"
                    stroke="#F8F9F4"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 23C7 26 7 31 10 34"
                    stroke="#F2C675"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M38 23C41 26 41 31 38 34"
                    stroke="#F2C675"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white block leading-none">
                  Inklu
                </span>
                <span className="text-xs text-[#F2C675] font-medium tracking-tight mt-0.5 block">
                  Learning Without Barriers • ያለ ምንም እንቅፋት መማር
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D9DFD6] leading-relaxed max-w-sm">
              An accessibility companion that helps learners understand course content in the language and format they need.
              Submitted to the Digital Bridge Accessibility Hackathon 2026 (Track 3).
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={BRAND.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F2C675] hover:bg-[#E5B860] text-xs font-bold text-[#18362E] transition-colors shadow-xs"
                title="Launch live deployed MVP on Google Cloud Run"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>Live Cloud MVP</span>
                <ExternalLink className="w-3 h-3 text-[#18362E]" />
              </a>

              <a
                href={BRAND.branchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#122822] hover:bg-[#183E34] text-xs font-mono text-[#F8F9F4] border border-[#245246] transition-colors"
                title="View submitted repository on GitHub (branch: ermi)"
              >
                <Github className="w-3.5 h-3.5 text-[#F2C675]" />
                <span>GitHub (branch: ermi)</span>
                <ExternalLink className="w-3 h-3 text-[#A3B8B0]" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F2C675] font-semibold block">
              Website Sections
            </span>
            <ul className="space-y-2 text-xs text-[#D9DFD6]">
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  01 • The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-white transition-colors">
                  02 • The Solution Pipeline
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-white transition-colors">
                  03 • Grounded Product Showcase
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-white transition-colors">
                  04 • Technical Architecture
                </a>
              </li>
              <li>
                <a href="#accessibility" className="hover:text-white transition-colors">
                  05 • Accessibility &amp; Conformance
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">
                  06 • Interactive Demo &amp; Walkthrough
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  07 • Team &amp; Long-Term Vision
                </a>
              </li>
            </ul>
          </div>

          {/* Standards & Actions */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F2C675] font-semibold block">
              Accessibility &amp; Tools
            </span>

            <div className="p-4 rounded-xl bg-[#122822] border border-[#245246] space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Accessibility-First Design</span>
              </div>
              <p className="text-[#A3B8B0] leading-relaxed">
                27/27 automated axe-core rules passing with 0 violations; tested with NVDA and TalkBack.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                type="button"
                onClick={onOpenPresentation}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#183E34] hover:bg-[#245246] text-white text-xs font-semibold border border-[#245246] transition-colors"
              >
                <Tv className="w-3.5 h-3.5 text-[#F2C675]" />
                <span>Pitch Mode (P)</span>
              </button>

              <button
                type="button"
                onClick={onOpenLicenses}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#183E34] hover:bg-[#245246] text-white text-xs font-semibold border border-[#245246] transition-colors"
              >
                <FileCheck className="w-3.5 h-3.5 text-[#F2C675]" />
                <span>Asset Licenses</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3B8B0]">
          <p>
            © 2026 Inklu Team. Built for the Digital Bridge Accessibility Hackathon 2026.
          </p>
          <p className="flex items-center gap-1">
            <span>Designed with dignity for learning without barriers.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
