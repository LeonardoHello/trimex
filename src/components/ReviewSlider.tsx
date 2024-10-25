"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import classNames from "embla-carousel-class-names";

import data from "@/api/data.json";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ReviewSlider() {
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
        {data.map((_, index) => (
          <CarouselItem
            key={index}
            className="relative mx-4 flex basis-2/3 flex-col items-center justify-between gap-8 rounded-lg bg-card px-12 py-8 opacity-30 transition-opacity duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48"
              height="48"
              fill="currentColor"
              className="text-primary"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path>
            </svg>
            <p className="line-clamp-3 min-w-full text-center text-xl font-light italic leading-7">
              {_.review}
            </p>
            <div className="flex items-center justify-center gap-2">
              <Avatar>
                <AvatarImage src={_.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <div>
                  {_.first_name} {_.last_name}
                </div>
                <div className="text-muted-foreground">
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
