"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import AmbientBeams from "./AmbientBeams";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Ambient backdrop — echoes the hero light rays, top-right focal */}
      <div className="absolute inset-0 opacity-60 sm:opacity-70">
        <AmbientBeams variant="top-right" intensity={0.45} />
      </div>

      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <AnimatedSection>
          <div className="text-center mb-14 sm:mb-18">
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
              What We Do
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
              We Don&rsquo;t File. We Decode.
            </h2>
            <motion.div
              className="mx-auto mt-5 h-px bg-white/20 origin-center"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{ width: "56px" }}
            />
            <p className="mt-5 text-white/45 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              We help you understand how the system really works — beyond the
              basics, beyond the templates.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.07}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex flex-col h-full p-7 sm:p-9 bg-black overflow-hidden transition-colors duration-500 hover:bg-[#070707]"
                style={{ borderRadius: 0 }}
              >
                {/* Hover glow — corner light */}
                <div
                  className="absolute -top-20 -right-20 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)",
                  }}
                />

                <div className="relative flex items-start justify-between mb-6">
                  <span className="font-display text-xs text-white/30 tracking-wider">
                    {service.number}
                  </span>
                  <svg
                    className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
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

                <h3 className="relative font-display text-xl sm:text-2xl tracking-tight mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="relative text-white/50 text-xs sm:text-sm mb-4 font-display">
                  {service.tagline}
                </p>
                <p className="relative text-white/40 text-sm leading-relaxed mt-auto">
                  {service.shortDescription}
                </p>

                {/* Bottom accent line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-white/30 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ width: "100%" }}
                />
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide group"
            >
              Book a consultation
              <svg
                width="24"
                height="10"
                viewBox="0 0 24 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-1 transition-transform duration-300"
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
