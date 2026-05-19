"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  UtensilsCrossed,
  Sparkles,
  Users,
  Crown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { routes } from "@/design-system/tokens";

const tabs = [
  { href: routes.patient.home, label: "Hoje", icon: Home },
  { href: routes.patient.meals, label: "Plano", icon: UtensilsCrossed },
  { href: routes.patient.ai, label: "AI", icon: Sparkles, highlight: true },
  { href: routes.patient.family, label: "Família", icon: Users },
  { href: routes.patient.premium, label: "Plus", icon: Crown },
];

export function PatientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative mx-auto min-h-screen max-w-lg bg-background pb-24">
      <div className="gradient-mesh pointer-events-none fixed inset-0 max-w-lg mx-auto opacity-60" />
      <div className="relative">{children}</div>

      <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 safe-bottom">
        <div className="mx-3 mb-3 rounded-2xl border border-border/50 bg-glass px-2 py-2 shadow-lg shadow-black/5 backdrop-blur-xl">
          <div className="flex items-center justify-around">
            {tabs.map((tab) => {
              const active = pathname === tab.href;
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={cn(
                    "relative flex flex-col items-center gap-0.5 rounded-xl px-3 py-2 text-[10px] font-medium transition-all",
                    active ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {tab.highlight && (
                    <span className="absolute -top-1 right-1 h-2 w-2 rounded-full bg-gold" />
                  )}
                  <Icon className={cn("h-5 w-5", active && "text-primary")} />
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
