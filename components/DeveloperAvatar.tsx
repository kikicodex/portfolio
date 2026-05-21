"use client";

import { motion } from "framer-motion";

export default function DeveloperAvatar() {
  return (
    <motion.div
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-sm mx-auto select-none"
    >
      <svg
        viewBox="0 0 400 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-2xl"
        aria-label="Keerthana — developer avatar"
      >
        {/* Glow behind avatar */}
        <ellipse cx="200" cy="400" rx="120" ry="20" fill="rgba(124,58,237,0.18)" />
        <ellipse cx="200" cy="230" rx="180" ry="180" fill="rgba(124,58,237,0.06)" />

        {/* Chair / seat */}
        <rect x="120" y="360" width="160" height="12" rx="6" fill="#1e1e2e" />
        <rect x="155" y="372" width="14" height="50" rx="4" fill="#2a2a3e" />
        <rect x="231" y="372" width="14" height="50" rx="4" fill="#2a2a3e" />
        <rect x="140" y="418" width="120" height="12" rx="6" fill="#222233" />

        {/* Desk */}
        <rect x="60" y="310" width="280" height="14" rx="7" fill="#1a1a2e" />
        <rect x="80" y="324" width="10" height="60" rx="3" fill="#151525" />
        <rect x="310" y="324" width="10" height="60" rx="3" fill="#151525" />

        {/* Laptop base */}
        <rect x="110" y="280" width="180" height="36" rx="8" fill="#0f0f1a" stroke="#7c3aed" strokeWidth="1.5" />
        {/* Laptop screen */}
        <rect x="118" y="190" width="164" height="96" rx="8" fill="#0f0f1a" stroke="#7c3aed" strokeWidth="1.5" />
        {/* Screen content — code lines */}
        <rect x="130" y="205" width="60" height="5" rx="2" fill="#7c3aed" opacity="0.8" />
        <rect x="130" y="216" width="100" height="4" rx="2" fill="#06b6d4" opacity="0.6" />
        <rect x="130" y="227" width="80" height="4" rx="2" fill="#7c3aed" opacity="0.5" />
        <rect x="130" y="238" width="50" height="4" rx="2" fill="#a78bfa" opacity="0.7" />
        <rect x="130" y="249" width="110" height="4" rx="2" fill="#06b6d4" opacity="0.4" />
        <rect x="130" y="260" width="70" height="4" rx="2" fill="#7c3aed" opacity="0.6" />

        {/* Blinking cursor on screen */}
        <motion.rect
          x="204"
          y="260"
          width="3"
          height="8"
          rx="1"
          fill="#f5f5f5"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.9, repeat: Infinity }}
        />

        {/* Hinge */}
        <rect x="108" y="280" width="184" height="6" rx="3" fill="#7c3aed" opacity="0.5" />

        {/* Body */}
        <ellipse cx="200" cy="145" rx="58" ry="64" fill="#f4c5a0" />

        {/* Hoodie / top */}
        <path
          d="M142 190 C130 210 115 240 112 280 L288 280 C285 240 270 210 258 190 C240 200 220 206 200 206 C180 206 160 200 142 190Z"
          fill="#3b1f6e"
        />
        {/* Hoodie pocket */}
        <rect x="178" y="248" width="44" height="22" rx="6" fill="#2d1859" opacity="0.8" />

        {/* Arms */}
        {/* Left arm — typing */}
        <motion.g
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "145px 210px" }}
        >
          <path d="M145 210 C125 230 118 262 120 278" stroke="#3b1f6e" strokeWidth="28" strokeLinecap="round" fill="none" />
          <ellipse cx="122" cy="278" rx="14" ry="10" fill="#f4c5a0" />
        </motion.g>
        {/* Right arm — typing */}
        <motion.g
          animate={{ rotate: [3, -3, 3] }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "255px 210px" }}
        >
          <path d="M255 210 C275 230 282 262 280 278" stroke="#3b1f6e" strokeWidth="28" strokeLinecap="round" fill="none" />
          <ellipse cx="278" cy="278" rx="14" ry="10" fill="#f4c5a0" />
        </motion.g>

        {/* Hair — long dark */}
        <path
          d="M148 100 C140 60 160 30 200 28 C240 30 260 60 252 100 C258 80 265 110 260 140 C255 90 248 60 200 58 C152 60 145 90 140 140 C135 110 142 80 148 100Z"
          fill="#1a0a2e"
        />
        {/* Hair sides */}
        <path d="M145 110 C138 140 140 175 145 195 C135 175 130 145 138 110Z" fill="#1a0a2e" />
        <path d="M255 110 C262 140 260 175 255 195 C265 175 270 145 262 110Z" fill="#1a0a2e" />
        {/* Hair — bangs */}
        <path
          d="M158 80 C165 70 185 64 200 64 C215 64 235 70 242 80 C232 72 218 68 200 68 C182 68 168 72 158 80Z"
          fill="#1a0a2e"
        />

        {/* Face */}
        {/* Eyes */}
        <motion.g
          animate={{ scaleY: [1, 1, 1, 0.05, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.85, 0.88, 0.92, 1] }}
          style={{ transformOrigin: "180px 138px" }}
        >
          <ellipse cx="180" cy="138" rx="9" ry="10" fill="#1a0a2e" />
          <ellipse cx="177" cy="135" rx="3" ry="3" fill="#f5f5f5" opacity="0.9" />
        </motion.g>
        <motion.g
          animate={{ scaleY: [1, 1, 1, 0.05, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.85, 0.88, 0.92, 1] }}
          style={{ transformOrigin: "220px 138px" }}
        >
          <ellipse cx="220" cy="138" rx="9" ry="10" fill="#1a0a2e" />
          <ellipse cx="217" cy="135" rx="3" ry="3" fill="#f5f5f5" opacity="0.9" />
        </motion.g>

        {/* Eyebrows */}
        <path d="M170 124 C174 120 186 120 190 124" stroke="#1a0a2e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M210 124 C214 120 226 120 230 124" stroke="#1a0a2e" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <path d="M197 148 C197 154 203 157 203 154" stroke="#e8a882" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Smile */}
        <path d="M186 165 C192 172 208 172 214 165" stroke="#c27b52" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Cheeks */}
        <ellipse cx="168" cy="158" rx="12" ry="7" fill="#f4a0a0" opacity="0.45" />
        <ellipse cx="232" cy="158" rx="12" ry="7" fill="#f4a0a0" opacity="0.45" />

        {/* Earrings */}
        <circle cx="143" cy="152" r="4" fill="#7c3aed" />
        <circle cx="257" cy="152" r="4" fill="#7c3aed" />

        {/* Floating code snippets around avatar */}
        <motion.g
          animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <rect x="16" y="180" width="80" height="28" rx="6" fill="#161616" stroke="#7c3aed" strokeWidth="1" />
          <text x="26" y="198" fontSize="10" fill="#7c3aed" fontFamily="monospace">{"{ code }"}</text>
        </motion.g>

        <motion.g
          animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        >
          <rect x="300" y="160" width="84" height="28" rx="6" fill="#161616" stroke="#06b6d4" strokeWidth="1" />
          <text x="310" y="178" fontSize="10" fill="#06b6d4" fontFamily="monospace">{"<Ship />"}</text>
        </motion.g>

        <motion.g
          animate={{ y: [0, -6, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        >
          <rect x="298" y="240" width="90" height="28" rx="6" fill="#161616" stroke="#a78bfa" strokeWidth="1" />
          <text x="308" y="258" fontSize="10" fill="#a78bfa" fontFamily="monospace">{"npm deploy"}</text>
        </motion.g>
      </svg>
    </motion.div>
  );
}
