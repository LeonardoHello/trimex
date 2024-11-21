import React from "react";

import Link from "next/link";

import { Axe, Gem, House, Phone } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/utils/cn";
import Logo from "./Logo";
import { Button } from "./ui/button";

export default function MenuSheet({
  children,
  pathname,
}: {
  children: React.ReactNode;
  pathname: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col gap-5 overflow-y-scroll bg-[url('/texture-light.svg')] px-3">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigacija</SheetTitle>
          <SheetDescription>
            Istražite naše profesionalne usluge vrtlarstva, od uređenja vrtova
            do čišćenja vanjskih površina. Ovdje možete pronaći sve što je
            potrebno za održavanje vašeg vanjskog prostora urednim i lijepim.
          </SheetDescription>
        </SheetHeader>

        <Logo className="max-h-32 min-h-32 w-auto fill-foreground" />

        <nav className="flex flex-col gap-1.5 self-stretch">
          <li className="flex list-none">
            <Button
              asChild
              variant={"ghost"}
              size={"lg"}
              className={cn(
                "grow justify-start gap-4 self-center bg-background px-4 hover:bg-background hover:text-muted-foreground",
                {
                  "bg-primary/30 text-foreground hover:bg-primary/30":
                    pathname === "/",
                },
              )}
            >
              <Link href={"/"}>
                <House /> Home
              </Link>
            </Button>
          </li>
          <li className="flex list-none">
            <Button
              asChild
              variant={"ghost"}
              size={"lg"}
              className={cn(
                "grow justify-start gap-4 self-center bg-background px-4 hover:bg-background hover:text-muted-foreground",
                {
                  "bg-primary/30 text-foreground hover:bg-primary/30":
                    pathname === "/cjenik",
                },
              )}
            >
              <Link href={"/cjenik"}>
                <Gem /> Cjenik
              </Link>
            </Button>
          </li>
          <li className="flex list-none">
            <Button
              asChild
              variant={"ghost"}
              size={"lg"}
              className={cn(
                "grow justify-start gap-4 self-center bg-background px-4 hover:bg-background hover:text-muted-foreground",
                {
                  "bg-primary/30 text-foreground hover:bg-primary/30":
                    pathname === "/radovi",
                },
              )}
            >
              <Link href={"/radovi"}>
                <Axe /> Radovi
              </Link>
            </Button>
          </li>
          <li className="flex list-none">
            <Button
              asChild
              variant={"ghost"}
              size={"lg"}
              className={cn(
                "grow justify-start gap-4 self-center bg-background px-4 hover:bg-background hover:text-muted-foreground",
                {
                  "bg-primary/30 text-foreground hover:bg-primary/30":
                    pathname === "/kontakt",
                },
              )}
            >
              <Link href={"/kontakt"}>
                <Phone /> Kontakt
              </Link>
            </Button>
          </li>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
