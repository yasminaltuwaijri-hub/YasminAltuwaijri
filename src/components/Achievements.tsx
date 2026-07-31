"use client";

import { motion, useReducedMotion } from "framer-motion";
import { achievements, internships, leadership, skills } from "@/lib/content";

// Ordered manually, most recent first — CV dates use inconsistent formats
// (year ranges vs. month ranges), so a naive string sort would misorder them.
const timeline = [
  { ...internships[0], kind: "Internship" }, // Riyadh Hospital, May-Jun 2026
  { ...leadership[0], kind: "Leadership" }, // Student Council President, 2024-2025
  { ...internships[1], kind: "Internship" }, // Mukatafa Consulting, Jun-Jul 2024
  { ...leadership[2], kind: "Leadership" }, // Morocco Service Trip, Mar 2023
  { ...leadership[1], kind: "Leadership" }, // Youth Advocate, Sept-Nov 2022
];

export default function Achievements() {
  const reduce = useReducedMotion();

  return (
    <section
      id="achievements"
      className="mx-auto max-w-content border-t border-line px-6 py-10 sm:px-10 sm:py-14"
    >
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-blue">
        Achievements &amp; experience
      </h2>

      {/* Skills */}
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">Languages</h3>
          <ul className="mt-3 flex flex-col gap-1.5">
            {skills.languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between text-sm">
                <span className="text-ink">{l.name}</span>
                <span className="font-mono text-xs text-blue">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">Technical</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {[...skills.technical, ...skills.tools].map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">Core strengths</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.strengths.map((s) => (
              <span
                key={s}
                className="rounded-full bg-mint/15 px-3 py-1 font-mono text-xs text-mint"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-10 border-t border-line pt-9 lg:grid-cols-2 lg:gap-14">
        {/* Achievements list */}
        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
            Recognitions
          </h3>
          <ul className="mt-5 flex flex-col divide-y divide-line">
            {achievements.map((a, i) => {
              const accents = ["text-blue", "text-coral", "text-mint"];
              const accent = accents[i % accents.length];
              return (
                <motion.li
                  key={a.label + i}
                  initial={reduce ? {} : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex flex-col gap-1 py-4 first:pt-0"
                >
                  <span className={`font-display text-lg ${accent}`}>{a.label}</span>
                  <span className="text-sm text-soft">{a.detail}</span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Compact timeline */}
        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
            Internships &amp; leadership
          </h3>
          <ol className="mt-5 flex flex-col gap-6 border-l border-line pl-6">
            {timeline.map((item, i) => (
              <motion.li
                key={item.org + i}
                initial={reduce ? {} : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.62rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-mint"
                />
                <p className="font-mono text-[11px] uppercase tracking-wider text-blue">
                  {item.period} · {item.kind}
                </p>
                <p className="mt-1 font-display text-base text-ink">
                  {item.role} — {item.org}
                </p>
                <ul className="mt-2 flex flex-col gap-1">
                  {item.points.map((p) => (
                    <li key={p} className="text-sm leading-relaxed text-soft">
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
