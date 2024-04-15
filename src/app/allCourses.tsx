"use client";

import CourseCard from "@/components/CourseCard.tsx";
import COURSES from "@/data/courses";

export function AllCourses() {
  return (
    <section className="px-8" id="Courses">
      <div className="container mx-auto mb-24 text-center">
        <h1 className="mb-3 text-4xl font-bold">All Courses</h1>
        <h2 className="mx-auto mb-24 w-full !text-gray-500 lg:w-6/12 text-xl">
          In summer school program, we offer 5 industry-relevant courses that
          will be taught by industry experts. Choose the one that suits you
          best.
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default AllCourses;
