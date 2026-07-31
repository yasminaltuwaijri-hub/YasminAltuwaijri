"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { hobbyPhotos, likesIntro } from "@/lib/content";

const tint = [
  { border: "border-blue/40", wash: "from-blue/25" },
  { border: "border-coral/40", wash: "from-coral/25" },
  { border: "border-mint/40", wash: "from-mint/25" },
  { border: "border-blue/40", wash: "from-coral/20" },
];

export default function ThingsILikeToDo() {
  const reduce = useReducedMotion();

  return (
    <section
      id="likes"
      className="border-t border-line bg-mint/10 px-6 py-10 sm:px-10 sm:py-14"
    >
      <div className="mx-auto max-w-content">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-mint">
          Things I like to do
        </h2>
        <p className="mt-4 max-w-xl font-display text-display-md text-balance text-ink">
          {likesIntro}
        </p>

        {/* --- Sports, food & fitness --- */}
        <div className="mt-9">
          <h3 className="font-mono text-[11px] uppercase tracking-wider text-blue">
            Fitness
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {hobbyPhotos.map((photo, i) => {
              const t = tint[i % tint.length];
              return (
                <motion.figure
                  key={photo.id}
                  initial={reduce ? {} : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div
                    className={`relative flex aspect-[3/4] w-full items-center justify-center overflow-hidden rounded-lg border ${t.border} bg-gradient-to-br ${t.wash} to-surface transition-transform duration-500 ease-signature group-hover:scale-[1.02]`}
                  >
                    {photo.ready ? (
                      <Image
                        src={photo.imageSrc}
                        alt={photo.caption}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 25vw, 50vw"
                      />
                    ) : (
                      <span
                        role="img"
                        aria-label={`Placeholder photo — ${photo.category}`}
                        className="px-4 text-center font-mono text-[11px] leading-relaxed text-soft"
                      >
                        photo
                        <br />
                        <span className="opacity-70">{photo.imageSrc}</span>
                      </span>
                    )}
                  </div>
                  <figcaption className="mt-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-soft">
                      {photo.category}
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-soft">{photo.caption}</p>
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
