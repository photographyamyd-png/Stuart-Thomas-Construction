"use client";

import { Children, isValidElement } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
};

export function SectionReveal({ children, className, stagger = false }: SectionRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  if (stagger) {
    return (
      <motion.div
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-8% 0px" }}
        variants={staggerContainer}
      >
        {Children.map(children, (child) =>
          isValidElement(child) ? (
            <motion.div key={child.key ?? undefined} variants={fadeUp} transition={transition}>
              {child}
            </motion.div>
          ) : (
            child
          ),
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={fadeUp}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
