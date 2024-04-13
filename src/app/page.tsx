import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import Stats from "./stats";
import CoursesCategories from "./coursesCategories";
import AllCourses from "./allCourses";
import OurInstructors from "./ourInstructors";
import PartnerCompanies from "./partnerCompanies";

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
