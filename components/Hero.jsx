import React from 'react'

const Hero = () => {
  return (
    <div 
      className="relative flex justify-center items-center h-screen w-full text-center flex-col overflow-hidden"
      style={{ top: 0, left: 0 }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-teal-400 via-transparent to-teal-400 opacity-20"
        style={{ pointerEvents: 'none' }}
      />

      <h1
        className="relative text-white text-3xl md:text-4xl font-normal"
        style={{ fontFamily: 'Neue Machina', lineHeight: '1.3' }}
      >
        Building{' '}
        <span className="italic text-teal-400">fast</span>,{' '}
        <span className="italic text-teal-400">modern</span>, and{' '}
        <span className="italic text-teal-400">scalable</span> web solutions.
        <br />
        <span className="block mt-4 font-semibold text-white">
          Lakesh Shrestha — Full Stack Developer
        </span>
      </h1>

      <p className="relative mt-4 text-gray-300 text-lg max-w-md">
        Welcome! Let’s create something amazing together.
      </p>

      <button
        className="relative mt-8 px-8 py-3 bg-teal-400 text-white rounded-md font-semibold hover:bg-teal-500 transition"
        type="button"
      >
        Hire Me Now
      </button>
    </div>
  )
}

export default Hero
