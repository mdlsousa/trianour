"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Crown, Sparkles, Heart, Brain, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/motion";

const features = [
  { icon: Sparkles, title: "AI Copilot diário", desc: "Suporte contextual 24/7 alinhado ao seu plano" },
  { icon: Heart, title: "Assistente emocional", desc: "Check-ins e apoio em momentos de fome emocional" },
  { icon: Brain, title: "Adesão inteligente", desc: "Lembretes que aprendem sua rotina de treino" },
  { icon: Utensils, title: "Ideias contextuais", desc: "Sugestões quando você está com pressa ou cravings" },
];

export function PremiumView() {
  return (
    <div className="px-4 pt-6 pb-8">
      <FadeIn className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-gold to-accent shadow-lg shadow-gold/30">
          <Crown className="h-8 w-8 text-accent-foreground" />
        </div>
        <Badge variant="gold" className="mt-4">TriaNox Plus</Badge>
        <h1 className="font-display mt-4 text-2xl font-semibold">
          Nutrição premium, todos os dias
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          O upgrade que transforma adesão em hábito — com AI que parece humana.
        </p>
      </FadeIn>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 space-y-4"
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            className="flex gap-4 rounded-2xl border border-gold/20 bg-gradient-to-r from-gold/5 to-transparent p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15">
              <f.icon className="h-5 w-5 text-gold" />
            </div>
            <div>
              <p className="font-medium">{f.title}</p>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 rounded-3xl border border-gold/30 bg-card p-6 text-center">
        <p className="text-sm text-muted-foreground">A partir de</p>
        <p className="text-4xl font-semibold">
          R$ 49<span className="text-lg text-muted-foreground">/mês</span>
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Incluído no plano Premium da sua nutricionista
        </p>
        <ul className="mt-6 space-y-2 text-left text-sm">
          {["AI ilimitada", "Família até 5 membros", "Relatórios emocionais"].map((t) => (
            <li key={t} className="flex gap-2">
              <Check className="h-4 w-4 text-primary" /> {t}
            </li>
          ))}
        </ul>
        <Button variant="gold" size="lg" className="mt-6 w-full">
          Ativar TriaNox Plus
        </Button>
        <Button asChild variant="ghost" size="sm" className="mt-2 w-full">
          <Link href="/patient">Continuar no plano básico</Link>
        </Button>
      </div>
    </div>
  );
}
