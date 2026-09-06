"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EnterpriseHero } from "@/components/hero/EnterpriseHero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { ValueOutcomes } from "@/components/sections/ValueOutcomes";
import { AiSolutionsMotionArchitecture } from "@/components/sections/AiSolutionsMotionArchitecture";
import { AgenticShowcase } from "@/components/sections/AgenticShowcase";
import { CapabilitiesGrid } from "@/components/sections/CapabilitiesGrid";
import { IndustryPlaybooks } from "@/components/sections/IndustryPlaybooks";
import { CaseStudySpotlight } from "@/components/sections/CaseStudySpotlight";
import { TechEcosystem } from "@/components/sections/TechEcosystem";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { CtaConversionSection } from "@/components/sections/CtaConversionSection";
import { AiReadinessAssessmentModal } from "@/components/ai/AiReadinessAssessmentModal";
import { ConsultationModal } from "@/components/forms/ConsultationModal";
import { AiConciergeChat } from "@/components/ai/AiConciergeChat";

export default function HomePage() {
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-[#060911] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Global Navigation with 3-Column Solutions MegaMenu & Theme Toggle */}
      <Navbar
        onOpenAssessment={() => setAssessmentOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Hero Section with White/Blue/Orange Palette + Dynamic Theme Adaptability */}
      <EnterpriseHero
        onOpenAssessment={() => setAssessmentOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Trust & Compliance Ticker */}
      <TrustBanner />

      {/* Measurable Value Outcomes */}
      <ValueOutcomes />

      {/* Autonomous AI Solutions Architecture Motion Flow */}
      <AiSolutionsMotionArchitecture />

      {/* Agentic Swarms Live Visualizer */}
      <AgenticShowcase />

      {/* Capabilities Matrix */}
      <CapabilitiesGrid />

      {/* Vertical Industry Playbooks */}
      <IndustryPlaybooks />

      {/* Case Studies Spotlight */}
      <CaseStudySpotlight />

      {/* Technology Ecosystem */}
      <TechEcosystem />

      {/* Curated Whitepapers & Insights */}
      <InsightsPreview />

      {/* Bottom Conversion Section */}
      <CtaConversionSection
        onOpenAssessment={() => setAssessmentOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Global Footer */}
      <Footer />

      {/* Modals & AI Chat Drawer */}
      <AiReadinessAssessmentModal
        isOpen={assessmentOpen}
        onClose={() => setAssessmentOpen(false)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <AiConciergeChat
        onOpenAssessment={() => setAssessmentOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />
    </main>
  );
}
