import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { t, type Lang } from "@/lib/translations";
import logoSrc from "@/assets/Logo.png";

export function Nav({ lang }: { lang: Lang }) {
  const tr = t[lang].nav;
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-3 flex items-center justify-between bg-ink/85 backdrop-blur-md"
      >
        {/* Logo + wordmark */}
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logoSrc}
            alt="Casa Caldas"
            className="h-14 w-auto"
          />
          <span className="text-background font-display text-lg tracking-[0.25em]">
            CASA · CALDAS
          </span>
        </a>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="text-background p-2 -mr-2"
        >
          <svg width="26" height="18" viewBox="0 0 26 18" fill="currentColor" aria-hidden="true">
            <rect y="0" width="26" height="2" rx="1" />
            <rect y="8" width="26" height="2" rx="1" />
            <rect y="16" width="26" height="2" rx="1" />
          </svg>
        </button>
      </motion.header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-50 bg-background flex flex-col px-8 md:px-14 py-6"
          >
            {/* Top row: logo + flags + close */}
            <div className="flex items-center justify-between mb-10">
              <a
                href="#top"
                className="flex items-center gap-3"
                onClick={() => setOpen(false)}
              >
                <img src={logoSrc} alt="Casa Caldas" className="h-14 w-auto" />
                <span className="font-display text-lg tracking-[0.25em] text-foreground">
                  CASA · CALDAS
                </span>
              </a>

              <div className="flex items-center gap-4">
                {/* Language switcher */}
                <div className="flex items-center gap-3">
                  <a
                    href="/"
                    aria-label="Português"
                    className={`transition-opacity duration-300 ${lang === "pt" ? "opacity-100" : "opacity-30 hover:opacity-70"}`}
                  >
                    <img src="https://flagcdn.com/w40/br.png" alt="Português" width={40} height={30} className="rounded-sm" />
                  </a>
                  <span className="text-foreground/20 text-xs">·</span>
                  <a
                    href="/en"
                    aria-label="English"
                    className={`transition-opacity duration-300 ${lang === "en" ? "opacity-100" : "opacity-30 hover:opacity-70"}`}
                  >
                    <img src="https://flagcdn.com/w40/gb.png" alt="English" width={40} height={30} className="rounded-sm" />
                  </a>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="text-foreground p-2 -mr-2"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <line x1="4" y1="4" x2="20" y2="20" strokeLinecap="round" />
                    <line x1="20" y1="4" x2="4" y2="20" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-5 flex-1 justify-center">
              {tr.links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.35 }}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl md:text-5xl text-foreground tracking-[0.1em] hover:text-gold transition-colors duration-300 leading-tight"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom: CTA */}
            <div className="flex items-center justify-end pt-6 border-t border-border mt-6">
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="text-foreground text-[0.7rem] tracking-[0.25em] uppercase border border-current px-5 py-3 hover:bg-gold hover:border-gold hover:text-ink transition-all duration-500"
              >
                {tr.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
