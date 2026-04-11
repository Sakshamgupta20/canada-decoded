"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionBackdrop from "./SectionBackdrop";

export default function Community() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-36 border-t border-white/10">
      <SectionBackdrop orb="bottom-right" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <AnimatedSection>
          <p className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6 sm:mb-7">
            Community
          </p>
          <h2 className="font-display text-[2rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] 2xl:text-[4.25rem] leading-[1.04] tracking-[-0.02em] max-w-[18ch]">
            Real Conversations. Real People.
          </h2>
          <p className="mt-7 sm:mt-8 text-[15px] sm:text-base text-white/50 max-w-xl leading-relaxed">
            Beyond the screen, we believe in real connections — building a
            community where your journey matters and your questions get honest
            answers.
          </p>
        </AnimatedSection>

        <motion.div
          className="mt-14 sm:mt-16 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        />

        {/* Three pillars of community */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
          {[
            {
              n: "01",
              title: "Honest Conversations",
              body: "Direct answers, no sales pitch. Ask anything — your situation gets the attention it deserves.",
            },
            {
              n: "02",
              title: "Vetted Network",
              body: "Real employers, trusted professionals, and verified pathways — not a directory dump.",
            },
            {
              n: "03",
              title: "Long-Term Relationships",
              body: "Your immigration journey doesn't end at PR. We're here for the steps after that, too.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="bg-black p-7 sm:p-9"
            >
              <span className="font-display text-[10px] text-white/35 tracking-[0.2em] block mb-8">
                {item.n}
              </span>
              <h3 className="font-display text-xl sm:text-2xl tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
