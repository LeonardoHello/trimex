"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/utils/cn";
import { Menu } from "lucide-react";
import logoIconOnly from "public/logo-icon-only.svg";
import logo from "public/logo.svg";
import Logo from "./Logo";
import { Button } from "./ui/button";

export default function Header() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isTop, setIsTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setIsTop(entry.isIntersecting);
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={targetRef} className="absolute left-0 top-0 bg-transparent" />
      <header
        className={cn(
          "fixed z-10 flex max-h-32 w-screen items-center justify-between p-8 transition-all sm:px-16",
          {
            "border-b bg-background/30 px-6 py-2 backdrop-blur": !isTop,
          },
        )}
      >
        <Logo src={isTop ? logo : logoIconOnly} size={isTop ? 108 : 64} />

        <nav className="hidden items-center gap-4 md:flex">
          <Button variant={"link"} asChild>
            <Link
              href={"/"}
              className={cn("text-primary-foreground", {
                underline: pathname === "/",
              })}
            >
              Home
            </Link>
          </Button>
          <Button variant={"link"} asChild>
            <Link
              href={"/cjenik"}
              className={cn("text-primary-foreground", {
                underline: pathname === "/cjenik",
              })}
            >
              Cjenik
            </Link>
          </Button>
          <Button variant={"link"} asChild>
            <Link
              href={"/radovi"}
              className={cn("text-primary-foreground", {
                underline: pathname === "/radovi",
              })}
            >
              Radovi
            </Link>
          </Button>
          <Button variant={"link"} asChild>
            <Link
              href={"/kontakt"}
              className={cn("text-primary-foreground", {
                underline: pathname === "/kontakt",
              })}
            >
              Kontakt
            </Link>
          </Button>
        </nav>

        <Button
          size={isTop ? "lg" : "default"}
          className="hidden transition-all md:inline-flex"
        >
          Pošaljite upit
        </Button>

        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Menu />
        </Button>
      </header>
    </>
  );
}
