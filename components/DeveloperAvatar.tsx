"use client";

import { motion } from "framer-motion";

export default function DeveloperAvatar() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-xs mx-auto select-none"
    >
      <svg
        viewBox="0 0 320 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-2xl"
        aria-label="Keerthana — developer avatar"
      >
        <defs>
          <radialGradient id="skinG" cx="46%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#fdf5ec" />
            <stop offset="100%" stopColor="#ecd5b4" />
          </radialGradient>
          <clipPath id="leftEyeClip">
            <ellipse cx="116" cy="210" rx="28" ry="26" />
          </clipPath>
          <clipPath id="rightEyeClip">
            <ellipse cx="204" cy="210" rx="28" ry="26" />
          </clipPath>
        </defs>

        {/* ── GROUND SHADOW ── */}
        <ellipse cx="160" cy="394" rx="88" ry="9" fill="rgba(124,58,237,0.16)" />

        {/* ── HOODIE (behind everything) ── */}
        <path
          d="M 72 300 C 56 325 48 360 46 390 L 274 390 C 272 360 264 325 248 300 C 232 312 198 318 160 318 C 122 318 88 312 72 300Z"
          fill="#4c1d95"
        />
        {/* Hoodie kangaroo pocket */}
        <rect x="134" y="348" width="52" height="34" rx="10" fill="#3b1a7a" />
        {/* Center seam */}
        <line x1="160" y1="316" x2="160" y2="390" stroke="#3b1a7a" strokeWidth="1.5" opacity="0.6" />

        {/* ── ARMS ── */}
        <motion.g animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 0.5, repeat: Infinity }}
          style={{ transformOrigin: "72px 308px" }}>
          <path d="M 72 308 C 52 336 46 368 48 390" stroke="#4c1d95" strokeWidth="36" strokeLinecap="round" fill="none" />
          <ellipse cx="49" cy="392" rx="19" ry="10" fill="#ecd5b4" />
        </motion.g>
        <motion.g animate={{ rotate: [2, -2, 2] }} transition={{ duration: 0.5, repeat: Infinity }}
          style={{ transformOrigin: "248px 308px" }}>
          <path d="M 248 308 C 268 336 274 368 272 390" stroke="#4c1d95" strokeWidth="36" strokeLinecap="round" fill="none" />
          <ellipse cx="271" cy="392" rx="19" ry="10" fill="#ecd5b4" />
        </motion.g>

        {/* Coffee cup on left hand */}
        <motion.g animate={{ rotate: [-2, 2, -2] }} transition={{ duration: 0.5, repeat: Infinity }}
          style={{ transformOrigin: "72px 308px" }}>
          <rect x="22" y="374" width="30" height="26" rx="4" fill="#e2e8f0" />
          <rect x="22" y="374" width="30" height="10" rx="4" fill="#cbd5e1" />
          <path d="M 52 382 Q 60 382 60 390 Q 60 398 52 396" stroke="#cbd5e1" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Steam */}
          <motion.path d="M 30 372 Q 32 366 30 360" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round"
            animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
          <motion.path d="M 38 370 Q 40 364 38 358" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round"
            animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
        </motion.g>

        {/* ── BACK HAIR (behind head) ── */}
        <path
          d="M 55 195 C 52 130 100 72 160 70 C 220 72 268 130 265 195 L 270 310 C 246 330 206 340 160 340 C 114 340 74 330 50 310Z"
          fill="#100a20"
        />

        {/* ── HEAD ── */}
        <ellipse cx="160" cy="205" rx="112" ry="108" fill="url(#skinG)" />

        {/* ── SIDE HAIR STRANDS (over ears, stops at jaw — NOT merging with body) ── */}
        {/* Left */}
        <path d="M 52 190 C 46 218 47 252 55 278 L 72 278 C 64 252 64 218 62 190Z" fill="#100a20" />
        {/* Right */}
        <path d="M 268 190 C 274 218 273 252 265 278 L 248 278 C 256 252 256 218 258 190Z" fill="#100a20" />

        {/* ── BANGS (straight, clear horizontal cut) ── */}
        <path
          d="M 56 182 C 60 128 104 96 160 94 C 216 96 260 128 264 182 C 248 152 216 134 160 132 C 104 134 72 152 56 182Z"
          fill="#100a20"
        />
        {/* Straight bang bottom edge */}
        <path d="M 62 178 C 82 168 120 162 160 162 C 200 162 238 168 258 178" stroke="#1c1232" strokeWidth="2.5" fill="none" opacity="0.6" />
        {/* Hair strand lines in bangs */}
        <line x1="135" y1="95" x2="133" y2="162" stroke="#1c1232" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
        <line x1="152" y1="94" x2="150" y2="162" stroke="#1c1232" strokeWidth="5" strokeLinecap="round" opacity="0.35" />
        <line x1="169" y1="94" x2="171" y2="162" stroke="#1c1232" strokeWidth="5" strokeLinecap="round" opacity="0.3" />
        <line x1="186" y1="95" x2="188" y2="162" stroke="#1c1232" strokeWidth="5" strokeLinecap="round" opacity="0.35" />

        {/* ── EARS ── */}
        <ellipse cx="49" cy="214" rx="13" ry="16" fill="#ecd5b4" />
        <ellipse cx="271" cy="214" rx="13" ry="16" fill="#ecd5b4" />
        {/* Stud earrings */}
        <circle cx="49" cy="225" r="5" fill="#7c3aed" />
        <circle cx="49" cy="225" r="2.5" fill="#c4b5fd" />
        <circle cx="271" cy="225" r="5" fill="#7c3aed" />
        <circle cx="271" cy="225" r="2.5" fill="#c4b5fd" />

        {/* ── EYEBROWS — flat, slightly droopy (sleepy) ── */}
        <path d="M 90 182 Q 116 176 142 182" stroke="#100a20" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        <path d="M 178 182 Q 204 176 230 182" stroke="#100a20" strokeWidth="5.5" fill="none" strokeLinecap="round" />

        {/* ── LEFT EYE — large, dark, sleepy ── */}
        <motion.g
          animate={{ scaleY: [1, 1, 1, 0.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.85, 0.89, 0.93, 1] }}
          style={{ transformOrigin: "116px 210px" }}
        >
          {/* Sclera */}
          <ellipse cx="116" cy="210" rx="28" ry="26" fill="#f5f0ea" />
          {/* Iris — very dark, large */}
          <ellipse cx="116" cy="213" rx="22" ry="22" fill="#16101e" />
          {/* White highlight — upper left */}
          <ellipse cx="107" cy="203" rx="9" ry="9" fill="white" opacity="0.95" />
          {/* Tiny lower highlight */}
          <ellipse cx="126" cy="224" rx="4.5" ry="4" fill="white" opacity="0.4" />
          {/* Heavy upper lid — flat, sleepy (covers top of eye) */}
          <path d="M 88 198 Q 116 190 144 198 Q 116 204 88 198Z" fill="#fdf5ec" />
        </motion.g>
        {/* Upper lash line — FLAT for sleepy look */}
        <path d="M 88 198 Q 116 190 144 198" stroke="#100a20" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        {/* Lower lash line — thin */}
        <path d="M 90 236 Q 116 244 142 236" stroke="#100a20" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />

        {/* ── RIGHT EYE — large, dark, sleepy ── */}
        <motion.g
          animate={{ scaleY: [1, 1, 1, 0.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, times: [0, 0.85, 0.89, 0.93, 1] }}
          style={{ transformOrigin: "204px 210px" }}
        >
          <ellipse cx="204" cy="210" rx="28" ry="26" fill="#f5f0ea" />
          <ellipse cx="204" cy="213" rx="22" ry="22" fill="#16101e" />
          <ellipse cx="195" cy="203" rx="9" ry="9" fill="white" opacity="0.95" />
          <ellipse cx="214" cy="224" rx="4.5" ry="4" fill="white" opacity="0.4" />
          <path d="M 176 198 Q 204 190 232 198 Q 204 204 176 198Z" fill="#fdf5ec" />
        </motion.g>
        <path d="M 176 198 Q 204 190 232 198" stroke="#100a20" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        <path d="M 178 236 Q 204 244 230 236" stroke="#100a20" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />

        {/* ── NOSE — single tiny dot ── */}
        <circle cx="160" cy="252" r="2.5" fill="#c8956e" opacity="0.6" />

        {/* ── CHEEKS ── */}
        <ellipse cx="100" cy="245" rx="22" ry="14" fill="#fb7185" opacity="0.2" />
        <ellipse cx="220" cy="245" rx="22" ry="14" fill="#fb7185" opacity="0.2" />
        {/* Freckles */}
        <circle cx="92" cy="242" r="2" fill="#d4906a" opacity="0.38" />
        <circle cx="100" cy="249" r="1.5" fill="#d4906a" opacity="0.32" />
        <circle cx="228" cy="242" r="2" fill="#d4906a" opacity="0.38" />
        <circle cx="220" cy="249" r="1.5" fill="#d4906a" opacity="0.32" />

        {/* ── MOUTH — tiny, slightly pouty ── */}
        <path d="M 150 270 Q 160 280 170 270" stroke="#b87050" strokeWidth="2.8" fill="none" strokeLinecap="round" />

        {/* ── FLOATING CODE BUBBLES ── */}
        <motion.g animate={{ y: [0, -10, 0], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 0.5 }}>
          <rect x="-2" y="190" width="88" height="28" rx="9" fill="#111118" stroke="#7c3aed" strokeWidth="1.4" />
          <text x="6" y="209" fontSize="10" fill="#a78bfa" fontFamily="'Courier New',monospace">ship(ideas)</text>
        </motion.g>
        <motion.g animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 1 }}>
          <rect x="234" y="174" width="88" height="28" rx="9" fill="#111118" stroke="#06b6d4" strokeWidth="1.4" />
          <text x="242" y="193" fontSize="10" fill="#06b6d4" fontFamily="'Courier New',monospace">npm run dev</text>
        </motion.g>
        <motion.g animate={{ y: [0, -8, 0], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 4.2, repeat: Infinity, delay: 1.8 }}>
          <rect x="236" y="254" width="84" height="28" rx="9" fill="#111118" stroke="#a78bfa" strokeWidth="1.4" />
          <text x="244" y="273" fontSize="10" fill="#a78bfa" fontFamily="'Courier New',monospace">git push -u</text>
        </motion.g>

        {/* Sparkles */}
        <motion.g animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}
          style={{ transformOrigin: "38px 148px" }}>
          <path d="M38 142 L40 148 L46 148 L41 152 L43 158 L38 154 L33 158 L35 152 L30 148 L36 148Z" fill="#7c3aed" opacity="0.85" />
        </motion.g>
        <motion.g animate={{ opacity: [0, 1, 0], scale: [0.6, 1.1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.3 }}
          style={{ transformOrigin: "284px 138px" }}>
          <path d="M284 132 L286 138 L292 138 L287 142 L289 148 L284 144 L279 148 L281 142 L276 138 L282 138Z" fill="#06b6d4" opacity="0.8" />
        </motion.g>
        <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2.8, repeat: Infinity, delay: 0.9 }}>
          <circle cx="298" cy="308" r="5" fill="#7c3aed" opacity="0.4" />
          <circle cx="298" cy="308" r="2.5" fill="#c4b5fd" opacity="0.65" />
        </motion.g>

      </svg>
    </motion.div>
  );
}
