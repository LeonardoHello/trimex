"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import classNames from "embla-carousel-class-names";
import { Quote } from "lucide-react";

import data from "@/api/data.json";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ReviewSlider() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        startIndex: 1,
        inViewThreshold: 0.99,
      }}
      plugins={[
        Autoplay({ delay: 3000 }),
        classNames({ inView: "carousel-in-view" }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {data.map((_, index) => (
          <CarouselItem
            key={index}
            className="relative mx-4 flex flex-col items-center justify-center gap-10 rounded-lg bg-card p-6 opacity-35 transition-opacity duration-500 sm:px-12 sm:py-8 lg:basis-3/4 xl:basis-2/3 2xl:basis-1/2"
          >
            <Quote className="size-8 fill-primary stroke-0 text-primary" />
            <p className="font line-clamp-3 min-w-full text-center text-lg italic leading-7">
              {_.review}
            </p>
            <div className="flex items-center justify-center gap-2">
              <Avatar>
                <AvatarImage src={_.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <div className="line-clamp-2">
                  {_.first_name} {_.last_name}
                </div>
                <div className="line-clamp-2 text-muted-foreground">
                  {_.job_title}, {_.company_name}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
