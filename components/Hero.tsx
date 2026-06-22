import Image from "next/image";
import Container from "./Container";
import Arc from "./Arc";

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

        <div className="hero-fade-up-delay relative mx-auto aspect-square w-[85%]">
          <div className="float-slow absolute -right-6 -top-6 z-10 h-40 w-40 rounded-full bg-blue/10" />
          <div
            className="float-slow absolute bottom-0 left-4 z-10 h-24 w-24 rounded-full bg-brown-light/40"
            style={{ animationDelay: "1.5s" }}
          />
          <Image
            src="/hero.png"
            alt="All N' Good Confidence hero"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 34vw, 75vw"
          />
        </div>
      </Container>
    </section>
  );
}
