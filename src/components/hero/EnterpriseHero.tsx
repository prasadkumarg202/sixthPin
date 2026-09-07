"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Layers, Cpu, Cloud, Database, Shield, Zap, Play, Pause, Film } from "lucide-react";

interface EnterpriseHeroProps {
  onOpenAssessment: () => void;
  onOpenConsultation: () => void;
}

const heroVideos = [
  {
    id: "blueprint",
    title: "The Blueprint",
    tag: "The Blueprint",
    src: "/videos/Prompt_Option_The_Blueprint.mp4",
  },
  {
    id: "ai-native",
    title: "AI-Native Eng",
    tag: "AI-Native",
    src: "/videos/Prompt_Option_AI_Native_Eng.mp4",
  },
  {
    id: "human-centric",
    title: "Human-Centric",
    tag: "Human-Centric",
    src: "/videos/Prompt_Option_Human_Centric.mp4",
  },
  {
    id: "transform",
    title: "Transformation",
    tag: "Transform",
    src: "/videos/Prompt_Option_The_Transform.mp4",
  },
];

export const EnterpriseHero: React.FC<EnterpriseHeroProps> = ({
  onOpenAssessment,
  onOpenConsultation,
}) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
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
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Video autoPlay waiting on user interaction:", error);
          });
      }
    }
  }, [activeVideoIndex]);

  // Handle play/pause toggle
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950 text-white border-b border-white/10 transition-colors duration-200 min-h-[680px]">
      {/* HTML5 Video Background Layer - HIGH VISIBILITY */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            key={currentVideo.src}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 transition-opacity duration-700 scale-105"
          >
            <source src={currentVideo.src} type="video/mp4" />
          </video>
        ) : null}

        {/* Balanced Dark Cinematic Vignette & Ambient Glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-theme-grid opacity-20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[320px] bg-orange-500/15 rounded-full blur-[130px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-5 mb-10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Digital Business Transformation & Enterprise AI</span>
          </div>

          {/* Clean, Bold Headline with 3-Tone Colors & Drop Shadow */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white drop-shadow-lg leading-[1.15]">
            Accelerating Digital Business.{" "}
            <span className="text-[#38bdf8]">Engineered with AI </span>
            <span className="text-[#fb923c]">& Cloud Precision.</span>
          </h1>

          {/* Subtitle with High Legibility */}
          <p className="text-base sm:text-lg text-slate-200 drop-shadow-md leading-relaxed max-w-2xl mx-auto font-normal">
            SixthPin is a global digital engineering and enterprise technology partner. We help market leaders modernize legacy architectures, build high-velocity platforms, and scale practical AI solutions.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group"
            >
              Talk to Our Solutions Team
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/services"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              Explore Solutions & Capabilities
            </Link>
          </div>

          {/* Key Proof Points */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-300 font-medium drop-shadow">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 4-Week PoC-to-Production
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" /> SOC2 Type II & HIPAA Certified
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400" /> 99.8% Engineering SLA
            </span>
          </div>

          {/* Interactive Background Video Switcher Bar */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-black/70 border border-white/20 shadow-2xl backdrop-blur-xl text-[11px] font-mono">
              <div className="flex items-center gap-1 pl-2.5 pr-1 text-cyan-400 font-bold text-[10px] uppercase tracking-wider">
                <Film className="w-3.5 h-3.5 animate-pulse" />
                <span className="hidden sm:inline">VIDEO SCENE:</span>
              </div>

              {heroVideos.map((vid, idx) => (
                <button
                  key={vid.id}
                  onClick={() => setActiveVideoIndex(idx)}
                  className={`px-3 py-1 rounded-full transition-all duration-200 text-xs font-semibold ${
                    activeVideoIndex === idx
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/40 font-bold scale-105"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {vid.tag}
                </button>
              ))}

              <button
                onClick={togglePlayPause}
                title={isPlaying ? "Pause video background" : "Play video background"}
                className="p-1.5 rounded-full hover:bg-white/15 text-white transition-colors ml-0.5"
                aria-label="Toggle video playback"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            </div>
          </div>
        </div>

        {/* Clean 4-Pillar Solutions Summary Grid (Cinematic Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
          <div className="p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 hover:border-blue-400 hover:bg-black/70 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-400 flex items-center justify-center mb-3.5">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
              Enterprise AI & Data
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Applied Generative AI, intelligent automation workflows, and modern lakehouse architectures.
            </p>
            <Link href="/services/multi-agent-orchestration" className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1">
              Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 hover:border-indigo-400 hover:bg-black/70 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 flex items-center justify-center mb-3.5">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-indigo-400 transition-colors">
              Digital Engineering
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Custom software engineering, microservices modernization, and cloud-native application delivery.
            </p>
            <Link href="/services/legacy-modernization" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
              Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 hover:border-cyan-400 hover:bg-black/70 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-cyan-400 flex items-center justify-center mb-3.5">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
              Cloud & DevOps
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Scalable multi-cloud infrastructure, Kubernetes orchestration, and automated CI/CD pipelines.
            </p>
            <Link href="/services/cloud-native-platforms" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 hover:border-orange-400 hover:bg-black/70 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/30 text-orange-400 flex items-center justify-center mb-3.5">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-orange-400 transition-colors">
              Security & Governance
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Zero-trust architecture, enterprise data compliance, and automated risk governance frameworks.
            </p>
            <Link href="/services/ai-governance-guardrails" className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1">
              Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
