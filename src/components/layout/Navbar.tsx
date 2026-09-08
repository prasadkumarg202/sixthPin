"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navigationData, NavMenu, NavItem } from "@/data/navigation";
import { useTheme } from "@/context/ThemeContext";
import { AnimatedLogo } from "@/components/brand/AnimatedLogo";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Shield,
  Cpu,
  Activity,
  Zap,
  ShieldCheck,
  Cloud,
  TrendingDown,
  Code2,
  Server,
  Database,
  Lock,
  Users,
  Landmark,
  HeartPulse,
  Factory,
  Radio,
  Network,
  ShieldAlert,
  FileText,
  Bot,
  Terminal,
  Layers,
  RefreshCw,
  CheckCircle2,
  Sun,
  Moon,
} from "lucide-react";

interface NavbarProps {
  onOpenAssessment?: () => void;
  onOpenConsultation?: () => void;
}

const iconComponentMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-4 h-4 text-orange-500" />,
  Zap: <Zap className="w-4 h-4 text-amber-500" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
  Cloud: <Cloud className="w-4 h-4 text-sky-500" />,
  TrendingDown: <TrendingDown className="w-4 h-4 text-blue-500" />,
  Code2: <Code2 className="w-4 h-4 text-blue-500" />,
  Server: <Server className="w-4 h-4 text-purple-500" />,
  Database: <Database className="w-4 h-4 text-emerald-500" />,
  Lock: <Lock className="w-4 h-4 text-rose-500" />,
  Users: <Users className="w-4 h-4 text-cyan-500" />,
  Landmark: <Landmark className="w-4 h-4 text-orange-500" />,
  Shield: <Shield className="w-4 h-4 text-amber-500" />,
  HeartPulse: <HeartPulse className="w-4 h-4 text-rose-500" />,
  Factory: <Factory className="w-4 h-4 text-slate-500" />,
  Radio: <Radio className="w-4 h-4 text-blue-500" />,
  Cpu: <Cpu className="w-4 h-4 text-blue-500" />,
  Sparkles: <Sparkles className="w-4 h-4 text-amber-500" />,
  Network: <Network className="w-4 h-4 text-indigo-500" />,
  ShieldAlert: <ShieldAlert className="w-4 h-4 text-rose-500" />,
  FileText: <FileText className="w-4 h-4 text-sky-500" />,
  Bot: <Bot className="w-4 h-4 text-cyan-500" />,
  Terminal: <Terminal className="w-4 h-4 text-slate-500" />,
  Layers: <Layers className="w-4 h-4 text-indigo-500" />,
  RefreshCw: <RefreshCw className="w-4 h-4 text-emerald-500" />,
  CheckCircle2: <CheckCircle2 className="w-4 h-4 text-emerald-500" />,
};

const iconBgMap: Record<string, string> = {
  Activity: "bg-orange-50 border-orange-200 dark:bg-orange-950/40 dark:border-orange-500/30",
  Zap: "bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-500/30",
  ShieldCheck: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-500/30",
  Cloud: "bg-sky-50 border-sky-200 dark:bg-sky-950/40 dark:border-sky-500/30",
  TrendingDown: "bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-500/30",
  Code2: "bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-500/30",
  Server: "bg-purple-50 border-purple-200 dark:bg-purple-950/40 dark:border-purple-500/30",
  Database: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-500/30",
  Lock: "bg-rose-50 border-rose-200 dark:bg-rose-950/40 dark:border-rose-500/30",
  Users: "bg-cyan-50 border-cyan-200 dark:bg-cyan-950/40 dark:border-cyan-500/30",
  Landmark: "bg-orange-50 border-orange-200 dark:bg-orange-950/40 dark:border-orange-500/30",
  Shield: "bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-500/30",
  HeartPulse: "bg-rose-50 border-rose-200 dark:bg-rose-950/40 dark:border-rose-500/30",
  Factory: "bg-slate-100 border-slate-200 dark:bg-slate-900 dark:border-slate-700",
  Radio: "bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-500/30",
};

const navItemStyleMap: Record<
  string,
  {
    icon: React.ReactNode;
    bgClasses: string;
    textClasses: string;
    activeClasses: string;
  }
