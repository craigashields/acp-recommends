"use client";

import { motion } from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
}

export function AnimatedCard({ children }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      layout
      transition={{
        opacity: { duration: 0.2 },
        layout: { duration: 0.3 },
        scale: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
}
