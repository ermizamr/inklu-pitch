import { useState, useEffect } from "react";
import { 
  Tv, 
  Menu, 
  X, 
  ExternalLink, 
  FileCheck
} from "lucide-react";
import { BRAND } from "../data/contentData";

const Github = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Navbar({ onOpenPresentation, onOpenLicenses }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Problem", href: "#problem" },
    { label: "The Solution", href: "#solution" },
    { label: "Product", href: "#showcase" },
    { label: "Architecture", href: "#architecture" },
    { label: "Accessibility", href: "#accessibility" },
    { label: "Live Demo", href: "#demo" },
    { label: "Team", href: "#team" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-[#F8F9F4]/95 backdrop-blur-md shadow-xs border-b border-[#D9DFD6]"
          : "bg-[#F8F9F4] border-b border-[#D9DFD6]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Product Identity */}
        <a
          href="#"
          className="flex items-center gap-3.5 group rounded-md p-1 -m-1 focus-visible:outline-[#183E34]"
          aria-label="Inklu - Learning Without Barriers, Return to top"
        >
          <div className="w-10 h-10 rounded-xl bg-[#183E34] text-[#F2C675] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform border border-[#245246]">
            <svg
              className="w-6 h-6"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
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
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-2xl tracking-tight text-[#18362E] flex items-center gap-2 leading-none">
              Inklu
              <span className="text-[10px] font-sans font-semibold uppercase px-2 py-0.5 rounded-full bg-[#183E34]/10 text-[#183E34] border border-[#183E34]/20 tracking-wider">
                Track 3
              </span>
            </span>
            <span className="text-xs text-[#4B635B] font-medium tracking-tight mt-1">
              Learning Without Barriers
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-[#18362E] hover:text-[#183E34] hover:bg-[#EAEFE8] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* GitHub Repo Button */}
          <a
            href={BRAND.branchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-semibold text-[#18362E] hover:text-[#183E34] bg-white hover:bg-[#EAEFE8] border border-[#D9DFD6] rounded-xl shadow-2xs transition-all focus-visible:outline-[#183E34]"
            title="View submitted repository on GitHub (branch: ermi)"
          >
            <Github className="w-3.5 h-3.5 text-[#183E34]" />
            <span>GitHub</span>
          </a>

          {/* Launch Live Cloud MVP CTA */}
          <a
            href={BRAND.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#18362E] bg-[#F2C675] hover:bg-[#E5B860] border border-[#D4A54B] rounded-xl shadow-xs transition-all focus-visible:outline-[#183E34]"
            title="Launch live deployed MVP on Google Cloud Run"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Live MVP</span>
            <ExternalLink className="w-3 h-3 text-[#18362E]" />
          </a>

          {/* Presentation Mode Toggle - Prominent */}
          <button
            type="button"
            onClick={onOpenPresentation}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#F8F9F4] bg-[#18362E] hover:bg-[#122822] rounded-xl shadow-xs transition-all cursor-pointer border border-[#245246] hover:scale-[1.02] focus-visible:outline-[#183E34]"
            title="Launch full-screen pitch presentation deck (Shortcut: Press P)"
          >
            <Tv className="w-3.5 h-3.5 text-[#F2C675]" />
            <span>Pitch Mode</span>
            <kbd className="px-1.5 py-0.5 bg-[#122822] text-[#F2C675] text-[10px] rounded font-mono border border-[#245246]">
              P
            </kbd>
          </button>

          {/* Asset Licenses Trigger */}
          <button
            type="button"
            onClick={onOpenLicenses}
            className="text-xs text-[#4B635B] hover:text-[#183E34] font-medium px-2 py-1.5 rounded-md hover:bg-[#EAEFE8] transition-colors flex items-center gap-1"
            title="View open source asset licenses"
          >
            <FileCheck className="w-3.5 h-3.5 text-[#183E34]" />
            <span>Licenses</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenPresentation}
            className="px-3 py-1.5 text-xs font-bold text-white bg-[#18362E] border border-[#245246] rounded-lg flex items-center gap-1.5"
            title="Pitch Mode"
          >
            <Tv className="w-3.5 h-3.5 text-[#F2C675]" />
            <span>Pitch</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#18362E] hover:bg-[#EAEFE8] rounded-lg border border-[#D9DFD6]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#183E34]" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#D9DFD6] bg-[#F8F9F4] px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-[#18362E] hover:bg-[#EAEFE8] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#D9DFD6] flex flex-col gap-2">
            <a
              href={BRAND.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-[#18362E] bg-[#F2C675] rounded-xl shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Launch Live Cloud MVP</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#18362E]" />
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPresentation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-[#18362E] rounded-xl shadow-sm"
            >
              <Tv className="w-4 h-4 text-[#F2C675]" />
              <span>Launch Pitch Mode (P)</span>
            </button>
            <div className="flex gap-2">
              <a
                href={BRAND.branchUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-[#18362E] bg-white border border-[#D9DFD6] rounded-xl"
              >
                <Github className="w-3.5 h-3.5 text-[#183E34]" />
                <span>GitHub</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLicenses();
                }}
                className="px-4 py-2 text-xs font-medium text-[#4B635B] bg-white border border-[#D9DFD6] rounded-xl"
              >
                Licenses
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
