"use client";

import React from "react";

const Certification = () => {
  return (
    <section className="relative flex flex-col justify-center items-center w-full py-50 px-6 md:px-20 text-white text-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-gradient-to-r from-teal-400 via-transparent to-teal-400 opacity-20"
        style={{ pointerEvents: "none" }}
      />

      <h2
        className="relative text-3xl md:text-4xl font-normal mb-12"
        style={{ fontFamily: "Neue Machina", lineHeight: "1.3" }}
      >
        Certified with{" "}
        <span className="italic text-teal-400">knowledge</span>,{" "}
        <span className="italic text-teal-400">skills</span>, and{" "}
        <span className="italic text-teal-400">growth</span>.
        <br />
        <span className="block mt-4 font-semibold text-white">My Certifications</span>
      </h2>

      <div className="relative grid gap-10 md:grid-cols-2 grid-cols-1 place-items-center justify-center text-left max-w-6xl mx-auto z-10">
        <a
          href="Hackathon.JPG"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg backdrop-blur-md transition duration-300 hover:scale-105 transform w-full max-w-sm"
        >
          <h3 className="text-xl font-semibold mb-2">Hackathon</h3>
          <p className="text-gray-300 text-sm mb-4">From National College of Engineering</p>
          <p className="text-teal-400 underline cursor-pointer">View Certificate</p>
        </a>
      </div>
    </section>
  );
};

export default Certification;
