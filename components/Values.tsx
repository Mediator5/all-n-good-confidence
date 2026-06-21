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
    width: 56,
    height: 56,
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

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.label} delay={i * 70} className="flex flex-col items-center">
              <div className="text-cream/30 transition-transform duration-300 hover:scale-110 hover:text-blue-light">
                <ValueIcon icon={v.icon} />
              </div>
              <div className="mt-8 w-full border-t-2 border-blue pt-3 text-center">
                <span className="block font-heading text-base font-bold text-cream sm:text-lg">
                  {v.label}
                </span>
                <span className="mt-1 block font-body text-sm text-cream/50">
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
