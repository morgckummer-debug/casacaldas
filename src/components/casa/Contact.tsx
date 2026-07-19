import { Reveal } from "./Reveal";
import { t, WA_LUCIANO, WA_WAGNER, type Lang } from "@/lib/translations";

export function Contact({ lang }: { lang: Lang }) {
  const tr = t[lang].contact;

  return (
    <section id="contato" className="py-16 md:py-24 px-6 md:px-12 bg-sand">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center mb-10">
          <p className="eyebrow">{tr.eyebrow}</p>
          <h2 className="mt-8 font-display text-4xl md:text-6xl text-ink leading-[1.05] text-balance">
            {tr.headingPre}<em className="italic text-olive">{tr.headingEm}</em>{tr.headingPost}
          </h2>
        </Reveal>

        <Reveal className="space-y-10">
          <div>
            <p className="eyebrow mb-3">{tr.locationLabel}</p>
            <p className="font-display text-2xl text-ink">
              {tr.locationValue[0]}<br />{tr.locationValue[1]}
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">{tr.directLabel}</p>
            <p className="font-display text-2xl text-ink">
              Luciano ·{" "}
              <a href={WA_LUCIANO[lang]} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-olive transition-colors duration-300">
                +55 (31) 99622-5903
              </a>
            </p>
            <p className="font-display text-2xl text-ink mt-2">
              Wagner ·{" "}
              <a href={WA_WAGNER[lang]} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-olive transition-colors duration-300">
                +55 (31) 98820-5150
              </a>
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">{tr.attendanceLabel}</p>
            <p className="font-display text-2xl text-ink">
              {tr.attendanceValue[0]}<br />{tr.attendanceValue[1]}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

