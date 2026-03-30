import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AccessMatters from "@/components/AccessMatters";
import Insights from "@/components/Insights";
import Community from "@/components/Community";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AccessMatters />
        <Insights />
        <Community />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
