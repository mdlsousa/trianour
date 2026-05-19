import { redirect } from "next/navigation";
import { routes } from "@/design-system/tokens";

export default function NutritionistIndex() {
  redirect(routes.nutritionist.dashboard);
}
