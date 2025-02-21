"use client";
import { motion } from "framer-motion";

const slideUpVariants = {
  hidden: {
    opacity: 0,
    y: 100, // Adjust this value to control how far from bottom
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const slideDownVariants = {
  hidden: {
    opacity: 0,
    y: -100, // Adjust this value to control how far from bottom
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

// Fade in from right
const slideRightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// Scale up
const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const AnimateOnView = ({
  children,
  className,
  delay = 0,
  slide,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  slide?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        margin: "-100px",
      }}
      variants={
        slide === "up"
          ? slideUpVariants
          : slide === "down"
          ? slideDownVariants
          : slide === "right"
          ? slideRightVariants
          : slide === "left"
          ? slideLeftVariants
          : scaleUpVariants
      }
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};
