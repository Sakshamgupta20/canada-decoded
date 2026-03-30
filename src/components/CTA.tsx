"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import GrainOverlay from "./GrainOverlay";

export default function CTA() {
  return (
    <section id="contact" className="relative py-14 sm:py-20 bg-black">
      <GrainOverlay />
      <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20 text-center">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/10" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight whitespace-nowrap">
              Get Clarity On Your Next Move
            </h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-300"
            style={{ borderRadius: 0 }}
          >
            Book Consultation
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
