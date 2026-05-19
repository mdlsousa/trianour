"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  UtensilsCrossed,
  BookOpen,
  Sparkles,
  ShoppingCart,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { routes } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

const nav = [
  { href: routes.nutritionist.dashboard, label: "Dashboard", icon: LayoutDashboard },
  { href: routes.nutritionist.patients, label: "Pacientes", icon: Users },
  { href: routes.nutritionist.mealPlans, label: "Planos", icon: UtensilsCrossed },
  { href: routes.nutritionist.recipes, label: "Receitas", icon: BookOpen },
  { href: routes.nutritionist.ai, label: "AI Assistant", icon: Sparkles },
  { href: routes.nutritionist.shopping, label: "Listas", icon: ShoppingCart },
  { href: routes.nutritionist.analytics, label: "Analytics", icon: BarChart3 },
  { href: routes.nutritionist.settings, label: "Configurações", icon: Settings },
];

export function NutritionistShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebar = (
    <aside className="flex h-full flex-col border-r border-border/60 bg-card/50 backdrop-blur-sm">
      <div className="border-b border-border/60 p-5">
        <Logo href="/" />
        <p className="mt-3 text-xs text-muted-foreground">Portal Nutricionista</p>
      </div>
      <nav className="flex-1 space-y-1 p-3">
        {nav.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-border/60 p-4">
        <div className="rounded-xl bg-gradient-to-br from-primary/10 to-sage/10 p-4">
          <p className="text-xs font-medium text-primary">Preview Paciente</p>
          <p className="mt-1 text-xs text-muted-foreground">Veja a experiência Ricardo</p>
          <Button asChild size="sm" variant="outline" className="mt-3 w-full">
            <Link href={routes.patient.home}>Abrir app</Link>
          </Button>
        </div>
      </div>
    </aside>
  );

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden w-64 shrink-0 lg:block">{sidebar}</div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              className="fixed inset-y-0 left-0 z-50 w-64 lg:hidden"
            >
              {sidebar}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-border/60 bg-background/80 px-4 py-3 backdrop-blur-xl lg:px-8">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Bem-vinda,</p>
            <p className="font-semibold">Dra. Camila Rocha</p>
          </div>
          <Button asChild variant="premium" size="sm">
            <Link href={routes.patient.home}>Demo paciente</Link>
          </Button>
        </header>
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
