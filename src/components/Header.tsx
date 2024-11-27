"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import useHydration from "@/hooks/useHydration";
import { cn } from "@/utils/cn";
import LogoHorizontal from "./LogoHorizontal";
import MenuSheet from "./MenuSheet";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { RainbowButton } from "./ui/rainbow-button";

interface NavItem {
  name: string;
  href: string;
}

const navs: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Cjenik", href: "/cjenik" },
  { name: "Radovi", href: "/radovi" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [isTop, setIsTop] = useState(true);
  const targetRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      setIsTop(entries[0].isIntersecting);
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const isHomePage = pathname === "/";

  return (
    <>
      <div
        ref={targetRef}
        className="pointer-events-none absolute left-0 top-0"
      />
      <header className="fixed top-0 z-40 flex h-14 w-screen items-center justify-between gap-3 bg-background/80 px-6 py-2 ring-1 ring-border/80 backdrop-blur lg:h-16 lg:bg-transparent lg:px-12 lg:ring-0 lg:backdrop-blur-none">
        <div
          className={cn(
            "flex w-52 self-stretch lg:relative lg:top-0 lg:transition-all lg:duration-200",
            {
              "lg:pointer-events-none lg:-top-[72px] lg:blur": !isTop,
            },
          )}
        >
          <LogoHorizontal
            className={cn("h-full w-auto fill-foreground", {
              "lg:fill-[hsl(120_20%_95%)]": isHomePage,
            })}
          />
        </div>

        <nav className="hidden items-center overflow-hidden rounded-full bg-background/80 p-1 ring-1 ring-border/60 backdrop-blur lg:flex">
          {navs.map((option) => (
            <li
              key={option.name}
              className={cn("relative z-[1] list-none", {
                "z-0": pathname === option.href,
              })}
            >
              {pathname === option.href && (
                <motion.div
                  layoutId="active-tab"
                  // @ts-expect-error
                  className="absolute inset-0 size-full rounded-full bg-primary"
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    velocity: 2,
                  }}
                />
              )}
              <Link
                href={option.href}
                className={cn(
                  "relative block px-4 py-2 text-sm font-medium tracking-tight transition-colors",
                  pathname === option.href
                    ? "text-white"
                    : !isTop
                      ? "text-foreground hover:text-foreground/60"
                      : "text-foreground hover:text-foreground/60",
                )}
              >
                {option.name}
              </Link>
            </li>
          ))}

          <Link
            href={"/kontakt#upit"}
            className={cn(
              "relative -right-1 max-w-0 justify-self-center rounded-full transition-all duration-200 ease-linear",
              { "right-0 ml-1 max-w-32": !isTop },
            )}
          >
            <RainbowButton className="h-full text-nowrap rounded-full bg-foreground px-4 text-sm text-background active:scale-95">
              Pošaljite upit
            </RainbowButton>
          </Link>
        </nav>

        <div
          className={cn(
            "relative top-0 hidden items-center gap-3 transition-all duration-200 lg:flex",
            {
              "pointer-events-none -top-[72px] blur": !isTop,
            },
          )}
        >
          <ModeToggle />

          <Link href={"/kontakt#upit"}>
            <RainbowButton
              className={cn(
                "w-52 bg-foreground px-8 text-background active:scale-95",
                {
                  "bg-[hsl(0_0%_90%)] text-[hsl(120_25%_10%)]": isHomePage,
                },
              )}
            >
              Pošaljite upit
            </RainbowButton>
          </Link>
        </div>

        <MenuSheet pathname={pathname}>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="hover:bg-primary/20 lg:hidden"
          >
            <Menu
              className={cn("size-6", {
                "lg:text-[hsl(120_20%_95%)]": isHomePage,
              })}
            />
          </Button>
        </MenuSheet>
      </header>
    </>
  );
}
