import Image from "next/image";
import hero from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-foreground/10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pt-14 pb-20 md:grid-cols-12 md:gap-8 md:pt-24 md:pb-32">
        <div className="md:col-span-7">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-10 bg-foreground/40" />
            Est. 2014 · Chennai
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
            <Image
              src={hero}
              alt="Editorial collage of brutalist typography fragments"
              className="h-full w-full object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rotate-[-4deg] rounded-sm border border-foreground/15 bg-card px-4 py-3 shadow-[6px_6px_0_var(--ink)] md:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Issue Nº 47
            </p>
            <p className="font-display text-sm">Field Notes from the Studio</p>
          </div>
          <div className="absolute -top-4 -right-1 hidden h-18 w-18 place-items-center rounded-full bg-accent text-background sm:grid">
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
