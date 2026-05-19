"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { todayMeals } from "@/mock-data/meals";
import { routes } from "@/design-system/tokens";
import { FadeIn } from "@/components/shared/motion";

export default function MealPlansPage() {
  return (
    <div className="space-y-6">
      <FadeIn className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Planos alimentares</h1>
          <p className="text-muted-foreground">Experiências visuais — não PDFs</p>
        </div>
        <Button variant="premium">+ Novo plano</Button>
      </FadeIn>

      <Card className="overflow-hidden">
        <div className="border-b border-border/60 bg-gradient-to-r from-primary/5 to-sage/5 p-6">
          <Badge>Plano ativo</Badge>
          <h2 className="mt-2 text-xl font-semibold">Ricardo Silva — Recomposição</h2>
          <p className="text-sm text-muted-foreground">Atualizado há 2 dias · 5 refeições/dia</p>
        </div>
        <CardContent className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {todayMeals.map((meal) => (
            <motion.div
              key={meal.id}
              whileHover={{ y: -4 }}
              className={`overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br ${meal.image}`}
            >
              <Link href={routes.patient.meals} className="block p-5">
                <span className="text-2xl">{meal.emoji}</span>
                <p className="mt-2 text-xs text-muted-foreground">{meal.time}</p>
                <p className="font-medium">{meal.title}</p>
                <p className="mt-2 text-xs">
                  {meal.calories} kcal · P {meal.protein}g
                </p>
              </Link>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      <Button asChild variant="outline">
        <Link href={routes.patient.meals}>Preview experiência paciente</Link>
      </Button>
    </div>
  );
}
