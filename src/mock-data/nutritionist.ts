export const dashboardMetrics = {
  activePatients: 24,
  adherenceAvg: 84,
  atRisk: 3,
  engagement: 92,
  revenue: "R$ 12.4k",
};

export const patients = [
  {
    id: "ricardo",
    name: "Ricardo Silva",
    avatar: "RS",
    adherence: 87,
    status: "on-track" as const,
    lastActive: "2h atrás",
    goal: "Recomposição corporal",
    emotional: "positivo",
  },
  {
    id: "marina",
    name: "Marina Costa",
    avatar: "MC",
    adherence: 62,
    status: "at-risk" as const,
    lastActive: "3 dias",
    goal: "Emagrecimento",
    emotional: "ansioso",
  },
  {
    id: "paulo",
    name: "Paulo Mendes",
    avatar: "PM",
    adherence: 91,
    status: "on-track" as const,
    lastActive: "1h atrás",
    goal: "Performance",
    emotional: "motivado",
  },
  {
    id: "julia",
    name: "Júlia Alves",
    avatar: "JA",
    adherence: 74,
    status: "attention" as const,
    lastActive: "Ontem",
    goal: "Saúde intestinal",
    emotional: "neutro",
  },
];

export const skippedMeals = [
  { meal: "Lanche da tarde", count: 8, patients: 5 },
  { meal: "Café da manhã", count: 6, patients: 4 },
  { meal: "Pré-treino", count: 4, patients: 3 },
];

export const engagementChart = [
  { day: "Seg", value: 78 },
  { day: "Ter", value: 82 },
  { day: "Qua", value: 85 },
  { day: "Qui", value: 88 },
  { day: "Sex", value: 91 },
  { day: "Sáb", value: 76 },
  { day: "Dom", value: 72 },
];
