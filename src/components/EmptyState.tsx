import { motion } from "motion/react";
import { LoopWorm } from "./LoopWorm";

interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center py-16 px-6 text-center"
    >
      <LoopWorm size={80} />
      <h3 className="text-xl mt-6 mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground max-w-xs leading-relaxed">{description}</p>
    </motion.div>
  );
}
