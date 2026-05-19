"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  AlertTriangle,
  Heart,
  Utensils,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  dashboardMetrics,
  patients,
  skippedMeals,
  engagementChart,
} from "@/mock-data/nutritionist";
import { routes } from "@/design-system/tokens";
import { FadeIn } from "@/components/shared/motion";

const statusBadge = {
  "on-track": { label: "No ritmo", variant: "success" as const },
  "at-risk": { label: "Em risco", variant: "warning" as const },
  attention: { label: "Atenção", variant: "secondary" as const },
};

export function DashboardView() {
  const maxEng = Math.max(...engagementChart.map((d) => d.value));

  return (
    <div className="space-y-8">
      <FadeIn>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Dashboard
        </h1>
        <p className="mt-1 text-muted-foreground">
          Visão geral da sua prática — segunda, 18 de maio
        </p>
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Pacientes ativos", value: dashboardMetrics.activePatients, icon: TrendingUp },
          { label: "Adesão média", value: `${dashboardMetrics.adherenceAvg}%`, icon: Heart },
          { label: "Em risco", value: dashboardMetrics.atRisk, icon: AlertTriangle },
          { label: "Engajamento", value: `${dashboardMetrics.engagement}%`, icon: Utensils },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card>
              <CardContent className="flex items-start justify-between p-6">
                <div>
                  <p className="text-sm text-muted-foreground">{m.label}</p>
                  <p className="mt-1 text-3xl font-semibold">{m.value}</p>
                </div>
                <div className="rounded-xl bg-primary/10 p-2.5">
                  <m.icon className="h-5 w-5 text-primary" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pacientes recentes</CardTitle>
            <Button asChild variant="ghost" size="sm">
              <Link href={routes.nutritionist.patients}>
                Ver todos <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {patients.map((p) => {
              const badge = statusBadge[p.status];
              return (
                <Link
                  key={p.id}
                  href={routes.patient.home}
                  className="flex items-center gap-4 rounded-xl border border-border/50 p-4 transition-colors hover:bg-secondary/50"
                >
                  <Avatar>
                    <AvatarFallback>{p.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.goal}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{p.adherence}%</p>
                    <Badge variant={badge.variant} className="mt-1">
                      {badge.label}
                    </Badge>
                  </div>
                </Link>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Refeições mais puladas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skippedMeals.map((s) => (
              <div key={s.meal}>
                <div className="flex justify-between text-sm">
                  <span>{s.meal}</span>
                  <span className="text-muted-foreground">{s.count}x</span>
                </div>
                <Progress value={(s.count / 10) * 100} className="mt-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Engajamento semanal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-40 items-end justify-between gap-2">
            {engagementChart.map((d) => (
              <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(d.value / maxEng) * 100}%` }}
                  className="w-full min-h-[4px] rounded-t-lg bg-gradient-to-t from-primary to-sage"
                />
                <span className="text-xs text-muted-foreground">{d.day}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
