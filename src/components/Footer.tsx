"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const linkSections = [
  {
    title: "Services",
    links: [
      { label: "Working in Canada", href: "/services/working-in-canada" },
      {
        label: "Business & Self-Employment",
        href: "/services/business-self-employment",
      },
      {
        label: "LMIA & Job Offer Strategy",
        href: "/services/lmia-job-offer-strategy",
      },
      {
        label: "PR Pathway Comparison",
        href: "/services/pr-pathway-comparison",
      },
      { label: "1:1 Consultation", href: "/services/consultation" },
      { label: "Reality Check & Review", href: "/services/reality-check" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Our Approach", href: "/#about" },
      { label: "Community", href: "/#about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-black border-t border-white/10 pt-20 sm:pt-24 pb-10"
    >
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 md:gap-10 mb-16 sm:mb-20">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="font-display text-base tracking-[0.2em] text-white uppercase"
            >
              Canada Decoded
            </Link>
            <p className="mt-5 text-white/45 text-[14px] leading-relaxed max-w-xs">
              Immigration pathways, decoded. We break down the system so you
              can make informed decisions.
            </p>
            <div className="mt-8 space-y-3">
              <p className="font-display text-[10px] text-white/35 tracking-[0.2em]">
                MOOSE IMM INC.
              </p>
              <p className="font-display text-[10px] text-white/35 tracking-[0.2em]">
                ONTARIO, CANADA
              </p>
            </div>
          </div>

          {/* Link columns */}
          {linkSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[10px] text-white/45 uppercase tracking-[0.25em] mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/55 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/35">
          <p>&copy; 2026 Canada Decoded · Moose IMM Inc.</p>
          <p>Non-Regulated · Non-Representational · Advisory in Nature</p>
        </div>
      </div>
    </motion.footer>
  );
}
