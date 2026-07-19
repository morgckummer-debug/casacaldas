import receber from "@/assets/gallery-4.webp";
import contemplar from "@/assets/gallery-6.webp";
import relaxar from "@/assets/exp-relaxar.webp";
import celebrar from "@/assets/gallery-5.webp";
import { Reveal } from "./Reveal";
import { t, type Lang } from "@/lib/translations";

const imgs = [receber, contemplar, relaxar, celebrar];

export function Experiences({ lang }: { lang: Lang }) {
  const tr = t[lang].experiences;
  const items = tr.items.map((item, i) => ({ ...item, img: imgs[i] }));

  return (
    <section id="experiencias" className="py-16 md:py-24 px-6 md:px-12 bg-sand">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid md:grid-cols-12 gap-12 mb-10">
          <p className="eyebrow md:col-span-3">{tr.eyebrow}</p>
          <h2 className="md:col-span-9 font-display text-3xl md:text-5xl text-ink leading-tight text-balance">
            {tr.heading}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.1} className={i % 2 === 1 ? "md:mt-12" : ""}>
              <div className="group">
                <div className="relative overflow-hidden aspect-[4/5] rounded-sm shadow-[0_30px_60px_-20px_rgba(30,20,10,0.45),0_10px_25px_-10px_rgba(0,0,0,0.3)] transition-shadow duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(30,20,10,0.55),0_15px_35px_-10px_rgba(0,0,0,0.4)]">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div aria-hidden className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_20px_rgba(0,0,0,0.55)]" />
                </div>
                <div className="mt-6 flex items-baseline gap-6">
                  <span className="font-sans text-[0.7rem] tracking-[0.3em] text-gold">{it.n}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-ink">{it.title}</h3>
                </div>
                <p className="mt-4 max-w-md text-muted-foreground text-[0.95rem] leading-relaxed">
                  {it.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
