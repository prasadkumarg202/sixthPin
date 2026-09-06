import React from "react";
import { complianceBadges } from "@/data/capabilities";
import { ShieldCheck, Award, CheckCircle2, Lock } from "lucide-react";

export const TrustBanner = () => {
  const partners = [
    { name: "AWS Partner Network", level: "Premier Tier Services" },
    { name: "Google Cloud", level: "Premier Enterprise Partner" },
    { name: "Microsoft Solutions", level: "Azure & AI Specialist" },
    { name: "Snowflake", level: "Premier Data Partner" },
    { name: "Databricks", level: "Elite Delivery Partner" },
    { name: "OpenAI", level: "Enterprise Scale Integrator" },
  ];

  return (
    <section className="py-10 border-b border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#070b14] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
            Validated Enterprise AI & Cloud Technology Ecosystem
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="p-3 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-blue-400 dark:hover:border-blue-500/30 hover:shadow-sm transition-all flex flex-col items-center text-center justify-center space-y-0.5 group"
            >
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {partner.name}
              </span>
              <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500">
                {partner.level}
              </span>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/5 grid grid-cols-2 md:grid-cols-4 gap-3">
          {complianceBadges.map((badge) => (
            <div key={badge.name} className="flex items-center space-x-2.5 px-3 py-1.5 rounded-lg bg-white dark:bg-white/[0.01] border border-slate-100 dark:border-white/5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block leading-tight">{badge.name}</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">{badge.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
