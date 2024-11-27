"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Info } from "lucide-react";

import services from "@/api/table.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import PulsatingButton from "@/components/ui/pulsating-button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/utils/cn";

export default function CjenikPage() {
  const searchParams = useSearchParams();

  return (
    <main>
      <div className="bg-[url('/leaf.svg')]">
        <Section className="min-h-[60vh] items-center bg-gradient-to-b from-primary/5 from-60% to-background !pb-0 !pt-20 text-center lg:min-h-[75vh]">
          <Badge className="-mb-2 bg-primary/30 text-primary">cjenik</Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Cjenik naših usluga
          </h1>
          <p className="max-w-[50ch] leading-7 text-primary">
            Istražite naše pristupačne cijene za sve usluge kojima ćemo vašu
            okućnicu učiniti lijepim i urednim.
          </p>
        </Section>
      </div>

      <Section id="tablica">
        <Table>
          <TableCaption>
            Our comprehensive service offerings and pricing.
          </TableCaption>
          <TableHeader>
            <TableRow className="hover:bg-inherit">
              <TableHead>Service</TableHead>
              <TableHead className="hidden md:table-cell">
                Description
              </TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow
                key={service.title}
                className={cn({
                  "group bg-primary/30":
                    service.title.replaceAll(" ", "_") ===
                    searchParams.get("usluga"),
                })}
              >
                <TableCell className="font-medium text-foreground">
                  {service.title}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <p className="max-w-prose">{service.description}</p>
                </TableCell>
                <TableCell className="text-right">{service.price}</TableCell>
                <TableCell className="w-[50px] md:hidden">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Info />
                    </PopoverTrigger>
                    <PopoverContent>
                      <p className="max-w-prose">{service.description}</p>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} align="right">
                <Link href={"/kontakt#upit"} className="inline-flex">
                  <PulsatingButton className="px-8 active:scale-95">
                    Pošaljite upit
                  </PulsatingButton>
                </Link>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Section>
    </main>
  );
}

function Section({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(
        "md:p-18 flex flex-col justify-center gap-4 px-6 py-14 sm:px-8 lg:px-32 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}
