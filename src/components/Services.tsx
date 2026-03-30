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
    <section id="services" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              We Don&apos;t File. We Decode.
            </h2>
            <p className="mt-4 text-white/50 text-base sm:text-lg">
              We help you understand how the system really works — beyond the
              basics.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.15}>
              <motion.a
                href={service.href}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group block p-8 sm:p-10 border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              >
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 text-white/50 text-sm sm:text-base">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-white/40 group-hover:text-white transition-colors duration-300">
                  <motion.span
                    className="text-2xl"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    &rarr;
                  </motion.span>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
