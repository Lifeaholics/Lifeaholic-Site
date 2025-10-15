import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

export default function LifeaholicSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-blue-100 to-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6"
        >
          I Am a <span className="italic text-green-600">Lifeaholic™</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600"
        >
          Be addicted to living your best life. Join the movement of doers, dreamers, and creators who Life It their way.
        </motion.p>
        <div className="mt-10">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-4">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-20 py-16">
        {[
          {
            title: "Live On Purpose",
            desc: "Wake up excited for the life you’re creating — one aligned with your soul and passions.",
            icon: Sparkles,
          },
          {
            title: "Love Every Moment",
            desc: "Celebrate small wins, big dreams, and the beauty of your own evolution.",
            icon: Heart,
          },
          {
            title: "Join the Lifeaholic™ Community",
            desc: "Connect with people who believe that living is an art form — and you are the masterpiece.",
            icon: Sparkles,
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="h-full"
          >
            <Card className="rounded-2xl shadow-lg border-none bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <card.icon className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Lifeaholic™ | Build On Purpose. Live YOU.</p>
      </footer>
    </div>
  );
}
