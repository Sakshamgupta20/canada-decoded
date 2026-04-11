"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ── Globe geometry ─────────────────────────────────────────────────────
// viewBox is 1000 × 1000 — globe centered at (500, 500), radius 380
const G = { cx: 500, cy: 500, r: 380 };

// Stylized Canada outline — sized & positioned within the globe's upper-left quadrant
const CANADA_PATH =
  "M 220,400 Q 200,360 210,310 Q 225,290 260,290 L 320,288 L 390,290 Q 450,292 490,302 Q 515,315 515,340 Q 510,365 490,378 L 460,385 L 430,388 L 400,390 L 370,392 L 340,390 L 310,388 L 280,385 L 250,400 Z";

// Toronto — destination (Moose IMM is in Ontario)
const TORONTO = { x: 400, y: 380 };

// Origin cities — positioned in their roughly correct globe locations
// (Atlantic-centered orthographic view: Americas left, Europe/Africa right)
const origins = [
  { name: "MEXICO CITY", x: 350, y: 470, delay: 2.2 },
  { name: "LIMA", x: 420, y: 640, delay: 2.35 },
  { name: "LONDON", x: 620, y: 320, delay: 2.5 },
  { name: "DUBAI", x: 700, y: 410, delay: 2.65 },
  { name: "NAIROBI", x: 630, y: 560, delay: 2.8 },
  { name: "MUMBAI", x: 760, y: 470, delay: 2.95 },
];

// Latitude ellipses — give the sphere its "globe" look
const latitudes = [
  { cy: 200, rx: 200, ry: 50 }, // ~Arctic Circle
  { cy: 320, rx: 290, ry: 68 }, // ~40°N
  { cy: 410, rx: 350, ry: 80 }, // ~Tropic N
  { cy: 500, rx: 380, ry: 85 }, // Equator
  { cy: 590, rx: 350, ry: 80 }, // ~Tropic S
  { cy: 680, rx: 290, ry: 68 }, // ~40°S
  { cy: 800, rx: 200, ry: 50 }, // ~Antarctic Circle
];

// Longitude meridian ellipses (symmetrical pairs)
const meridianEllipses = [
  { rx: 80 }, // ±30°
  { rx: 170 }, // ±60°
  { rx: 270 }, // ±80°
];

