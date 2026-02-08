import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

const coffeeContent = {
  hero: {
    title: "Coffee Loop",
    philosophy: "Coffee is not a transaction. It's a ritual, a pause, a conversation. It's the glue that binds moments.",
  },
  moments: [
    {
      id: 1,
      title: "The Origin",
      description: "Every bean tells a story of soil, sun, and hands that care",
      image: "https://images.unsplash.com/photo-1689610349731-94ae0e4c3892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0aW5nJTIwd2FybXxlbnwxfHx8fDE3NzA1NDE0NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "The Space",
      description: "Where light pools, conversation flows, and time slows",
      image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBtaW5pbWFsJTIwZGVzaWdufGVufDF8fHx8MTc3MDU0MTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "The Ritual",
      description: "Hands wrapped around warmth, thoughts wrapped in steam",
      image: "https://images.unsplash.com/photo-1758221056836-e5b235180762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBoYW5kcyUyMHJpdHVhbHxlbnwxfHx8fDE3NzA1NDE0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],
  menu: [
    { name: "Pour Over", note: "Slow extraction, full expression" },
    { name: "Espresso", note: "Concentrated intention" },
    { name: "Cold Brew", note: "Patience, rewarded" },
  ],
};

export function CoffeeLoopScreen() {
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
          {coffeeContent.hero.title}
        </motion.h2>
      </div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="px-6 py-8"
      >
        <p className="text-muted-foreground leading-relaxed text-lg">
          {coffeeContent.hero.philosophy}
        </p>
      </motion.div>

      {/* Moments */}
      <div className="space-y-0 mb-12">
        {coffeeContent.moments.map((moment, index) => (
          <motion.div
            key={moment.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.15, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={moment.image}
                alt={moment.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
              <h3 className="text-2xl mb-2 text-primary-foreground">{moment.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">{moment.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Menu Concept */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="px-6"
      >
        <h3 className="text-2xl mb-6 text-foreground">Our Rituals</h3>
        <div className="space-y-4">
          {coffeeContent.menu.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className="flex justify-between items-baseline p-6 rounded-3xl bg-card border border-border"
            >
              <h4 className="text-xl text-foreground">{item.name}</h4>
              <p className="text-sm text-muted-foreground text-right max-w-[50%]">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
