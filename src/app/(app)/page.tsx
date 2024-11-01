import type dynamicIconImports from "lucide-react/dynamicIconImports";

import GallerySlider from "@/components/GallerySlider";
import Icon from "@/components/Icon";
import ReviewSlider from "@/components/ReviewSlider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

export default async function HomePage() {
  return (
    <main className="flex grow flex-col">
      <Section
        badge="spreman vam pomoći"
        title="Vaš partner za uređenje okućnice"
        className="relative h-screen min-h-[42rem]"
        hero
      >
        {/* Hero section video */}
        <video
          preload="none"
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-screen bg-transparent object-cover object-bottom brightness-50"
          aria-label="guy mowing the lawn"
        >
          <source src="/video_only.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <p className="max-w-[50ch] leading-7">
          Od košnje trave do montaže namještaja, pružam profesionalne usluge za
          vaš dom i vrt.
        </p>

        <Button size={"lg"} className="text-base">
          Pošaljite upit
        </Button>
      </Section>

      <Section
        badge="usluge"
        title="Istražite našu sveobuhvatnu ponudu profesionalnih usluga."
        className="bg-black md:items-center md:text-center"
      >
        <div className="grid place-items-center gap-x-8 gap-y-12 self-stretch md:grid-cols-2 xl:grid-cols-3">
          <GridItem
            iconName="sprout"
            title="uređenje vrtova"
            paragraph="Naša usluga uređenja vrtova obuhvaća sve što je potrebno kako bi
              vaš vanjski prostor bio pravi raj."
          />
          <GridItem
            iconName="scissors"
            title="košenje"
            paragraph="Osigurajte da vaša travnata površina uvijek izgleda uredno i
              zdravo uz našu profesionalnu uslugu košenja."
          />
          <GridItem
            iconName="brush"
            title="čišćenje vanjskih površina"
            paragraph="Nudimo temeljito čišćenje vanjskih površina kao što su terase,
              staze, prilazi i dvorišta."
          />
          <GridItem
            iconName="wrench"
            title="montaža namještaja"
            paragraph="Montaža namještaja može biti izazovna, ali mi smo ovdje da
              preuzmemo sav stres na sebe."
          />
          <GridItem
            iconName="droplet"
            title="pressure-washing"
            paragraph="Naša usluga pranja pod pritiskom uklanja prljavštinu, mrlje,
              plijesan i druge nečistoće s tvrdih površina poput betona,
              pločnika i zidova."
          />
        </div>
      </Section>

      <Section
        badge="radovi"
        title="Pogledajte naše prethodne projekte."
        className="bg-foreground text-background md:items-center md:text-center"
      >
        <GallerySlider />
      </Section>

      <Section
        badge="recenzije"
        title="Poslušajte što imaju za reći o našim uslugama."
      >
        <ReviewSlider />
      </Section>
    </main>
  );
}

function Section({
  children,
  badge,
  title,
  hero,
  className,
}: {
  children: React.ReactNode;
  badge: string;
  title: string;
  hero?: boolean;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "flex min-h-screen flex-col items-center justify-center gap-4 overflow-hidden px-4 py-14 text-center sm:px-8 md:items-start md:p-16 md:text-left lg:px-32 lg:py-20",
        className,
      )}
    >
      <Badge className="bg-primary/30 text-primary">{badge}</Badge>

      {hero && (
        <h1 className="mb-4 max-w-[15ch] scroll-m-20 text-5xl font-extrabold tracking-tight md:text-6xl">
          {title}
        </h1>
      )}

      {!hero && (
        <h2 className="mb-12 max-w-[24ch] scroll-m-20 text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
}

type IconNames = keyof typeof dynamicIconImports;

function GridItem({
  title,
  paragraph,
  iconName,
}: {
  title: string;
  paragraph: string;
  iconName: IconNames;
}) {
  return (
    <div className="flex max-w-80 flex-col items-center gap-4 text-center">
      <Icon
        name={iconName}
        className="size-10 text-primary-foreground md:size-12"
      />

      <h3 className="scroll-m-20 text-2xl font-semibold capitalize tracking-tight">
        {title}
      </h3>

      <p className="leading-7">{paragraph}</p>
    </div>
  );
}
