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
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full drop-shadow-2xl"
        aria-label="Keerthana — cute developer avatar"
      >
        <defs>
          <radialGradient id="screenG" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="faceG" cx="48%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#ffe4c8" />
            <stop offset="100%" stopColor="#f5c49a" />
          </radialGradient>
          <radialGradient id="cheekG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f87171" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f87171" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="200" cy="492" rx="128" ry="14" fill="rgba(124,58,237,0.14)" />

        {/* ── DESK ── */}
        <rect x="48" y="420" width="304" height="14" rx="7" fill="#17172e" />
        <rect x="70" y="432" width="10" height="58" rx="4" fill="#11112a" />
        <rect x="320" y="432" width="10" height="58" rx="4" fill="#11112a" />

        {/* ── LAPTOP SCREEN ── */}
        <rect x="120" y="334" width="160" height="90" rx="10" fill="#070615" stroke="#7c3aed" strokeWidth="2.2" />
        <rect x="127" y="341" width="146" height="77" rx="6" fill="#0c0a1e" />
        <rect x="127" y="341" width="146" height="77" rx="6" fill="url(#screenG)" opacity="0.3" />
        {/* Menubar */}
        <rect x="127" y="341" width="146" height="14" rx="5" fill="#151530" />
        <circle cx="138" cy="348" r="3" fill="#ff5f57" />
        <circle cx="148" cy="348" r="3" fill="#febc2e" />
        <circle cx="158" cy="348" r="3" fill="#28c840" />
        {/* Code lines */}
        <rect x="135" y="363" width="50" height="4" rx="2" fill="#7c3aed" />
        <rect x="135" y="373" width="86" height="4" rx="2" fill="#06b6d4" opacity="0.85" />
        <rect x="143" y="383" width="64" height="4" rx="2" fill="#a78bfa" />
        <rect x="143" y="393" width="44" height="4" rx="2" fill="#7c3aed" opacity="0.7" />
        <rect x="135" y="403" width="88" height="4" rx="2" fill="#06b6d4" opacity="0.6" />
        {/* Cursor blink */}
        <motion.rect x="227" y="403" width="3" height="8" rx="1.5" fill="#f5f5f5"
          animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.85, repeat: Infinity }} />
        {/* Keyboard */}
        <rect x="112" y="420" width="176" height="8" rx="4" fill="#1e1a4a" stroke="#7c3aed" strokeWidth="1" />
        {[125,137,149,161,173,185,197,209,221,233,245,257].map((x, i) => (
          <rect key={i} x={x} y="421" width="8" height="4" rx="2" fill="#2a2760" />
        ))}

        {/* ── HOODIE BODY ── */}
        <path
          d="M 144 302 C 120 328 110 368 108 420 L 292 420 C 290 368 280 328 256 302 C 238 316 220 322 200 322 C 180 322 162 316 144 302Z"
          fill="#4c1d95"
        />
        <line x1="200" y1="320" x2="200" y2="420" stroke="#3b1a7a" strokeWidth="1.5" opacity="0.5" />
        {/* Pocket */}
        <rect x="173" y="366" width="54" height="38" rx="10" fill="#3b1a7a" />
        {/* Drawstrings */}
        <path d="M 188 320 Q 186 346 183 378" stroke="#6d28d9" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 212 320 Q 214 346 217 378" stroke="#6d28d9" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="182" cy="381" r="4.5" fill="#7c3aed" />
        <circle cx="218" cy="381" r="4.5" fill="#7c3aed" />

        {/* ── ARMS ── */}
        <motion.g animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 0.44, repeat: Infinity }}
          style={{ transformOrigin: "144px 312px" }}>
          <path d="M 144 312 C 118 344 108 388 110 418" stroke="#4c1d95" strokeWidth="38" strokeLinecap="round" fill="none" />
          <ellipse cx="111" cy="421" rx="20" ry="11" fill="#f5c49a" />
        </motion.g>
        <motion.g animate={{ rotate: [3, -3, 3] }} transition={{ duration: 0.44, repeat: Infinity }}
          style={{ transformOrigin: "256px 312px" }}>
          <path d="M 256 312 C 282 344 292 388 290 418" stroke="#4c1d95" strokeWidth="38" strokeLinecap="round" fill="none" />
          <ellipse cx="289" cy="421" rx="20" ry="11" fill="#f5c49a" />
        </motion.g>

        {/* ── BACK HAIR (drawn before head) ── */}
        <path
          d="M 88 178 C 82 114 136 52 200 50 C 264 52 318 114 312 178 L 318 345 C 290 372 248 384 200 384 C 152 384 110 372 82 345Z"
          fill="#1c0f3f"
        />
        {/* Hair shine streaks */}
        <path d="M 175 60 C 169 88 167 128 171 170" stroke="#2d1a5e" strokeWidth="12" strokeLinecap="round" opacity="0.5" fill="none" />
        <path d="M 158 67 C 152 96 151 138 155 180" stroke="#2d1a5e" strokeWidth="6" strokeLinecap="round" opacity="0.28" fill="none" />

        {/* ── HEAD — bigger, chibi proportions ── */}
        <ellipse cx="200" cy="200" rx="116" ry="110" fill="url(#faceG)" />

        {/* ── EARS ── */}
        <ellipse cx="85" cy="208" rx="15" ry="19" fill="#f5c49a" />
        <ellipse cx="85" cy="208" rx="9" ry="12" fill="#e8a882" opacity="0.4" />
        <ellipse cx="315" cy="208" rx="15" ry="19" fill="#f5c49a" />
        <ellipse cx="315" cy="208" rx="9" ry="12" fill="#e8a882" opacity="0.4" />
        {/* Earrings */}
        <circle cx="85" cy="224" r="6" fill="#7c3aed" />
        <circle cx="85" cy="224" r="3" fill="#c4b5fd" />
        <circle cx="315" cy="224" r="6" fill="#7c3aed" />
        <circle cx="315" cy="224" r="3" fill="#c4b5fd" />

        {/* ── BANGS / FRONT HAIR (over head) ── */}
        <path
          d="M 88 170 C 93 114 138 72 200 70 C 262 72 307 114 312 170 C 296 132 268 106 200 104 C 132 106 104 132 88 170Z"
          fill="#1c0f3f"
        />
        {/* Side hair strands over ears */}
        <path d="M 84 192 C 75 224 78 272 86 326" stroke="#1c0f3f" strokeWidth="26" strokeLinecap="round" fill="none" />
        <path d="M 316 192 C 325 224 322 272 314 326" stroke="#1c0f3f" strokeWidth="26" strokeLinecap="round" fill="none" />
        {/* Bang detail strands */}
        <path d="M 148 106 C 143 132 142 162 146 188" stroke="#2d1a5e" strokeWidth="7" strokeLinecap="round" opacity="0.42" fill="none" />
        <path d="M 252 106 C 257 132 258 162 254 188" stroke="#2d1a5e" strokeWidth="7" strokeLinecap="round" opacity="0.42" fill="none" />
        <path d="M 172 74 C 167 102 166 136 170 168" stroke="#2d1a5e" strokeWidth="4" strokeLinecap="round" opacity="0.25" fill="none" />

        {/* ── EYEBROWS ── */}
        <path d="M 140 196 Q 164 185 188 194" stroke="#1c0f3f" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        <path d="M 212 194 Q 236 185 260 196" stroke="#1c0f3f" strokeWidth="5.5" fill="none" strokeLinecap="round" />

        {/* ── LEFT EYE — large, low on face, chibi ── */}
        <motion.g
          animate={{ scaleY: [1, 1, 1, 0.04, 1] }}
          transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.86, 0.90, 0.94, 1] }}
          style={{ transformOrigin: "163px 224px" }}
        >
          {/* White */}
          <ellipse cx="163" cy="224" rx="32" ry="34" fill="#f2f2ff" />
          {/* Iris (rich purple) */}
          <ellipse cx="163" cy="228" rx="23" ry="25" fill="#3b1f74" />
          {/* Pupil */}
          <ellipse cx="163" cy="229" rx="13" ry="15" fill="#07031a" />
          {/* Large upper highlight */}
          <ellipse cx="152" cy="215" rx="10" ry="10" fill="white" />
          {/* Small lower highlight */}
          <ellipse cx="175" cy="239" rx="5.5" ry="4.5" fill="white" opacity="0.55" />
          {/* Iris sheen ring */}
          <ellipse cx="163" cy="228" rx="23" ry="25" stroke="#7c3aed" strokeWidth="1.2" fill="none" opacity="0.35" />
        </motion.g>

        {/* ── RIGHT EYE ── */}
        <motion.g
          animate={{ scaleY: [1, 1, 1, 0.04, 1] }}
          transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.86, 0.90, 0.94, 1] }}
          style={{ transformOrigin: "237px 224px" }}
        >
          <ellipse cx="237" cy="224" rx="32" ry="34" fill="#f2f2ff" />
          <ellipse cx="237" cy="228" rx="23" ry="25" fill="#3b1f74" />
          <ellipse cx="237" cy="229" rx="13" ry="15" fill="#07031a" />
          <ellipse cx="226" cy="215" rx="10" ry="10" fill="white" />
          <ellipse cx="249" cy="239" rx="5.5" ry="4.5" fill="white" opacity="0.55" />
          <ellipse cx="237" cy="228" rx="23" ry="25" stroke="#7c3aed" strokeWidth="1.2" fill="none" opacity="0.35" />
        </motion.g>

        {/* ── UPPER EYELASHES ── */}
        {/* Left */}
        <path d="M 133 204 Q 163 193 193 204" stroke="#07031a" strokeWidth="5" fill="none" strokeLinecap="round" />
        <line x1="135" y1="204" x2="129" y2="195" stroke="#07031a" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="148" y1="197" x2="144" y2="187" stroke="#07031a" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="178" y1="194" x2="178" y2="184" stroke="#07031a" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="191" y1="204" x2="197" y2="195" stroke="#07031a" strokeWidth="2.5" strokeLinecap="round" />
        {/* Right */}
        <path d="M 207 204 Q 237 193 267 204" stroke="#07031a" strokeWidth="5" fill="none" strokeLinecap="round" />
        <line x1="209" y1="204" x2="203" y2="195" stroke="#07031a" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="222" y1="197" x2="218" y2="187" stroke="#07031a" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="252" y1="194" x2="252" y2="184" stroke="#07031a" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="265" y1="204" x2="271" y2="195" stroke="#07031a" strokeWidth="2.5" strokeLinecap="round" />
        {/* Lower lashes */}
        <path d="M 134 248 Q 163 258 192 248" stroke="#07031a" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.45" />
        <path d="M 208 248 Q 237 258 266 248" stroke="#07031a" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.45" />

        {/* ── NOSE — two tiny dots only ── */}
        <circle cx="193" cy="264" r="3" fill="#d49070" opacity="0.65" />
        <circle cx="207" cy="264" r="3" fill="#d49070" opacity="0.65" />

        {/* ── CHEEKS — large, soft ── */}
        <ellipse cx="144" cy="248" rx="26" ry="17" fill="url(#cheekG)" />
        <ellipse cx="256" cy="248" rx="26" ry="17" fill="url(#cheekG)" />
        {/* Cheek shine */}
        <circle cx="133" cy="240" r="5" fill="#fca5a5" opacity="0.38" />
        <circle cx="267" cy="240" r="5" fill="#fca5a5" opacity="0.38" />

        {/* ── SMILE — wide open happy ── */}
        <path d="M 170 280 Q 200 308 230 280" stroke="#c47a52" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {/* Inner mouth hint */}
        <path d="M 178 282 Q 200 302 222 282 Q 212 292 200 293 Q 188 292 178 282Z" fill="#e0816a" opacity="0.45" />
        {/* Dimples */}
        <circle cx="167" cy="279" r="4" fill="#e8a882" opacity="0.4" />
        <circle cx="233" cy="279" r="4" fill="#e8a882" opacity="0.4" />

        {/* ── GLASSES — half-frame (cuter style) ── */}
        {/* Left frame arc (just upper half) */}
        <path d="M 131 210 Q 163 196 195 210" stroke="#221050" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {/* Left bottom arc (subtle) */}
        <path d="M 131 210 Q 128 232 163 248 Q 198 232 195 210" stroke="#221050" strokeWidth="2" fill="rgba(124,58,237,0.06)" strokeLinecap="round" />
        {/* Right frame arc */}
        <path d="M 205 210 Q 237 196 269 210" stroke="#221050" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M 205 210 Q 202 232 237 248 Q 272 232 269 210" stroke="#221050" strokeWidth="2" fill="rgba(124,58,237,0.06)" strokeLinecap="round" />
        {/* Bridge */}
        <path d="M 195 208 Q 200 204 205 208" stroke="#221050" strokeWidth="3.5" fill="none" />
        {/* Temple arms */}
        <path d="M 131 210 Q 110 209 106 218" stroke="#221050" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M 269 210 Q 290 209 294 218" stroke="#221050" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {/* Lens gleam */}
        <path d="M 142 205 Q 149 199 158 202" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
        <path d="M 216 205 Q 223 199 232 202" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />

        {/* ── STAR HAIR CLIP ── */}
        <motion.g
          animate={{ rotate: [0, 14, -7, 14, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
          style={{ transformOrigin: "156px 102px" }}
        >
          <path d="M156 90 L159.5 101 L171 101 L162 108 L165.5 119 L156 112 L146.5 119 L150 108 L141 101 L152.5 101Z"
            fill="#7c3aed" />
          <path d="M156 90 L159.5 101 L171 101 L162 108 L165.5 119 L156 112 L146.5 119 L150 108 L141 101 L152.5 101Z"
            fill="#ddd6fe" opacity="0.3" />
          <circle cx="156" cy="106" r="4.5" fill="#e9d5ff" opacity="0.85" />
        </motion.g>

        {/* ── FLOATING CODE BUBBLES ── */}
        <motion.g animate={{ y: [0, -12, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 0.4 }}>
          <rect x="2" y="212" width="96" height="32" rx="10" fill="#111118" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="12" y="233" fontSize="11" fill="#a78bfa" fontFamily="'Courier New',monospace">const ship=true</text>
        </motion.g>
        <motion.g animate={{ y: [0, 12, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 1 }}>
          <rect x="300" y="196" width="98" height="32" rx="10" fill="#111118" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="310" y="217" fontSize="11" fill="#06b6d4" fontFamily="'Courier New',monospace">npm run dev</text>
        </motion.g>
        <motion.g animate={{ y: [0, -9, 0], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 4.2, repeat: Infinity, delay: 1.8 }}>
          <rect x="300" y="284" width="98" height="32" rx="10" fill="#111118" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="310" y="305" fontSize="11" fill="#a78bfa" fontFamily="'Courier New',monospace">git push -u</text>
        </motion.g>

        {/* Sparkle dots */}
        <motion.g animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
          style={{ transformOrigin: "74px 178px" }}>
          <path d="M74 171 L76 178 L83 178 L77 182 L79 189 L74 185 L69 189 L71 182 L65 178 L72 178Z" fill="#7c3aed" opacity="0.85" />
        </motion.g>
        <motion.g animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 1.2 }}
          style={{ transformOrigin: "326px 162px" }}>
          <path d="M326 155 L328 162 L335 162 L329 166 L331 173 L326 169 L321 173 L323 166 L317 162 L324 162Z" fill="#06b6d4" opacity="0.75" />
        </motion.g>
        <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}>
          <circle cx="350" cy="340" r="5.5" fill="#7c3aed" opacity="0.45" />
          <circle cx="350" cy="340" r="2.8" fill="#c4b5fd" opacity="0.7" />
        </motion.g>
        <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.6 }}>
          <circle cx="52" cy="322" r="4.5" fill="#06b6d4" opacity="0.45" />
          <circle cx="52" cy="322" r="2.2" fill="#67e8f9" opacity="0.7" />
        </motion.g>

      </svg>
    </motion.div>
  );
}
