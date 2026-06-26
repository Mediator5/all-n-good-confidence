import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";

type ImageLogo = { src: string; alt: string; text?: never };
type TextLogo = { text: string; alt: string; src?: never };
type Logo = ImageLogo | TextLogo;

const logos: Logo[] = [
  { src: "/logos/Capture.PNG", alt: "Client logo" },
  { src: "/logos/IMG_1009.jpg", alt: "Client logo" },
  { src: "/logos/IMG_1284.jpg", alt: "Client logo" },
  { src: "/logos/IMG_4165.jpg", alt: "Client logo" },
  { src: "/logos/IMG_6056.jpg", alt: "Client logo" },
  { src: "/logos/IMG_7765-1.jpg", alt: "Client logo" },
  { src: "/logos/IMG_7765.jpg", alt: "Client logo" },
  { src: "/logos/IMG_7860.jpg", alt: "Client logo" },
  { src: "/logos/IMG_7928.jpg", alt: "Client logo" },
  { text: "Mino & Tony Experiences", alt: "Mino & Tony Experiences" },
];

export default function Clients() {
  return (
    <section className="bg-brown-darker py-14 md:py-16">
      <Container>
        <Reveal>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-cream/50">
            We keep good company
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {logos.map((logo, i) => (
            <Reveal key={logo.text ?? logo.src} delay={i * 60}>
              <div className="flex items-center justify-center rounded-xl bg-white/95 px-5 py-6 transition-all duration-200 hover:bg-white hover:shadow-md">
                {logo.src ? (
                  <div className="relative h-16 w-full">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 18vw, (min-width: 640px) 30vw, 45vw"
                    />
                  </div>
                ) : (
                  <div className="flex h-16 w-full flex-col items-center justify-center gap-1">
                    <span
                      className="font-heading text-xs font-black uppercase tracking-[0.18em]"
                      style={{ color: "#C9A441" }}
                    >
                      Mino &amp; Tony
                    </span>
                    <div className="h-px w-8" style={{ background: "#C9A441" }} />
                    <span
                      className="font-heading text-[10px] font-semibold uppercase tracking-[0.22em]"
                      style={{ color: "#C9A441BB" }}
                    >
                      Experiences
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
