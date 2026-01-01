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
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="app-root">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <TrendingSection />
      <WhyHireMeSection />
      <ContactSection />
    </div>
  );
}

export default App;
