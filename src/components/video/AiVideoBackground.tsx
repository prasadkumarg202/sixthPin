"use client";

import React from "react";

interface AiVideoBackgroundProps {
  currentVideo?: string;
}

export const AiVideoBackground: React.FC<AiVideoBackgroundProps> = () => {

  // Curated High-Definition Enterprise AI & Neural Flow Video Streams
  const videoStreams = [
    {
      id: "neural-mesh",
      name: "Neural Data Stream",
      url: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31913-large.mp4",
      poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      tag: "Neural Motion Flow",
    },
    {
      id: "cyber-swarm",
      name: "Autonomous Cyber Swarm",
      url: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-background-40742-large.mp4",
      poster: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
      tag: "Swarm Robotics Flow",
    },
    {
      id: "quantum-core",
      name: "Quantum Data Pipeline",
      url: "https://assets.mixkit.co/videos/preview/mixkit-network-connection-with-bright-lines-and-dots-31910-large.mp4",
      poster: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      tag: "GraphRAG Flow",
    },
  ];

  const current = videoStreams[0];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background Video Player */}
      <video
        key={current.url}
        autoPlay
        loop
        muted
        playsInline
        poster={current.poster}
        className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-25 transition-opacity duration-700 mix-blend-luminosity scale-105"
      >
        <source src={current.url} type="video/mp4" />
      </video>

      {/* Cybernetic Scanlines & Ambient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white dark:from-[#060911]/90 dark:via-[#060911]/80 dark:to-[#060911] transition-colors duration-200" />
      <div className="absolute inset-0 bg-theme-grid opacity-30" />
    </div>
  );
};
