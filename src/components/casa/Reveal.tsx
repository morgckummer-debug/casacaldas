import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const v: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] } },
};

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}