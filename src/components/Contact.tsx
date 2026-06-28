"use client";

import { useState, type FormEvent } from "react";
import SectionLabel from "@/components/SectionLabel";

const hearOptions = [
  "Google / Search",
  "Social media",
  "A friend or colleague",
  "Blog or article",
  "Previous client",
  "Other",
];

export default function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    hearAbout: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!state.name.trim()) e.name = "We need your name to get back to you.";
    if (!state.email.trim()) {
      e.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      e.email = "That doesn't look like a valid email.";
    }
    if (!state.message.trim()) {
      e.message = "Tell us a bit about what you're working on.";
    } else if (state.message.trim().length < 10) {
      e.message = "A little more detail would help — even a sentence or two.";
    }
    if (!state.consent) {
      e.consent = "Please agree before submitting.";
    }
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setState({ name: "", email: "", message: "", hearAbout: "", consent: false });
    }
  };

  return (
    <section id="contact" className="border-b border-foreground/10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:py-32">
        {/* Left column — intro + contact info */}
        <div className="md:col-span-5">
          <SectionLabel n="03" label="Get in touch" />
          <h2 className="mt-6 font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95] tracking-tight">
            Let's build
            <br />
            something <em className="text-accent not-italic">great.</em>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Have a idea in mind, Drop us a message           </p>

          {/* Contact cards */}
          <div className="mt-10 space-y-4">
            <a
              href="mailto:hello@folioandfoundry.studio"
              className="group flex items-center gap-4 rounded-sm border border-foreground/10 px-5 py-4 transition-colors hover:border-accent/40 hover:bg-accent/[0.03]"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/15 text-base text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                ✉
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </div>
                <div className="mt-0.5 truncate font-mono text-sm">
                  hello@folioandfoundry.studio
                </div>
              </div>
              <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-sm border border-foreground/10 px-5 py-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/15 text-base text-muted-foreground">
                ◉
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Studio
                </div>
                <div className="mt-0.5 font-mono text-sm">
                  Anna Nagar, Chennai
                </div>
              </div>
            </div>
 
            {/* <div className="flex items-center gap-4 rounded-sm border border-foreground/10 px-5 py-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/15 text-base text-muted-foreground">
                ◔
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Hours
                </div>
                 <div className="mt-0.5 font-mono text-sm">
                  Mon – Fri
                  <br />
                  10:00 – 18:00 (GMT)
                </div> 
              </div>
            </div> */}
          </div> 

           {/* <p className="mt-8 text-sm text-muted-foreground">
            Prefer something old-school?{" "}
            <a href="#" className="text-foreground underline hover:text-accent">
              Send us a letter.
            </a>
          </p>  */}
        </div> 

        {/* Right column — form */}
        <div className="md:col-span-7">
          {sent ? (
            <div className="rounded-sm border border-foreground/20 bg-card p-10 shadow-[8px_8px_0_var(--ink)]">
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-2xl text-accent">
                ✓
              </div>
              <h3 className="font-display text-3xl tracking-tight">
                Thanks — we'll be in touch soon.
              </h3>
              {/* <p className="mt-3 text-muted-foreground">
                One of the partners will reply within 2–3 business days. Keep
                an eye on your inbox.
              </p> */}
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 font-mono text-xs uppercase tracking-[0.2em] underline hover:text-accent"
              >
                Send another message →
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="space-y-6 rounded-sm border border-foreground/15 bg-card p-8 md:p-10"
            >
              {/* Name + Email in one row */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={state.name}
                    onChange={(e) => {
                      setState((s) => ({ ...s, name: e.target.value }));
                      clearError("name");
                    }}
                    placeholder="e.g. Sarah Chen"
                    className="mt-2 w-full rounded-sm border border-foreground/15 bg-transparent px-4 py-3 font-sans text-base outline-none placeholder:text-muted-foreground/50 focus:border-accent"
                  />
                  {errors.name && (
                    <p className="mt-1.5 font-mono text-xs text-accent">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={state.email}
                    onChange={(e) => {
                      setState((s) => ({ ...s, email: e.target.value }));
                      clearError("email");
                    }}
                    placeholder="e.g. sarah@company.com"
                    className="mt-2 w-full rounded-sm border border-foreground/15 bg-transparent px-4 py-3 font-sans text-base outline-none placeholder:text-muted-foreground/50 focus:border-accent"
                  />
                  {errors.email && (
                    <p className="mt-1.5 font-mono text-xs text-accent">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Project details textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={state.message}
                  onChange={(e) => {
                    setState((s) => ({ ...s, message: e.target.value }));
                    clearError("message");
                  }}
                  placeholder="Tell us about your project, timeline, and budget..."
                  className="mt-2 w-full resize-none rounded-sm border border-foreground/15 bg-transparent px-4 py-3 font-sans text-base outline-none placeholder:text-muted-foreground/50 focus:border-accent"
                />
                {errors.message && (
                  <p className="mt-1.5 font-mono text-xs text-accent">{errors.message}</p>
                )}
              </div>

              {/* How did you hear about us */}
              <div>
                <label
                  htmlFor="hearAbout"
                  className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  How did you hear about us?
                </label>
                <div className="relative mt-2">
                  <select
                    id="hearAbout"
                    value={state.hearAbout}
                    onChange={(e) =>
                      setState((s) => ({ ...s, hearAbout: e.target.value }))
                    }
                    className="w-full appearance-none rounded-sm border border-foreground/15 bg-transparent px-4 py-3 pr-10 font-sans text-base outline-none focus:border-accent"
                  >
                    <option value="">Select an option</option>
                    {hearOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    ▾
                  </span>
                </div>
              </div>

              {/* Consent checkbox */}
              <div>
                <label className="flex cursor-pointer items-start gap-3">
                  <div className="relative mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                    <input
                      type="checkbox"
                      checked={state.consent}
                      onChange={(e) => {
                        setState((s) => ({ ...s, consent: e.target.checked }));
                        clearError("consent");
                      }}
                      className="peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-foreground/30 bg-transparent checked:border-accent checked:bg-accent transition-colors"
                    />
                    <svg
                      className="pointer-events-none absolute h-3 w-3 text-background opacity-0 peer-checked:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={4}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <a href="#" className="text-foreground underline hover:text-accent">
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted.
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1.5 pl-7 font-mono text-xs text-accent">{errors.consent}</p>
                )}
              </div>

              {/* Submit button — full width */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-foreground px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-background transition hover:bg-accent"
              >
                Send message
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>

              {/* Bottom note */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span className="text-accent">✓</span>
                No spam, ever.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
