"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Layers, Cpu, Cloud, Shield, Play, Pause, Film, FastForward, RotateCcw } from "lucide-react";

interface EnterpriseHeroProps {
  onOpenAssessment: () => void;
  onOpenConsultation: () => void;
}

interface VideoPhase {
  id: string;
  step: string;
  tag: string;
  title: string;
  headline: string;
  purpose: string;
  highlight: string;
  src: string;
}

const heroVideos: VideoPhase[] = [
  {
    id: "blueprint",
    step: "01",
    tag: "Blueprint",
    title: "The Blueprint",
    headline: "Architectural Precision for the AI Era",
    purpose: "Deconstructing legacy silos into modular, secure, and enterprise-grade cloud foundations.",
    highlight: "Modular Cloud & API Architecture",
    src: "/videos/Prompt_Option_The_Blueprint.mp4",
  },
  {
    id: "ai-native",
    step: "02",
    tag: "AI-Native",
    title: "AI-Native Engineering",
    headline: "Intelligence Embedded Across Every Workflow",
    purpose: "Orchestrating autonomous agents, enterprise RAG pipelines, and deterministic LLM systems.",
    highlight: "Multi-Agent & Production GenAI",
    src: "/videos/Prompt_Option_AI_Native_Eng.mp4",
  },
  {
    id: "human-centric",
    step: "03",
    tag: "Human-Centric",
    title: "Human-Centric Experience",
    headline: "Empowering Teams & Accelerating Decisions",
    purpose: "Blending intuitive user experience, contextual automation, and high-velocity developer tools.",
    highlight: "High-Velocity Experience Engineering",
    src: "/videos/Prompt_Option_Human_Centric.mp4",
  },
  {
    id: "transform",
    step: "04",
    tag: "Transformation",
    title: "Enterprise Transformation",
    headline: "From Strategic Vision to Scaled Market Impact",
    purpose: "Delivering measurable business ROI, continuous compliance, and future-proof digital agility.",
    highlight: "End-to-End Digital Modernization",
    src: "/videos/Prompt_Option_The_Transform.mp4",
  },
];

const FULL_HEADLINE_PART1 = "Accelerating Digital Business. ";
const FULL_HEADLINE_PART2 = "Engineered with AI ";
const FULL_HEADLINE_PART3 = "& Cloud Precision.";
const FULL_HEADLINE = `${FULL_HEADLINE_PART1}${FULL_HEADLINE_PART2}${FULL_HEADLINE_PART3}`;

