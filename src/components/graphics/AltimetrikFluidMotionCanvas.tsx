"use client";

import React, { useEffect, useRef } from "react";

export const AltimetrikFluidMotionCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for interactive distortion
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Dynamic wave ribbon parameters
    let time = 0;

    // Fluid Ribbons definition
    const ribbons = [
      {
        baseY: 0.6,
        amplitude: 140,
        frequency: 0.0018,
        speed: 0.012,
        colorStart: "rgba(37, 99, 235, 0.45)",   // Electric Blue
        colorMid: "rgba(147, 51, 234, 0.5)",     // Vibrant Violet
        colorEnd: "rgba(234, 88, 12, 0.35)",     // Vivid Orange
        lineWidth: 3,
        glowColor: "rgba(59, 130, 246, 0.6)",
      },
      {
        baseY: 0.52,
        amplitude: 110,
        frequency: 0.0022,
        speed: 0.016,
        colorStart: "rgba(234, 88, 12, 0.5)",    // Vivid Orange
        colorMid: "rgba(236, 72, 153, 0.45)",    // Magenta
        colorEnd: "rgba(59, 130, 246, 0.4)",     // Cyan/Blue
        lineWidth: 2.5,
        glowColor: "rgba(249, 115, 22, 0.5)",
      },
      {
        baseY: 0.68,
        amplitude: 160,
        frequency: 0.0014,
        speed: 0.009,
        colorStart: "rgba(6, 182, 212, 0.4)",    // Cyan
        colorMid: "rgba(79, 70, 229, 0.45)",     // Indigo
        colorEnd: "rgba(168, 85, 247, 0.35)",    // Purple
        lineWidth: 2,
        glowColor: "rgba(6, 182, 212, 0.5)",
      },
      {
        baseY: 0.45,
        amplitude: 90,
        frequency: 0.0028,
        speed: 0.02,
        colorStart: "rgba(244, 63, 94, 0.35)",   // Rose
        colorMid: "rgba(249, 115, 22, 0.4)",     // Orange
        colorEnd: "rgba(37, 99, 235, 0.3)",      // Blue
        lineWidth: 1.5,
        glowColor: "rgba(244, 63, 94, 0.4)",
      },
    ];

    // Floating Quantum & Energy Particles
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
    }

    const particleCount = 45;
    const particles: Particle[] = [];
    const colors = [
      "#3b82f6", // blue
      "#f97316", // orange
      "#a855f7", // purple
      "#06b6d4", // cyan
      "#ec4899", // pink
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.8 + 1,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    const render = () => {
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw Fluid Iridescent Waves / Ribbons
      ribbons.forEach((ribbon, rIdx) => {
        const currentY = height * ribbon.baseY;
        const mouseInfluence = ((mouseY - height / 2) / height) * 50;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, currentY);

        // Compute complex multi-harmonic sine waves
        const step = 6;
        for (let x = 0; x <= width; x += step) {
          const wave1 = Math.sin(x * ribbon.frequency + time * ribbon.speed + rIdx) * ribbon.amplitude;
          const wave2 = Math.cos(x * ribbon.frequency * 1.6 - time * ribbon.speed * 0.7) * (ribbon.amplitude * 0.4);
          const wave3 = Math.sin(x * 0.0008 + time * 0.005) * 40;

          // Local mouse repulsion
          const distToMouse = Math.abs(x - mouseX);
          const mouseDisplace = distToMouse < 250 ? Math.cos((distToMouse / 250) * Math.PI * 0.5) * 35 : 0;

          const y = currentY + wave1 + wave2 + wave3 + mouseInfluence - mouseDisplace;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Create vibrant iridescent gradient fill
        const gradient = ctx.createLinearGradient(0, currentY - ribbon.amplitude, width, currentY + ribbon.amplitude);
        gradient.addColorStop(0, ribbon.colorStart);
        gradient.addColorStop(0.5, ribbon.colorMid);
        gradient.addColorStop(1, ribbon.colorEnd);

        ctx.fillStyle = gradient;
        ctx.shadowColor = ribbon.glowColor;
        ctx.shadowBlur = 30;
        ctx.fill();

        // Draw luminous top edge line
        ctx.beginPath();
        for (let x = 0; x <= width; x += step) {
          const wave1 = Math.sin(x * ribbon.frequency + time * ribbon.speed + rIdx) * ribbon.amplitude;
          const wave2 = Math.cos(x * ribbon.frequency * 1.6 - time * ribbon.speed * 0.7) * (ribbon.amplitude * 0.4);
          const wave3 = Math.sin(x * 0.0008 + time * 0.005) * 40;
          const distToMouse = Math.abs(x - mouseX);
          const mouseDisplace = distToMouse < 250 ? Math.cos((distToMouse / 250) * Math.PI * 0.5) * 35 : 0;
          const y = currentY + wave1 + wave2 + wave3 + mouseInfluence - mouseDisplace;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.lineWidth = ribbon.lineWidth;
        ctx.stroke();

        ctx.restore();
      });

      // Render Floating Energy & Neural Particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = Math.abs(Math.sin(time * p.pulseSpeed)) * 0.6 + 0.2;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      });

      time += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-normal opacity-90 dark:opacity-85 transition-opacity duration-300"
    />
  );
};
