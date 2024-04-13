import { StatsCardProps } from "@/interface";

export function StatsCard({ icon: Icon, count, title }: StatsCardProps) {
  return (
    <center className="items-center">
      <Icon className="h-7 w-7 text-gray-900" />
      <h1 className="mb-2 mt-4 text-5xl font-semibold">{count}</h1>
      <h3 className="mb-2 text-blue-gray-500 font-semibold">{title}</h3>
    </center>
  );
}

export default StatsCard;
