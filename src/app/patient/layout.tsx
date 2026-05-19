import { PatientShell } from "@/layouts/patient-shell";
import { MealsProvider } from "@/features/patient/meals-provider";

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MealsProvider>
      <PatientShell>{children}</PatientShell>
    </MealsProvider>
  );
}
