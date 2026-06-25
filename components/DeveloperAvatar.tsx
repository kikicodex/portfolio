"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";


export default function DeveloperAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [shift, setShift] = useState({ x: 0, y: 0 });

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
      setShift({ x: nx * 3, y: ny * 2 });
    };

    const handleMouseLeave = () => {
      rawRotateX.set(0);
      rawRotateY.set(0);
      setShift({ x: 0, y: 0 });
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
          background: "radial-gradient(ellipse at 40% 38%, rgba(91,173,82,0.32) 0%, rgba(74,239,239,0.13) 55%, transparent 78%)",
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
          src="/avatarminecraft.png"
          alt="Keerthana — developer avatar"
          width={500}
          height={500}
          priority
          sizes="(max-width: 1023px) 85vw, 45vw"
          className="select-none"
          style={{
            width: "min(85vw, 480px)",
            height: "auto",
            objectFit: "contain",
            transform: `translate(${shift.x}px, ${shift.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
