import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AccessMatters from "@/components/AccessMatters";
import Insights from "@/components/Insights";
import Community from "@/components/Community";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import DotPattern from "@/components/DotPattern";

export default function Home() {
  return (
    <>
      <DotPattern />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider star />
        <AccessMatters />
        <SectionDivider star />
        <Insights />
        <SectionDivider />
        <Community />
        <SectionDivider star />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
