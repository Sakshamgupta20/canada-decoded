"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Working in Canada",
    description: "PGWP, NOC, PR paths.",
    href: "#working",
  },
  {
    title: "Spouse & Family Routes",
    description: "SOWP and PR journey clarity.",
    href: "#spouse",
  },
  {
    title: "Outside Canada",
    description: "LMIA, offers, and realities.",
    href: "#outside",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 overflow-hidden bg-[#080808]">

      <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.5rem] tracking-tight">
              We Don&rsquo;t File. We Decode.
            </h2>
            <p className="mt-3 text-white/40 text-sm sm:text-[15px]">
              We help you understand how the system really works—beyond the basics.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.12}>
              <motion.a
                href={service.href}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="group block p-6 sm:p-7 border border-[#1f1f1f] hover:border-[#2a2a2a] bg-transparent hover:bg-white/[0.02] transition-all duration-500"
                style={{ borderRadius: 0 }}
              >
                <h3 className="font-display text-base sm:text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-white/35 text-sm">
                  {service.description}
                </p>
                <div className="mt-5 mb-1 h-px bg-[#1f1f1f]" />
                <div className="mt-4 flex justify-center text-white/25 group-hover:text-white/60 transition-colors duration-300">
                  <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6H30M30 6L25 1M30 6L25 11" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
