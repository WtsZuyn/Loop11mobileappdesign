import { motion } from "motion/react";

interface LoopWormProps {
  size?: number;
  className?: string;
}

export function LoopWorm({ size = 80, className = "" }: LoopWormProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Loop worm body - gentle circular path */}
        <motion.path
          d="M 50 20 C 65 20, 80 35, 80 50 C 80 65, 65 80, 50 80 C 35 80, 20 65, 20 50 C 20 35, 35 20, 50 20"
          stroke="#6B8E7F"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
        
        {/* Parallel line (11 motif) */}
        <motion.path
          d="M 50 15 C 68 15, 85 32, 85 50 C 85 68, 68 85, 50 85 C 32 85, 15 68, 15 50 C 15 32, 32 15, 50 15"
          stroke="#6B8E7F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{
            duration: 2,
            delay: 0.3,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
}
