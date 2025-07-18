"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-teal-400/20 px-4 md:px-20 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-white text-2xl font-bold" style={{ fontFamily: 'Neue Machina' }}>
        <span className="text-teal-400">Lakesh</span> Shrestha
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-white font-medium ">
        {["Home", "About", "Certification", "Projects", "Contact"].map((item) => (
          <Link
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="hover:text-teal-400 transition"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 w-full  bg-black bg-opacity-90 flex flex-col items-center py-[15rem] space-y-4 md:hidden rounded-2xl">
          <div className="w-full border-b border-gray-300 flex justify-center mt-[-50px]">
            <h1 className="text-5xl border py-2 px-4 " style={{ fontFamily: 'Neue Machina' }} >Menu</h1>
            
          </div>
          
          
          {["Home", "About", "Certification", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-amber-50 text-xl hover:text-teal-400 transition font-medium" style={{ fontFamily: 'Neue Machina' }} 
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
