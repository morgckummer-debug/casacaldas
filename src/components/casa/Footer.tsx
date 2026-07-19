import { t, type Lang } from "@/lib/translations";

export function Footer({ lang }: { lang: Lang }) {
  const tr = t[lang].footer;
  return (
    <footer className="bg-ink text-background/70 px-6 md:px-12 py-14">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="font-display text-2xl text-background tracking-[0.2em]">CASA · CALDAS</p>
        <p className="text-[0.7rem] tracking-[0.25em] uppercase">
          © {new Date().getFullYear()} · Teófilo Otoni · {tr.rights}
        </p>
      </div>
    </footer>
  );
}
