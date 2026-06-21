import Container from "./Container";
import Reveal from "./Reveal";

const services = [
  {
    name: "Strategy",
    copy:
      "Before we design or write a single word, we figure out who you're actually talking to and what's going to make them care. Research, positioning, messaging — the groundwork everything else stands on.",
  },
  {
    name: "Branding",
    copy:
      "Logos, color, type, voice — built as one coherent system, not a grab bag of assets. We give you a brand that looks like itself whether it's on a business card or a billboard.",
  },
  {
    name: "Campaigns",
    copy:
      "Concepts built around one clear idea, executed across every channel that matters. Launches, seasonal pushes, always-on work — all pulling toward the same goal instead of fighting each other.",
  },
  {
    name: "Social",
    copy:
      "Content, community management, and a posting cadence that doesn't burn out your team. We plan for the platform your audience is actually on, not the one that's trendy this quarter.",
  },
  {
    name: "Website",
    copy:
      "Sites designed to convert, not just look good in a portfolio. UX, copy, and development working together so visitors actually do the thing you built the page for.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="section-heading text-4xl text-blue sm:text-5xl">
            Services
          </h2>
          <p className="mt-3 font-body text-base text-brown-dark/80 md:text-lg">
            Our bread and butter. With a side of everything in between.
          </p>
        </Reveal>

        <div className="mt-10 border-t-2 border-blue">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <div className="grid grid-cols-1 gap-4 border-b-2 border-blue py-8 md:grid-cols-[220px_1fr_40px] md:items-start">
                <h3 className="font-heading text-xl font-extrabold uppercase tracking-tight text-blue">
                  {s.name}
                </h3>
                <p className="font-body text-base leading-relaxed text-brown-dark md:text-lg">
                  {s.copy}
                </p>
                <span className="hidden font-heading text-2xl text-blue md:block">
                  &#8600;
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
