"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 20);
      setVisible(y < lastY.current || y < 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          key="navbar"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300 ${
            atTop
              ? "bg-transparent"
              : "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1a1a1a]"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="font-black text-xl tracking-tight text-[#a1a1aa]"
          >
            Keerthana K R
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA — batman shape download */}
          <a
            href="/resume.pdf"
            download
            title="Download Resume"
            className="hidden md:block group"
          >
            <Image
              src="/batman.png"
              alt="Download Resume"
              width={393}
              height={635}
              style={{
                width: "180px",
                height: "180px",
                objectFit: "contain",
                filter: "invert(1)",
                mixBlendMode: "screen",
                transition: "transform 0.2s, filter 0.2s",
              }}
              className="group-hover:scale-110"
            />
          </a>

          {/* Mobile menu button */}
          <MobileMenu />
        </motion.header>
      )}
    </AnimatePresence>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block w-5 h-0.5 bg-[#f5f5f5] origin-center"
          transition={{ duration: 0.2 }}
        />
        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="block w-5 h-0.5 bg-[#f5f5f5]"
          transition={{ duration: 0.2 }}
        />
        <motion.span
          animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block w-5 h-0.5 bg-[#f5f5f5] origin-center"
          transition={{ duration: 0.2 }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 inset-x-0 bg-[#111111]/95 backdrop-blur-md border-b border-[#222222] py-4 px-6 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#a1a1aa] hover:text-[#f5f5f5] text-base font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="mt-2 inline-flex w-fit items-center px-4 py-2 rounded-full text-sm font-semibold bg-[#E0607A] text-white"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
