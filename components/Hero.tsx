"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import DeveloperAvatar from "./DeveloperAvatar";

const headlineWords = ["Keerthana K R", "Full-Stack Engineer."];

const techStack = [
  "Next.js", "TypeScript", "React Native", "Node.js", "MongoDB",
  "Tailwind CSS", "Clerk", "Razorpay", "Firebase", "OpenAI",
  "Python", "Vercel", "Turborepo", "Express.js", "scikit-learn",
  "Next.js", "TypeScript", "React Native", "Node.js", "MongoDB",
  "Tailwind CSS", "Clerk", "Razorpay", "Firebase", "OpenAI",
  "Python", "Vercel", "Turborepo", "Express.js", "scikit-learn",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Particle field */
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

      /* Draw faint connection lines */
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
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Radial purple glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#7c3aed]/[0.065] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-[#06b6d4]/[0.05] blur-[100px] pointer-events-none" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-16 lg:px-24 pt-24 pb-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center max-w-7xl mx-auto">

          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Available badge */}
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

            {/* Headline */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-black text-[clamp(3rem,7vw,5.5rem)] leading-[1.12] tracking-tight text-[#f5f5f5]"
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className={`inline-block mr-[0.25em] ${
                    word === "Full-Stack Engineer." ? "bg-gradient-to-r from-[#7c3aed] to-[#7c3aed] via-[#06b6d4] bg-clip-text text-transparent" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed max-w-lg font-light"
            >
              Full-stack engineer &amp; cybersecurity enthusiast{" "}
              <span className="text-[#f5f5f5] font-medium">based in Bangalore.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4 mt-2"
            >
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
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
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
