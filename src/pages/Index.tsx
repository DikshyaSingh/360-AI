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
      <SubmitCTA />
    </Layout>
  );
};

export default Index;