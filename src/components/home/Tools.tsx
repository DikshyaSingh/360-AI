import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import {
  MessageSquare,
  Brain,
  Sparkles,
  Code2,
  Palette,
  Zap,
  Terminal,
  Rocket,
  Heart,
  Wand2,
  Globe,
  Pencil
} from "lucide-react";

const tools = [
  { name: "ChatGPT", description: "AI conversations & code generation", icon: MessageSquare },
  { name: "Claude", description: "Advanced reasoning & analysis", icon: Brain },
  { name: "Gemini", description: "Multimodal AI capabilities", icon: Sparkles },
  { name: "GitHub Copilot", description: "AI pair programming", icon: Code2 },
  { name: "v0.dev", description: "AI UI component generation", icon: Palette },
  { name: "Bolt.new", description: "Full-stack app scaffolding", icon: Zap },
  { name: "Replit", description: "Cloud development environment", icon: Terminal },
  { name: "Vercel", description: "Instant deployments", icon: Rocket },
  { name: "Lovable", description: "AI-powered app builder", icon: Heart },
  { name: "Antigravity", description: "AI coding assistant", icon: Wand2 },
  { name: "Netlify", description: "Modern web deployment", icon: Globe },
  { name: "Cursor.ai", description: "AI-first code editor", icon: Pencil },
];

export const Tools = () => {
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
            Your <span className="gradient-text">AI Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful tools to supercharge your hackathon experience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <GlassCard key={i} delay={i * 0.05} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-3">
                <tool.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1">{tool.name}</h3>
              <p className="text-muted-foreground text-xs">{tool.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;