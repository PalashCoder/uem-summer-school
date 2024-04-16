"use client";
import InstructorCard from "@/components/Cards/InstructorCard";
import Instructors from "@/data/instructors.data";

export function OurInstructors() {
  return (
    <section className="px-8 pt-20" id="Instructors">
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
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {Instructors.map((props, key) => (
            <InstructorCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurInstructors;
