"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/utils/cn";

import { Menu } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { RainbowButton } from "./ui/rainbow-button";

export default function Header() {
  const pathname = usePathname();

  const [isTop, setIsTop] = useState(true);

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
      } else {
        setIsTop(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-10 flex w-screen items-center justify-between gap-12 px-8 py-2 lg:items-start lg:px-12 lg:py-6",
        {
          "transition-color border-b bg-background/80 backdrop-blur duration-300 lg:border-b-0 lg:bg-transparent lg:backdrop-blur-none":
            !isTop,
        },
      )}
    >
      <Logo isTop={isTop} />

      <nav
        className={cn(
          "relative top-0 hidden items-center rounded-full p-1 pl-2 transition-all duration-300 lg:flex",
          {
            "bg-background/80 backdrop-blur": !isTop,
          },
        )}
      >
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

        <div
          className={cn(
            "max-w-0 self-center overflow-hidden transition-all duration-300",
            {
              "max-w-96": !isTop,
            },
          )}
        >
          <RainbowButton className="h-full whitespace-nowrap rounded-full bg-foreground/90 text-sm text-primary-foreground active:scale-95">
            pošaljite upit
          </RainbowButton>
        </div>
      </nav>

      <RainbowButton
        className={cn(
          "-top-10 hidden w-44 bg-foreground/90 text-primary-foreground opacity-0 blur transition-all duration-300 active:scale-95 lg:inline-flex",
          {
            "top-0 opacity-100 blur-none": isTop,
          },
        )}
      >
        pošaljite upit
      </RainbowButton>

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
