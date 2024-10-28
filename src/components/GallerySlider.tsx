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

export default function GallerySlider() {
  const pics = [pic1, pic2, pic3, pic4];

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        inViewThreshold: 0.8,
      }}
      plugins={[
        Autoplay({ delay: 4000 }),
        classNames({ inView: "opacity-95" }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {pics.map((pic, index) => (
          <CarouselItem
            key={index}
            className="relative mx-4 aspect-video max-h-96 opacity-40 transition-opacity duration-500 md:basis-2/3 xl:basis-1/2"
          >
            <Image
              src={pic}
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
