import { motion } from "motion/react";
import heroImg from "@/assets/hero-casa.webp";
import { t, type Lang } from "@/lib/translations";

export function Hero({ lang }: { lang: Lang }) {
  const tr = t[lang].hero;
  return (
    <section id="top" className="relative h-[60vh] w-full overflow-hidden bg-ink">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt={tr.imgAlt}
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.08)_100%)]" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-background">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1.2 }}
          className="eyebrow text-background/70"
        >
          {tr.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 font-display text-[3.2rem] md:text-[6rem] lg:text-[8rem] leading-[0.95] tracking-[0.05em]"
        >
          {tr.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 2.4 }}
          className="mt-8 max-w-xl font-display italic text-lg md:text-xl text-background/85 text-balance"
        >
          {tr.subtitle}
        </motion.p>

        <motion.a
          href="#contato"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
          className="mt-14 inline-block border border-background/60 px-9 py-4 text-[0.7rem] tracking-[0.3em] uppercase hover:bg-background hover:text-ink transition-all duration-700"
        >
          {tr.cta}
        </motion.a>
      </div>

    </section>
  );
}
