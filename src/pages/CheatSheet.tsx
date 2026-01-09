import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import GlassCard from "@/components/ui/GlassCard";
import {
    Search,
    Lightbulb,
    Database,
    Code,
    CheckCircle,
    XCircle,
    Rocket,
    Target,
    Sparkles
} from "lucide-react";

const CheatSheet = () => {
    return (
        <Layout>
            <div className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                            Gen AI Prompt <span className="gradient-text">Cheat Sheet</span>
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            For Civic/Social Innovation
                        </p>
                    </motion.div>

                    {/* Phase 1: Problem Discovery */}
                    <section className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="font-display text-2xl md:text-3xl font-bold">
                                    🎯 PHASE 1: Problem Discovery & Research
                                </h2>
                            </div>
                        </motion.div>

                        <GlassCard className="mb-6">
                            <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                                <Search className="w-5 h-5 text-primary" />
                                Finding & Understanding Problems
                            </h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="pl-4 border-l-2 border-primary/30">"What are the top 5 civic challenges facing Bengaluru related to [waste management/water quality/traffic/health]?"</p>
                                <p className="pl-4 border-l-2 border-primary/30">"Explain the current state of [issue] in Indian cities and why it's difficult to solve"</p>
                                <p className="pl-4 border-l-2 border-primary/30">"What are the root causes of [problem] and who is most affected by it?"</p>
                                <p className="pl-4 border-l-2 border-primary/30">"Search for recent news and statistics about [issue] in Bengaluru from the past 6 months"</p>
                            </div>
                        </GlassCard>

                        <GlassCard>
                            <h3 className="font-display text-xl font-semibold mb-4">
                                Researching Existing Solutions
                            </h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="pl-4 border-l-2 border-secondary/30">"What apps or solutions already exist for [your problem]? What are their limitations?"</p>
                                <p className="pl-4 border-l-2 border-secondary/30">"Show me 3 successful case studies of [solution type] from other cities around the world"</p>
                                <p className="pl-4 border-l-2 border-secondary/30">"What technologies are commonly used to address [problem]? Which ones are most accessible?"</p>
                            </div>
                        </GlassCard>
                    </section>

                    {/* Phase 2: Solution Design */}
                    <section className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-secondary/10">
                                    <Lightbulb className="w-6 h-6 text-secondary" />
                                </div>
                                <h2 className="font-display text-2xl md:text-3xl font-bold">
                                    💡 PHASE 2: Solution Design & Innovation
                                </h2>
                            </div>
                        </motion.div>

                        <GlassCard className="mb-6">
                            <h3 className="font-display text-xl font-semibold mb-4">
                                Generating Creative Solutions
                            </h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="pl-4 border-l-2 border-primary/30">"Give me 10 innovative ways to solve [problem] using mobile technology and gamification"</p>
                                <p className="pl-4 border-l-2 border-primary/30">"How could we use [open data/IoT sensors/crowdsourcing] to address [problem]?"</p>
                                <p className="pl-4 border-l-2 border-primary/30">"What would a solution look like if it targeted [citizens/businesses/government/communities]?"</p>
                                <p className="pl-4 border-l-2 border-primary/30">"Suggest unique features that would make a [type of app] more engaging and effective"</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="mb-6">
                            <h3 className="font-display text-xl font-semibold mb-4">
                                Identifying Your Unique Angle
                            </h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="pl-4 border-l-2 border-secondary/30">"Compare my solution idea [describe briefly] with existing solutions. What makes it different?"</p>
                                <p className="pl-4 border-l-2 border-secondary/30">"What's missing in current approaches to [problem] that my solution could address?"</p>
                                <p className="pl-4 border-l-2 border-secondary/30">"How can I make [solution] more accessible/affordable/user-friendly than existing options?"</p>
                            </div>
                        </GlassCard>

                        <GlassCard>
                            <h3 className="font-display text-xl font-semibold mb-4">
                                Understanding Your Users
                            </h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="pl-4 border-l-2 border-accent/30">"Create 2 user personas for people who would use an app to [solve your problem]"</p>
                                <p className="pl-4 border-l-2 border-accent/30">"What are the main pain points a [citizen/business owner/community leader] faces when dealing with [issue]?"</p>
                                <p className="pl-4 border-l-2 border-accent/30">"What features would motivate people to actually use and keep using [your solution]?"</p>
                            </div>
                        </GlassCard>
                    </section>

                    {/* Phase 3: Data Sources */}
                    <section className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-accent/10">
                                    <Database className="w-6 h-6 text-accent" />
                                </div>
                                <h2 className="font-display text-2xl md:text-3xl font-bold">
                                    📊 PHASE 3: Data Sources & Integration
                                </h2>
                            </div>
                        </motion.div>

                        <GlassCard className="mb-6">
                            <h3 className="font-display text-xl font-semibold mb-4">
                                Finding Open Data
                            </h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="pl-4 border-l-2 border-primary/30">"Where can I find open data about [air quality/traffic/water/health/crime] for Bengaluru or Karnataka?"</p>
                                <p className="pl-4 border-l-2 border-primary/30">"List government APIs and datasets available in India for [your domain]"</p>
                                <p className="pl-4 border-l-2 border-primary/30">"What's the best way to access and display data from [specific source] in a web app?"</p>
                                <p className="pl-4 border-l-2 border-primary/30">"Generate sample realistic data for [your use case] that I can use for prototyping"</p>
                            </div>
                        </GlassCard>

                        <GlassCard>
                            <h3 className="font-display text-xl font-semibold mb-4">
                                Mapping & Location Data
                            </h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="pl-4 border-l-2 border-secondary/30">"How do I integrate Google Maps/OpenStreetMap into my app to show [your data]?"</p>
                                <p className="pl-4 border-l-2 border-secondary/30">"Write code to display markers on a map for [locations] with [information] in popup windows"</p>
                                <p className="pl-4 border-l-2 border-secondary/30">"How can I calculate distance between user location and [points of interest]?"</p>
                            </div>
                        </GlassCard>
                    </section>

                    {/* Phase 4: Rapid Prototyping */}
                    <section className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <Code className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="font-display text-2xl md:text-3xl font-bold">
                                    💻 PHASE 4: Rapid Prototyping
                                </h2>
                            </div>
                        </motion.div>

                        <GlassCard className="mb-6">
                            <h3 className="font-display text-xl font-semibold mb-4">
                                UI/UX Design
                            </h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="pl-4 border-l-2 border-primary/30">"Design a clean, modern dashboard layout for displaying [your data/features]"</p>
                                <p className="pl-4 border-l-2 border-primary/30">"Create a mobile-first interface for an app that helps users [your goal]"</p>
                                <p className="pl-4 border-l-2 border-primary/30">"Suggest color schemes and design elements for an app focused on [sustainability/health/civic engagement]"</p>
                                <p className="pl-4 border-l-2 border-primary/30">"Design a gamification system with points, badges, and leaderboards for [your use case]"</p>
                            </div>
                        </GlassCard>

                        <GlassCard className="mb-6">
                            <h3 className="font-display text-xl font-semibold mb-4">
                                Code Generation (Be Specific!)
                            </h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="pl-4 border-l-2 border-secondary/30">"Create a React component that displays a [card/list/chart] showing [specific data]"</p>
                                <p className="pl-4 border-l-2 border-secondary/30">"Write JavaScript code to fetch data from [API/source] and display it as [format]"</p>
                                <p className="pl-4 border-l-2 border-secondary/30">"Build a simple form where users can report [issue] with photo upload and location"</p>
                                <p className="pl-4 border-l-2 border-secondary/30">"Create a leaderboard component that ranks users by [criteria] with real-time updates"</p>
                                <p className="pl-4 border-l-2 border-secondary/30">"Generate a dashboard with 4 key metrics: [metric 1], [metric 2], [metric 3], [metric 4]"</p>
                            </div>
                        </GlassCard>

                        <GlassCard>
                            <h3 className="font-display text-xl font-semibold mb-4">
                                Adding Interactive Features
                            </h3>
                            <div className="space-y-3 text-muted-foreground">
                                <p className="pl-4 border-l-2 border-accent/30">"Add a search and filter function to find [items] by [criteria]"</p>
                                <p className="pl-4 border-l-2 border-accent/30">"Create an upvoting system where users can vote on [issues/solutions]"</p>
                                <p className="pl-4 border-l-2 border-accent/30">"Build a notification feature that alerts users when [event happens]"</p>
                                <p className="pl-4 border-l-2 border-accent/30">"Add data visualization using charts to show [trends/comparisons]"</p>
                            </div>
                        </GlassCard>
                    </section>

                    {/* Pro Tips */}
                    <section className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-secondary/10">
                                    <Sparkles className="w-6 h-6 text-secondary" />
                                </div>
                                <h2 className="font-display text-2xl md:text-3xl font-bold">
                                    🚀 Pro Tips for Better Prompts
                                </h2>
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <GlassCard className="border-l-4 border-green-500/50">
                                <div className="flex items-center gap-2 mb-4">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    <h3 className="font-display text-xl font-semibold">✅ DO:</h3>
                                </div>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex gap-2">
                                        <span className="text-green-500 shrink-0">•</span>
                                        <span><strong>Be specific:</strong> "Create a map showing Bengaluru lakes with color-coded water quality indicators" beats "make a map"</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-500 shrink-0">•</span>
                                        <span><strong>Provide context:</strong> "I'm building a civic reporting app for citizens to report potholes..."</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-500 shrink-0">•</span>
                                        <span><strong>Iterate:</strong> Ask follow-up questions to refine the output</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-500 shrink-0">•</span>
                                        <span><strong>Request explanations:</strong> "Explain how this code works" helps you learn</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-green-500 shrink-0">•</span>
                                        <span><strong>Mention your tech stack:</strong> "Using React and Tailwind CSS..."</span>
                                    </li>
                                </ul>
                            </GlassCard>

                            <GlassCard className="border-l-4 border-red-500/50">
                                <div className="flex items-center gap-2 mb-4">
                                    <XCircle className="w-6 h-6 text-red-500" />
                                    <h3 className="font-display text-xl font-semibold">❌ DON'T:</h3>
                                </div>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex gap-2">
                                        <span className="text-red-500 shrink-0">•</span>
                                        <span>Ask vague questions: "How do I make an app?"</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-500 shrink-0">•</span>
                                        <span>Expect perfection first try - iterate and refine</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-500 shrink-0">•</span>
                                        <span>Forget to test the code/solutions AI generates</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-500 shrink-0">•</span>
                                        <span>Ignore errors - paste them back to AI for debugging</span>
                                    </li>
                                </ul>
                            </GlassCard>
                        </div>
                    </section>

                    {/* Tool Recommendations */}
                    <section className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                                🔧 Quick Tool Recommendations
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <GlassCard>
                                <h3 className="font-display text-lg font-semibold mb-3">For Instant UI Generation:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li><strong>v0.dev</strong> - Describe your UI, get React code</li>
                                    <li><strong>Bolt.new</strong> - Full-stack app generation</li>
                                    <li><strong>Lovable.dev</strong> - AI-powered app builder</li>
                                </ul>
                            </GlassCard>

                            <GlassCard>
                                <h3 className="font-display text-lg font-semibold mb-3">For Code Assistance:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li><strong>ChatGPT / Claude</strong> - Problem solving & code generation</li>
                                    <li><strong>GitHub Copilot</strong> - In-editor code completion</li>
                                    <li><strong>Cursor</strong> - AI-powered code editor</li>
                                </ul>
                            </GlassCard>

                            <GlassCard className="md:col-span-2">
                                <h3 className="font-display text-lg font-semibold mb-3">For Data & APIs:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li><strong>data.gov.in</strong> - Indian government open data</li>
                                    <li><strong>Bangalore Open Data</strong> - City-specific datasets</li>
                                    <li><strong>OpenWeatherMap</strong> - Weather data API</li>
                                    <li><strong>Nominatim</strong> - Free geocoding service</li>
                                </ul>
                            </GlassCard>
                        </div>
                    </section>

                    {/* Example Flow */}
                    <section className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard className="bg-gradient-to-br from-primary/5 to-secondary/5">
                                <h2 className="font-display text-2xl font-bold mb-4">
                                    💬 Example: Full Problem-to-Prototype Prompt Flow
                                </h2>
                                <div className="space-y-4 text-muted-foreground">
                                    <div className="pl-4 border-l-4 border-primary/50">
                                        <p className="font-semibold text-foreground mb-1">Step 1:</p>
                                        <p>"What are the main water quality issues in Bengaluru lakes and what data is publicly available?"</p>
                                    </div>
                                    <div className="pl-4 border-l-4 border-secondary/50">
                                        <p className="font-semibold text-foreground mb-1">Step 2:</p>
                                        <p>"Design a simple dashboard that shows lake locations on a map with color-coded water quality indicators (green=safe, yellow=moderate, red=polluted)"</p>
                                    </div>
                                    <div className="pl-4 border-l-4 border-accent/50">
                                        <p className="font-semibold text-foreground mb-1">Step 3:</p>
                                        <p>"Create a React component with a map showing 5 Bengaluru lakes with dummy water quality data. Use Leaflet for maps and include a legend."</p>
                                    </div>
                                    <div className="pl-4 border-l-4 border-primary/50">
                                        <p className="font-semibold text-foreground mb-1">Step 4:</p>
                                        <p>"Add a details panel that shows when users click a lake: name, pollution level, recent test date, and nearby facilities"</p>
                                    </div>
                                    <div className="pl-4 border-l-4 border-secondary/50">
                                        <p className="font-semibold text-foreground mb-1">Step 5:</p>
                                        <p>"How can I deploy this quickly to get a shareable link?"</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </section>

                    {/* Final Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <GlassCard className="bg-gradient-to-br from-primary/10 to-secondary/10">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <Rocket className="w-8 h-8 text-primary" />
                                <h2 className="font-display text-2xl font-bold">🎯 Remember:</h2>
                            </div>
                            <p className="text-lg mb-4">
                                <strong>Your domain knowledge + AI's speed = Powerful solutions</strong>
                            </p>
                            <p className="text-muted-foreground mb-2">AI helps you build faster, but YOU bring:</p>
                            <div className="flex flex-wrap justify-center gap-3 mb-6">
                                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium">Understanding of the real problem</span>
                                <span className="px-4 py-2 rounded-lg bg-secondary/10 text-secondary font-medium">Empathy for users</span>
                                <span className="px-4 py-2 rounded-lg bg-accent/10 text-accent font-medium">Creative solutions</span>
                                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium">Local context</span>
                            </div>
                            <p className="text-xl font-display font-bold gradient-text">
                                Now go build something amazing! 🚀
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default CheatSheet;
