import { Badge } from "@/components/ui/badge";
import { FocusCards } from "@/components/ui/focus-cards";
import { cn } from "@/utils/cn";
import photo1 from "public/photo-1.jpg";
import photo2 from "public/photo-2.jpg";
import photo3 from "public/photo-3.jpg";
import photo4 from "public/photo-4.jpg";
import photo5 from "public/photo-5.jpg";
import photo6 from "public/photo-6.png";

const cards = [
  {
    title: "Forest Adventure",
    src: photo1,
  },
  {
    title: "Valley of life",
    src: photo2,
  },
  {
    title: "Sala behta hi jayega",
    src: photo3,
  },
  {
    title: "Camping is for pros",
    src: photo4,
  },
  {
    title: "The road not taken",
    src: photo5,
  },
  {
    title: "The First Rule",
    src: photo6,
  },
];

export default function RadoviPage() {
  return (
    <main className="autumn flex flex-col bg-[url('/autumn-light.svg')]">
      <Section className="to min-h-fit items-center bg-gradient-to-b from-transparent from-90% to-background !pt-48 text-center">
        <Badge className="-mb-2 bg-accent/30 text-accent">radovi</Badge>
        <h1 className="max-w-[18ch] scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Naši dosadašnji radovi i uspješni projekti
        </h1>
        <p className="max-w-[48ch] leading-7 text-muted-foreground">
          Pogledajte naše dosadašnje projekte i uvjerite se kako možemo
          transformirati vaš vanjski prostor u lijepo održavanu oazu.
        </p>
      </Section>

      <Section className="bg-background lg:pt-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <FocusCards cards={cards} />
        </div>
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
        "md:p-18 flex min-h-screen flex-col justify-center gap-4 px-6 py-14 sm:px-8 lg:px-32 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}
