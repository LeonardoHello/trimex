import Icon from "@/components/Icon";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import Link from "next/link";

export default function KontaktPage() {
  return (
    <main className="flex flex-col bg-[url('/wiggle.svg')]">
      <Section className="items-center bg-gradient-to-b from-transparent from-60% to-background !pb-32 !pt-44 text-center">
        <Badge className="-mb-2 bg-blue-500/30 text-blue-500">kontakt</Badge>
        <h1 className="max-w-[15ch] scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Javite nam se
        </h1>
        <p className="max-w-[50ch] leading-7 text-muted-foreground">
          Za sva pitanja i upite oko usluga možete nas kontaktirati na navedeni
          broj, odgovaramo odmah!
        </p>
      </Section>

      <Section className="bg-background !pt-0 md:items-center md:text-center">
        <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-12 self-stretch">
          <GridItem
            iconName="mail"
            title="Emailajte nas:"
            paragraph="Pošaljite nam e-poštu za općenite upite, uključujući mogućnosti marketinga i partnerstva."
          >
            <Link
              href={"mailto:studiorevive.os@gmail.com"}
              className="font-semibold text-blue-500 hover:underline"
            >
              studiorevive.os@gmail.com
            </Link>
          </GridItem>
          <GridItem
            iconName="phone"
            title="Nazovite nas:"
            paragraph="Nazovite nas da razgovaramo s članom našeg tima. Uvijek nam je drago pomoći."
          >
            <p className="font-semibold text-blue-500">+(385) 91 954 1432</p>
          </GridItem>
          <GridItem
            iconName="map-pin"
            title="Adresa:"
            paragraph="Posjetite nas na našoj adresi za sve informacije o našim uslugama ili se jednostavno javite za konzultacije uživo."
          >
            <p className="font-semibold text-blue-500">
              Ilirska 25, Osijek, Hrvatska
            </p>
          </GridItem>
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
        "md:p-18 flex flex-col justify-center gap-4 px-6 py-14 sm:px-8 lg:px-32 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}

type IconNames = keyof typeof dynamicIconImports;

function GridItem({
  children,
  title,
  paragraph,
  iconName,
}: {
  children: React.ReactNode;
  title: string;
  paragraph: string;
  iconName: IconNames;
}) {
  return (
    <div className="flex grow flex-col items-center gap-3 text-center">
      <Icon
        name={iconName}
        className="size-14 rounded-md bg-card p-4 md:size-16"
      />
      <h3 className="scroll-m-20 text-xl font-semibold capitalize tracking-tight">
        {title}
      </h3>
      <p className="max-w-[40ch] text-sm font-light leading-7">{paragraph}</p>
      {children}
    </div>
  );
}
