import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

const featuredDrops = [
  {
    id: 1,
    name: "Capsule Set 01 — Workday",
    description: "Five pieces, endless combinations",
    tag: "Loop Pick",
    image: "https://images.unsplash.com/photo-1687405182302-f1b28707c854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMGNsb3RoaW5nJTIwY2Fwc3VsZSUyMHdhcmRyb2JlfGVufDF8fHx8MTc3MDU0MTkyOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Ritual Cup",
    description: "Handmade, earth-toned ceramic",
    tag: "New",
    image: "https://images.unsplash.com/photo-1769775874528-7372eaaad212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29mZmVlJTIwY3VwJTIwcml0dWFsfGVufDF8fHx8MTc3MDU0MTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Loop Tote",
    description: "Organic cotton, built to last",
    tag: "Limited",
    image: "https://images.unsplash.com/photo-1693410795825-0b42062a3175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdG90ZSUyMGJhZyUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc3MDU0MTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const categories = [
  { id: "capsules", label: "Fashion Capsules", icon: "👔" },
  { id: "coffee", label: "Coffee Ritual", icon: "☕" },
  { id: "objects", label: "Objects", icon: "✨" },
  { id: "gift", label: "Gift / Membership", icon: "🎁" },
];

export function ShopScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center justify-between">
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
          LOOP11
        </motion.h2>
        <div className="w-9" /> {/* Spacer */}
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="px-6 py-8"
      >
        <h1 className="text-4xl mb-3 text-foreground">Shop the Loop</h1>
        <p className="text-muted-foreground leading-relaxed">
          Curated objects for circular living.
        </p>
      </motion.div>

      {/* Featured Drops */}
      <div className="mb-12">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="px-6 text-xl mb-4 text-foreground"
        >
          Featured Drops
        </motion.h3>
        <div className="flex gap-4 px-6 overflow-x-auto pb-4 scrollbar-hide">
          {featuredDrops.map((drop, index) => (
            <motion.button
              key={drop.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              onClick={() => navigate(`/product/${drop.id}`)}
              className="flex-shrink-0 w-64"
            >
              <div className="rounded-3xl overflow-hidden bg-card border border-border">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={drop.image}
                    alt={drop.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs">
                      {drop.tag}
                    </span>
                  </div>
                </div>
                <div className="p-4 text-left">
                  <h4 className="text-base mb-1 text-foreground">{drop.name}</h4>
                  <p className="text-sm text-muted-foreground">{drop.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="px-6 mb-12"
      >
        <h3 className="text-xl mb-4 text-foreground">Browse by Type</h3>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              onClick={() => navigate(`/products?category=${category.id}`)}
              className="p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all text-center"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <p className="text-sm text-foreground">{category.label}</p>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Impact Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="px-6 mb-8"
      >
        <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20">
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Every piece is selected with intention — designed to last, repair, and return to the earth.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="text-sm text-primary flex items-center gap-2"
          >
            Read our philosophy
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="px-6"
      >
        <button
          onClick={() => navigate("/products")}
          className="w-full bg-primary text-primary-foreground py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Browse Products
        </button>
      </motion.div>
    </div>
  );
}
