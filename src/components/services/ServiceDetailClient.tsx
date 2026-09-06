"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Capability } from "@/data/capabilities";
import { ConsultationModal } from "@/components/forms/ConsultationModal";
import { AiReadinessAssessmentModal } from "@/components/ai/AiReadinessAssessmentModal";
import { AiConciergeChat } from "@/components/ai/AiConciergeChat";
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Cpu, Layers, HelpCircle, Server } from "lucide-react";

interface ServiceDetailClientProps {
  service: Capability;
}

export const ServiceDetailClient: React.FC<ServiceDetailClientProps> = ({ service }) => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [assessmentOpen, setAssessmentOpen] = useState(false);

  const faqs = [
    {
      q: `How does SixthPin deploy ${service.title} into existing enterprise architectures?`,
      a: "We initiate with an architectural discovery sprint to map API boundaries, IAM policies, and data lineage. All components are containerized on Kubernetes and delivered via automated Terraform IaC modules with zero downtime.",
    },
    {
      q: "What security and governance safeguards are integrated?",
      a: "Every pipeline incorporates edge PII redaction, role-based access control (RBAC), and deterministic guardrails adhering to SOC 2 Type II, ISO 27001, and HIPAA compliance mandates.",
    },
    {
      q: "What is the typical timeline to reach production?",
      a: "Under our 4-week PoC-to-Production framework, Phase 1 validates the core workload in sandbox environments, followed by phased canary rollout to production within 30-45 days.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#060911] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white transition-colors duration-200">
      <Navbar
        onOpenAssessment={() => setAssessmentOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-slate-50 dark:bg-[#0a0f1d] border-b border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:border-blue-500/30 dark:text-blue-400 uppercase tracking-wider">
              {service.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {service.description}
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-md shadow-blue-500/20 flex items-center gap-2"
              >
                Schedule Solution Architecture Briefing
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setAssessmentOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-all"
              >
                Take AI Readiness Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Architecture Matrix */}
      <section className="py-16 bg-white dark:bg-[#060911] border-b border-slate-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Key Deliverable Outcomes */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Key Architecture Capabilities & Outcomes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-[#0b1325] border border-slate-200 dark:border-white/10 space-y-2 hover:border-blue-300 dark:hover:border-blue-500/40 transition-all"
                  >
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs font-mono">
                      <CheckCircle2 className="w-4 h-4" />
                      Capability 0{i + 1}
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0b1325] border border-slate-200 dark:border-white/10 space-y-5 h-fit">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                <span className="text-xs font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider">
                  Technology Stack
                </span>
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                  {service.businessImpact}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-white/10 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  <span>SOC2 Type II & HIPAA Certified Implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-500" />
                  <span>CI/CD Automated Deployment via Terraform</span>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture FAQs */}
          <div className="pt-8 border-t border-slate-200 dark:border-white/10 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-orange-500" />
              Frequently Asked Implementation Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-[#0b1325] border border-slate-200 dark:border-white/10 space-y-2"
                >
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                    {faq.q}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
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
};
