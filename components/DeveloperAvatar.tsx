"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function DeveloperAvatar() {
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isSipping, setIsSipping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.42;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const angle = Math.atan2(dy, dx);
      const dist = Math.min(Math.sqrt(dx * dx + dy * dy), 300);
      const factor = (dist / 300) * 4;
      setPupilOffset({
        x: Math.cos(angle) * factor,
        y: Math.sin(angle) * factor,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const cycle = () => {
      const delay = 4000 + Math.random() * 2000;
      return setTimeout(() => {
        setIsSipping(true);
        setTimeout(() => setIsSipping(false), 1200);
        timer = cycle();
      }, delay);
    };
    let timer = cycle();
    return () => clearTimeout(timer);
  }, []);

  const lIrisX = 122 + pupilOffset.x;
  const lIrisY = 206 + pupilOffset.y;
  const rIrisX = 198 + pupilOffset.x;
  const rIrisY = 206 + pupilOffset.y;

  const breathe = {
    animate: { y: [0, -3, 0] },
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" as const },
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xs mx-auto select-none"
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 320 430"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full drop-shadow-2xl"
          aria-label="Keerthana — chibi developer avatar"
        >
          <defs>
            <radialGradient id="skinG" cx="46%" cy="38%" r="62%">
              <stop offset="0%" stopColor="#fdf5ec" />
              <stop offset="100%" stopColor="#f0d5b0" />
            </radialGradient>
            <radialGradient id="hoodG" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#0c0c18" />
            </radialGradient>
          </defs>

          {/* ── GROUND SHADOW ── */}
          <ellipse cx="160" cy="422" rx="80" ry="8" fill="rgba(124,58,237,0.14)" />

          {/* ── BODY + HOODIE BACK (breathing group) ── */}
          <motion.g {...breathe}>
            {/* Hoodie body — wide chibi body */}
            <path
              d="M 88 310 C 72 330 62 370 60 415 L 260 415 C 258 370 248 330 232 310 C 216 320 190 326 160 326 C 130 326 104 320 88 310Z"
              fill="#0c0c18"
            />

            {/* Orca white spots on hoodie sides */}
            <ellipse cx="82" cy="355" rx="14" ry="10" fill="white" opacity="0.12" />
            <ellipse cx="238" cy="355" rx="14" ry="10" fill="white" opacity="0.12" />
            <ellipse cx="76" cy="378" rx="9" ry="7" fill="white" opacity="0.09" />
            <ellipse cx="244" cy="378" rx="9" ry="7" fill="white" opacity="0.09" />

            {/* Kangaroo pocket */}
            <rect x="132" y="360" width="56" height="38" rx="12" fill="#0a0a16" />

            {/* Arms — short chibi arms */}
            {/* Left arm */}
            <path
              d="M 88 318 C 66 340 58 375 60 400"
              stroke="#0c0c18"
              strokeWidth="38"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="60" cy="402" rx="20" ry="11" fill="#f0d5b0" />

            {/* Right arm — holding cup side */}
            <path
              d="M 232 318 C 254 340 262 375 260 400"
              stroke="#0c0c18"
              strokeWidth="38"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="260" cy="402" rx="20" ry="11" fill="#f0d5b0" />
          </motion.g>

          {/* ── HOOD (sits behind head, big rounded shape) ── */}
          <path
            d="M 56 200 C 52 130 90 54 160 50 C 230 54 268 130 264 200 C 258 260 232 298 160 310 C 88 298 62 260 56 200Z"
            fill="url(#hoodG)"
          />

          {/* Shark fin left */}
          <path d="M 80 130 L 62 72 L 96 118Z" fill="#0c0c18" />
          {/* Shark fin right */}
          <path d="M 240 130 L 258 72 L 224 118Z" fill="#0c0c18" />

          {/* Hood orca spots */}
          <ellipse cx="86" cy="200" rx="16" ry="22" fill="white" opacity="0.08" />
          <ellipse cx="234" cy="200" rx="16" ry="22" fill="white" opacity="0.08" />

          {/* Hoodie strings hanging down from hood */}
          <line x1="148" y1="310" x2="144" y2="370" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <line x1="172" y1="310" x2="176" y2="370" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <circle cx="144" cy="372" r="5" fill="#1a1a2e" />
          <circle cx="176" cy="372" r="5" fill="#1a1a2e" />

          {/* ── HEAD ── */}
          <ellipse cx="160" cy="190" rx="104" ry="100" fill="url(#skinG)" />

          {/* ── EARS ── */}
          <ellipse cx="57" cy="200" rx="12" ry="15" fill="#f0d5b0" />
          <ellipse cx="263" cy="200" rx="12" ry="15" fill="#f0d5b0" />

          {/* ── BACK HAIR (very dark, behind face) ── */}
          <path
            d="M 58 185 C 55 120 100 62 160 60 C 220 62 265 120 262 185 L 266 300 C 242 316 202 324 160 324 C 118 324 78 316 54 300Z"
            fill="#0d0d0d"
          />

          {/* Side hair over ears */}
          <path d="M 58 188 C 52 215 52 252 58 280 L 76 278 C 70 252 70 215 66 188Z" fill="#0d0d0d" />
          <path d="M 262 188 C 268 215 268 252 262 280 L 244 278 C 250 252 250 215 254 188Z" fill="#0d0d0d" />

          {/* ── BANGS — straight, flat, blunt cut ── */}
          <path
            d="M 62 186 C 64 122 104 82 160 80 C 216 82 256 122 258 186 C 240 158 210 142 160 140 C 110 142 80 158 62 186Z"
            fill="#0d0d0d"
          />
          {/* Sharp bang bottom edge */}
          <rect x="64" y="172" width="192" height="16" rx="0" fill="#0d0d0d" />
          {/* Bang hair strands */}
          <line x1="115" y1="82" x2="113" y2="188" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
          <line x1="135" y1="80" x2="133" y2="188" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" opacity="0.45" />
          <line x1="155" y1="80" x2="155" y2="188" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
          <line x1="175" y1="80" x2="177" y2="188" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" opacity="0.45" />
          <line x1="195" y1="81" x2="197" y2="188" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" opacity="0.5" />

          {/* ── EYEBROWS — flat/slightly drooping, sleepy ── */}
          <path d="M 96 196 Q 122 190 148 196" stroke="#0d0d0d" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 172 196 Q 198 190 224 196" stroke="#0d0d0d" strokeWidth="5" fill="none" strokeLinecap="round" />

          {/* ── LEFT EYE ── */}
          <motion.g
            animate={{ scaleY: [1, 1, 1, 0.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.82, 0.88, 0.92, 1] }}
            style={{ transformOrigin: "122px 206px" }}
          >
            {/* Sclera */}
            <ellipse cx="122" cy="206" rx="26" ry="24" fill="#f8f3ed" />
            {/* Iris — very large, dark */}
            <ellipse cx={lIrisX} cy={lIrisY} rx="19" ry="19" fill="#0f0a1a" />
            {/* Shine */}
            <ellipse cx={lIrisX - 7} cy={lIrisY - 8} rx="7" ry="7" fill="white" opacity="0.92" />
            <ellipse cx={lIrisX + 6} cy={lIrisY + 7} rx="3.5" ry="3" fill="white" opacity="0.38" />
            {/* Sleepy half-lid covers top ~40% of eye */}
            <path
              d="M 96 197 Q 122 189 148 197 Q 122 205 96 197Z"
              fill="#fdf5ec"
            />
          </motion.g>
          {/* Upper lash — flat, heavy */}
          <path d="M 96 197 Q 122 189 148 197" stroke="#0d0d0d" strokeWidth="5.5" fill="none" strokeLinecap="round" />
          {/* Lower lash */}
          <path d="M 98 230 Q 122 238 146 230" stroke="#0d0d0d" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.35" />

          {/* ── RIGHT EYE ── */}
          <motion.g
            animate={{ scaleY: [1, 1, 1, 0.05, 1] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.82, 0.88, 0.92, 1] }}
            style={{ transformOrigin: "198px 206px" }}
          >
            <ellipse cx="198" cy="206" rx="26" ry="24" fill="#f8f3ed" />
            <ellipse cx={rIrisX} cy={rIrisY} rx="19" ry="19" fill="#0f0a1a" />
            <ellipse cx={rIrisX - 7} cy={rIrisY - 8} rx="7" ry="7" fill="white" opacity="0.92" />
            <ellipse cx={rIrisX + 6} cy={rIrisY + 7} rx="3.5" ry="3" fill="white" opacity="0.38" />
            <path
              d="M 172 197 Q 198 189 224 197 Q 198 205 172 197Z"
              fill="#fdf5ec"
            />
          </motion.g>
          <path d="M 172 197 Q 198 189 224 197" stroke="#0d0d0d" strokeWidth="5.5" fill="none" strokeLinecap="round" />
          <path d="M 174 230 Q 198 238 222 230" stroke="#0d0d0d" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.35" />

          {/* ── NOSE ── */}
          <circle cx="160" cy="248" r="2.5" fill="#c8956e" opacity="0.55" />

          {/* ── CHEEKS ── */}
          <ellipse cx="102" cy="238" rx="20" ry="13" fill="#fb7185" opacity="0.18" />
          <ellipse cx="218" cy="238" rx="20" ry="13" fill="#fb7185" opacity="0.18" />

          {/* ── MOUTH — small cute, slightly pouty ── */}
          <motion.path
            d={isSipping ? "M 152 264 Q 160 260 168 264" : "M 152 266 Q 160 275 168 266"}
            stroke="#b87050"
            strokeWidth="2.8"
            fill="none"
            strokeLinecap="round"
            animate={{ d: isSipping ? "M 152 264 Q 160 260 168 264" : "M 152 266 Q 160 275 168 266" }}
            transition={{ duration: 0.3 }}
          />

          {/* ── HOOD TEETH — shark teeth on hood rim ── */}
          <path
            d="M 82 295 L 91 276 L 100 295 L 109 276 L 118 295 L 127 276 L 136 295 L 145 276 L 154 295 L 163 276 L 172 295 L 181 276 L 190 295 L 199 276 L 208 295 L 217 276 L 226 295 L 235 276 L 238 295 L 238 304 L 82 304Z"
            fill="#0c0c18"
          />
          {/* Teeth whites */}
          <path
            d="M 91 276 L 100 295 L 109 276Z M 118 295 L 127 276 L 136 295Z M 145 276 L 154 295 L 163 276Z M 172 295 L 181 276 L 190 295Z M 199 276 L 208 295 L 217 276Z"
            fill="white"
            opacity="0.85"
          />

          {/* ── BUBBLE TEA CUP (front, breathing group) ── */}
          <motion.g {...breathe}>
            {/* Cup body — tapered */}
            <path
              d="M 228 348 L 222 416 L 268 416 L 262 348Z"
              fill="#e2e8f0"
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />
            {/* Dome lid */}
            <path
              d="M 224 350 Q 245 338 270 350"
              fill="#a5b4fc"
              stroke="#818cf8"
              strokeWidth="1.5"
            />
            <ellipse cx="247" cy="350" rx="23" ry="7" fill="#a5b4fc" />
            {/* Tapioca pearls */}
            <circle cx="238" cy="390" r="7" fill="#2d1a4a" />
            <circle cx="252" cy="400" r="7" fill="#2d1a4a" />
            <circle cx="240" cy="408" r="7" fill="#2d1a4a" />
            <circle cx="256" cy="390" r="6" fill="#3b2260" />
            <circle cx="262" cy="404" r="6" fill="#2d1a4a" />
            {/* Straw */}
            <motion.line
              x1="250"
              y1="304"
              x2="248"
              y2="350"
              stroke="#f472b6"
              strokeWidth="5"
              strokeLinecap="round"
              animate={isSipping ? { y1: 300, y2: 346 } : { y1: 304, y2: 350 }}
              transition={{ duration: 0.3 }}
            />
            {/* Straw bubbles when sipping */}
            {isSipping && (
              <motion.g
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 1, 0], y: -14 }}
                transition={{ duration: 0.9 }}
              >
                <circle cx="250" cy="295" r="3.5" fill="#f9a8d4" opacity="0.7" />
                <circle cx="256" cy="282" r="2.5" fill="#f9a8d4" opacity="0.5" />
                <circle cx="245" cy="270" r="2" fill="#f9a8d4" opacity="0.4" />
              </motion.g>
            )}
          </motion.g>

          {/* ── FLOATING CODE BUBBLES ── */}
          <motion.g
            animate={{ y: [0, -10, 0], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: 0.5 }}
          >
            <rect x="-4" y="200" width="88" height="28" rx="9" fill="#111118" stroke="#7c3aed" strokeWidth="1.4" />
            <text x="4" y="219" fontSize="10" fill="#a78bfa" fontFamily="'Courier New',monospace">ship(ideas)</text>
          </motion.g>
          <motion.g
            animate={{ y: [0, 9, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3.8, repeat: Infinity, delay: 1 }}
          >
            <rect x="236" y="152" width="88" height="28" rx="9" fill="#111118" stroke="#06b6d4" strokeWidth="1.4" />
            <text x="244" y="171" fontSize="10" fill="#06b6d4" fontFamily="'Courier New',monospace">npm run dev</text>
          </motion.g>
          <motion.g
            animate={{ y: [0, -8, 0], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 4.2, repeat: Infinity, delay: 1.8 }}
          >
            <rect x="-2" y="290" width="84" height="28" rx="9" fill="#111118" stroke="#a78bfa" strokeWidth="1.4" />
            <text x="6" y="309" fontSize="10" fill="#a78bfa" fontFamily="'Courier New',monospace">git push -u</text>
          </motion.g>

          {/* Sparkles */}
          <motion.g
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}
            style={{ transformOrigin: "36px 140px" }}
          >
            <path d="M36 134 L38 140 L44 140 L39 144 L41 150 L36 146 L31 150 L33 144 L28 140 L34 140Z" fill="#7c3aed" opacity="0.85" />
          </motion.g>
          <motion.g
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.3 }}
            style={{ transformOrigin: "286px 128px" }}
          >
            <path d="M286 122 L288 128 L294 128 L289 132 L291 138 L286 134 L281 138 L283 132 L278 128 L284 128Z" fill="#06b6d4" opacity="0.8" />
          </motion.g>
          <motion.g
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: 0.9 }}
          >
            <circle cx="296" cy="318" r="5" fill="#7c3aed" opacity="0.4" />
            <circle cx="296" cy="318" r="2.5" fill="#c4b5fd" opacity="0.65" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}
