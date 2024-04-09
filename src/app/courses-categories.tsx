"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import CategoryCard from "@/components/category-card";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "Fundamental of Industrial IoT (IIoT)",
    desc: "Prof. Srishti Dey & Mr. Subhasis Chakraborty",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "Reinforcement & Deep Learning Using Python",
    desc: "Mr. Shehasis Banerjee & Prof. (Dr.) Ramen Pal",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Fundamental on Computer Forensics",
    desc: "Prof. Srishti Dey & Mr. Ajay Krishna N A",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: MicrophoneIcon,
    title: "Hands-on with InMemory Computing (IMC) hardware level perspective.",
    desc: "Prof. Anirban Ganguly & Mrs. Pooja Joshi",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Courses Categories
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          A comprehensive selection of courses designed to empower you with the
          skills you need to thrive in the world of knowledge.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography variant="h4" className="my-5" color="white">
              AI-Based Recomendation System
            </Typography>
            <Typography variant="h6" className="my-2" color="white">
              Dr. Arnab Paul, Mr. Deepjyoti Roy & Prof. (Dr.) Ramen Pal
            </Typography>
            <Button size="sm" color="white">
              Enroll Now
            </Button>
          </CardBody>
        </Card>
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
