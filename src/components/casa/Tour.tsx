import { useState, useEffect, useCallback } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "./Reveal";
import { t, type Lang } from "@/lib/translations";

const VIDEO_ID = "06RaumEowAU";
const POSTER = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;

export function Tour({ lang }: { lang: Lang }) {
  const tr = t[lang].tour;
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <section id="tour" className="py-16 md:py-24 px-6 md:px-12 bg-ink text-background">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow text-background/60">{tr.eyebrow}</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl text-balance">
            {tr.heading}
          </h2>
          {tr.body && (
            <p className="mt-6 text-background/70 max-w-xl mx-auto text-[0.95rem] leading-relaxed">
              {tr.body}
            </p>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <button
            onClick={() => setOpen(true)}
            className="relative aspect-[16/9] w-full max-w-2xl mx-auto overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(30,20,10,0.45),0_10px_25px_-10px_rgba(0,0,0,0.3)] transition-shadow duration-700 group cursor-pointer hover:shadow-[0_40px_80px_-20px_rgba(30,20,10,0.55),0_15px_35px_-10px_rgba(0,0,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold block"
            aria-label={tr.watch}
          >
            <img
              src={POSTER}
              alt={tr.altPoster}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[2500ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-700" />
            <div aria-hidden className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_20px_rgba(0,0,0,0.55)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-background/70 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-gold group-hover:border-gold transition-all duration-700">
                  <Play className="w-7 h-7 ml-1 fill-current" strokeWidth={1} />
                </div>
                <span className="eyebrow text-background/80">{tr.watch}</span>
              </div>
            </div>
          </button>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 z-10 text-white/60 hover:text-white transition-colors duration-200"
              aria-label="Fechar"
            >
              <X size={26} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl aspect-[16/9]"
              onClick={e => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title={tr.altPoster}
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full rounded-sm"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
