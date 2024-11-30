import React from "react";
import Link from "next/link";

import { Axe, House, Phone, Tag } from "lucide-react";
import { Header } from "payload-types";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/utils/cn";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { RainbowButton } from "./ui/rainbow-button";

export default function MenuSheet({
  children,
  pathname,
  header,
}: {
  children: React.ReactNode;
  pathname: string;
  header: Header;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col gap-5 overflow-y-scroll bg-[url('/texture.svg')] px-3">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigacija</SheetTitle>
          <SheetDescription>
            Istražite naše profesionalne usluge vrtlarstva, od uređenja vrtova
            do čišćenja vanjskih površina. Ovdje možete pronaći sve što je
            potrebno za održavanje vašeg vanjskog prostora urednim i lijepim.
          </SheetDescription>
        </SheetHeader>

        <Logo className="max-h-32 min-h-32 w-auto fill-foreground" />

        <nav className="flex flex-col gap-1 self-stretch">
          {header.navigation.map((navigation) => (
            <li key={navigation.id} className="flex list-none">
              <SheetClose asChild>
                <Button
                  asChild
                  variant={"ghost"}
                  size={"lg"}
                  className={cn(
                    "grow justify-start gap-4 self-center bg-background px-4 hover:bg-background hover:text-muted-foreground",
                    {
                      "bg-primary/30 text-foreground hover:bg-primary/30":
                        pathname === navigation.href,
                    },
                  )}
                >
                  <Link href={navigation.href}>
                    {navigation.route === "Home" && <House />}
                    {navigation.route === "Cjenik" && <Tag />}
                    {navigation.route === "Radovi" && <Axe />}
                    {navigation.route === "Kontakt" && <Phone />}
                    {navigation.route}
                  </Link>
                </Button>
              </SheetClose>
            </li>
          ))}
        </nav>

        <SheetFooter className="mt-auto flex-row items-center">
          <ModeToggle />
          <SheetClose asChild>
            <Link href={"/kontakt#upit"} className="grow">
              <RainbowButton className="w-full bg-foreground text-background active:scale-95">
                {header.callToAction}
              </RainbowButton>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
