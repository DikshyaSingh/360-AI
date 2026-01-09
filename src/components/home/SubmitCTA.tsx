import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export const SubmitCTA = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl"
                >
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient" />

                    {/* Glass Effect */}
                    <div className="relative glass-card p-12 md:p-16 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-block p-4 rounded-2xl bg-primary/10 mb-6"
                        >
                            <Rocket className="w-12 h-12 text-primary" />
                        </motion.div>

                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                            Ready to Make an <span className="gradient-text">Impact?</span>
                        </h2>

                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                            Submit your prototype and showcase your innovative solution to real-world civic challenges.
                        </p>

                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-display font-semibold text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
                        >
                            <Rocket className="w-5 h-5" />
                            Submit Your Prototype
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SubmitCTA;
