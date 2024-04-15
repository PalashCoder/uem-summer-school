const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 py-8 mt-20">
      <center className="container max-w-6xl flex flex-col mx-auto">
        <h1 className="md:text-center mt-2 !text-gray-700 font-bold">
          &copy; {CURRENT_YEAR} UEM-IEM Group
        </h1>
      </center>
    </footer>
  );
}

export default Footer;
