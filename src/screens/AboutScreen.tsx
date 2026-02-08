import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { LoopWorm } from "../components/LoopWorm";

const aboutContent = {
  hero: {
    title: "About LOOP11",
    subtitle: "The name carries meaning",
  },
  sections: [
    {
      title: "LOOP",
      content: "A circle has no beginning and no end. It's continuous, regenerative, intentional. LOOP represents our commitment to circular living — where nothing is wasted, everything finds purpose, and cycles honor connection over consumption.",
    },
    {
      title: "11",
      content: "Two parallel lines. Two entities moving together. Brand and user. Product and community. Fashion and coffee. We're not separate — we move in tandem, creating something greater than the sum of parts.",
    },
    {
      title: "The Loop Worm",
      content: "Our gentle companion. A minimalist caterpillar that forms a perfect loop. It represents transformation, patience, and the beauty of slow change. You'll see it in quiet moments — when things are loading, when spaces are empty, when transitions happen. Never loud. Always present.",
    },
  ],
  philosophy: {
    title: "Our Philosophy",
    points: [
      "Circular over linear",
      "Ritual over routine",
      "Community over commerce",
      "Intention over impulse",
      "Presence over pace",
    ],
  },
};

export function AboutScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Header */}
      <div className="px-6 pt-12 pb-8 flex items-center gap-4">
        <button
          onClick={() => navigate("/home")}
          className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl text-foreground"
        >
          {aboutContent.hero.title}
        </motion.h2>
      </div>

      {/* Mascot Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="flex justify-center py-8"
      >
        <LoopWorm size={100} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="px-6 py-4 text-center"
      >
        <p className="text-muted-foreground leading-relaxed">
          {aboutContent.hero.subtitle}
        </p>
      </motion.div>

      {/* Meaning Sections */}
      <div className="px-6 space-y-12 my-12">
        {aboutContent.sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl mb-4 text-foreground">{section.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="px-6"
      >
        <h3 className="text-2xl mb-6 text-foreground">{aboutContent.philosophy.title}</h3>
        <div className="space-y-3">
          {aboutContent.philosophy.points.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              className="flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/30 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-foreground text-lg">{point}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Back to Home */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="px-6 mt-12"
      >
        <button
          onClick={() => navigate("/home")}
          className="w-full bg-primary text-primary-foreground py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Back to The Loop
        </button>
      </motion.div>
    </div>
  );
}
