"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Landmark, HeartPulse, Factory, ShoppingBag, Radio, ArrowRight, Check } from "lucide-react";

export const IndustryPlaybooks = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      name: "Banking & Insurance (BFSI)",
      slug: "banking-financial-services-insurance",
      icon: Landmark,
      headline: "Autonomous Risk Underwriting, Fraud Graphs & Real-Time AML",
      overview: "Eliminate manual verification cycles and protect enterprise assets with multi-agent claims verification, GraphRAG compliance audits, and sub-10ms transaction fraud scoring.",
      useCases: [
        "Multi-Agent Commercial Underwriting Swarms",
        "Knowledge-Graph Enhanced AML & Fraud Ring Identification",
        "Regulatory Reporting (Basel III / Solvency II) Automation",
        "Conversational Wealth Advisory with Strict Financial Guardrails"
      ],
      kpiImpact: "94% faster claims resolution • $4.2M average fraud loss prevention",
      architectureHighlight: "Private VPC Azure OpenAI + Neo4j Graph DB + pgvector Hybrid Retrieval"
    },
    {
      name: "Healthcare & Life Sciences",
      slug: "healthcare-and-life-sciences",
      icon: HeartPulse,
      headline: "HIPAA-Compliant Clinical RAG & Patient Journey Intelligence",
      overview: "Empower clinical researchers and physicians with zero-hallucination protocol synthesis, EHR semantic indexing, and automated diagnostic coding.",
      useCases: [
        "Deterministic Clinical Trial Protocol Synthesis",
        "EHR Structured & Unstructured Document Extraction",
        "Edge PHI Redaction & Synthetic Patient Data Generation",
        "Automated Prior Authorization & Insurance Adjudication"
      ],
      kpiImpact: "78% clinical research time savings • 100% HIPAA & BAA adherence",
      architectureHighlight: "On-Prem / Dedicated VPC Enclave + NeMo PHI Sanitizer + LlamaIndex"
    },
    {
      name: "Manufacturing & Supply Chain",
      slug: "manufacturing-and-supply-chain",
      icon: Factory,
      headline: "Edge Computer Vision & Autonomous Disruption Mitigation",
      overview: "Connect factory IoT telemetry, SAP ERP inventories, and carrier logistics into self-healing predictive manufacturing pipelines.",
      useCases: [
        "Sub-30ms Optical Assembly Defect Detection on Edge GPUs",
        "Dynamic ERP Inventory Buffer & Automated Carrier Re-Bidding",
        "Predictive Equipment Maintenance via Acoustic & Thermal Telemetry",
        "Supply Chain Carbon Footprint & Scope 3 ESG Audit Automation"
      ],
      kpiImpact: "99.94% inspection accuracy • Zero assembly line stoppage incidents",
      architectureHighlight: "NVIDIA Jetson Edge Inference + AWS IoT Core + Apache Kafka"
    },
    {
      name: "Retail & E-Commerce",
      slug: "retail-and-intelligent-commerce",
      icon: ShoppingBag,
      headline: "Real-Time Demand Lakehouse & Dynamic Personalization",
      overview: "Replace static catalogs and batch batch analytics with sub-second event streaming, automated price optimization, and autonomous inventory replenishment.",
      useCases: [
        "Real-Time Lakehouse Ingestion with Databricks & Apache Iceberg",
        "Dynamic SKU Markdown & Demand Elasticity Modeling",
        "Multi-Modal Conversational Shopping Concierge",
        "Omnichannel Store Replenishment Automation"
      ],
      kpiImpact: "14.6% gross margin lift • Sub-second data latency across 1,200+ stores",
      architectureHighlight: "Databricks Lakehouse + Apache Flink + Next.js Edge Commerce"
    },
    {
      name: "Telecom, Media & Tech",
      slug: "telecom-media-and-technology",
      icon: Radio,
      headline: "Autonomous Network SRE & Intelligent Content Pipelines",
      overview: "Automate network outage triage, reduce customer support churn, and synthesize multilingual media metadata at petabyte scale.",
      useCases: [
        "Self-Healing Telecom Network Anomaly Remediation",
        "Autonomous Tier-1/2 Customer Operations Resolution Swarm",
        "Automated Multimodal Video Indexing & Subtitle Synthesis",
        "5G Dynamic Slice Provisioning & Billing Automation"
      ],
      kpiImpact: "62% support ticket resolution without human intervention",
      architectureHighlight: "Kubernetes Microservices + Go Gateways + LangGraph Swarms"
    }
  ];

  const current = industries[activeIndustry];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-500/30 font-mono uppercase tracking-wider">
            Industry Blueprints
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verticalized <span className="text-blue-600 dark:text-[#3b82f6]">AI Transformation </span><span className="text-orange-600 dark:text-[#f97316]">Playbooks</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Domain-specific challenges require custom data taxonomies, specialized regulatory compliance fences, and deep systems integration.
          </p>
        </div>

        {/* Industry Nav Tabs */}
        <div className="flex overflow-x-auto no-scrollbar space-x-2 pb-3 mb-8 justify-start lg:justify-center">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <button
                key={ind.name}
                onClick={() => setActiveIndustry(idx)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeIndustry === idx
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Canvas */}
        <div className="bg-white dark:bg-[#0d1527] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-2xl transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 uppercase font-bold tracking-wider">
                    {current.name} Blueprint
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    {current.headline}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {current.overview}
              </p>

              {/* Use cases */}
              <div className="space-y-2 pt-1">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                  Target Production Deployments:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.useCases.map((uc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-white/[0.02] p-2.5 rounded-lg border border-slate-200 dark:border-white/5">
                      <Check className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>{uc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-slate-50 dark:from-blue-950/50 dark:via-indigo-950/30 dark:to-slate-900 rounded-xl p-5 border border-blue-100 dark:border-blue-500/20 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 font-bold block mb-1">
                  Validated Benchmark Impact:
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {current.kpiImpact}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold block mb-1">
                  Architectural Foundation:
                </span>
                <p className="text-[11px] text-slate-700 dark:text-slate-300 font-mono bg-white dark:bg-black/40 p-2.5 rounded-lg border border-slate-200 dark:border-white/10">
                  {current.architectureHighlight}
                </p>
              </div>

              <Link
                href={`/industries/${current.slug}`}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-blue-500/20"
              >
                Explore {current.name} Case Studies
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
