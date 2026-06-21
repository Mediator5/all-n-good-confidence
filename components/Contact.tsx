"use client";

import { useState } from "react";
import Container from "./Container";
import Reveal from "./Reveal";

const inputClass =
  "w-full rounded-lg border border-brown/30 bg-white px-4 py-3 font-body text-brown-dark placeholder:text-brown/50 transition-colors focus:border-blue focus:outline-none";

const labelClass = "font-heading text-base font-bold text-brown-dark";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to your form handler (API route, Formspree, etc.)
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-cream py-16 md:py-24">
      <Container>
        <Reveal>
          <h2 className="section-heading text-4xl text-blue sm:text-5xl">
            Get in touch
          </h2>
        </Reveal>

        {submitted ? (
          <p className="mt-10 max-w-md font-body text-lg text-brown-dark">
            Thanks for reaching out — we&apos;ll be in touch soon.
          </p>
        ) : (
          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="mt-10 max-w-4xl space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="name">
                    Name <span className="text-sm font-normal italic">(Required)</span>
                  </label>
                  <input id="name" name="name" required placeholder="Jane Doe" className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="company">
                    Company
                  </label>
                  <input id="company" name="company" placeholder="Acme Inc." className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="phone">
                    Phone number <span className="text-sm font-normal italic">(Required)</span>
                  </label>
                  <input id="phone" name="phone" required placeholder="(000) 000-0000" className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="email">
                    Email <span className="text-sm font-normal italic">(Required)</span>
                  </label>
                  <input id="email" name="email" type="email" required placeholder="your@email.com" className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className={labelClass} htmlFor="companySize">
                    Company Size <span className="text-sm font-normal italic">(Required)</span>
                  </label>
                  <select id="companySize" name="companySize" required className={inputClass}>
                    <option value="">Select one</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelClass} htmlFor="message">
                  What&apos;s got you reaching out? <span className="text-sm font-normal italic">(Required)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={500}
                  rows={5}
                  placeholder="Type your answer here"
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-3 font-body text-brown-dark">
                  <input type="checkbox" name="newsletter" className="h-5 w-5 accent-blue" />
                  Subscribe to our newsletter
                </label>
                <label className="flex items-start gap-3 font-body text-sm text-brown-dark">
                  <input type="checkbox" name="sms" className="mt-1 h-5 w-5 accent-blue" />
                  <span>
                    By checking this box, you agree to receive text messages from
                    All N&apos; Good Confidence. Text and data rates may apply.
                    Message frequency varies. Reply STOP to unsubscribe or HELP
                    for help.
                  </span>
                </label>
              </div>

              <button type="submit">
                <span className="inline-flex items-center justify-center rounded-pill border-2 border-blue px-8 py-3 font-heading font-bold text-blue transition-colors hover:bg-blue hover:text-cream">
                  Send
                </span>
              </button>
            </form>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
