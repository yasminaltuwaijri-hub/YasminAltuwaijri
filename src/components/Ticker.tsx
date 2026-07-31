const words = [
  "MATH & CS",
  "MCMASTER",
  "FOUNDER",
  "ATHLETE",
  "RIYADH",
  "TORONTO",
  "LEADER",
];

export default function Ticker() {
  const line = words.join("   ·   ") + "   ·   ";

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-line bg-ink py-2.5"
    >
      <div className="animate-marquee flex w-max whitespace-nowrap">
        <span className="px-4 font-mono text-xs uppercase tracking-[0.2em] text-bg/70">
          {line}
        </span>
        <span className="px-4 font-mono text-xs uppercase tracking-[0.2em] text-bg/70">
          {line}
        </span>
      </div>
    </div>
  );
}
