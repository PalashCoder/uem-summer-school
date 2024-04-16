"use client";

import StatsCard from "@/components/Cards/StatsCard";
import STATS from "@/data/stats.data";

export function Stats() {
  return (
    <section className="px-8 pt-60 mt-36">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <h1 className="mb-2 text-4xl font-semibold">
            Explore Our Course Stats
          </h1>
          <h2 className="mx-auto mb-24 w-full !text-gray-500 lg:w-6/12 text-xl">
            We take pride in our commitment to excellence and our dedication to
            your success.
          </h2>
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
export default Stats;
