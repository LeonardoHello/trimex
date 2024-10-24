"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import classNames from "embla-carousel-class-names";
import Image from "next/image";

import pic4 from "public/imageFour.jpg";
import pic1 from "public/imageOne.jpg";
import pic3 from "public/imageThree.jpg";
import pic2 from "public/imageTwo.jpg";

export default function Slider() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        inViewThreshold: 1,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
        classNames({ inView: "opacity-95" }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {[pic1, pic2, pic3, pic4].map((_, index) => (
          <CarouselItem
            key={index}
            className="relative mx-4 h-[30rem] opacity-30 transition-opacity duration-300 md:basis-2/3 lg:basis-1/3"
          >
            <Image
              src={_}
              alt="gardening"
              fill
              className="rounded-lg object-cover object-center"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
