"use client";
import React from "react";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundaryPage";

import HeroSection from "./introSection/HeroSection";
import AboutSection from "./aboutSection/AboutSection";
import SkillsSection from "./skillsSection/SkillsSection";
import { ProjectsSection } from "./projects/ProjectsSection.client";
import EmailSection from "./emailSection/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] justify-center sm:justify-start">
      <div className="container mt-0 sm:mt-24 mx-auto px-12 py-4">
        <ErrorBoundary>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EmailSection />
        </ErrorBoundary>
      </div>
    </main>
  );
}
