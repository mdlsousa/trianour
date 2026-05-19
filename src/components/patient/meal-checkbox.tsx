"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function MealCheckbox({
  checked,
  onToggle,
  className,
}: {
  checked: boolean;
  onToggle: () => void;
  className?: string;
}) {
  return (
    <motion.button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={checked ? "Refeição concluída" : "Marcar refeição como concluída"}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      whileTap={{ scale: 0.9 }}
      className={cn(
        "relative z-20 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 transition-colors touch-manipulation",
        checked
          ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/30"
          : "border-muted-foreground/30 bg-card hover:border-primary hover:bg-primary/5 active:bg-primary/10",
        className
      )}
    >
      <motion.span
        initial={false}
        animate={{
          scale: checked ? 1 : 0,
          opacity: checked ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="pointer-events-none"
      >
        <Check className="h-5 w-5" strokeWidth={2.5} />
      </motion.span>
    </motion.button>
  );
}
