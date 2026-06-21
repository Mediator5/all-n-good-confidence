import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";
import QuoteParallax from "@/components/QuoteParallax";
import Clients from "@/components/Clients";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import GoodSpots from "@/components/GoodSpots";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <QuoteParallax />
      <Clients />
      <Values />
      <Services />
      <Careers />
      <Contact />
      <GoodSpots />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
