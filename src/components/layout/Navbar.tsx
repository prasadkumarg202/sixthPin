"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navigationData, NavMenu, NavItem } from "@/data/navigation";
import { useTheme } from "@/context/ThemeContext";
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
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center space-x-2 group py-1">
            <div className="relative flex items-center">
              <img
                src="/logo.png"
                alt="SixthPin - AI & Digital Engineering"
                className="h-9 sm:h-10 w-auto object-contain rounded-lg bg-white dark:bg-white/95 p-1 shadow-sm border border-slate-200/80 dark:border-white/20 transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            {navigationData.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.megaMenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1 ${
                      activeDropdown === item.label
                        ? "text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-white/5"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180 text-blue-600 dark:text-blue-400" : "text-slate-400"
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
            ))}
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

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex lg:hidden items-center space-x-1.5">
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#060911] border-b border-slate-200 dark:border-white/10 px-4 pt-3 pb-8 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
          <div className="space-y-3">
            {navigationData.map((item) => (
              <div key={item.label} className="border-b border-slate-100 dark:border-white/5 pb-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <span className="block py-1 text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                      {item.label}
                    </span>
                    {item.megaMenu?.sections.map((section) => (
                      <div key={section.category} className="pl-3 space-y-1 my-2">
                        <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block">
                          {section.category}
                        </span>
                        {section.items.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white"
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
              className="w-full py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2"
            >
              <Cpu className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
              AI Maturity Benchmark
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation?.();
              }}
              className="w-full py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 flex items-center justify-center gap-1.5"
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
