"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/motion";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <FadeIn>
        <h1 className="text-2xl font-semibold">Configurações</h1>
      </FadeIn>
      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <label className="text-sm font-medium">Nome profissional</label>
            <Input defaultValue="Dra. Camila Rocha" className="mt-2" />
          </div>
          <div>
            <label className="text-sm font-medium">CRN</label>
            <Input defaultValue="CRN-3 12345" className="mt-2" />
          </div>
          <div>
            <label className="text-sm font-medium">Marca do consultório</label>
            <Input defaultValue="Nutri Camila — Experiências premium" className="mt-2" />
          </div>
          <Button variant="premium">Salvar alterações</Button>
        </CardContent>
      </Card>
    </div>
  );
}
