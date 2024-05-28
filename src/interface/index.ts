export interface CourseCardProps {
  img: string;
  instructor: string;
  title: string;
  link: string;
  desc: string;
  days: string;
  time: string;
  mode: string;
  seat: string;
  duration: string;
  fees: string;
  Last :string;
}

export interface CategoryCardProps {
  img: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

export interface InstructorCardProps {
  img: string;
  Instructor: string;
  Designation: string;
  Company: string;
}

export interface StatsCardProps {
  icon: React.ElementType;
  count: string;
  title: string;
}
