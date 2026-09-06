"use client";

import React, { useState } from "react";
import Link from "next/link";
import { capabilitiesData } from "@/data/capabilities";
import { Cpu, Network, Layers, Database, ShieldCheck, Lock, ArrowRight, Check } from "lucide-react";

export const CapabilitiesGrid = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "AI & Automation", "Digital Engineering", "Data & Analytics", "Cloud & Platform"];

  const filteredCapabilities =
    activeTab === "All"
      ? capabilitiesData
      : capabilitiesData.filter((c) => c.category === activeTab);

  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    Network: <Network className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    Layers: <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    Database: <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
    Lock: <Lock className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
  };

  return (
    <section className="py-20 bg-white dark:bg-[#060911] border-b border-slate-200 dark:border-white/10 transition-colors" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-500/30 font-mono uppercase tracking-wider">
            Engineering Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive <span className="text-blue-600 dark:text-[#3b82f6]">Enterprise Architecture </span><span className="text-orange-600 dark:text-[#f97316]">Stack</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            From foundational data engineering to multi-agent swarms and automated cloud governance, explore our modular engineering capabilities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCapabilities.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#0d1527] rounded-2xl p-5 border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/40 shadow-sm dark:shadow-xl transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[item.iconName] || <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 font-bold border border-blue-100 dark:border-blue-500/30">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-white/5">
                  {item.keyFeatures.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                      <Check className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3.5 border-t border-slate-100 dark:border-white/5 space-y-2.5">
                <div className="bg-slate-50 dark:bg-blue-950/30 p-2 rounded-lg border border-slate-200 dark:border-blue-500/20">
                  <span className="text-[9px] font-mono text-orange-600 dark:text-orange-400 uppercase font-bold block">
                    Measurable SLA:
                  </span>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{item.businessImpact}</p>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex flex-wrap gap-1">
                    {item.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={item.href}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1 group/link transition-colors"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
