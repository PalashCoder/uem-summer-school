"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";
import COURSES from "@/components/courses";

export function ExploreCourses() {
  return (
    <section className="px-8 courses">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          All Courses
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          In summer school program, we offer 5 industry-relevant courses that
          will be taught by industry experts. Choose the one that suits you
          best.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
