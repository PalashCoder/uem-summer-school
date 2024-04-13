"use client";

import Image from "next/image";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/uem.png"
        alt="bg-img"
        priority={true}
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-48">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <div className="mt-20 col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <h1 className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl font-semibold">
              Summer School 2024
            </h1>
            <h2 className="mb-5 mt-6 !text-gray-900 text-lg">
              Summer School Program of University of Engineering and Management,
              Kolkata. Embrace the school student to a new horizon of education.
            </h2>
            <h3 className="lg:text-2xl !leading-snug text-xl lg:max-w-2xl mb-5 font-semibold">
              May 2024 - June 2024
            </h3>
            <div className="my-8 flex justify-center gap-4 lg:justify-start">
              <button className="bg-blue-700 text-white font-semibold md:text-lg px-4 py-2 rounded-xl text-sm">
                Enroll
              </button>
              <button className="border-solid border-[1px] border-gray-900 font-semibold md:text-lg px-2 py-2 rounded-xl text-sm">
                <Link
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  Explore courses
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
