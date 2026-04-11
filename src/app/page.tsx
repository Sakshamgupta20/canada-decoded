import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AccessMatters from "@/components/AccessMatters";
import Approach from "@/components/Approach";
import Community from "@/components/Community";
import CTA from "@/components/CTA";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider star />
      <AccessMatters />
      <SectionDivider star />
      <Approach />
      <SectionDivider />
      <Community />
      <SectionDivider />
      <CTA />
    </>
  );
}
