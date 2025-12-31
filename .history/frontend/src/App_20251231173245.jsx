/**
 * ============================================================
 * App.jsx — Application Layout & Flow Controller
 * ============================================================
 *
 * Responsibilities:
 * - Define the overall page structure
 * - Control section flow and spacing
 * - Apply global scrolling behavior
 * - Load global styles
 *
 * This file intentionally avoids content details.
 * Content lives in sections.jsx.
 * ============================================================
 */

import React, { useEffect } from "react";
import "./styles.css";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  TrendingSection,
  WhyHireMeSection,
  ContactSection
} from "./sections";

function App() {
  /**
   * Apply smooth scrolling behavior once on mount.
   * This keeps scrolling cinematic without hijacking control.
   */
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    /**
     * Main application container.
     * Acts as the vertical canvas for all sections.
     */
    <div className="app-root">
      
      {/* ===== HERO / WELCOME ===== */}
      <HeroSection />

      {/* ===== ABOUT ===== */}
      <AboutSection />

      {/* ===== SKILLS ===== */}
      <SkillsSection />

      {/* ===== EXPERIENCE ===== */}
      <ExperienceSection />

      {/* ===== PROJECTS ===== */}
      <ProjectsSection />

      {/* ===== TRENDING ===== */}
      <TrendingSection />

      {/* ===== WHY HIRE ME ===== */}
      <WhyHireMeSection />

      {/* ===== CONTACT / HIRE ME ===== */}
      <ContactSection />

    </div>
  );
}

export default App;
