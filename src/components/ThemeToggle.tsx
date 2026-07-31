"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="group relative flex h-9 w-16 items-center rounded-full border border-line bg-surface px-1 transition-colors duration-300 ease-signature hover:border-blue/60"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-blue text-bg shadow-sm transition-transform duration-300 ease-signature ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {mounted && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="transition-opacity"
          >
            {isDark ? (
              <path
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                fill="currentColor"
              />
            ) : (
              <circle cx="12" cy="12" r="5" fill="currentColor" />
            )}
          </svg>
        )}
      </span>
      <span className="sr-only">Toggle color theme</span>
    </button>
  );
}
