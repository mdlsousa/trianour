export type MealItem = {
  id: string;
  time: string;
  title: string;
  emoji: string;
  image: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string[];
  substitutions: string[];
  preparation: string;
  completed: boolean;
  trainingContext?: string;
};

export const todayMeals: MealItem[] = [
  {
    id: "breakfast",
    time: "07:00",
    title: "Bowl proteico com frutas vermelhas",
    emoji: "🥣",
    image: "from-amber-100 via-orange-50 to-rose-100",
    calories: 420,
    protein: 32,
    carbs: 48,
    fat: 12,
    ingredients: [
      "Iogurte grego 170g",
      "Whey baunilha 25g",
      "Granola sem açúcar 30g",
      "Mix frutas vermelhas 80g",
      "Chia 1 colher",
    ],
    substitutions: [
      "Skyr no lugar do iogurte",
      "Aveia overnight se preferir quente",
    ],
    preparation:
      "Monte em camadas: iogurte, whey misturado, granola e frutas. Finalize com chia.",
    completed: true,
  },
  {
    id: "snack-am",
    time: "10:30",
    title: "Shake pré-treino leve",
    emoji: "🥤",
    image: "from-emerald-100 via-teal-50 to-cyan-100",
    calories: 180,
    protein: 20,
    carbs: 18,
    fat: 3,
    ingredients: ["Banana ½", "Whey 20g", "Água de coco 200ml"],
    substitutions: ["Café gelado + leite de aveia"],
    preparation: "Bata tudo por 30 segundos. Consumir 45min antes do treino.",
    completed: true,
    trainingContext: "Dia de treino intervalado — hidratação extra",
  },
  {
    id: "lunch",
    time: "12:30",
    title: "Bowl mediterrâneo com frango",
    emoji: "🥗",
    image: "from-lime-100 via-green-50 to-emerald-100",
    calories: 580,
    protein: 45,
    carbs: 52,
    fat: 18,
    ingredients: [
      "Peito de frango grelhado 150g",
      "Quinoa cozida 80g",
      "Abobrinha, tomate, pepino",
      "Azeite extravirgem 1 colher",
      "Hummus 2 colheres",
    ],
    substitutions: [
      "Salmão no lugar do frango",
      "Arroz integral se sem quinoa",
    ],
    preparation:
      "Grelhe o frango com limão e ervas. Monte o bowl com base de quinoa e vegetais crus.",
    completed: false,
  },
  {
    id: "snack-pm",
    time: "16:00",
    title: "Opção anti-craving doce",
    emoji: "🍫",
    image: "from-violet-100 via-purple-50 to-fuchsia-100",
    calories: 220,
    protein: 18,
    carbs: 22,
    fat: 8,
    ingredients: [
      "Iogurte grego 120g",
      "Banana congelada ½",
      "Chocolate 70% 15g",
    ],
    substitutions: ["Maçã com pasta de amendoim", "Mousse de cacau proteico"],
    preparation:
      "Bata iogurte + banana congelada. Derreta chocolate em micro-ondas e finalize.",
    completed: false,
  },
  {
    id: "dinner",
    time: "19:30",
    title: "Jantar família — salmão compartilhado",
    emoji: "🐟",
    image: "from-sky-100 via-blue-50 to-indigo-100",
    calories: 520,
    protein: 38,
    carbs: 42,
    fat: 22,
    ingredients: [
      "Salmão 140g (sua porção)",
      "Batata doce assada 120g",
      "Brócolis no vapor",
      "Salada verde com limão",
    ],
    substitutions: ["Tilápia para versão econômica"],
    preparation:
      "Assine salmão com ervas. A família compartilha a base — veja adaptações em Família.",
    completed: false,
    trainingContext: "Recuperação pós-treino — ênfase em ômega-3",
  },
];

export const weeklyAdherence = {
  score: 87,
  streak: 12,
  hydration: 72,
  mealsCompleted: 4,
  mealsTotal: 5,
  emotionalScore: 8.2,
};

export const hydration = {
  current: 1450,
  goal: 2800,
  glasses: 6,
  goalGlasses: 12,
};
