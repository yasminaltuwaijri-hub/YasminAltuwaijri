import { education } from "@/lib/content";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-line bg-blue/15 px-6 py-10 sm:px-10 sm:py-14"
    >
      <div className="mx-auto max-w-content grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-blue">
            About
          </h2>
          <p className="mt-4 max-w-xs font-display text-display-md text-ink">
            A quantitative mind with a habit of getting involved.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {[
              "Student Council President ('24–'25)",
              "Co-Founder, Leaptern (acquired)",
              "Silver Medalist, Boxing",
            ].map((h) => (
              <span
                key={h}
                className="rounded-full bg-coral/10 px-3 py-1.5 font-mono text-xs text-coral"
              >
                {h}
              </span>
            ))}
          </div>

          <div className="mt-3 grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
            {education.map((ed) => (
              <div key={ed.school}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-blue">
                  {ed.period}
                </p>
                <p className="mt-1.5 font-display text-lg text-ink">{ed.school}</p>
                <p className="text-sm text-soft">{ed.program}</p>
                <p className="mt-1 text-xs text-soft/80">{ed.location}</p>
                {ed.note && (
                  <p className="mt-2 text-xs leading-relaxed text-soft/80">{ed.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
