import { Review } from "payload-types";

import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Icon from "./Icon";
import Slider from "./Slider";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function SliderReview({ reviews }: { reviews: Review[] }) {
  return (
    <Slider>
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem
            key={index}
            className="relative mx-4 flex flex-col items-center justify-between gap-8 rounded-lg bg-white p-6 text-black opacity-35 transition-opacity duration-500 sm:px-12 sm:py-8 lg:basis-4/5 lg:gap-10 xl:basis-2/3"
          >
            <Icon
              name="quote"
              className="size-8 fill-primary stroke-0 text-primary lg:size-10"
            />

            <p className="font line-clamp-3 min-w-full text-center italic leading-7 lg:text-lg">
              &quot;{review.review}&quot;
            </p>

            <div className="flex items-center justify-center gap-2">
              <Avatar>
                {typeof review.avatar !== "number" && (
                  // @ts-expect-error
                  <AvatarImage src={review.avatar.url} />
                )}

                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-left text-sm lg:text-base">
                <div className="line-clamp-2">
                  {review.firstName} {review.lastName}
                </div>
                <div className="line-clamp-2 text-muted-foreground">
                  {review.jobTitle}, {review.companyName}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Slider>
  );
}
