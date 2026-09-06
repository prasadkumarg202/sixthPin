"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultationModal } from "@/components/forms/ConsultationModal";
import { AiReadinessAssessmentModal } from "@/components/ai/AiReadinessAssessmentModal";
import { AiConciergeChat } from "@/components/ai/AiConciergeChat";
import { ShieldCheck, Cpu, Terminal, Globe2, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  const leadershipPillars = [
    {
      title: "Outcome-Engineered Architecture",
      desc: "We measure success by reduced compute cost, accelerated deployment velocity, and deterministic AI accuracy rather than billed consulting hours."
    },
    {
      title: "Zero Hallucination Tolerance",
      desc: "Our systems pair neural models with symbolic Knowledge Graphs, semantic fences, and human-in-the-loop governance for 100% auditable outputs."
    },
    {
      title: "Cloud-Native & Open-Source First",
      desc: "No proprietary vendor lock-in. We build on Kubernetes, Kafka, Terraform, and open LLM/agentic frameworks delivered directly into your VPC."
    },
    {
      title: "Continuous Security by Design",
      desc: "Zero-trust IAM, automated edge PII anonymization, and red-teaming defenses meeting SOC 2 Type II, ISO 27001, and HIPAA compliance."
    }
  ];

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col">
      <Navbar
        onOpenAssessment={() => setAssessmentOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-grid-pattern relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono uppercase tracking-wider">
            About SixthPin Technologies
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering the <span className="text-gradient-accent">Autonomous Enterprise</span>
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            SixthPin is a specialized global technology and digital engineering firm. We help modern enterprises move beyond experimental AI prototypes to build high-velocity, autonomous, and cloud-native digital platforms.
          </p>
        </div>
      </section>

      {/* Philosophy & Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Bridging the C-Suite Strategy to Production-Code Gap
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Legacy IT service giants provide massive teams with low technological velocity. Boutique AI agencies build brittle demos that fail under enterprise load.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              SixthPin was founded by Principal Solutions Architects to offer a differentiated alternative: elite hands-on engineering, deterministic multi-agent swarms, and hardened cloud platforms backed by clear SLAs.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2"
              >
                Schedule Architecture Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {leadershipPillars.map((pillar) => (
              <div key={pillar.title} className="glass-panel rounded-2xl p-6 border border-white/10 space-y-2">
                <h3 className="text-sm font-bold text-white leading-snug">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
