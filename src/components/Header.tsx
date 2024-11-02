"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/utils/cn";

import { Menu } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import PulsatingButton from "./ui/pulsating-button";

export default function Header() {
  const pathname = usePathname();

  const prevScrollPosRef = useRef<number>(0);
  const [navbarVisibility, setNavbarVisibility] = useState(true);

  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY;

      if (scrollPos === 0) {
        setNavbarVisibility(true);
      } else if (prevScrollPosRef.current > scrollPos) {
        setNavbarVisibility(true);
      } else {
        setNavbarVisibility(false);
      }

      prevScrollPosRef.current = window.scrollY;
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed -top-16 z-10 flex h-16 items-center justify-center gap-12 self-center rounded-full border bg-background/30 px-8 py-2 backdrop-blur transition-all",
        {
          "top-4": navbarVisibility,
        },
      )}
    >
      <Logo />

      <nav className="hidden items-center lg:flex">
        <Button
          variant={"link"}
          className={cn({
            underline: pathname === "/",
          })}
          asChild
        >
          <Link href={"/"}>Home</Link>
        </Button>
        <Button
          variant={"link"}
          className={cn({
            underline: pathname === "/cjenik",
          })}
          asChild
        >
          <Link href={"/cjenik"}>Cjenik</Link>
        </Button>
        <Button
          variant={"link"}
          className={cn({
            underline: pathname === "/radovi",
          })}
          asChild
        >
          <Link href={"/radovi"}>Radovi</Link>
        </Button>
        <Button
          variant={"link"}
          className={cn({
            underline: pathname === "/kontakt",
          })}
          asChild
        >
          <Link href={"/kontakt"}>Kontakt</Link>
        </Button>
      </nav>

      <PulsatingButton className="hidden lg:flex">
        Pošaljite upit
      </PulsatingButton>

      <Button variant={"ghost"} size={"icon"} className="lg:hidden">
        <Menu />
      </Button>
    </header>
  );
}
