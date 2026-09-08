"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

interface AnimatedLogoProps {
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      video.play().catch((err) => {
        console.log("Logo video autoplay:", err);
      });
    }
  }, []);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  return (
    <Link
      href="/"
      className={`relative inline-flex items-center group py-1 shrink-0 ${className}`}
      onMouseEnter={handleMouseEnter}
      aria-label="SixthPin - AI & Digital Engineering Home"
    >
      <div className="relative flex items-center rounded-xl p-0.5 sm:p-1 bg-white dark:bg-white/95 shadow-sm border border-slate-200/90 dark:border-white/20 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-md overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            src="/videos/sixthpin-ai-digital-engineering-logo-animation.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`h-8 sm:h-9 md:h-10 w-auto max-w-[150px] sm:max-w-[170px] md:max-w-[190px] object-contain transition-opacity duration-300 ${
              isVideoLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : null}

        {/* Fallback image when video is loading or unsupported */}
        {(!isVideoLoaded || videoError) && (
          <img
            src="/logo.png"
            alt="SixthPin - AI & Digital Engineering: Ideas to Impact"
            className={`h-8 sm:h-9 md:h-10 w-auto object-contain ${
              isVideoLoaded && !videoError ? "absolute inset-0 pointer-events-none opacity-0" : "opacity-100"
            }`}
          />
        )}
      </div>
    </Link>
  );
};

