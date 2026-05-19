"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { recipes } from "@/mock-data/recipes";
import { FadeIn } from "@/components/shared/motion";
import { Clock } from "lucide-react";

export default function RecipesPage() {
  return (
    <div className="space-y-6">
      <FadeIn>
        <h1 className="text-2xl font-semibold">Biblioteca de receitas</h1>
        <p className="text-muted-foreground">Receitas premium para seus planos</p>
      </FadeIn>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((r) => (
          <motion.div key={r.id} whileHover={{ y: -4 }}>
            <Card className="overflow-hidden">
              <div className={`h-32 bg-gradient-to-br ${r.image}`} />
              <CardContent className="p-5">
                <div className="flex flex-wrap gap-1">
                  {r.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-[10px]">
                      {t}
                    </Badge>
                  ))}
                </div>
                <h3 className="mt-2 font-semibold">{r.title}</h3>
                <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {r.time} · {r.difficulty}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{r.saves} salvamentos</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
