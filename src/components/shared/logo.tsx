import Link from "next/link";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link href={href} className={cn("flex items-center gap-2.5", className)}>
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sage shadow-sm shadow-primary/20">
        <Leaf className="h-5 w-5 text-primary-foreground" strokeWidth={2.2} />
      </div>
      <span className="text-lg font-semibold tracking-tight">
        Tria<span className="text-primary">Nox</span>
      </span>
    </Link>
  );
}
