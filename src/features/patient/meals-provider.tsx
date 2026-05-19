"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { todayMeals as initialMeals, type MealItem } from "@/mock-data/meals";

const STORAGE_KEY = "trianour-meals-completed";

type MealsContextValue = {
  meals: MealItem[];
  toggleMeal: (id: string) => void;
  completedCount: number;
  totalCount: number;
  adherenceScore: number;
};

const MealsContext = createContext<MealsContextValue | null>(null);

function loadCompletedIds(): Set<string> {
  if (typeof window === "undefined") {
    return new Set(initialMeals.filter((m) => m.completed).map((m) => m.id));
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return new Set(JSON.parse(raw) as string[]);
    }
  } catch {
    /* ignore */
  }
  return new Set(initialMeals.filter((m) => m.completed).map((m) => m.id));
}

export function MealsProvider({ children }: { children: React.ReactNode }) {
  const [completedIds, setCompletedIds] = useState<Set<string>>(() =>
    loadCompletedIds()
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCompletedIds(loadCompletedIds());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedIds]));
  }, [completedIds, hydrated]);

  const meals = useMemo(
    () =>
      initialMeals.map((m) => ({
        ...m,
        completed: completedIds.has(m.id),
      })),
    [completedIds]
  );

  const toggleMeal = useCallback((id: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const completedCount = meals.filter((m) => m.completed).length;
  const totalCount = meals.length;
  const adherenceScore = Math.round((completedCount / totalCount) * 100);

  const value = useMemo(
    () => ({
      meals,
      toggleMeal,
      completedCount,
      totalCount,
      adherenceScore,
    }),
    [meals, toggleMeal, completedCount, totalCount, adherenceScore]
  );

  return (
    <MealsContext.Provider value={value}>{children}</MealsContext.Provider>
  );
}

export function useMeals() {
  const ctx = useContext(MealsContext);
  if (!ctx) {
    throw new Error("useMeals must be used within MealsProvider");
  }
  return ctx;
}
