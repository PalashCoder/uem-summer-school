import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
  days: string;
  time: string;
  mode: string;
  seat: string;
  duration: string;
}

export function CourseCard({
  img,
  tag,
  title,
  desc,
  label,
  time,
  days,
  mode,
  seat,
  duration,
}: CourseCardProps) {
  return (
    <Card className="border">
      <CardHeader className="h-64">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1]"
        />
      </CardHeader>
      <CardBody>
        <div className="flex items-center gap-2">
          <Typography
            variant="small"
            color="blue"
            className="mb-2 font-normal text-gray-500"
          >
            {tag}
          </Typography>
        </div>
        <Typography variant="h5" className="mb-2 normal-case">
          {title}
        </Typography>
        <Typography className="mb-1 font-normal !text-gray-500">
          {duration}
        </Typography>
        <Typography className="mb-1 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Typography className="mb-1 font-normal !text-gray-500">
          {time}
        </Typography>
        <Typography className="mb-1 font-normal !text-gray-500">
          {days}
        </Typography>
        <Typography className="mb-1 font-normal !text-gray-500">
          {mode}
        </Typography>
        <Typography className="mb-5 font-normal !text-gray-500">
          {seat}
        </Typography>
        <Button variant="outlined">{label}</Button>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
