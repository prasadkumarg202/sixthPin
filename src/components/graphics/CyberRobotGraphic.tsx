"use client";

import React from "react";

interface CyberRobotGraphicProps {
  type: "orchestrator" | "extractor" | "graph" | "guardrail" | "executor";
  active?: boolean;
  size?: "sm" | "md" | "lg";
}

export const CyberRobotGraphic: React.FC<CyberRobotGraphicProps> = ({
  type,
  active = true,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16 sm:w-20 sm:h-20",
    lg: "w-24 h-24 sm:w-28 sm:h-28",
  };

  if (type === "orchestrator") {
    return (
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center animate-float-robot`}>
        {/* Orbital Ring */}
        <div className={`absolute inset-0 rounded-full border-2 border-dashed ${active ? "border-blue-500 dark:border-cyan-400 animate-spin-slow" : "border-slate-300 dark:border-slate-700"}`} />
        
        {/* Glowing Aura */}
        {active && (
          <div className="absolute inset-2 bg-blue-500/20 dark:bg-cyan-500/30 rounded-full blur-md animate-glow-ring" />
        )}

        {/* Robot SVG */}
        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-md">
          {/* Antenna */}
          <line x1="50" y1="12" x2="50" y2="24" stroke={active ? "#3b82f6" : "#94a3b8"} strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="10" r="4" fill={active ? "#06b6d4" : "#64748b"} className={active ? "animate-ping" : ""} />
          <circle cx="50" cy="10" r="4" fill={active ? "#06b6d4" : "#64748b"} />

          {/* Robot Head Outer Shell */}
          <rect x="24" y="24" width="52" height="42" rx="14" fill="#0f172a" stroke={active ? "#3b82f6" : "#475569"} strokeWidth="2.5" />

          {/* Holographic Visor / Face Screen */}
          <rect x="30" y="32" width="40" height="20" rx="8" fill="#020617" />
          
          {/* Glowing Cyber Eyes */}
          <ellipse cx="40" cy="42" rx="5" ry="4" fill={active ? "#38bdf8" : "#64748b"} className={active ? "animate-pulse" : ""} />
          <ellipse cx="60" cy="42" rx="5" ry="4" fill={active ? "#38bdf8" : "#64748b"} className={active ? "animate-pulse" : ""} />
          
          {/* Headphone Ears / Data Ports */}
          <rect x="18" y="34" width="6" height="16" rx="3" fill={active ? "#2563eb" : "#475569"} />
          <rect x="76" y="34" width="6" height="16" rx="3" fill={active ? "#2563eb" : "#475569"} />

          {/* Torso & Core */}
          <path d="M 32 68 L 68 68 L 60 88 L 40 88 Z" fill="#1e293b" stroke={active ? "#3b82f6" : "#475569"} strokeWidth="2" />
          
          {/* Quantum Processing Core Light */}
          <circle cx="50" cy="77" r="4" fill={active ? "#f97316" : "#64748b"} className={active ? "animate-pulse" : ""} />

          {/* Floating Thruster Plume */}
          {active && (
            <path d="M 44 89 Q 50 98 56 89 Z" fill="#38bdf8" className="animate-pulse" opacity="0.8" />
          )}
        </svg>
      </div>
    );
  }

  if (type === "extractor") {
    return (
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center animate-float-robot`}>
        {/* Radar Ring */}
        <div className={`absolute inset-0 rounded-full border border-blue-400/40 ${active ? "animate-ping" : ""}`} />
        
        {/* Robot SVG */}
        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-md">
          {/* Dual Antennas */}
          <line x1="36" y1="14" x2="42" y2="26" stroke={active ? "#0284c7" : "#64748b"} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="35" cy="12" r="3.5" fill="#38bdf8" />
          <line x1="64" y1="14" x2="58" y2="26" stroke={active ? "#0284c7" : "#64748b"} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="65" cy="12" r="3.5" fill="#38bdf8" />

          {/* Robot Head */}
          <polygon points="26,26 74,26 80,64 20,64" fill="#0f172a" stroke={active ? "#0284c7" : "#475569"} strokeWidth="2.5" />
          
          {/* Optical Scanner Visor */}
          <rect x="28" y="36" width="44" height="14" rx="4" fill="#0369a1" />
          <line x1="32" y1="43" x2="68" y2="43" stroke="#e0f2fe" strokeWidth="2" strokeDasharray="3,3" className={active ? "animate-flow-dash" : ""} />

          {/* Data Intake Mouth */}
          <rect x="40" y="54" width="20" height="4" rx="2" fill="#38bdf8" />

          {/* Sensor Chassis */}
          <rect x="30" y="66" width="40" height="18" rx="6" fill="#1e293b" stroke={active ? "#0284c7" : "#475569"} strokeWidth="2" />
          <circle cx="42" cy="75" r="3" fill="#10b981" />
          <circle cx="50" cy="75" r="3" fill="#38bdf8" />
          <circle cx="58" cy="75" r="3" fill="#f59e0b" />
        </svg>
      </div>
    );
  }

  if (type === "graph") {
    return (
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center animate-float-robot`}>
        {/* Outer Orbiting Data Nodes */}
        <div className={`absolute inset-0 rounded-full border border-dashed border-cyan-500/40 ${active ? "animate-spin-slow" : ""}`} />
        
        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-md">
          {/* Neural Crown */}
          <circle cx="50" cy="18" r="4" fill="#06b6d4" />
          <line x1="50" y1="22" x2="50" y2="28" stroke="#06b6d4" strokeWidth="2" />
          <line x1="38" y1="22" x2="44" y2="28" stroke="#06b6d4" strokeWidth="2" />
          <circle cx="36" cy="20" r="3" fill="#06b6d4" />
          <line x1="62" y1="22" x2="56" y2="28" stroke="#06b6d4" strokeWidth="2" />
          <circle cx="64" cy="20" r="3" fill="#06b6d4" />

          {/* Polyhedral Head */}
          <circle cx="50" cy="46" r="24" fill="#082f49" stroke={active ? "#06b6d4" : "#475569"} strokeWidth="2.5" />
          
          {/* Graph Nodes on Face */}
          <line x1="42" y1="40" x2="58" y2="40" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="42" y1="40" x2="50" y2="52" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="58" y1="40" x2="50" y2="52" stroke="#38bdf8" strokeWidth="1.5" />
          
          <circle cx="42" cy="40" r="3.5" fill="#22d3ee" className={active ? "animate-pulse" : ""} />
          <circle cx="58" cy="40" r="3.5" fill="#22d3ee" className={active ? "animate-pulse" : ""} />
          <circle cx="50" cy="52" r="4" fill="#f97316" className={active ? "animate-pulse" : ""} />

          {/* Base Cylinder */}
          <rect x="34" y="72" width="32" height="14" rx="4" fill="#0f172a" stroke={active ? "#06b6d4" : "#475569"} strokeWidth="2" />
          <line x1="40" y1="79" x2="60" y2="79" stroke="#38bdf8" strokeWidth="2" />
        </svg>
      </div>
    );
  }

  if (type === "guardrail") {
    return (
      <div className={`relative ${sizeClasses[size]} flex items-center justify-center animate-float-robot`}>
        {/* Hexagonal Shield Aura */}
        <div className={`absolute inset-1 rounded-2xl bg-orange-500/10 border border-orange-500/30 ${active ? "animate-glow-ring" : ""}`} />

        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-md">
          {/* Shield Crest */}
          <path d="M 50 14 L 74 24 L 74 54 Q 50 82 50 82 Q 26 54 26 54 L 26 24 Z" fill="#18181b" stroke={active ? "#ea580c" : "#475569"} strokeWidth="2.5" />

          {/* Internal Sentinel Face */}
          <rect x="36" y="32" width="28" height="18" rx="6" fill="#09090b" />
          
          {/* Vigilant Red/Orange Scanner Eye */}
          <line x1="40" y1="41" x2="60" y2="41" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" className={active ? "animate-pulse" : ""} />
          <circle cx="50" cy="41" r="2.5" fill="#fef08a" />

          {/* Security Badge Core */}
          <polygon points="50,56 58,62 55,71 45,71 42,62" fill={active ? "#f97316" : "#64748b"} />
          <circle cx="50" cy="65" r="2" fill="#ffffff" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative ${sizeClasses[size]} flex items-center justify-center animate-float-robot`}>
      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-md">
        <circle cx="50" cy="50" r="30" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="16" fill="#064e3b" />
        <polyline points="42,50 48,56 60,44" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};
