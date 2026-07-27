import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import JurisdictionMap from "@/components/JurisdictionMap";
import Tolerances from "@/components/Tolerances";
import PartnersMarquee from "@/components/PartnersMarquee";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <JurisdictionMap />
        <Tolerances />
        <PartnersMarquee />
        <Pricing />
        <Process />
        <Testimonials />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
