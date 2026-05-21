"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url?: string;
  tags: string[];
  gradient: string;
  accent: string;
  badge?: string;
  mockLines: string[];
}

const projects: Project[] = [
  {
    id: "kernel",
    title: "KERNEL",
    subtitle: "Industrial Hardware E-Commerce Marketplace",
    description:
      "A full B2B/B2C marketplace for the Indian industrial hardware market. Built with a Turborepo monorepo, Next.js frontend on Vercel, Express backend on Railway, Razorpay payments, and Clerk authentication with three-tier role gating.",
    url: "kerneltools.vercel.app",
    tags: ["Next.js 16", "Express.js", "MongoDB", "Clerk", "Razorpay", "Turborepo", "Tailwind CSS"],
    gradient: "from-[#ffd100]/20 via-[#f59e0b]/10 to-[#0a0a0a]",
    accent: "#ffd100",
    mockLines: ["B2B Hardware Marketplace", "₹ Razorpay Payments", "3-Tier Role Auth", "Turborepo Monorepo"],
  },
  {
    id: "engineerease",
    title: "ENGINEEREASE",
    subtitle: "AI-Powered Study Platform for VTU Students",
    description:
      "Cross-platform app (web + iOS + Android) for VTU engineering students. AI-generated answers via OpenAI GPT-4o through a secure server-side proxy, adaptive quizzes, community feed, and study analytics.",
    url: "engineerease.vercel.app",
    tags: ["Expo", "React Native", "Firebase", "OpenAI GPT-4o", "Cloudinary", "Vercel"],
    gradient: "from-[#7c3aed]/20 via-[#06b6d4]/10 to-[#0a0a0a]",
    accent: "#7c3aed",
    mockLines: ["GPT-4o Powered Q&A", "iOS + Android + Web", "Adaptive Quizzes", "VTU Syllabus"],
  },
  {
    id: "healthcare",
    title: "HEALTHCARE DATA TOOL",
    subtitle: "Automated NLP Data Cleansing Pipeline",
    description:
      "Python-based automated tool for cleaning and standardising healthcare records. Features text standardisation, duplicate detection, blood-pressure validation, and Isolation Forest anomaly detection via a Streamlit web interface.",
    tags: ["Python", "Streamlit", "scikit-learn", "NLP", "Pandas"],
    gradient: "from-[#10b981]/20 via-[#06b6d4]/10 to-[#0a0a0a]",
    accent: "#10b981",
    badge: "IBM Certified",
    mockLines: ["NLP Standardisation", "Anomaly Detection", "BP Validation", "Streamlit UI"],
  },
];

function MockBrowser({ project, inView }: { project: Project; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative rounded-xl overflow-hidden border border-[#222] shadow-2xl"
      style={{ boxShadow: `0 0 60px ${project.accent}18` }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161616] border-b border-[#222]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-4 bg-[#1e1e1e] rounded-md px-3 py-1 text-xs text-[#52525b] font-mono">
          {project.url ? `https://${project.url}` : "local://app"}
        </div>
      </div>
      {/* Screen */}
      <div className={`h-52 md:h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center p-6`}>
        <div className="w-full max-w-sm space-y-2">
          {project.mockLines.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: project.accent }} />
              <div className="h-4 rounded flex-1 bg-[#ffffff]/8 flex items-center px-3">
                <span className="text-xs font-mono" style={{ color: project.accent }}>{line}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectTiltCard({
  project,
  reversed,
  index,
}: {
  project: Project;
  reversed: boolean;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -10;
    setTilt({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        reversed ? "lg:[&>*:first-child]:order-last" : ""
      }`}
    >
      {/* Mock browser with tilt */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          animate={{ rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <MockBrowser project={project} inView={inView} />
        </motion.div>
      </div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col gap-5"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="text-xs font-mono tracking-[0.15em] uppercase font-bold"
            style={{ color: project.accent }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.badge && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold border"
              style={{ borderColor: project.accent + "60", color: project.accent, background: project.accent + "12" }}
            >
              {project.badge}
            </span>
          )}
        </div>

        <h3 className="font-black text-3xl md:text-4xl tracking-tight text-[#f5f5f5]">
          {project.title}
        </h3>

        <p className="text-[#7c3aed] font-semibold text-base">{project.subtitle}</p>

        <p className="text-[#a1a1aa] text-base leading-relaxed font-light">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-mono border border-[#222] bg-[#111] text-[#71717a] hover:text-[#f5f5f5] hover:border-[#7c3aed]/50 transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.url && (
          <a
            href={`https://${project.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold mt-2 group"
            style={{ color: project.accent }}
          >
            View Live
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="relative py-28 px-6 md:px-16 lg:px-24 bg-[#0a0a0a]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="text-xs font-mono tracking-[0.2em] uppercase text-[#7c3aed] mb-4"
          >
            02 — Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-black text-[clamp(2rem,4vw,3.5rem)] tracking-tight text-[#f5f5f5]"
          >
            Things I&apos;ve shipped
          </motion.h2>
        </div>

        <div className="flex flex-col gap-28">
          {projects.map((project, i) => (
            <ProjectTiltCard
              key={project.id}
              project={project}
              reversed={i % 2 === 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
