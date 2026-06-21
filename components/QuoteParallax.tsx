import Image from "next/image";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

export default function QuoteParallax() {
  return (
    <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
      <Parallax className="absolute inset-0" speed={0.3}>
        <Image
          src="https://images.unsplash.com/photo-1749286706344-0dd2e681b611?auto=format&fit=crop&w=1920&q=75"
          alt="Warm desert dunes at golden hour"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </Parallax>

      <div className="absolute inset-0 bg-brown-darker/55" />

      <div className="relative flex h-full items-center justify-center px-6">
        <Reveal>
          <p className="section-heading max-w-3xl text-center text-2xl text-cream sm:text-3xl md:text-4xl">
            Good ideas don&apos;t need permission. They need confidence,
            craft, and someone willing to ship them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
