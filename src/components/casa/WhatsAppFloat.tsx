import { motion } from "motion/react";
import { WA_URL, type Lang } from "@/lib/translations";

export function WhatsAppFloat({ lang }: { lang: Lang }) {
  return (
    <motion.a
      href={WA_URL[lang]}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3.2, duration: 1 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-20 right-6 md:bottom-24 md:right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] flex items-center justify-center hover:bg-[#1ebe5d] transition-colors duration-500"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.9], opacity: [0.55, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1, delay: 4 }}
      />
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current relative z-10" aria-hidden="true">
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.27-1.38a9.9 9.9 0 0 0 4.72 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01ZM12.05 20.13h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.13.82.83-3.05-.19-.31a8.18 8.18 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.25-8.23a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.12-.11.25-.29.38-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.34-.76-1.84-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.42.06-.65.31-.22.25-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.12.17 1.71 2.62 4.16 3.67.58.25 1.03.4 1.39.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
      </svg>
    </motion.a>
  );
}
