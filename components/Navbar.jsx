"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  const navItems = ["Home", "About", "Certification", "Projects", "Contact"];

  const getHref = (item) => {
    if (item === "Home") return "/";
    if (item === "About") return "/aboutme";
    if (item === "Certification") return "/certification";
    if (item === "Projects") return "/projects";
    if (item === "Contact") return "/contact";
    return `/${item.toLowerCase()}`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-teal-400/20 px-4 md:px-20 py-4 flex items-center justify-between">
      <Link href="/" className="text-white text-2xl font-bold" style={{ fontFamily: "Neue Machina" }}>
        <div>
          <span className="text-teal-400">Lakesh</span> Shrestha
        </div>
      </Link>

      <div className="hidden md:flex space-x-8 text-white font-medium">
        {navItems.map((item) => {
          const href = getHref(item);
          const isActive = pathname === href;

          return (
            <Link
              key={item}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`transition ${
                isActive ? "text-teal-400" : "hover:text-teal-400"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>

      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-[15rem] space-y-4 md:hidden rounded-2xl">
          <div className="w-full border-b border-gray-300 py-6c flex justify-center mt-[-50px]">
            <h1
              className="text-5xl border py-2 px-4"
              style={{ fontFamily: "Neue Machina" }}
            >
              Menu
            </h1>
          </div>

          {navItems.map((item) => {
            const href = getHref(item);
            const isActive = pathname === href;

            return (
              <Link
                key={item}
                href={href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`text-xl font-medium transition ${
                  isActive ? "text-teal-400" : "text-amber-50 hover:text-teal-400"
                }`}
                style={{ fontFamily: "Neue Machina" }}
              >
                {item}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
