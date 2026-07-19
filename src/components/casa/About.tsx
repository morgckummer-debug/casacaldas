import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import panorama from "@/assets/panorama.webp";
import detail from "@/assets/gallery-1.webp";
import { Reveal } from "./Reveal";
import { t, type Lang } from "@/lib/translations";

export function About({ lang }: { lang: Lang }) {
  const tr = t[lang].about;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yFloat = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  return (
    <section id="propriedade" className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid md:grid-cols-12 gap-12 mb-10 md:mb-16">
          <p className="eyebrow md:col-span-3">{tr.eyebrow}</p>
          <h2 className="md:col-span-9 font-display text-2xl md:text-4xl lg:text-5xl leading-[1.15] text-balance text-ink">
            {tr.heading}
          </h2>
        </Reveal>

        <div ref={ref} className="relative">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(30,20,10,0.45),0_10px_25px_-10px_rgba(0,0,0,0.3)]">
            <motion.div style={{ y }} className="absolute inset-0 -top-[8%] -bottom-[8%]">
              <img
                src={panorama}
                alt={tr.altPanorama}
                width={1920}
                height={1080}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div aria-hidden className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_20px_rgba(0,0,0,0.55)]" />
          </div>
          <motion.div
            style={{ y: yFloat }}
            className="hidden md:block absolute -bottom-20 right-4 lg:right-12 w-[28%] max-w-[280px] aspect-[3/4] overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(30,20,10,0.45),0_10px_25px_-10px_rgba(0,0,0,0.3)] ring-1 ring-background/40"
          >
            <img src={detail} alt={tr.altDetail} loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <div aria-hidden className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_15px_rgba(0,0,0,0.5)]" />
          </motion.div>
        </div>

        <Reveal className="mt-16 md:mt-20 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 md:col-start-2">
            <p className="font-display italic text-2xl md:text-3xl text-olive leading-snug">
              {tr.quote}
            </p>
          </div>
          <div className="md:col-span-5 text-muted-foreground leading-relaxed text-[0.95rem]">
            <p>{tr.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
