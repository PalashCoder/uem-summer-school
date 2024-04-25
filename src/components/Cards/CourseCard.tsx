import { CourseCardProps } from "@/interface";
import Image from "next/image";
import Link from "next/link";

export function CourseCard({
  img,
  instructor,
  title,
  link,
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
          className="h-60 w-full object-cover scale-[1.15] rounded-2xl"
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
        <div className="mb-4 flex">
          <Link
            href={link}
            target="_blank"
            className="m-4 border-solid border-[1px] text-black border-gray-900 hover:bg-black font-semibold px-3 py-2 rounded-lg text-sm hover:text-white"
          >
            More Information
          </Link>
          <Link href={"https://forms.gle/k6ywpcVUUf7exvju9"} target="_blank">
            <button className="my-4 mr-2 bg-blue-700 hover:bg-blue-800 font-semibold px-3 py-2 rounded-lg text-sm text-white">
              Enroll Here!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CourseCard;
