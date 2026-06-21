import Container from "./Container";
import Arc from "./Arc";
import Reveal from "./Reveal";

const spots = [
  {
    title: "Head of All N' Good",
    blurb: "Say hi to the chief!",
    email: "hello@allngoodconfidence.com",
  },
  {
    title: "Media Inquiries",
    blurb: "Let's make headlines!",
    email: "media@allngoodconfidence.com",
  },
  {
    title: "New Business",
    blurb: "Let's get growing!",
    email: "growth@allngoodconfidence.com",
  },
  {
    title: "Career Inquiries",
    blurb: "Join the team!",
    email: "careers@allngoodconfidence.com",
  },
];

export default function GoodSpots() {
  return (
    <section className="relative overflow-hidden bg-brown-darker py-20 md:py-28">
      <Arc className="-left-10 -top-10 hidden opacity-40 md:block" />
      <Arc className="-right-16 -top-6 hidden opacity-40 md:block" />

      <Container className="relative">
        <Reveal>
          <h2 className="section-heading text-4xl text-blue-light sm:text-5xl">
            Good Spots
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {spots.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <h3 className="font-heading text-lg font-bold text-cream">
                {s.title}
              </h3>
              <p className="mt-1 font-body text-cream/70">{s.blurb}</p>
              <a
                href={`mailto:${s.email}`}
                className="mt-1 inline-block font-body text-blue-light underline-offset-2 hover:underline"
              >
                {s.email}
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
