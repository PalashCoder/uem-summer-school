import { InstructorCardProps } from "@/interface";
import Image from "next/image";

export function InstructorCard({
  img,
  Instructor,
  Designation,
}: InstructorCardProps) {
  return (
    <section className="items-start text-center max-w-xl">
      <div>
        <Image
          src={img}
          className="mb-2 rounded-full"
          alt="image"
          width={100}
          height={100}
        />
        <h1 color="blue-gray">{Instructor}</h1>
        <h1 color="blue-gray" className="mt-1 mb-5 block font-normal">
          {Designation}
        </h1>
      </div>
    </section>
  );
}
export default InstructorCard;
