"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20" />
            <div className="w-2 h-2 rotate-45 border border-white/20" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Get Clarity On Your Next Move
          </h2>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 sm:mt-12 inline-block px-10 py-4 border border-white/30 text-white text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
          >
            Book Consultation
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
