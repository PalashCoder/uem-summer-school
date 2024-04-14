import { Footer } from "@/components/Footer.tsx";
import { Navbar } from "@/components/Navbar.tsx";
import AllCourses from "./AllCourses.tsx";
import CoursesCategories from "./CoursesCategories.tsx";
import Hero from "./Hero.tsx";
import OurInstructors from "./OurInstructors.tsx";
import PartnerCompanies from "./PartnerCompanies.tsx";
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
