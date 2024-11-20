"use client";

import Autoplay from "embla-carousel-autoplay";
import classNames from "embla-carousel-class-names";

import { Carousel } from "@/components/ui/carousel";

export default function Slider({ children }: { children: React.ReactNode }) {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        inViewThreshold: 0.8,
      }}
      plugins={[
        Autoplay({ delay: 2000 }),
        classNames({ inView: "carousel-in-view" }),
      ]}
      className="w-full"
    >
      {children}
    </Carousel>
  );
}
