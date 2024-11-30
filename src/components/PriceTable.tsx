"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Info } from "lucide-react";
import { Service } from "payload-types";

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

export default function PriceTable({ services }: { services: Service[] }) {
  const searchParams = useSearchParams();

  return (
    <Table>
      <TableCaption>
        Our comprehensive service offerings and pricing.
      </TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-inherit">
          <TableHead className="w-[200px]">Usluga</TableHead>
          <TableHead className="hidden md:table-cell">Opis</TableHead>
          <TableHead className="text-right">Cijena</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow
            key={service.name}
            className={cn({
              "group bg-primary/30":
                service.name.replaceAll(" ", "_") ===
                searchParams.get("usluga"),
            })}
          >
            <TableCell className="font-medium text-foreground">
              {service.name}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <p className="max-w-prose">{service.description}</p>
            </TableCell>
            <TableCell className="text-right">{service.price}</TableCell>
            <TableCell className="w-[50px] md:hidden">
              <Popover>
                <PopoverTrigger asChild>
                  <Info className="text-muted-foreground" />
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
        <TableRow className="hover:bg-muted/50">
          <TableCell>+ Dodaj novu uslugu</TableCell>
          <TableCell colSpan={2} align="right">
            <Link href={"/kontakt#upit"} className="inline-flex">
              <PulsatingButton className="px-8 active:scale-95">
                Pošaljite upit
              </PulsatingButton>
            </Link>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
