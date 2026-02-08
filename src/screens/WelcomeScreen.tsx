import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { LoopWorm } from "../components/LoopWorm";

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-between p-6 pb-12">
      {/* Logo area */}
      <div className="flex-1 flex items-center justify-center flex-col">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <LoopWorm size={120} />
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 text-5xl tracking-tight text-foreground"
        >
          LOOP11
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 text-center max-w-xs text-muted-foreground leading-relaxed"
        >
          A circular flow of mindful choices.
          Where fashion meets ritual,
          and community becomes home.
        </motion.p>
      </div>

      {/* CTA */}
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={() => navigate("/interests")}
        className="w-full max-w-sm bg-primary text-primary-foreground py-4 rounded-full hover:opacity-90 transition-opacity"
      >
        Enter the Loop
      </motion.button>
    </div>
  );
}
