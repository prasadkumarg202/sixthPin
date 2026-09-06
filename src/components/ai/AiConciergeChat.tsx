"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, ArrowRight } from "lucide-react";

interface AiConciergeChatProps {
  onOpenAssessment: () => void;
  onOpenConsultation: () => void;
}

interface Message {
  sender: "ai" | "user";
  text: string;
  suggestedAction?: {
    label: string;
    action: "assessment" | "consultation";
  };
}

export const AiConciergeChat: React.FC<AiConciergeChatProps> = ({
  onOpenAssessment,
  onOpenConsultation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello! I am SixthPin's Enterprise Architecture Assistant. How can I assist you with multi-agent systems, legacy modernization, data lakehouses, or our 4-week PoC-to-Production framework?",
      suggestedAction: {
        label: "Evaluate Enterprise AI Maturity",
        action: "assessment"
      }
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage: Message = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "SixthPin architects deterministic enterprise AI systems, high-concurrency cloud microservices, and modern lakehouses with guaranteed SLAs.";
      let action: Message["suggestedAction"] = undefined;

      const q = query.toLowerCase();
      if (q.includes("agent") || q.includes("swarm") || q.includes("langgraph")) {
        reply = "Our Multi-Agent systems utilize LangGraph, CrewAI, and Temporal.io to execute complex DAG workflows across ERPs, CRMs, and databases, safeguarded by NeMo semantic guardrails.";
        action = { label: "Schedule Architecture Session", action: "consultation" };
      } else if (q.includes("rag") || q.includes("knowledge") || q.includes("hallucin")) {
        reply = "SixthPin combines dense vector retrieval (pgvector/Pinecone) with symbolic Knowledge Graphs (Neo4j) to deliver GraphRAG architectures achieving 99.4% factual precision with zero hallucination.";
        action = { label: "Take AI Benchmark", action: "assessment" };
      } else if (q.includes("modern") || q.includes("monolith") || q.includes("legacy")) {
        reply = "We modernize legacy monoliths using the Strangler-Fig pattern, automated AST transpilation, and shadow-traffic validation to guarantee zero business downtime during microservice cutovers.";
        action = { label: "Discuss Modernization", action: "consultation" };
      } else if (q.includes("time") || q.includes("poc") || q.includes("weeks") || q.includes("cost")) {
        reply = "Our flagship PoC-to-Production framework guarantees a 4-to-6 week turnaround from architectural blueprint to containerized, security-verified production deployment.";
        action = { label: "Schedule Consultation", action: "consultation" };
      } else if (q.includes("security") || q.includes("hipaa") || q.includes("soc2") || q.includes("gdpr")) {
        reply = "SixthPin architectures are built to SOC 2 Type II, ISO 27001, and HIPAA BAA standards, incorporating edge PII redaction and zero-data-retention LLM endpoints.";
        action = { label: "Take AI Benchmark", action: "assessment" };
      }

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: reply, suggestedAction: action }
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xl shadow-blue-500/25 hover:scale-105 transition-all group"
          >
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span>Ask SixthPin AI</span>
          </button>
        )}
      </div>

      {/* Floating Chat Drawer */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[360px] sm:max-w-[400px] h-[500px] bg-white rounded-2xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="p-3.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  SixthPin Architecture Copilot
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </h4>
                <p className="text-[9px] font-mono text-slate-500">Grounded Enterprise Intelligence</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-1.5 border-b border-slate-100 bg-slate-50/50 flex items-center gap-1 overflow-x-auto no-scrollbar text-[10px]">
            <button
              onClick={() => handleSend("Tell me about Multi-Agent Swarms")}
              className="whitespace-nowrap px-2 py-0.5 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200"
            >
              Multi-Agent Swarms
            </button>
            <button
              onClick={() => handleSend("How do you prevent hallucinations in RAG?")}
              className="whitespace-nowrap px-2 py-0.5 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200"
            >
              GraphRAG Factual Guardrails
            </button>
            <button
              onClick={() => handleSend("What is the 4-week PoC framework?")}
              className="whitespace-nowrap px-2 py-0.5 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200"
            >
              4-Week PoC SLA
            </button>
          </div>

          {/* Messages */}
          <div className="p-3.5 flex-1 overflow-y-auto space-y-2.5 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-2.5 rounded-xl leading-relaxed text-xs ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200/60"
                  }`}
                >
                  {m.text}
                </div>

                {m.suggestedAction && (
                  <button
                    onClick={() => {
                      if (m.suggestedAction?.action === "assessment") {
                        onOpenAssessment();
                      } else {
                        onOpenConsultation();
                      }
                      setIsOpen(false);
                    }}
                    className="mt-1.5 text-[10px] font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md flex items-center gap-1"
                  >
                    <span>{m.suggestedAction.label}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-1.5 text-slate-500 p-1 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-mono text-[9px]">Retrieving SixthPin specs...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 border-t border-slate-100 bg-white flex items-center gap-1.5"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask an architecture question..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
