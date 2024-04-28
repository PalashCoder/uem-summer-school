import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="pt-60 mt-36" id="About">
      <center className="container mx-auto px-8">
        <h6 className="mb-2 uppercase !text-gray-500 font-semibold">
          About Us
        </h6>
        <h1 className="text-2xl font-bold">
          University of Engineering and Management, Kolkata
        </h1>
        <div className="bg-white flex justify-between max-md:flex-wrap">
          <div>
            <p className="mt-4 max-w-5xl item-center text-justify md:mr-10">
              UEM Kolkata is established in the year 2014 by Act No 25 of 2014
              of Govt of West Bengal. Being located in New Town, the Smart City
              of Eastern India and very near to the Netaji Subhash International
              Airport, the students of the University are exposed to the top
              corporates. <br /> UEM Kolkata has stood one out of the top 10
              institutes of India including all IITs and all NITs of the country
              in the NPTEL program ranked by IIT Kharagpur and IIT Chennai.
              <br /> The IEM UEM group is an acclaimed educational group amongst
              the industry-centred academic training organisations of today. IEM
              has set sublime standards in addressing the technical and
              managerial resource shortage in the new era of dynamic
              globalisation. The IEM UEM group has risen to fame for its strong
              foundation in teaching and R&D in multifaceted areas. It aims to
              serve the future generation as well as the Nation through its
              commitment towards self sufficiency and unmatchable excellence.
              Since its inception, the IEM UEM group has surpassed innumerable
              benchmarks of achievements and accreditations. Today IEM flaunts a
              colossal network of expansive operations led by an awe-inspiring
              student force who are the torchbearers of a better tomorrow. The
              IEM UEM Group has opened up the doors for young minds who dare to
              dream. It encourages the spirit of free enquiry and imagination.{" "}
              <br />
              In this temple of learning, dreams take shape. The educational
              group attempts to inculcate the sense of human values and
              discipline in students to make them respectable human beings. It
              encourages learners to learn, to realize their potential and
              imbibe the best practices.
            </p>
          </div>
          <Image
            width={1200}
            height={1200}
            src="/image/uem.jpg"
            alt="bg-img"
            priority={true}
            className="h-[300px] md:h-[400px] w-[600px] object-cover rounded-2xl mt-5"
          />
        </div>
      </center>
    </section>
  );
};

export default About;
