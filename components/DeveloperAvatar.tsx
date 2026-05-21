"use client";

import { motion } from "framer-motion";

export default function DeveloperAvatar() {
  return (
    <motion.div
      animate={{ y: [0, -16, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-xs mx-auto select-none"
    >
      <svg
        viewBox="0 0 340 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-2xl"
        aria-label="Keerthana — cute developer avatar"
      >
        <defs>
          <radialGradient id="skinG" cx="46%" cy="36%" r="65%">
            <stop offset="0%" stopColor="#ffe8d2" />
            <stop offset="100%" stopColor="#f8c9a0" />
          </radialGradient>
          <radialGradient id="cheekR" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fb7185" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fb7185" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bunG" cx="38%" cy="32%" r="60%">
            <stop offset="0%" stopColor="#2d1a5e" />
            <stop offset="100%" stopColor="#0f0720" />
          </radialGradient>
          <radialGradient id="screenG" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="170" cy="410" rx="100" ry="11" fill="rgba(124,58,237,0.18)" />

        {/* ── DESK ── */}
        <rect x="30" y="350" width="280" height="12" rx="6" fill="#17172e" />
        <rect x="50" y="360" width="8" height="48" rx="3" fill="#11112a" />
        <rect x="282" y="360" width="8" height="48" rx="3" fill="#11112a" />

        {/* ── LAPTOP SCREEN ── */}
        <rect x="88" y="278" width="164" height="74" rx="9" fill="#07061a" stroke="#7c3aed" strokeWidth="2" />
        <rect x="94" y="284" width="152" height="63" rx="6" fill="#0d0b22" />
        <rect x="94" y="284" width="152" height="63" rx="6" fill="url(#screenG)" opacity="0.35" />
        {/* Traffic lights */}
        <rect x="94" y="284" width="152" height="12" rx="5" fill="#13122e" />
        <circle cx="103" cy="290" r="2.8" fill="#ff5f57" />
        <circle cx="112" cy="290" r="2.8" fill="#febc2e" />
        <circle cx="121" cy="290" r="2.8" fill="#28c840" />
        {/* Code lines */}
        <rect x="100" y="302" width="44" height="4" rx="2" fill="#7c3aed" />
        <rect x="100" y="311" width="80" height="4" rx="2" fill="#06b6d4" opacity="0.85" />
        <rect x="108" y="320" width="58" height="4" rx="2" fill="#a78bfa" />
        <rect x="108" y="329" width="36" height="4" rx="2" fill="#7c3aed" opacity="0.7" />
        <rect x="100" y="338" width="86" height="4" rx="2" fill="#06b6d4" opacity="0.6" />
        <motion.rect x="190" y="338" width="3" height="7" rx="1.5" fill="#f5f5f5"
          animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.85, repeat: Infinity }} />
        {/* Keyboard */}
        <rect x="80" y="350" width="180" height="7" rx="3.5" fill="#1c1a48" stroke="#7c3aed" strokeWidth="1" />

        {/* ── BODY — bright violet hoodie ── */}
        <path
          d="M 102 248 C 82 270 74 308 72 350 L 268 350 C 266 308 258 270 238 248 C 222 260 197 266 170 266 C 143 266 118 260 102 248Z"
          fill="#6d28d9"
        />
        {/* Centre seam */}
        <line x1="170" y1="264" x2="170" y2="350" stroke="#5b21b6" strokeWidth="1.5" opacity="0.6" />
        {/* Pocket */}
        <rect x="146" y="298" width="48" height="36" rx="9" fill="#5b21b6" />
        {/* Drawstrings */}
        <path d="M 158 264 Q 157 288 155 314" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 182 264 Q 183 288 185 314" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="154" cy="317" r="4" fill="#8b5cf6" />
        <circle cx="186" cy="317" r="4" fill="#8b5cf6" />

        {/* ── ARMS ── */}
        <motion.g animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 0.44, repeat: Infinity }}
          style={{ transformOrigin: "102px 256px" }}>
          <path d="M 102 256 C 80 282 72 322 74 348" stroke="#6d28d9" strokeWidth="34" strokeLinecap="round" fill="none" />
          <ellipse cx="75" cy="351" rx="18" ry="10" fill="#f8c9a0" />
        </motion.g>
        <motion.g animate={{ rotate: [3, -3, 3] }} transition={{ duration: 0.44, repeat: Infinity }}
          style={{ transformOrigin: "238px 256px" }}>
          <path d="M 238 256 C 260 282 268 322 266 348" stroke="#6d28d9" strokeWidth="34" strokeLinecap="round" fill="none" />
          <ellipse cx="265" cy="351" rx="18" ry="10" fill="#f8c9a0" />
        </motion.g>

        {/* ── NECK ── */}
        <rect x="158" y="232" width="24" height="28" rx="12" fill="#f8c9a0" />

        {/* ── HAIR: two buns on top ── */}
        {/* Connecting hair base on head (short — only top of head) */}
        <path
          d="M 108 178 C 108 138 136 108 170 108 C 204 108 232 138 232 178 L 232 185 C 210 176 190 172 170 172 C 150 172 130 176 108 185Z"
          fill="#0f0720"
        />
        {/* Short side strands — just to the jaw, not further */}
        <path d="M 110 180 C 104 196 104 215 110 232" stroke="#0f0720" strokeWidth="16" strokeLinecap="round" fill="none" />
        <path d="M 230 180 C 236 196 236 215 230 232" stroke="#0f0720" strokeWidth="16" strokeLinecap="round" fill="none" />
        {/* Bang strip across forehead */}
        <path
          d="M 112 172 C 116 154 140 144 170 144 C 200 144 224 154 228 172 C 218 162 196 156 170 156 C 144 156 122 162 112 172Z"
          fill="#0f0720"
        />

        {/* Left BUN */}
        <circle cx="128" cy="128" r="46" fill="url(#bunG)" />
        {/* Bun highlight */}
        <circle cx="128" cy="128" r="46" stroke="#1e0d42" strokeWidth="3" />
        <ellipse cx="116" cy="116" rx="14" ry="10" fill="#3d2575" opacity="0.55" />
        {/* Bun scrunchie ring */}
        <ellipse cx="128" cy="166" rx="18" ry="7" fill="#7c3aed" />
        <ellipse cx="128" cy="166" rx="18" ry="7" stroke="#a78bfa" strokeWidth="1.5" />

        {/* Right BUN */}
        <circle cx="212" cy="128" r="46" fill="url(#bunG)" />
        <circle cx="212" cy="128" r="46" stroke="#1e0d42" strokeWidth="3" />
        <ellipse cx="200" cy="116" rx="14" ry="10" fill="#3d2575" opacity="0.55" />
        {/* Bun scrunchie ring */}
        <ellipse cx="212" cy="166" rx="18" ry="7" fill="#7c3aed" />
        <ellipse cx="212" cy="166" rx="18" ry="7" stroke="#a78bfa" strokeWidth="1.5" />

        {/* ── HEAD — big, round, chibi ── */}
        <ellipse cx="170" cy="206" rx="100" ry="96" fill="url(#skinG)" />

        {/* ── EARS ── */}
        <ellipse cx="71" cy="212" rx="13" ry="16" fill="#f4bd96" />
        <ellipse cx="71" cy="212" rx="7" ry="9" fill="#e8a882" opacity="0.45" />
        <ellipse cx="269" cy="212" rx="13" ry="16" fill="#f4bd96" />
        <ellipse cx="269" cy="212" rx="7" ry="9" fill="#e8a882" opacity="0.45" />
        {/* Stud earrings */}
        <circle cx="71" cy="222" r="5" fill="#7c3aed" />
        <circle cx="71" cy="222" r="2.5" fill="#c4b5fd" />
        <circle cx="269" cy="222" r="5" fill="#7c3aed" />
        <circle cx="269" cy="222" r="2.5" fill="#c4b5fd" />

        {/* ── EYEBROWS ── */}
        <path d="M 118 187 Q 140 177 162 185" stroke="#0f0720" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 178 185 Q 200 177 222 187" stroke="#0f0720" strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* ── LEFT EYE — huge chibi ── */}
        <motion.g
          animate={{ scaleY: [1, 1, 1, 0.04, 1] }}
          transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.86, 0.90, 0.94, 1] }}
          style={{ transformOrigin: "140px 222px" }}
        >
          <ellipse cx="140" cy="222" rx="30" ry="32" fill="#f0eeff" />
          <ellipse cx="140" cy="226" rx="21" ry="23" fill="#3b1f74" />
          <ellipse cx="140" cy="227" rx="12" ry="14" fill="#080518" />
          {/* Big highlight */}
          <ellipse cx="130" cy="213" rx="10" ry="10" fill="white" />
          {/* Small highlight */}
          <ellipse cx="151" cy="236" rx="5" ry="4.5" fill="white" opacity="0.5" />
          {/* Iris ring */}
          <ellipse cx="140" cy="226" rx="21" ry="23" stroke="#6d28d9" strokeWidth="1" fill="none" opacity="0.3" />
        </motion.g>

        {/* ── RIGHT EYE ── */}
        <motion.g
          animate={{ scaleY: [1, 1, 1, 0.04, 1] }}
          transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.86, 0.90, 0.94, 1] }}
          style={{ transformOrigin: "200px 222px" }}
        >
          <ellipse cx="200" cy="222" rx="30" ry="32" fill="#f0eeff" />
          <ellipse cx="200" cy="226" rx="21" ry="23" fill="#3b1f74" />
          <ellipse cx="200" cy="227" rx="12" ry="14" fill="#080518" />
          <ellipse cx="190" cy="213" rx="10" ry="10" fill="white" />
          <ellipse cx="211" cy="236" rx="5" ry="4.5" fill="white" opacity="0.5" />
          <ellipse cx="200" cy="226" rx="21" ry="23" stroke="#6d28d9" strokeWidth="1" fill="none" opacity="0.3" />
        </motion.g>

        {/* ── UPPER LASHES ── */}
        <path d="M 112 204 Q 140 194 168 204" stroke="#080518" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <line x1="114" y1="204" x2="109" y2="195" stroke="#080518" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="126" y1="197" x2="123" y2="188" stroke="#080518" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="153" y1="195" x2="153" y2="186" stroke="#080518" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="166" y1="204" x2="171" y2="195" stroke="#080518" strokeWidth="2.5" strokeLinecap="round" />

        <path d="M 172 204 Q 200 194 228 204" stroke="#080518" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <line x1="174" y1="204" x2="169" y2="195" stroke="#080518" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="186" y1="197" x2="183" y2="188" stroke="#080518" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="213" y1="195" x2="213" y2="186" stroke="#080518" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="226" y1="204" x2="231" y2="195" stroke="#080518" strokeWidth="2.5" strokeLinecap="round" />

        {/* Lower lash lines */}
        <path d="M 113 248 Q 140 256 167 248" stroke="#080518" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
        <path d="M 173 248 Q 200 256 227 248" stroke="#080518" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />

        {/* ── NOSE — two tiny dots ── */}
        <circle cx="163" cy="254" r="2.8" fill="#d4956a" opacity="0.65" />
        <circle cx="177" cy="254" r="2.8" fill="#d4956a" opacity="0.65" />

        {/* ── CHEEKS ── */}
        <ellipse cx="112" cy="240" rx="24" ry="16" fill="url(#cheekR)" />
        <ellipse cx="228" cy="240" rx="24" ry="16" fill="url(#cheekR)" />
        <circle cx="102" cy="233" r="4.5" fill="#fda4af" opacity="0.4" />
        <circle cx="238" cy="233" r="4.5" fill="#fda4af" opacity="0.4" />

        {/* ── SMILE ── */}
        <path d="M 146 270 Q 170 295 194 270" stroke="#c07050" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M 153 272 Q 170 289 187 272 Q 179 281 170 282 Q 161 281 153 272Z" fill="#e07060" opacity="0.42" />
        <circle cx="144" cy="269" r="3.5" fill="#e4a070" opacity="0.42" />
        <circle cx="196" cy="269" r="3.5" fill="#e4a070" opacity="0.42" />

        {/* ── GLASSES — tiny cute cat-eye ── */}
        {/* Left lens */}
        <path d="M 114 214 Q 140 202 166 214 Q 163 234 140 240 Q 117 234 114 214Z"
          fill="rgba(124,58,237,0.07)" stroke="#1e0d42" strokeWidth="2.5" />
        {/* Right lens */}
        <path d="M 174 214 Q 200 202 226 214 Q 223 234 200 240 Q 177 234 174 214Z"
          fill="rgba(124,58,237,0.07)" stroke="#1e0d42" strokeWidth="2.5" />
        {/* Bridge */}
        <path d="M 166 212 Q 170 209 174 212" stroke="#1e0d42" strokeWidth="2.5" fill="none" />
        {/* Temple arms */}
        <path d="M 114 214 Q 96 213 92 220" stroke="#1e0d42" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 226 214 Q 244 213 248 220" stroke="#1e0d42" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Lens gleam */}
        <path d="M 122 210 Q 128 205 136 208" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.45" />
        <path d="M 182 210 Q 188 205 196 208" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.45" />

        {/* ── FLOATING CODE BUBBLES ── */}
        <motion.g animate={{ y: [0, -11, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 0.4 }}>
          <rect x="0" y="188" width="86" height="30" rx="9" fill="#111118" stroke="#7c3aed" strokeWidth="1.4" />
          <text x="8" y="208" fontSize="10" fill="#a78bfa" fontFamily="'Courier New',monospace">ship(ideas)</text>
        </motion.g>
        <motion.g animate={{ y: [0, 11, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 1 }}>
          <rect x="252" y="172" width="88" height="30" rx="9" fill="#111118" stroke="#06b6d4" strokeWidth="1.4" />
          <text x="262" y="192" fontSize="10" fill="#06b6d4" fontFamily="'Courier New',monospace">npm run dev</text>
        </motion.g>
        <motion.g animate={{ y: [0, -8, 0], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 4.2, repeat: Infinity, delay: 1.8 }}>
          <rect x="254" y="254" width="86" height="30" rx="9" fill="#111118" stroke="#a78bfa" strokeWidth="1.4" />
          <text x="264" y="274" fontSize="10" fill="#a78bfa" fontFamily="'Courier New',monospace">git push -u</text>
        </motion.g>

        {/* ── SPARKLES ── */}
        <motion.g animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
          style={{ transformOrigin: "48px 156px" }}>
          <path d="M48 150 L50 156 L56 156 L51 160 L53 166 L48 162 L43 166 L45 160 L40 156 L46 156Z" fill="#7c3aed" opacity="0.9" />
        </motion.g>
        <motion.g animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 1.2 }}
          style={{ transformOrigin: "292px 145px" }}>
          <path d="M292 139 L294 145 L300 145 L295 149 L297 155 L292 151 L287 155 L289 149 L284 145 L290 145Z" fill="#06b6d4" opacity="0.8" />
        </motion.g>
        <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}>
          <circle cx="312" cy="310" r="5" fill="#7c3aed" opacity="0.45" />
          <circle cx="312" cy="310" r="2.5" fill="#c4b5fd" opacity="0.7" />
        </motion.g>
        <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.6 }}>
          <circle cx="28" cy="295" r="4" fill="#06b6d4" opacity="0.45" />
          <circle cx="28" cy="295" r="2" fill="#67e8f9" opacity="0.7" />
        </motion.g>

      </svg>
    </motion.div>
  );
}
