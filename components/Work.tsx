import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";

const projects = [
  {
    name: "Project One",
    tags: "Branding, Strategy, Web",
    image:
      "https://images.unsplash.com/photo-1768893888828-52288984228c?auto=format&fit=crop&w=1200&q=75",
    alt: "City skyline silhouette at sunset",
  },
  {
    name: "Project Two",
    tags: "Social, Campaign",
    image:
      "https://images.unsplash.com/photo-1759215524472-1b0686fdbd87?auto=format&fit=crop&w=1200&q=75",
    alt: "Hands holding a phone displaying a social feed",
  },
  {
    name: "Project Three",
    tags: "Branding",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=75",
    alt: "Colorful confetti against a teal background",
  },
  {
    name: "Project Four",
    tags: "Website",
    image:
      "https://images.unsplash.com/photo-1754548930550-be9fa88874f4?auto=format&fit=crop&w=1200&q=75",
    alt: "Multi-monitor coding workspace",
  },
  {
    name: "Project Five",
    tags: "Strategy, Campaign",
    image:
      "https://images.unsplash.com/photo-1758691736836-0413b066787a?auto=format&fit=crop&w=1200&q=75&crop=entropy",
    alt: "Creative team brainstorming together",
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
          <Reveal delay={0} className="md:col-span-2">
            <ProjectCard {...projects[0]} />
          </Reveal>
          <Reveal delay={80}>
            <ProjectCard {...projects[1]} />
          </Reveal>
          {projects.slice(2).map((p, i) => (
            <Reveal key={p.name} delay={160 + i * 80}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
