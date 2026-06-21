import Link from "next/link";
import Container from "./Container";
import PillButton from "./PillButton";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Values", href: "#values" },
  { label: "Careers", href: "#careers" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 shadow-sm backdrop-blur-sm">
      <Container className="flex items-center justify-between py-5">
        <Link
          href="#top"
          className="font-heading text-xl font-extrabold text-blue tracking-tight"
        >
          All N&apos; Good<span className="text-brown-dark">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-semibold text-brown-dark transition-colors hover:text-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <PillButton href="#contact">Get in touch</PillButton>
      </Container>
    </header>
  );
}
