import Image from "next/image";
import Container from "./Container";
import Arc from "./Arc";
import Parallax from "./Parallax";

const taglineItems = ["Strategy", "Branding", "Website", "Social", "Campaign"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-10 pb-20 md:pt-16 md:pb-28">
      <Arc className="-left-16 top-4 hidden md:block" />

      <Container className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div className="hero-fade-up">
          <h1 className="section-heading text-4xl leading-[1.1] text-brown-dark sm:text-5xl md:text-6xl">
            Good ideas. Backed by
            <br />
            the confidence to ship them.
          </h1>
          <p className="mt-5 max-w-md font-body text-base text-brown-dark/80 md:text-lg">
            All N&apos; Good Confidence is the brand and growth partner for
            companies done playing it safe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2 font-heading text-sm font-semibold text-brown-dark sm:text-base">
            {taglineItems.map((item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span className="text-blue">+</span>}
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-fade-up-delay relative aspect-square">
          <div className="float-slow absolute -right-6 -top-6 z-10 h-40 w-40 rounded-full bg-blue/10" />
          <div
            className="float-slow absolute bottom-0 left-4 z-10 h-24 w-24 rounded-full bg-brown-light/40"
            style={{ animationDelay: "1.5s" }}
          />
          <Parallax
            speed={0.15}
            className="relative h-full w-full rounded-[2rem] border-2 border-brown-dark/10 shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1758691736836-0413b066787a?auto=format&fit=crop&w=1200&q=75"
              alt="Creative team brainstorming with sticky notes"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 90vw"
            />
          </Parallax>
        </div>
      </Container>
    </section>
  );
}
