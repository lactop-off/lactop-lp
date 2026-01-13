"use client";

import { motion } from "framer-motion";

interface FloatingElementsProps {
  className?: string;
}

export function FloatingElements({ className = "" }: FloatingElementsProps) {
  const elements = [
    { size: 300, x: "10%", y: "20%", duration: 20, delay: 0, color: "primary" },
    { size: 200, x: "80%", y: "10%", duration: 25, delay: 2, color: "accent" },
    { size: 150, x: "70%", y: "60%", duration: 18, delay: 1, color: "primary" },
    { size: 250, x: "20%", y: "70%", duration: 22, delay: 3, color: "accent" },
    { size: 100, x: "50%", y: "40%", duration: 15, delay: 0.5, color: "primary" },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${
            el.color === "primary" ? "bg-primary/20" : "bg-accent/20"
          }`}
          style={{
            width: el.size,
            height: el.size,
            left: el.x,
            top: el.y,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
