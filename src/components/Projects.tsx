"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/content";

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <section
      id="projects"
      className="border-t border-line px-6 py-10 sm:px-10 sm:py-14"
    >
      <div className="mx-auto max-w-content">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-blue">
          Projects
        </h2>

        <ul className="mt-6 flex flex-col divide-y divide-line">
          {projects.map((project, i) => (
            <motion.li
              key={project.name}
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="py-5 first:pt-0"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              >
                <span className="flex flex-col gap-1">
                  <span className="font-display text-xl text-ink transition-colors group-hover:text-blue">
                    {project.name}
                  </span>
                  <span className="max-w-prose text-sm leading-relaxed text-soft">
                    {project.description}
                  </span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-blue">
                  {project.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-signature group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
