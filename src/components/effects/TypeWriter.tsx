"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
}

export function TypeWriter({
  texts,
  className = "",
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
}: TypeWriterProps) {
  const [mounted, setMounted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentText("");
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fullText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [mounted, currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delay]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
}
