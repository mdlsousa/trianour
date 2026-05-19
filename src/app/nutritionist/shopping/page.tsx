"use client";

import { Card, CardContent } from "@/components/ui/card";
import { shoppingList } from "@/mock-data/shopping";
import { FadeIn } from "@/components/shared/motion";

export default function ShoppingPage() {
  const grouped = shoppingList.reduce(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, typeof shoppingList>
  );

  return (
    <div className="space-y-6">
      <FadeIn>
        <h1 className="text-2xl font-semibold">Listas de compras</h1>
        <p className="text-muted-foreground">Geradas automaticamente dos planos</p>
      </FadeIn>
      {Object.entries(grouped).map(([cat, items]) => (
        <Card key={cat}>
          <CardContent className="p-6">
            <h3 className="font-medium text-primary">{cat}</h3>
            <ul className="mt-4 space-y-2">
              {items.map((i) => (
                <li
                  key={i.id}
                  className={`flex justify-between text-sm ${i.checked ? "text-muted-foreground line-through" : ""}`}
                >
                  <span>{i.item}</span>
                  <span>{i.qty}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
