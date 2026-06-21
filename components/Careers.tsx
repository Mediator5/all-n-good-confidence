import Container from "./Container";
import PillButton from "./PillButton";
import Reveal from "./Reveal";

const roles = [
  {
    title: "Internship Program",
    location: "Remote: Global",
    blurb:
      "Three months of real client work across branding, marketing, and web — paired with mentorship, not busywork.",
    note: "No coffee runs. Just work that ends up in your portfolio.",
  },
  {
    title: "Brand Strategist",
    location: "Remote: Global",
    blurb:
      "Dig into research and audience insight, then turn it into positioning and messaging clients can actually use.",
    note: "",
  },
  {
    title: "Web Designer",
    location: "Remote: Global",
    blurb:
      "Design and build sites where the strategy, the story, and the craft all show up on the same page.",
    note: "",
  },
];

export default function Careers() {
  return (
    <section id="careers" className="bg-cream py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="section-heading text-3xl text-brown-dark sm:text-4xl">
            Come do work you&apos;d actually show people.
          </h2>
          <PillButton href="#open-roles" variant="filled" className="mt-6">
            See open roles &#8595;
          </PillButton>
        </Reveal>
      </Container>

      <Container id="open-roles" className="mt-16">
        <Reveal>
          <h3 className="section-heading text-2xl text-brown-dark">
            Open Roles
          </h3>
        </Reveal>

        <div className="mt-6 border-t-2 border-blue">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="group grid grid-cols-1 gap-3 border-b-2 border-blue py-7 transition-colors duration-200 md:grid-cols-[220px_140px_1fr_36px] md:items-start">
                <h4 className="font-heading text-lg font-extrabold uppercase tracking-tight text-blue">
                  {r.title}
                </h4>
                <span className="font-body text-sm text-brown-dark/70">
                  {r.location}
                </span>
                <p className="font-body text-brown-dark">
                  {r.blurb}
                  {r.note && <strong className="font-semibold"> {r.note}</strong>}
                </p>
                <span className="hidden font-heading text-2xl text-blue transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 md:block">
                  &#8599;
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
