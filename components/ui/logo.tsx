"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import LogoImg from "../../public/images/logo-text.png";
import { cn } from "@/lib/utils";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image src={LogoImg} alt="Logo" className={cn(className, "!w-auto")} />
  );
}
