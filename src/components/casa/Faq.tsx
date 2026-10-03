import { Reveal } from "./Reveal";
import { t, type Lang } from "@/lib/translations";

export function Faq({ lang }: { lang: Lang }) {
  const tr = t[lang].faq;
  return (
    <section id="faq" className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-10">
          <p className="eyebrow">{tr.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink">{tr.heading}</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border-t border-border">
            {tr.items.map((item) => (
              <details key={item.q} className="group border-b border-border py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl md:text-2xl text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden
                    className="text-gold text-2xl leading-none transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-muted-foreground text-[0.95rem] leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
