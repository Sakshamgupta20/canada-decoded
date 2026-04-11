"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <AnimatedSection>
          <div className="text-center mb-14 sm:mb-18">
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
              We Don&rsquo;t File. We Decode.
            </h2>
            <p className="mt-4 text-white/45 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              We help you understand how the system really works — beyond the
              basics, beyond the templates.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#161616]">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.08}>
              <motion.div
                whileHover={{ backgroundColor: "#0c0c0c" }}
                transition={{ duration: 0.3 }}
                className="h-full bg-black hover:bg-[#0a0a0a] transition-colors duration-500"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col h-full p-7 sm:p-9"
                  style={{ borderRadius: 0 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-display text-xs text-white/30 tracking-wider">
                      {service.number}
                    </span>
                    <svg
                      className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm mb-4 font-display">
                    {service.tagline}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed mt-auto">
                    {service.shortDescription}
                  </p>
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide"
            >
              Book a consultation
              <svg
                width="24"
                height="10"
                viewBox="0 0 24 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5H22M22 5L18 1M22 5L18 9"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
