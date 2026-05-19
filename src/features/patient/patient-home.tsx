"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Droplets,
  ChevronRight,
  Flame,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MealCheckbox } from "@/components/patient/meal-checkbox";
import { useMeals } from "@/features/patient/meals-provider";
import { weeklyAdherence, hydration } from "@/mock-data/meals";
import { routes } from "@/design-system/tokens";
import { FadeIn } from "@/components/shared/motion";
import { cn } from "@/lib/utils";

export function PatientHome() {
  const { meals, toggleMeal, completedCount, totalCount, adherenceScore } =
    useMeals();
  const nextMeal = meals.find((m) => !m.completed);

  return (
    <div className="relative px-4 pt-6">
      <FadeIn>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Bom dia</p>
            <h1 className="font-display text-2xl font-semibold">
              Ricardo 👋
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Hoje é dia de treino intervalado 🏃
            </p>
          </div>
          <Badge variant="gold" className="shrink-0">
            {weeklyAdherence.streak} dias
          </Badge>
        </div>
      </FadeIn>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-sage p-6 text-primary-foreground shadow-lg shadow-primary/20"
      >
        <p className="text-sm opacity-90">Sua adesão esta semana</p>
        <motion.div
          key={adherenceScore}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="mt-1 text-4xl font-semibold"
        >
          {adherenceScore}%
        </motion.div>
        <Progress
          value={adherenceScore}
          className="mt-4 h-2 bg-white/20 [&>div]:bg-white"
        />
        <div className="mt-4 flex gap-4 text-sm opacity-90">
          <span className="flex items-center gap-1">
            <Flame className="h-4 w-4" /> {completedCount}/{totalCount} refeições
          </span>
          <span className="flex items-center gap-1">
            <Heart className="h-4 w-4" /> Humor {weeklyAdherence.emotionalScore}/10
          </span>
        </div>
      </motion.div>

      {nextMeal && (
        <Link href={routes.patient.meals} className="mt-6 block">
          <Card className="overflow-hidden border-primary/20">
            <div className={`bg-gradient-to-br ${nextMeal.image} p-1`}>
              <CardContent className="rounded-[calc(1rem-4px)] bg-card/95 p-5 backdrop-blur">
                <Badge variant="default">Próxima refeição</Badge>
                <p className="mt-2 text-lg font-semibold">{nextMeal.title}</p>
                <p className="text-sm text-muted-foreground">
                  {nextMeal.time} · {nextMeal.calories} kcal
                </p>
                {nextMeal.trainingContext && (
                  <p className="mt-2 text-xs text-primary">
                    {nextMeal.trainingContext}
                  </p>
                )}
                <Button variant="premium" size="sm" className="mt-4">
                  Ver detalhes <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </Link>
      )}

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Hoje</h2>
          <Link href={routes.patient.meals} className="text-sm text-primary">
            Ver plano
          </Link>
        </div>
        <div className="mt-3 space-y-2">
          {meals.map((meal) => (
            <motion.div
              key={meal.id}
              layout
              className={cn(
                "relative z-10 flex items-center gap-2 rounded-2xl border border-border/50 bg-card/80 p-3 pr-2 backdrop-blur transition-opacity",
                meal.completed && "opacity-75"
              )}
            >
              <button
                type="button"
                onClick={() => toggleMeal(meal.id)}
                className="flex min-w-0 flex-1 cursor-pointer items-center gap-3 rounded-xl p-1 text-left touch-manipulation"
              >
                <span className="text-xl">{meal.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "truncate text-sm font-medium",
                      meal.completed && "line-through text-muted-foreground"
                    )}
                  >
                    {meal.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{meal.time}</p>
                </div>
              </button>
              <MealCheckbox
                checked={meal.completed}
                onToggle={() => toggleMeal(meal.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Card className="mt-6">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-sky-500" />
              <span className="font-medium">Hidratação</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {hydration.current}ml / {hydration.goal}ml
            </span>
          </div>
          <Progress
            value={(hydration.current / hydration.goal) * 100}
            className="mt-3"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            {hydration.glasses} de {hydration.goalGlasses} copos
          </p>
        </CardContent>
      </Card>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Link href={routes.patient.ai}>
          <Card className="p-4 transition-colors hover:border-primary/30">
            <p className="text-xs text-primary">TriaNour AI</p>
            <p className="mt-1 text-sm font-medium">Vontade de doces?</p>
            <p className="mt-1 text-xs text-muted-foreground">Converse agora →</p>
          </Card>
        </Link>
        <Link href={routes.patient.family}>
          <Card className="p-4 transition-colors hover:border-primary/30">
            <p className="text-xs text-primary">Família</p>
            <p className="mt-1 text-sm font-medium">Jantar compartilhado</p>
            <p className="mt-1 text-xs text-muted-foreground">Salmão hoje →</p>
          </Card>
        </Link>
        <Link href={routes.patient.recipes}>
          <Card className="p-4 transition-colors hover:border-primary/30">
            <p className="text-xs text-primary">Receitas</p>
            <p className="mt-1 text-sm font-medium">Anti-craving</p>
            <p className="mt-1 text-xs text-muted-foreground">4 salvas →</p>
          </Card>
        </Link>
        <Link href={routes.patient.shopping}>
          <Card className="p-4 transition-colors hover:border-primary/30">
            <p className="text-xs text-primary">Compras</p>
            <p className="mt-1 text-sm font-medium">Lista da semana</p>
            <p className="mt-1 text-xs text-muted-foreground">8 itens →</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
