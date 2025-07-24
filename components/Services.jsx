import React from 'react'
import { FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa'

const Services = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-20 overflow-hidden text-white text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-transparent to-teal-400 opacity-10 pointer-events-none" />

      <h2
        className="relative text-3xl md:text-4xl font-normal mb-12"
        style={{ fontFamily: 'Neue Machina', lineHeight: '1.3' }}
      >
        Offering{' '}
        <span className="italic text-teal-400">creative</span>,{' '}
        <span className="italic text-teal-400">efficient</span>, and{' '}
        <span className="italic text-teal-400">reliable</span> solutions.
        <br />
        <span className="block mt-4 font-semibold text-white">What I Can Do</span>
      </h2>

      <div className="relative grid gap-10 md:grid-cols-3 text-left">
        <div className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg backdrop-blur-md transition duration-300">
          <FaLaptopCode className="text-teal-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Responsive Web Design</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            I design responsive, user-friendly websites that look great on all screen sizes using modern frameworks and clean code.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg backdrop-blur-md transition duration-300">
          <FaMobileAlt className="text-teal-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mobile-First Development</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Ensuring your site works perfectly on smartphones and tablets with mobile-first design principles and performance in mind.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg backdrop-blur-md transition duration-300">
          <FaPalette className="text-teal-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">UI/UX Prototyping</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Crafting beautiful, intuitive user interfaces and experiences using tools like Figma before coding begins.
          </p>
        </div>
        <div className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-lg backdrop-blur-md transition duration-300">
          <FaPalette className="text-teal-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Graphic Designing</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            With 3 years of experience in graphic design, I specialize in crafting beautiful and intuitive user interfaces and
            experiences—ensuring every design is user-focused before a single line of code is written.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
