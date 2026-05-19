"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { aiConversation, aiInsights } from "@/mock-data/ai-chat";
import { FadeIn } from "@/components/shared/motion";

export function AIChatView() {
  const [messages, setMessages] = useState(aiConversation);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [
      ...m,
      { id: String(Date.now()), role: "user", content: input, timestamp: "agora" },
    ]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: String(Date.now() + 1),
          role: "assistant",
          content:
            "Entendo! Com base no seu plano de hoje, sugiro algo com proteína e doçura natural — isso costuma resolver cravings pós-treino sem sair da meta.",
          suggestions: ["Ver opção anti-craving", "Falar com Dra. Camila"],
          timestamp: "agora",
        },
      ]);
    }, 800);
  };

  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col px-4 pt-6">
      <FadeIn>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-sage">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold">AI Nutrition</h1>
            <p className="text-xs text-muted-foreground">Contextual · Humano · Premium</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {aiInsights.map((i) => (
            <Badge key={i} variant="secondary" className="text-[10px]">
              {i}
            </Badge>
          ))}
        </div>
      </FadeIn>

      <div className="mt-4 flex-1 space-y-4 overflow-y-auto pb-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary/10 bg-gradient-to-br from-primary/5 to-sage/5"
              }`}
            >
              <p className="whitespace-pre-line">{msg.content}</p>
              {msg.suggestions && (
                <div className="mt-3 space-y-2">
                  {msg.suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="block w-full rounded-xl border border-primary/20 bg-card/80 px-3 py-2 text-left text-xs transition-colors hover:bg-card"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
              <p className="mt-2 text-[10px] opacity-60">{msg.timestamp}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2 border-t border-border/50 pt-4">
        <Input
          placeholder="Como você está se sentindo?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <Button variant="premium" size="icon" onClick={send}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
