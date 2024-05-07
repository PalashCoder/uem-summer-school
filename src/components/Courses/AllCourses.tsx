"use client";

import CourseCard from "@/components/Cards/CourseCard";
import COURSES from "@/data/courses.data";

export function AllCourses() {
  return (
    <section className="px-8 pt-20" id="Courses">
      <div className="container mx-auto mb-24 text-center">
        <h1 className="mb-3 text-4xl font-bold">All Courses</h1>
        <h2 className="mx-auto mb-24 w-full !text-gray-500 lg:w-10/12 text-xl">
          In our exclusive Summer School Program, immerse yourself in five
          meticulously curated, industry-relevant courses led by distinguished
          industry experts. Tailor your academic experience by selecting the
          course that aligns perfectly with your aspirations and career goals.
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-20">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default AllCourses;
