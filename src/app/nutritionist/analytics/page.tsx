"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardMetrics, engagementChart } from "@/mock-data/nutritionist";
import { FadeIn } from "@/components/shared/motion";

export default function AnalyticsPage() {
  const max = Math.max(...engagementChart.map((d) => d.value));

  return (
    <div className="space-y-6">
      <FadeIn>
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <p className="text-muted-foreground">Métricas de impacto da sua prática digital</p>
      </FadeIn>
      <div className="grid gap-4 sm:grid-cols-3">
        <Card><CardContent className="p-6"><p className="text-sm text-muted-foreground">Receita estimada</p><p className="text-2xl font-semibold">{dashboardMetrics.revenue}</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-muted-foreground">Adesão média</p><p className="text-2xl font-semibold">{dashboardMetrics.adherenceAvg}%</p></CardContent></Card>
        <Card><CardContent className="p-6"><p className="text-sm text-muted-foreground">NPS pacientes</p><p className="text-2xl font-semibold">9.2</p></CardContent></Card>
      </div>
      <Card>
        <CardHeader><CardTitle>Tendência de engajamento</CardTitle></CardHeader>
        <CardContent>
          <div className="flex h-48 items-end gap-3">
            {engagementChart.map((d) => (
              <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-lg bg-primary/80"
                  style={{ height: `${(d.value / max) * 100}%`, minHeight: 8 }}
                />
                <span className="text-xs">{d.day}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
