import Link from "next/link";
import { TriaNourLogoMark } from "@/components/shared/trianour-logo-mark";
import { brand } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  href = "/",
  showWordmark = true,
  size = "md",
}: {
  className?: string;
  href?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const markSize = size === "sm" ? 28 : size === "lg" ? 44 : 36;
  const textClass =
    size === "sm"
      ? "text-base"
      : size === "lg"
        ? "text-xl"
        : "text-lg";

  return (
    <Link href={href} className={cn("flex items-center gap-2.5", className)}>
      <TriaNourLogoMark size={markSize} />
      {showWordmark && (
        <span className={cn("font-semibold tracking-tight", textClass)}>
          Tria<span className="text-primary">Nour</span>
        </span>
      )}
    </Link>
  );
}

export function LogoCompact({ className }: { className?: string }) {
  return (
    <Link href="/patient" className={cn("flex items-center gap-2", className)}>
      <TriaNourLogoMark size={32} />
      <span className="text-sm font-semibold tracking-tight">
        {brand.name}
      </span>
    </Link>
  );
}
