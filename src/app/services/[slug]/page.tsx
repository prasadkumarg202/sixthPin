"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { capabilitiesData } from "@/data/capabilities";
import { ConsultationModal } from "@/components/forms/ConsultationModal";
import { AiReadinessAssessmentModal } from "@/components/ai/AiReadinessAssessmentModal";
import { AiConciergeChat } from "@/components/ai/AiConciergeChat";
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Cpu, Layers, HelpCircle, Server } from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  const service = capabilitiesData.find(
    (c) => c.id === slug || c.href.endsWith(slug)
  );

  if (!service) {
    return (
      <main className="min-h-screen bg-[#060911] text-white flex flex-col items-center justify-center p-6 text-center">
        <Navbar onOpenConsultation={() => setConsultationOpen(true)} />
        <h1 className="text-2xl font-bold mb-3">Architecture Specification Not Found</h1>
        <p className="text-slate-400 mb-6 text-xs">The requested service blueprint could not be located.</p>
        <Link href="/" className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold">
          Return to Overview
        </Link>
        <Footer />
      </main>
    );
  }

  const faqs = [
    {
      q: `How does SixthPin deploy ${service.title} into existing enterprise architectures?`,
      a: "We initiate with an architectural discovery sprint to map API boundaries, IAM policies, and data lineage. All components are containerized on Kubernetes and delivered via automated Terraform IaC modules with zero downtime."
    },
    {
      q: "What security and governance safeguards are integrated?",
      a: "Every pipeline incorporates edge PII redaction, role-based access control (RBAC), and deterministic guardrails adhering to SOC 2 Type II, ISO 27001, and HIPAA compliance mandates."
    },
    {
      q: "What is the typical timeline to reach production?",
      a: "Under our 4-week PoC-to-Production framework, Phase 1 validates the core workload in sandbox environments, followed by phased canary rollout to production within 30-45 days."
    }
  ];

  return (
    <main className="min-h-screen bg-[#060911] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar
        onOpenAssessment={() => setAssessmentOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-[#070b14] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-950/40 text-blue-400 border border-blue-500/30 font-mono uppercase tracking-wider">
            {service.category} • Architecture Blueprint
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            {service.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {service.tagline}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setConsultationOpen(true)}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 flex items-center gap-1.5"
            >
              Consult with a Lead Architect
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setAssessmentOpen(true)}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5 text-orange-400" />
              Assess AI Readiness
            </button>
          </div>
        </div>
      </section>

      {/* Main Architecture & Details */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-xl font-bold text-white">Engineering Approach & Methodology</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {service.description}
            </p>

            <div className="space-y-2.5 pt-1">
              <h3 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                Key Architectural Capabilities:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Measurable Impact & Tech */}
          <div className="lg:col-span-5 glass-panel-dark rounded-2xl p-6 border border-white/10 shadow-xl space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold block mb-1">
                Guaranteed Target SLA:
              </span>
              <p className="text-base font-bold text-white">
                {service.businessImpact}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Approved Technology Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {service.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded-lg bg-blue-950/50 text-blue-300 border border-blue-500/30 text-[11px] font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {service.architectureSnippet && (
              <div className="pt-3 border-t border-white/10 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-cyan-400" /> Topology Graph:
                </span>
                <pre className="text-[10px] font-mono text-emerald-300 bg-black/60 p-3 rounded-lg border border-white/10 overflow-x-auto">
                  {service.architectureSnippet}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4 pt-8 border-t border-white/10">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-blue-400" /> Frequently Asked Architecture Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-panel-dark rounded-2xl p-5 border border-white/10 space-y-2">
                <h3 className="font-bold text-xs text-white">{faq.q}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{faq.a}</p>
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
