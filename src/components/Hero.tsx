"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* ── Gradient mesh background — Stripe/Linear/Vercel style ──────── */}

      {/* Primary atmosphere — large soft radial in the upper-right */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "1400px",
          height: "1400px",
          right: "-400px",
          top: "-400px",
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.012) 50%, transparent 70%)",
        }}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary glow — adds depth */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "900px",
          height: "900px",
          right: "5%",
          top: "20%",
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 30%, transparent 65%)",
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tertiary cool glow — bottom-left for balance */}
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
        animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle 12-column architectural grid */}
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
        <div className="w-full max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20 pt-32 pb-20 sm:pt-36 sm:pb-24">
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
            className="font-display text-[2rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] 2xl:text-[4.25rem] leading-[1.08] tracking-[-0.02em] max-w-[20ch]"
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
            We decode pathways, break down real strategies, and connect you to
            the right opportunities — without the templated noise.
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
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
    </section>
  );
}
