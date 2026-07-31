"use client";

import { motion, useReducedMotion } from "framer-motion";
import { personal } from "@/lib/content";

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="border-t border-line bg-blue/15 px-6 py-10 sm:px-10 sm:py-14"
    >
      <div className="mx-auto max-w-content">
        <motion.h2
          initial={reduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl font-display text-display-lg text-balance text-ink"
        >
          Studying, building, and always up for the next thing.
        </motion.h2>

        <p className="mt-6 max-w-prose text-base leading-relaxed text-soft sm:text-lg">
          Whether that's an internship, a collaboration, or just a good
          conversation about an idea — reach out.
        </p>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <a
            href={`mailto:${personal.email}`}
            className="group inline-flex items-baseline gap-2 font-display text-2xl text-ink transition-colors hover:text-coral sm:text-3xl"
          >
            {personal.email}
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-300 ease-signature group-hover:translate-x-1"
            >
              →
            </span>
          </a>

          <div className="flex flex-col gap-2 font-mono text-sm text-soft">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-coral"
            >
              {personal.linkedinLabel}
            </a>
            {personal.phones.map((phone) => (
              <span key={phone}>{phone}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
