import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft, ChevronRight, ShoppingBag } from "lucide-react";

const filters = ["All", "Capsules", "Coffee", "Objects", "Gift"];

const products = [
  {
    id: 1,
    name: "Capsule Set 01 — Workday",
    description: "Five pieces that work together seamlessly",
    price: "$320",
    image: "https://images.unsplash.com/photo-1687405182302-f1b28707c854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMGNsb3RoaW5nJTIwY2Fwc3VsZSUyMHdhcmRyb2JlfGVufDF8fHx8MTc3MDU0MTkyOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Ritual Cup",
    description: "Handmade ceramic, earth tones",
    price: "$45",
    image: "https://images.unsplash.com/photo-1769775874528-7372eaaad212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29mZmVlJTIwY3VwJTIwcml0dWFsfGVufDF8fHx8MTc3MDU0MTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Loop Tote",
    description: "Organic cotton, built for daily use",
    price: "$68",
    image: "https://images.unsplash.com/photo-1693410795825-0b42062a3175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdG90ZSUyMGJhZyUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc3MDU0MTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Repair Kit",
    description: "Everything you need to mend what matters",
    price: "$32",
    image: "https://images.unsplash.com/photo-1625479142928-c2f2914318f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXdpbmclMjByZXBhaXIlMjBraXQlMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NzA1NDE5Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ProductListScreen() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center gap-4">
        <button
          onClick={() => navigate("/shop")}
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
          All Products
        </motion.h2>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
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

      {/* Product List */}
      <div className="px-6 space-y-4">
        {products.map((product, index) => (
          <motion.button
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            onClick={() => navigate(`/product/${product.id}`)}
            className="w-full p-4 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all flex gap-4 items-center text-left"
          >
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-muted flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base mb-1 text-foreground truncate">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
              <p className="text-sm text-foreground">{product.price}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          </motion.button>
        ))}
      </div>

      {/* Sticky Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="fixed bottom-0 left-0 right-0 p-6 bg-background/95 backdrop-blur-sm border-t border-border"
      >
        <button
          onClick={() => navigate("/cart")}
          className="w-full bg-foreground text-background py-4 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          View Cart
        </button>
      </motion.div>
    </div>
  );
}
