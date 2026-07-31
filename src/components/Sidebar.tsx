"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "likes", label: "Things I like to do" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("top");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // Treat the vertical middle band of the viewport as "current section"
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* Desktop side nav */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-56 flex-col justify-between border-r border-line bg-bg/95 px-7 py-10 backdrop-blur-md lg:flex">
        <div>
          <a
            href="#top"
            className="font-display text-lg font-medium leading-tight tracking-tight text-ink transition-colors hover:text-blue"
          >
            Yasmin
            <br />
            Altuwaijri
          </a>
          <nav aria-label="Section" className="mt-10">
            <ul className="flex flex-col gap-1">
              {sections.map((s) => {
                const active = activeId === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={active ? "true" : undefined}
                      className={`relative flex items-center gap-2 py-2 pl-3 font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:translate-x-1 ${
                        active ? "text-blue" : "text-soft hover:text-blue"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 rounded-full transition-colors duration-300 ${
                          active ? "bg-blue" : "bg-transparent"
                        }`}
                      />
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <ThemeToggle />
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 w-full border-b border-line/70 bg-bg/80 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between px-6 py-3.5">
          <a
            href="#top"
            className="font-display text-base font-medium tracking-tight text-ink hover:text-blue transition-colors"
          >
            Yasmin Altuwaijri
          </a>
          <ThemeToggle />
        </div>
        <nav aria-label="Section" className="border-t border-line/50 overflow-x-auto">
          <ul className="flex min-w-max items-center gap-5 px-6 py-2.5 font-mono text-[11px] uppercase tracking-wider text-soft">
            {sections.map((s) => {
              const active = activeId === s.id;
              return (
                <li key={s.id} className="shrink-0">
                  <a
                    href={`#${s.id}`}
                    aria-current={active ? "true" : undefined}
                    className={`transition-colors ${active ? "text-blue" : "hover:text-blue"}`}
                  >
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}
