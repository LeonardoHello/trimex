import Image from "next/image";

import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { payload } from "@/utils/payload";
import Slider from "./Slider";

export default async function SliderProject() {
  const projects = await payload.find({
    collection: "projects",
  });

  return (
    <Slider>
      <CarouselContent>
        {projects.docs.map((project, index) => (
          <CarouselItem
            key={index}
            className="relative mx-4 aspect-square max-h-96 opacity-35 transition-opacity duration-500 md:aspect-video md:basis-2/3 xl:basis-1/2"
          >
            {typeof project.image !== "number" && (
              <Image
                src={project.image.url as string}
                alt="gardening"
                fill
                sizes="100%"
                className="rounded-lg object-cover object-center"
              />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Slider>
  );
}
