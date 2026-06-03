"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
  accent: string;
}

const categories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "{ }",
    skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL"],
    accent: "#8B5535",
  },
  {
    name: "Frontend & Mobile",
    icon: "◻",
    skills: ["Next.js", "React", "React Native", "Expo", "Tailwind CSS", "Zustand"],
    accent: "#6B3F24",
  },
  {
    name: "Backend & DB",
    icon: "⬡",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "Firestore", "REST APIs"],
    accent: "#8B5535",
  },
  {
    name: "Cloud & DevOps",
    icon: "☁",
    skills: ["Vercel", "Railway", "Cloudinary", "Turborepo", "pnpm"],
    accent: "#6B3F24",
  },
  {
    name: "Auth & Payments",
    icon: "⚿",
    skills: ["Clerk", "Firebase Auth", "Razorpay", "JWT"],
    accent: "#6B3F24",
  },
  {
    name: "Security",
    icon: "⊕",
    skills: ["OWASP Top 10", "JWT Auth", "RBAC", "Firestore Rules", "Secret Management"],
    accent: "#f43f5e",
  },
  {
    name: "AI / ML",
    icon: "◈",
    skills: ["OpenAI GPT-4o", "NLP", "scikit-learn", "Pandas", "Streamlit"],
    accent: "#6B3F24",
  },
];

function SkillTag({ skill, accent, delay }: { skill: string; accent: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.06 }}
      className="skill-tag inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#111111] text-[#a1a1aa] transition-all duration-200"
      style={
        {
          "--accent": accent,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = accent;
        (e.currentTarget as HTMLElement).style.color = "#f5f5f5";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 14px ${accent}44`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#222222";
        (e.currentTarget as HTMLElement).style.color = "#a1a1aa";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {skill}
    </motion.span>
  );
}

function CategoryBlock({ cat, index }: { cat: SkillCategory; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="flex flex-col gap-4 p-5 rounded-2xl border border-[#1a1a1a] bg-[#0f0f0f] hover:border-[#2a2a2a] transition-colors duration-300"
    >
      <div className="flex items-center gap-3">
        <span
          className="font-mono text-base w-8 text-center flex-shrink-0"
          style={{ color: cat.accent }}
        >
          {cat.icon}
        </span>
        <h3 className="font-semibold text-sm text-[#f5f5f5] tracking-wide">{cat.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill, si) =>
          inView ? (
            <SkillTag
              key={skill}
              skill={skill}
              accent={cat.accent}
              delay={si * 0.05}
            />
          ) : null
        )}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="relative py-28 px-6 md:px-16 lg:px-24 bg-[#060606]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6B3F24]/40 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-xs font-mono tracking-[0.2em] uppercase text-[#8B5535] mb-4"
          >
            03 — Skills
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-black text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-[#f5f5f5]"
          >
            What I work with
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <CategoryBlock key={cat.name} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
