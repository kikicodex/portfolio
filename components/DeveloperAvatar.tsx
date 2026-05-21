"use client";

import { motion } from "framer-motion";

export default function DeveloperAvatar() {
  const keyXPositions = [130, 142, 154, 166, 178, 190, 202, 214, 226, 238, 250, 262];

  return (
    <motion.div
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-sm mx-auto select-none"
    >
      <svg
        viewBox="0 0 400 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-2xl"
        aria-label="Keerthana — developer avatar"
      >
        <defs>
          <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="faceGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fde8d0" stopOpacity="1" />
            <stop offset="100%" stopColor="#fcd5b0" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="200" cy="505" rx="140" ry="16" fill="rgba(124,58,237,0.15)" />

        {/* ── FLOATING CODE BUBBLES ── */}
        <motion.g
          animate={{ y: [0, -12, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 0.4 }}
        >
          <rect x="6" y="205" width="96" height="32" rx="10" fill="#111118" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="16" y="226" fontSize="11" fill="#a78bfa" fontFamily="'Courier New', monospace">const dev = true</text>
        </motion.g>

        <motion.g
          animate={{ y: [0, 12, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 1 }}
        >
          <rect x="296" y="185" width="100" height="32" rx="10" fill="#111118" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="306" y="206" fontSize="11" fill="#06b6d4" fontFamily="'Courier New', monospace">npm run ship</text>
        </motion.g>

        <motion.g
          animate={{ y: [0, -8, 0], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 4.2, repeat: Infinity, delay: 1.8 }}
        >
          <rect x="300" y="275" width="96" height="32" rx="10" fill="#111118" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="310" y="296" fontSize="11" fill="#a78bfa" fontFamily="'Courier New', monospace">git push -u</text>
        </motion.g>

        {/* Sparkle stars */}
        <motion.g animate={{ opacity: [0, 1, 0], scale: [0.7, 1.1, 0.7] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }} style={{ transformOrigin: "80px 168px" }}>
          <path d="M80 162 L82 168 L88 168 L83 172 L85 178 L80 174 L75 178 L77 172 L72 168 L78 168Z" fill="#7c3aed" opacity="0.8" />
        </motion.g>
        <motion.g animate={{ opacity: [0, 1, 0], scale: [0.7, 1.1, 0.7] }} transition={{ duration: 2.8, repeat: Infinity, delay: 1.1 }} style={{ transformOrigin: "318px 148px" }}>
          <path d="M318 142 L320 148 L326 148 L321 152 L323 158 L318 154 L313 158 L315 152 L310 148 L316 148Z" fill="#06b6d4" opacity="0.7" />
        </motion.g>
        <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}>
          <circle cx="344" cy="330" r="4" fill="#7c3aed" opacity="0.5" />
        </motion.g>
        <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.6 }}>
          <circle cx="58" cy="312" r="3" fill="#06b6d4" opacity="0.5" />
        </motion.g>

        {/* ── DESK ── */}
        <rect x="52" y="378" width="296" height="14" rx="7" fill="#18182e" />
        <rect x="74" y="390" width="10" height="62" rx="4" fill="#12122a" />
        <rect x="316" y="390" width="10" height="62" rx="4" fill="#12122a" />
        <rect x="62" y="448" width="128" height="10" rx="5" fill="#0f0f20" />
        <rect x="210" y="448" width="128" height="10" rx="5" fill="#0f0f20" />

        {/* ── LAPTOP SCREEN ── */}
        <rect x="124" y="264" width="152" height="118" rx="10" fill="#08071a" stroke="#7c3aed" strokeWidth="2.2" />
        <rect x="130" y="270" width="140" height="106" rx="7" fill="#0d0b20" />
        {/* Screen glow overlay */}
        <rect x="130" y="270" width="140" height="106" rx="7" fill="url(#screenGlow)" opacity="0.25" />
        {/* Menu bar */}
        <rect x="130" y="270" width="140" height="14" rx="7" fill="#161630" />
        <circle cx="140" cy="277" r="3" fill="#ff5f57" />
        <circle cx="150" cy="277" r="3" fill="#febc2e" />
        <circle cx="160" cy="277" r="3" fill="#28c840" />
        {/* Code lines */}
        <rect x="140" y="292" width="50" height="5" rx="2.5" fill="#7c3aed" opacity="0.9" />
        <rect x="140" y="303" width="88" height="4" rx="2" fill="#06b6d4" opacity="0.8" />
        <rect x="148" y="313" width="65" height="4" rx="2" fill="#a78bfa" opacity="0.85" />
        <rect x="148" y="323" width="42" height="4" rx="2" fill="#7c3aed" opacity="0.7" />
        <rect x="140" y="333" width="94" height="4" rx="2" fill="#06b6d4" opacity="0.65" />
        <rect x="148" y="343" width="56" height="4" rx="2" fill="#a78bfa" opacity="0.75" />
        <rect x="140" y="353" width="70" height="4" rx="2" fill="#7c3aed" opacity="0.55" />
        {/* Cursor blink */}
        <motion.rect
          x="214" y="353" width="3" height="8" rx="1.5" fill="#f5f5f5"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.85, repeat: Infinity }}
        />

        {/* ── LAPTOP KEYBOARD ── */}
        <rect x="116" y="378" width="168" height="10" rx="5" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1.2" opacity="0.9" />
        {keyXPositions.map((x, i) => (
          <rect key={i} x={x} y="379" width="8" height="5" rx="2" fill="#2a2762" />
        ))}

        {/* ── BODY / HOODIE ── */}
        <path
          d="M 140 240 C 118 268 110 316 108 378 L 292 378 C 290 316 282 268 260 240 C 242 254 223 260 200 260 C 177 260 158 254 140 240 Z"
          fill="#4c1d95"
        />
        {/* Hoodie seam */}
        <line x1="200" y1="258" x2="200" y2="378" stroke="#3b1a7a" strokeWidth="1.5" opacity="0.5" />
        {/* Hoodie pocket */}
        <rect x="170" y="312" width="60" height="44" rx="12" fill="#3b1a7a" />
        <line x1="200" y1="312" x2="200" y2="356" stroke="#4c1d95" strokeWidth="1.2" opacity="0.6" />
        {/* Drawstrings */}
        <path d="M 186 257 Q 184 285 180 326" stroke="#6d28d9" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 214 257 Q 216 285 220 326" stroke="#6d28d9" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="179" cy="329" r="5" fill="#6d28d9" />
        <circle cx="221" cy="329" r="5" fill="#6d28d9" />

        {/* ── ARMS (typing animation) ── */}
        <motion.g
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 0.44, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "140px 252px" }}
        >
          <path d="M 140 252 C 116 282 108 334 110 376" stroke="#4c1d95" strokeWidth="38" strokeLinecap="round" fill="none" />
          <ellipse cx="111" cy="379" rx="20" ry="12" fill="#fcd5b0" />
          {/* Knuckle details */}
          <ellipse cx="111" cy="379" rx="14" ry="8" fill="#f5c49a" opacity="0.5" />
        </motion.g>
        <motion.g
          animate={{ rotate: [3, -3, 3] }}
          transition={{ duration: 0.44, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "260px 252px" }}
        >
          <path d="M 260 252 C 284 282 292 334 290 376" stroke="#4c1d95" strokeWidth="38" strokeLinecap="round" fill="none" />
          <ellipse cx="289" cy="379" rx="20" ry="12" fill="#fcd5b0" />
          <ellipse cx="289" cy="379" rx="14" ry="8" fill="#f5c49a" opacity="0.5" />
        </motion.g>

        {/* ── BACK HAIR ── */}
        <path
          d="M 116 142 C 108 94 144 44 200 42 C 256 44 292 94 284 142 L 292 308 C 270 334 238 346 200 346 C 162 346 130 334 108 308 Z"
          fill="#1c0f3f"
        />
        {/* Hair shine */}
        <path d="M 178 52 C 173 74 170 106 173 140" stroke="#2d1a5e" strokeWidth="9" strokeLinecap="round" opacity="0.55" fill="none" />
        <path d="M 162 56 C 157 80 155 114 159 148" stroke="#2d1a5e" strokeWidth="5" strokeLinecap="round" opacity="0.3" fill="none" />

        {/* ── HEAD ── */}
        <ellipse cx="200" cy="162" rx="90" ry="85" fill="url(#faceGlow)" />

        {/* ── EARS ── */}
        <ellipse cx="111" cy="170" rx="13" ry="16" fill="#f5c49a" />
        <ellipse cx="111" cy="170" rx="8" ry="10" fill="#e8a882" opacity="0.45" />
        <ellipse cx="289" cy="170" rx="13" ry="16" fill="#f5c49a" />
        <ellipse cx="289" cy="170" rx="8" ry="10" fill="#e8a882" opacity="0.45" />
        {/* Earrings */}
        <circle cx="111" cy="184" r="5.5" fill="#7c3aed" />
        <circle cx="111" cy="184" r="2.8" fill="#c4b5fd" />
        <circle cx="289" cy="184" r="5.5" fill="#7c3aed" />
        <circle cx="289" cy="184" r="2.8" fill="#c4b5fd" />

        {/* ── FRONT HAIR / BANGS ── */}
        <path
          d="M 114 132 C 118 88 150 58 200 56 C 250 58 282 88 286 132 C 272 100 252 78 200 76 C 148 78 128 100 114 132 Z"
          fill="#1c0f3f"
        />
        {/* Side hair strands */}
        <path d="M 112 155 C 104 182 106 224 114 272" stroke="#1c0f3f" strokeWidth="22" strokeLinecap="round" fill="none" />
        <path d="M 288 155 C 296 182 294 224 286 272" stroke="#1c0f3f" strokeWidth="22" strokeLinecap="round" fill="none" />
        {/* Bang strands detail */}
        <path d="M 145 84 C 141 106 140 128 143 150" stroke="#2d1a5e" strokeWidth="6" strokeLinecap="round" opacity="0.5" fill="none" />
        <path d="M 255 84 C 259 106 260 128 257 150" stroke="#2d1a5e" strokeWidth="6" strokeLinecap="round" opacity="0.5" fill="none" />
        <path d="M 170 62 C 166 86 166 112 170 136" stroke="#2d1a5e" strokeWidth="4" strokeLinecap="round" opacity="0.3" fill="none" />

        {/* ── EYEBROWS ── */}
        <path d="M 146 124 Q 169 115 192 122" stroke="#1c0f3f" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M 208 122 Q 231 115 254 124" stroke="#1c0f3f" strokeWidth="4.5" fill="none" strokeLinecap="round" />

        {/* ── LEFT EYE (blinking) ── */}
        <motion.g
          animate={{ scaleY: [1, 1, 1, 0.06, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.86, 0.90, 0.94, 1] }}
          style={{ transformOrigin: "168px 156px" }}
        >
          {/* Eye white */}
          <ellipse cx="168" cy="156" rx="24" ry="26" fill="#f4f4ff" />
          {/* Iris */}
          <ellipse cx="169" cy="158" rx="18" ry="20" fill="#3d2578" />
          {/* Pupil */}
          <ellipse cx="169" cy="159" rx="10" ry="12" fill="#0e0820" />
          {/* Main highlight — big */}
          <ellipse cx="161" cy="149" rx="7.5" ry="7.5" fill="white" />
          {/* Secondary highlight — small */}
          <ellipse cx="178" cy="167" rx="4" ry="3.5" fill="white" opacity="0.6" />
        </motion.g>

        {/* ── RIGHT EYE (blinking) ── */}
        <motion.g
          animate={{ scaleY: [1, 1, 1, 0.06, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.86, 0.90, 0.94, 1] }}
          style={{ transformOrigin: "232px 156px" }}
        >
          <ellipse cx="232" cy="156" rx="24" ry="26" fill="#f4f4ff" />
          <ellipse cx="231" cy="158" rx="18" ry="20" fill="#3d2578" />
          <ellipse cx="231" cy="159" rx="10" ry="12" fill="#0e0820" />
          <ellipse cx="223" cy="149" rx="7.5" ry="7.5" fill="white" />
          <ellipse cx="240" cy="167" rx="4" ry="3.5" fill="white" opacity="0.6" />
        </motion.g>

        {/* ── UPPER EYELASHES ── */}
        {/* Left */}
        <path d="M 145 138 Q 168 129 191 138" stroke="#0e0820" strokeWidth="4" fill="none" strokeLinecap="round" />
        <line x1="147" y1="138" x2="142" y2="130" stroke="#0e0820" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="158" y1="132" x2="155" y2="124" stroke="#0e0820" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="178" y1="130" x2="178" y2="122" stroke="#0e0820" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="189" y1="138" x2="194" y2="130" stroke="#0e0820" strokeWidth="2.2" strokeLinecap="round" />
        {/* Right */}
        <path d="M 209 138 Q 232 129 255 138" stroke="#0e0820" strokeWidth="4" fill="none" strokeLinecap="round" />
        <line x1="211" y1="138" x2="206" y2="130" stroke="#0e0820" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="222" y1="132" x2="219" y2="124" stroke="#0e0820" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="242" y1="130" x2="242" y2="122" stroke="#0e0820" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="253" y1="138" x2="258" y2="130" stroke="#0e0820" strokeWidth="2.2" strokeLinecap="round" />

        {/* ── NOSE ── */}
        <path d="M 196 173 C 194 180 198 183 202 183 C 206 183 210 180 208 173" stroke="#dba882" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* ── CHEEKS ── */}
        <ellipse cx="153" cy="183" rx="18" ry="11" fill="#f87171" opacity="0.28" />
        <ellipse cx="247" cy="183" rx="18" ry="11" fill="#f87171" opacity="0.28" />
        {/* Cheek shine dots */}
        <circle cx="148" cy="179" r="3" fill="#fca5a5" opacity="0.35" />
        <circle cx="252" cy="179" r="3" fill="#fca5a5" opacity="0.35" />

        {/* ── SMILE ── */}
        <path d="M 176 194 Q 200 218 224 194" stroke="#c17b52" strokeWidth="3.2" fill="none" strokeLinecap="round" />
        {/* Dimples */}
        <circle cx="174" cy="193" r="3" fill="#e8a882" opacity="0.45" />
        <circle cx="226" cy="193" r="3" fill="#e8a882" opacity="0.45" />

        {/* ── GLASSES ── */}
        {/* Lens tint fill */}
        <circle cx="168" cy="157" r="28" fill="rgba(124,58,237,0.06)" />
        <circle cx="232" cy="157" r="28" fill="rgba(124,58,237,0.06)" />
        {/* Frames */}
        <circle cx="168" cy="157" r="28" stroke="#221450" strokeWidth="3.2" />
        <circle cx="232" cy="157" r="28" stroke="#221450" strokeWidth="3.2" />
        {/* Bridge */}
        <path d="M 196 155 Q 200 152 204 155" stroke="#221450" strokeWidth="3" fill="none" />
        {/* Temple arms */}
        <path d="M 140 152 Q 120 150 116 160" stroke="#221450" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 260 152 Q 280 150 284 160" stroke="#221450" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Lens gleam */}
        <path d="M 150 143 Q 155 138 162 141" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.45" />
        <path d="M 214 143 Q 219 138 226 141" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.45" />

        {/* ── HAIR STAR CLIP ── */}
        <motion.g
          animate={{ rotate: [0, 12, -6, 12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 0.8 }}
          style={{ transformOrigin: "158px 92px" }}
        >
          {/* 5-point star */}
          <path
            d="M158 82 L161.1 91.5 L171 91.5 L163.4 97.2 L166.6 106.7 L158 101 L149.4 106.7 L152.6 97.2 L145 91.5 L154.9 91.5 Z"
            fill="#7c3aed"
          />
          <path
            d="M158 82 L161.1 91.5 L171 91.5 L163.4 97.2 L166.6 106.7 L158 101 L149.4 106.7 L152.6 97.2 L145 91.5 L154.9 91.5 Z"
            fill="#c4b5fd"
            opacity="0.4"
          />
          {/* Star center dot */}
          <circle cx="158" cy="95" r="3.5" fill="#ddd6fe" opacity="0.7" />
        </motion.g>

      </svg>
    </motion.div>
  );
}
