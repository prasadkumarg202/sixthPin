import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText, Sparkles, TrendingUp } from "lucide-react";

export const InsightsPreview = () => {
  const articles = [
    {
      type: "Whitepaper",
      category: "Agentic AI",
      title: "Architecting Resilient Multi-Agent Swarms: From Prompt Engineering to Deterministic State DAGs",
      readTime: "14 min read",
      date: "September 2026",
      summary: "A technical breakdown of state machines, tool validation gates, and human-in-the-loop escalation patterns in LangGraph and Temporal.",
      slug: "architecting-resilient-multi-agent-swarms"
    },
    {
      type: "Engineering Report",
      category: "Data Lakehouse",
      title: "Benchmarking GraphRAG vs Dense Vector Retrieval on 10M Document Enterprise Silos",
      readTime: "11 min read",
      date: "August 2026",
      summary: "Empirical evaluation of factual precision, hallucination rates, and latency comparing pgvector with hybrid Neo4j knowledge graphs.",
      slug: "benchmarking-graphrag-vs-dense-vector-retrieval"
    },
    {
      type: "Case Study Analysis",
      category: "Digital Modernization",
      title: "Decomposing 20-Year-Old Monoliths: A Zero-Downtime Strangler-Fig Strategy in Kubernetes",
      readTime: "9 min read",
      date: "July 2026",
      summary: "How to use shadow traffic routing and synthetic test synthesis to migrate mission-critical transactional cores without business outages.",
      slug: "decomposing-monoliths-zero-downtime-strangler-fig"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#060911] border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-500/30 font-mono uppercase tracking-wider">
              Research & Engineering Insights
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Enterprise <span className="text-blue-600 dark:text-[#3b82f6]">Thought </span><span className="text-orange-600 dark:text-[#f97316]">Leadership</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Deep-dive architectural whitepapers, empirical benchmarks, and production playbooks authored by SixthPin Principal Engineers.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 text-xs font-semibold transition-colors"
          >
            Explore Knowledge Hub
            <ArrowRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="bg-white dark:bg-[#0d1527] rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/40 shadow-sm dark:shadow-xl transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-blue-600 dark:text-blue-400 uppercase font-bold text-[10px]">
                    {article.category}
                  </span>
                  <span className="text-slate-500 dark:text-slate-500 text-[11px]">{article.readTime}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-500 font-mono text-[11px]">{article.date}</span>
                <Link
                  href={`/insights`}
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1 group/read transition-colors"
                >
                  <span>Read Paper</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/read:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
