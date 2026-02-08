import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Coffee, Shirt, Users } from "lucide-react";

const interests = [
  { id: "fashion", label: "Fashion", icon: Shirt, description: "Circular wardrobe mindset" },
  { id: "coffee", label: "Coffee", icon: Coffee, description: "Rituals & slow moments" },
  { id: "community", label: "Community", icon: Users, description: "Belonging & connection" },
];

export function InterestsScreen() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h1 className="text-4xl mb-3 text-foreground">What draws you in?</h1>
        <p className="text-muted-foreground mb-12 leading-relaxed">
          Choose what resonates. You can explore it all.
        </p>

        <div className="space-y-4 mb-12">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            const isSelected = selectedInterests.includes(interest.id);
            
            return (
              <motion.button
                key={interest.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onClick={() => toggleInterest(interest.id)}
                className={`w-full p-6 rounded-3xl border-2 transition-all text-left ${
                  isSelected
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${isSelected ? "bg-primary/10" : "bg-muted"}`}>
                    <Icon className={`w-6 h-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-1 text-foreground">{interest.label}</h3>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-sm text-muted-foreground mb-3">
            Stay in the loop (optional)
          </p>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 rounded-full bg-input-background border border-border focus:outline-none focus:border-primary transition-colors text-foreground"
          />
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        onClick={handleContinue}
        className="w-full bg-primary text-primary-foreground py-4 rounded-full hover:opacity-90 transition-opacity"
      >
        Continue
      </motion.button>
    </div>
  );
}
