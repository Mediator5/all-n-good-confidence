"use client";

import { useState, useEffect, useRef } from "react";

interface Props {
  role: string | null;
  onClose: () => void;
}

const inputClass =
  "w-full rounded-lg border border-brown/30 bg-white px-4 py-3 font-body text-brown-dark placeholder:text-brown/50 transition-colors focus:border-blue focus:outline-none";

const labelClass = "block font-heading text-sm font-bold text-brown-dark mb-1";

export default function CareerModal({ role, onClose }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  // Reset state when role changes (new modal open)
  useEffect(() => {
    if (role) {
      setStatus("idle");
      setErrorMsg("");
    }
  }, [role]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (role) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [role]);

  if (!role) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      role,
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      linkedin: fd.get("linkedin"),
      why: fd.get("why"),
      extra: fd.get("extra"),
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-end justify-center bg-brown-darker/70 backdrop-blur-sm sm:items-center"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="relative w-full max-h-[92dvh] overflow-y-auto rounded-t-2xl bg-cream sm:max-w-2xl sm:rounded-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b-2 border-blue/20 bg-cream px-8 py-6">
          <div>
            <p className="font-heading text-xs font-semibold uppercase tracking-widest text-blue">
              Applying for
            </p>
            <h2 className="font-heading text-2xl font-extrabold text-brown-dark">
              {role}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-brown-dark/50 transition-colors hover:bg-blue/10 hover:text-blue"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          {status === "sent" ? (
            <div className="py-10 text-center">
              <p className="font-heading text-3xl font-extrabold text-blue">
                Application sent!
              </p>
              <p className="mt-3 font-body text-brown-dark/80">
                We&apos;ve got your application for <strong>{role}</strong>. We&apos;ll
                be in touch if there&apos;s a fit.
              </p>
              <button
                onClick={onClose}
                className="mt-8 inline-flex items-center justify-center rounded-pill bg-blue px-8 py-3 font-heading font-bold text-cream transition-colors hover:bg-blue-dark"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name <span className="text-blue">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-blue">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(000) 000-0000"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="linkedin" className={labelClass}>
                    LinkedIn or Portfolio URL
                  </label>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    placeholder="https://..."
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="why" className={labelClass}>
                  Why do you want to join All N&apos; Good Confidence?{" "}
                  <span className="text-blue">*</span>
                </label>
                <textarea
                  id="why"
                  name="why"
                  required
                  rows={4}
                  maxLength={800}
                  placeholder="Tell us what draws you to this role and what you'd bring to the team."
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div>
                <label htmlFor="extra" className={labelClass}>
                  Anything else we should know?
                </label>
                <textarea
                  id="extra"
                  name="extra"
                  rows={3}
                  maxLength={500}
                  placeholder="Side projects, context, anything relevant — or leave it blank."
                  className={`${inputClass} resize-y`}
                />
              </div>

              {status === "error" && (
                <p className="rounded-lg bg-red-50 px-4 py-3 font-body text-sm text-red-700">
                  {errorMsg}
                </p>
              )}

              <div className="flex items-center justify-end gap-4 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="font-heading text-sm font-semibold text-brown-dark/60 hover:text-brown-dark"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-pill bg-blue px-8 py-3 font-heading font-bold text-cream transition-colors hover:bg-blue-dark disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send Application"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
