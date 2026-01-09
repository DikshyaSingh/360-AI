import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const MouseFollower = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const createRipple = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    setRipples(prev => [...prev, { id, x, y }]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 1500);
  }, []);

  useEffect(() => {
    let lastRippleTime = 0;
    const throttleMs = 100; // Create ripple every 100ms while moving

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const now = Date.now();
      if (now - lastRippleTime > throttleMs) {
        createRipple(e.clientX, e.clientY);
        lastRippleTime = now;
      }
    };

    const handleClick = (e: MouseEvent) => {
      // Create multiple ripples on click for bigger splash
      createRipple(e.clientX, e.clientY);
      setTimeout(() => createRipple(e.clientX, e.clientY), 100);
      setTimeout(() => createRipple(e.clientX, e.clientY), 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [createRipple]);

  return (
    <>
      {/* Water ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="fixed pointer-events-none z-40"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0.6, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Outer ring */}
            <div 
              className="absolute rounded-full border border-primary/40"
              style={{
                width: 200,
                height: 200,
                left: -100,
                top: -100,
              }}
            />
            {/* Middle ring */}
            <motion.div 
              className="absolute rounded-full border border-secondary/30"
              style={{
                width: 140,
                height: 140,
                left: -70,
                top: -70,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            />
            {/* Inner ring */}
            <motion.div 
              className="absolute rounded-full border border-primary/20"
              style={{
                width: 80,
                height: 80,
                left: -40,
                top: -40,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Cursor center drop: REMOVED */}
    </>
  );
};

export default MouseFollower;
