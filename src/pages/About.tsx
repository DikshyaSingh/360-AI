import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import GlassCard from "@/components/ui/GlassCard";
import { 
  FileText, 
  Eye, 
  Lightbulb, 
  Link as LinkIcon,
  Users,
  MessageSquare,
  Headphones,
  Wrench,
  MessageCircle,
  ClipboardCheck
} from "lucide-react";

const deliverables = [
  { icon: FileText, title: "Problem Statement", description: "Clear articulation of the challenge" },
  { icon: Eye, title: "Current State", description: "Analysis of existing gaps" },
  { icon: Lightbulb, title: "Proposed Solution", description: "Your AI-powered approach" },
  { icon: LinkIcon, title: "Live Prototype Link", description: "Deployed, working demo" },
];

const supportMechanisms = [
  { icon: Users, title: "Student Anchors & Volunteers", description: "Peer support throughout the event" },
  { icon: MessageSquare, title: "Gen AI Prompt Cheat Sheet", description: "Pre-crafted prompts for quick starts" },
  { icon: Headphones, title: "Mentor Lifeline (2 mins)", description: "Quick expert guidance when stuck" },
  { icon: Wrench, title: "Help Desk", description: "Technical blocker resolution" },
  { icon: MessageCircle, title: "Slack / Discord Channel", description: "Real-time community support" },
  { icon: ClipboardCheck, title: "Evaluation Form", description: "Transparent scoring criteria" },
];

const evaluationCriteria = [
  { name: "Problem Clarity & Relevance", percentage: 25, color: "from-primary to-neon-cyan" },
  { name: "Solution Innovation", percentage: 25, color: "from-secondary to-neon-violet" },
  { name: "Prototype Functionality", percentage: 30, color: "from-accent to-neon-blue" },
  { name: "Effective Use of Gen AI", percentage: 20, color: "from-primary to-secondary" },
];



import { TypewriterText } from "@/components/ui/TypewriterText";

const About = () => {
  const [isFirstParaDone, setIsFirstParaDone] = useState(false);

  return (
    <Layout>
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 max-w-5xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About the <span className="gradient-text">Challenge</span>
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground text-left leading-relaxed">
              <TypewriterText 
                text="Welcome everyone! Over the next 45 minutes, you're going to take a real problem you care about and turn it into a working solution using Gen AI as your superpower. AI has democratized building—you don't need years of coding experience, just your creativity and empathy. We're talking about solving the issues that frustrate you daily: overflowing garbage bins, traffic nightmares, or air quality concerns."
                speed={30}
                startDelay={0.5}
                onComplete={() => setIsFirstParaDone(true)}
              />
              
              {/* Only mount/start the second one after the first is done. 
                  We can render it but set shouldStart={isFirstParaDone} 
              */}
              <TypewriterText 
                text="Your challenge is to pick one civic or societal issue that matters to you and build a proof-of-concept that could actually make a difference. Use open data, maps, or gamification, and let Gen AI be your expert co-pilot. Don't worry about perfection; we want to see a prototype that proves your idea works. So let's get started—pick a socially relevant problem and let's solve it!"
                speed={30}
                shouldStart={isFirstParaDone}
                startDelay={0.5}
              />
            </div>
          </motion.div>

          {/* Deliverables */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              Expected <span className="gradient-text">Deliverables</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map((item, i) => (
                <GlassCard key={i} delay={i * 0.1}>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Support Mechanisms */}
          <section className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              Support <span className="gradient-text-accent">Mechanisms</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportMechanisms.map((item, i) => (
                <GlassCard key={i} delay={i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-secondary/10 shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Evaluation Criteria */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl font-bold mb-8 text-center"
            >
              Evaluation <span className="gradient-text">Criteria</span>
            </motion.h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {evaluationCriteria.map((criteria, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">{criteria.name}</span>
                    <span className="text-primary font-display font-bold">{criteria.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${criteria.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full bg-gradient-to-r ${criteria.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>


        </div>
      </div>
    </Layout>
  );
};

export default About;