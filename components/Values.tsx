import Reveal from "./Reveal";

const values = [
  {
    label: "Confident",
    tagline: "We say the thing, not the safe version of it",
    icon: "circle",
  },
  {
    label: "Curious",
    tagline: "We ask one more question than we strictly need to",
    icon: "star",
  },
  {
    label: "Considered",
    tagline: "Every decision has a reason behind it",
    icon: "flag",
  },
  {
    label: "Candid",
    tagline: "We'll tell you when an idea isn't working yet",
    icon: "chat",
  },
  {
    label: "Driven",
    tagline: "We care about the result, not the deliverable",
    icon: "thumb",
  },
  {
    label: "Generous",
    tagline: "Your win is the only metric that matters to us",
    icon: "heart",
  },
] as const;

function ValueIcon({ icon }: { icon: (typeof values)[number]["icon"] }) {
  const common = {
    className: "h-full w-full",
    viewBox: "0 0 56 56",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
  };

  switch (icon) {
    case "circle":
      return (
        <svg {...common}>
          <circle cx="28" cy="28" r="20" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M28 8l4 14 14 4-14 4-4 14-4-14-14-4 14-4z" strokeLinejoin="round" />
        </svg>
      );
    case "flag":
      return (
        <svg {...common}>
          <path d="M16 8v40" strokeLinecap="round" />
          <path d="M16 10h22l-6 8 6 8H16" strokeLinejoin="round" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M10 14h36v22H24l-8 8v-8h-6z" strokeLinejoin="round" />
        </svg>
      );
    case "thumb":
      return (
        <svg {...common}>
          <path
            d="M14 26h8v18h-8zM22 26l6-16c2 0 5 2 5 6l-2 8h11c2 0 4 2 3 5l-4 11c-1 2-2 3-5 3H22z"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M28 44C12 34 8 24 8 18a10 10 0 0 1 20-2 10 10 0 0 1 20 2c0 6-4 16-20 26z" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function Values() {
  return (
    <section id="values" className="bg-brown-darker py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="section-heading text-4xl text-blue-light sm:text-5xl">
            Our Values
          </h2>
          <p className="mt-3 font-body text-base text-cream/70 md:text-lg">
            We are driven by principles that define who we are and how we work.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-16 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.label} delay={i * 70} className="group flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center text-cream/25 transition-all duration-300 ease-out group-hover:scale-125 group-hover:text-glow group-hover:drop-shadow-[0_0_16px_rgba(233,255,92,0.7)] sm:h-28 sm:w-28 md:h-32 md:w-32">
                <ValueIcon icon={v.icon} />
              </div>
              <div className="mt-6 w-full border-t-2 border-blue pt-3 text-center">
                <span className="block font-heading text-base font-bold text-cream transition-colors duration-300 group-hover:text-glow sm:text-lg">
                  {v.label}
                </span>
                <span className="mt-2 block min-h-[2.5rem] font-heading text-sm font-bold uppercase leading-snug text-glow opacity-0 transition-all duration-300 ease-out [text-shadow:0_0_14px_rgba(233,255,92,0.9)] group-hover:translate-y-0 group-hover:opacity-100 sm:text-base translate-y-2">
                  {v.tagline}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
