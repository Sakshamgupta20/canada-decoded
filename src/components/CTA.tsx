"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AmbientBeams from "./AmbientBeams";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Converging beams from both sides */}
      <div className="absolute inset-0 opacity-70">
        <AmbientBeams variant="center" intensity={0.55} />
      </div>

      {/* Subtle radial bloom at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 60%)",
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

          <motion.div
            className="mx-auto mt-6 h-px bg-white/25 origin-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ width: "64px" }}
          />

          <p className="mt-6 text-white/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
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
