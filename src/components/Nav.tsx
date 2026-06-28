"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Nav({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-3 md:flex md:justify-between">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <Image
            src={logo}
            alt="Folio & Foundry logo"
            className="h-15 w-auto shrink-0 rounded-sm object-contain dark:invert"
            width={50}
            height={50}
          />
          <span className="truncate font-display text-xl tracking-tight">
            Folio <span className="text-accent">&amp; Foundry</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] md:flex">
          <a href="#services" className="hover:text-accent">Services</a>
          <a href="#work" className="hover:text-accent">Portfolio</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
          <a href="#studio" className="hover:text-accent">Studio</a>
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
