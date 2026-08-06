import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PartnersMarquee from "@/components/PartnersMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import JurisdictionMap from "@/components/JurisdictionMap";
import Tolerances from "@/components/Tolerances";
import Pricing from "@/components/Pricing";
import Resources from "@/components/Resources";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <PartnersMarquee />
        <Services />
        <Process />
        <JurisdictionMap />
        <Tolerances />
        <Pricing />
        <Resources />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
