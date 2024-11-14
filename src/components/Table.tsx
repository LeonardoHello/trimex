import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/utils/cn";
import Link from "next/link";
import PulsatingButton from "./ui/pulsating-button";

const usluge = [
  "Uređenje vrtova",
  "Košenje",
  "Čišćenje vanjskih površina",
  "Montaža i demontaža namještaja",
  "Pressure-Washing",
] as const;

const services = [
  {
    usluga: "Uređenje vrtova",
    opis: "Naša usluga uređenja vrtova obuhvaća sve što je potrebno kako bi vaš vanjski prostor bio pravi raj.",
    dostupnost: true,
    cijena: 250,
  },
  {
    usluga: "Košenje",
    opis: "Osigurajte da vaša travnata površina uvijek izgleda uredno i zdravo uz našu profesionalnu uslugu košenja.",
    dostupnost: true,
    cijena: 150,
  },
  {
    usluga: "Čišćenje vanjskih površina",
    opis: "Nudimo temeljito čišćenje vanjskih površina kao što su terase, staze, prilazi i dvorišta.",
    dostupnost: false,
    cijena: 350,
  },
  {
    usluga: "Montaža i demontaža namještaja",
    opis: "Montaža namještaja može biti izazovna, ali mi smo ovdje da preuzmemo sav stres na sebe.",
    dostupnost: true,
    cijena: 450,
  },
  {
    usluga: "Pressure-Washing",
    opis: "Naša usluga pranja pod pritiskom uklanja prljavštinu, mrlje, plijesan i druge nečistoće s tvrdih površina poput betona, pločnika i zidova.",
    dostupnost: false,
    cijena: 550,
  },
];

export function TableDemo() {
  const headers = Object.keys(services[0]).filter(
    (header) => header !== "dostupnost",
  );

  return (
    <Table>
      <TableCaption>Detaljna lista naših usluga.</TableCaption>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead
              key={header}
              className={cn("capitalize", {
                "w-[200px]": index === 0,
                "w-[600px] min-w-[300px]": index === 1,
              })}
            >
              {header}
            </TableHead>
          ))}
          <TableHead className="sr-only">Call to action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow
            key={service.usluga}
            aria-disabled={!service.dostupnost}
            className={cn({ "opacity-40": !service.dostupnost })}
          >
            <TableCell className="font-medium">{service.usluga}</TableCell>
            <TableCell>{service.opis}</TableCell>
            <TableCell>€{service.cijena}</TableCell>
            <TableCell align="right">
              {service.dostupnost && (
                <Link href={"/kontakt"}>
                  <PulsatingButton
                    className="whitespace-nowrap bg-primary px-8 text-primary-foreground active:scale-95"
                    pulseColor="hsl(var(--primary))"
                    duration="5s"
                  >
                    Pošaljite upit
                  </PulsatingButton>
                </Link>
              )}
              {!service.dostupnost && (
                <PulsatingButton
                  className="whitespace-nowrap bg-muted px-8 text-muted-foreground active:scale-95"
                  duration="0s"
                >
                  Pošaljite upit
                </PulsatingButton>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
