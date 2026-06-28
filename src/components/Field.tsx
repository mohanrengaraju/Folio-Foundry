"use client";

export default function Field({
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
