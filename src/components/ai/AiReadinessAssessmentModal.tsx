"use client";

import React, { useState } from "react";
import { assessmentQuestions, AssessmentOption, calculateBenchmark, BenchmarkResult } from "@/data/assessmentQuestions";
import { X, ArrowRight, ArrowLeft, CheckCircle2, Cpu, Download, RefreshCw, BarChart3, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface AiReadinessAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export const AiReadinessAssessmentModal: React.FC<AiReadinessAssessmentModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AssessmentOption>>({});
  const [result, setResult] = useState<BenchmarkResult | null>(null);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

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
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Topbar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900">SixthPin AI Maturity Diagnostic</h3>
              <p className="text-[10px] font-mono text-slate-500">
                {!isFinished
                  ? `Question ${currentStep + 1} of ${assessmentQuestions.length}`
                  : "Diagnostic Results & Actionable Roadmap"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isFinished && (
          <div className="w-full bg-slate-100 h-1">
            <div
              className="bg-blue-600 h-1 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / assessmentQuestions.length) * 100}%` }}
            />
          </div>
        )}

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {!isFinished ? (
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-bold block mb-0.5">
                  {currentQ.category}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {currentQ.question}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{currentQ.explanation}</p>
              </div>

              <div className="space-y-2 pt-1">
                {currentQ.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    className="w-full text-left p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-slate-900 transition-all flex items-start gap-2.5 group"
                  >
                    <div className="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-blue-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-blue-600 transition-colors" />
                    </div>
                    <span className="text-xs leading-relaxed">{opt.text}</span>
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <div className="pt-2">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-[11px] text-slate-500 hover:text-slate-900 flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" /> Previous Question
                  </button>
                </div>
              )}
            </div>
          ) : (
            result && (
              <div className="space-y-5">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 font-bold">
                      Diagnostic Evaluation Complete
                    </span>
                    <h4 className="text-lg font-extrabold text-slate-900">
                      Maturity Tier: <span className="text-blue-600">{result.maturityTier}</span>
                    </h4>
                    <p className="text-[11px] text-slate-600 max-w-sm">
                      Based on SixthPin&apos;s architectural assessment model for enterprise GenAI and cloud automation.
                    </p>
                  </div>
                  <div className="w-20 h-20 rounded-2xl bg-white border-2 border-blue-500 flex flex-col items-center justify-center text-blue-600 font-mono shadow-sm">
                    <span className="text-2xl font-black">{result.overallScore}</span>
                    <span className="text-[9px] uppercase font-bold text-slate-400">/ 100</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-blue-600" /> Dimension Breakdown
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(result.pillarBreakdown).map(([pillar, score]) => (
                      <div key={pillar} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 space-y-1">
                        <div className="flex justify-between text-[11px]">
                          <span className="font-semibold text-slate-700 capitalize">{pillar}</span>
                          <span className="font-mono text-blue-600 font-bold">{score}%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                          <div className="bg-blue-600 h-full rounded-full" style={{ width: `${score}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 space-y-1.5">
                    <span className="text-[10px] font-mono text-rose-700 font-bold uppercase flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> Priority Gaps:
                    </span>
                    <ul className="space-y-1 text-[11px] text-slate-700">
                      {result.keyGaps.map((gap, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-rose-600 font-bold">•</span>
                          <span>{gap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                    <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Recommended Roadmap:
                    </span>
                    <ul className="space-y-1 text-[11px] text-slate-700">
                      {result.recommendedRoadmap.map((item, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-xs font-semibold text-slate-900 block">
                      Download Full 15-Page Architectural Assessment & Roadmap:
                    </span>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        required
                        placeholder="Work Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Company Name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1"
                      >
                        <Download className="w-3 h-3" /> Get Report
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Report dispatched to <strong>{email}</strong>.</span>
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {isFinished && (
          <div className="p-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
            <button
              onClick={handleReset}
              className="text-[11px] text-slate-500 hover:text-slate-900 flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" /> Retake
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation?.();
              }}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5"
            >
              Discuss with Architect <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
