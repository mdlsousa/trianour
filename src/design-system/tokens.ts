export const brand = {
  name: "TriaNox",
  tagline: "Nutrition experiences, not static PDFs.",
  hero: "From static diet PDFs to living nutrition experiences.",
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
