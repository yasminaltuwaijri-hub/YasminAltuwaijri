"use client";

import { useLayoutEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const SESSION_KEY = "ya-intro-seen";
const DURATION_MS = 1400;

export default function LoadingScreen() {
  const reduce = useReducedMotion();
  // Always start visible so there's no flash of page content before this
  // mounts (sessionStorage can only be checked client-side, after mount).
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (seen || reduce) {
      setShow(false);
      return;
    }

    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
      setProgress(pct);
      if (elapsed < DURATION_MS) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem(SESSION_KEY, "1");
        document.body.style.overflow = "";
        setTimeout(() => setShow(false), 250);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink text-bg"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl italic tracking-tight sm:text-3xl"
          >
            Yasmin Altuwaijri
          </motion.p>

          <div className="mt-8 flex w-40 items-center gap-3 sm:w-56">
            <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-bg/20">
              <div
                className="h-full bg-blue transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="w-9 shrink-0 font-mono text-[11px] tabular-nums text-bg/60">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
