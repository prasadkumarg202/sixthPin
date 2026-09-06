import React from "react";
import { techEcosystemCategories } from "@/data/capabilities";
import { Cpu, Database, Cloud, Code } from "lucide-react";

export const TechEcosystem = () => {
  const icons = [Cpu, Database, Cloud, Code];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-500/30 font-mono uppercase tracking-wider">
            Open & Cloud-Native
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Enterprise <span className="text-blue-600 dark:text-[#3b82f6]">Technology </span><span className="text-orange-600 dark:text-[#f97316]">Ecosystem</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            We build on proven open-source foundations and tier-1 enterprise platforms to prevent proprietary vendor lock-in.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {techEcosystemCategories.map((category, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={category.category}
                className="bg-white dark:bg-[#0d1527] rounded-2xl p-5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl space-y-4 transition-colors"
              >
                <div className="flex items-center space-x-2.5 pb-2.5 border-b border-slate-100 dark:border-white/10">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-bold text-xs text-slate-900 dark:text-white">{category.category}</h3>
                </div>

                <div className="space-y-1.5">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-xs"
                    >
                      <span className="font-medium text-slate-700 dark:text-slate-300">{tech.name}</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-blue-950/40 text-slate-600 dark:text-blue-300 border border-slate-200 dark:border-blue-500/30">
                        {tech.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
