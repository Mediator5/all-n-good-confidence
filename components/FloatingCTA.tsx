"use client";

import { useEffect, useState } from "react";
import PillButton from "./PillButton";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 600);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <PillButton href="#contact" variant="filled" className="shadow-lg shadow-blue-dark/30">
        Let&apos;s talk
      </PillButton>
    </div>
  );
}
