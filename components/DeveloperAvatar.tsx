"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";


export default function DeveloperAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 80, damping: 20, mass: 0.6 });
  const rotateY = useSpring(rawRotateY, { stiffness: 80, damping: 20, mass: 0.6 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      const cx = left + width / 2;
      const cy = top + height / 2;
      // Normalize -1 to 1, clamp to avoid wild angles at distance
      const nx = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2)));
      const ny = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2)));
      rawRotateY.set(nx * 8);
      rawRotateX.set(-ny * 6);
    };

    const handleMouseLeave = () => {
      rawRotateX.set(0);
      rawRotateY.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [rawRotateX, rawRotateY]);

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center items-center"
      style={{ perspective: "900px" }}
    >
      {/* Glow behind the image */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "380px",
          height: "520px",
          background: "radial-gradient(ellipse at 40% 38%, rgba(124,58,237,0.32) 0%, rgba(6,182,212,0.13) 55%, transparent 78%)",
          filter: "blur(52px)",
          top: "6%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      {/* Float + tilt wrapper */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <Image
          src="/avatar.png"
          alt="Keerthana — developer avatar"
          width={420}
          height={594}
          priority
          sizes="(max-width: 1023px) 85vw, 45vw"
          className="select-none w-auto"
          style={{
            height: "min(clamp(260px, 58vh, 600px), 90vw)",
            width: "auto",
            maxWidth: "min(85vw, 460px)",
            objectFit: "contain",
          }}
          draggable={false}
        />
      </motion.div>


      {/* Sparkles */}
      <motion.div
        animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}
        className="absolute pointer-events-none"
        style={{ left: "-18%", top: "12%" }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 1 L12.5 9 L20 11 L12.5 13 L11 21 L9.5 13 L2 11 L9.5 9Z" fill="#7c3aed" opacity="0.85" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.3 }}
        className="absolute pointer-events-none"
        style={{ right: "-10%", top: "6%" }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1 L10.2 7.4 L16 9 L10.2 10.6 L9 17 L7.8 10.6 L2 9 L7.8 7.4Z" fill="#06b6d4" opacity="0.8" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, delay: 0.9 }}
        className="absolute pointer-events-none"
        style={{ right: "-6%", bottom: "18%" }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="5" fill="#7c3aed" opacity="0.4" />
          <circle cx="7" cy="7" r="2.5" fill="#c4b5fd" opacity="0.65" />
        </svg>
      </motion.div>
    </div>
  );
}
