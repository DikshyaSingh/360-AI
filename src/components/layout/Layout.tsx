import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MouseParallaxLayer } from "@/components/effects/MouseParallaxLayer";
import { MouseFollower } from "@/components/effects/MouseFollower";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Mouse Follower Effect */}
      <MouseFollower />
      
      {/* Background Effects with Mouse Parallax */}
      <MouseParallaxLayer intensity={0.01} className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </MouseParallaxLayer>
      
      {/* Floating Orbs with Different Parallax Intensities */}
      <MouseParallaxLayer intensity={0.04} className="fixed inset-0 pointer-events-none">
        <div className="floating-orb w-[600px] h-[600px] bg-primary/20 -top-48 -left-48 animate-pulse-glow" />
      </MouseParallaxLayer>
      
      <MouseParallaxLayer intensity={0.06} className="fixed inset-0 pointer-events-none">
        <div className="floating-orb w-[500px] h-[500px] bg-secondary/20 top-1/2 -right-48 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </MouseParallaxLayer>
      
      <MouseParallaxLayer intensity={0.08} className="fixed inset-0 pointer-events-none">
        <div className="floating-orb w-[400px] h-[400px] bg-accent/20 bottom-0 left-1/3 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </MouseParallaxLayer>

      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;