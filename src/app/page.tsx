import { Footer } from "@/components/Footer.tsx";
import { Navbar } from "@/components/Navbar.tsx";
import AllCourses from "./AllCourses";
import CoursesCategories from "./CoursesCategories";
import Hero from "./Hero";
import OurInstructors from "./OurInstructors";
import PartnerCompanies from "./PartnerCompanies";
import Stats from "./Stats";

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
