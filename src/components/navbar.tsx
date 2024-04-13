import Image from "next/image";

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white/70 p-2 backdrop-blur-lg">
      <div className="mx-auto container w-full">
        <nav className="z-50 relative">
          <center>
            <Image
              src="/logos/Uemk.png"
              height={100}
              width={100}
              priority={true}
              alt="UEMK Logo"
            />
          </center>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
