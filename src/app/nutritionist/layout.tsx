import { NutritionistShell } from "@/layouts/nutritionist-shell";

export default function NutritionistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NutritionistShell>{children}</NutritionistShell>;
}
