import { InstructorCardProps } from "@/interface";
import Image from "next/image";

export function InstructorCard({
  img,
  Instructor,
  Designation,
  Company,
}: InstructorCardProps) {
  return (
    <section className="items-start text-center max-w-xl">
      <center className="border-[1px] border-black pt-5 rounded-xl hover:shadow-xl">
        <Image
          src={img}
          className="mb-2 rounded-md h-[250px] w-[250px]"
          alt="image"
          width={100}
          height={100}
        />
        <h1 className="font-semibold">{Instructor}</h1>
        <h1 className="mt-1 block font-normal">{Designation}</h1>
        <div className="border-b-[1px] border-gray-700" />
        <h1 className="mt-1 mb-5 block font-normal px-2">{Company}</h1>
      </center>
    </section>
  );
}
export default InstructorCard;
