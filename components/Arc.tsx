export default function Arc({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arc-decor absolute ${className}`}
      width="220"
      height="120"
      viewBox="0 0 220 120"
      fill="none"
    >
      <path d="M10 110C10 60 55 15 110 15s100 45 100 95" stroke="#2A1A0F" strokeWidth="2" />
      <path d="M30 110c0-44 36-80 80-80s80 36 80 80" stroke="#1E4D8C" strokeWidth="2" />
      <path d="M50 110c0-33 27-60 60-60s60 27 60 60" stroke="#D9C2A0" strokeWidth="2" />
    </svg>
  );
}
