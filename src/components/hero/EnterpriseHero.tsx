"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Layers, Cpu, Cloud, Database, Shield, Zap, BarChart3 } from "lucide-react";

interface EnterpriseHeroProps {
  onOpenAssessment: () => void;
  onOpenConsultation: () => void;
}

export const EnterpriseHero: React.FC<EnterpriseHeroProps> = ({
  onOpenAssessment,
  onOpenConsultation,
}) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white dark:bg-[#060911] border-b border-slate-200 dark:border-white/10 transition-colors duration-200">
      {/* Clean Subtle Background Ambient Light */}
      <div className="absolute inset-0 bg-theme-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-orange-500/5 dark:bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-5 mb-12">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:border-blue-500/30 dark:text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Digital Business Transformation & Enterprise AI</span>
          </div>

          {/* Clean, Bold Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Accelerating Digital Business.{" "}
            <span className="text-blue-600 dark:text-[#3b82f6]">Engineered with AI </span>
            <span className="text-orange-600 dark:text-[#f97316]">& Cloud Precision.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            SixthPin is a global digital engineering and enterprise technology partner. We help market leaders modernize legacy architectures, build high-velocity platforms, and scale practical AI solutions.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group"
            >
              Talk to Our Solutions Team
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/services"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all flex items-center justify-center gap-2"
            >
              Explore Solutions & Capabilities
            </Link>
          </div>

          {/* Key Proof Points */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> 4-Week PoC-to-Production
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> SOC2 Type II & HIPAA Certified
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-600 dark:text-orange-400" /> 99.8% Engineering SLA
            </span>
          </div>
        </div>

        {/* Clean 4-Pillar Solutions Summary Grid (Altimetrik-style Clean Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
          <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-[#0b1325] border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/40 hover:shadow-lg transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3.5">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Enterprise AI & Data
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Applied Generative AI, intelligent automation workflows, and modern lakehouse architectures.
            </p>
            <Link href="/services/multi-agent-orchestration" className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
              Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-[#0b1325] border border-slate-200 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500/40 hover:shadow-lg transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3.5">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Digital Engineering
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Custom software engineering, microservices modernization, and cloud-native application delivery.
            </p>
            <Link href="/services/legacy-modernization" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-[#0b1325] border border-slate-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-500/40 hover:shadow-lg transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-3.5">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              Cloud & DevOps
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Scalable multi-cloud infrastructure, Kubernetes orchestration, and automated CI/CD pipelines.
            </p>
            <Link href="/services/cloud-native-platforms" className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
              Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50/80 dark:bg-[#0b1325] border border-slate-200 dark:border-white/10 hover:border-orange-400 dark:hover:border-orange-500/40 hover:shadow-lg transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3.5">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
              Security & Governance
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Zero-trust architecture, enterprise data compliance, and automated risk governance frameworks.
            </p>
            <Link href="/services/ai-governance-guardrails" className="text-xs font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-1">
              Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
