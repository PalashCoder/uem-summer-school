"use client";

import Image from "next/image";
// import Link from "next/link";

const COMPANIES = ["IETE", "IemLabs", "CSI"];

function PartnerCompanies() {
  return (
    <section className="py-8 px-8 lg:py-10" id="Partners">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <h6 className="mb-4 uppercase !text-gray-500 font-semibold">
            In Aassociation with
          </h6>
          <h1 className="mb-12 text-4xl font-semibold">
            Our Associate Partners for this Campaign
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {COMPANIES.map((logo, key) => (
            // <Link
            //   href={
            //     logo == "Uemk"
            //       ? "https://www.uem.edu.in"
            //       : `https://www.${logo}.com`
            //   }
            //   target="_blank"
            //   rel="noopener noreferrer"
            //   key={key}
            // >
            <Image
              width={700}
              height={700}
              key={key}
              src={`/logos/${logo}.png`}
              alt={logo}
              className="w-36 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            // </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerCompanies;
