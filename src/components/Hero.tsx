"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* ── Background layer 1: 12-column architectural grid ───────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
          <div className="relative w-full h-full">
            {[...Array(13)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 bottom-0 w-px bg-white/[0.035]"
                style={{ left: `${(i / 12) * 100}%` }}
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 1.6,
                  delay: 0.2 + i * 0.035,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Background layer 2: drifting gradient orbs ─────────────────── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "1100px",
          height: "1100px",
          right: "-300px",
          bottom: "-400px",
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 25%, transparent 60%)",
        }}
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          left: "-200px",
          top: "-200px",
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.012) 30%, transparent 65%)",
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Background layer 3: corner architectural ticks ─────────────── */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute inset-0 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
          <div className="relative w-full h-full">
            {[
              { top: "120px", left: "0", o: "tl" },
              { top: "120px", right: "0", o: "tr" },
              { bottom: "120px", left: "0", o: "bl" },
              { bottom: "120px", right: "0", o: "br" },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3"
                style={pos}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
              >
                <div
                  className={`absolute w-3 h-px bg-white/30 ${
                    pos.o === "tr" || pos.o === "br" ? "right-0" : "left-0"
                  } ${pos.o === "tl" || pos.o === "tr" ? "top-0" : "bottom-0"}`}
                />
                <div
                  className={`absolute w-px h-3 bg-white/30 ${
                    pos.o === "tr" || pos.o === "br" ? "right-0" : "left-0"
                  } ${pos.o === "tl" || pos.o === "tr" ? "top-0" : "bottom-0"}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Background layer 4: horizon rule ───────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent origin-center"
          style={{ top: "62%" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 1.0, ease: "easeOut" }}
        />
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="w-full max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20 pt-32 pb-20 sm:pt-36 sm:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6 sm:mb-7"
          >
            Immigration Pathways, Decoded
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.45,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-display text-[2rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] 2xl:text-[4.25rem] leading-[1.08] tracking-[-0.02em]"
          >
            Canada Isn&rsquo;t Complicated.
            <br />
            It&rsquo;s Just Not Explained Properly.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            className="mt-7 sm:mt-8 text-[15px] sm:text-base 2xl:text-lg text-white/50 max-w-md 2xl:max-w-lg leading-relaxed"
          >
            We decode pathways, break down real strategies, and connect you to
            the right opportunities — without the templated noise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
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

      {/* ── Bottom metadata strip ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        className="relative z-10 border-t border-white/10"
      >
        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20 py-5 sm:py-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-10 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/40">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>Ontario, Canada</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>Moose IMM Inc.</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>Advisory · Non-Regulated</span>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <motion.span
                className="w-1.5 h-1.5 bg-white/70 rounded-full"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span>Currently Accepting Clients</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
