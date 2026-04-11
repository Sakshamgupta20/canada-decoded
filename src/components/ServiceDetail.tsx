"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Service } from "@/data/services";
import { services } from "@/data/services";
import AnimatedSection from "./AnimatedSection";
import SectionBackdrop from "./SectionBackdrop";

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-24 lg:pb-28 overflow-hidden bg-black">
        <SectionBackdrop orb="top-right" />

        <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-14 flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/40"
          >
            <Link
              href="/"
              className="hover:text-white/70 transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/#services"
              className="hover:text-white/70 transition-colors"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-white/60">{service.title}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6 sm:mb-7"
          >
            {service.number} — Service
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="font-display text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] 2xl:text-[4.75rem] leading-[1.04] tracking-[-0.02em] max-w-[16ch]"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="mt-6 font-display text-lg sm:text-xl lg:text-2xl text-white/65 max-w-2xl tracking-tight"
          >
            {service.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="mt-8 text-[15px] sm:text-base text-white/50 max-w-2xl leading-relaxed"
          >
            {service.longDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="mt-10 sm:mt-12 flex flex-wrap gap-3"
          >
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
              href="/#services"
              className="inline-flex items-center px-6 py-3 sm:px-7 sm:py-3.5 border border-white/20 text-white text-sm font-medium tracking-wide hover:border-white/45 hover:bg-white/5 transition-all"
              style={{ borderRadius: 0 }}
            >
              Other Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Covered + Outcomes ─────────────────────────────────────────── */}
      <section className="relative bg-black py-24 sm:py-28 lg:py-32 border-t border-white/10 overflow-hidden">
        <SectionBackdrop orb="top-left" />

        <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            {/* What's covered */}
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6">
                What&rsquo;s Covered
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl tracking-[-0.02em] leading-[1.06] max-w-md">
                The Topics We Decode
              </h2>
              <motion.div
                className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
              <ul className="mt-2">
                {service.covers.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="flex items-baseline gap-5 py-4 border-b border-white/10 text-[15px] text-white/70 leading-snug"
                  >
                    <span className="font-display text-[10px] text-white/35 tracking-[0.15em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Outcomes */}
            <AnimatedSection delay={0.15}>
              <p className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6">
                Outcomes
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl tracking-[-0.02em] leading-[1.06] max-w-md">
                What You Walk Away With
              </h2>
              <motion.div
                className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
              <ul className="mt-2">
                {service.outcomes.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="flex items-baseline gap-5 py-4 border-b border-white/10 text-[15px] text-white/70 leading-snug"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-white/40 flex-shrink-0 self-center"
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

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      {service.faqs.length > 0 && (
        <section className="relative bg-black py-24 sm:py-28 lg:py-32 border-t border-white/10 overflow-hidden">
          <SectionBackdrop orb="bottom-right" />

          <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
            <AnimatedSection>
              <p className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6">
                FAQ
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl tracking-[-0.02em] leading-[1.06] max-w-xl">
                Common Questions
              </h2>
            </AnimatedSection>

            <motion.div
              className="mt-12 sm:mt-14 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, delay: 0.3 }}
            />

            <div className="mt-2 max-w-3xl">
              {service.faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.07, duration: 0.55 }}
                  className="py-8 border-b border-white/10"
                >
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl tracking-tight mb-4">
                    {faq.q}
                  </h3>
                  <p className="text-white/55 text-[15px] leading-relaxed max-w-2xl">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Other services ─────────────────────────────────────────────── */}
      <section className="relative bg-black py-24 sm:py-28 lg:py-32 border-t border-white/10 overflow-hidden">
        <SectionBackdrop orb="top-right" />

        <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
          <AnimatedSection>
            <p className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6">
              More
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl tracking-[-0.02em] leading-[1.06] max-w-xl">
              Other Services
            </h2>
          </AnimatedSection>

          <motion.div
            className="mt-12 sm:mt-14 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, delay: 0.3 }}
          />

          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
            {otherServices.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-col h-full p-7 sm:p-9 bg-black hover:bg-[#070707] transition-colors duration-500"
                  style={{ borderRadius: 0 }}
                >
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-display text-[10px] text-white/35 tracking-[0.2em]">
                      {s.number}
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
                  <h3 className="font-display text-xl sm:text-2xl tracking-tight mb-2 group-hover:text-white transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-white/45 text-xs sm:text-sm mb-5 font-display tracking-tight">
                    {s.tagline}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed mt-auto">
                    {s.shortDescription}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────────────────── */}
      <section className="relative bg-black py-28 sm:py-32 lg:py-40 border-t border-white/10 overflow-hidden">
        <SectionBackdrop orb="center" />

        <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
          <AnimatedSection>
            <p className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6 sm:mb-7">
              Next Step
            </p>
            <h2 className="font-display text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.04] tracking-[-0.02em] max-w-[16ch]">
              Ready to get clarity?
            </h2>
            <p className="mt-7 sm:mt-8 text-[15px] sm:text-base text-white/50 max-w-md leading-relaxed">
              30 minutes. Your specific questions. Honest answers — focused on{" "}
              {service.title.toLowerCase()}.
            </p>
            <Link
              href="/contact"
              className="group mt-10 sm:mt-12 inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
              style={{ borderRadius: 0 }}
            >
              Book Your Call
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
