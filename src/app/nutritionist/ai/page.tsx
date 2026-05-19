"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { aiInsights } from "@/mock-data/ai-chat";
import { FadeIn } from "@/components/shared/motion";

export default function NutritionistAIPage() {
  return (
    <div className="space-y-6">
      <FadeIn>
        <Badge><Sparkles className="mr-1 h-3 w-3" /> AI Copilot</Badge>
        <h1 className="mt-2 text-2xl font-semibold">Assistente para sua prática</h1>
        <p className="text-muted-foreground">
          Insights automáticos sobre pacientes — sem substituir seu julgamento clínico.
        </p>
      </FadeIn>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold">Ricardo Silva</h3>
            <ul className="mt-4 space-y-2">
              {aiInsights.map((i) => (
                <li key={i} className="rounded-lg bg-secondary/80 px-3 py-2 text-sm">
                  {i}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold">Sugestões da semana</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              3 pacientes com proteína abaixo da meta em dias de treino. Considere ajustar lanche da tarde.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Marina Costa não abriu o app há 3 dias — mensagem de reengajamento sugerida.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
