import Container from "./Container";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <Container>
        <Reveal>
          <p className="max-w-3xl font-body text-lg leading-relaxed text-brown-dark md:text-xl">
            We&apos;re an independent branding, marketing, and website design
            studio for businesses that know what they&apos;re good at and
            want the world to know it too. No hedging, no watered-down decks
            — just clear strategy, sharp design, and campaigns built to get a
            reaction.{" "}
            <strong className="font-semibold text-blue">
              That&apos;s the &quot;good confidence&quot; part.
            </strong>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
