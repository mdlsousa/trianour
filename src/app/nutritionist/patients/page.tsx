"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { patients } from "@/mock-data/nutritionist";
import { routes } from "@/design-system/tokens";
import { FadeIn } from "@/components/shared/motion";

export default function PatientsPage() {
  return (
    <div className="space-y-6">
      <FadeIn>
        <h1 className="text-2xl font-semibold">Pacientes</h1>
        <p className="text-muted-foreground">24 pacientes ativos na sua prática</p>
      </FadeIn>
      <div className="grid gap-4 md:grid-cols-2">
        {patients.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            <CardContent className="p-0">
              <Link
                href={routes.patient.home}
                className="flex items-center gap-4 p-6 transition-colors hover:bg-secondary/30"
              >
                <Avatar className="h-12 w-12">
                  <AvatarFallback>{p.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{p.goal}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Último acesso: {p.lastActive} · Humor: {p.emotional}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-primary">{p.adherence}%</p>
                  <Badge className="mt-1">Adesão</Badge>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button variant="premium">+ Convidar paciente</Button>
    </div>
  );
}
