"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/utils/cn";
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
          "fixed z-10 flex w-screen items-center justify-between px-16 py-8 transition-all",
          {
            "border-b bg-background/60 py-2 backdrop-blur-sm": !isTop,
          },
        )}
      >
        <Link href={"/"}>
          <Logo />
        </Link>

        <nav
          className={cn("flex items-center gap-4 transition-all", {
            "gap-8": isTop,
          })}
        >
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

        <Button>Pošaljite upit</Button>
      </header>
    </>
  );
}
