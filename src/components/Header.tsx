"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import useHydration from "@/hooks/useHydration";
import { cn } from "@/utils/cn";
import LogoHorizontal from "./LogoHorizontal";
import MenuSheet from "./MenuSheet";
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

  const pathname = usePathname();

  const hydrated = useHydration();

  useEffect(() => {
    // u slučaju refresh page-a
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }

    function onScroll() {
      if (window.scrollY === 0) {
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
        "lg: fixed top-0 z-40 flex h-14 w-screen items-center justify-between gap-3 bg-background/80 px-6 py-2 ring-1 ring-border/80 backdrop-blur lg:h-16 lg:bg-transparent lg:px-12 lg:ring-0 lg:backdrop-blur-none",
      )}
    >
      <div
        className={cn(
          "flex self-stretch lg:relative lg:top-0 lg:transition-all lg:duration-200",
          {
            "lg:-top-[74px]": !isTop,
          },
        )}
      >
        {hydrated && (
          <LogoHorizontal
            className={cn("h-full w-auto fill-foreground", {
              "lg:fill-[hsl(120_20%_95%)]": pathname === "/",
            })}
          />
        )}
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
                "relative block px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-200",
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
            "relative -right-3 max-w-0 justify-self-center rounded-full transition-all duration-200 ease-linear",
            { "right-0 ml-1 max-w-32": !isTop },
          )}
        >
          <RainbowButton className="h-full text-nowrap rounded-full bg-foreground px-4 text-sm text-background">
            Pošaljite upit
          </RainbowButton>
        </Link>
      </nav>

      <Link
        href={"/kontakt#upit"}
        className={cn("relative top-0 ml-12 transition-all duration-200", {
          "-top-[74px]": !isTop,
        })}
      >
        <RainbowButton
          className={cn(
            "hidden bg-foreground px-8 text-background active:scale-95 lg:flex",
            {
              "bg-[hsl(0_0%_90%)] text-[hsl(120_25%_10%)]": pathname === "/",
            },
          )}
        >
          Pošaljite upit
        </RainbowButton>
      </Link>

      <MenuSheet pathname={pathname}>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="hover:bg-primary/20 lg:hidden"
        >
          <Menu
            className={cn("size-6", {
              "lg:text-[hsl(120_20%_95%)]": pathname === "/",
            })}
          />
        </Button>
      </MenuSheet>
    </header>
  );
}
