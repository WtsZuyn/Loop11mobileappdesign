import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft, Calendar, Users, Heart, ArrowRight } from "lucide-react";

const communityContent = {
  hero: {
    title: "Community Loop",
    philosophy: "You don't join a loop. You already are the loop. Community isn't built — it's recognized, nurtured, and shared.",
  },
  events: [
    {
      id: 1,
      title: "Mending Circle",
      date: "Every Sunday, 3pm",
      description: "Bring what's broken. Leave with stories.",
      image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHBlb3BsZSUyMGNvbGxhYm9yYXRpdmUlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzA1NDE1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "Coffee Conversations",
      date: "Tuesdays & Thursdays",
      description: "No agenda. Just presence.",
      image: "https://images.unsplash.com/photo-1770129966271-04cc27e82bda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBldmVudCUyMGdhdGhlcmluZyUyMGhhbmRzfGVufDF8fHx8MTc3MDU0MTUwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],
  benefits: [
    { icon: Calendar, title: "Early Access", description: "First to know about workshops & events" },
    { icon: Users, title: "The Circle", description: "Connect with like-minded souls" },
    { icon: Heart, title: "Give Back", description: "Support circular initiatives together" },
  ],
};

export function CommunityLoopScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

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
          {communityContent.hero.title}
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
          {communityContent.hero.philosophy}
        </p>
      </motion.div>

      {/* Events */}
      <div className="px-6 space-y-6 mb-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl text-foreground">Upcoming Gatherings</h3>
          <button
            onClick={() => navigate("/events")}
            className="text-sm text-primary flex items-center gap-1 hover:gap-2 transition-all"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        {communityContent.events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.15, duration: 0.8 }}
            className="overflow-hidden rounded-3xl bg-card border border-border"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-primary mb-2">{event.date}</p>
              <h4 className="text-xl mb-2 text-foreground">{event.title}</h4>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="px-6 mb-12"
      >
        <h3 className="text-2xl mb-6 text-foreground">What Being in the Loop Means</h3>
        <div className="space-y-4">
          {communityContent.benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="flex gap-4 p-6 rounded-3xl bg-muted/50"
              >
                <div className="p-3 rounded-2xl bg-primary/10 h-fit">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl mb-1 text-foreground">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Join Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="px-6"
      >
        <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20">
          <h3 className="text-2xl mb-3 text-foreground">Join the Loop</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Be the first to hear about gatherings, workshops, and community moments.
          </p>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 mb-4 rounded-full bg-background border border-border focus:outline-none focus:border-primary transition-colors text-foreground"
          />
          <button className="w-full bg-primary text-primary-foreground py-4 rounded-full hover:opacity-90 transition-opacity">
            Count Me In
          </button>
        </div>
      </motion.div>
    </div>
  );
}