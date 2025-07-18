import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative py-10 px-6 md:px-20 text-white text-center border border-gray-600">
      <div
        className="absolute inset-0 bg-gradient-to-r from-teal-400 via-transparent to-teal-400 opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold" style={{ fontFamily: 'Neue Machina' }}>
          <span className="text-teal-400">Lakesh</span> Shrestha
        </div>

        <nav className="space-x-6 text-white hidden md:flex">
          <Link href="/" className="hover:text-teal-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-teal-400 transition">
            About
          </Link>
          <Link href="/certification" className="hover:text-teal-400 transition">
            Certification
          </Link>
          <Link href="/projects" className="hover:text-teal-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-teal-400 transition">
            Contact
          </Link>
        </nav>

        <div className="flex space-x-6 text-teal-400 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-white transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="relative mt-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} Lakesh Shrestha. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
