import Link from "next/link";
import Container from "./Container";

const siteMap = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Values", href: "#values" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-blue py-14">
      <Container className="relative z-10">
        <h3 className="font-heading text-lg font-extrabold uppercase tracking-wide text-cream">
          Site Map
        </h3>
        <div className="mt-2 h-0.5 w-12 bg-cream" />

        <nav className="mt-6 flex flex-col gap-3">
          {siteMap.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body text-cream/90 hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#"
          className="mt-8 inline-block font-body text-cream/90 hover:text-cream"
        >
          Privacy Policy
        </Link>
        <p className="mt-2 font-body text-sm text-cream/50">
          &copy; {new Date().getFullYear()} All N&apos; Good Confidence
        </p>
      </Container>

      <p
        aria-hidden
        className="section-heading pointer-events-none -mb-6 select-none whitespace-nowrap pl-6 text-[22vw] leading-none text-cream/10 md:pl-10"
      >
        all good.
      </p>
    </footer>
  );
}
