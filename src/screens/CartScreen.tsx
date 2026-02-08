import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft, Minus, Plus, X } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export function CartScreen() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Capsule Set 01 — Workday",
      price: 320,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1687405182302-f1b28707c854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMGNsb3RoaW5nJTIwY2Fwc3VsZSUyMHdhcmRyb2JlfGVufDF8fHx8MTc3MDU0MTkyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Ritual Cup",
      price: 45,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1769775874528-7372eaaad212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwY29mZmVlJTIwY3VwJTIwcml0dWFsfGVufDF8fHx8MTc3MDU0MTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 12;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center gap-4">
        <button
          onClick={() => navigate("/products")}
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
          Bag
        </motion.h2>
      </div>

      {/* Cart Items */}
      <div className="px-6 space-y-4 mb-8">
        {cartItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="p-4 rounded-3xl bg-card border border-border"
          >
            <div className="flex gap-4">
              {/* Thumbnail */}
              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Item Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base text-foreground pr-2">{item.name}</h3>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-1 -mr-1 -mt-1 rounded-full hover:bg-muted transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                <p className="text-sm text-foreground mb-3">${item.price}</p>

                {/* Quantity Stepper */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Minus className="w-4 h-4 text-foreground" />
                  </button>
                  <span className="text-sm text-foreground w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Plus className="w-4 h-4 text-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="px-6 mb-8"
      >
        <div className="p-6 rounded-3xl bg-muted/30 border border-border">
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="text-sm text-foreground">${subtotal}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Shipping estimate</span>
              <span className="text-sm text-foreground">${shipping}</span>
            </div>
          </div>
          <div className="h-px bg-border mb-4" />
          <div className="flex justify-between items-center">
            <span className="text-lg text-foreground">Total</span>
            <span className="text-lg text-foreground">${total}</span>
          </div>
        </div>
      </motion.div>

      {/* Fixed Bottom CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="fixed bottom-0 left-0 right-0 p-6 bg-background/95 backdrop-blur-sm border-t border-border"
      >
        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-primary text-primary-foreground py-4 rounded-full hover:opacity-90 transition-opacity mb-3"
        >
          Checkout
        </button>
        <button
          onClick={() => navigate("/products")}
          className="w-full text-sm text-muted-foreground"
        >
          Continue browsing
        </button>
      </motion.div>
    </div>
  );
}
