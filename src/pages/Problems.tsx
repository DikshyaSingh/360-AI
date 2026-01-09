import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import GlassCard from "@/components/ui/GlassCard";
import {
  Leaf,
  Users,
  Heart,
  Recycle,
  Car,
  Cpu,
  Lightbulb,
  ChevronDown
} from "lucide-react";

const categories = [
  {
    id: "climate",
    icon: Leaf,
    name: "Climate & Environment",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    problems: [
      { id: "360AI01", title: "City Dashboard for Bengaluru with ESG Indicators", description: "Real-time environmental, social, and governance metrics for urban sustainability tracking" },
      { id: "360AI02", title: "Water Quality Monitoring Dashboard for Lakes", description: "IoT sensor integration displaying pollution levels, historical trends, and safe swimming zones" },
      { id: "360AI03", title: "Personal Carbon Footprint Tracker", description: "Gamified app that calculates daily carbon emissions from transport, food, and energy choices with reduction challenges" },
      { id: "360AI04", title: "Urban Heat Island Mapper", description: "Crowdsourced temperature reporting showing coolest routes and areas, integrated with tree cover data" },
      { id: "360AI05", title: "Air Quality Prediction & Alert System", description: "Hyperlocal AQI forecasts with personalized health recommendations and mask reminders" },
      { id: "360AI06", title: "Satellite-Based Waste Dumping Detection System", description: "Leverage satellite imagery to identify and map unauthorized solid waste dumping sites using distinct visual signatures for enforcement and cleanup prioritization" },
    ]
  },
  {
    id: "civic",
    icon: Users,
    name: "Civic Engagement & Governance",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    problems: [
      { id: "360AI07", title: "Gamified Civic Issues Reporting Platform", description: "Report potholes, streetlight outages, garbage with photo verification, upvoting, leaderboards, and resolution tracking" },
      { id: "360AI08", title: "Civic App Listing Platform for Bengaluru", description: "Centralized directory of all government apps and services with ratings, tutorials, and user reviews" },
      { id: "360AI09", title: "Participatory Budgeting Tool", description: "Citizens vote on local infrastructure projects with cost breakdowns and impact visualizations" },
      { id: "360AI10", title: "Ward Councillor Performance Dashboard", description: "Track promises vs. delivery, budget utilization, and citizen complaint response times" },
      { id: "360AI11", title: "Right to Information (RTI) Assistant", description: "AI-powered tool to draft RTI requests, track status, and showcase successful RTI stories" },
    ]
  },
  {
    id: "health",
    icon: Heart,
    name: "Health & Safety",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    problems: [
      { id: "360AI12", title: "Seasonal Health Outbreak Map", description: "Dengue, malaria, flu hotspots based on open data, news scraping, and government health bulletins with prevention tips" },
      { id: "360AI13", title: "Emergency Services Locator", description: "Find nearest hospitals, fire stations, police stations with real-time availability, ambulance tracking, and crowd-sourced wait times" },
      { id: "360AI14", title: "Mental Health Check-in & Community Support", description: "Anonymous peer support matching, mood tracking, and local counselor directory" },
      { id: "360AI15", title: "Food Safety Inspector", description: "Scan restaurant licenses, view health inspection scores, report violations, and see crowd-sourced hygiene ratings" },
      { id: "360AI16", title: "Healthy Ageing Knowledge Assistant", description: "AI-powered chatbot providing personalized guidance on nutrition, exercise, healthcare, and wellness specifically designed for senior citizens" },
    ]
  },
  {
    id: "sustainable",
    icon: Recycle,
    name: "Sustainable Living & Consumption",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    problems: [
      { id: "360AI17", title: "Sustainable Neighborhood Discovery Map", description: "Find zero-waste stores, repair cafes, secondhand shops, farmers markets, and eco-friendly businesses" },
      { id: "360AI18", title: "Food Waste Connector", description: "Match surplus food from restaurants/events with NGOs, shelters, and community fridges in real-time" },
      { id: "360AI19", title: "Repair Before Replace Directory", description: "Locate local repair services for electronics, clothes, furniture with pricing and skill ratings" },
      { id: "360AI20", title: "Community Tool Library Platform", description: "Share/borrow tools, equipment, and resources within neighborhoods to reduce consumption" },
    ]
  },
  {
    id: "mobility",
    icon: Car,
    name: "Mobility & Urban Planning",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    problems: [
      { id: "360AI21", title: "Women's Safety Route Planner", description: "Crowdsourced safe routes with lighting scores, CCTV coverage, and emergency contact integration" },
      { id: "360AI22", title: "Last-Mile Connectivity Optimizer", description: "Real-time tracking of auto-rickshaws, buses, and shared mobility at metro/bus stations with fare comparison" },
      { id: "360AI23", title: "Pedestrian Infrastructure Optimizer", description: "Identify and improve walkable routes across Bengaluru with safety scores, accessibility ratings, and pedestrianization recommendations for high-traffic areas" },
    ]
  },
  {
    id: "advanced",
    icon: Cpu,
    name: "More Technical..",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    problems: [
      { id: "360AI24", title: "Waste Segregation Gamification with Computer Vision", description: "Snap photos of waste, AI identifies correct bin, earn points for proper disposal" },
      { id: "360AI25", title: "Noise Pollution Heatmap", description: "IoT sound sensors creating real-time noise maps with complaint filing for chronic violators" },
      { id: "360AI26", title: "Street Vendor Permit Tracker", description: "Help informal workers navigate licensing, find legal vending zones, and connect with microfinance" },
      { id: "360AI27", title: "Rain Harvest Potential Calculator", description: "Input roof area, get rainwater collection potential, ROI calculation, and installer directory" },
    ]
  },
];

const tips = [
  { icon: "🎯", text: "Start simple — don't overengineer" },
  { icon: "🔥", text: "Focus on one core feature" },
  { icon: "🤖", text: "Use Gen AI aggressively" },
  { icon: "🚀", text: "Deploy fast, iterate later" },
];

const Problems = () => {
  const [openCategory, setOpenCategory] = useState<string | null>("climate");

  return (
    <Layout>
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Problem <span className="gradient-text">Statements</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose a problem that matters. Build a solution that impacts lives.
              <br></br>If you're struggling to identify a problem on your own, choose one from a curated list that resonates most with your team.
            </p>
          </motion.div>

          {/* Categories Accordion */}
          <div className="max-w-4xl mx-auto space-y-4 mb-16">
            {categories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => setOpenCategory(openCategory === category.id ? null : category.id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-muted/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${category.bgColor}`}>
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <span className="font-display font-semibold text-lg">{category.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {category.problems.length} problems
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openCategory === category.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>

                {/* Problems List */}
                <AnimatePresence>
                  {openCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.problems.map((problem, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: j * 0.1 }}
                            className="glass-card-hover p-6 bg-muted/20 flex flex-col gap-4"
                          >
                            <div className="flex justify-between items-start gap-4">
                              <h4 className="font-display font-semibold text-lg leading-tight">
                                {problem.title}
                              </h4>
                              <span className="shrink-0 text-xs font-mono font-bold text-white bg-white/10 px-2 py-1 rounded border border-white/10">
                                {problem.id}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {problem.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold">Pro Tips</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tips.map((tip, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/30"
                  >
                    <span className="text-2xl">{tip.icon}</span>
                    <span className="text-sm font-medium">{tip.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Problems;