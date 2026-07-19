import { Reveal } from "./Reveal";
import { t, type Lang } from "@/lib/translations";

export function Info({ lang }: { lang: Lang }) {
  const tr = t[lang].info;
  return (
    <section id="informacoes" className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-16">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">{tr.eyebrow}</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl text-ink leading-tight">
            {tr.headingLine1}<br /> {tr.headingLine2}
          </h2>

          <div className="mt-16 pt-10 border-t border-border">
            <p className="eyebrow mb-4">{tr.priceLabel}</p>
            <p className="font-display text-5xl md:text-6xl text-olive">R$ 4.100.000</p>
            <p className="mt-3 text-muted-foreground italic font-display text-lg">
              {tr.priceNote}
            </p>
          </div>

          <div className="mt-10 pt-10 border-t border-border grid grid-cols-2 gap-6">
            <div>
              <p className="eyebrow mb-2">{tr.areaTotal}</p>
              <p className="font-display text-3xl text-ink">5.250 m²</p>
            </div>
            <div>
              <p className="eyebrow mb-2">{tr.areaBuilt}</p>
              <p className="font-display text-3xl text-ink">1.000 m²</p>
            </div>
          </div>

          <a
            href="#contato"
            className="mt-12 inline-block border border-ink text-ink px-8 py-4 text-[0.7rem] tracking-[0.3em] uppercase hover:bg-ink hover:text-background transition-all duration-700"
          >
            {tr.cta}
          </a>
        </Reveal>

        <Reveal className="md:col-span-7" delay={0.1}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
            {tr.features.map((f, i) => (
              <li
                key={f}
                className="flex items-baseline gap-5 py-5 border-b border-border text-ink"
              >
                <span className="text-[0.7rem] tracking-[0.3em] text-gold font-sans">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl md:text-2xl">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
