import { motion } from "motion/react";
import heroImg from "@/assets/hero-casa.webp";
import { t, WA_URL, type Lang } from "@/lib/translations";

export function Hero({ lang }: { lang: Lang }) {
  const tr = t[lang].hero;
  return (
    <section id="top" className="relative h-[60vh] min-h-[600px] md:min-h-[560px] w-full overflow-hidden bg-ink">
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

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center text-background">
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 2.7 }}
          className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[0.65rem] md:text-[0.7rem] tracking-[0.2em] uppercase text-background/75"
        >
          {tr.facts.split(" · ").map((fact, i) => (
            <span key={fact} className="whitespace-nowrap">
              {i > 0 && (
                <span aria-hidden className="hidden sm:inline mr-3">
                  ·
                </span>
              )}
              {fact}
            </span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contato"
            className="inline-block border border-background/60 px-9 py-4 text-[0.7rem] tracking-[0.3em] uppercase hover:bg-background hover:text-ink transition-all duration-700"
          >
            {tr.cta}
          </a>
          <a
            href={WA_URL[lang]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#25D366] bg-[#25D366] px-9 py-4 text-[0.7rem] tracking-[0.3em] uppercase text-white hover:bg-[#1ebe5d] hover:border-[#1ebe5d] transition-all duration-700"
          >
            {tr.ctaWhatsapp}
          </a>
        </motion.div>
      </div>

    </section>
  );
}
