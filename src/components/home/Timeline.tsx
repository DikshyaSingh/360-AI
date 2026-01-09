import { motion } from "framer-motion";

const timelineSteps = [
  { time: "0–5", label: "Welcome & Context", description: "Intro, rules, and problem reveal" },
  { time: "5–15", label: "Problem Discovery", description: "Deep dive into the challenge" },
  { time: "15–25", label: "Solution Design", description: "Sketch your AI-powered approach" },
  { time: "25–40", label: "Rapid Prototyping", description: "Build with Gen AI tools" },
  { time: "40–43", label: "Submission", description: "Deploy and share your work" },
  { time: "43–45", label: "Wrap-Up", description: "Final demos and celebration" },
];

export const Timeline = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Hackathon <span className="gradient-text">Flow</span>
          </h2>
          <p className="text-muted-foreground">Your 45-minute journey from idea to impact</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative md:flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card-hover p-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                      {step.time} min
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-1">{step.label}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;