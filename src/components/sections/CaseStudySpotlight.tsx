import React from "react";
import Link from "next/link";
import { caseStudiesData } from "@/data/caseStudies";
import { ArrowRight, TrendingUp, CheckCircle, Cpu, ExternalLink } from "lucide-react";

export const CaseStudySpotlight = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#060911] border-b border-slate-200 dark:border-white/10 transition-colors" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 border border-emerald-200 text-emerald-700 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-500/30 font-mono uppercase tracking-wider">
              Proven Enterprise Track Record
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Case Studies & <span className="text-blue-600 dark:text-[#3b82f6]">Engineering </span><span className="text-orange-600 dark:text-[#f97316]">Deployments</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Explore how SixthPin delivers deterministic business outcomes across mission-critical systems.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 text-xs font-semibold transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudiesData.slice(0, 3).map((study) => (
            <div
              key={study.id}
              className="bg-white dark:bg-[#0d1527] rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/40 shadow-sm dark:shadow-xl transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {study.clientIndustry}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                    {study.clientType}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {study.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {study.summary}
                </p>

                {/* Primary Metric */}
                <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-500/20 space-y-0.5">
                  <span className="text-2xl font-black font-mono text-orange-600 dark:text-orange-400">
                    {study.metrics.primary}
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">
                    {study.metrics.primaryLabel}
                  </p>
                </div>

                {/* Secondary Metrics */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="bg-slate-50 dark:bg-white/[0.02] p-2 rounded-lg border border-slate-100 dark:border-white/5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white font-mono block">
                      {study.metrics.secondary}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                      {study.metrics.secondaryLabel}
                    </span>
                  </div>
                  <div className="bg-slate-50 dark:bg-white/[0.02] p-2 rounded-lg border border-slate-100 dark:border-white/5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white font-mono block">
                      {study.metrics.tertiary}
                    </span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                      {study.metrics.tertiaryLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technologies and Link */}
              <div className="pt-3.5 border-t border-slate-100 dark:border-white/5 space-y-2.5">
                <div className="flex flex-wrap gap-1">
                  {study.technologiesUsed.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/case-studies`}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-orange-600 dark:hover:text-orange-400 flex items-center justify-between pt-1 group/btn transition-colors"
                >
                  <span>Read Full Technical Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
