import { motion } from "framer-motion";
import { Zap, Bot, Heart, Timer } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const features = [
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Build functional prototypes at lightning speed using modern AI-powered development tools.",
    color: "text-primary",
  },
  {
    icon: Bot,
    title: "Gen AI as Co-Pilot",
    description: "Leverage ChatGPT, Claude, and Copilot as your intelligent coding assistants.",
    color: "text-secondary",
  },
  {
    icon: Heart,
    title: "Social Impact Focus",
    description: "Every solution addresses real civic challenges that affect communities.",
    color: "text-accent",
  },
  {
    icon: Timer,
    title: "45-Minute Sprint",
    description: "Constrained time pushes creativity and forces focus on core functionality.",
    color: "text-primary",
  },
];

export const WhatIsThis = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            What This <span className="gradient-text">Hackathon</span> Is
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A high-energy sprint where Gen AI becomes your superpower to build solutions that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <GlassCard key={i} delay={i * 0.1}>
              <div className={`p-3 rounded-lg bg-muted/50 w-fit mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsThis;