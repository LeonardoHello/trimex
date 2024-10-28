import GallerySlider from "@/components/GallerySlider";
import ReviewSlider from "@/components/ReviewSlider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  return (
    <main className="flex grow flex-col">
      {/* Hero section video */}
      <video
        width={500}
        height={500}
        preload="none"
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute left-0 top-0 -z-10 h-[calc(100vh+4rem)] w-screen bg-transparent object-cover object-bottom brightness-50"
        aria-label="guy mowing the lawn"
      >
        <source src="/video_only.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section className="flex h-[calc(100vh+4rem)] flex-col items-center justify-center gap-6 px-4 py-16 sm:items-start sm:px-16 lg:px-32">
        <Badge className="bg-primary/30 text-primary">spreman vam pomoći</Badge>
        <h1 className="max-w-[15ch] scroll-m-20 text-center text-5xl font-extrabold tracking-tight sm:text-start lg:text-6xl">
          Vaš partner za uređenje okućnice
        </h1>
        <p className="max-w-[50ch] text-center leading-7 sm:text-start">
          Od košnje trave do montaže namještaja, pružam profesionalne usluge za
          vaš dom i vrt.
        </p>
        <Button size={"lg"} className="text-base">
          Pošaljite upit
        </Button>
      </section>

      {/* 
      <section className="flex h-screen flex-col items-center justify-center gap-4 bg-background bg-black px-32 py-16">
        <Badge className="bg-primary/30 text-primary">usluge</Badge>

        <h2 className="max-w-[26ch] scroll-m-20 text-center text-5xl font-semibold tracking-tight">
          Istražite našu sveobuhvatnu ponudu profesionalnih usluga
        </h2>

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-12">
          <div className="flex w-80 flex-col items-center gap-4">
            <h3 className="scroll-m-20 text-2xl font-semibold capitalize tracking-tight">
              uređenje vrtova
            </h3>
            <p className="text-center leading-7">
              Naša usluga uređenja vrtova obuhvaća sve što je potrebno kako bi
              vaš vanjski prostor bio pravi raj.
            </p>
          </div>
          <div className="flex w-80 flex-col items-center gap-4">
            <h3 className="scroll-m-20 text-2xl font-semibold capitalize tracking-tight">
              košenje
            </h3>
            <p className="text-center leading-7">
              Osigurajte da vaša travnata površina uvijek izgleda uredno i
              zdravo uz našu profesionalnu uslugu košenja.
            </p>
          </div>
          <div className="flex w-80 flex-col items-center gap-4">
            <h3 className="scroll-m-20 text-2xl font-semibold capitalize tracking-tight">
              čišćenje vanjskih površina
            </h3>
            <p className="text-center leading-7">
              Nudimo temeljito čišćenje vanjskih površina kao što su terase,
              staze, prilazi i dvorišta.
            </p>
          </div>
          <div className="flex w-80 flex-col items-center gap-4">
            <h3 className="scroll-m-20 text-2xl font-semibold capitalize tracking-tight">
              montaža namještaja
            </h3>
            <p className="text-center leading-7">
              Montaža namještaja može biti izazovna, ali mi smo ovdje da
              preuzmemo sav stres na sebe.
            </p>
          </div>
          <div className="flex w-80 flex-col items-center gap-4">
            <h3 className="scroll-m-20 text-2xl font-semibold capitalize tracking-tight">
              pressure-washing
            </h3>
            <p className="text-center leading-7">
              Naša usluga pranja pod pritiskom uklanja prljavštinu, mrlje,
              plijesan i druge nečistoće s tvrdih površina poput betona,
              pločnika i zidova.
            </p>
          </div>
          <div className="flex w-80 flex-col items-center gap-4">
            <h3 className="scroll-m-20 text-2xl font-semibold capitalize tracking-tight">
              ostalo
            </h3>
            <p className="leading-7">
              Osim navedenih usluga, pružamo i niz drugih prilagođenih usluga
              kako bismo zadovoljili sve vaše potrebe vezane uz vanjsko uređenje
              i održavanje.
            </p>
          </div>
        </div>
      </section> */}

      <section className="flex h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-black px-4 py-16 sm:px-16 lg:px-32">
        <Badge className="bg-primary/30 text-primary">radovi</Badge>
        <h2 className="mb-4 max-w-[20ch] scroll-m-20 text-center text-4xl font-semibold tracking-tight lg:text-5xl">
          Pogledajte naše prethodne projekte
        </h2>

        <GallerySlider />
      </section>

      <section className="flex h-screen flex-col items-start justify-center gap-6 overflow-hidden px-4 py-16 sm:px-16 lg:px-32">
        <Badge className="bg-primary/30 text-primary">recenzije</Badge>
        <h2 className="mb-4 max-w-[25ch] scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
          Poslušajte što imaju za reći o našim uslugama.
        </h2>

        <ReviewSlider />
      </section>
    </main>
  );
}
