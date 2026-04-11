"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20 text-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-5">
            Ready?
          </p>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Get Clarity On Your Next Move.
          </h2>

          <p className="mt-5 text-white/45 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            30 minutes. Honest strategy. No templated advice.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-wrap gap-3 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300"
              style={{ borderRadius: 0 }}
            >
              Book Consultation
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3.5 border border-white/25 text-white text-sm font-medium tracking-wide hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              style={{ borderRadius: 0 }}
            >
              View Services
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
