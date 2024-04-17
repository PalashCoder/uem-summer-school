import Image from "next/image";
import Link from "next/link";
import Nav from "@/data/nav.data";
import MobileMenu from "./mobile-menu";

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white p-2-lg border-b border-gray-300 shadow-lg shadow-black/10">
      <div className="my-auto container min-w-md py-2 flex">
        <nav className="z-50 relative flex w-full ">
          <div>
            <div className="item-center">
              <Link href="/">
                <Image
                  src="/logos/Uemk.png"
                  height={80}
                  width={80}
                  priority={true}
                  alt="UEMK Logo"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-1 max-md:hidden gap-14 font-medium mt-3 justify-end mr-10">
            {Nav.map((item, index) => (
              <div key={index} className="hover:font-semibold">
                <Link href={`${item.link}`}>{item.nav}</Link>
              </div>
            ))}
          </div>
        </nav>
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar;
