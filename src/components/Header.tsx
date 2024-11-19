"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/utils/cn";
import LogoIcon from "./LogoIcon";
import LogoText from "./LogoText";
import MenuSheet from "./MenuSheet";
import { Button } from "./ui/button";
import PulsatingButton from "./ui/pulsating-button";

export default function Header() {
  const pathname = usePathname();

  const prevScrollPos = useRef(0);
  const [isTop, setIsTop] = useState(true);
  const [displayHeader, setDisplayHeader] = useState(true);

  useEffect(() => {
    // u slučaju refresh page-a
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }

    function onScroll() {
      const scrollPos = window.scrollY;

      if (scrollPos === 0) {
        setIsTop(true);
        setDisplayHeader(true);
      } else if (prevScrollPos.current > scrollPos) {
        setIsTop(false);
        setDisplayHeader(true);
      } else {
        setIsTop(false);
        setDisplayHeader(false);
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
        "fixed top-0 z-40 flex h-14 w-screen items-center justify-between gap-3 px-6 py-2 transition-all duration-300 lg:h-16 lg:px-12",
        {
          "bg-background/80 ring-1 ring-border/80 backdrop-blur": !isTop,
          "pointer-events-none -top-14 lg:-top-16": !displayHeader,
        },
      )}
    >
      <Link
        href={"/"}
        className="flex items-center justify-start gap-0.5 self-stretch fill-foreground"
      >
        <LogoIcon className="h-full w-auto transition-all duration-300" />
        <LogoText className="h-2/3 w-auto transition-all duration-300" />
      </Link>

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

      <MenuSheet pathname={pathname}>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="hover:bg-primary/20 lg:hidden"
        >
          <Menu className="size-6" />
        </Button>
      </MenuSheet>
    </header>
  );
}
