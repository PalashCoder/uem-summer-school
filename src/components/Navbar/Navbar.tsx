import Image from "next/image";
import Link from "next/link";
import Nav from "@/data/nav.data";
import MobileMenu from "./mobile-menu";

const COMPANIES = ["Uemk", "IEM", "IemLabs", "IETE", "CSI"];
export function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white p-2-lg border-b border-gray-300 shadow-lg shadow-black/10">
      <div className="my-auto container min-w-md py-2 flex">
        <nav className="z-50 relative flex w-full">
          <div>
            <div className="flex items-center justify-center max-md:items-center max-md:px-10">
              {COMPANIES.map((logo, key) => (
                <Link href="/" key={key}>
                  <Image
                    src={`/logos/${logo}.png`}
                    height={70}
                    width={60}
                    priority={true}
                    alt={logo}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-1 max-md:hidden gap-10 font-medium justify-end mr-10 items-center">
            {Nav.map((item, index) => (
              <div key={index} className="hover:font-semibold">
                <Link href={`${item.link}`}>{item.nav}</Link>
              </div>
            ))}
          </div>
        </nav>
        {/* <MobileMenu /> */}
      </div>
    </div>
  );
}

export default Navbar;
