import { Badge } from "@/components/ui/badge";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { cn } from "@/utils/cn";
import photo1 from "public/photo-1.jpg";
import photo2 from "public/photo-2.jpg";
import photo3 from "public/photo-3.jpg";
import photo4 from "public/photo-4.jpg";
import photo5 from "public/photo-5.jpg";
import photo6 from "public/photo-6.png";

const cards = [
  {
    id: 1,
    title: "uređenje vrtova",
    description:
      "Naša usluga uređenja vrtova obuhvaća sve što je potrebno kako bi vaš vanjski prostor bio pravi raj.",
    className: "md:col-span-2",
    thumbnail: photo1,
  },
  {
    id: 2,
    title: "košenje",
    description:
      "Osigurajte da vaša travnata površina uvijek izgleda uredno i zdravo uz našu profesionalnu uslugu košenja.",
    className: "col-span-1",
    thumbnail: photo2,
  },
  {
    id: 3,
    title: "čišćenje vanjskih površina",
    description:
      "Nudimo temeljito čišćenje vanjskih površina kao što su terase, staze, prilazi i dvorišta.",
    className: "col-span-1",
    thumbnail: photo3,
  },
  {
    id: 4,
    title: "Montaža i demontaža namještaja",
    description:
      "Montaža namještaja može biti izazovna, ali mi smo ovdje da preuzmemo sav stres na sebe.",
    className: "md:col-span-2",
    thumbnail: photo4,
  },
  {
    id: 5,
    title: "pressure-washing",
    description:
      "Naša usluga pranja pod pritiskom uklanja prljavštinu, mrlje, plijesan i druge nečistoće s tvrdih površina poput betona, pločnika i zidova.",
    className: "md:col-span-2",
    thumbnail: photo5,
  },
  {
    id: 6,
    title: "rušenje manjih drveća, pomoćnih objekata",
    description:
      "Naša usluga rušenja obuhvaća sigurno uklanjanje manjih stabala i pomoćnih objekata u vašem dvorištu ili vrtu s posebnom pažnjom prema okolini.",
    className: "md:col-span-1",
    thumbnail: photo6,
  },
];

export default function RadoviPage() {
  return (
    <main className="flex flex-col bg-[url('/autumn-light.svg')]">
      <Section className="items-center bg-gradient-to-b from-transparent from-60% to-background !pb-32 !pt-48 text-center">
        <Badge className="-mb-2 bg-accent/30 text-accent">radovi</Badge>
        <h1 className="max-w-[18ch] scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Naši dosadašnji radovi i uspješni projekti
        </h1>
        <p className="max-w-[48ch] leading-7 text-muted-foreground">
          Pogledajte naše dosadašnje projekte i uvjerite se kako možemo
          transformirati vaš vanjski prostor u lijepo održavanu oazu.
        </p>
      </Section>

      <Section className="bg-background !pt-0">
        <LayoutGrid cards={cards} />
      </Section>
    </main>
  );
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "md:p-18 flex flex-col justify-center gap-4 px-6 py-14 sm:px-8 lg:px-32 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}
