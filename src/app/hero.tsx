"use client";

import { Button, Card, Typography } from "@material-tailwind/react";
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
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="mt-20 col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              Summer School 2024
            </Typography>
            <Typography variant="lead" className="mb-5 mt-6 !text-gray-900">
              Summer School Program of University of Engineering and Management,
              Kolkata. Embrace the school student to a new horizon of education.
            </Typography>
            <Typography
              variant="h3"
              color="blue-gray"
              className="lg:text-2xl !leading-snug text-xl lg:max-w-2xl mb-5"
            >
              May 2024 - June 2024
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button color="blue">Enroll</Button>
              <Button color="gray" variant="outlined">
                <Link
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  Explore courses
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
