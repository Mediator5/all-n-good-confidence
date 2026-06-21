import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "filled" | "outline";
  className?: string;
};

export default function PillButton({
  href,
  children,
  variant = "outline",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3 font-heading font-semibold text-sm transition-colors duration-200";
  const styles =
    variant === "filled"
      ? "bg-blue text-cream hover:bg-blue-dark"
      : "border-2 border-blue text-blue hover:bg-blue hover:text-cream";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
