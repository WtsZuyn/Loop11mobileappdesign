import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowRight, Info } from "lucide-react";

const todayLoop = {
  title: "Today's Loop",
  subtitle: "Sunday Slowness",
  description: "A gentle reminder to wear what you love, sip with intention, and connect with purpose.",
};

const loopEntries = [
  {
    id: "fashion",
    title: "Fashion Loop",
    subtitle: "Circular by design",
    description: "Wear, rewear, repair, reloop",
    route: "/fashion",
    image: "https://images.unsplash.com/photo-1762539297259-2bb6eea568e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3VzdGFpbmFibGUlMjBmYXNoaW9uJTIwb3JnYW5pY3xlbnwxfHx8fDE3NzA1NDE0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "coffee",
    title: "Coffee Loop",
    subtitle: "Ritual & presence",
    description: "Every cup tells a story",
    route: "/coffee",
    image: "https://images.unsplash.com/photo-1748895177768-b4a54b9c2954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwcml0dWFsJTIwcG91ciUyMG92ZXJ8ZW58MXx8fHwxNzcwNTQxNDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "community",
    title: "Community Loop",
    subtitle: "Belong, share, grow",
    description: "You're already part of it",
    route: "/community",
    image: "https://images.unsplash.com/photo-1764046176035-9b7190f67bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjB3YXJtJTIwcGVvcGxlfGVufDF8fHx8MTc3MDU0MTQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center justify-between">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-foreground"
        >
          LOOP11
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate("/about")}
          className="p-2 rounded-full hover:bg-muted transition-colors"
        >
          <Info className="w-5 h-5 text-muted-foreground" />
        </motion.button>
      </div>

      {/* Hero Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="px-6 py-12"
      >
        <p className="text-muted-foreground text-sm mb-2">{todayLoop.title}</p>
        <h1 className="text-4xl mb-4 text-foreground">{todayLoop.subtitle}</h1>
        <p className="text-muted-foreground leading-relaxed max-w-sm">
          {todayLoop.description}
        </p>
      </motion.div>

      {/* Loop Entries */}
      <div className="px-6 pb-12 space-y-6">
        {loopEntries.map((loop, index) => (
          <motion.button
            key={loop.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.15, duration: 0.8 }}
            onClick={() => navigate(loop.route)}
            className="w-full group"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-muted">
              <img
                src={loop.image}
                alt={loop.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <p className="text-primary-foreground/70 text-sm mb-1">{loop.subtitle}</p>
                <h3 className="text-2xl text-primary-foreground mb-2">{loop.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-primary-foreground/80 text-sm">{loop.description}</p>
                  <ArrowRight className="w-5 h-5 text-primary-foreground transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </motion.button>
        ))}

        {/* Shop Entry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="pt-6"
        >
          <button
            onClick={() => navigate("/shop")}
            className="w-full p-6 rounded-3xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all text-left"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary text-sm mb-1">New</p>
                <h3 className="text-xl text-foreground mb-1">Shop the Loop</h3>
                <p className="text-sm text-muted-foreground">Curated objects for circular living</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            </div>
          </button>
        </motion.div>

        {/* Events Entry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
        >
          <button
            onClick={() => navigate("/events")}
            className="w-full p-6 rounded-3xl bg-muted/30 border border-border hover:border-primary/30 transition-all text-left"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl text-foreground mb-1">Community Events</h3>
                <p className="text-sm text-muted-foreground">Workshops, swaps, slow rituals</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}