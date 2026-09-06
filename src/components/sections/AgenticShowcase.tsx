"use client";

import React, { useState } from "react";
import { Cpu, Zap, Shield, Database, CheckCircle2, ArrowRight, Play, Terminal, Layers } from "lucide-react";
import { CyberRobotGraphic } from "@/components/graphics/CyberRobotGraphic";

export const AgenticShowcase = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);
  const [executionStep, setExecutionStep] = useState(3);

  const workflows = [
    {
      id: 0,
      title: "Commercial Loan & Credit Risk Underwriting",
      industry: "BFSI",
      agents: [
        { name: "Orchestrator Agent", role: "Parses loan application & initiates DAG task graph", status: "Active" },
        { name: "OCR & Document Extraction Agent", role: "Extracts 3-year P&L, balance sheets & tax filings", status: "Completed" },
        { name: "Graph Risk Linker Agent", role: "Queries Neo4j knowledge graph for corporate entity ties", status: "Completed" },
        { name: "Deterministic Policy Guard", role: "Validates against Basel III capital requirements", status: "Verified" },
      ],
      output: "Loan Approval Recommendation: Approved @ 6.2% with $1.8M collateral backing. Basel III compliance verified."
    },
    {
      id: 1,
      title: "Autonomous Supply Chain Disruption Mitigation",
      industry: "Manufacturing & Logistics",
      agents: [
        { name: "Telemetry Monitor Agent", role: "Detects 48-hour port congestion delay from IoT feed", status: "Active" },
        { name: "ERP Inventory Agent", role: "Checks SAP buffer stocks across 4 distribution hubs", status: "Completed" },
        { name: "Dynamic Carrier Bidding Agent", role: "Issues automated RFQ to secondary freight providers", status: "Completed" },
        { name: "Human-In-The-Loop Escalator", role: "Secures VP Operations approval for >$50k variance", status: "Approved" },
      ],
      output: "Rerouted 800 TEUs via air-freight buffer. Production schedule preserved with zero assembly line stoppages."
    },
    {
      id: 2,
      title: "Legacy Monolith Refactoring & Test Synthesis",
      industry: "Digital Engineering",
      agents: [
        { name: "AST Parser Agent", role: "Deconstructs 450k lines of legacy Java 8 code", status: "Active" },
        { name: "Domain Context Extractor", role: "Isolates bounded microservice boundaries & DB models", status: "Completed" },
        { name: "Synthetic Test Generator", role: "Generates 1,200 unit & mutation test suites in Jest/Go", status: "Completed" },
        { name: "CI/CD Deployment Bot", role: "Deploys containerized canary microservice to EKS", status: "Verified" },
      ],
      output: "Transpiled monolith module into Go microservice with 99.4% mutation test pass rate. Zero downtime."
    }
  ];

  const currentWf = workflows[activeWorkflow];

  const handleRunSimulator = () => {
    setIsRunning(true);
    setExecutionStep(0);
    const interval = setInterval(() => {
      setExecutionStep((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          setIsRunning(false);
          return 3;
        }
        return prev + 1;
      });
    }, 500);
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200 dark:border-white/10 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-500/30 font-mono uppercase tracking-wider">
            Agentic AI Framework
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Autonomous <span className="text-blue-600 dark:text-[#3b82f6]">Multi-Agent </span><span className="text-orange-600 dark:text-[#f97316]">Orchestration</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            SixthPin replaces fragile single-prompt wrappers with resilient multi-agent swarms built on LangGraph, Temporal, and deterministic semantic guardrails.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Workflow Selector Tabs */}
          <div className="lg:col-span-4 space-y-2.5">
            <h3 className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 font-bold px-1">
              Select Enterprise Scenario
            </h3>
            {workflows.map((wf, idx) => (
              <button
                key={wf.title}
                onClick={() => {
                  setActiveWorkflow(idx);
                  setExecutionStep(3);
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex flex-col space-y-1 ${
                  activeWorkflow === idx
                    ? "bg-white dark:bg-blue-950/40 border-blue-500 dark:border-blue-500/50 text-slate-900 dark:text-white shadow-md shadow-blue-500/10"
                    : "bg-white/80 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                    {wf.industry}
                  </span>
                  {activeWorkflow === idx && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-cyan-400" />
                  )}
                </div>
                <span className="text-xs font-bold leading-snug">{wf.title}</span>
              </button>
            ))}

            <div className="pt-2">
              <button
                onClick={handleRunSimulator}
                disabled={isRunning}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm shadow-blue-600/20 disabled:opacity-50"
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? "animate-spin" : ""}`} />
                {isRunning ? "Simulating Execution Swarm..." : "Run Live Simulation"}
              </button>
            </div>
          </div>

          {/* Right: Live DAG Visualizer */}
          <div className="lg:col-span-8 bg-white dark:bg-[#0d1527] rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-xl space-y-5 transition-colors">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <h4 className="text-xs font-bold text-slate-800 dark:text-white font-mono">
                  LangGraph Dynamic Task Execution Pipeline
                </h4>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20 font-semibold">
                Deterministic SLA: Verified
              </span>
            </div>

            {/* Swarm Agents Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {currentWf.agents.map((agent, index) => {
                const isPassed = executionStep >= index;
                const robotTypes: Array<"orchestrator" | "extractor" | "graph" | "guardrail"> = [
                  "orchestrator",
                  "extractor",
                  "graph",
                  "guardrail"
                ];
                return (
                  <div
                    key={agent.name}
                    className={`p-3.5 rounded-xl border transition-all duration-300 space-y-2 flex items-start gap-3 ${
                      isPassed
                        ? "bg-blue-50/70 dark:bg-blue-950/40 border-blue-300 dark:border-blue-500/40 text-slate-800 dark:text-slate-200 shadow-sm"
                        : "bg-slate-50/60 dark:bg-white/[0.01] border-slate-200 dark:border-white/5 opacity-50 text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    <div className="shrink-0 pt-0.5">
                      <CyberRobotGraphic type={robotTypes[index % 4]} active={isPassed} size="sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                          Agent 0{index + 1}
                        </span>
                        {isPassed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <span className="text-[10px] font-mono text-slate-400">Queued</span>
                        )}
                      </div>
                      <h5 className="font-bold text-xs text-slate-800 dark:text-white leading-tight">{agent.name}</h5>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">{agent.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Output Box */}
            <div className="p-3.5 rounded-xl bg-slate-900 dark:bg-black/60 text-white space-y-1.5 border border-slate-800 dark:border-white/10">
              <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400 font-bold">
                <Terminal className="w-3.5 h-3.5" />
                <span>Deterministic Result Payload:</span>
              </div>
              <p className="text-[11px] text-emerald-300 font-mono leading-relaxed bg-slate-800/80 dark:bg-emerald-950/20 p-2.5 rounded-lg border border-slate-700 dark:border-emerald-500/20">
                {currentWf.output}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
