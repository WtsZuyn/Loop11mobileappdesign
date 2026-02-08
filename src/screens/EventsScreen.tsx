import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

const filters = ["All", "Workshops", "Swap", "Coffee", "Talks"];

const events = [
  {
    id: 1,
    name: "Mending Circle",
    date: "Feb 24",
    time: "3:00 PM",
    location: "LOOP11 Studio",
    description: "Bring what's broken. Leave with stories.",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1753162658307-a2fdbb4c8a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNyZWF0aXZlJTIwcGVvcGxlJTIwc2V3aW5nfGVufDF8fHx8MTc3MDU0MTkzMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Sunday Swap Day",
    date: "Mar 03",
    time: "11:00 AM",
    location: "Community Garden",
    description: "Your clothes, new stories. Trade, share, loop.",
    category: "Swap",
    image: "https://images.unsplash.com/photo-1727365179808-29da21035f86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMHN3YXAlMjBzdXN0YWluYWJsZSUyMGV2ZW50fGVufDF8fHx8MTc3MDU0MTkzMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Coffee Conversations",
    date: "Feb 20",
    time: "9:00 AM",
    location: "LOOP11 Cafe",
    description: "No agenda. Just presence and pour-overs.",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1748895177768-b4a54b9c2954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwcml0dWFsJTIwcG91ciUyMG92ZXJ8ZW58MXx8fHwxNzcwNTQxNDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function EventsScreen() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center gap-4">
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
          Community Events
        </motion.h2>
      </div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="px-6 py-4 mb-8"
      >
        <p className="text-muted-foreground leading-relaxed">
          Workshops, swap days, slow rituals.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                selectedFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Events List */}
      <div className="px-6 space-y-6 mb-8">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.15, duration: 0.8 }}
            className="rounded-3xl overflow-hidden bg-card border border-border"
          >
            <div className="aspect-[16/9] overflow-hidden relative">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs">
                  {event.date}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2 text-foreground">{event.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {event.description}
              </p>
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>
              <button
                onClick={() => navigate(`/event/${event.id}`)}
                className="w-full py-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                View details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Join Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="px-6"
      >
        <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg mb-2 text-foreground">Join the Loop</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Members get early access to events and workshops.
          </p>
          <button
            onClick={() => navigate("/community")}
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity"
          >
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
}
