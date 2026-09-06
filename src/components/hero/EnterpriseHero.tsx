"use client";

import React from "react";
import { ArrowRight, Cpu, CheckCircle2, Sparkles, Bot, Shield, Zap } from "lucide-react";
import { AiAgentFlowMotionGraphic } from "@/components/graphics/AiAgentFlowMotionGraphic";
import { AiNeuralParticleCanvas } from "@/components/graphics/AiNeuralParticleCanvas";
import { AltimetrikFluidMotionCanvas } from "@/components/graphics/AltimetrikFluidMotionCanvas";
import { AiVideoBackground } from "@/components/video/AiVideoBackground";

interface EnterpriseHeroProps {
  onOpenAssessment: () => void;
  onOpenConsultation: () => void;
}

export const EnterpriseHero: React.FC<EnterpriseHeroProps> = ({
  onOpenAssessment,
  onOpenConsultation,
}) => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-white dark:bg-[#060911] border-b border-slate-200 dark:border-white/10 transition-colors duration-200">
      {/* Altimetrik-Style Iridescent Fluid Motion Graphics Ribbon Waves */}
      <AltimetrikFluidMotionCanvas />

      {/* Live Looping Veo 3 Video Background Stream */}
      <AiVideoBackground />

      {/* Live Animated Neural Particle Canvas Mesh */}
      <AiNeuralParticleCanvas />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[250px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:border-blue-500/30 dark:text-blue-400 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>SixthPin Enterprise AI & Autonomous Digital Engineering</span>
          </div>

          {/* Hero Headline with 3-Tone Colors */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black tracking-tight leading-[1.16]">
            <span className="text-slate-900 dark:text-white">Engineer the future. </span>
            <span className="text-blue-600 dark:text-[#3b82f6]">AI powers </span>
            <span className="text-orange-600 dark:text-[#f97316]">the autonomous enterprise.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            We move global organizations beyond experimental GenAI sandbox prototypes into production-grade multi-agent automation, modern data lakehouses, and high-velocity digital engineering platforms.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-7 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group"
            >
              Talk to an AI Solutions Architect
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Cpu className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
              Take 3-Min AI Maturity Benchmark
            </button>
          </div>

          {/* Trust Checkpoints */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> 4-Week PoC-to-Production SLA
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" /> Deterministic AI Guardrails
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> SOC2 Type II & HIPAA Ready
            </span>
          </div>
        </div>

        {/* PROMINENT AI MOTION GRAPHIC FLOW PIPELINE (Instantly Visible in Hero) */}
        <div className="max-w-5xl mx-auto relative z-20">
          <AiAgentFlowMotionGraphic />
        </div>
      </div>
    </section>
  );
};
