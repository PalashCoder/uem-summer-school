"use client";
import InstructorCard from "@/components/Cards/InstructorCard";
import Instructors from "@/data/instructors.data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function OurInstructors() {
  return (
    <section className="px-10 pt-20" id="Instructors">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <h1 className="mb-2 text-4xl font-semibold lg:text-center">
            Our Indusrty expert Instructors
          </h1>
          <h2 className="mb-10 max-w-3xl lg:text-center !text-gray-500 text-xl">
            Our mission is to empower individuals with the knowledge and skills
            they need to succeed in the world of technology. But don&apos;t just
            take our word for it.
          </h2>
        </div>
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
            }}
          >
            <CarouselContent className="w-full">
              {Instructors.map((props, key) => (
                <CarouselItem key={key} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <InstructorCard key={key} {...props} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default OurInstructors;
