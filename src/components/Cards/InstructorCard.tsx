import Image from "next/image";
import { InstructorCardProps } from "@/interface";

export function InstructorCard({
  img,
  Instructor,
  Designation,
  Company,
}: InstructorCardProps) {
  return (
    <center>
      <div className="card w-96 max-md:w-52 bg-base-100 hover:shadow-lg border-[2px] gap-2 rounded-xl cursor-pointer">
        <figure className="px-5 pt-4">
          <Image
            src={img}
            alt={`Instructor image`}
            height={1000}
            width={1000}
            className="rounded-xl object-cover lg:h-72 w-full"
            priority={true}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold pt-4 pb-3">{Instructor}</h2>
          <p className="pb-1 text-gray-600 font-semibold">{Designation}</p>
          <p className="pb-4 font-semibold">{Company}</p>
        </div>
      </div>
    </center>
  );
}
export default InstructorCard;
