"use client";

import CategoryCard from "@/components/Cards/CategoryCard";
import CATEGORIES from "@/data/categories.data";
import Image from "next/image";
import Link from "next/link";

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-20">
      <div className="mb-20 grid place-items-center text-center">
        <h1 className="my-3 text-4xl font-semibold">Courses Categories</h1>
        <h1 className="mx-auto w-full !text-gray-500 lg:w-10/12 text-xl">
          Embark on an unparalleled educational journey with our meticulously
          curated courses, designed to cultivate critical thinking and
          innovation for success in today&apos;s dynamic world. Explore a
          diverse selection of industry-leading expertise, empowering you to
          thrive in the global landscape of knowledge and innovation.
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-xl bg-gray-300 relative grid h-full w-full place-items-center overflow-hidden text-center p-4 ">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <div className="relative w-full">
            <h1 className="my-5 text-xl text-white font-semibold">
              AI-Based Recommendation System
            </h1>
            <h1 className="my-2 text-white text-base">
              Prof. (Dr.) Ramen Pal, Prof. Amit Kumar, Prof. (Dr.) Arnab Paul ,
              Soumya Mukherjee, Mr. Deepjyoti Roy, Prof. (Dr.) Paramartha Dutta
              & Dr. Debasish Chakraborty
            </h1>
            <button className="px-3 py-1 hover:bg-gray-700 hover:text-white hover:border-[1px] hover:border-white bg-white text-black rounded-lg mt-5 font-semibold">
              <Link href="#Courses"> Course Structure</Link>
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
