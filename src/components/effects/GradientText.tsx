"use client";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-primary via-orange-400 to-accent bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
