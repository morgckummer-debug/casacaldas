import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import g1 from "@/assets/gallery-1.webp";
import g2 from "@/assets/gallery-2.webp";
import g3 from "@/assets/gallery-3.webp";
import g4 from "@/assets/gallery-4.webp";
import g5 from "@/assets/gallery-5.webp";
import g6 from "@/assets/gallery-6.webp";
import g7 from "@/assets/gallery-7.webp";
import g8 from "@/assets/gallery-8.webp";
import g9 from "@/assets/gallery-9.webp";
import g10 from "@/assets/gallery-10.webp";
import g11 from "@/assets/gallery-11.webp";
import g12 from "@/assets/gallery-12.webp";
import { Reveal } from "./Reveal";
import { t, type Lang } from "@/lib/translations";

const srcs = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

export function Gallery({ lang }: { lang: Lang }) {
  const tr = t[lang].gallery;
  const images = tr.images.map((img, i) => ({ ...img, src: srcs[i] }));

  const [active, setActive] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = useCallback((dir: "left" | "right") => {
    carouselRef.current?.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  }, []);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive(i => i !== null ? (i - 1 + images.length) % images.length : null), [images.length]);
  const next = useCallback(() => setActive(i => i !== null ? (i + 1) % images.length : null), [images.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <section id="galeria" className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex items-end justify-between mb-10 gap-8 flex-wrap">
          <div>
            <p className="eyebrow">{tr.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl text-ink">{tr.heading}</h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-[0.95rem]">
            {tr.description}
          </p>
        </Reveal>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scrollCarousel("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-background/90 backdrop-blur-sm border border-border text-foreground hover:text-gold transition-colors duration-300 shadow-md -translate-x-1/2"
            aria-label={tr.ariaPrev}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-x-auto gallery-scroll" ref={carouselRef}>
          <div className="flex gap-3 pb-3" style={{ width: "max-content" }}>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group relative flex-shrink-0 w-52 h-36 md:w-72 md:h-48 overflow-hidden rounded-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <span className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[0.65rem] tracking-[0.2em] uppercase text-white/80 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {img.caption}
                </span>
              </button>
            ))}
          </div>
          </div>

          <button
            onClick={() => scrollCarousel("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-background/90 backdrop-blur-sm border border-border text-foreground hover:text-gold transition-colors duration-300 shadow-md translate-x-1/2"
            aria-label={tr.ariaNext}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 md:p-10"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-5 z-10 text-white/60 hover:text-white transition-colors duration-200"
              aria-label={tr.ariaClose}
            >
              <X size={26} />
            </button>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-6 z-10 text-white/50 hover:text-white transition-colors duration-200"
              aria-label={tr.ariaPrev}
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={images[active].src}
                alt={images[active].alt}
                decoding="async"
                className="w-full max-h-[78vh] object-contain rounded-sm shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
              />
              <figcaption className="mt-4 text-center eyebrow text-white/50">
                — {images[active].caption}
              </figcaption>
            </motion.figure>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-6 z-10 text-white/50 hover:text-white transition-colors duration-200"
              aria-label={tr.ariaNext}
            >
              <ChevronRight size={36} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setActive(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === active ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"}`}
                  aria-label={`${tr.ariaImagePrefix} ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
