"use client";

import { useEffect, useState, type FormEvent } from "react";
import hero from "@/assets/hero.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export default function Home() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav dark={dark} onToggle={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:flex md:justify-between">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span
            aria-hidden
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-foreground text-background"
          >
            <span className="font-display text-lg leading-none">F</span>
          </span>
          <span className="truncate font-display text-lg font-semibold tracking-tight">
            Folio & Foundry
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] md:flex">
          <a href="#services" className="hover:text-accent">Services</a>
          <a href="#work" className="hover:text-accent">Work</a>
          <a href="#studio" className="hover:text-accent">Studio</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={onToggle}
            className="grid h-9 w-9 place-items-center rounded-full border border-foreground/20 text-sm hover:bg-foreground hover:text-background"
          >
            {dark ? "☀" : "☾"}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-background hover:bg-accent md:inline-block"
          >
            Start a project →
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-foreground/10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pt-14 pb-20 md:grid-cols-12 md:gap-8 md:pt-24 md:pb-32">
        <div className="md:col-span-7">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-10 bg-foreground/40" />
            Est. 2014 · Lisbon / New York
          </div>
          <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] font-300 leading-[0.92] tracking-tight">
            Design that <em className="text-accent not-italic italic">earns</em>
            <br />
            its place.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            We're a fourteen-person studio building brand identities,
            digital products, and editorial systems for teams who refuse
            to sound like everyone else.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-background transition hover:bg-accent"
            >
              View the work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-foreground/30 px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background"
            >
              Start a project
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-foreground/15 grain">
            <img
              src={hero.src}
              alt="Editorial collage of brutalist typography fragments"
              className="h-full w-full object-cover"
              width={1280}
              height={1280}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rotate-[-4deg] rounded-sm border border-foreground/15 bg-card px-4 py-3 shadow-[6px_6px_0_var(--ink)] md:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Issue Nº 47
            </p>
            <p className="font-display text-sm">Field Notes from the Studio</p>
          </div>
          <div className="absolute -top-4 right-4 hidden h-20 w-20 place-items-center rounded-full bg-accent text-background sm:grid">
            <span className="rotate-[-12deg] text-center font-display text-xs leading-tight">
              Booking
              <br />
              Q3 2026
            </span>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t border-foreground/10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-foreground/10 px-6 md:grid-cols-4 md:divide-x">
          {[
            ["12yrs", "in practice"],
            ["140+", "shipped projects"],
            ["28", "design awards"],
            ["94%", "client repeat rate"],
          ].map(([n, l]) => (
            <div key={l} className="py-6 md:px-6">
              <div className="font-display text-4xl tracking-tight md:text-5xl">{n}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = [
    "Brand Systems",
    "★",
    "Digital Products",
    "★",
    "Editorial",
    "★",
    "Packaging",
    "★",
    "Art Direction",
    "★",
    "Type Design",
    "★",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-foreground/10 bg-foreground py-5 text-background">
      <div className="marquee flex w-max gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display text-2xl tracking-tight md:text-3xl"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  {
    n: "01",
    title: "Brand Identity",
    desc: "Names, marks, type systems, and the documentation that keeps them alive after we leave.",
    items: ["Strategy & naming", "Visual identity", "Guidelines"],
  },
  {
    n: "02",
    title: "Digital Product",
    desc: "End-to-end design for marketing sites, dashboards, and the messy bits in between.",
    items: ["UX & research", "Design systems", "Build with engineering"],
  },
  {
    n: "03",
    title: "Editorial & Print",
    desc: "Books, magazines, reports, and packaging — designed with respect for the page.",
    items: ["Art direction", "Typesetting", "Print production"],
  },
  {
    n: "04",
    title: "Studio Consulting",
    desc: "Embedded with your team to raise the quality bar — workshops, audits, and critique.",
    items: ["Design audits", "Team workshops", "Hiring & process"],
  },
];

function Services() {
  return (
    <section id="services" className="border-b border-foreground/10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:py-32">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <SectionLabel n="01" label="What we do" />
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[0.95] tracking-tight">
              Four practices.
              <br />
              <span className="text-muted-foreground">One studio.</span>
              <br />
              <em className="text-accent not-italic italic">No</em> deck
              templates.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Every engagement is led by a partner and shaped to the work — not
              to a process diagram. Pick a practice, or commission across all
              four.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-foreground/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              6 engagements open · Q3 2026
            </div>
          </div>
        </div>

        <ol className="md:col-span-7">
          {services.map((s, i) => (
            <li
              key={s.n}
              className={`group relative grid grid-cols-[auto_1fr] gap-6 py-10 transition-colors first:pt-0 md:gap-10 md:py-12 ${
                i !== services.length - 1 ? "border-b border-foreground/15" : ""
              }`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-1/2 h-px w-0 -translate-y-1/2 bg-accent transition-all duration-500 group-hover:w-10"
              />
              <div className="flex flex-col items-start gap-3">
                <span className="font-display text-5xl leading-none text-muted-foreground transition-colors group-hover:text-accent md:text-6xl">
                  {s.n}
                </span>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:block">
                  /pr
                </span>
              </div>
              <div className="min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {s.title}
                  </h3>
                  <span
                    aria-hidden
                    className="mt-2 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-foreground/20 font-mono text-xs transition-all duration-500 group-hover:bg-foreground group-hover:text-background group-hover:rotate-[-45deg]"
                  >
                    →
                  </span>
                </div>
                <p className="mt-3 max-w-lg text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO ---------- */
const projects = [
  { img: work1, title: "Kellfora Skincare", tag: "Brand · Packaging", year: "2025", span: "md:col-span-7 md:row-span-2" },
  { img: work2, title: "Ashion Atelier", tag: "Identity", year: "2025", span: "md:col-span-5" },
  { img: work3, title: "Hearth Museum", tag: "Wayfinding · Web", year: "2024", span: "md:col-span-5" },
  { img: work4, title: "Northwind OS", tag: "Product Design", year: "2025", span: "md:col-span-7" },
  { img: work5, title: "Risograph Quarterly", tag: "Editorial", year: "2024", span: "md:col-span-5" },
  { img: work6, title: "Curio Coffee Bar", tag: "Brand · Signage", year: "2026", span: "md:col-span-7" },
];

function Portfolio() {
  return (
    <section id="work" className="border-b border-foreground/10 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel n="02" label="Selected work" />
            <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,6vw,5rem)] leading-[0.95] tracking-tight">
              A small index of recent obsessions.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] hover:text-accent"
          >
            Full archive on request →
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href="#contact"
              className={`group relative block overflow-hidden rounded-sm border border-foreground/15 bg-background ${p.span}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:h-full md:min-h-[360px]">
                <img
                  src={p.img.src}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-5 text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:p-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-background/70">
                      {String(i + 1).padStart(2, "0")} / {p.tag} · {p.year}
                    </div>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl">
                      {p.title}
                    </h3>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-background">
                    →
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between p-5 transition-opacity duration-300 group-hover:opacity-0">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.tag}
                  </div>
                  <h3 className="mt-1 font-display text-xl tracking-tight md:text-2xl">
                    {p.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {p.year}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [state, setState] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!state.name.trim()) e.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
      e.email = "A working email, please.";
    if (state.message.trim().length < 10)
      e.message = "Even a sentence or two helps.";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setState({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="border-b border-foreground/10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <SectionLabel n="03" label="Say hello" />
          <h2 className="mt-6 font-display text-[clamp(2.25rem,6vw,5rem)] leading-[0.95] tracking-tight">
            Tell us what
            <br />
            you're <em className="text-accent not-italic">making.</em>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            We reply within two business days. The studio takes on six new
            engagements per year — earlier is better.
          </p>

          <dl className="mt-10 space-y-5 font-mono text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </dt>
              <dd className="mt-1">hello@folioandfoundry.studio</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Studio
              </dt>
              <dd className="mt-1">Rua das Flores 32, Lisboa 1200-194</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-7">
          {sent ? (
            <div className="rounded-sm border border-foreground/20 bg-card p-10 shadow-[8px_8px_0_var(--ink)]">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Message received ✓
              </div>
              <h3 className="mt-4 font-display text-3xl tracking-tight">
                Thank you. We'll be in touch.
              </h3>
              <p className="mt-3 text-muted-foreground">
                Expect a reply from one of the partners within two business
                days.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 font-mono text-xs uppercase tracking-[0.2em] underline hover:text-accent"
              >
                Send another →
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="space-y-8 rounded-sm border border-foreground/15 bg-card p-8 md:p-10"
            >
              <Field
                id="name"
                label="01 · Your name"
                value={state.name}
                error={errors.name}
                onChange={(v) => setState((s) => ({ ...s, name: v }))}
                placeholder="Ada Lovelace"
              />
              <Field
                id="email"
                label="02 · Email"
                type="email"
                value={state.email}
                error={errors.email}
                onChange={(v) => setState((s) => ({ ...s, email: v }))}
                placeholder="ada@studio.com"
              />
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  03 · Project brief
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={state.message}
                  onChange={(e) =>
                    setState((s) => ({ ...s, message: e.target.value }))
                  }
                  placeholder="Tell us about the work, timeline, and budget range."
                  className="mt-2 w-full resize-none border-0 border-b border-foreground/30 bg-transparent py-3 font-sans text-lg outline-none placeholder:text-muted-foreground/60 focus:border-accent"
                />
                {errors.message && (
                  <p className="mt-2 font-mono text-xs text-accent">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  We respect your inbox. No newsletter.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-background transition hover:bg-accent"
                >
                  Send brief
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full border-0 border-b border-foreground/30 bg-transparent py-3 font-sans text-lg outline-none placeholder:text-muted-foreground/60 focus:border-accent"
      />
      {error && (
        <p className="mt-2 font-mono text-xs text-accent">{error}</p>
      )}
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer id="studio" className="bg-foreground text-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4 md:py-20">
        <div className="col-span-2">
          <div className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight">
            Folio
            <br />
            <span className="text-accent">& Foundry</span>
          </div>
          <p className="mt-6 max-w-sm text-background/70">
            An independent design studio. We make things we'd want to keep.
          </p>
        </div>
        <FooterCol
          title="Studio"
          items={["About", "Process", "Journal", "Careers"]}
        />
        <FooterCol
          title="Elsewhere"
          items={["Instagram", "Are.na", "Read.cv", "Dribbble"]}
        />
      </div>
      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.2em] text-background/60 md:flex-row md:justify-between">
          <span>© 2026 Folio & Foundry, Lda.</span>
          <span>Set in Fraunces & Inter · Made by hand</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-background/50">
        {title}
      </div>
      <ul className="mt-4 space-y-2 font-display text-lg">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-accent">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Shared ---------- */
function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
      <span className="text-accent">[{n}]</span>
      <span className="h-px w-10 bg-foreground/30" />
      {label}
    </div>
  );
}
