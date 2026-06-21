const phrases = ["confident STRATEGY", "crafted BRANDING", "candid CAMPAIGNS"];

const items = Array.from({ length: 8 }).flatMap(() => phrases);

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-blue py-5">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((phrase, i) => {
          const [lower, upper] = phrase.split(" ");
          return (
            <span
              key={i}
              className="flex items-center gap-10 font-heading text-xl sm:text-2xl"
            >
              <span className="italic text-cream/60">{lower}</span>
              <span className="font-extrabold uppercase text-cream">{upper}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
