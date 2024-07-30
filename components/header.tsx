"use client";

import { LogoText } from "@/components/ui/logo-text";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useMediaQuery from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ContactButton from "./contact-button";

export default function Header() {
  const { isMobile } = useMediaQuery();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav
        id="navbar"
        className={cn(
          "fixed z-[100] bg-background dark:bg-opacity-50 w-full h-fit shadow-md",
          "bg-opacity-90 backdrop-blur-md",
        )}
      >
        <div className="mx-auto px-5 sm:px-10 max-w-7xl">
          <div className="relative flex flex-row gap-5 items-center justify-between h-20">
            <div className="relative z-20 flex justify-between w-max">
              <Link href="/">
                <LogoText />
              </Link>
            </div>

            {!isMobile && (
              <>
                <div className="flex items-center gap-8 font-medium">
                  <Link href="/">Accueil</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/about">À propos</Link>

                  <ContactButton />
                </div>
              </>
            )}

            {isMobile && (
              <>
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <MenuIcon />
                  </SheetTrigger>
                  <SheetContent side="left" className="!px-0">
                    <div className="px-3 py-10 flex flex-col justify-between items-center h-full">
                      <LogoText />

                      <div className="flex flex-col gap-2 items-center w-full">
                        <Link href="/">Accueil</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/about">À propos</Link>
                      </div>

                      <div className="flex items-center justify-center flex-wrap gap-2">
                        <ContactButton />
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
