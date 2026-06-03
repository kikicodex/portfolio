"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function useAnimatedCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) ref.current = setTimeout(() => tick(performance.now()), 16);
    };
    tick(performance.now());
  };

  useEffect(() => () => { if (ref.current) clearTimeout(ref.current); }, []);
  return { count, start };
}

function StatCard({ value, label, delay }: { value: number; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { count, start } = useAnimatedCounter(value);
  const started = useRef(false);

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true;
      setTimeout(start, delay);
    }
  }, [inView, delay, start]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="flex flex-col items-center gap-1 p-6 rounded-2xl border border-[#1e1e1e] bg-[#111111] hover:border-[#ec4899]/40 transition-colors duration-300"
    >
      <span className="font-black text-6xl bg-gradient-to-br from-[#ec4899] to-[#06b6d4] bg-clip-text text-transparent tabular-nums">
        {count}
      </span>
      <span className="text-sm text-[#71717a] font-medium text-center">{label}</span>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const stats = [
    { value: 3, label: "Apps Shipped" },
    { value: 2, label: "Live in Production" },
    { value: 1, label: "Internship" },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-28 px-6 md:px-16 lg:px-24 bg-[#0a0a0a]">
      {/* Subtle separator line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ec4899]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono tracking-[0.2em] uppercase text-[#ec4899] mb-4"
        >
          01 — About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Bold statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-black text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-[#f5f5f5]">
              Made with{" "}
              <span className="bg-gradient-to-r from-[#ec4899] to-[#06b6d4] bg-clip-text text-transparent">
                intent.
              </span>
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((s, i) => (
                <StatCard key={s.label} value={s.value} label={s.label} delay={i * 200} />
              ))}
            </div>
          </motion.div>

          {/* Right: Personality */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-[#a1a1aa] text-lg leading-[1.85] font-light">
              <span className="text-[#f5f5f5] font-medium">CS grad</span>{" "}
              from VTU Bangalore. I&apos;ve built a
              B2C hardware marketplace, a cross-platform AI study app, and a healthcare data tool —
              all solo, all live in production.
            </p>
            <p className="text-[#a1a1aa] text-lg leading-[1.85] font-light">
              I care about{" "}
              <span className="text-[#f5f5f5] font-medium">security</span>,{" "}
              <span className="text-[#f5f5f5] font-medium">performance</span>, and{" "}
              <span className="text-[#f5f5f5] font-medium">craft</span>. Security isn&apos;t an
              afterthought in my work — it&apos;s a design constraint. I&apos;m currently pushing
              toward CompTIA Security+ to formalise what I already practice.
            </p>

            {/* Traits */}
            <div className="flex flex-wrap gap-3 mt-2">
              {["Full-Stack", "Mobile", "AI", "Cybersecurity"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-[#222] bg-[#111] text-[#a1a1aa]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
