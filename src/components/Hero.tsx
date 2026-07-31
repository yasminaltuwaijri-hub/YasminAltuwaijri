"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { heroPhotos, personal } from "@/lib/content";

const IDENTITY_PHRASES = [
  "builder & operator",
  "competitive athlete — Kingdom Cup medalist",
  "trilingual — EN · AR · FR",
  "always somewhere new",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % IDENTITY_PHRASES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [reduce]);

  useEffect(() => {
    if (reduce || heroPhotos.length < 2) return;
    const interval = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % heroPhotos.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [reduce]);

  const fadeUp = (delay = 0) => ({
    initial: reduce ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-content flex-col gap-8 px-6 pb-10 pt-8 sm:px-10 sm:pb-14 sm:pt-12 lg:flex-row lg:items-end lg:gap-8"
    >
      <div className="flex-1">
        <motion.p
          {...fadeUp(0)}
          className="font-mono text-xs uppercase tracking-[0.2em] text-blue"
        >
          {personal.locations.join(" · ")}
        </motion.p>

        <motion.h1
          {...fadeUp(0.08)}
          className="mt-5 font-display text-display-xl font-medium text-balance text-ink"
        >
          {personal.firstName}
          <br />
          <span className="italic text-soft">Altuwaijri</span>
        </motion.h1>

        <motion.div {...fadeUp(0.14)} className="mt-5 h-6 overflow-hidden font-mono text-sm text-coral">
          <AnimatePresence mode="wait">
            <motion.span
              key={reduce ? "static" : phraseIndex}
              initial={reduce ? {} : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? {} : { y: -16, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {reduce ? IDENTITY_PHRASES[0] : IDENTITY_PHRASES[phraseIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          {...fadeUp(0.18)}
          dir="auto"
          className="mt-5 max-w-prose text-lg leading-relaxed text-soft sm:text-xl"
        >
          {personal.tagline}
        </motion.p>

        <motion.div {...fadeUp(0.28)} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#achievements"
            className="rounded-full bg-ink px-6 py-3 font-body text-sm font-medium text-bg transition-transform duration-300 ease-signature hover:scale-[1.03] hover:bg-coral"
          >
            See what I've done
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 font-body text-sm font-medium text-ink transition-colors duration-300 hover:border-blue hover:text-blue"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.2)}
        className="flex w-full max-w-xs flex-col gap-4 lg:max-w-sm"
      >
        {/* Photo slideshow — crossfades between heroPhotos. */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-line">
          <AnimatePresence mode="sync">
            <motion.div
              key={reduce ? "static" : photoIndex}
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={heroPhotos[reduce ? 0 : photoIndex]}
                alt="Yasmin Altuwaijri"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 384px, 100vw"
              />
            </motion.div>
          </AnimatePresence>

          {heroPhotos.length > 1 && (
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
              {heroPhotos.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                    (reduce ? 0 : photoIndex) === i ? "bg-blue" : "bg-line"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <dl className="grid grid-cols-2 gap-3 rounded-2xl border border-line bg-surface/60 p-4 font-mono text-xs text-soft">
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-blue">Studying</dt>
            <dd className="mt-1 text-ink">Mathematics and Computer Science</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-blue">Languages</dt>
            <dd className="mt-1 text-ink">EN · AR · FR</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-blue">Led</dt>
            <dd className="mt-1 text-ink">Student Council President</dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-wider text-blue">Last exit</dt>
            <dd className="mt-1 text-ink">Leaptern.net — acquired</dd>
          </div>
        </dl>
      </motion.div>
    </section>
  );
}