// Curved flight path — bows upward like a real great-circle route
function arcPath(
  from: { x: number; y: number },
  to: { x: number; y: number }
) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const cx = (from.x + to.x) / 2;
  const cy = Math.min(from.y, to.y) - dist * 0.22;
  return `M ${from.x},${from.y} Q ${cx},${cy} ${to.x},${to.y}`;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* ── Subtle gradient backdrop ───────────────────────────────────── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "1300px",
          height: "1300px",
          right: "-300px",
          top: "-300px",
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 30%, transparent 65%)",
        }}
        animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "800px",
          height: "800px",
          left: "-200px",
          bottom: "-200px",
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.012) 30%, transparent 65%)",
        }}
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 12-column grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
          <div className="relative w-full h-full">
            {[...Array(13)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-px bg-white/[0.025]"
                style={{ left: `${(i / 12) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="w-full max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-32 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-14 lg:gap-16 xl:gap-20 items-center">
            {/* Left — copy */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6 sm:mb-7"
              >
                Immigration Pathways, Decoded
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.95,
                  delay: 0.35,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="font-display text-[2rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] leading-[1.06] tracking-[-0.02em]"
              >
                Canada Isn&rsquo;t Complicated.
                <br />
                It&rsquo;s Just Not Explained Properly.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                className="mt-7 sm:mt-8 text-[15px] sm:text-base text-white/50 max-w-md leading-relaxed"
              >
                We decode pathways, break down real strategies, and connect you
                to the right opportunities — without the templated noise.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                className="mt-10 sm:mt-12 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                  style={{ borderRadius: 0 }}
                >
                  Book a Strategy Call
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path
                      d="M0 5H12M12 5L8 1M12 5L8 9"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center px-6 py-3 sm:px-7 sm:py-3.5 border border-white/20 text-white text-sm font-medium tracking-wide hover:border-white/45 hover:bg-white/5 transition-all"
                  style={{ borderRadius: 0 }}
                >
                  Explore Pathways
                </Link>
              </motion.div>
            </div>

            {/* Right — Canada inside the globe */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative w-full"
            >
              {/* Map header */}
              <div className="flex items-center justify-between mb-4 text-[10px] tracking-[0.2em] uppercase text-white/40">
                <span>Pathways → Canada</span>
                <span>06 Origins</span>
              </div>

              {/* Globe frame */}
              <div className="relative w-full aspect-square max-w-[560px] mx-auto">
                <svg
                  viewBox="0 0 1000 1000"
                  preserveAspectRatio="xMidYMid meet"
                  className="absolute inset-0 w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Sphere bloom — gives the globe its "lit from inside" feel */}
                    <radialGradient
                      id="sphere-shading"
                      cx={G.cx}
                      cy={G.cy - 60}
                      r={G.r + 80}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="white" stopOpacity="0.09" />
                      <stop offset="40%" stopColor="white" stopOpacity="0.03" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>

                    {/* Bloom around Toronto destination */}
                    <radialGradient
                      id="toronto-bloom"
                      cx={TORONTO.x}
                      cy={TORONTO.y}
                      r="200"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="white" stopOpacity="0.2" />
                      <stop offset="40%" stopColor="white" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>

                    {/* Clip everything to the sphere boundary */}
                    <clipPath id="globe-clip">
                      <circle cx={G.cx} cy={G.cy} r={G.r} />
                    </clipPath>
                  </defs>

                  {/* Sphere fill (subtle gradient) */}
                  <circle
                    cx={G.cx}
                    cy={G.cy}
                    r={G.r}
                    fill="url(#sphere-shading)"
                  />
                  <circle
                    cx={G.cx}
                    cy={G.cy}
                    r={G.r}
                    fill="url(#toronto-bloom)"
                  />

                  {/* ── Everything inside the sphere is clipped ─────────── */}
                  <g clipPath="url(#globe-clip)">
                    {/* Latitude lines */}
                    {latitudes.map((lat, i) => (
                      <motion.ellipse
                        key={`lat-${i}`}
                        cx={G.cx}
                        cy={lat.cy}
                        rx={lat.rx}
                        ry={lat.ry}
                        fill="none"
                        stroke="white"
                        strokeOpacity="0.08"
                        strokeWidth="0.6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 + i * 0.04 }}
                      />
                    ))}

                    {/* Central meridian */}
                    <motion.line
                      x1={G.cx}
                      y1={G.cy - G.r}
                      x2={G.cx}
                      y2={G.cy + G.r}
                      stroke="white"
                      strokeOpacity="0.08"
                      strokeWidth="0.6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />

                    {/* Meridian ellipses (symmetrical pairs) */}
                    {meridianEllipses.map((m, i) => (
                      <motion.ellipse
                        key={`mer-${i}`}
                        cx={G.cx}
                        cy={G.cy}
                        rx={m.rx}
                        ry={G.r}
                        fill="none"
                        stroke="white"
                        strokeOpacity="0.08"
                        strokeWidth="0.6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.55 + i * 0.04 }}
                      />
                    ))}

                    {/* Canada outline */}
                    <motion.path
                      d={CANADA_PATH}
                      fill="white"
                      fillOpacity="0"
                      stroke="white"
                      strokeOpacity="0.7"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1, fillOpacity: 0.08 }}
                      transition={{
                        pathLength: {
                          duration: 2.2,
                          delay: 0.9,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        },
                        fillOpacity: { duration: 1.0, delay: 2.4 },
                      }}
                    />

                    {/* CANADA label inside the country */}
                    <motion.text
                      x="290"
                      y="350"
                      fontSize="13"
                      fill="white"
                      fillOpacity="0.55"
                      letterSpacing="2.5"
                      className="font-display"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 2.2 }}
                    >
                      CANADA
                    </motion.text>

                    {/* Flight arcs — drawn one by one */}
                    {origins.map((origin, i) => (
                      <motion.path
                        key={`arc-${i}`}
                        d={arcPath(origin, TORONTO)}
                        stroke="white"
                        strokeOpacity="0.5"
                        strokeWidth="0.9"
                        strokeLinecap="round"
                        strokeDasharray="3 4"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 1.5,
                          delay: origin.delay - 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      />
                    ))}

                    {/* Origin city dots + labels */}
                    {origins.map((origin, i) => (
                      <motion.g
                        key={`origin-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: origin.delay }}
                      >
                        <circle
                          cx={origin.x}
                          cy={origin.y}
                          r="6"
                          fill="none"
                          stroke="white"
                          strokeOpacity="0.4"
                          strokeWidth="0.8"
                        />
                        <circle
                          cx={origin.x}
                          cy={origin.y}
                          r="2.5"
                          fill="white"
                          opacity="0.9"
                        />
                        <text
                          x={origin.x}
                          y={origin.y + 22}
                          textAnchor="middle"
                          fontSize="11"
                          fill="white"
                          fillOpacity="0.65"
                          letterSpacing="2"
                          className="font-display"
                        >
                          {origin.name}
                        </text>
                      </motion.g>
                    ))}

                    {/* Toronto destination */}
                    <motion.g
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.7,
                        delay: 3.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      style={{
                        transformOrigin: `${TORONTO.x}px ${TORONTO.y}px`,
                      }}
                    >
                      {/* Pulse ring */}
                      <motion.circle
                        cx={TORONTO.x}
                        cy={TORONTO.y}
                        r="9"
                        fill="none"
                        stroke="white"
                        strokeOpacity="0.55"
                        strokeWidth="1"
                        animate={{
                          r: [9, 30, 9],
                          opacity: [0.55, 0, 0.55],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: 3.9,
                        }}
                      />
                      <circle
                        cx={TORONTO.x}
                        cy={TORONTO.y}
                        r="8"
                        fill="none"
                        stroke="white"
                        strokeOpacity="0.9"
                        strokeWidth="1"
                      />
                      <circle
                        cx={TORONTO.x}
                        cy={TORONTO.y}
                        r="3.5"
                        fill="white"
                      />
                      <text
                        x={TORONTO.x - 14}
                        y={TORONTO.y + 4}
                        textAnchor="end"
                        fontSize="12"
                        fill="white"
                        fillOpacity="0.95"
                        letterSpacing="2"
                        className="font-display"
                      >
                        TORONTO
                      </text>
                    </motion.g>
                  </g>

                  {/* Globe outline (drawn last, on top of everything) */}
                  <motion.circle
                    cx={G.cx}
                    cy={G.cy}
                    r={G.r}
                    fill="none"
                    stroke="white"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 1.0,
                      delay: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{ transformOrigin: `${G.cx}px ${G.cy}px` }}
                  />
                </svg>
              </div>

              {/* Map footer */}
              <div className="flex items-center justify-between mt-4 text-[10px] tracking-[0.2em] uppercase text-white/40">
                <span>Verified Pathways</span>
                <span className="flex items-center gap-2">
                  <motion.span
                    className="w-1.5 h-1.5 bg-white/70 rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  Active
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
    </section>
  );
}
