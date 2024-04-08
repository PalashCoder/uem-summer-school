import {
  Navbar as MTNavbar
} from "@material-tailwind/react";

export function Navbar() {

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="white"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6"
        >
            <center className="text-xl font-bold text-blue-gray-900">
              University of Engineering and Management, Kolkata
            </center>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
