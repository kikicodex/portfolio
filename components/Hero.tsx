"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import DeveloperAvatar from "./DeveloperAvatar";

const techStack = [
  "Next.js", "TypeScript", "React Native", "Node.js", "MongoDB",
  "Tailwind CSS", "Clerk", "Razorpay", "Firebase", "OpenAI",
  "Python", "Vercel", "Turborepo", "Express.js", "scikit-learn",
  "Next.js", "TypeScript", "React Native", "Node.js", "MongoDB",
  "Tailwind CSS", "Clerk", "Razorpay", "Firebase", "OpenAI",
  "Python", "Vercel", "Turborepo", "Express.js", "scikit-learn",
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 28, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,85,53,${p.opacity})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139,85,53,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#8B5535]/[0.065] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-[#6B3F24]/[0.05] blur-[100px] pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Avatar — desktop only, absolute so it doesn't affect text centering */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex absolute inset-y-0 right-0 w-[46%] items-end justify-center z-10 pointer-events-none pb-16"
      >
        <DeveloperAvatar />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-16 lg:px-24 pt-16">
        <div className="w-full max-w-7xl mx-auto">

          {/* Text column — takes left ~54%, avatar is absolute on right */}
          <div className="lg:max-w-[54%] flex flex-col gap-5">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-[#222222] bg-[#111111] text-xs text-[#a1a1aa] font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for opportunities
            </motion.div>

            {/* Name — big focal point */}
            <motion.h1
              {...fade(0.25)}
              className="font-black text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[1.0] tracking-tight text-[#f5f5f5]"
            >
              Keerthana K R
            </motion.h1>

            {/* Role — gradient accent */}
            <motion.p
              {...fade(0.45)}
              className="font-semibold text-[clamp(1rem,1.8vw,1.45rem)] bg-gradient-to-r from-[#6B3F24] to-[#6B3F24] bg-clip-text text-transparent leading-snug -mt-1"
            >
              Computer Science Engineer
            </motion.p>

            {/* Subtext */}
            <motion.p
              {...fade(0.62)}
              className="text-[#a1a1aa] text-base md:text-lg leading-relaxed max-w-md font-light"
            >
              Building full-stack, AI-powered, and security-focused products.
            </motion.p>

          </div>

          {/* Avatar — mobile only (desktop version is absolute above) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden flex justify-center mt-10"
          >
            <DeveloperAvatar />
          </motion.div>
        </div>
      </div>

      {/* CTAs — pinned at bottom of hero above marquee */}
      <motion.div
        {...fade(0.78)}
        className="relative z-10 px-6 md:px-16 lg:px-24 pb-10"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="lg:max-w-[54%] flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-semibold text-sm bg-[#8B5535] text-white hover:bg-[#7A4428] transition-all duration-200 hover:shadow-[0_0_20px_rgba(139,85,53,0.43)]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold text-sm border border-[#333] text-[#f5f5f5] hover:border-[#8B5535] hover:text-[#8B5535] transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </motion.div>

      {/* Tech marquee */}
      <div className="relative z-10 border-t border-[#1a1a1a] py-5 overflow-hidden">
        <div className="flex gap-0 items-center whitespace-nowrap w-max animate-marquee">
          {techStack.map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-sm text-[#52525b] font-mono uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-[#8B5535] inline-block" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
