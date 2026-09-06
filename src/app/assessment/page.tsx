"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { assessmentQuestions, AssessmentOption, calculateBenchmark, BenchmarkResult } from "@/data/assessmentQuestions";
import { ConsultationModal } from "@/components/forms/ConsultationModal";
import { ArrowRight, ArrowLeft, CheckCircle2, Cpu, BarChart3, AlertCircle, RefreshCw, Download } from "lucide-react";
import confetti from "canvas-confetti";

export default function AssessmentStandalonePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AssessmentOption>>({});
  const [result, setResult] = useState<BenchmarkResult | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQ = assessmentQuestions[currentStep];
  const isFinished = currentStep >= assessmentQuestions.length;

  const handleSelectOption = (option: AssessmentOption) => {
    const newAnswers = { ...answers, [currentQ.id]: option };
    setAnswers(newAnswers);

    if (currentStep + 1 < assessmentQuestions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      const benchmark = calculateBenchmark(newAnswers);
      setResult(benchmark);
      setCurrentStep(assessmentQuestions.length);
      try {
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-[#060911] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <div className="flex-1 pt-28 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Title */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-950/40 text-blue-400 border border-blue-500/30 font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-orange-400" /> 3-Minute Diagnostic
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Enterprise <span className="text-[#3b82f6]">AI Readiness </span><span className="text-[#f97316]">& Maturity Benchmark</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Evaluate your enterprise across 5 core dimensions: Multi-Agent AI, Lakehouse Architecture, Cloud Infrastructure, Engineering Agility, and Security Guardrails.
          </p>
        </div>

        {/* Container */}
        <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
          {!isFinished && (
            <div className="mb-6 space-y-1.5">
              <div className="flex justify-between text-[11px] font-mono text-slate-400 font-medium">
                <span>Category: {currentQ?.category}</span>
                <span>Question {currentStep + 1} / {assessmentQuestions.length}</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-orange-500 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / assessmentQuestions.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {!isFinished ? (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold">
                  {currentQ?.category}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {currentQ?.question}
                </h2>
                <p className="text-xs text-slate-400">{currentQ?.explanation}</p>
              </div>

              <div className="space-y-2 pt-2">
                {currentQ?.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    className="w-full text-left p-4 rounded-xl bg-white/[0.02] hover:bg-blue-950/30 border border-white/5 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all flex items-start gap-3 group"
                  >
                    <div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-orange-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-orange-400 transition-colors" />
                    </div>
                    <span className="text-xs sm:text-sm leading-relaxed">{opt.text}</span>
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <div className="pt-3 border-t border-white/5">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Previous Question
                  </button>
                </div>
              )}
            </div>
          ) : (
            result && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/60 via-indigo-950/30 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                      Diagnostic Evaluation Complete
                    </span>
                    <h2 className="text-2xl font-extrabold text-white">
                      Maturity Tier: <span className="text-orange-400">{result.maturityTier}</span>
                    </h2>
                    <p className="text-xs text-slate-300 max-w-sm">
                      Your organization ranks at the <strong>{result.overallScore}th percentile</strong> for enterprise AI-readiness.
                    </p>
                  </div>
                  <div className="w-24 h-24 rounded-2xl bg-blue-950/40 border-2 border-orange-400 flex flex-col items-center justify-center text-orange-400 font-mono shadow-lg shadow-orange-500/10">
                    <span className="text-3xl font-black">{result.overallScore}</span>
                    <span className="text-[9px] uppercase font-bold text-slate-400">/ 100</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-blue-400" /> Dimension Analysis
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(result.pillarBreakdown).map(([pillar, score]) => (
                      <div key={pillar} className="bg-white/[0.02] p-2.5 rounded-lg border border-white/5 space-y-1">
                        <div className="flex justify-between text-[11px]">
                          <span className="font-semibold text-slate-300 capitalize">{pillar}</span>
                          <span className="font-mono text-orange-400 font-bold">{score}%</span>
                        </div>
                        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-500 to-orange-500 h-full rounded-full" style={{ width: `${score}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-2">
                    <span className="text-[10px] font-mono text-rose-400 font-bold uppercase flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Priority Gaps:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {result.keyGaps.map((gap, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{gap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 4-Phase Recommended Roadmap:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {result.recommendedRoadmap.map((item, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-emerald-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="pt-4 border-t border-white/10 space-y-3">
                    <span className="text-xs font-semibold text-white block">
                      Download Full 15-Page Executive Diagnostic & Roadmap:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <input
                        type="email"
                        required
                        placeholder="Work Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Company Name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                      <button
                        type="submit"
                        className="py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1"
                      >
                        <Download className="w-3.5 h-3.5" /> Download Report
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Report sent to <strong>{email}</strong>.</span>
                  </div>
                )}

                <div className="pt-3 flex items-center justify-between border-t border-white/10">
                  <button
                    onClick={handleReset}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" /> Retake Diagnostic
                  </button>
                  <button
                    onClick={() => setConsultationOpen(true)}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg shadow-blue-600/30"
                  >
                    Discuss with Architect <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <Footer />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </main>
  );
}
