import React from 'react';
import Link from 'next/link';

const MyPortfolio = () => {
  return (
    <div 
      className="relative flex flex-col justify-center items-center min-h-[65vh] w-full text-center px-4 py-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-teal-400 via-transparent to-teal-400 opacity-20"
        style={{ pointerEvents: 'none' }}
      />

      <h2
        className="relative text-white text-3xl md:text-4xl font-bold mb-4"
        style={{ fontFamily: 'Neue Machina', lineHeight: '1.3' }}
      >
        My <span className="text-teal-400">Portfolio</span>
      </h2>

      <p className="relative text-gray-300 text-lg max-w-xl mb-8">
        Explore some of my recent works in graphic design and web development. Each project reflects creativity, precision, and a focus on user experience.
      </p>

      <div className="relative flex gap-4 mb-12">
        <a
              href="/Lakesh-Shrestha-Graphic-Designer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition">
              Graphic Design
          </a>

        <Link href="/projects" passHref>
          <button className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition cursor-pointer">
            Web Design
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyPortfolio;
