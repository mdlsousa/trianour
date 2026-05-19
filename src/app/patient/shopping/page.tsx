"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { shoppingList } from "@/mock-data/shopping";
import { cn } from "@/lib/utils";

export default function PatientShoppingPage() {
  const [items, setItems] = useState(shoppingList);

  const toggle = (id: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i))
    );
  };

  const done = items.filter((i) => i.checked).length;

  return (
    <div className="px-4 pt-6 pb-8">
      <h1 className="font-display text-2xl font-semibold">Lista de compras</h1>
      <p className="text-sm text-muted-foreground">
        {done}/{items.length} itens · otimizada para a família
      </p>
      <div className="mt-6 space-y-2">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.03 }}
            onClick={() => toggle(item.id)}
            className={cn(
              "flex w-full items-center gap-3 rounded-2xl border border-border/50 p-4 text-left transition-colors",
              item.checked && "bg-secondary/50 opacity-60"
            )}
          >
            <div
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full border-2",
                item.checked ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/30"
              )}
            >
              {item.checked && <Check className="h-3.5 w-3.5" />}
            </div>
            <div className="flex-1">
              <p className={cn("font-medium", item.checked && "line-through")}>{item.item}</p>
              <p className="text-xs text-muted-foreground">{item.category} · {item.qty}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
