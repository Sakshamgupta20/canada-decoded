"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const linkSections = [
  {
    title: "Services",
    links: [
      { label: "Working in Canada", href: "/#services" },
      { label: "Business Pathways", href: "/#services" },
      { label: "LMIA Strategy", href: "/#services" },
      { label: "PR Comparison", href: "/#services" },
      { label: "1:1 Consultation", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Insights", href: "/#insights" },
      { label: "Community", href: "/#insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
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
      className="relative border-t border-white/10 pt-16 pb-8"
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 md:gap-8 mb-14">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="font-display text-xl tracking-[0.15em] text-white uppercase"
            >
              Canada Decoded
            </Link>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-xs">
              Immigration pathways, decoded. We break down the system so you
              can make informed decisions.
            </p>
            <p className="mt-6 text-xs text-white/30 tracking-wider uppercase">
              Moose IMM Inc.
            </p>
          </div>

          {/* Link columns */}
          {linkSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs text-white/50 uppercase tracking-[0.2em] mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/35">
          <p>&copy; 2026 Canada Decoded / Moose IMM Inc. All rights reserved.</p>
          <p className="tracking-wide">
            Non-regulated. Non-representational. Advisory in nature.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
