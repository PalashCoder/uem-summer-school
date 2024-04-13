import { Footer, Navbar } from "@/components";
import AllCourses from "./allCourses";
import CoursesCategories from "./coursesCategories";
import Hero from "./hero";
import OurInstructors from "./ourInstructors";
import PartnerCompanies from "./partnerCompanies";
import Stats from "./stats";

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
