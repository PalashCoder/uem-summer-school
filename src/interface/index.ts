export interface CourseCardProps {
  img: string;
  instructor: string;
  title: string;
  desc: string;
  days: string;
  time: string;
  mode: string;
  seat: string;
  duration: string;
  label: string;
}

export interface CategoryCardProps {
  img: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

export interface InstructorCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export interface StatsCardProps {
  icon: React.ElementType;
  count: string;
  title: string;
}