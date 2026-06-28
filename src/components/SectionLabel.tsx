export default function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
      <span className="text-accent">[{n}]</span>
      <span className="h-px w-10 bg-foreground/30" />
      {label}
    </div>
  );
}
