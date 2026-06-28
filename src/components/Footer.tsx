function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-footer-muted">
        {title}
      </div>
      <ul className="mt-4 space-y-2 font-display text-lg">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-footer-fg transition-colors hover:text-accent">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="studio" className="bg-footer text-footer-fg">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4 md:py-20">
        <div className="col-span-2">
          <div className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight">
            Folio
            <br />
            <span className="text-accent">&amp; Foundry</span>
          </div>
          <p className="mt-6 max-w-sm text-footer-muted">
            An independent design studio. We make things we'd want to keep.
          </p>
        </div>
        <FooterCol
          title="Studio"
          items={["About", "Process", "Journal", "Careers"]}
        />
        <FooterCol
          title="Connect"
          items={["Instagram", "Are.na", "Read.cv", "Dribbble"]}
        />
      </div>
      <div className="border-t border-footer-fg/15">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.2em] text-footer-muted md:flex-row md:justify-between">
          <span>© 2026 Folio &amp; Foundry</span>
          {/* <span>Set in Fraunces &amp; Inter · Built by hand</span> */}
        </div>
      </div>
    </footer>
  );
}
