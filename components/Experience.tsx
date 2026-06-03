"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineItem {
  type: "experience" | "education" | "certification";
  title: string;
  org: string;
  period: string;
  description?: string;
  badge?: string;
}

const items: TimelineItem[] = [
  {
    type: "experience",
    title: "AI Quality Data Analyst Intern",
    org: "Rooman Technologies",
    period: "Sep 2024 – Feb 2025",
    description:
      "Applied statistical analysis, hypothesis testing, and data validation pipelines to real-world datasets.",
    badge: "Work",
  },
  {
    type: "education",
    title: "B.E. Computer Science & Engineering",
    org: "Don Bosco Institute of Technology, VTU",
    period: "Graduated 2025",
    description: "CGPA: 7.1/10",
    badge: "Education",
  },
  {
    type: "certification",
    title: "CompTIA Security+ (SY0-701)",
    org: "CompTIA",
    period: "In Progress",
    badge: "Cert",
  },
  {
    type: "certification",
    title: "NLP-Based Automated Cleansing for Healthcare Data",
    org: "IBM",
    period: "Apr 2025",
    badge: "Cert",
  },
  {
    type: "certification",
    title: "AI / Data Quality Analyst",
    org: "Rooman Technologies",
    period: "Sep 2024 – Feb 2025",
    badge: "Cert",
  },
];

const badgeColors: Record<string, { bg: string; text: string; border: string }> = {
  Work: { bg: "#C4501C12", text: "#D4622A", border: "#C4501C40" },
  Education: { bg: "#D4903A12", text: "#D4903A", border: "#D4903A40" },
  Cert: { bg: "#f59e0b12", text: "#fbbf24", border: "#f59e0b40" },
};

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const colors = badgeColors[item.badge ?? "Cert"];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-10"
    >
      {/* Dot on the line */}
      <div
        className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-[#C4501C] bg-[#0a0a0a] z-10 flex items-center justify-center"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#C4501C]" />
      </div>

      {/* Card */}
      <div className="group p-5 rounded-2xl border border-[#1a1a1a] bg-[#0f0f0f] hover:border-[#C4501C]/30 transition-all duration-300">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h3 className="font-bold text-[#f5f5f5] text-base leading-snug">{item.title}</h3>
            <p className="text-[#C4501C] text-sm font-medium mt-0.5">{item.org}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {item.badge && (
              <span
                className="px-2.5 py-1 rounded-full text-xs font-semibold border"
                style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}
              >
                {item.badge}
              </span>
            )}
            <span className="text-xs text-[#52525b] font-mono whitespace-nowrap">{item.period}</span>
          </div>
        </div>
        {item.description && (
          <p className="mt-3 text-sm text-[#a1a1aa] leading-relaxed">{item.description}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <section id="experience" className="relative py-28 px-6 md:px-16 lg:px-24 bg-[#0a0a0a]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4501C]/40 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <div ref={headerRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-xs font-mono tracking-[0.2em] uppercase text-[#C4501C] mb-4"
          >
            04 — Experience & Education
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-black text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-[#f5f5f5]"
          >
            The journey so far
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#C4501C] via-[#C4501C]/40 to-transparent" />

          <div className="flex flex-col gap-6">
            {items.map((item, i) => (
              <TimelineCard key={`${item.title}-${i}`} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
