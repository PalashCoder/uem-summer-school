"use client";

import CategoryCard from "@/components/categoryCard";
import CATEGORIES from "@/data/categories";

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-20">
      <div className="mb-20 grid place-items-center text-center">
        <h1 className="my-3 text-4xl font-semibold">Courses Categories</h1>
        <h1 className="mx-auto w-full !text-gray-500 lg:w-6/12 text-xl">
          A comprehensive selection of courses designed to empower you with the
          skills you need to thrive in the world of knowledge.
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl bg-gray-300 relative grid h-full w-full place-items-center overflow-hidden text-center p-4 ">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <div className="relative w-full">
            <h1 className="my-5 text-xl text-white font-semibold">
              AI-Based Recomendation System
            </h1>
            <h1 className="my-2 text-white text-base">
              Dr. Arnab Paul, Mr. Deepjyoti Roy & Prof. (Dr.) Ramen Pal
            </h1>
            <button className="px-2 py-1 bg-white text-black rounded-sm mt-5 font-semibold">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;
