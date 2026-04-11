"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Service } from "@/data/services";
import { services } from "@/data/services";
import AnimatedSection from "./AnimatedSection";
import AmbientBeams from "./AmbientBeams";

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
        {/* Ambient beams backdrop */}
        <div className="absolute inset-0 opacity-70">
          <AmbientBeams variant="top-right" intensity={0.55} />
        </div>

        <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex items-center gap-2 text-xs text-white/40"
          >
            <Link href="/" className="hover:text-white/70 transition-colors tracking-wide">
              Home
            </Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-white/70 transition-colors tracking-wide">
              Services
            </Link>
            <span>/</span>
            <span className="text-white/60">{service.title}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-xs tracking-[0.3em] text-white/40 uppercase mb-5"
          >
            {service.number} — Service
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] max-w-3xl"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 font-display text-xl sm:text-2xl text-white/60 max-w-2xl"
          >
            {service.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl"
          >
            {service.longDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="inline-block px-7 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
              style={{ borderRadius: 0 }}
            >
              Book Consultation
            </Link>
            <Link
              href="/#services"
              className="inline-block px-7 py-3 border border-white/25 text-white text-sm font-medium tracking-wide hover:border-white/50 hover:bg-white/5 transition-all"
              style={{ borderRadius: 0 }}
            >
              Other Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <div className="h-px bg-white/10" />
      </div>

      {/* Content grid */}
      <section className="relative py-20 sm:py-24">
        <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* What's covered */}
            <AnimatedSection>
              <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
                What&rsquo;s Covered
              </p>
              <h2 className="font-display text-2xl sm:text-3xl tracking-tight mb-6">
                The Topics We Decode
              </h2>
              <ul className="space-y-3">
                {service.covers.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3 text-sm sm:text-[15px] text-white/65 leading-relaxed"
                  >
                    <span className="font-display text-xs text-white/30 mt-1 min-w-[20px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Outcomes */}
            <AnimatedSection delay={0.15}>
              <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
                Outcomes
              </p>
              <h2 className="font-display text-2xl sm:text-3xl tracking-tight mb-6">
                What You Walk Away With
              </h2>
              <ul className="space-y-3">
                {service.outcomes.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3 text-sm sm:text-[15px] text-white/65 leading-relaxed"
                  >
                    <svg
                      className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <>
          <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
            <div className="h-px bg-white/10" />
          </div>
          <section className="relative py-20 sm:py-24">
            <div className="relative z-10 max-w-3xl 2xl:max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
              <AnimatedSection>
                <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4 text-center">
                  FAQ
                </p>
                <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-center mb-12">
                  Common Questions
                </h2>
              </AnimatedSection>

              <div className="space-y-px bg-white/10">
                {service.faqs.map((faq, i) => (
                  <AnimatedSection key={faq.q} delay={i * 0.08}>
                    <div className="bg-black p-6 sm:p-8">
                      <h3 className="font-display text-lg sm:text-xl tracking-tight mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-white/55 text-sm sm:text-[15px] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Other services */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <div className="h-px bg-white/10" />
      </div>
      <section className="relative py-20 sm:py-24">
        <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
              More
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-10">
              Other Services
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
            {otherServices.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-col h-full p-7 bg-black hover:bg-[#0a0a0a] transition-colors duration-500"
                  style={{ borderRadius: 0 }}
                >
                  <span className="font-display text-xs text-white/30 tracking-wider mb-4">
                    {s.number}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl tracking-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {s.shortDescription}
                  </p>
                  <div className="mt-4 text-white/30 group-hover:text-white/60 transition-colors duration-300">
                    <svg
                      width="28"
                      height="10"
                      viewBox="0 0 28 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5H26M26 5L22 1M26 5L22 9"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <div className="h-px bg-white/10" />
      </div>
      <section className="relative py-20 sm:py-28 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <AmbientBeams variant="center" intensity={0.5} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-16">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Ready to get clarity?
            </h2>
            <motion.div
              className="mx-auto mt-5 h-px bg-white/25 origin-center"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{ width: "56px" }}
            />
            <p className="mt-6 text-white/50 text-sm sm:text-base leading-relaxed">
              30 minutes. Your specific questions. Honest answers.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block px-8 py-3.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
              style={{ borderRadius: 0 }}
            >
              Book Your Call
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
