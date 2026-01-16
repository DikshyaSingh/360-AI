import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import WhatIsThis from "@/components/home/WhatIsThis";
import Timeline from "@/components/home/Timeline";
import Tools from "@/components/home/Tools";
import SubmitCTA from "@/components/home/SubmitCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhatIsThis />
      <Timeline />
      <Tools />

      {/* PollUnit Voting Link */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Vote for <span className="gradient-text">Your Favorites</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Support the best prototypes by casting your vote!
            </p>
            <a
              href="https://pollunit.com/polls/j6ruluh8koxfafyftgzeya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              <span>Cast Your Vote</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <SubmitCTA />
    </Layout>
  );
};

export default Index;