export const brand = {
  name: "TriaNour",
  tagline: "Nutrição que se vive.",
  hero: "De PDFs estáticos a experiências vivas de nutrição.",
} as const;

export const routes = {
  landing: "/",
  nutritionist: {
    dashboard: "/nutritionist/dashboard",
    patients: "/nutritionist/patients",
    mealPlans: "/nutritionist/meal-plans",
    recipes: "/nutritionist/recipes",
    ai: "/nutritionist/ai",
    shopping: "/nutritionist/shopping",
    analytics: "/nutritionist/analytics",
    settings: "/nutritionist/settings",
  },
  patient: {
    home: "/patient",
    meals: "/patient/meals",
    recipes: "/patient/recipes",
    shopping: "/patient/shopping",
    ai: "/patient/ai",
    family: "/patient/family",
    premium: "/patient/premium",
  },
} as const;
