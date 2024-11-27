import Link from "next/link";

import type dynamicIconImports from "lucide-react/dynamicIconImports";

import Icon from "@/components/Icon";
import GallerySlider from "@/components/SliderGallery";
import ReviewSlider from "@/components/SliderReview";
import { Badge } from "@/components/ui/badge";
import PulsatingButton from "@/components/ui/pulsating-button";
import { cn } from "@/utils/cn";

export default async function HomePage() {
  return (
    <main>
      <Section badge="dobrodošli" className="relative !pt-20 text-white">
        {/* Hero section video */}
        <video
          preload="none"
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none absolute inset-0 -z-10 h-full w-screen object-cover object-bottom brightness-[0.65]"
          aria-label="guy mowing the lawn"
        >
          <source src="/video_only.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h1 className="mb-4 max-w-[15ch] scroll-m-20 text-5xl font-extrabold tracking-tight md:text-6xl">
          Vaš partner za uređenje okućnice
        </h1>

        <p className="max-w-[50ch] leading-7">
          Od košnje trave do montaže namještaja, pružam profesionalne usluge za
          vaš dom i vrt.
        </p>

        <Link href={"/kontakt#upit"}>
          <PulsatingButton className="px-8 active:scale-95">
            Pošaljite upit
          </PulsatingButton>
        </Link>
      </Section>

      <Section
        badge="usluge"
        className="min-h-[80vh] bg-[hsl(120_25%_10%)] bg-[url('/texture.svg')] text-white md:items-center md:text-center"
      >
        <h2 className="mb-12 max-w-[24ch] scroll-m-20 text-4xl font-semibold tracking-tight md:text-5xl">
          Istražite našu sveobuhvatnu ponudu profesionalnih usluga.
        </h2>
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
            title="montaža i demontaža namještaja"
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
          <GridItem
            iconName="axe"
            title="rušenje manjih drveća, pomoćnih objekata"
            paragraph="Naša usluga rušenja obuhvaća sigurno uklanjanje manjih stabala i pomoćnih objekata u vašem dvorištu ili vrtu s posebnom pažnjom prema okolini."
          />
        </div>
      </Section>

      <Section
        badge="radovi"
        className="min-h-[80vh] overflow-hidden bg-white bg-[url('/texture.svg')] text-[hsl(120_25%_10%)] md:items-center md:text-center"
      >
        <h2 className="mb-12 max-w-[24ch] scroll-m-20 text-4xl font-semibold tracking-tight md:text-5xl">
          Pogledajte naše prethodne projekte.
        </h2>
        <GallerySlider />
      </Section>

      <div className="bg-white">
        <Section
          badge="recenzije"
          className="min-h-[80vh] overflow-hidden bg-primary/40 bg-[url('/texture.svg')] text-white"
        >
          <h2 className="mb-12 max-w-[24ch] scroll-m-20 text-4xl font-semibold tracking-tight md:text-5xl">
            Poslušajte što imaju za reći o našim uslugama.
          </h2>
          <ReviewSlider />
        </Section>
      </div>
    </main>
  );
}

function Section({
  children,
  badge,
  className,
}: {
  children: React.ReactNode;
  badge: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "flex min-h-screen flex-col items-center justify-center gap-4 px-4 py-14 text-center sm:px-8 md:items-start md:p-16 md:text-left lg:px-32 lg:py-20",
        className,
      )}
    >
      <Badge className="bg-[hsl(142_55%_42%/0.3)] text-[hsl(142_55%_42%)]">
        {badge}
      </Badge>

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
    <div className="group flex max-w-80 flex-col items-center gap-4 self-start text-center">
      <Icon
        name={iconName}
        className="size-10 transition-colors duration-300 group-hover:text-primary md:size-12"
      />

      <h3 className="scroll-m-20 text-2xl font-semibold capitalize tracking-tight">
        {title}
      </h3>

      <p className="text-sm font-light leading-7">{paragraph}</p>
    </div>
  );
}
