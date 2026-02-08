import { motion } from "motion/react";

export function LoadingLoop() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            stroke="#6B8E7F"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            strokeDasharray="188.5"
            initial={{ strokeDashoffset: 188.5 }}
            animate={{ strokeDashoffset: [188.5, 0, 188.5] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </svg>
        <motion.p
          className="text-xs text-muted-foreground mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          Finding the rhythm...
        </motion.p>
      </motion.div>
    </div>
  );
}
