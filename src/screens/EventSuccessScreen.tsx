import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { LoopWorm } from "../components/LoopWorm";
import { Calendar } from "lucide-react";

export function EventSuccessScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      {/* Loop Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mb-8"
      >
        <LoopWorm size={100} />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-4xl mb-4 text-foreground text-center"
      >
        You're in the Loop
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="text-center text-muted-foreground mb-12 max-w-xs leading-relaxed"
      >
        We saved your seat. See you soon.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="w-full max-w-sm space-y-4"
      >
        <button className="w-full bg-primary text-primary-foreground py-4 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          <Calendar className="w-5 h-5" />
          Add to Calendar
        </button>
        <button
          onClick={() => navigate("/events")}
          className="w-full text-muted-foreground"
        >
          Back to Events
        </button>
      </motion.div>
    </div>
  );
}
