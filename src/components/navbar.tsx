import { Navbar as MTNavbar } from "@material-tailwind/react";

export function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="mx-auto container w-full">
        <MTNavbar blurred color="white" className="z-50 relative">
          <center className="text-xl font-bold text-blue-gray-900">
            University of Engineering and Management, Kolkata
          </center>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
