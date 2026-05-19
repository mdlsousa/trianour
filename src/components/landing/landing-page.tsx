"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Users,
  Check,
  Play,
  Star,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { routes, brand } from "@/design-system/tokens";
import { FadeIn } from "@/components/shared/motion";

const pricing = [
  {
    name: "Essencial",
    price: "R$ 149",
    desc: "Para nutricionistas iniciando a transição digital",
    features: ["Até 15 pacientes", "Planos visuais", "App do paciente", "Lembretes"],
  },
  {
    name: "Premium",
    price: "R$ 299",
    desc: "Experiência completa + AI para seus pacientes",
    features: [
      "Pacientes ilimitados",
      "AI Copilot",
      "Nutrição familiar",
      "Analytics avançado",
      "White-label leve",
    ],
    featured: true,
  },
  {
    name: "Studio",
    price: "Sob consulta",
    desc: "Para clínicas premium e equipes",
    features: ["Multi-nutricionista", "API", "Onboarding dedicado"],
  },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#produto" className="hover:text-foreground">Produto</a>
            <a href="#nutricionistas" className="hover:text-foreground">Nutricionistas</a>
            <a href="#familia" className="hover:text-foreground">Família</a>
            <a href="#precos" className="hover:text-foreground">Preços</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="sm">
              <Link href={routes.nutritionist.dashboard}>Entrar</Link>
            </Button>
            <Button asChild variant="premium" size="sm">
              <Link href={routes.patient.home}>
                Ver demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="gradient-mesh relative overflow-hidden px-6 pb-24 pt-16 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <Badge variant="gold" className="mb-6">
              <Sparkles className="mr-1 h-3 w-3" /> Nutrition experience platform
            </Badge>
            <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl md:leading-[1.05]">
              {brand.hero}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              O Spotify da nutrição personalizada. Nutricionista cria. AI apoia.
              Família vive a experiência — sem PDFs, sem caos no WhatsApp.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="premium" size="lg">
                <Link href={routes.nutritionist.dashboard}>
                  Começar como nutricionista
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={routes.patient.home}>
                  <Play className="h-4 w-4" /> Experiência do paciente
                </Link>
              </Button>
            </div>
          </FadeIn>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative mx-auto mt-16 max-w-4xl"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-gold/10 to-sage/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border/60 bg-secondary/50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs text-muted-foreground">patient.trianox.app — Ricardo</span>
              </div>
              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-r border-border/60 bg-gradient-to-br from-emerald-50 to-cream p-6 dark:from-emerald-950/30 dark:to-background">
                  <p className="text-sm text-muted-foreground">Bom dia 👋</p>
                  <p className="mt-1 text-xl font-semibold">Ricardo, hoje é treino intervalado 🏃</p>
                  <div className="mt-4 space-y-2">
                    {["Bowl proteico ✓", "Shake pré-treino ✓", "Bowl mediterrâneo"].map((m, i) => (
                      <div key={m} className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 text-sm dark:bg-white/5">
                        <span className={i < 2 ? "text-primary" : "text-muted-foreground"}>{i < 2 ? "✓" : "○"}</span>
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-primary">AI Support</p>
                  <div className="mt-3 space-y-3">
                    <div className="rounded-2xl bg-secondary px-4 py-3 text-sm">Estou com vontade de doces 😅</div>
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm">
                      Sua proteína ficou baixa hoje. Que tal iogurte + whey + banana congelada?
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Badge>87% adesão</Badge>
                    <Badge variant="success">Família ativa</Badge>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="produto" className="px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Nutrição que evolui além do PDF
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Planos vivos, dashboards modernos, receitas, listas e acompanhamento contínuo —
            tudo em uma experiência premium.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            { icon: Heart, title: "Adesão emocional", desc: "Check-ins, celebrações e suporte humano que mantém o paciente engajado." },
            { icon: Sparkles, title: "AI contextual", desc: "Assistente que entende o plano, treino e cravings — sem respostas genéricas." },
            { icon: Users, title: "Nutrição familiar", desc: "Uma refeição, porções adaptadas. Menos cozinha, mais conexão." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium p-8"
            >
              <item.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="nutricionistas" className="bg-secondary/30 px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <Badge className="mb-4">Para nutricionistas</Badge>
            <h2 className="font-display text-3xl font-semibold">
              Saia do Canva e do WhatsApp
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Planos visuais que seus pacientes amam abrir",
                "Dashboard de adesão e pacientes em risco",
                "Menos mensagens repetitivas, mais impacto",
                "Percepção premium = retenção e indicações",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8" variant="premium">
              <Link href={routes.nutritionist.dashboard}>Ver dashboard</Link>
            </Button>
          </div>
          <div className="card-premium p-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Pacientes ativos", value: "24" },
                { label: "Adesão média", value: "84%" },
                { label: "Em risco", value: "3" },
                { label: "Engajamento", value: "92%" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-secondary/80 p-4">
                  <p className="text-2xl font-semibold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="familia" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Badge variant="gold" className="mb-4">Diferencial</Badge>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Uma refeição. Quatro experiências.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Ricardo, Fernanda, Helena e Theo — mesma base culinária, porções e objetivos personalizados.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Ricardo", note: "Pós-treino · 520 kcal" },
              { name: "Fernanda", note: "Anti-inflamatório · 420 kcal" },
              { name: "Helena", note: "Kids · 320 kcal" },
              { name: "Theo", note: "Adaptado · 280 kcal" },
            ].map((m) => (
              <div key={m.name} className="card-premium p-5 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                  {m.name[0]}
                </div>
                <p className="mt-3 font-medium">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="precos" className="bg-secondary/30 px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl font-semibold">Planos que escalam com você</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`card-premium p-8 text-left ${plan.featured ? "ring-2 ring-primary/30" : ""}`}
              >
                {plan.featured && (
                  <Badge variant="gold" className="mb-4">
                    <Star className="mr-1 h-3 w-3" /> Mais popular
                  </Badge>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full"
                  variant={plan.featured ? "premium" : "outline"}
                  asChild
                >
                  <Link href={routes.nutritionist.dashboard}>Começar</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-primary to-sage p-12 text-center text-primary-foreground">
          <h2 className="font-display text-3xl font-semibold">
            Pronto para impressionar seus pacientes?
          </h2>
          <p className="mt-4 opacity-90">
            Mostre que nutrição premium não precisa parecer planilha de hospital.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href={routes.patient.home}>Explorar demo completa</Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border/60 px-6 py-12 text-center text-sm text-muted-foreground">
        <Logo href="/" className="justify-center" />
        <p className="mt-4">© 2026 TriaNox. Mockup investidor — sem backend.</p>
      </footer>
    </div>
  );
}
