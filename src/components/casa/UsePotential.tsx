import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Hotel, Leaf, Heart, Users, Building } from "lucide-react";
import panorama from "@/assets/panorama.webp";
import { Reveal } from "./Reveal";
import { t, WA_URL, type Lang } from "@/lib/translations";

const ICONS = [Hotel, Leaf, Heart, Users, Building];

export function UsePotential({ lang }: { lang: Lang }) {
  const tr = t[lang].usePotential;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const waLink =
    lang === "pt"
      ? "https://wa.me/5531996225903?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20apresenta%C3%A7%C3%A3o%20completa%20sobre%20o%20potencial%20da%20Casa%20Caldas."
      : "https://wa.me/5531996225903?text=Hello%2C%20I%20would%20like%20to%20request%20a%20full%20presentation%20about%20the%20potential%20of%20Casa%20Caldas.";

  return (
    <>
      {/* Transition divider */}
      <div className="relative py-16 md:py-20 overflow-hidden bg-background" aria-hidden>
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center gap-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="eyebrow text-muted-foreground/60 shrink-0 tracking-[0.4em]">
            {tr.dividerLabel}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>

      {/* Main section */}
      <section id="potencial" className="bg-background">
        {/* Intro */}
        <div className="px-6 md:px-12 pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl">
            <Reveal className="grid md:grid-cols-12 gap-12 mb-14 md:mb-20">
              <p className="eyebrow md:col-span-3">{tr.eyebrow}</p>
              <h2 className="md:col-span-9 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-balance text-ink">
                {tr.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="grid md:grid-cols-12">
              <p className="md:col-span-7 md:col-start-4 text-muted-foreground leading-relaxed text-[1rem] md:text-[1.05rem]">
                {tr.intro}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Parallax image strip */}
        <div ref={ref} className="relative h-[55vw] max-h-[620px] min-h-[300px] w-full overflow-hidden">
          <motion.div style={{ y: yParallax }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
            <img
              src={panorama}
              alt={tr.parallaxAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          {/* gradient overlays for smooth blending */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.955 0.028 78) 0%, transparent 18%, transparent 82%, oklch(0.955 0.028 78) 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "rgba(20, 12, 4, 0.28)" }}
          />
          {/* Centered label on top of image */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <Reveal>
              <p className="font-display italic text-2xl md:text-3xl lg:text-4xl text-white/90 text-center text-balance drop-shadow-[0_2px_24px_rgba(0,0,0,0.7)] max-w-3xl">
                {tr.parallaxQuote}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Cards */}
        <div className="px-6 md:px-12 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {tr.cards.map((card, i) => {
                const Icon = ICONS[i];
                return (
                  <Reveal key={card.title} delay={i * 0.08}>
                    <div className="group relative flex flex-col gap-6 p-8 md:p-10 border border-border/60 rounded-sm bg-card/40 hover:bg-card/80 hover:border-gold/40 transition-all duration-700 hover:shadow-[0_20px_50px_-15px_rgba(30,20,10,0.2)]">
                      {/* Icon */}
                      <div className="w-9 h-9 flex items-center justify-center text-gold/70 group-hover:text-gold transition-colors duration-500">
                        <Icon size={22} strokeWidth={1.2} />
                      </div>
                      {/* Number */}
                      <span className="absolute top-8 right-8 font-sans text-[0.65rem] tracking-[0.3em] text-muted-foreground/40 group-hover:text-gold/50 transition-colors duration-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl text-ink mb-3 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-muted-foreground text-[0.92rem] leading-relaxed">
                          {card.text}
                        </p>
                      </div>
                      {/* Subtle bottom accent line */}
                      <div className="mt-auto pt-4 border-t border-border/40 group-hover:border-gold/25 transition-colors duration-700">
                        <div className="w-6 h-px bg-gold/30 group-hover:w-12 group-hover:bg-gold/60 transition-all duration-700" />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Bottom quote + CTA */}
            <Reveal delay={0.2} className="mt-24 md:mt-32 text-center">
              <p className="font-display italic text-3xl md:text-4xl lg:text-5xl text-ink/80 text-balance max-w-3xl mx-auto leading-[1.2]">
                {tr.closingQuote}
              </p>
              <div className="mt-12 flex justify-center">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-9 py-4 border border-ink/25 hover:border-gold/70 text-ink/70 hover:text-ink font-sans text-[0.78rem] tracking-[0.25em] uppercase transition-all duration-500 hover:bg-ink/[0.03] rounded-sm group"
                >
                  <span>{tr.cta}</span>
                  <span className="text-gold/50 group-hover:text-gold transition-colors duration-500 translate-x-0 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
