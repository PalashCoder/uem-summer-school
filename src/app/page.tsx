import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import OutImpressiveStats from "./out-impressive-stats";
import CoursesCategories from "./courses-categories";
import ExploreCourses from "./explore-courses";
import StudentsFeedback from "./students-feedback";
import TrustedCompany from "./trusted-companies";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OutImpressiveStats />
      <CoursesCategories />
      <ExploreCourses />
      <StudentsFeedback />
      <TrustedCompany />
      <Footer />
    </>
  );
}
