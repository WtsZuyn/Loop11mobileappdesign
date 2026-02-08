import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Calendar, MapPin, Users, Heart } from "lucide-react";

const eventData: Record<string, any> = {
  "1": {
    name: "Mending Circle",
    date: "Sunday, Feb 24",
    time: "3:00 PM - 5:00 PM",
    location: "LOOP11 Studio, Main Space",
    description: "Join us for an afternoon of slow repair and mindful conversation. Bring garments that need mending, or simply come to learn. All skill levels welcome — this is about process, not perfection.",
    image: "https://images.unsplash.com/photo-1753162658307-a2fdbb4c8a67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNyZWF0aXZlJTIwcGVvcGxlJTIwc2V3aW5nfGVufDF8fHx8MTc3MDU0MTkzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    agenda: [
      "Gather & settle in with tea",
      "Introduction to visible mending techniques",
      "Open mending session with guidance",
    ],
    capacity: "Limited to 12 participants",
  },
  "2": {
    name: "Sunday Swap Day",
    date: "Sunday, Mar 03",
    time: "11:00 AM - 3:00 PM",
    location: "Community Garden, North Pavilion",
    description: "Bring pieces you no longer wear and discover new favorites. One person's past becomes another's present. Trading, sharing, and celebrating circular fashion together.",
    image: "https://images.unsplash.com/photo-1727365179808-29da21035f86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMHN3YXAlMjBzdXN0YWluYWJsZSUyMGV2ZW50fGVufDF8fHx8MTc3MDU0MTkzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    agenda: [
      "Drop off your swap items (10:30 AM - 11:30 AM)",
      "Browse and trade (11:30 AM - 2:30 PM)",
      "Closing circle & refreshments",
    ],
    capacity: "Open to all, space for 40 people",
  },
  "3": {
    name: "Coffee Conversations",
    date: "Tuesday, Feb 20",
    time: "9:00 AM - 11:00 AM",
    location: "LOOP11 Cafe, Main Counter",
    description: "No agenda. No presentations. Just slow coffee and genuine connection. Bring your questions, your curiosity, or just yourself.",
    image: "https://images.unsplash.com/photo-1748895177768-b4a54b9c2954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwcml0dWFsJTIwcG91ciUyMG92ZXJ8ZW58MXx8fHwxNzcwNTQxNDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    agenda: [
      "Arrive anytime between 9-9:30 AM",
      "Coffee & open conversation",
      "Slow close around 11 AM",
    ],
    capacity: "Intimate setting for 8 people",
  },
};

export function EventDetailScreen() {
  const navigate = useNavigate();
  const { id = "1" } = useParams();
  const event = eventData[id] || eventData["1"];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center justify-between">
        <button
          onClick={() => navigate("/events")}
          className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-foreground text-center flex-1 mx-4 truncate"
        >
          {event.name}
        </motion.h2>
        <div className="w-9" /> {/* Spacer */}
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="px-6 mb-8"
      >
        <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Key Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-muted/30">
            <Calendar className="w-5 h-5 text-primary mb-2" />
            <p className="text-xs text-muted-foreground mb-1">Date & Time</p>
            <p className="text-sm text-foreground">{event.date}</p>
            <p className="text-sm text-foreground">{event.time}</p>
          </div>
          <div className="p-4 rounded-2xl bg-muted/30">
            <MapPin className="w-5 h-5 text-primary mb-2" />
            <p className="text-xs text-muted-foreground mb-1">Location</p>
            <p className="text-sm text-foreground">{event.location}</p>
          </div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <p className="text-muted-foreground leading-relaxed">{event.description}</p>
      </motion.div>

      {/* Agenda */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <h3 className="text-lg mb-4 text-foreground">What to Expect</h3>
        <div className="space-y-3">
          {event.agenda.map((item: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-foreground flex-1">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Capacity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex items-center gap-3">
          <Users className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-sm text-foreground">{event.capacity}</p>
        </div>
      </motion.div>

      {/* Member Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <p className="text-xs text-muted-foreground text-center">
          Members get early access to events
        </p>
      </motion.div>

      {/* Fixed Bottom CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="fixed bottom-0 left-0 right-0 p-6 bg-background/95 backdrop-blur-sm border-t border-border"
      >
        <div className="flex gap-3 items-center mb-3">
          <button className="p-3 rounded-full border border-border hover:border-primary transition-colors">
            <Heart className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => navigate(`/event/${id}/register`)}
            className="flex-1 bg-primary text-primary-foreground py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Register
          </button>
        </div>
        <button className="w-full text-sm text-muted-foreground">
          Save Event
        </button>
      </motion.div>
    </div>
  );
}
