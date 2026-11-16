import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import ProductShowcase from "./components/ProductShowcase";
import DemoSection from "./components/DemoSection";
import Architecture from "./components/Architecture";
import AccessibilityReport from "./components/AccessibilityReport";
import TeamVision from "./components/TeamVision";
import Footer from "./components/Footer";
import Spine from "./components/ui/Spine";
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

  // Global keyboard shortcut: 'P' opens the pitch deck.
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

  const anyOverlayOpen =
    presentationOpen || licensesOpen || Boolean(selectedImage);

  // Inklu's widget chrome steps aside while a host overlay is open.
  useEffect(() => {
    document.body.classList.toggle("overlay-open", anyOverlayOpen);
    return () => document.body.classList.remove("overlay-open");
  }, [anyOverlayOpen]);

  return (
    <div className="min-h-screen bg-paper text-body font-body flex flex-col">
      {/* Skip to Main Content (WCAG 2.2 AA SC 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-paper focus:font-semibold focus:text-sm focus:rounded-md"
      >
        Skip to main content
      </a>

      <Spine />

      {/* When an overlay is open, the page behind it becomes inert:
          invisible to assistive tech, unclickable, unfocusable. */}
      <div className="contents" inert={anyOverlayOpen || undefined}>
        <Navbar onOpenPresentation={() => setPresentationOpen(true)} />

        <main id="main-content" className="flex-1 focus:outline-none">
          {/* Act 00 — The Promise */}
          <Hero onOpenPresentation={() => setPresentationOpen(true)} />

          {/* Act 01 — The Wall */}
          <Problem />

          {/* Act 02 — The Bridge */}
          <Solution />

          {/* Act 03 — The Evidence (plates + live simulator) */}
          <ProductShowcase onSelectImage={setSelectedImage} />
          <DemoSection />

          {/* Act 04 — The Proof (blueprint + certificate) */}
          <Architecture />
          <AccessibilityReport />

          {/* Act 05 — The People */}
          <TeamVision onOpenPresentation={() => setPresentationOpen(true)} />
        </main>

        {/* Colophon */}
        <Footer
          onOpenPresentation={() => setPresentationOpen(true)}
          onOpenLicenses={() => setLicensesOpen(true)}
        />
      </div>

      <PresentationMode
        isOpen={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />
      <AssetLicensesModal
        isOpen={licensesOpen}
        onClose={() => setLicensesOpen(false)}
      />
      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