> = {
  "Solutions": {
    icon: <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />,
    bgClasses: "bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30 dark:bg-emerald-500/15 dark:border-emerald-500/40",
    textClasses: "text-emerald-800 dark:text-emerald-300 font-bold",
    activeClasses: "bg-emerald-500/25 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-1 ring-emerald-400/50",
  },
  "AI & Automation": {
    icon: <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 animate-spin" style={{ animationDuration: "6s" }} />,
    bgClasses: "bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/30 dark:bg-cyan-500/15 dark:border-cyan-500/40",
    textClasses: "text-cyan-800 dark:text-cyan-300 font-bold",
    activeClasses: "bg-cyan-500/25 border-cyan-500 text-cyan-900 dark:text-cyan-200 ring-1 ring-cyan-400/50",
  },
  "Digital Engineering": {
    icon: <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />,
    bgClasses: "bg-indigo-500/10 hover:bg-indigo-500/20 border-indigo-500/30 dark:bg-indigo-500/15 dark:border-indigo-500/40",
    textClasses: "text-indigo-800 dark:text-indigo-300 font-bold",
    activeClasses: "bg-indigo-500/25 border-indigo-500 text-indigo-900 dark:text-indigo-200 ring-1 ring-indigo-400/50",
  },
  "Data & Cloud": {
    icon: <Cloud className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />,
    bgClasses: "bg-sky-500/10 hover:bg-sky-500/20 border-sky-500/30 dark:bg-sky-500/15 dark:border-sky-500/40",
    textClasses: "text-sky-800 dark:text-sky-300 font-bold",
    activeClasses: "bg-sky-500/25 border-sky-500 text-sky-900 dark:text-sky-200 ring-1 ring-sky-400/50",
  },
  "Case Studies": {
    icon: <Activity className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />,
    bgClasses: "bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/30 dark:bg-amber-500/15 dark:border-amber-500/40",
    textClasses: "text-amber-800 dark:text-amber-300 font-bold",
    activeClasses: "bg-amber-500/25 border-amber-500 text-amber-900 dark:text-amber-200 ring-1 ring-amber-400/50",
  },
  "Insights": {
    icon: <FileText className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />,
    bgClasses: "bg-rose-500/10 hover:bg-rose-500/20 border-rose-500/30 dark:bg-rose-500/15 dark:border-rose-500/40",
    textClasses: "text-rose-800 dark:text-rose-300 font-bold",
    activeClasses: "bg-rose-500/25 border-rose-500 text-rose-900 dark:text-rose-200 ring-1 ring-rose-400/50",
  },
  "Company": {
    icon: <Users className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />,
    bgClasses: "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/30 dark:bg-purple-500/15 dark:border-purple-500/40",
    textClasses: "text-purple-800 dark:text-purple-300 font-bold",
    activeClasses: "bg-purple-500/25 border-purple-500 text-purple-900 dark:text-purple-200 ring-1 ring-purple-400/50",
  },
};

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssessment, onOpenConsultation }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#060911]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-md shadow-slate-900/5 dark:shadow-black/40"
          : "bg-white/85 dark:bg-[#060911]/80 backdrop-blur-sm border-b border-slate-200/70 dark:border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Official Animated Brand Logo */}
          <AnimatedLogo />

          {/* Desktop Navigation with Rich Backgrounds, Icons & Custom Font Colors */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {navigationData.map((item) => {
              const style = navItemStyleMap[item.label] || {
                icon: null,
                bgClasses: "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10",
                textClasses: "text-slate-700 dark:text-slate-200 font-bold",
                activeClasses: "bg-blue-600 text-white",
              };

              const isActive = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`px-2.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 border transition-all duration-200 shadow-sm ${style.textClasses} ${style.bgClasses}`}
                    >
                      {style.icon}
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      className={`px-2.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 border transition-all duration-200 shadow-sm ${style.textClasses} ${
                        isActive ? style.activeClasses : style.bgClasses
                      }`}
                    >
                      {style.icon}
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 opacity-70 ${
                          isActive ? "rotate-180 opacity-100" : ""
                        }`}
                      />
                    </button>
                  )}

                  {/* Dropdown Container */}
                  {item.megaMenu && activeDropdown === item.label && (
                    <div className="fixed top-16 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none transition-all animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="pointer-events-auto bg-white dark:bg-[#0b111e] rounded-2xl p-6 shadow-2xl border border-slate-200/90 dark:border-white/10 text-slate-800 dark:text-white">
                        {/* Solutions 3-Column Layout */}
                        {item.megaMenu.type === "solutions-columns" ? (
                          <div className="grid grid-cols-3 gap-8">
                            {item.megaMenu.sections.map((sec) => (
                            <div key={sec.category} className="space-y-3">
                              <h5 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold border-b border-slate-100 dark:border-white/5 pb-2">
                                {sec.category}
                              </h5>
                              <div className="space-y-1">
                                {sec.items.map((subItem) => {
                                  const iconNode = subItem.iconName
                                    ? iconComponentMap[subItem.iconName]
                                    : <Sparkles className="w-4 h-4 text-blue-500" />;
                                  const bgClass = subItem.iconName && iconBgMap[subItem.iconName]
                                    ? iconBgMap[subItem.iconName]
                                    : "bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/10";

                                  return (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                      className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group"
                                    >
                                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border flex-shrink-0 mt-0.5 ${bgClass}`}>
                                        {iconNode}
                                      </div>
                                      <div>
                                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                                          {subItem.title}
                                        </div>
                                        {subItem.description && (
                                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                            {subItem.description}
                                          </p>
                                        )}
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        /* Standard 2-Column + Featured layout */
                        <div className="grid grid-cols-12 gap-6">
                          {item.megaMenu.featured && (
                            <div className="col-span-4 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-slate-50 dark:from-blue-950/50 dark:via-indigo-950/30 dark:to-slate-900 rounded-xl p-5 border border-blue-100 dark:border-blue-500/20 flex flex-col justify-between">
                              <div>
                                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 mb-2">
                                  <Sparkles className="w-3 h-3" /> Featured Architecture
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">
                                  {item.megaMenu.featured.title}
                                </h4>
                                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                                  {item.megaMenu.featured.description}
                                </p>
                              </div>
                              <Link
                                href={item.megaMenu.featured.href}
                                className="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
                              >
                                {item.megaMenu.featured.ctaText}
                              </Link>
                            </div>
                          )}

                          <div
                            className={`${
                              item.megaMenu.featured ? "col-span-8" : "col-span-12"
                            } grid grid-cols-2 gap-6`}
                          >
                            {item.megaMenu.sections.map((section) => (
                              <div key={section.category} className="space-y-2.5">
                                <h5 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold border-b border-slate-100 dark:border-white/5 pb-1.5">
                                  {section.category}
                                </h5>
                                <div className="space-y-1">
                                  {section.items.map((subItem) => (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                      className="block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 group transition-colors"
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                          {subItem.title}
                                        </span>
                                        {subItem.badge && (
                                          <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      {subItem.description && (
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                          {subItem.description}
                                        </p>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

          {/* Action CTAs + Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            <button
              onClick={onOpenAssessment}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
              AI Maturity Benchmark
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 shadow-sm shadow-blue-500/20 transition-all flex items-center gap-1.5"
            >
              Contact Sales
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile Actions: Contact Sales Button beside Logo + Theme Toggle + Menu Button */}
          <div className="flex lg:hidden items-center space-x-1.5">
            <button
              onClick={onOpenConsultation}
              className="px-2.5 py-1.5 rounded-xl text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-500/30 flex items-center gap-1 transition-all"
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE IMPORTANT HEADINGS BAR (Vibrant Colors & Animations) --- */}
      <div className="lg:hidden w-full border-t border-slate-200/80 dark:border-white/10 bg-gradient-to-r from-slate-100 via-white to-slate-100 dark:from-[#060911] dark:via-[#0c1322] dark:to-[#060911] backdrop-blur-xl overflow-x-auto scrollbar-none py-2 px-3 shadow-inner">
        <div className="flex items-center gap-2 w-max">
          {/* AI & Automation */}
          <Link
            href="/services/multi-agent-orchestration"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-cyan-500/25 via-blue-600/20 to-indigo-600/25 text-cyan-600 dark:text-cyan-300 border-2 border-cyan-400/60 shadow-md shadow-cyan-500/20 active:scale-95 transition-all whitespace-nowrap group"
          >
            <span className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-400/40">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-300 animate-spin" style={{ animationDuration: "6s" }} />
            </span>
            <span className="tracking-tight text-cyan-900 dark:text-cyan-200">AI & Automation</span>
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-black bg-cyan-500 text-slate-950 shadow-sm animate-pulse">
              AI
            </span>
          </Link>

          {/* Digital Engineering */}
          <Link
            href="/services/legacy-modernization"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-indigo-500/25 via-purple-600/20 to-blue-600/25 text-indigo-700 dark:text-indigo-300 border-2 border-indigo-400/60 shadow-md shadow-indigo-500/20 active:scale-95 transition-all whitespace-nowrap"
          >
            <span className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-400/40">
              <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-300" />
            </span>
            <span className="tracking-tight text-indigo-900 dark:text-indigo-200">Digital Engineering</span>
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-black bg-indigo-500 text-white shadow-sm">
              ENG
            </span>
          </Link>

          {/* Data & Cloud */}
          <Link
            href="/services/cloud-native-platforms"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-sky-500/25 via-blue-600/20 to-cyan-600/25 text-sky-700 dark:text-sky-300 border-2 border-sky-400/60 shadow-md shadow-sky-500/20 active:scale-95 transition-all whitespace-nowrap"
          >
            <span className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center border border-sky-400/40">
              <Cloud className="w-3.5 h-3.5 text-sky-600 dark:text-sky-300" />
            </span>
            <span className="tracking-tight text-sky-900 dark:text-sky-200">Data & Cloud</span>
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-black bg-sky-500 text-white shadow-sm">
              CLOUD
            </span>
          </Link>

          {/* Solutions */}
          <Link
            href="/services"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-emerald-500/25 via-teal-600/20 to-green-600/25 text-emerald-700 dark:text-emerald-300 border-2 border-emerald-400/60 shadow-md shadow-emerald-500/20 active:scale-95 transition-all whitespace-nowrap"
          >
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-400/40">
              <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300" />
            </span>
            <span className="tracking-tight text-emerald-900 dark:text-emerald-200">Solutions</span>
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-black bg-emerald-500 text-white shadow-sm">
              CORE
            </span>
          </Link>

          {/* Case Studies */}
          <Link
            href="/case-studies"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-amber-500/25 via-orange-600/20 to-yellow-600/25 text-amber-700 dark:text-amber-300 border-2 border-amber-400/60 shadow-md shadow-amber-500/20 active:scale-95 transition-all whitespace-nowrap"
          >
            <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-400/40">
              <Activity className="w-3.5 h-3.5 text-amber-600 dark:text-amber-300" />
            </span>
            <span className="tracking-tight text-amber-900 dark:text-amber-200">Case Studies</span>
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-black bg-amber-500 text-white shadow-sm">
              ROI
            </span>
          </Link>

          {/* Insights */}
          <Link
            href="/insights"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-rose-500/25 via-pink-600/20 to-purple-600/25 text-rose-700 dark:text-rose-300 border-2 border-rose-400/60 shadow-md shadow-rose-500/20 active:scale-95 transition-all whitespace-nowrap"
          >
            <span className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center border border-rose-400/40">
              <FileText className="w-3.5 h-3.5 text-rose-600 dark:text-rose-300" />
            </span>
            <span className="tracking-tight text-rose-900 dark:text-rose-200">Insights</span>
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-mono font-black bg-rose-500 text-white shadow-sm">
              NEW
            </span>
          </Link>

          {/* Company */}
          <Link
            href="/company/about"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-slate-600/25 via-slate-700/20 to-blue-600/25 text-slate-800 dark:text-slate-200 border-2 border-slate-300 dark:border-white/30 shadow-md active:scale-95 transition-all whitespace-nowrap"
          >
            <span className="w-5 h-5 rounded-full bg-slate-500/20 flex items-center justify-center border border-slate-400/40">
              <Users className="w-3.5 h-3.5 text-slate-700 dark:text-slate-200" />
            </span>
            <span className="tracking-tight">Company</span>
          </Link>
        </div>
      </div>

      {/* Mobile Full Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#060911] border-b border-slate-200 dark:border-white/10 px-4 pt-3 pb-8 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="space-y-3">
            {navigationData.map((item) => (
              <div key={item.label} className="border-b border-slate-100 dark:border-white/5 pb-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <span className="block py-1 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-extrabold">
                      {item.label}
                    </span>
                    {item.megaMenu?.sections.map((section) => (
                      <div key={section.category} className="pl-3 space-y-1 my-2">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block">
                          {section.category}
                        </span>
                        {section.items.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment?.();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-800 dark:text-white bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-400/40 flex items-center justify-center gap-2 shadow-sm"
            >
              <Cpu className="w-4 h-4 text-orange-500 dark:text-orange-400" />
              AI Maturity Benchmark
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation?.();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 shadow-md shadow-blue-500/30 flex items-center justify-center gap-1.5"
            >
              Contact Sales
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
