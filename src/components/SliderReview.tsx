import reviews from "@/api/reviews.json";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Icon from "./Icon";
import Slider from "./Slider";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function SliderReview() {
  return (
    <Slider>
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem
            key={index}
            className="relative mx-4 flex flex-col items-center justify-between gap-8 rounded-lg bg-card p-6 text-card-foreground opacity-35 transition-opacity duration-500 sm:px-12 sm:py-8 lg:basis-4/5 lg:gap-10 xl:basis-2/3"
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
                <AvatarImage src={review.avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-left text-sm lg:text-base">
                <div className="line-clamp-2">
                  {review.first_name} {review.last_name}
                </div>
                <div className="line-clamp-2 text-muted-foreground">
                  {review.job_title}, {review.company_name}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Slider>
  );
}
