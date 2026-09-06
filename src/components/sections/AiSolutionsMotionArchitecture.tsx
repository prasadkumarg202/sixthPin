"use client";

import React, { useState } from "react";
import { Bot, Cpu, Zap, Shield, Database, CheckCircle2, ArrowRight, Play, Terminal, Layers, Sparkles, Server, Network, RefreshCw, BarChart3 } from "lucide-react";
import { CyberRobotGraphic } from "@/components/graphics/CyberRobotGraphic";

export const AiSolutionsMotionArchitecture: React.FC = () => {
  const [activePipeline, setActivePipeline] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  const pipelines = [
    {
      name: "Enterprise Multi-Agent Flow",
      tagline: "Autonomous Task DAG Decomposition & Execution",
      description: "Real-time orchestration where specialized autonomous robots collaborate to process mission-critical enterprise workflows without human bottlenecks.",
      nodes: [
        {
          title: "Ingress Sentinel Robot",
          role: "Data Ingestion & PII Redaction",
          tech: "Presidio + Kafka",
          metric: "5ms P99 Latency",
          robotType: "extractor" as const,
        },
        {
          title: "Nexus Core Robot",
          role: "LangGraph Multi-Agent Orchestrator",
          tech: "LangGraph + Anthropic/OpenAI",
          metric: "42.8k TPS Swarm",
          robotType: "orchestrator" as const,
        },
        {
          title: "Vector Knowledge Robot",
          role: "GraphRAG & Entity Memory Linker",
          tech: "Neo4j + pgvector + Databricks",
          metric: "99.4% Factual Precision",
          robotType: "graph" as const,
        },
        {
          title: "Aegis Guardrail Robot",
          role: "Deterministic Policy & SLA Guard",
          tech: "NeMo Guardrails + Schema Validator",
          metric: "0% Hallucination SLA",
          robotType: "guardrail" as const,
        },
      ],
      streamLog: [
        "INGRESS: Commercial payload decrypted and scanned. 0 vulnerabilities detected.",
        "ORCHESTRATOR: Swarm spawned 4 concurrent reasoning threads for cross-department validation.",
        "KNOWLEDGE: Vector graph matched 18,400 historical financial nodes in 12ms.",
        "GUARDRAIL: Output compliance verified against SOC2 & ISO 27001 policies. Dispatched.",
      ],
    },
    {
      name: "Modern Lakehouse & Vector Pipeline",
      tagline: "High-Throughput Hybrid Search & Real-Time RAG",
      description: "Unified enterprise data architecture indexing billions of structured & unstructured data records into real-time vectorized neural graphs.",
      nodes: [
        {
          title: "Streaming Ingestion Bot",
          role: "CDC & Event Streaming",
          tech: "Apache Spark + Kafka + Flink",
          metric: "1.2M Events / Sec",
          robotType: "extractor" as const,
        },
        {
          title: "Lakehouse Core Bot",
          role: "Delta Lake / Iceberg Processing",
          tech: "Databricks Delta + Snowflake",
          metric: "Zero Data Duplication",
          robotType: "orchestrator" as const,
        },
        {
          title: "Embedding Index Bot",
          role: "Dense & Sparse Vector Synthesis",
          tech: "Cohere Embed-v3 + pgvector",
          metric: "1536-dim Embedding",
          robotType: "graph" as const,
        },
        {
          title: "Governance Bot",
          role: "RBAC & Column-Level Security",
          tech: "Immuta + Unity Catalog",
          metric: "100% Audit Compliance",
          robotType: "guardrail" as const,
        },
      ],
      streamLog: [
        "INGESTION: Spark stream processed 45,000 telemetry packets from distributed IoT gateways.",
        "LAKEHOUSE: ACID merge executed on Delta table with zero schema drift.",
        "INDEXING: 8,200 document chunks vectorized and indexed into HNSW pgvector graph.",
        "GOVERNANCE: Unity Catalog enforced column-level masking for unauthorized consumer roles.",
      ],
    },
  ];

  const current = pipelines[activePipeline];

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#070c18] border-b border-slate-200 dark:border-white/10 relative transition-colors duration-200 overflow-hidden">
      {/* Background Grid Pattern & Ambience */}
      <div className="absolute inset-0 bg-theme-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-orange-500/5 dark:bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-500/30 font-mono uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 animate-bounce" />
            <span>Autonomous AI Solutions Flow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How SixthPin <span className="text-blue-600 dark:text-[#3b82f6]">AI & Robot Swarms </span><span className="text-orange-600 dark:text-[#f97316]">Execute</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore our production architecture showing live data movement, autonomous robot reasoning stages, deterministic guardrails, and cloud deployment pipelines.
          </p>

          {/* Pipeline Switcher */}
          <div className="pt-2 flex items-center justify-center gap-2">
            {pipelines.map((pipe, idx) => (
              <button
                key={pipe.name}
                onClick={() => setActivePipeline(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  activePipeline === idx
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                {pipe.name}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Architecture Flow Panel */}
        <div className="bg-white dark:bg-[#0b1325] rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl p-5 sm:p-7 space-y-6">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-white/10">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {current.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {current.tagline}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Streaming Live Telemetry
              </span>
            </div>
          </div>

          {/* 4-Node Flow Graphic with Animated SVG Laser Spine */}
          <div className="relative py-4">
            {/* Animated Laser Pipeline Beam */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 1000 220" fill="none" preserveAspectRatio="none">
                <line x1="120" y1="110" x2="880" y2="110" stroke="rgba(148, 163, 184, 0.2)" strokeWidth="4" strokeDasharray="6,6" />
                <line
                  x1="120"
                  y1="110"
                  x2="880"
                  y2="110"
                  stroke="#3b82f6"
                  strokeWidth="3.5"
                  className="animate-flow-dash dark:stroke-cyan-400"
                />
              </svg>
            </div>

            {/* 4 Robot Architecture Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {current.nodes.map((node, i) => (
                <div
                  key={node.title}
                  className="p-4 rounded-xl bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">
                        Layer 0{i + 1}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        {node.metric}
                      </span>
                    </div>

                    {/* Animated Cyber Robot Visual Avatar */}
                    <div className="py-2.5 flex items-center justify-center">
                      <CyberRobotGraphic type={node.robotType} active={true} size="md" />
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white text-center mt-1">
                      {node.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-1 leading-relaxed">
                      {node.role}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200 dark:border-white/10 text-center">
                    <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-white/5 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/10 inline-block">
                      {node.tech}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Architecture Stream Log */}
          <div className="rounded-xl bg-slate-900 dark:bg-black/90 p-4 border border-slate-800 dark:border-white/10 font-mono text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-slate-400">
              <span className="flex items-center gap-2 text-cyan-400 font-bold">
                <Terminal className="w-3.5 h-3.5" />
                Live Node Execution Pipeline:
              </span>
              <span className="text-emerald-400 font-semibold">0% Loss • SLA Guaranteed</span>
            </div>
            <div className="space-y-1.5 pt-1">
              {current.streamLog.map((log, idx) => (
                <div key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-blue-400 font-bold shrink-0">[{idx + 1}]</span>
                  <span className="text-slate-200">{log}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
