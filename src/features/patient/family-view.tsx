"use client";

import { motion } from "framer-motion";
import { Users, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sharedDinner, sharedMealsWeek } from "@/mock-data/family-meals";
import { silvaFamily } from "@/mock-data/family";
import { FadeIn } from "@/components/shared/motion";

export function FamilyView() {
  return (
    <div className="px-4 pt-6 pb-8">
      <FadeIn>
        <Badge variant="gold" className="mb-3">
          <Users className="mr-1 h-3 w-3" /> Nutrição familiar
        </Badge>
        <h1 className="font-display text-2xl font-semibold">Família Silva</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Uma cozinha. Experiências personalizadas.
        </p>
      </FadeIn>

      <Card className="mt-6 overflow-hidden">
        <div className="bg-gradient-to-br from-sky-100 to-indigo-100 p-6 dark:from-sky-950/40 dark:to-indigo-950/40">
          <p className="text-xs font-medium text-primary">Jantar de hoje</p>
          <h2 className="mt-1 text-xl font-semibold">{sharedDinner.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{sharedDinner.base}</p>
        </div>
        <CardContent className="space-y-3 p-4">
          {sharedDinner.members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border/50 p-4"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold">{m.name}</p>
                <Badge variant="secondary">{m.calories} kcal</Badge>
              </div>
              <p className="mt-1 text-sm">{m.portion}</p>
              <p className="mt-2 text-xs text-primary">{m.note}</p>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardContent className="p-5">
          <p className="flex items-center gap-2 font-medium">
            <ShoppingBag className="h-4 w-4 text-primary" />
            Compras otimizadas
          </p>
          <ul className="mt-3 space-y-2">
            {sharedDinner.shoppingOptimized.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <h3 className="mt-8 font-semibold">Membros</h3>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {silvaFamily.members.map((m) => (
          <Card key={m.id} className="p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
              {m.avatar}
            </div>
            <p className="mt-2 font-medium">{m.name}</p>
            <p className="text-xs text-muted-foreground">{m.age} anos</p>
          </Card>
        ))}
      </div>

      <h3 className="mt-8 font-semibold">Refeições compartilhadas</h3>
      <div className="mt-3 space-y-2">
        {sharedMealsWeek.map((s) => (
          <div
            key={s.day}
            className="flex items-center justify-between rounded-xl bg-secondary/50 px-4 py-3 text-sm"
          >
            <span className="font-medium">{s.day}</span>
            <span className="text-muted-foreground">{s.meal}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
