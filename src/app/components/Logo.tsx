import { motion } from "motion/react";

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <span className="text-xl tracking-tight text-foreground font-mono">
        <span className="text-muted-foreground">&lt;</span>
        saspian
        <span className="text-muted-foreground">/&gt;</span>
      </span>
    </motion.div>
  );
}
