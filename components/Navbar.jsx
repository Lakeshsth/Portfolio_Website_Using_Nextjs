import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full px-4 md:px-20 py-4 flex justify-between items-center border-b backdrop-blur-md z-50"
    >
      <div className="font-bold text-2xl text-white">
        <span className="text-[#24cfa6]"> Lakesh </span> Shrestha
      </div>
      <div className="space-x-6 text-white hidden md:flex">
        <Link href="/" className="hover:text-gray-400 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-400 transition">
          About
        </Link>
        <Link href="/certification" className="hover:text-gray-400 transition">
          Certification
        </Link>
        <Link href="/projects" className="hover:text-gray-400 transition">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-gray-400 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
