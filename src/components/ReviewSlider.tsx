"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import classNames from "embla-carousel-class-names";

import data from "@/api/data.json";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ReviewSlider() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        startIndex: 1,
        inViewThreshold: 0.8,
      }}
      plugins={[
        Autoplay({ delay: 2000 }),
        classNames({ inView: "carousel-in-view" }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {data.map((_, index) => (
          <CarouselItem
            key={index}
            className="relative mx-4 flex flex-col items-center justify-between gap-8 rounded-lg bg-card p-6 opacity-35 transition-opacity duration-500 sm:px-12 sm:py-8 lg:basis-4/5 lg:gap-10 xl:basis-2/3"
          >
            <Quote className="size-8 fill-primary stroke-0 text-primary lg:size-10" />

            <p className="font line-clamp-3 min-w-full text-center italic leading-7 lg:text-lg">
              {_.review}
            </p>

            <div className="flex items-center justify-center gap-2">
              <Avatar>
                <AvatarImage src={_.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-sm lg:text-base">
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
