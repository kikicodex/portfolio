"use client";

import { motion } from "framer-motion";
import DeveloperAvatar from "./DeveloperAvatar";

const techStack = [
  "Product Strategy", "PRD Writing", "Roadmapping", "User Flows", "A/B Reasoning",
  "SQL", "Python", "Pandas", "Figma", "Data Analysis",
  "JavaScript", "React", "Next.js", "Firebase", "MongoDB",
  "Product Strategy", "PRD Writing", "Roadmapping", "User Flows", "A/B Reasoning",
  "SQL", "Python", "Pandas", "Figma", "Data Analysis",
  "JavaScript", "React", "Next.js", "Firebase", "MongoDB",
];

const ease = [0.76, 0, 0.24, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#E0607A]/[0.065] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F5A0BB]/[0.05] blur-[100px] pointer-events-none" />

      {/* Avatar — desktop only, absolute right column */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:flex absolute inset-y-0 right-0 w-[46%] items-end justify-center z-10 pointer-events-none pb-16"
      >
        <DeveloperAvatar />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-16 lg:px-24 pt-16">
        <div className="w-full max-w-7xl mx-auto">

          {/* Text column — left 54%, avatar is absolute on right */}
          <div className="lg:max-w-[54%] flex flex-col gap-5">

            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.1, ease }}
                className="font-black text-[clamp(1.4rem,2.6vw,2.5rem)] leading-[1.6] tracking-tight text-[#f5f5f5] whitespace-nowrap"
              >
                Keerthana K R
              </motion.h1>
            </div>

            <div style={{ overflow: "hidden" }}>
              <motion.p
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.26, ease }}
                className="font-semibold text-[clamp(1rem,1.8vw,1.45rem)] bg-gradient-to-r from-[#E0607A] to-[#F5A0BB] bg-clip-text text-transparent leading-snug -mt-1"
              >
                Technical Product Manager
              </motion.p>
            </div>

            <div style={{ overflow: "hidden" }}>
              <motion.p
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.38, ease }}
                className="text-[#a1a1aa] text-base md:text-lg leading-relaxed max-w-md font-light"
              >
                Engineer-designer turning complex problems into functional, beautiful products — concept to launch.
              </motion.p>
            </div>
          </div>

          {/* Avatar — mobile only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:hidden flex justify-center mt-10"
          >
            <DeveloperAvatar />
          </motion.div>
        </div>
      </div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 px-6 md:px-16 lg:px-24 pb-10"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="lg:max-w-[54%] flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-none font-semibold text-sm bg-[#E0607A] text-white hover:bg-[#B04060] transition-all duration-200 hover:shadow-[0_0_20px_rgba(224,96,122,0.43)]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-none font-semibold text-sm border border-[#333] text-[#f5f5f5] hover:border-[#E0607A] hover:text-[#E0607A] transition-all duration-200"
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
              <span className="w-1 h-1 rounded-full bg-[#E0607A] inline-block" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
