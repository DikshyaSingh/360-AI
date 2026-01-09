import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useMouseParallax } from '@/hooks/useMouseParallax';

interface MouseParallaxLayerProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

export const MouseParallaxLayer = ({ 
  children, 
  intensity = 0.02,
  className = ''
}: MouseParallaxLayerProps) => {
  const { x, y } = useMouseParallax(intensity);

  return (
    <motion.div
      className={className}
      animate={{
        x,
        y,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 30,
        mass: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MouseParallaxLayer;
