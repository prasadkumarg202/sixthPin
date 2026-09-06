"use client";

import React, { useState, useEffect } from "react";
import { Bot, Cpu, Zap, Shield, Database, CheckCircle2, Play, Pause, Terminal, Sparkles, Activity, Layers, ArrowRight, RefreshCw } from "lucide-react";
import { CyberRobotGraphic } from "./CyberRobotGraphic";

export const AiAgentFlowMotionGraphic: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const stages = [
    {
      id: 1,
      num: "01",
      name: "Agent Ingress & Sanitize",
      type: "extractor" as const,
      role: "PII & Anomaly Redactor",
      badge: "6ms • Zero-Leak",
      desc: "Redacts enterprise PHI/PII data before entering LLM tokenization loops.",
      metric: "99.9% Redaction Accuracy",
      accent: "blue",
    },
    {
      id: 2,
      num: "02",
      name: "Swarm Orchestrator",
      type: "orchestrator" as const,
      role: "LangGraph DAG Engine",
      badge: "6 Sub-Agents Active",
      desc: "Dynamically constructs task DAG & coordinates specialized AI bots.",
      metric: "42.8k Tokens / Sec",
      accent: "indigo",
    },
    {
      id: 3,
      num: "03",
      name: "GraphRAG & Knowledge",
      type: "graph" as const,
      role: "Neo4j + pgvector Core",
      badge: "14 Graph Hops",
      desc: "Dense vectors cross-referenced with enterprise knowledge entities.",
      metric: "99.4% Factual Precision",
      accent: "cyan",
    },
    {
      id: 4,
      num: "04",
      name: "Deterministic Guard",
      type: "guardrail" as const,
      role: "NeMo Policy Sentinel",
      badge: "0% Hallucination SLA",
      desc: "Validates JSON schemas, policy constraints, and enterprise security rules.",
      metric: "SOC2 & Basel III Compliant",
      accent: "orange",
    },
  ];

  return (
    <div className="w-full relative rounded-2xl overflow-hidden bg-white dark:bg-[#070d1d] border border-slate-200/90 dark:border-white/10 shadow-2xl transition-colors duration-200 p-4 sm:p-6 lg:p-7">
      {/* Top Header with Live Telemetry Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-3.5 h-3.5 rounded-full bg-blue-500 animate-ping absolute" />
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono tracking-tight">
                AI Autonomous Swarm & Solutions Pipeline
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                LIVE STREAMING
              </span>
            </div>
          </div>
        </div>

        {/* Live Controls */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
          >
            {isAutoPlaying ? <Pause className="w-3 h-3 text-blue-500" /> : <Play className="w-3 h-3 text-emerald-500" />}
            {isAutoPlaying ? "Auto-Flow Active" : "Paused"}
          </button>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
          <span className="hidden sm:flex items-center gap-1 text-orange-600 dark:text-orange-400 font-semibold">
            <Shield className="w-3.5 h-3.5" /> 0% Hallucination SLA
          </span>
        </div>
      </div>

      {/* Main Interactive Flow Diagram with Animated Connecting Laser Tracks */}
      <div className="py-6 sm:py-8 relative">
        {/* Animated Connecting SVG Laser Lines */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1000 240" fill="none" preserveAspectRatio="none">
            {/* Background Spine */}
            <line x1="120" y1="120" x2="880" y2="120" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="3" strokeDasharray="4,4" />
            
            {/* Dynamic Animated Laser Pulse Stream */}
            <line
              x1="120"
              y1="120"
              x2="880"
              y2="120"
              stroke="#3b82f6"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="animate-flow-dash dark:stroke-cyan-400"
            />

            {/* Glowing active packet position indicators */}
            <circle
              cx={activeStep === 1 ? 120 : activeStep === 2 ? 370 : activeStep === 3 ? 630 : 880}
              cy="120"
              r="7"
              fill="#f97316"
              className="animate-ping"
            />
          </svg>
        </div>

        {/* 4 Connected Stages with Animated Cyber Robots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {stages.map((stg) => {
            const isActive = activeStep === stg.id;
            return (
              <div
                key={stg.id}
                onClick={() => {
                  setActiveStep(stg.id);
                  setIsAutoPlaying(false);
                }}
                className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between group ${
                  isActive
                    ? "bg-blue-50/90 dark:bg-blue-950/50 border-blue-500 dark:border-blue-400 shadow-xl shadow-blue-500/15 scale-[1.03] ring-2 ring-blue-500/20"
                    : "bg-slate-50/60 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-blue-500/40 opacity-85 hover:opacity-100"
                }`}
              >
                {/* Active Glowing Top Accent Bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-500 animate-pulse" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-blue-600 dark:text-blue-400 bg-blue-100/70 dark:bg-blue-900/40 px-2 py-0.5 rounded">
                      STAGE {stg.num}
                    </span>
                    {isActive ? (
                      <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        <Activity className="w-3.5 h-3.5 animate-pulse" /> EXECUTING
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-400">READY</span>
                    )}
                  </div>

                  {/* VISIBLE ANIMATED CYBER ROBOT AVATAR */}
                  <div className="py-2 flex items-center justify-center">
                    <CyberRobotGraphic type={stg.type} active={isActive} size="md" />
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1 mb-1 text-center">
                    {stg.name}
                  </h4>
                  <p className="text-[10px] font-mono font-semibold text-blue-600 dark:text-cyan-400 text-center mb-2">
                    {stg.role}
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed text-center">
                    {stg.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-500 dark:text-slate-400">{stg.badge}</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{stg.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Terminal Streaming Log Output */}
      <div className="rounded-xl bg-slate-900 dark:bg-black/90 border border-slate-800 dark:border-white/10 p-3.5 sm:p-4 space-y-2.5">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold">
            <Terminal className="w-4 h-4 text-blue-400" />
            <span>Telemetry Execution Log Stream:</span>
          </div>
          <span className="text-emerald-400 text-[10px] font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Real-time Swarm Sync
          </span>
        </div>

        <div className="font-mono text-xs leading-relaxed space-y-1.5 text-slate-300">
          {activeStep === 1 && (
            <p className="text-blue-300 animate-in fade-in duration-200">
              <span className="text-slate-500">[00:00:012]</span> <span className="text-blue-400 font-bold">ROBOT-ALPHA:</span> Ingress packet intercepted. 3 PII tax identifiers masked via edge Presidio layer before model dispatch.
            </p>
          )}
          {activeStep === 2 && (
            <p className="text-indigo-300 animate-in fade-in duration-200">
              <span className="text-slate-500">[00:00:048]</span> <span className="text-indigo-400 font-bold">ROBOT-NEXUS:</span> LangGraph initialized multi-agent DAG. Dispatched tool queries to ERP, Core Banking, and Credit Bureau APIs in parallel.
            </p>
          )}
          {activeStep === 3 && (
            <p className="text-cyan-300 animate-in fade-in duration-200">
              <span className="text-slate-500">[00:00:094]</span> <span className="text-cyan-400 font-bold">ROBOT-VECTOR:</span> Hybrid GraphRAG query resolved 14 entity relationships across Neo4j enterprise ontology + pgvector semantic embeddings.
            </p>
          )}
          {activeStep === 4 && (
            <p className="text-orange-300 animate-in fade-in duration-200">
              <span className="text-slate-500">[00:00:142]</span> <span className="text-orange-400 font-bold">ROBOT-AEGIS:</span> NeMo Guardrails validated capital compliance (Basel III). 0% hallucination verification complete. Deterministic payload finalized.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
