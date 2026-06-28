  import Image from "next/image";
  import SectionLabel from "@/components/SectionLabel";
  import work1 from "@/assets/work-1.jpg";
  import work2 from "@/assets/work-2.jpg";
  import work3 from "@/assets/work-3.jpg";
  import work4 from "@/assets/work-4.jpg";
  import work5 from "@/assets/work-5.jpg";
  import work6 from "@/assets/work-6.jpg";

  const projects = [
    { img: work1, title: "Kellfora Skincare", tag: "Brand · Packaging", year: "2025", span: "md:col-span-7 md:row-span-2" },
    { img: work2, title: "Ashion Atelier", tag: "Identity", year: "2025", span: "md:col-span-5" },
    { img: work3, title: "Hearth Museum", tag: "Wayfinding · Web", year: "2024", span: "md:col-span-5" },
    { img: work4, title: "Northwind OS", tag: "Product Design", year: "2025", span: "md:col-span-7" },
    { img: work5, title: "Risograph Quarterly", tag: "Editorial", year: "2024", span: "md:col-span-5" },
    { img: work6, title: "Curio Coffee Bar", tag: "Brand · Signage", year: "2026", span: "md:col-span-7" },
  ];

  export default function Portfolio() {
    return (
      <section id="work" className="border-b border-foreground/10 bg-secondary/40">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 md:pt-16 pb-20 md:pb-32">
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
                className={`group relative block overflow-hidden rounded-sm border border-foreground/15 bg-background ${p.span} ${i === projects.length - 1 ? "md:col-start-4" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:h-full md:min-h-[360px]">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
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
