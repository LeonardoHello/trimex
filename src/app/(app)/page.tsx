import Slider from "@/components/Slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HomePage() {
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
        className="pointer-events-none absolute left-0 top-0 -z-10 h-screen bg-transparent object-cover brightness-[0.7]"
        aria-label="guy mowing the lawn"
      >
        <source src="/5176974-uhd_2560_1440_30fps.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <section className="flex h-screen items-center px-32 py-16 opacity-85">
        <div className="flex flex-col items-start justify-center gap-6 p-8">
          <Badge variant={"secondary"}>spreman vam pomoći</Badge>
          <h1 className="max-w-[17ch] scroll-m-20 text-5xl font-medium tracking-tight lg:text-6xl">
            Vaš pouzdani partner za uređenje okućnice
          </h1>
          <p className="max-w-[50ch] leading-7">
            Od košnje trave do montaže namještaja, pružam profesionalne usluge
            za vaš dom i vrt
          </p>
          <Button variant={"secondary"} size={"lg"} className="text-base">
            Pošaljite upit
          </Button>
        </div>
      </section>

      <section className="flex h-screen flex-col items-start justify-center gap-8 px-32 py-16">
        <Badge className="bg-primary/35 text-primary">radovi</Badge>
        <Slider />
      </section>
    </main>
  );
}
