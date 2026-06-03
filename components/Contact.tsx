"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { toast } from "sonner";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const email = "keerthanakr80@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard!", {
        icon: "✓",
        duration: 2500,
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast.error("Failed to copy — try manually.");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-16 lg:px-24 bg-[#060606]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff6b6b]/40 to-transparent" />

      {/* Big glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#ff6b6b]/[0.05] blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-xs font-mono tracking-[0.2em] uppercase text-[#ff6b6b] mb-4"
        >
          05 — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-black text-[clamp(3rem,8vw,6rem)] leading-[1.05] tracking-tight text-[#f5f5f5] mb-6"
        >
          Get in{" "}
          <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ff9a9a] bg-clip-text text-transparent">
            touch.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[#a1a1aa] text-lg max-w-xl mx-auto leading-relaxed mb-12"
        >
          Open to full-stack, AI engineering, and cybersecurity roles — based in Bangalore.
        </motion.p>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={handleCopyEmail}
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base bg-[#ff6b6b] text-white hover:bg-[#ff8585] transition-all duration-200 hover:shadow-[0_0_34px_rgba(255,107,107,0.34)] active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {copied ? "Copied!" : email}
            <svg className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-20"
        >
          <a
            href="https://github.com/kikicodex"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#222] bg-[#111] text-[#71717a] hover:text-[#f5f5f5] hover:border-[#ff6b6b]/50 hover:shadow-[0_0_17px_rgba(255,107,107,0.17)] transition-all duration-200 text-sm font-medium"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/keerthana-krr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#222] bg-[#111] text-[#71717a] hover:text-[#f5f5f5] hover:border-[#ff9a9a]/50 hover:shadow-[0_0_17px_rgba(255,154,154,0.17)] transition-all duration-200 text-sm font-medium"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="border-t border-[#1a1a1a] pt-8"
        >
          <p className="text-xs text-[#3f3f46] font-mono">
            Designed &amp; built by{" "}
            <span className="text-[#ff6b6b]">Keerthana K R</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
