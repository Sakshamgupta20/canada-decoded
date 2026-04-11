import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact Us — Canada Decoded",
  description:
    "Get in touch with Canada Decoded. Book a consultation, ask questions, or share your situation — we'll respond within 1-2 business days.",
  openGraph: {
    title: "Contact Canada Decoded",
    description:
      "Get in touch for immigration pathway guidance, consultations, and honest strategy.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32">
      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20">
          {/* Left — Info */}
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-5">
              Contact
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08]">
              Let&rsquo;s talk.
            </h1>
            <p className="mt-6 text-white/50 text-base sm:text-lg leading-relaxed max-w-md">
              Whether you&rsquo;re confused about pathways, unsure about an offer,
              or ready to build a strategy — we&rsquo;re here for an honest
              conversation.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="text-xs tracking-[0.2em] text-white/40 uppercase mb-2">
                  Response Time
                </p>
                <p className="text-white/75 text-sm sm:text-base">
                  Within 1&ndash;2 business days.
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-white/40 uppercase mb-2">
                  Consultation
                </p>
                <p className="text-white/75 text-sm sm:text-base">
                  30-minute focused calls. Clarity in one session.
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] text-white/40 uppercase mb-2">
                  Location
                </p>
                <p className="text-white/75 text-sm sm:text-base">
                  Ontario, Canada.
                </p>
              </div>
            </div>

            <div className="mt-14 h-px bg-white/10" />

            <p className="mt-8 text-xs text-white/35 leading-relaxed max-w-md">
              By submitting this form, you agree to our{" "}
              <a href="/terms" className="underline hover:text-white/60">
                Terms
              </a>
              ,{" "}
              <a href="/privacy" className="underline hover:text-white/60">
                Privacy Policy
              </a>
              , and{" "}
              <a href="/disclaimer" className="underline hover:text-white/60">
                Disclaimer
              </a>
              . Canada Decoded is non-regulated and advisory in nature.
            </p>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.15}>
            <div className="bg-black border border-white/10 p-8 sm:p-10">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
