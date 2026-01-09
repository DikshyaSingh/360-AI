import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const TypewriterText = ({ 
  text, 
  speed = 20, 
  startDelay = 0,
  shouldStart = true,
  onComplete,
  className = "" 
}: { 
  text: string; 
  speed?: number;
  startDelay?: number;
  shouldStart?: boolean;
  onComplete?: () => void;
  className?: string; 
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;

    const startTimeout = setTimeout(() => {
        setIsStarted(true);
    }, startDelay * 1000);
    
    return () => clearTimeout(startTimeout);
  }, [shouldStart, startDelay]);

  useEffect(() => {
    if (!isStarted) return;
    
    let index = 0;
    const intervalId = setInterval(() => {
      if (index >= text.length) {
        clearInterval(intervalId);
        setIsDone(true);
        onComplete?.();
        return;
      }
      // Use functional state update to ensure we have the latest text
      setDisplayedText((prev) => text.slice(0, prev.length + 1));
      index++;
    }, speed);

    return () => clearInterval(intervalId);
  }, [isStarted, text, speed, onComplete]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayedText}
      {shouldStart && !isDone && (
        <span 
          className="ml-0.5 inline-block h-[1em] w-[2px] bg-primary align-middle animate-pulse" 
        />
      )}
    </motion.div>
  );
};
