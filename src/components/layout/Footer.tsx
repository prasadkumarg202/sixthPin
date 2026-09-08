import React from "react";
import Link from "next/link";
import { Shield, Lock, Terminal, Globe2, Mail, MapPin } from "lucide-react";
import { AnimatedLogo } from "@/components/brand/AnimatedLogo";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      {/* Top Value Banner */}
      <div className="border-b border-slate-800 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs">Enterprise Zero-Trust SLA</h4>
                <p className="text-[11px] text-slate-400">SOC2 Type II, ISO 27001 & HIPAA BAA standards.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs">Deterministic AI Delivery</h4>
                <p className="text-[11px] text-slate-400">4-week PoC-to-Production framework.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs">Global Delivery Hubs</h4>
                <p className="text-[11px] text-slate-400">North America, EMEA, and APAC engineering hubs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 space-y-3">
            <div className="mb-1">
              <AnimatedLogo />
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed max-w-sm">
              SixthPin is a global digital engineering and enterprise AI platform partner. We architect autonomous multi-agent systems, modernize legacy monoliths, and scale cloud data lakehouses.
            </p>
            <div className="pt-1 flex flex-col space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>contact@sixthpin.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>San Francisco • New York • London • Singapore • Bangalore</span>
              </div>
            </div>
          </div>

          {/* AI & Automation */}
          <div className="space-y-2.5">
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
              AI & Automation
            </h5>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <Link href="/services/multi-agent-systems-orchestration" className="hover:text-blue-400 transition-colors">
                  Multi-Agent Swarms
                </Link>
              </li>
              <li>
                <Link href="/services/generative-ai-engineering" className="hover:text-blue-400 transition-colors">
                  Generative AI Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/enterprise-rag-and-knowledge-graphs" className="hover:text-blue-400 transition-colors">
                  Enterprise GraphRAG
                </Link>
              </li>
              <li>
                <Link href="/services/ai-governance-and-guardrails" className="hover:text-blue-400 transition-colors">
                  AI Governance & Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Digital Engineering */}
          <div className="space-y-2.5">
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
              Digital Engineering
            </h5>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <Link href="/services/legacy-application-modernization" className="hover:text-blue-400 transition-colors">
                  Legacy Modernization
                </Link>
              </li>
              <li>
                <Link href="/services/custom-product-engineering" className="hover:text-blue-400 transition-colors">
                  Custom Product Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/modern-data-lakehouse-design" className="hover:text-blue-400 transition-colors">
                  Data Lakehouse Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/kubernetes-and-serverless-platforms" className="hover:text-blue-400 transition-colors">
                  Cloud-Native & K8s
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2.5">
            <h5 className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
              Company
            </h5>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <Link href="/company/about" className="hover:text-blue-400 transition-colors">
                  About SixthPin
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-blue-400 transition-colors">
                  Enterprise Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-blue-400 transition-colors">
                  Research & Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-slate-800 bg-slate-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px]">
          <p>© {new Date().getFullYear()} SixthPin Technologies, Inc. All rights reserved.</p>
          <div className="flex items-center space-x-4 text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/security" className="hover:text-slate-300">Security & GRC</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
