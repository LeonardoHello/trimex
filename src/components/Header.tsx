"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/utils/cn";

import { Menu } from "lucide-react";
import Logo from "./Logo";
import LogoIcon from "./LogoIcon";
import { Button } from "./ui/button";
import PulsatingButton from "./ui/pulsating-button";

export default function Header() {
  const pathname = usePathname();

  const prevScrollPos = useRef(0);
  const [isTop, setIsTop] = useState(true);
  const [displayHeader, setDisplayHeader] = useState(true);

  useEffect(() => {
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }

    function onScroll() {
      const scrollPos = window.scrollY;

      if (scrollPos === 0) {
        setIsTop(true);
      } else if (prevScrollPos.current > scrollPos) {
        setDisplayHeader(true);
        setIsTop(false);
      } else {
        setDisplayHeader(false);
        setIsTop(false);
      }

      prevScrollPos.current = window.scrollY;
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-20 flex h-24 w-screen items-center justify-between gap-12 px-8 py-2 transition-all duration-300 lg:px-12",
        {
          "h-16 bg-background/80 ring-1 ring-background backdrop-blur": !isTop,
          "-top-16": !displayHeader,
        },
      )}
    >
      <div className="relative flex w-40 self-stretch transition-all">
        <Logo
          className={cn(
            "absolute left-0 top-0 size-36 self-start fill-foreground transition-all duration-300",
            {
              "-top-20 opacity-0 blur": !isTop,
            },
          )}
        />

        <LogoIcon
          className={cn(
            "duraiton-300 absolute -left-20 top-0 size-16 self-center fill-foreground opacity-0 blur transition-all duration-300",
            {
              "left-0 opacity-100 blur-none": !isTop,
            },
          )}
        />
      </div>

      <nav className="hidden items-center lg:flex">
        <Button
          variant={pathname === "/" ? "linkHover1" : "linkHover2"}
          asChild
        >
          <Link href={"/"}>Home</Link>
        </Button>
        <Button
          variant={pathname === "/cjenik" ? "linkHover1" : "linkHover2"}
          asChild
        >
          <Link href={"/cjenik"}>Cjenik</Link>
        </Button>
        <Button
          variant={pathname === "/radovi" ? "linkHover1" : "linkHover2"}
          asChild
        >
          <Link href={"/radovi"}>Radovi</Link>
        </Button>
        <Button
          variant={pathname === "/kontakt" ? "linkHover1" : "linkHover2"}
          asChild
        >
          <Link href={"/kontakt"}>Kontakt</Link>
        </Button>
      </nav>

      <Link href={`/kontakt`}>
        <PulsatingButton
          className="hidden w-40 text-nowrap bg-primary px-8 text-primary-foreground active:scale-95 lg:flex"
          pulseColor="hsl(var(--primary))"
        >
          Pošaljite upit
        </PulsatingButton>
      </Link>

      <Button
        variant={"ghost"}
        size={"icon"}
        className="hover:bg-primary/20 lg:hidden"
      >
        <Menu className="size-6" />
      </Button>
    </header>
  );
}
