"use client";

import StatsCard from "@/components/stats-card";
import {
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

const STATS = [
  // {
  //   icon: DocumentTextIcon,
  //   count: "200+",
  //   title: "Students",
  // },
  {
    icon: UserIcon,
    count: "10+",
    title: "Industry Recognized Instructors",
  },
  {
    icon: PencilSquareIcon,
    count: "5",
    title: "Industry Leading Courses",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "Support",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-60 mt-32">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            Explore Our Course Stats
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            We take pride in our commitment to excellence and our dedication to
            your success.
          </Typography>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;
