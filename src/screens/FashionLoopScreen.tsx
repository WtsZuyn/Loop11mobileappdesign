import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

const fashionContent = {
  hero: {
    title: "Fashion Loop",
    philosophy: "Fashion doesn't end when you stop wearing it. It continues, transforms, and finds new life. This is circular by design.",
  },
  pieces: [
    {
      id: 1,
      name: "The Linen Staple",
      concept: "Timeless, breathable, earth-returned",
      image: "https://images.unsplash.com/photo-1766113492742-396e7d928a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMGNsb3RoaW5nJTIwdGV4dHVyZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzcwNTQxNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Repair as Ritual",
      concept: "Mend what matters, honor the worn",
      image: "https://images.unsplash.com/photo-1625479142928-c2f2914318f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xvdGhpbmclMjByZXBhaXIlMjBzZXdpbmd8ZW58MXx8fHwxNzcwNTQxNDU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "The Capsule",
      concept: "Less, but everything you love",
      image: "https://images.unsplash.com/photo-1761896902115-49793a359daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2FyZHJvYmUlMjBuZXV0cmFsJTIwdG9uZXN8ZW58MXx8fHwxNzcwNTQxNDU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ],
  principles: [
    { title: "Rewear", description: "Style is repetition with intention" },
    { title: "Repair", description: "Every stitch adds character" },
    { title: "Reloop", description: "Pass it on when you're done" },
  ],
};

export function FashionLoopScreen() {
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
          {fashionContent.hero.title}
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
          {fashionContent.hero.philosophy}
        </p>
      </motion.div>

      {/* Curated Pieces */}
      <div className="px-6 space-y-8 mb-12">
        {fashionContent.pieces.map((piece, index) => (
          <motion.div
            key={piece.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.15, duration: 0.8 }}
            className="overflow-hidden rounded-3xl bg-card"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={piece.image}
                alt={piece.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2 text-foreground">{piece.name}</h3>
              <p className="text-muted-foreground">{piece.concept}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Principles */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="px-6"
      >
        <h3 className="text-2xl mb-6 text-foreground">The Three R's</h3>
        <div className="space-y-4">
          {fashionContent.principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              className="p-6 rounded-3xl bg-muted/50"
            >
              <h4 className="text-xl mb-2 text-foreground">{principle.title}</h4>
              <p className="text-muted-foreground">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
