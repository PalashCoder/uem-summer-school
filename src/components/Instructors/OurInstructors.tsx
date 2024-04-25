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
      <div className="container mx-auto text-center">
        <div className="mb-16 flex flex-col items-center w-full">
          <h1 className="mb-2 text-4xl font-semibold lg:text-center">
            Our Indusrty expert Instructors
          </h1>
          <h2 className="mb-5 lg:w-10/12 lg:text-center !text-gray-500 text-xl">
            Central to our mission is the empowerment of individuals with the
            indispensable knowledge and skills requisite for triumph in the
            dynamic realm of technology. Yet, we urge you not to solely rely on
            our declaration; instead, immerse yourself in our program and
            witness the tangible outcomes firsthand, as guided by our esteemed
            cadre of industry-leading instructors.
          </h2>
        </div>
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
            }}
          >
            <CarouselContent className="w-full lg:pl-10">
              {Instructors.map((props, key) => (
                <CarouselItem
                  key={key}
                  className="md:basis-1/2 lg:basis-1/3 max-md:pl-6"
                >
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
