export type FamilyMember = {
  id: string;
  name: string;
  age: number;
  role: "patient" | "partner" | "child";
  avatar: string;
  goals: string[];
  focus: string;
};

export const silvaFamily = {
  nutritionist: "Dra. Camila Rocha",
  primaryPatient: "ricardo",
  members: [
    {
      id: "ricardo",
      name: "Ricardo",
      age: 36,
      role: "patient" as const,
      avatar: "RC",
      goals: ["Perda de gordura", "Retenção muscular", "Performance híbrida"],
      focus: "Corrida + força, controle de cravings doces",
    },
    {
      id: "fernanda",
      name: "Fernanda",
      age: 33,
      role: "partner" as const,
      avatar: "FE",
      goals: ["Emagrecimento sustentável", "Anti-inflamatório"],
      focus: "Fome emocional, refeições familiares",
    },
    {
      id: "helena",
      name: "Helena",
      age: 8,
      role: "child" as const,
      avatar: "HE",
      goals: ["Crescimento saudável"],
      focus: "Porções adaptadas, lanches escolares",
    },
    {
      id: "theo",
      name: "Theo",
      age: 5,
      role: "child" as const,
      avatar: "TH",
      goals: ["Alimentação equilibrada"],
      focus: "Texturas suaves, rotina previsível",
    },
  ] satisfies FamilyMember[],
};
