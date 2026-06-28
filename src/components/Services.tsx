import SectionLabel from "@/components/SectionLabel";

const services = [
  {
    n: "01",
    title: "Brand Identity",
    desc: "We build logos, type systems, and brand guidelines that actually get used after handoff — not buried in a shared drive.",
    items: ["Strategy & naming", "Visual identity", "Guidelines"],
    icon: "◎",
  },
  {
    n: "02",
    title: "Digital Product",
    desc: "Websites, dashboards, apps — from first wireframe to final handoff with your engineers. We stay until it ships.",
    items: ["UX & research", "Design systems", "Dev collaboration"],
    icon: "⬡",
  },
  {
    n: "03",
    title: "Editorial & Print",
    desc: "Books, magazines, annual reports, and packaging. If it gets printed or published, we probably want to work on it.",
    items: ["Art direction", "Typesetting", "Print production"],
    icon: "△",
  },
  {
    n: "04",
    title: "Studio Consulting",
    desc: "We join your team for a stretch — running workshops, reviewing work, and helping you hire better designers.",
    items: ["Design audits", "Team workshops", "Hiring & process"],
    icon: "◆", // changed to a valid icon
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-foreground/10 pb-8 md:pb-12">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 md:pt-24">
        {/* Centered section header */}
        <div className="mx-auto max-w-2xl text-center mb-16 md:mb-24">
          {/* <SectionLabel n="OUR SERVICES" label="" className="justify-center text-accent" /> */}
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] tracking-tight">
            What We Do
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground mx-auto max-w-xl">
            End-to-end design solutions that help brands look sharp,
            communicate clearly, and grow with purpose.
          </p>
        </div>
        {/* Service cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.n}
              className="service-card group relative flex flex-col overflow-hidden rounded-sm border border-foreground/15 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-accent"
            >
              {/* Card top accent line (thicker on hover) */}
              <div className="h-1 w-12 bg-accent/0 transition-all duration-500 group-hover:w-full group-hover:bg-accent" />

              <div className="flex flex-1 flex-col p-7 pt-8">
                {/* Icon + Number row */}
                <div className="flex items-start justify-between">
                  <span
                    aria-hidden
                    className="grid h-12 w-12 place-items-center rounded-full bg-accent/10 text-xl text-foreground transition-colors duration-500 group-hover:bg-accent/10"
                  >
                    {s.icon}
                  </span>
                  <span className="font-display text-2xl text-accent transition-colors duration-500">
                    {s.n}
                  </span>
                </div>
                {/* Title */}
                <h3 className="mt-8 font-display text-2xl tracking-tight transition-transform duration-500">
                  {s.title}
                </h3>
                {/* Description */}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                {/* Divider */}
                <div className="my-6 h-px w-full bg-foreground/10" />
                {/* Tags (2 column grid) */}
                <ul className="grid grid-cols-2 gap-x-2 gap-y-3 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span className="truncate">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Bottom hover arrow */}
              <div className="flex items-center justify-between border-t border-foreground/10 px-7 py-5 transition-colors duration-500 group-hover:border-foreground/5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Learn more
                </span>
                <span
                  aria-hidden
                  className="grid h-8 w-8 place-items-center rounded-full border border-foreground/20 font-mono text-xs transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-background"
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom text block */}
        <div className="mt-6 flex items-center justify-center gap-4 text-center">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
            ✦
          </span>
          <p className="text-sm text-muted-foreground">
            Every project is different. Every solution is intentional.{" "}
            <br className="sm:hidden" />
            <strong className="text-foreground">Let's build something great together.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
