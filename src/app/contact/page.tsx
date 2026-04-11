import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import SectionBackdrop from "@/components/SectionBackdrop";

export const metadata: Metadata = {
  title: "Contact Us: Canada Decoded",
  description:
    "Get in touch with Canada Decoded. Book a consultation, ask questions, or share your situation. We'll respond within 1-2 business days.",
  openGraph: {
    title: "Contact Canada Decoded",
    description:
      "Get in touch for immigration pathway guidance, consultations, and honest strategy.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 lg:pb-36 overflow-hidden bg-[#0b0b0d]">
      <SectionBackdrop orb="top-right" />

      {/* Spotlight behind the headline: gives the eye a clear focal anchor */}
      <div
        className="absolute pointer-events-none -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.035) 28%, rgba(255,255,255,0.012) 50%, transparent 72%)",
        }}
      />

      {/* Warm low-light wash on the lower half so the page isn't monochrome black */}
      <div
        className="absolute pointer-events-none inset-x-0 bottom-0 h-[60%]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(255,210,170,0.05) 0%, rgba(255,200,160,0.018) 30%, transparent 60%)",
        }}
      />

      {/* Edge vignette: darkens the corners so the center feels lit */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        {/* Header */}
        <AnimatedSection>
          <p className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6 sm:mb-7">
            Contact
          </p>
          <h1 className="font-display text-[2.25rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] 2xl:text-[4.75rem] leading-[1.04] tracking-[-0.02em] max-w-[14ch]">
            Let&rsquo;s talk.
          </h1>
          <p className="mt-7 sm:mt-8 text-[15px] sm:text-base text-white/50 max-w-xl leading-relaxed">
            Whether you&rsquo;re confused about pathways, unsure about an offer,
            or ready to build a strategy, we&rsquo;re here for an honest
            conversation.
          </p>
        </AnimatedSection>

        {/* Horizon rule */}
        <div className="mt-14 sm:mt-16 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" />

        {/* Two-column: info left + form right */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-20">
          {/* Left: info */}
          <AnimatedSection>
            <div className="space-y-10">
              <div>
                <p className="font-display text-[10px] text-white/35 tracking-[0.2em] mb-3">
                  01 / RESPONSE TIME
                </p>
                <p className="text-white/75 text-[15px] leading-relaxed">
                  Within 1-2 business days.
                </p>
              </div>
              <div>
                <p className="font-display text-[10px] text-white/35 tracking-[0.2em] mb-3">
                  02 / CONSULTATION
                </p>
                <p className="text-white/75 text-[15px] leading-relaxed">
                  30-minute focused calls. Clarity in one session.
                </p>
              </div>
              <div>
                <p className="font-display text-[10px] text-white/35 tracking-[0.2em] mb-3">
                  03 / LOCATION
                </p>
                <p className="text-white/75 text-[15px] leading-relaxed">
                  Ontario, Canada.
                </p>
              </div>
              <div>
                <p className="font-display text-[10px] text-white/35 tracking-[0.2em] mb-3">
                  04 / PRACTICE
                </p>
                <p className="text-white/75 text-[15px] leading-relaxed">
                  Advisory · Non-regulated · Honest by design.
                </p>
              </div>
            </div>

            <div className="mt-14 h-px bg-white/10" />

            <p className="mt-8 text-xs text-white/35 leading-relaxed max-w-md">
              By submitting this form, you agree to our{" "}
              <Link
                href="/terms"
                className="underline hover:text-white/70 transition-colors"
              >
                Terms
              </Link>
              ,{" "}
              <Link
                href="/privacy"
                className="underline hover:text-white/70 transition-colors"
              >
                Privacy Policy
              </Link>
              , and{" "}
              <Link
                href="/disclaimer"
                className="underline hover:text-white/70 transition-colors"
              >
                Disclaimer
              </Link>
              .
            </p>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={0.15}>
            <div className="relative">
              {/* Soft glow halo behind the card */}
              <div
                aria-hidden
                className="absolute -inset-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
                }}
              />
              <div
                className="relative bg-gradient-to-b from-white/[0.07] via-white/[0.035] to-white/[0.015] border border-white/15 p-8 sm:p-10 lg:p-12 backdrop-blur-sm shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
              >
                <div className="absolute top-0 left-0 h-px w-12 bg-white/40" />
                <div className="absolute top-0 left-0 w-px h-12 bg-white/40" />
                <div className="absolute bottom-0 right-0 h-px w-12 bg-white/40" />
                <div className="absolute bottom-0 right-0 w-px h-12 bg-white/40" />
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
