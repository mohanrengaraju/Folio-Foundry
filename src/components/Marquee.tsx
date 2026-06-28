export default function Marquee() {
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
