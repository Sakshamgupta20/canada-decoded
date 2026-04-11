"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import SectionBackdrop from "./SectionBackdrop";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-36 border-t border-white/10"
    >
      <SectionBackdrop orb="top-right" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        {/* Header */}
        <AnimatedSection>
          <p className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6 sm:mb-7">
            What We Do
          </p>
          <h2 className="font-display text-[2rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] 2xl:text-[4.25rem] leading-[1.04] tracking-[-0.02em] max-w-[20ch]">
            We Don&rsquo;t File. We Decode.
          </h2>
          <p className="mt-7 sm:mt-8 text-[15px] sm:text-base text-white/50 max-w-xl leading-relaxed">
            We help you understand how the system really works — beyond the
            basics, beyond the templates.
          </p>
        </AnimatedSection>

        {/* Horizon rule */}
        <motion.div
          className="mt-14 sm:mt-16 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        />

        {/* Services grid */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: 0.1 + i * 0.06,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex flex-col h-full p-7 sm:p-9 bg-black overflow-hidden transition-colors duration-500 hover:bg-[#070707]"
                style={{ borderRadius: 0 }}
              >
                {/* Hover corner glow */}
                <div
                  className="absolute -top-24 -right-24 w-56 h-56 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 60%)",
                  }}
                />

                <div className="relative flex items-start justify-between mb-8">
                  <span className="font-display text-[10px] text-white/35 tracking-[0.2em]">
                    {service.number}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-white/25 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 14 10"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M0 5H12M12 5L8 1M12 5L8 9"
                    />
                  </svg>
                </div>

                <h3 className="relative font-display text-xl sm:text-2xl tracking-tight mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-white/45 text-xs sm:text-sm mb-5 font-display tracking-tight">
                  {service.tagline}
                </p>
                <p className="relative text-white/40 text-sm leading-relaxed mt-auto">
                  {service.shortDescription}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer link */}
        <AnimatedSection delay={0.2}>
          <div className="mt-16 flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/40">
            <span>06 Pathways · Ontario, Canada</span>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 hover:text-white transition-colors"
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
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
