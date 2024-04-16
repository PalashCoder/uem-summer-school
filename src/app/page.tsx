import Footer from "../components/Footer/Footer.tsx";
import Navbar from "../components/Navbar/Navbar.tsx";
import AllCourses from "../components/Courses/AllCourses.tsx";
import CoursesCategories from "../components/Courses/CoursesCategories.tsx";
import Hero from "../components/Home/Hero.tsx";
import OurInstructors from "../components/Instructors/OurInstructors.tsx";
import PartnerCompanies from "../components/Partners/PartnerCompanies.tsx";
import Stats from "../components/Home/Stats.tsx";

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
