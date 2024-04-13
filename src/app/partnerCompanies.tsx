"use client";

import Image from "next/image";
import Link from "next/link";

const COMPANIES = ["Uemk", "Cryptappz", "IemLabs"];

function PartnerCompanies() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <h6 className="mb-4 uppercase !text-gray-500 font-semibold">
            Partners
          </h6>
          <h1 className="mb-12 text-4xl font-semibold">
            Our Parner Companies for this Campaign
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {COMPANIES.map((logo, key) => (
            <Link
              href={
                logo == "Uemk"
                  ? "https://www.uem.edu.in"
                  : `https://www.${logo}.com`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={768}
                height={768}
                key={key}
                src={`/logos/${logo}.png`}
                alt={logo}
                className="w-40"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerCompanies;
