import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Heart, ChevronDown, ChevronUp } from "lucide-react";

const productData: Record<string, any> = {
  "1": {
    name: "Capsule Set 01 — Workday",
    shortDescription: "Five thoughtfully designed pieces that work in harmony. Wear them separately or together — each combination tells a different story.",
    price: "$320",
    tags: ["Loop Approved", "Limited"],
    image: "https://images.unsplash.com/photo-1687405182302-f1b28707c854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMGNsb3RoaW5nJTIwY2Fwc3VsZSUyMHdhcmRyb2JlfGVufDF8fHx8MTc3MDU0MTkyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    details: {
      materials: "100% organic linen, naturally dyed",
      size: "One size fits most, designed for ease",
      care: "Cold wash, line dry, embrace the wrinkles",
    },
    circular: "Designed for repair. When you're ready to move on, return it to us for reloop credit.",
    pairings: [
      { id: 2, name: "Ritual Cup", image: "https://images.unsplash.com/photo-1769775874528-7372eaaad212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29mZmVlJTIwY3VwJTIwcml0dWFsfGVufDF8fHx8MTc3MDU0MTkyOXww&ixlib=rb-4.1.0&q=80&w=1080" },
      { id: 3, name: "Loop Tote", image: "https://images.unsplash.com/photo-1693410795825-0b42062a3175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdG90ZSUyMGJhZyUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc3MDU0MTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    ],
  },
  "2": {
    name: "Ritual Cup",
    shortDescription: "Handmade ceramic cup in warm earth tones. Each one is slightly different — a reminder that imperfection is beautiful.",
    price: "$45",
    tags: ["Loop Approved", "Restock"],
    image: "https://images.unsplash.com/photo-1769775874528-7372eaaad212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29mZmVlJTIwY3VwJTIwcml0dWFsfGVufDF8fHx8MTc3MDU0MTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    details: {
      materials: "Stoneware clay, natural glaze",
      size: "12oz, perfect for morning rituals",
      care: "Dishwasher safe, microwave friendly",
    },
    circular: "Made by local artisans. If it chips, we can repair it. If it breaks, return the pieces — we'll create something new.",
    pairings: [
      { id: 1, name: "Capsule Set 01", image: "https://images.unsplash.com/photo-1687405182302-f1b28707c854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMGNsb3RoaW5nJTIwY2Fwc3VsZSUyMHdhcmRyb2JlfGVufDF8fHx8MTc3MDU0MTkyOHww&ixlib=rb-4.1.0&q=80&w=1080" },
      { id: 4, name: "Repair Kit", image: "https://images.unsplash.com/photo-1625479142928-c2f2914318f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjByZXBhaXIlMjBraXQlMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NzA1NDE5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    ],
  },
  "3": {
    name: "Loop Tote",
    shortDescription: "Built to carry your world. Organic cotton canvas that gets better with age and tells the story of where you've been.",
    price: "$68",
    tags: ["Loop Approved", "Limited"],
    image: "https://images.unsplash.com/photo-1693410795825-0b42062a3175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdG90ZSUyMGJhZyUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc3MDU0MTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    details: {
      materials: "100% organic cotton canvas, reinforced stitching",
      size: "16\" x 14\" x 4\", fits everything you need",
      care: "Spot clean or cold wash, air dry",
    },
    circular: "Designed for decades of use. When handles wear, we'll replace them. When you're done, we'll remake it into something new.",
    pairings: [
      { id: 1, name: "Capsule Set 01", image: "https://images.unsplash.com/photo-1687405182302-f1b28707c854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMGNsb3RoaW5nJTIwY2Fwc3VsZSUyMHdhcmRyb2JlfGVufDF8fHx8MTc3MDU0MTkyOHww&ixlib=rb-4.1.0&q=80&w=1080" },
      { id: 2, name: "Ritual Cup", image: "https://images.unsplash.com/photo-1769775874528-7372eaaad212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29mZmVlJTIwY3VwJTIwcml0dWFsfGVufDF8fHx8MTc3MDU0MTkyOXww&ixlib=rb-4.1.0&q=80&w=1080" },
    ],
  },
};

export function ProductDetailScreen() {
  const navigate = useNavigate();
  const { id = "1" } = useParams();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const product = productData[id] || productData["1"];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center justify-between">
        <button
          onClick={() => navigate("/products")}
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
          {product.name}
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
        <div className="aspect-square rounded-3xl overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="px-6 mb-6 flex gap-2"
      >
        {product.tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="px-6 mb-4"
      >
        <p className="text-muted-foreground leading-relaxed">{product.shortDescription}</p>
      </motion.div>

      {/* Price */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <p className="text-2xl text-foreground">{product.price}</p>
      </motion.div>

      {/* 11 Motif Divider */}
      <div className="px-6 mb-8">
        <div className="flex gap-1 items-center justify-center">
          <div className="h-px w-12 bg-primary/20" />
          <div className="h-px w-12 bg-primary/20" />
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="px-6 space-y-4 mb-8">
        {/* Details */}
        <div className="border border-border rounded-3xl overflow-hidden">
          <button
            onClick={() => toggleSection("details")}
            className="w-full p-6 flex items-center justify-between text-left"
          >
            <h3 className="text-lg text-foreground">Details</h3>
            {expandedSection === "details" ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
          {expandedSection === "details" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 pb-6 space-y-3"
            >
              <div>
                <p className="text-sm text-muted-foreground mb-1">Materials</p>
                <p className="text-sm text-foreground">{product.details.materials}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Size</p>
                <p className="text-sm text-foreground">{product.details.size}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Care</p>
                <p className="text-sm text-foreground">{product.details.care}</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Circular Notes */}
        <div className="border border-border rounded-3xl overflow-hidden">
          <button
            onClick={() => toggleSection("circular")}
            className="w-full p-6 flex items-center justify-between text-left"
          >
            <h3 className="text-lg text-foreground">Circular Notes</h3>
            {expandedSection === "circular" ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
          {expandedSection === "circular" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 pb-6"
            >
              <p className="text-sm text-foreground leading-relaxed">{product.circular}</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Pairing Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <h3 className="text-lg mb-4 text-foreground">Pairs Well With</h3>
        <div className="flex gap-4">
          {product.pairings.map((pairing: any) => (
            <button
              key={pairing.id}
              onClick={() => navigate(`/product/${pairing.id}`)}
              className="flex-1 rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={pairing.image}
                  alt={pairing.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-xs text-foreground truncate">{pairing.name}</p>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Fixed Bottom CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="fixed bottom-0 left-0 right-0 p-6 bg-background/95 backdrop-blur-sm border-t border-border"
      >
        <div className="flex gap-3 items-center mb-3">
          <button className="p-3 rounded-full border border-border hover:border-primary transition-colors">
            <Heart className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="flex-1 bg-primary text-primary-foreground py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Add to Bag
          </button>
        </div>
        <button className="w-full text-sm text-muted-foreground">
          Save to Wishlist
        </button>
      </motion.div>
    </div>
  );
}
