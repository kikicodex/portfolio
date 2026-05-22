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
        ctx.fillStyle = `rgba(124,58,237,${p.opacity})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(124,58,237,${0.08 * (1 - dist / 120)})`;
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
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#7c3aed]/[0.065] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-[#06b6d4]/[0.05] blur-[100px] pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Avatar — desktop only, absolute so it doesn't affect text centering */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex absolute inset-y-0 right-0 w-[46%] items-end justify-center overflow-hidden z-10 pointer-events-none pb-16"
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
              Keerthana K R.
            </motion.h1>

            {/* Role — gradient accent */}
            <motion.p
              {...fade(0.45)}
              className="font-semibold text-[clamp(1rem,1.8vw,1.45rem)] bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent leading-snug -mt-1"
            >
              Computer Science Engineer
            </motion.p>

            {/* Subtext */}
            <motion.p
              {...fade(0.62)}
              className="text-[#a1a1aa] text-base md:text-lg leading-relaxed max-w-md font-light"
            >
              Building full-stack and AI-powered products, exploring cybersecurity.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(0.78)} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full font-semibold text-sm bg-[#7c3aed] text-white hover:bg-[#9d5ff0] transition-all duration-200 hover:shadow-[0_0_20px_rgba(124,58,237,0.43)]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full font-semibold text-sm border border-[#333] text-[#f5f5f5] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all duration-200"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social links — fills dead space, keeps it scannable */}
            <motion.div {...fade(0.92)} className="flex items-center gap-5">
              <a
                href="https://github.com/kikicodex"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#52525b] hover:text-[#a1a1aa] transition-colors duration-200 font-medium"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <span className="w-px h-4 bg-[#2a2a2a]" />
              <a
                href="https://www.linkedin.com/in/keerthana-krr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#52525b] hover:text-[#a1a1aa] transition-colors duration-200 font-medium"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </motion.div>
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

      {/* Tech marquee */}
      <div className="relative z-10 border-t border-[#1a1a1a] py-5 overflow-hidden">
        <div className="flex gap-0 items-center whitespace-nowrap w-max animate-marquee">
          {techStack.map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-sm text-[#52525b] font-mono uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-[#7c3aed] inline-block" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
