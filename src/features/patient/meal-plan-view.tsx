"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, ChefHat, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MealCheckbox } from "@/components/patient/meal-checkbox";
import { useMeals } from "@/features/patient/meals-provider";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/shared/motion";

export function MealPlanView() {
  const { meals, toggleMeal, completedCount, totalCount } = useMeals();
  const [expanded, setExpanded] = useState<string | null>("lunch");

  return (
    <div className="px-4 pt-6 pb-8">
      <FadeIn>
        <h1 className="font-display text-2xl font-semibold">Seu plano hoje</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {completedCount} de {totalCount} refeições concluídas · TriaNour
        </p>
        <Progress
          value={(completedCount / totalCount) * 100}
          className="mt-4"
        />
      </FadeIn>

      <div className="mt-6 space-y-4">
        {meals.map((meal) => {
          const open = expanded === meal.id;
          return (
            <motion.div
              key={meal.id}
              layout
              className={cn(
                "overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm",
                meal.completed && "opacity-80"
              )}
            >
              <div className={`bg-gradient-to-br ${meal.image} p-5`}>
                <div className="flex items-start justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setExpanded(open ? null : meal.id)}
                    className="min-w-0 flex-1 text-left"
                  >
                    <span className="text-3xl">{meal.emoji}</span>
                    <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {meal.time}
                    </p>
                    <h3
                      className={cn(
                        "mt-1 text-lg font-semibold",
                        meal.completed && "line-through opacity-70"
                      )}
                    >
                      {meal.title}
                    </h3>
                  </button>
                  <div className="flex shrink-0 items-center gap-2 pt-1">
                    <MealCheckbox
                      checked={meal.completed}
                      onToggle={() => toggleMeal(meal.id)}
                    />
                    <button
                      type="button"
                      onClick={() => setExpanded(open ? null : meal.id)}
                      aria-label="Expandir"
                    >
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          open && "rotate-180"
                        )}
                      />
                    </button>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="secondary">{meal.calories} kcal</Badge>
                  <Badge variant="secondary">P {meal.protein}g</Badge>
                  {meal.completed && (
                    <Badge variant="success">Feito ✓</Badge>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-border/50"
                  >
                    <div className="space-y-5 p-5">
                      {meal.trainingContext && (
                        <p className="rounded-xl bg-primary/5 px-3 py-2 text-xs text-primary">
                          {meal.trainingContext}
                        </p>
                      )}
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          Ingredientes
                        </p>
                        <ul className="mt-2 space-y-1">
                          {meal.ingredients.map((i) => (
                            <li key={i} className="text-sm">
                              · {i}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          <RefreshCw className="h-3 w-3" /> Substituições
                        </p>
                        <ul className="mt-2 space-y-1">
                          {meal.substitutions.map((s) => (
                            <li
                              key={s}
                              className="text-sm text-muted-foreground"
                            >
                              · {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          <ChefHat className="h-3 w-3" /> Preparo
                        </p>
                        <p className="mt-2 text-sm leading-relaxed">
                          {meal.preparation}
                        </p>
                      </div>
                      <div className="grid grid-cols-4 gap-2 rounded-xl bg-secondary/50 p-3 text-center text-xs">
                        <div>
                          <p className="font-semibold">{meal.calories}</p>
                          <p className="text-muted-foreground">kcal</p>
                        </div>
                        <div>
                          <p className="font-semibold">{meal.protein}g</p>
                          <p className="text-muted-foreground">prot</p>
                        </div>
                        <div>
                          <p className="font-semibold">{meal.carbs}g</p>
                          <p className="text-muted-foreground">carb</p>
                        </div>
                        <div>
                          <p className="font-semibold">{meal.fat}g</p>
                          <p className="text-muted-foreground">gord</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
