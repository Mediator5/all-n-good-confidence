import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";

const projects = [
  {
    name: "Aura Bloom",
    tags: "Branding",
    image: "/aura_bloom_hero.png",
    alt: "Aura Bloom brand work",
  },
  {
    name: "Byte Bridge",
    tags: "Branding",
    image: "/byte_bridge_hero.png",
    alt: "Byte Bridge brand work",
  },
  {
    name: "Eco Haven",
    tags: "Branding",
    image: "/eco_haven_hero.png",
    alt: "Eco Haven brand work",
  },
  {
    name: "Melodia",
    tags: "Branding",
    image: "/melodia_hero.png",
    alt: "Melodia brand work",
  },
  {
    name: "Wanderlust",
    tags: "Branding",
    image: "/wanderlust_hero.png",
    alt: "Wanderlust brand work",
  },
  {
    name: "Zenith",
    tags: "Branding",
    image: "/zenith_hero.png",
    alt: "Zenith brand work",
  },
];

function ProjectCard({
  name,
  tags,
  image,
  alt,
}: {
  name: string;
  tags: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border-2 border-cream/10 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-light/60">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(min-width: 768px) 33vw, 90vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brown-darker/90 via-brown-darker/30 to-brown-darker/10" />

      <div className="relative flex items-start justify-between">
        <span className="font-heading text-xs font-semibold uppercase tracking-wide text-cream/70">
          {tags}
        </span>
        <span className="font-heading text-xl text-blue-light opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          &#8600;
        </span>
      </div>
      <span className="relative font-heading text-xl font-bold text-cream">
        {name}
      </span>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="bg-brown-darker py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="section-heading text-4xl text-blue-light sm:text-5xl">
            Work
          </h2>
          <p className="mt-3 font-body text-base text-cream/70 md:text-lg">
            A few of the brands we&apos;ve helped build, fix, or sharpen.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
