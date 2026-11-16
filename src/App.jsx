import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import ProductShowcase from "./components/ProductShowcase";
import Architecture from "./components/Architecture";
import AccessibilityReport from "./components/AccessibilityReport";
import DemoSection from "./components/DemoSection";
import TeamVision from "./components/TeamVision";
import Footer from "./components/Footer";
import PresentationMode from "./components/PresentationMode";
import AssetLicensesModal from "./components/AssetLicensesModal";
import ImageModal from "./components/ImageModal";

export default function App() {
  const [presentationOpen, setPresentationOpen] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return (
        params.get("mode") === "presentation" ||
        params.get("presentation") === "true"
      );
    }
    return false;
  });
  const [licensesOpen, setLicensesOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Global keyboard shortcut: Press 'P' to open Presentation Mode
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (
        (e.key === "p" || e.key === "P") &&
        !presentationOpen &&
        !licensesOpen &&
        !selectedImage &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)
      ) {
        e.preventDefault();
        setPresentationOpen(true);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [presentationOpen, licensesOpen, selectedImage]);

  return (
    <div className="min-h-screen bg-[#F8F9F4] text-[#18362E] font-body flex flex-col selection:bg-[#F2C675]/30 selection:text-[#183E34]">
      {/* Skip to Main Content Link (WCAG 2.2 AA SC 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#183E34] focus:text-[#F8F9F4] focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-3 focus:outline-[#F2C675]"
      >
        Skip to main content
      </a>

      {/* Primary Navigation Bar */}
      <Navbar
        onOpenPresentation={() => setPresentationOpen(true)}
        onOpenLicenses={() => setLicensesOpen(true)}
      />

      {/* Main Semantic Landmark */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {/* Section 1: Cinematic Hero */}
        <Hero
          onOpenPresentation={() => setPresentationOpen(true)}
          onSelectImage={setSelectedImage}
        />

        {/* Section 2: The Problem */}
        <Problem />

        {/* Section 3: The Solution */}
        <Solution />

        {/* Section 4: Product Showcase */}
        <ProductShowcase onSelectImage={setSelectedImage} />

        {/* Section 5: Technical Architecture */}
        <Architecture />

        {/* Section 6: WCAG 2.2 AA Accessibility Report */}
        <AccessibilityReport />

        {/* Section 7: Interactive Demo & Walkthrough */}
        <DemoSection />

        {/* Section 8: Team & Vision */}
        <TeamVision onOpenPresentation={() => setPresentationOpen(true)} />
      </main>

      {/* Editorial Footer */}
      <Footer
        onOpenPresentation={() => setPresentationOpen(true)}
        onOpenLicenses={() => setLicensesOpen(true)}
      />

      {/* Full-Screen Pitch Presentation Mode (Shortcut: P) */}
      <PresentationMode
        isOpen={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />

      {/* Permissive Asset Licenses & Provenance Modal */}
      <AssetLicensesModal
        isOpen={licensesOpen}
        onClose={() => setLicensesOpen(false)}
      />

      {/* High-Resolution Screenshot Zoom Modal */}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
