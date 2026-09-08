"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface AnimatedLogoProps {
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  className = "",
}) => {
  const [isPulsing, setIsPulsing] = useState(false);

  // Trigger pulse glow animation every 25 seconds (and on initial load after 2s)
  useEffect(() => {
    const triggerPulse = () => {
      setIsPulsing(true);
      setTimeout(() => {
        setIsPulsing(false);
      }, 1600); // 1.6s duration
    };

    // Initial attention pulse
    const initialTimer = setTimeout(triggerPulse, 2000);

    // Recurring pulse every 25 seconds
    const interval = setInterval(triggerPulse, 25000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 1600);
  };

  return (
    <Link
      href="/"
      className={`relative inline-flex items-center group py-1 ${className}`}
      onMouseEnter={handleMouseEnter}
      aria-label="SixthPin - AI & Digital Engineering Home"
    >
      <div
        className={`relative flex items-center rounded-xl p-1 bg-white/95 dark:bg-white/90 shadow-sm border border-slate-200/80 dark:border-white/20 transition-all duration-300 ${
          isPulsing ? "animate-logo-pulse" : "group-hover:scale-[1.03] group-hover:shadow-md"
        }`}
      >
        {/* Main Logo Image */}
        <img
          src="/logo.png"
          alt="SixthPin - AI & Digital Engineering: Ideas to Impact"
          className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300"
        />

        {/* Ambient Subtle Glow Layer */}
        <div
          className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500 ${
            isPulsing
              ? "opacity-100 ring-2 ring-cyan-400/60 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
              : "opacity-0"
          }`}
        />
      </div>
    </Link>
  );
};
