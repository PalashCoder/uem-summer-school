import { CourseCardProps } from "@/interface";
import Image from "next/image";

export function CourseCard({
  img,
  instructor,
  title,
  ...others
}: CourseCardProps) {
  return (
    <section className="border rounded-2xl">
      <div className="h-64 w-[80%] md:ml-10 ml-7">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1] rounded-2xl"
        />
      </div>
      <div>
        <div className="flex items-center gap-2 p-4 my-2 mx-2.5">
          <h1 className="mb-2 font-normal text-gray-500">{instructor}</h1>
        </div>
        <h2 className="mb-2 normal-case mx-5 font-semibold text-xl">{title}</h2>
        {[...Object.entries(others)].map(([key, value], index) => (
          <h3 className="mb-2 normal-case mx-5 text-gray-700" key={index}>
            {" "}
            {value}
          </h3>
        ))}
        <button className="m-5 bg-gray-800 hover:bg-black font-semibold px-3 py-2 rounded-lg text-sm text-white">
          More Information
        </button>
      </div>
    </section>
  );
}

export default CourseCard;
