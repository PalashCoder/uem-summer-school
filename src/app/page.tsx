import { Footer, Navbar } from "@/components";
import AllCourses from "./AllCourses";
import CoursesCategories from "./CoursesCategories";
import Hero from "./Hero";
import OurInstructors from "./OurInstructors";
import PartnerCompanies from "./PartnerCompanies";
import Stats from "./Stats.tsx";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <CoursesCategories />
      <AllCourses />
      <OurInstructors />
      <PartnerCompanies />
      <Footer />
    </>
  );
}
