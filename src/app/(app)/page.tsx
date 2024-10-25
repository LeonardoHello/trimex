import GallerySlider from "@/components/GallerySlider";
import ReviewSlider from "@/components/ReviewSlider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  return (
    <main className="flex grow flex-col">
      {/* Hero section video */}
      <video
        width="100%"
        height="100%"
        preload="none"
        autoPlay
        muted
        loop
        className="pointer-events-none absolute left-0 top-0 -z-10 h-screen bg-transparent object-cover brightness-[0.6]"
        aria-label="guy mowing the lawn"
      >
        <source src="/5176974-uhd_2560_1440_30fps.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <section className="flex h-screen flex-col items-start justify-center gap-6 px-32 py-16">
        <Badge className="bg-primary/30 text-primary">spreman vam pomoći</Badge>
        <h1 className="max-w-[17ch] scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">
          Vaš pouzdani partner za uređenje okućnice
        </h1>
        <p className="max-w-[50ch] leading-7">
          Od košnje trave do montaže namještaja, pružam profesionalne usluge za
          vaš dom i vrt.
        </p>
        <Button size={"lg"} className="text-base">
          Pošaljite upit
        </Button>
      </section>

      <section className="flex h-screen flex-col items-center justify-center gap-8 bg-black px-32 py-16">
        <Badge className="bg-primary/30 text-primary">radovi</Badge>
        <GallerySlider />
      </section>

      <section className="flex h-screen flex-col items-start justify-center gap-12 px-32 py-16">
        <Badge className="bg-primary/30 text-primary">recenzije</Badge>
        <h2 className="max-w-[25ch] scroll-m-20 text-5xl font-semibold tracking-tight first:mt-0">
          Poslušajte što imaju za reći o našim profesionalnim uslugama.
        </h2>

        <ReviewSlider />
      </section>
    </main>
  );
}
