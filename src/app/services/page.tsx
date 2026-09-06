"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CapabilitiesGrid } from "@/components/sections/CapabilitiesGrid";
import { CtaConversionSection } from "@/components/sections/CtaConversionSection";
import { ConsultationModal } from "@/components/forms/ConsultationModal";
import { AiReadinessAssessmentModal } from "@/components/ai/AiReadinessAssessmentModal";
import { AiConciergeChat } from "@/components/ai/AiConciergeChat";

export default function ServicesHubPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#060911] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar
        onOpenAssessment={() => setAssessmentOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <div className="pt-20">
        <CapabilitiesGrid />
      </div>

      <CtaConversionSection
        onOpenAssessment={() => setAssessmentOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      <Footer />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
      <AiReadinessAssessmentModal
        isOpen={assessmentOpen}
        onClose={() => setAssessmentOpen(false)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />
      <AiConciergeChat
        onOpenAssessment={() => setAssessmentOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />
    </main>
  );
}
