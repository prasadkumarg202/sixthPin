"use client";

import React from "react";
import { ArrowRight, Cpu, Shield, Sparkles, CheckCircle2 } from "lucide-react";

interface CtaConversionSectionProps {
  onOpenAssessment: () => void;
  onOpenConsultation: () => void;
}

export const CtaConversionSection: React.FC<CtaConversionSectionProps> = ({
  onOpenAssessment,
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#060911] relative overflow-hidden transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 border border-blue-200 dark:border-blue-500/30 text-center space-y-6 bg-gradient-to-br from-blue-50 via-indigo-50/40 to-white dark:from-blue-950/50 dark:via-indigo-950/30 dark:to-[#0b111e] shadow-xl dark:shadow-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Next-Generation Technology Partnership
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Ready to Build Your <span className="text-blue-600 dark:text-[#3b82f6]">Autonomous </span><span className="text-orange-600 dark:text-[#f97316]">Enterprise</span>?
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Partner with SixthPin to move from experimental GenAI proofs-of-concept to deterministic, multi-agent production systems that scale securely.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
            >
              Schedule Architecture Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Cpu className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
              Run 3-Minute AI Readiness Benchmark
            </button>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-center gap-5 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Free 60-Minute Executive Session
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" /> NDA / Confidentiality Protected
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Custom Architecture Roadmap Provided
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
