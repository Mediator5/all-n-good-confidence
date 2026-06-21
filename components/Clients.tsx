import Container from "./Container";
import Reveal from "./Reveal";

const marks = [
  "ring",
  "triangle",
  "diamond",
  "wave",
  "hex",
  "cross",
  "arcs",
  "dots",
] as const;

function Mark({ shape }: { shape: (typeof marks)[number] }) {
  const common = {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
  };

  switch (shape) {
    case "ring":
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "triangle":
      return (
        <svg {...common}>
          <path d="M16 5l11 19H5z" strokeLinejoin="round" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...common}>
          <path d="M16 4l9 12-9 12-9-12z" strokeLinejoin="round" />
          <path d="M7 16h18" />
        </svg>
      );
    case "wave":
      return (
        <svg {...common}>
          <path d="M4 20c3-8 7-8 10 0s7 8 10 0" strokeLinecap="round" />
        </svg>
      );
    case "hex":
      return (
        <svg {...common}>
          <path d="M16 4l10 6v12l-10 6-10-6V10z" strokeLinejoin="round" />
        </svg>
      );
    case "cross":
      return (
        <svg {...common}>
          <path d="M16 5v22M5 16h22" strokeLinecap="round" />
        </svg>
      );
    case "arcs":
      return (
        <svg {...common}>
          <path d="M6 22a10 10 0 0 1 20 0" />
          <path d="M11 22a5 5 0 0 1 10 0" />
        </svg>
      );
    case "dots":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <circle cx="9" cy="11" r="3" />
          <circle cx="23" cy="11" r="3" />
          <circle cx="16" cy="23" r="3" />
        </svg>
      );
  }
}

export default function Clients() {
  return (
    <section className="bg-brown-darker py-14 md:py-16">
      <Container>
        <Reveal>
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-cream/50">
            We keep good company
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
          {marks.map((shape, i) => (
            <Reveal key={shape} delay={i * 60}>
              <div className="flex items-center justify-center gap-3 rounded-xl border border-cream/10 bg-cream/[0.03] px-4 py-6 transition-colors duration-200 hover:border-cream/30">
                <span className="text-cream/40">
                  <Mark shape={shape} />
                </span>
                <span className="font-heading text-xs font-bold uppercase tracking-wide text-cream/30">
                  Client {i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 font-body text-xs text-cream/30">
          Placeholder marks — swap in real client logos as they sign on.
        </p>
      </Container>
    </section>
  );
}
