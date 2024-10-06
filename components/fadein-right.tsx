"use client";
import { motion } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Start fully transparent and 100px to the right
      whileInView={{ opacity: 1, x: 0 }} // Fade in and move to its original position
      transition={{ duration: 1.0 }} // Transition duration
      viewport={{ once: false }} // Keep animating when scrolling
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
