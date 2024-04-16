import React from "react";
import AllCourses from "../Courses/AllCourses";
import OurInstructors from "../Instructors/OurInstructors";
import PartnerCompanies from "../Partners/PartnerCompanies";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <AllCourses />
      <OurInstructors />
      <PartnerCompanies />
      <Footer />
    </>
  );
};

export default Main;
