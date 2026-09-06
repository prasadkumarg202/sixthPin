import React from "react";
import { enterpriseOutcomes } from "@/data/capabilities";
import { TrendingUp, Clock, ShieldCheck, Zap } from "lucide-react";

export const ValueOutcomes = () => {
  const icons = [Clock, Zap, ShieldCheck, TrendingUp];
  const colorBgs = [
    "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-500/30",
    "bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-500/30",
    "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-500/30",
    "bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-400 dark:border-indigo-500/30",
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#060911] border-b border-slate-200 dark:border-white/10 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-500/30 font-mono uppercase tracking-wider">
            Quantified Business Impact
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineered for <span className="text-blue-600 dark:text-[#3b82f6]">Measurable </span><span className="text-orange-600 dark:text-[#f97316]">Enterprise ROI</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            We reject vague technology consulting. Every SixthPin architecture engagement is backed by verifiable performance benchmarks, cycle time compression, and infrastructure efficiency metrics.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {enterpriseOutcomes.map((item, index) => {
            const Icon = icons[index % icons.length];
            const badgeStyle = colorBgs[index % colorBgs.length];

            return (
              <div
                key={item.label}
                className="bg-white dark:bg-[#0d1527] rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/40 shadow-sm dark:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border mb-4 ${badgeStyle}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono mb-1">
                    {item.metric}
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-gradient-to-r from-blue-500 to-orange-500 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
