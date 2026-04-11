"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import SectionBackdrop from "./SectionBackdrop";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-black py-28 sm:py-32 lg:py-40 border-t border-white/10"
    >
      <SectionBackdrop orb="center" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <AnimatedSection>
          <p className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6 sm:mb-7">
            Ready?
          </p>
          <h2 className="font-display text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] 2xl:text-[5rem] leading-[1.04] tracking-[-0.02em] max-w-[20ch]">
            Get Clarity On Your Next Move.
          </h2>
          <p className="mt-7 sm:mt-8 text-[15px] sm:text-base text-white/50 max-w-md leading-relaxed">
            30 minutes. Honest strategy. No templated advice. Walk away knowing
            exactly where you stand and what to do next.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
              style={{ borderRadius: 0 }}
            >
              Book Consultation
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
              View Services
            </Link>
          </div>
        </AnimatedSection>

        <motion.div
          className="mt-16 sm:mt-20 h-px bg-gradient-to-r from-white/15 via-white/5 to-transparent origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        />

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-10 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/40">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span>30-Minute Calls</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span>1:1 Engagement</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span>Honest Strategy</span>
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
    </section>
  );
}
