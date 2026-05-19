export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  suggestions?: string[];
  timestamp: string;
};

export const aiConversation: ChatMessage[] = [
  {
    id: "1",
    role: "user",
    content: "Estou com vontade de comer doces 😅",
    timestamp: "16:02",
  },
  {
    id: "2",
    role: "assistant",
    content:
      "Entendo, Ricardo — faz sentido hoje. Sua proteína no almoço ficou um pouco abaixo do alvo, e treinos intervalados costumam aumentar o craving.\n\nQue tal uma destas opções do seu plano?",
    suggestions: [
      "Iogurte grego + whey + banana congelada",
      "Chocolate 70% (2 quadrados) + castanhas",
      "Mousse proteico de cacau (receita salva)",
    ],
    timestamp: "16:02",
  },
  {
    id: "3",
    role: "user",
    content: "Posso pular o lanche e jantar mais cedo?",
    timestamp: "16:05",
  },
  {
    id: "4",
    role: "assistant",
    content:
      "Você pode antecipar o jantar em ~30 min, mas eu manteria algo leve agora — seu treino foi intenso e a recuperação precisa de proteína.\n\nA Dra. Camila deixou o jantar família às 19:30 com salmão. Quer que eu ajuste o lembrete?",
    suggestions: ["Sim, antecipar jantar", "Manter horário original"],
    timestamp: "16:05",
  },
];

export const aiInsights = [
  "Proteína 12g abaixo da meta hoje",
  "Hidratação em 52% — 1,5L restantes",
  "Treino intervalado: priorize carboidrato no jantar",
];
