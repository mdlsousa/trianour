"use client";

import { motion } from "framer-motion";
import { recipes } from "@/mock-data/recipes";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export default function PatientRecipesPage() {
  return (
    <div className="px-4 pt-6 pb-8">
      <h1 className="font-display text-2xl font-semibold">Receitas</h1>
      <p className="text-sm text-muted-foreground">Do seu plano · Dra. Camila</p>
      <div className="mt-6 space-y-4">
        {recipes.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="overflow-hidden rounded-2xl border border-border/50 bg-card"
          >
            <div className={`h-28 bg-gradient-to-br ${r.image}`} />
            <div className="p-4">
              <div className="flex flex-wrap gap-1">
                {r.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
                ))}
              </div>
              <h3 className="mt-2 font-semibold">{r.title}</h3>
              <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {r.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
