import Image from "next/image";

import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import pic4 from "public/imageFour.jpg";
import pic1 from "public/imageOne.jpg";
import pic3 from "public/imageThree.jpg";
import pic2 from "public/imageTwo.jpg";
import Slider from "./Slider";

export default function SliderGallery() {
  const pics = [pic1, pic2, pic3, pic4];

  return (
    <Slider>
      <CarouselContent>
        {pics.map((pic, index) => (
          <CarouselItem
            key={index}
            className="relative mx-4 aspect-square max-h-96 opacity-35 transition-opacity duration-500 md:aspect-video md:basis-2/3 xl:basis-1/2"
          >
            <Image
              src={pic}
              alt="gardening"
              fill
              placeholder="blur"
              sizes="100%"
              className="rounded-lg object-cover object-center"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Slider>
  );
}
