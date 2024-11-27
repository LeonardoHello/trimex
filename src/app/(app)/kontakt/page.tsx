import Link from "next/link";

import dynamicIconImports from "lucide-react/dynamicIconImports";

import Icon from "@/components/Icon";
import { ProfileForm } from "@/components/ProfileForm";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";

export default function KontaktPage() {
  return (
    <main>
      <div className="bg-[url('/bank-note.svg')]">
        <Section className="min-h-[60vh] items-center bg-gradient-to-b from-accent/5 from-60% to-background !py-20 text-center lg:min-h-[75vh]">
          <Badge className="-mb-2 bg-accent/30 text-accent">kontakt</Badge>
          <h1 className="max-w-[15ch] scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
            Naše kontakt informacije
          </h1>
          <p className="max-w-[50ch] leading-7 text-accent">
            Za sva pitanja i upite oko usluga možete nas kontaktirati na
            navedeni broj, odgovaramo odmah!
          </p>
        </Section>
      </div>

      <Section className="!pt-0">
        <div className="flex flex-col items-center justify-center gap-x-8 gap-y-12 self-stretch md:flex-row">
          <GridItem iconName="mail" title="Emailajte nas:">
            <Link
              href={"mailto:studiorevive.os@gmail.com"}
              className="font-medium text-primary hover:underline"
            >
              studiorevive.os@gmail.com
            </Link>
          </GridItem>
          <GridItem iconName="phone" title="Nazovite nas:">
            <p className="font-medium text-primary">+(385) 91 954 1432</p>
          </GridItem>
          <GridItem iconName="map-pin" title="Adresa:">
            <p className="font-medium text-primary">
              Ilirska 25, Osijek, Hrvatska
            </p>
          </GridItem>
        </div>
      </Section>

      <Section
        id="upit"
        className="min-h-screen items-center bg-background text-center"
      >
        <h2 className="mb-12 max-w-[20ch] scroll-m-20 text-4xl font-semibold tracking-tight md:text-5xl">
          Pošaljite nam email za općenite upite
        </h2>

        <ProfileForm />
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
        "flex flex-col justify-center gap-4 px-6 py-16 sm:px-8 md:p-16 lg:px-32 lg:py-20",
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
  iconName,
}: {
  children: React.ReactNode;
  title: string;
  iconName: IconNames;
}) {
  return (
    <div className="flex w-[250px] flex-col items-center justify-center gap-3 text-center">
      <div className="rounded-full bg-accent/10 p-8">
        <Icon
          name={iconName}
          className="size-8 stroke-[1.4] text-foreground md:size-10"
        />
      </div>
      <h3 className="scroll-m-20 font-bold tracking-tight">{title}</h3>
      {children}
    </div>
  );
}