export const EnterpriseHero: React.FC<EnterpriseHeroProps> = ({
  onOpenAssessment,
  onOpenConsultation,
}) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [typedLength, setTypedLength] = useState(0);
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentVideo = heroVideos[activeVideoIndex];

  // Guaranteed browser autoplay handling with muted attribute
  useEffect(() => {
    setVideoError(false);
    const video = videoRef.current;

    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      video.currentTime = 0;
      video.play().then(() => setIsPlaying(true)).catch((err) => {
        console.log("Autoplay waiting on interaction:", err);
      });
    }
  }, [activeVideoIndex, isIntroComplete]);

  // Handle video completion & progression
  const handleVideoEnded = () => {
    if (!isIntroComplete) {
      if (activeVideoIndex < heroVideos.length - 1) {
        setActiveVideoIndex((prev) => prev + 1);
      } else {
        // All 4 videos played -> transition to full completed hero
        setIsIntroComplete(true);
        setActiveVideoIndex(0);
      }
    }
  };

  // Skip intro handler
  const handleSkipIntro = () => {
    setIsIntroComplete(true);
  };

  // Replay intro tour handler
  const handleReplayIntro = () => {
    setIsIntroComplete(false);
    setActiveVideoIndex(0);
    setTypedLength(0);
    setIsTypingFinished(false);
  };

  // Handle play/pause toggle
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  // Typewriter effect when intro completes
  useEffect(() => {
    if (!isIntroComplete) return;

    setTypedLength(0);
    setIsTypingFinished(false);

    let charIdx = 0;
    const interval = setInterval(() => {
      charIdx++;
      setTypedLength(charIdx);

      if (charIdx >= FULL_HEADLINE.length) {
        clearInterval(interval);
        setIsTypingFinished(true);
      }
    }, 28); // 28ms per character typewriter speed

    return () => clearInterval(interval);
  }, [isIntroComplete]);

  // Calculate typed slices for multi-color headline
  const getRenderedTypedHeadline = () => {
    const p1Len = FULL_HEADLINE_PART1.length;
    const p2Len = FULL_HEADLINE_PART1.length + FULL_HEADLINE_PART2.length;

    const p1Text = FULL_HEADLINE.slice(0, Math.min(typedLength, p1Len));
    const p2Text = typedLength > p1Len ? FULL_HEADLINE.slice(p1Len, Math.min(typedLength, p2Len)) : "";
    const p3Text = typedLength > p2Len ? FULL_HEADLINE.slice(p2Len, typedLength) : "";

    return (
      <>
        <span>{p1Text}</span>
        {p2Text && <span className="text-[#38bdf8]">{p2Text}</span>}
        {p3Text && <span className="text-[#fb923c]">{p3Text}</span>}
        {!isTypingFinished && (
          <span className="inline-block w-2.5 sm:w-3.5 h-6 sm:h-9 bg-cyan-400 ml-1 translate-y-1 animate-pulse" />
        )}
      </>
    );
  };

  return (
    <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950 text-white border-b border-white/10 transition-colors duration-200 min-h-[640px] flex flex-col justify-center">
      {/* HTML5 Video Background Layer - Full Coverage Behind Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            key={currentVideo.src}
            autoPlay
            loop={isIntroComplete} // Loop once completed, play once per video during intro sequence
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 sm:opacity-80 transition-opacity duration-700 scale-105"
          >
            <source src={currentVideo.src} type="video/mp4" />
          </video>
        ) : null}

        {/* Balanced Dark Cinematic Vignette & Ambient Glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/90 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-theme-grid opacity-20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-orange-500/15 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* --- STAGE A: SEQUENTIAL INTRO (VIDEOS 1 TO 4 PLAYING ONE BY ONE WITH PURPOSE) --- */}
        {!isIntroComplete ? (
          <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
            {/* Top Phase Indicator with Progress Segments */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                {heroVideos.map((vid, idx) => (
                  <button
                    key={vid.id}
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      activeVideoIndex === idx
                        ? "w-10 sm:w-14 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-md shadow-cyan-500/50"
                        : activeVideoIndex > idx
                        ? "w-5 sm:w-7 bg-blue-400/60"
                        : "w-5 sm:w-7 bg-white/20 hover:bg-white/40"
                    }`}
                    title={`Video ${idx + 1}: ${vid.title}`}
                    aria-label={`Jump to video ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-blue-950/80 border border-blue-400/40 text-cyan-300 shadow-xl backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>PHASE {currentVideo.step} OF 04 &bull; {currentVideo.title.toUpperCase()}</span>
              </div>
            </div>

            {/* Video-Specific Headline with Vivid Gradient Font */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight drop-shadow-2xl leading-[1.2] sm:leading-[1.15] min-h-[70px] sm:min-h-[100px] flex items-center justify-center bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent">
              {currentVideo.headline}
            </h2>

            {/* Video-Specific Purpose Card with Rich Background & Colored Fonts */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-900/90 via-blue-950/80 to-black/95 border-2 border-cyan-400/50 backdrop-blur-2xl max-w-2xl mx-auto shadow-[0_0_35px_rgba(56,189,248,0.25)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Focus: {currentVideo.highlight}
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                {currentVideo.purpose}
              </p>
            </div>

            {/* Navigation & Skip Controls */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              {activeVideoIndex < heroVideos.length - 1 ? (
                <button
                  onClick={() => setActiveVideoIndex((prev) => prev + 1)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/40 transition-all flex items-center gap-2 group"
                >
                  Next Video ({activeVideoIndex + 2}/4)
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button
                  onClick={() => handleVideoEnded()}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/40 transition-all flex items-center gap-2"
                >
                  Enter Full Site
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={handleSkipIntro}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all flex items-center gap-1.5"
              >
                <FastForward className="w-3.5 h-3.5 text-cyan-400" />
                Skip to Full Site
              </button>

              <button
                onClick={togglePlayPause}
                title={isPlaying ? "Pause video" : "Play video"}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
                aria-label="Toggle playback"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            </div>
          </div>
        ) : (
          /* --- STAGE B: FINAL COMPLETED HOME PAGE (TYPEWRITER REVEAL + COMPLETE HERO) --- */
          <>
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5 mb-8 sm:mb-10 animate-fade-in">
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-gradient-to-r from-blue-900/60 via-indigo-900/60 to-purple-900/60 border border-cyan-400/40 text-cyan-200 shadow-lg backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Digital Business Transformation & Enterprise AI</span>
              </div>

              {/* Typewriter Machine Letters Headline */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white drop-shadow-lg leading-[1.18] sm:leading-[1.15] min-h-[75px] sm:min-h-[110px] flex items-center justify-center">
                <span>{getRenderedTypedHeadline()}</span>
              </h1>

              {/* Subtitle with High Legibility - Fades In with Typewriter */}
              <p
                className={`text-sm sm:text-base lg:text-lg text-slate-200 drop-shadow-md leading-relaxed max-w-2xl mx-auto font-normal px-2 transition-opacity duration-700 ${
                  typedLength > 20 ? "opacity-100" : "opacity-0"
                }`}
              >
                SixthPin is a global digital engineering and enterprise technology partner. We help market leaders modernize legacy architectures, build high-velocity platforms, and scale practical AI solutions.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div
                className={`pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700 ${
                  typedLength > 35 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group border border-blue-400/30"
                >
                  Talk to Our Solutions Team
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-xl text-xs font-bold text-white bg-slate-900/80 hover:bg-slate-800/90 border-2 border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
                >
                  Explore Solutions & Capabilities
                </Link>
              </div>

              {/* Key Proof Points */}
              <div
                className={`pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs text-slate-300 font-medium drop-shadow transition-opacity duration-700 ${
                  isTypingFinished ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="flex items-center gap-1.5 font-semibold text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 4-Week PoC-to-Production
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-sky-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> SOC2 Type II & HIPAA Certified
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-orange-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> 99.8% Engineering SLA
                </span>
              </div>

              {/* Video Scene Switcher & Replay Button Bar */}
              <div className="pt-3 flex items-center justify-center max-w-full">
                <div className="inline-flex items-center gap-1 p-1 rounded-full bg-black/80 border border-white/25 shadow-2xl backdrop-blur-xl text-[10px] sm:text-[11px] font-mono max-w-full overflow-x-auto">
                  <div className="flex items-center gap-1 pl-2.5 pr-1 text-cyan-400 font-extrabold text-[9px] sm:text-[10px] uppercase tracking-wider shrink-0">
                    <Film className="w-3.5 h-3.5 animate-pulse" />
                    <span className="hidden xs:inline">SCENE:</span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {heroVideos.map((vid, idx) => (
                      <button
                        key={vid.id}
                        onClick={() => setActiveVideoIndex(idx)}
                        className={`px-2.5 py-1 sm:px-3 sm:py-1 rounded-full transition-all duration-200 text-[10px] sm:text-xs font-bold whitespace-nowrap ${
                          activeVideoIndex === idx
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-cyan-500/40 scale-105"
                            : "text-slate-300 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {vid.tag}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={togglePlayPause}
                    title={isPlaying ? "Pause video background" : "Play video background"}
                    className="p-1 sm:p-1.5 rounded-full hover:bg-white/15 text-white transition-colors ml-0.5 shrink-0"
                    aria-label="Toggle video playback"
                  >
                    {isPlaying ? <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />}
                  </button>

                  <button
                    onClick={handleReplayIntro}
                    title="Replay video tour with story"
                    className="px-2 py-1 rounded-full hover:bg-white/15 text-slate-300 hover:text-cyan-300 transition-colors ml-1 text-[10px] font-semibold flex items-center gap-1 shrink-0"
                  >
                    <RotateCcw className="w-3 h-3 text-cyan-400" />
                    <span className="hidden sm:inline">Replay Story</span>
                  </button>
                </div>
              </div>
            </div>

            {/* --- 4-PILLAR SOLUTIONS SUMMARY GRID (Rich Color Gradients & Visual Cards) --- */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-6 sm:mt-8 transition-all duration-700 ${
                isTypingFinished ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {/* Pillar 1: AI & Data */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-blue-950/80 via-slate-900/90 to-blue-900/40 backdrop-blur-2xl border-2 border-blue-400/40 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/40 text-blue-400 flex items-center justify-center mb-3 shadow-inner">
                  <Cpu className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-blue-300 mb-1.5 group-hover:text-white transition-colors">
                  Enterprise AI & Data
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Applied Generative AI, intelligent automation workflows, and modern lakehouse architectures.
                </p>
                <Link href="/services/multi-agent-orchestration" className="text-xs font-bold text-blue-400 hover:text-blue-200 flex items-center gap-1.5">
                  Explore AI Solutions <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Pillar 2: Digital Engineering */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-950/80 via-slate-900/90 to-purple-900/40 backdrop-blur-2xl border-2 border-indigo-400/40 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 text-indigo-400 flex items-center justify-center mb-3 shadow-inner">
                  <Layers className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-indigo-300 mb-1.5 group-hover:text-white transition-colors">
                  Digital Engineering
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Custom software engineering, microservices modernization, and cloud-native application delivery.
                </p>
                <Link href="/services/legacy-modernization" className="text-xs font-bold text-indigo-400 hover:text-indigo-200 flex items-center gap-1.5">
                  Explore Engineering <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Pillar 3: Cloud & DevOps */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-cyan-950/80 via-slate-900/90 to-teal-900/40 backdrop-blur-2xl border-2 border-cyan-400/40 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center mb-3 shadow-inner">
                  <Cloud className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-cyan-300 mb-1.5 group-hover:text-white transition-colors">
                  Cloud & DevOps
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Scalable multi-cloud infrastructure, Kubernetes orchestration, and automated CI/CD pipelines.
                </p>
                <Link href="/services/cloud-native-platforms" className="text-xs font-bold text-cyan-400 hover:text-cyan-200 flex items-center gap-1.5">
                  Explore Cloud Platforms <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Pillar 4: Security & Governance */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-orange-950/80 via-slate-900/90 to-amber-900/40 backdrop-blur-2xl border-2 border-orange-400/40 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/20 border border-orange-400/40 text-orange-400 flex items-center justify-center mb-3 shadow-inner">
                  <Shield className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-orange-300 mb-1.5 group-hover:text-white transition-colors">
                  Security & Governance
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Zero-trust architecture, enterprise data compliance, and automated risk governance frameworks.
                </p>
                <Link href="/services/ai-governance-guardrails" className="text-xs font-bold text-orange-400 hover:text-orange-200 flex items-center gap-1.5">
                  Explore Governance <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
