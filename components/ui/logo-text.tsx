"use client";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <Logo className="h-16 w-16 text-primary" />

      <span className="text-sm sm:text-xl font-medium text-foreground">
        <span className="text-secondary">Boxing Club </span>Croix Rousse
      </span>
    </div>
  );
}
